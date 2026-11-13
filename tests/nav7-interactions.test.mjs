// Exécute le JavaScript inline réel du prototype NAV7 avec un DOM minimal en mémoire.
// Vérifie les comportements sans dépendance navigateur ni accès au réseau.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {runInNewContext} from 'node:vm';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=readFileSync(resolve(root,'nav7-candidate.html'),'utf8');
const match=source.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(match,'NAV7 inline program not found');

class Element {
  constructor(name='div'){
    this.tagName=name;
    this.children=[];
    this.dataset={};
    this.attributes=new Map();
    this.listeners=new Map();
    this.textContent='';
    this.href='';
    this.src='';
    this.focused=false;
  }
  setAttribute(k,v){this.attributes.set(k,String(v));}
  getAttribute(k){return this.attributes.get(k)||null;}
  addEventListener(kind,fn){
    if(!this.listeners.has(kind))this.listeners.set(kind,[]);
    this.listeners.get(kind).push(fn);
  }
  append(...children){this.children.push(...children);}
  replaceChildren(...children){this.children=[...children];}
  focus(){this.focused=true;}
  click(){for(const handler of this.listeners.get('click')||[])handler();}
}

function fixture(){
  const details=new Element('section');
  const reset=new Element('button');
  const manifest=new Element('button');
  const close=new Element('button');
  const iframe=new Element('iframe'); iframe.dataset.src='manifeste-v2-5.html';
  const dialog=new Element('dialog');
  dialog.open=false;
  dialog.querySelector=q=>q==='iframe'?iframe:null;
  dialog.showModal=()=>{dialog.open=true;};
  dialog.close=()=>{dialog.open=false;};
  const nodes=Array.from({length:6},(_,i)=>{
    const el=new Element('button');
    el.dataset.point=String(i+1);
    el.setAttribute('aria-pressed','false');
    return el;
  });
  const selectors=new Map([
    ['#door-details',details],['#reset',reset],
    ['#manifest-dialog',dialog],['#manifest-open',manifest],
    ['#manifest-close',close]
  ]);
  const document={
    querySelector:q=>selectors.get(q)||null,
    querySelectorAll:q=>{
      assert.equal(q,'.node[data-door]','Seuls les six boutons de porte doivent recevoir ce handler');
      return nodes;
    },
    createElement:tag=>new Element(tag)
  };
  const assigned=[];
  const window={location:{assign:url=>assigned.push(url)}};
  runInNewContext(match[1],{document,window},{timeout:2000});
  return {nodes,manifest,reset,close,dialog,iframe,details,assigned};
}

test('Le clic sur le point 7 ouvre le Manifeste sans exception ni porte fantôme',()=>{
  const f=fixture();
  assert.equal(f.manifest.listeners.get('click')?.length,1);
  assert.doesNotThrow(()=>f.manifest.click());
  assert.equal(f.dialog.open,true);
  assert.equal(f.iframe.src,'manifeste-v2-5.html');
  assert.equal(f.nodes.some(n=>n.getAttribute('aria-pressed')==='true'),false);
  f.close.click();
  assert.equal(f.dialog.open,false);
});

test('Les six portes sont sélectionnables ; les liens tertiaires sont ajoutés',()=>{
  const f=fixture();
  for(let i=0;i<6;i++){
    f.nodes[i].click();
    assert.equal(f.nodes[i].getAttribute('aria-pressed'),'true');
    assert.equal(f.nodes.filter(n=>n.getAttribute('aria-pressed')==='true').length,1);
    assert.ok(f.details.focused);
    const title=f.details.children.find(n=>n.tagName==='h2');
    assert.ok(title?.textContent);
    const section=f.details.children.find(n=>n.className==='submenus');
    if(i===2){
      assert.equal(section,undefined,'La Vigie n’a pas encore de sous-menu public');
    } else {
      assert.ok(section,'La porte '+(i+1)+' doit proposer ses ressources autorisées');
      const list=section.children.find(n=>n.tagName==='ul');
      assert.equal(list.children.length,3);
      for(const item of list.children){
        const a=item.children[0];
        assert.equal(a.tagName,'a');
        assert.match(a.href,/^[a-z0-9-]+\.html(?:#[a-z0-9-]+)?$/);
      }
    }
  }
});

test('Le point central remet la sélection à zéro et affiche les instructions',()=>{
  const f=fixture();
  f.nodes[0].click();
  f.reset.click();
  assert.equal(f.details.children.length,2);
  assert.equal(f.details.children[0].textContent,'Explorer');
  assert.equal(f.nodes.every(n=>n.getAttribute('aria-pressed')==='false'),true);
});
