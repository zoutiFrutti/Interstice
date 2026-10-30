// Contrat de lecture portable : un futur adaptateur HTTP peut remplacer les fixtures.
export function normalizeSearch(input=""){return String(input).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("fr").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ");}
export function filterInitiatives(items,{commune="",category=""}={}){
 const area=normalizeSearch(commune),cat=normalizeSearch(category);
 return items.filter(item=>(!area||item.territories.some(x=>normalizeSearch(x).includes(area)))&&(!cat||normalizeSearch(item.category)===cat));
}
export function getInitiativeById(items,id){return items.find(x=>x.id===id)||null;}
export function createDemoRepository(items){
 const data=Object.freeze(items.map(i=>Object.freeze({...i,territories:Object.freeze([...i.territories]),needs:Object.freeze([...i.needs]),offers:Object.freeze([...i.offers])})));
 return Object.freeze({mode:"demo",async list(filters={}){return filterInitiatives(data,filters);},async getById(id){return getInitiativeById(data,id);}});
}
