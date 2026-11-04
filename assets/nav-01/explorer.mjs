import {DOORS, PARCOURS, BUNDLE, DOCUMENTS, PUBLIC_RESOURCES} from './graph-data.mjs';
import {readFragment} from './navigation-state.mjs';
import {fitCamera, constrain, viewBox, project, worldPoint, zoomAt, panBy, validCamera} from './camera.mjs';

const $ = selector => document.querySelector(selector);
const stage = $('#space');
const world = $('#world');
const entry = $('#entree');
const app = $('#exploration');
const panel = $('#panel');
const panelBody = $('#panel-body');
const panelTitle = $('#panel-title');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const storageKey = 'interstice.nav01.view.v1';
const nodes = [...document.querySelectorAll('.node')];
const points = new Map([...DOORS.map(door => [door.id, door]), ['manifeste', {x:500,y:900}]]);
let camera = fitCamera(stage.clientWidth || 1280, stage.clientHeight || 700);
let activeRoute = '#entree';
let originDoor = null;
let animation = null;
let returnView = null;
let panelVersion = 0;
let panEnabled = true;
let lastFocusedNode = null;
let lastView = null;
try { lastView = JSON.parse(sessionStorage.getItem(storageKey)); } catch { /* storage optional */ }
const validSnapshot = value => value?.version === 1 && validCamera(value.camera) && typeof value.route === 'string' && value.route.startsWith('#');
if (!validSnapshot(lastView)) lastView = null;

