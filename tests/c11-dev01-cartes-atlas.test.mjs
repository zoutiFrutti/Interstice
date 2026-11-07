import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {DOORS,PARCOURS} from '../assets/nav-01/graph-data.mjs';
import {DEMO_MAP_ENTRIES} from '../cartes-data.mjs';
import {filterMapEntries,withoutPublicMapLocation} from '../cartes-core.mjs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('quatre portes dans l’ordre validé, aucun accès carte comme cinquième porte',()=>{
 assert.deepEqual(DOORS.map(x=>x.id),['entraide','encyclopedie','archives','mediatheque']);
 assert.equal(PARCOURS.length,7);
 assert.equal(PARCOURS.find(x=>x.id==='PAR-005').blocked_practical,true);
});
test('porte Encyclopédie et Atlas proposent les deux cartes fictives',()=>{
 const explorer=read('explorer.html'),atlas=read('atlas.html');
 for(const html of [explorer,atlas]){
  assert.match(html,/decouvrir-initiatives\.html\?lecture=communs#cartes/);
  assert.match(html,/decouvrir-initiatives\.html\?lecture=possibles#cartes/);
 }
 assert.match(explorer,/data-door="encyclopedie"/);
});
test('liens directs lus par le module existant et cartes accessibles',()=>{
 const html=read('decouvrir-initiatives.html'),app=read('initiatives-app.mjs');
 assert.match(html,/id="cartes"/);
 assert.match(html,/id="reading-communs"/);
 assert.match(html,/id="reading-possibles"/);
 assert.match(app,/params\.get\("lecture"\)/);
 assert.match(app,/setReading\(requestedReading\)/);
 assert.match(app,/import\("\.\/cartes-map\.mjs"\)/);
});
test('aucune donnée réelle, les deux lectures sont distinctes',()=>{
 assert.ok(DEMO_MAP_ENTRIES.length>0);
 assert.ok(DEMO_MAP_ENTRIES.every(x=>x.isDemo===true&&x.source?.type==='simulation'&&x.publicContact===null));
 for(const reading of ['communs','possibles'])assert.ok(filterMapEntries(DEMO_MAP_ENTRIES,{reading}).length>0);
 assert.equal(filterMapEntries(DEMO_MAP_ENTRIES,{reading:'inconnue'}).length,0);
 assert.ok(Array.isArray(withoutPublicMapLocation(DEMO_MAP_ENTRIES,[])));
});
