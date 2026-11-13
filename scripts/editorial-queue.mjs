// Deterministic metadata queue. It does not retrieve texts, grant visas or publish.
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
export const HELD={
 'FN-018':'Identité bibliographique non établie',
 'BIO-019':'Identité bloquée ; rectificatif et preuves nécessaires',
 'BIO-021':'Identité et attributions bloquées',
 'DROIT-001':'Revue juridique et sanitaire nécessaire ; PAR-005 bloqué',
 'DROIT-002':'Revue juridique et visa nécessaires',
 'FN-022':'Comparer éditions avec FN-048, sans fusion automatique',
 'FN-048':'Comparer éditions avec FN-022, sans fusion automatique',
 'FN-038':'Comparer langue, édition et droits avec FN-057',
 'FN-057':'Comparer langue, édition et droits avec FN-038'
};
export const INITIAL_BATCHES=[
 {id:'lot-commune-01',label:'Commune · Lot 01',directory:'relecture',route:'#parcours/PAR-001',resource_ids:['ASSO-008','ASSO-007','ARCH-002','ARCH-006','BIO-012']},
 {id:'lot-commune-02',label:'Commune · Lot 02',directory:'relecture-commune-02',route:'#parcours/PAR-001',resource_ids:['ARCH-003','ARCH-004','ARCH-005','ARCH-007','COL-003']}
];
export function createQueue(resources){
 const seen=new Set();
 for(const x of resources){if(!x.id||seen.has(x.id)||/[/%?#\s]/.test(x.id)||x.id.includes('..'))throw Error('ID absent, dupliqué ou dangereux');seen.add(x.id);}
 const existing=resources.filter(x=>x.kind==='article').map(x=>({id:x.id,state:'R6_EXISTING',publication_status_unchanged:true}));
 const held=resources.filter(x=>HELD[x.id]).map(x=>({id:x.id,state:'HELD',reason:HELD[x.id]}));
 const assigned=new Set([...existing,...held].map(x=>x.id));
 const batches=INITIAL_BATCHES.map(b=>({...b,resource_ids:[...b.resource_ids]}));
 for(const batch of batches)for(const id of batch.resource_ids){if(!seen.has(id)||assigned.has(id))throw Error('Affectation initiale invalide');assigned.add(id);}
 // Commune first by existing identifiers, then the other documented collections.
 const rank=x=>/^(ARCH|ASSO|BIO|COL)-/.test(x.id)?0:/^(CAT|ZAP)-/.test(x.id)?1:x.kind==='oeuvre'?2:x.primary_door==='carte'?3:4;
 const remaining=resources.filter(x=>!assigned.has(x.id)).sort((a,b)=>rank(a)-rank(b)||a.id.localeCompare(b.id,'fr'));
 for(let i=0;i<remaining.length;i+=5){
  const number=String(i/5+1).padStart(2,'0');
  batches.push({id:'lot-corpus-'+number,label:'Corpus · Lot '+number,directory:'relecture-corpus-'+number,route:'#traversees',resource_ids:remaining.slice(i,i+5).map(x=>x.id)});
 }
 return {version:1,scope:'metadata_queue_not_completed_articles',max_batch_size:5,total:resources.length,publication_authorized:false,blocked_paths:['PAR-005'],existing,held,batches};
}
export async function currentQueue(){
 const bytes=await readFile(resolve(root,'coordination/v2/work-c02-01/data/resources.json'));
 const q=createQueue(JSON.parse(bytes).resources);
 q.catalogue_sha256=createHash('sha256').update(bytes).digest('hex');
 return q;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const q=await currentQueue();
 await writeFile(resolve(root,'coordination/work/c07/EDITORIAL_QUEUE.json'),JSON.stringify(q,null,2)+'\n');
 console.log(q.total+' objets classés, '+q.existing.length+' pages R6 existantes, '+q.held.length+' objets en attente de preuves ou revue, '+q.batches.length+' lots de cinq maximum. Aucun visa nouveau.');
}
