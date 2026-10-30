import {DEMO_INITIATIVES} from "./initiatives-data.mjs";
import {createDemoRepository,explainSearchMatch,buildPublicDemoExport} from "./initiatives-core.mjs";
import {findCompatibleExamples} from "./initiatives-simulation.mjs";
import {DEMO_MAP_ENTRIES,COMMUNE_ANCHORS} from "./cartes-data.mjs";
import {filterMapEntries,exportFictionalMapEntries,withoutPublicMapLocation,communeGroups} from "./cartes-core.mjs";
// Carte chargée séparément : la liste doit fonctionner même si ce module échoue.
const repo=createDemoRepository(DEMO_INITIATIVES),$=id=>document.getElementById(id);
const form=$("filters"),commune=$("commune"),category=$("category"),objet=$("objet"),scope=$("scope"),order=$("order"),list=$("results"),count=$("count"),empty=$("no-results"),explorer=$("explorer"),detail=$("detail"),content=$("detail-content");
let reading="communs";
let activeDisplay="list";
let cartography=null;
let visibleEntries=[];
let sequence=0;
let returnOrigin=null; // lien activé avant la fiche : restauration du focus clavier.
function node(tag,content,cls=""){const el=document.createElement(tag);el.textContent=content;if(cls)el.className=cls;return el;}
function urlFor(id){const url=new URL(location.href);url.searchParams.set("initiative",id);return url.pathname+url.search+url.hash;}
function makeCard(item){
 const card=node("article","","initiative-card");
 card.append(node("p","EXEMPLE FICTIF · "+item.stage,"demo-tag"),
   node("p",item.kind==="initiative"?"Initiative":item.kind==="ressource"?"Ressource":item.kind==="besoin"?"Besoin":"Projet","entry-kind"),
   node("span",item.category,"category-chip"),node("h3",item.title),node("p",item.summary),node("p",Array.isArray(item.territories)&&item.territories.length?"Commune(s) : "+item.territories.join(" · "):"Sans localisation publique"));
 const a=node("a","Consulter la fiche →");a.href=urlFor(item.id);a.dataset.id=item.id;a.setAttribute("aria-label","Consulter la fiche fictive : "+item.title);card.append(a);
 const reasons=explainSearchMatch(item,currentFilters());
 if(reasons.length)card.append(node("p","Pourquoi cette fiche ? "+reasons.join(" · "),"match-reasons"));
 return card;
}
function currentFilters(){return {commune:commune.value,category:category.value,objet:objet.value,scope:scope.value,order:order.value};}
async function drawList(){
 const ticket=++sequence,rows=filterMapEntries(DEMO_MAP_ENTRIES,{...currentFilters(),reading});
 if(ticket!==sequence)return;
 visibleEntries=rows;
 list.replaceChildren(...rows.map(makeCard));
 const noLocation=withoutPublicMapLocation(rows,COMMUNE_ANCHORS);
 $("map-unlocated").hidden=noLocation.length===0;
 $("map-unlocated-results").replaceChildren(...noLocation.map(makeCard));
 const communeButtons=communeGroups(rows,COMMUNE_ANCHORS).map(group=>{
  const btn=node("button",group.anchor.id+" · "+group.items.length+" fiche(s)");
  btn.type="button";btn.className="button-muted";
  btn.dataset.commune=group.anchor.id;
  btn.setAttribute("aria-label","Afficher les fiches fictives de "+group.anchor.id);
  btn.addEventListener("click",()=>chooseCommune(group.anchor.id));
  return btn;
 });
 $("map-commune-buttons").replaceChildren(...communeButtons);
 count.textContent=rows.length+" fiche"+(rows.length>1?"s":"")+" fictive"+(rows.length>1?"s":"")+" trouvée"+(rows.length>1?"s":"");
 empty.hidden=rows.length>0;$("export-demo").disabled=rows.length===0;
 $("entry-list-title").textContent=reading==="communs"?"Fiches fictives des communs":"Fiches fictives des possibles";
 cartography?.render(rows,commune.value);
}
function addList(title,entries){const section=node("section","","detail-section");section.append(node("h3",title));const ul=document.createElement("ul");for(const entry of entries)ul.append(node("li",entry));section.append(ul);content.append(section);}
async function showList(focus=false){
 detail.hidden=true;explorer.hidden=false;
 await drawList();
 if(focus){
   const target=returnOrigin&&[...document.querySelectorAll("#results a[data-id],#simulation-results a[data-id]")]
     .find(a=>a.dataset.id===returnOrigin.id&&a.closest("#"+returnOrigin.container));
   const destination=target||$("explorer-title");
   destination.tabIndex=destination===target?0:-1;
   destination.focus();
 }
}
async function showDetail(id,focus=false){
 const item=DEMO_MAP_ENTRIES.find(entry=>entry.id===id)||null;
 if(item?.reading!==reading&&item?.reading)setReading(item.reading);
 if(!item){
  const url=new URL(location.href);url.searchParams.delete("initiative");
  returnOrigin=null;
  history.replaceState(null,"",url.pathname+url.search+url.hash);
  $("invalid-route").hidden=false;
  await showList();$("invalid-route").focus();return;
 }
 $("invalid-route").hidden=true;
 content.replaceChildren();content.append(node("p","EXEMPLE FICTIF · NON RÉFÉRENCÉ","tag"));
 content.append(node("p",item.kind==="initiative"?"Initiative":item.kind==="ressource"?"Ressource":item.kind==="besoin"?"Besoin":"Projet","entry-kind"));
 content.append(node("p",item.statusDetail||"Statut de simulation uniquement","map-state"));
 const heading=node("h2",item.title);heading.id="detail-title";heading.tabIndex=-1;content.append(heading,node("span",item.category,"category-chip"),node("p",Array.isArray(item.territories)&&item.territories.length?"Communes approximatives : "+item.territories.join(", "):"Aucune localisation publique"),node("p",item.description,"description"));
 addList("Besoins imaginés",item.needs);addList("Ressources imaginées",item.offers);
 const participation=node("section","","detail-section");participation.append(node("h3","Comment participer ?"),node("p",item.join),node("p","Aucun contact réel ni adresse n'est communiqué."));
 const a=node("a","Découvrir comment contribuer à Interstice");a.href="participer.html";participation.append(a);content.append(participation);
 const source=node("aside","","provenance");source.append(node("strong","Source : simulation"),node("p",item.source.label),node("p","Aucun label de conformité, aucune pratique réelle vérifiée."));content.append(source);
 explorer.hidden=true;detail.hidden=false;if(focus)heading.focus();
}
function navigate(){const id=new URLSearchParams(location.search).get("initiative");if(id)showDetail(id,true);else showList(true);}
function reset(){commune.value="";category.value="";objet.value="";scope.value="tous";order.value="source";$("invalid-route").hidden=true;$("export-status").textContent="";drawList();commune.focus();}
form.addEventListener("submit",event=>event.preventDefault());
commune.addEventListener("input",drawList);objet.addEventListener("input",drawList);category.addEventListener("change",drawList);scope.addEventListener("change",drawList);order.addEventListener("change",drawList);
$("clear").addEventListener("click",reset);$("clear-empty").addEventListener("click",reset);
$("print-fiche").addEventListener("click",()=>window.print());
$("back").addEventListener("click",()=>{const url=new URL(location.href);url.searchParams.delete("initiative");history.pushState(null,"",url.pathname+url.search+url.hash);showList(true);});
for(const clickableList of [list,$("simulation-results"),$("map-unlocated-results")])clickableList.addEventListener("click",event=>{const a=event.target instanceof Element?event.target.closest("a[data-id]"):null;if(!a||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();
returnOrigin={id:a.dataset.id,container:clickableList.id};
history.pushState(null,"",a.href);showDetail(a.dataset.id,true);});
addEventListener("popstate",navigate);
// La simulation ne lit que des choix prédéfinis, jamais de données d'une personne.
const simulationForm=$("simulation-form"),simulationMessage=$("simulation-message"),simulationResults=$("simulation-results");
const simulationKind=$("simulation-kind"),simulationObject=$("simulation-object"),simulationTerritory=$("simulation-territory");
function resetSimulation({focus=false}={}){
 simulationKind.value="besoin";simulationObject.value="perceuse";simulationTerritory.value="";
 simulationMessage.textContent="";simulationResults.replaceChildren();
 if(focus)simulationKind.focus();
}
for(const control of [simulationKind,simulationObject,simulationTerritory]){
 control.addEventListener("change",()=>{simulationMessage.textContent="Choix modifié. Relance la comparaison pour actualiser les exemples.";simulationResults.replaceChildren();});
}
simulationForm.addEventListener("submit",event=>{
 event.preventDefault();
 const matches=findCompatibleExamples(DEMO_INITIATIVES,{kind:simulationKind.value,object:simulationObject.value,territory:simulationTerritory.value});
 simulationResults.replaceChildren(...matches.map(({item,reason})=>{
  const card=node("article","","initiative-card");
  card.append(node("p","CORRESPONDANCE FICTIVE · AUCUN CONTACT","demo-tag"),node("h3",item.title),
    node("p",reason,"match-reasons"),node("p","Territoires : "+item.territories.join(", ")));
  const anchor=node("a","Lire cette fiche fictive →");anchor.href=urlFor(item.id);anchor.dataset.id=item.id;card.append(anchor);
  return card;
 }));
 simulationMessage.textContent=matches.length?matches.length+" correspondance(s) fictive(s) expliquée(s), sans classement ni envoi.":"Aucun exemple correspondant. Cela ne prouve pas qu'il n'existe pas d'entraide réelle.";
});
$("simulation-reset").addEventListener("click",()=>resetSimulation({focus:true}));
$("export-demo").addEventListener("click",async()=>{
 const visible=filterMapEntries(DEMO_MAP_ENTRIES,{...currentFilters(),reading});
 if(!visible.length)return;
 const exported=exportFictionalMapEntries(visible);
 const file=new Blob([JSON.stringify(exported,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(file);
 const anchor=document.createElement("a");anchor.href=url;anchor.download="interstice-exemples-fictifs.json";
 document.body.append(anchor);anchor.click();anchor.remove();URL.revokeObjectURL(url);
 $("export-status").textContent=visible.length+" exemple(s) fictif(s) exporté(s), aucun contact ni adresse.";
});
function chooseCommune(name){
 commune.value=name;
 drawList();
 setDisplay("list");
 count.focus();
}
// Carte SVG embarquée et liste complète utilisent le même tableau et les mêmes filtres.
function setReading(next){
 if(!["communs","possibles"].includes(next))return;
 reading=next;
 for(const key of ["communs","possibles"]){
  const button=$("reading-"+key),active=key===reading;
  button.setAttribute("aria-pressed",String(active));button.classList.toggle("button-muted",!active);
 }
 $("reading-description").textContent=reading==="communs"?
  "Initiatives et ressources documentées uniquement dans des scénarios fictifs.":
  "Besoins, offres et projets imaginés, sans engagement réel.";
 $("export-status").textContent="";drawList();
}
function setDisplay(next){
 if(!["list","map"].includes(next))return;
 activeDisplay=next;
 $("list-panel").hidden=next!=="list";
 $("map-panel").hidden=next!=="map";
 for(const key of ["list","map"]){
  const button=$("display-"+key),active=key===next;
  button.setAttribute("aria-pressed",String(active));button.classList.toggle("button-muted",!active);
 }
 cartography?.render(visibleEntries,commune.value);
}
$("display-map").disabled=true;
import("./cartes-map.mjs").then(({createMunicipalityMap})=>{
 cartography=createMunicipalityMap({
  svg:$("municipality-map"),emptyNote:$("map-caption"),
  onCommune:chooseCommune
 });
 $("display-map").disabled=false;
 cartography.render(visibleEntries,commune.value);
}).catch(()=>{
 $("display-map").disabled=true;
 $("map-fallback").hidden=false;
 $("map-fallback").textContent="Carte indisponible : la liste contient toutes les fiches fictives et reste consultable.";
 setDisplay("list");
});
count.tabIndex=-1;
$("reading-communs").addEventListener("click",()=>setReading("communs"));
$("reading-possibles").addEventListener("click",()=>setReading("possibles"));
$("display-list").addEventListener("click",()=>setDisplay("list"));
$("display-map").addEventListener("click",()=>setDisplay("map"));
$("map-zoom-in").addEventListener("click",()=>cartography.zoomBy(.3));
$("map-zoom-out").addEventListener("click",()=>cartography.zoomBy(-.3));
$("map-zoom-reset").addEventListener("click",()=>cartography.resetZoom());
$("map-clear-commune").addEventListener("click",()=>{commune.value="";drawList();});
const initial=new URLSearchParams(location.search).get("initiative");if(initial)showDetail(initial);else showList();
