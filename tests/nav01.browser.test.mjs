import test,{before,after} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile,mkdir,writeFile,mkdtemp} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {tmpdir} from 'node:os';
import {chromium,devices} from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const root=resolve('dist-nav'),artifacts=resolve('artifacts/nav01');
let server,browser,base;
const evidence={device:'Android simulé dans Chromium / Pixel 5 ; aucun téléphone physique',widths:[],errors:[],accessibility:[],zoom400:null};
const mime={'.html':'text/html; charset=utf-8','.mjs':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
before(async()=>{
  await mkdir(artifacts,{recursive:true});
  server=createServer(async(req,res)=>{
    try{
      const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
      if(!path.startsWith('/Interstice/')){res.writeHead(404).end();return;}
      const file=resolve(root,path.slice('/Interstice/'.length)||'index.html');
      if(!file.startsWith(root+'/')){res.writeHead(403).end();return;}
      const bytes=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'text/plain'}).end(bytes);
    }catch{res.writeHead(404).end();}
  });
  await new Promise(done=>server.listen(0,'127.0.0.1',done));base=`http://127.0.0.1:${server.address().port}/Interstice/`;
  browser=await chromium.launch();
});
after(async()=>{
  await writeFile(resolve(artifacts,'evidence.json'),JSON.stringify(evidence,null,2));
  await browser?.close();await new Promise(done=>server?.close(done));
});
const camera=page=>page.locator('#world').getAttribute('viewBox');
const numbers=value=>value.split(' ').map(Number);
async function testPage(options){
  const context=await browser.newContext(options);return context.newPage();
}
async function ready(page,fragment=''){
  page.on('pageerror',error=>evidence.errors.push(error.message));
  page.on('console',message=>{if(message.type()==='error')evidence.errors.push(message.text());});
  await page.goto(base+fragment);await page.waitForFunction(()=>document.documentElement.classList.contains('enhanced'));
}
async function overflow(page){
  const dimensions=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
  assert.ok(dimensions.scroll<=dimensions.width+1,JSON.stringify(dimensions));return dimensions;
}
async function axe(page,label){
  const report=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  evidence.accessibility.push({label,violations:report.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})),incomplete:report.incomplete.map(v=>v.id)});
  assert.deepEqual(report.violations.map(v=>v.id),[],label);
}

for(const width of [320,390,768,1280])test(`entrée, portes, zoom, recentrage et repli textuel — ${width}px`,async()=>{
  const page=await testPage({viewport:{width,height:844},reducedMotion:'reduce'});
  try{
    await ready(page);await overflow(page);
    await page.screenshot({path:resolve(artifacts,`entree-${width}.png`),fullPage:true});
    await page.getByRole('link',{name:'Entrer sans animation',exact:true}).click();
    assert.equal(new URL(page.url()).hash,'#exploration');assert.equal(await page.evaluate(()=>scrollY),0);
    const original=numbers(await camera(page));
    await page.getByRole('button',{name:'Zoom avant',exact:true}).click();
    assert.ok(numbers(await camera(page))[2]<original[2]);
    await page.getByRole('button',{name:'Vue entière',exact:true}).click();
    const full=numbers(await camera(page));assert.ok(full[2]>original[2]);
    assert.equal(await page.locator('.node[data-door]:visible').count(),4);
    await page.screenshot({path:resolve(artifacts,`exploration-${width}.png`),fullPage:true});
    await page.locator('.node[data-door="mediatheque"]').click();
    assert.equal(await page.locator('#panel-title').innerText(),'Médiathèque des communs');
    assert.equal(await page.locator('#panel-title').evaluate(e=>document.activeElement===e),true);
    await overflow(page);await page.screenshot({path:resolve(artifacts,`porte-${width}.png`),fullPage:true});
    await page.getByRole('button',{name:'Fermer le panneau'}).click();
    assert.equal(await page.locator('#panel').isVisible(),false);
    await page.getByRole('button',{name:'Voir tous les liens ↓'}).click();
    assert.equal(await page.locator('#directory-details').getAttribute('open'),'');
    assert.equal(await page.locator('#textual a[href^="#porte/"]').count(),4);
    assert.equal(await page.locator('#textual a[href^="#parcours/"]').count(),7);
    evidence.widths.push({width,...await overflow(page)});
  }finally{await page.context().close();}
});

