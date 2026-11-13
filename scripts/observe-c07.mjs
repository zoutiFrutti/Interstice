// Read-only CI collector. The token remains in the runner, never in the output.
import {mkdir,writeFile} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';
import {observeCandidate,REPOSITORY} from '../coordination-console/github-observer.mjs';
if(process.env.GITHUB_REPOSITORY!==REPOSITORY)throw new Error('Repository scope required');
const fetcher=(url,options)=>fetch(url,{...options,headers:{...options.headers,
 ...(process.env.GITHUB_TOKEN?{Authorization:'Bearer '+process.env.GITHUB_TOKEN}:{})}});
let result;
try{result=await observeCandidate(fetcher);}catch(error){
 result={schema:'c07.github-observation-error.v1',observed_at:new Date().toISOString(),
   status:'INCONNU',code:error.code||'ECHEC_TECHNIQUE'};
}
const output=resolve(process.argv[2]||'artifacts/c07/github-observation.json');
await mkdir(dirname(output),{recursive:true});await writeFile(output,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({schema:result.schema,head:result.head,status:result.status||'OBSERVE',runs:result.runs?.length}));
if(result.status==='INCONNU')process.exitCode=1;