const element = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
};
function link(text, href, className = '') {
  const node = element('a', text, className); node.href = href; return node;
}
function snapshot() { return {version:1, route:activeRoute, camera:{...camera}, originDoor}; }
function stopAnimation() { if (animation !== null) cancelAnimationFrame(animation); animation = null; }
function rect() { return stage.getBoundingClientRect(); }
function announce(text) { $('#live-status').textContent = text; }
function persist() {
  if (activeRoute === '#entree') return;
  const value = snapshot();
  try { sessionStorage.setItem(storageKey, JSON.stringify(value)); } catch { /* no account or storage prerequisite */ }
  lastView = value;
  history.replaceState({...history.state, nav01:value}, '');
}
function paint() {
  camera = constrain(camera);
  const box = rect();
  if (!box.width || !box.height) return;
  const v = viewBox(camera, box.width, box.height);
  world.setAttribute('viewBox', [v.x,v.y,v.width,v.height].map(x => x.toFixed(4)).join(' '));
  for (const node of nodes) {
    const id = node.dataset.door || node.dataset.point;
    const point = points.get(id);
    const p = project(camera, box.width, box.height, point);
    node.style.left = p.x + 'px'; node.style.top = p.y + 'px';
    node.hidden = (p.x < 28 || p.x > box.width - 28 || p.y < 65 || p.y > box.height - 70) && document.activeElement !== node;
  }
  $('#zoom-value').value = Math.round(fitCamera(box.width,box.height).span / camera.span * 100) + ' %';
}
function moveTo(next, animate = true) {
  stopAnimation();
  next = constrain(next);
  if (!animate || reduced.matches) { camera = next; paint(); persist(); return; }
  const from = {...camera}; const start = performance.now();
  const tick = now => {
    const t = Math.min(1,(now-start)/580); const ease = 1-Math.pow(1-t,3);
    camera = {cx:from.cx+(next.cx-from.cx)*ease,cy:from.cy+(next.cy-from.cy)*ease,span:from.span+(next.span-from.span)*ease};
    paint();
    if (t < 1) animation = requestAnimationFrame(tick); else { animation = null; persist(); }
  };
  animation = requestAnimationFrame(tick);
}
function focusPoint(id, animate = true) {
  const point = points.get(id); if (!point) return;
  const r = rect();
  const span = Math.max(620,Math.min(camera.span,fitCamera(r.width,r.height).span*.65));
  // Keep a selected door clear of the desktop reading panel.
  const offset = r.width > 768 && r.height > 420 ? span * .15 : 0;
  moveTo({cx:point.x+offset,cy:point.y,span},animate);
}
function fullView(animate = true) {
  returnView = snapshot();
  const r = rect(); moveTo(fitCamera(r.width,r.height),animate);
  announce('Vue entière. Les quatre portes sont accessibles.');
}
function routeState(route) {
  if (route === '#entree' || !route) return {kind:'entry'};
  const doc = /^#document\/(manifeste|archive)$/.exec(route);
  if (doc) return {kind:'document', id:doc[1]};
  return readFragment(route,BUNDLE);
}
function showPanel(title, crumb, wide = false) {
  panel.hidden = false; panel.classList.toggle('wide',wide);
  panelTitle.textContent = title; $('#panel-crumb').textContent = crumb;
  panelBody.replaceChildren(); $('#open-paths').setAttribute('aria-expanded',String(activeRoute==='#traversees'||activeRoute==='#parcours'));
}
function panelFocus() {
  panelTitle.focus({preventScroll:true});
  if (matchMedia('(max-width: 768px), (max-height: 420px)').matches) panel.scrollIntoView({block:'start',behavior:reduced.matches?'instant':'smooth'});
}
function pathList(ids = PARCOURS.map(path => path.id)) {
  const list = element('div',undefined,'panel-links');
  for (const path of PARCOURS.filter(path => ids.includes(path.id))) {
    const a = link('','#parcours/'+path.id);
    a.append(element('span',path.id.slice(4),'path-number'),element('span',path.title)); list.append(a);
  }
  return list;
}
function returnActions(path = null) {
  const actions = element('div',undefined,'panel-actions');
  if (path) actions.append(link('Revenir au parcours','#parcours/'+path.id));
  if (originDoor) actions.append(link('Retour à '+DOORS.find(door=>door.id===originDoor).short,'#porte/'+originDoor));
  actions.append(link('Vue complète','#exploration'));
  actions.append(link('Manifeste V2.5','#document/manifeste'),link('Archive V2.1','#document/archive'));
  return actions;
}
function renderDoor(id) {
  const door = DOORS.find(door=>door.id===id); if (!door) return;
  showPanel(door.title,'Porte '+door.number+' / Interstice');
  panelBody.append(element('p',door.description));
  const spatial = element('p','Vous êtes dans la faille, à la porte « '+door.short+' ». Les traversées ci-dessous relient cette porte aux autres espaces.','spatial-context');
  panelBody.append(spatial);
  panelBody.append(element('h3','Suivre une ramification'));
  panelBody.append(pathList(PARCOURS.filter(path=>path.doors.includes(id)).map(path=>path.id)));
  const source = link('Consulter l’index R6 existant ↗','https://zoutifrutti.github.io/Interstice/'+door.legacy,'external');
  source.target='_blank';source.rel='noopener noreferrer';
  const archive = element('div',undefined,'legacy-access');
  archive.append(element('p','Accès à l’index existant'),source);
  panelBody.append(archive);
  if (id==='entraide') panelBody.append(element('p','Les fiches de droits en manifestation restent indisponibles pendant leur revue juridique et médicale.','notice'));
  panelBody.append(returnActions());
}
function renderPathIndex() {
  showPanel('Les traversées','Sept chemins / Quatre portes');
  panelBody.append(element('p','On peut entrer par une histoire, un territoire, une œuvre. Ces chemins relient les portes sans imposer un ordre unique.'));
  panelBody.append(pathList(),element('p','Parcours candidats en préparation. Les ressources en relecture ne sont pas diffusées dans cet aperçu.','notice'),returnActions());
}
function renderPath(id, stepId = null) {
  const path=PARCOURS.find(path=>path.id===id);if(!path)return;
  const step=stepId ? path.steps.find(step=>step.id===stepId) : null;
  showPanel(step?step.title:path.title,(step?path.title+' / ':'Traversée / ')+path.id);
  panelBody.append(element('span','Chemin candidat','walk-badge'),element('p',path.question));
  const crossing=element('div',undefined,'panel-actions');
  for(const doorId of path.doors){const d=DOORS.find(door=>door.id===doorId);crossing.append(link(d.short,'#porte/'+d.id));}
  panelBody.append(crossing);
  if(path.blocked_practical){
    panelBody.append(element('p','Les fiches pratiques restent fermées. Leur revue juridique et médicale est nécessaire avant toute diffusion.','notice'),returnActions());return;
  }
  if(step){
    panelBody.append(element('p','Cette étape décrit une entrée de lecture. Les ressources éditoriales associées sont encore en relecture et restent fermées.','notice'));
    const actions=element('div',undefined,'panel-actions');
    for(const next of step.next_step_ids){const target=path.steps.find(s=>s.id===next);actions.append(link((step.next_step_ids.length>1?'Bifurquer : ':'Continuer : ')+target.title,'#parcours/'+id+'/'+next));}
    for(const back of step.return_step_ids){const target=path.steps.find(s=>s.id===back);actions.append(link('Revenir : '+target.title,'#parcours/'+id+'/'+back));}
    panelBody.append(actions,returnActions(path));
  }else{
    const list=element('ol',undefined,'step-list');
    for(const step of path.steps){const li=element('li');li.append(link(step.title,'#parcours/'+id+'/'+step.id));list.append(li);}
    panelBody.append(list,element('p','Étapes de navigation proposées. Aucun article, archive, conseil pratique ou notice bloquée n’est ouvert ici.','notice'),returnActions());
  }
}
function safeDocumentTree(source) {
  const allowed=new Set(['H1','H2','H3','H4','P','UL','OL','LI','STRONG','EM','BLOCKQUOTE','SECTION','ARTICLE','BR','SMALL']);
  const fragment=document.createDocumentFragment();
  const append=(from,to)=>{
    for(const child of from.childNodes){
      if(child.nodeType===Node.TEXT_NODE){to.append(document.createTextNode(child.textContent));continue;}
      if(child.nodeType!==Node.ELEMENT_NODE||['SCRIPT','STYLE','FORM','NAV','HEADER','FOOTER','BUTTON'].includes(child.tagName))continue;
      if(allowed.has(child.tagName)){const clean=document.createElement(child.tagName.toLowerCase());append(child,clean);to.append(clean);}
      else if(child.tagName==='A'){
        const text=element('span',child.textContent);to.append(text);
      }else append(child,to);
    }
  };append(source,fragment);return fragment;
}
async function renderDocument(id,version) {
  const spec=DOCUMENTS[id];if(!spec)return;
  showPanel(spec.title,'La Faille noire / Texte fondateur',true);
  panelBody.setAttribute('aria-busy','true');panelBody.append(element('p','Ouverture du texte…'));
  try{
    // Same-origin credentials keep the reader usable behind a private preview gate.
    const response=await fetch(spec.file,{credentials:'same-origin'});
    if(!response.ok)throw new Error('document');
    const parsed=new DOMParser().parseFromString(await response.text(),'text/html');
    if(version!==panelVersion)return;
    const reader=element('div',undefined,'reading');reader.append(safeDocumentTree(parsed.querySelector('main')||parsed.body));
    const direct=link('Ouvrir le document original ↗',spec.file,'external');
    panelBody.replaceChildren(reader,direct,returnActions());
  }catch{
    if(version!==panelVersion)return;
    panelBody.replaceChildren(element('p','Le texte ne peut pas être ouvert dans ce panneau.'),link('Lire le document original',spec.file),returnActions());
  }finally{if(version===panelVersion)panelBody.removeAttribute('aria-busy');}
}
function drawPaths(selected = null) {
  $('#walk-lines').replaceChildren();
  for(const path of PARCOURS){
    if(path.blocked_practical && selected!==path.id)continue;
    const ps=path.doors.map(id=>points.get(id));
    if(ps.length<2)continue;
    let d='M'+ps[0].x+' '+ps[0].y;
    for(let i=1;i<ps.length;i++)d+=' Q'+(500+(i%2?70:-70))+' '+(350+i*130)+' '+ps[i].x+' '+ps[i].y;
    const line=document.createElementNS('http://www.w3.org/2000/svg','path');line.setAttribute('d',d);line.setAttribute('class','walk-line '+(selected===path.id?'active':'dim'));line.dataset.path=path.id;$('#walk-lines').append(line);
  }
}
function renderRoute({focus=true, animate=true, keepCamera=false}={}) {
  panelVersion++; const version=panelVersion;
  const state=routeState(activeRoute);
  const isEntry=state.kind==='entry';entry.hidden=!isEntry;app.hidden=isEntry;
  document.body.dataset.view=isEntry?'entry':'space';
  $('#directory-details').open=false;
  if(isEntry){panel.hidden=true;$('#resume-entry').hidden=!lastView;return;}
  panel.hidden=true;panelBody.removeAttribute('aria-busy');
  for(const node of nodes)node.removeAttribute('aria-current');
  $('#open-paths').setAttribute('aria-expanded','false');drawPaths(state.kind==='parcours'?state.id:null);
  paint();
  if(state.kind==='door'){
    originDoor=state.id;lastFocusedNode=state.id;
    document.querySelector('.node[data-door="'+state.id+'"]').setAttribute('aria-current','true');
    renderDoor(state.id);$('#location-label').textContent=DOORS.find(d=>d.id===state.id).short;
    if(!keepCamera)focusPoint(state.id,animate);
  }else if(state.kind==='parcours_index'){
    renderPathIndex();$('#location-label').textContent='Les traversées';
  }else if(state.kind==='parcours'){
    const explicitStep=/^#parcours\/PAR-\d{3}\//.test(activeRoute);
    renderPath(state.id,explicitStep?state.stepId:null);$('#location-label').textContent=PARCOURS.find(p=>p.id===state.id).title;
    if(!keepCamera){const r=rect();moveTo(fitCamera(r.width,r.height),animate);}
  }else if(state.kind==='document'){
    renderDocument(state.id,version);$('#location-label').textContent='La Faille noire';
  }else{
    $('#location-label').textContent='Dans la faille';announce('Quatre portes, plusieurs chemins.');
    if(!keepCamera){const r=rect();moveTo(fitCamera(r.width,r.height),animate);}
  }
  if(!panel.hidden&&focus)panelFocus();
  else if(focus)stage.focus({preventScroll:true});
}
function go(route,{animate=true,camera:restored=null,replace=false,focus=true}={}) {
  persist();returnView=snapshot();
  const depth=(history.state?.nav01depth||0)+(replace?0:1);
  activeRoute=route;
  if(restored&&validCamera(restored)){stopAnimation();camera={...restored};}
  const value=snapshot();
  history[replace?'replaceState':'pushState']({nav01:value,nav01depth:depth},'',route);
  renderRoute({focus,animate,keepCamera:!!restored});persist();
}
function enter(animated) {
  const entranceImage=$('.threshold-logo');
  const entranceBox=entranceImage.getBoundingClientRect();
  let veil=null;
  if(animated&&!reduced.matches){
    veil=entranceImage.cloneNode(false);veil.alt='';veil.setAttribute('aria-hidden','true');
    Object.assign(veil.style,{position:'fixed',left:entranceBox.left+'px',top:entranceBox.top+'px',width:entranceBox.width+'px',height:entranceBox.height+'px',zIndex:20,pointerEvents:'none'});
    document.body.append(veil);
  }
  go('#exploration',{animate:false});
  window.scrollTo({top:0,behavior:'instant'});
  const r=rect();const fit=fitCamera(r.width,r.height);
  camera={...fit,span:fit.span*1.25};paint();
  moveTo({...fit,span:fit.span*.9},animated);
  if(animated&&!reduced.matches)app.animate([{opacity:.15},{opacity:1}],{duration:420,easing:'ease-out'});
  if(veil){
    const passage=veil.animate([{transform:'scale(1)',opacity:1},{transform:'scale(3.2)',opacity:0}],{duration:680,easing:'cubic-bezier(.2,.6,.3,1)'});
    passage.finished.then(()=>veil.remove(),()=>veil.remove());
  }
  announce('Dans la faille. Déplacez-vous ou choisissez une porte.');
}
function showTextual() {
  if(entry.hidden===false)go('#exploration',{animate:false,focus:false});
  $('#directory-details').open=true;$('#textual').focus({preventScroll:true});$('#textual').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});
}
document.addEventListener('click',event=>{
  const a=event.target.closest('a');if(!a||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
  if(a.dataset.enter){event.preventDefault();enter(a.dataset.enter==='animate');return;}
  if(a.hasAttribute('data-home')){event.preventDefault();go('#entree');entry.scrollIntoView();return;}
  if(a.dataset.document){event.preventDefault();go('#document/'+a.dataset.document);return;}
  const href=a.getAttribute('href');
  if(href==='#textual'){event.preventDefault();showTextual();return;}
  if(href?.startsWith('#')){event.preventDefault();go(href);}
});
$('#close-panel').addEventListener('click',()=>{
  const restore=returnView?.camera||camera;
  go('#exploration',{camera:restore,animate:false,focus:false});
  const target=lastFocusedNode?document.querySelector('.node[data-door="'+lastFocusedNode+'"]'):null;
  if(target&&!target.hidden)target.focus({preventScroll:true});else stage.focus({preventScroll:true});
  window.scrollTo({top:app.offsetTop,behavior:'instant'});
});
$('#open-paths').addEventListener('click',()=>go('#traversees'));
$('#show-textual').addEventListener('click',showTextual);
$('#recenter').addEventListener('click',()=>fullView());
$('#back-view').addEventListener('click',()=>{if(history.state?.nav01depth>0)history.back();else go('#exploration',{replace:true});});
$('#restore-view').addEventListener('click',()=>{const value=returnView||lastView;if(value)go(value.route,{camera:value.camera,animate:false});});
$('#resume-entry').addEventListener('click',()=>{if(lastView)go(lastView.route,{camera:lastView.camera,animate:false});});
for(const [selector,factor] of [['#zoom-in',.76],['#zoom-out',1/.76]])$(selector).addEventListener('click',()=>{
  returnView=snapshot();stopAnimation();const r=rect();moveTo(zoomAt(camera,r,factor,r.left+r.width/2,r.top+r.height/2),false);announce('Zoom '+$('#zoom-value').value);
});
$('#pan-mode').addEventListener('click',()=>{
  panEnabled=!panEnabled;stage.dataset.pan=String(panEnabled);$('#pan-mode').setAttribute('aria-pressed',String(panEnabled));$('#pan-mode').textContent=panEnabled?'Déplacer la carte':'Défiler la page';announce(panEnabled?'Déplacement de la carte activé.':'Défilement de la page activé.');
});
const pointers=new Map();let gesture=null;let dragged=false;
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function startGesture(){
  const ps=[...pointers.values()];
  if(ps.length===1)gesture={kind:'pan',camera:{...camera},x:ps[0].x,y:ps[0].y};
  else if(ps.length>=2){const mid={x:(ps[0].x+ps[1].x)/2,y:(ps[0].y+ps[1].y)/2};gesture={kind:'pinch',camera:{...camera},distance:distance(ps[0],ps[1]),anchor:worldPoint(camera,rect(),mid.x,mid.y)};}
  else gesture=null;
}
stage.addEventListener('pointerdown',event=>{
  if(!panEnabled||event.button!==0||event.target.closest('a,button'))return;
  stopAnimation();returnView=snapshot();pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});stage.setPointerCapture(event.pointerId);dragged=false;startGesture();
});
stage.addEventListener('pointermove',event=>{
  if(!pointers.has(event.pointerId)||!gesture)return;
  pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});const ps=[...pointers.values()];const r=rect();
  if(gesture.kind==='pinch'&&ps.length>=2){
    const d=distance(ps[0],ps[1]);if(d<10||gesture.distance<10)return;
    const span=constrain({...camera,span:gesture.camera.span*gesture.distance/d}).span;
    const mx=(ps[0].x+ps[1].x)/2,my=(ps[0].y+ps[1].y)/2;
    camera=constrain({span,cx:gesture.anchor.x-((mx-r.left)/r.width-.5)*span,cy:gesture.anchor.y-((my-r.top)/r.height-.5)*span*r.height/r.width});dragged=true;
  }else if(gesture.kind==='pan'&&ps.length===1){
    const dx=ps[0].x-gesture.x,dy=ps[0].y-gesture.y;if(Math.hypot(dx,dy)>5)dragged=true;
    camera=panBy(gesture.camera,r,dx,dy);
  }
  stage.classList.toggle('is-dragging',dragged);paint();
});
function release(event){if(!pointers.has(event.pointerId))return;pointers.delete(event.pointerId);startGesture();if(!pointers.size){stage.classList.remove('is-dragging');persist();if(dragged)announce('Position mémorisée pour cette session.');}}
stage.addEventListener('pointerup',release);stage.addEventListener('pointercancel',release);
stage.addEventListener('wheel',event=>{
  if(!panEnabled||event.ctrlKey||event.metaKey)return;event.preventDefault();returnView=snapshot();stopAnimation();camera=zoomAt(camera,rect(),Math.exp(event.deltaY*.0015),event.clientX,event.clientY);paint();persist();
},{passive:false});
stage.addEventListener('keydown',event=>{
  if(event.target!==stage||event.ctrlKey||event.metaKey||event.altKey)return;
  const commands=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home','0'];if(!commands.includes(event.key))return;
  event.preventDefault();returnView=snapshot();stopAnimation();const r=rect();
  if(event.key==='Home'||event.key==='0'){fullView(false);return;}
  if(['+','=','-'].includes(event.key))camera=zoomAt(camera,r,event.key==='-'?1.25:.8,r.left+r.width/2,r.top+r.height/2);
  else {const dx=event.key==='ArrowLeft'?55:event.key==='ArrowRight'?-55:0,dy=event.key==='ArrowUp'?55:event.key==='ArrowDown'?-55:0;camera=panBy(camera,r,dx,dy);}
  paint();persist();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&entry.hidden){if(!panel.hidden)$('#close-panel').click();else fullView(false);}});
