// C07 non-publishing, read-only audit of tracked files in a PUBLIC GitHub checkout.
// Outputs counts by first-level tree only. No IDs, snippets, names, or URLs.
import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {resolve,dirname,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {directPrivateLink} from './check-public-locators.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../../../..');
export function classifyPaths(records){
 const byArea={};let matches=0,files=0,scanned=0;
 for(const [path,data] of records){
  files++;if(data.includes('\u0000'))continue;scanned++;
  const found=data.match(new RegExp(directPrivateLink.source,'gi'));
  if(!found)continue;
  const area=path.includes('/')?path.split('/')[0]:'root';
  if(!byArea[area])byArea[area]={files:0,links:0};
  byArea[area].files++;byArea[area].links+=found.length;matches+=found.length;
 }
 return{tracked_files:files,text_files_scanned:scanned,files_with_direct_google_links:Object.values(byArea).reduce((n,x)=>n+x.files,0),direct_google_links:matches,by_top_level_area:Object.fromEntries(Object.entries(byArea).sort(([a],[b])=>a.localeCompare(b)))};
}
export function audit(){
 const names=execFileSync('git',['ls-files','-z'],{cwd:root}).toString('utf8').split('\u0000').filter(Boolean);
 return classifyPaths(names.map(path=>[path,readFileSync(resolve(root,path),'utf8')]));
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{process.stdout.write(JSON.stringify(audit())+'\n');}
 catch{process.stderr.write('C07 full tree scan incomplete\n');process.exitCode=2;}
}