test('historique, bifurcations, liens profonds, restauration après rechargement',async()=>{
  const page=await testPage({viewport:{width:1280,height:900},reducedMotion:'reduce'});
  try{
    await ready(page,'#exploration');await page.locator('#space').focus();await page.keyboard.press('ArrowRight');
    const previous=await camera(page);await page.locator('.node[data-door="encyclopedie"]').click();
    await page.locator('#panel a[href="#parcours/PAR-001"]').click();
    const first=await page.locator('#panel .step-list a').first().getAttribute('href');
    await page.locator('#panel .step-list a').first().click();assert.equal(new URL(page.url()).hash,first);
    assert.ok(await page.locator('#panel a').filter({hasText:/Continuer|Bifurquer/}).count()>0);
    const route=page.url();await page.reload();await page.waitForFunction(()=>document.documentElement.classList.contains('enhanced'));
    assert.equal(page.url(),route);assert.match(await page.locator('#panel-body').innerText(),/encore en relecture/);
    await page.getByRole('button',{name:'Revenir à la vue précédente',exact:true}).click();
    await page.waitForURL(base+'#parcours/PAR-001');
    await page.goBack();await page.waitForURL(base+'#porte/encyclopedie');
    await page.goBack();await page.waitForURL(base+'#exploration');
    assert.equal(new URL(page.url()).hash,'#exploration');assert.equal(await camera(page),previous);
    for(const [legacy,title] of [['#wiki','Encyclopédie'],['#bibliotheque','Médiathèque'],['#atlas','Carte'],['#entraide','Entraide']]){
      await page.goto(base+legacy);assert.match(await page.locator('#panel-title').innerText(),new RegExp(title));
    }
    await page.goto(base+'#parcours/PAR-007');assert.match(await page.locator('#panel-title').innerText(),/Zapatisme/);
    await page.goto(base+'#parcours/PAR-005');assert.match(await page.locator('#panel-body').innerText(),/fiches pratiques restent fermées/);
    assert.equal(await page.locator('#panel .step-list').count(),0);
  }finally{await page.context().close();}
});

test('clavier, focus visible, représentations accessibles et manifestes',async()=>{
  const page=await testPage({viewport:{width:1280,height:900},reducedMotion:'reduce'});
  try{
    await ready(page);await axe(page,'entrée');
    await page.getByRole('link',{name:'Entrer dans la faille',exact:true}).focus();await page.keyboard.press('Enter');
    assert.equal(await page.locator('#space').evaluate(e=>document.activeElement===e),true);
    const old=await camera(page);await page.keyboard.press('ArrowLeft');assert.notEqual(await camera(page),old);
    await page.keyboard.press('+');await page.keyboard.press('Home');
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('.node[data-door="encyclopedie"]').evaluate(e=>e===document.activeElement&&getComputedStyle(e).outlineStyle==='solid'),true);
    await page.keyboard.press('Enter');assert.match(await page.locator('#panel-title').innerText(),/Encyclopédie/);
    await page.keyboard.press('Escape');assert.equal(await page.locator('#panel').isVisible(),false);
    await axe(page,'exploration');
    const cdp=await page.context().newCDPSession(page);await cdp.send('Accessibility.enable');
    const tree=await cdp.send('Accessibility.getFullAXTree');
    for(const name of ['Encyclopédie des communs','Médiathèque des communs','Carte des communs','Entraide'])assert.ok(tree.nodes.some(n=>n.role?.value==='link'&&n.name?.value===name),name);
    await page.getByRole('link',{name:'Le manifeste ↗',exact:true}).click();
    await page.waitForFunction(()=>document.querySelector('#panel-body .reading'));
    assert.match(await page.locator('#panel-body').innerText(),/non adoptée collectivement/);
    await axe(page,'lecteur manifeste');
    await page.screenshot({path:resolve(artifacts,'manifeste-1280.png'),fullPage:true});
  }finally{await page.context().close();}
});

