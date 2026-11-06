// PostgreSQL WASM local uniquement : aucun client ou URL Supabase.
import {PGlite} from '@electric-sql/pglite';
import {readFileSync} from 'node:fs';
import {test,before,beforeEach,after} from 'node:test';
import assert from 'node:assert/strict';

let db;
const sql=readFileSync(new URL('./purge-candidate.sql',import.meta.url),'utf8');
const cohort='c08-fe-proposals-v1';
before(async()=>{
 db=new PGlite();
 await db.exec(`
  create role anon; create role authenticated; create role service_role bypassrls;
  create table public.proposals(
   id uuid primary key default gen_random_uuid(), need_text text not null default 'synthetic',
   status text not null default 'pending' check(status in ('pending','published','rejected','withdrawn')),
   created_at timestamptz not null default now(), published_at timestamptz, moderated_at timestamptz,
   moderation_reasons text[] not null default '{}');
  alter table public.proposals enable row level security;
  create table public.moderation_events(id uuid primary key default gen_random_uuid(),
   proposal_id uuid references public.proposals(id) on delete cascade, event_type text, reason_codes text[]);
  create function public.fixture_initial_audit() returns trigger language plpgsql as $$
   begin insert into public.moderation_events(proposal_id,event_type,reason_codes)
    values(new.id,'submitted',new.moderation_reasons); return null; end; $$;
  create trigger fixture_initial_audit after insert on public.proposals
   for each row execute function public.fixture_initial_audit();
  grant select,insert,update,delete on public.proposals to service_role;
  grant select,insert on public.moderation_events to service_role;
 `);
 await db.exec(sql);
});
beforeEach(async()=>{await db.exec('reset role; truncate public.proposals cascade;');});
after(async()=>{await db?.close();});

async function seed({hours=721,tag=cohort,status='pending',moderated=false,published=false,event='submitted'}={}){
 // Vieillissement de fixtures uniquement : l'horloge serveur de production n'est jamais changee.
 await db.exec('alter table public.proposals disable trigger proposal_pilot_cohort_guard;');
 let id;
 try{
  const r=await db.query(`insert into public.proposals(pilot_cohort,status,created_at,moderated_at,published_at)
   values($1,$2,transaction_timestamp()-($3::numeric * interval '1 hour'),
    case when $4 then now() end,case when $5 then now() end) returning id`,[tag,status,hours,moderated,published]);
  id=r.rows[0].id;
 }finally{await db.exec('alter table public.proposals enable trigger proposal_pilot_cohort_guard;');}
 if(event!=='submitted')await db.query('insert into public.moderation_events(proposal_id,event_type) values($1,$2)',[id,event]);
 return id;
}
async function plan(args=''){
 return (await db.query(`select * from interstice_fe_pilot.purge_pending(${args})`)).rows[0];
}
async function count(table){return Number((await db.query(`select count(*) as n from public.${table}`)).rows[0].n);}

