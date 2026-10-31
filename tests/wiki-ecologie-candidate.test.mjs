import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
import {dirname,join,resolve} from "node:path";
import {fileURLToPath} from "node:url";
const root=resolve(dirname(fileURLToPath(import.meta.url)),"..");
const read=p=>readFileSync(join(root,p),"utf8");
const html=read("wiki-ecologie.html");
test("eco: trois axes sans publication éditoriale",()=>{
 assert.equal((html.match(/class="eco-axis"/g)||[]).length,3);
 for(const a of ["eco-a","eco-b","eco-c"])assert.ok(html.includes('id="'+a+'" data-status="sources_a_verifier"'));
 for(const a of ["noindex,nofollow","NON PUBLIÉE","Dernière vérification indépendante","Niveau de lecture","Licence et images","Contradictions et limites"])assert.ok(html.includes(a),a);
});
test("eco: aucun lien entrant dans le Wiki ou la Médiathèque",()=>{
 assert.doesNotMatch(read("wiki.html"),/href=["']wiki-ecologie\.html/);
 assert.doesNotMatch(read("bibliotheque.html"),/href=["']wiki-ecologie\.html/);
});
test("eco: liens internes et ancres résolus",()=>{
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(ids).size,ids.length);
 let total=0;
 for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
  if(/^(https?:|data:)/.test(href))continue;
  const [path,hash]=href.split("#");
  if(path===""&&!hash)continue;
  const target=resolve(root,path||"wiki-ecologie.html");
  assert.ok(target.startsWith(root+"/"),"Lien hors dépôt");
  assert.ok(existsSync(target),"Manquant "+href);
  if(hash)assert.ok(read(path||"wiki-ecologie.html").includes('id="'+hash+'"'),"Ancre manquante "+href);
  total++;
 }
 assert.ok(total>13);
});
test("eco: sans image, script, collecte, graphiques ou chiffres de résultats",()=>{
 for(const forbidden of [/<script\b/i,/<form\b/i,/<img\b/i,/<canvas\b/i,/<iframe\b/i,/\bfetch\s*\(/i,/supabase/i,/\d+(?:[,.]\d+)?\s*%/])
  assert.doesNotMatch(html,forbidden);
 assert.match(html,/@media print/);assert.match(html,/prefers-reduced-motion/);
 assert.match(html,/href="#contenu-eco"/);
});
