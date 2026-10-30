#!/usr/bin/env node
"use strict";
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

// Minimal DOM double: checks state transitions without dependencies or network.
class Element {
  constructor(tag = "div") {
    this.tag = tag;
    this.children = [];
    this.attributes = {};
    this.listeners = {};
    this.textContent = "";
    this.className = "";
    this.dataset = {};
    this.disabled = false;
    this.value = "";
    this.classList = {
      toggle: (name, active) => {
        this.className = this.className.replace(new RegExp(" ?" + name + "\\b", "g"), "").trim();
        if (active) this.className += " " + name;
      }
    };
  }
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  setAttribute(key, value) { this.attributes[key] = value; }
  addEventListener(event, fn) { this.listeners[event] = fn; }
  click() { if (this.listeners.click) this.listeners.click(); }
}
const ids = [
  "count-agents", "count-running", "count-review", "visible-count",
  "agent-list", "agent-detail", "review-queue", "review-badge",
  "event-log", "announcer", "agent-search"
];
const nodes = Object.fromEntries(ids.map(id => [id, new Element()]));
const tabs = ["all", "collectif", "personnel"].map(scope => {
  const tab = new Element("button");
  tab.dataset.scope = scope;
  return tab;
});
const document = {
  getElementById(id) { return nodes[id]; },
  createElement(tag) { return new Element(tag); },
  querySelectorAll(selector) { return selector === "[data-scope]" ? tabs : []; }
};
let timerId = 1;
const timers = new Map();
const window = {
  setTimeout(fn) { const id = timerId++; timers.set(id, fn); return id; },
  clearTimeout(id) { timers.delete(id); }
};
const flatten = element => [element, ...element.children.flatMap(flatten)];
const button = className => flatten(nodes["agent-detail"]).find(element => element.className === className);
const code = readFileSync(join(__dirname, "app.js"), "utf8");
assert.doesNotMatch(code, /\b(fetch|XMLHttpRequest|WebSocket|localStorage|sessionStorage)\s*\(/);
vm.runInNewContext(code, { document, window, Date, Map, String });

assert.equal(nodes["count-agents"].textContent, "6");
assert.equal(nodes["count-review"].textContent, "2");
assert.equal(nodes["review-queue"].children.length, 2);

assert.equal(button("control go").disabled, false);
button("control go").click();
assert.equal(nodes["count-running"].textContent, "1");
assert.equal(button("control stop").disabled, false);
button("control stop").click();
assert.equal(nodes["count-running"].textContent, "0");
assert.equal(nodes["count-review"].textContent, "2");
assert.equal(timers.size, 0);

button("control go").click();
for (const action of timers.values()) action();
assert.equal(nodes["count-review"].textContent, "3");
flatten(nodes["review-queue"]).find(element => element.className === "small-btn approve").click();
assert.equal(nodes["count-review"].textContent, "2");

tabs[2].click();
assert.equal(nodes["visible-count"].textContent, "2 visibles");
assert.equal(nodes["review-queue"].children.length, 1);
nodes["agent-search"].listeners.input({ target: { value: "inexistant" } });
assert.equal(nodes["visible-count"].textContent, "0 visibles");

process.stdout.write("KONTON Control V0 : tests de simulation OK\n");
