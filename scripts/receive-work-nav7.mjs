// Receives an existing artifact by digest; projects navigation metadata, never document bodies.
import {readFile,writeFile,mkdir,readdir,copyFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {DOORS,SUBMENUS,NAV7_ANCHORS,CANDIDATE_ARTWORK} from '../assets/nav-01/graph-data.mjs';
import {LEGACY_QUICK_LINKS} from '../assets/nav-01/legacy-quick-links.mjs';
import {READINGS} from '../assets/nav-01/reading-catalogue.mjs';
const [artifact,evidence]=process.argv.slice(2);if(!artifact||!evidence)throw Error('Usage: node scripts/receive-work-nav7.mjs existing-artifact existing-evidence');
const digest=b=>createHash('sha256').update(b).digest('hex'),base='coordination/work/c07/nav7',root=resolve('.');
const raw=await readFile(resolve(evidence,'package-manifest.json'));if(digest(raw)!=='b128b39132528695f67dde0f53989d45f61536c1ae658ec0a14113481bbdece7')throw Error('Received Work manifest differs');
const rows=JSON.parse(raw);if(rows.length!==135)throw Error('Unexpected Work file count');
async function files(dir,prefix=''){let out=[];for(const e of await readdir(dir,{withFileTypes:true})){if(e.isSymbolicLink())throw Error('Symlink');if(e.isDirectory())out.push(...await files(resolve(dir,e.name),prefix+e.name+'/'));else if(e.isFile())out.push(prefix+e.name);else throw Error('Non-regular file');}return out;}
const paths=await files(resolve(artifact));if(JSON.stringify(paths.sort())!==JSON.stringify(rows.map(x=>x.path).sort()))throw Error('Artifact membership differs');
for(const row of rows)if(digest(await readFile(resolve(artifact,row.path)))!==row.sha256)throw Error('Artifact hash mismatch: '+row.path);
await mkdir(base+'/received-work',{recursive:true});
const inventory=[];
for(const row of rows){const reader=/^lectures\/(FN-\d+)\.html$/.test(row.path);inventory.push({...row,type:row.path.split('.').at(-1),status:reader?'interdit_public_sans_visa':'candidat',audience:'owner_private_review',source:{commit:'7d61a53449832a38870df30f855123e4a0b20c59',path:row.path},new_publication_visa:false});}
await writeFile(base+'/received-work/inventory.json',JSON.stringify({schema:'interstice/work-artifact-inventory/1',original_manifest_sha256:digest(raw),files:inventory},null,2)+'\n');
await writeFile(base+'/received-work/package-manifest.json',raw);
const checks=[];
for(const [name,count] of [['navigation-suite.tap',25],['additional-suite.tap',44],['master-reception.tap',15],['nav-browser-final.tap',26]]){const data=await readFile(resolve(evidence,name));if(!data.toString().includes('pass '+count)||!data.toString().includes('fail 0'))throw Error('Reported old test result not found');await writeFile(base+'/received-work/'+name,data);checks.push({path:base+'/received-work/'+name,sha256:digest(data),passed:count,executed_in_current_cycle:false});}
await writeFile(base+'/received-work/tests.json',JSON.stringify({origin:'C17 logs received, not rerun by receipt',checks,real_400_percent_browser_zoom_verified:false},null,2)+'\n');
const resources=JSON.parse(await readFile('coordination/v2/work-c02-01/data/resources.json','utf8')).resources;
const texts=[];
for(const r of READINGS){const bytes=await readFile(r.source);if(digest(bytes)!==r.sha256)throw Error('Reading differs from pinned source: '+r.id);const main=execFileSync('git',['show','80ce56adfb9c3bc3275844b2847eac717b433aa5:'+r.source]);texts.push({id:r.id,title:r.title,source:r.source,sha256:r.sha256,main_identical:main.equals(bytes),editorial_state:r.status,c07_validation:resources.find(x=>x.id===r.source)?.validation??null,legal_review:'not_reexamined_by_technical_receipt',new_publication_visa:false,work_reader_path:'lectures/'+r.id+'.html'});}
await writeFile(base+'/received-work/readings.json',JSON.stringify({texts},null,2)+'\n');
const original=JSON.parse(await readFile(base+'/contract-received-4cdad619.json','utf8'));
const contract={schema:'interstice/nav7-c07-convergence/1',revision:2,status:'candidate_not_published',source:{navigation_commit:'4cdad619edd387bfb748ab27475156c77ffc322c',c07_commit:'3c21d7d8b4179adff6ce45b71efc9eb9f32bafcd',work_local_commit_reported:'7d61a53',work_local_commit_verified:'7d61a53449832a38870df30f855123e4a0b20c59',work_local_artifact_received:true,work_manifest_sha256:digest(raw),work_preview_status:'native_deployment_and_owner_only_access_verified; browser_content_not_authenticated'},canonical_navigation:'explorer.html',compatibility_entry:'nav7-candidate.html',coordinate_system:{viewbox:[0,0,665,665],source:CANDIDATE_ARTWORK,anchor_source:NAV7_ANCHORS.source,provenance:'C2 annotated Zout capture received and inspected again in C19',capture_sha256:'b03f59b994c9e637166de145f882cb8bd5fb1e5cafdd12ce5e77a034822c8c0f'},primary_ports:DOORS.map(d=>({point:Number(d.number),id:d.id,title:d.title,coordinates:[d.svg_x,d.svg_y],current_link:d.legacy,submenus:SUBMENUS[d.id].map(([slug,title])=>({slug,title,route:'#porte/'+d.id+'/'+slug,state:'navigation_only_no_visa'}))})),manifesto:{point:7,coordinates:[NAV7_ANCHORS.manifeste.svg_x,NAV7_ANCHORS.manifeste.svg_y],source_r6_node:true,display:'in_space_reading_panel',route:'#document/manifeste',direct_link:'manifeste-v2-5.html',not_a_port:true},legacy_quicklinks:LEGACY_QUICK_LINKS,documentary_gates:original.documentary_gates,received_work_counts:{files:135,html_pages:87,submenus:31,texts:24,candidate_media_notices:10,previous_deterministic_tests:84,previous_browser_scenarios:26},rules:original.rules};
await writeFile(base+'/convergence-contract.json',JSON.stringify(contract,null,2)+'\n');
const mapping=['# Raccordement des 15 accès NAV7 aux 31 rubriques Work','','Les 31 rubriques restent la structure de navigation. Les 15 lignes ci-dessous sont des accès existants, sans nouveau visa. L’astérisque désigne les outils transversaux de la Médiathèque, pas un format supplémentaire.','','| Point | Porte | Rubrique | Accès existant | Destination R6 | État |','| --- | --- | --- | --- | --- | --- |',...LEGACY_QUICK_LINKS.map(x=>`| ${x.point} | ${x.door} | ${x.submenu} | ${x.title} | ${x.href} | ${x.collection_state==='suspended'?'Envois suspendus':'Page existante, pas de nouveau visa'} |`)];
await writeFile(base+'/SUBMENUS_31_VS_SHORTCUTS_15.md',mapping.join('\n')+'\n');
console.log(JSON.stringify({received:true,files:rows.length,html_pages:rows.filter(x=>x.path.endsWith('.html')).length,readings:texts.length,menus:contract.primary_ports.reduce((n,p)=>n+p.submenus.length,0),legacy_shortcuts:LEGACY_QUICK_LINKS.length,master_publication_authorized:false}));
