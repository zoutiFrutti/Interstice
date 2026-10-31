#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const { resolveScope, ensureScopeOnly, classifyRepo } = require("./scope-policy.cjs");

assert.deepEqual(resolveScope({}), {
  scope: "collectif", allowed: ["zoutiFrutti/Interstice"]
});
assert.equal(classifyRepo("zoutiFrutti/Interstice"), "collectif");
assert.equal(classifyRepo("zoutiFrutti/KawaGo"), "personnel");
assert.equal(classifyRepo("other/Interstice"), null);
assert.deepEqual(resolveScope({
  KONTON_CONTROL_SCOPE: "personnel",
  KONTON_CONTROL_REPOS: "zoutiFrutti/KawaGo,zoutiFrutti/Toto-Black,zoutiFrutti/KawaGo"
}), {
  scope: "personnel", allowed: ["zoutiFrutti/KawaGo", "zoutiFrutti/Toto-Black"]
});
assert.throws(() => resolveScope({ KONTON_CONTROL_SCOPE: "all" }), /doit valoir/);
assert.throws(() => resolveScope({ KONTON_CONTROL_SCOPE: "personnel" }), /invalide ou vide/);
assert.throws(() => resolveScope({
  KONTON_CONTROL_SCOPE: "collectif",
  KONTON_CONTROL_REPOS: "zoutiFrutti/Interstice,zoutiFrutti/KawaGo"
}), /Mélange/);
assert.throws(() => resolveScope({
  KONTON_CONTROL_SCOPE: "personnel",
  KONTON_CONTROL_REPOS: "zoutiFrutti/KawaGo,zoutiFrutti/Interstice"
}), /Mélange/);
assert.throws(() => resolveScope({
  KONTON_CONTROL_SCOPE: "collectif", KONTON_CONTROL_REPOS: "zoutiFrutti/Interstice,../../bad"
}), /invalide/);
assert.throws(() => ensureScopeOnly([{ scope: "collectif" }, { scope: "personnel" }], "collectif"), /refusé/);
assert.doesNotThrow(() => ensureScopeOnly([{ scope: "collectif" }], "collectif"));
process.stdout.write("KONTON Control V0.5 : politique de séparation des espaces OK\n");
