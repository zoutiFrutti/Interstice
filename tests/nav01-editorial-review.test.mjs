import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,readdir} from 'node:fs/promises';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {buildEditorialReview} from '../scripts/build-editorial-review.mjs';
const fixture=()=>({id:'lot-commune-01',audience:'owner_private',publication_authorized:false,human_visa:'PENDING',prepared_on:'2026-11-05',items:[{id:'ARCH-002',title:'<script>fixture</script>',intro:'Fiction de test, aucun document réel',distinct_contribution:'Comparer des preuves, pas réécrire une biographie.',source_sha256:'a'.repeat(64),source_revision:'fixture-simulee',sections:[{title:'Source de test',paragraphs:['<img src=x onerror=alert(1)>']}],reserves:['Une annonce ne prouve pas une exécution.'],sources:[{label:'Source fictive',url:'https://example.org/archive',access:'SIMULÉ, aucun accès réel'}]}]});
test('private review keeps visas pending and escapes all supplied content',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'private-review-')),m=await buildEditorialReview(fixture(),dir);
 assert.equal(m.human_visa,'PENDING');assert.equal(m.publication_authorized,false);
 const html=await readFile(join(dir,'ARCH-002.html'),'utf8');
 assert.match(html,/&lt;script&gt;/);assert.doesNotMatch(html,/<img|<iframe|<form/);assert.equal((html.match(/<script\b/g)||[]).length,1);assert.match(html,/reading-return.mjs/);
 assert.match(html,/Une annonce ne prouve pas/);assert.match(html,/SIMULÉ/);assert.match(html,/noindex,nofollow/);
 assert.equal((await readdir(dir)).length,3);
});
test('public output, false human approval, blocked IDs, duplicates and oversize lots are refused',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'private-review-refused-'));
 for(const mutate of [
  b=>b.audience='public',b=>b.human_visa='APPROVED',b=>b.publication_authorized=true,
  b=>b.items[0].id='BIO-019',b=>b.items[0].id='PAR-005',
  b=>b.items.push(b.items[0]),b=>b.items=Array(6).fill(b.items[0]),
  b=>b.items[0].sources[0].url='javascript:alert(1)',b=>b.items[0].sources[0].access='',
  b=>b.items[0].source_sha256='',b=>b.items[0].reserves=[]
 ]){const b=fixture();mutate(b);await assert.rejects(()=>buildEditorialReview(b,dir));}
 assert.equal((await readdir(dir)).length,0,'No file written for refused input');
});
test('generic artifact contains no private review pages or active marker; every media has an editorial reason',async()=>{
 const {execFileSync}=await import('node:child_process');
 const {MEDIA}=await import('../assets/nav-01/media-catalogue.mjs');
 const dir=await mkdtemp(join(tmpdir(),'generic-no-private-'));
 execFileSync(process.execPath,['scripts/build-nav-preview.mjs',dir]);
 assert.ok(!(await readdir(dir)).includes('relecture'));
 assert.doesNotMatch(await readFile(join(dir,'index.html'),'utf8'),/data-private-review=/);
 for(const x of MEDIA){assert.ok(x.interest.length>60);assert.equal(x.embed_authorized,false);const html=await readFile(join(dir,'lectures',x.id+'.html'),'utf8');assert.ok(html.includes(x.interest.replaceAll('&','&amp;')));}
});

test('human retention is bound to the reviewed version; publication remains pending',async()=>{
 const {editorialContentHash}=await import('../scripts/build-editorial-review.mjs');
 const batch=fixture(),item=batch.items[0];
 batch.retention_decisions=[{id:item.id,status:'RETAINED_WITH_RESERVATIONS',scope:'candidate_private_editorial_only',source:'zout_direct_conversation',recorded_on:'2026-11-05',reviewed_page_sha256:'b'.repeat(64),content_sha256:editorialContentHash(item)}];
 const dir=await mkdtemp(join(tmpdir(),'retained-review-'));
 const m=await buildEditorialReview(batch,dir);
 assert.equal(m.retained_count,1);assert.equal(m.items[0].editorial_status,'RETAINED_WITH_RESERVATIONS');
 assert.equal(m.publication_authorized,false);assert.equal(m.publication_visa,'PENDING');
 assert.match(await readFile(join(dir,item.id+'.html'),'utf8'),/RETENUE PAR ZOUT AVEC RÉSERVES/);
 // A change to text, evidence, reservations or source must never inherit the choice.
 for(const mutate of [
  b=>b.items[0].title+=' changé',
  b=>b.items[0].sections[0].paragraphs[0]='Nouvelle affirmation',
  b=>b.items[0].reserves[0]='Réserve supprimée de fait',
  b=>b.items[0].sources[0].access='Prétendue lecture nouvelle',
  b=>b.items[0].source_revision+='nouvelle',
  b=>b.retention_decisions.push({...b.retention_decisions[0]})
 ]){
  const changed=structuredClone(batch);mutate(changed);
  await assert.rejects(()=>buildEditorialReview(changed,dir),/Décision éditoriale/);
 }
});
test('unchecked item is preserved as not selected, never retained or left awaiting the same choice',async()=>{
 const {editorialContentHash}=await import('../scripts/build-editorial-review.mjs');
 const {buildReviewHub}=await import('../scripts/build-review-hub.mjs');
 const b=fixture(),item=b.items[0];
 b.editorial_decisions=[{id:item.id,status:'NOT_SELECTED_THIS_REVIEW',scope:'candidate_private_editorial_only',source:'zout_direct_conversation',recorded_on:'2026-11-05',reviewed_page_sha256:'c'.repeat(64),content_sha256:editorialContentHash(item)}];
 const nav=await mkdtemp(join(tmpdir(),'unchecked-review-'));
 const m=await buildEditorialReview(b,join(nav,'relecture'));
 assert.equal(m.retained_count,0);assert.equal(m.not_selected_count,1);assert.equal(m.pending_count,0);
 assert.equal(m.items[0].editorial_status,'NOT_SELECTED_THIS_REVIEW');assert.equal(m.publication_authorized,false);
 const html=await readFile(join(nav,'relecture',item.id+'.html'),'utf8');
 assert.match(html,/NON SÉLECTIONNÉE DANS CE LOT/);assert.match(html,/Réserves à conserver/);
 const hub=await buildReviewHub(nav);
 assert.equal(hub.editorially_retained,0);assert.equal(hub.not_selected_this_review,1);assert.equal(hub.awaiting_editorial_choice,0);
});
