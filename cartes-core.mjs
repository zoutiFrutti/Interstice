import {normalizeSearch,explainResourceMatch} from "./initiatives-core.mjs";
export const BOUNDS=Object.freeze({minLon:1.63,maxLon:2.24,minLat:43.73,maxLat:44.04});
export function projectCommune(anchor){
 if(!anchor||!Number.isFinite(anchor.lon)||!Number.isFinite(anchor.lat))return null;
 return {x:Math.round(55+(anchor.lon-BOUNDS.minLon)/(BOUNDS.maxLon-BOUNDS.minLon)*650),
         y:Math.round(350-(anchor.lat-BOUNDS.minLat)/(BOUNDS.maxLat-BOUNDS.minLat)*275)};
}
export function filterMapEntries(entries,{reading="communs",commune="",category="",objet="",scope="tous",order="source"}={}){
 if(!["communs","possibles"].includes(reading))return [];
 const area=normalizeSearch(commune),cat=normalizeSearch(category),q=normalizeSearch(objet);
 const found=entries.filter(x=>x.isDemo===true&&x.source?.type==="simulation"&&x.reading===reading&&
  (!area||x.territories.some(t=>normalizeSearch(t).includes(area)))&&
  (!cat||normalizeSearch(x.category)===cat)&&
  (!q||explainResourceMatch(x,objet,scope).length>0));
 return order==="titre"?[...found].sort((a,b)=>a.title.localeCompare(b.title,"fr")):found;
}
export function communeGroups(entries,anchors){
 return anchors.map(anchor=>({anchor,items:entries.filter(x=>x.territories.includes(anchor.id))})).filter(g=>g.items.length);
}
export function exportFictionalMapEntries(entries){
 return {version:"interstice-cartes-demo-v1",fictional:true,
  entries:entries.filter(x=>x.isDemo===true&&x.source?.type==="simulation").map(x=>({
   id:x.id,type:x.kind,reading:x.reading,title:x.title,category:x.category,
   territoryNames:[...x.territories],summary:x.summary,needs:[...x.needs],offers:[...x.offers],
   status:"fictif",provenance:"simulation"
  }))};
}
