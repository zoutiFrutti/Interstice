-- Contrat d'ingestion privee : ne change pas public.wiki_article_submissions.
-- Execution reservee au role service_role et aux fonctions Edge controlees.
grant usage on schema wiki_ingest_private to service_role;
grant select, insert, update on wiki_ingest_private.github_document_drafts to service_role;
grant select, insert on wiki_ingest_private.github_document_revisions to service_role;
grant usage on sequence wiki_ingest_private.github_document_revisions_revision_id_seq to service_role;
create or replace function public.stage_github_wiki_document(
 p_id text,p_path text,p_blob_sha text,p_content_sha text,p_title text,
 p_atelier text,p_markdown text,p_sources jsonb,p_url text
) returns text
language plpgsql security invoker set search_path = ''
as $$
declare existing record; result text;
begin
 if current_user <> 'service_role' then raise exception 'unauthorized'; end if;
 if p_id !~ '^gh-[a-f0-9]{24}$'
    or p_path !~ '^(coordination|wiki|encyclopedie)/[A-Za-z0-9_./-]+[.]md$'
    or p_path like '%../%'
    or p_blob_sha !~ '^[0-9a-f]{40}$'
    or p_content_sha !~ '^[0-9a-f]{64}$'
    or coalesce(length(p_title),0) not between 6 and 300
    or coalesce(length(p_atelier),0) not between 2 and 100
    or coalesce(length(p_markdown),0) not between 100 and 250000
    or encode(sha256(convert_to(p_markdown,'UTF8')),'hex') <> p_content_sha
    or jsonb_typeof(p_sources) is distinct from 'array'
    or p_url <> ('https://github.com/zoutiFrutti/Interstice/blob/main/' || p_path)
 then raise exception 'invalid_document'; end if;
 insert into wiki_ingest_private.github_document_drafts(
    document_id,source_path,github_blob_sha,content_sha256,source_url,title,atelier,markdown,sources)
 values(p_id,p_path,p_blob_sha,p_content_sha,p_url,p_title,p_atelier,p_markdown,p_sources)
 on conflict(document_id) do nothing;
 if found then result:='CREATED';
 else
    select source_path,content_sha256,github_blob_sha,title,atelier,sources,source_url
      into existing from wiki_ingest_private.github_document_drafts where document_id=p_id;
    if existing.source_path <> p_path then raise exception 'identity_collision'; end if;
    if existing.content_sha256 = p_content_sha and existing.title = p_title
       and existing.atelier = p_atelier and existing.sources = p_sources
       and existing.source_url = p_url and existing.github_blob_sha = p_blob_sha then
       result:='UNCHANGED';
    else
       update wiki_ingest_private.github_document_drafts
         set github_blob_sha=p_blob_sha,content_sha256=p_content_sha,
             source_url=p_url,title=p_title,atelier=p_atelier,markdown=p_markdown,
             sources=p_sources,updated_at=now()
       where document_id=p_id;
       result:='UPDATED_REVIEW_REQUIRED';
    end if;
 end if;
 insert into wiki_ingest_private.github_document_revisions(
    document_id,github_blob_sha,content_sha256,markdown)
 values(p_id,p_blob_sha,p_content_sha,p_markdown)
 on conflict(document_id,content_sha256) do nothing;
 return result;
end $$;
revoke all on function public.stage_github_wiki_document(text,text,text,text,text,text,text,jsonb,text) from PUBLIC, anon, authenticated;
grant execute on function public.stage_github_wiki_document(text,text,text,text,text,text,text,jsonb,text) to service_role;
notify pgrst,'reload schema';
