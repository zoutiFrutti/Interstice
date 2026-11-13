import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const html=readFileSync(new URL('../nav7-candidate.html',import.meta.url),'utf8');
test('The old NAV7 entry uses the canonical implementation and keeps native alternatives',()=>{
 assert.match(html,/src="assets\/nav-01\/legacy-entry.mjs"/);
 assert.doesNotMatch(html,/<button|<iframe|<dialog|<script>/);
 for(const id of ['entraide','atlas','vigie','encyclopedie','archives','mediatheque'])assert.ok(html.includes('explorer.html#porte/'+id));
 assert.ok(html.includes('manifeste-v2-5.html'));
});
test('Official R6 logos remain exact and are not replaced by a R7 candidate',()=>{
 for(const [file,sha] of [['logo-faille-noire.svg','7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6'],['logo-interstice.svg','0fe365cd02a238bf4486f936683d194aab6a1ee2e62e2d5a2eaee9b72eff0453']])assert.equal(createHash('sha256').update(readFileSync(new URL('../assets/'+file,import.meta.url))).digest('hex'),sha);
});
