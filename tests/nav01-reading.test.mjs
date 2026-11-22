import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,readdir,writeFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {READINGS} from '../assets/nav-01/reading-catalogue.mjs';
import {MEDIA} from '../assets/nav-01/media-catalogue.mjs';
import {readingReturn} from '../assets/nav-01/reading-return.mjs';

test('reader return cannot become an external or executable URL',()=>{
 for(const value of ['https://attacker.test','#porte/unknown','//attacker.test','javascript:alert(1)','#parcours/PAR-005/../../secrets',null])
  assert.equal(readingReturn(value),'../index.html#porte/encyclopedie');
 for(const id of ['archives','faire-ensemble','atlas','carte','entraide'])assert.equal(readingReturn('#porte/'+id),'../index.html?retour=lecture#porte/'+id);
 assert.equal(readingReturn('#porte/mediatheque'),'../index.html?retour=lecture#porte/mediatheque');
 assert.equal(readingReturn('#parcours/PAR-003/ECO-01'),'../index.html?retour=lecture#parcours/PAR-003/ECO-01');
});
test('24 complete existing texts, 10 sourced notices; no blocked bodies or automatic players',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'reading-'));
 execFileSync(process.execPath,['scripts/build-nav-preview.mjs',dir]);
 assert.equal(READINGS.length,24);assert.equal(MEDIA.length,10);
 const files=await readdir(join(dir,'lectures'));
 assert.equal(files.length,35);
 for(const item of [...READINGS,...MEDIA]){
  const html=await readFile(join(dir,'lectures',item.id+'.html'),'utf8');
  assert.match(html,/<main id="lecture">/);assert.match(html,/data-return/);
  assert.doesNotMatch(html,/<(?:iframe|video|audio|object|embed|form)\b|\bon\w+=|\bhref="(?:javascript|data):/i);
  assert.equal((html.match(/<script\b/g)||[]).length,1);
  if(item.source){
   assert.ok(html.length>1500);assert.match(html,/Version source R6/);
   assert.match(html,/relecture conservées/);
  }else{
   assert.equal(item.embed_authorized,false);assert.equal(item.embed_evidence,null);
   assert.match(html,/aucun lecteur externe chargé/);assert.ok(html.includes(item.url.replaceAll('&','&amp;')));
  }
 }
 for(const id of ['FN-018','BIO-019','BIO-021','PAR-005','CAT-001'])assert.ok(!files.includes(id+'.html'));
});
test('reader sanitizer drops active content and preserves real source links and anchors',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'reading-fixture-'));
 // Run the parser definition without its build loop; the fixture is never a shipped source.
 const code=(await readFile('scripts/reading/build.py','utf8')).split('out.mkdir(')[0];
 const fixture=code+"\np=Reader();p.feed('<main><h1>Texte</h1><p id=\"source\">Preuve <a href=\"https://example.org/source\">source</a><a href=\"javascript:alert(1)\">piège</a></p><script>secret()</script><iframe src=\"https://evil.test\"></iframe><p onclick=\"bad()\">Fin</p></main>');print(''.join(p.output))";
 const file=join(dir,'fixture.py');await writeFile(file,fixture);
 const html=execFileSync('python3',[file,dir,'[]'],{encoding:'utf8'});
 assert.match(html,/id="source"/);assert.match(html,/href="https:\/\/example.org\/source"/);
 assert.doesNotMatch(html,/secret|iframe|onclick|javascript/);assert.match(html,/>Fin</);
});
