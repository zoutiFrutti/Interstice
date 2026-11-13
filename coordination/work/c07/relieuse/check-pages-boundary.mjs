// C07 - audit read-only of a built Pages directory. No disclosure of filenames.
import { lstat, readdir } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';

const forbidden = /^(?:coordination|coordination-console|docs|\.github|apercu-graphiste-35|edition-premiere|artifacts|node_modules|supabase|recherche|scripts|tests|propositions|\.git)(?:\/|$)/i;
export async function inspectSite(siteRoot) {
  const root=resolve(siteRoot);
  const status=await lstat(root);
  if(!status.isDirectory() || status.isSymbolicLink()) throw Error('Output directory is not a real directory');
  const stack=[root]; let checked=0, blocked=0, links=0;
  while(stack.length) {
    const dir=stack.pop();
    for(const item of await readdir(dir,{withFileTypes:true})) {
      const path=resolve(dir,item.name);
      const rel=relative(root,path).split(sep).join('/');
      const stat=await lstat(path);
      if(stat.isSymbolicLink()){links++;blocked++;continue;}
      if(forbidden.test(rel)){blocked++;continue;}
      if(stat.isDirectory()) stack.push(path);
      else if(stat.isFile()) checked++;
      else blocked++;
    }
  }
  return {accepted:blocked===0,files_checked:checked,unsafe_entries:blocked,symlinks:links};
}
if(process.argv[1] && resolve(process.argv[1])===new URL(import.meta.url).pathname) {
  try {
    if(process.argv.length!==3) throw Error('Expected built-site directory');
    const report=await inspectSite(process.argv[2]);
    process.stdout.write(JSON.stringify(report)+'\n');
    if(!report.accepted)process.exitCode=1;
  }catch(e){process.stderr.write('C07 Pages audit: cannot certify output\n');process.exitCode=2;}
}
