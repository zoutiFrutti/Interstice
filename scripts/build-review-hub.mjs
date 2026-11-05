// Owner-private review index of actual built manifests, never a simulated readiness dashboard.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {currentQueue} from './editorial-queue.mjs';
import {reviewFilename} from './build-editorial-review.mjs';
const esc=x=>String(x).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export async function buildReviewHub(navRoot){
 const queue=await currentQueue(),available=[];
 for(const batch of queue.batches){
  let m;
  try{m=JSON.parse(await readFile(resolve(navRoot,batch.directory,'manifest.json'),'utf8'));}
  catch(error){if(error.code==='ENOENT')continue;throw error;}
  if(m.id!==batch.id||m.audience!=='owner_private'||m.publication_authorized!==false||!m.items.length||m.items.length>5)throw Error('Manifeste privé incohérent');
  const seen=new Set();
  for(const x of m.items){
   if(!batch.resource_ids.includes(x.id)||seen.has(x.id)||x.file!==reviewFilename(x.id)||!['RETAINED_WITH_RESERVATIONS','NOT_SELECTED_THIS_REVIEW','PENDING'].includes(x.editorial_status))throw Error('Manifeste hors lot');seen.add(x.id);
   const bytes=await readFile(resolve(navRoot,batch.directory,reviewFilename(x.id)));
   if(createHash('sha256').update(bytes).digest('hex')!==x.sha256)throw Error('Page différente du manifeste');
  }
  available.push({...batch,manifest:m});
 }
 const prepared=available.reduce((n,b)=>n+b.manifest.items.length,0);
 const retained=available.flatMap(b=>b.manifest.items).filter(x=>x.editorial_status==='RETAINED_WITH_RESERVATIONS').length;
 const notSelected=available.flatMap(b=>b.manifest.items).filter(x=>x.editorial_status==='NOT_SELECTED_THIS_REVIEW').length;
 const summary={total:queue.total,existing_r6:queue.existing.length,held:queue.held.length,planned_batches:queue.batches.length,prepared_private:prepared,editorially_retained:retained,not_selected_this_review:notSelected,awaiting_editorial_choice:prepared-retained-notSelected,queued_not_prepared:queue.total-queue.existing.length-queue.held.length-prepared,publication_authorized:false};
 const html='<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Les lots de relecture · Interstice</title><link rel="stylesheet" href="../assets/nav-01/reading.css"><script type="module" src="../assets/nav-01/reading-return.mjs"></script></head><body><header><a data-return href="../index.html#traversees">← Revenir dans la faille</a></header><main id="lecture"><h1>Les lots de relecture</h1><p>Le corpus contient '+queue.total+' objets inventoriés, pas '+queue.total+' articles terminés. Chaque lot comporte cinq fiches maximum.</p><aside><p>'+retained+' fiches retenues avec réserves · '+notSelected+' non sélectionnée(s) dans leur lot, conservée(s) · '+(prepared-retained-notSelected)+' fiches préparées à relire · '+summary.queued_not_prepared+' objets encore à préparer.</p><p>'+queue.existing.length+' pages R6 déjà raccordées ; '+queue.held.length+' objets attendent des preuves, une comparaison d’éditions ou une revue spécialisée. Aucun nouveau visa de publication.</p></aside>'+'<section id="attente-specialisee"><h2>En attente spécialisée</h2><p>Ces ressources restent bloquées. Leur présence ici ne vaut ni accès au contenu ni visa de publication.</p><ul>'+queue.held.map(x=>'<li><strong>'+esc(x.id)+'</strong> — '+esc(x.reason)+'</li>').join('')+'</ul></section>'+available.map(b=>'<section><h2><a href="../'+esc(b.directory)+'/index.html">'+esc(b.label)+'</a></h2><p>'+b.manifest.items.filter(x=>x.editorial_status==='RETAINED_WITH_RESERVATIONS').length+' retenues / '+b.manifest.items.length+' préparées</p><ul>'+b.manifest.items.map(x=>'<li>'+esc(x.id)+' — '+(x.editorial_status==='RETAINED_WITH_RESERVATIONS'?'Retenue avec réserves':x.editorial_status==='NOT_SELECTED_THIS_REVIEW'?'Non sélectionnée dans ce lot · conservée':'À relire avant choix éditorial')+'</li>').join('')+'</ul></section>').join('')+'<section><h2>Suite du corpus</h2><p>'+queue.batches.length+' lots sont planifiés au total, Commune en priorité. Seuls les lots dont les pages et empreintes ont été réellement construits sont ouverts ci-dessus.</p><p><a href="../lectures/index.html">Lire les pages R6 existantes</a></p></section></main></body></html>';
 await mkdir(resolve(navRoot,'relectures'),{recursive:true});
 await writeFile(resolve(navRoot,'relectures/index.html'),html);
 await writeFile(resolve(navRoot,'relectures/progress.json'),JSON.stringify(summary,null,2)+'\n');
 return summary;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 if(process.argv[2]!=='--owner-private'||!process.argv[3])throw Error('Usage : --owner-private racine-nav-privee');
 console.log(JSON.stringify(await buildReviewHub(resolve(process.argv[3]))));
}
