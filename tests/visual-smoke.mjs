/* Test de fumée graphique. Aucune écriture ni soumission de formulaire.
   Usage : installer playwright, servir le dépôt sur localhost:8765, puis node tests/visual-smoke.mjs */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const base = process.env.QA_BASE_URL || "http://127.0.0.1:8765";
const sizes = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1280, height: 800 }
];
const pages = ["index.html", "bibliotheque.html", "wiki.html", "manifeste-v2-5.html", "participer.html"];
const results = [];
let errors = 0;

await mkdir("visual-qa", { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const screen of sizes) {
    const context = await browser.newContext({
      viewport: { width: screen.width, height: screen.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
      colorScheme: "dark"
    });
    for (const file of pages) {
      const page = await context.newPage();
      const pageErrors = [];
      const networkErrors = [];
      page.on("pageerror", error => pageErrors.push(error.message));
      page.on("response", response => {
        if (response.url().startsWith(base) && response.status() >= 400) {
          networkErrors.push(response.status() + " " + response.url());
        }
      });
      const response = await page.goto(base + "/" + file, { waitUntil: "networkidle", timeout: 30000 });
      await page.evaluate(() => document.fonts.ready);
      const fonts = await page.evaluate(async () => {
        const [body,display] = await Promise.all([
          document.fonts.load('400 18px "Atkinson Hyperlegible Next"', "é"),
          document.fonts.load('700 40px "Barlow Condensed"', "É")
        ]);
        return {
          body: body.some(f => f.status === "loaded"),
          display: display.some(f => f.status === "loaded"),
          bodyFamily: getComputedStyle(document.body).fontFamily,
          titleFamily: getComputedStyle(document.querySelector("h1")).fontFamily
        };
      });
      const dom = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        documentWidth: document.documentElement.scrollWidth,
        missingImages: [...document.images].filter(x => !x.complete || !x.naturalWidth).map(x => x.getAttribute("src")),
        h1: document.querySelectorAll("h1").length,
        h2: document.querySelectorAll("article h2").length,
        h3: document.querySelectorAll("article h3").length,
        hasNonAdoptedNotice: document.body.innerText.includes("non adoptée collectivement"),
        forms: document.querySelectorAll("form").length,
        editorialPanels: document.querySelectorAll(".editorial-illustration").length
      }));
      const failures = [];
      if (response.status() !== 200) failures.push("HTTP " + response.status());
      if (dom.documentWidth > screen.width + 1) failures.push("horizontal overflow " + dom.documentWidth + "px");
      if (dom.missingImages.length) failures.push("missing images " + dom.missingImages.join(", "));
      if (!fonts.body || !fonts.display) failures.push("WOFF2 fonts not loaded");
      if (!fonts.bodyFamily.includes("Atkinson Hyperlegible Next") || !fonts.titleFamily.includes("Barlow Condensed")) failures.push("font-family mismatch");
      if (dom.h1 !== 1) failures.push("h1 count " + dom.h1);
      if (file === "manifeste-v2-5.html" && (dom.h2 !== 6 || dom.h3 !== 2 || !dom.hasNonAdoptedNotice)) failures.push("manifest heading/status mismatch");
      if (["index.html","bibliotheque.html","wiki.html"].includes(file) && dom.editorialPanels !== 1) failures.push("missing editorial panel");
      if (["index.html","bibliotheque.html","wiki.html"].includes(file) && dom.forms !== 1) failures.push("form missing");
      if (pageErrors.length) failures.push("JS: " + pageErrors.join(" | "));
      if (networkErrors.length) failures.push("HTTP assets: " + networkErrors.join(" | "));
      const filename = file.replace(".html", "") + "-" + screen.name + ".png";
      await page.screenshot({ path: "visual-qa/" + filename, fullPage: false });
      results.push({ file, screen: screen.name, fonts, dom, failures, pageErrors, networkErrors, screenshot: filename });
      if (failures.length) errors++;
      console.log((failures.length ? "FAIL " : "PASS ") + file + " @" + screen.name + (failures.length ? " :: " + failures.join(" ; ") : ""));
      await page.close();
    }
    await context.close();
  }
} finally {
  await browser.close();
}
await writeFile("visual-qa/report.json", JSON.stringify({ testedAt: new Date().toISOString(), base, results, errors }, null, 2));
if (errors) process.exitCode = 1;
