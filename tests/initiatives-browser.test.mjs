import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {mkdir} from "node:fs/promises";
import {chromium} from "playwright";

const BASE=process.env.INTERSTICE_TEST_URL||"http://127.0.0.1:8000";
const PAGE=BASE+"/decouvrir-initiatives.html";

test("parcours mobile : commune, besoin, fiche, retour, absence de fuite réseau",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844},acceptDownloads:true});
 const requests=[],errors=[];
 page.on("request",req=>requests.push(req.url()));
 page.on("pageerror",err=>errors.push(err.message));
 try{
  await mkdir("artifacts",{recursive:true});
  await page.goto(PAGE,{waitUntil:"networkidle"});
  await page.locator(".initiative-card").first().waitFor();
  assert.equal(await page.locator(".initiative-card").count(),7);
  assert.ok((await page.locator(".demo-notice").innerText()).includes("FICTIF"));
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),"Aucun défilement horizontal à 390px");
  await page.screenshot({path:"artifacts/initiatives-mobile-liste.png",fullPage:true});

  await page.locator("#commune").fill("Gaillac");
  assert.equal(await page.locator(".initiative-card").count(),3);
  await page.locator("#category").selectOption({label:"Réparation"});
  assert.equal(await page.locator(".initiative-card").count(),1);
  await page.locator("#objet").fill("pied");
  await page.locator("#scope").selectOption("besoin");
  assert.equal(await page.locator(".initiative-card").count(),1);
  assert.match(await page.locator(".match-reasons").innerText(),/Besoin : Pied d'atelier/);
  assert.match(await page.locator(".match-reasons").innerText(),/Territoire : Gaillac/);

  await page.locator(".initiative-card a").click();
  assert.equal(await page.locator("#detail h2").innerText(),"Les vélos en partage");
  assert.ok(new URL(page.url()).searchParams.get("initiative")==="demo-cycles");
  assert.ok(await page.locator("#detail h2").evaluate(e=>document.activeElement===e));
  assert.match(await page.locator("#detail").innerText(),/Aucun contact réel/);
  await page.screenshot({path:"artifacts/initiatives-mobile-fiche.png",fullPage:true});

  await page.evaluate(()=>{window.__printWasCalled=false;window.print=()=>{window.__printWasCalled=true;};});
  await page.locator("#print-fiche").click();
  assert.equal(await page.evaluate(()=>window.__printWasCalled),true);
  await page.locator("#back").click();
  assert.equal(await page.locator(".initiative-card").count(),1);
  assert.equal(await page.locator("#commune").inputValue(),"Gaillac");

  await page.locator("#clear").click();
  assert.equal(await page.locator(".initiative-card").count(),7);
  await page.locator("#commune").fill("Nullepart");
  assert.equal(await page.locator(".initiative-card").count(),0);
  assert.equal(await page.locator("#no-results").isVisible(),true);
  assert.equal(await page.locator("#export-demo").isDisabled(),true);
  await page.locator("#clear-empty").click();
  assert.equal(await page.locator(".initiative-card").count(),7);

  const otherOrigins=requests.filter(u=>!u.startsWith(BASE+"/")&&!u.startsWith("data:"));
  assert.deepEqual(otherOrigins,[],"Aucune requête vers des sites tiers");
  assert.deepEqual(errors,[],"Aucune erreur JavaScript");
 }finally{await page.close();await browser.close();}
});

test("export JSON contient seulement la liste filtrée, sans contact",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844},acceptDownloads:true});
 try{
  await page.goto(PAGE);
  await page.locator(".initiative-card").first().waitFor();
  await page.locator("#commune").fill("Rabastens");
  await page.locator("#category").selectOption({label:"Culture"});
  assert.equal(await page.locator(".initiative-card").count(),1);
  const downloadP=page.waitForEvent("download");
  await page.locator("#export-demo").click();
  const downloaded=await downloadP;
  assert.equal(downloaded.suggestedFilename(),"interstice-exemples-fictifs.json");
  const filename=await downloaded.path();
  const json=JSON.parse(await readFile(filename,"utf8"));
  assert.equal(json.fictional,true);
  assert.deepEqual(json.entries.map(x=>x.id),["demo-couture"]);
  assert.ok(!/address|phone|publicContact|privateEmail|longitude|latitude/.test(JSON.stringify(json)));
 }finally{await page.close();await browser.close();}
});

