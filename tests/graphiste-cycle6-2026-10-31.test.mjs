import test from "node:test";import assert from "node:assert/strict";import {chromium} from "playwright";import {mkdir} from "node:fs/promises";await mkdir("artifacts",{recursive:true});
test("Cycle 6: assemblage réel dix profils, cinq statuts, quinze articles",async()=>{
const b=await chromium.launch({headless:true,args:["--no-sandbox"]});try{for(const width of [320,390,1280]){
 const p=await b.newPage({viewport:{width,height:900},reducedMotion:"reduce"});const bad=[],errs=[];p.on("response",r=>{if(r.url().startsWith("http://127.0.0.1:8000/")&&r.status()>=400)bad.push(r.url())});p.on("pageerror",e=>errs.push(e.message));
 await p.goto("http://127.0.0.1:8000/design-system/maquette-cycle6-statuts-quinze-articles.html",{waitUntil:"networkidle"});
 assert.equal(await p.locator("main .c5-profile").count(),13);assert.equal(await p.locator("h1").count(),1);
 assert.equal(await p.locator(".c6-status").count(),5);assert.equal(await p.locator("#cycle6-quinze li").count(),15);assert.equal(await p.locator(".c6-governance").count(),1);
 assert.equal(await p.locator("script,form,img,canvas,iframe").count(),0);
 assert.match(await p.locator("#cycle6-gouvernance").innerText(),/Zout seul/);
 assert.match(await p.locator('[data-status="adopte-individuel"]').innerText(),/ne signifie ni adoption collective/i);
 const m=await p.evaluate(()=>{const main=document.querySelector("main"),col=s=>[...s.matchAll(/[0-9]+/g)].slice(0,3).map(x=>+x[0]),lum=a=>a.map(n=>n/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4).reduce((s,x,i)=>s+x*[.2126,.7152,.0722][i],0),a=lum(col(getComputedStyle(main).color)),b=lum(col(getComputedStyle(document.body).backgroundColor));return {width:innerWidth,doc:document.documentElement.scrollWidth,font:getComputedStyle(main).fontSize,contrast:(Math.max(a,b)+.05)/(Math.min(a,b)+.05),broken:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash)}});
 console.log("C6_METRIC "+JSON.stringify(m));assert.ok(m.doc<=width+1);assert.ok(parseFloat(m.font)>=18);assert.ok(m.contrast>=4.5);assert.deepEqual(m.broken,[]);assert.deepEqual(bad,[]);assert.deepEqual(errs,[]);
 const first=p.locator(".c5-nav a").first();await first.focus();assert.ok(await first.evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth))>=3);await p.keyboard.press("Enter");assert.equal(await p.evaluate(()=>location.hash),"#manifeste");
 const detail=p.locator("#exercice details");await detail.locator("summary").focus();await p.keyboard.press("Enter");assert.notEqual(await detail.getAttribute("open"),null);
 const links=await p.locator('#cycle6-quinze a[href^="../wiki-"]').evaluateAll(a=>a.map(x=>x.getAttribute("href")));assert.equal(links.length,15);for(const href of links){let res=await p.request.get(new URL(href,p.url()).toString());assert.equal(res.status(),200,href)}
 await p.screenshot({path:"artifacts/cycle6-"+width+".png",fullPage:true});
 if(width===320){await p.addStyleTag({content:"html{font-size:200%!important}"});const zoom=await p.evaluate(()=>document.documentElement.scrollWidth);console.log("C6_ZOOM "+zoom);assert.ok(zoom<=width+1)}
 if(width===1280)await p.pdf({path:"artifacts/cycle6-a4.pdf",format:"A4",printBackground:false});
 await p.close();
}}finally{await b.close()}
});