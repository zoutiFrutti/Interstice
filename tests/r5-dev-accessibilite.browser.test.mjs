import test from 'node:test';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const url='http://127.0.0.1:8000/design-system/faille-navigation-interactive.html';
test('R5: 400% zoom preserves operable controls and readable navigation',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:320,height:800},reducedMotion:'reduce'});
  await page.goto(url);
  await page.evaluate(()=>{document.documentElement.style.zoom='400%'});
  for(const id of ['enter','overview','back','touch-mode','zoom-in','zoom-out','all']){
   const el=page.locator('#'+id);assert.equal(await el.count(),1,id);
   await el.focus();assert.equal(await el.evaluate(e=>document.activeElement===e),true,id);
   const box=await el.boundingBox();assert.ok(box&&box.width>0&&box.height>0,id);
  }
  await page.locator('#zoom-in').click();await page.locator('#overview').click();
  assert.equal(await page.locator('#map').getAttribute('viewBox'),'0 0 1000 1000');
  for(const link of await page.locator('#rubriques a').all()){
   await link.focus();assert.equal(await link.evaluate(e=>document.activeElement===e),true);
  }
  await page.screenshot({path:'artifacts/faille/r5-400percent-320.png',fullPage:true});
 }finally{await browser.close()}
});
test('R5: keyboard focus ring and live region semantics',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:800},reducedMotion:'reduce'});
  await page.goto(url);
  assert.equal(await page.locator('#selection').getAttribute('role'),'status');
  assert.equal(await page.locator('#selection').getAttribute('aria-live'),'polite');
  await page.locator('[data-id="wiki"]').focus();
  assert.equal(await page.locator('[data-id="wiki"]').getAttribute('role'),'button');
  assert.equal(await page.locator('[data-id="wiki"]').evaluate(el=>getComputedStyle(el).outlineStyle!=='none'),true);
  await page.keyboard.press('Space');
  assert.match(await page.locator('#selection').innerText(),/Wiki/);
  assert.equal(await page.locator('#selection a').count(),1);
  await page.locator('#map').focus();await page.keyboard.press('Escape');
  assert.match(await page.locator('#selection').innerText(),/Carte entière/);
  await page.screenshot({path:'artifacts/faille/r5-focus-390.png',fullPage:true});
 }finally{await browser.close()}
});
test('R5: no-JS links and reduced motion',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  const context=await browser.newContext({javaScriptEnabled:false,reducedMotion:'reduce',viewport:{width:320,height:800}});
  const page=await context.newPage();await page.goto(url);
  assert.equal(await page.locator('#rubriques a').count(),5);
  assert.equal(await page.locator('a.skip').getAttribute('href'),'#rubriques');
  await page.screenshot({path:'artifacts/faille/r5-nojs-320.png',fullPage:true});
  await context.close();
  const motion=await browser.newPage({reducedMotion:'reduce'});await motion.goto(url);
  assert.equal(await motion.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches),true);
 }finally{await browser.close()}
});
