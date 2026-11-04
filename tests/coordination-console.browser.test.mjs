import test,{before,after} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile,writeFile,mkdir,mkdtemp} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {resolve,extname} from 'node:path';
import {tmpdir} from 'node:os';
import {chromium,devices} from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const root=resolve('dist-coordination'),artifacts=resolve('artifacts/coordination-console');
const evidence={head:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),device:'Android Pixel 5 simulé ; aucun téléphone physique',captures:[],errors:[],externalRequests:[],nonGetRequests:[],accessibility:[],zoom400:null};
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.mjs':'text/javascript','.json':'application/json','.svg':'image/svg+xml'};
let server,browser,base;
before(async()=>{
  await mkdir(artifacts,{recursive:true});
  server=createServer(async(req,res)=>{
    try{
      if(req.method!=='GET'){evidence.nonGetRequests.push(req.method);res.writeHead(405).end();return;}
      const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
      if(!path.startsWith('/console/')){res.writeHead(404).end();return;}
      const file=resolve(root,path.slice('/console/'.length)||'index.html');if(!file.startsWith(root+'/')){res.writeHead(403).end();return;}
      const body=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'text/plain'}).end(body);
    }catch{res.writeHead(404).end();}
  });
  await new Promise(done=>server.listen(0,'127.0.0.1',done));base=`http://127.0.0.1:${server.address().port}/console/`;
  browser=await chromium.launch();
});
after(async()=>{await writeFile(resolve(artifacts,'evidence.json'),JSON.stringify(evidence,null,2));await browser?.close();await new Promise(done=>server?.close(done));});
async function ready(page,hash=''){
  page.on('pageerror',error=>evidence.errors.push(error.message));
  page.on('console',m=>{if(m.type()==='error')evidence.errors.push(m.text());});
  page.on('request',r=>{if(/^https?:/.test(r.url())&&!r.url().startsWith(base))evidence.externalRequests.push(r.url());});
  await page.goto(base+hash);await page.waitForFunction(()=>document.documentElement.classList.contains('enhanced'));
}
async function overflow(page){const d=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));assert.ok(d.scroll<=d.width+1,JSON.stringify(d));return d;}
async function capture(page,file,options={}){
  const{device='Chromium responsive simulé',...shotOptions}=options;
  await page.screenshot({path:resolve(artifacts,file),fullPage:true,...shotOptions});
  evidence.captures.push({file,head:evidence.head,viewport:await page.evaluate(()=>({width:innerWidth,height:innerHeight,dpr:devicePixelRatio})),hash:new URL(page.url()).hash,device});
}
async function axe(page,label){const report=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();evidence.accessibility.push({label,violations:report.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),incomplete:report.incomplete.map(v=>v.id)});assert.deepEqual(report.violations.map(v=>v.id),[],label);}
async function contextPage(options){const c=await browser.newContext(options);return c.newPage();}

for(const width of [320,390,768,1280])test(`console ${width}px : vues, filtres, détail et preuve indépendante`,async()=>{
  const page=await contextPage({viewport:{width,height:844},reducedMotion:'reduce'});
  try{
    await ready(page);assert.equal(await page.locator('.mission-card').count(),8);await overflow(page);
    if([390,1280].includes(width))await capture(page,`coord-home-${width}.png`);
    await page.getByRole('link',{name:'Contrôles',exact:true}).click();assert.equal(new URL(page.url()).hash,'#missions?filtre=controles');
    await page.getByRole('searchbox',{name:'Chercher une mission ou un atelier'}).fill('C03-ORC-03');assert.equal(await page.locator('.mission-card').count(),1);
    await page.locator('.mission-card[data-id="C03-ORC-03"]').click();
    // Hash navigation schedules the render in a subsequent browser task.
    // Keep the seven-state assertion, but observe the destination after it renders.
    await page.waitForURL(base+'#mission/C03-ORC-03');
    await page.locator('.state-item').first().waitFor({state:'visible'});
    assert.equal(await page.locator('.state-item').count(),7);assert.match(await page.locator('[data-state="recue"]').innerText(),/Inconnu/);assert.match(await page.locator('[data-state="livree"]').innerText(),/Oui, déclaré/);assert.match(await page.locator('[data-state="validee"]').innerText(),/Non dans la source/);
    await overflow(page);if(width===390)await capture(page,'coord-mission-390.png');
    const route=page.url();await page.reload();await page.waitForFunction(()=>document.documentElement.classList.contains('enhanced'));assert.equal(page.url(),route);assert.equal(await page.locator('.state-item').count(),7);
    await page.getByRole('link',{name:/02 Les ateliers|Les ateliers/,exact:false}).first().click();await page.locator('.profile').first().waitFor({state:'visible'});assert.equal(await page.locator('.profile').count(),19);assert.equal(await page.locator('.no-activity').count(),19);await overflow(page);
    if(width===390)await capture(page,'coord-ateliers-390.png');
    await page.getByRole('link',{name:/Les preuves/,exact:false}).first().click();assert.ok(await page.getByText('Échec technique',{exact:true}).count()>0);await overflow(page);
  }finally{await page.context().close();}
});

