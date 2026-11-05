// Isolated, allow-listed static artifact. Never copies the candidate content catalogue.
import {mkdir, readFile, writeFile, copyFile, readdir} from 'node:fs/promises';
import {resolve, dirname, relative} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {READINGS} from '../assets/nav-01/reading-catalogue.mjs';
import {MEDIA} from '../assets/nav-01/media-catalogue.mjs';
import {DOORS} from '../assets/nav-01/graph-data.mjs';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const output=resolve(process.argv[2] || resolve(root,'dist-nav'));
if(output===root)throw new Error('Le dossier de sortie doit être séparé des sources');
await mkdir(output,{recursive:true});
const files=['explorer.html','assets/logo-faille-noire.svg','assets/logo-interstice.svg','style.css','manifeste.html','manifeste-v2-5.html',
  'assets/nav-01/reading-catalogue.mjs','assets/nav-01/media-catalogue.mjs','assets/nav-01/reading-return.mjs','assets/nav-01/reading.css',
  'assets/nav-01/parcours-status.mjs','assets/nav-01/step-resources.mjs',
  'assets/nav-01/explorer.css','assets/nav-01/explorer.mjs','assets/nav-01/spatial.mjs','assets/nav-01/camera.mjs','assets/nav-01/graph-data.mjs','assets/nav-01/navigation-state.mjs'];
const allowed=new Set([...files,'index.html','README.txt','checksums.json',...DOORS.map(door=>door.legacy.split('#')[0]),'lectures/index.html',...READINGS.map(item=>'lectures/'+item.id+'.html'),...MEDIA.map(item=>'lectures/'+item.id+'.html')]);
const allowedDirs=new Set(['assets','assets/nav-01','lectures']);
async function checkOutput(directory,prefix=''){
  for(const item of await readdir(directory,{withFileTypes:true})){
    const path=prefix+item.name;
    if(item.isDirectory()&&allowedDirs.has(path))await checkOutput(resolve(directory,item.name),path+'/');
    else if(!item.isFile()||!allowed.has(path))throw new Error('Sortie contenant un fichier hors liste : '+path+' ; choisir un dossier vide. Aucun fichier supprimé.');
  }
}
await checkOutput(output);
execFileSync('python3',[resolve(root,'scripts/reading/build.py'),resolve(output,'lectures'),JSON.stringify(READINGS),JSON.stringify(MEDIA)]);
const hashes={};
for(const file of files){
  await mkdir(dirname(resolve(output,file)),{recursive:true});
  await copyFile(resolve(root,file),resolve(output,file));
  hashes[file]=createHash('sha256').update(await readFile(resolve(output,file))).digest('hex');
}
await copyFile(resolve(root,'explorer.html'),resolve(output,'index.html'));
// Compatibility pages belong only to this preview; original R6 files remain untouched.
for(const door of DOORS){
  const file=door.legacy.split('#')[0];
  const html=`<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${door.title} · Aperçu Interstice</title><link rel="stylesheet" href="assets/nav-01/explorer.css"><body><main class="directory" id="entraide"><p class="eyebrow">Aperçu candidat indépendant</p><h1>${door.title}</h1><p>Cette adresse historique est conservée. Les dossiers bloqués restent fermés. Les textes R6 existants sont disponibles en lecture dédiée.</p><p><a href="index.html#porte/${door.id}">Revenir à la porte dans la faille</a></p><p><a href="https://zoutifrutti.github.io/Interstice/${door.legacy}">Consulter l’index R6 public existant ↗</a></p><p><a href="index.html#traversees">Explorer les traversées candidates</a></p><p><a href="lectures/index.html">Lire les textes R6</a></p><p><a href="manifeste-v2-5.html">Lire le manifeste V2.5</a> · <a href="manifeste.html">Archive V2.1</a></p></main></body></html>`;
  await writeFile(resolve(output,file),html);
}
await writeFile(resolve(output,'README.txt'),'WORK-NAV-01 — Aperçu indépendant\nServir ce dossier avec un serveur HTTP statique, par exemple python3 -m http.server 8080.\nOuvrir http://localhost:8080/ . Ne pas ouvrir index.html avec file:// (modules).\nAucun déploiement de production. Quatre portes, sept chemins candidats, deux manifestes déjà publics.\n24 textes R6 existants avec leurs réserves et 10 notices média sans lecteur intégré. Les dossiers bloqués et les corps Drive restent exclus.\n');
for(const file of ['lectures/index.html',...READINGS.map(item=>'lectures/'+item.id+'.html'),...MEDIA.map(item=>'lectures/'+item.id+'.html')])hashes[file]=createHash('sha256').update(await readFile(resolve(output,file))).digest('hex');
await writeFile(resolve(output,'checksums.json'),JSON.stringify(hashes,null,2)+'\n');
console.log(`Aperçu isolé : ${relative(root,output)} ; ${files.length} fichiers sources autorisés + pages de compatibilité.`);
