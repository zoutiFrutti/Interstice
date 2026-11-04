import test,{before,after} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {execFileSync} from 'node:child_process';
import {readFile,writeFile,mkdir,mkdtemp,readdir} from 'node:fs/promises';
import {resolve,join,extname,sep} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {chromium,devices} from 'playwright';

// Before is an immutable #174 source, not an approximation of its appearance.
const BASELINE='01811690ae5dbd8bef4db2100395feea77a55431';
const output=resolve('artifacts/nav01/convergence');
const beforeRoot=resolve('artifacts/nav01/before-static');
const afterRoot=resolve('dist-nav');
const originalFiles=['index.html','explorer.html','style.css','manifeste.html','manifeste-v2-5.html',
  'wiki.html','bibliotheque.html','atlas.html','parcours.html','README.txt','checksums.json',
  'assets/logo-faille-noire.svg','assets/logo-interstice.svg','assets/nav-01/explorer.css',
  'assets/nav-01/explorer.mjs','assets/nav-01/camera.mjs','assets/nav-01/graph-data.mjs',
  'assets/nav-01/navigation-state.mjs'];
const archiveFiles=originalFiles.filter(path=>!['index.html','wiki.html','bibliotheque.html',
  'atlas.html','parcours.html','README.txt','checksums.json'].includes(path));
archiveFiles.push('scripts/build-nav-preview.mjs');
const nucleus={x:350000/665,y:377000/665,r:33000/665};
const evidence={mission:'WORK-CONVERGENCE-01',baseline_sha:BASELINE,after_sha:null,
  physical_device_tested:false,artistic_validation:'Réservée à Zout ; non accordée par ces tests',
  captures:[],measurements:[],errors:[]};
const mime={'.html':'text/html; charset=utf-8','.mjs':'text/javascript','.css':'text/css',
  '.svg':'image/svg+xml','.json':'application/json'};
let server,browser,origin;

async function fileList(directory,prefix=''){
  const paths=[];
  for(const item of await readdir(directory,{withFileTypes:true})){
    if(item.isDirectory())paths.push(...await fileList(join(directory,item.name),prefix+item.name+'/'));
    else if(item.isFile())paths.push(prefix+item.name);
    else throw new Error('Entrée non statique dans le baseline : '+prefix+item.name);
  }
  return paths.sort();
}
before(async()=>{
  try{
    await mkdir(output,{recursive:true});
    evidence.after_sha=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
    const source=await mkdtemp(join(tmpdir(),'interstice-nav-before-'));
    const archive=execFileSync('git',['archive',BASELINE,'--',...archiveFiles],{maxBuffer:16*1024*1024});
    execFileSync('tar',['-x','-C',source],{input:archive});
    execFileSync(process.execPath,[join(source,'scripts/build-nav-preview.mjs'),beforeRoot],
      {cwd:source,encoding:'utf8'});
    assert.deepEqual(await fileList(beforeRoot),[...originalFiles].sort(),
      'Le baseline partageable doit contenir exactement les 18 fichiers autorisés');
    await readFile(join(afterRoot,'index.html'));
    server=createServer(async(req,res)=>{
      try{
        const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
        const version=path.startsWith('/before/')?'before':path.startsWith('/after/')?'after':null;
        if(!version){res.writeHead(404).end();return;}
        const root=version==='before'?beforeRoot:afterRoot;
        const file=resolve(root,path.slice(('/'+version+'/').length)||'index.html');
        if(!file.startsWith(root+sep)){res.writeHead(403).end();return;}
        const bytes=await readFile(file);
        res.writeHead(200,{'Content-Type':mime[extname(file)]||'text/plain'}).end(bytes);
      }catch{res.writeHead(404).end();}
    });
    await new Promise(done=>server.listen(0,'127.0.0.1',done));
    origin=`http://127.0.0.1:${server.address().port}`;
    browser=await chromium.launch();
  }catch(error){evidence.setup_error=error.message;throw error;}
},{timeout:30000});
after(async()=>{
  await mkdir(output,{recursive:true});
  await writeFile(join(output,'captures-and-measurements.json'),JSON.stringify(evidence,null,2)+'\n');
  if(browser)await browser.close();
  if(server)await new Promise(done=>server.close(done));
});

