import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {mkdirSync, writeFileSync} from 'node:fs';
import {chromium} from 'playwright';

const base = (process.env.SITE_BASE_URL || 'http://127.0.0.1:8000/Interstice/').replace(/\/?$/, '/');
const mapUrl = new URL('design-system/faille-navigation-interactive.html', base).href;
const widths = [320, 390, 768, 1024, 1280, 1920];
const destinations = [
  ['wiki', 'Wiki', 'wiki.html'],
  ['bibliotheque', 'Médiathèque', 'bibliotheque.html'],
  ['atlas', 'Atlas', 'atlas.html'],
  ['parcours', 'Parcours', 'parcours.html'],
  ['entraide', 'Entraide', 'parcours.html#entraide'],
];
const artifacts = 'artifacts/r6-int01';
mkdirSync(artifacts, {recursive: true});

function watch(page) {
  const result = {javascript: [], localLoading: [], externalLoading: []};
  page.on('pageerror', error => result.javascript.push(error.message));
  const record = (url, reason) => {
    const local = url.startsWith(base);
    result[local ? 'localLoading' : 'externalLoading'].push({url, reason});
  };
  page.on('response', response => {
    if (response.status() >= 400) record(response.url(), response.status());
  });
  page.on('requestfailed', request => {
    // Navigating away may deliberately abort an outstanding external request.
    if (!request.failure()?.errorText.includes('ERR_ABORTED')) record(request.url(), request.failure()?.errorText);
  });
  return result;
}

async function checkDocument(page, label) {
  await page.waitForLoadState('load');
  const metrics = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    brokenImages: [...document.images].filter(x => !x.complete || !x.naturalWidth).map(x => x.src),
  }));
  assert.ok(metrics.scrollWidth <= metrics.width + 2, label + ' overflow ' + JSON.stringify(metrics));
  assert.deepEqual(metrics.brokenImages, [], label + ' broken images');
  return metrics;
}

test('INT01: served logos have mandatory hashes, equal artist-approved PR149 variant', async () => {
  const expected = {
    'assets/logo-faille-noire.svg': '7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6',
    'assets/logo-interstice.svg': '0fe365cd02a238bf4486f936683d194aab6a1ee2e62e2d5a2eaee9b72eff0453',
    'assets/identite/r6/candidats/interstice-ramifications-originales-gra02.svg': '0fe365cd02a238bf4486f936683d194aab6a1ee2e62e2d5a2eaee9b72eff0453',
  };
  for (const [path, sha] of Object.entries(expected)) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200, path);
    const actual = createHash('sha256').update(Buffer.from(await response.arrayBuffer())).digest('hex');
    assert.equal(actual, sha, path);
    console.log('INT01_SERVED_SHA ' + JSON.stringify({path, sha: actual}));
  }
});

test('INT01: all destinations, keyboard focus, history, deep links and reduced motion at six widths', async () => {
  const browser = await chromium.launch({args: ['--no-sandbox']});
  const results = [];
  try {
    for (const width of widths) {
      const page = await browser.newPage({viewport: {width, height: 900}, reducedMotion: 'reduce'});
      const errors = watch(page);
      try {
        assert.equal((await page.goto(mapUrl)).status(), 200);
        assert.equal(await page.locator('.node').count(), 5);
        assert.equal(await page.locator('#rubriques a').count(), 5);
        const initial = await page.locator('#map').getAttribute('viewBox');
        // The automatic camera animation must remain disabled with reduced motion.
        await page.waitForTimeout(900);
        assert.equal(await page.locator('#map').getAttribute('viewBox'), initial);
        await checkDocument(page, 'map ' + width);
        for (const [id, label, path] of destinations) {
          const node = page.locator('[data-id="' + id + '"]');
          await node.focus();
          assert.equal(await node.evaluate(x => document.activeElement === x), true);
          const focus = await node.evaluate(x => ({style: getComputedStyle(x).outlineStyle, width: getComputedStyle(x).outlineWidth}));
          assert.notEqual(focus.style, 'none', id + ' focus missing');
          assert.notEqual(focus.width, '0px', id + ' focus width');
          await Promise.all([
            page.waitForURL(url => url.hash === '#' + id),
            page.keyboard.press('Enter'),
          ]);
          assert.equal(new URL(page.url()).hash, '#' + id);
          assert.match(await page.locator('#selection').innerText(), new RegExp(label));
          assert.equal(await page.locator('#selection a').getAttribute('href'), '../' + path);
          await page.goBack();
          await page.goForward();
          assert.equal(new URL(page.url()).hash, '#' + id);
          await page.goto(mapUrl + '#' + id);
          assert.match(await page.locator('#selection').innerText(), new RegExp(label));
          await page.locator('#selection a').focus();
          await Promise.all([page.waitForURL(new URL(path, base).href), page.keyboard.press('Enter')]);
          await checkDocument(page, path + ' ' + width);
          if (id === 'entraide') assert.equal(await page.locator('#entraide').count(), 1);
          await page.goto(mapUrl);
        }
        await page.locator('#map').focus();
        await page.keyboard.press('+');
        assert.notEqual(await page.locator('#map').getAttribute('viewBox'), initial);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('#map').getAttribute('viewBox'), initial);
        await page.screenshot({path: artifacts + '/navigation-' + width + '.png', fullPage: true});
        assert.deepEqual(errors.javascript, [], 'JavaScript ' + width);
        assert.deepEqual(errors.localLoading, [], 'local loading ' + width);
        results.push({width, destinations: 5, reducedMotion: true, ...errors});
      } finally { await page.close(); }
    }
  } finally { await browser.close(); }
  writeFileSync(artifacts + '/navigation-results.json', JSON.stringify(results, null, 2) + '\n');
  console.log('INT01_NAVIGATION ' + JSON.stringify(results));
});

