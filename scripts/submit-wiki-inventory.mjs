#!/usr/bin/env node
// GitHub Actions OIDC -> Supabase Edge, sans secret permanent.
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('artifacts/wiki-ingest-candidates.json','utf8'));
if(data.errors.length)throw Error('Inventory has errors');
const requestUrl=process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
const requestToken=process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
if(!requestUrl||!requestToken)throw Error('GitHub OIDC permission missing');
const audience='interstice-wiki-import-rpqiwxkaiyokmxbhxfvh';
const identity=await fetch(requestUrl+'&audience='+encodeURIComponent(audience),{headers:{Authorization:'Bearer '+requestToken}});
if(!identity.ok)throw Error('GitHub OIDC token '+identity.status);
const jwt=(await identity.json()).value;
if(!jwt)throw Error('GitHub OIDC returned no token');
const url='https://rpqiwxkaiyokmxbhxfvh.supabase.co/functions/v1/github-wiki-ingest';
const stats={CREATED:0,UNCHANGED:0,UPDATED_REVIEW_REQUIRED:0};
for(let i=0;i<data.items.length;i+=10){
 const res=await fetch(url,{method:'POST',headers:{Authorization:'Bearer '+jwt,'Content-Type':'application/json'},body:JSON.stringify({items:data.items.slice(i,i+10)})});
 if(!res.ok){if(res.status===403){const claims=JSON.parse(Buffer.from(jwt.split('.')[1],'base64url').toString('utf8'));console.error('OIDC verified? edge rejected claims',{repository:claims.repository,ref:claims.ref,workflow_ref:claims.workflow_ref,event_name:claims.event_name});}throw Error('Ingest rejected '+res.status+' '+(await res.text()).slice(0,400));}
 const response=await res.json();
 for(const item of response.results||[]){if(!(item.status in stats))throw Error('Unexpected result '+item.status);stats[item.status]++;}
}
console.log(JSON.stringify({scanned:data.scanned,errors:0,db_results:stats}));
