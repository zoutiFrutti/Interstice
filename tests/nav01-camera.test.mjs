import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,writeFile,mkdtemp} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {fitCamera,project,worldPoint,zoomAt,panBy,constrain,validCamera} from '../assets/nav-01/camera.mjs';
import {DOORS,PARCOURS,BUNDLE,PUBLIC_RESOURCES} from '../assets/nav-01/graph-data.mjs';
import {readFragment} from '../assets/nav-01/navigation-state.mjs';
import {NUCLEUS,diveCamera,retreat,edgeCue,stepLayout} from '../assets/nav-01/spatial.mjs';
test('C08 keeps the emergency stop and exact reviewed C13 exceptions',async()=>{
  const root=new URL('../',import.meta.url);
  const workflow=await readFile(new URL('.github/workflows/pont-relieuse-lectrice-c12.yml',root),'utf8');
  assert.match(workflow,/^    if: \$\{\{ false && startsWith\(github\.event\.issue\.title, '\[RELIEUSE-LECTRICE\]'\) && github\.event\.issue\.user\.login == github\.repository_owner \}\}$/m);
  assert.match(workflow,/timeout-minutes: 5/);
  assert.match(workflow,/LECTRICE_AI_ENABLED: \$\{\{ vars\.LECTRICE_AI_ENABLED \}\}/);
  assert.match(workflow,/C13-LECTRICE-RESULTAT/);
  const manifest=JSON.parse(await readFile(new URL('coordination/work/c07/C13_EXCEPTIONS.json',root),'utf8'));
  assert.deepEqual(Object.keys(manifest.blobs).sort(),[
    '.github/workflows/pont-relieuse-lectrice-c12.yml',
    'coordination/agents/demande_relieuse_c11.py',
    'coordination/agents/pont_relieuse_c12.py',
    'coordination/agents/test_demande_relieuse_c11.py',
    'coordination/agents/test_pont_relieuse_c12.py'
  ]);
  assert.deepEqual(Object.keys(manifest.qa_blobs),['scripts/r6-preservation-check.py','tests/r6-int01-convergence.browser.test.mjs']);
  assert.equal(manifest.qa_reviewed_updates.decision_id,'D-WORK-C11-QA-01');
  assert.equal(manifest.qa_reviewed_updates.approved_blob,'ab32243392991efcfb96fea09a7d227c89b9c087');
  assert.equal(manifest.reviewed_updates.emergency_source_sha,'df73c5dabf47a0b73d2b55f0346c7006d485dd98');
  for(const [path,expected] of Object.entries({...manifest.blobs,...manifest.qa_blobs})){
    const bytes=await readFile(new URL(path,root));
    assert.equal(createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex'),expected,path);
  }
});
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} ≠ ${b}`);
for(const [width,height] of [[320,844],[390,844],[768,1024],[1280,900],[844,390]])test(`plongée 50 %, recul et directions : ${width}×${height}`,()=>{
  const camera=diveCamera(width,height);close(2*NUCLEUS.r*width/camera.span,Math.min(width,height)*.5);
  const back=retreat(camera);close(back.span,camera.span*1.12);
  for(const door of DOORS){const cue=edgeCue(camera,width,height,door);assert.ok(cue.x>=0&&cue.x<=width);assert.ok(cue.y>=0&&cue.y<=height);}
});
test('étapes spatiales locales, uniques ; aucune ressource éditoriale ajoutée',()=>{
  for(const path of PARCOURS){const points=stepLayout(path,DOORS);assert.equal(points.length,path.steps.length);assert.equal(new Set(points.map(p=>p.id)).size,points.length);assert.ok(points.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.y)));}
});

for(const width of [320,390,768,1280])test(`projection, pan et zoom ancré : ${width}px`,()=>{
  const rect={width,height:640,left:17,top:73};const camera=fitCamera(width,rect.height);
  for(const p of [{x:160,y:190},{x:850,y:785},{x:500,y:500}]){
    const screen=project(camera,width,rect.height,p);
    const restored=worldPoint(camera,rect,screen.x+rect.left,screen.y+rect.top);close(restored.x,p.x);close(restored.y,p.y);
  }
  const x=rect.left+width*.3,y=rect.top+rect.height*.7;
  const anchor=worldPoint(camera,rect,x,y);const zoomed=zoomAt(camera,rect,.7,x,y);const after=worldPoint(zoomed,rect,x,y);
  close(anchor.x,after.x);close(anchor.y,after.y);
  const panned=panBy(camera,rect,22,-31);close(panned.cx,camera.cx-22*camera.span/width);close(panned.cy,camera.cy+31*camera.span/width);
});
test('camera bornée, sans valeur non finie dans les vues restaurées',()=>{
  assert.deepEqual(constrain({cx:-2000,cy:4000,span:2}),{cx:-800,cy:1800,span:180});
  assert.equal(validCamera({cx:0,cy:1,span:4200}),true);
  assert.equal(Boolean(validCamera({cx:NaN,cy:1,span:500})),false);
  assert.equal(Boolean(validCamera({cx:0,cy:1,span:99999})),false);
});
test('quatre portes, sept Parcours ; aucun contenu candidat ouvert',()=>{
  assert.equal(DOORS.length,4);assert.equal(PARCOURS.length,7);assert.equal(PUBLIC_RESOURCES.length,0);
  assert.equal(new Set(PARCOURS.map(p=>p.id)).size,7);
  for(const p of PARCOURS){
    assert.equal(p.editorial_state,'candidate_non_visee');
    for(const id of p.doors)assert.ok(DOORS.some(d=>d.id===id));
    for(const step of p.steps){assert.equal('resource_ids' in step,false);for(const id of [...step.next_step_ids,...step.return_step_ids])assert.ok(p.steps.some(s=>s.id===id));}
    assert.equal(readFragment('#parcours/'+p.id,BUNDLE).id,p.id);
  }
  assert.equal(PARCOURS.find(p=>p.id==='PAR-005').blocked_practical,true);
  for(const d of DOORS)assert.deepEqual(readFragment('#porte/'+d.id,BUNDLE),{kind:'door',id:d.id});
  assert.equal(readFragment('#%E0%A4%A',BUNDLE).kind,'overview');
  assert.equal(readFragment('#parcours/PAR-001/inconnu',BUNDLE).kind,'overview');
});
test('SVG officiels inchangés à l’octet',async()=>{
  for(const [name,sha] of [['faille-noire','7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6'],['interstice','0fe365cd02a238bf4486f936683d194aab6a1ee2e62e2d5a2eaee9b72eff0453']]){
    const content=await readFile(new URL('../assets/logo-'+name+'.svg',import.meta.url));
    assert.equal(createHash('sha256').update(content).digest('hex'),sha);
  }
});
test('le constructeur refuse une sortie contenant un contenu hors liste',async()=>{
  const output=await mkdtemp(join(tmpdir(),'nav01-output-'));
  await writeFile(join(output,'non-autorise.txt'),'fixture de test');
  const result=spawnSync(process.execPath,['scripts/build-nav-preview.mjs',output],{encoding:'utf8'});
  assert.notEqual(result.status,0);assert.match(result.stderr,/fichier hors liste/);
  assert.equal(await readFile(join(output,'non-autorise.txt'),'utf8'),'fixture de test');
});

// C01 acceptance: the four equal branches replace the old standalone Carte door.
test('C01 equal 2 × 2 doors and Atlas aliases preserve historical access',()=>{
  assert.deepEqual(DOORS.map(d=>d.title),['Faire Ensemble','Encyclopédie des communs','Archives des communs','Médiathèque']);
  const [first,second,third,fourth]=DOORS;
  assert.equal(first.y,second.y);assert.equal(third.y,fourth.y);
  assert.equal(first.x,third.x);assert.equal(second.x,fourth.x);
  assert.ok(first.x<second.x&&first.y<third.y);
  for(const fragment of ['#atlas','#porte/carte','#porte/atlas'])assert.deepEqual(readFragment(fragment,BUNDLE),{kind:'door',id:'encyclopedie',section:'atlas'});
  for(const fragment of ['#entraide','#porte/entraide','#faire-ensemble','#porte/faire-ensemble'])assert.deepEqual(readFragment(fragment,BUNDLE),{kind:'door',id:'entraide'});
  assert.deepEqual(readFragment('#porte/archives',BUNDLE),{kind:'door',id:'archives'});
  assert.equal(PARCOURS.flatMap(p=>p.steps).length,29);
});


test('QCM 2 enlarges portrait-phone overview without changing desktop or tablet geometry',()=>{
 for(const width of [320,390,430,600]){
  const camera=fitCamera(width,844);
  assert.ok(1000*width/camera.span>1000*width/1220,'Le cercle est plus grand que le cadrage précédent');
  assert.ok(1000*width/camera.span>width,'Les bords du cercle peuvent être explorés par déplacement');
  for(const door of DOORS){const p=project(camera,width,844,door);assert.ok(p.x>=28&&p.x<=width-28,'Les quatre accès restent atteignables');}
 }
 assert.deepEqual(fitCamera(768,1024),{cx:500,cy:500,span:1220});
 assert.deepEqual(fitCamera(1280,900),{cx:500,cy:500,span:1180*1280/900});
});

test('Faire Ensemble dated suspension is explicit with or without JavaScript; original URLs remain accessible',async()=>{
 const {COLLECTIVE_TOOLS,COLLECTIVE_TOOLS_NOTICE,COLLECTIVE_TOOLS_OBSERVED_ON}=await import('../assets/nav-01/graph-data.mjs');
 const html=await readFile(new URL('../explorer.html',import.meta.url),'utf8');
 assert.equal(COLLECTIVE_TOOLS_OBSERVED_ON,'2026-11-05');
 assert.ok(html.includes(COLLECTIVE_TOOLS_NOTICE));
 assert.equal(COLLECTIVE_TOOLS.length,3);
 for(const tool of COLLECTIVE_TOOLS){
  assert.ok(html.includes('href="'+tool.url+'"'));
  assert.ok(html.includes('aria-describedby="textual-tool-'+tool.id+'"'));
  assert.ok(html.includes(tool.status+' — '+tool.detail));
 }
 assert.equal(COLLECTIVE_TOOLS.find(t=>t.id==='proposer').status,'Envois suspendus');
});
