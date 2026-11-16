// C07 public-boundary guard: reject direct identifiers/links to private Google files.
// No match content, document ID, title, or path is printed.
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const here=dirname(fileURLToPath(import.meta.url));
const root=resolve(here,'../../../..');
export const directPrivateLink=/(?:https?:\/\/)?(?:docs\.google\.com\/(?:document|spreadsheets|presentation)\/d\/|drive\.google\.com\/(?:file\/d\/|open\?id=))[A-Za-z0-9_-]{8,}/i;
export function checkRegistries(resources,sources) {
 const matches=[];
 for(const r of resources.resources||[]) for(const key of ['dossier_locator','canonical_url'])
  if(typeof r[key]==='string'&&directPrivateLink.test(r[key]))matches.push('resources');
 for(const s of sources.sources||[])if(typeof s.locator==='string'&&directPrivateLink.test(s.locator))matches.push('sources');
 return {accepted:matches.length===0,violations:matches.length,resources:resources.resources?.length??null,sources:sources.sources?.length??null};
}
export function run(base=root){
 const r=JSON.parse(readFileSync(resolve(base,'coordination/v2/work-c02-01/data/resources.json'),'utf8'));
 const s=JSON.parse(readFileSync(resolve(base,'coordination/v2/work-c02-01/data/sources.json'),'utf8'));
 const outcome=checkRegistries(r,s);
 if(outcome.resources!==219||outcome.sources!==100)throw Error('Unexpected inventory counts');
 return outcome;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{const result=run();process.stdout.write(JSON.stringify(result)+'\n');if(!result.accepted)process.exitCode=1;}
 catch{process.stderr.write('C07 repository locator gate: unable to certify\n');process.exitCode=2;}
}
