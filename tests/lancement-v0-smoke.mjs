/* QA de lancement V0 : aucune soumission, aucune modification de données.
   Le serveur HTTP est local à GitHub Actions ; deux tailles et dix-huit pages, sans écriture. */
import { chromium } from "playwright";
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
const files=["index.html","manifeste-v2-5.html","bibliotheque.html","wiki.html","participer.html","proposer-article.html","wiki-lecture-croisee-travail-soin-pouvoir.html","wiki-decision-collective.html","manifeste.html","squats-et-lieux-autonomes.html","charte-contributions-wiki.html","wiki-logement-habitat-droit-ville.html","habitat-dossier-participatif.html","habitat-dossier-friches.html","habitat-dossier-gouvernance.html","habitat-dossier-dalo.html","habitat-dossier-foncier-solidaire.html","habitat-dossier-lieux-collectifs.html"];
const widths=[{label:"mobile",width:390,height:844},{label:"desktop",width:1280,height:800}];
const base=process.env.QA_BASE_URL||"http://127.0.0.1:8765";
const checks=[];
mkdirSync("visual-qa",{recursive:true});

for(const f of files){
  const html=readFileSync(f,"utf8");
  const links=[...html.matchAll(/\bhref="([^"]+)"/g)].map(m=>m[1]);
  const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
  const missing=[];
  for(const href of links){
    if(/^(?:https?:|mailto:|tel:|javascript:)/.test(href))continue;
    if(href.startsWith("#")){if(!ids.has(href.slice(1)))missing.push(href);continue}
    const filepath=href.split("#")[0].split("?")[0];
    if(filepath&&!existsSync(path.join(process.cwd(),filepath)))missing.push(href);
    else if(filepath&&href.includes("#")){
      const fragment=href.split("#")[1]?.split("?")[0];
      const dest=readFileSync(path.join(process.cwd(),filepath),"utf8");
      const targetIds=new Set([...dest.matchAll(/\\bid="([^"]+)"/g)].map(m=>m[1]));
      if(fragment&&!targetIds.has(decodeURIComponent(fragment)))missing.push(href+" (ancre absente)");
    }
  }
  checks.push({name:"Chemins et ancres locales : "+f,ok:missing.length===0,detail:{missing}});
}
const browser=await chromium.launch({headless:true});
const rgb=s=>(s.match(/[\d.]+/g)||[]).slice(0,3).map(Number);
const luminance=values=>values.map(x=>{x=x/255;return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4)}).reduce((s,x,i)=>s+x*[.2126,.7152,.0722][i],0);
const contrast=(a,b)=>{const A=luminance(rgb(a)),B=luminance(rgb(b));return (Math.max(A,B)+.05)/(Math.min(A,B)+.05)};
try{
 for(const viewport of widths){
  const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},reducedMotion:"reduce"});
  for(const filename of files){
   const page=await context.newPage();
   const errors=[],failedResources=[];
   page.on("pageerror",e=>errors.push(e.message));
   page.on("response",r=>{if(r.url().startsWith(base)&&r.status()>=400)failedResources.push(r.status()+" "+r.url())});
   const res=await page.goto(base+"/"+filename,{waitUntil:"networkidle",timeout:30000});
   const fontStates=await page.evaluate(async()=>({
     reading:(await document.fonts.load('400 19px "Atkinson Hyperlegible Next"',"é")).some(x=>x.status==="loaded"),
     heading:(await document.fonts.load('700 44px "Barlow Condensed"',"É")).some(x=>x.status==="loaded")
   }));
   const dom=await page.evaluate(()=>{
     const title=document.querySelector("h1");
     const manifest=window.location.pathname.endsWith("/manifeste-v2-5.html");
     const links=[...document.querySelectorAll("nav a,button")].filter(e=>e.getClientRects().length);
     return {
      h1:document.querySelectorAll("h1").length,
      h2:document.querySelectorAll("article h2").length,
      h3:document.querySelectorAll("article h3").length,
      title:title?.textContent?.slice(0,100),
      manifest,
      nonAdopted:document.body.innerText.includes("non adoptée collectivement"),
      overflow:document.documentElement.scrollWidth>innerWidth+1,
      width:document.documentElement.scrollWidth,
      missingImages:[...document.images].filter(x=>!x.complete||!x.naturalWidth).map(x=>x.getAttribute("src")),
      controls:links.map(x=>({text:(x.innerText||x.getAttribute("aria-label")||"").slice(0,40),fg:getComputedStyle(x).color,bg:getComputedStyle(x).backgroundColor})),
      logo:!!document.querySelector('link[rel="icon"]')||window.location.pathname.endsWith("/manifeste-v2-5.html"),
      type:{body:getComputedStyle(document.body).fontSize,bodyFamily:getComputedStyle(document.body).fontFamily,
        h1:title?getComputedStyle(title).fontSize:null,
        h1Family:title?getComputedStyle(title).fontFamily:null,
        intro:document.querySelector(".home-hero .hero-intro p")?getComputedStyle(document.querySelector(".home-hero .hero-intro p")).fontSize:null},
      buttons:[...document.querySelectorAll('nav a,button,.manifesto-link,.discovery-card a')]
        .filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=="hidden")
        .map(e=>({name:e.textContent.trim().slice(0,35),h:Math.round(e.getBoundingClientRect().height),font:parseFloat(getComputedStyle(e).fontSize)})),
      hasForm:!!document.querySelector("form"),
      uniqueIds:(()=>{const ids=[...document.querySelectorAll("[id]")].map(x=>x.id);return ids.length===new Set(ids).size})(),
      titleFontHeight:title?Math.round(title.getBoundingClientRect().height):0
     };
   });
   let failed=[];
   if(res.status()!==200)failed.push("HTTP "+res.status());
   if(dom.h1!==1)failed.push("h1 "+dom.h1);
   if(dom.manifest&&(dom.h2!==6||dom.h3!==2||!dom.nonAdopted))failed.push("Structure ou statut du manifeste");
   if(dom.overflow)failed.push("Débordement "+dom.width);
   if(dom.missingImages.length)failed.push("Images "+dom.missingImages.join(","));
   if(!dom.logo)failed.push("Favicon manquant");
   if(!fontStates.reading||!fontStates.heading)failed.push("WOFF2 non chargées : "+JSON.stringify(fontStates));
   if(!dom.type.bodyFamily.includes("Atkinson Hyperlegible Next")||!dom.type.h1Family?.includes("Barlow Condensed"))
     failed.push("Familles typographiques non appliquées");
   if(!dom.uniqueIds)failed.push("ID HTML dupliqué");
   if(viewport.label==="mobile" && parseFloat(dom.type.body)<18)failed.push("Corps <18px");
   if(viewport.label==="mobile" && parseFloat(dom.type.h1)<38)failed.push("Titre h1 <38px");
   const tiny=dom.buttons.filter(x=>x.font<18||x.h<52);
   if(tiny.length)failed.push("Actions trop petites "+JSON.stringify(tiny).slice(0,280));
   if(filename==="index.html"){
     if(!dom.title?.includes("Et si on essayait autre chose ?"))failed.push("Accroche principale absente");
     if((dom.type.intro===null)||parseFloat(dom.type.intro)<21)failed.push("Introduction trop petite");
     if(dom.buttons.length<5)failed.push("Parcours d'accueil incomplet");
   }
   if(filename==="wiki-logement-habitat-droit-ville.html"){
     const num=await page.locator(".topic-full").count();
     const dossiers=await page.locator(".dossier-tile").count();
     const anchorCount=await page.locator('a[href^="#notion-"]').count();
     if(num!==22||dossiers!==6||anchorCount<22)failed.push("Index Habitat : "+num+" notions, "+dossiers+" dossiers, "+anchorCount+" ancres");
   }
   if(filename.startsWith("habitat-dossier-")){
     const status=await page.locator(".status").innerText();
     const breadcrumbs=await page.locator(".story-breadcrumb a").count();
     const navigation=await page.locator(".story-sequence a").count();
     if(!status.includes("À relire par un être humain")||breadcrumbs!==2||navigation!==2)
       failed.push("Dossier : relecture, fil d'Ariane ou navigation incomplète");
   }
   if(errors.length)failed.push("JS "+errors.join(" ; "));
   if(failedResources.length)failed.push("Ressources "+failedResources.join(" ; "));
   const measured=dom.controls.filter(x=>/^rgb\(/.test(x.fg)&&/^rgb\(/.test(x.bg)).map(x=>({...x,ratio:contrast(x.fg,x.bg)}));
   const weak=measured.filter(x=>x.ratio<4.5);
   if(weak.length)failed.push("Contraste CTA "+JSON.stringify(weak).slice(0,300));
   await page.screenshot({path:"visual-qa/"+filename.replace(".html","")+"-"+viewport.label+".png",fullPage:true});
   if(filename==="index.html"){
     await page.screenshot({path:"visual-qa/accueil-premier-ecran-"+viewport.label+".png",fullPage:false});
   }
   checks.push({name:filename+" @ "+viewport.label,ok:failed.length===0,detail:{failed,dom:{...dom,controls:undefined},minContrast:measured.length?Math.min(...measured.map(x=>x.ratio)):null}});
   console.log((failed.length?"FAIL ":"PASS ")+filename+" @ "+viewport.label+(failed.length?" : "+failed.join(" | "):""));
   await page.close();
  }
  await context.close();
 }
}finally{await browser.close()}
writeFileSync("visual-qa/report.json",JSON.stringify({checkedAt:new Date().toISOString(),checks},null,2));
for(const x of checks.filter(x=>x.name.startsWith("Chemins")))console.log((x.ok?"PASS ":"FAIL ")+x.name+(x.ok?"":JSON.stringify(x.detail)));
if(checks.some(x=>!x.ok))process.exitCode=1;
