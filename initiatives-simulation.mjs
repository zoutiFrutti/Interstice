// Simulation entièrement locale : valeurs fermées, aucune saisie d'identité.
// Les suggestions n'ont aucune réalité, aucun score et aucune portée politique.
import {normalizeSearch} from "./initiatives-core.mjs";

export const SIMULATION_OBJECTS=Object.freeze([
 {value:"perceuse",label:"Une perceuse"},
 {value:"stockage",label:"Un lieu de stockage"},
 {value:"transport",label:"Une aide au transport"},
 {value:"machine a coudre",label:"Une machine à coudre"},
 {value:"outils",label:"Des outils"},
 {value:"temps",label:"Du temps disponible"},
 {value:"cuisine",label:"Du matériel de cuisine"}
].map(x=>Object.freeze(x)));
export const SIMULATION_TERRITORIES=Object.freeze(["","Lisle-sur-Tarn","Gaillac","Rabastens","Albi"]);
export const SIMULATION_KINDS=Object.freeze(["besoin","offre"]);
export function findCompatibleExamples(items,{kind,object,territory=""}={}){
 if(!SIMULATION_KINDS.includes(kind)||!SIMULATION_OBJECTS.some(x=>x.value===object)||!SIMULATION_TERRITORIES.includes(territory))return [];
 const phrase=normalizeSearch(object);
 return items.filter(item=>{
   if(item.isDemo!==true||item.source?.type!=="simulation")return false;
   if(territory&&!item.territories.some(x=>normalizeSearch(x)===normalizeSearch(territory)))return false;
   const entries=kind==="besoin"?item.offers:item.needs;
   return entries.some(x=>normalizeSearch(x).includes(phrase));
 }).map(item=>({
   item,
   reason:(kind==="besoin"?"Ressource imaginée : ":"Besoin imaginé : ")+
     (kind==="besoin"?item.offers:item.needs).find(x=>normalizeSearch(x).includes(phrase))
 }));
}
