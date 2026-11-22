// C07 Pages: block direct URLs containing Google document IDs in built public files.
// No sensitive values, filenames or matches are logged.
import {readFile,readdir,lstat} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {directPrivateLink} from './check-public-locators.mjs';
export async function checkContent(siteRoot){
 const root=resolve(siteRoot),stack=[root];let files=0,violations=0;
 while(stack.length){
  const dir=stack.pop();
  for(const item of await readdir(dir,{withFileTypes:true})){
   const path=join(dir,item.name),stat=await lstat(path);
   if(stat.isSymbolicLink()){violations++;continue;}
   if(stat.isDirectory()){stack.push(path);continue;}
   if(!stat.isFile()){violations++;continue;}
   files++;
   if(!/\.(html?|js|mjs|json|txt|xml|css|svg|md)$/i.test(item.name))continue;
   const text=await readFile(path,'utf8');
   if(directPrivateLink.test(text))violations++;
  }
 }
 return {accepted:violations===0,files_scanned:files,violating_files:violations};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{if(process.argv.length!==3)throw Error('Missing built path');const result=await checkContent(process.argv[2]);process.stdout.write(JSON.stringify(result)+'\n');if(!result.accepted)process.exitCode=1;}
 catch{process.stderr.write('C07 Pages contents not certifiable\n');process.exitCode=2;}
}
