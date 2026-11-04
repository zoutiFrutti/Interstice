import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fitCamera,project,worldPoint,zoomAt,panBy,constrain,validCamera} from '../assets/nav-01/camera.mjs';
import {DOORS,PARCOURS,BUNDLE,PUBLIC_RESOURCES} from '../assets/nav-01/graph-data.mjs';
import {readFragment} from '../assets/nav-01/navigation-state.mjs';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} ≠ ${b}`);

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
