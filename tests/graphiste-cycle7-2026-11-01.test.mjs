import test from "node:test";import assert from "node:assert/strict";import {chromium} from "playwright";import {mkdir} from "node:fs/promises";await mkdir("artifacts",{recursive:true});
test("C7 assemblage medias statuts profils routes et accès",async()=>{
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});try{for(const width of [320,390,1280]){
 const page=await browser.newPage({viewport:{width,height:900},reducedMotion:"reduce"}),bad=[],errors=[];
 page.on("response",r=>{if(r.url().startsWith("http://127.0.0.1:8000/")&&r.status()>=400)bad.push(r.url())});page.on("pageerror",e=>errors.push(e.message));
 await page.goto("http://127.0.0.1:8000/design-system/maquette-cycle7-medias-territoires.html",{waitUntil:"networkidle"});
 assert.equal(await page.locator("main h1").count(),1);assert.equal(await page.locator(".c6-status").count(),5);
 assert.equal(await page.locator(".c7-media").count(),3);assert.equal(await page.locator('.c7-media[data-rights="non-verifies"]').count(),3);
 assert.equal(await page.locator(".c7-territory").count(),3);assert.equal(await page.locator("#cycle6-quinze li").count(),15);
 assert.equal(await page.locator("script,form,img,canvas,iframe").count(),0);
 for(const kind of ["archive-authentique","illustration","reconstitution"]){const e=page.locator('.c7-media[data-media-kind="'+kind+'"]');assert.equal(await e.count(),1);assert.ok((await e.innerText()).includes("Diffusion") && (await e.innerText()).includes("Bloquée"))}
 const result=await page.evaluate(()=>{const main=document.querySelector("main"),colors=s=>(s.match(/[0-9]+/g)||[]).slice(0,3).map(Number),lum=a=>a.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0),a=lum(colors(getComputedStyle(main).color)),b=lum(colors(getComputedStyle(document.body).backgroundColor));return {width:innerWidth,documentWidth:document.documentElement.scrollWidth,font:getComputedStyle(main).fontSize,contrast:(Math.max(a,b)+.05)/(Math.min(a,b)+.05),missingTargets:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash)}});
 console.log("C7_METRIC "+JSON.stringify(result));assert.ok(result.documentWidth<=width+1);assert.ok(parseFloat(result.font)>=18);assert.ok(result.contrast>=4.5);assert.deepEqual(result.missingTargets,[]);assert.deepEqual(bad,[]);assert.deepEqual(errors,[]);
 const nav=page.locator(".c5-nav a").first();await nav.focus();assert.ok(await nav.evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth))>=3);await page.keyboard.press("Enter");assert.equal(await page.evaluate(()=>location.hash),"#manifeste");
 const details=page.locator("#exercice details");await details.locator("summary").focus();await page.keyboard.press("Enter");assert.notEqual(await details.getAttribute("open"),null);
 await page.screenshot({path:"artifacts/cycle7-"+width+".png",fullPage:true});
 if(width===320){await page.addStyleTag({content:"html{font-size:200%!important}"});const zoom=await page.evaluate(()=>document.documentElement.scrollWidth);console.log("C7_ZOOM "+zoom);assert.ok(zoom<=width+1)}
 if(width===1280)await page.pdf({path:"artifacts/cycle7-a4.pdf",format:"A4",printBackground:false});
 await page.close();
}}finally{await browser.close()}});