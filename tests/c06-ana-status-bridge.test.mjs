import test from 'node:test';
import assert from 'node:assert/strict';
import {PARCOURS,DOORS} from '../assets/nav-01/graph-data.mjs';
import {PARCOURS_STATUSES,parcoursStatus} from '../assets/nav-01/parcours-status.mjs';
import {STEP_RESOURCES,candidateResourceIds,authorizedResourceLinks} from '../assets/nav-01/step-resources.mjs';

test('four doors, seven candidate statuses and 29 connected steps',()=>{
  assert.equal(DOORS.length,4);assert.equal(new Set(DOORS.map(x=>x.id)).size,4);
  assert.equal(PARCOURS.length,7);assert.equal(Object.keys(PARCOURS_STATUSES).length,7);
  const keys=[];
  for(const path of PARCOURS){
    assert.ok(parcoursStatus(path));
    const ids=new Set(path.steps.map(s=>s.id));
    for(const step of path.steps){
      keys.push(path.id+'/'+step.id);
      for(const next of [...step.next_step_ids,...step.return_step_ids])assert.ok(ids.has(next));
      assert.ok(candidateResourceIds(path.id,step.id).length>0);
      assert.deepEqual(authorizedResourceLinks(path.id,step.id),[]);
    }
  }
  assert.equal(keys.length,29);assert.deepEqual(keys.sort(),Object.keys(STEP_RESOURCES).sort());
});
test('PAR-005 remains blocked',()=>{
  const p=PARCOURS.find(p=>p.id==='PAR-005');
  assert.equal(p.blocked_practical,true);
  assert.match(parcoursStatus(p),/BLOQUÉ/);
  for(const s of p.steps)assert.deepEqual(authorizedResourceLinks(p.id,s.id),[]);
});
