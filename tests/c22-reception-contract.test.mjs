// C22: checks reported human QA without converting it into a publication approval.
// This suite is read-only, deterministic and requires only Node 22.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>JSON.parse(readFileSync(new URL('../'+path,import.meta.url),'utf8'));
const qa=read('coordination/work/c21/RECEPTION_ANDROID_2026-11-14.json');
const contract=read('coordination/work/c07/nav7/convergence-contract.json');
const status=read('coordination/work/c07/nav7/c19-evidence/assembly-status.json');
const preview=read('coordination/work/c07/nav7/c19-evidence/existing-private-preview-receipt.json');
const readings=read('coordination/work/c07/nav7/received-work/readings.json');
const overlay=read('coordination/work/c07/developpeuse/master-v1/overlay-reviewed.json');

test('C21: sixteen reported Android checks, no failures and visual approval limited to that preview',()=>{
  assert.equal(qa.schema,'interstice/c21-android-manual-reception/1');
  assert.equal(qa.report_kind,'direct_user_manual_test');
  assert.equal(qa.tests.length,16);
  assert.equal(new Set(qa.tests.map(x=>x.key)).size,16);
  assert.deepEqual(qa.tests.reduce((a,x)=>(a[x.domain]=(a[x.domain]??0)+1,a),{}),
    {entree:4,portes:4,sous_menus:4,graphisme:4});
  assert.ok(qa.tests.every(x=>x.result==='reported_pass'));
  assert.equal(qa.passed_reported,16);
  assert.equal(qa.failed_reported,0);
  assert.equal(qa.not_checked_reported,0);
  assert.equal(qa.conclusions.navigation_ux,'accepted_by_user_for_tested_preview');
  assert.equal(qa.conclusions.visual_r7_b1,'accepted_by_user_for_tested_preview');
});

test('C21: do not claim exact deployed build identity or broad publication approval',()=>{
  assert.equal(qa.build_identity_verified,false);
  assert.equal(qa.source_commit_of_tested_preview,null);
  for(const gate of ['editorial_publication_visa','license_or_privacy_visa',
    'technical_exact_build_validation','merge_or_deployment_authorization']){
    assert.equal(qa.conclusions[gate],false,gate);
  }
  assert.equal(preview.version,1);
  assert.equal(preview.access_mode,'custom');
  assert.equal(preview.owner_count,1);
  assert.equal(preview.other_users,0);
  assert.equal(preview.external_visitors,0);
  assert.equal(preview.authenticated_browser_content_rechecked,false);
  assert.notEqual(preview.source_commit,qa.source_commit_of_tested_preview);
});

test('C22: preserve six approved coordinate assignments, distinct manifesto and 31 categories',()=>{
  assert.equal(contract.revision,2);
  assert.deepEqual(contract.primary_ports.map(x=>[x.point,x.id,...x.coordinates]),[
    [1,'entraide',258,203],
    [2,'atlas',397,178],
    [3,'vigie',498,261],
    [4,'encyclopedie',233,450],
    [5,'archives',333,593],
    [6,'mediatheque',461,426]
  ]);
  assert.equal(contract.primary_ports.reduce((s,x)=>s+x.submenus.length,0),31);
  assert.equal(contract.manifesto.point,7);
  assert.deepEqual(contract.manifesto.coordinates,[272,354]);
  assert.equal(contract.manifesto.not_a_port,true);
});

test('C22: inherited texts remain separate; no new content approval',()=>{
  assert.equal(readings.texts.length,24);
  assert.equal(new Set(readings.texts.map(x=>x.id)).size,24);
  assert.ok(readings.texts.every(x=>x.main_identical&&x.new_publication_visa===false));
  const sameTitle=readings.texts.filter(x=>x.title==='Égalité, genres et inclusivité.');
  assert.deepEqual(sameTitle.map(x=>x.id).sort(),[
    'wiki-egalite-fiches','wiki-egalite-genres-inclusivite'
  ]);
  assert.equal(status.tertiary_menus,31);
  assert.equal(status.existing_texts,24);
  assert.equal(status.editorial_visas_added,0);
  assert.equal(status.public_deployment_authorized,false);
});

test('C22: 219 master objects remain closed for public publication',()=>{
  assert.equal(contract.documentary_gates.master_objects,219);
  assert.equal(contract.documentary_gates.publishing_authorized,false);
  assert.equal(contract.documentary_gates.PAR_005,'blocked');
  assert.equal(contract.documentary_gates.allow_unreviewed_docs,false);
  assert.equal(status.c07_public_cards,0);
  assert.equal(status.review_summary.publication_authorized,false);
  assert.equal(overlay.jur.publication_denied,219);
  assert.deepEqual(overlay.per_id,{});
});
