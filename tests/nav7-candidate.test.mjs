import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=readFileSync(resolve(root,'nav7-candidate.html'),'utf8');
const expected=[
  ['1','Faire Ensemble'],
  ['2','Atlas des communs'],
  ['3','La Vigie de la Faille'],
  ['4','Encyclopédie des communs'],
  ['5','Archives des communs'],
  ['6','Médiathèque des communs']
];
const targetPages=['index.html','atlas.html','wiki.html','squats-et-lieux-autonomes.html','bibliotheque.html','manifeste-v2-5.html','assets/logo-interstice.svg'];

test('Six boutons de porte distincts exactement, ordre décidé',()=>{
  const tags=[...source.matchAll(/<button\b[^>]*class="node"[^>]*>/g)].map(m=>m[0]);
  assert.equal(tags.length,6);
  for (const [id,label] of expected) {
    assert.equal(tags.filter(tag=>tag.includes(`data-point="${id}"`)&&tag.includes(`data-door="${label}"`)).length,1);
    assert.match(tags.find(tag=>tag.includes(`data-point="${id}"`)),/aria-controls="door-details"/);
    assert.match(tags.find(tag=>tag.includes(`data-point="${id}"`)),/aria-label=/);
  }
});
test('Manifeste bouton 7 et lien direct existant',()=>{
  assert.match(source,/<button\b[^>]*data-point="7"[^>]*id="manifest-open"/);
  assert.match(source,/<dialog id="manifest-dialog"/);
  assert.match(source,/<iframe[^>]*data-src="manifeste-v2-5\.html"/);
  assert.match(source,/<a href="manifeste-v2-5\.html">Manifeste V2\.5/);
  assert.ok(existsSync(resolve(root,'manifeste-v2-5.html')));
});
test('Retour central explicite, état aria-pressed mis à jour et secours sans animation',()=>{
  assert.match(source,/<button class="center" id="reset"/);
  assert.match(source,/setAttribute\('aria-pressed','false'\)/);
  assert.match(source,/prefers-reduced-motion:reduce/);
  assert.match(source,/<nav class="direct" aria-label="Navigation textuelle sans animation"/);
  assert.match(source,/<a class="skip" href="#contenu">/);
});
test('Aucun fichier interdit : pas de nouveau catalogue ni exposition de liens de sources Drive',()=>{
  assert.match(source,/<meta name="robots" content="noindex,nofollow">/);
  assert.doesNotMatch(source,/https?:\/\/(?:drive|docs)\.google\.com/i);
  assert.doesNotMatch(source,/fetch\s*\(|localStorage|sessionStorage|navigator\.geolocation/);
  assert.match(source,/La Vigie de la Faille.*porte en préparation/s);
});
test('Chaque lien de navigation vers un fichier local cible existe',()=>{
  for(const p of targetPages) assert.ok(existsSync(resolve(root,p)),p);
});
