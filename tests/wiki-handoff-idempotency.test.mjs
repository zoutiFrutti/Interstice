import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
const script=new URL('../scripts/reconcile-wiki-handoff.mjs',import.meta.url);
const id='fn069-penseur-archives-croisees-2026-10-29';
test('FN069: creation puis reprise identique sans doublon',()=>{
 const dir=mkdtempSync(join(tmpdir(),'interstice-wiki-'));
 try {
  const ledger=join(dir,'registry.json');
  const call=()=>spawnSync(process.execPath,[script.pathname,id,ledger],{encoding:'utf8'});
  const first=call(); assert.equal(first.status,0,first.stderr); assert.match(first.stdout,/CREATED/);
  const before=readFileSync(ledger,'utf8');
  const second=call(); assert.equal(second.status,0,second.stderr);assert.match(second.stdout,/UNCHANGED/);
  assert.equal(readFileSync(ledger,'utf8'),before);
  const data=JSON.parse(before);assert.equal(Object.keys(data.entries).length,1);
  assert.equal(data.entries[id].editorial_approval,false);
  assert.equal(data.entries[id].supabase_submission_id,null);
  data.entries[id].source_sha='0'.repeat(40);
  writeFileSync(ledger,JSON.stringify(data));
  const changed=call();assert.notEqual(changed.status,0);assert.match(changed.stderr,/SOURCE_CHANGED/);
 } finally {rmSync(dir,{recursive:true,force:true})}
});
