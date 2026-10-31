import test from "node:test";
import assert from "node:assert/strict";
import {chromium} from "playwright";
import {mkdir} from "node:fs/promises";
const BASE="http://127.0.0.1:8000";
const PATH="/design-system/maquette-fiches-premiere-edition.html";
await mkdir("artifacts",{recursive:true});
test("fiches première édition : composants statiques, écran 320/390/1280, clavier, zoom 200%, A4",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:"reduce",hasTouch:true});
   const external=[],errors=[],posts=[];
   page.on("request",q=>{if(q.method()==="POST")posts.push(q.url());if(!q.url().startsWith(BASE+"/")&&!q.url().startsWith("data:"))external.push(q.url());});
   page.on("pageerror",e=>errors.push(e.message));
   try{
    await page.goto(BASE+PATH,{waitUntil:"networkidle"});
    assert.equal(await page.locator("h1").count(),1);
    assert.equal(await page.locator("script,form,img,iframe,canvas").count(),0);
    assert.equal(await page.locator(".fiche-responsabilite").count(),1);
    assert.match(await page.locator(".fiche-responsabilite").innerText(),/responsabilité éditoriale de Zout/);
    assert.match(await page.locator(".fiche-responsabilite").innerText(),/non adopté collectivement/);
    assert.match(await page.locator(".fiche-dates").innerText(),/Non publiée/);
    assert.match(await page.locator(".fiche-section--discussion").innerText(),/Contradictions/);
    assert.match(await page.locator(".fiche-section--sources").innerText(),/Sources et crédits/);
    assert.equal(await page.locator(".fiche-timeline li").count(),2);
    for(const className of ["fiche-historical-map","fiche-comparison","fiche-testimony","fiche-rights","fiche-primary-source","fiche-dispute"]){
      assert.equal(await page.locator("."+className).count(),1,className);
    }
    const internal=await page.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.getAttribute("href").slice(1))).map(a=>a.getAttribute("href")));
    assert.deepEqual(internal,[]);
    const data=await page.evaluate(()=>{
      const wrap=document.querySelector(".fiche-comparison");
      const status=document.querySelector(".fiche-state");
      return {viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,
       font:getComputedStyle(document.querySelector(".interstice-fiche")).fontSize,
       focusColor:getComputedStyle(document.querySelector("a")).color,
       tableScrollWidth:wrap.scrollWidth,tableClientWidth:wrap.clientWidth,
       tableIndex:wrap.tabIndex,statusBg:getComputedStyle(status).backgroundColor};
    });
    console.log("PREMIERE_EDITION_METRIC "+JSON.stringify({width,...data}));
    assert.ok(data.scrollWidth<=width+1,"Débordement horizontal à "+width+" : "+data.scrollWidth);
    assert.ok(parseFloat(data.font)>=18,"Corps moins de 18px");
    assert.equal(data.tableIndex,0);
    await page.locator(".fiche-comparison").focus();
    const focusWidth=await page.locator(".fiche-comparison").evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth));
    assert.ok(focusWidth>=3,"Focus tableau non visible");
    if(width<600)assert.ok(data.tableScrollWidth>data.tableClientWidth,"Tableau ne défile pas dans sa région");
    await page.screenshot({path:"artifacts/fiche-premiere-edition-"+width+".png",fullPage:true});
    // Zoom d'interface de texte simulé à 200% via racine, contrôle de reflow, pas test physique de zoom système.
    await page.addStyleTag({content:"html{font-size:200%!important}"});
    const zoom=await page.evaluate(()=>document.documentElement.scrollWidth);
    console.log("PREMIERE_EDITION_ZOOM "+JSON.stringify({width,zoomWidth:zoom}));
    assert.ok(zoom<=width+1,"Débordement au zoom texte 200% à "+width+" : "+zoom);
    if(width===1280){
      await page.emulateMedia({media:"print"});
      await page.pdf({path:"artifacts/fiche-premiere-edition-a4.pdf",format:"A4",printBackground:false});
    }
    assert.deepEqual(posts,[],"Aucun POST");
    assert.deepEqual(external,[],"Pas de ressource externe");
    assert.deepEqual(errors,[],"Aucune erreur JS");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
});