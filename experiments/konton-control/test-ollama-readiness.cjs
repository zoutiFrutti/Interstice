#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const { EventEmitter } = require("node:events");
const { createOllamaProvider } = require("./ollama-provider.cjs");

function transport(mode, paths) {
  return (options, onResponse) => {
    paths.push({ path: options.path, hostname: options.hostname, method: options.method });
    const req = new EventEmitter();
    req.setTimeout = () => {};
    req.destroy = error => process.nextTick(() => req.emit("error", error));
    req.end = () => {
      process.nextTick(() => {
        if (mode === "offline") { req.emit("error", new Error("connection refused")); return; }
        const response = new EventEmitter();
        response.statusCode = mode === "bad-http" ? 503 : 200;
        response.resume = () => {};
        onResponse(response);
        const payload = mode === "invalid" ? "bad json" :
          JSON.stringify({ models: mode === "missing" ?
            [{ name: "another:3b" }] : [{ name: "qwen2.5:3b", model: "qwen2.5:3b" }] });
        response.emit("data", Buffer.from(payload));
        response.emit("end");
      });
    };
    return req;
  };
}
async function main() {
  const paths = [];
  const installed = createOllamaProvider({
    model: "qwen2.5:3b", transport: transport("ok", paths)
  });
  const ready = await installed.probe();
  assert.equal(ready.ready, true);
  assert.equal(ready.connected, true);
  assert.match(ready.reason, /inférence non testée/);
  assert.deepEqual(paths[0], { path: "/api/tags", hostname: "127.0.0.1", method: "GET" });

  for (const [name, expectConnected] of [["missing", true], ["offline", false],
    ["invalid", false], ["bad-http", false]]) {
    const provider = createOllamaProvider({ model: "qwen2.5:3b", transport: transport(name, []) });
    const status = await provider.probe();
    assert.equal(status.ready, false, name);
    assert.equal(status.connected, expectConnected, name);
  }
  process.stdout.write("KONTON Control V0.5 : présence exacte du modèle et moteur absent détectés OK\n");
}
main().catch(error => { process.stderr.write(String(error.stack || error) + "\n"); process.exitCode = 1; });
