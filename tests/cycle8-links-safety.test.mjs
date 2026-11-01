import test from "node:test";
import assert from "node:assert/strict";
import {existsSync,readFileSync} from "node:fs";
import path from "node:path";
const get=p=>readFileSync(p,"utf8");
const sources=["wiki.html","bibliotheque.html"];
test("Cycle8 liens locaux des entrées Wiki/Bibliothèque résolus et sans fuite de brouillons",()=>{
  for(const source of sources){
    const html=get(source);
    const hrefs=[...html.matchAll(/\bhref="([^"]+)"/g)].map(x=>x[1]);
    for(const href of hrefs){
      if(/^(?:https?:|mailto:|tel:|data:|#)/i.test(href))continue;
      const [target,anchor]=href.split("#");
      const cleaned=decodeURIComponent(target.split("?")[0]);
      assert.ok(!cleaned.startsWith("/")&&!cleaned.includes(".."),source+" référence non relative: "+href);
      if(cleaned)assert.ok(existsSync(path.join(path.dirname(source),cleaned)),source+" → fichier absent: "+href);
      if(anchor&&cleaned&&cleaned.endsWith(".html")){
        const dest=get(path.join(path.dirname(source),cleaned));
        assert.ok(dest.includes('id="'+anchor+'"')||dest.includes("id='"+anchor+"'"),source+" → ancre absente: "+href);
      }
    }
    assert.doesNotMatch(html,/href="[^"]*(?:maquette-ecl-cycle4-interne|coordination\/candidats\/|edition-premiere\/archives-en-attente)/i);
  }
});
test("Cycle8 exercices candidat sans collecte ni service tiers dans leur sous-arbre",()=>{
 const wiki=get("wiki.html");
 const block=wiki.split('id="parcours-critiques"')[1]?.split("</section>")[0]??"";
 assert.ok(block.length>100);
 assert.doesNotMatch(block,/<form\b|localStorage|sessionStorage|fetch\s*\(|XMLHttpRequest/i);
 assert.match(wiki,/PROTOTYPE CANDIDAT/);
});
