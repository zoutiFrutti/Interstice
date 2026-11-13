import test from 'node:test';
import assert from 'node:assert/strict';
import {canonicalEntry} from '../assets/nav-01/legacy-entry.mjs';
import {quickLinksFor} from '../assets/nav-01/legacy-quick-links.mjs';
test('Compatibility entry preserves supported doors, selected submenus, paths and manifesto',()=>{
 for(const fragment of ['#porte/vigie/enquetes','#porte/mediatheque/sites-portails','#parcours/PAR-001/decret','#document/manifeste'])assert.equal(canonicalEntry(fragment),'explorer.html'+fragment);
 assert.equal(canonicalEntry('#porte/carte'),'explorer.html#porte/atlas');
});
test('Compatibility navigation rejects executable URLs, unknown submenus and traversal',()=>{
 for(const fragment of ['https://attacker.test','//attacker.test','#porte/vigie/../secrets','#porte/vigie/unknown','#document/javascript:bad','#%E0%A4%A'])assert.equal(canonicalEntry(fragment),'explorer.html#exploration');
});
test('Selected categories scope shortcuts without inventing public Vigie content',()=>{
 assert.equal(quickLinksFor('vigie').length,0);
 assert.deepEqual(quickLinksFor('encyclopedie','ecologie').map(x=>x.href),['wiki-ecologie-sociale-environnement.html']);
 assert.equal(quickLinksFor('entraide','proposer')[0].collection_state,'suspended');
 assert.equal(quickLinksFor('mediatheque','films').length,3);
 assert.equal(quickLinksFor('entraide').length,3);
});
