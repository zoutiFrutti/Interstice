/* Prévisualisation locale d'une contribution déjà chargée par la revue autorisée.
   Aucune requête réseau, aucun stockage, aucune transition éditoriale. */
import { renderFiche } from "./fiche-renderer.mjs";

const stringValue = (value,max=25000) => typeof value==="string" ? value.slice(0,max).trim() : "";
export function renderModeratorPreview(item,target){
  if(!(target instanceof HTMLElement)) throw new TypeError("Élément de prévisualisation requis");
  const title=stringValue(item?.title,200);
  const intention=stringValue(item?.intention,3000);
  const body=stringValue(item?.body,25000);
  if(title.length<5 || intention.length<20 || !body){
    target.replaceChildren();
    const error=document.createElement("p");
    error.setAttribute("role","alert");
    error.textContent="Cette proposition est incomplète pour l'aperçu graphique. Son statut n'a pas changé.";
    target.append(error);
    return {ok:false,errors:["Champs nécessaires manquants"]};
  }
  const blocks=[
    {id:"objectif",kind:"heading",texte:"Objectif déclaré",qualification:"a_verifier"},
    {id:"intention",kind:"paragraph",texte:intention,qualification:"a_verifier"},
    {id:"texte",kind:"heading",texte:"Texte proposé, sans validation",qualification:"a_verifier"},
    {id:"corps",kind:"paragraph",texte:body,qualification:"a_verifier"}
  ];
  const submittedSources=stringValue(item.sources,8000);
  if(submittedSources){
    blocks.push({id:"references",kind:"heading",texte:"Références proposées, non vérifiées",qualification:"a_verifier"});
    blocks.push({id:"references-texte",kind:"paragraph",texte:submittedSources,qualification:"a_verifier"});
  }
  const itemId=typeof item.id==="string" && /^[a-zA-Z0-9_-]{4,120}$/.test(item.id) ? item.id : "contribution-locale";
  const data={
    schema_version:"0.1",
    id:itemId,
    type:"article",
    titre:title,
    resume:intention,
    rubrique:stringValue(item.theme,120)||"Non précisée",
    langue:"fr",
    blocs,
    sources:[],
    contradictions:[],
    incertitudes:[{texte:"Les affirmations, les références et les droits de cette contribution n'ont pas été vérifiés par ce dispositif."}],
    workflow:{editorial_status:"pending",publication_status:"not_published"},
    droits:{etat:"to_verify"},
    revision:{numero:1}
  };
  // Ne jamais prendre item.status pour une autorisation de publication.
  // L'aperçu n'a aucune fonction Supabase, de sauvegarde ou de publication.
  return renderFiche(data,target);
}
