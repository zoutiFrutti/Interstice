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
assert.equal(await p.locator("main .pc-step .pc-claim").count(),3);
assert.equal(await p.locator("main .pc-step .pc-objection").count(),3);
assert.equal(await p.locator("main .pc-step .pc-uncertainty").count(),3);
assert.equal(await p.locator("main .pc-step details").count(),3);
const internalLinks=await p.locator('main a[href^="../wiki-"]').evaluateAll(els=>els.map(a=>a.getAttribute('href')));
assert.ok(internalLinks.length>=9,"Wiki source/return links should point one directory up");
for(const href of [...new Set(internalLinks)]){
 const u=new URL(href,p.url());
 const resp=await p.request.get(u.toString());
 assert.equal(resp.status(),200,"Local document link broken: "+href);
}
const contrast=await p.evaluate(()=>{
 const c=x=>x.match(/[0-9]+/g)?.slice(0,3).map(Number);
 const lum=a=>a.map(v=>v/255).map(v=>v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
 const main=document.querySelector("main"), fg=c(getComputedStyle(main).color), bg=c(getComputedStyle(document.body).backgroundColor);
 const x=lum(fg),y=lum(bg);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);
});
console.log("PC_CONTRAST "+JSON.stringify({width,mainContrast:contrast}));
assert.ok(contrast>=4.5,"Main text contrast below WCAG AA");

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