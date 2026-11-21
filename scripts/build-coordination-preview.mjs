// Public/synthetic data only. No runtime GitHub credential, backend or deployment.
import {readFile,writeFile,copyFile,mkdir,readdir} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {validateSeed} from '../coordination-console/model.mjs';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),source=resolve(root,'coordination-console');
const output=resolve(process.argv[2]||resolve(root,'dist-coordination'));
if(output===root||output===source)throw new Error('Sortie séparée requise');
const files=['index.html','console.css','console.mjs','model.mjs','seed-public.json'];
const allowed=new Set([...files,'assets/logo-faille-noire.svg','assets/logo-interstice.svg','README.txt','checksums.json']);
await mkdir(output,{recursive:true});
async function inspect(directory,prefix=''){
  for(const item of await readdir(directory,{withFileTypes:true})){
    const p=prefix+item.name;
    if(item.isDirectory()&&p==='assets')await inspect(resolve(directory,item.name),p+'/');
    else if(!item.isFile()||!allowed.has(p))throw new Error('Fichier hors liste dans la sortie : '+p+' ; choisir un dossier vide. Aucun fichier supprimé.');
  }
}await inspect(output);
const seed=validateSeed(JSON.parse(await readFile(resolve(source,'seed-public.json'),'utf8')));
const esc=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const fallback=`<h1 tabindex="-1">Ce qui circule</h1><p>Instantané public du ${esc(seed.source_snapshot)}, consulté le ${esc(seed.observed_on)}. Sans JavaScript : lecture seule des informations ci-dessous.</p><section class="fallback-section" id="missions"><h2>Missions documentaires</h2><p>Ces sept états sont indépendants. Un inconnu n’est pas une absence de travail.</p><ul>${seed.missions.map(m=>`<li id="mission/${esc(m.id)}"><strong>${esc(m.id)}</strong> — ${esc(m.objective)}<br>${seed.status_fields.map(k=>esc(seed.status_labels[k])+': '+(m.states[k]===null?'inconnu':m.states[k]?'oui déclaré':'non dans la source')).join(' · ')}<br><a href="${esc(m.sources[0].url)}" target="_blank" rel="noopener noreferrer">Lire la source ↗</a></li>`).join('')}</ul></section><section class="fallback-section" id="ateliers"><h2>19 profils documentés, sans activité présumée</h2><ul>${seed.ateliers.map(a=>`<li><strong>${esc(a.name)}</strong> — ${esc(a.domain)}. Activité non attestée.</li>`).join('')}</ul></section><section class="fallback-section" id="preuves"><h2>Exécutions GitHub relevées</h2><ul>${seed.executions.map(run=>`<li><a href="${esc(run.url)}" target="_blank" rel="noopener noreferrer">${esc(run.name)} ↗</a> — ${esc(run.conclusion||run.status)} — ${esc(run.updated_at)} — HEAD ${esc(run.head)}</li>`).join('')}</ul><p>Une exécution technique n’est pas une validation éditoriale. Préparation et déclenchement indisponibles sans JavaScript ; aucun backend n’est raccordé.</p></section>`;
for(const file of files){let text=await readFile(resolve(source,file),'utf8');if(file==='index.html')text=text.replace('<!-- PUBLIC-FALLBACK -->',fallback);await writeFile(resolve(output,file),text);}
await mkdir(resolve(output,'assets'),{recursive:true});
for(const name of ['logo-faille-noire.svg','logo-interstice.svg'])await copyFile(resolve(root,'assets',name),resolve(output,'assets',name));
await writeFile(resolve(output,'README.txt'),'Coordination La Faille noire × Interstice — démonstration sans backend.\nServir ce dossier par HTTP, par exemple python3 -m http.server 8080 ; ouvrir http://localhost:8080/ .\nDonnées publiques de #132 et métadonnées GitHub datées. Ni données privées, ni jeton, ni écriture, ni IA.\nLe bouton de préparation simule un brouillon C11 en mémoire. Le déclenchement est désactivé.\nLa protection d’un hébergement privé doit être assurée par la plateforme, jamais par ce JavaScript.\n');
const hashes={};for(const file of allowed)if(file!=='checksums.json')hashes[file]=createHash('sha256').update(await readFile(resolve(output,file))).digest('hex');
await writeFile(resolve(output,'checksums.json'),JSON.stringify(hashes,null,2)+'\n');
console.log('Aperçu coordination construit : '+output+' ; '+seed.missions.length+' missions documentaires, aucun backend.');
