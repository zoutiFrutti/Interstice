import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {checkContent} from './check-pages-content.mjs';
test('reject direct Google Docs identifiers, but never print identifiers',async()=>{
 const root=await mkdtemp(join(tmpdir(),'c07-private-link-'));
 try {
  const value=('https://'+'docs'+'.google.com/document/d/EXAMPLE_PRIVATE_DOC_12345/edit');
  await writeFile(join(root,'index.html'),'<a href="'+value+'">link</a>');
  const bad=await checkContent(root);assert.equal(bad.accepted,false);assert.equal(bad.violating_files,1);assert.equal(JSON.stringify(bad).includes('EXAMPLE_PRIVATE_DOC_12345'),false);
  await writeFile(join(root,'index.html'),'<a href="https://example.org/">safe</a>');
  assert.equal((await checkContent(root)).accepted,true);
 }finally{await rm(root,{recursive:true,force:true});}
});
