import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {chromium} from 'playwright';

const src=p=>readFileSync(p,'utf8');
const sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const root='assets/identite/r6/sources/';
const files=[
  ['assets/logo-faille-noire.svg',root+'logo-faille-noire-zout-original.svg','7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6'],
  [root+'interstice-retrace-zout-original.svg',root+'interstice-retrace-zout-original.svg','b73b35b50f9ac94c933467e71e0eeb2750006fa18d719279e9b8356397adfeef'],
  [root+'interstice-reference-visuelle-zout-original.svg',root+'interstice-reference-visuelle-zout-original.svg','659133e892072e91f61bb018421ea9d96ac4016f21da5aa4bfbc806efca82cf6']
];

test('R6 : exactitude SHA-256 originaux et sauvegarde des actifs historiques',()=>{
 for(const [active,original,hash] of files){assert.equal(sha(original),hash,original);assert.equal(sha(active),hash,active)}
 assert.equal(src('assets/archives/logo-faille-noire-pre-r6.svg'),src('assets/archives/logo-faille-noire-pre-r4.svg'));
 assert.equal(src('assets/archives/logo-interstice-pre-r6.svg'),src('assets/archives/logo-interstice-pre-r4.svg'));
 const ancien=src('assets/archives/logo-interstice-pre-r6.svg');
 assert.notEqual(src('assets/logo-interstice.svg'),ancien,'ancien logo toujours actif');
 const imageSource=src(root+'interstice-reference-visuelle-zout-original.svg');
 assert.match(imageSource,/<image\b[^>]*href="data:image\/jpeg;base64,/);
 assert.doesNotMatch(src('assets/logo-interstice.svg'),/<image\b/,'le nouveau logo Interstice doit être un vrai SVG');
});

test('R6 : base Faille noire strictement reprise et surcouche des points seule',()=>{
 const f=src('assets/logo-faille-noire.svg');
 const original=src(root+'interstice-retrace-zout-original.svg');
 const groupe=original.match(/<g id="noeuds-cercles"[\s\S]*?<\/g>/)?.[0];
 assert.ok(groupe,'nœuds Interstice source manquants');
 const expected=f.replace('<title>La Faille noire, vectorisation approchée</title>','<title>Interstice</title><desc>Base graphique identique au logo La Faille noire validé par Zout, complétée par un point rouge central et les nœuds du réseau.</desc>').replace('</svg>',groupe+'</svg>');
 const newSvg=src('assets/logo-interstice.svg');
 assert.equal(newSvg,expected,'base Faille noire divergente ou nœuds remplacés');
 assert.equal(src('assets/identite/r6/candidats/interstice-base-commune-r6.svg'),newSvg);
 assert.equal((groupe.match(/<circle\b/g)||[]).length,30,'nœuds candidats modifiés');
 assert.ok(groupe.includes('cx="350" cy="377" r="33"'));
 for(const svg of [newSvg,f]){
  assert.match(svg,/viewBox="0 0 665 665"/);
  assert.doesNotMatch(svg,/<script\b|<foreignObject\b|<text\b|(?:href|src)=["']https?:\/\//i);
 }
});

test('R6 : les chemins référencés utilisent les deux actifs canoniques',()=>{
 const paths=['index.html','wiki.html','bibliotheque.html','atlas.html','participer.html','style.css','design-system/faille-navigation-interactive.html','design-system/entree-faille-candidate.html','integration-graphique/index.html'];
 let found=0;
 for(const p of paths){
   const t=src(p);
   if(t.includes('logo-faille-noire.svg')||t.includes('logo-interstice.svg'))found++;
   assert.doesNotMatch(t,/assets\/candidats\/logo-(?:faille-noire|interstice)-r4\.svg/,p+' pointe vers un ancien candidat');
 }
 assert.ok(found>=8,'lien aux deux chemins habituels perdu');
 const out=src('design-system/comparaison-identite-r6.html');
 for(const key of ['logo-faille-noire.svg','logo-interstice.svg','interstice-retrace-zout-original.svg','interstice-reference-visuelle-zout-original.svg']){
   assert.ok(out.includes(key),'comparatif incomplet: '+key);
 }
 assert.doesNotMatch(out,/<script\b|<form\b/);
});

test('R6 : vues 320-1920, images 32-665, mode sans JS, impression A4',async()=>{
 mkdirSync('artifacts/r6-identite',{recursive:true});
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try{
  const widths=[320,390,768,1024,1280,1920];
  for(const width of widths){
   const page=await browser.newPage({viewport:{width,height:Math.min(1080,Math.round(width*1.5))},deviceScaleFactor:1,javaScriptEnabled:false,reducedMotion:'reduce'});
   try{
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const res=await page.goto('http://127.0.0.1:8000/design-system/comparaison-identite-r6.html',{waitUntil:'networkidle'});
    assert.equal(res.status(),200);
    const imgs=await page.locator('img').evaluateAll(xs=>xs.map(x=>({loaded:x.complete&&x.naturalWidth>0,w:x.naturalWidth,h:x.naturalHeight,alt:x.getAttribute('alt')})));
    assert.ok(imgs.every(x=>x.loaded),'échec de chargement SVG à '+width+': '+JSON.stringify(imgs));
    const metric=await page.evaluate(()=>({vw:innerWidth,sw:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,imgCount:document.querySelectorAll('img').length}));
    assert.equal(metric.h1,1);
    assert.ok(metric.sw<=metric.vw+1,'débordement document '+width+': '+metric.sw);
    for(const a of await page.locator('a[href^="#"]').all()){
      const id=(await a.getAttribute('href')).slice(1);
      assert.ok(await page.locator('#'+id).count(),'ancre absente '+id);
    }
    assert.deepEqual(errors,[]);
    console.log('R6_VIEWPORT '+JSON.stringify({width,...metric,imagesLoaded:imgs.length,js:false,reducedMotion:true}));
    await page.screenshot({path:'artifacts/r6-identite/comparaison-'+width+'.png',fullPage:true});
    if(width===1280){
     await page.emulateMedia({media:'print'});
     await page.pdf({path:'artifacts/r6-identite/comparaison-a4.pdf',format:'A4',printBackground:true});
    }
   }finally{await page.close()}
  }
  const page=await browser.newPage({viewport:{width:900,height:900}});
  try{
   for(const logo of ['logo-faille-noire.svg','logo-interstice.svg'])
    for(const size of [32,48,64,96,192,390,665]){
     await page.setContent('<html lang="fr"><body style="margin:0;background:#bcb4ac"><img alt="Symbole R6" src="http://127.0.0.1:8000/assets/'+logo+'" width="'+size+'" height="'+size+'"></body></html>');
     const img=page.locator('img'); await img.evaluate(x=>x.decode());
     assert.ok(await img.evaluate(x=>x.naturalWidth===665));
     await img.screenshot({path:'artifacts/r6-identite/'+logo.replace('.svg','')+'-'+size+'px.png'});
    }
  }finally{await page.close()}
 }finally{await browser.close()}
});