for(const node of nodes)node.addEventListener('focus',()=>{
  const point=points.get(node.dataset.door||node.dataset.point),r=rect(),p=project(camera,r.width,r.height,point);
  if(p.x<50||p.x>r.width-50||p.y<80||p.y>r.height-80)focusPoint(node.dataset.door||node.dataset.point,false);
});
addEventListener('popstate',event=>{
  stopAnimation();activeRoute=location.hash||'#entree';
  const saved=event.state?.nav01;if(validSnapshot(saved)){camera={...saved.camera};originDoor=saved.originDoor||null;}
  renderRoute({animate:false,keepCamera:validSnapshot(saved)});persist();
});
addEventListener('pagehide',persist);
new ResizeObserver(()=>{if(!app.hidden)paint();}).observe(stage);
reduced.addEventListener('change',()=>{if(reduced.matches){stopAnimation();paint();}});

// Progressive enhancement happens only after all module imports succeeded.
if(PUBLIC_RESOURCES.length!==0)throw new Error('Le catalogue candidat doit rester fermé');
document.documentElement.classList.add('enhanced');
for(const id of ['map-controls','top-actions','show-textual'])$('#'+id).hidden=false;
activeRoute=location.hash||'#entree';
const restored=history.state?.nav01;
if(validSnapshot(restored)){camera={...restored.camera};originDoor=restored.originDoor||null;}
history.replaceState({nav01:snapshot(),nav01depth:history.state?.nav01depth||0},'');
renderRoute({focus:activeRoute!=='#entree',animate:false,keepCamera:validSnapshot(restored)});
if(location.hash==='#textual')showTextual();
