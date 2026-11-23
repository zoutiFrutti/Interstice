// Contrat de lecture portable : un futur adaptateur HTTP peut remplacer les fixtures.
export function normalizeSearch(input=""){return String(input).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("fr").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ");}
// Les rapprochements sont strictement facultatifs et expliqués champ par champ.
export function explainResourceMatch(item,search="",scope="tous"){
 const normalized=normalizeSearch(search);
 if(!normalized)return [];
 const words=normalized.split(" ").filter(Boolean);
 return [
  ...(scope==="ressource"?[]:(item.needs||[]).map(value=>({kind:"Besoin",value}))),
  ...(scope==="besoin"?[]:(item.offers||[]).map(value=>({kind:"Ressource",value})))
 ].filter(entry=>words.every(word=>normalizeSearch(entry.value).includes(word)))
  .map(entry=>entry.kind+" : "+entry.value);
}
export function filterInitiatives(items,{commune="",category="",objet="",scope="tous",order="source"}={}){
 const safeScope=["tous","besoin","ressource"].includes(scope)?scope:"tous";
 const safeOrder=["source","titre"].includes(order)?order:"source";
 const area=normalizeSearch(commune),cat=normalizeSearch(category);
 const matches=items.filter(item=>(!area||item.territories.some(x=>normalizeSearch(x).includes(area)))&&(!cat||normalizeSearch(item.category)===cat)&&(!normalizeSearch(objet)||explainResourceMatch(item,objet,safeScope).length>0));
 return safeOrder==="titre"?[...matches].sort((a,b)=>a.title.localeCompare(b.title,"fr")):matches;
}
// Explication lisible et strictement fondée sur les champs interrogés.
export function explainSearchMatch(item,{commune="",category="",objet="",scope="tous"}={}){
 const reasons=[];
 if(normalizeSearch(commune)){for(const place of item.territories){if(normalizeSearch(place).includes(normalizeSearch(commune)))reasons.push("Territoire : "+place);}}
 if(normalizeSearch(category)&&normalizeSearch(category)===normalizeSearch(item.category))reasons.push("Domaine : "+item.category);
 if(normalizeSearch(objet))reasons.push(...explainResourceMatch(item,objet,scope));
 return reasons;
}
export function getInitiativeById(items,id){return items.find(x=>x.id===id)||null;}
export function createDemoRepository(items){
 const data=Object.freeze(items.map(i=>Object.freeze({...i,territories:Object.freeze([...i.territories]),needs:Object.freeze([...i.needs]),offers:Object.freeze([...i.offers])})));
 return Object.freeze({mode:"demo",async list(filters={}){return filterInitiatives(data,filters);},async getById(id){return getInitiativeById(data,id);}});
}

// Export explicite des seules données de démonstration. Liste blanche de champs.
// Ne jamais réutiliser pour des données réelles sans autorisation et revue juridique.
export function buildPublicDemoExport(items){
 return {
  format:"interstice-fictif-v1",
  demo:true,
  disclaimer:"Exemples inventés, pas des initiatives réelles",
  initiatives:items.filter(item=>item.isDemo===true&&item.source?.type==="simulation")
    .map(item=>({
      id:item.id,title:item.title,category:item.category,
      territories:[...item.territories],stage:item.stage,summary:item.summary,
      needs:[...item.needs],offers:[...item.offers],
      source:{type:"simulation"}
    }))
 };
}
