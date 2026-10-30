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
  assert.equal(await page.locator(".initiative-card").count(),6);
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
  assert.equal(await page.locator(".initiative-card").count(),6);
  await page.locator("#commune").fill("Nullepart");
  assert.equal(await page.locator(".initiative-card").count(),0);
  assert.equal(await page.locator("#no-results").isVisible(),true);
  assert.equal(await page.locator("#export-demo").isDisabled(),true);
  await page.locator("#clear-empty").click();
  assert.equal(await page.locator(".initiative-card").count(),6);

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
  assert.equal(json.demo,true);
  assert.deepEqual(json.initiatives.map(x=>x.id),["demo-couture"]);
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
