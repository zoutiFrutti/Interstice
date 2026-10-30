#!/usr/bin/env node
// LA FAILLE NOIRE × INTERSTICE — contrôle documentaire local des messages d'ateliers.
// Aucune requête réseau, aucun accès à des secrets, aucune exécution de prompt IA.
// Une enveloppe déposée n'est PAS un accusé de lecture par une conversation.
import {readFile, readdir, mkdir, writeFile} from "node:fs/promises";
import {resolve, join, basename} from "node:path";
const root=resolve(process.cwd());
const dir=join(root,"coordination","ateliers");
const issues=[];
const states=new Set(["PREPAREE","DEPOSEE","VUE_PAR_ORCHESTRATEUR","ACCUSEE_PAR_ATELIER","EN_COURS","TERMINEE","BLOQUEE"]);
const loaded=async path=>JSON.parse(await readFile(path,"utf8"));
const esc=s=>String(s).replaceAll("|","\\|").replace(/[\r\n]+/g," ");
let registry;
try{registry=await loaded(join(dir,"registre.json"))}catch(e){console.error("Registre introuvable ou invalide",e.message);process.exit(1)}
const roleIds=new Set();
if(!Array.isArray(registry.roles)||!registry.roles.length)issues.push("Registre sans rôles");
else for(const r of registry.roles){
 if(typeof r.id!=="string"||!/^[a-z][a-z0-9-]+$/.test(r.id))issues.push("ID de rôle invalide");
 if(roleIds.has(r.id))issues.push("Rôle dupliqué: "+r.id);
 roleIds.add(r.id);
}
let names;
try{names=(await readdir(join(dir,"messages"))).filter(n=>n.endsWith(".json")).sort()}catch(e){console.error("Dossier de messages introuvable",e.message);process.exit(1)}
const ids=new Set(),messages=[];
for(const file of names){
 let m;try{m=await loaded(join(dir,"messages",file))}catch(e){issues.push("JSON illisible : "+file);continue}
 if(typeof m.id!=="string"||!/^[a-z0-9][a-z0-9-]{4,120}$/.test(m.id))issues.push("ID invalide : "+file);
 if(basename(file)!==m.id+".json")issues.push("Fichier != id : "+file);
 if(ids.has(m.id))issues.push("ID dupliqué : "+m.id);ids.add(m.id);
 if(!roleIds.has(m.from))issues.push("Expéditeur inconnu : "+m.id);
 if(!Array.isArray(m.to)||!m.to.length||m.to.some(id=>!roleIds.has(id)))issues.push("Destinataire inconnu : "+m.id);
 if(!states.has(m.status))issues.push("État inconnu : "+m.id);
 if(typeof m.subject!=="string"||!m.subject.trim()||m.subject.length>350)issues.push("Objet absent ou trop long : "+m.id);
 if(typeof m.mission_ref!=="string"||!m.mission_ref.startsWith("coordination/"))issues.push("Référence mission invalide : "+m.id);
 if(!Array.isArray(m.source_refs)||m.source_refs.some(x=>typeof x!=="string"))issues.push("Sources invalides : "+m.id);
 if(typeof m.created_at!=="string"||!/^\d{4}-\d\d-\d\d$/.test(m.created_at))issues.push("Date invalide : "+m.id);
 if(["ACCUSEE_PAR_ATELIER","EN_COURS","TERMINEE"].includes(m.status)&&!m.ack_at)issues.push("Accusé manquant : "+m.id);
 if(m.status==="TERMINEE"&&!m.result_ref)issues.push("Preuve de résultat manquante : "+m.id);
 if(["PREPAREE","DEPOSEE","VUE_PAR_ORCHESTRATEUR"].includes(m.status)&&m.ack_at)issues.push("Accusé artificiel ou état incohérent : "+m.id);
 messages.push(m);
}
const byRole={};
for(const id of roleIds)byRole[id]={inbox:[],outbox:[]};
for(const m of messages){
 if(roleIds.has(m.from))byRole[m.from].outbox.push(m.id);
 for(const id of Array.isArray(m.to)?m.to:[])if(roleIds.has(id))byRole[id].inbox.push(m.id);
}
const report={
 generated_at:new Date().toISOString(),
 verified_as:"CONTROLE_STRUCTURAL_SEULEMENT_AUCUNE_RECEPTION_OU_EXECUTION_IMPLICITE",
 messages:messages.length,
 failures:issues,
 roles:byRole,
 states:Object.fromEntries([...states].map(s=>[s,messages.filter(m=>m.status===s).length])),
};
const lines=[
"# Contrôle documentaire des ateliers — lecture seule",
"",
"**Aucun message GitHub ne réveille ni ne notifie automatiquement une conversation ChatGPT.**",
"",
"Enveloppes examinées : **"+messages.length+"** ; erreurs de structure : **"+issues.length+"**.",
"",
"| ID | De | Vers | Objet | État |",
"| --- | --- | --- | --- | --- |",
...messages.map(m=>"| "+esc(m.id)+" | "+esc(m.from)+" | "+esc((m.to||[]).join(", "))+" | "+esc(m.subject)+" | "+esc(m.status)+" |"),
"",
"## Anomalies",
...(issues.length?issues.map(x=>"- "+x):["Aucune anomalie structurelle détectée."]),
"",
"## Limites",
"- PREPAREE et DEPOSEE ne sont pas des accusés de réception.",
"- La validation des faits, du consentement, de l'identité des exécutants ou des adresses privées n'est PAS assurée par ce script.",
"- Ce programme n'appelle ni API IA, ni GitHub API, ni serveur externe, et ne réalise aucune opération sur les autres conversations."
];
await mkdir(join(root,"artifacts"),{recursive:true});
await writeFile(join(root,"artifacts","coordination-015-status.md"),lines.join("\n")+"\n");
await writeFile(join(root,"artifacts","coordination-015-status.json"),JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({messages:messages.length,roles:roleIds.size,errors:issues.length,states:report.states}));
if(issues.length)process.exitCode=1;
