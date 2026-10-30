// Contrat de lecture portable : un futur adaptateur HTTP peut remplacer les fixtures.
export function normalizeSearch(input=""){return String(input).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("fr").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ");}
// Les rapprochements sont strictement facultatifs et expliqués champ par champ.
export function explainResourceMatch(item,search=""){
 const normalized=normalizeSearch(search);
 if(!normalized)return [];
 const words=normalized.split(" ").filter(Boolean);
 return [
  ...(item.needs||[]).map(value=>({kind:"Besoin",value})),
  ...(item.offers||[]).map(value=>({kind:"Ressource",value}))
 ].filter(entry=>words.every(word=>normalizeSearch(entry.value).includes(word)))
  .map(entry=>entry.kind+" : "+entry.value);
}
export function filterInitiatives(items,{commune="",category="",objet=""}={}){
 const area=normalizeSearch(commune),cat=normalizeSearch(category);
 return items.filter(item=>(!area||item.territories.some(x=>normalizeSearch(x).includes(area)))&&(!cat||normalizeSearch(item.category)===cat)&&(!normalizeSearch(objet)||explainResourceMatch(item,objet).length>0));
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
