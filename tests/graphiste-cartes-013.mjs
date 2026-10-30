/* Tests graphiques transversaux PR35 + snapshot PR41 en lecture seule.
   Le CSS est injecté sur la page PR41 sans modifier son dépôt. */
import assert from "node:assert/strict";
import {readFileSync,mkdirSync,writeFileSync} from "node:fs";
import path from "node:path";
import {chromium} from "playwright";
const base=process.env.INTERSTICE_CARTE_TEST_URL||"http://127.0.0.1:8766";
const css=readFileSync("cartes-design.css","utf8");
const target=base+"/decouvrir-initiatives.html";
const folder="visual-qa/cartes";
mkdirSync(folder,{recursive:true});
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const results=[];
const luminance=s=>{
  const nums=(s.match(/[\d.]+/g)||[]).slice(0,3).map(Number);
  return nums.map(x=>{x/=255;return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4)})
    .reduce((sum,x,i)=>sum+x*[.2126,.7152,.0722][i],0);
};
const ratio=(a,b)=>{let x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const viewports=[{id:"mobile",width:390,height:844},{id:"ordinateur",width:1280,height:800}];
try{
 for(const screen of viewports){
  const context=await browser.newContext({viewport:{width:screen.width,height:screen.height},reducedMotion:"reduce"});
  const page=await context.newPage();
  const errors=[],external=[];
  page.on("pageerror",e=>errors.push(e.message));
  page.on("request",r=>{if(!r.url().startsWith(base+"/")&&!r.url().startsWith("data:"))external.push(r.url())});
  await page.goto(target,{waitUntil:"networkidle"});
  await page.addStyleTag({content:css});
  await page.locator(".initiative-card").first().waitFor();
  const grab=async label=>page.screenshot({path:path.join(folder,label+"-"+screen.id+".png"),fullPage:true});
  const check=async label=>{
   const m=await page.evaluate(()=>{
    const qs=s=>[...document.querySelectorAll(s)].filter(e=>e.getClientRects().length);
    const font=e=>parseFloat(getComputedStyle(e).fontSize);
    const height=e=>Math.round(e.getBoundingClientRect().height);
    const controls=qs("#filters button,#filters select,#filters input,.map-readings button,.map-display button,.initiative-card a,#map-panel button")
      .map(e=>({tag:e.tagName,text:e.textContent.slice(0,30),font:font(e),height:height(e)}));
    const labels=qs("#filters label,.initiative-card .demo-tag,.initiative-card .entry-kind,#count");
    const cardTexts=qs("#results .initiative-card").map(x=>x.textContent);
    const cs=getComputedStyle(document.querySelector(".demo-notice"));
    const textColor=getComputedStyle(document.querySelector(".demo-notice strong")).color;
    const kind=qs("#results .initiative-card .entry-kind").map(x=>x.textContent.trim());
    const allLinks=qs("#results .initiative-card a").map(x=>height(x));
    return {
     viewport:innerWidth,documentWidth:document.documentElement.scrollWidth,
     h1Count:document.querySelectorAll("h1").length,
     controls,labels:labels.map(e=>({text:e.textContent.slice(0,40),font:font(e)})),
     cardCount:cardTexts.length,cardFictional:cardTexts.every(x=>x.includes("EXEMPLE FICTIF")),
     kinds:kind,allLinks,notice:{fg:textColor,bg:cs.backgroundColor},
     activeReadings:qs(".map-readings button[aria-pressed='true']").length,
     activeDisplays:qs(".map-display button[aria-pressed='true']").length,
     listHidden:document.querySelector("#list-panel").hidden,
     mapHidden:document.querySelector("#map-panel").hidden
    };
   });
   const fails=[];
   if(m.documentWidth>m.viewport+1)fails.push("Débordement "+m.documentWidth+"/"+m.viewport);
   if(m.h1Count!==1)fails.push("H1 "+m.h1Count);
   if(m.controls.some(c=>c.font<18||c.height<52))fails.push("Petits contrôles "+JSON.stringify(m.controls.filter(c=>c.font<18||c.height<52)));
   if(m.labels.some(x=>x.font<18))fails.push("Petits labels "+JSON.stringify(m.labels.filter(x=>x.font<18)));
   if(!m.cardFictional&&m.cardCount)fails.push("Cartes sans signal fictif");
   if(m.activeReadings!==1||m.activeDisplays!==1)fails.push("Sélection des vues ambiguë");
   if(ratio(m.notice.fg,m.notice.bg)<4.5)fails.push("Contraste notice fictive "+ratio(m.notice.fg,m.notice.bg).toFixed(2));
   if(fails.length)throw Error(screen.id+" "+label+": "+fails.join("; "));
   results.push({screen:screen.id,step:label,ok:true,...m});
   console.log("PASS "+screen.id+" "+label+" ("+m.cardCount+" cartes)");
  };
  await check("communs-liste");
  assert.equal(await page.locator("#results .initiative-card").count(),7);
  assert.equal(await page.locator("#map-panel").isVisible(),false);
  await grab("communs-liste");
  await page.locator("#display-map").click();
  await page.locator("#municipality-map .map-marker").first().waitFor();
  await check("communs-carte");
  assert.equal(await page.locator("#list-panel").isVisible(),false);
  await grab("communs-carte");
  await page.locator("#display-list").click();
  assert.equal(await page.locator("#results .initiative-card").count(),7);
  await page.locator("#reading-possibles").click();
  await check("possibles-liste");
  assert.equal(await page.locator("#results .initiative-card").count(),4);
  const types=await page.locator("#results .initiative-card .entry-kind").allTextContents();
  assert.ok(types.includes("Besoin")&&types.includes("Projet")&&types.includes("Ressource"));
  await grab("possibles-liste");
  await page.locator("#display-map").click();
  await check("possibles-carte");
  await grab("possibles-carte");
  await page.locator("#display-list").click();
  const before=await page.locator("#results .initiative-card").count();
  await page.locator("#commune").fill("Gaillac");
  const filtered=await page.locator("#results .initiative-card").count();
  assert.ok(filtered>0&&filtered<before,"Filtre commune fonctionnel");
  await page.locator("#commune").fill("");
  await page.locator("#results .initiative-card a").first().click();
  await page.locator("#detail h2").waitFor();
  const details=await page.evaluate(()=>{
    const s=sel=>document.querySelector(sel),font=e=>parseFloat(getComputedStyle(e).fontSize);
    return {h:s("#detail h2").textContent,titleFont:font(s("#detail h2")),
     paragraphFont:font(s("#detail .description")),detailInfo:s("#detail").textContent,
     overflow:document.documentElement.scrollWidth>innerWidth+1,
     backHeight:s("#back").getBoundingClientRect().height,
     printHeight:s("#print-fiche").getBoundingClientRect().height};
  });
  assert.ok(details.titleFont>=29&&details.paragraphFont>=19&&!details.overflow);
  assert.ok(details.backHeight>=52&&details.printHeight>=52);
  assert.match(details.detailInfo,/EXEMPLE FICTIF/);
  await grab("fiche-possible");
  await page.locator("#back").click();
  assert.ok(await page.locator("#list-panel").isVisible());
  await page.locator("#display-map").click();
  await page.locator("#map-zoom-in").focus();
  const focusStyle=await page.locator("#map-zoom-in").evaluate(e=>getComputedStyle(e).outlineStyle);
  assert.notEqual(focusStyle,"none","Focus carte non perceptible");
  assert.deepEqual(errors,[],"Erreur JavaScript");
  assert.deepEqual(external,[],"Réseau externe interdit en démonstration");
  results.push({screen:screen.id,step:"filtres-retour-focus-confidentialite",ok:true,filtered,details,focusStyle});
  console.log("PASS "+screen.id+" filtres-retour-focus-confidentialite");
  await page.close();
  await context.close();
 }
} finally {await browser.close();}
writeFileSync(path.join(folder,"report.json"),JSON.stringify({testedAt:new Date().toISOString(),prototype:"PR41 / snapshot fixe",graphic:"PR35 / CSS injecté, non publié",results},null,2));
console.log("PASS "+results.length+" séquences du prototype Interstice à 390 et 1280 px");
