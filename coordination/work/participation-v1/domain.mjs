// Shared validation, never imports the private master catalogue into the browser.
/** @type {Readonly<{proposals:boolean,contributions:boolean,research:boolean,discussion:boolean}>} */
export const FLAGS = Object.freeze({proposals:false, contributions:false, research:false, discussion:false});
export const CATEGORIES = ['Idées et projets','Lieux et espaces','Entraide','Savoirs et ateliers','Culture et création','Matériel et ressources'];
export const TYPES = ['idee','initiative','ressource','correction','besoin'];
export const CONTRIBUTIONS = ['correction','source','bibliographie','temoignage','transcription','contradiction','information','reecriture'];
export const STATES = Object.freeze({received:'Proposition reçue',examined:'Proposition examinée',instruction:'Retenue pour instruction',rejected:'Non retenue'});
export class Problem extends Error { constructor(status,message){super(message);this.status=status;} }
export function text(value,max,required=false){
  if(typeof value!=='string'||value.length>max||(required&&!value.trim()))throw new Problem(400,'Un champ est manquant ou trop long.');
  if(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(value))throw new Problem(400,'Caractère de contrôle interdit.');
  return value.trim();
}
export function reference(value){
  const raw=text(value,600,true);let u;try{u=new URL(raw);}catch{throw new Problem(400,'Le lien doit être une adresse HTTP ou HTTPS complète.');}
  const host=u.hostname.toLowerCase();
  if(!['http:','https:'].includes(u.protocol)||u.username||u.password||u.port||!host.includes('.')||/[\[\]:]/.test(host)||/^\d[\d.]+$/.test(host)||/\.(localhost|local|internal|test|invalid)$/.test(host)||['localhost','metadata.google.internal'].includes(host)||/(?:token|key|password|secret|signature|auth|code)=/i.test(u.search+' '+u.hash))throw new Problem(400,'Utilise un lien public, sans accès privé ni jeton.');
  // URLs remain references: never fetched by the server and never rendered as HTML.
  return u.href;
}
export function refs(values){
  if(!Array.isArray(values)||values.length>5)throw new Problem(400,'Cinq références maximum.');
  return [...new Set(values.map(reference))];
}
export function personalData(value){return /[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(value)||/(?:\+33|0)[\s.-]?[1-9](?:[\s.-]?\d{2}){4}/.test(value);}
function safeContent(value){if(personalData(value))throw new Problem(400,'Retire les coordonnées personnelles. Pour un document sensible, utilise le canal à définir avec la modération.');}
function enumeration(value,values){if(!values.includes(value))throw new Problem(400,'Choix invalide.');return value;}
export function validateProposal(d){
  if(!d||typeof d!=='object'||Array.isArray(d))throw new Problem(400,'Format invalide.');
  if(d.website)throw new Problem(400,'Envoi non enregistré.');
  const result={title:text(d.title,160,true),proposal_type:enumeration(d.type,TYPES),need_text:text(d.need,1500),offer_text:text(d.offer,1500),area_text:text(d.area,100),category:enumeration(d.category,CATEGORIES),references:refs(d.references||[])};
  if(!result.need_text&&!result.offer_text)throw new Problem(400,'Indique au moins une idée, un besoin ou une ressource.');
  safeContent([result.title,result.need_text,result.offer_text,result.area_text,...result.references].join(' '));return result;
}
export function validateContribution(d,target,research=null){
  if(!target||!target.public_enabled||target.blocked)throw new Problem(404,'Cette fiche ne reçoit pas de contributions.');
  if(d.version!==target.version)throw new Problem(409,'La fiche a changé. Relis sa version actuelle avant de contribuer.');
  if(research&&research.state!=='open')throw new Problem(409,'Cette recherche est close. Sa réouverture doit être examinée.');
  const result={target_id:target.id,target_version:target.version,kind:enumeration(d.kind,CONTRIBUTIONS),body:text(d.body,6000,true),provenance:text(d.provenance,800,true),locator:text(d.locator,400,true),rights_note:text(d.rightsNote,800,true),references:refs(d.references||[]),research_id:research?.id||null};
  if(d.rightsDeclared!==true)throw new Problem(400,'Précise les droits et la provenance de cet apport.');
  if(!result.references.length)throw new Problem(400,'Ajoute une référence publique vérifiable. Aucun fichier joint n’est accepté dans cette version.');
  safeContent([result.body,result.provenance,result.locator,result.rights_note,...result.references].join(' '));return result;
}
export function validateArgument(d){
  const result={kind:enumeration(d.kind,['argument','objection','source','accord']),body:text(d.body,2000,true),references:refs(d.references||[])};
  safeContent(result.body+' '+result.references.join(' '));return result;
}
export function reviewInput(d){
  if(!Number.isSafeInteger(d.version)||d.version<1)throw new Problem(400,'Version de traitement invalide.');
  if(d.verified===true&&(d.rightsChecked!==true||d.state!=='instruction'))throw new Problem(400,'La vérification demande une instruction et un examen des droits.');
  return {version:d.version,state:enumeration(d.state,['examined','instruction','rejected']),reason:text(d.reason,1000,true),verified:d.verified===true,rights_checked:d.rightsChecked===true};
}
export function filterResearch(rows,{q='',institution='',area='',state=''}={}){
  const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  return rows.filter(x=>(!state||x.state===state)&&(!institution||norm(x.institution).includes(norm(institution)))&&(!area||norm(x.area).includes(norm(area)))&&(!q||norm([x.id,x.title,x.question,x.document,x.locator].join(' ')).includes(norm(q))));
}
export function versionComparison(original,proposed){return {original:String(original),proposed:String(proposed),changed:original!==proposed};}
export function mapProjection(records){
  return records.filter(x=>x.verified===true&&x.permission===true&&x.publicLocation===true&&x.sensitive===false).map(x=>({id:text(x.id,100,true),title:text(x.title,160,true),area:text(x.area,100,true),canonicalUrl:reference(x.canonicalUrl),kind:enumeration(x.kind,['initiative','agenda','ressource','recherche'])}));
}
