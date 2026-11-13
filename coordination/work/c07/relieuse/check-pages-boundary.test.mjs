import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm,symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {inspectSite} from './check-pages-boundary.mjs';
const fixture=async fn=>{const dir=await mkdtemp(join(tmpdir(),'c07-pages-'));try{await fn(dir);}finally{await rm(dir,{recursive:true,force:true});}};
test('accepts limited public files',()=>fixture(async dir=>{await writeFile(join(dir,'index.html'),'ok');assert.deepEqual(await inspectSite(dir),{accepted:true,files_checked:1,unsafe_entries:0,symlinks:0})}));
test('blocks embedded coordination tree without listing names',()=>fixture(async dir=>{await mkdir(join(dir,'coordination'));await writeFile(join(dir,'coordination','restricted.json'),'SECRET');const r=await inspectSite(dir);assert.equal(r.accepted,false);assert.equal(r.unsafe_entries,1);assert.ok(!JSON.stringify(r).includes('SECRET'));}));
test('blocks symlinks and unsafe docs directory',()=>fixture(async dir=>{await mkdir(join(dir,'docs'));await symlink(join(dir,'docs'),join(dir,'shortcut'));const r=await inspectSite(dir);assert.equal(r.accepted,false);assert.ok(r.unsafe_entries>=2)}));

for(const area of ['coordination-console','apercu-graphiste-35','edition-premiere','artifacts','node_modules','supabase'])test('reject internal build directory: '+area,()=>fixture(async dir=>{await mkdir(join(dir,area));await writeFile(join(dir,area,'data.json'),'{}');assert.equal((await inspectSite(dir)).accepted,false);}));
