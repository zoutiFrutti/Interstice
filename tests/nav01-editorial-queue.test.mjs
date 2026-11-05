import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdtemp,readdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {currentQueue,createQueue,HELD} from '../scripts/editorial-queue.mjs';
import {buildEditorialReview} from '../scripts/build-editorial-review.mjs';
test('all 219 objects occur exactly once, with five per batch maximum and holds preserved',async()=>{
 const q=await currentQueue();
 const ids=[...q.existing.map(x=>x.id),...q.held.map(x=>x.id),...q.batches.flatMap(x=>x.resource_ids)];
 assert.equal(q.total,219);assert.equal(ids.length,219);assert.equal(new Set(ids).size,219);
 assert.equal(q.existing.length,24);assert.equal(q.publication_authorized,false);
 for(const b of q.batches){assert.ok(b.resource_ids.length>0&&b.resource_ids.length<=5);assert.ok(b.resource_ids.every(id=>!HELD[id]));}
 assert.deepEqual(q.batches[0].resource_ids,['ASSO-008','ASSO-007','ARCH-002','ARCH-006','BIO-012']);
 assert.deepEqual(q.batches[1].resource_ids,['ARCH-003','ARCH-004','ARCH-005','ARCH-007','COL-003']);
 const saved=JSON.parse(await readFile('coordination/work/c07/EDITORIAL_QUEUE.json','utf8'));
 assert.deepEqual(saved,q);
});
test('queue refuses duplicate IDs and traversal; review refuses wrong assignment',async()=>{
 assert.throws(()=>createQueue([{id:'../secret'}]));
 assert.throws(()=>createQueue([{id:'a'},{id:'a'}]));
 const dir=await mkdtemp(join(tmpdir(),'wrong-review-'));
 await assert.rejects(()=>buildEditorialReview({id:'lot-commune-02',audience:'owner_private',publication_authorized:false,human_visa:'PENDING',items:[{id:'BIO-012'}]},dir),/Identifiant/);
 await assert.rejects(()=>buildEditorialReview({id:'lot-unknown-01',audience:'owner_private',publication_authorized:false,human_visa:'PENDING',items:[{id:'ARCH-003'}]},dir),/Lot enregistré/);
 assert.equal((await readdir(dir)).length,0);
});
test('private hub reports only actual pages and refuses a modified built page',async()=>{
 const {buildReviewHub}=await import('../scripts/build-review-hub.mjs');
 const {writeFile}=await import('node:fs/promises');
 const nav=await mkdtemp(join(tmpdir(),'real-review-hub-'));
 let progress=await buildReviewHub(nav);
 assert.equal(progress.prepared_private,0);assert.equal(progress.awaiting_editorial_choice,0);
 // Deliberately simulated content, not a real documentary dossier.
 const batch={id:'lot-commune-02',audience:'owner_private',publication_authorized:false,human_visa:'PENDING',prepared_on:'SIMULATION',items:[{id:'ARCH-003',title:'Fixture',intro:'Aucun contenu réel',distinct_contribution:'Démonstration du contrôle',source_sha256:'a'.repeat(64),source_revision:'simulated',sections:[{title:'Fixture',paragraphs:['Texte synthétique']}],reserves:['Aucun visa réel'],sources:[{label:'Fixture',url:'https://example.org',access:'SIMULÉ'}]}]};
 const directory=join(nav,'relecture-commune-02');
 await buildEditorialReview(batch,directory);progress=await buildReviewHub(nav);
 assert.equal(progress.prepared_private,1);assert.equal(progress.editorially_retained,0);
 assert.equal(progress.queued_not_prepared+progress.prepared_private+progress.existing_r6+progress.held,219);
 await writeFile(join(directory,'ARCH-003.html'),'modification non vérifiée');
 await assert.rejects(()=>buildReviewHub(nav),/Page différente/);
});
