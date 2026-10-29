// Exécuter : node --test tests/edge-bounded-body.test.mjs
// Lit le helper directement depuis les deux sources Edge, sans réseau ni base.
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';

for (const slug of ['submit-proposal', 'submit-resource']) {
  const source = readFileSync(new URL(`../supabase/functions/${slug}/index.ts`, import.meta.url), 'utf8');
  const start = source.indexOf('async function readBoundedBody(');
  const end = source.indexOf('\nDeno.serve(', start);
  assert.ok(start >= 0 && end > start, `helper absent : ${slug}`);
  const helper = source.slice(start, end);
  const read = runInNewContext(`${helper}\nreadBoundedBody`, { Uint8Array, TextDecoder, Error });
  const request = (body) => new Request('https://example.test/', { method: 'POST', body });
  const check = async (name, body, limit, expected) => test(`${slug}: ${name}`, async () => {
    if (expected === 'BODY_TOO_LARGE') {
      await assert.rejects(read(request(body), limit), { message: expected });
    } else {
      assert.equal(await read(request(body), limit), expected);
    }
  });
  await check('corps vide', '', 4, '');
  await check('taille exacte', 'abcd', 4, 'abcd');
  await check('taille dépassée', 'abcde', 4, 'BODY_TOO_LARGE');
  await check('UTF-8 en octets', 'éé', 3, 'BODY_TOO_LARGE');
  await check('UTF-8 taille exacte', 'éé', 4, 'éé');
  test(`${slug}: flux segmenté`, async () => {
    const stream = new ReadableStream({ start(c) {
      c.enqueue(new TextEncoder().encode('ab'));
      c.enqueue(new TextEncoder().encode('cd'));
      c.close();
    }});
    assert.equal(await read({ body: stream }, 4), 'abcd');
  });
}
