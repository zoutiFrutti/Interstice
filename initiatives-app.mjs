import {DEMO_INITIATIVES} from "./initiatives-data.mjs";
import {createDemoRepository} from "./initiatives-core.mjs";
const repo=createDemoRepository(DEMO_INITIATIVES),$=id=>document.getElementById(id);
const form=$("filters"),commune=$("commune"),category=$("category"),list=$("results"),count=$("count"),empty=$("no-results"),explorer=$("explorer"),detail=$("detail"),content=$("detail-content");
let sequence=0;
function node(tag,content,cls=""){const el=document.createElement(tag);el.textContent=content;if(cls)el.className=cls;return el;}
function urlFor(id){const url=new URL(location.href);url.searchParams.set("initiative",id);return url.pathname+url.search+url.hash;}
function makeCard(item){
 const card=node("article","","initiative-card");
 card.append(node("p","EXEMPLE FICTIF · "+item.stage,"demo-tag"),node("span",item.category,"category-chip"),node("h3",item.title),node("p",item.summary),node("p","Commune(s) : "+item.territories.join(" · ")));
 const a=node("a","Consulter la fiche →");a.href=urlFor(item.id);a.dataset.id=item.id;a.setAttribute("aria-label","Consulter la fiche fictive : "+item.title);card.append(a);return card;
}
async function drawList(){
 const ticket=++sequence,rows=await repo.list({commune:commune.value,category:category.value});
 if(ticket!==sequence)return;
 list.replaceChildren(...rows.map(makeCard));count.textContent=rows.length+" initiative"+(rows.length>1?"s":"")+" fictive"+(rows.length>1?"s":"")+" trouvée"+(rows.length>1?"s":"");empty.hidden=rows.length>0;
}
function addList(title,entries){const section=node("section","","detail-section");section.append(node("h3",title));const ul=document.createElement("ul");for(const entry of entries)ul.append(node("li",entry));section.append(ul);content.append(section);}
function showList(focus=false){detail.hidden=true;explorer.hidden=false;drawList();if(focus){const h=$("explorer-title");h.tabIndex=-1;h.focus();}}
async function showDetail(id,focus=false){
 const item=await repo.getById(id);if(!item){showList(focus);return;}
 content.replaceChildren();content.append(node("p","EXEMPLE FICTIF · NON RÉFÉRENCÉ","tag"));
 const heading=node("h2",item.title);heading.id="detail-title";heading.tabIndex=-1;content.append(heading,node("span",item.category,"category-chip"),node("p","Zone approximative : "+item.territories.join(", ")),node("p",item.description,"description"));
 addList("Besoins imaginés",item.needs);addList("Ressources imaginées",item.offers);
 const participation=node("section","","detail-section");participation.append(node("h3","Comment participer ?"),node("p",item.join),node("p","Aucun contact réel ni adresse n'est communiqué."));
 const a=node("a","Découvrir comment contribuer à Interstice");a.href="participer.html";participation.append(a);content.append(participation);
 const source=node("aside","","provenance");source.append(node("strong","Source : simulation"),node("p",item.source.label),node("p","Aucun label de conformité, aucune pratique réelle vérifiée."));content.append(source);
 explorer.hidden=true;detail.hidden=false;if(focus)heading.focus();
}
function navigate(){const id=new URLSearchParams(location.search).get("initiative");if(id)showDetail(id,true);else showList(true);}
function reset(){commune.value="";category.value="";drawList();commune.focus();}
form.addEventListener("submit",event=>event.preventDefault());
commune.addEventListener("input",drawList);category.addEventListener("change",drawList);
$("clear").addEventListener("click",reset);$("clear-empty").addEventListener("click",reset);
$("back").addEventListener("click",()=>{const url=new URL(location.href);url.searchParams.delete("initiative");history.pushState(null,"",url.pathname+url.search+url.hash);showList(true);});
list.addEventListener("click",event=>{const a=event.target instanceof Element?event.target.closest("a[data-id]"):null;if(!a||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();history.pushState(null,"",a.href);showDetail(a.dataset.id,true);});
addEventListener("popstate",navigate);
const initial=new URLSearchParams(location.search).get("initiative");if(initial)showDetail(initial);else showList();
