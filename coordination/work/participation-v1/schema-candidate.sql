-- CANDIDATE, NOT A DEPLOYED MIGRATION. Review against live schema before use.
-- Additive to the C08 pilot. No cron, collection flag, publication or deletion.
do $$ begin
 if to_regclass('public.proposals') is null or not exists (
   select 1 from information_schema.columns where table_schema='public' and table_name='proposals' and column_name='pilot_cohort'
 ) or to_regprocedure('public.is_moderator()') is null then
   raise exception 'C08 pilot schema and moderator function must be reviewed first';
 end if;
end $$;
create schema participation_private;
revoke all on schema participation_private from public,anon,authenticated;
grant usage on schema participation_private to service_role;

alter table public.proposals
 add column participation_title text check(length(participation_title)<=160),
 add column participation_type text check(participation_type in ('idee','initiative','ressource','correction','besoin')),
 add column participation_references jsonb check(jsonb_typeof(participation_references)='array'),
 add column participation_receipt_hash text unique check(participation_receipt_hash ~ '^[a-f0-9]{64}$'),
 add column participation_state text check(participation_state in ('received','examined','instruction','rejected')),
 add column participation_version integer check(participation_version>0),
 add column participation_history jsonb check(jsonb_typeof(participation_history)='array');

-- Published-row RLS alone cannot hide added private columns. Preserve only the
-- existing public projection's columns for browser roles, with RLS still active.
alter table public.proposals enable row level security;
revoke select on public.proposals from public,anon,authenticated;
grant select(public_ref,category,need_text,offer_text,area_text,published_at,status)
 on public.proposals to anon,authenticated;
do $$ begin
 if to_regprocedure('public.moderate_proposal(uuid,text)') is not null then
  revoke execute on function public.moderate_proposal(uuid,text) from public,anon,authenticated;
 end if;
 if has_column_privilege('anon','public.proposals','participation_history','select')
 or has_column_privilege('authenticated','public.proposals','participation_receipt_hash','select') then
  raise exception 'private proposal column grants must be reviewed';
 end if;
end $$;

create table participation_private.targets(
 id text primary key,
 version text not null check(version ~ '^[a-f0-9]{64}$'),
 public_enabled boolean not null default false,
 blocked boolean not null default true,
 data jsonb not null check(jsonb_typeof(data)='object')
);
create table participation_private.research(
 id text primary key,
 target_id text not null references participation_private.targets(id),
 public_enabled boolean not null default false,
 state text not null default 'open' check(state in ('open','closed')),
 version integer not null default 1,
 data jsonb not null,
 history jsonb not null default '[]'
);
create table participation_private.contributions(
 id uuid primary key default gen_random_uuid(),
 target_id text not null references participation_private.targets(id),
 target_version text not null check(target_version ~ '^[a-f0-9]{64}$'),
 original_body text not null,
 research_id text references participation_private.research(id),
 kind text not null check(kind in ('correction','source','bibliographie','temoignage','transcription','contradiction','information','reecriture')),
 body text not null check(length(body) between 1 and 6000),
 provenance text not null check(length(provenance) between 1 and 800),
 locator text not null check(length(locator) between 1 and 400),
 rights_note text not null check(length(rights_note) between 1 and 800),
 source_references jsonb not null check(jsonb_typeof(source_references)='array' and jsonb_array_length(source_references) between 1 and 5),
 receipt_hash text not null unique check(receipt_hash ~ '^[a-f0-9]{64}$'),
 state text not null default 'received' check(state in ('received','examined','instruction','rejected')),
 version integer not null default 1,
 verified boolean not null default false,
 rights_checked boolean not null default false,
 history jsonb not null default '[]',
 created_at timestamptz not null default now()
);
create table participation_private.threads(
 id text primary key,
 public_enabled boolean not null default false,
 data jsonb not null,
 decision jsonb,
 version integer not null default 1
);
create table participation_private.arguments(
 id uuid primary key default gen_random_uuid(),
 thread_id text not null references participation_private.threads(id),
 kind text not null check(kind in ('argument','objection','source','accord')),
 body text not null check(length(body) between 1 and 2000),
 source_references jsonb not null check(jsonb_typeof(source_references)='array'),
 receipt_hash text not null unique check(receipt_hash ~ '^[a-f0-9]{64}$'),
 state text not null default 'received' check(state in ('received','examined','instruction','rejected')),
 version integer not null default 1,
 history jsonb not null default '[]',
 created_at timestamptz not null default now()
);
alter table participation_private.targets enable row level security;
alter table participation_private.research enable row level security;
alter table participation_private.contributions enable row level security;
alter table participation_private.threads enable row level security;
alter table participation_private.arguments enable row level security;
revoke all on all tables in schema participation_private from public,anon,authenticated;
grant select,insert,update on all tables in schema participation_private to service_role;
-- service_role is server-only and bypasses RLS; no user-editable JWT claims used.

