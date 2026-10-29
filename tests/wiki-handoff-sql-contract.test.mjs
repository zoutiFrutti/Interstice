import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const sql=readFileSync(new URL('../docs/proposals/wiki-document-handoffs-schema.sql',import.meta.url),'utf8');
test('private schema and no publication',()=>{
 assert.ok(sql.includes('wiki_ingest_private'));
 assert.ok(sql.includes('check (published = false)'));
 assert.ok(sql.includes('security invoker'));
});
test('idempotency controls',()=>{
 assert.ok(sql.includes('document_id text primary key'));
 assert.ok(sql.includes('on conflict(document_id) do nothing'));
 assert.ok(sql.includes('SOURCE_CHANGED_REVIEW_REQUIRED'));
});
