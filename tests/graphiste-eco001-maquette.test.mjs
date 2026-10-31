import test from "node:test";
import assert from "node:assert/strict";
import {chromium} from "playwright";
import {mkdir} from "node:fs/promises";

const url="http://127.0.0.1:8000/coordination/maquettes/eco-001-gabarits-documentaires.html";
await mkdir("artifacts",{recursive:true});
test("ECO-001 maquette documentaire autonome : 320/390/1280, clavier et A4",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:850},reducedMotion:"reduce"});
   const requests=[],errors=[];
   page.on("request",req=>{if(!req.url().startsWith("http://127.0.0.1:8000/"))requests.push(req.url())});
   page.on("pageerror",e=>errors.push(e.message));
   try{
    await page.goto(url,{waitUntil:"networkidle"});
    assert.equal(await page.locator("h1").count(),1);
    assert.equal(await page.locator("main>section").count(),5);
    assert.equal(await page.locator("img,script,form").count(),0);
    for(const id of ["frise","lutte","biographie","science"]){
      assert.equal(await page.locator("section#"+id+" h2").count(),1);
      assert.equal(await page.locator('nav a[href="#'+id+'"]').count(),1);
    }
    const measures=await page.evaluate(()=>{
      const region=document.querySelector(".table-scroll");
      const para=document.querySelector(".lead");
      const w=document.documentElement.scrollWidth;
      return {viewport:innerWidth,documentWidth:w,bodyFont:getComputedStyle(document.body).fontSize,
        leadFont:getComputedStyle(para).fontSize,tableScrollWidth:region.scrollWidth,tableClientWidth:region.clientWidth,
        tableFocusIndex:region.tabIndex,
        printStyle:!![...document.styleSheets].some(sheet=>{try{return [...sheet.cssRules].some(rule=>rule.conditionText?.includes("print"))}catch{return false}})};
    });
    console.log("ECO001_METRIC "+JSON.stringify({width,...measures}));
    assert.ok(measures.documentWidth<=width+1,"Débordement global à "+width+": "+measures.documentWidth);
    assert.ok(parseFloat(measures.bodyFont)>=18);
    assert.ok(parseFloat(measures.leadFont)>=20);
    assert.equal(measures.tableFocusIndex,0);
    assert.ok(measures.printStyle);
    if(width<=390){
      assert.ok(measures.tableScrollWidth>measures.tableClientWidth,"Le tableau n'est pas contrôlé dans sa propre zone de scroll");
      await page.locator(".table-scroll").focus();
      const outline=await page.locator(".table-scroll").evaluate(e=>getComputedStyle(e).outlineWidth);
      assert.ok(parseFloat(outline)>=3,"Focus visible du tableau");
    }
    await page.screenshot({path:"artifacts/eco001-graphiste-"+width+".png",fullPage:true});
    if(width===1280){
     await page.pdf({path:"artifacts/eco001-graphiste-a4.pdf",format:"A4",printBackground:false});
    }
    assert.deepEqual(requests,[],"Aucune ressource externe");
    assert.deepEqual(errors,[],"Aucune erreur JS");
   }finally{await page.close();}
  }
 }finally{await browser.close();}
});