const camera=async page=>(await page.locator('#world').getAttribute('viewBox')).split(' ').map(Number);
const near=(actual,expected,tolerance=.01)=>assert.ok(Math.abs(actual-expected)<=tolerance,
  `${actual} ≠ ${expected} (tolérance ${tolerance})`);
async function ready(page,version){
  page.on('pageerror',error=>evidence.errors.push({version,type:'pageerror',message:error.message}));
  page.on('console',message=>{if(message.type()==='error')evidence.errors.push({version,type:'console',message:message.text()});});
  // Test timing only: no application state, geometry or animation is changed.
  await page.addInitScript(()=>document.addEventListener('click',event=>{
    if(event.target.closest('a[data-enter]'))window.__convergenceEntryStart=performance.now();
  },{capture:true}));
  await page.goto(origin+'/'+version+'/');
  await page.waitForFunction(()=>document.documentElement.classList.contains('enhanced'));
}
async function settled(page){
  await page.evaluate(()=>new Promise((done,reject)=>{
    let last='',same=0;const start=performance.now();
    const frame=()=>{
      const value=document.querySelector('#world').getAttribute('viewBox');
      same=value===last?same+1:0;last=value;
      if(same>=4){done();return;}
      if(performance.now()-start>2600){reject(new Error('Caméra non stabilisée'));return;}
      requestAnimationFrame(frame);
    };requestAnimationFrame(frame);
  }));
}
async function metrics(page){
  return page.evaluate(()=>{
    const stage=document.querySelector('#space').getBoundingClientRect();
    return {viewport:{width:innerWidth,height:innerHeight},device_pixel_ratio:devicePixelRatio,
      scroll:{x:scrollX,y:scrollY},horizontal_scroll:document.documentElement.scrollWidth,
      route:location.hash,observed_phase:document.querySelector('#exploration').dataset.phase||null,
      entry_elapsed_ms:window.__convergenceEntryStart===undefined?null:performance.now()-window.__convergenceEntryStart,
      view_box:document.querySelector('#world').getAttribute('viewBox').split(' ').map(Number),
      stage:{x:stage.x,y:stage.y,width:stage.width,height:stage.height},
      branch_label:document.querySelector('#location-label').textContent};
  });
}
async function capture(page,version,viewport,phase,extra={}){
  const name=`${version}-${viewport.width}x${viewport.height}-${phase}.png`;
  const observed=await metrics(page);
  const bytes=await page.screenshot({path:join(output,name),fullPage:false,scale:'css'});
  const end=await metrics(page);
  evidence.captures.push({file:'convergence/'+name,source_sha:version==='before'?BASELINE:evidence.after_sha,
    version,requested_viewport:viewport,phase,...extra,...observed,
    observed_phase_after_capture:end.observed_phase,entry_elapsed_after_capture_ms:end.entry_elapsed_ms,
    image_pixels:{width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)},
    sha256:createHash('sha256').update(bytes).digest('hex')});
  assert.ok(observed.horizontal_scroll<=observed.viewport.width+1,'Débordement horizontal : '+name);
}
function nucleusRatio(value){
  return 2*nucleus.r*value.stage.width/value.view_box[2]/Math.min(value.stage.width,value.stage.height);
}
async function fullView(page){
  await page.getByRole('button',{name:'Vue entière',exact:true}).click();await settled(page);
}
async function readRoute(page,version,viewport){
  // Native door targets are selected in full view, with no reading panel covering them.
  await fullView(page);
  await page.locator('.node[data-door="encyclopedie"]').click();await settled(page);
  assert.equal(await page.locator('#panel-title').innerText(),'Encyclopédie des communs');
  assert.match(await page.locator('#location-label').innerText(),/Encyclopédie/);
  await capture(page,version,viewport,'porte-encyclopedie');
  await page.locator('#panel a[href="#parcours/PAR-001"]').click();await settled(page);
  assert.equal(await page.locator('#panel-title').innerText(),'Commune de Paris');
  await capture(page,version,viewport,'traversee-par001');
  if(version==='after'){
    const step=page.locator('.step-node[data-step="step:PAR-001/contexte"]');
    assert.ok(await step.isVisible(),'Une étape spatiale native doit être visible hors panneau');
    assert.equal(await step.evaluate(node=>node.tagName),'A');
    assert.equal(await step.getAttribute('href'),'#parcours/PAR-001/contexte');
    const old=await step.evaluate(node=>({x:parseFloat(node.style.left),y:parseFloat(node.style.top)}));
    assert.ok(Number.isFinite(old.x)&&Number.isFinite(old.y));
    await page.locator('#space').press('ArrowLeft');
    const moved=await step.evaluate(node=>({x:parseFloat(node.style.left),y:parseFloat(node.style.top)}));
    near(moved.x-old.x,55,1);near(moved.y,old.y,1);
    const box=await step.boundingBox();assert.ok(box&&box.width>=44&&box.height>=44);
    if(viewport.width===1280){await step.focus();await page.keyboard.press('Enter');}
    else await step.click();
  }else await page.locator('#panel .step-list a').first().click();
  await settled(page);
  assert.equal(new URL(page.url()).hash,'#parcours/PAR-001/contexte');
  assert.match(await page.locator('#panel-body').innerText(),/encore en relecture/);
  await capture(page,version,viewport,'etape-candidate');
  await page.getByRole('link',{name:'Revenir au parcours',exact:true}).click();await settled(page);
  assert.equal(new URL(page.url()).hash,'#parcours/PAR-001');
  await page.getByRole('link',{name:'Retour à Encyclopédie',exact:true}).click();await settled(page);
  assert.equal(new URL(page.url()).hash,'#porte/encyclopedie');
  await capture(page,version,viewport,'retour-porte');
  await page.locator('#panel a[href="#parcours/PAR-005"]').click();await settled(page);
  assert.match(await page.locator('#panel-body').innerText(),/fiches pratiques restent fermées/);
  assert.equal(await page.locator('.step-node').count(),0);
  await page.getByRole('button',{name:'Fermer le panneau',exact:true}).click();
  await fullView(page);
  await page.locator('.node.manifest-node').click();
  await page.waitForFunction(()=>document.querySelector('#panel-body .reading'));
  assert.match(await page.locator('#panel-body').innerText(),/non adoptée collectivement/);
  await capture(page,version,viewport,'contenu-manifeste-public');
}