test("adresse invalide récupérable, lien profond correct et page sans JavaScript",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  const page=await browser.newPage({viewport:{width:360,height:740}});
  await page.goto(PAGE+"?initiative=inconnue");
  await page.locator(".initiative-card").first().waitFor();
  assert.equal(await page.locator("#invalid-route").isVisible(),true);
  assert.equal(new URL(page.url()).searchParams.has("initiative"),false);
  await page.goto(PAGE+"?initiative=demo-jardin");
  await page.locator("#detail h2").waitFor();
  assert.equal(await page.locator("#detail h2").innerText(),"Le jardin qu'on imagine");
  await page.close();
  const noJsContext=await browser.newContext({javaScriptEnabled:false});
  const noJs=await noJsContext.newPage();
  await noJs.goto(PAGE);
  assert.equal(await noJs.getByRole("heading",{name:"Sans JavaScript"}).count(),1);
  assert.ok((await noJs.locator("noscript").innerText()).includes("participer"));
  await noJsContext.close();
 }finally{await browser.close();}
});

test("simulation mobile : besoin, offre, territoire, correspondances explicables et aucun envoi",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 const errors=[],requests=[];
 page.on("pageerror",e=>errors.push(e.message));
 page.on("request",r=>requests.push(r.url()));
 try{
  await mkdir("artifacts",{recursive:true});
  await page.goto(PAGE,{waitUntil:"networkidle"});
  await page.locator("#simulation-go").click();
  assert.equal(await page.locator("#simulation-results .initiative-card").count(),1);
  assert.match(await page.locator("#simulation-results .match-reasons").innerText(),/Ressource imaginée : Perceuse/);
  assert.ok((await page.locator("#simulation-message").innerText()).includes("fictive"));
  await page.screenshot({path:"artifacts/initiatives-mobile-simulation.png",fullPage:true});
  await page.locator("#simulation-kind").selectOption("offre");
  assert.equal(await page.locator("#simulation-results .initiative-card").count(),0);
  await page.locator("#simulation-object").selectOption("stockage");
  await page.locator("#simulation-territory").selectOption("Gaillac");
  await page.locator("#simulation-go").click();
  assert.equal(await page.locator("#simulation-results .initiative-card").count(),1);
  assert.match(await page.locator("#simulation-results .match-reasons").innerText(),/Besoin imaginé : Stockage/);
  await page.locator("#simulation-territory").selectOption("Rabastens");
  await page.locator("#simulation-go").click();
  assert.equal(await page.locator("#simulation-results .initiative-card").count(),0);
  assert.match(await page.locator("#simulation-message").innerText(),/Aucun exemple/);
  await page.locator("#simulation-reset").click();
  assert.equal(await page.locator("#simulation-kind").inputValue(),"besoin");
  assert.equal(await page.locator("#simulation-object").inputValue(),"perceuse");
  assert.equal(await page.locator("#simulation-message").innerText(),"");
  assert.deepEqual(requests.filter(url=>!url.startsWith(BASE+"/")&&!url.startsWith("data:")),[]);
  assert.deepEqual(errors,[]);
 }finally{await page.close();await browser.close();}
});

