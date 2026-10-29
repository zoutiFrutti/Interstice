/* Interstice — rendu sûr d'une fiche structurée, démonstration statique.
   Ne contient aucune action de publication, d'authentification ni d'écriture. */
const TYPE_LABELS = Object.freeze({
  biographie:"Biographie", lecture:"Lecture croisée", archive:"Archive",
  article:"Article", bibliographie:"Bibliographie", tutoriel:"Savoir-faire"
});
const QUALIFICATIONS = Object.freeze({
  fait_documente:"Fait présenté comme documenté",
  analyse:"Analyse / interprétation",
  hypothese:"Hypothèse", temoignage:"Témoignage",
  proposition:"Proposition", a_verifier:"À vérifier"
});
const BLOCK_TYPES = new Set(["heading","paragraph","list_item","quote"]);
const DOC_ID=/^[a-zA-Z0-9_-]{4,120}$/;
const BLOCK_ID=/^[a-zA-Z0-9_-]{1,90}$/;

const node=(tag,cls,text)=>{
  const el=document.createElement(tag);
  if(cls)el.className=cls;
  if(text!==undefined && text!==null)el.textContent=String(text);
  return el;
};
const isPlain=(o)=>o!==null && typeof o==="object" && !Array.isArray(o);
const cleanText=(v,max=25000)=> typeof v==="string" && v.length<=max ? v : "";
function safeExternalUrl(value){
  if(typeof value!=="string" || value.length>2000) return null;
  try{
    const u=new URL(value);
    return (u.protocol==="https:" || u.protocol==="http:") ? u.href : null;
  }catch {return null}
}
function linkTo(url,label){
  const a=node("a",null,label);
  a.href=url;
  if(url.startsWith("http:")||url.startsWith("https:")){a.target="_blank";a.rel="noopener noreferrer"}
  return a;
}
function simpleList(items){
  const ul=node("ul",null);
  for(const item of items){ul.append(node("li",null,item))}
  return ul;
}
function validation(data){
  const errors=[];
  if(!isPlain(data))return ["Données absentes ou invalides"];
  if(data.schema_version!=="0.1") errors.push("Version de schéma inconnue");
  if(typeof data.id!=="string"||!DOC_ID.test(data.id)) errors.push("Identifiant invalide");
  if(!Object.hasOwn(TYPE_LABELS,data.type))errors.push("Type documentaire inconnu");
  if(!cleanText(data.titre,200)||data.titre?.length<5)errors.push("Titre invalide");
  if(!cleanText(data.resume,3000)||data.resume?.length<20)errors.push("Résumé invalide");
  if(!Array.isArray(data.blocs)||data.blocs.length<1||data.blocs.length>1000)errors.push("Blocs absents ou trop nombreux");
  if(!Array.isArray(data.sources)||data.sources.length>500)errors.push("Sources invalides");
  if(!isPlain(data.workflow)||!isPlain(data.droits)||!isPlain(data.revision))errors.push("Informations de suivi manquantes");
  const ids=new Set();
  for(const b of Array.isArray(data.blocs)?data.blocs:[]){
    if(!isPlain(b)||typeof b.id!=="string"||!BLOCK_ID.test(b.id)||ids.has(b.id)||!BLOCK_TYPES.has(b.kind)||typeof b.texte!=="string"||!b.texte.trim()||b.texte.length>25000||!Object.hasOwn(QUALIFICATIONS,b.qualification)){errors.push("Bloc incorrect ou dupliqué");break}
    ids.add(b.id);
  }
  return errors;
}
function evidenceLabel(block){
  const p=node("span","fiche-qualification","Qualification proposée : "+QUALIFICATIONS[block.qualification]);
  return p;
}
function sourceReferences(ids,sourcesById){
  if(!Array.isArray(ids)||!ids.length)return null;
  const refs=node("span","fiche-references");
  refs.append(document.createTextNode("Sources indiquées : "));
  let count=0;
  for(const id of ids){
    const src=sourcesById.get(id);
    if(!src)continue;
    if(count++)refs.append(document.createTextNode(" · "));
    refs.append(linkTo("#source-"+id,cleanText(src.titre,300)));
  }
  return count ? refs:null;
}
function renderBlock(b,current,sourcesById){
  const kind=b.kind;
  if(kind==="heading") return null;
  let wrap;
  if(kind==="list_item")wrap=node("li","fiche-bloc");
  else if(kind==="quote")wrap=node("blockquote","fiche-bloc fiche-bloc--citation");
  else wrap=node("div","fiche-bloc");
  wrap.append(node("p","fiche-bloc__texte",b.texte));
  wrap.append(evidenceLabel(b));
  const refs=sourceReferences(b.sources_ids,sourcesById);
  if(refs)wrap.append(refs);
  current.append(wrap);
  return wrap;
}
function renderNotes(list,title,cls,sourcesById){
  if(!Array.isArray(list)||!list.length)return null;
  const section=node("section","fiche-section "+cls);
  section.append(node("h2",null,title));
  const ul=node("ul",null);
  for(const item of list){
    if(!isPlain(item)||typeof item.texte!=="string")continue;
    const li=node("li",null,cleanText(item.texte,3000));
    const refs=sourceReferences(item.sources_ids,sourcesById);
    if(refs)li.append(refs);
    ul.append(li);
  }
  section.append(ul);return section;
}
/** Affichage non autoritatif, réservé ici à un exemple public déjà existant.
 * Ni statut, ni autorisation, ni données ne sont modifiés. */
