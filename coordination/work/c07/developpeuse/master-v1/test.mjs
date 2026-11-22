import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadSnapshot,buildMaster,buildPublicCards,projectPublic,summarize,run} from './build.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../../../../..');
const overlay=JSON.parse(readFileSync(resolve(root,'coordination/work/c07/developpeuse/master-v1/overlay-reviewed.json'),'utf8'));
const load=()=>buildMaster(loadSnapshot(root),overlay);
test('219 canonical IDs and independent linked registries',()=>{
 const m=load();assert.equal(m.rows.length,219);assert.equal(m.sources.size,100);assert.equal(m.relations.size,19);assert.equal(m.objections.size,30);assert.equal(m.parcours.size,7);assert.equal(m.aliases.size,3);
 assert.equal(new Set(m.rows.map(r=>r.id)).size,219);
 assert.equal(m.rows.filter(r=>r.id.startsWith('wiki-')).length,24);
 assert.equal(m.rows.filter(r=>r.id.startsWith('FN-')).length,71);
 assert.equal(m.rows.filter(r=>r.legacy_primary_door==='carte').length,21);
 assert.equal(m.rows.filter(r=>r.presentation.facets.includes('atlas')&&r.presentation.atlas_geometry!==null).length,0);
});
test('privacy fail closed for all records including adversarial injected fields',()=>{
 const m=load();assert.deepEqual(buildPublicCards(m),[]);
 for(const r of m.rows){assert.equal(projectPublic({...r,title:'PRIVATE TITLE',source_refs:['drive:SECRET'],privacy:{class:'PUBLIC_METADATA_REVIEWED',public_metadata_allowed:true},visas:{publication:{state:'authorized'}}}),null);assert.equal(r.versions.content_sha256_verified,null);assert.equal(r.visas.publication.state,'non_autorisee');}
});
test('stable deterministic checksums and no mutation',()=>{
 const a=run(root),b=run(root);assert.deepEqual(a,b);assert.deepEqual(a.public_cards,[]);assert.equal(a.summary.public_cards,0);
});
test('fail-closed invalid join and rollback without writes',()=>{
 const bundle=loadSnapshot(root);bundle.relations.relations[0].to_id='UNKNOWN';
 assert.throws(()=>buildMaster(bundle,overlay),/Missing relation endpoint/);
 const bad=structuredClone(overlay);bad.med.blob='invalid';
 assert.throws(()=>buildMaster(loadSnapshot(root),bad),/overlay version mismatch/);
 assert.deepEqual(run(root).public_cards,[]);
});
test('blocked historic items and separate visa axes',()=>{
 const m=load(),get=id=>m.rows.find(r=>r.id===id);
 for(const id of ['ARCH-005','ARCH-006','ARCH-007']){assert.equal(get(id).status.legal,'non_examine');assert.equal(get(id).visas.legal.state,'pending');}
 for(const id of ['FN-018','FN-022','FN-048','FN-038','FN-057'])assert.equal(get(id).status.blocked,true);
 assert.equal(get('TIS-001-001').presentation.atlas_geometry,null);
 assert.equal(get('TIS-001-001').presentation.interstice_partnership_verified,false);
});
