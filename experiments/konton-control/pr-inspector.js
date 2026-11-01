"use strict";
/* Public GitHub PR inspection. Read-only, exact SHA, no token or remote writes. */
(function () {
  const form = document.getElementById("pr-inspect-form");
  if (!form) return;
  const input = document.getElementById("pr-inspect-number");
  const button = document.getElementById("pr-inspect-button");
  const feedback = document.getElementById("pr-inspect-feedback");
  const result = document.getElementById("pr-inspect-result");
  const repo = "zoutiFrutti/Interstice";
  const api = "https://api.github.com/repos/" + repo;
  const make = (tag, text) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = String(text);
    return element;
  };
  const appendLine = (parent, title, value) => {
    const line = make("p");
    line.append(make("strong", title + " : "), make("span", value));
    parent.append(line);
  };
  async function get(url, signal) {
    const response = await fetch(url, {
      method: "GET", credentials: "omit", cache: "no-store", mode: "cors",
      headers: { Accept: "application/vnd.github+json" }, signal
    });
    if (!response.ok) throw new Error("GitHub HTTP " + response.status);
    return response.json();
  }
  function validSha(value) { return typeof value === "string" && /^[a-f0-9]{40}$/i.test(value); }
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const n = Number(input.value);
    if (!Number.isSafeInteger(n) || n < 1 || n > 99999999) {
      feedback.textContent = "Numéro de PR invalide.";
      return;
    }
    button.disabled = true;
    result.replaceChildren();
    feedback.textContent = "Lecture de la PR #" + n + "…";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const pr = await get(api + "/pulls/" + n, controller.signal);
      if (pr.number !== n || !pr.head || !validSha(pr.head.sha)) {
        throw new Error("Réponse PR non vérifiable.");
      }
      const block = make("div");
      block.className = "github-block";
      block.append(make("h3", "PR #" + n + " · " + String(pr.title || "Sans titre").slice(0, 250)));
      appendLine(block, "État", (pr.state === "open" ? "Ouverte" : "Fermée") +
        (pr.draft ? " · Brouillon" : "") + (pr.merged_at ? " · Fusionnée" : ""));
      appendLine(block, "Commit exact", pr.head.sha);
      appendLine(block, "Date de lecture", new Date().toLocaleString("fr-FR"));
      const link = make("a", "Voir la PR sur GitHub");
      link.href = "https://github.com/" + repo + "/pull/" + n;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      block.append(link);
      result.append(block);
      feedback.textContent = "PR lue. Recherche des CI associées au commit exact…";
      try {
        const data = await get(api + "/actions/runs?head_sha=" + pr.head.sha + "&per_page=20", controller.signal);
        if (!Array.isArray(data.workflow_runs)) throw new Error("Liste CI invalide.");
        const matches = data.workflow_runs.filter(run => run.head_sha === pr.head.sha);
        const ci = make("div");
        ci.className = "github-block";
        ci.append(make("h3", "CI liées à ce SHA"));
        if (!matches.length) {
          ci.append(make("p", "Aucune exécution trouvée dans les 20 premières réponses. Résultat non vérifié."));
        } else {
          matches.slice(0, 8).forEach(run => {
            const state = run.status !== "completed" ? "En cours ou en attente" :
              run.conclusion === "success" ? "Succès" :
              run.conclusion === "failure" ? "Échec" : "Autre résultat : " + String(run.conclusion || "inconnu");
            const line = make("p");
            line.append(make("strong", String(run.name || "Workflow").slice(0, 150) + " : "));
            line.append(make("span", state));
            if (Number.isSafeInteger(run.id) && run.id > 0) {
              const a = make("a", " · ouvrir");
              a.href = "https://github.com/" + repo + "/actions/runs/" + run.id;
              a.rel = "noopener noreferrer";
              a.target = "_blank";
              line.append(a);
            }
            ci.append(line);
          });
        }
        result.append(ci);
        feedback.textContent = "Vérification terminée. Succès CI ne signifie pas approbation ou publication.";
      } catch (error) {
        feedback.textContent = "PR lue, mais CI non vérifiables : " + error.message;
      }
    } catch (error) {
      feedback.textContent = "Vérification impossible : " + (error.name === "AbortError" ? "délai dépassé" : error.message);
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
    }
  });
})();
