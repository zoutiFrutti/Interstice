import {readFileSync, existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve, dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {loadBundle} from './load.mjs';
import {validateBundle} from '../lib/catalogue.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../..');
const bundle = loadBundle();
const contract = validateBundle(bundle);
const preservation = JSON.parse(readFileSync(new URL('../data/main-preservation.json', import.meta.url)));
const changed = [];
for (const blob of preservation.blobs) {
  const file = resolve(root, blob.path);
  if (!existsSync(file)) { changed.push(blob.path); continue; }
  const bytes = readFileSync(file);
  const hash = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
  if (hash !== blob.sha) changed.push(blob.path);
}
const idsOf = text => new Set([...text.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map(match => match[1]));
const historicalFailures = [];
for (const route of bundle.navigation.historical_routes) {
  const [path, anchor] = route.split('#');
  const file = resolve(root, path);
  if (!existsSync(file) || (anchor && !idsOf(readFileSync(file, 'utf8')).has(anchor))) historicalFailures.push(route);
}
const unresolvedSources = bundle.sources.filter(source => source.origin === 'repo_main' && !existsSync(resolve(root, source.path))).map(source => source.id);
const preexistingBrokenLinks = [];
const pages = preservation.blobs.map(blob => blob.path).filter(path => path.endsWith('.html') && !path.startsWith('apercu-graphiste-35/'));
for (const path of pages) {
  const text = readFileSync(resolve(root, path), 'utf8');
  for (const match of text.matchAll(/\bhref\s*=\s*["']([^"']*)["']/g)) {
    const href = match[1];
    if (!href || /^(?:[a-z]+:|\/\/)/i.test(href)) continue;
    let decoded;
    try { decoded = decodeURIComponent(href.replaceAll('&amp;', '&')); } catch { preexistingBrokenLinks.push({from: path, href, reason: 'encodage'}); continue; }
    const [part, anchor] = decoded.split('#');
    const target = part ? resolve(root, dirname(path), part.split('?')[0]) : resolve(root, path);
    if (!existsSync(target)) preexistingBrokenLinks.push({from: path, href, reason: 'fichier_absent'});
    else if (anchor && target.endsWith('.html') && !idsOf(readFileSync(target, 'utf8')).has(anchor)) preexistingBrokenLinks.push({from: path, href, reason: 'ancre_absente'});
  }
}
const result = {base_commit: preservation.base_commit,contract,preservation:{blobs:preservation.blobs.length,changed},historical_routes:{checked:bundle.navigation.historical_routes.length,failures:historicalFailures},source_paths:{unresolved:unresolvedSources},internal_link_inventory:{pages:pages.length,preexisting_broken_links:preexistingBrokenLinks},limits:['Liens externes non tous ouverts','Aucun visa documentaire ou juridique produit par ce contrôle','Aucun test matériel de lecteur d’écran ou tactile V2']};
console.log(JSON.stringify(result,null,2));
if (changed.length || historicalFailures.length || unresolvedSources.length) process.exitCode = 1;
