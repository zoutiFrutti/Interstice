import test from "node:test";
import assert from "node:assert/strict";
import {chromium} from "playwright";
import {mkdir} from "node:fs/promises";
const BASE=process.env.INTERSTICE_TEST_URL||"http://127.0.0.1:8000";

test("018-A: Accueil → découverte → besoin fictif → commune → carte/liste → fiche → retour → Participer → Wiki",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:850},reducedMotion:"reduce"});
   const posts=[],external=[],errors=[];
   page.on("request",req=>{if(req.method()==="POST")posts.push(req.url());if(!req.url().startsWith(BASE+"/")&&!req.url().startsWith("data:"))external.push(req.url());});
   page.on("pageerror",err=>errors.push(err.message));
   try{
    await mkdir("artifacts",{recursive:true});
    await page.goto(BASE+"/index.html",{waitUntil:"networkidle"});
    assert.match(await page.locator("#etats-demo").innerText(),/Simulation fictive/);
    assert.match(await page.locator("#etats-demo").innerText(),/Proposition réelle soumise à validation/);
    assert.match(await page.locator("#etats-demo").innerText(),/Fonction non disponible/);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"Accueil débordant "+width);
    await page.screenshot({path:"artifacts/018a-accueil-"+width+".png",fullPage:true});
    await page.locator('.hero-actions a[href="decouvrir-initiatives.html"]').click();
    assert.ok(page.url().includes("decouvrir-initiatives.html"));
    await page.locator("#simulation-territory").selectOption("Gaillac");
    await page.locator("#simulation-go").click();
    assert.equal(await page.locator("#simulation-results .initiative-card").count(),1);
    assert.match(await page.locator("#simulation-results .match-reasons").innerText(),/Ressource imaginée/);
    await page.locator("#commune").fill("Gaillac");
    assert.equal(await page.locator("#results .initiative-card").count(),3);
    await page.locator("#display-map").click();
    assert.ok(await page.locator("#map-panel").isVisible());
    assert.equal(await page.locator("#municipality-map .map-marker").count(),3,"Gaillac comprend aussi les repères des fiches multiterritoriales");
    await page.locator("#display-list").click();
    assert.equal(await page.locator("#results .initiative-card").count(),3);
    await page.locator("#category").selectOption("Réparation");
    assert.equal(await page.locator("#results .initiative-card").count(),1);
    await page.locator('#results a[data-id="demo-cycles"]').click();
    assert.equal(await page.locator("#detail h2").innerText(),"Les vélos en partage");
    assert.ok(await page.locator("#detail h2").evaluate(el=>document.activeElement===el));
    await page.locator("#back").click();
    assert.equal(await page.locator("#commune").inputValue(),"Gaillac");
    assert.ok(await page.locator('#results a[data-id="demo-cycles"]').evaluate(el=>document.activeElement===el));
    await page.locator("#clear").click();
    await page.locator("#commune").fill("Nullepart");
    assert.equal(await page.locator("#results .initiative-card").count(),0);
    assert.equal(await page.locator("#no-results").isVisible(),true);
    await page.locator("#clear-empty").click();
    assert.equal(await page.locator("#results .initiative-card").count(),7);
    await page.screenshot({path:"artifacts/018a-decouverte-"+width+".png",fullPage:true});
    await page.locator('.initiative-header a[href="participer.html"]').click();
    await page.locator('a[href="wiki.html"]').first().click();
    assert.ok(page.url().endsWith("/wiki.html"));
    await page.locator('a[href="wiki-decision-collective.html"]').first().click();
    assert.ok((await page.locator("h1").first().innerText()).length>5);
    await page.goBack();
    assert.ok(page.url().endsWith("/wiki.html"));
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"Wiki débordant "+width);
    assert.deepEqual(posts,[],"Aucun POST réel dans le parcours");
    assert.deepEqual(external,[],"Aucune requête externe");
    assert.deepEqual(errors,[],"Aucune erreur JavaScript");
   }finally{await page.close();}
  }
 }finally{await browser.close();}
});

test("018-A: tentatives explicites de formulaires réels sont neutralisées, sans réseau externe",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 const posts=[],external=[];
 page.on("request",req=>{if(req.method()==="POST")posts.push(req.url());if(!req.url().startsWith(BASE+"/")&&!req.url().startsWith("data:"))external.push(req.url());});
 try{
  await page.goto(BASE+"/index.html#proposer",{waitUntil:"networkidle"});
  await page.locator("#besoin").fill("Besoins fictifs pour test");
  await page.locator("#submit").click();
  assert.match(await page.locator("#etat").innerText(),/proposition non transmise/);
  await page.goto(BASE+"/bibliotheque.html",{waitUntil:"networkidle"});
  await page.locator("#resource-title").fill("Ressource inventée");
  await page.locator("#resource-url").fill("https://example.invalid/fiction");
  await page.locator("#resource-description").fill("Description créée pour une démonstration sans envoi réel.");
  await page.locator("#resource-submit").click();
  assert.match(await page.locator("#resource-status").innerText(),/non envoyée/);
  assert.deepEqual(posts,[]);
  assert.deepEqual(external,[]);
 }finally{await page.close();await browser.close();}
});

test("018-D: variable candidate forcée à false avant et après chargement, aucune requête réelle",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [320,390,1280]){
   const page=await browser.newPage({viewport:{width,height:844},reducedMotion:"reduce"});
   const external=[],modifying=[],errors=[];
   await page.addInitScript({content:"window.INTERSTICE_CANDIDATE_MODE=false;"});
   page.on("request",req=>{
    if(req.method()!=="GET")modifying.push(req.method()+" "+req.url());
    if(!req.url().startsWith(BASE+"/")&&!req.url().startsWith("data:"))external.push(req.url());
   });
   page.on("pageerror",err=>errors.push(err.message));
   await page.route("**/*",route=>{
    if(!route.request().url().startsWith(BASE+"/")&&!route.request().url().startsWith("data:")){
     external.push(route.request().url());return route.abort();
    }
    return route.continue();
   });
   try{
    await page.goto(BASE+"/index.html",{waitUntil:"networkidle"});
    await page.evaluate(()=>{window.INTERSTICE_CANDIDATE_MODE=false;});
    assert.match(await page.locator("#liste-propositions").innerText(),/désactivée/);
    await page.locator("#besoin").fill("Besoin fictif "+width);
    await page.locator("#submit").click();
    await page.locator("#submit").click();
    assert.match(await page.locator("#etat").innerText(),/proposition non transmise/);
    await page.goto(BASE+"/bibliotheque.html",{waitUntil:"networkidle"});
    await page.evaluate(()=>{window.INTERSTICE_CANDIDATE_MODE=false;});
    assert.ok(await page.locator("#resources .resource-card").count()>0,"Catalogue local préservé");
    await page.locator("#resource-title").fill("Ressource fictive "+width);
    await page.locator("#resource-url").fill("https://example.invalid/fiction");
    await page.locator("#resource-description").fill("Texte inventé pour vérifier l'absence de toute soumission.");
    await page.locator("#resource-submit").click();
    await page.locator("#resource-submit").click();
    assert.match(await page.locator("#resource-status").innerText(),/ressource non envoyée/);
    assert.deepEqual(modifying,[],"Aucune requête modifiante à "+width+" px");
    assert.deepEqual(external,[],"Aucune requête externe à "+width+" px");
    assert.deepEqual(errors,[],"Aucune erreur JavaScript à "+width+" px");
   }finally{await page.close();}
  }
 }finally{await browser.close();}
});
