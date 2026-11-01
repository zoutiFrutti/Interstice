import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
const v3=read("coordination/transmissions/2026-11-01_ANARCHITECTE_CYCLE9_SCHEMA_DOCUMENTAIRE_V03.json");
const map=read("coordination/transmissions/2026-11-01_ANARCHITECTE_CYCLE8_TABLE_CORRESPONDANCE_V02.json");
const reg=read("coordination/ateliers/registre_editorial_pre_sortie_2026-10-31.json");
test("v0.3 preserves original corpus and all identifiers",()=>{
 assert.equal(v3.baseline.registry_blob_sha,map.reference_blob);
 assert.equal(v3.identity.no_renumber,true);
 assert.equal(v3.identity.original_source_folder_preserved,true);
 const expected=[...reg.drive_fiches.map(x=>"drive:"+x.id),...reg.mediatheque_fn.map(x=>"fn:"+x.id),...reg.wiki_pages.map(x=>"wiki:"+x.path)].sort();
 assert.equal(expected.length,139);
 assert.deepEqual(map.entries.map(x=>x.corpus+":"+x.key).sort(),expected);
 assert.equal(new Set(expected).size,139);
});
test("type prefixes and source folders are not conflated",()=>{
 const counts={};
 for(const d of reg.drive_fiches)counts[d.id.split("-")[0]]=(counts[d.id.split("-")[0]]||0)+1;
 assert.deepEqual(counts,{ARCH:8,ASSO:8,BIO:22,COL:2,EXP:4});
 for(const d of reg.drive_fiches)assert.equal(map.entries.find(x=>x.key===d.id).source_folder,d.source_folder);
});
test("duplicate candidates are bidirectional, without deletion",()=>{
 for(const [a,b] of v3.identity.aliases.duplicate_candidates){
  assert.equal(map.entries.find(x=>x.key===a)?.duplicate_ref,b);
  assert.equal(map.entries.find(x=>x.key===b)?.duplicate_ref,a);
 }
 assert.equal(v3.identity.aliases.never_delete_source_id,true);
 assert.equal(v3.identity.aliases.require_editorial_deduplication,true);
});
test("credits, provenance, contradictions and permissions mandatory",()=>{
 for(const f of ["credits","provenance","source_citations","contradictions","rights_status","publication_permission"])assert.ok(v3.required_metadata.includes(f));
 assert.equal(v3.access.default_public_export,"DENY");
 assert.equal(v3.migration.execute,false);
 assert.deepEqual(v3.migration.ddl,[]);
 assert.deepEqual(v3.migration.backend_operations,[]);
 for(const d of reg.drive_fiches.filter(x=>x.editorial_visa?.decision==="ACCORD_EDITO_ZOUT"))
   assert.equal(d.editorial_visa.publication_authorized,false,d.id);
});
