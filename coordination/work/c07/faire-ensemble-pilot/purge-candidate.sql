-- CANDIDAT C08, NON APPLIQUE A SUPABASE. Preparation et tests synthetiques seulement.
-- Aucun cron, aucune execution de purge dans ce fichier.
-- D-WORK-C11-PURGE-01 : preparation avec submitted autorisee ; aucune execution distante autorisee.
begin;
alter table public.proposals add column if not exists pilot_cohort text default null;

create schema if not exists interstice_fe_pilot;
revoke all on schema interstice_fe_pilot from public, anon, authenticated;
grant usage on schema interstice_fe_pilot to service_role;

create or replace function interstice_fe_pilot.guard_cohort()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if tg_op = 'INSERT' then
    if new.pilot_cohort is not null then
      if current_user not in ('postgres', 'service_role') then
        raise exception 'Only the maintenance service may mark a new pilot proposal' using errcode = '42501';
      end if;
      if new.pilot_cohort <> 'c08-fe-proposals-v1' then
        raise exception 'Unknown pilot cohort';
      end if;
      -- Date serveur : aucune date fournie par le visiteur ne vieillit le depot.
      new.created_at := statement_timestamp();
    end if;
  else
    if new.pilot_cohort is distinct from old.pilot_cohort then
      raise exception 'Pilot cohort is immutable; no legacy backfill';
    end if;
    if old.pilot_cohort is not null and new.created_at is distinct from old.created_at then
      raise exception 'Pilot creation timestamp is immutable';
    end if;
  end if;
  return new;
end;
$$;
revoke all on function interstice_fe_pilot.guard_cohort() from public, anon, authenticated;
drop trigger if exists proposal_pilot_cohort_guard on public.proposals;
create trigger proposal_pilot_cohort_guard before insert or update on public.proposals
for each row execute function interstice_fe_pilot.guard_cohort();

create index if not exists proposals_pilot_pending_expiry_idx
on public.proposals(created_at, id)
where pilot_cohort = 'c08-fe-proposals-v1' and status = 'pending';

create or replace function interstice_fe_pilot.purge_pending(
  p_dry_run boolean default true,
  p_limit integer default 100,
  p_allow_submission_event_delete boolean default false
) returns table(planned_count integer, submitted_events integer, deleted_count integer, simulated boolean)
language plpgsql security invoker set search_path = '' set timezone = 'UTC' as $$
declare
  v_ids uuid[];
  v_events integer;
  v_deleted integer := 0;
begin
  if current_user not in ('postgres', 'service_role') then
    raise exception 'Maintenance role required' using errcode = '42501';
  end if;
  if p_dry_run is null or p_limit is null or p_limit < 1 or p_limit > 100 then
    raise exception 'Explicit mode and batch size 1..100 required';
  end if;
  -- Le schema a pu evoluer depuis l'audit : refuser toute nouvelle cascade/effet DELETE.
  if exists (
    select 1 from pg_catalog.pg_constraint c
    where c.contype = 'f'
      and c.confrelid in ('public.proposals'::regclass,'public.moderation_events'::regclass)
      and not (c.confrelid = 'public.proposals'::regclass
        and c.conrelid = 'public.moderation_events'::regclass and c.confdeltype = 'c'
        and c.conkey = array[(select a.attnum from pg_catalog.pg_attribute a
          where a.attrelid = c.conrelid and a.attname = 'proposal_id')]
        and c.confkey = array[(select a.attnum from pg_catalog.pg_attribute a
          where a.attrelid = c.confrelid and a.attname = 'id')])
  ) or exists (
    select 1 from pg_catalog.pg_trigger t
    where t.tgrelid in ('public.proposals'::regclass,'public.moderation_events'::regclass)
      and not t.tgisinternal and (t.tgtype::integer & 8) <> 0
  ) or exists (
    select 1 from pg_catalog.pg_rewrite r
    where r.ev_class in ('public.proposals'::regclass,'public.moderation_events'::regclass)
      and r.rulename <> '_RETURN'
  ) then
    raise exception 'Deletion dependencies changed; review schema before purge';
  end if;
  select coalesce(array_agg(q.id), array[]::uuid[]) into v_ids from (
    select p.id from public.proposals p
    where p.pilot_cohort = 'c08-fe-proposals-v1'
      and p.status = 'pending' and p.moderated_at is null and p.published_at is null
      and p.created_at < transaction_timestamp() - interval '720 hours'
      -- Toute trace de traitement conserve l'objet, meme si son statut est redevenu pending.
      and not exists (select 1 from public.moderation_events e
                      where e.proposal_id = p.id and e.event_type is distinct from 'submitted')
    order by p.created_at, p.id
    limit p_limit for update of p skip locked
  ) q;
  select count(*)::integer into v_events from public.moderation_events e
    where e.proposal_id = any(v_ids);
  if not p_dry_run then
    -- ON DELETE CASCADE existe deja : jamais d'effacement silencieux de son journal initial.
    if v_events > 0 and p_allow_submission_event_delete is distinct from true then
      raise exception 'Initial submission audit events would cascade; separate decision required';
    end if;
    -- Nouvelle verification au moment du DELETE : ne pas reutiliser aveuglement le plan.
    delete from public.proposals p where p.id = any(v_ids)
      and p.pilot_cohort = 'c08-fe-proposals-v1'
      and p.status = 'pending' and p.moderated_at is null and p.published_at is null
      and p.created_at < transaction_timestamp() - interval '720 hours'
      and not exists (select 1 from public.moderation_events e
        where e.proposal_id = p.id and e.event_type is distinct from 'submitted');
    get diagnostics v_deleted = row_count;
  end if;
  -- Aucune ligne de message, identite ou liste d'IDs dans le compte rendu.
  return query select cardinality(v_ids), v_events, v_deleted, p_dry_run;
end;
$$;
revoke all on function interstice_fe_pilot.purge_pending(boolean,integer,boolean)
from public, anon, authenticated;
grant execute on function interstice_fe_pilot.purge_pending(boolean,integer,boolean)
to service_role;
commit;