test('simulation C11 : brouillon en mémoire, aucune commande active',async()=>{
  const page=await contextPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  try{
    await ready(page,'#preparer');assert.equal(await page.locator('#draft-atelier option').count(),17);assert.equal(await page.getByRole('button',{name:'Déclencher une exécution',exact:true}).isEnabled(),false);
    await page.getByLabel('Identifiant de démonstration').fill('DEMO-CONSOLE-001');await page.getByLabel('Objectif du brouillon').fill('Comparer deux références publiques, sans envoyer.');
    await page.getByRole('button',{name:'Générer le brouillon local'}).click();
    assert.match(await page.locator('#draft-output').innerText(),/rien envoyé/);const json=JSON.parse(await page.locator('#draft-output pre').innerText());assert.equal(json.statut,'A_FAIRE');assert.equal(json.execution_ateliers,'NON_DECLENCHEE');assert.deepEqual(json.ateliers,['lectrice']);
    await overflow(page);await capture(page,'coord-preparer-390.png');
    await page.getByLabel('Identifiant de démonstration').fill('<script>');await page.getByRole('button',{name:'Générer le brouillon local'}).click();assert.match(await page.locator('#prepare-error').innerText(),/Identifiant/);
  }finally{await page.context().close();}
});

test('Android simulé : portrait et paysage, tactile et défilement de page libre',async()=>{
  const c=await browser.newContext({...devices['Pixel 5'],viewport:{width:390,height:844},reducedMotion:'reduce'});const page=await c.newPage();
  try{
    await ready(page);await page.locator('.mission-card[data-id="C03-JUR-03"]').tap();assert.equal(new URL(page.url()).hash,'#mission/C03-JUR-03');
    const cdp=await c.newCDPSession(page);await page.evaluate(()=>scrollTo(0,0));
    await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:180,y:650,id:1}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:180,y:280,id:1}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    await page.waitForFunction(()=>scrollY>0);assert.equal(await page.locator('body').evaluate(e=>getComputedStyle(e).touchAction),'auto');
    await page.setViewportSize({width:844,height:390});await overflow(page);await capture(page,'coord-landscape-844.png',{device:'Android Pixel 5 simulé, paysage'});
  }finally{await c.close();}
});

test('clavier, focus visible, historique, arbre accessible et mouvement réduit',async()=>{
  const page=await contextPage({viewport:{width:1280,height:900},reducedMotion:'reduce'});
  try{
    await ready(page);await page.keyboard.press('Tab');assert.equal(await page.locator('.skip').evaluate(e=>document.activeElement===e),true);await page.keyboard.press('Enter');assert.equal(await page.locator('#main').evaluate(e=>document.activeElement===e),true);
    await page.locator('.mission-card[data-id="C03-LEC-03"]').focus();assert.equal(await page.locator('.mission-card[data-id="C03-LEC-03"]').evaluate(e=>getComputedStyle(e).outlineStyle),'solid');await page.keyboard.press('Enter');await page.waitForURL(base+'#mission/C03-LEC-03');
    await page.goBack();await page.waitForURL(base);await page.locator('.mission-card').first().waitFor({state:'visible'});assert.equal(await page.locator('.mission-card').count(),8);
    const cdp=await page.context().newCDPSession(page);await cdp.send('Accessibility.enable');const tree=await cdp.send('Accessibility.getFullAXTree');assert.ok(tree.nodes.some(n=>n.role?.value==='navigation'));assert.ok(tree.nodes.some(n=>n.role?.value==='heading'&&n.name?.value==='Ce qui circule'));
    assert.equal(await page.evaluate(()=>document.getAnimations().length),0);await axe(page,'vue générale');
    await page.goto(base+'#mission/C03-ORC-03');await page.waitForFunction(()=>document.querySelectorAll('.state-item').length===7);await axe(page,'détail de mission');
    await page.goto(base+'#preparer');await page.waitForFunction(()=>document.querySelector('#prepare-form'));await axe(page,'formulaire de simulation');
  }finally{await page.context().close();}
});

