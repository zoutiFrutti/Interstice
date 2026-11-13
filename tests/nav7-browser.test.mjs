// Test Chromium de la page candidate locale, sans déploiement, ni requête externe.
import test from 'node:test';
import assert from 'node:assert/strict';
import {resolve,dirname} from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {chromium} from 'playwright';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const url=pathToFileURL(resolve(root,'nav7-candidate.html')).href;

test('NAV7 Chromium : six portes, Manifeste modal et réinitialisation',async()=>{
  const browser=await chromium.launch({args:['--no-sandbox']});
  try{
    const page=await browser.newPage({reducedMotion:'reduce',viewport:{width:390,height:844}});
    const exceptions=[];
    page.on('pageerror',error=>exceptions.push(error.message));
    await page.goto(url);
    await assert.equal(await page.locator('.node[data-door]').count(),6);
    await assert.equal(await page.locator('#manifest-open').count(),1);
    await page.locator('button[data-point="1"]').click();
    assert.equal(await page.locator('#door-details h2').innerText(),'Faire Ensemble');
    assert.equal(await page.locator('#door-details .submenus a').count(),3);
    await page.locator('button[data-point="3"]').click();
    assert.equal(await page.locator('#door-details h2').innerText(),'La Vigie de la Faille');
    assert.equal(await page.locator('#door-details .submenus a').count(),0);
    await page.locator('#reset').click();
    assert.equal(await page.locator('#door-details h2').innerText(),'Explorer');
    assert.equal(await page.locator('button[data-door][aria-pressed="true"]').count(),0);
    await page.locator('#manifest-open').click();
    await page.locator('#manifest-dialog').waitFor({state:'visible'});
    assert.equal(await page.locator('#manifest-dialog[open]').count(),1);
    assert.equal(await page.locator('#manifest-dialog iframe').getAttribute('src'),'manifeste-v2-5.html');
    await page.locator('#manifest-close').click();
    assert.equal(await page.locator('#manifest-dialog[open]').count(),0);
    assert.deepEqual(exceptions,[]);
  }finally{await browser.close()}
});

test('NAV7 Chromium : navigation sans JS et fidélité du dessin SVG',async()=>{
  const browser=await chromium.launch({args:['--no-sandbox']});
  try{
    const page=await browser.newPage({javaScriptEnabled:false,viewport:{width:375,height:812}});
    await page.goto(url);
    assert.equal(await page.locator('.direct a').count(),6);
    assert.equal(await page.locator('.stage img').getAttribute('src'),'assets/identite/r7/nav7/interstice-r7-nav7-candidate.svg');
    assert.equal(await page.locator('.stage img').evaluate(img=>img.complete&&img.naturalWidth>0),true);
    assert.equal(await page.locator('a[href="manifeste-v2-5.html"]').count()>0,true);
  }finally{await browser.close()}
});
