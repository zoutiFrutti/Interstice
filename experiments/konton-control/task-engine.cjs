"use strict";

/**
 * KONTON Control V0.3 - LOCAL task engine, NO external write operations.
 * The only supported action checks a single PR and GitHub Actions runs for its exact SHA.
 * A human acknowledges the local report, NOT the actual GitHub pull request.
 */
const fs = require("node:fs");
const path = require("node:path");
const { randomUUID } = require("node:crypto");

const validRepo = value => typeof value === "string" &&
  /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(value) && !value.includes("..");
const validId = value => typeof value === "string" && /^[0-9a-f-]{36}$/.test(value);
function makeError(message, status = 400) {
  const error = new Error(message);
  error.status = status;
  return error;
}
function scopeForRepo(repo) {
  return repo === "zoutiFrutti/Interstice" ? "collectif" : "personnel";
}
function ciAssessment(runs, total) {
  if (!runs.length) return "Aucune exécution GitHub Actions trouvée pour ce SHA. Vérification non établie.";
  if (runs.some(r => r.status !== "completed")) return "Exécutions en cours ou en attente. Vérification non achevée.";
  if (runs.some(r => r.conclusion !== "success")) return "Au moins une exécution visible n'est pas en succès.";
  if (total > runs.length) return "Exécutions visibles réussies, liste incomplète : verdict global impossible.";
  return "Toutes les exécutions GitHub Actions retournées pour ce SHA sont en succès. Cela ne prouve pas que tous les contrôles requis ont été exécutés.";
}
function createTaskEngine(options) {
  const allowed = [...new Set(options.allowed || [])].filter(validRepo);
  const githubGet = options.githubGet;
  if (typeof githubGet !== "function") throw new Error("githubGet doit être une fonction.");
  const stateFile = options.stateFile || path.join(__dirname, "data", "tasks.json");
  const now = options.now || (() => new Date().toISOString());
  let state = { version: 1, tasks: [], events: [] };
  let busy = false;

  if (fs.existsSync(stateFile)) {
    const loaded = JSON.parse(fs.readFileSync(stateFile, "utf8"));
    if (loaded.version !== 1 || !Array.isArray(loaded.tasks) || !Array.isArray(loaded.events)) {
      throw new Error("État de tâches local incompatible. Aucun écrasement automatique.");
    }
    state = loaded;
  }
  function persist() {
    fs.mkdirSync(path.dirname(stateFile), { recursive: true, mode: 0o700 });
    const temp = stateFile + "." + process.pid + ".tmp";
    fs.writeFileSync(temp, JSON.stringify(state, null, 2) + "\n", { mode: 0o600, flag: "w" });
    fs.renameSync(temp, stateFile);
  }
  function record(task, action, detail) {
    const entry = { at: now(), taskId: task.id, action, detail: String(detail || "").slice(0, 200) };
    state.events.push(entry);
    if (state.events.length > 1000) state.events.splice(0, state.events.length - 1000);
    task.updatedAt = entry.at;
  }
  // An interrupted operation must NEVER be misreported as successful after restart.
  let recovered = false;
  for (const task of state.tasks) {
    if (task.status === "running") {
      task.status = "failed";
      task.error = "Interrompue par un redémarrage local. Nouvelle vérification nécessaire.";
      record(task, "interrupted", task.error);
      recovered = true;
    }
  }
  if (recovered) persist();

  function list(scope) {
    if (scope && scope !== "all" && scope !== "personnel" && scope !== "collectif") {
      throw makeError("Périmètre inconnu.");
    }
    return state.tasks.filter(task => !scope || scope === "all" || task.scope === scope)
      .slice().reverse().map(task => JSON.parse(JSON.stringify(task)));
  }
  function events(id) {
    if (!validId(id) || !state.tasks.some(task => task.id === id)) throw makeError("Tâche inconnue.", 404);
    return state.events.filter(event => event.taskId === id).map(event => ({ ...event }));
  }
  function find(id) {
    if (!validId(id)) throw makeError("Identifiant invalide.", 404);
    const task = state.tasks.find(value => value.id === id);
    if (!task) throw makeError("Tâche introuvable.", 404);
    return task;
  }
  function create(input) {
    if (!input || typeof input !== "object" || Array.isArray(input)) throw makeError("Requête invalide.");
    const repo = input.repo;
    const prNumber = input.prNumber;
    if (!allowed.includes(repo)) throw makeError("Dépôt absent de la liste autorisée.", 403);
    if (!Number.isSafeInteger(prNumber) || prNumber < 1 || prNumber > 99999999) {
      throw makeError("Numéro de PR invalide.");
    }
    if (state.tasks.length >= 100) throw makeError("Limite locale de 100 tâches atteinte. Archivage manuel requis.", 409);
    const task = {
      id: randomUUID(), kind: "github-pr-check", repo, prNumber,
      scope: scopeForRepo(repo), status: "queued",
      createdAt: now(), updatedAt: now(), report: null, error: null, reviewedAt: null
    };
    state.tasks.push(task);
    record(task, "created", "Nouvelle tâche de lecture GitHub, aucune modification distante.");
    persist();
    return { ...task };
  }
  async function run(id) {
    const task = find(id);
    if (task.status !== "queued") throw makeError("Seule une tâche en attente peut être exécutée.", 409);
    if (busy) throw makeError("Une autre lecture est déjà en cours.", 409);
    busy = true;
    task.status = "running";
    record(task, "started", "Contrôle GitHub par requêtes GET.");
    persist();
    try {
      const base = "/repos/" + task.repo.split("/").map(encodeURIComponent).join("/");
      const data = await githubGet(base + "/pulls/" + task.prNumber);
      const sha = data && data.head && data.head.sha;
      if (!data || data.number !== task.prNumber || typeof sha !== "string" ||
          !/^[0-9a-f]{40}$/i.test(sha)) {
        throw new Error("La PR renvoie une référence incomplète ou invalide.");
      }
      const workflows = await githubGet(base + "/actions/runs?head_sha=" + encodeURIComponent(sha) + "&per_page=30");
      if (!workflows || !Array.isArray(workflows.workflow_runs) || !Number.isSafeInteger(workflows.total_count)) {
        throw new Error("Réponse CI invalide : vérification non établie.");
      }
      // Confirm exact SHA even when GitHub filters are used. An absent SHA cannot be assumed.
      const relevant = workflows.workflow_runs.filter(item => item && item.head_sha === sha);
      if (relevant.length !== workflows.workflow_runs.length) {
        throw new Error("Réponse CI contenant des SHA non concordants : vérification non établie.");
      }
      task.report = {
        retrievedAt: now(),
        repository: task.repo,
        prNumber: task.prNumber,
        prUrl: "https://github.com/" + task.repo + "/pull/" + task.prNumber,
        title: String(data.title || "").slice(0, 300),
        draft: Boolean(data.draft),
        prState: String(data.state || "inconnu"),
        headSha: sha,
        headBranch: String(data.head.ref || "").slice(0, 150),
        baseBranch: String(data.base && data.base.ref || "").slice(0, 150),
        runCountReported: workflows.total_count,
        runCountExamined: relevant.length,
        runs: relevant.map(item => ({
          id: Number(item.id),
          name: String(item.name || "Workflow sans nom").slice(0, 160),
          status: String(item.status || "inconnu"),
          conclusion: item.conclusion || null,
          headSha: sha,
          url: Number.isSafeInteger(Number(item.id)) ?
            "https://github.com/" + task.repo + "/actions/runs/" + item.id : null
        })),
        assessment: ciAssessment(relevant, workflows.total_count),
        disclaimer: "Contrôle documentaire local d'un SHA ; ne valide ni la qualité du code, ni la fusion, ni la publication."
      };
      task.status = "awaiting_review";
      record(task, "result", "Rapport de lecture prêt. Validation humaine du rapport uniquement.");
      persist();
      return JSON.parse(JSON.stringify(task));
    } catch (error) {
      task.status = "failed";
      task.error = "Lecture GitHub impossible : " + String(error && error.message || error).slice(0, 180);
      record(task, "failed", task.error);
      persist();
      return JSON.parse(JSON.stringify(task));
    } finally {
      busy = false;
    }
  }
  function review(id, decision) {
    const task = find(id);
    if (task.status !== "awaiting_review") throw makeError("Rapport non disponible pour relecture.", 409);
    if (decision !== "acknowledge" && decision !== "needs_work") throw makeError("Décision invalide.");
    task.status = decision === "acknowledge" ? "acknowledged" : "needs_work";
    task.reviewedAt = now();
    record(task, "reviewed", decision === "acknowledge" ?
      "Rapport lu et accusé réception. Aucune approbation GitHub." :
      "Rapport à approfondir. Aucune action distante.");
    persist();
    return JSON.parse(JSON.stringify(task));
  }
  return { list, events, create, run, review };
}
module.exports = { createTaskEngine, ciAssessment, scopeForRepo, validRepo };
