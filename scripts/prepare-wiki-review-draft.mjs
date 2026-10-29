#!/usr/bin/env node
// Prépare un brouillon pour la file existante. AUCUN appel réseau et AUCUNE écriture Supabase.
import {readFileSync, existsSync} from 'node:fs';
import {resolve, join} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const id=process.argv[2];
if(!id||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)){console.error('Usage: node scripts/prepare-wiki-review-draft.mjs <id-stable>');process.exit(2)}
const file=join(root,'coordination/wiki-review-queue',id+'.json');
if(!existsSync(file)){console.error('Contribution inconnue');process.exit(2)}
const c=JSON.parse(readFileSync(file,'utf8'));
if(c.id!==id||c.status!=='needs_review'||c.editorial_approval!==false||c.publication_status!=='not_published')throw Error('Statut non autorise');
const source=resolve(root,c.source_document.path);
if(!source.startsWith(root+'/')||!existsSync(source))throw Error('Source indisponible');
const sourceText=readFileSync(source,'utf8');
const title=c.title.slice(0,180);
const theme='Archives et memoires';
const intention='Proposition documentaire issue de '+c.origin_atelier+'. Verification et relecture humaine necessaires avant toute validation.';
const body=sourceText.slice(0,25000);
const sources=c.sources.join('\n');
if(title.length<6||intention.length<20||body.length<100||sources.length>8000)throw Error('Champs incompatibles avec le formulaire existant');
const draft={id:c.id,title,theme,intention,body,sources,source_document:c.source_document,license_confirmed:false,privacy_confirmed:false,author_id:null,editorial_approval:false,publication_status:'not_published',ready_to_submit:false};
process.stdout.write(JSON.stringify(draft,null,2)+'\n');
