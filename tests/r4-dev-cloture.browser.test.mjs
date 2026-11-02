import test from 'node:test';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const url='http://127.0.0.1:8000/design-system/faille-navigation-interactive.html';
test('R4 closure: viewport, history, no JS, 400% browser zoom and screenshots',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  for(const width of [320,390,768,1280]){
   const page=await browser.newPage({viewport:{width,height:800},reducedMotion:'reduce'});
   await page.goto(url);
   assert.equal(await page.locator('.node').count(),5);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'overflow '+width);
   await page.locator('[data-id="wiki"]').focus();await page.keyboard.press('Enter');
   assert.equal(new URL(page.url()).hash,'#wiki');
   assert.match(await page.locator('#selection').innerText(),/Wiki/);
   await page.goBack();assert.match(await page.locator('#selection').innerText(),/Carte entière/);
   await page.locator('#overview').click();
   assert.equal(await page.locator('#map').getAttribute('viewBox'),'0 0 1000 1000');
   await page.screenshot({path:'artifacts/faille/cloture-'+width+'.png',fullPage:true});
   await page.evaluate(()=>document.body.style.zoom='400%');
   assert.equal(await page.locator('#rubriques a').count(),5);
   await page.close();
   const context=await browser.newContext({viewport:{width,height:800},javaScriptEnabled:false});
   const plain=await context.newPage();await plain.goto(url);
   assert.equal(await plain.locator('#rubriques a').count(),5);
   await context.close();
  }
 }finally{await browser.close()}
});
test('R4 closure: keyboard, touch mode and direct deep link',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:800},hasTouch:true,isMobile:true,reducedMotion:'reduce'});
  await page.goto(url+'#bibliotheque');
  assert.match(await page.locator('#selection').innerText(),/Médiathèque/);
  await page.locator('#touch-mode').click();
  assert.equal(await page.locator('#touch-mode').getAttribute('aria-pressed'),'true');
  await page.locator('#overview').click();
  await page.locator('#map').focus();await page.keyboard.press('Escape');
  assert.equal(await page.locator('#map').getAttribute('viewBox'),'0 0 1000 1000');
 }finally{await browser.close()}
});

test('R4 closure: two-pointer pinch changes camera and keeps links usable',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:800},hasTouch:true,isMobile:true,reducedMotion:'reduce'});
  await page.goto(url);
  await page.locator('#touch-mode').click();
  const before=await page.locator('#map').getAttribute('viewBox');
  const rect=await page.locator('#map').boundingBox();
  const x=rect.x+rect.width/2,y=rect.y+rect.height/2;
  const send=async(type,id,px)=>page.locator('#map').evaluate((el,a)=>{el.dispatchEvent(new PointerEvent(a.type,{bubbles:true,pointerId:a.id,pointerType:'touch',isPrimary:a.id===1,clientX:a.x,clientY:a.y}))},{type,id,x:px,y});
  await send('pointerdown',1,x-30);await send('pointerdown',2,x+30);
  await send('pointermove',2,x+70);
  await send('pointerup',2,x+70);await send('pointerup',1,x-30);
  assert.notEqual(await page.locator('#map').getAttribute('viewBox'),before);
  assert.equal(await page.locator('#rubriques a').count(),5);
 }finally{await browser.close()}
});

test('R4 : liens alternatifs résolus, ancre Entraide et focus clavier',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:800},reducedMotion:'reduce'});
  await page.goto(url);
  const links=await page.locator('#rubriques a').evaluateAll(nodes=>nodes.map(n=>n.href));
  assert.equal(links.length,5);
  for(const href of links){
   const response=await page.goto(href);
   assert.equal(response.status(),200,href);
   if(href.includes('#entraide')){
    assert.equal(await page.locator('#entraide').count(),1);
    assert.equal(new URL(page.url()).hash,'#entraide');
   }
  }
  await page.goto(url);
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute('href')),'#rubriques');
  await page.locator('#rubriques a').first().focus();
  await page.keyboard.press('Enter');
  assert.match(page.url(),/wiki\.html$/);
 }finally{await browser.close()}
});
