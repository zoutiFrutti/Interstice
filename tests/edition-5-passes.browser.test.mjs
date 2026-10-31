import test from "node:test";
import assert from "node:assert/strict";
import {chromium} from "playwright";
import {mkdir} from "node:fs/promises";
const BASE="http://127.0.0.1:8000";
test("première édition 5 passes : 018-E, Wiki local, clavier, P0 non-collecte, 320/390/1280",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:850},reducedMotion:"reduce"});
   const modified=[],external=[],errors=[];
   page.on("request",r=>{
    if(r.method()!=="GET")modified.push(r.method()+" "+r.url());
    if(!r.url().startsWith(BASE+"/")&&!r.url().startsWith("data:"))external.push(r.url());
   });
   page.on("pageerror",e=>errors.push(e.message));
   try{
    await page.goto(BASE+"/index.html",{waitUntil:"networkidle"});
    const first=page.locator('.hero-actions a[href="decouvrir-initiatives.html"]');
    const rect=await first.boundingBox();
    assert.ok(rect&&rect.y<850,"018-E : première action trop basse à "+width+" : "+rect?.y);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"Accueil déborde "+width);
    await first.click();
    const h=await page.locator("#explorer-title").boundingBox();
    const notice=await page.locator(".demo-notice").boundingBox();
    assert.ok(h&&notice&&h.y<notice.y,"018-E : titre doit précéder la notice à "+width);
    assert.ok(h.y<850,"Titre découverte hors premier écran "+width);
    assert.equal(await page.locator("#reading-communs,#reading-possibles").count(),2);
    await page.goto(BASE+"/wiki.html",{waitUntil:"networkidle"});
    assert.equal(await page.locator("#wiki-local-results li").count(),24);
    const q=page.locator("#wiki-local-query");
    await q.focus();
    await q.fill("écologie");
    assert.equal(await page.locator("#wiki-local-results li:visible").count(),1);
    assert.match(await page.locator("#wiki-local-count").innerText(),/1 page/);
    await q.fill("ARCH-002");
    assert.equal(await page.locator("#wiki-local-results li:visible").count(),0);
    await q.fill("");
    assert.equal(await page.locator("#wiki-local-results li:visible").count(),24);
    await page.locator('#wiki-local-results a[href="wiki-autonomie-materielle-savoir-faire.html"]').click();
    assert.ok(page.url().endsWith("wiki-autonomie-materielle-savoir-faire.html"));
    assert.equal(await page.locator('a[href="wiki-mutualiser-materiel.html"]').count(),0);
    await page.goto(BASE+"/proposer-article.html",{waitUntil:"networkidle"});
    assert.equal(await page.locator("form,script,input[type=email]").count(),0);
    assert.match(await page.locator("h1").innerText(),/réception désactivée/);
    assert.deepEqual(modified,[],"Aucun POST "+width);
    assert.deepEqual(external,[],"Aucun réseau tiers "+width);
    assert.deepEqual(errors,[],"Erreur JS "+width);
    await mkdir("artifacts/edition-premiere-captures",{recursive:true});
    await page.screenshot({path:"artifacts/edition-premiere-captures/p0-form-"+width+".png",fullPage:true});
   }finally{await page.close()}
  }
 }finally{await browser.close()}
});
