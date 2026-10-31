import test from "node:test";
import assert from "node:assert/strict";
import {mkdir} from "node:fs/promises";
import {chromium} from "playwright";
const BASE="http://127.0.0.1:8000";
test("eco: index 320/390/1280, clavier, focus, impression et sans JS",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:850},javaScriptEnabled:false,reducedMotion:"reduce"});
   const failed=[],external=[];
   page.on("requestfailed",req=>failed.push(req.url()));
   page.on("request",req=>{if(!req.url().startsWith(BASE+"/"))external.push(req.url());});
   try{
    await page.goto(BASE+"/wiki-ecologie.html",{waitUntil:"load"});
    assert.equal(await page.locator("h1").count(),1);
    assert.equal(await page.locator(".eco-axis").count(),3);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"Débordement "+width);
    await page.keyboard.press("Tab");
    assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute("href")),"#contenu-eco");
    await page.keyboard.press("Enter");
    assert.equal(new URL(page.url()).hash,"#contenu-eco");
    await page.locator('a[href="#eco-c"]').focus();
    await page.keyboard.press("Enter");
    assert.equal(new URL(page.url()).hash,"#eco-c");
    assert.ok(await page.locator("#eco-c").isVisible());
    await page.emulateMedia({media:"print"});
    assert.equal(await page.locator("body").evaluate(el=>getComputedStyle(el).color),"rgb(0, 0, 0)");
    assert.ok(await page.locator("#sources-eco").isVisible());
    await page.emulateMedia({media:"screen"});
    await mkdir("artifacts",{recursive:true});
    await page.screenshot({path:"artifacts/eco-candidate-"+width+".png",fullPage:true});
    assert.deepEqual(failed,[]);
    assert.deepEqual(external,[]);
   }finally{await page.close();}
  }
 }finally{await browser.close();}
});
