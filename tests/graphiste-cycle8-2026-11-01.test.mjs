import test from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';import {mkdir} from 'node:fs/promises';await mkdir('artifacts',{recursive:true});
test('Cycle8: quatre portes documentaires assemblees et navigation',async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});try{for(const width of [320,390,1280]){
 const p=await browser.newPage({viewport:{width,height:850},reducedMotion:'reduce'}),errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto('http://127.0.0.1:8000/design-system/maquette-cycle8-navigation-integree.html',{waitUntil:'networkidle'});
 assert.equal(await p.locator('body > a.c8-skip[href="#contenu"]').count(),1);
 assert.equal(await p.locator('#statuts article').count(),5);
 const statusText=await p.locator('#statuts').innerText();for(const name of ['Adopté individuellement','Candidat','Corrigé','Réserve ouverte','Bloqué'])assert.ok(statusText.includes(name));
 const skip=p.locator('body > a.c8-skip');await skip.focus();assert.ok(await skip.evaluate(el=>el.getBoundingClientRect().left>=0),'skip link must be visibly focused');
 await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>location.hash),'#contenu');
 assert.equal(await p.locator('.c8-nav a').count(),4);assert.equal(await p.locator('main h1').count(),1);assert.equal(await p.locator('article[data-role=source]').count(),4);assert.equal(await p.locator('article[data-role=contradiction]').count(),4);assert.equal(await p.locator('#wiki article[data-role=reserve],#bibliotheque article[data-role=reserve],#biographies article[data-role=reserve],#enquetes article[data-role=reserve]').count(),4);assert.equal(await p.locator('article[data-role=media]').count(),3);assert.equal(await p.locator('img,form,script,iframe').count(),0);
 const links=await p.locator('.c8-section a[href]').evaluateAll(a=>a.map(e=>e.getAttribute('href')));for(const href of links){const response=await p.request.get(new URL(href,p.url()).href);assert.equal(response.status(),200,href)}
 const m=await p.evaluate(()=>{const main=document.querySelector('main'),rgb=s=>(s.match(/[0-9]+/g)||[]).slice(0,3).map(Number),lum=a=>a.map(x=>x/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((s,x,i)=>s+x*[.2126,.7152,.0722][i],0),a=lum(rgb(getComputedStyle(main).color)),b=lum(rgb(getComputedStyle(document.body).backgroundColor));return {width:innerWidth,doc:document.documentElement.scrollWidth,font:getComputedStyle(main).fontSize,contrast:(Math.max(a,b)+.05)/(Math.min(a,b)+.05),missing:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash)}});
 console.log('C8 '+JSON.stringify(m));assert.ok(m.doc<=width+1);assert.ok(parseFloat(m.font)>=18);assert.ok(m.contrast>=4.5);assert.deepEqual(m.missing,[]);assert.deepEqual(errors,[]);
 const nav=p.locator('.c8-nav a').first();await nav.focus();assert.ok(await nav.evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth))>=3);await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>location.hash),'#wiki');
 const details=p.locator('#accessibilite details');await details.locator('summary').focus();await p.keyboard.press('Enter');assert.notEqual(await details.getAttribute('open'),null);
 await p.screenshot({path:'artifacts/c8-'+width+'.png',fullPage:true});
 if(width===320){await p.addStyleTag({content:'html{font-size:200%!important}'});const zoom=await p.evaluate(()=>document.documentElement.scrollWidth);console.log('C8_ZOOM '+zoom);assert.ok(zoom<=width+1)}
 if(width===1280){await p.emulateMedia({media:'print'});const visible=await p.locator('#accessibilite details p').evaluate(e=>getComputedStyle(e).display!=='none');assert.ok(visible,'exercise guidance must print even when details closed');await p.pdf({path:'artifacts/c8-a4.pdf',format:'A4'});}
 await p.close();
 }}finally{await browser.close()}
});