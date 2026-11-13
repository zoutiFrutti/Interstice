import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, writeFile, mkdir, symlink, rm, readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
import {hasReservedLocator,inspectExport} from '../scripts/security/public-boundary.mjs';

// Synthetic resources are assembled so tracked source itself contains no locator.
const host='docs'+'.google.com';
const locator='https://'+host+'/document/d/SYNTHETIC_SECURITY_TEST_123456/edit';
for(const value of [locator,locator.replaceAll('/','\\/'),encodeURIComponent(locator),locator.replaceAll('.', '&#46;'),locator.replaceAll('.', '\\u002e')]) {
  test('refuse un localisateur direct ou échappé sans afficher sa valeur',()=>assert.equal(hasReservedLocator(value),true));
}
test('les références opaques et les URLs ordinaires restent utilisables',()=>{
  assert.equal(hasReservedLocator('source-reservee:DRV-001'),false);
  assert.equal(hasReservedLocator('https://fr.wikipedia.org/wiki/Communs'),false);
  assert.equal(hasReservedLocator('https://drive.google.com'),false);
});
async function temporary(fn){const dir=await mkdtemp(join(tmpdir(),'interstice-boundary-'));try{return await fn(dir)}finally{await rm(dir,{recursive:true,force:true})}}
test('inspecte aussi CSV, fichiers sans extension et contenus binaires',()=>temporary(async dir=>{
  for(const name of ['sheet.csv','export','asset.bin'])await writeFile(join(dir,name),Buffer.concat([Buffer.from([0]),Buffer.from(locator)]));
  const report=await inspectExport(dir);assert.equal(report.accepted,false);assert.equal(report.unsafe_entries,3);assert.equal(JSON.stringify(report).includes('SYNTHETIC'),false);
}));
test('les dossiers internes sont refusés même si leurs fichiers sont propres',()=>temporary(async dir=>{
  await mkdir(join(dir,'coordination'));await writeFile(join(dir,'coordination','clean.txt'),'clean');
  assert.equal((await inspectExport(dir)).accepted,false);
  assert.equal((await inspectExport(dir,{boundary:false})).accepted,true);
}));
test('un rapport sous edition-premiere ne doit pas revenir dans Pages',()=>temporary(async dir=>{
  await mkdir(join(dir,'edition-premiere'));await writeFile(join(dir,'edition-premiere','rapport.html'),'<h1>Rapport technique</h1>');
  assert.equal((await inspectExport(dir)).accepted,false);
  assert.equal((await inspectExport(dir,{boundary:false})).accepted,true);
}));
test('refuse liens symboliques et racine symbolique',()=>temporary(async dir=>{
  const out=join(dir,'out');await mkdir(out);await symlink('../missing',join(out,'link'));
  assert.equal((await inspectExport(out)).accepted,false);
  await symlink(out,join(dir,'root'));await assert.rejects(inspectExport(join(dir,'root')));
}));
test('une racine absente ou un fichier ne sont pas certifiables',()=>temporary(async dir=>{
  await writeFile(join(dir,'file'),'safe');await assert.rejects(inspectExport(join(dir,'file')));await assert.rejects(inspectExport(join(dir,'missing')));
}));
test('les pages et logos autorisés passent sans modifier les fichiers',()=>temporary(async dir=>{
  await mkdir(join(dir,'assets'));await writeFile(join(dir,'assets','logo.svg'),'<svg/>');await writeFile(join(dir,'index.html'),'<h1>Interstice</h1>');
  assert.deepEqual(await inspectExport(dir),{accepted:true,files_scanned:2,unsafe_entries:0});
}));
test('le CLI refuse un export dangereux et ne journalise aucune correspondance',()=>temporary(async dir=>{
  await writeFile(join(dir,'private.txt'),locator);
  const result=spawnSync(process.execPath,[resolve('scripts/security/public-boundary.mjs'),'pages',dir],{encoding:'utf8'});
  assert.equal(result.status,1);assert.equal(result.stdout.includes('SYNTHETIC'),false);assert.equal(result.stdout.includes('private.txt'),false);
}));

for(const unsafe of [false,true])test('inventaire documentaire hors réseau : '+(unsafe?'refus avant export':'source ordinaire conservée'),()=>temporary(async dir=>{
  const body=unsafe?locator:'# Essai\nSource https://fr.wikipedia.org/wiki/Communs';
  const stub=`globalThis.fetch=async url=>({ok:true,json:async()=>String(url).includes('/git/trees/')?{tree:[{type:'blob',path:'coordination/essai.md',sha:'a'.repeat(40)}]}:{encoding:'base64',content:Buffer.from(${JSON.stringify(body)}).toString('base64')}});`;
  const result=spawnSync(process.execPath,['--import','data:text/javascript,'+encodeURIComponent(stub),resolve('scripts/inventory-wiki-markdown.mjs')],{cwd:dir,env:{...process.env,GITHUB_TOKEN:'synthetic-test'},encoding:'utf8'});
  assert.equal(result.status,unsafe?1:0,result.stderr);
  const data=JSON.parse(await readFile(join(dir,'artifacts/wiki-ingest-candidates.json'),'utf8'));
  assert.equal(data.items.length,unsafe?0:1);assert.equal(data.errors.length,unsafe?1:0);
  assert.equal(JSON.stringify(data).includes('SYNTHETIC_SECURITY_TEST'),false);
  for(const item of data.items){assert.equal(item.publication_status,'not_published');assert.equal(item.privacy_confirmed,false);assert.equal(item.license_confirmed,false)}
}));
test('le contrôle export précède tout envoi et ne change pas les permissions CI',async()=>{
  const workflow=await readFile('.github/workflows/wiki-markdown-inventory.yml','utf8');
  assert.ok(workflow.indexOf('public-boundary.mjs content artifacts')<workflow.indexOf('node scripts/submit-wiki-inventory.mjs'));
  const disabled=await readFile('.github/workflows/pont-relieuse-lectrice-c12.yml','utf8');assert.ok(disabled.includes("    if: ${{ false }}") || disabled.includes("    if: ${{ false && startsWith(github.event.issue.title, '[RELIEUSE-LECTRICE]') && github.event.issue.user.login == github.repository_owner }}"));
});

for(const area of ['coordination-console','recherche'])test('reject internal C07 directory: '+area,()=>temporary(async dir=>{await mkdir(join(dir,area));await writeFile(join(dir,area,'data.json'),'{}');assert.equal((await inspectExport(dir)).accepted,false);}));
