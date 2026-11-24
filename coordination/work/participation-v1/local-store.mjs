// Isolated fixture database only. No URL, production credential or remote driver.
import {PGlite} from '../c07/faire-ensemble-pilot/node_modules/@electric-sql/pglite/dist/index.js';
import {readFile} from 'node:fs/promises';
import {targets,research,threads} from './fixtures.mjs';
export async function createLocalStore({seed=true}={}){
 const db=new PGlite();
 await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;
  create table public.proposals(id uuid primary key default gen_random_uuid(),public_ref text default gen_random_uuid()::text,status text not null default 'pending' check(status in ('pending','published','rejected','withdrawn')),need_text text,offer_text text,area_text text,category text,created_at timestamptz not null default now(),moderated_at timestamptz,published_at timestamptz);
  alter table public.proposals enable row level security;
  grant select,insert,update,delete on public.proposals to service_role;
  create table public.moderation_events(id uuid primary key default gen_random_uuid(),proposal_id uuid references public.proposals(id) on delete cascade,event_type text,reason_codes text[]);
  grant select,insert,update,delete on public.moderation_events to service_role;
  create function public.fixture_submitted() returns trigger language plpgsql as $$ begin insert into public.moderation_events(proposal_id,event_type,reason_codes) values(new.id,'submitted','{}');return new;end $$;
  create trigger fixture_initial_audit after insert on public.proposals for each row execute function public.fixture_submitted();
  create function public.is_moderator() returns boolean language sql as $$ select false $$;
  create function public.moderate_proposal(uuid,text) returns boolean language sql as $$ select false $$;
  grant execute on function public.moderate_proposal(uuid,text) to authenticated;
  grant select on public.proposals to anon,authenticated;
  create policy published_fixture on public.proposals for select to anon,authenticated using(status='published');`);
 // Exercise the actual pre-existing cohort, invariants and purge, not a new copy.
 await db.exec(await readFile(new URL('../c07/faire-ensemble-pilot/purge-candidate.sql',import.meta.url),'utf8'));
 await db.exec(await readFile(new URL('./schema-candidate.sql',import.meta.url),'utf8'));
 if(seed){
  for(const t of targets)await db.query('insert into participation_private.targets(id,version,public_enabled,blocked,data) values($1,$2,$3,$4,$5)',[t.id,t.version,t.public_enabled,t.blocked,t.data]);
  for(const r of research)await db.query('insert into participation_private.research(id,target_id,public_enabled,data) values($1,$2,$3,$4)',[r.id,r.target_id,r.public_enabled,r.data]);
  for(const t of threads)await db.query('insert into participation_private.threads(id,public_enabled,data) values($1,$2,$3)',[t.id,t.public_enabled,t.data]);
 }
 let chain=Promise.resolve();
 return {db,command(action,payload){
  const task=chain.then(async()=>{await db.exec('set role service_role');try{return (await db.query('select public.participation_command($1,$2) as result',[action,payload])).rows[0].result;}finally{await db.exec('reset role');}});
  chain=task.catch(()=>{});return task;
 },close:()=>db.close()};
}
