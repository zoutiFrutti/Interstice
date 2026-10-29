import { chromium } from "playwright";
import { mkdir,writeFile } from "node:fs/promises";
const base=process.env.QA_BASE_URL||"http://127.0.0.1:8765";
await mkdir("visual-qa",{recursive:true});
const testRow={
 id:"f6118ea3-25aa-4f24-8824-e9012ea02a75",
 title:"Projet de fiche sur les ateliers coopératifs",
 theme:"Éducation et transmission",
 intention:"Décrire un atelier partagé, sans prétendre vérifier ses affirmations.",
 body:"Ce texte est strictement fictif. <img src=x onerror=window.__unsafe=true> Il ne doit jamais être exécuté.\n\nUne proposition n'est pas une publication.",
 sources:"javascript:alert('xss')\nRéférence fictive non vérifiée.",
 status:"pending",created_at:"2026-10-29T18:00:00Z",review_note:null
};
const shim=`window.__previewStats={moderator:true,reads:0,decisions:0,signOuts:0};
window.supabase={createClient:()=>{
  const record=${JSON.stringify(testRow)};
  window.__moderationTestRow=record;
  const auth={
    getSession:async()=>({data:{session:{access_token:"test-only"}}}),
    signInWithPassword:async()=>({error:null}),
    signOut:async()=>{window.__previewStats.signOuts++;window.__previewStats.moderator=false;window.__triggerSignOut?.();return {error:null}},
    onAuthStateChange:(fn)=>{window.__triggerSignOut=()=>fn("SIGNED_OUT");return {data:{subscription:{unsubscribe(){}}}}}
  };
  return {
    auth,
    rpc:async(name)=>{
      if(name==="is_moderator")return {data:window.__previewStats.moderator,error:null};
      if(name==="review_wiki_article"){window.__previewStats.decisions++;return {data:false,error:{message:"stub"}}}
      throw new Error("Unexpected RPC in fixture")
    },
    from:(name)=>{
      if(name!=="wiki_article_submissions")throw new Error("Unexpected table");
      return {
        select(){return this},
        in(){return this},
        order(){return this},
        async limit(){window.__previewStats.reads++;return {data:[record],error:null}}
      };
    }
  };
}};`;
const browser=await chromium.launch({headless:true});
const checks=[];
try {
 for(const view of [{name:"mobile",width:390,height:844},{name:"desktop",width:1280,height:800}]){
  const context=await browser.newContext({viewport:{width:view.width,height:view.height},reducedMotion:"reduce"});
  const page=await context.newPage();
  const errors=[],otherApi=[];
  await page.route("**/supabase.min.js",route=>route.fulfill({status:200,contentType:"application/javascript",body:shim}));
  page.on("request",request=>{if(request.url().includes(".supabase.co"))otherApi.push(request.url())});
  page.on("pageerror",e=>errors.push(e.message));
  const res=await page.goto(base+"/revue-articles-wiki.html",{waitUntil:"networkidle"});
  const btn=page.locator(".private-preview-trigger");
  await btn.waitFor({state:"visible",timeout:10000});
  await btn.click();
  const diagnostic=await page.evaluate(()=>({
    open:document.querySelector("#private-preview-dialog")?.open,
    message:document.querySelector("#message")?.textContent,
    content:document.querySelector("#private-preview-content")?.textContent?.slice(0,350),
    hasModule:!!document.querySelector(".fiche-rendue"),
    stats:window.__previewStats
  }));
  console.log("MODERATION_TEST_DIAGNOSTIC "+JSON.stringify({diagnostic,errors}));
  try {await page.locator("#private-preview-dialog[open]").waitFor({state:"visible",timeout:5500})}
  catch(error){
    const after=await page.evaluate(()=>({
      message:document.querySelector("#message")?.textContent,
      content:document.querySelector("#private-preview-content")?.textContent?.slice(0,500),
      open:document.querySelector("#private-preview-dialog")?.open,
      stats:window.__previewStats
    }));
    const direct=await page.evaluate(async()=>{
      try{
        const module=await import("/design-system/moderation-preview.mjs");
        const host=document.createElement("div");
        document.body.append(host);
        const result=module.renderModeratorPreview(window.__moderationTestRow,host);
        const view={result,hasFiche:!!host.querySelector(".fiche-rendue")};
        host.remove();
        return view;
      }catch(e){return {error:String(e.message),stack:String(e.stack).slice(0,750)}}
    });
    console.log("MODERATION_AFTER_WAIT "+JSON.stringify({after,errors,direct}));
    throw error;
  }
  const snap=await page.evaluate(()=>{
    const modal=document.querySelector("#private-preview-dialog");
    const title=modal.querySelector("h1");
    const out=modal.querySelector(".fiche-rendue");
    return{
      title:title?.textContent,
      typedBody:out?.textContent.includes("<img src=x onerror"),
      imageCount:out?.querySelectorAll("img").length,
      jsLinks:[...out.querySelectorAll("a[href]")].filter(a=>a.getAttribute("href")?.startsWith("javascript:")).length,
      state:out?.querySelector(".fiche-state")?.textContent,
      width:Math.round(title?.getBoundingClientRect().width||0),
      modalWidth:Math.round(modal.getBoundingClientRect().width),
      viewportWidth:innerWidth,
      overflow:document.documentElement.scrollWidth>innerWidth+1,
      overflowElements:[...document.querySelectorAll("body *")].filter(el=>el.getBoundingClientRect().right>innerWidth+1).slice(0,8).map(el=>({tag:el.tagName,className:typeof el.className==="string"?el.className:"",right:Math.round(el.getBoundingClientRect().right)})),
      decisions:window.__previewStats.decisions,
      reads:window.__previewStats.reads,
      nativeDialogOpen:modal.open,
      codeExecuted:window.__unsafe===true
    }
  });
  checks.push({name:"Aperçu privé simulé "+view.name,ok:res.status()===200&&snap.title===testRow.title&&snap.typedBody&&!snap.imageCount&&!snap.jsLinks&&snap.state?.includes("non validé")&&snap.width>200&&!snap.overflow&&snap.decisions===0&&snap.reads===1&&!snap.codeExecuted&&snap.modalWidth<=view.width&&errors.length===0&&otherApi.length===0,detail:{...snap,errors,otherApi}});
  await page.screenshot({path:"visual-qa/moderation-apercu-"+view.name+".png",fullPage:false});
  const focusTrapped=await page.evaluate(()=>{
    const modal=document.querySelector("#private-preview-dialog");
    return modal.open&&modal.contains(document.activeElement);
  });
  checks.push({name:"Focus clavier dans la fenêtre "+view.name,ok:focusTrapped});
  await page.keyboard.press("Escape");
  await page.waitForFunction(()=>!document.querySelector("#private-preview-dialog").open&&!document.querySelector("#private-preview-content").children.length);
  checks.push({name:"Échap ferme et efface la fenêtre "+view.name,ok:await page.evaluate(()=>
    !document.querySelector("#private-preview-dialog").open&&
    !document.querySelector("#private-preview-content").children.length)});
  await btn.click();
  await page.locator("#private-preview-dialog[open]").waitFor({state:"visible"});
  await page.locator("#private-preview-close").click();
  await page.waitForFunction(()=>!document.querySelector("#private-preview-dialog").open&&!document.querySelector("#private-preview-content").children.length,{timeout:5000});
  checks.push({name:"Effacement à la fermeture "+view.name,ok:await page.evaluate(()=>!document.querySelector("#private-preview-dialog").open&&!document.querySelector("#private-preview-content").children.length)});
  if(view.name==="mobile"){
    await btn.click();
    await page.locator("#private-preview-dialog[open]").waitFor({state:"visible"});
    // Une modale native interdit, correctement, de cliquer le bouton en arrière-plan.
    // Tester la révocation de session dans un autre onglet via l'événement Auth.
    await page.evaluate(()=>window.__triggerSignOut?.());
    checks.push({name:"Déconnexion distante efface l'aperçu ouvert",ok:await page.evaluate(()=>
      !document.querySelector("#private-preview-dialog").open&&
      !document.querySelector("#private-preview-content").children.length&&
      !document.querySelector("#queue").children.length)});
  }else{
    await page.locator("#logout").click();
    checks.push({name:"Déconnexion classique efface la file",ok:await page.evaluate(()=>
      !document.querySelector("#private-preview-dialog").open&&
      !document.querySelector("#private-preview-content").children.length&&
      !document.querySelector("#queue").children.length&&
      window.__previewStats.signOuts===1)});
  }
  // Refus d'accès : la file doit être absente dès l'ouverture pour un faux non-modérateur.
  const denied=await context.newPage();
  await denied.route("**/supabase.min.js",route=>route.fulfill({
    status:200,contentType:"application/javascript",
    body:shim.replace("moderator:true,reads:0","moderator:false,reads:0")
  }));
  await denied.goto(base+"/revue-articles-wiki.html",{waitUntil:"networkidle"});
  const deniedState=await denied.evaluate(()=>({
    panelHidden:document.querySelector("#panel").classList.contains("hidden"),
    queueCount:document.querySelector("#queue").children.length,
    triggers:document.querySelectorAll(".private-preview-trigger").length,
    reads:window.__previewStats.reads
  }));
  checks.push({name:"Sans rôle : file et aperçu interdits "+view.name,
    ok:deniedState.panelHidden&&deniedState.queueCount===0&&deniedState.triggers===0&&deniedState.reads===0,
    detail:deniedState});
  await denied.close();

  if(view.name==="desktop"){
    // Une autorisation révoquée avant le clic doit effacer la file déjà présente.
    const revoked=await context.newPage();
    await revoked.route("**/supabase.min.js",route=>route.fulfill({
      status:200,contentType:"application/javascript",body:shim
    }));
    await revoked.goto(base+"/revue-articles-wiki.html",{waitUntil:"networkidle"});
    const revocationBtn=revoked.locator(".private-preview-trigger");
    await revocationBtn.waitFor({state:"visible"});
    await revoked.evaluate(()=>{window.__previewStats.moderator=false});
    await revocationBtn.click();
    await revoked.waitForFunction(()=>document.querySelector("#message").textContent.includes("Accès modération requis"));
    const revokedState=await revoked.evaluate(()=>({
      queueCount:document.querySelector("#queue").children.length,
      panelHidden:document.querySelector("#panel").classList.contains("hidden"),
      dialogOpen:document.querySelector("#private-preview-dialog").open
    }));
    checks.push({name:"Rôle révoqué au clic : aucune donnée conservée",
      ok:revokedState.queueCount===0&&revokedState.panelHidden&&!revokedState.dialogOpen,
      detail:revokedState});
    await revoked.close();

    // Une lecture asynchrone déclenchée avant une déconnexion ne doit jamais repeupler la file.
    const delayed=await context.newPage();
    const slowShim=shim.replace("moderator:true,reads:0","moderator:true,holdRead:true,reads:0")
      .replace("window.__previewStats.reads++;return {data:[record],error:null}",
        "window.__previewStats.reads++;if(window.__previewStats.holdRead)await new Promise(resolve=>window.__releaseRead=resolve);return {data:[record],error:null}");
    await delayed.route("**/supabase.min.js",route=>route.fulfill({
      status:200,contentType:"application/javascript",body:slowShim
    }));
    await delayed.goto(base+"/revue-articles-wiki.html",{waitUntil:"networkidle"});
    await delayed.waitForFunction(()=>typeof window.__releaseRead==="function");
    await delayed.evaluate(()=>{window.__triggerSignOut?.();window.__releaseRead()});
    await delayed.waitForTimeout(100);
    const afterExit=await delayed.evaluate(()=>({
      queueCount:document.querySelector("#queue").children.length,
      panelHidden:document.querySelector("#panel").classList.contains("hidden"),
      previewPresent:!!document.querySelector(".private-preview-trigger")
    }));
    checks.push({name:"Déconnexion pendant chargement : aucune résurrection de la file",
      ok:afterExit.queueCount===0&&afterExit.panelHidden&&!afterExit.previewPresent,
      detail:afterExit});
    await delayed.close();
  }
  await context.close();
 }
}finally{await browser.close()}
await writeFile("visual-qa/moderation-report.json",JSON.stringify({checks},null,2));
for(const check of checks)console.log((check.ok?"PASS ":"FAIL ")+check.name+(check.ok?"":": "+JSON.stringify(check.detail||{}).slice(0,800)));
if(checks.some(x=>!x.ok))process.exitCode=1;