export function renderFiche(data,target){
  if(!(target instanceof HTMLElement))throw new TypeError("Conteneur DOM requis");
  const errors=validation(data);
  if(errors.length){
    target.replaceChildren(node("p","fiche-state","Fiche impossible à prévisualiser : "+errors.join("; ")));
    return {ok:false,errors};
  }
  const wrapper=node("article","interstice-fiche fiche-rendue");
  const hero=node("header","fiche-hero");
  hero.append(node("p","tag","ENCYCLOPÉDIE DES COMMUNS · "+TYPE_LABELS[data.type]));
  hero.append(node("h1",null,data.titre));
  hero.append(node("p","fiche-resume",data.resume));
  wrapper.append(hero);

  // Toujours non validé ici, même si un objet JSON prétend "approved".
  const status=node("aside","fiche-state");
  status.setAttribute("aria-label","Statut de cet aperçu");
  status.append(node("span","fiche-state__eyebrow","Aperçu de travail, non validé"));
  status.append(node("strong",null,"Présentation expérimentale · aucun droit de publication"));
  status.append(node("p",null,"Le statut déclaré dans les données n'est pas une décision éditoriale. La mise en forme n'approuve aucun fait, aucune proposition ni aucun témoignage."));
  wrapper.append(status);

  const srcList=Array.isArray(data.sources)?data.sources.filter(s=>isPlain(s)&&typeof s.id==="string"&&BLOCK_ID.test(s.id)): [];
  const sourcesById=new Map(srcList.map(s=>[s.id,s]));
  const headings=data.blocs.filter(b=>b.kind==="heading");
  const navigation=node("nav","fiche-contents");
  navigation.setAttribute("aria-label","Sommaire de la fiche");
  navigation.append(node("strong",null,"Parcourir cette fiche"));
  const navItems=node("ul",null);
  for(const h of headings){
    const li=node("li",null);
    li.append(linkTo("#section-"+h.id,h.texte));
    navItems.append(li);
  }
  if(srcList.length){const li=node("li");li.append(linkTo("#fiche-sources","Sources et provenance"));navItems.append(li)}
  if(Array.isArray(data.contradictions)&&data.contradictions.length){const li=node("li");li.append(linkTo("#fiche-contradictions","Contradictions"));navItems.append(li)}
  navigation.append(navItems);
  wrapper.append(navigation);

  let section=null;
  let activeList=null;
  for(const b of data.blocs){
    if(b.kind==="heading"){
      section=node("section","fiche-section");
      section.id="section-"+b.id;
      section.append(node("h2",null,b.texte));
      wrapper.append(section);
      activeList=null;
    }else{
      if(!section){
        section=node("section","fiche-section");
        section.append(node("h2",null,"Présentation"));
        wrapper.append(section);
      }
      if(b.kind==="list_item"){
        if(!activeList){activeList=node("ul","fiche-liste");section.append(activeList)}
        renderBlock(b,activeList,sourcesById);
      }else{
        activeList=null;
        renderBlock(b,section,sourcesById);
      }
    }
  }
  const contradictions=renderNotes(data.contradictions,"Contradictions et points de tension","fiche-section--discussion",sourcesById);
  if(contradictions){contradictions.id="fiche-contradictions";wrapper.append(contradictions)}
  const incertitudes=renderNotes(data.incertitudes,"Incertitudes et vérifications à poursuivre","fiche-section--discussion",sourcesById);
  if(incertitudes){incertitudes.id="fiche-incertitudes";wrapper.append(incertitudes)}
  if(srcList.length){
    const bibliography=node("section","fiche-section fiche-section--sources");
    bibliography.id="fiche-sources";bibliography.append(node("h2",null,"Sources et provenance"));
    const ul=node("ul");
    const seen=new Set();
    for(const s of srcList){
      if(seen.has(s.id))continue;
      seen.add(s.id);
      const li=node("li",null);
      li.id="source-"+s.id;
      const url=safeExternalUrl(s.url);
      if(url)li.append(linkTo(url,cleanText(s.titre,300)));
      else li.append(node("strong",null,cleanText(s.titre,300)));
      li.append(document.createTextNode(" · "+cleanText(s.provenance,400)));
      if(s.edition)li.append(document.createTextNode(" · "+cleanText(s.edition,300)));
      if(s.date)li.append(document.createTextNode(" · "+cleanText(s.date,50)));
      if(s.limites)li.append(node("p","fiche-source-limites","Limites : "+cleanText(s.limites,3000)));
      ul.append(li);
    }
    bibliography.append(ul);wrapper.append(bibliography);
  }
  const foot=node("footer","fiche-revision");
  foot.append(node("p",null,"Version de données "+data.schema_version+" · Révision de travail n° "+data.revision.numero));
  foot.append(node("p",null,"Cet aperçu ne publie rien et ne modifie aucun statut."));
  wrapper.append(foot);

  target.replaceChildren(wrapper);
  return {ok:true,sections:headings.length,sources:srcList.length};
}
