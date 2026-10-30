"use strict";

/*
 * KONTON Control V0.1: mock adapter only.
 * No API, database, authentication, persistent storage, or remote execution.
 * This entire file manipulates in-memory demonstration records.
 */

const examples = [
  {
    id: "relieur", initials: "RL", name: "Le Relieur", scope: "collectif",
    mission: "Recouper les transmissions des ateliers",
    description: "Coordination documentaire horizontale de La Faille noire × Interstice.",
    status: "idle", output: "Synthèse simulée : deux transmissions à comparer.",
  },
  {
    id: "archiviste", initials: "AR", name: "L'Archiviste", scope: "collectif",
    mission: "Vérifier les sources historiques",
    description: "Références, archives et documents à vérifier avant publication.",
    status: "review", output: "Fiche fictive : provenance et licence à contrôler.",
  },
  {
    id: "juriste", initials: "JU", name: "La Juriste", scope: "collectif",
    mission: "Relire les garanties et les recours",
    description: "Notes juridiques en cours, sans adoption automatique.",
    status: "idle", output: "Avis simulé : ajouter une réserve juridique.",
  },
  {
    id: "developpeuse", initials: "DV", name: "La Développeuse", scope: "collectif",
    mission: "Examiner une proposition de code",
    description: "Vérifications techniques et propositions non déployées.",
    status: "idle", output: "Contrôle simulé : tests nécessaires avant fusion.",
  },
  {
    id: "konton-bridge", initials: "KB", name: "KONTON Bridge", scope: "personnel",
    mission: "Classer les signaux utiles",
    description: "Démonstration sans lecture de notifications, messages ou contacts.",
    status: "idle", output: "Proposition fictive : action personnelle à confirmer.",
  },
  {
    id: "toto-black", initials: "TB", name: "Toto Black CI", scope: "personnel",
    mission: "Contrôler la livraison de test",
    description: "Aucun accès aux pipelines GitHub dans cette version.",
    status: "review", output: "Rapport fictif : vérifier la compilation avant diffusion.",
  },
];

const agents = examples.map(function (item) { return Object.assign({}, item); });
const pendingTimers = new Map();
const logRecords = [];
const statusMeta = {
  idle: { label: "Au repos", led: "led-gray", help: "Prêt à simuler une mission. Aucun agent réel n'est relié." },
  running: { label: "Simulation en cours", led: "led-blue", help: "Exécution factice locale. Aucun traitement distant n'est déclenché." },
  review: { label: "À valider", led: "led-purple", help: "Une sortie fictive attend une décision humaine dans la simulation." },
  done: { label: "Validé en démo", led: "led-green", help: "Validation locale uniquement : rien n'a été publié ni fusionné." },
  stopped: { label: "Arrêté en démo", led: "led-red", help: "Simulation interrompue. Aucun processus réel n'a été arrêté." },
};
let scope = "all";
let selectedId = agents[0].id;
let searchTerm = "";