test("retour au lien d'origine : clavier, simulation, navigateur précédent",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:360,height:740}});
 try{
  await page.goto(PAGE);
  await page.locator("#results a[data-id]").first().waitFor();
  await page.locator("#results a[data-id]").first().focus();
  await page.keyboard.press("Enter");
  await page.locator("#detail h2").waitFor();
  assert.equal(await page.locator("#detail h2").evaluate(x=>document.activeElement===x),true);
  await page.locator("#back").click();
  assert.equal(await page.locator('#results a[data-id="demo-jardin"]').evaluate(x=>document.activeElement===x),true);
  await page.locator("#simulation-go").click();
  await page.locator("#simulation-results a[data-id]").first().focus();
  await page.keyboard.press("Enter");
  await page.locator("#detail h2").waitFor();
  await page.goBack();
  await page.locator("#explorer").waitFor({state:"visible"});
  assert.equal(await page.locator('#simulation-results a[data-id="demo-outils"]').evaluate(x=>document.activeElement===x),true);
 }finally{await page.close();await browser.close();}
});

test("tailles d'écran : aucune colonne débordante de 320px à 1024px",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage();
 try{
  await page.goto(PAGE);
  await page.locator(".initiative-card").first().waitFor();
  for(const width of [320,360,390,768,1024]){
   await page.setViewportSize({width,height:780});
   const state=await page.evaluate(()=>({outer:document.documentElement.scrollWidth,inner:window.innerWidth}));
   assert.ok(state.outer<=state.inner,"Débordement horizontal à "+width+"px : "+JSON.stringify(state));
  }
  await page.locator("#simulation-go").click();
  for(const width of [320,390,768]){
   await page.setViewportSize({width,height:780});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),"Débordement simulation à "+width);
  }
 }finally{await page.close();await browser.close();}
});

test("Carte des communs / possibles : listes et points synchronisés sur mobile et ordinateur",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,1280]){
   const page=await browser.newPage({viewport:{width,height:850}});
   const requests=[],errors=[];
   page.on("request",r=>requests.push(r.url()));
   page.on("pageerror",e=>errors.push(e.message));
   try{
    await mkdir("artifacts",{recursive:true});
    await page.goto(PAGE,{waitUntil:"networkidle"});
    await page.locator("#results .initiative-card").first().waitFor();
    assert.equal(await page.locator("#results .initiative-card").count(),7);
    await page.locator("#display-map").click();
    assert.equal(await page.locator("#map-panel").isVisible(),true);
    assert.equal(await page.locator("#municipality-map .map-marker").count(),4);
    await page.screenshot({path:"artifacts/cartes-communs-"+width+".png",fullPage:true});
    await page.locator('#municipality-map [data-commune="Gaillac"]').focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("#commune").inputValue(),"Gaillac");
    await page.locator("#display-list").click();
    assert.equal(await page.locator("#results .initiative-card").count(),3);
    await page.locator("#clear").click();
    await page.locator("#reading-possibles").click();
    assert.equal(await page.locator("#results .initiative-card").count(),4);
    await page.locator("#display-map").click();
    assert.equal(await page.locator("#municipality-map .map-marker").count(),3);
    await page.screenshot({path:"artifacts/cartes-possibles-"+width+".png",fullPage:true});
    await page.locator('#municipality-map [data-commune="Gaillac"]').click();
    await page.locator("#display-list").click();
    assert.equal(await page.locator("#results .initiative-card").count(),2);
    await page.locator('#results a[data-id="demo-projet-gaillac"]').click();
    assert.equal(await page.locator("#detail h2").innerText(),"Une rencontre de réparation à inventer");
    await page.goBack();
    assert.equal(await page.locator("#results .initiative-card").count(),2);
    await page.locator("#display-map").click();
    await page.locator("#map-zoom-in").click();
    assert.notEqual(await page.locator("#municipality-map").getAttribute("viewBox"),"0 0 760 420");
    await page.locator("#map-zoom-reset").click();
    assert.equal(await page.locator("#municipality-map").getAttribute("viewBox"),"0 0 760 420");
    await page.locator("#commune").fill("commune-inconnue");
    assert.equal(await page.locator("#municipality-map .map-marker").count(),0);
    assert.equal(await page.locator("#count").innerText(),"0 fiche fictive trouvée");
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),"Débordement "+width);
    assert.deepEqual(requests.filter(u=>!u.startsWith(BASE+"/")&&!u.startsWith("data:")),[]);
    assert.deepEqual(errors,[]);
   }finally{await page.close();}
  }
 }finally{await browser.close();}
});

