"use strict";
// Cache only bundled interface files. Never cache private APIs or GitHub responses.
const VERSION = "konton-control-shell-v07";
const APP_SHELL = [
 "./", "./index.html", "./styles.css", "./app.js",
 "./github-status.js", "./task-board.js", "./ai-board.js", "./navigation.js",
 "./pwa.js", "./manifest.webmanifest",
 "./icons/konton-192.png", "./icons/konton-512.png"
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(name => name.startsWith("konton-control-shell-") && name !== VERSION)
        .map(name => caches.delete(name))
    )).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  if (url.pathname.includes("/api/")) return;
  const shell = new Set(APP_SHELL.map(entry => new URL(entry, self.registration.scope).pathname));
  if (!shell.has(url.pathname)) return;
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
