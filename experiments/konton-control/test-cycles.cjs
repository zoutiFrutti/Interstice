#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const html = fs.readFileSync(path.join(__dirname,"index.html"),"utf8");
const code = fs.readFileSync(path.join(__dirname,"cycles.js"),"utf8");
const gradle = fs.readFileSync(path.join(__dirname,"android/app/build.gradle"),"utf8");
for(const id of ["screen-cycles","cycle-messages","cycle-gates","cycle-order","cycle-mail","cycle-analyze","cycle-continue"]) {
  assert.ok(html.includes('id="'+id+'"'),id);
}
assert.match(html,/src="\.\/cycles\.js"/);
assert.match(code,/MESSAGES_C10\.md/);
assert.match(code,/DEPENDANCES_C10\.md/);
assert.match(code,/ORDRE_RELANCE_C10_2026-11-01\.md/);
assert.match(code,/credentials:"omit"/);
assert.doesNotMatch(code,/method:\s*["']POST["']|Authorization|innerHTML|GH_TOKEN|GITHUB_TOKEN|fetch\([^)]*\/api\//);
assert.match(gradle,/'cycles\.js'/);
console.log("KONTON Control V1.1 : cycles GitHub GET, commandes copiées, absence de mutation vérifiés");
