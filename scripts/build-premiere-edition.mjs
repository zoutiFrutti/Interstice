/* Première édition : assemblage de prévisualisation seulement.
   Ne publie rien, n'utilise ni API ni données personnelles. */
import {readFileSync,writeFileSync,mkdirSync,existsSync} from "node:fs";
import {resolve,join,relative,dirname} from "node:path";
import {createHash} from "node:crypto";
import {fileURLToPath} from "node:url";

const ROOT=resolve(dirname(fileURLToPath(import.meta.url)),"..");
const REGEXP=/^(BIO|ASSO|ARCH|COL|EXP|FN)-[0-9]{3}$/;
const AUTH_FIELDS=["sources_review","critical_review","rights_review","zout_decision","verified_at"];
const escapeHtml=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cleanUrl=s=>{try{const u=new URL(s);return ["https:","http:"].includes(u.protocol)?u.href:null}catch{return null}};
const validDate=x=>typeof x==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x));
const json=p=>JSON.parse(readFileSync(p,"utf8"));
const sha256=buf=>createHash("sha256").update(buf).digest("hex");
const gitSha=s=>createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0"+s).digest("hex");
const relroot=(root,out)=>{let r=relative(out,root).replaceAll("\\","/");return r?r+"/":""};
function assertSafePath(root,path){
 if(typeof path!=="string"||!path.startsWith("edition-premiere/dossiers/")||!/^[\w./-]+\.json$/.test(path)||path.includes(".."))throw Error("Chemin dossier non autorisé");
 const full=resolve(root,path);
 if(!full.startsWith(resolve(root)+"/"))throw Error("Dossier hors dépôt");
 return full;
}
function validateDecision(d,r){
 if(!d||!r||d.id!==r.id||d.lot!==r.kind)throw Error("ID ou lot hors inventaire : "+(d?.id||"?"));
 if(d.authorization!=="ACCORD_EDITO_ZOUT"||r.approval!=="ACCORD_EDITO_ZOUT")throw Error("Absence de deux visas explicites : "+d.id);
 for(const key of AUTH_FIELDS)if(typeof d[key]!=="string"||d[key].length<5)throw Error("Contrôle manquant "+key+" : "+d.id);
 if(!validDate(d.verified_at))throw Error("Date de vérification incorrecte : "+d.id);
 if(d.rights_status!=="DROITS_OK_OU_SANS_MEDIA"||d.no_media!==true)throw Error("Droits non acquis : "+d.id);
 if(r.kind==="ARCH" && r.editorial_visa){
  if(r.editorial_visa.rights_final!=="DROITS_OK_OU_SANS_MEDIA")throw Error("Réserve de droits toujours ouverte : "+d.id);
  if(d.source_editorial_blob_sha!==r.editorial_visa.source_blob_sha)throw Error("Version éditoriale de l'archive différente : "+d.id);
 }

 if(r.kind==="WIKI"){
  if(d.source_blob_sha!==r.source_blob_sha)throw Error("Version de Wiki différente : "+d.id);
 }else if(!REGEXP.test(d.id)){
  throw Error("Identifiant non conforme : "+d.id);
 }
}
function safeDoc(x,d){
 if(!x||x.id!==d.id||!Array.isArray(x.blocks)||!x.blocks.length||x.blocks.length>120||
  !Array.isArray(x.sources)||x.sources.length===0||x.sources.length>80||x.media?.length)throw Error("Dossier incomplet ou média non autorisé");
 if(typeof x.title!=="string"||x.title.trim().length<4||x.title.length>200)throw Error("Titre manquant");
 if(typeof x.version!=="string"||x.version.length>30)throw Error("Version absente");
 if(x.kind!==d.lot)throw Error("Type de dossier incohérent");
 if(!Array.isArray(x.related_ids))throw Error("Références croisées non renseignées");
 const sourceIds=new Set();
 for(const s of x.sources){
  if(!s.id||sourceIds.has(s.id)||typeof s.title!=="string"||typeof s.rights!=="string"||
     typeof s.read_level!=="string"||typeof s.date!=="string")throw Error("Source sans crédits, date ou niveau de lecture");
  if(s.url&&!cleanUrl(s.url))throw Error("Lien externe non sûr");
  sourceIds.add(s.id);
 }
 for(const b of x.blocks){
  if(!["fait","interpretation","proposition","incertitude","temoignage"].includes(b.type)||
     typeof b.text!=="string"||!b.text.trim()||!Array.isArray(b.source_ids)||!b.source_ids.length||
     !b.source_ids.every(id=>sourceIds.has(id)))throw Error("Affirmation sans référence vérifiée");
 }
 if(!x.related_ids.every(x=>typeof x==="string"&&x.length<150))throw Error("Liens invalides");
}
function pageFrame(title,inner,prefix){
 return '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+
 '<meta name="robots" content="noindex,nofollow"><title>'+escapeHtml(title)+' · Interstice candidat</title>'+
 '<link rel="stylesheet" href="'+prefix+'style.css"><link rel="stylesheet" href="'+prefix+'assets/fiche-design-system.css">'+
 '<link rel="stylesheet" href="'+prefix+'assets/fiche-premiere-edition.css">'+
 '<style>body{overflow-wrap:anywhere}main{max-width:980px}.edition-note{border:2px solid #c8bfc0;padding:16px;margin:18px 0}.edition-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px}.edition-cards article{border:1px solid #bbb;padding:16px}.edition-compact{font-size:1rem}a:focus-visible,input:focus-visible{outline:3px solid #f1d29e;outline-offset:3px}@media print{body{background:#fff!important;color:#000!important}a{color:#000!important}.edition-note{color:#000!important;border-color:#000!important}.edition-controls{display:none!important}}</style></head><body>'+
 '<a href="#contenu">Aller au contenu</a><header><strong>INTERSTICE<span>.</span></strong> <a href="'+prefix+'wiki.html">Wiki existant</a></header>'+
 '<main id="contenu"><p class="tag">PRÉVISUALISATION NON PUBLIÉE · SOUS RESPONSABILITÉ ÉDITORIALE DE ZOUT</p>'+
 inner+'</main><footer>La Faille noire × Interstice · Édition de travail, manifeste et charte non adoptés collectivement</footer></body></html>';
}
function ficheHtml(d,x,records,prefix){
 const approved=new Set(records.map(a=>a.id));
 const links=x.related_ids.map(id=>{
  if(approved.has(id))return '<li><a href="fiche-'+escapeHtml(id)+'.html">'+escapeHtml(id)+'</a></li>';
  return '<li>'+escapeHtml(id)+' · lien documentaire non résolu, pas de fiche approuvée dans ce lot</li>';
 }).join("");
 const blocks=x.blocks.map(b=>'<section class="fiche-section"><h2>'+escapeHtml({fait:"Fait sourcé",interpretation:"Interprétation",proposition:"Proposition éditoriale",incertitude:"Incertain / à vérifier",temoignage:"Source historique / témoignage"}[b.type])+'</h2><p>'+escapeHtml(b.text)+'</p><p class="edition-compact">Sources : '+b.source_ids.map(id=>'<a href="#source-'+escapeHtml(id)+'">'+escapeHtml(id)+'</a>').join(" · ")+'</p></section>').join("");
 const src=x.sources.map(s=>'<li id="source-'+escapeHtml(s.id)+'">'+(s.url?'<a href="'+escapeHtml(cleanUrl(s.url))+'" rel="noopener noreferrer">'+escapeHtml(s.title)+'</a>':escapeHtml(s.title))+
 ' · '+escapeHtml(s.date)+' · '+escapeHtml(s.read_level)+' · droits : '+escapeHtml(s.rights)+' · '+escapeHtml(s.credit||"Crédits à préciser")+'</li>').join("");
 return pageFrame(x.title,'<article class="interstice-fiche"><div class="fiche-hero"><h1>'+escapeHtml(x.title)+'</h1><p>'+escapeHtml(d.id)+' · '+escapeHtml(d.lot)+'</p></div>'+
 '<aside class="edition-note"><strong>VISA ÉDITORIAL ZOUT : '+escapeHtml(d.zout_decision)+'</strong><p>Statut : accord pour une édition candidate, non publiée. Aucune adoption collective du manifeste ni de la charte.</p>'+
 '<p>Version '+escapeHtml(x.version)+' · vérifié le '+escapeHtml(d.verified_at)+' · droits : '+escapeHtml(d.rights_status)+'</p>'+
 '<p>Relecture sources : '+escapeHtml(d.sources_review)+' · critique : '+escapeHtml(d.critical_review)+' · juridique : '+escapeHtml(d.rights_review)+'</p></aside>'+
 blocks+'<section class="fiche-section"><h2>Sources et crédits</h2><ul>'+src+'</ul></section>'+
 '<section class="fiche-section"><h2>Contradictions et limites</h2><p>'+escapeHtml(x.contradictions||"Aucune contradiction renseignée ; à revérifier avant publication.")+'</p></section>'+
 '<section class="fiche-section"><h2>Fiches connexes</h2><ul>'+links+'</ul></section>'+
 '<p><a href="index.html">Retour à l’index des lots</a></p></article>',prefix);
}
export function buildEdition({root=ROOT,out=join(ROOT,"artifacts/edition-premiere-preview"),inventoryPath=join(ROOT,"edition-premiere/inventaire-snapshot.json"),decisionPath=join(ROOT,"edition-premiere/decisions.json")}={}){
 const inventory=json(inventoryPath),authorizations=json(decisionPath);
 if(inventory.schema!=="edition-pre-sortie-inventaire-v1"||!Array.isArray(inventory.records))throw Error("Inventaire invalide");
 if(!Array.isArray(authorizations.authorizations))throw Error("Décisions invalides");
 const map=new Map();
 for(const r of inventory.records){if(map.has(r.id))throw Error("Identifiant d'inventaire dupliqué "+r.id);map.set(r.id,r)}
 const seen=new Set(),eligible=[];
 for(const d of authorizations.authorizations){
  if(seen.has(d.id))throw Error("Double autorisation "+d.id);
  seen.add(d.id);
  const record=map.get(d.id);validateDecision(d,record);
  if(d.lot==="WIKI"){
   const full=resolve(root,record.path);
   const source=readFileSync(full,"utf8");
   if(gitSha(source)!==record.source_blob_sha)throw Error("Wiki modifié depuis la revue : "+d.id);
   eligible.push({id:d.id,lot:"WIKI",title:record.title,existing:record.path,decision:d});
  }else{
   const full=assertSafePath(root,d.source_path);
   if(!existsSync(full))throw Error("Dossier absent "+d.id);
   const content=readFileSync(full);
   if(d.source_sha256!==sha256(content))throw Error("Dossier modifié depuis visa : "+d.id);
   const data=JSON.parse(content.toString("utf8"));safeDoc(data,d);
   eligible.push({id:d.id,lot:d.lot,title:data.title,data,decision:d});
  }
 }
 for(const a of eligible)if(a.data){
  const existing=new Set(eligible.map(x=>x.id));
  for(const id of a.data.related_ids)if(!map.has(id))throw Error("Lien vers identifiant absent de l'inventaire : "+id);
  // Une référence non validée reste du texte, jamais un faux lien.
 }
 const prefix=relroot(root,out);
 mkdirSync(out,{recursive:true});
 const cards=eligible.map(a=>'<article data-search="'+escapeHtml((a.id+" "+a.title+" "+a.lot).toLocaleLowerCase("fr"))+'"><h2>'+escapeHtml(a.title)+'</h2><p>'+escapeHtml(a.id)+' · '+escapeHtml(a.lot)+'</p><a href="'+(a.existing?prefix+escapeHtml(a.existing):"fiche-"+escapeHtml(a.id)+".html")+'">Consulter</a></article>').join("");
 const inner='<h1>Première édition : lots candidats vérifiés</h1><aside class="edition-note"><strong>Aucun fichier de cet aperçu n’est publié automatiquement.</strong>'+
 '<p>Édition documentaire sous responsabilité éditoriale de Zout. Manifeste et charte non adoptés collectivement. Seuls les identifiants ayant des avis documentés et deux visas concordants apparaissent.</p>'+
 '<p>Lots admissibles : '+eligible.length+'. Bloqués / non approuvés : '+(inventory.records.length-eligible.length)+'. Inventaire figé : '+escapeHtml(inventory.source.blob_sha)+'.</p></aside>'+
 '<div class="edition-controls"><label for="edition-recherche">Rechercher parmi les lots admissibles</label><input type="search" id="edition-recherche" autocomplete="off">'+
 '<p id="edition-compte" role="status" aria-live="polite">'+eligible.length+' résultat(s)</p></div>'+
 '<div class="edition-cards" id="edition-cartes">'+(cards||'<p>Aucun contenu admissible pour le moment. Les fiches restent à relire et à approuver.</p>')+'</div>'+
 '<script>(function(){const q=document.getElementById("edition-recherche"),n=document.getElementById("edition-compte"),cards=[...document.querySelectorAll("#edition-cartes article")];q.addEventListener("input",function(){const x=q.value.trim().toLocaleLowerCase("fr");let count=0;for(const c of cards){const ok=c.dataset.search.includes(x);c.hidden=!ok;if(ok)count++}n.textContent=count+" résultat(s)";});})();</script>';
 writeFileSync(join(out,"index.html"),pageFrame("Lots de première édition",inner,prefix));
 for(const a of eligible)if(a.data)writeFileSync(join(out,"fiche-"+a.id+".html"),ficheHtml(a.decision,a.data,eligible,prefix));
 const report={source_sha:inventory.source.blob_sha,known:inventory.records.length,approved:eligible.length,blocked:inventory.records.length-eligible.length,ids:eligible.map(x=>x.id),output:relative(root,out)};
 writeFileSync(join(out,"rapport.json"),JSON.stringify(report,null,2)+"\n");
 return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 console.log(JSON.stringify(buildEdition(),null,2));
}
