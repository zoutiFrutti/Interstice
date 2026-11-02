import test from 'node:test';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const url='http://127.0.0.1:8000/design-system/faille-navigation-interactive.html';
test('R4 viewport, links, no JS, reduced motion and browser zoom',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try {
  for(const width of [320,390,768,1280]){
   const page=await browser.newPage({viewport:{width,height:800},reducedMotion:'reduce'});
   await page.goto(url);
   assert.equal(await page.locator('.node').count(),5);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'horizontal overflow '+width);
   await page.locator('[data-id="wiki"]').focus();await page.keyboard.press('Enter');
   assert.equal(new URL(page.url()).hash,'#wiki');
   assert.match(await page.locator('#selection').innerText(),/Wiki/);
   await page.goBack();
   assert.match(await page.locator('#selection').innerText(),/Carte entière/);
   await page.locator('#overview').click();
   assert.equal(await page.locator('#map').getAttribute('viewBox'),'0 0 1000 1000');
   await page.evaluate(()=>document.body.style.zoom='200%');
   assert.equal(await page.locator('#rubriques a').count(),5);
   await page.screenshot({path:'artifacts/faille/r4-'+width+'.png',fullPage:true});
   await page.close();
   const nojs=await browser.newContext({viewport:{width,height:800},javaScriptEnabled:false});
   const plain=await nojs.newPage();await plain.goto(url);
   assert.equal(await plain.locator('#rubriques a').count(),5);
   await nojs.close();
  }
 }finally{await browser.close()}
});
test('R4 touch mode, zoom and keyboard',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:800},hasTouch:true,isMobile:true,reducedMotion:'reduce'});
  await page.goto(url);
  await page.locator('#touch-mode').click();
  assert.equal(await page.locator('#touch-mode').getAttribute('aria-pressed'),'true');
  await page.locator('#zoom-in').click();
  assert.notEqual(await page.locator('#map').getAttribute('viewBox'),'0 0 1000 1000');
  await page.locator('#map').focus();await page.keyboard.press('Escape');
  assert.equal(await page.locator('#map').getAttribute('viewBox'),'0 0 1000 1000');
 }finally{await browser.close()}
});
