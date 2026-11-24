// C25: human decisions A/A/B and documentary queue cannot turn into publication rights.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(p)=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const reg=read('coordination/REGISTRE_DECISIONS.md');
const queue=JSON.parse(read('coordination/work/c25/QUEUE_RELECTURE_PRIVEE_2026-11-14.json'));
const source=JSON.parse(read('coordination/work/c07/nav7/received-work/readings.json'));
const overlay=JSON.parse(read('coordination/work/c07/developpeuse/master-v1/overlay-reviewed.json'));
const status=JSON.parse(read('coordination/work/c07/nav7/c19-evidence/assembly-status.json'));

test('three direct decisions have unique IDs in the decisions register',()=>{
  for(const id of ['D-C25-INT-01','D-C25-PUB-01','D-C25-ED-01']){
    assert.equal([...reg.matchAll(new RegExp('\\`'+id+'\\`','g'))].length,1,id);
  }
  assert.match(reg,/maintenir le site en privé/);
  assert.match(reg,/aucune fusion vers/);
});

test('every queued R6 text is a source-identical item with no new visa',()=>{
  const originals=new Map(source.texts.map(t=>[t.id,t]));
  assert.equal(queue.scope.existing_r6_texts,24);
  assert.equal(queue.batches.length,3);
  const ids=queue.batches.flatMap(b=>b.items.map(x=>x.id));
  assert.equal(ids.length,15);
  assert.equal(new Set(ids).size,15);
  for(const b of queue.batches){
    assert.equal(b.items.length,5);
    assert.equal(b.publication_authorized,false);
    for(const i of b.items){
      const o=originals.get(i.id);
      assert.ok(o,i.id);
      assert.equal(o.c07_validation.documentary,'a_reconcilier');
      assert.equal(o.c07_validation.publication,'non_autorisee');
      assert.equal(o.sha256,i.source_sha256);
      assert.equal(i.read_status,b.id==='C25-R6-01'?'initial_review_done_not_approved':'draft_correction_prepared_not_approved');
    }
  }
});

test('nine blocked source texts remain excluded and 219 master objects not publishable',()=>{
  const blocked=source.texts.filter(x=>x.c07_validation.documentary==='bloquee').map(x=>x.id).sort();
  assert.deepEqual(queue.blocked_not_queued.map(x=>x.id).sort(),blocked);
  assert.equal(blocked.length,9);
  assert.equal(queue.reserved_media.count,10);
  assert.equal(queue.none_published_or_newly_authorized,true);
  assert.equal(overlay.jur.publication_denied,219);
  assert.equal(status.c07_public_cards,0);
  assert.equal(status.public_deployment_authorized,false);
});

test('five real initial reviews have source-matched IDs and no editorial visa',()=>{
  const r=JSON.parse(read('coordination/work/c25/RELECTURE_R6_01_PREMIERE_PASSE_2026-11-14.json'));
  const expected=queue.batches[0].items.map(x=>x.id).sort();
  assert.deepEqual(r.items.map(x=>x.id).sort(),expected);
  assert.equal(r.items.length,5);
  assert.equal(r.publication_authorized,false);
  assert.equal(r.human_editorial_approval,false);
  assert.equal(r.statuses_unchanged,true);
  for(const x of r.items){
    assert.equal(x.status,'initial_review_done_not_approved');
    assert.ok(x.external_checked.length>=1);
    assert.ok(x.required.length>=2);
    assert.ok(x.observations.length>=2);
  }
  assert.equal(queue.batches[0].review_evidence,'coordination/work/c25/RELECTURE_R6_01_PREMIERE_PASSE_2026-11-14.json');
});

test('second pass inventories exact external URL occurrences without pretending all were checked',()=>{
  const p='coordination/work/c25/RELECTURE_R6_01_INVENTAIRE_LIENS_2026-11-14.json';
  const inventory=JSON.parse(read(p));
  assert.equal(inventory.items.length,5);
  assert.deepEqual(inventory.items.map(x=>x.id).sort(),queue.batches[0].items.map(x=>x.id).sort());
  const total=inventory.items.reduce((n,x)=>n+x.links.length,0);
  const checked=inventory.items.reduce((n,x)=>n+x.links.filter(y=>y.status!=='not_checked').length,0);
  assert.equal(total,82);
  assert.equal(checked,7);
  assert.equal(inventory.permissions.publication,false);
  assert.equal(inventory.permissions.edit_public_html,false);
  assert.equal(inventory.permissions.merge_main,false);
  assert.equal(queue.batches[0].second_pass_evidence.inventory,p);
  assert.equal(queue.batches[0].second_pass_evidence.publication_authorized,false);
  const divergence=inventory.evidence_discrepancies.find(x=>x.id==='CNCDH-2024-VINTAGE');
  assert.ok(divergence);
  assert.equal(divergence.older_value,9350);
  assert.equal(divergence.newer_2024_reference,9295);
  assert.equal(divergence.newer_2025_value,9737);
  assert.equal(divergence.status,'open_critical_source_reconciliation');
});

test('C26: ten unique substantive source-linked private amendments, no publication visa',()=>{
  const batches=queue.batches.slice(1);
  const items=batches.flatMap(b=>b.items);
  assert.equal(items.length,10);
  assert.equal(queue.c26_status.completed_passes,10);
  assert.equal(queue.c26_status.private_candidate_amendments,10);
  assert.equal(queue.c26_status.source_documents_modified,0);
  assert.equal(queue.c26_status.approval_granted,0);
  const amendmentPaths=items.map(x=>x.draft_correction);
  assert.equal(new Set(amendmentPaths).size,10);
  for(const b of batches){
    assert.equal(b.publication_authorized,false);
    assert.equal(b.review_status,'first_editorial_pass_completed_no_visa');
  }
  for(const item of items){
    assert.equal(item.read_status,'draft_correction_prepared_not_approved');
    assert.ok(item.draft_correction.startsWith('coordination/work/c26/corrections-privees/'));
    const md=read(item.draft_correction);
    assert.ok(md.includes(item.id+'.html'),item.id);
    assert.ok(md.includes('## Texte de remplacement candidat'),item.id);
    assert.ok(md.includes('## Modification concrète préparée'),item.id);
    assert.ok(md.includes('## Contrôle restant'),item.id);
    assert.ok(md.includes('Publication : NON'),item.id);
  }
});