test('INT01: five alternative destinations work without JavaScript at six widths', async () => {
  const browser = await chromium.launch({args: ['--no-sandbox']});
  try {
    for (const width of widths) {
      const context = await browser.newContext({javaScriptEnabled: false, viewport: {width, height: 900}, reducedMotion: 'reduce'});
      const page = await context.newPage();
      const errors = watch(page);
      try {
        await page.goto(mapUrl);
        await page.keyboard.press('Tab');
        assert.equal(await page.evaluate(() => document.activeElement.getAttribute('href')), '#rubriques');
        await page.keyboard.press('Enter');
        for (let i = 0; i < destinations.length; i++) {
          await page.goto(mapUrl + '#rubriques');
          const link = page.locator('#rubriques a').nth(i);
          await link.focus();
          await Promise.all([page.waitForURL(new URL(destinations[i][2], base).href), page.keyboard.press('Enter')]);
          await checkDocument(page, 'noJS ' + destinations[i][0] + ' ' + width);
        }
        assert.deepEqual(errors.javascript, []);
        assert.deepEqual(errors.localLoading, []);
      } finally { await context.close(); }
    }
  } finally { await browser.close(); }
});

test('INT01: catalogue filtering and empty proposal validation preserve client behavior', async () => {
  const browser = await chromium.launch({args: ['--no-sandbox']});
  try {
    const page = await browser.newPage();
    await page.goto(new URL('bibliotheque.html', base).href);
    assert.ok(await page.locator('.resource-card').count() > 0);
    await page.locator('#search').fill('r6-int01-no-such-resource-948273');
    assert.equal(await page.locator('.resource-card').count(), 0);
    await page.locator('#search').fill('');
    assert.ok(await page.locator('.resource-card').count() > 0);
    await page.goto(new URL('index.html', base).href);
    const writes = [];
    page.on('request', request => { if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method())) writes.push(request.url()); });
    await page.locator('#submit').click();
    assert.match(await page.locator('#etat').innerText(), /Indique au moins/);
    assert.deepEqual(writes, [], 'Empty form must not submit');
  } finally { await browser.close(); }
});

test('INT01: essential pages have no broken local resource or fragment links', async () => {
  const browser = await chromium.launch({args: ['--no-sandbox']});
  const checked = new Map();
  try {
    const page = await browser.newPage({javaScriptEnabled: false});
    for (const path of ['index.html', 'wiki.html', 'bibliotheque.html', 'atlas.html', 'parcours.html', 'participer.html', 'design-system/faille-navigation-interactive.html']) {
      await page.goto(new URL(path, base).href);
      const references = await page.locator('a[href],link[href],script[src],img[src]').evaluateAll(nodes => nodes.map(x => x.href || x.src));
      for (const href of references) {
        if (!href.startsWith(base)) continue;
        const target = new URL(href);
        const fragment = decodeURIComponent(target.hash.slice(1));
        target.hash = '';
        let content = checked.get(target.href);
        if (content === undefined) {
          const response = await page.request.get(target.href);
          assert.equal(response.status(), 200, path + ' → ' + href);
          content = target.pathname.endsWith('.html') ? await response.text() : '';
          checked.set(target.href, content);
        }
        if (fragment && target.pathname.endsWith('.html')) {
          const escaped = fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          assert.match(content, new RegExp('\\bid=["\x27]' + escaped + '["\x27]'), path + ' → ' + href);
        }
      }
    }
    console.log('INT01_LOCAL_LINKS ' + JSON.stringify({resourcesChecked: checked.size}));
  } finally { await browser.close(); }
});
