"use strict";

/**
 * Four focused screens, with visible demo vs real boundaries.
 * No token, local storage, external call, or remote action.
 */
(function () {
  const screens = new Map(
    Array.from(document.querySelectorAll("[data-screen]")).map(el => [el.dataset.screen, el])
  );
  const nav = Array.from(document.querySelectorAll(".app-navigation [data-screen-target]"));
  const allButtons = Array.from(document.querySelectorAll("[data-screen-target]"));
  const fallback = "home";

  function select(name, shouldFocus) {
    const target = screens.has(name) ? name : fallback;
    screens.forEach((el, key) => {
      el.hidden = key !== target;
    });
    nav.forEach(button => {
      const chosen = button.dataset.screenTarget === target;
      button.classList.toggle("is-active", chosen);
      if (chosen) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    document.title = "KONTON Control · " +
      ({ home: "Accueil", agents: "Agents (simulation)", github: "GitHub", outils: "Outils" })[target];
    if (shouldFocus) {
      const selected = screens.get(target);
      selected.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }
  function fromHash() {
    const raw = window.location.hash.slice(1);
    return screens.has(raw) ? raw : fallback;
  }
  allButtons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.screenTarget;
      if (!screens.has(name)) return;
      if (window.location.hash === "#" + name) select(name, true);
      else window.location.hash = name;
    });
  });
  window.addEventListener("hashchange", () => select(fromHash(), true));
  select(fromHash(), false);
})();
