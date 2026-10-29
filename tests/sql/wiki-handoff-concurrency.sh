#!/usr/bin/env bash
set -euo pipefail
# Run only against disposable PostgreSQL CI database.
if [[ "${PGDATABASE:-}" != "wiki_test" ]]; then echo "Refusing non-test database" >&2; exit 2; fi
id="fn069-parallel-test"
sql="set role service_role; select wiki_ingest_private.ingest_document('$id','zoutiFrutti/Interstice','coordination/test.md',repeat('a',40),repeat('b',64),'Le Penseur','[]'::jsonb);"
psql -v ON_ERROR_STOP=1 -Atqc "$sql" > /tmp/wiki-ingest-1.out &
p1=$!
psql -v ON_ERROR_STOP=1 -Atqc "$sql" > /tmp/wiki-ingest-2.out &
p2=$!
wait "$p1"
wait "$p2"
grep -qx 'CREATED' /tmp/wiki-ingest-1.out && grep -qx 'UNCHANGED' /tmp/wiki-ingest-2.out || {
  grep -qx 'UNCHANGED' /tmp/wiki-ingest-1.out && grep -qx 'CREATED' /tmp/wiki-ingest-2.out
}
[[ "$(psql -Atqc "select count(*) from wiki_ingest_private.document_handoffs where document_id='$id'")" == "1" ]]
[[ "$(psql -Atqc "select count(*) from wiki_ingest_private.handoff_events where document_id='$id'")" == "1" ]]
[[ "$(psql -Atqc "select count(*) from wiki_ingest_private.document_handoffs where document_id='$id' and stage='awaiting_human_review' and not editorial_approval and not published")" == "1" ]]
psql -v ON_ERROR_STOP=1 -c "delete from wiki_ingest_private.handoff_events where document_id='$id'; delete from wiki_ingest_private.document_handoffs where document_id='$id';" > /dev/null
echo "Concurrent duplicate test passed"
