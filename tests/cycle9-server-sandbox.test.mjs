import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import vm from "node:vm";
const read=p=>readFileSync(p,"utf8");
for(const name of ["submit-proposal","submit-resource"]){
 test("C9 sandbox mock: "+name+" refuse POST sans accès serveur",async()=>{
  const code=read("edition-premiere/security-p0/"+name+"-disabled.ts");
  let handler;const sandbox={Deno:{serve(fn){handler=fn;}},Response};
  vm.runInNewContext(code,sandbox,{timeout:1000,filename:name});
  assert.equal(typeof handler,"function");
  let reads=0;
  const response=await handler({method:"POST",json(){reads++;throw Error("body read");},text(){reads++;throw Error("body read");}});
  assert.equal(response.status,503);
  assert.equal(reads,0);
  assert.match(await response.text(),/suspendues/);
  const get=await handler({method:"GET"});assert.equal(get.status,405);
  const options=await handler({method:"OPTIONS"});assert.equal(options.status,204);
 });
}
test("C9 RPC candidate: révocation exacte et retour arrière distinct",()=>{
 const sql=read("edition-premiere/security-p0/suspend-submit-wiki-article.sql");
 assert.match(sql,/REVOKE EXECUTE ON FUNCTION public\.submit_wiki_article\(text,text,text,text,text,boolean,boolean\)/);
 assert.match(sql,/GRANT EXECUTE ON FUNCTION public\.submit_wiki_article/);
 assert.doesNotMatch(sql,/\b(?:DROP|TRUNCATE|DELETE FROM)\b/i);
});
test("C9 editorial: aucun visa créé, aucun nouveau brouillon public",()=>{
 const decisions=JSON.parse(read("edition-premiere/decisions.json"));
 assert.deepEqual(decisions.authorizations,[]);
 for(const page of ["wiki.html","bibliotheque.html"]){
   const html=read(page);
   assert.doesNotMatch(html,/href="[^"]*(?:maquette-ecl-cycle4-interne|coordination\/candidats)/);
 }
});
