import {COMMUNE_ANCHORS} from "./cartes-data.mjs";
import {communeGroups,projectCommune} from "./cartes-core.mjs";
const ns="http://www.w3.org/2000/svg";
export function createMunicipalityMap({svg,onCommune,emptyNote}){
 if(!svg)throw new Error("SVG manquant");
 const make=(tag,attrs={},str="")=>{
  const el=document.createElementNS(ns,tag);
  for(const [k,v] of Object.entries(attrs))el.setAttribute(k,String(v));
  if(str)el.textContent=str;
  return el;
 };
 const background=make("g",{"aria-hidden":"true"});
 for(let i=0;i<7;i++)background.append(make("line",{x1:60+i*100,x2:60+i*100,y1:40,y2:365,class:"map-gridline"}));
 for(let i=0;i<5;i++)background.append(make("line",{x1:55,x2:710,y1:60+i*70,y2:60+i*70,class:"map-gridline"}));
 background.append(make("text",{x:55,y:27,class:"map-region-label"},"Tarn · repères communaux"));
 background.append(make("text",{x:55,y:402,class:"map-axis-label"},"Ouest"));
 background.append(make("text",{x:660,y:402,class:"map-axis-label"},"Est"));
 const markers=make("g",{"aria-label":"Repères de communes fictives"});
 svg.replaceChildren(background,markers);
 let zoom=1;
 function zoomBy(delta){
  zoom=Math.max(1,Math.min(2.4,Math.round((zoom+delta)*10)/10));
  const w=760/zoom,h=420/zoom;
  svg.setAttribute("viewBox",`${(760-w)/2} ${(420-h)/2} ${w} ${h}`);
  return zoom;
 }
 function render(entries,selectedCommune=""){
  const groups=communeGroups(entries,COMMUNE_ANCHORS);
  markers.replaceChildren();
  if(emptyNote)emptyNote.textContent=groups.length?
   groups.length+" commune(s) représentée(s). Repères approximatifs, aucune adresse.":
   "Aucun repère pour ces filtres. Consulte la liste ou efface les filtres.";
  for(const {anchor,items} of groups){
   const p=projectCommune(anchor);
   const marker=make("g",{role:"button",tabindex:"0",focusable:"true",
    "data-commune":anchor.id,"aria-label":anchor.id+" : "+items.length+" fiche(s) fictive(s). Filtrer la liste.",
    class:"map-marker"+(anchor.id===selectedCommune?" is-selected":""),
    transform:`translate(${p.x},${p.y})`});
   marker.append(make("circle",{r:25,class:"map-marker-halo"}));
   marker.append(make("circle",{r:17,class:"map-marker-circle"}));
   marker.append(make("text",{"text-anchor":"middle",dy:6,class:"map-marker-count"},String(items.length)));
   marker.append(make("text",{"text-anchor":"middle",dy:45,class:"map-marker-label"},anchor.id));
   const activate=()=>onCommune(anchor.id);
   marker.addEventListener("click",activate);
   marker.addEventListener("keydown",ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();activate();}});
   markers.append(marker);
  }
  return groups;
 }
 return {render,zoomBy,resetZoom:()=>{zoom=1;svg.setAttribute("viewBox","0 0 760 420");}};
}
