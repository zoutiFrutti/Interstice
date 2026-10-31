import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const html=readFileSync("wiki.html","utf8");
test("prototype dans Wiki existant, 3 exercices et aucun nouveau document approuvé",()=>{
 assert.equal((html.match(/<h1\b/g)||[]).length,1);
 for(const id of ["ecologie","democratie","cooperatives"])assert.ok(html.includes('id="'+id+'"'),id);
 assert.equal((html.match(/class="pc-step"/g)||[]).length,3);
 assert.ok((html.match(/<details\b/g)||[]).length>=3);
 assert.match(html,/PROTOTYPE CANDIDAT/);
 assert.match(html,/non adoptée collectivement|non validé/i);
 for(const forbidden of ["ARCH-002.html","ARCH-007.html","submit_wiki_article"])assert.ok(!html.includes(forbidden));
});
test("sommaire, ancres et liens du prototype cohérents",()=>{
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));
 for(const [,anchor] of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.has(anchor),"Ancre manquante "+anchor);
 assert.ok(html.includes('href="wiki-ecologie-sociale-environnement.html"'));
 assert.ok(html.includes('href="wiki-decision-collective.html"'));
 assert.ok(html.includes('href="wiki-capitalisme-classes-travail.html"'));
});
