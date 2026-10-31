#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const http = require("node:http");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const root = fs.mkdtempSync(path.join(os.tmpdir(), "konton-http-"));
const port = String(34000 + Math.floor(Math.random() * 10000));
const child = spawn(process.execPath, [path.join(__dirname, "local-server.cjs")], {
  env: {
    ...process.env, GH_TOKEN: "", GITHUB_TOKEN: "", KONTON_AI_MODEL: "",
    KONTON_CONTROL_PORT: port, KONTON_CONTROL_REPOS: "zoutiFrutti/Interstice",
    KONTON_CONTROL_STATE_FILE: path.join(root, "tasks.json")
  },
  stdio: ["ignore", "pipe", "pipe"]
});
let serverReady = false;
let output = "";
child.stdout.on("data", data => { output += data.toString(); if (output.includes("http://")) serverReady = true; });
let serverError = "";
child.stderr.on("data", data => { serverError += data.toString(); });
const timeout = setTimeout(() => child.kill("SIGKILL"), 12000);
function request(method, pathname, body, extra = {}) {
  return new Promise((resolve, reject) => {
    const payload = body === undefined ? "" : JSON.stringify(body);
    const req = http.request({
      hostname: "127.0.0.1", port: Number(port), path: pathname, method,
      headers: { Host: "127.0.0.1:" + port, "Origin": "http://127.0.0.1:" + port,
        ...(body === undefined ? {} : { "Content-Type": "application/json", "X-Konton-Action": "local",
          "Content-Length": Buffer.byteLength(payload) }), ...extra }
    }, res => {
      const chunks = [];
      res.on("data", data => chunks.push(data));
      res.on("end", () => {
        const raw = Buffer.concat(chunks).toString("utf8");
        let data;
        try { data = JSON.parse(raw); } catch (_error) { data = raw; }
        resolve({ status: res.statusCode, data });
      });
    });
    req.on("error", reject);
    req.end(payload);
  });
}
async function ready() {
  for (let tries = 0; tries < 100; tries++) {
    if (serverReady) return;
    if (child.exitCode !== null) throw new Error("Serveur arrêté : " + serverError);
    await new Promise(resolve => setTimeout(resolve, 35));
  }
  throw new Error("Serveur local non prêt : " + serverError);
}
async function main() {
  await ready();
  const ok = await request("GET", "/api/github/repos");
  assert.equal(ok.status, 200);
  assert.deepEqual(ok.data.repositories, ["zoutiFrutti/Interstice"]);
  const rejected = await request("POST", "/api/tasks", { repo: "zoutiFrutti/Interstice", prNumber: 39 }, { "X-Konton-Action": "wrong" });
  assert.equal(rejected.status, 403);
  const crossSite = await request("GET", "/api/tasks", undefined, { Origin: "https://other.example", "Sec-Fetch-Site": "cross-site" });
  assert.equal(crossSite.status, 403);
  const create = await request("POST", "/api/tasks", { repo: "zoutiFrutti/Interstice", prNumber: 39 });
  assert.equal(create.status, 201);
  assert.equal(create.data.task.status, "queued");
  const tasks = await request("GET", "/api/tasks");
  assert.equal(tasks.status, 200);
  assert.equal(tasks.data.tasks.length, 1);
  const events = await request("GET", "/api/tasks/" + create.data.task.id + "/events");
  assert.equal(events.status, 200);
  assert.equal(events.data.events.length, 1);
  const reviewUnrun = await request("POST", "/api/tasks/" + create.data.task.id + "/review", { decision: "acknowledge" });
  assert.equal(reviewUnrun.status, 409);
  const aiCap = await request("GET", "/api/ai/capabilities");
  assert.equal(aiCap.status, 200);
  assert.equal(aiCap.data.configured, false);
  const aiDenied = await request("POST", "/api/ai/tasks", { sourceTaskId: create.data.task.id });
  assert.equal(aiDenied.status, 503);
  const aiTasks = await request("GET", "/api/ai/tasks");
  assert.equal(aiTasks.status, 200);
  assert.equal(aiTasks.data.tasks.length, 0);
  const forbidden = await request("DELETE", "/api/tasks");
  assert.equal(forbidden.status, 405);
  assert.equal(fs.existsSync(path.join(root, "tasks.json")), true);
  process.stdout.write("KONTON Control V0.3 : HTTP local, liste blanche, CSRF, journal et persistance OK\n");
}
main().catch(error => { process.stderr.write(String(error.stack || error) + "\n"); process.exitCode = 1; })
  .finally(() => { clearTimeout(timeout); child.kill("SIGTERM"); fs.rmSync(root, { force: true, recursive: true }); });
