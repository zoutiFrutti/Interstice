import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdtemp,writeFile,readdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {validateSeed,summarize,parseRoute,prepareMission,filterMissions,STATE_KEYS,ALLOWED_ROLES,coordinationRows} from '../coordination-console/model.mjs';
const seed=JSON.parse(await readFile(new URL('../coordination-console/seed-public.json',import.meta.url),'utf8'));

test('données publiques, états indépendants et inconnus conservés',()=>{
  assert.equal(validateSeed(seed),seed);assert.equal(seed.ateliers.length,19);assert.equal(seed.missions.length,8);
  for(const m of seed.missions){assert.deepEqual(Object.keys(m.states).sort(),[...STATE_KEYS].sort());assert.equal(m.states.recue,null);assert.equal(m.states.validee,false);}
  const unsafe=structuredClone(seed);unsafe.controls.ai_execution_enabled=true;assert.throws(()=>validateSeed(unsafe),/Commande externe/);
  const received=structuredClone(seed);received.missions[0].states.recue=true;assert.throws(()=>validateSeed(received),/accusé/);
  const approved=structuredClone(seed);approved.missions[0].states.validee=true;assert.throws(()=>validateSeed(approved),/décision humaine/);
});
test('une livraison ou une CI ne fabrique pas activité et validation',()=>{
  const counts=summarize(seed);assert.equal(counts.declaredDeliveries,1);assert.equal(counts.declaredInProgress,0);assert.equal(counts.unknownProgress,7);assert.equal(counts.notValidated,8);
  const partial=structuredClone(seed);partial.missions[0].states.commencee=true;assert.equal(summarize(partial).declaredInProgress,1);assert.equal(partial.missions[0].states.recue,null);
});
test('recherche et liens profonds, sans interpolation de code',()=>{
  assert.equal(filterMissions(seed,'toutes','C03-ORC-03').length,1);assert.equal(filterMissions(seed,'toutes','inexistant-xyz').length,0);
  assert.equal(filterMissions(seed,'controles').length,8);assert.deepEqual(parseRoute('#mission/C03-JUR-03'),{view:'mission',id:'C03-JUR-03',filter:'toutes'});
  assert.equal(parseRoute('#%E0%A4%A').view,'missions');assert.equal(parseRoute('#mission/<script>').view,'missions');
});
test('tableau unique : PR typées, sans réception ou mission exécutée inférée',()=>{
  const rows=coordinationRows(seed);
  assert.equal(rows.length,seed.missions.length);
  const arc=rows.find(m=>m.id==='C03-ARC-03');
  assert.equal(arc.prs[0].number,162);
  assert.equal(arc.prs[0].nature,'anteriorite');
  assert.equal(arc.states.recue,null);
  assert.equal(arc.status,'Avancement non attesté');
  const orc=rows.find(m=>m.id==='C03-ORC-03');
  assert.equal(orc.prs[0].nature,'livrable_documentaire');
  assert.equal(orc.status,'Livrable candidat');
  assert.equal(orc.states.validee,false);
  const jur=rows.find(m=>m.id==='C03-JUR-03');
  assert.equal(jur.prs.length,0);
  assert.match(jur.blockage,/PAR-005/);
  assert.ok(rows.every(m=>m.nextAction.length>0 && m.ateliers.length>0));
  const invalid=structuredClone(seed);invalid.mission_prs.push({...invalid.mission_prs[0]});
  assert.throws(()=>validateSeed(invalid),/dupliqué/);
  const unknown=structuredClone(seed);unknown.mission_prs[0].number=999999;
  assert.throws(()=>validateSeed(unknown),/qualifié/);
});
test('préparation strictement conforme au normaliseur C11 réel',()=>{
  const input={id:'DEMO-C11-LOCAL',objectif:'  Comparer les références, sans envoyer.  ',ateliers:['lectrice','mediatheque']};
  const actual=prepareMission(input);
  const py=spawnSync('python3',['-c',"import json,sys;sys.path.insert(0,'coordination/agents');from demande_relieuse_c11 import normalize;print(json.dumps(normalize(json.load(sys.stdin))))"],{input:JSON.stringify(input),encoding:'utf8'});
  assert.equal(py.status,0);assert.deepEqual(actual,JSON.parse(py.stdout));assert.equal(actual.execution_ateliers,'NON_DECLENCHEE');assert.equal(ALLOWED_ROLES.length,17);
  for(const unsafe of [{...input,publication:true},{...input,ateliers:['orchestratrice']},{...input,id:'<script>'},{...input,objectif:''}])assert.throws(()=>prepareMission(unsafe));
});
test('le frontend ne possède aucun canal d’administration ni secret',async()=>{
  const js=await readFile(new URL('../coordination-console/console.mjs',import.meta.url),'utf8');
  assert.doesNotMatch(js,/api\.github\.com|XMLHttpRequest|WebSocket|sendBeacon|localStorage|sessionStorage|method\s*:\s*['"]POST/);
  assert.equal((js.match(/\bfetch\(/g)||[]).length,1);assert.match(js,/fetch\('seed-public\.json'/);
  assert.match(js,/trigger\.disabled=true/);assert.doesNotMatch(js,/trigger\.addEventListener/);
  assert.doesNotMatch(JSON.stringify(seed),/gh[pousr]_[A-Za-z0-9]{20,}|sk-proj-[A-Za-z0-9]{20,}/);
});
test('sortie hors liste refusée sans suppression',async()=>{
  const output=await mkdtemp(join(tmpdir(),'coord-output-'));await writeFile(join(output,'prive.txt'),'fixture sans donnée privée');
  const run=spawnSync(process.execPath,['scripts/build-coordination-preview.mjs',output],{encoding:'utf8'});
  assert.notEqual(run.status,0);assert.match(run.stderr,/hors liste/);assert.equal(await readFile(join(output,'prive.txt'),'utf8'),'fixture sans donnée privée');
});
test('artefact limité à l’app publique, avec SVG officiels inchangés et HTML sans JS',async()=>{
  const output=await mkdtemp(join(tmpdir(),'coord-safe-'));const run=spawnSync(process.execPath,['scripts/build-coordination-preview.mjs',output],{encoding:'utf8'});assert.equal(run.status,0,run.stderr);
  const names=await readdir(output);assert.deepEqual(names.sort(),['README.txt','assets','checksums.json','console.css','console.mjs','index.html','model.mjs','github-observer.mjs','seed-public.json'].sort());
  const html=await readFile(join(output,'index.html'),'utf8');assert.match(html,/C03-ORC-03/);assert.match(html,/sans JavaScript|Sans JavaScript/);assert.match(html,/Réception|réception|Reçue/);
  for(const [name,sha] of [['faille-noire','7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6'],['interstice','0fe365cd02a238bf4486f936683d194aab6a1ee2e62e2d5a2eaee9b72eff0453']])assert.equal(createHash('sha256').update(await readFile(join(output,'assets/logo-'+name+'.svg'))).digest('hex'),sha);
});


test('C01 documentary snapshot keeps exact inputs, reserves and publication separate',async()=>{
 const proof=seed.c07_catalogue,inventory=proof.documentary_inventory;
 assert.match(proof.source_commit,/^[a-f0-9]{40}$/);
 assert.equal(inventory.thematic_objections,36);assert.equal(inventory.transverse_reserves,6);
 assert.equal(inventory.work_reserves,30);assert.equal(inventory.documentary_relations,19);assert.equal(inventory.fn_notices,71);
 assert.equal(inventory.held_resources,9);assert.equal(inventory.retained_with_reservations,9);assert.equal(inventory.not_selected_in_review,1);
 assert.equal(inventory.new_publication_authorizations,0);assert.equal(inventory.par005_blocked,true);
 for(const [path,hash] of Object.entries(inventory.sources))assert.equal(createHash('sha256').update(await readFile(path)).digest('hex'),hash,path);
 const fake=structuredClone(seed);fake.c07_catalogue.documentary_inventory.new_publication_authorizations=1;
 assert.throws(()=>validateSeed(fake),/interdit/);
 const blocked=structuredClone(seed);blocked.c07_catalogue.documentary_inventory.par005_blocked=false;
 assert.throws(()=>validateSeed(blocked),/interdit/);
});