test("si le module cartographique ne charge pas, la liste complète reste consultable",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 try{
  await page.route("**/cartes-map.mjs",route=>route.abort());
  await page.goto(PAGE);
  await page.locator("#results .initiative-card").first().waitFor();
  await page.locator("#map-fallback").waitFor({state:"visible"});
  assert.equal(await page.locator("#results .initiative-card").count(),7);
  assert.equal(await page.locator("#display-map").isDisabled(),true);
  assert.equal(await page.locator("#list-panel").isVisible(),true);
  await page.locator("#reading-possibles").click();
  assert.equal(await page.locator("#results .initiative-card").count(),4);
 }finally{await page.close();await browser.close();}
});

test("014: tests graphiques intégrés PR35 en 390px / 1280px, quatre modes et repères lisibles",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,1280]){
   const page=await browser.newPage({viewport:{width,height:844},reducedMotion:"reduce"});
   const errors=[];page.on("pageerror",e=>errors.push(e.message));
   try{
    await mkdir("artifacts",{recursive:true});
    await page.goto(PAGE,{waitUntil:"networkidle"});
    await page.locator(".initiative-card").first().waitFor();
    for(const reading of ["communs","possibles"]){
     await page.locator("#reading-"+reading).click();
     const total=reading==="communs"?7:4;
     await page.locator("#display-list").click();
     assert.equal(await page.locator("#results .initiative-card").count(),total);
     await page.locator("#display-map").click();
     const metrics=await page.evaluate(()=>{
      const selectors=["#filters input","#filters select","#filters button",".map-readings button",".map-display button","#map-panel button"];
      const controls=selectors.flatMap(s=>[...document.querySelectorAll(s)]).filter(e=>e.getClientRects().length).map(e=>({
       height:e.getBoundingClientRect().height,font:parseFloat(getComputedStyle(e).fontSize)
      }));
      const texts=[...document.querySelectorAll("#municipality-map .map-marker-label")].map(x=>x.textContent);
      return {width:document.documentElement.scrollWidth,viewport:innerWidth,controls,
       markers:document.querySelectorAll("#municipality-map .map-marker").length,texts,
       design:!![...document.styleSheets].some(s=>s.href?.endsWith("/cartes-design.css"))};
     });
     assert.ok(metrics.design,"Fichier Graphiste non chargé");
     assert.ok(metrics.width<=metrics.viewport+1,"Débordement "+width+" "+reading);
     assert.ok(metrics.controls.every(c=>c.height>=52&&c.font>=18),"Contrôle trop petit "+JSON.stringify(metrics.controls.filter(c=>c.height<52||c.font<18)));
     assert.ok(metrics.markers>=2);
     assert.ok(metrics.texts.every(s=>s.length>1));
     assert.equal(await page.locator('.map-readings button[aria-pressed="true"]').count(),1);
     assert.equal(await page.locator('.map-display button[aria-pressed="true"]').count(),1);
     await page.screenshot({path:"artifacts/014-"+reading+"-carte-"+width+".png",fullPage:true});
     await page.locator("#display-list").click();
     await page.screenshot({path:"artifacts/014-"+reading+"-liste-"+width+".png",fullPage:true});
    }
    assert.deepEqual(errors,[]);
   }finally{await page.close();}
  }
 }finally{await browser.close();}
});
test("014: fiche sans localisation dans la vue carte, navigation clavier et retour",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 try{
  await page.route("**/cartes-data.mjs",async route=>{
   const response=await route.fetch();
   const body=await response.text();
   const anchor="...others].map(item=>Object.freeze({";
   assert.ok(body.includes(anchor));
   await route.fulfill({body:body.replace(anchor,
    '...others,{...others[0],id:"demo-sans-localisation",title:"Exemple sans commune",territories:[],locationLevel:"none"}].map(item=>Object.freeze({'),contentType:"text/javascript"});
  });
  await page.goto(PAGE,{waitUntil:"networkidle"});
  await page.locator("#results .initiative-card").first().waitFor();
  assert.equal(await page.locator("#results .initiative-card").count(),8);
  await page.locator("#display-map").click();
  assert.equal(await page.locator("#map-unlocated").isVisible(),true);
  assert.equal(await page.locator("#map-unlocated-results .initiative-card").count(),1);
  assert.equal(await page.locator("#municipality-map .map-marker").count(),4);
  await page.locator('#map-unlocated-results a[data-id="demo-sans-localisation"]').focus();
  await page.keyboard.press("Enter");
  assert.equal(await page.locator("#detail h2").innerText(),"Exemple sans commune");
  assert.ok(await page.locator("#detail h2").evaluate(e=>document.activeElement===e));
  await page.locator("#back").click();
  assert.ok(await page.locator("#map-unlocated-results a").evaluate(e=>document.activeElement===e));
 }finally{await page.close();await browser.close();}
});
test("014: filtres cumulés puis commune sur SVG, liste, état vide et URL invalide",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 try{
  await page.goto(PAGE,{waitUntil:"networkidle"});
  await page.locator("#reading-possibles").click();
  await page.locator("#category").selectOption("Réparation");
  await page.locator("#objet").fill("Outils");
  await page.locator("#scope").selectOption("besoin");
  assert.deepEqual(await page.locator("#results a[data-id]").evaluateAll(es=>es.map(x=>x.dataset.id)),["demo-projet-gaillac"]);
  await page.locator("#display-map").click();
  assert.equal(await page.locator("#municipality-map .map-marker").count(),2);
  await page.locator('#municipality-map [data-commune="Gaillac"]').focus();
  await page.keyboard.press("Enter");
  assert.equal(await page.locator("#display-list").getAttribute("aria-pressed"),"true");
  assert.equal(await page.locator("#results .initiative-card").count(),1);
  await page.locator("#commune").fill("Nullepart");
  assert.equal(await page.locator("#results .initiative-card").count(),0);
  await page.locator("#display-map").click();
  assert.equal(await page.locator("#municipality-map .map-marker").count(),0);
  await page.locator("#clear").click();
  await page.goto(PAGE+"?initiative=introuvable");
  await page.locator("#invalid-route").waitFor({state:"visible"});
  assert.ok(await page.locator("#invalid-route").evaluate(e=>document.activeElement===e));
 }finally{await page.close();await browser.close();}
});

