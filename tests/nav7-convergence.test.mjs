import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const rel='coordination/work/c07/nav7/convergence-contract.json';
const contract=JSON.parse(readFileSync(resolve(root,rel),'utf8'));
const html=readFileSync(resolve(root,'nav7-candidate.html'),'utf8');
const svg=readFileSync(resolve(root,contract.coordinate_system.source),'utf8');

test('Contrat NAV7 : six points décidés, septième Manifeste distinct',()=>{
  assert.equal(contract.schema,'interstice/nav7-c07-convergence/1');
  assert.equal(contract.primary_ports.length,6);
  assert.deepEqual(contract.primary_ports.map(p=>p.point),[1,2,3,4,5,6]);
  assert.deepEqual(contract.primary_ports.map(p=>p.title),[
    'Faire Ensemble','Atlas des communs','La Vigie de la Faille',
    'Encyclopédie des communs','Archives des communs','Médiathèque des communs'
  ]);
  assert.equal(contract.manifesto.point,7);
  assert.equal(contract.manifesto.not_a_port,true);
  assert.equal(contract.manifesto.direct_link,'manifeste-v2-5.html');
  assert.equal(contract.manifesto.source_r6_node,true);
});

test('Chaque point et son groupe sont réellement présents dans le HTML/SVG',()=>{
  assert.deepEqual(contract.coordinate_system.viewbox,[0,0,665,665]);
  assert.ok(!svg.includes('<image')&&!svg.includes('data:image/'),'SVG final ne doit pas embarquer une image raster');
  for(const p of contract.primary_ports){
    const n=String(p.point).padStart(2,'0');
    const grp=svg.match(new RegExp('<g id="r7-porte-'+n+'"[^>]*>[\\s\\S]*?<circle cx="(\\d+)" cy="(\\d+)"'));
    assert.ok(grp,'pôle absent du SVG : '+n);
    assert.deepEqual([Number(grp[1]),Number(grp[2])],p.coordinates);
    const re=new RegExp('<button class="node" style="--x:([0-9.]+)%;--y:([0-9.]+)%"[^>]*data-point="'+p.point+'" data-door="'+p.title+'"');
    const btn=html.match(re);
    assert.ok(btn,'bouton absent : '+n);
    assert.ok(Math.abs(Number(btn[1])-p.coordinates[0]/665*100)<0.02,'x incohérent : '+n);
    assert.ok(Math.abs(Number(btn[2])-p.coordinates[1]/665*100)<0.02,'y incohérent : '+n);
  }
  const [x,y]=contract.manifesto.coordinates;
  assert.ok(svg.includes('<circle cx="'+x+'" cy="'+y+'" r="11.5"'),'point 7 absent du SVG');
  assert.ok(html.includes('id="manifest-open"'),'bouton Manifeste absent');
  assert.equal((html.match(/id="manifest-open"/g)||[]).length,1);
});

test('Liens existants seulement, sans promotion de documents C07',()=>{
  assert.equal(contract.primary_ports.reduce((n,p)=>n+p.submenus.length,0),15);
  for(const p of contract.primary_ports){
    const hrefs=[p.current_link,...p.submenus].filter(Boolean);
    if(p.point===3)assert.deepEqual(hrefs,[],'Vigie : pas de page publique fictive');
    for(const href of hrefs){
      assert.match(href,/^[a-z0-9-]+[.]html(?:#[a-z0-9-]+)?$/);
      const [file,fragment]=href.split('#');
      const filePath=resolve(root,file);
      assert.equal(existsSync(filePath),true,'fichier inexistant : '+href);
      if(fragment){
        const page=readFileSync(filePath,'utf8');
        assert.ok(page.includes('id="'+fragment+'"'),'ancre manquante : '+href);
      }
      assert.ok(html.includes(href),'lien prévu absent du HTML : '+href);
    }
  }
  assert.equal(existsSync(resolve(root,contract.manifesto.direct_link)),true);
  assert.equal(contract.documentary_gates.master_objects,219);
  assert.equal(contract.documentary_gates.publishing_authorized,false);
  assert.equal(contract.documentary_gates.allow_unreviewed_docs,false);
  assert.equal(contract.documentary_gates.PAR_005,'blocked');
  assert.ok(!/docs[.]google[.]com|drive[.]google[.]com|supabase[.]co/.test(html));
  assert.match(html,/<meta name="robots" content="noindex,nofollow">/);
});

test('Interdire de faire passer des chiffres Work pour une source intégrée',()=>{
  assert.equal(contract.source.work_local_commit_reported,'7d61a53');
  assert.equal(contract.source.work_local_artifact_received,false);
  assert.equal(contract.source.work_local_artifact_sha256,null);
  assert.equal(contract.work_claims_unverified.submenus,31);
  assert.equal(contract.work_claims_unverified.html_pages,87);
  assert.equal(contract.work_claims_unverified.files,135);
  assert.notEqual(contract.work_claims_unverified.submenus,contract.primary_ports.reduce((n,p)=>n+p.submenus.length,0));
});
