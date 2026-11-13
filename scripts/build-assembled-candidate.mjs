// Owner-private review package only; no deployment, collection or editorial promotion.
import {cp,mkdir,readFile,writeFile,readdir} from 'node:fs/promises';
import {resolve,join,dirname,relative} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {READINGS} from '../assets/nav-01/reading-catalogue.mjs';
import {buildReviewHub} from './build-review-hub.mjs';
import {MEDIA} from '../assets/nav-01/media-catalogue.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const [sourceArg,outArg,scope]=process.argv.slice(2);if(!sourceArg||!outArg||scope!=='--owner-private-review')throw Error('Explicit owner-private review scope required');
const source=resolve(sourceArg),out=resolve(outArg);if(source===out||out===root||root.startsWith(out+'/'))throw Error('Separate output required');
await mkdir(out,{recursive:true});if((await readdir(out)).length)throw Error('Use an empty output directory; no files are removed');
await cp(source,out,{recursive:true});
const oldHome=await readFile(join(out,'index.html'),'utf8');await writeFile(join(out,'accueil.html'),oldHome);
await writeFile(join(out,'index.html'),await readFile(join(out,'explorer.html')));
execFileSync('python3',[join(root,'scripts/reading/build.py'),join(out,'lectures'),JSON.stringify(READINGS),JSON.stringify(MEDIA)]);
const reviewSummary=await buildReviewHub(out);
const guard=`document.addEventListener('submit',event=>{event.preventDefault();event.stopImmediatePropagation();},true);document.addEventListener('DOMContentLoaded',()=>{for(const form of document.forms){const notice=document.createElement('p');notice.textContent='Prévisualisation privée : envois suspendus. Aucune information ne sera envoyée.';notice.setAttribute('role','status');form.prepend(notice);for(const button of form.querySelectorAll('button[type="submit"],input[type="submit"]'))button.disabled=true;}});`;
await writeFile(join(out,'assets/assembly-preview-guard.js'),guard+'\n');
// Preserve old home anchors without changing the current public site.
const home=join(out,'index.html');let entry=await readFile(home,'utf8');
const redirects=`(()=>{const old=new Set(['proposer','propositions','decouvrir','bibliotheque','habiter-autrement','echanger']);if(old.has(location.hash.slice(1)))location.replace('accueil.html'+location.hash);})();`;
entry=entry.replace('</head>','<script>'+redirects+'</script></head>');
entry=entry.replace('<a class="manifest-short"','<a class="manifest-short" href="lectures/index.html">Tous les articles</a><a class="manifest-short"');
entry=entry.replace('<a class="manifest-short"','<a class="manifest-short" href="relectures/index.html">État des travaux</a><a class="manifest-short"');
entry=entry.replace('</body>','<noscript><p><a href="accueil.html#propositions">Propositions et accueil historique</a> · <a href="accueil.html#proposer">Préparer une proposition — envois suspendus</a></p></noscript></body>');
await writeFile(home,entry);
async function files(dir,prefix=''){let result=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=prefix+e.name;if(e.isDirectory())result.push(...await files(join(dir,e.name),p+'/'));else if(e.isFile())result.push(p);else throw Error('Non-regular output entry');}return result;}
const prefix='https://zoutifrutti.github.io/Interstice/';
await writeFile(join(out,'wiki-mutualiser-materiel.html'),'<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mutualiser le matériel · Accès conservé</title><link rel="stylesheet" href="assets/nav-01/reading.css"></head><body><main><h1>Mutualiser le matériel</h1><p>Cette adresse était citée dans le site, mais aucun article distinct n’a été retrouvé. Ce repère conserve l’accès sans présenter un texte inexistant.</p><p><a href="wiki-autonomie-materielle-savoir-faire.html">Lire le texte existant : autonomie matérielle et savoir-faire</a></p><p><a href="index.html#porte/entraide/mutualiser">Ouvrir Mutualiser dans Faire Ensemble</a></p></main></body></html>');
for(const name of await files(out)){
 if(name.endsWith('.html')){
  const path=join(out,name);let text=await readFile(path,'utf8');
  text=text.replace(/\b(href|src)=(['"])(?:\/pages\/zoutiFrutti\/Interstice\/|\/Interstice\/)([^'"]*)\2/g,(_,attribute,q,target)=>attribute+'='+q+(relative(dirname(name),target.split(/[?#]/)[0])||'index.html')+target.slice(target.split(/[?#]/)[0].length)+q);
  text=text.replace(/\bhref=(['"])(https:\/\/zoutifrutti\.github\.io\/Interstice\/[^'"]*)\1/g,(whole,q,href)=>{
   const u=new URL(href),target=u.pathname.slice('/Interstice/'.length)||'index.html';
   const page=target==='index.html'&&['#proposer','#propositions','#decouvrir','#bibliotheque','#habiter-autrement','#echanger'].includes(u.hash)?'accueil.html':target;
   return 'href='+q+(relative(dirname(name),page)||'index.html')+u.search+u.hash+q;
  });
  text=text.replace(/<form\b[^>]*>/gi,tag=>tag+'<fieldset disabled><p>Prévisualisation privée : envois et connexion désactivés.</p>').replace(/<\/form>/gi,'</fieldset></form>');
  text=text.replace('</head>',`<meta name="robots" content="noindex,nofollow"><meta http-equiv="Content-Security-Policy" content="connect-src 'self'; form-action 'none'; frame-src 'none'; object-src 'none'"></head>`);
  text=text.replace('</head>','<script defer src="'+(relative(dirname(name),'assets/assembly-preview-guard.js'))+'"></script></head>');await writeFile(path,text);
 }
}
// Existing tool URLs point inside this isolated package, not to live forms.
const graph=join(out,'assets/nav-01/graph-data.mjs');let code=await readFile(graph,'utf8');code=code.replaceAll(prefix+'index.html#','accueil.html#').replaceAll(prefix+'participer.html','participer.html');await writeFile(graph,code);
const app=join(out,'assets/nav-01/explorer.mjs');code=await readFile(app,'utf8');code=code.replace("'https://zoutifrutti.github.io/Interstice/'+door.legacy","door.legacy");await writeFile(app,code);
const shortcuts=join(out,'assets/nav-01/legacy-quick-links.mjs');
let shortcutCode=await readFile(shortcuts,'utf8');
shortcutCode=shortcutCode.replace("'https://zoutifrutti.github.io/Interstice/'+item.href","(item.href.startsWith('index.html#')?'accueil.html'+item.href.slice(10):item.href)");
await writeFile(shortcuts,shortcutCode);
const summary={scope:'owner-private-review',source_head:execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim(),source_home_preserved_as:'accueil.html',review_summary:reviewSummary,six_doors:true,tertiary_menus:31,existing_texts:READINGS.length,candidate_media_notices:MEDIA.length,c07_public_cards:0,editorial_visas_added:0,forms_disabled:true,public_deployment_authorized:false};
await writeFile(join(out,'assembly-status.json'),JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify(summary));
