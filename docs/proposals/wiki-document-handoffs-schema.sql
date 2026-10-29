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
