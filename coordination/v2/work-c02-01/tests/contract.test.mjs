import test from 'node:test';
import assert from 'node:assert/strict';
import {loadBundle} from '../tools/load.mjs';
import {validateBundle, createIndex, resolveResource, resourcesForDoor, getPublicResources} from '../lib/catalogue.mjs';
import {initialState, readFragment, navigate} from '../lib/navigation-plan.mjs';
const base = loadBundle();
const copy = () => structuredClone(base);

test('complete candidate graph has four doors, seven paths, provenance and closed publication', () => {
  const report = validateBundle(base);
  assert.equal(report.parcours, 7);
  assert.equal(report.public_resources, 0);
  assert.equal(base.resources.filter(item => item.id.startsWith('FN-')).length, 71);
  assert.equal(base.resources.filter(item => /^wiki-.*\.html$/.test(item.id)).length, 24);
});
test('aliases resolve to one canonical object without deleting possible FN duplicates', () => {
  assert.equal(resolveResource(base.resources, 'ECO-001').id, 'ÉCO-001');
  assert.equal(resolveResource(base.resources, 'ECO-19').id, 'FN-024');
  assert.equal(resolveResource(base.resources, 'tis-c8-velo').id, 'TIS-001-001');
  const index = createIndex(base.resources);
  assert.notEqual(index.get('FN-022'), index.get('FN-048'));
  assert.equal(index.get('FN-018').metadata_gap.includes('notice complète'), true);
});
test('ambiguous alias and duplicate canonical ID are rejected', () => {
  const b = copy(); b.resources[0].aliases.push(b.resources[1].id);
  assert.throws(() => validateBundle(b), /alias ambigu/);
  assert.throws(() => createIndex([base.resources[0], base.resources[0]]), /alias ambigu/);
});
test('lost provenance, unknown endpoints and fake historical relations are rejected', () => {
  const b = copy(); b.relations[0].to_id = 'ARTICLE-INVENTE';
  assert.throws(() => validateBundle(b), /extrémité/);
  const c = copy(); c.relations[0].type = 'coopere_avec';
  assert.throws(() => validateBundle(c), /type non qualifié/);
  const d = copy(); d.relations[0].source_refs = [];
  assert.throws(() => validateBundle(d), /provenance absente/);
  const e = copy(); e.relations[0].type = 'filiation_revendiquee';
  assert.throws(() => validateBundle(e), /revendication attribuée/);
});
test('a fifth door, a missing step and an unreachable branch are rejected', () => {
  const b = copy(); b.navigation.doors.push({id:'parcours'});
  assert.throws(() => validateBundle(b), /Quatre portes/);
  const c = copy(); c.parcours[0].steps[0].next_step_ids.push('imaginaire');
  assert.throws(() => validateBundle(c), /bifurcation invalide/);
  const d = copy(); d.parcours[0].steps[0].next_step_ids = [];
  assert.throws(() => validateBundle(d), /inaccessible/);
});
test('PAR-005 cannot lose legal blocking, and one approval flag cannot publish WORK', () => {
  assert.deepEqual(getPublicResources(base), []);
  const b = copy(); b.parcours[4].validation.legal = 'accord';
  assert.throws(() => validateBundle(b), /Blocage juridique/);
  const c = copy(); c.resources[0].validation.publication = 'autorisee';
  assert.throws(() => getPublicResources(c), /ouverture de publication/);
  const d = copy(); d.navigation.public_activation = true;
  assert.throws(() => getPublicResources(d), /activée publiquement/);
});
test('every resource has exactly one known primary door', () => {
  const ids = ['encyclopedie','mediatheque','carte','entraide'];
  assert.equal(ids.flatMap(id => resourcesForDoor(base.resources,id)).length,base.resources.length);
  assert.throws(() => resourcesForDoor(base.resources,'parcours'), /Porte inconnue/);
});
test('legacy fragments restore doors and transverse path index without changing URLs', () => {
  assert.deepEqual(readFragment('#wiki',base),{kind:'door',id:'encyclopedie'});
  assert.deepEqual(readFragment('#atlas',base),{kind:'door',id:'carte'});
  assert.deepEqual(readFragment('#entraide',base),{kind:'door',id:'entraide'});
  assert.deepEqual(readFragment('#parcours',base),{kind:'parcours_index'});
  for(const hash of ['#%','#__proto__','#parcours/PAR-999','#parcours/PAR-001/inventee','#javascript:alert(1)']) assert.deepEqual(readFragment(hash,base),{kind:'overview'});
});
test('branching and returning restores the actual prior step and then its origin door', () => {
  const door=navigate(initialState(),{type:'DOOR',id:'encyclopedie'},base);
  const entry=navigate(door,{type:'PARCOURS',id:'PAR-003'},base);
  const branch=navigate(entry,{type:'STEP',id:'sciences'},base);
  const next=navigate(branch,{type:'STEP',id:'territoires'},base);
  const back=navigate(next,{type:'BACK'},base);
  assert.equal(back.stepId,'sciences');
  const start=navigate(navigate(back,{type:'BACK'},base),{type:'BACK'},base);
  assert.equal(start.doorId,'encyclopedie');
  assert.throws(()=>navigate(entry,{type:'STEP',id:'territoires'},base),/non défini/);
});
test('deep links restore without fabricating browser history and all paths have resolvable entries', () => {
  for(const p of base.parcours){
    const s=navigate(initialState(),{type:'RESTORE_FRAGMENT',fragment:`#parcours/${p.id}`},base);
    assert.equal(s.parcoursId,p.id);assert.equal(s.stepId,p.steps[0].id);assert.deepEqual(s.history,[]);
    assert.equal(navigate(s,{type:'BACK'},base).view,'overview');
  }
});
