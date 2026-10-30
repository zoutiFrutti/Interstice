import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {mkdir} from "node:fs/promises";
import {chromium} from "playwright";

const BASE=process.env.INTERSTICE_TEST_URL||"http://127.0.0.1:8000";
const PAGE=BASE+"/decouvrir-initiatives.html";

test("parcours mobile : commune, besoin, fiche, retour, absence de fuite réseau",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844},acceptDownloads:true});
 const requests=[],errors=[];
 page.on("request",req=>requests.push(req.url()));
 page.on("pageerror",err=>errors.push(err.message));
 try{
  await mkdir("artifacts",{recursive:true});
  await page.goto(PAGE,{waitUntil:"networkidle"});
  await page.locator(".initiative-card").first().waitFor();
  assert.equal(await page.locator(".initiative-card").count(),7);
  assert.ok((await page.locator(".demo-notice").innerText()).includes("FICTIF"));
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),"Aucun défilement horizontal à 390px");
  await page.screenshot({path:"artifacts/initiatives-mobile-liste.png",fullPage:true});

  await page.locator("#commune").fill("Gaillac");
  assert.equal(await page.locator(".initiative-card").count(),3);
  await page.locator("#category").selectOption({label:"Réparation"});
  assert.equal(await page.locator(".initiative-card").count(),1);
  await page.locator("#objet").fill("pied");
  await page.locator("#scope").selectOption("besoin");
  assert.equal(await page.locator(".initiative-card").count(),1);
  assert.match(await page.locator(".match-reasons").innerText(),/Besoin : Pied d'atelier/);
  assert.match(await page.locator(".match-reasons").innerText(),/Territoire : Gaillac/);

  await page.locator(".initiative-card a").click();
  assert.equal(await page.locator("#detail h2").innerText(),"Les vélos en partage");
  assert.ok(new URL(page.url()).searchParams.get("initiative")==="demo-cycles");
  assert.ok(await page.locator("#detail h2").evaluate(e=>document.activeElement===e));
  assert.match(await page.locator("#detail").innerText(),/Aucun contact réel/);
  await page.screenshot({path:"artifacts/initiatives-mobile-fiche.png",fullPage:true});

  await page.evaluate(()=>{window.__printWasCalled=false;window.print=()=>{window.__printWasCalled=true;};});
  await page.locator("#print-fiche").click();
  assert.equal(await page.evaluate(()=>window.__printWasCalled),true);
  await page.locator("#back").click();
  assert.equal(await page.locator(".initiative-card").count(),1);
  assert.equal(await page.locator("#commune").inputValue(),"Gaillac");

  await page.locator("#clear").click();
  assert.equal(await page.locator(".initiative-card").count(),7);
  await page.locator("#commune").fill("Nullepart");
  assert.equal(await page.locator(".initiative-card").count(),0);
  assert.equal(await page.locator("#no-results").isVisible(),true);
  assert.equal(await page.locator("#export-demo").isDisabled(),true);
  await page.locator("#clear-empty").click();
  assert.equal(await page.locator(".initiative-card").count(),7);

  const otherOrigins=requests.filter(u=>!u.startsWith(BASE+"/")&&!u.startsWith("data:"));
  assert.deepEqual(otherOrigins,[],"Aucune requête vers des sites tiers");
  assert.deepEqual(errors,[],"Aucune erreur JavaScript");
 }finally{await page.close();await browser.close();}
});

test("export JSON contient seulement la liste filtrée, sans contact",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844},acceptDownloads:true});
 try{
  await page.goto(PAGE);
  await page.locator(".initiative-card").first().waitFor();
  await page.locator("#commune").fill("Rabastens");
  await page.locator("#category").selectOption({label:"Culture"});
  assert.equal(await page.locator(".initiative-card").count(),1);
  const downloadP=page.waitForEvent("download");
  await page.locator("#export-demo").click();
  const downloaded=await downloadP;
  assert.equal(downloaded.suggestedFilename(),"interstice-exemples-fictifs.json");
  const filename=await downloaded.path();
  const json=JSON.parse(await readFile(filename,"utf8"));
  assert.equal(json.fictional,true);
  assert.deepEqual(json.entries.map(x=>x.id),["demo-couture"]);
  assert.ok(!/address|phone|publicContact|privateEmail|longitude|latitude/.test(JSON.stringify(json)));
 }finally{await page.close();await browser.close();}
});

