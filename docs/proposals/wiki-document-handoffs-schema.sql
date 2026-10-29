-- Proposition non déployée : file documentaire séparée des articles soumis par des personnes.
create table if not exists public.wiki_document_handoffs (
  document_id text primary key check (document_id ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  source_repository text not null,
  source_path text not null,
  source_sha text not null check (source_sha ~ '^[a-f0-9]{40}$'),
  source_fingerprint text not null check (source_fingerprint ~ '^[a-f0-9]{64}$'),
  atelier text not null,
  source_links jsonb not null default '[]'::jsonb,
  stage text not null default 'awaiting_human_review'
    check (stage = 'awaiting_human_review'),
  editorial_approval boolean not null default false check (editorial_approval = false),
  published boolean not null default false check (published = false),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.wiki_document_handoffs enable row level security;
revoke all on public.wiki_document_handoffs from anon, authenticated;
-- Pas de politique d'écriture publique et pas de publication automatique.
-- L'ingestion réelle exige ensuite un service autorisé, une preuve de provenance,
-- un traitement transactionnel des révisions et une revue de sécurité distincte.


-- Historique append-only : aucune édition publique et aucun effacement automatique.
create table if not exists public.wiki_document_handoff_events (
  event_id bigint generated always as identity primary key,
  document_id text not null references public.wiki_document_handoffs(document_id),
  event_type text not null check(event_type in ('created','duplicate','source_changed')),
  previous_sha text,
  new_sha text not null,
  event_at timestamptz not null default now()
);
alter table public.wiki_document_handoff_events enable row level security;
revoke all on public.wiki_document_handoff_events from anon, authenticated;

-- A exécuter UNIQUEMENT sous un rôle serveur explicitement autorisé, dans
-- un schéma privé lors de la mise en production ; cette proposition n'est
-- volontairement pas exposée comme RPC publique.
create or replace function public.ingest_wiki_document_handoff_private(
  p_document_id text, p_repository text, p_path text, p_sha text,
  p_fingerprint text, p_atelier text, p_links jsonb
) returns text
language plpgsql
security invoker
set search_path = ''
as $$
declare v_previous text;
begin
  if current_user not in ('postgres','service_role') then
    raise exception 'not authorized';
  end if;
  if p_document_id !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
     or p_sha !~ '^[a-f0-9]{40}$'
     or p_fingerprint !~ '^[a-f0-9]{64}$'
     or jsonb_typeof(p_links) is distinct from 'array' then
    raise exception 'invalid input';
  end if;
  insert into public.wiki_document_handoffs
    (document_id,source_repository,source_path,source_sha,source_fingerprint,atelier,source_links)
  values (p_document_id,p_repository,p_path,p_sha,p_fingerprint,p_atelier,p_links)
  on conflict(document_id) do nothing;
  if found then
    insert into public.wiki_document_handoff_events(document_id,event_type,new_sha)
      values(p_document_id,'created',p_sha);
    return 'CREATED';
  end if;
  select source_sha into v_previous from public.wiki_document_handoffs
    where document_id=p_document_id for update;
  if v_previous <> p_sha then
    insert into public.wiki_document_handoff_events(document_id,event_type,previous_sha,new_sha)
      values(p_document_id,'source_changed',v_previous,p_sha);
    return 'SOURCE_CHANGED_REVIEW_REQUIRED';
  end if;
  -- Un duplicata identique n'ajoute pas d'événement pour éviter de gonfler l'historique.
  return 'UNCHANGED';
end $$;
revoke all on function public.ingest_wiki_document_handoff_private(text,text,text,text,text,text,jsonb) from public, anon, authenticated;
-- Exposition et GRANT à revoir : préférence production pour schéma non exposé,
-- appel uniquement depuis un backend authentifié, jamais depuis navigateur.