test('HTML sans JavaScript : profils, missions et liens sources disponibles',async()=>{
  const c=await browser.newContext({javaScriptEnabled:false,viewport:{width:320,height:800}});const page=await c.newPage();
  try{await page.goto(base);assert.equal(await page.locator('#missions li').count(),8);assert.equal(await page.locator('#ateliers li').count(),19);await page.getByRole('link',{name:/Les ateliers/}).click();assert.equal(new URL(page.url()).hash,'#ateliers');await overflow(page);await capture(page,'coord-sans-js-320.png');}finally{await c.close();}
});

test('zoom navigateur natif 400 % et reflow, sans style.zoom',async()=>{
  const profile=await mkdtemp(resolve(tmpdir(),'coord-zoom-'));const extension=resolve('tests/coordination-console-zoom-extension');
  const c=await chromium.launchPersistentContext(profile,{channel:'chromium',headless:true,viewport:{width:1280,height:900},reducedMotion:'reduce',args:[`--disable-extensions-except=${extension}`,`--load-extension=${extension}`]});
  try{
    const page=await c.newPage();await ready(page,'#mission/C03-ORC-03');const worker=c.serviceWorkers()[0]||await c.waitForEvent('serviceworker');
    const zoom=await worker.evaluate(async base=>{const tabs=await chrome.tabs.query({});const tab=tabs.find(t=>t.url?.startsWith(base));await chrome.tabs.setZoom(tab.id,4);return chrome.tabs.getZoom(tab.id);},base);
    assert.ok(Math.abs(zoom-4)<1e-10);await page.waitForFunction(()=>innerWidth<=330);assert.equal(await page.evaluate(()=>document.documentElement.style.zoom),'');await overflow(page);
    await page.locator('h1').scrollIntoViewIfNeeded();const cdp=await c.newCDPSession(page);const shot=await cdp.send('Page.captureScreenshot',{format:'png',fromSurface:false,captureBeyondViewport:false});const bytes=Buffer.from(shot.data,'base64');await writeFile(resolve(artifacts,'coord-zoom400.png'),bytes);
    evidence.zoom400={chromeZoom:zoom,...await overflow(page),dpr:await page.evaluate(()=>devicePixelRatio),capture:{width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)},method:'chrome.tabs.setZoom et capture native CDP'};
    evidence.captures.push({file:'coord-zoom400.png',head:evidence.head,viewport:await page.evaluate(()=>({width:innerWidth,height:innerHeight,dpr:devicePixelRatio})),hash:new URL(page.url()).hash,device:'Chromium natif 400 %, simulé en CI'});
    assert.equal(bytes.readUInt32BE(16),1280);
    const colors=await page.evaluate(async data=>{
      const bitmap=await createImageBitmap(new Blob([Uint8Array.from(atob(data),c=>c.charCodeAt(0))],{type:'image/png'}));
      const canvas=new OffscreenCanvas(bitmap.width,bitmap.height),ctx=canvas.getContext('2d');ctx.drawImage(bitmap,0,0);
      const pixels=ctx.getImageData(0,0,bitmap.width,bitmap.height).data,distinct=new Set();
      for(let i=0;i<pixels.length;i+=4*17){distinct.add(pixels[i]+','+pixels[i+1]+','+pixels[i+2]);if(distinct.size>20)break;}return distinct.size;
    },shot.data);evidence.zoom400.screenshotColors=colors;assert.ok(colors>10,'Capture native non vide');await axe(page,'zoom navigateur 400 %');
  }finally{await c.close();}
});

test('aucune erreur JavaScript, écriture ou API externe pendant les interactions',()=>{
  assert.deepEqual(evidence.errors,[]);assert.deepEqual(evidence.externalRequests,[]);assert.deepEqual(evidence.nonGetRequests,[]);
});
