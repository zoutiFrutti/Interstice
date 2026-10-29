-- Tests d'intégration à lancer sur une base PostgreSQL JETABLE, jamais en production.
-- Pré-requis : appliquer d'abord docs/proposals/wiki-document-handoffs-schema.sql
-- Connecté sous un rôle de test autorisé à SET ROLE service_role.
begin;
set local role service_role;
do $$
declare
  ident text := 'fn069-penseur-archives-croisees-2026-10-29';
  sha1 text := repeat('a',40);
  sha2 text := repeat('b',40);
  fp text := repeat('c',64);
  result text;
  n integer;
begin
  result := wiki_ingest_private.ingest_document(ident,'zoutiFrutti/Interstice',
    'coordination/PENSEUR_FN069_ARCHIVES_CROISEES_2026-10-29.md',sha1,fp,'Le Penseur','[]'::jsonb);
  if result <> 'CREATED' then raise exception 'First insert: %',result; end if;
  result := wiki_ingest_private.ingest_document(ident,'zoutiFrutti/Interstice',
    'coordination/PENSEUR_FN069_ARCHIVES_CROISEES_2026-10-29.md',sha1,fp,'Le Penseur','[]'::jsonb);
  if result <> 'UNCHANGED' then raise exception 'Duplicate: %',result; end if;
  result := wiki_ingest_private.ingest_document(ident,'zoutiFrutti/Interstice',
    'coordination/PENSEUR_FN069_ARCHIVES_CROISEES_2026-10-29.md',sha2,fp,'Le Penseur','[]'::jsonb);
  if result <> 'SOURCE_CHANGED_REVIEW_REQUIRED' then raise exception 'Changed source: %',result; end if;
  select count(*) into n from wiki_ingest_private.document_handoffs where document_id=ident;
  if n <> 1 then raise exception 'Expected one handoff, found %',n; end if;
  select count(*) into n from wiki_ingest_private.handoff_events where document_id=ident;
  if n <> 2 then raise exception 'Expected two audit events, found %',n; end if;
  if exists(select 1 from wiki_ingest_private.document_handoffs
    where document_id=ident and (editorial_approval or published or stage <> 'awaiting_human_review'
    or source_sha <> sha1)) then raise exception 'Unexpected mutation or approval'; end if;
end $$;
rollback;
-- Test parallèle nécessaire à part avec deux connexions distinctes.