function el(id) { return document.getElementById(id); }
function make(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function getAgent(id) { return agents.find(function (agent) { return agent.id === id; }); }
function scopeLabel(value) { return value === "collectif" ? "Collectif" : "Personnel"; }
function visibleAgents() {
  return agents.filter(function (agent) {
    const matchesScope = scope === "all" || agent.scope === scope;
    const haystack = (agent.name + " " + agent.mission + " " + agent.description).toLocaleLowerCase("fr");
    return matchesScope && haystack.includes(searchTerm);
  });
}
function announce(message) { el("announcer").textContent = message; }
function record(message) {
  logRecords.unshift({ message: message, at: new Date() });
  if (logRecords.length > 30) logRecords.pop();
  announce(message);
}
function renderMetrics() {
  el("count-agents").textContent = String(agents.length);
  el("count-running").textContent = String(agents.filter(function (agent) { return agent.status === "running"; }).length);
  el("count-review").textContent = String(agents.filter(function (agent) { return agent.status === "review"; }).length);
  el("visible-count").textContent = String(visibleAgents().length) + " visibles";
}
function renderList() {
  const list = el("agent-list");
  list.replaceChildren();
  const visible = visibleAgents();
  if (!visible.length) {
    list.append(make("p", "empty", "Aucun agent fictif ne correspond à ce filtre."));
    return;
  }
  visible.forEach(function (agent) {
    const item = make("button", "agent-item" + (selectedId === agent.id ? " active" : ""));
    item.type = "button";
    item.setAttribute("aria-pressed", String(selectedId === agent.id));
    item.setAttribute("aria-label", "Afficher " + agent.name);
    item.append(make("span", "agent-icon", agent.initials));
    const info = make("span", "agent-info");
    info.append(make("strong", "", agent.name));
    info.append(make("span", "", scopeLabel(agent.scope) + " · " + statusMeta[agent.status].label));
    item.append(info);
    item.addEventListener("click", function () { selectedId = agent.id; render(); });
    list.append(item);
  });
}
function renderDetail() {
  const target = el("agent-detail");
  target.replaceChildren();
  const agent = getAgent(selectedId);
  if (!agent) { target.append(make("p", "empty", "Aucun agent sélectionné.")); return; }

  const heading = make("div", "detail-head");
  const intro = make("div");
  intro.append(make("h3", "detail-name", agent.name));
  intro.append(make("p", "description", agent.description));
  heading.append(intro);
  heading.append(make("span", "tag " + agent.scope, scopeLabel(agent.scope)));
  target.append(heading);

  const banner = make("div", "status-banner");
  const line = make("div", "status-line");
  line.append(make("span", "led " + statusMeta[agent.status].led));
  line.append(make("span", "", statusMeta[agent.status].label));
  banner.append(line);
  banner.append(make("p", "", statusMeta[agent.status].help));
  target.append(banner);

  const fields = make("div", "detail-grid");
  const mission = make("div", "field");
  mission.append(make("span", "field-label", "MISSION SIMULÉE"));
  mission.append(make("strong", "", agent.mission));
  const source = make("div", "field");
  source.append(make("span", "field-label", "SOURCE DES DONNÉES"));
  source.append(make("strong", "", "Mémoire locale fictive"));
  fields.append(mission, source);
  target.append(fields);

  target.append(make("p", "controls-label", "COMMANDES LOCALES"));
  const buttons = make("div", "controls");
  const go = make("button", "control go");
  go.type = "button";
  go.append(make("span", "symbol", "▶"), make("span", "", "GO"));
  go.disabled = agent.status === "running" || agent.status === "review";
  go.setAttribute("aria-label", "Simuler le lancement de " + agent.name);
  go.addEventListener("click", function () { startAgent(agent.id); });
  const stop = make("button", "control stop");
  stop.type = "button";
  stop.append(make("span", "symbol", "■"), make("span", "", "STOP"));
  stop.disabled = agent.status !== "running";
  stop.setAttribute("aria-label", "Arrêter la simulation de " + agent.name);
  stop.addEventListener("click", function () { stopAgent(agent.id); });
  buttons.append(go, stop);
  target.append(buttons);

  const note = make("p", "disclaimer");
  note.append(make("span", "connection-icon", "⚠"));
  note.append(make("span", "", "Le bouton GO ne contacte aucun service. La validation humaine concerne uniquement cette simulation."));
  target.append(note);
}
function renderQueue() {
  const queue = el("review-queue");
  queue.replaceChildren();
  const reviewItems = agents.filter(function (agent) {
    return agent.status === "review" && (scope === "all" || agent.scope === scope);
  });
  el("review-badge").textContent = String(reviewItems.length);
  if (!reviewItems.length) {
    queue.append(make("p", "empty", "Aucune validation fictive en attente pour ce filtre."));
    return;
  }
  reviewItems.forEach(function (agent) {
    const card = make("article", "review-card");
    card.append(make("strong", "", agent.name));
    card.append(make("p", "", agent.output));
    const actions = make("div", "review-actions");
    const approve = make("button", "small-btn approve", "Valider");
    approve.type = "button";
    approve.setAttribute("aria-label", "Valider la sortie fictive de " + agent.name);
    approve.addEventListener("click", function () { decide(agent.id, "done"); });
    const returnBtn = make("button", "small-btn", "À revoir");
    returnBtn.type = "button";
    returnBtn.setAttribute("aria-label", "Renvoyer la sortie fictive de " + agent.name);
    returnBtn.addEventListener("click", function () { decide(agent.id, "idle"); });
    actions.append(approve, returnBtn);
    card.append(actions);
    queue.append(card);
  });
}
function renderLog() {
  const list = el("event-log");
  list.replaceChildren();
  logRecords.forEach(function (entry) {
    const item = make("li");
    const when = make("time", "", entry.at.toLocaleTimeString("fr-FR"));
    when.dateTime = entry.at.toISOString();
    item.append(when, make("span", "", entry.message));
    list.append(item);
  });
}
function render() {
  const visible = visibleAgents();
  if (!visible.some(function (agent) { return agent.id === selectedId; })) {
    selectedId = visible.length ? visible[0].id : null;
  }
  renderMetrics();
  renderList();
  renderDetail();
  renderQueue();
  renderLog();
}
function startAgent(id) {
  const agent = getAgent(id);
  if (!agent || agent.status === "running" || agent.status === "review") return;
  agent.status = "running";
  record("GO · " + agent.name + " · mission fictive démarrée");
  render();
  pendingTimers.set(id, window.setTimeout(function () {
    pendingTimers.delete(id);
    if (agent.status !== "running") return;
    agent.status = "review";
    record("Sortie simulée · " + agent.name + " · validation humaine requise");
    render();
  }, 2400));
}
function stopAgent(id) {
  const agent = getAgent(id);
  if (!agent || agent.status !== "running") return;
  window.clearTimeout(pendingTimers.get(id));
  pendingTimers.delete(id);
  agent.status = "stopped";
  record("STOP · " + agent.name + " · simulation interrompue");
  render();
}
function decide(id, status) {
  const agent = getAgent(id);
  if (!agent || agent.status !== "review") return;
  agent.status = status;
  record((status === "done" ? "VALIDATION" : "À REVOIR") + " · " + agent.name + " · décision fictive enregistrée localement");
  render();
}
document.querySelectorAll("[data-scope]").forEach(function (button) {
  button.addEventListener("click", function () {
    scope = button.dataset.scope;
    document.querySelectorAll("[data-scope]").forEach(function (other) {
      const active = other === button;
      other.classList.toggle("active", active);
      other.setAttribute("aria-pressed", String(active));
    });
    render();
  });
});
el("agent-search").addEventListener("input", function (event) {
  searchTerm = event.target.value.trim().toLocaleLowerCase("fr");
  render();
});
record("Console initialisée en mode démonstration · aucune connexion distante");
render();
