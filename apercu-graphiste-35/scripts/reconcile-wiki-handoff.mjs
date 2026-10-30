#!/usr/bin/env node
// Registre local idempotent : ne publie rien et ne contacte aucun service.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
const root=resolve(import.meta.dirname,'..');
const id=process.argv[2],ledgerPath=process.argv[3];
if(!id||!ledgerPath||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))throw Error('Usage: node scripts/reconcile-wiki-handoff.mjs ID PATH-REGISTRY');
const file=join(root,'coordination/wiki-review-queue',id+'.json');
const doc=JSON.parse(readFileSync(file,'utf8'));
if(doc.id!==id||doc.editorial_approval!==false||doc.publication_status!=='not_published'||doc.status!=='needs_review')throw Error('Etat invalide');
const fingerprint=createHash('sha256').update([doc.id,doc.source_document.blob_sha,doc.status].join(':')).digest('hex');
const ledger=existsSync(ledgerPath)?JSON.parse(readFileSync(ledgerPath,'utf8')):{schema_version:1,entries:{}};
if(ledger.schema_version!==1||!ledger.entries||Array.isArray(ledger.entries))throw Error('Registre incompatible');
const existing=ledger.entries[id];
if(existing&&existing.source_sha!==doc.source_document.blob_sha)throw Error('SOURCE_CHANGED: revue de provenance requise avant reprise');
if(existing&&existing.fingerprint===fingerprint){console.log('UNCHANGED '+id);process.exit(0)}
ledger.entries[id]={id,source_sha:doc.source_document.blob_sha,fingerprint,stage:'awaiting_human_review',editorial_approval:false,supabase_submission_id:null};
mkdirSync(resolve(ledgerPath,'..'),{recursive:true});
writeFileSync(ledgerPath,JSON.stringify(ledger,null,2)+'\n',{flag:'w'});
console.log(existing?'UPDATED '+id:'CREATED '+id);
