import test from "node:test";
import assert from "node:assert/strict";
import {chromium} from "playwright";
import {mkdir} from "node:fs/promises";
const BASE="http://127.0.0.1:8000";
test("première édition: index sans lot, mobile, clavier, recherche, zoom, A4 et sans collecte",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:850},reducedMotion:"reduce"});
   const unexpected=[],pageErrors=[];
   page.on("request",r=>{if(r.method()!=="GET"||!r.url().startsWith(BASE+"/"))unexpected.push(r.method()+" "+r.url());});
   page.on("pageerror",e=>pageErrors.push(e.message));
   try{
    const response=await page.goto(BASE+"/artifacts/edition-premiere-preview/index.html",{waitUntil:"networkidle"});
    assert.equal(response.status(),200);
    assert.equal(await page.locator("h1").count(),1);
    assert.match(await page.locator(".edition-note").innerText(),/Zout/);
    assert.match(await page.locator("footer").innerText(),/non adoptés collectivement/);
    assert.match(await page.locator("#edition-cartes").innerText(),/Aucun contenu admissible/);
    assert.equal(await page.locator("#edition-cartes article").count(),0);
    assert.equal(await page.locator("form,iframe,img").count(),0);
    const broken=await page.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.getAttribute("href").slice(1))).map(x=>x.getAttribute("href")));
    assert.deepEqual(broken,[]);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"Débordement à "+width);
    await page.keyboard.press("Tab");
    assert.equal(await page.evaluate(()=>document.activeElement.getAttribute("href")),"#contenu");
    await page.keyboard.press("Enter");
    await page.waitForFunction(()=>location.hash==="#contenu",{timeout:3000});
    assert.equal(new URL(page.url()).hash,"#contenu");
    const q=page.locator("#edition-recherche");
    await q.fill("BIO-009");
    assert.match(await page.locator("#edition-compte").innerText(),/0 résultat/);
    await q.fill("");
    assert.match(await page.locator("#edition-compte").innerText(),/0 résultat/);
    await mkdir("artifacts/edition-premiere-captures",{recursive:true});
    await page.screenshot({path:"artifacts/edition-premiere-captures/index-"+width+".png",fullPage:true});
    await page.addStyleTag({content:"html{font-size:200%!important}"});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"Zoom 200% débordant "+width);
    if(width===1280){
     await page.emulateMedia({media:"print"});
     await page.pdf({format:"A4",path:"artifacts/edition-premiere-captures/index-a4.pdf",printBackground:false});
    }
    assert.deepEqual(unexpected,[]);
    assert.deepEqual(pageErrors,[]);
   }finally{await page.close()}
  }
 }finally{await browser.close()}
});
