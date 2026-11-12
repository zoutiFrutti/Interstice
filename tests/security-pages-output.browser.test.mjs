// Run only against a locally served, genuinely generated Pages directory.
import test from 'node:test';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const base=(process.env.SITE_BASE_URL||'http://127.0.0.1:8000/Interstice/').replace(/\/?$/,'/');

test('Pages : les anciennes URLs de travail ne sont plus servies',async()=>{
  for(const path of ['coordination/JOURNAL_COMMUN.html','coordination/JOURNAL_COMMUN.md','docs/CAS_PRATIQUES_PROTECTION_RECOURS_2026-10-29.html','propositions/CHARTE_DES_COMMUNS_V0.1_2026-10-29.html','apercu-graphiste-35/index.html','edition-premiere/R1_FRONTEND_INTEGRATION_RAPPORT.html','scripts/inventory-wiki-markdown.mjs','supabase/README.md']){
    assert.equal((await fetch(new URL(path,base))).status,404,path);
  }
});
test('Pages : le Manifeste conserve son texte et une source réservée sans lien actif',async()=>{
  const browser=await chromium.launch({args:['--no-sandbox']});
  try{
    const page=await browser.newPage({javaScriptEnabled:false});
    await page.goto(new URL('manifeste-v2-5.html',base).href);
    assert.equal(await page.locator('#manifeste-title').count(),1);
    assert.match(await page.locator('.notice').innerText(),/Source de référence réservée \(DRV-\d{3}\)/);
    assert.equal(await page.locator('a[href^="source-reservee:"]').count(),0);
    assert.equal(await page.locator('article p').count()>20,true);
    assert.equal(await page.locator('a[href="manifeste.html"]').count(),1);
  }finally{await browser.close()}
});
test('Pages : les documents racine conservés sont réellement rendus par Jekyll',async()=>{
  for(const path of ['METHODE_EDITORIALE_SOURCES.html','TESTS_CIRCUIT_CONTRIBUTIONS_WIKI.html','WIKI_APPROFONDISSEMENTS.html']){
    const response=await fetch(new URL(path,base));assert.equal(response.status,200,path);
    assert.match(await response.text(),/<html/);
  }
});