for(const viewport of [{width:390,height:844},{width:1280,height:900}]){
  test(`Comparaison réelle #174 / convergence — ${viewport.width}px`,{timeout:45000},async()=>{
    const oldContext=await browser.newContext({viewport,reducedMotion:'no-preference'});
    const currentContext=await browser.newContext({viewport,reducedMotion:'no-preference'});
    try{
      const old=await oldContext.newPage();await ready(old,'before');
      assert.equal(await old.locator('#exploration').getAttribute('data-phase'),null);
      await capture(old,'before',viewport,'entree');
      await old.locator('[data-enter="animate"]').click({noWaitAfter:true});
      await old.waitForTimeout(300);
      await capture(old,'before',viewport,'ancienne-transition-t300ms',
        {timing_note:'Ancien code sans data-phase ; attente demandée 300 ms après clic, délai réel mesuré'});
      await old.waitForTimeout(680);await settled(old);
      const baseline=await metrics(old);
      evidence.measurements.push({source_sha:BASELINE,viewport,kind:'ancienne-entree-terminee',
        actual_elapsed_ms:baseline.entry_elapsed_ms,nucleus_ratio:nucleusRatio(baseline)});
      await capture(old,'before',viewport,'ancienne-entree-terminee',
        {timing_note:'Attente supplémentaire bornée 680 ms puis caméra stabilisée ; aucune phase identity revendiquée'});
      await old.locator('#space').press('ArrowRight');
      await capture(old,'before',viewport,'exploration');
      await readRoute(old,'before',viewport);

      const page=await currentContext.newPage();await ready(page,'after');
      assert.equal(await page.locator('.entry-portal .threshold-logo').count(),1);
      assert.equal(await page.locator('.entry-portal .portal-word').innerText(),'Entrer');
      await capture(page,'after',viewport,'entree');
      await page.locator('[data-enter="animate"]').click({noWaitAfter:true});
      await page.waitForFunction(()=>document.querySelector('#exploration').dataset.phase==='identity');
      await page.waitForTimeout(300);
      await capture(page,'after',viewport,'transition-identite',
        {timing_note:'Phase identity observée ; échantillon après attente demandée 300 ms'});
      await page.waitForFunction(()=>document.querySelector('#exploration').dataset.phase==='diving');
      await page.waitForTimeout(450);
      await capture(page,'after',viewport,'plongee-en-cours',
        {timing_note:'Phase diving observée ; échantillon après attente demandée 450 ms'});
      await page.waitForFunction(()=>['immersed','exploring'].includes(document.querySelector('#exploration').dataset.phase));
      const immersed=await metrics(page);const ratio=nucleusRatio(immersed);
      near(ratio,.5,.015);
      near(immersed.view_box[0]+immersed.view_box[2]/2,nucleus.x,.001);
      near(immersed.view_box[1]+immersed.view_box[3]/2,nucleus.y,.001);
      await capture(page,'after',viewport,'noyau50-immersed',{nucleus_ratio:ratio});
      await page.locator('#space').press('ArrowRight');
      await page.waitForFunction(()=>document.querySelector('#exploration').dataset.phase==='exploring');
      const retreated=await metrics(page);near(retreated.view_box[2]/immersed.view_box[2],1.12,.001);
      assert.ok(await page.locator('[data-direction]:visible').count()>0);
      evidence.measurements.push({source_sha:evidence.after_sha,viewport,kind:'plongee-et-premier-recul',
        nucleus_ratio:ratio,retreat_ratio:retreated.view_box[2]/immersed.view_box[2]});
      await capture(page,'after',viewport,'exploration-directions');

      const beforeWheel=await metrics(page),box=beforeWheel.stage;
      const x=box.x+box.width*.45,y=box.y+box.height*.45;
      const anchor={x:beforeWheel.view_box[0]+beforeWheel.view_box[2]*.45,
        y:beforeWheel.view_box[1]+beforeWheel.view_box[3]*.45};
      await page.mouse.move(x,y);await page.mouse.wheel(0,-120);
      await page.waitForFunction(old=>document.querySelector('#world').getAttribute('viewBox')!==old,
        beforeWheel.view_box.map(n=>n.toFixed(4)).join(' '));
      const zoomed=await metrics(page);assert.ok(zoomed.view_box[2]<beforeWheel.view_box[2]);
      near((anchor.x-zoomed.view_box[0])/zoomed.view_box[2]*box.width,box.width*.45,1);
      near((anchor.y-zoomed.view_box[1])/zoomed.view_box[3]*box.height,box.height*.45,1);
      const panBefore=await camera(page);
      await page.mouse.move(box.x+box.width*.5,box.y+box.height*.6);
      await page.mouse.down();await page.mouse.move(box.x+box.width*.5+40,box.y+box.height*.6+25,{steps:4});await page.mouse.up();
      const panned=await camera(page);near(panned[0]-panBefore[0],-40*panBefore[2]/box.width,.01);
      near(panned[1]-panBefore[1],-25*panBefore[2]/box.width,.01);
      await readRoute(page,'after',viewport);
    }finally{await oldContext.close();await currentContext.close();}
  });
}

