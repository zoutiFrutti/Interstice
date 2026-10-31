#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const script = fs.readFileSync(path.join(__dirname, "navigation.js"), "utf8");
const expected = ["home", "agents", "github", "outils"];

for (const key of expected) {
  assert.match(html, new RegExp('id="screen-' + key + '"'));
  assert.match(html, new RegExp('data-screen="' + key + '"'));
  assert.match(html, new RegExp('aria-controls="screen-' + key + '"'));
}
assert.match(html, /<script src="\.\/navigation.js" defer><\/script>/);
assert.equal((html.match(/class="app-navigation"/g) || []).length, 1);

function element(key, nav = false) {
  const attributes = {};
  return {
    hidden: key !== "home",
    dataset: nav ? { screenTarget: key } : { screen: key },
    attributes,
    classList: { toggle(name, enabled) { attributes["class:" + name] = enabled; } },
    setAttribute(name, value) { attributes[name] = value; },
    removeAttribute(name) { delete attributes[name]; },
    addEventListener(type, callback) { this["on" + type] = callback; },
    focus() { this.focused = true; }
  };
}
const screens = expected.map(name => element(name));
const buttons = expected.map(name => element(name, true));
const shortcut = element("agents", true);
const listeners = {};
const windowMock = {
  location: { hash: "" },
  addEventListener(name, callback) { listeners[name] = callback; },
  scrollTo() {}
};
const documentMock = {
  title: "",
  querySelectorAll(selector) {
    if (selector === "[data-screen]") return screens;
    if (selector === ".app-navigation [data-screen-target]") return buttons;
    if (selector === "[data-screen-target]") return [...buttons, shortcut];
    throw Error("Unexpected selector " + selector);
  }
};
vm.runInNewContext(script, { document: documentMock, window: windowMock, Map, Array });
assert.deepEqual(screens.map(s => s.hidden), [false, true, true, true]);
buttons[2].onclick();
listeners.hashchange();
assert.deepEqual(screens.map(s => s.hidden), [true, true, false, true]);
assert.equal(buttons[2].attributes["aria-current"], "page");
assert.equal(buttons[0].attributes["aria-current"], undefined);
assert.equal(screens[2].focused, true);
shortcut.onclick();
listeners.hashchange();
assert.deepEqual(screens.map(s => s.hidden), [true, false, true, true]);

windowMock.location.hash = "#garbage";
listeners.hashchange();
assert.deepEqual(screens.map(s => s.hidden), [false, true, true, true]);
assert.match(documentMock.title, /Accueil/);
console.log("KONTON Control v0.7 : navigation, deep links, accès focus et retour accueil OK");
