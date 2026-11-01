import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
const reg=read("coordination/ateliers/registre_editorial_pre_sortie_2026-10-31.json");
const map=read("coordination/cycle10/anarchitecte/MAPPING_C10_139.json");
const schema=read("coordination/cycle10/anarchitecte/SCHEMA_C10_V04.json");
const index=new Map(map.records.map(x=>[x.corpus+":"+x.canonical_key,x]));
test("complete exact 24/44/71 crosswalk, never invent an identifier",()=>{
  const expected=[
    ...reg.drive_fiches.map(x=>"drive:"+x.id),
    ...reg.mediatheque_fn.map(x=>"fn:"+x.id),
    ...reg.wiki_pages.map(x=>"wiki:"+x.path)
  ];
  assert.equal(expected.length,139);
  assert.equal(map.records.length,139);
  assert.equal(index.size,139);
  assert.deepEqual([...index.keys()].sort(),expected.sort());
  assert.deepEqual(map.counts,{drive:44,fn:71,wiki:24});
});
test("source folder and document type are independent",()=>{
  const types={ARCH:"archive",ASSO:"organisation",BIO:"biographie",COL:"collectif",EXP:"experience"};
  for(const original of reg.drive_fiches){
    const row=index.get("drive:"+original.id);
    assert.equal(row.source_folder,original.source_folder,original.id);
    assert.equal(row.document_type,types[original.id.split("-")[0]],original.id);
    assert.equal(row.canonical_key,original.id);
  }
});
test("wiki versions retained and each public route exists",()=>{
  for(const original of reg.wiki_pages){
    const row=index.get("wiki:"+original.path);
    assert.ok(existsSync(original.path),original.path);
    assert.equal(row.source_blob_sha,original.blob_sha_at_inventory,original.path);
  }
});
test("FN aliases pending and symmetric without destructive collapse",()=>{
  for(const [left,right] of map.aliases_pending){
    assert.equal(index.get("fn:"+left).duplicate_ref,right);
    assert.equal(index.get("fn:"+right).duplicate_ref,left);
  }
  for(const row of map.records)assert.equal(row.alias_of,null,row.canonical_key);
});
test("preserve review status, rights uncertainty and individual decisions",()=>{
  for(const original of reg.drive_fiches){
    const row=index.get("drive:"+original.id);
    assert.equal(row.review,original.review_status,original.id);
    assert.equal(row.human_approval,original.human_approval,original.id);
    assert.equal(row.publication_authorized,false,original.id);
  }
  for(const original of reg.mediatheque_fn){
    const row=index.get("fn:"+original.id);
    assert.equal(row.review,original.review_status,original.id);
    assert.equal(row.publication_decision,original.publication_decision,original.id);
  }
  for(const original of reg.wiki_pages){
    const row=index.get("wiki:"+original.path);
    assert.equal(row.review,original.lectrice_pre_sortie?.classification || original.content_review);
  }
  assert.equal(schema.migration.execute,false);
  assert.deepEqual(schema.migration.ddl,[]);
  assert.deepEqual(schema.migration.backend_operations,[]);
  assert.equal(map.publication_default,"REFUSE");
});
