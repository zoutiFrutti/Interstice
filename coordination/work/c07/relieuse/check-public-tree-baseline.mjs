// Candidate-only monotonicity gate: not a privacy certificate.
// No direct fixture URL in source: construct synthetic URLs at runtime.
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
import {audit} from './audit-public-tree.mjs';
import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {directPrivateLink} from './check-public-locators.mjs';
const baseline=0;
const fixtures={
 'coordination/work/c07/relieuse/audit-public-tree.test.mjs':new Set(['EXAMPLEPRIVATEID123456','OTHERPRIVATEID987654']),
 'coordination/work/c07/relieuse/check-pages-content.test.mjs':new Set(['EXAMPLE_PRIVATE_DOC_12345']),
 'coordination/work/c07/relieuse/check-public-locators.test.mjs':new Set(['EXAMPLE_PRIVATE_DOC_12345','EXAMPLE_PRIVATE_FILE_12345'])
};
export function allowedFixtures(records){
 let violations=0;
 for(const [path,data] of records){
  for(const match of data.matchAll(new RegExp(directPrivateLink.source,'gi'))){
   const id=match[0].split(/[\/=]/).at(-1);
   if(!fixtures[path]?.has(id))violations++;
  }
 }
 return {accepted:violations===0,violations};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href)try {
 const result=audit();
 const names=execFileSync('git',['ls-files','-z']).toString().split('\0').filter(Boolean);
 const fixturesOnly=allowedFixtures(names.map(path=>[path,readFileSync(path,'utf8')]));
 const out={accepted:result.direct_google_links<=baseline&&fixturesOnly.accepted,remaining_direct_links:result.direct_google_links,baseline_ceiling:baseline,files_with_links:result.files_with_direct_google_links,non_fixture_violations:fixturesOnly.violations};
 process.stdout.write(JSON.stringify(out)+'\n');
 if(!out.accepted)process.exitCode=1;
} catch {
 process.stderr.write('C07 public-tree baseline not certifiable\n');
 process.exitCode=2;
}
