#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const html=fs.readFileSync(path.join(__dirname,"index.html"),"utf8");
const js=fs.readFileSync(path.join(__dirname,"live-summary.js"),"utf8");
const gradle=fs.readFileSync(path.join(__dirname,"android/app/build.gradle"),"utf8");
assert.match(html,/id="brief-refresh"/);
assert.match(html,/src="\.\/live-summary\.js"/);
assert.match(js,/credentials: "omit"/);
assert.match(js,/method: "GET"/);
assert.match(js,/per_page=30/);
assert.match(js,/per_page=20/);
assert.match(js,/Décisions de Zout : non synchronisées/);
assert.doesNotMatch(js,/Authorization|Bearer|GH_TOKEN|GITHUB_TOKEN|localStorage|method:\s*["']POST["']/);
assert.match(gradle,/'live-summary\.js'/);
console.log("KONTON V1.5 : GitHub public seulement, décision non simulée, bundle Android OK");
