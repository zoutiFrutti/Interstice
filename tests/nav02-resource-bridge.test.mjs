import test from 'node:test';
import assert from 'node:assert/strict';
import {PARCOURS} from '../assets/nav-01/graph-data.mjs';
import {STEP_RESOURCES, candidateResourceIds, authorizedResourceLinks} from '../assets/nav-01/step-resources.mjs';

test('29 candidate steps match the existing navigation without orphan keys', () => {
  const expected = PARCOURS.flatMap(path => path.steps.map(step => `${path.id}/${step.id}`));
  assert.equal(expected.length, 29);
  assert.deepEqual(Object.keys(STEP_RESOURCES).sort(), expected.sort());
  for(const path of PARCOURS) for(const step of path.steps){
    const ids = candidateResourceIds(path.id,step.id);
    assert.ok(Array.isArray(ids));
    assert.ok(ids.length > 0);
    assert.equal(new Set(ids).size,ids.length);
  }
});

test('all editorial resources remain inaccessible without human publication visas', () => {
  for(const path of PARCOURS) for(const step of path.steps)
    assert.deepEqual(authorizedResourceLinks(path.id,step.id),[]);
  assert.deepEqual(authorizedResourceLinks('PAR-005','relecture'),[]);
  assert.deepEqual(candidateResourceIds('PAR-999','missing'),[]);
});
