import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
test('Accueil : identité plus grande que le slogan et responsive', async () => {
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try {for (const width of [320,390,768,1280]){
 const page=await browser.newPage({viewport:{width,height:900}});
 const res=await page.goto('http://127.0.0.1:8000/index.html');
 assert.equal(res.status(),200);
 const m=await page.evaluate(()=>{
 const logo=document.querySelector('.hero .brand-identity img');
 const brand=document.querySelector('.hero .brand-caption');
 const title=document.querySelector('.hero h1');
 const a=getComputedStyle(brand),b=getComputedStyle(title);
 return {width:innerWidth,doc:document.documentElement.scrollWidth,logo:logo.getBoundingClientRect().width,brand:parseFloat(a.fontSize),title:parseFloat(b.fontSize),imageOk:logo.complete&&logo.naturalWidth>0};
 });
 console.log('ACCUEIL_QA '+JSON.stringify(m));
 assert.ok(m.doc<=width+1,'horizontal overflow');
 assert.ok(m.brand>=(width<=360?25:27),'wordmark not sufficiently large');
 assert.ok(m.logo>=(width<=360?94:112),'logo too small');
 assert.ok(m.title<=46,'slogan too large');
 assert.ok(m.imageOk,'missing original logo');
 await page.close();
 }}finally{await browser.close()}
});