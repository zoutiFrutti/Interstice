// Explicit private review build, deliberately separate from build-nav-preview.mjs.
// This flag is an operator safeguard, not authentication: hosting must remain owner-only.
import {mkdir,readFile,writeFile,readdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const hash=value=>createHash('sha256').update(value).digest('hex');
const ids=new Set(['ASSO-007','ASSO-008','ARCH-002','ARCH-006','BIO-012']);
const safeURL=value=>{const u=new URL(value);if(u.protocol!=='https:'||u.username||u.password)throw Error('Source HTTPS sans identifiants nécessaire');return u.href;};
export async function buildEditorialReview(batch,output) {
 if(batch.audience!=='owner_private'||batch.publication_authorized!==false||batch.human_visa!=='PENDING')throw Error('Relecture privée sans visa seulement');
 if(batch.id!=='lot-commune-01'||!Array.isArray(batch.items)||!batch.items.length||batch.items.length>5)throw Error('Lot Commune borné à cinq fiches');
 const seen=new Set();
 // Validate the whole batch before writing any file.
 for(const item of batch.items){
  if(!ids.has(item.id)||seen.has(item.id))throw Error('Identifiant bloqué, hors lot ou dupliqué');seen.add(item.id);
  if(!item.title||!item.intro||!Array.isArray(item.sections)||!item.sections.length||!item.reserves?.length||!item.sources?.length||!item.distinct_contribution)throw Error('Texte, réserves, sources et apport distinct nécessaires');
  if(!/^[a-f0-9]{64}$/.test(item.source_sha256)||!item.source_revision)throw Error('Provenance obligatoire');
  for(const source of item.sources){safeURL(source.url);if(!source.access)throw Error('Niveau de consultation absent');}
 }
 await mkdir(output,{recursive:true});
 const permitted=new Set(['index.html','manifest.json',...batch.items.map(x=>x.id+'.html')]);
 for(const name of await readdir(output))if(!permitted.has(name))throw Error('Sortie contenant un fichier étranger');
 const shell=(title,body)=>'<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="referrer" content="no-referrer"><title>'+escape(title)+' · Relecture privée</title><link rel="stylesheet" href="../assets/nav-01/reading.css"><script type="module" src="../assets/nav-01/reading-return.mjs"></script></head><body><a class="skip" href="#lecture">Aller au texte</a><header><a data-return href="../index.html#parcours/PAR-001">← Revenir à la Commune dans la faille</a><span>Interstice · Relecture privée</span></header><main id="lecture"><aside><p>LOT COMMUNE 01 · CANDIDAT À RELIRE · VISA HUMAIN EN ATTENTE</p><p>Ces textes ne sont pas publiés sur le site public. Sources et objections restent à leur niveau de preuve ; aucune image reproduite.</p></aside>'+body+'</main><footer><a href="index.html">← Les cinq fiches du lot</a></footer></body></html>';
 const manifest={id:batch.id,audience:batch.audience,publication_authorized:false,human_visa:'PENDING',items:[]};
 for(const item of batch.items){
  let body='<h1>'+escape(item.title)+'</h1><p>'+escape(item.intro)+'</p><h2>Pourquoi cette fiche ici ?</h2><p>'+escape(item.distinct_contribution)+'</p>';
  for(const section of item.sections)body+='<section><h2>'+escape(section.title)+'</h2>'+section.paragraphs.map(p=>'<p>'+escape(p)+'</p>').join('')+'</section>';
  body+='<section><h2>Réserves à conserver</h2><ul>'+item.reserves.map(x=>'<li>'+escape(x)+'</li>').join('')+'</ul></section><section><h2>Sources et consultation réelle</h2><ul>'+item.sources.map(x=>'<li><a href="'+escape(safeURL(x.url))+'" rel="noreferrer noopener">'+escape(x.label)+'</a> — '+escape(x.access)+'</li>').join('')+'</ul></section><section><h2>Traçabilité</h2><p>Version préparée le '+escape(batch.prepared_on)+'. Texte de travail source lu directement ; synthèse consolidée avec les corrections C05/C06. Empreinte du corps source : <code>'+item.source_sha256+'</code>.</p><p>Pas de collation nouvelle de manuscrit, de journal ancien ou de registre comptable. Contrôle contradictoire et droits avant tout visa de publication.</p></section>';
  const page=shell(item.title,body);await writeFile(resolve(output,item.id+'.html'),page);
  manifest.items.push({id:item.id,sha256:hash(page),source_sha256:item.source_sha256,source_revision:item.source_revision,human_visa:'PENDING'});
 }
 const listing='<h1>Commune · Premier lot de relecture</h1><p>Cinq fiches reprises des travaux existants. Lis les textes ci-dessous, puis réponds au QCM dans notre conversation Work. Cette page ne transmet aucune décision.</p><ol>'+batch.items.map(x=>'<li><h2><a href="'+x.id+'.html">'+escape(x.id+' · '+x.title)+'</a></h2><p>'+escape(x.intro)+'</p><p><strong>Réserve principale :</strong> '+escape(x.reserves[0])+'</p></li>').join('')+'</ol>';
 await writeFile(resolve(output,'index.html'),shell('Commune · Lot 01',listing));
 await writeFile(resolve(output,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
 return manifest;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 if(process.argv[2]!=='--owner-private'||!process.argv[3]||!process.argv[4])throw Error('Usage : --owner-private fichier-prive.json dossier-sortie-prive');
 const manifest=await buildEditorialReview(JSON.parse(await readFile(resolve(process.argv[3]),'utf8')),resolve(process.argv[4]));
 console.log('Relecture privée construite : '+manifest.items.length+' fiches ; publication et visa toujours fermés.');
}
