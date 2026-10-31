"use strict";

/* User interface for REAL local LLM calls; not connected to the mock agent console. */
(function () {
  const $ = id => document.getElementById(id);
  const form = $("ai-create-form");
  if (!form) return;
  const selector = $("ai-source");
  const create = $("ai-create");
  const feedback = $("ai-feedback");
  const mode = $("ai-mode");
  const list = $("ai-tasks");
  let enabled = false;
  let modelReady = false;
  let selectedReports = [];
  let running = false;
  const active = new Set();
  const make = (tag, cls, text) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text !== undefined) el.textContent = String(text);
    return el;
  };
  const date = value => value ? new Date(value).toLocaleString("fr-FR") : "Inconnue";
  async function api(url, method = "GET", body) {
    const options = { method, cache: "no-store", credentials: "same-origin" };
    if (method === "POST") {
      options.headers = { "Content-Type": "application/json", "X-Konton-Action": "local" };
      options.body = JSON.stringify(body || {});
    }
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || ("HTTP " + response.status));
    return data;
  }
  function button(label, onClick, disabled = false) {
    const node = make("button", "small-btn", label);
    node.type = "button";
    node.disabled = disabled;
    node.addEventListener("click", async () => {
      node.disabled = true;
      try { await onClick(); }
      catch (error) { feedback.textContent = "Erreur : " + error.message; }
      finally { node.disabled = false; await refresh().catch(() => {}); }
    });
    return node;
  }
  async function loadSources() {
    const result = await api("/api/tasks");
    selectedReports = result.tasks.filter(task =>
      task.report && ["awaiting_review", "acknowledged", "needs_work"].includes(task.status));
    selector.replaceChildren();
    if (!selectedReports.length) {
      const opt = make("option", "", "Créer et exécuter d'abord une vérification GitHub V0.3");
      opt.value = "";
      selector.append(opt);
      selector.disabled = true;
      create.disabled = true;
      return;
    }
    selectedReports.forEach(task => {
      const opt = make("option", "", task.repo + " · PR #" + task.prNumber +
        " · " + task.report.headSha.slice(0, 8));
      opt.value = task.id;
      selector.append(opt);
    });
    selector.disabled = !modelReady;
    create.disabled = !modelReady;
  }
  function render(items) {
    list.replaceChildren();
    if (!items.length) {
      list.append(make("p", "empty", "Aucune mission IA locale créée."));
      return;
    }
    items.forEach(task => {
      const item = make("article", "task-card");
      const header = make("div", "task-card-top");
      header.append(make("strong", "", task.repo + " · PR #" + task.snapshot.prNumber));
      header.append(make("span", "tag " + task.scope, ({
        queued: "À démarrer", running: "Génération en cours",
        cancel_requested: "STOP demandé", cancelled_local: "Requête interrompue",
        interrupted: "Redémarrage détecté", awaiting_review: "Réponse à relire",
        acknowledged: "Réponse lue", needs_work: "Réponse à approfondir",
        failed: "Échec"
      })[task.status] || "Inconnu"));
      item.append(header);
      item.append(make("p", "subtle", "SHA source : " + task.snapshot.headSha +
        " · Rapport local du " + date(task.snapshot.retrievedAt)));
      if (task.error) item.append(make("p", "task-error", task.error));
      if (task.output) {
        const answer = make("section", "ai-answer");
        answer.append(make("h3", "", "Analyse produite par le modèle, non vérifiée"));
        // textContent only: AI output must never be interpreted as HTML or JavaScript.
        answer.append(make("p", "ai-output", task.output));
        item.append(answer);
      }
      const buttons = make("div", "task-actions");
      if (task.status === "queued") {
        buttons.append(button("GO · lancer l'IA", async () => {
          feedback.textContent = "Mission envoyée au moteur local…";
          active.add(task.id);
          running = true;
          refresh().catch(() => {});
          try {
            await api("/api/ai/tasks/" + task.id + "/run", "POST", {});
            feedback.textContent = "Mission terminée. Lire et vérifier sa réponse.";
          } finally { active.delete(task.id); running = false; }
        }, !modelReady));
      }
      if (task.status === "running" || task.status === "cancel_requested" || active.has(task.id)) {
        buttons.append(button("STOP · interrompre", async () => {
          const result = await api("/api/ai/tasks/" + task.id + "/cancel", "POST", {});
          feedback.textContent = "STOP : " + result.task.status +
            ". L'arrêt du calcul interne au modèle n'est pas garanti.";
        }, task.status === "cancel_requested"));
      }
      if (task.status === "awaiting_review") {
        buttons.append(button("Réponse lue", async () => {
          await api("/api/ai/tasks/" + task.id + "/review", "POST", { decision: "acknowledge" });
          feedback.textContent = "Accusé de lecture local ; aucune approbation distante.";
        }));
        buttons.append(button("À approfondir", async () => {
          await api("/api/ai/tasks/" + task.id + "/review", "POST", { decision: "needs_work" });
          feedback.textContent = "Réserve locale enregistrée.";
        }));
      }
      item.append(buttons);
      list.append(item);
    });
  }
  async function refresh() {
    if (!enabled) return;
    const result = await api("/api/ai/tasks");
    render(result.tasks || []);
  }
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!enabled || !modelReady || !selector.value) return;
    create.disabled = true;
    try {
      const result = await api("/api/ai/tasks", "POST", { sourceTaskId: selector.value });
      feedback.textContent = "Mission créée (" + result.task.id.slice(0, 8) +
        "). Lancer GO pour contacter le modèle local.";
      await refresh();
    } catch (error) { feedback.textContent = "Création impossible : " + error.message; }
    finally { create.disabled = false; }
  });
  async function init() {
    if (!["127.0.0.1", "localhost"].includes(window.location.hostname)) {
      feedback.textContent = "Mode web statique : aucun moteur IA disponible.";
      return;
    }
    try {
      const cap = await api("/api/ai/capabilities");
      if (!cap.configured) {
        mode.textContent = "IA non configurée";
        feedback.textContent = "Définir KONTON_AI_MODEL et démarrer un moteur Ollama local sur 127.0.0.1:11434.";
        return;
      }
      enabled = true;
      const health = await api("/api/ai/readiness");
      modelReady = health.ready === true;
      mode.textContent = (modelReady ? "Modèle installé · " : "Modèle indisponible · ") + cap.model;
      feedback.textContent = (health.reason || "État non vérifié.") +
        (modelReady ? " Une génération réelle reste à tester." :
          " Installer/démarrer le modèle sur cette machine, puis recharger la page.");
      await loadSources();
      await refresh();
      // While a mission is running, refresh display to expose STOP without waiting for /run to finish.
      window.setInterval(() => refresh().catch(() => {}), 2200);
      window.setInterval(() => loadSources().catch(() => {}), 10000);
    } catch (error) {
      mode.textContent = "IA indisponible";
      feedback.textContent = "Passerelle locale absente : " + error.message;
    }
  }
  init();
})();
