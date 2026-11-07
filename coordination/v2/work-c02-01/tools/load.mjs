import {readFileSync} from 'node:fs';
const read = name => JSON.parse(readFileSync(new URL(`../data/${name}.json`, import.meta.url), 'utf8'));
export function loadBundle() {
  return {resources: read('resources').resources, parcours: read('parcours').parcours, relations: read('relations').relations, objections: read('objections').objections, sources: read('sources').sources, navigation: read('navigation')};
}