test("014: boutons de communes sous les repères SVG, accessibles au toucher et synchronisés",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 try{
  await page.goto(PAGE,{waitUntil:"networkidle"});
  await page.locator("#display-map").click();
  assert.equal(await page.locator("#map-commune-buttons button").count(),4);
  const gaillac=page.locator('#map-commune-buttons [data-commune="Gaillac"]');
  assert.ok(await gaillac.evaluate(e=>e.getBoundingClientRect().height>=54));
  await gaillac.focus();await page.keyboard.press("Enter");
  assert.equal(await page.locator("#commune").inputValue(),"Gaillac");
  assert.equal(await page.locator("#display-list").getAttribute("aria-pressed"),"true");
  assert.equal(await page.locator("#results .initiative-card").count(),3);
  await page.locator("#reading-possibles").click();
  await page.locator("#display-map").click();
  assert.equal(await page.locator("#map-commune-buttons button").count(),2,"Filtre Gaillac conservé entre les deux lectures");
  await page.locator("#map-clear-commune").click();
  assert.equal(await page.locator("#map-commune-buttons button").count(),3,"Sans filtre, trois communes dans les possibles");
  assert.equal(await page.locator("#commune").inputValue(),"");
 }finally{await page.close();await browser.close();}
});

test("015: aucun secret fictif injecté dans URL, DOM, erreurs, exports ni métadonnées",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844},acceptDownloads:true});
 const secret="CANARY_SECRET_015";
 const errors=[];
 page.on("pageerror",error=>errors.push(error.message));
 try{
  await page.route("**/cartes-data.mjs",async route=>{
   const response=await route.fetch();
   const text=await response.text();
   const marker="...item,isDemo:true,publicContact:null,locationLevel:";
   assert.ok(text.includes(marker));
   await route.fulfill({contentType:"text/javascript",body:text.replace(marker,'...item,privateEmail:"'+secret+'",privateLocation:"'+secret+'",internalNotes:"'+secret+'",isDemo:true,publicContact:null,locationLevel:')});
  });
  await page.goto(PAGE,{waitUntil:"networkidle"});
  await page.locator("#results .initiative-card").first().waitFor();
  await page.locator("#display-map").click();
  await page.locator("#display-list").click();
  await page.locator("#results a[data-id]").first().click();
  const rendered=await page.evaluate(()=>document.documentElement.outerHTML);
  assert.equal(rendered.includes(secret),false,"Secret found in DOM/metadata");
  assert.equal(page.url().includes(secret),false,"Secret found in URL");
  assert.equal(errors.join(" ").includes(secret),false,"Secret found in JavaScript errors");
  await page.locator("#back").click();
  const downloaded=page.waitForEvent("download");
  await page.locator("#export-demo").click();
  const file=await downloaded;
  const exported=await readFile(await file.path(),"utf8");
  assert.equal(exported.includes(secret),false,"Secret found in public export");
 }finally{await page.close();await browser.close();}
});