test('Paysage Android simulé : gestes, cibles 44 px et défilement libéré',{timeout:45000},async()=>{
  const viewport={width:844,height:390};
  const context=await browser.newContext({...devices['Pixel 5'],viewport,screen:viewport,
    reducedMotion:'no-preference'});
  try{
    const page=await context.newPage();await ready(page,'after');
    await page.getByRole('link',{name:'Entrer sans animation',exact:true}).tap();
    await page.waitForFunction(()=>['immersed','exploring'].includes(document.querySelector('#exploration').dataset.phase),null,{timeout:5000});
    const cdp=await context.newCDPSession(page),before=await metrics(page),box=before.stage;
    const x=box.x+box.width*.5,y=box.y+box.height*.5;
    const touch=(type,points)=>cdp.send('Input.dispatchTouchEvent',
      {type,touchPoints:points.map(([x,y,id])=>({x,y,id}))});
    await touch('touchStart',[[x,y,0]]);await touch('touchMove',[[x+45,y+18,0]]);await touch('touchEnd',[]);
    // Still entry starts at the fitted map: panning must not trigger an animated retreat.
    const dragged=await metrics(page);near(dragged.view_box[2]/before.view_box[2],1,.001);
    assert.notDeepEqual(dragged.view_box,before.view_box);
    await touch('touchStart',[[x-40,y,0],[x+40,y,1]]);
    await touch('touchMove',[[x-90,y,0],[x+90,y,1]]);await touch('touchEnd',[]);
    const pinched=await metrics(page);assert.ok(pinched.view_box[2]<dragged.view_box[2]);
    await capture(page,'after',viewport,'paysage-android-gestes',
      {simulation:'Profil Pixel 5 Chromium, CDP tactile, viewport paysage ; aucun appareil physique'});
    await page.getByRole('button',{name:'Repères',exact:true}).tap();
    assert.equal(await page.locator('#tools-toggle').getAttribute('aria-expanded'),'true');
    const controls=await page.locator('.top-actions button:visible,.map-controls button:visible').evaluateAll(nodes=>
      nodes.map(node=>{const box=node.getBoundingClientRect();return{id:node.id,width:box.width,height:box.height};}));
    assert.ok(controls.length>=7);
    for(const control of controls)assert.ok(control.width>=44&&control.height>=44,JSON.stringify(control));
    await capture(page,'after',viewport,'paysage-reperes',{controls});
    await page.locator('#pan-mode').tap();
    assert.equal(await page.locator('#pan-mode').getAttribute('aria-pressed'),'false');
    assert.match(await page.locator('#space').evaluate(node=>getComputedStyle(node).touchAction),/pan-y/);
    const oldScroll=await page.evaluate(()=>scrollY),oldCamera=await page.locator('#world').getAttribute('viewBox');
    const visibleStage=await page.locator('#space').boundingBox();
    const sx=visibleStage.x+visibleStage.width*.5,sy=Math.min(280,visibleStage.y+visibleStage.height*.65);
    await touch('touchStart',[[sx,sy,0]]);await touch('touchMove',[[sx,sy-100,0]]);await touch('touchEnd',[]);
    await page.waitForFunction(previous=>scrollY>previous+5,oldScroll,{timeout:2000});
    assert.equal(await page.locator('#world').getAttribute('viewBox'),oldCamera);
    evidence.measurements.push({source_sha:evidence.after_sha,viewport,kind:'android-paysage',
      simulation:true,physical_device:false,retreat_ratio:dragged.view_box[2]/before.view_box[2],
      pinch_span_ratio:pinched.view_box[2]/dragged.view_box[2],controls,
      page_scroll_before:oldScroll,page_scroll_after:await page.evaluate(()=>scrollY)});
    await capture(page,'after',viewport,'paysage-defilement-libre',
      {simulation:'Défilement natif CDP, déplacement de carte désactivé ; aucun appareil physique'});
  }finally{await context.close();}
});

test('Aucune erreur JavaScript dans la comparaison et le paysage',()=>assert.deepEqual(evidence.errors,[]));