create function public.participation_command(p_action text,p_payload jsonb)
returns jsonb language plpgsql security invoker set search_path='' as $$
declare current_row record; target_row record; v_id uuid; result jsonb; event jsonb; new_state text;
begin
 if current_user<>'service_role' then raise exception 'not authorized' using errcode='42501'; end if;
 if jsonb_typeof(p_payload) is distinct from 'object' then raise exception 'invalid payload'; end if;
 if p_action='catalog' then
  return jsonb_build_object(
   'targets',coalesce((select jsonb_agg(data||jsonb_build_object('id',id,'version',version,'public_enabled',true,'blocked',false)) from participation_private.targets where public_enabled and not blocked),'[]'::jsonb),
   'research',coalesce((select jsonb_agg(r.data||jsonb_build_object('id',r.id,'target_id',r.target_id,'state',r.state,'version',r.version,'history',r.history,'receivedCount',(select count(*) from participation_private.contributions c where c.research_id=r.id and c.state<>'rejected'),'verifiedCount',(select count(*) from participation_private.contributions c where c.research_id=r.id and c.verified and c.rights_checked and c.state='instruction' and c.target_version=t.version))) from participation_private.research r join participation_private.targets t on t.id=r.target_id where r.public_enabled and t.public_enabled and not t.blocked),'[]'::jsonb),
   'threads',coalesce((select jsonb_agg(data||jsonb_build_object('id',id,'version',version,'decision',decision)) from participation_private.threads where public_enabled),'[]'::jsonb),
   'arguments',coalesce((select jsonb_agg(jsonb_build_object('id',a.id,'thread_id',a.thread_id,'kind',a.kind,'body',a.body,'references',a.source_references)) from participation_private.arguments a join participation_private.threads t on t.id=a.thread_id where a.state='instruction' and t.public_enabled),'[]'::jsonb)
  );
 elsif p_action='proposal' then
  insert into public.proposals(need_text,offer_text,area_text,category,status,pilot_cohort,
    participation_title,participation_type,participation_references,participation_receipt_hash,participation_state,participation_version,participation_history)
  values(p_payload->>'need_text',p_payload->>'offer_text',p_payload->>'area_text',p_payload->>'category','pending','c08-fe-proposals-v1',
    p_payload->>'title',p_payload->>'proposal_type',p_payload->'references',p_payload->>'receipt_hash','received',1,'[]') returning id into v_id;
  return jsonb_build_object('id',v_id,'state','received','version',1);
 elsif p_action='contribution' then
  select * into target_row from participation_private.targets where id=p_payload->>'target_id' for share;
  if not found or not target_row.public_enabled or target_row.blocked then raise exception 'target unavailable' using errcode='P0002'; end if;
  if target_row.version<>p_payload->>'target_version' then raise exception 'stale version' using errcode='40001'; end if;
  if p_payload->>'research_id' is not null then
   select * into current_row from participation_private.research where id=p_payload->>'research_id' for share;
   if not found or not current_row.public_enabled or current_row.state<>'open' or current_row.target_id<>target_row.id then raise exception 'research unavailable' using errcode='40001'; end if;
  end if;
  insert into participation_private.contributions(target_id,target_version,original_body,research_id,kind,body,provenance,locator,rights_note,source_references,receipt_hash)
   values(target_row.id,target_row.version,coalesce(target_row.data->>'body',''),p_payload->>'research_id',p_payload->>'kind',p_payload->>'body',p_payload->>'provenance',p_payload->>'locator',p_payload->>'rights_note',p_payload->'references',p_payload->>'receipt_hash') returning id into v_id;
  return jsonb_build_object('id',v_id,'state','received','version',1);
 elsif p_action='argument' then
  select * into target_row from participation_private.threads where id=p_payload->>'thread_id' for share;
  if not found or not target_row.public_enabled or target_row.decision is not null then raise exception 'thread unavailable' using errcode='40001'; end if;
  insert into participation_private.arguments(thread_id,kind,body,source_references,receipt_hash)
   values(target_row.id,p_payload->>'kind',p_payload->>'body',p_payload->'references',p_payload->>'receipt_hash') returning id into v_id;
  return jsonb_build_object('id',v_id,'state','received','version',1);
 elsif p_action='track' then
  select jsonb_build_object('state',participation_state,'version',participation_version,'reason',participation_history->-1->>'reason','documentary','unverified','editorial','not_validated','published',false) into result
   from public.proposals where participation_receipt_hash=p_payload->>'receipt_hash' and pilot_cohort='c08-fe-proposals-v1';
  if result is null then
   select jsonb_build_object('state',state,'version',version,'reason',history->-1->>'reason','documentary',case when verified then 'verified' else 'unverified' end,'editorial','not_validated','published',false) into result from participation_private.contributions where receipt_hash=p_payload->>'receipt_hash';
  end if;
  if result is null then
   select jsonb_build_object('state',state,'version',version,'reason',history->-1->>'reason','documentary','unverified','editorial','not_validated','published',false) into result from participation_private.arguments where receipt_hash=p_payload->>'receipt_hash';
  end if;
  if result is null then raise exception 'receipt not found' using errcode='P0002'; end if;
  return result;
 end if;
 -- Commands below require a gateway-verified moderator. Never expose RPC to users.
 if length(coalesce(p_payload->>'actor',''))=0 then raise exception 'actor required' using errcode='42501'; end if;
 if p_action='queue' then
  return jsonb_build_object(
   'proposals',coalesce((select jsonb_agg(jsonb_build_object('id',id,'title',participation_title,'need',need_text,'offer',offer_text,'references',participation_references,'state',participation_state,'version',participation_version,'history',participation_history)) from public.proposals where participation_receipt_hash is not null and pilot_cohort='c08-fe-proposals-v1'),'[]'::jsonb),
   'contributions',coalesce((select jsonb_agg(to_jsonb(c)-'receipt_hash') from participation_private.contributions c),'[]'::jsonb),
   'arguments',coalesce((select jsonb_agg(to_jsonb(a)-'receipt_hash') from participation_private.arguments a),'[]'::jsonb)
  );
 elsif p_action='review' then
  new_state=p_payload->>'state';
  if new_state not in ('examined','instruction','rejected') or length(trim(coalesce(p_payload->>'reason','')))=0 then raise exception 'reason and valid state required'; end if;
  event=jsonb_build_object('state',new_state,'reason',p_payload->>'reason','actor',p_payload->>'actor','at',clock_timestamp());
  if p_payload->>'kind'='proposal' then
   select participation_state as state,participation_version as version into current_row from public.proposals where id=(p_payload->>'id')::uuid and participation_receipt_hash is not null and pilot_cohort='c08-fe-proposals-v1' for update;
  elsif p_payload->>'kind'='contribution' then
   select * into current_row from participation_private.contributions where id=(p_payload->>'id')::uuid for update;
  elsif p_payload->>'kind'='argument' then
   select * into current_row from participation_private.arguments where id=(p_payload->>'id')::uuid for update;
  else raise exception 'invalid review kind'; end if;
  if not found then raise exception 'not found' using errcode='P0002'; end if;
  if current_row.version<>(p_payload->>'version')::integer then raise exception 'stale review' using errcode='40001'; end if;
  if not ((current_row.state='received' and new_state in ('examined','rejected')) or (current_row.state='examined' and new_state in ('instruction','rejected')) or (current_row.state='instruction' and new_state in ('examined','rejected'))) then raise exception 'invalid transition' using errcode='40001'; end if;
  if p_payload->>'kind'='proposal' then
   update public.proposals set participation_state=new_state,participation_version=participation_version+1,moderated_at=clock_timestamp(),status=case when new_state='rejected' then 'rejected' else 'pending' end,participation_history=coalesce(participation_history,'[]'::jsonb)||jsonb_build_array(event) where id=(p_payload->>'id')::uuid;
  elsif p_payload->>'kind'='contribution' then
   select * into target_row from participation_private.targets where id=current_row.target_id for share;
   if target_row.version<>current_row.target_version or target_row.blocked or not target_row.public_enabled then raise exception 'target changed' using errcode='40001'; end if;
   if coalesce((p_payload->>'verified')::boolean,false) and (new_state<>'instruction' or not coalesce((p_payload->>'rights_checked')::boolean,false)) then raise exception 'verification requires instruction and rights check'; end if;
   event=event||jsonb_build_object('verified',coalesce((p_payload->>'verified')::boolean,false),'rights_checked',coalesce((p_payload->>'rights_checked')::boolean,false));
   update participation_private.contributions set state=new_state,version=version+1,verified=coalesce((p_payload->>'verified')::boolean,false),rights_checked=coalesce((p_payload->>'rights_checked')::boolean,false),history=history||jsonb_build_array(event) where id=current_row.id;
  else
   update participation_private.arguments set state=new_state,version=version+1,history=history||jsonb_build_array(event) where id=(p_payload->>'id')::uuid;
  end if;
  return jsonb_build_object('state',new_state,'version',current_row.version+1,'published',false);
 elsif p_action='research_state' then
  select * into current_row from participation_private.research where id=p_payload->>'id' for update;
  if not found then raise exception 'not found' using errcode='P0002'; end if;
  new_state=p_payload->>'state';
  if current_row.version<>(p_payload->>'version')::integer or new_state not in ('open','closed') or new_state=current_row.state or length(trim(coalesce(p_payload->>'reason','')))=0 then raise exception 'invalid research transition' using errcode='40001'; end if;
  if new_state='closed' and not exists(select 1 from participation_private.contributions c join participation_private.targets t on t.id=c.target_id where c.research_id=current_row.id and c.verified and c.rights_checked and c.state='instruction' and c.target_version=t.version) then raise exception 'verified evidence required' using errcode='40001'; end if;
  update participation_private.research set state=new_state,version=version+1,history=history||jsonb_build_array(jsonb_build_object('state',new_state,'reason',p_payload->>'reason','at',clock_timestamp())) where id=current_row.id;
  return jsonb_build_object('state',new_state,'version',current_row.version+1);
 elsif p_action='thread_decision' then
  select * into current_row from participation_private.threads where id=p_payload->>'id' for update;
  if not found then raise exception 'not found' using errcode='P0002'; end if;
  if current_row.version<>(p_payload->>'version')::integer or current_row.decision is not null then raise exception 'stale decision' using errcode='40001'; end if;
  if length(trim(coalesce(p_payload->>'reason','')))=0 or not(p_payload ?& array['agreements','disagreements','nextSteps']) then raise exception 'decision incomplete'; end if;
  update participation_private.threads set decision=jsonb_build_object('reason',p_payload->>'reason','agreements',p_payload->>'agreements','disagreements',p_payload->>'disagreements','nextSteps',p_payload->>'nextSteps','at',clock_timestamp(),'editorial','not_validated'),version=version+1 where id=current_row.id;
  return jsonb_build_object('recorded',true,'published',false);
 end if;
 raise exception 'unknown command';
end $$;
revoke all on function public.participation_command(text,jsonb) from public,anon,authenticated;
grant execute on function public.participation_command(text,jsonb) to service_role;