test('simulation par defaut, aucun corps ni ID retourne, aucune suppression',async()=>{
 await seed();assert.deepEqual(await plan(),{planned_count:1,submitted_events:1,deleted_count:0,simulated:true});
 assert.equal(await count('proposals'),1);assert.equal(await count('moderation_events'),1);
});
test('anciens depots sans marqueur toujours preserves',async()=>{
 await seed({tag:null,hours:10000});assert.equal((await plan()).planned_count,0);
 await plan('false,100,true');assert.equal(await count('proposals'),1);
});
test('publies, refuses, retires, dates de traitement et autres traces sont preserves',async()=>{
 for(const status of ['published','rejected','withdrawn'])await seed({status});
 await seed({moderated:true});await seed({published:true});await seed({event:'status_pending'});await seed({event:null});
 assert.equal((await plan()).planned_count,0);await plan('false,100,true');assert.equal(await count('proposals'),7);
});
test('frontiere stricte 30 jours et dates futures, en UTC',async()=>{
 await db.exec('begin; set local timezone = \'Pacific/Auckland\';');
 try{
  await seed({hours:720});await seed({hours:719});await seed({hours:-1});await seed({hours:720.001});
  assert.equal((await plan()).planned_count,1);
 }finally{await db.exec('rollback;');}
});
test('cascade du journal refusee sans parametre explicite meme apres decision de preparation',async()=>{
 await seed();await assert.rejects(plan('false'),/separate decision required/);
 await assert.rejects(plan('false,100,null'),/separate decision required/);
 assert.equal(await count('proposals'),1);assert.equal(await count('moderation_events'),1);
});
test('execution locale explicite ne touche que le lot selectionne et ses traces submitted',async()=>{
 await seed();const old=await seed({tag:null});const human=await seed({event:'status_pending'});
 assert.deepEqual(await plan('false,100,true'),{planned_count:1,submitted_events:1,deleted_count:1,simulated:false});
 const kept=(await db.query('select id from public.proposals')).rows.map(x=>x.id).sort();
 assert.deepEqual(kept,[old,human].sort());assert.equal(await count('moderation_events'),3);
 assert.equal((await plan('false,100,true')).deleted_count,0);
});
test('batches bornes, reprise idempotente',async()=>{
 for(let i=0;i<5;i++)await seed();
 assert.equal((await plan('true,2')).planned_count,2);
 assert.equal((await plan('false,2,true')).deleted_count,2);
 assert.equal((await plan('false,2,true')).deleted_count,2);
 assert.equal((await plan('false,2,true')).deleted_count,1);
 assert.equal((await plan('false,2,true')).deleted_count,0);
});
test('mode ambigu et tailles invalides refuses',async()=>{
 for(const args of ['null','true,0','true,101','true,null'])await assert.rejects(plan(args),/Explicit mode/);
});
test('marqueur immutable, aucun reclassement retroactif des anciens depots',async()=>{
 const id=await seed({tag:null});
 await assert.rejects(db.query('update public.proposals set pilot_cohort=$1 where id=$2',[cohort,id]),/immutable/);
 const p=await seed();await assert.rejects(db.query('update public.proposals set pilot_cohort=null where id=$1',[p]),/immutable/);
 await assert.rejects(db.query('update public.proposals set created_at=now() where id=$1',[p]),/timestamp is immutable/);
});
test('nouveau pilote date par le serveur, cohorte inconnue refusee',async()=>{
 const r=await db.query(`insert into public.proposals(pilot_cohort,created_at)
  values($1,'2000-01-01') returning created_at > now()-interval '5 seconds' as recent`,[cohort]);
 assert.equal(r.rows[0].recent,true);
 await assert.rejects(db.query('insert into public.proposals(pilot_cohort) values($1)',['unknown']),/Unknown pilot/);
});
test('API anon/authenticated fermee, role de maintenance seul',async()=>{
 for(const role of ['anon','authenticated']){
  await db.exec(`set role ${role};`);
  try{await assert.rejects(plan(),/permission denied/);}finally{await db.exec('reset role;');}
 }
 await seed();await db.exec('set role service_role;');
 try{assert.equal((await plan()).planned_count,1);}finally{await db.exec('reset role;');}
 const p=await db.query(`select prosecdef from pg_proc where oid=
  'interstice_fe_pilot.purge_pending(boolean,integer,boolean)'::regprocedure`);
 assert.equal(p.rows[0].prosecdef,false);
});
test('installation repetee ne marque ni ne supprime les anciens depots',async()=>{
 const id=await seed({tag:null});await db.exec(sql);
 const r=await db.query('select pilot_cohort from public.proposals where id=$1',[id]);
 assert.equal(r.rows[0].pilot_cohort,null);assert.equal((await plan()).planned_count,0);
});
test('nouvelle dependance en cascade refusee, sans toucher ses archives',async()=>{
 await seed();
 await db.exec('create table public.fixture_archive(id uuid references public.proposals(id) on delete cascade);');
 try{await assert.rejects(plan('false,100,true'),/dependencies changed/);assert.equal(await count('proposals'),1);}
 finally{await db.exec('drop table public.fixture_archive;');}
});
test('nouveau declencheur DELETE sur le journal refuse',async()=>{
 await db.exec(`create trigger fixture_delete before delete on public.moderation_events
  for each row execute function public.fixture_initial_audit();`);
 try{await assert.rejects(plan(),/dependencies changed/);}
 finally{await db.exec('drop trigger fixture_delete on public.moderation_events;');}
});

 test('maintenance peut executer le lot synthetique autorise, sans privileges publics',async()=>{
  await seed();await db.exec('set role service_role;');
  try{assert.deepEqual(await plan('false,100,true'),{planned_count:1,submitted_events:1,deleted_count:1,simulated:false});}
  finally{await db.exec('reset role;');}
  assert.equal(await count('moderation_events'),0);
 });
