#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const code = fs.readFileSync(path.join(__dirname, "pr-inspector.js"), "utf8");
const gradle = fs.readFileSync(path.join(__dirname, "android/app/build.gradle"), "utf8");
assert.match(html, /id="pr-inspect-form"/);
assert.match(html, /id="pr-inspect-number"/);
assert.match(html, /src="\.\/pr-inspector\.js"/);
assert.match(gradle, /'pr-inspector\.js'/);
assert.match(code, /method: "GET"/);
assert.match(code, /run\.head_sha === pr\.head\.sha/);
assert.match(code, /\/pulls\//);
assert.match(code, /\/actions\/runs\?head_sha=/);
assert.doesNotMatch(code, /method: "POST"|Authorization|GH_TOKEN|GITHUB_TOKEN|localStorage|innerHTML/);
console.log("KONTON Control V1.0 : inspecteur de PR public, GET strict, SHA et écran Android OK");
