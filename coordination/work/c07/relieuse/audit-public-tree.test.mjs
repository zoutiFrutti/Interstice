import test from 'node:test';
import assert from 'node:assert/strict';
import {classifyPaths} from './audit-public-tree.mjs';
test('group counts without disclosing Google Doc identifiers or file names',()=>{
 const records=[['private/a.md','https://docs.google.com/document/d/EXAMPLEPRIVATEID123456/edit'],['public/index.html','<html>Safe</html>'],['a.md','https://drive.google.com/file/d/OTHERPRIVATEID987654/view']];
 const result=classifyPaths(records);
 assert.equal(result.files_with_direct_google_links,2);assert.equal(result.direct_google_links,2);
 assert.equal(JSON.stringify(result).includes('EXAMPLEPRIVATEID'),false);
 assert.equal(JSON.stringify(result).includes('a.md'),false);
});

// A real link cannot replace a test fixture while preserving the ceiling count.
import {allowedFixtures} from './check-public-tree-baseline.mjs';
test('only explicit fixture identities in their exact test files may remain',()=>{
 const url='https://'+('docs'+'.google.com/document/d/')+'SYNTHETIC_NEW_RESOURCE_12345';
 assert.equal(allowedFixtures([['index.html',url]]).accepted,false);
 assert.equal(allowedFixtures([['coordination/work/c07/relieuse/check-pages-content.test.mjs',url]]).accepted,false);
 assert.equal(allowedFixtures([['coordination/work/c07/relieuse/check-pages-content.test.mjs','https://'+('docs'+'.google.com/document/d/')+'EXAMPLE_PRIVATE_DOC_12345']]).accepted,true);
});
