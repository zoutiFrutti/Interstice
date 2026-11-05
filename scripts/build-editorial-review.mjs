// Explicit private review build, deliberately separate from build-nav-preview.mjs.
// This flag is an operator safeguard, not authentication: hosting must remain owner-only.
import {mkdir,readFile,writeFile,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {currentQueue} from './editorial-queue.mjs';
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const hash=value=>createHash('sha256').update(value).digest('hex');
// Includes every editorial field rendered below; a change requires a new decision.
export const editorialContentHash=item=>hash(JSON.stringify(Object.fromEntries(
 ['id','title','intro','distinct_contribution','sections','reserves','sources','source_sha256','source_revision'].map(key=>[key,item[key]])
)));

export const reviewFilename=id=>/^[a-zA-Z0-9_-]+$/.test(id)?id+'.html':'resource-'+hash(id).slice(0,24)+'.html';
const editorialStatus=decision=>decision?.status||'PENDING';
const editorialLabel=decision=>decision?.status==='RETAINED_WITH_RESERVATIONS'?'RETENUE PAR ZOUT AVEC RÉSERVES':decision?.status==='NOT_SELECTED_THIS_REVIEW'?'NON SÉLECTIONNÉE DANS CE LOT · CONSERVÉE':'EN ATTENTE DU CHOIX ÉDITORIAL';
const safeURL=value=>{const u=new URL(value);if(u.protocol!=='https:'||u.username||u.password)throw Error('Source HTTPS sans identifiants nécessaire');return u.href;};
export async function buildEditorialReview(batch,output) {
 if(batch.audience!=='owner_private'||batch.publication_authorized!==false||batch.human_visa!=='PENDING')throw Error('Relecture privée sans visa seulement');
 const queue=await currentQueue(),spec=queue.batches.find(x=>x.id===batch.id);
 if(!spec||!Array.isArray(batch.items)||!batch.items.length||batch.items.length>5)throw Error('Lot enregistré, borné à cinq fiches nécessaire');
 const ids=new Set(spec.resource_ids);
 const seen=new Set();
 // Validate the whole batch before writing any file.
 for(const item of batch.items){
  if(!ids.has(item.id)||seen.has(item.id))throw Error('Identifiant bloqué, hors lot ou dupliqué');seen.add(item.id);
  if(!item.title||!item.intro||!Array.isArray(item.sections)||!item.sections.length||!item.reserves?.length||!item.sources?.length||!item.distinct_contribution)throw Error('Texte, réserves, sources et apport distinct nécessaires');
  if(!/^[a-f0-9]{64}$/.test(item.source_sha256)||!item.source_revision)throw Error('Provenance obligatoire');
  for(const source of item.sources){safeURL(source.url);if(!source.access)throw Error('Niveau de consultation absent');}
 }
 const decisions=new Map();
 for(const decision of batch.editorial_decisions||batch.retention_decisions||[]){
  const item=batch.items.find(x=>x.id===decision.id);
  if(!item||decisions.has(decision.id)||!['RETAINED_WITH_RESERVATIONS','NOT_SELECTED_THIS_REVIEW'].includes(decision.status)||decision.scope!=='candidate_private_editorial_only'||decision.source!=='zout_direct_conversation'||!/^\d{4}-\d{2}-\d{2}$/.test(decision.recorded_on||'')||!/^([a-f0-9]{64})$/.test(decision.reviewed_page_sha256||'')||decision.content_sha256!==editorialContentHash(item))throw Error('Décision éditoriale absente, dupliquée ou périmée pour ce contenu');
  decisions.set(item.id,decision);
 }
 await mkdir(output,{recursive:true});
 const permitted=new Set(['index.html','manifest.json',...batch.items.map(x=>reviewFilename(x.id))]);
 for(const name of await readdir(output))if(!permitted.has(name))throw Error('Sortie contenant un fichier étranger');
 const shell=(title,body)=>'<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="referrer" content="no-referrer"><title>'+escape(title)+' · Relecture privée</title><link rel="stylesheet" href="../assets/nav-01/reading.css"><script type="module" src="../assets/nav-01/reading-return.mjs"></script></head><body><a class="skip" href="#lecture">Aller au texte</a><header><a data-return href="../index.html'+escape(spec.route)+'">← Revenir dans la faille</a><span>Interstice · Relecture privée</span></header><main id="lecture"><aside><p>'+escape(spec.label.toUpperCase())+' · CANDIDATE PRIVÉE · VISA DE PUBLICATION EN ATTENTE</p><p>Ces textes ne sont pas publiés sur le site public. Sources et objections restent à leur niveau de preuve ; aucune image reproduite.</p></aside>'+body+'</main><footer><a href="index.html">← Les fiches du lot</a></footer></body></html>';
 const manifest={id:batch.id,audience:batch.audience,publication_authorized:false,human_visa:'PENDING',publication_visa:'PENDING',retained_count:[...decisions.values()].filter(d=>d.status==='RETAINED_WITH_RESERVATIONS').length,not_selected_count:[...decisions.values()].filter(d=>d.status==='NOT_SELECTED_THIS_REVIEW').length,pending_count:batch.items.length-decisions.size,items:[]};
 for(const item of batch.items){
  const decision=decisions.get(item.id);
  const status=editorialLabel(decision);
  let body='<p><strong>'+status+'</strong></p>'+'<h1>'+escape(item.title)+'</h1><p>'+escape(item.intro)+'</p><h2>Pourquoi cette fiche ici ?</h2><p>'+escape(item.distinct_contribution)+'</p>';
  for(const section of item.sections)body+='<section><h2>'+escape(section.title)+'</h2>'+section.paragraphs.map(p=>'<p>'+escape(p)+'</p>').join('')+'</section>';
  body+='<section><h2>Réserves à conserver</h2><ul>'+item.reserves.map(x=>'<li>'+escape(x)+'</li>').join('')+'</ul></section><section><h2>Sources et consultation réelle</h2><ul>'+item.sources.map(x=>'<li><a href="'+escape(safeURL(x.url))+'" rel="noreferrer noopener">'+escape(x.label)+'</a> — '+escape(x.access)+'</li>').join('')+'</ul></section><section><h2>Traçabilité</h2><p>Version préparée le '+escape(batch.prepared_on)+'. Texte de travail source lu directement ; synthèse consolidée avec les corrections C05/C06. Empreinte du corps source : <code>'+item.source_sha256+'</code>.</p><p>Pas de collation nouvelle de manuscrit, de journal ancien ou de registre comptable. Contrôle contradictoire et droits avant tout visa de publication.</p></section>';
  if(decision)body+='<section><h2>Décision éditoriale</h2><p>Résultat du QCM de Zout enregistré le '+escape(decision.recorded_on)+', pour cette version et ses réserves. Les preuves historiques, les droits et le visa de publication restent distincts.</p><p>Page présentée lors du QCM : <code>'+decision.reviewed_page_sha256+'</code>. Empreinte éditoriale : <code>'+decision.content_sha256+'</code>.</p></section>';
  const page=shell(item.title,body);await writeFile(resolve(output,reviewFilename(item.id)),page);
  manifest.items.push({id:item.id,file:reviewFilename(item.id),sha256:hash(page),source_sha256:item.source_sha256,source_revision:item.source_revision,content_sha256:editorialContentHash(item),editorial_status:editorialStatus(decision),decision:decision||null,human_visa:'PENDING',publication_visa:'PENDING'});
 }
 const listing='<p><a href="../relectures/index.html">← Tous les lots</a></p><h1>'+escape(spec.label)+'</h1><p>'+batch.items.length+' fiches reprises des travaux existants. '+(decisions.size===batch.items.length?'Choix enregistrés : '+manifest.retained_count+' retenues avec réserves ; '+manifest.not_selected_count+' non sélectionnées dans ce lot, conservées pour reprise.':'Les choix éditoriaux restent à compléter dans notre conversation Work.')+' Cette page ne transmet aucune décision.</p><ol>'+batch.items.map(x=>'<li><h2><a href="'+reviewFilename(x.id)+'">'+escape(x.id+' · '+x.title)+'</a></h2><p>'+escape(x.intro)+'</p><p><strong>'+editorialLabel(decisions.get(x.id))+'</strong></p><p><strong>Réserve principale :</strong> '+escape(x.reserves[0])+'</p></li>').join('')+'</ol>';
 await writeFile(resolve(output,'index.html'),shell(spec.label,listing));
 await writeFile(resolve(output,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
 return manifest;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 if(process.argv[2]!=='--owner-private'||!process.argv[3]||!process.argv[4])throw Error('Usage : --owner-private fichier-prive.json dossier-sortie-prive');
 const manifest=await buildEditorialReview(JSON.parse(await readFile(resolve(process.argv[3]),'utf8')),resolve(process.argv[4]));
 console.log('Relecture privée construite : '+manifest.items.length+' fiches ; publication toujours fermée ; décisions éditoriales versionnées.');
}
