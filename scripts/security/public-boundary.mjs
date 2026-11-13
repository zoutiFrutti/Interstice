// Local/CI inspection only. Never print a matching value or document path.
import {createHash} from 'node:crypto';
import {readFile, readdir, lstat} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {resolve, join, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const fingerprints = new Set(JSON.parse(await readFile(new URL('./reserved-id-sha256.json', import.meta.url))));
const internal = new Set(['.git','.github','apercu-graphiste-35','coordination','docs','edition-premiere','propositions','scripts','supabase','tests','artifacts','node_modules']);
const resource = /(?:docs|drive)\.google\.com\//i;
const hash = value => createHash('sha256').update(value).digest('hex');
// All 64 examined identifiers are 44 characters; include embedded occurrences.
const knownId = text => (text.match(/[A-Za-z0-9_-]{44,}/g)||[]).some(token=>{
  for(let i=0;i<=token.length-44;i++)if(fingerprints.has(hash(token.slice(i,i+44))))return true;
  return false;
});
export function hasReservedLocator(value) {
  let text = String(value);
  // Cover common HTML/JSON/URL escaping, without trusting extensions.
  for (let i=0;i<3;i++) {
    if (resource.test(text)) return true;
    if(knownId(text))return true;
    const decoded = text.replace(/&#(?:x([0-9a-f]+)|(\d+));?/gi, (_, hex, dec) => {
      const n=Number.parseInt(hex||dec,hex?16:10); return n<=0x10ffff ? String.fromCodePoint(n) : '';
    }).replace(/&(?:sol|colon|period);/gi, x=>({'&sol;':'/','&colon;':':','&period;':'.'}[x.toLowerCase()]))
      .replace(/\\u([0-9a-f]{4})/gi,(_,n)=>String.fromCharCode(parseInt(n,16))).replace(/\\\//g,'/');
    let next;try{next=decodeURIComponent(decoded)}catch{next=decoded.replace(/%([0-9a-f]{2})/gi,(_,n)=>String.fromCharCode(parseInt(n,16)))}
    if(next===text)break; text=next;
  }
  return resource.test(text)||knownId(text);
}

export async function inspectSource(root) {
  const files=execFileSync('git',['ls-files','-z'],{cwd:root}).toString().split('\0').filter(Boolean);
  let violations=0;
  for(const name of files){const path=resolve(root,name),stat=await lstat(path);if(!stat.isFile()||stat.isSymbolicLink()||hasReservedLocator(await readFile(path,'utf8')))violations++;}
  return {accepted:violations===0,files_scanned:files.length,violating_files:violations};
}

export async function inspectExport(directory, {boundary=true}={}) {
  const root=resolve(directory),stat=await lstat(root);if(!stat.isDirectory()||stat.isSymbolicLink())throw Error('Not a real directory');
  const stack=[root];let files=0,violations=0;
  while(stack.length){
    for(const entry of await readdir(stack.pop(),{withFileTypes:true})){
      const path=join(entry.parentPath,entry.name),s=await lstat(path),top=relative(root,path).split(/[\\/]/)[0];
      if(s.isSymbolicLink()||(boundary&&internal.has(top))){violations++;continue;}
      if(s.isDirectory())stack.push(path);
      else if(!s.isFile())violations++;
      else{files++;if(hasReservedLocator(await readFile(path,'utf8')))violations++;}
    }
  }
  return {accepted:violations===0,files_scanned:files,unsafe_entries:violations};
}

if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  try {
    const [mode,path]=process.argv.slice(2);if(!path||!['source','pages','content'].includes(mode))throw Error('Invalid invocation');
    const result=mode==='source'?await inspectSource(resolve(path)):await inspectExport(path,{boundary:mode==='pages'});
    console.log(JSON.stringify(result));if(!result.accepted)process.exitCode=1;
  }catch{console.error('Security boundary: unable to certify');process.exitCode=2;}
}
