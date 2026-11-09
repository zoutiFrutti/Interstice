import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {sensitiveDocumentIds,checkContent} from './check-pages-content.mjs';
const secret='privateDocumentIdentifier0001';
test('extract only recognized Google Docs document identifiers',()=>{
 const ids=sensitiveDocumentIds({resources:[{dossier_locator:'https://docs.google.com/document/d/'+secret+'/edit'},{canonical_url:'https://example.org/page'}]});
 assert.deepEqual([...ids],[secret]);
});
test('rejects known Drive IDs in a public HTML file without exposing the identifier',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'c07-content-'));
 try{
  await writeFile(join(dir,'index.html'),'<a href="https://docs.google.com/document/d/'+secret+'/edit">Source</a>');
  const result=await checkContent(dir,new Set([secret]));
  assert.equal(result.accepted,false);
  assert.equal(result.violating_files,1);
  assert.equal(JSON.stringify(result).includes(secret),false);
  await writeFile(join(dir,'index.html'),'<p>Public page</p>');
  assert.equal((await checkContent(dir,new Set([secret]))).accepted,true);
 }finally{await rm(dir,{recursive:true,force:true});}
});
