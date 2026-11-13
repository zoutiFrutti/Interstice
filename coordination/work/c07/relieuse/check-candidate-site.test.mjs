import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../../../..');
const read=p=>readFileSync(resolve(root,p),'utf8');
test('C07 candidate is separate and the historical homepage stays intact',()=>{
 assert.equal(read('index.html').includes('id="liste-propositions"'),true);
 assert.equal(existsSync(resolve(root,'candidat.html')),true);
});
test('Four doors, atlas and seven paths are discoverable from candidate',()=>{
 const html=read('candidat.html');
 for(const label of ['Faire Ensemble','Encyclopédie des communs','Archives des communs','Médiathèque','Atlas des communs','Sept Parcours','PAR-005'])assert.ok(html.includes(label),label);
 for(const href of ['explorer.html','participer.html','wiki.html','archives.html','bibliotheque.html','atlas.html','parcours.html','manifeste-v2-5.html']){
  assert.ok(html.includes('href="'+href+'"'),href);
  assert.equal(existsSync(resolve(root,href)),true,href);
 }
});
test('Archive door exists and does not expose internal file locators',()=>{
 assert.match(read('assets/nav-01/graph-data.mjs'),/"legacy": "archives\.html"/);
 const html=read('archives.html');
 assert.match(html,/href="candidat\.html"/);
 assert.doesNotMatch(html,/docs\.google\.com\/document\/d\//);
 assert.doesNotMatch(html,/coordination\/v2\/work-c02-01\/data/);
});
test('Candidate does not enable data submission or editorial approval',()=>{
 const html=read('candidat.html')+read('archives.html');
 assert.match(html,/aucune migration ni publication/i);
 assert.doesNotMatch(html,/<form\b/i);
});

test('Candidate submenus point to real source pages and keep historic labels explicit',()=>{
 const html=read('candidat.html');
 for(const id of ['classement-faire-ensemble','classement-encyclopedie','classement-archives','classement-mediatheque'])assert.ok(html.includes('id="'+id+'"'),id);
 for(const href of [...html.matchAll(/href="([^"]+)"/g)].map(x=>x[1])) {
   if(href.startsWith('https:')||href.startsWith('#'))continue;
   const [path,frag]=href.split('#');
   assert.equal(existsSync(resolve(root,path)),true,href);
   if(path==='archives.html'&&frag)assert.ok(read(path).includes('id="'+frag+'"'),href);
 }
 assert.match(html,/ancien intitulé « Wiki »/);
});
