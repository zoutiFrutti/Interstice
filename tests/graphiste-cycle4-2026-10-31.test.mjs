import test from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';import {mkdir} from 'node:fs/promises';await mkdir('artifacts',{recursive:true});
test('C4 composants réellement assemblés 320/390/1280, documents, exercice, clavier, impression',async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});try{
 for(const width of [320,390,1280]){
 const page=await browser.newPage({viewport:{width,height:850},reducedMotion:'reduce'});const bad=[];
 page.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:8000/')&&r.status()>=400)bad.push(r.url())});
 await page.goto('http://127.0.0.1:8000/design-system/maquette-cycle4-documents-luttes-enquetes.html',{waitUntil:'networkidle'});
 assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('.g-case').count(),3);
 assert.equal(await page.locator('.g-case .g-sources').count(),3);assert.equal(await page.locator('.g-case .g-objection').count(),3);assert.equal(await page.locator('.g-case .g-uncertain').count(),3);
 assert.equal(await page.locator('#documents .g-grid article').count(),3);
 assert.equal(await page.locator('script,img,form,canvas').count(),0);
 const metrics=await page.evaluate(()=>{
  const main=document.querySelector('main'), body=document.body,nums=s=>[...s.matchAll(/[0-9]+/g)].slice(0,3).map(m=>+m[0]);
  const L=rgb=>rgb.map(n=>n/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4).reduce((s,n,i)=>s+n*[.2126,.7152,.0722][i],0);
  const a=L(nums(getComputedStyle(main).color)),b=L(nums(getComputedStyle(body).backgroundColor));
  return {width:innerWidth,documentWidth:document.documentElement.scrollWidth,font:getComputedStyle(main).fontSize,contrast:(Math.max(a,b)+.05)/(Math.min(a,b)+.05),broken:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash)};
 });console.log('C4_QA '+JSON.stringify(metrics));
 assert.ok(metrics.documentWidth<=width+1);assert.ok(parseFloat(metrics.font)>=18);assert.ok(metrics.contrast>=4.5);assert.deepEqual(metrics.broken,[]);assert.deepEqual(bad,[]);
 const nav=page.locator('nav.g-toc a').first();await nav.focus();assert.ok(await nav.evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth))>=3);await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>location.hash),'#documents');
 const detail=page.locator('#cas-0 details');await detail.locator('summary').focus();await page.keyboard.press('Enter');assert.notEqual(await detail.getAttribute('open'),null);
 await page.screenshot({path:'artifacts/c4-'+width+'.png',fullPage:true});
 if(width===320){await page.addStyleTag({content:'html{font-size:200%!important}'});const w=await page.evaluate(()=>document.documentElement.scrollWidth);console.log('C4_ZOOM '+w);assert.ok(w<=width+1)}
 if(width===1280){await page.pdf({path:'artifacts/c4-a4.pdf',format:'A4',printBackground:false})}
 await page.close()
 }
 }finally{await browser.close()}
});