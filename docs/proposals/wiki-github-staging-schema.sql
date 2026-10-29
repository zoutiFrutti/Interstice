-- Schema reel applique dans Supabase Interstice le 2026-10-30.
-- Archive de brouillons privee, distincte des soumissions utilisateur.
create schema if not exists wiki_ingest_private;
revoke all on schema wiki_ingest_private from public, anon, authenticated;
create table if not exists wiki_ingest_private.github_document_drafts (
 document_id text primary key check (document_id ~ '^gh-[a-f0-9]{24}$'),
 source_repo text not null default 'zoutiFrutti/Interstice' check (source_repo='zoutiFrutti/Interstice'),
 source_path text not null unique,
 github_blob_sha text not null check (github_blob_sha ~ '^[a-f0-9]{40}$'),
 content_sha256 text not null check (content_sha256 ~ '^[a-f0-9]{64}$'),
 source_url text not null,
 title text not null,
 atelier text not null,
 markdown text not null,
 sources jsonb not null default '[]'::jsonb check (jsonb_typeof(sources)='array'),
 editorial_status text not null default 'needs_review' check (editorial_status='needs_review'),
 license_confirmed boolean not null default false check (license_confirmed=false),
 privacy_confirmed boolean not null default false check (privacy_confirmed=false),
 published boolean not null default false check (published=false),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create table if not exists wiki_ingest_private.github_document_revisions (
 revision_id bigint generated always as identity primary key,
 document_id text not null references wiki_ingest_private.github_document_drafts(document_id),
 github_blob_sha text not null,
 content_sha256 text not null,
 markdown text not null,
 discovered_at timestamptz not null default now(),
 unique(document_id,content_sha256)
);
alter table wiki_ingest_private.github_document_drafts enable row level security;
alter table wiki_ingest_private.github_document_revisions enable row level security;
revoke all on wiki_ingest_private.github_document_drafts from public, anon, authenticated;
revoke all on wiki_ingest_private.github_document_revisions from public, anon, authenticated;
-- Les droits de service sont poses dans wiki-github-production-rpc.sql.