test("015: diagnostic débordement réel des deux lectures à 320/390/1280 px",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:844}});
   try{
    await mkdir("artifacts",{recursive:true});
    await page.goto(PAGE,{waitUntil:"networkidle"});
    await page.locator("#display-map").waitFor({state:"visible"});
    await page.locator("#display-map").waitFor({state:"attached"});
    for(const kind of ["communs","possibles"]){
     await page.locator("#reading-"+kind).click();
     for(const mode of ["list","map"]){
      await page.locator("#display-"+mode).click();
      const dimensions=await page.evaluate(()=>{
       const outer=document.documentElement.scrollWidth,inner=window.innerWidth;
       const offenders=[...document.querySelectorAll("body *")]
        .filter(el=>el.getClientRects().length && el.getBoundingClientRect().width>0)
        .map(el=>({el,rect:el.getBoundingClientRect()}))
        .filter(({rect})=>rect.right>inner+1 || rect.left< -1)
        .slice(0,6).map(({el,rect})=>({selector:el.tagName.toLowerCase()+"#"+(el.id||""),
          right:Math.round(rect.right),left:Math.round(rect.left),width:Math.round(rect.width)}));
       return {outer,inner,offenders};
      });
      assert.ok(dimensions.outer<=dimensions.inner+1,"Débordement "+width+" "+kind+" "+mode+" : "+JSON.stringify(dimensions));
      if(width===320 && mode==="map") await page.screenshot({path:"artifacts/015-"+kind+"-320.png",fullPage:true});
     }
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
});
test("015: les 11 liens profonds de la démonstration ouvrent leurs fiches exactes",async()=>{
 const {DEMO_MAP_ENTRIES}=await import("../cartes-data.mjs");
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 try{
  assert.equal(DEMO_MAP_ENTRIES.length,11);
  for(const entry of DEMO_MAP_ENTRIES){
   await page.goto(PAGE+"?initiative="+encodeURIComponent(entry.id));
   await page.locator("#detail h2").waitFor();
   assert.equal(await page.locator("#detail h2").innerText(),entry.title);
   assert.equal(await page.locator("#detail .provenance").count(),1);
   assert.ok((await page.locator("#detail").innerText()).includes("Aucun contact réel"));
   await page.locator("#back").click();
   assert.equal(new URL(page.url()).searchParams.has("initiative"),false);
  }
 }finally{await page.close();await browser.close();}
});
