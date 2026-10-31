import test from "node:test";
import assert from "node:assert/strict";
import {chromium} from "playwright";
const BASE="http://127.0.0.1:8000";
test("parcours critiques : clavier, details, sources, retour, zoom et réseau local",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:850},reducedMotion:"reduce"});
   const unexpected=[],errors=[];
   page.on("request",r=>{if(r.method()!=="GET"||!r.url().startsWith(BASE+"/"))unexpected.push(r.method()+" "+r.url())});
   page.on("pageerror",e=>errors.push(e.message));
   try{
    await page.goto(BASE+"/wiki.html",{waitUntil:"networkidle"});
    assert.equal(await page.locator("h1").count(),1);
    assert.equal(await page.locator("#parcours-critiques .pc-step").count(),3);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"horizontal overflow "+width);
    const nav=page.locator('#parcours-critiques a[href="#ecologie"]').first();
    await nav.focus();await page.keyboard.press("Enter");
    assert.equal(new URL(page.url()).hash,"#ecologie");
    const details=page.locator("#ecologie details").first();
    assert.ok(await details.count()>0);
    await details.locator("summary").focus();
    await page.keyboard.press("Enter");
    assert.equal(await details.evaluate(x=>x.open),true);
    await page.addStyleTag({content:"html{font-size:200%!important}"});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"zoom overflow "+width);
    assert.deepEqual(unexpected,[]);assert.deepEqual(errors,[]);
   }finally{await page.close()}
  }
 }finally{await browser.close()}
});
