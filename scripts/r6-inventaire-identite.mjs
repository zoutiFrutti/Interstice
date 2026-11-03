import {readFileSync,readdirSync,statSync,mkdirSync,writeFileSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
const root=process.cwd();
const excludes=new Set(['.git','node_modules','artifacts']);
const ext=/\.(?:html|css|js|mjs|json|webmanifest)$/i;
const files=[];
function walk(dir){
 for(const item of readdirSync(dir,{withFileTypes:true})){
  if(excludes.has(item.name))continue;
  const path=join(dir,item.name);
  if(item.isDirectory())walk(path);else if(ext.test(item.name))files.push(path);
 }
}
walk(root);
const references=[],pwa=[];
for(const p of files){
 const rel=relative(root,p),text=readFileSync(p,'utf8');
 const regs=[/(?:\.\.\/)*assets\/logo-(?:faille-noire|interstice)\.svg/g,/\blogo-(?:faille-noire|interstice)(?:-r4)?\.svg/g,/<link\b[^>]*rel=["'](?:icon|apple-touch-icon)["'][^>]*>/gi,/manifest(?:\.webmanifest|\.json)?/gi,/<svg\b/gi];
 for(const pattern of regs){
  for(const m of text.matchAll(pattern))references.push({path:rel,kind:pattern.source,match:m[0],position:m.index,group:rel.startsWith('apercu-graphiste-35/')?'ancienne-maquette':rel.includes('r4')?'r4-archive-ou-test':'r6-candidat-ou-source'});
 }
 if(/\.webmanifest$|\/manifest\.json$/.test(rel))pwa.push(rel);
}
const hash=path=>createHash('sha256').update(readFileSync(join(root,path))).digest('hex');
const out={
 scope:'repo checkout R6, tree de travail hors node_modules et artifacts',
 scanned_files:files.length,reference_occurrences:references.length,
 html_css_js_files:files.filter(f=>/\.(?:html|css|js|mjs)$/i.test(f)).length,
 pwa_manifest_files:pwa,
 active_paths:{faille:'assets/logo-faille-noire.svg',interstice:'assets/logo-interstice.svg'},
 original_source_hashes:{
  faille:hash('assets/identite/r6/sources/logo-faille-noire-zout-original.svg'),
  interstice_vector:hash('assets/identite/r6/sources/interstice-retrace-zout-original.svg'),
  interstice_visual:hash('assets/identite/r6/sources/interstice-reference-visuelle-zout-original.svg')
 },
 active_hashes:{faille:hash('assets/logo-faille-noire.svg'),interstice:hash('assets/logo-interstice.svg')},
 references
};
mkdirSync('artifacts/r6-identite',{recursive:true});
writeFileSync('artifacts/r6-identite/inventaire-references.json',JSON.stringify(out,null,2));
console.log('R6_INVENTORY '+JSON.stringify({files:out.scanned_files,occurrences:references.length,manifests:pwa,groups:references.reduce((a,v)=>(a[v.group]=(a[v.group]||0)+1,a),{})}));
