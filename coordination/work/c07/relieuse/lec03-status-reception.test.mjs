// C07 LEC-03: documentary reception checks, no rights granted, no new public data.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadSnapshot,buildMaster,projectPublic,buildPublicCards} from '../developpeuse/master-v1/build.mjs';
const workspace=resolve(dirname(fileURLToPath(import.meta.url)),'../../../..');
const file=p=>JSON.parse(readFileSync(resolve(workspace,p),'utf8'));
const overlay=file('coordination/work/c07/developpeuse/master-v1/overlay-reviewed.json');
const queue=file('coordination/work/c07/EDITORIAL_QUEUE.json');
const lot1=file('coordination/work/c07/LOT_COMMUNE_01.json');
const lot2=file('coordination/work/c07/LOT_COMMUNE_02.json');
const snapshot=()=>loadSnapshot(workspace);
const master=()=>buildMaster(snapshot(),overlay);
test('LEC03: all 219 IDs allocated once, held never mixed into batches',()=>{
 const resources=snapshot().resources.resources.map(r=>r.id);
 const assigned=[...queue.existing.map(r=>r.id),...queue.held.map(r=>r.id),...queue.batches.flatMap(b=>b.resource_ids)];
 const held=new Set(queue.held.map(r=>r.id));
 assert.equal(queue.total,219);assert.equal(resources.length,219);
 assert.equal(queue.existing.length,24);assert.equal(queue.held.length,9);assert.equal(queue.batches.length,38);
 assert.deepEqual([...assigned].sort(),[...resources].sort());assert.equal(new Set(assigned).size,219);
 assert.equal(queue.publication_authorized,false);
 for(const b of queue.batches){assert.ok(b.resource_ids.length>=1&&b.resource_ids.length<=5);for(const id of b.resource_ids)assert.ok(!held.has(id));}
 assert.ok(queue.blocked_paths.includes('PAR-005'));
});
test('LEC03: selected editorial lots never become publication visas',()=>{
 assert.equal(lot1.publication_authorized,false);assert.equal(lot2.publication_authorized,false);
 assert.equal(lot1.items.length,5);assert.equal(lot2.items.length,5);
 let retained=0,notSelected=0;
 for(const [lot,items] of [[lot1,lot1.items],[lot2,lot2.items]]){
  assert.equal(lot.human_visa,'PENDING');
  for(const r of items){
   assert.equal(r.publication_visa,'PENDING');
   assert.match(r.retention_decision?.content_sha256||r.editorial_decision?.content_sha256||'',/^[a-f0-9]{64}$/);
   if(r.editorial_status==='RETAINED_WITH_RESERVATIONS')retained++;
   else if(r.editorial_status==='NOT_SELECTED_THIS_REVIEW')notSelected++;
   else assert.fail('Unknown editorial state');
  }
 }
 assert.equal(retained,9);assert.equal(notSelected,1);
});
test('LEC03: blocked dossiers and legacy human editorial agreement cannot publish',()=>{
 const b=snapshot();
 const raw=new Map(b.resources.resources.map(r=>[r.id,r]));
 const m=master(),byId=new Map(m.rows.map(r=>[r.id,r]));
 for(const id of ['BIO-019','BIO-021','FN-018','FN-022','FN-038','FN-048','FN-057','DROIT-001','DROIT-002']){
  assert.ok(raw.has(id));assert.equal(projectPublic(byId.get(id)),null);
 }
 assert.equal(b.parcours.parcours.find(p=>p.id==='PAR-005').validation.documentary,'bloque');
 assert.equal(b.parcours.parcours.find(p=>p.id==='PAR-005').publication_authorized,false);
 for(const id of ['ARCH-002','ARCH-007']){
  assert.equal(raw.get(id).legacy_human_approval,'ACCORD_EDITO_ZOUT');
  assert.equal(raw.get(id).validation.publication,'non_autorisee');
  assert.equal(byId.get(id).visas.publication.state,'non_autorisee');
  assert.equal(projectPublic(byId.get(id)),null);
 }
 assert.deepEqual(buildPublicCards(m),[]);
});
test('LEC03: priority archives remain legally unreviewed and content unverified',()=>{
 const m=master(),byId=new Map(m.rows.map(r=>[r.id,r]));
 const raw=new Map(snapshot().resources.resources.map(r=>[r.id,r]));
 for(const id of ['ARCH-005','ARCH-006','ARCH-007']){
  const rec=byId.get(id);
  assert.equal(raw.get(id).kind,'archive');assert.equal(raw.get(id).primary_door,'encyclopedie');
  assert.equal(rec.presentation.door,'encyclopedie');
  assert.ok(rec.presentation.facets.includes('archives'));
  assert.equal(rec.status.legal,'non_examine');
  assert.equal(rec.versions.content_sha256_verified,null);
  assert.equal(rec.visas.legal.state,'pending');
  assert.equal(rec.visas.publication.state,'non_autorisee');
  assert.equal(rec.privacy.public_metadata_allowed,false);
  assert.equal(projectPublic(rec),null);
 }
});
test('LEC03: injection of apparently approved historic statuses cannot open a public card',()=>{
 const m=master(),r=m.rows.find(x=>x.id==='ARCH-007');
 const mutated={...r, status:{...r.status,legal:'approuve',editorial:'approuve'},privacy:{...r.privacy,class:'PUBLIC_METADATA_REVIEWED',public_metadata_allowed:true},visas:{...r.visas,publication:{state:'autorisee',actor:'simulated',content_sha256:'fake'}}};
 assert.equal(projectPublic(mutated),null);assert.deepEqual(buildPublicCards(m),[]);
});