test("adresse invalide récupérable, lien profond correct et page sans JavaScript",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  const page=await browser.newPage({viewport:{width:360,height:740}});
  await page.goto(PAGE+"?initiative=inconnue");
  await page.locator(".initiative-card").first().waitFor();
  assert.equal(await page.locator("#invalid-route").isVisible(),true);
  assert.equal(new URL(page.url()).searchParams.has("initiative"),false);
  await page.goto(PAGE+"?initiative=demo-jardin");
  await page.locator("#detail h2").waitFor();
  assert.equal(await page.locator("#detail h2").innerText(),"Le jardin qu'on imagine");
  await page.close();
  const noJsContext=await browser.newContext({javaScriptEnabled:false});
  const noJs=await noJsContext.newPage();
  await noJs.goto(PAGE);
  assert.equal(await noJs.getByRole("heading",{name:"Sans JavaScript"}).count(),1);
  assert.ok((await noJs.locator("noscript").innerText()).includes("participer"));
  await noJsContext.close();
 }finally{await browser.close();}
});

test("simulation mobile : besoin, offre, territoire, correspondances explicables et aucun envoi",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 const errors=[],requests=[];
 page.on("pageerror",e=>errors.push(e.message));
 page.on("request",r=>requests.push(r.url()));
 try{
  await mkdir("artifacts",{recursive:true});
  await page.goto(PAGE,{waitUntil:"networkidle"});
  await page.locator("#simulation-go").click();
  assert.equal(await page.locator("#simulation-results .initiative-card").count(),1);
  assert.match(await page.locator("#simulation-results .match-reasons").innerText(),/Ressource imaginée : Perceuse/);
  assert.ok((await page.locator("#simulation-message").innerText()).includes("fictive"));
  await page.screenshot({path:"artifacts/initiatives-mobile-simulation.png",fullPage:true});
  await page.locator("#simulation-kind").selectOption("offre");
  assert.equal(await page.locator("#simulation-results .initiative-card").count(),0);
  await page.locator("#simulation-object").selectOption("stockage");
  await page.locator("#simulation-territory").selectOption("Gaillac");
  await page.locator("#simulation-go").click();
  assert.equal(await page.locator("#simulation-results .initiative-card").count(),1);
  assert.match(await page.locator("#simulation-results .match-reasons").innerText(),/Besoin imaginé : Stockage/);
  await page.locator("#simulation-territory").selectOption("Rabastens");
  await page.locator("#simulation-go").click();
  assert.equal(await page.locator("#simulation-results .initiative-card").count(),0);
  assert.match(await page.locator("#simulation-message").innerText(),/Aucun exemple/);
  await page.locator("#simulation-reset").click();
  assert.equal(await page.locator("#simulation-kind").inputValue(),"besoin");
  assert.equal(await page.locator("#simulation-object").inputValue(),"perceuse");
  assert.equal(await page.locator("#simulation-message").innerText(),"");
  assert.deepEqual(requests.filter(url=>!url.startsWith(BASE+"/")&&!url.startsWith("data:")),[]);
  assert.deepEqual(errors,[]);
 }finally{await page.close();await browser.close();}
});

test("retour au lien d'origine : clavier, simulation, navigateur précédent",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:360,height:740}});
 try{
  await page.goto(PAGE);
  await page.locator("#results a[data-id]").first().waitFor();
  await page.locator("#results a[data-id]").first().focus();
  await page.keyboard.press("Enter");
  await page.locator("#detail h2").waitFor();
  assert.equal(await page.locator("#detail h2").evaluate(x=>document.activeElement===x),true);
  await page.locator("#back").click();
  assert.equal(await page.locator('#results a[data-id="demo-jardin"]').evaluate(x=>document.activeElement===x),true);
  await page.locator("#simulation-go").click();
  await page.locator("#simulation-results a[data-id]").first().focus();
  await page.keyboard.press("Enter");
  await page.locator("#detail h2").waitFor();
  await page.goBack();
  await page.locator("#explorer").waitFor({state:"visible"});
  assert.equal(await page.locator('#simulation-results a[data-id="demo-outils"]').evaluate(x=>document.activeElement===x),true);
 }finally{await page.close();await browser.close();}
});

