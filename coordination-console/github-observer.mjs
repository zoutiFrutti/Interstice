// Public GitHub metadata only. No mutation, model, credential or conversation API.
export const REPOSITORY='zoutiFrutti/Interstice';
export const CANDIDATE_BRANCH='work/c07-reunification-20261104';
export const PR_NUMBER=186;
const API='https://api.github.com/repos/'+REPOSITORY;
const WEB='https://github.com/'+REPOSITORY;
const sha=value=>typeof value==='string'&&/^[a-f0-9]{40}$/.test(value);
const id=value=>Number.isSafeInteger(value)&&value>0;
const text=(value,max=160)=>typeof value==='string'?value.slice(0,max):'';
export class ObservationError extends Error {
 constructor(code){super(code);this.code=code;}
}
async function read(fetcher,url){
 if(!url.startsWith(API+'/'))throw new ObservationError('SOURCE_REFUSEE');
 let response;
 try{response=await fetcher(url,{method:'GET',credentials:'omit',redirect:'error',
   headers:{Accept:'application/vnd.github+json'},signal:AbortSignal.timeout(10000)});}
 catch{throw new ObservationError('RESEAU_INDISPONIBLE');}
 if(!response.ok)throw new ObservationError(response.status===403||response.status===429?'QUOTA_OU_ACCES_REFUSE':'GITHUB_INDISPONIBLE');
 try{return await response.json();}catch{throw new ObservationError('REPONSE_INVALIDE');}
}
export async function observeCandidate(fetcher=globalThis.fetch){
 const pr=await read(fetcher,API+'/pulls/'+PR_NUMBER);
 if(pr.number!==PR_NUMBER||pr.base?.repo?.full_name!==REPOSITORY||pr.base.repo.private!==false
    ||pr.head?.repo?.full_name!==REPOSITORY||pr.head?.ref!==CANDIDATE_BRANCH||!sha(pr.head?.sha)){
  throw new ObservationError('CANDIDATE_OU_CONFIDENTIALITE_INVALIDE');
 }
 const data=await read(fetcher,API+'/actions/runs?head_sha='+pr.head.sha+'&event=pull_request&per_page=100');
 if(!Array.isArray(data.workflow_runs))throw new ObservationError('REPONSE_INVALIDE');
 const latest=new Map();
 for(const run of data.workflow_runs){
  if(run.head_sha!==pr.head.sha||run.head_branch!==CANDIDATE_BRANCH||!id(run.id)||!id(run.workflow_id))continue;
  const old=latest.get(run.workflow_id);
  if(!old||run.id>old.id||(run.id===old.id&&(run.run_attempt||1)>(old.run_attempt||1)))latest.set(run.workflow_id,run);
 }
 const runs=[...latest.values()].map(run=>({id:run.id,workflow_id:run.workflow_id,name:text(run.name),
  status:['completed','in_progress','queued','pending','waiting','requested'].includes(run.status)?run.status:'unknown',
  conclusion:['success','failure','cancelled','skipped','timed_out','action_required','neutral','stale','startup_failure'].includes(run.conclusion)?run.conclusion:null,
  url:WEB+'/actions/runs/'+run.id,head:pr.head.sha,updated_at:text(run.updated_at,40),attempt:run.run_attempt||1}));
 const proof=runs.find(run=>run.name==='C07 secure deterministic missions - no AI'&&run.status==='completed');
 let artifacts=[],artifactState=proof?'inconnu':'aucune_execution_c07_terminee';
 if(proof){
  try{
   const result=await read(fetcher,API+'/actions/runs/'+proof.id+'/artifacts?per_page=100');
   if(!Array.isArray(result.artifacts))throw new ObservationError('REPONSE_INVALIDE');
   artifacts=result.artifacts.filter(a=>id(a.id)&&a.workflow_run?.head_sha===pr.head.sha).map(a=>({
    id:a.id,name:text(a.name),expired:a.expired!==false,url:WEB+'/actions/runs/'+proof.id+'/artifacts/'+a.id,
    run_id:proof.id,head:pr.head.sha}));
   artifactState=result.total_count>result.artifacts.length?'partiel':'verifie';
  }catch{artifactState='indisponible';}
 }
 return {schema:'c07.github-observation.v1',repository:REPOSITORY,pr:PR_NUMBER,pr_url:WEB+'/pull/'+PR_NUMBER,
  branch:CANDIDATE_BRANCH,head:pr.head.sha,observed_at:new Date().toISOString(),
  complete:Number.isInteger(data.total_count)&&data.total_count<=data.workflow_runs.length,
  runs,artifacts,artifact_state:artifactState,editorial_approval:false,ai_activity:'non_deduite'};
}
