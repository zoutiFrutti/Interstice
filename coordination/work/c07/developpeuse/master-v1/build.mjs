// C07 DEV-03: internal, deterministic, fail-closed projection. No site output.
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const here=dirname(fileURLToPath(import.meta.url));
const root=resolve(here,'../../../../..');
const data='coordination/v2/work-c02-01/data/';
const expected=Object.freeze({
 'resources.json':'66957e1b223f05642dcd69479ac48d0394797802',
 'sources.json':'02d709a3e2ae4db764f894a87e6a25a769199143',
 'relations.json':'b59d03362798947ee7e31202b0466848bf5627e7',
 'objections.json':'a91b1c0092b252a0e7c2f8eebe67f555dd1d679d',
 'parcours.json':'be242baf409d0715bc870af68c15f75ae4ae770a',
 'navigation.json':'c154891466df8465e06bf3dd04436c94118ecff4'
});
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const gitBlob=bytes=>createHash('sha1').update(Buffer.concat([Buffer.from('blob '+bytes.length+'\\0'),bytes])).digest('hex');
const unique=(xs,label)=>{const ids=xs.map(x=>x.id);if(new Set(ids).size!==ids.length)throw Error('Duplicate '+label);return new Map(xs.map(x=>[x.id,x]));};
const sort=(a,b)=>a<b?-1:a>b?1:0;
const stable=x=>JSON.stringify(x,(_k,v)=>v&&typeof v==='object'&&!Array.isArray(v)?Object.fromEntries(Object.keys(v).sort(sort).map(k=>[k,v[k]])):v);
export function loadSnapshot(directory=root){
 const out={};
 for(const [name,blob] of Object.entries(expected)){
  const bytes=readFileSync(resolve(directory,data,name));
  if(gitBlob(bytes)!==blob)throw Error('Source blob mismatch: '+name);
  out[name.slice(0,-5)]=JSON.parse(bytes.toString('utf8'));
 }
 return out;
}
export function buildMaster(bundle,overlay){
 if(overlay.schema_version!=='c07-reviewed-overlay/1'||overlay.med.blob!=='dc695cecf288791ff71203415329df023b58c556'||overlay.jur.blob!=='787fb845db3582c43678bd0925a479700474475f')throw Error('Review overlay version mismatch');
 const resources=bundle.resources.resources,sources=bundle.sources.sources,relations=bundle.relations.relations,objections=bundle.objections.objections,parcours=bundle.parcours.parcours;
 if(resources.length!==219||sources.length!==100||relations.length!==19||objections.length!==30||parcours.length!==7||parcours.reduce((n,p)=>n+p.steps.length,0)!==29)throw Error('C02 counts changed');
 const rm=unique(resources,'resources'),sm=unique(sources,'sources'),lm=unique(relations,'relations'),om=unique(objections,'objections'),pm=unique(parcours,'parcours');
 if(resources.filter(r=>r.id.startsWith('FN-')).length!==71||resources.filter(r=>r.id.startsWith('wiki-')&&r.id.endsWith('.html')).length!==24)throw Error('Identity coverage changed');
 const aliases=new Map();
 for(const r of resources){for(const a of r.aliases||[]){if(aliases.has(a)||rm.has(a))throw Error('Alias collision');aliases.set(a,r.id)}for(const id of r.source_refs||[])if(!sm.has(id))throw Error('Missing source reference');}
 if(aliases.size!==3||aliases.get('ECO-19')!=='FN-024'||aliases.get('ECO-001')!=='ÉCO-001'||aliases.get('tis-c8-velo')!=='TIS-001-001')throw Error('Alias mapping changed');
 for(const l of relations){if(!rm.has(l.from_id)||!rm.has(l.to_id))throw Error('Missing relation endpoint');for(const s of l.source_refs||[])if(!sm.has(s))throw Error('Missing relation source');}
 for(const p of parcours){for(const step of p.steps){for(const id of step.resource_ids||[])if(!rm.has(id))throw Error('Missing step resource');}}
 const legal=resources.reduce((a,r)=>(a[r.validation.legal]=(a[r.validation.legal]||0)+1,a),{});
 if(legal.non_examine!==217||legal.bloque!==2||resources.some(r=>r.validation.publication!=='non_autorisee'))throw Error('Legal/publication guard changed');
 if(parcours.find(p=>p.id==='PAR-005')?.validation?.publication!=='non_autorisee')throw Error('PAR-005 changed');
 const rows=resources.slice().sort((a,b)=>sort(a.id,b.id)).map(r=>{
  const rel=relations.filter(l=>l.from_id===r.id||l.to_id===r.id).map(l=>l.id).sort(sort);
  const obj=objections.filter(o=>(o.resource_ids||[]).includes(r.id)).map(o=>o.id).sort(sort);
  const atlas=r.primary_door==='carte';
  const historical=r.kind==='archive';
  return {schema_version:'c07-master-projection/1',id:r.id,title:r.title,kind:r.kind,identity_origin:r.id_origin||'identifiant_existant',legacy_primary_door:r.primary_door,aliases:[...(r.aliases||[])],duplicate_candidates:[...(r.duplicate_candidates||[])],source_refs:[...(r.source_refs||[])],canonical_source:{kind:r.canonical_url?.endsWith('.html')?'relative_html':r.dossier_locator?'drive':'missing',reference_id:null,locator_internal:null,candidate_status:r.id==='FN-018'?'missing':r.duplicate_candidates?.length?'conflict':'candidate',body_read:false,evidence_blob_sha:null},versions:{registry_blob_sha:expected['resources.json'],source_blob_sha:null,selected_source_sha256_claimed:null,content_sha256_verified:null,legal_review_content_sha256:null,last_checked_at:null},status:{technical:'candidate',documentary:r.validation.documentary,editorial:'non_vise',legal:r.validation.legal,blocked:r.validation.legal==='bloque'||r.validation.documentary==='bloquee'||r.id==='FN-018'||(r.duplicate_candidates||[]).length>0},rights:{historical_work:'unknown',modern_reproduction:'unknown',translation:'unknown',images:'unknown',legal_scope:null,rights_evidence_refs:[]},privacy:{class:'UNREVIEWED',public_metadata_allowed:false,sensitive_location:null,review_evidence:null},relations_ids:rel,objection_ids:obj,legacy_objections_ref:null,presentation:{door:atlas?'encyclopedie':r.primary_door,facets:[...(atlas?['atlas']:[]),...(historical?['archives']:[])],atlas_geometry:null,activity_now_verified:false,interstice_partnership_verified:false},visas:{documentary:{state:'pending',actor:null,at:null,content_sha256:null},editorial:{state:'pending',actor:null,at:null,content_sha256:null},legal:{state:'pending',actor:null,at:null,content_sha256:null},publication:{state:'non_autorisee',decision_ref:null,actor:null,at:null,content_sha256:null}}};
 });
 if(rows.filter(r=>r.legacy_primary_door==='carte').length!==21)throw Error('Atlas legacy count changed');
 return {rows,relations:lm,objections:om,sources:sm,parcours:pm,aliases};
}
export function projectPublic(record){
 // DEV-03 has no human-approved, content-hash-bound publication manifest.
 // Never serialize record, title, locator, coordinates, or source refs.
 return null;
}
export function buildPublicCards(master){return master.rows.map(projectPublic).filter(Boolean);}
export function summarize(master){
 const summary={schema_version:'c07-master-projection/1',objects:master.rows.length,sources:master.sources.size,relations:master.relations.size,objections:master.objections.size,parcours:master.parcours.size,atlas_legacy:master.rows.filter(x=>x.legacy_primary_door==='carte').length,blocked:master.rows.filter(x=>x.status.blocked).length,public_cards:buildPublicCards(master).length};
 return {summary,checksum:sha(stable(summary)),public_cards:[]};
}
export function run(directory=root){
 const overlay=JSON.parse(readFileSync(resolve(directory,'coordination/work/c07/developpeuse/master-v1/overlay-reviewed.json'),'utf8'));
 return summarize(buildMaster(loadSnapshot(directory),overlay));
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{const result=run();process.stdout.write(JSON.stringify(result)+'\\n');}catch(_error){process.stderr.write('C07 master: validation failed (details suppressed)\\n');process.exitCode=1;}
}
