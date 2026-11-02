import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const js=readFileSync('assets/faille-navigation.js','utf8');
const html=readFileSync('design-system/faille-navigation-interactive.html','utf8');
test('selection text stays synchronized',()=>{assert.match(js,/function syncStatus\(/);assert.match(js,/function overview\(\).*?syncStatus\(\)/);assert.match(js,/function choose\(.*?syncStatus\(\)/)});
test('camera zoom preserves pointer anchor',()=>{assert.match(js,/ratio=w\/cam\.w/);assert.match(js,/cam\.x-x/);assert.match(js,/cam\.y-y/)});
test('text routes remain available without script',()=>{assert.match(html,/<nav id="rubriques"/);for(const href of ['../wiki.html','../bibliotheque.html','../atlas.html','../parcours.html'])assert.ok(html.includes('href="'+href+'"'))});
test('reduced motion and keyboard hooks remain',()=>{for(const key of ['prefers-reduced-motion','ArrowLeft','ArrowRight','Escape','popstate','pushState','touch-mode'])assert.ok(js.includes(key),key)});