test('Android simulé : glissement, pincement à deux doigts et défilement alternatif',async()=>{
  const context=await browser.newContext({...devices['Pixel 5'],reducedMotion:'reduce'});const page=await context.newPage();
  try{
    await ready(page,'#exploration');const cdp=await context.newCDPSession(page),box=await page.locator('#space').boundingBox();
    const x=box.x+box.width/2,y=box.y+box.height/2;
    const touch=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(([x,y,id])=>({x,y,id}))});
    const initial=await camera(page);await touch('touchStart',[[x,y,0]]);await touch('touchMove',[[x+65,y+40,0]]);await touch('touchEnd',[]);
    assert.notEqual(await camera(page),initial);
    const before=numbers(await camera(page));
    await touch('touchStart',[[x-45,y,0],[x+45,y,1]]);await touch('touchMove',[[x-85,y-12,0],[x+85,y+12,1]]);await touch('touchEnd',[]);
    assert.ok(numbers(await camera(page))[2]<before[2]);
    await page.getByRole('button',{name:'Vue entière',exact:true}).click();
    await page.locator('.node[data-door="carte"]').tap();assert.match(await page.locator('#panel-title').innerText(),/Carte/);
    await page.getByRole('button',{name:'Fermer le panneau'}).tap();
    await page.getByRole('button',{name:'Déplacer la carte',exact:true}).tap();assert.equal(await page.locator('#pan-mode').getAttribute('aria-pressed'),'false');
    assert.equal(await page.locator('#space').evaluate(e=>getComputedStyle(e).touchAction),'pan-y');
    await page.screenshot({path:resolve(artifacts,'android-simulation.png'),fullPage:true});await overflow(page);
  }finally{await context.close();}
});

test('sans JavaScript : quatre portes, sept chemins et deux manifestes',async()=>{
  const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:320,height:800}});const page=await context.newPage();
  try{
    await page.goto(base);assert.equal(await page.locator('#textual a[href^="#porte/"]:visible').count(),4);
    assert.equal(await page.locator('#textual a[href^="#parcours/"]:visible').count(),7);
    await page.locator('#textual a[href="#porte/entraide"]').click();assert.equal(new URL(page.url()).hash,'#porte/entraide');
    assert.match(await page.locator('[id="porte/entraide"]').innerText(),/fiches pratiques en relecture restent fermées/);
    await overflow(page);await page.screenshot({path:resolve(artifacts,'sans-javascript-320.png'),fullPage:true});
    await page.locator('#textual a[href="manifeste-v2-5.html"]').click();assert.match(await page.locator('main').innerText(),/non adoptée collectivement/);
    await page.goto(base+'wiki.html');assert.match(await page.locator('main').innerText(),/adresse historique est conservée/);
  }finally{await context.close();}
});

test('réduction des animations : entrée et caméra immédiates',async()=>{
  const page=await testPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  try{
    await ready(page);await page.getByRole('link',{name:'Entrer dans la faille',exact:true}).click();
    assert.equal(await page.evaluate(()=>document.getAnimations().length),0);
    await page.locator('.node[data-door="entraide"]').click();
    assert.equal(await page.evaluate(()=>document.getAnimations().length),0);await axe(page,'mobile / mouvement réduit');
  }finally{await page.context().close();}
});

test('zoom navigateur réel 400 % via chrome.tabs.setZoom, sans CSS zoom',async()=>{
  const extension=resolve('tests/nav01-zoom-extension');const profile=await mkdtemp(resolve(tmpdir(),'interstice-nav01-'));
  const context=await chromium.launchPersistentContext(profile,{channel:'chromium',headless:true,viewport:{width:1280,height:900},reducedMotion:'reduce',args:[`--disable-extensions-except=${extension}`,`--load-extension=${extension}`]});
  try{
    const page=await context.newPage();await ready(page,'#exploration');
    const worker=context.serviceWorkers()[0]||await context.waitForEvent('serviceworker');
    const zoom=await worker.evaluate(async base=>{
      const tabs=await chrome.tabs.query({});const tab=tabs.find(tab=>tab.url?.startsWith(base));if(!tab)throw new Error('Onglet de test absent');
      await chrome.tabs.setZoom(tab.id,4);return chrome.tabs.getZoom(tab.id);
    },base);
    assert.ok(Math.abs(zoom-4)<1e-10);await page.waitForFunction(()=>innerWidth<=330);
    assert.equal(await page.evaluate(()=>document.documentElement.style.zoom),'');
    await page.getByRole('button',{name:'Les traversées',exact:true}).click();
    await page.locator('#panel a[href="#parcours/PAR-004"]').click();
    assert.match(await page.locator('#panel-title').innerText(),/Autogestion/);
    evidence.zoom400={chromeZoom:zoom,...await overflow(page),devicePixelRatio:await page.evaluate(()=>devicePixelRatio),method:'chrome.tabs.setZoom, profil Chromium jetable'};
    await page.screenshot({path:resolve(artifacts,'zoom-navigateur-reel-400.png'),fullPage:true});await axe(page,'zoom navigateur réel 400 %');
  }finally{await context.close();}
});

test('absence d’erreurs JavaScript dans les scénarios précédents',()=>assert.deepEqual(evidence.errors,[]));
