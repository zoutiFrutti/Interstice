"use strict";

// Prototype invariant: one local process == one data space.
// This is NOT multi-user authentication; the machine's operator remains trusted.
const VALID = /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/;
function classifyRepo(repo) {
  // Fixed mapping of the user's EXISTING repositories, not a heuristic for unknown collectives.
  if (repo === "zoutiFrutti/Interstice") return "collectif";
  if (/^zoutiFrutti\/[a-zA-Z0-9_.-]+$/.test(repo) && !repo.includes("..")) return "personnel";
  return null;
}
function resolveScope(env = process.env) {
  const scope = env.KONTON_CONTROL_SCOPE || "collectif";
  if (scope !== "collectif" && scope !== "personnel") {
    throw new Error("KONTON_CONTROL_SCOPE doit valoir collectif ou personnel.");
  }
  const raw = env.KONTON_CONTROL_REPOS === undefined
    ? (scope === "collectif" ? "zoutiFrutti/Interstice" : "")
    : env.KONTON_CONTROL_REPOS;
  const repos = raw.split(",").map(value => value.trim());
  if (!repos.length || repos.some(value => !VALID.test(value) || value.includes(".."))) {
    throw new Error("Liste de dépôts invalide ou vide. Configurer KONTON_CONTROL_REPOS.");
  }
  const allowed = [...new Set(repos)];
  if (allowed.length > 20) throw new Error("Maximum 20 dépôts par instance.");
  if (allowed.some(repo => classifyRepo(repo) !== scope)) {
    throw new Error("Mélange de dépôts personnels et collectifs interdit dans une instance.");
  }
  return { scope, allowed };
}
function ensureScopeOnly(records, scope) {
  if (!Array.isArray(records) || records.some(task => !task || task.scope !== scope)) {
    throw new Error("Historique local d'un autre périmètre détecté : démarrage refusé.");
  }
}
module.exports = { classifyRepo, resolveScope, ensureScopeOnly };
