// Exact, already reviewed security checkpoints. Never allow arbitrary later edits.
import {execFileSync} from 'node:child_process';
import {readFileSync,lstatSync,mkdirSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=resolve(dirname(fileURLToPath(import.meta.url)),'../../../..');
export const CHECKPOINTS=Object.freeze([
 {id:'C12-C07-mask',before:'adc54567a0ed18a898b9179097f8f97f4797a9f2',after:'55d79259ecc1b4788d7ba2be2b49767b827b6018',tree:'3b0245fc2b78d1e5d7156deb5b073988f7be17db'},
 {id:'C10-C14-main-security',before:'df73c5dabf47a0b73d2b55f0346c7006d485dd98',after:'80ce56adfb9c3bc3275844b2847eac717b433aa5',tree:'44837d70c5a00c39261629f40daf1955c5205e51'}
]);
const blob=bytes=>createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
export function reviewedBlobs(root=ROOT){
 const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();const allowed=new Map();
 for(const point of CHECKPOINTS){
  if(git('rev-parse',point.after+'^{tree}')!==point.tree)throw Error('Security checkpoint tree mismatch');
  git('merge-base','--is-ancestor',point.after,'HEAD');
  const names=git('diff','--name-only','--diff-filter=AM',point.before,point.after).split('\n').filter(Boolean);
  for(const path of names){const sha=git('rev-parse',point.after+':'+path);if(!allowed.has(path))allowed.set(path,new Map());allowed.get(path).set(sha,point.id);}
 }
 return allowed;
}
export function classify(path,actual,original,reviewed,exceptions={}){
 if(actual===original)return 'original';
 if(reviewed.get(path)?.has(actual))return reviewed.get(path).get(actual);
 if(exceptions[path]===actual)return 'exact-c13';
 return 'rejected';
}
export function checkPreservation(root=ROOT){
 const original=JSON.parse(readFileSync(resolve(root,'coordination/v2/work-c02-01/data/main-preservation.json'),'utf8'));
 const manifest=JSON.parse(readFileSync(resolve(root,'coordination/work/c07/C13_EXCEPTIONS.json'),'utf8'));
 const exceptions={...manifest.blobs,...manifest.qa_blobs},reviewed=reviewedBlobs(root),changed=[],counts={};
 for(const item of original.blobs){
  const path=resolve(root,item.path);let kind='rejected';
  if(path.startsWith(root+'/'))try{const stat=lstatSync(path);if(stat.isFile()&&!stat.isSymbolicLink())kind=classify(item.path,blob(readFileSync(path)),item.sha,reviewed,exceptions);}catch{}
  counts[kind]=(counts[kind]||0)+1;if(kind==='rejected')changed.push(item.path);
 }
 return {accepted:changed.length===0,base_commit:original.base_commit,blobs:original.blobs.length,changed,counts,checkpoints:CHECKPOINTS};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))try{
 const result=checkPreservation();if(process.argv[2]){const p=resolve(process.argv[2]);mkdirSync(dirname(p),{recursive:true});writeFileSync(p,JSON.stringify(result,null,2)+'\n');}
 console.log(JSON.stringify(result));if(!result.accepted)process.exitCode=1;
}catch{console.error('Reviewed preservation: full Git history or checkpoint unavailable');process.exitCode=2;}
