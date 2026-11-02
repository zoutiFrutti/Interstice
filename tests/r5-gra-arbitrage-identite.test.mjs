import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync,mkdirSync} from "node:fs";
import {chromium} from "playwright";
const read=p=>readFileSync(p,"utf8");
const original = [
  ["assets/logo-faille-noire.svg","assets/archives/logo-faille-noire-pre-r4.svg"],
  ["assets/logo-interstice.svg","assets/archives/logo-interstice-pre-r4.svg"]
];
const candidates=[
  "assets/candidats/logo-faille-noire-r4.svg",
  "assets/candidats/logo-interstice-r4.svg"
];
const baseStart='<g id="base-identite">';
const common=x=>x.includes('surcouche-interstice')?
  x.slice(x.indexOf(baseStart),x.indexOf('</g><g id="surcouche-interstice"')+4):
  x.slice(x.indexOf(baseStart),x.lastIndexOf('</g></svg>')+4);

test("R5: actifs encore identiques aux archives, aucune substitution",()=>{
 for(const [active,archive] of original){
  assert.ok(existsSync(active)&&existsSync(archive));
  assert.equal(read(active),read(archive),active+" != archive");
 }
 for(const p of candidates){assert.ok(existsSync(p));assert.doesNotMatch(read(p),/<text\b|<foreignObject\b/,"texte ou intégration interdite dans le symbole");}
});

test("R5: groupe base exactement identique, surcouche Interstice exclusive",()=>{
 const a=read(candidates[0]),b=read(candidates[1]);
 assert.equal(common(a),common(b),"modification de la base partagée");
 assert.equal(a.includes('surcouche-interstice'),false);
 assert.equal((b.match(/id="surcouche-interstice"/g)||[]).length,1);
 const lines=a.match(/<g stroke="#e4e0d8"[\s\S]*?<\/g>/)?.[0]??"";
 const branches=(lines.match(/<path\b/g)||[]).length;
 const red=a.match(/<g stroke="#aa3032"[\s\S]*?<\/g>/)?.[0]??"";
 assert.equal(branches,55,"réseau de craquelures inattendu");
 assert.equal((red.match(/<path\b/g)||[]).length,17,"traînées rouges changées");
 const overlay=b.split('<g id="surcouche-interstice"')[1]??"";
 const nodes=[...overlay.matchAll(/<circle[^>]+r="([\d.]+)"[^>]*>/g)].map(m=>Number(m[1]));
 assert.equal(nodes.filter(r=>r<10).length,30);
 assert.equal(nodes.filter(r=>r>=10).length,2,"grand point et halo");
 assert.ok(b.includes('cx="159" cy="156" r="17"'),"point majeur déplacé");
});

test("R5: trois vues documentaires réelles, images décodées, navigation et captures",async()=>{
 mkdirSync("artifacts/r5-gra",{recursive:true});
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,768,1280]){
   const height=width===768?1024:width===1280?900:844;
   const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1,reducedMotion:"reduce"});
   const errors=[];page.on("pageerror",e=>errors.push(e.message));
   try{
    const resp=await page.goto("http://127.0.0.1:8000/design-system/comparaison-identite-r5-arbitrage.html",{waitUntil:"networkidle"});
    assert.equal(resp.status(),200);
    assert.equal(await page.locator("h1").count(),1);
    assert.equal(await page.locator(".matrix .panel").count(),4);
    assert.equal(await page.locator(".asset").count(),4);
    assert.ok(await page.locator('.notice').innerText().then(x=>x.includes("665 × 665")));
    const imgs=await page.locator("img").evaluateAll(elements=>elements.map(img=>({
     src:new URL(img.src).pathname,loaded:img.complete&&img.naturalWidth>0,
     width:img.naturalWidth,height:img.naturalHeight
    })));
    assert.ok(imgs.every(i=>i.loaded),JSON.stringify(imgs));
    const metrics=await page.evaluate(()=>({
     viewport:window.innerWidth,document:document.documentElement.scrollWidth,
     panels:[...document.querySelectorAll(".panel")].map(e=>Math.round(e.getBoundingClientRect().width)),
     images:[...document.querySelectorAll(".asset")].map(e=>Math.round(e.getBoundingClientRect().width)),
     focusText:document.querySelector(".skip")?.innerText
    }));
    assert.ok(metrics.document<=width+1,"Débordement à "+width+": "+JSON.stringify(metrics));
    await page.locator(".skip").focus();
    assert.ok(await page.locator(".skip").evaluate(x=>parseFloat(getComputedStyle(x).outlineWidth))>=3 || await page.locator(".skip").evaluate(x=>getComputedStyle(x).top)!=="-110px","Lien d'évitement non visible au focus");
    const refs=await page.locator('a[href^="#"]').evaluateAll(list=>list.map(a=>a.getAttribute("href").slice(1)));
    for(const id of refs)assert.ok(await page.locator("#"+id).count(),"Ancre manquante: "+id);
    assert.deepEqual(errors,[]);
    console.log("R5_GRA_VIEWPORT "+JSON.stringify({width,...metrics,decoded:imgs.length}));
    if(width!==320)await page.screenshot({path:"artifacts/r5-gra/comparatif-"+width+"px.png",fullPage:true});
    else await page.screenshot({path:"artifacts/r5-gra/comparatif-320px.png",fullPage:true});
    if(width===1280){
      await page.emulateMedia({media:"print"});
      await page.pdf({path:"artifacts/r5-gra/comparatif-impression-a4.pdf",format:"A4",printBackground:true});
    }
   }finally{await page.close()}
  }
 }finally{await browser.close()}
});
