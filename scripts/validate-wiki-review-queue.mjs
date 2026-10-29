#!/usr/bin/env node
// Validate documentary review queue. No Supabase write, approval, or publication.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const queue = join(root, 'coordination/wiki-review-queue');
const required = ['schema_version','id','origin_atelier','created_date','title','type','status','status_scope','editorial_approval','publication_status','source_document','sources','review_requirements','review_history','supabase_submission_id'];
const seen = new Set();
const issues = [];
for (const filename of readdirSync(queue).filter(x => x.endsWith('.json'))) {
  const key = join(queue,filename);
  let doc;
  try { doc = JSON.parse(readFileSync(key,'utf8')); }
  catch(e) { issues.push(filename+': JSON invalide: '+e.message); continue; }
  for (const field of required) if (!(field in doc)) issues.push(filename+': champ manquant: '+field);
  if (typeof doc.id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(doc.id)) issues.push(filename+': identifiant invalide');
  if (seen.has(doc.id)) issues.push(filename+': identifiant duplique');
  seen.add(doc.id);
  if (filename !== doc.id+'.json') issues.push(filename+': nom de fichier different de l identifiant');
  if (doc.schema_version !== 1 || doc.status !== 'needs_review' || doc.status_scope !== 'github_documentary_queue_only') issues.push(filename+': statut de file interdit');
  if (doc.editorial_approval !== false || doc.publication_status !== 'not_published') issues.push(filename+': approbation ou publication non autorisee');
  if (doc.supabase_submission_id !== null) issues.push(filename+': reference Supabase non verifiee');
  if (!Array.isArray(doc.sources) || doc.sources.length === 0 || !doc.sources.every(s => typeof s === 'string' && s.startsWith('https://'))) issues.push(filename+': sources absentes ou invalides');
  if (!Array.isArray(doc.review_requirements) || doc.review_requirements.length === 0) issues.push(filename+': controles de relecture absents');
  if (!Array.isArray(doc.review_history) || !doc.review_history.length) issues.push(filename+': historique absent');
  const source = doc.source_document;
  if (!source || source.repository !== 'zoutiFrutti/Interstice' || !source.path?.startsWith('coordination/') || !source.blob_sha?.match(/^[0-9a-f]{40}$/)) issues.push(filename+': provenance GitHub incomplete');
  if (source?.ref === 'main' && !existsSync(join(root,source.path))) issues.push(filename+': fichier source absent de la copie locale');
}
if (seen.size === 0) issues.push('Aucune fiche candidate');
if (issues.length) { console.error(issues.join('\n')); process.exit(1); }
console.log('File documentaire validee: '+seen.size+' contribution(s), aucune publication automatique.');
