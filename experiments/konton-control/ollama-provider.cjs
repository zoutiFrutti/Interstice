"use strict";

/**
 * Optional REAL local LLM adapter. A fixed Ollama endpoint on loopback only:
 * POST http://127.0.0.1:11434/api/generate
 *
 * No tools, no shell access, no GitHub mutation, no remote URL configuration.
 * Backend cancellation means local request abort, NOT proof of model shutdown.
 */
const http = require("node:http");
const MODEL = process.env.KONTON_AI_MODEL || "";
const MODEL_PATTERN = /^[a-zA-Z0-9_.:/-]{1,90}$/;
function configured() {
  return MODEL_PATTERN.test(MODEL);
}
function createOllamaProvider(options = {}) {
  const model = options.model === undefined ? MODEL : options.model;
  const transport = options.transport || http.request;
  const timeoutMs = options.timeoutMs || 120_000;
  if (!MODEL_PATTERN.test(model)) throw new Error("Modèle local non configuré. Définir KONTON_AI_MODEL.");
  async function generate(prompt, signal) {
    if (typeof prompt !== "string" || prompt.length > 15000) {
      throw new Error("Mission trop volumineuse.");
    }
    if (signal && signal.aborted) throw Object.assign(new Error("Requête annulée."), { name: "AbortError" });
    return new Promise((resolve, reject) => {
      const payload = Buffer.from(JSON.stringify({
        model,
        prompt,
        stream: false,
        keep_alive: "5m",
        options: { temperature: 0.15, num_predict: 700 }
      }), "utf8");
      let settled = false;
      const done = (error, text) => {
        if (settled) return;
        settled = true;
        if (signal) signal.removeEventListener("abort", onAbort);
        if (error) reject(error);
        else resolve(text);
      };
      const req = transport({
        hostname: "127.0.0.1", port: 11434, path: "/api/generate",
        method: "POST",
        headers: { "Content-Type": "application/json", "Content-Length": payload.length }
      }, response => {
        let size = 0;
        const parts = [];
        response.on("data", chunk => {
          size += chunk.length;
          if (size > 150_000) {
            req.destroy(new Error("Réponse IA trop volumineuse."));
            return;
          }
          parts.push(chunk);
        });
        response.on("end", () => {
          if (response.statusCode !== 200) {
            return done(new Error("Serveur IA local HTTP " + response.statusCode));
          }
          try {
            const json = JSON.parse(Buffer.concat(parts).toString("utf8"));
            if (typeof json.response !== "string" || !json.response.trim()) {
              throw new Error("Modèle IA : réponse vide ou invalide.");
            }
            done(null, json.response.trim().slice(0, 8000));
          } catch (error) { done(error); }
        });
        response.on("error", error => done(error));
      });
      const onAbort = () => req.destroy(Object.assign(new Error("Requête locale interrompue."), { name: "AbortError" }));
      req.on("error", error => done(error));
      req.setTimeout(timeoutMs, () => req.destroy(new Error("Délai du modèle local dépassé.")));
      if (signal) signal.addEventListener("abort", onAbort, { once: true });
      req.end(payload);
    });
  }
  // Readiness is an actual GET against the same loopback server, never a cloud ping.
  // It checks availability and exact model presence; it does NOT assert inference quality.
  async function probe() {
    return new Promise(resolve => {
      const result = (ready, connected, reason) => ({ ready, connected, model, reason });
      let done = false;
      const finish = value => { if (!done) { done = true; resolve(value); } };
      const request = transport({
        hostname: "127.0.0.1", port: 11434, path: "/api/tags",
        method: "GET",
        headers: { Accept: "application/json" }
      }, response => {
        if (response.statusCode !== 200) {
          response.resume && response.resume();
          finish(result(false, false, "Ollama a répondu avec HTTP " + response.statusCode));
          return;
        }
        const pieces = [];
        let size = 0;
        response.on("data", chunk => {
          size += chunk.length;
          if (size > 65536) {
            request.destroy(new Error("Liste de modèles trop volumineuse."));
            return;
          }
          pieces.push(chunk);
        });
        response.on("end", () => {
          try {
            const payload = JSON.parse(Buffer.concat(pieces).toString("utf8"));
            if (!Array.isArray(payload.models)) throw new Error("Liste Ollama invalide.");
            const installed = payload.models.some(item =>
              item && (item.name === model || item.model === model));
            finish(installed ? result(true, true, "Modèle installé (inférence non testée).") :
              result(false, true, "Moteur accessible mais modèle demandé absent."));
          } catch (_error) {
            finish(result(false, false, "Réponse de disponibilité invalide."));
          }
        });
        response.on("error", () => finish(result(false, false, "Lecture du moteur interrompue.")));
      });
      request.on("error", () => finish(result(false, false, "Moteur IA local inaccessible.")));
      request.setTimeout(3000, () => request.destroy(new Error("Délai Ollama dépassé.")));
      request.end();
    });
  }
  return { name: "ollama-local", model, generate, probe };
}
module.exports = { configured, createOllamaProvider, MODEL_PATTERN };
