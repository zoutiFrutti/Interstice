// TIS-001: laboratoire documentaire sur trois cas inventés, hors carte, hors imports.
// Aucune donnée d'organisme réel, aucun mandat de publication ni contact.
export const RELATION_STATES=Object.freeze(["repere","referencement_accepte","cooperation_convenue"]);
export const PUBLICATION_STATES=Object.freeze(["interdite","a_examiner"]);
export const DEMO_TIS_STATES=Object.freeze([
 {id:"demo-tis-repere",relation:"repere",publication:"interdite",territory:"Gaillac",category:"Réparation"},
 {id:"demo-tis-reference",relation:"referencement_accepte",publication:"a_examiner",territory:"Rabastens",category:"Entraide"},
 {id:"demo-tis-cooperation",relation:"cooperation_convenue",publication:"interdite",territory:"Lisle-sur-Tarn",category:"Culture"}
].map(x=>Object.freeze({...x,isDemo:true,source:Object.freeze({type:"simulation"})})));
const territories=new Set(["Gaillac","Rabastens","Lisle-sur-Tarn","Albi"]);
const categories=new Set(["Réparation","Entraide","Culture","Mutualisation","Savoirs","Écologie"]);
const labels=Object.freeze({"demo-tis-repere":"Atelier fictif A","demo-tis-reference":"Lieu fictif B","demo-tis-cooperation":"Collectif fictif C"});
// Adaptateur de REVUE seulement. Ne peut jamais produire une fiche publiable.
export function inspectFictionalTis(record){
 if(!record||record.isDemo!==true||record.source?.type!=="simulation"||
   !Object.hasOwn(labels,record.id)||!RELATION_STATES.includes(record.relation)||
   !PUBLICATION_STATES.includes(record.publication)||
   !territories.has(record.territory)||!categories.has(record.category))return null;
 return Object.freeze({id:record.id,title:labels[record.id],kind:"initiative",reading:"communs",
   relation:record.relation,publication:record.publication,publicReady:false,
   territories:Object.freeze([record.territory]),category:record.category,
   source:Object.freeze({type:"simulation"}),isDemo:true,
   warning:"Exercice inventé, sans accord ni référencement réel."});
}
