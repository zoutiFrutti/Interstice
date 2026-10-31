import test from "node:test";import assert from "node:assert/strict";import {chromium} from "playwright";import {mkdir} from "node:fs/promises";
await mkdir("artifacts",{recursive:true});
test("Trois parcours critiques : 320/390/1280, clavier, contraste, structure, print",async()=>{
const b=await chromium.launch({headless:true,args:["--no-sandbox"]});try{
for(const width of [320,390,1280]){
const p=await b.newPage({viewport:{width,height:850},reducedMotion:"reduce"});const bad=[],external=[];
p.on("response",r=>{if(r.url().startsWith("http://127.0.0.1:8000/")&&r.status()>=400)bad.push(r.url())});
p.on("request",r=>{if(!r.url().startsWith("http://127.0.0.1:8000/"))external.push(r.url())});
await p.goto("http://127.0.0.1:8000/design-system/maquette-parcours-critiques-2026-10-31.html",{waitUntil:"networkidle"});
assert.equal(await p.locator("h1").count(),1);assert.equal(await p.locator("main .pc-step").count(),3);
assert.equal(await p.locator("form,script,img,canvas").count(),0);
const d=await p.evaluate(()=>({width:innerWidth,doc:document.documentElement.scrollWidth,font:getComputedStyle(document.querySelector("main")).fontSize,bg:getComputedStyle(document.body).backgroundColor,fg:getComputedStyle(document.querySelector("main")).color,broken:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.getAttribute("href").slice(1))).map(a=>a.getAttribute("href"))}));
console.log("PC_METRIC "+JSON.stringify(d));assert.ok(d.doc<=width+1);assert.deepEqual(d.broken,[]);assert.ok(parseFloat(d.font)>=18);assert.deepEqual(bad,[]);assert.deepEqual(external,[]);
await p.locator('nav.pc-toc a[href="#ecologie"]').first().focus();assert.ok(await p.locator('nav.pc-toc a[href="#ecologie"]').first().evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth))>=3);
await p.keyboard.press("Enter");assert.equal(await p.evaluate(()=>location.hash),"#ecologie");
const details=p.locator("#ecologie details");assert.equal(await details.getAttribute("open"),null);await details.locator("summary").click();assert.notEqual(await details.getAttribute("open"),null);
await p.screenshot({path:"artifacts/parcours-critique-"+width+".png",fullPage:true});
if(width===320){await p.addStyleTag({content:"html{font-size:200%!important}"});const z=await p.evaluate(()=>document.documentElement.scrollWidth);console.log("PC_ZOOM "+JSON.stringify({width,documentWidth:z}));assert.ok(z<=width+1)}
if(width===1280){await p.pdf({path:"artifacts/parcours-critiques-a4.pdf",format:"A4",printBackground:false})}await p.close()
}}finally{await b.close()}
});