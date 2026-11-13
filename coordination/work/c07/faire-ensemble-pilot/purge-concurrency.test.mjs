// Disposable localhost PostgreSQL only. No URL, credential or Supabase environment accepted.
import {Client} from 'pg';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {test,before,beforeEach,after} from 'node:test';
import assert from 'node:assert/strict';

const clients=[];
let control,a,b;
const cohort='c08-fe-proposals-v1';
const purge='select * from interstice_fe_pilot.purge_pending(false,1,true)';
async function connect(){
 const c=new Client({host:'127.0.0.1',port:55439,database:'interstice_purge_test',
  user:'postgres',password:'synthetic-ci-only',connectionTimeoutMillis:3000});
 await c.connect();clients.push(c);await c.query("set statement_timeout='8s'; set lock_timeout='5s'");return c;
}
before(async()=>{
 assert.equal(process.env.INTERSTICE_PURGE_LOCAL_TEST,'1','Explicit disposable-test opt-in required');
 control=await connect();
 assert.equal((await control.query('select current_database() as name')).rows[0].name,'interstice_purge_test');
 assert.equal((await control.query("select count(*)::int as n from pg_tables where schemaname='public'")).rows[0].n,0,
  'Refuse existing tables: this suite requires a fresh disposable database');
 await control.query(`
  create role anon;create role authenticated;create role service_role bypassrls;
  create table public.proposals(id uuid primary key default gen_random_uuid(),
   status text not null default 'pending',created_at timestamptz not null default now(),
   moderated_at timestamptz,published_at timestamptz,moderation_reasons text[] not null default '{}');
  alter table public.proposals enable row level security;
  create table public.moderation_events(id uuid primary key default gen_random_uuid(),
   proposal_id uuid references public.proposals(id) on delete cascade,event_type text,reason_codes text[]);
  alter table public.moderation_events enable row level security;
  create function public.fixture_audit() returns trigger language plpgsql as $$ begin
   insert into public.moderation_events(proposal_id,event_type) values(new.id,'submitted');return null;end $$;
  create trigger fixture_audit after insert on public.proposals for each row execute function public.fixture_audit();
  grant select,insert,update,delete on public.proposals,public.moderation_events to service_role;
 `);
 await control.query(readFileSync(new URL('./purge-candidate.sql',import.meta.url),'utf8'));
 // Immutable previous candidate replayed only inside this empty disposable database.
 const baseline=execFileSync('git',['show','3ef0d202a66777973e0131d3d4b71552e85df7b4:coordination/work/c07/faire-ensemble-pilot/purge-candidate.sql'],{encoding:'utf8'});
 await control.query(baseline.replaceAll('purge_pending(', 'purge_before_concurrency('));
 a=await connect();b=await connect();await a.query('set role service_role');await b.query('set role service_role');
});
beforeEach(async()=>{
 await a.query('rollback');await b.query('rollback');await control.query('truncate public.proposals cascade');
});
after(async()=>{
 // Rollback before closing to release any locks left by a failing assertion.
 for(const c of clients)try{await c.query('rollback');}catch{}
 await Promise.all(clients.map(c=>c.end()));
});
async function seed(){
 await control.query('alter table public.proposals disable trigger proposal_pilot_cohort_guard');
 try{return (await control.query(`insert into public.proposals(pilot_cohort,created_at)
  values($1,now()-interval '721 hours') returning id`,[cohort])).rows[0].id;}
 finally{await control.query('alter table public.proposals enable trigger proposal_pilot_cohort_guard');}
}
async function exists(id){return (await control.query('select count(*)::int as n from public.proposals where id=$1',[id])).rows[0].n;}
async function waitForLock(c,ended=()=>false){
 const pid=(await control.query('select $1::int as pid',[c.processID])).rows[0].pid;
 const deadline=Date.now()+4000;
 while(Date.now()<deadline){
  if(ended())return;
  const s=(await control.query('select wait_event_type from pg_stat_activity where pid=$1',[pid])).rows[0];
  if(s?.wait_event_type==='Lock')return;
  await new Promise(r=>setTimeout(r,10));
 }
 throw new Error('Expected concurrency barrier was not reached');
}

