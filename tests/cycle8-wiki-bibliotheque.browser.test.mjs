import test from "node:test";import assert from "node:assert/strict";import {chromium} from "playwright";
const BASE="http://127.0.0.1:8000";
test("Cycle 8: navigation réciproque Wiki-Bibliothèque sur écrans et au clavier",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{for(const width of [320,390,1280]){
  const page=await browser.newPage({viewport:{width,height:850}});
  const errors=[],nonlocal=[];page.on("pageerror",e=>errors.push(e.message));page.on("request",r=>{if(r.method()!=="GET"||!r.url().startsWith(BASE+"/"))nonlocal.push(r.method()+" "+r.url())});
  try{
   assert.equal((await page.goto(BASE+"/wiki.html",{waitUntil:"domcontentloaded"})).status(),200);
   const library=page.locator('a[href="bibliotheque.html"]').first();assert.equal(await library.count(),1);
   await library.focus();await page.keyboard.press("Enter");
   await page.waitForURL("**/bibliotheque.html");
   assert.equal(await page.locator("h1").count(),1);
   const returnLink=page.locator('header a[href="wiki.html"]');assert.equal(await returnLink.count(),1);
   await returnLink.focus();await page.keyboard.press("Enter");await page.waitForURL("**/wiki.html");
   assert.equal(await page.locator("#parcours-critiques .pc-step").count(),3);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   assert.deepEqual(errors,[]);
   assert.deepEqual(nonlocal,[]);
  }finally{await page.close()}
 }}finally{await browser.close()}
});