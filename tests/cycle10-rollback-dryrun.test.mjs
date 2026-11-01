import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import vm from "node:vm";
const get=x=>readFileSync(x,"utf8");
const plan=JSON.parse(get("edition-premiere/cycle10-rollback-plan.json"));
test("C10: simulation aller puis retour des deux handlers, aucun appel externe",async()=>{
  for(const item of plan.edge){
    let handler;
    const context={Deno:{serve:f=>{handler=f}},Response};
    vm.runInNewContext(get("edition-premiere/security-p0/"+item.name+"-disabled.ts"),context,{timeout:1000});
    for(const method of ["POST","GET","OPTIONS"]){
      const response=await handler({method});
      assert.equal(response.status,method==="POST"?503:method==="GET"?405:204);
    }
    const mockState={name:item.name,version:item.activeVersion,digest:item.activeDigest};
    const dryRun=(current,desired)=>({...current,version:desired.rollbackVersion,digest:desired.rollbackDigest});
    const reversed=dryRun(mockState,item);
    assert.equal(reversed.version,item.rollbackVersion);
    assert.equal(reversed.digest,item.rollbackDigest);
    assert.notEqual(reversed.digest,mockState.digest);
    assert.equal(mockState.digest,item.activeDigest,"état initial mock inchangé");
  }
});
test("C10: rollback SQL à blanc ne redonne jamais accès à anon/PUBLIC",()=>{
 assert.equal(plan.restoration_requires_new_human_approval,true);
 const state={...plan.rpc.afterRevoke};
 const hypothetical={...state,authenticated:true};
 assert.deepEqual(hypothetical,plan.rpc.hypotheticalRollback);
 assert.equal(state.authenticated,false,"production simulée reste suspendue");
 assert.equal(hypothetical.anon,false);
 assert.match(plan.rpc.restoreSql,/TO authenticated;/);
 assert.doesNotMatch(plan.rpc.restoreSql,/TO (?:PUBLIC|anon)/i);
});
test("C10: aucune mutation production dans le test ni secret stocké",()=>{
 const source=get("tests/cycle10-rollback-dryrun.test.mjs");
 assert.doesNotMatch(source,/^import .*supabase|^import .*github/m);
 const data=JSON.stringify(plan);
 assert.doesNotMatch(data,/service_role|sb_secret_|Bearer /i);
 assert.equal(plan.project,"rpqiwxkaiyokmxbhxfvh");
});
