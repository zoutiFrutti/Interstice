import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";

const registry=JSON.parse(readFileSync("coordination/ateliers/registre_editorial_pre_sortie_2026-10-31.json","utf8"));
const schema=JSON.parse(readFileSync("coordination/transmissions/2026-11-01_ANARCHITECTE_CYCLE8_SCHEMA_DOCUMENTAIRE_V02.json","utf8"));
const mapping=JSON.parse(readFileSync("coordination/transmissions/2026-11-01_ANARCHITECTE_CYCLE8_TABLE_CORRESPONDANCE_V02.json","utf8"));
const wiki=readdirSync(".").filter(p=>/^wiki-.*\.html$/.test(p)).sort();
const ids=x=>new Set(x);
const hrefs=text=>[...text.matchAll(/\bhref\s*=\s*["']([^"']+)["']/g)].map(m=>m[1]);
const anchors=text=>[...text.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map(m=>m[1]);

test("139 references, preserving all historical keys and source folders",()=>{
  assert.deepEqual(registry.counts,{fiches_drive:44,mediatheque_fn:71,pages_wiki_existing:24});
  assert.equal(registry.drive_fiches.length,44);
  assert.equal(registry.mediatheque_fn.length,71);
  assert.equal(registry.wiki_pages.length,24);
  assert.equal(wiki.length,24);
  assert.equal(ids(registry.drive_fiches.map(x=>x.id)).size,44);
  assert.equal(ids(registry.mediatheque_fn.map(x=>x.id)).size,71);
  assert.equal(ids(registry.wiki_pages.map(x=>x.path)).size,24);
  assert.deepEqual(new Set(registry.wiki_pages.map(x=>x.path)),new Set(wiki));
  assert.deepEqual(schema.corpora.map(x=>x.count),[44,71,24]);
  assert.deepEqual(mapping.counts,{drive:44,fn:71,wiki:24});
  for(const item of registry.drive_fiches)assert.ok(item.source_folder && item.id);
});
test("individual editorial agreement is never publication permission",()=>{
  for(const item of registry.drive_fiches){
    if(item.editorial_visa?.decision==="ACCORD_EDITO_ZOUT") {
      assert.equal(item.editorial_visa.publication_authorized,false,
        item.id+" was promoted without a separate publication decision");
    }
  }
  assert.equal(schema.public_allowlist.deny_by_default,true);
  assert.deepEqual(schema.migration_plan.database_ddl,[]);
  assert.deepEqual(schema.migration_plan.server_migrations,[]);
});
test("all 24 wiki routes and their direct local fragments exist",()=>{
  for(const page of wiki){
    const html=readFileSync(page,"utf8");
    const localIds=anchors(html);
    assert.equal(localIds.length,ids(localIds).size,page+": duplicate HTML id");
    for(const ref of hrefs(html)){
      if(/^#/.test(ref)){assert.ok(localIds.includes(ref.slice(1)),page+": unresolved "+ref);continue;}
      if(/^(?:https?:|mailto:|tel:|\/\/|javascript:|data:)/i.test(ref))continue;
      const [pathname,fragment]=ref.split("#");
      const file=(pathname||page).split("?")[0].replace(/^\.\//,"");
      if(file) assert.ok(existsSync(file),page+": missing local destination "+ref);
      if(fragment && file && /\.html?$/.test(file)){
        const target=readFileSync(file,"utf8");
        assert.ok(anchors(target).includes(fragment),page+": broken target anchor "+ref);
      }
    }
  }
});
test("known broken route has been corrected on the PR51 branch",()=>{
  const html=readFileSync("wiki-autonomie-materielle-savoir-faire.html","utf8");
  assert.doesNotMatch(html,/href=["']wiki-mutualiser-materiel\.html/);
  assert.match(html,/href=["']wiki-ecologie-sociale-environnement\.html#axe5["']/);
});

test("all mapping rows correspond to real registry entries without renumbering",()=>{
  const expected=[
    ...registry.drive_fiches.map(x=>"drive:"+x.id),
    ...registry.mediatheque_fn.map(x=>"fn:"+x.id),
    ...registry.wiki_pages.map(x=>"wiki:"+x.path)
  ].sort();
  const actual=mapping.entries.map(x=>x.corpus+":"+x.key).sort();
  assert.equal(mapping.entries.length,139);
  assert.deepEqual(actual,expected);
  for(const row of mapping.entries){
    assert.equal(row.publication_authorized,false,
      row.key+": mapping must not invent an authorization");
  }
  const expectedDuplicatePairs=[
    ["FN-022","FN-048"],["FN-038","FN-057"]
  ];
  for(const [left,right] of expectedDuplicatePairs){
    const first=mapping.entries.find(x=>x.key===left);
    const second=mapping.entries.find(x=>x.key===right);
    assert.equal(first?.duplicate_ref,right);
    assert.equal(second?.duplicate_ref,left);
  }
});
