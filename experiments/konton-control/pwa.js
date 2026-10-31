"use strict";
// Mobile home-screen install. This script never exports or caches secret data.
(() => {
  const host = location.hostname;
  const isApk = host === "appassets.androidplatform.net";
  const indicator = document.getElementById("mobile-install-status");
  const install = document.getElementById("mobile-install");
  if (!indicator || !install) return;

  if (isApk) {
    indicator.textContent = "Application Android embarquée · interface disponible hors connexion";
    install.hidden = true;
    return;
  }
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    indicator.textContent = "Installation PWA : HTTPS requis (ou localhost).";
    install.hidden = true;
    return;
  }
  navigator.serviceWorker.register("./sw.js", { scope: "./" })
    .then(() => { indicator.textContent = "Interface mise en cache pour l'utilisation hors connexion."; })
    .catch(() => { indicator.textContent = "Cache hors ligne indisponible."; });
  let deferred;
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferred = event;
    install.hidden = false;
    indicator.textContent = "Installation Android disponible.";
  });
  install.addEventListener("click", async () => {
    if (!deferred) return;
    const prompt = deferred;
    deferred = null;
    install.hidden = true;
    await prompt.prompt();
    indicator.textContent = "Installation proposée par Android.";
  });
  window.addEventListener("appinstalled", () => {
    install.hidden = true;
    indicator.textContent = "KONTON Control installé.";
  });
})();
