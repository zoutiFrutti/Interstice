import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
test('prototype immersif: dépendances, contrôles et repli',()=>{
 const html=read('design-system/faille-navigation-interactive.html');
 for(const id of ['enter','overview','back','zoom-in','zoom-out','all','rubriques','map']) assert.match(html,new RegExp('id="'+id+'"'));
 for(const p of ['assets/faille-navigation.css','assets/faille-navigation.js','assets/logo-interstice.svg'])assert.ok(existsSync(p),p);
 for(const route of ['wiki.html','bibliotheque.html','atlas.html','parcours.html'])assert.ok(existsSync(route),route);
 assert.match(html,/href="#rubriques"/);
 assert.match(html,/noindex,nofollow/);
});
test('navigation: pan, zoom, deux pointeurs, mouvement réduit et historique',()=>{
 const js=read('assets/faille-navigation.js'),css=read('assets/faille-navigation.css');
 for(const pattern of [/pointerdown/,/pointermove/,/pointers\.size===2/,/pointercancel/,/setPointerCapture/,/pushState/,/popstate/,/prefers-reduced-motion/])assert.match(js+css,pattern);
 assert.match(css,/prefers-reduced-motion/);
});
