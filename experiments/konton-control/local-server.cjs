#!/usr/bin/env node
"use strict";

/**
 * KONTON Control local GitHub read-only bridge.
 *
 * node local-server.cjs
 * KONTON_CONTROL_REPOS="zoutiFrutti/Interstice,owner/private-repo" GH_TOKEN=... node local-server.cjs
 *
 * Minimal Node core server, loopback-only, never writes to GitHub.
 * Environment token stays server-side. No third-party dependencies.
 */
const http = require("node:http");
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");
const { createTaskEngine } = require("./task-engine.cjs");
const { createAiEngine } = require("./ai-engine.cjs");
const { configured: ollamaConfigured, createOllamaProvider } = require("./ollama-provider.cjs");
const { resolveScope, ensureScopeOnly } = require("./scope-policy.cjs");

const HOST = "127.0.0.1";
const PORT = Number(process.env.KONTON_CONTROL_PORT || 8765);
const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || "";
const DEFAULT_REPO = "zoutiFrutti/Interstice";
const REPO_PATTERN = /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/;
const safeRepo = value => typeof value === "string" && REPO_PATTERN.test(value) && !value.includes("..");
const { scope: SCOPE, allowed: ALLOWED } = resolveScope(process.env);
const CACHE_MS = 90_000;
const cache = new Map();
const assets = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["index.html", "text/html; charset=utf-8"]],
  ["/app.js", ["app.js", "text/javascript; charset=utf-8"]],
  ["/github-status.js", ["github-status.js", "text/javascript; charset=utf-8"]],
  ["/task-board.js", ["task-board.js", "text/javascript; charset=utf-8"]],
  ["/ai-board.js", ["ai-board.js", "text/javascript; charset=utf-8"]],
  ["/pwa.js", ["pwa.js", "text/javascript; charset=utf-8"]],
  ["/navigation.js", ["navigation.js", "text/javascript; charset=utf-8"]],
  ["/sw.js", ["sw.js", "text/javascript; charset=utf-8"]],
  ["/manifest.webmanifest", ["manifest.webmanifest", "application/manifest+json"]],
  ["/icons/konton-192.png", ["icons/konton-192.png", "image/png"]],
  ["/icons/konton-512.png", ["icons/konton-512.png", "image/png"]],
  ["/styles.css", ["styles.css", "text/css; charset=utf-8"]]
]);