test("tailles d'écran : aucune colonne débordante de 320px à 1024px",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage();
 try{
  await page.goto(PAGE);
  await page.locator(".initiative-card").first().waitFor();
  for(const width of [320,360,390,768,1024]){
   await page.setViewportSize({width,height:780});
   const state=await page.evaluate(()=>({outer:document.documentElement.scrollWidth,inner:window.innerWidth}));
   assert.ok(state.outer<=state.inner,"Débordement horizontal à "+width+"px : "+JSON.stringify(state));
  }
  await page.locator("#simulation-go").click();
  for(const width of [320,390,768]){
   await page.setViewportSize({width,height:780});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),"Débordement simulation à "+width);
  }
 }finally{await page.close();await browser.close();}
});

test("Carte des communs / possibles : listes et points synchronisés sur mobile et ordinateur",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,1280]){
   const page=await browser.newPage({viewport:{width,height:850}});
   const requests=[],errors=[];
   page.on("request",r=>requests.push(r.url()));
   page.on("pageerror",e=>errors.push(e.message));
   try{
    await mkdir("artifacts",{recursive:true});
    await page.goto(PAGE,{waitUntil:"networkidle"});
    await page.locator("#results .initiative-card").first().waitFor();
    assert.equal(await page.locator("#results .initiative-card").count(),7);
    await page.locator("#display-map").click();
    assert.equal(await page.locator("#map-panel").isVisible(),true);
    assert.equal(await page.locator("#municipality-map .map-marker").count(),4);
    await page.screenshot({path:"artifacts/cartes-communs-"+width+".png",fullPage:true});
    await page.locator('#municipality-map [data-commune="Gaillac"]').focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("#commune").inputValue(),"Gaillac");
    await page.locator("#display-list").click();
    assert.equal(await page.locator("#results .initiative-card").count(),3);
    await page.locator("#clear").click();
    await page.locator("#reading-possibles").click();
    assert.equal(await page.locator("#results .initiative-card").count(),4);
    await page.locator("#display-map").click();
    assert.equal(await page.locator("#municipality-map .map-marker").count(),3);
    await page.screenshot({path:"artifacts/cartes-possibles-"+width+".png",fullPage:true});
    await page.locator('#municipality-map [data-commune="Gaillac"]').click();
    await page.locator("#display-list").click();
    assert.equal(await page.locator("#results .initiative-card").count(),2);
    await page.locator('#results a[data-id="demo-projet-gaillac"]').click();
    assert.equal(await page.locator("#detail h2").innerText(),"Une rencontre de réparation à inventer");
    await page.goBack();
    assert.equal(await page.locator("#results .initiative-card").count(),2);
    await page.locator("#display-map").click();
    await page.locator("#map-zoom-in").click();
    assert.notEqual(await page.locator("#municipality-map").getAttribute("viewBox"),"0 0 760 420");
    await page.locator("#map-zoom-reset").click();
    assert.equal(await page.locator("#municipality-map").getAttribute("viewBox"),"0 0 760 420");
    await page.locator("#commune").fill("commune-inconnue");
    assert.equal(await page.locator("#municipality-map .map-marker").count(),0);
    assert.equal(await page.locator("#count").innerText(),"0 fiche fictive trouvée");
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),"Débordement "+width);
    assert.deepEqual(requests.filter(u=>!u.startsWith(BASE+"/")&&!u.startsWith("data:")),[]);
    assert.deepEqual(errors,[]);
   }finally{await page.close();}
  }
 }finally{await browser.close();}
});
