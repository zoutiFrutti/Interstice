#!/usr/bin/env node
"use strict";
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const code = readFileSync(join(__dirname, "github-status.js"), "utf8");
assert.doesNotMatch(code, /Authorization|Bearer |GH_TOKEN|GITHUB_TOKEN/);
const { safeRepo, permittedRequest } = require("./local-server.cjs");
assert.equal(safeRepo("zoutiFrutti/Interstice"), true);
assert.equal(safeRepo("owner/../../etc"), false);
assert.equal(safeRepo("http://bad.example"), false);

const allowed = { headers: { host: "127.0.0.1:8765", origin: "http://127.0.0.1:8765", "sec-fetch-site": "same-origin" } };
assert.equal(permittedRequest(allowed), true);
assert.equal(permittedRequest({ headers: { host: "attacker.invalid:8765" } }), false);
assert.equal(permittedRequest({ headers: { ...allowed.headers, origin: "https://attacker.invalid" } }), false);
assert.equal(permittedRequest({ headers: { ...allowed.headers, "sec-fetch-site": "cross-site" } }), false);

class Element {
  constructor(tag = "div") {
    this.tag = tag;
    this.children = [];
    this.attributes = {};
    this.listeners = {};
    this.textContent = "";
    this.className = "";
    this.value = "";
    this.disabled = false;
    this.href = "";
    this.target = "";
    this.rel = "";
  }
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  addEventListener(key, callback) { this.listeners[key] = callback; }
}
const allText = element => [element.textContent, ...element.children.map(allText)].join(" ");
const tick = () => new Promise(resolve => setImmediate(resolve));
async function simulate(hostname, responseMap) {
  const ids = ["github-dashboard", "github-feedback", "github-repo", "github-refresh", "github-source"];
  const nodes = Object.fromEntries(ids.map(id => [id, new Element()]));
  const document = {
    getElementById(id) { return nodes[id]; },
    createElement(tag) { return new Element(tag); }
  };
  const calls = [];
  const fetch = async (url, options) => {
    calls.push({ url, options });
    if (!(url in responseMap)) throw new Error("Endpoint mocked as unavailable: " + url);
    const value = responseMap[url];
    return {
      ok: value.status === undefined || value.status === 200,
      status: value.status || 200,
      async json() { return value.body !== undefined ? value.body : value; }
    };
  };
  vm.runInNewContext(code, {
    document, window: { location: { hostname } }, fetch, setTimeout, clearTimeout,
    AbortController, Date, Number, Map, Set, String, Promise, Array, Error,
    encodeURIComponent
  }, { timeout: 2000 });
  for (let i = 0; i < 8; i++) await tick();
  return { nodes, calls };
}
const api = "https://api.github.com/repos/zoutiFrutti/Interstice";
const fixtures = {
  [api]: { private: false, default_branch: "main", pushed_at: "2026-10-31T09:10:00Z" },
  [api + "/pulls?state=open&per_page=10"]: [
    { number: 51, title: "<script>Do not execute</script>", draft: true, updated_at: "2026-10-31T09:20:00Z" }
  ],
  [api + "/actions/runs?per_page=10"]: {
    workflow_runs: [
      { id: 123, name: "CI tests", head_branch: "main", status: "completed", conclusion: "failure", created_at: "2026-10-31T09:00:00Z" },
      { id: 124, name: "Lint", head_branch: "branch", status: "in_progress", conclusion: null, created_at: "2026-10-31T09:01:00Z" }
    ]
  }
};
async function main() {
  const web = await simulate("example.org", fixtures);
  assert.equal(web.calls.length, 3);
  assert.equal(web.calls.every(call => call.options.method === "GET"), true);
  const page = allText(web.nodes["github-dashboard"]);
  assert.match(page, /Pull requests ouvertes/);
  assert.match(page, /<script>Do not execute<\/script>/);
  assert.match(page, /Échec/);
  assert.match(page, /En cours/);
  assert.doesNotMatch(page, /CI globale validée/);
  const allLinks = [];
  function scan(node) { if (node.tag === "a") allLinks.push(node); node.children.forEach(scan); }
  scan(web.nodes["github-dashboard"]);
  assert.equal(allLinks.every(link => link.href.startsWith("https://github.com/zoutiFrutti/Interstice/") ||
    link.href === "https://github.com/zoutiFrutti/Interstice"), true);
  assert.equal(allLinks.every(link => link.rel === "noopener noreferrer"), true);

  const partial = { ...fixtures, [api + "/pulls?state=open&per_page=10"]: { status: 403 } };
  const degraded = await simulate("example.org", partial);
  const degradedText = allText(degraded.nodes["github-dashboard"]);
  assert.match(degradedText, /Impossible de lire les PR/);
  assert.match(degradedText, /Échec/); // other sections still render
  assert.doesNotMatch(degradedText, /Aucune PR dans la première page/);

  const local = await simulate("127.0.0.1", {
    "/api/github/repos": { mode: "read-only", repositories: ["zoutiFrutti/Interstice", "zoutiFrutti/DepotPrive"] },
    "/api/github/status?repo=zoutiFrutti%2FInterstice": {
      repo: "zoutiFrutti/Interstice", visibility: "private",
      defaultBranch: "main", pushedAt: "2026-10-31T09:00:00Z",
      prs: [], runs: [], fetchedAt: "2026-10-31T09:10:00Z"
    }
  });
  assert.equal(local.calls.length, 2);
  assert.equal(local.calls[1].url, "/api/github/status?repo=zoutiFrutti%2FInterstice");
  assert.match(allText(local.nodes["github-dashboard"]), /privé \(passerelle locale\)/);
  assert.match(local.nodes["github-source"].textContent, /Passerelle locale/);
  process.stdout.write("KONTON Control GitHub : tests API publique, dégradation et passerelle locale OK\n");
}
main().catch(error => { process.stderr.write(String(error.stack || error) + "\n"); process.exitCode = 1; });
