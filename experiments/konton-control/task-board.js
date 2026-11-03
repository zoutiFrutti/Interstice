"use strict";

/* KONTON Control: actual GitHub READ task reports, local-only writes. */
(function () {
  const $ = id => document.getElementById(id);
  const form = $("task-create-form");
  if (!form) return;
  const repoPicker = $("task-repo");
  const prPicker = $("task-pr");
  const createBtn = $("task-create");
  const list = $("task-list");
  const events = $("task-events");
  const feedback = $("task-feedback");
  const mode = $("task-mode");
  let enabled = false;
  let busy = false;
  let selected = null;
  const make = (tag, cls, value) => {
    const element = document.createElement(tag);
    if (cls) element.className = cls;
    if (value !== undefined) element.textContent = String(value);
    return element;
  };
  const timestamp = raw => {
    const d = new Date(raw);
    return raw && Number.isFinite(d.getTime()) ? d.toLocaleString("fr-FR") : "Date inconnue";
  };
  const statusLabel = state => ({
    queued: "À exécuter", running: "Lecture en cours", awaiting_review: "Rapport à relire",
    failed: "Échec de lecture", acknowledged: "Rapport lu",
    needs_work: "Rapport à approfondir"
  })[state] || "État inconnu";
  const api = async (url, method = "GET", body) => {
    const options = { method, cache: "no-store", credentials: "same-origin" };
    if (method === "POST") {
      options.headers = { "Content-Type": "application/json", "X-Konton-Action": "local" };
      options.body = JSON.stringify(body || {});
    }
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) throw new Error(String(data.error || "Erreur locale (HTTP " + response.status + ")"));
    return data;
  };
  const action = (label, callback) => {
    const button = make("button", "small-btn", label);
    button.type = "button";
    button.disabled = busy;
    button.addEventListener("click", async () => {
      if (busy) return;
      busy = true;
      await callback().catch(error => { feedback.textContent = "Erreur : " + error.message; });
      busy = false;
      await refresh().catch(error => { feedback.textContent = "Actualisation impossible : " + error.message; });
    });
    return button;
  };
  async function showEvents(id) {
    selected = id;
    const data = await api("/api/tasks/" + encodeURIComponent(id) + "/events");
    events.replaceChildren();
    if (!data.events.length) events.append(make("li", "", "Aucun événement."));
    data.events.forEach(item => {
      const row = make("li");
      row.append(make("time", "", timestamp(item.at)));
      row.append(make("span", "", item.action + " · " + item.detail));
      events.append(row);
    });
  }
  function render(tasks) {
    list.replaceChildren();
    if (!tasks.length) { list.append(make("p", "empty", "Aucune vérification locale. Crée une tâche ci-dessus.")); return; }
    tasks.forEach(task => {
      const card = make("article", "task-card");
      const top = make("div", "task-card-top");
      top.append(make("strong", "", task.repo + " · PR #" + task.prNumber));
      top.append(make("span", "tag " + task.scope, statusLabel(task.status)));
      card.append(top);
      card.append(make("p", "subtle", "Créée : " + timestamp(task.createdAt) +
        " · Périmètre : " + (task.scope === "collectif" ? "collectif" : "personnel")));
      if (task.error) card.append(make("p", "task-error", task.error));
      const report = task.report;
      if (report) {
        const info = make("div", "task-report");
        info.append(make("strong", "", report.title));
        info.append(make("p", "", "SHA : " + report.headSha +
          " · PR : " + report.prState + (report.draft ? " (brouillon)" : "")));
        info.append(make("p", "", "Exécutions examinées : " + report.runCountExamined +
          " / " + report.runCountReported + " renvoyées pour ce SHA"));
        info.append(make("p", "task-assessment", report.assessment));
        const url = "https://github.com/" + task.repo + "/pull/" + task.prNumber;
        const link = make("a", "github-link", "Voir la PR vérifiée sur GitHub");
        link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer";
        info.append(link);
        if (Array.isArray(report.runs) && report.runs.length) {
          const details = make("details", "task-run-details");
          const sum = make("summary", "", "Détail des exécutions GitHub Actions");
          details.append(sum);
          const ul = make("ul", "github-items");
          report.runs.forEach(run => {
            const item = make("li");
            item.append(make("span", "", run.name + " : " + run.status +
              " / " + (run.conclusion || "résultat non disponible")));
            if (Number.isSafeInteger(run.id) && run.id > 0) {
              const a = make("a", "github-link", "Voir l'exécution");
              a.href = "https://github.com/" + task.repo + "/actions/runs/" + run.id;
              a.target = "_blank"; a.rel = "noopener noreferrer";
              item.append(a);
            }
            ul.append(item);
          });
          details.append(ul);
          info.append(details);
        }
        info.append(make("p", "subtle", "Rapport récupéré : " + timestamp(report.retrievedAt) +
          ". Il ne constitue pas une autorisation de fusion."));
        card.append(info);
      }
      const buttons = make("div", "task-actions");
      if (task.status === "queued") buttons.append(action("Exécuter la lecture", async () => {
        feedback.textContent = "Lecture de la PR et de ses CI en cours…";
        await api("/api/tasks/" + task.id + "/run", "POST", {});
        feedback.textContent = "Lecture terminée. Consulter le rapport et décider de sa suite.";
      }));
      if (task.status === "awaiting_review") {
        buttons.append(action("Rapport lu", async () => {
          await api("/api/tasks/" + task.id + "/review", "POST", { decision: "acknowledge" });
          feedback.textContent = "Accusé de lecture local enregistré. Aucune PR approuvée.";
        }));
        buttons.append(action("À approfondir", async () => {
          await api("/api/tasks/" + task.id + "/review", "POST", { decision: "needs_work" });
          feedback.textContent = "Réserve locale enregistrée.";
        }));
      }
      buttons.append(action("Voir le journal", () => showEvents(task.id)));
      card.append(buttons);
      list.append(card);
    });
  }
  async function refresh() {
    if (!enabled) return;
    const tasks = await api("/api/tasks");
    render(tasks.tasks || []);
    if (selected && (tasks.tasks || []).some(task => task.id === selected)) await showEvents(selected);
  }
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!enabled || busy) return;
    const repo = repoPicker.value;
    const prNumber = Number(prPicker.value);
    if (!Number.isSafeInteger(prNumber) || prNumber <= 0) {
      feedback.textContent = "Numéro de PR invalide.";
      return;
    }
    busy = true;
    createBtn.disabled = true;
    try {
      const result = await api("/api/tasks", "POST", { repo, prNumber });
      feedback.textContent = "Tâche locale créée : " + result.task.repo + " #" + result.task.prNumber +
        ". Utiliser « Exécuter la lecture » pour faire la vérification.";
      await refresh();
    } catch (error) {
      feedback.textContent = "Création impossible : " + error.message;
    } finally {
      busy = false;
      createBtn.disabled = false;
    }
  });
  async function init() {
    if (!["localhost", "127.0.0.1"].includes(window.location.hostname)) return;
    try {
      const data = await api("/api/github/repos");
      if (data.mode !== "read-only" || !Array.isArray(data.repositories) || !data.repositories.length) return;
      enabled = true;
      mode.textContent = "Local · tâches persistantes";
      repoPicker.replaceChildren();
      data.repositories.forEach(repo => {
        if (typeof repo !== "string" || !/^[\w.-]+\/[\w.-]+$/.test(repo)) return;
        const item = make("option", "", repo);
        item.value = repo;
        repoPicker.append(item);
      });
      repoPicker.disabled = false;
      prPicker.disabled = false;
      createBtn.disabled = false;
      feedback.textContent = "Passerelle détectée. Les tâches ne modifieront jamais GitHub.";
      await refresh();
    } catch (_error) {
      feedback.textContent = "Passerelle locale indisponible. Utilise node local-server.cjs, pas le serveur statique.";
    }
  }
  init();
})();
