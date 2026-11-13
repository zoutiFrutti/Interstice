import test from 'node:test';
import assert from 'node:assert/strict';
import {observeCandidate,REPOSITORY,CANDIDATE_BRANCH} from '../coordination-console/github-observer.mjs';
const head='a'.repeat(40),old='b'.repeat(40);
const pr=()=>({number:186,base:{repo:{full_name:REPOSITORY,private:false}},head:{sha:head,ref:CANDIDATE_BRANCH,repo:{full_name:REPOSITORY}}});
const run=(id,workflow_id,name='navigation',extra={})=>({id,workflow_id,name,head_sha:head,head_branch:CANDIDATE_BRANCH,status:'completed',conclusion:'success',updated_at:'2026-11-05T08:00:00Z',...extra});
function mock(responses){let calls=[];return {calls,fetch:async(url,options)=>{calls.push({url,options});const body=responses[calls.length-1];if(body instanceof Error)throw body;return {ok:true,json:async()=>body};}};}
test('live metadata keeps the latest attempt and ignores stale HEADs without granting editorial approval',async()=>{
 const io=mock([pr(),{total_count:4,workflow_runs:[run(2,10),run(3,10,'navigation',{conclusion:'failure'}),run(4,11,'old',{head_sha:old}),run(5,12,'other branch',{head_branch:'main'})]}]);
 const result=await observeCandidate(io.fetch);
 assert.equal(result.head,head);assert.equal(result.runs.length,1);assert.equal(result.runs[0].conclusion,'failure');
 assert.equal(result.editorial_approval,false);assert.equal(result.ai_activity,'non_deduite');
 for(const call of io.calls){assert.equal(call.options.method,'GET');assert.equal(call.options.credentials,'omit');assert.equal(call.options.headers.Authorization,undefined);}
});
test('artifact references are tied to the current HEAD, with expiry shown',async()=>{
 const io=mock([pr(),{total_count:1,workflow_runs:[run(9,20,'C07 secure deterministic missions - no AI')]},
  {total_count:3,artifacts:[{id:1,name:'proof',expired:false,workflow_run:{head_sha:head}},
    {id:2,name:'expired',expired:true,workflow_run:{head_sha:head}},{id:3,name:'old',expired:false,workflow_run:{head_sha:old}}]}]);
 const result=await observeCandidate(io.fetch);assert.equal(io.calls.length,3);assert.equal(result.artifact_state,'verifie');
 assert.equal(result.artifacts.length,2);assert.equal(result.artifacts[1].expired,true);
 assert.match(result.artifacts[0].url,/actions\/runs\/9\/artifacts\/1$/);
});
test('network denial, malformed JSON and rate limits remain explicit errors',async()=>{
 await assert.rejects(observeCandidate(mock([new Error('secret body')]).fetch),/RESEAU_INDISPONIBLE/);
 await assert.rejects(observeCandidate(async()=>({ok:false,status:403})),/QUOTA_OU_ACCES_REFUSE/);
 await assert.rejects(observeCandidate(mock([pr(),{}]).fetch),/REPONSE_INVALIDE/);
});
test('private repository, wrong branch or fork are rejected before reading executions',async()=>{
 for(const mutation of [p=>p.base.repo.private=true,p=>p.head.ref='main',p=>p.head.repo.full_name='other/repo']){
  const p=pr();mutation(p);const io=mock([p]);await assert.rejects(observeCandidate(io.fetch),/CONFIDENTIALITE/);assert.equal(io.calls.length,1);
 }
});
test('inaccessible artifacts do not fabricate a proof and incomplete pages are flagged',async()=>{
 const io=mock([pr(),{total_count:101,workflow_runs:[run(9,20,'C07 secure deterministic missions - no AI')]},new Error('unavailable')]);
 const result=await observeCandidate(io.fetch);assert.equal(result.complete,false);assert.equal(result.artifact_state,'indisponible');assert.deepEqual(result.artifacts,[]);
});
