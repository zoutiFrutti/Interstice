#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { createTaskEngine, ciAssessment } = require("./task-engine.cjs");
const root = fs.mkdtempSync(path.join(os.tmpdir(), "konton-control-tests-"));
const store = path.join(root, "private", "tasks.json");
const REPO = "zoutiFrutti/Interstice";
const SHA = "a".repeat(40);
const base = "/repos/zoutiFrutti/Interstice";
const calls = [];
const pr = { number: 39, state: "open", draft: true, title: "Prototype", head: { sha: SHA, ref: "feature" }, base: { ref: "main" } };
const response = {
  workflow_runs: [
    { id: 123, name: "Node checks", head_sha: SHA, status: "completed", conclusion: "success" },
    { id: 124, name: "Security checks", head_sha: SHA, status: "in_progress", conclusion: null }
  ],
  total_count: 2
};
const githubGet = async key => {
  calls.push(key);
  if (key === base + "/pulls/39") return pr;
  if (key === base + "/actions/runs?head_sha=" + SHA + "&per_page=30") return response;
  throw new Error("Unexpected GitHub endpoint: " + key);
};
const options = { allowed: [REPO], githubGet, stateFile: store };
async function main() {
  const tasks = createTaskEngine(options);
  assert.throws(() => tasks.create({ repo: "unapproved/private", prNumber: 39 }), /liste autorisée/);
  assert.throws(() => tasks.create({ repo: REPO, prNumber: "39" }), /invalide/);
  const item = tasks.create({ repo: REPO, prNumber: 39 });
  assert.equal(item.scope, "collectif");
  assert.equal(item.status, "queued");
  assert.ok(fs.existsSync(store));
  assert.throws(() => tasks.review(item.id, "acknowledge"), /Rapport non disponible/);
  const result = await tasks.run(item.id);
  assert.equal(result.status, "awaiting_review");
  assert.equal(result.report.headSha, SHA);
  assert.equal(result.report.runCountExamined, 2);
  assert.match(result.report.assessment, /en cours/);
  assert.equal(calls.length, 2);
  assert.equal(calls[1], base + "/actions/runs?head_sha=" + SHA + "&per_page=30");
  assert.equal(tasks.events(item.id).length, 3);
  await assert.rejects(tasks.run(item.id), /Seule une tâche/);
  const ack = tasks.review(item.id, "acknowledge");
  assert.equal(ack.status, "acknowledged");
  assert.equal(tasks.events(item.id).length, 4);
  assert.throws(() => tasks.review(item.id, "acknowledge"), /Rapport non disponible/);
  const reloaded = createTaskEngine(options);
  assert.equal(reloaded.list()[0].status, "acknowledged");
  assert.equal(reloaded.list()[0].report.headSha, SHA);

  const failed = createTaskEngine({
    allowed: [REPO], stateFile: store,
    githubGet: async key => {
      if (key.endsWith("/pulls/40")) return { ...pr, number: 40 };
      return { total_count: 1, workflow_runs: [{ id: 1, head_sha: "b".repeat(40), status: "completed", conclusion: "success" }] };
    }
  });
  const bad = failed.create({ repo: REPO, prNumber: 40 });
  const rejection = await failed.run(bad.id);
  assert.equal(rejection.status, "failed");
  assert.match(rejection.error, /SHA non concordants/);
  assert.equal(rejection.report, null);
  assert.throws(() => failed.review(bad.id, "acknowledge"), /Rapport non disponible/);

  const noRun = createTaskEngine({
    allowed: [REPO], stateFile: store,
    githubGet: async key => key.endsWith("/pulls/41") ?
      { ...pr, number: 41 } : { workflow_runs: [], total_count: 0 }
  });
  const empty = noRun.create({ repo: REPO, prNumber: 41 });
  const emptyResult = await noRun.run(empty.id);
  assert.equal(emptyResult.status, "awaiting_review");
  assert.match(emptyResult.report.assessment, /non établie/);

  assert.match(ciAssessment([{ status: "completed", conclusion: "success" }], 2), /incomplète/);
  assert.match(ciAssessment([{ status: "completed", conclusion: "failure" }], 1), /pas en succès/);

  const raw = JSON.parse(fs.readFileSync(store, "utf8"));
  raw.tasks[0].status = "running";
  fs.writeFileSync(store, JSON.stringify(raw));
  const recovered = createTaskEngine(options);
  assert.equal(recovered.list()[0].status, "failed");
  assert.match(recovered.list()[0].error, /redémarrage/);
  assert.equal(recovered.events(item.id).slice(-1)[0].action, "interrupted");
  process.stdout.write("KONTON Control V0.3 : tâche réelle, SHA strict, audit, erreurs, reprise et persistance OK\n");
}
main().catch(error => { process.stderr.write(String(error.stack || error) + "\n"); process.exitCode = 1; })
  .finally(() => fs.rmSync(root, { recursive: true, force: true }));
