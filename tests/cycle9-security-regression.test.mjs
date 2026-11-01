import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const get=x=>readFileSync(x,"utf8");
test("P0: handlers candidats refusent sans authentification, secret ni accès données",()=>{
 for(const n of ["submit-proposal","submit-resource"]){
   const code=get("edition-premiere/security-p0/"+n+"-disabled.ts");
   assert.match(code,/status:503/);
   assert.doesNotMatch(code,/\bcreateClient\b|Deno\.env|SERVICE_ROLE|\.insert\(|\.upsert\(|\.update\(|\.delete\(|fetch\s*\(/i);
 }
});
test("P0: révocation RPC précise, pas de purge, rollback distinct",()=>{
 const sql=get("edition-premiere/security-p0/suspend-submit-wiki-article.sql");
 assert.match(sql,/REVOKE EXECUTE ON FUNCTION public\.submit_wiki_article\(text,text,text,text,text,boolean,boolean\)/);
 assert.doesNotMatch(sql,/\b(?:DROP|DELETE FROM|TRUNCATE)\b/i);
 assert.match(sql,/GRANT EXECUTE/);
});
test("P0: rapport distingue audit réel, simulation et tests non effectués",()=>{
 const report=get("edition-premiere/CYCLE9_P0_SUIVI_POST_SUSPENSION.md");
 for(const x of ["submit_wiki_article","review_wiki_article","moderate_resource","moderate_proposal","github-wiki-ingest","non exécutés","rollback Git"])assert.ok(report.toLowerCase().includes(x.toLowerCase()));
});
