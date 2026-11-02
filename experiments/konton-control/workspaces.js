"use strict";
/* Workspaces are independent. No credentials, no private GitHub requests. */
(function () {
  const configs = {
    interstice: {
      name: "La Faille noire × Interstice",
      lead: "Coordination : La Relieuse. L'Orchestratrice construit le moteur technique ; Zout conserve les décisions.",
      access: "Dépôt Interstice public : lecture seule. Courriers candidats ; aucun agent historique ChatGPT n'est connecté.",
      screens: ["home", "agents", "github", "cycles", "outils"],
      links: [["cycles", "Courriers et cycles"], ["github", "GitHub public"]]
    },
    metro: {
      name: "Métro : L'Entre-deux mondes",
      lead: "Coordination créative : L'Architecte des mondes. Ateliers de dramaturgie, cartographie, sociologie et recherche.",
      access: "Dépôt GitHub privé : aucune connexion depuis cette APK. Les recherches et scènes Godot ne sont pas synchronisées ici. Aucune CI ou APK de jeu présumée.",
      screens: ["home"],
      links: []
    },
    personnel: {
      name: "Mes applications",
      lead: "Développement et décisions : Zout. Projets KONTON, Bridge, Toto et autres outils personnels.",
      access: "Espace indépendant des ateliers Interstice et Métro. Aucun dépôt privé ou serveur connecté depuis cette APK.",
      screens: ["home"],
      links: []
    }
  };
  let chosen = "interstice";
  const buttons = Array.from(document.querySelectorAll("[data-workspace]"));
  const nav = Array.from(document.querySelectorAll(".app-navigation [data-screen-target]"));
  const shortcuts = document.getElementById("workspace-links");
  const hero = document.querySelector(".screen-home .home-hero");
  const metrics = document.querySelector(".screen-home .metrics");
  const status = document.querySelector(".screen-home .home-status-grid");
  function update(key) {
    if (!Object.prototype.hasOwnProperty.call(configs,key)) return;
    chosen = key;
    const current = configs[key];
    buttons.forEach(button => {
      const active = button.dataset.workspace === key;
      button.classList.toggle("selected",active);
      button.setAttribute("aria-pressed",String(active));
    });
    document.getElementById("workspace-name").textContent = current.name;
    document.getElementById("workspace-lead").textContent = current.lead;
    document.getElementById("workspace-access").textContent = current.access;
    [hero,metrics,status].forEach(node => { if(node) node.hidden = key !== "interstice"; });
    nav.forEach(button => {
      button.hidden = !current.screens.includes(button.dataset.screenTarget);
    });
    shortcuts.replaceChildren();
    current.links.forEach(([screen,label]) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "small-btn";
      b.textContent = label;
      b.addEventListener("click", () => { location.hash = "#" + screen; });
      shortcuts.append(b);
    });
    if (key !== "interstice" && location.hash !== "#home") {
      location.hash = "#home";
    }
  }
  buttons.forEach(button => button.addEventListener("click", () => update(button.dataset.workspace)));
  // Prevent a deep link from exposing controls of another workspace after a project switch.
  window.addEventListener("hashchange", () => {
    const target = location.hash.slice(1);
    if (!configs[chosen].screens.includes(target)) location.hash = "#home";
  });
  update("interstice");
})();
