import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
test('Contrat C10 Graphiste: non destructif et fermé par défaut',()=>{
const x=JSON.parse(readFileSync('design-system/cycle10-graphiste-contrat-adaptateur.json','utf8'));
assert.equal(x.upstream.graphiste_head,'87b9eff2336f37b88ba9d45bfdda2d3a41390800');
assert.equal(x.upstream.contract_blob,'b4e2e56be6bb82c0fb14860aa083ea9011e0a89e');
assert.equal(x.upstream.mapping_blob,'a02373657a552ebecf600fb54b8b5fe78bdedd69');
assert.equal(x.routes.length,4);assert.equal(new Set(x.routes.map(x=>x.kind)).size,4);
assert.equal(x.media.publication_default,false);assert.equal(x.media.rights_default,'unverified');
assert.ok(x.pending.some(v=>v.startsWith('C ')));
assert.equal(x.status_fields.length,5);assert.ok(x.constraints.includes('no_alias_activation'));
});