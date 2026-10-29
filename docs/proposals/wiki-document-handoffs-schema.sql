-- CANDIDAT UNIQUEMENT. Ne pas appliquer à Supabase de production sans revue.
-- Schéma privé : aucune exposition au Data API public.
create schema if not exists wiki_ingest_private;
revoke all on schema wiki_ingest_private from public, anon, authenticated;
grant usage on schema wiki_ingest_private to service_role;

create table if not exists wiki_ingest_private.document_handoffs (
 document_id text primary key check (document_id ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
 source_repository text not null,
 source_path text not null,
 source_sha text not null check (source_sha ~ '^[a-f0-9]{40}$'),
 source_fingerprint text not null check (source_fingerprint ~ '^[a-f0-9]{64}$'),
 atelier text not null,
 source_links jsonb not null default '[]'::jsonb check (jsonb_typeof(source_links) = 'array'),
 stage text not null default 'awaiting_human_review' check (stage = 'awaiting_human_review'),
 editorial_approval boolean not null default false check (editorial_approval = false),
 published boolean not null default false check (published = false),
 created_at timestamptz not null default now()
);
alter table wiki_ingest_private.document_handoffs enable row level security;
revoke all on wiki_ingest_private.document_handoffs from public, anon, authenticated;
grant select, insert on wiki_ingest_private.document_handoffs to service_role;

create table if not exists wiki_ingest_private.handoff_events (
 event_id bigint generated always as identity primary key,
 document_id text not null references wiki_ingest_private.document_handoffs(document_id),
 event_type text not null check (event_type in ('created','source_changed')),
 previous_sha text,
 new_sha text not null,
 event_at timestamptz not null default now(),
 unique(document_id,event_type,new_sha)
);
alter table wiki_ingest_private.handoff_events enable row level security;
revoke all on wiki_ingest_private.handoff_events from public, anon, authenticated;
grant select, insert on wiki_ingest_private.handoff_events to service_role;
grant usage on sequence wiki_ingest_private.handoff_events_event_id_seq to service_role;

create or replace function wiki_ingest_private.ingest_document(
 p_document_id text, p_repository text, p_path text, p_sha text,
 p_fingerprint text, p_atelier text, p_links jsonb
) returns text
language plpgsql
security invoker
set search_path = ''
as $$
declare v_original record;
begin
 if current_user <> 'service_role' then
   raise exception 'not authorized';
 end if;
 if p_document_id !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
    or p_sha !~ '^[a-f0-9]{40}$'
    or p_fingerprint !~ '^[a-f0-9]{64}$'
    or p_repository <> 'zoutiFrutti/Interstice'
    or p_path not like 'coordination/%'
    or coalesce(length(trim(p_atelier)),0) = 0
    or jsonb_typeof(p_links) is distinct from 'array' then
   raise exception 'invalid input';
 end if;
 insert into wiki_ingest_private.document_handoffs
 (document_id,source_repository,source_path,source_sha,source_fingerprint,atelier,source_links)
 values (p_document_id,p_repository,p_path,p_sha,p_fingerprint,p_atelier,p_links)
 on conflict(document_id) do nothing;
 if found then
   insert into wiki_ingest_private.handoff_events(document_id,event_type,new_sha)
   values(p_document_id,'created',p_sha);
   return 'CREATED';
 end if;
 select source_repository, source_path, source_sha, source_fingerprint, atelier, source_links
 into v_original from wiki_ingest_private.document_handoffs
 where document_id=p_document_id for update;
 if v_original.source_sha <> p_sha
    or v_original.source_fingerprint <> p_fingerprint
    or v_original.source_repository <> p_repository
    or v_original.source_path <> p_path
    or v_original.atelier <> p_atelier
    or v_original.source_links <> p_links then
   insert into wiki_ingest_private.handoff_events(document_id,event_type,previous_sha,new_sha)
   values(p_document_id,'source_changed',v_original.source_sha,p_sha)
   on conflict(document_id,event_type,new_sha) do nothing;
   return 'SOURCE_CHANGED_REVIEW_REQUIRED';
 end if;
 return 'UNCHANGED';
end $$;
revoke all on function wiki_ingest_private.ingest_document(text,text,text,text,text,text,jsonb) from public, anon, authenticated;
grant execute on function wiki_ingest_private.ingest_document(text,text,text,text,text,text,jsonb) to service_role;
-- Aucun appel navigateur. Service d'ingestion autorisé à concevoir et tester séparément.
-- AUCUNE approbation éditoriale ni publication possible avec ce schéma.
