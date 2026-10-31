import test from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';import {mkdir} from 'node:fs/promises';await mkdir('artifacts',{recursive:true});
test('Cycle5 10 vrais profils + assemblage PR50/57/59, liens, clavier, contrastes, zoom et A4',async()=>{
const b=await chromium.launch({headless:true,args:['--no-sandbox']});try{for(const width of [320,390,1280]){
const p=await b.newPage({viewport:{width,height:900},reducedMotion:'reduce'}),errors=[];
p.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:8000/')&&r.status()>=400)errors.push(r.url())});
await p.goto('http://127.0.0.1:8000/design-system/maquette-cycle5-profils-reels.html',{waitUntil:'networkidle'});
assert.equal(await p.locator('main .c5-profile').count(),10);assert.equal(await p.locator('h1').count(),1);assert.equal(await p.locator('main .c5-card--source').count(),10);assert.equal(await p.locator('main .c5-card--contradiction').count(),10);assert.equal(await p.locator('main .c5-card--uncertain').count(),10);assert.equal(await p.locator('script,form,img,canvas,iframe').count(),0);
const data=await p.evaluate(()=>{const main=document.querySelector('main');const vals=s=>(s.match(/[0-9]+/g)||[]).slice(0,3).map(Number);const lum=a=>a.map(n=>n/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4).reduce((s,n,i)=>s+n*[.2126,.7152,.0722][i],0);const x=lum(vals(getComputedStyle(main).color)),y=lum(vals(getComputedStyle(document.body).backgroundColor));return {width:innerWidth,doc:document.documentElement.scrollWidth,font:getComputedStyle(main).fontSize,contrast:(Math.max(x,y)+.05)/(Math.min(x,y)+.05),broken:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash)}});
console.log('C5_QA '+JSON.stringify(data));assert.ok(data.doc<=width+1);assert.ok(parseFloat(data.font)>=18);assert.ok(data.contrast>=4.5);assert.deepEqual(data.broken,[]);assert.deepEqual(errors,[]);
const local=await p.locator('main a[href^="../"]').evaluateAll(a=>[...new Set(a.map(x=>x.getAttribute('href')))]);for(const href of local){const response=await p.request.get(new URL(href,p.url()).toString());assert.equal(response.status(),200,href)}
const first=p.locator('nav.c5-nav a').first();await first.focus();assert.ok(await first.evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth))>=3);await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>location.hash),'#manifeste');
const detail=p.locator('#exercice details');await detail.locator('summary').focus();await p.keyboard.press('Enter');assert.notEqual(await detail.getAttribute('open'),null);
await p.screenshot({path:'artifacts/c5-'+width+'.png',fullPage:true});
if(width===320){await p.addStyleTag({content:'html{font-size:200%!important}'});let z=await p.evaluate(()=>document.documentElement.scrollWidth);console.log('C5_ZOOM '+z);assert.ok(z<=width+1)}
if(width===1280)await p.pdf({path:'artifacts/c5-a4.pdf',format:'A4',printBackground:false});await p.close()
}}finally{await b.close()}});
