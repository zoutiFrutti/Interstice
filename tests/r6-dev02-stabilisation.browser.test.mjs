import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {chromium} from 'playwright';
const url='http://127.0.0.1:8000/design-system/faille-navigation-interactive.html';
test('R6 DEV02: node coordinates exactly correspond to source SVG circles',()=>{
 const svg=readFileSync('assets/logo-interstice.svg','utf8');
 const html=readFileSync('design-system/faille-navigation-interactive.html','utf8');
 const js=readFileSync('assets/faille-navigation.js','utf8');
 const expected={wiki:[258,203],bibliotheque:[498,261],atlas:[233,450],parcours:[461,426],entraide:[333,593]};
 for(const [id,[x,y]] of Object.entries(expected)){
  assert.match(svg,new RegExp('<circle cx="'+x+'" cy="'+y+'"'));
  const X=Math.round(x*1000/665),Y=Math.round(y*1000/665);
  assert.match(html,new RegExp('data-id="'+id+'"[^>]*transform="translate\\('+X+' '+Y+'\\)"'));
  assert.match(js,new RegExp(id+':\\[[^\\]]*,'+X+','+Y+','));
 }
});
test('R6 DEV02: viewport, 400 percent zoom, keyboard, deep links, history, no-JS',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  for(const width of [320,390,768,1024,1280,1920]){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
   await page.goto(url);
   assert.equal(await page.locator('.node').count(),5);
   assert.equal(await page.locator('#rubriques a').count(),5);
   await page.locator('[data-id="wiki"]').focus();
   await page.keyboard.press('Enter');
   assert.equal(new URL(page.url()).hash,'#wiki');
   assert.match(await page.locator('#selection').innerText(),/Wiki/);
   await page.goBack();
   assert.match(await page.locator('#selection').innerText(),/Carte entière/);
   await page.evaluate(()=>{document.documentElement.style.zoom='400%'});
   for(const id of ['enter','overview','back','touch-mode','zoom-in','zoom-out','all']){
    const el=page.locator('#'+id);
    await el.focus();
    assert.ok(await el.evaluate(e=>document.activeElement===e&&e.getBoundingClientRect().width>0),id+' '+width);
   }
   assert.equal(await page.locator('#rubriques a').count(),5);
   await page.screenshot({path:'artifacts/r6-identite/dev02-zoom400-'+width+'.png',fullPage:true});
   await page.close();
  }
  const ctx=await browser.newContext({javaScriptEnabled:false,viewport:{width:320,height:800}});
  const p=await ctx.newPage();await p.goto(url);
  assert.equal(await p.locator('#rubriques a').count(),5);
  await ctx.close();
 }finally{await browser.close()}
});
