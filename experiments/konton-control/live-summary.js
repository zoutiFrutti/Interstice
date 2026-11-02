"use strict";
/* Public, read-only status snapshot, never an agent execution or a human decision. */
(function () {
  const $ = id => document.getElementById(id);
  const button = $("brief-refresh");
  if (!button) return;
  const base = "https://api.github.com/repos/zoutiFrutti/Interstice";
  let busy = false;
  async function read(url, signal) {
    const response = await fetch(url, { method: "GET", credentials: "omit", cache: "no-store",
      headers: { Accept: "application/vnd.github+json" }, signal });
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.json();
  }
  function updateProgress(prs, runs) {
    const open = prs.length;
    const drafts = prs.filter(p => p.draft).length;
    const recent = runs.filter(r => r.status === "completed");
    const green = recent.filter(r => r.conclusion === "success").length;
    $("brief-progress").textContent = open + " PR ouvertes affichées (" + drafts +
      " brouillons) parmi les 30 premières ; " + green + " CI réussies parmi " + recent.length +
      " exécutions terminées des 20 dernières retournées. Pas un bilan des ateliers.";
    const failed = recent.filter(r => r.conclusion === "failure").length;
    $("brief-blockers").textContent = failed + " exécution(s) CI en échec dans l'échantillon. " +
      "Les dépendances des ateliers ne peuvent pas être déduites de ces CI.";
    $("brief-decisions").textContent = "Décisions de Zout : non synchronisées. " +
      "Les PR ouvertes ne sont pas des demandes de validation automatique.";
    $("brief-source").textContent = "GitHub public Interstice · relevé le " +
      new Date().toLocaleString("fr-FR") + " · 30 PR / 20 CI max, toutes branches confondues, aucune action distante.";
  }
  async function refresh() {
    if (busy) return;
    if (!document.querySelector('[data-workspace="interstice"].selected')) return;
    busy = true; button.disabled = true;
    $("brief-source").textContent = "Lecture GitHub publique en cours…";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const responses = await Promise.all([
        read(base + "/pulls?state=open&per_page=30", controller.signal),
        read(base + "/actions/runs?per_page=20", controller.signal)
      ]);
      if (!Array.isArray(responses[0]) || !Array.isArray(responses[1].workflow_runs)) {
        throw new Error("Réponse incomplète");
      }
      // A user may switch workspace while the network call is in flight.
      if (document.querySelector('[data-workspace="interstice"].selected')) {
        updateProgress(responses[0], responses[1].workflow_runs);
      }
    } catch(error) {
      if (document.querySelector('[data-workspace="interstice"].selected')) {
        $("brief-progress").textContent = "Impossible de vérifier l'avancement GitHub.";
        $("brief-blockers").textContent = "Blocages non vérifiés, aucune conclusion possible.";
        $("brief-decisions").textContent = "Aucune demande de décision connectée.";
        $("brief-source").textContent = "Lecture échouée : " + (error.name === "AbortError" ? "délai dépassé" : error.message);
      }
    } finally { clearTimeout(timeout); busy = false; button.disabled = false; }
  }
  button.addEventListener("click", refresh);
})();
