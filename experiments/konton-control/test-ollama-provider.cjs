#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const { EventEmitter } = require("node:events");
const { createOllamaProvider } = require("./ollama-provider.cjs");

function fakeTransport(mode, calls) {
  return (options, onResponse) => {
    calls.push({ options });
    const request = new EventEmitter();
    request.setTimeout = () => {};
    request.end = payload => {
      calls[calls.length - 1].payload = JSON.parse(payload.toString("utf8"));
      if (mode === "pending") return;
      process.nextTick(() => {
        const response = new EventEmitter();
        response.statusCode = mode === "httpError" ? 500 : 200;
        onResponse(response);
        response.emit("data", Buffer.from(JSON.stringify({
          response: mode === "empty" ? "" : "Faits et incertitudes vérifiés."
        })));
        response.emit("end");
      });
    };
    request.destroy = error => process.nextTick(() => request.emit("error", error));
    return request;
  };
}
async function main() {
  assert.throws(() => createOllamaProvider({ model: "bad model" }), /non configuré/);
  const calls = [];
  const provider = createOllamaProvider({
    model: "qwen2.5:3b", transport: fakeTransport("ok", calls)
  });
  assert.equal(await provider.generate("Analyse limitée.", new AbortController().signal),
    "Faits et incertitudes vérifiés.");
  assert.equal(calls[0].options.hostname, "127.0.0.1");
  assert.equal(calls[0].options.port, 11434);
  assert.equal(calls[0].options.path, "/api/generate");
  assert.equal(calls[0].options.method, "POST");
  assert.equal(calls[0].payload.stream, false);
  assert.equal(calls[0].payload.model, "qwen2.5:3b");
  assert.equal(calls[0].payload.prompt, "Analyse limitée.");
  assert.equal(calls[0].options.headers.Authorization, undefined);
  await assert.rejects(() => createOllamaProvider({
    model: "qwen2.5:3b", transport: fakeTransport("httpError", [])
  }).generate("x"), /HTTP 500/);
  await assert.rejects(() => createOllamaProvider({
    model: "qwen2.5:3b", transport: fakeTransport("empty", [])
  }).generate("x"), /vide ou invalide/);
  const abort = new AbortController();
  const hanging = createOllamaProvider({
    model: "qwen2.5:3b", transport: fakeTransport("pending", [])
  }).generate("x", abort.signal);
  abort.abort();
  await assert.rejects(hanging, /interrompue/);
  process.stdout.write("KONTON Control V0.4 : requête modèle bornée, endpoint loopback et annulation OK\n");
}
main().catch(error => { process.stderr.write(String(error.stack || error) + "\n"); process.exitCode = 1; });