const cleanError = error => {
  if (error && typeof error.message === "string") return error.message.slice(0, 180);
  return "Lecture distante indisponible.";
};
function getJson(remotePath) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Accept": "application/vnd.github+json",
      "User-Agent": "KONTON-Control-ReadOnly",
      "X-GitHub-Api-Version": "2022-11-28"
    };
    if (TOKEN) headers.Authorization = "Bearer " + TOKEN;
    const req = https.get({
      hostname: "api.github.com", port: 443, path: remotePath,
      protocol: "https:", method: "GET", headers
    }, response => {
      const pieces = [];
      let length = 0;
      response.on("data", chunk => {
        length += chunk.length;
        if (length > 2_000_000) {
          response.destroy(new Error("Réponse GitHub trop volumineuse."));
          return;
        }
        pieces.push(chunk);
      });
      response.on("end", () => {
        if (response.statusCode !== 200) {
          return reject(new Error("GitHub HTTP " + response.statusCode +
            (response.statusCode === 403 || response.statusCode === 429 ? " (limite ou accès refusé)" : "")));
        }
        try { resolve(JSON.parse(Buffer.concat(pieces).toString("utf8"))); }
        catch (_error) { reject(new Error("Réponse GitHub non JSON.")); }
      });
      response.on("error", reject);
    });
    req.setTimeout(10_000, () => req.destroy(new Error("Délai GitHub dépassé.")));
    req.on("error", reject);
  });
}
const engine = createTaskEngine({
  allowed: ALLOWED,
  githubGet: getJson,
  stateFile: process.env.KONTON_CONTROL_STATE_FILE || path.join(__dirname, "data", SCOPE, "tasks.json")
});
const aiEngine = createAiEngine({
  sourceTask: id => engine.list().find(task => task.id === id),
  provider: ollamaConfigured() ? createOllamaProvider() : null,
  stateFile: process.env.KONTON_CONTROL_AI_STATE_FILE || path.join(__dirname, "data", SCOPE, "ai-tasks.json")
});
ensureScopeOnly(engine.list(), SCOPE);
ensureScopeOnly(aiEngine.list(), SCOPE);
async function repoStatus(repo) {
  if (!ALLOWED.includes(repo)) throw new Error("Dépôt non autorisé.");
  const previous = cache.get(repo);
  if (previous && Date.now() - previous.when < CACHE_MS) return previous.data;
  const base = "/repos/" + repo.split("/").map(encodeURIComponent).join("/");
  const responses = await Promise.allSettled([
    getJson(base),
    getJson(base + "/pulls?state=open&per_page=10"),
    getJson(base + "/actions/runs?per_page=10")
  ]);
  if (responses[0].status !== "fulfilled") throw responses[0].reason;
  const meta = responses[0].value;
  const pullData = responses[1].status === "fulfilled" && Array.isArray(responses[1].value) ?
    responses[1].value : null;
  const runData = responses[2].status === "fulfilled" && Array.isArray(responses[2].value.workflow_runs) ?
    responses[2].value.workflow_runs : null;

  const result = {
    repo: repo,
    visibility: meta.private ? "private" : "public",
    defaultBranch: typeof meta.default_branch === "string" ? meta.default_branch : null,
    pushedAt: meta.pushed_at || null,
    prs: pullData && pullData.map(item => ({
      number: item.number, title: item.title, draft: Boolean(item.draft), updatedAt: item.updated_at
    })),
    prError: pullData === null ?
      (responses[1].status === "rejected" ? cleanError(responses[1].reason) : "Réponse PR invalide") : null,
    runs: runData && runData.map(item => ({
      id: item.id, name: item.name, branch: item.head_branch,
      status: item.status, conclusion: item.conclusion, createdAt: item.created_at
    })),
    runError: runData === null ?
      (responses[2].status === "rejected" ? cleanError(responses[2].reason) : "Réponse CI invalide") : null,
    fetchedAt: new Date().toISOString()
  };
  cache.set(repo, { when: Date.now(), data: result });
  return result;
}
function headers(type) {
  return {
    "Content-Type": type,
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Content-Security-Policy": "default-src 'none'; script-src 'self'; style-src 'self'; connect-src 'self' https://api.github.com; img-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'"
  };
}
function send(res, status, data) {
  res.writeHead(status, headers("application/json; charset=utf-8"));
  res.end(JSON.stringify(data));
}
function permittedRequest(req) {
  // DNS rebinding protection. Do not allow proxying the local API from another web origin.
  const host = req.headers.host;
  const goodHosts = new Set([HOST + ":" + PORT, "localhost:" + PORT]);
  if (!goodHosts.has(host)) return false;
  const origin = req.headers.origin;
  if (origin && !goodHosts.has(origin.replace(/^http:\/\//, ""))) return false;
  const site = req.headers["sec-fetch-site"];
  if (site && site !== "same-origin" && site !== "none") return false;
  return true;
}
function readBody(req, limit = 4096) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const parts = [];
    req.on("data", chunk => {
      size += chunk.length;
      if (size > limit) {
        const error = new Error("Corps de requête trop volumineux.");
        error.status = 413;
        reject(error);
        req.destroy();
        return;
      }
      parts.push(chunk);
    });
    req.on("end", () => {
      try {
        const value = JSON.parse(Buffer.concat(parts).toString("utf8"));
        if (!value || typeof value !== "object" || Array.isArray(value)) {
          throw new Error("JSON objet requis.");
        }
        resolve(value);
      } catch (_error) {
        const error = new Error("Corps JSON invalide.");
        error.status = 400;
        reject(error);
      }
    });
    req.on("error", reject);
  });
}
async function handle(req, res) {
  if (!permittedRequest(req)) return send(res, 403, { error: "Origine locale interdite." });
  if (req.method !== "GET" && req.method !== "POST") {
    return send(res, 405, { error: "Méthode interdite." });
  }
  if (req.method === "POST" &&
      (req.headers["x-konton-action"] !== "local" ||
       !String(req.headers["content-type"] || "").startsWith("application/json"))) {
    return send(res, 403, { error: "Action locale non autorisée ou format incorrect." });
  }
  let url;
  try { url = new URL(req.url, "http://" + HOST + ":" + PORT); }
  catch (_error) { return send(res, 400, { error: "URL invalide." }); }
  // Only local reports are mutated. GitHub remains GET-only.
  if (url.pathname === "/api/ai/capabilities" && req.method === "GET") {
    return send(res, 200, aiEngine.capabilities());
  }
  if (url.pathname === "/api/ai/readiness" && req.method === "GET") {
    return send(res, 200, await aiEngine.readiness());
  }
  if (url.pathname === "/api/ai/tasks" && req.method === "GET") {
    return send(res, 200, { tasks: aiEngine.list() });
  }
  if (url.pathname === "/api/ai/tasks" && req.method === "POST") {
    try { return send(res, 201, { task: aiEngine.create(await readBody(req)) }); }
    catch (error) { return send(res, error.status || 400, { error: cleanError(error) }); }
  }
  const aiRoute = /^\/api\/ai\/tasks\/([a-f0-9-]{36})\/(run|cancel|review|events)$/.exec(url.pathname);
  if (aiRoute) {
    const [, id, action] = aiRoute;
    if (action === "events" && req.method === "GET") {
      try { return send(res, 200, { events: aiEngine.events(id) }); }
      catch (error) { return send(res, error.status || 400, { error: cleanError(error) }); }
    }
    if (req.method !== "POST") return send(res, 405, { error: "Action locale POST uniquement." });
    try {
      const data = await readBody(req);
      if (action === "run") return send(res, 200, { task: await aiEngine.run(id) });
      if (action === "cancel") return send(res, 200, { task: aiEngine.cancel(id) });
      if (action === "review") return send(res, 200, { task: aiEngine.review(id, data.decision) });
    } catch (error) { return send(res, error.status || 400, { error: cleanError(error) }); }
  }
  // Actions here mutate local task records ONLY; every GitHub operation remains GET.
  if (url.pathname === "/api/tasks" && req.method === "GET") {
    try { return send(res, 200, { tasks: engine.list(url.searchParams.get("scope") || "all") }); }
    catch (error) { return send(res, error.status || 400, { error: cleanError(error) }); }
  }
  if (url.pathname === "/api/tasks" && req.method === "POST") {
    try { return send(res, 201, { task: engine.create(await readBody(req)) }); }
    catch (error) { return send(res, error.status || 400, { error: cleanError(error) }); }
  }
  const taskRoute = /^\/api\/tasks\/([a-f0-9-]{36})\/(run|review|events)$/.exec(url.pathname);
  if (taskRoute) {
    const [, id, action] = taskRoute;
    if (action === "events" && req.method === "GET") {
      try { return send(res, 200, { events: engine.events(id) }); }
      catch (error) { return send(res, error.status || 404, { error: cleanError(error) }); }
    }
    if (action === "run" && req.method === "POST") {
      try { await readBody(req); return send(res, 200, { task: await engine.run(id) }); }
      catch (error) { return send(res, error.status || 400, { error: cleanError(error) }); }
    }
    if (action === "review" && req.method === "POST") {
      try {
        const data = await readBody(req);
        return send(res, 200, { task: engine.review(id, data.decision) });
      } catch (error) { return send(res, error.status || 400, { error: cleanError(error) }); }
    }
    return send(res, 405, { error: "Méthode interdite pour cette action." });
  }
  if (req.method !== "GET") return send(res, 405, { error: "Route réservée à GET." });
  const asset = assets.get(url.pathname);
  if (asset) {
    const fullPath = path.join(__dirname, asset[0]);
    fs.readFile(fullPath, (error, file) => {
      if (error) return send(res, 500, { error: "Fichier local indisponible." });
      res.writeHead(200, headers(asset[1]));
      res.end(file);
    });
    return;
  }
  if (url.pathname === "/api/github/repos") {
    return send(res, 200, { mode: "read-only", scope: SCOPE, repositories: ALLOWED });
  }
  if (url.pathname === "/api/github/status") {
    const repo = url.searchParams.get("repo");
    if (!ALLOWED.includes(repo)) return send(res, 403, { error: "Dépôt non autorisé." });
    try { return send(res, 200, await repoStatus(repo)); }
    catch (error) { return send(res, 502, { error: cleanError(error) }); }
  }
  return send(res, 404, { error: "Route absente." });
}
function start() {
  if (!Number.isSafeInteger(PORT) || PORT < 1024 || PORT > 65535) {
    throw new Error("KONTON_CONTROL_PORT doit être compris entre 1024 et 65535.");
  }
  http.createServer((req, res) => {
    Promise.resolve(handle(req, res)).catch(() => {
      if (!res.headersSent) send(res, 500, { error: "Erreur locale." });
      else res.end();
    });
  }).listen(PORT, HOST, () => {
    process.stdout.write("KONTON Control · lecture GitHub et tâches LOCALES : http://" + HOST + ":" + PORT + "/\n");
    process.stdout.write("Périmètre : " + SCOPE + " · dépôts configurés : " + ALLOWED.length + " · jeton serveur : " + (TOKEN ? "présent" : "absent") + "\n");
  });
}
if (require.main === module) start();
module.exports = { safeRepo, permittedRequest, assets, repoStatus, start, handle, engine, aiEngine, SCOPE };
