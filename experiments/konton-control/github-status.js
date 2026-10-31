"use strict";

/*
 * GitHub read-only status panel.
 * Public mode: unauthenticated GET requests for the public Interstice repository.
 * Local mode: same-origin, read-only bridge with secrets held on the server.
 * Never sends or stores a token in the browser; never runs a GitHub mutation.
 */
(function () {
  const REPO_PUBLIC = "zoutiFrutti/Interstice";
  const CACHE_MS = 90 * 1000;
  const cache = new Map();
  const $ = (id) => document.getElementById(id);
  const dashboard = $("github-dashboard");
  const feedback = $("github-feedback");
  const select = $("github-repo");
  const refresh = $("github-refresh");
  if (!dashboard || !feedback || !select || !refresh) return;

  const state = { mode: "public", repos: [REPO_PUBLIC], requestId: 0, loading: false };
  const allowedRepo = (value) => typeof value === "string" &&
    /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(value) &&
    !value.includes("..");
  const node = (tag, cls, value) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (value !== undefined) el.textContent = String(value);
    return el;
  };
  const shownDate = (value) => {
    const date = new Date(value);
    return value && Number.isFinite(date.getTime()) ? date.toLocaleString("fr-FR") : "Date indisponible";
  };
  function githubUrl(repo, suffix = "") {
    if (!state.repos.includes(repo) || !allowedRepo(repo)) return null;
    return "https://github.com/" + repo + suffix;
  }
  function link(label, url) {
    const a = node("a", "github-link", label);
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }
  function statusWord(item) {
    if (!item || typeof item !== "object") return "Inconnu";
    if (item.status !== "completed") {
      return ({ queued: "En attente", requested: "Demandé", waiting: "En attente",
        pending: "En attente", in_progress: "En cours" })[item.status] || "État inconnu";
    }
    return ({ success: "Succès", failure: "Échec", cancelled: "Annulé",
      timed_out: "Délai dépassé", action_required: "Action requise",
      skipped: "Ignoré", neutral: "Neutre", stale: "Obsolète",
      startup_failure: "Démarrage échoué" })[item.conclusion] || "Résultat inconnu";
  }
  function createBlock(title) {
    const block = node("section", "github-block");
    block.append(node("h3", "", title));
    dashboard.append(block);
    return block;
  }
  function message(block, text) { block.append(node("p", "subtle", text)); }
  async function requestJson(url, timeout = 10000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, {
        method: "GET",
        cache: "no-store",
        credentials: "omit",
        mode: "cors",
        signal: controller.signal,
        headers: {
          "Accept": "application/vnd.github+json"
        }
      });
      if (!response.ok) {
        if (response.status === 403 || response.status === 429) {
          throw new Error("Limite GitHub ou accès refusé (HTTP " + response.status + "). Réessayer plus tard.");
        }
        throw new Error("Lecture indisponible (HTTP " + response.status + ").");
      }
      const data = await response.json();
      if (!data || typeof data !== "object") throw new Error("Réponse GitHub invalide.");
      return data;
    } finally {
      clearTimeout(timer);
    }
  }
  async function readPublic(repo) {
    if (repo !== REPO_PUBLIC) throw new Error("Ce dépôt n'est pas accessible en mode public.");
    const base = "https://api.github.com/repos/" + repo;
    const calls = await Promise.allSettled([
      requestJson(base),
      requestJson(base + "/pulls?state=open&per_page=10"),
      requestJson(base + "/actions/runs?per_page=10")
    ]);
    if (calls[0].status !== "fulfilled") throw calls[0].reason;
    const meta = calls[0].value;
    const pulls = calls[1].status === "fulfilled" && Array.isArray(calls[1].value) ? calls[1].value : null;
    const runs = calls[2].status === "fulfilled" && Array.isArray(calls[2].value.workflow_runs) ?
      calls[2].value.workflow_runs : null;
    return {
      repo: repo, visibility: meta.private ? "private" : "public",
      defaultBranch: meta.default_branch || "?",
      pushedAt: meta.pushed_at || null,
      prs: pulls && pulls.map(item => ({
        number: item.number, title: item.title, draft: Boolean(item.draft), updatedAt: item.updated_at
      })),
      runs: runs && runs.map(item => ({
        id: item.id, name: item.name, branch: item.head_branch,
        status: item.status, conclusion: item.conclusion, createdAt: item.created_at
      })),
      prError: pulls === null ? (calls[1].status === "rejected" ? String(calls[1].reason.message || calls[1].reason) : "Réponse invalide") : null,
      runError: runs === null ? (calls[2].status === "rejected" ? String(calls[2].reason.message || calls[2].reason) : "Réponse invalide") : null,
      fetchedAt: new Date().toISOString()
    };
  }
  async function readLocal(repo) {
    if (!state.repos.includes(repo)) throw new Error("Dépôt non autorisé dans la passerelle.");
    const answer = await requestJson("/api/github/status?repo=" + encodeURIComponent(repo));
    if (answer.repo !== repo) throw new Error("La passerelle a renvoyé un autre dépôt.");
    return answer;
  }
  function setLoading(active) {
    state.loading = active;
    select.disabled = active;
    refresh.disabled = active;
  }
  function render(data) {
    dashboard.replaceChildren();
    const summary = createBlock("Dépôt · " + data.repo);
    const repoUrl = githubUrl(data.repo);
    if (repoUrl) summary.append(link("Voir sur GitHub", repoUrl));
    message(summary, "Branche par défaut : " + (data.defaultBranch || "inconnue") +
      " · Visibilité : " + (data.visibility === "private" ? "privé (passerelle locale)" : "public") +
      " · Dernier push : " + shownDate(data.pushedAt));

    const prs = createBlock("Pull requests ouvertes");
    if (data.prError || !Array.isArray(data.prs)) {
      message(prs, "Impossible de lire les PR : " + (data.prError || "réponse indisponible"));
    } else if (!data.prs.length) {
      message(prs, "Aucune PR dans la première page consultée.");
    } else {
      message(prs, "Les " + data.prs.length + " premières PR ouvertes (maximum 10). Ce n'est pas nécessairement le total.");
      const list = node("ul", "github-items");
      data.prs.forEach(item => {
        const number = Number(item.number);
        if (!Number.isSafeInteger(number) || number <= 0) return;
        const row = node("li");
        const url = githubUrl(data.repo, "/pull/" + number);
        if (url) row.append(link("#" + number + " · " + (item.title || "Sans titre"), url));
        row.append(node("span", "github-meta", (item.draft ? "Brouillon · " : "Ouverte · ") + shownDate(item.updatedAt)));
        list.append(row);
      });
      prs.append(list);
    }

    const ci = createBlock("Dernières exécutions CI");
    if (data.runError || !Array.isArray(data.runs)) {
      message(ci, "Impossible de lire les CI : " + (data.runError || "réponse indisponible"));
    } else if (!data.runs.length) {
      message(ci, "Aucune exécution de workflow trouvée. Cela ne signifie pas que les tests passent.");
    } else {
      message(ci, "Dernières exécutions visibles, toutes branches confondues ; une CI verte sur une branche ne valide pas les autres.");
      const list = node("ul", "github-items");
      data.runs.slice(0, 5).forEach(item => {
        const id = Number(item.id);
        if (!Number.isSafeInteger(id) || id <= 0) return;
        const row = node("li");
        const url = githubUrl(data.repo, "/actions/runs/" + id);
        if (url) row.append(link(item.name || "Workflow sans nom", url));
        row.append(node("span", "github-meta", statusWord(item) + " · " +
          (item.branch || "branche inconnue") + " · " + shownDate(item.createdAt)));
        list.append(row);
      });
      ci.append(list);
    }
  }
  async function showRepo(force) {
    if (state.loading) return;
    const repo = select.value;
    if (!state.repos.includes(repo) || !allowedRepo(repo)) return;
    const entry = cache.get(repo);
    if (!force && entry && Date.now() - entry.when < CACHE_MS) {
      render(entry.data);
      feedback.textContent = "Données lues à " + shownDate(entry.data.fetchedAt) + " (cache court en mémoire).";
      return;
    }
    const requestId = ++state.requestId;
    setLoading(true);
    feedback.textContent = "Lecture GitHub en cours pour " + repo + "…";
    const home = $("home-github-state");
    if (home) home.textContent = "Vérification en cours";
    try {
      const data = state.mode === "local" ? await readLocal(repo) : await readPublic(repo);
      if (requestId !== state.requestId) return;
      cache.set(repo, { data, when: Date.now() });
      render(data);
      const home = $("home-github-state");
      if (home) home.textContent = "Actualisé le " + shownDate(data.fetchedAt);
      feedback.textContent = "Lecture seule · actualisé le " + shownDate(data.fetchedAt) +
        " · " + (state.mode === "local" ? "passerelle locale" : "API publique GitHub") + ".";
    } catch (error) {
      if (requestId !== state.requestId) return;
      dashboard.replaceChildren();
      const block = createBlock("Lecture indisponible");
      message(block, error && error.message ? error.message : "Erreur de connexion.");
      feedback.textContent = "Statut non vérifié. Aucun résultat CI présumé.";
      const home = $("home-github-state");
      if (home) home.textContent = "Connexion indisponible";
    } finally {
      if (requestId === state.requestId) setLoading(false);
    }
  }
  async function initialise() {
    const host = window.location && window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      try {
        const data = await requestJson("/api/github/repos", 2500);
        const repos = Array.isArray(data.repositories) ? data.repositories.filter(allowedRepo) : [];
        if (data.mode === "read-only" && repos.length) {
          state.mode = "local";
          state.repos = [...new Set(repos)];
        }
      } catch (_error) {
        // Ordinary static localhost server: fall back to public repository only.
      }
    }
    select.replaceChildren();
    state.repos.forEach(repo => {
      const option = node("option", "", repo);
      option.value = repo;
      select.append(option);
    });
    select.value = state.repos[0];
    $("github-source").textContent = state.mode === "local" ?
      "Passerelle locale · GET uniquement" : "GitHub public · GET uniquement";
    await showRepo(false);
  }
  select.addEventListener("change", () => showRepo(false));
  refresh.addEventListener("click", () => showRepo(true));
  // Avoid API requests and unnecessary loading when a person only opens Accueil.
  // WebView/PWA navigation uses location.hash; direct #github links still work.
  let started = false;
  function maybeInitialise() {
    if (started || window.location.hash !== "#github") return;
    started = true;
    initialise();
  }
  window.addEventListener("hashchange", maybeInitialise);
  maybeInitialise();
})();
