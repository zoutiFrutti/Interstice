import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFile,readdir,mkdtemp} from 'node:fs/promises';
import {join,dirname,resolve} from 'node:path';
import {tmpdir} from 'node:os';
test('every shipped module dependency exists; blocked catalogue stays outside artifact',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'c07-bundle-'));
 execFileSync(process.execPath,['scripts/build-nav-preview.mjs',dir]);
 const walk=async root=>{for(const f of await readdir(root,{withFileTypes:true})){
  const p=join(root,f.name);if(f.isDirectory()){await walk(p);continue;}
  if(f.name.endsWith('.mjs')){
   const src=await readFile(p,'utf8');
   for(const [,dep] of src.matchAll(/from\s+['"]([^'"]+)['"]/g)){
    assert.ok(dep.startsWith('./'),'No external module');await readFile(resolve(dirname(p),dep));
   }
  }
  assert.ok(!/resources\.json|relations\.json|PAR-00[1-7]\.md/.test(p));
 }};await walk(dir);
 const src=await readFile('assets/nav-01/explorer.mjs','utf8');
 assert.match(src,/dataset\.orienting='false'/);
 assert.match(src,/parcoursStatus\(path\)/);
});
