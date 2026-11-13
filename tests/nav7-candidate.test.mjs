import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=readFileSync(resolve(root,'nav7-candidate.html'),'utf8');
const expected=[
  ['1','Faire Ensemble'],
  ['2','Atlas des communs'],
  ['3','La Vigie de la Faille'],
  ['4','Encyclopédie des communs'],
  ['5','Archives des communs'],
  ['6','Médiathèque des communs']
];
const targetPages=['index.html','atlas.html','wiki.html','squats-et-lieux-autonomes.html','bibliotheque.html','manifeste-v2-5.html','assets/logo-interstice.svg','assets/identite/r7/nav7/interstice-r7-b-base.svg'];

test('Six boutons de porte distincts exactement, ordre décidé',()=>{
  const tags=[...source.matchAll(/<button\b[^>]*class="node"[^>]*>/g)].map(m=>m[0]);
  assert.equal(tags.length,6);
  for (const [id,label] of expected) {
    assert.equal(tags.filter(tag=>tag.includes(`data-point="${id}"`)&&tag.includes(`data-door="${label}"`)).length,1);
    assert.match(tags.find(tag=>tag.includes(`data-point="${id}"`)),/aria-controls="door-details"/);
    assert.match(tags.find(tag=>tag.includes(`data-point="${id}"`)),/aria-label=/);
  }
});
test('SVG R7-B réel, vectoriel, six pôles et zones tactiles alignées',()=>{
  const rel='assets/identite/r7/nav7/interstice-r7-b-base.svg';
  assert.match(source,/src="assets\/identite\/r7\/nav7\/interstice-r7-b-base\.svg"/);
  const svg=readFileSync(resolve(root,rel),'utf8');
  assert.match(svg,/viewBox="0 0 665 665"/);
  assert.doesNotMatch(svg,/<image\\b|data:image\\//);
  for(const [number,label] of expected){
    const id=number.padStart(2,'0');
    const grp=new RegExp('<g id="r7-porte-'+id+'"[^>]*>[\\s\\S]*?<circle cx="(\\d+)" cy="(\\d+)"');
    const point=svg.match(grp);
    assert.ok(point,'SVG missing pole '+number);
    const btn=source.match(new RegExp('<button class="node" style="--x:([0-9.]+)%;--y:([0-9.]+)%"[^>]*data-point="'+number+'"[^>]*data-door="'+label+'"'));
    assert.ok(btn,'button missing or wrong position '+number);
    assert.ok(Math.abs(Number(btn[1])-Number(point[1])/665*100)<0.02,'horizontal coordinate mismatch '+number);
    assert.ok(Math.abs(Number(btn[2])-Number(point[2])/665*100)<0.02,'vertical coordinate mismatch '+number);
    assert.ok(svg.includes('id="r7-porte-'+id+'-tertiaires"'),'missing tertiary geometry '+number);
  }
  assert.match(source,/point 7 dans le dessin n'est pas simulée/);
});

test('Manifeste bouton 7 et lien direct existant',()=>{
  assert.match(source,/<button\b[^>]*data-point="7"[^>]*id="manifest-open"/);
  assert.match(source,/<dialog id="manifest-dialog"/);
  assert.match(source,/<iframe[^>]*data-src="manifeste-v2-5\.html"/);
  assert.match(source,/<a href="manifeste-v2-5\.html">Manifeste V2\.5/);
  assert.ok(existsSync(resolve(root,'manifeste-v2-5.html')));
});
test('Retour central explicite, état aria-pressed mis à jour et secours sans animation',()=>{
  assert.match(source,/<button class="center" id="reset"/);
  assert.match(source,/setAttribute\('aria-pressed','false'\)/);
  assert.match(source,/prefers-reduced-motion:reduce/);
  assert.match(source,/<nav class="direct" aria-label="Navigation textuelle sans animation"/);
  assert.match(source,/<a class="skip" href="#contenu">/);
});

test('Points tertiaires : uniquement des liens réels, sans inventer de porte Vigie',()=>{
  assert.equal((source.match(/submenus:\[/g)||[]).length,6);
  assert.match(source,/'3':\s*\{[\s\S]*?submenus:\s*\[\s*\]/);
  const expectedSubmenus=[
    ['Propositions publiques','index.html#propositions'],
    ['Proposer une idée','index.html#proposer'],
    ['Décider ensemble','wiki-decision-collective.html'],
    ['Sources de l’Atlas','atlas.html#atlas-sources'],
    ['Cartes et symboles','atlas.html#cartes-logo'],
    ['Parcours transversaux','parcours.html'],
    ['Décision collective','wiki-decision-collective.html'],
    ['Écologie sociale','wiki-ecologie-sociale-environnement.html'],
    ['Habiter et droit à la ville','wiki-logement-habitat-droit-ville.html'],
    ['Squats et lieux autonomes','squats-et-lieux-autonomes.html'],
    ['Habitat : références existantes','wiki-logement-habitat-droit-ville.html'],
    ['Bibliothèque publique','bibliotheque.html'],
    ['Rechercher une ressource','bibliotheque.html#search'],
    ['Explorer les ressources','bibliotheque.html#resources'],
    ['Proposer une référence','bibliotheque.html#resource-form']
  ];
  assert.equal(expectedSubmenus.length,15);
  for(const [label,href] of expectedSubmenus){
    assert.ok(source.includes(`['${label}','${href}']`),`missing submenu: ${label}`);
    const [file,fragment] = href.split('#');
    const actual=readFileSync(resolve(root,file),'utf8');
    if(fragment) assert.ok(actual.includes(`id="${fragment}"`),`missing anchor ${href}`);
  }
  assert.match(source,/const dot=document\.createElement\('span'\)/);
  assert.match(source,/dot\.setAttribute\('aria-hidden','true'\)/);
  assert.doesNotMatch(source,/\['[^']+','(?:coordination|supabase|docs)\//);
});

test('Aucun fichier interdit : pas de nouveau catalogue ni exposition de liens de sources Drive',()=>{
  assert.match(source,/<meta name="robots" content="noindex,nofollow">/);
  assert.doesNotMatch(source,/https?:\/\/(?:drive|docs)\.google\.com/i);
  assert.doesNotMatch(source,/fetch\s*\(|localStorage|sessionStorage|navigator\.geolocation/);
  assert.match(source,/La Vigie de la Faille.*porte en préparation/s);
});
test('Chaque lien de navigation vers un fichier local cible existe',()=>{
  for(const p of targetPages) assert.ok(existsSync(resolve(root,p)),p);
});
