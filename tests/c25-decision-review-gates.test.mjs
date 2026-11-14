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
      assert.equal(i.read_status,'not_yet_read_for_C25');
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
