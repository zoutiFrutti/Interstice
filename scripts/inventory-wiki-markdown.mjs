#!/usr/bin/env node
// Inventaire deterministe des fiches Markdown. Sans identite d'auteur inventee.
import {createHash} from 'node:crypto';
import {writeFileSync,mkdirSync} from 'node:fs';
const owner='zoutiFrutti', repo='Interstice';
const ref=process.env.WIKI_SOURCE_REF || 'main';
const token=process.env.GITHUB_TOKEN;
if(!token) throw Error('GITHUB_TOKEN manquant');
const api='https://api.github.com/repos/'+owner+'/'+repo;
const headers={Authorization:'Bearer '+token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};
async function get(url) {
  const res=await fetch(url,{headers});
  if(!res.ok) throw Error('GitHub API '+res.status+' '+url);
  return res.json();
}
const tree=await get(api+'/git/trees/'+encodeURIComponent(ref)+'?recursive=1');
if(tree.truncated) throw Error('Arbre incomplet: inventaire refuse');
const files=tree.tree.filter(e=>e.type==='blob' && /\.md$/i.test(e.path) &&
  /^(coordination|wiki|encyclopedie)\//i.test(e.path) &&
  !/(^|\/)(JOURNAL_COMMUN|README|CONTRIBUTING)\.md$/i.test(e.path) &&
  !/\/wiki-review-queue\//.test(e.path));
const items=[],errors=[];
for(const file of files) {
 try {
  const raw=await get(api+'/contents/'+file.path.split('/').map(encodeURIComponent).join('/')+'?ref='+encodeURIComponent(ref));
  if(raw.encoding!=='base64'||!raw.content) throw Error('source non textuelle');
  const body=Buffer.from(raw.content.replace(/\s/g,''),'base64').toString('utf8');
  const title=(body.match(/^#\s+(.+)$/m)||[])[1]?.trim()||file.path.split('/').pop().replace(/\.md$/i,'').replace(/_/g,' ');
  const atelier=(file.path.match(/(?:^|\/)(PENSEUR|LECTEUR|ARCHIVISTE|MEDIATHEQUE|BIOGRAPH|JURISTE|ORGANISATEUR)/i)||[])[1]||'a_classer';
  const sources=[...new Set([...body.matchAll(/https?:\/\/[^\s)>\]]+/g)].map(x=>x[0]))].slice(0,100);
  const id='gh-'+createHash('sha256').update(file.path).digest('hex').slice(0,24);
  items.push({id,path:file.path,github_blob_sha:file.sha,content_sha256:createHash('sha256').update(body).digest('hex'),
    title,atelier,status:'archived_pending_review',publication_status:'not_published',
    license_confirmed:false,privacy_confirmed:false,sources,source_url:'https://github.com/'+owner+'/'+repo+'/blob/'+encodeURIComponent(ref)+'/'+file.path,
    markdown:body});
 }catch(e){errors.push({path:file.path,error:String(e.message)});}
}
items.sort((a,b)=>a.path.localeCompare(b.path));
mkdirSync('artifacts',{recursive:true});
writeFileSync('artifacts/wiki-ingest-candidates.json',JSON.stringify({schema_version:1,ref,scanned:files.length,items,errors},null,2)+'\n');
console.log(JSON.stringify({scanned:files.length,prepared:items.length,errors:errors.length}));
if(errors.length) process.exitCode=1;