test('moderation UPDATE in progress protects proposal, then committed state is excluded',async()=>{
 const id=await seed();await b.query('begin');
 await b.query("update public.proposals set status='rejected',moderated_at=now() where id=$1",[id]);
 assert.equal((await a.query(purge)).rows[0].deleted_count,0);
 await b.query('commit');assert.equal((await a.query(purge)).rows[0].deleted_count,0);assert.equal(await exists(id),1);
});
test('human audit INSERT in progress protects pending proposal through FK lock',async()=>{
 const id=await seed();await b.query('begin');
 await b.query("insert into public.moderation_events(proposal_id,event_type) values($1,'reviewed')",[id]);
 assert.equal((await a.query(purge)).rows[0].deleted_count,0);
 await b.query('commit');assert.equal((await a.query(purge)).rows[0].deleted_count,0);assert.equal(await exists(id),1);
});
test('two concurrent purges take disjoint bounded batches',async()=>{
 await seed();await seed();await a.query('begin');
 assert.equal((await a.query(purge)).rows[0].deleted_count,1);
 assert.equal((await b.query(purge)).rows[0].deleted_count,1);
 await a.query('commit');assert.equal((await b.query(purge)).rows[0].deleted_count,0);
});
test('moderation arriving after deletion sees no row, never a successful update',async()=>{
 const id=await seed();await a.query('begin');await a.query(purge);await b.query('begin');
 const change=b.query("update public.proposals set status='rejected' where id=$1 returning id",[id]);
 try{await waitForLock(b);await a.query('commit');assert.equal((await change).rowCount,0);await b.query('rollback');}
 finally{await a.query('rollback');await change.catch(()=>{});await b.query('rollback');}
});
test('previous SHA reproduces loss of an audit event modified during cascade',async()=>{
 const id=await seed();await b.query('begin');
 await b.query("update public.moderation_events set event_type='reviewed' where proposal_id=$1",[id]);
 const pending=a.query('select * from interstice_fe_pilot.purge_before_concurrency(false,1,true)')
  .then(value=>({value}),error=>({error}));
 try{
  await waitForLock(a);await b.query('commit');const result=await pending;
  assert.ifError(result.error);assert.equal(result.value.rows[0].deleted_count,1);
  assert.equal(await exists(id),0,'Baseline no longer reproduces: reassess diagnosis');
 }finally{await b.query('rollback');await pending;}
});
test('concurrent change of submitted into human trace must not be cascaded away',async()=>{
 const id=await seed();await b.query('begin');
 await b.query("update public.moderation_events set event_type='reviewed' where proposal_id=$1",[id]);
 // Observe error as a value immediately, avoiding unhandled rejection before the barrier.
 let settled=false;
 const pending=a.query(purge).then(value=>({value}),error=>({error})).finally(()=>{settled=true;});
 try{
  // Original implementation waits inside CASCADE; safe implementation may refuse immediately.
  await waitForLock(a,()=>settled);
  await b.query('commit');const result=await pending;
  if(result.error)assert.equal(result.error.code,'55P03');
  else assert.equal(result.value.rows[0].deleted_count,0,'Human trace was lost to a concurrent cascade');
  assert.equal(await exists(id),1);
  assert.equal((await control.query("select count(*)::int as n from public.moderation_events where proposal_id=$1 and event_type='reviewed'",[id])).rows[0].n,1);
 }finally{await b.query('rollback');await pending;}
});
test('stale REPEATABLE READ snapshot is refused before selecting any purge batch',async()=>{
 const id=await seed();await a.query('begin isolation level repeatable read');await a.query('select 1');
 await b.query("insert into public.moderation_events(proposal_id,event_type) values($1,'reviewed')",[id]);
 await assert.rejects(a.query(purge),e=>e.code==='0A000' && /READ COMMITTED/.test(e.message));
 await a.query('rollback');assert.equal(await exists(id),1);
});
