import test from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';
test('Passages: défilement souple et option de réduction du mouvement',async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 try{
  for(const config of [{width:390,height:844,motion:'no-preference',snap:'y'},{width:390,height:844,motion:'reduce',snap:'none'},{width:320,height:520,motion:'no-preference',snap:'none'}]){
   const p=await browser.newPage({viewport:{width:config.width,height:config.height},reducedMotion:config.motion});
   await p.goto('http://127.0.0.1:8000/design-system/passages-interstice-prototype.html');
   const out=await p.evaluate(()=>({snap:getComputedStyle(document.documentElement).scrollSnapType,doc:document.documentElement.scrollWidth,w:innerWidth,sections:document.querySelectorAll('main section').length}));
   console.log('UX2 '+JSON.stringify({...config,...out}));
   assert.equal(out.snap,config.snap);assert.ok(out.doc<=out.w+1);assert.equal(out.sections,3);
   await p.close();
  }
 }finally{await browser.close()}
});