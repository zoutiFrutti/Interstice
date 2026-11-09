// C07: check generated public assets against known internal Drive document IDs.
// Only counts emitted; never print locators, titles or file paths.
import {readFile, readdir, lstat} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const here=resolve(fileURLToPath(new URL('.', import.meta.url)));
const base=resolve(here,'../../../../..');
const locatorRe=/docs\.google\.com\/document\/d\/([a-zA-Z0-9_-]{15,})/;
export function sensitiveDocumentIds(register) {
  const ids=new Set();
  for(const row of register.resources||[]) {
    for(const field of ['dossier_locator','canonical_url']) {
      const value=row[field];
      if(typeof value!=='string')continue;
      const match=value.match(locatorRe);
      if(match) ids.add(match[1]);
    }
  }
  return ids;
}
export async function checkContent(siteRoot,ids) {
  const root=resolve(siteRoot),stack=[root];
  let files=0,violations=0;
  while(stack.length) {
    const dir=stack.pop();
    for(const entry of await readdir(dir,{withFileTypes:true})) {
      const p=join(dir,entry.name),st=await lstat(p);
      if(st.isSymbolicLink()){violations++;continue;}
      if(st.isDirectory()){stack.push(p);continue;}
      if(!st.isFile())continue;
      files++;
      // Only text files can accidentally contain verbatim Drive URLs/IDs.
      if(!/\.(html?|js|mjs|json|txt|xml|css|svg|md)$/i.test(entry.name))continue;
      const content=await readFile(p,'utf8');
      if([...ids].some(id=>content.includes(id)))violations++;
    }
  }
  return {accepted:violations===0,files_scanned:files,violating_files:violations,patterns_checked:ids.size};
}
if(process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  try{
    if(process.argv.length!==3)throw Error('Expected built-site path');
    const register=JSON.parse(await readFile(resolve(base,'coordination/v2/work-c02-01/data/resources.json'),'utf8'));
    const ids=sensitiveDocumentIds(register);
    if(ids.size<20)throw Error('Expected private-locator corpus incomplete');
    const result=await checkContent(process.argv[2],ids);
    process.stdout.write(JSON.stringify(result)+'\n');
    if(!result.accepted)process.exitCode=1;
  }catch(e){process.stderr.write('C07 content check not certifiable\n');process.exitCode=2;}
}
