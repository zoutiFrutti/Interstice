// C27 validates actual candidate HTML copies; public originals remain byte-for-byte identical.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const filenames=[
  "wiki-ecologie-sociale-environnement",
  "wiki-egalite-fiches",
  "wiki-egalite-genres-inclusivite",
  "wiki-feminismes-histoire-egalite",
  "wiki-handicap-validisme-neurodiversite",
  "wiki-justice-prisons-abolitionnisme",
  "wiki-liberte-numerique-ia-surveillance",
  "wiki-patriarcat-histoire-mecanismes",
  "wiki-politique-institutions-regimes",
  "wiki-socialismes-communismes-anarchismes-autogestion"
];
const section=/<section id="c27-amendement-candidat"[^>]*>[\s\S]*?<\/section>/g;
test('C27 contains ten nonpublished exact-source HTML candidates with one amendment each',()=>{
  assert.equal(filenames.length,10);
  assert.equal(new Set(filenames).size,10);
  for(const name of filenames){
    const source=read(name+'.html');
    const candidate=read('coordination/work/c27/html-candidates/'+name+'.html');
    const amendments=[...candidate.matchAll(section)];
    assert.equal(amendments.length,1,name+' must have one inserted section');
    assert.equal(candidate.replace(section,''),source,name+' must preserve entire original HTML');
    assert.match(amendments[0][0],/data-review="private-candidate-no-editorial-visa"/,name);
    assert.match(amendments[0][0],/Proposition éditoriale en relecture, non validée pour diffusion/,name);
    assert.match(amendments[0][0],/https:\/\//,name);
    assert.match(candidate,/<\/main>/,name);
    assert.match(candidate,/<!doctype html>/i,name);
    assert.ok(candidate.length>source.length,name);
  }
});
test('C27 candidate directory stays excluded from GitHub Pages source',()=>{
  const config=read('_config.yml');
  assert.match(config,/^\s*- coordination\s*$/m);
  assert.ok(filenames.every(n=>!read(n+'.html').includes('id="c27-amendement-candidat"')));
});
