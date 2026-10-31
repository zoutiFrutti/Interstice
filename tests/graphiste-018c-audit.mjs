import test from "node:test";
import assert from "node:assert/strict";
import {chromium} from "playwright";
import {mkdir,writeFile} from "node:fs/promises";

const BASE="http://127.0.0.1:8000";
const SOURCE="69fcd4701cefeb884fdd46fc14a6ad5bbae6108a";
const sizes=[320,390,1280];
const records=[];
await mkdir("artifacts",{recursive:true});
const safeName=s=>s.replace(/[^a-z0-9_-]/gi,"-");

async function inspect(page,screen,width){
 const data=await page.evaluate(()=>{
  const $=s=>document.querySelector(s);
  const measure=s=>{const e=$(s);if(!e||!e.getClientRects().length)return null;
   const r=e.getBoundingClientRect(),cs=getComputedStyle(e);
   return {text:e.innerText?.slice(0,110),top:Math.round(r.top),bottom:Math.round(r.bottom),
    left:Math.round(r.left),right:Math.round(r.right),height:Math.round(r.height),
    font:cs.fontSize,outline:cs.outlineWidth,color:cs.color,bg:cs.backgroundColor};
  };
  const tiny=[...document.querySelectorAll("button,a,input,select,summary")].filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=="hidden").map(e=>{
   const r=e.getBoundingClientRect();return {text:(e.innerText||e.getAttribute("aria-label")||"").slice(0,50),h:Math.round(r.height),w:Math.round(r.width)};
  }).filter(e=>e.h<44||e.w<24).slice(0,16);
  return {page:location.pathname,viewport:innerWidth,documentWidth:document.documentElement.scrollWidth,
   overflowing:document.documentElement.scrollWidth>innerWidth+1,scrollY:window.scrollY,
   h1:measure("h1"),banner:measure(".candidate-states"),cta1:measure(".hero-actions a:first-child"),
   cta2:measure(".hero-actions a:nth-child(2)"),cta3:measure(".hero-actions a:nth-child(3)"),
   heading:measure("#cartes-title"),notice:measure(".demo-notice"),
   focusableMap:$("#map-scroll-region")?.tabIndex===0,
   mapHint:$("#map-scroll-hint")?.textContent?.trim(),
   mapScrollWidth:$("#map-scroll-region")?.scrollWidth,
   mapClientWidth:$("#map-scroll-region")?.clientWidth,
   mapLeft:$("#map-scroll-region")?.scrollLeft,
   tiny,errorsFromDom:0};
 });
 records.push({width,screen,...data});
 console.log("GRAPHISTE_METRIC "+JSON.stringify({width,screen,...data}));
 assert.ok(!data.overflowing,"Débordement "+screen+" à "+width+": "+data.documentWidth);
 return data;
}
async function capture(page,width,screen,full=false){
 await page.screenshot({path:"artifacts/018c-"+width+"-"+safeName(screen)+".png",fullPage:full});
}
test("018-C : parcours graphique V0 intégrée, test navigateur tactile simulé 320/390/1280",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of sizes){
   const context=await browser.newContext({viewport:{width,height:850},hasTouch:true,reducedMotion:"reduce"});
   const page=await context.newPage();
   const errors=[],posts=[],external=[];
   page.on("pageerror",e=>errors.push(e.message));
   page.on("request",q=>{if(q.method()==="POST")posts.push(q.url());if(!q.url().startsWith(BASE+"/")&&!q.url().startsWith("data:"))external.push(q.url());});
   try{
    await page.goto(BASE+"/index.html",{waitUntil:"networkidle"});
    let first=await inspect(page,"accueil-premier-ecran",width);
    await capture(page,width,"accueil-premier-ecran");
    await capture(page,width,"accueil-entier",true);
    records.push({width,screen:"pli-accueil",h1Visible:first.h1?.bottom<=850,firstCtaVisible:first.cta1?.bottom<=850,allCtaVisible:first.cta3?.bottom<=850});
    console.log("GRAPHISTE_FOLD "+JSON.stringify({width,h1Visible:first.h1?.bottom<=850,firstCtaVisible:first.cta1?.bottom<=850,allCtaVisible:first.cta3?.bottom<=850,
      bannerBottom:first.banner?.bottom,h1Bottom:first.h1?.bottom,cta1Bottom:first.cta1?.bottom,cta3Bottom:first.cta3?.bottom}));
    await page.locator('.hero-actions a[href="decouvrir-initiatives.html"]').tap();
    await page.locator("#results .initiative-card").first().waitFor();
    await inspect(page,"decouverte-arrivee",width);
    await capture(page,width,"decouverte-arrivee");
    await page.locator("#simulation-territory").selectOption("Gaillac");
    await page.locator("#simulation-go").tap();
    assert.equal(await page.locator("#simulation-results .initiative-card").count(),1);
    await inspect(page,"simulation-resultats",width);
    await capture(page,width,"simulation-resultats");
    await page.locator("#commune").fill("Gaillac");
    assert.equal(await page.locator("#results .initiative-card").count(),3);
    await page.locator("#display-map").tap();
    await inspect(page,"carte-gaillac",width);
    await capture(page,width,"carte-gaillac");
    const region=page.locator("#map-scroll-region");
    assert.equal(await region.getAttribute("aria-describedby"),"map-scroll-hint");
    assert.equal(await region.getAttribute("tabindex"),"0");
    if(width<=600){
      await region.focus();
      await page.keyboard.press("ArrowRight");
      const scrolled=await region.evaluate(e=>e.scrollLeft);
      records.push({width,screen:"balayage-clavier-carte",scrollLeft:scrolled});
      assert.ok(scrolled>0,"La région cartographique ne défile pas au clavier à "+width);
    }
    await page.locator("#display-list").tap();
    await inspect(page,"liste-gaillac",width);
    await capture(page,width,"liste-gaillac");
    await page.locator("#category").selectOption("Réparation");
    await page.locator('#results a[data-id="demo-cycles"]').tap();
    assert.match(await page.locator("#detail h2").innerText(),/vélos en partage/);
    await inspect(page,"fiche-fictive",width);
    await capture(page,width,"fiche-fictive");
    await page.locator("#back").tap();
    assert.equal(await page.locator("#commune").inputValue(),"Gaillac");
    await page.locator('.initiative-header a[href="participer.html"]').tap();
    await inspect(page,"participer",width);
    await capture(page,width,"participer");
    await page.locator('a[href="wiki.html"]').first().tap();
    await inspect(page,"wiki-index",width);
    await capture(page,width,"wiki-index");
    for(const [file,key] of [["wiki-decision-collective.html","wiki-decider"],["wiki-lecture-croisee-travail-soin-pouvoir.html","wiki-travail-soin"]]){
      await page.locator('a[href="'+file+'"]').first().tap();
      await inspect(page,key,width);
      const status=await page.locator(".reading-status").innerText();
      assert.match(status,/relire par un être humain/i);
      await capture(page,width,key);
      await page.goto(BASE+"/wiki.html",{waitUntil:"networkidle"});
    }
    assert.deepEqual(errors,[],"Erreur JavaScript");
    assert.deepEqual(posts,[],"Aucune soumission");
    assert.deepEqual(external,[],"Aucune requête externe");
   }finally{await page.close();await context.close();}
  }
 }finally{
  await writeFile("artifacts/graphiste-018c-report.json",JSON.stringify({sourceSha:SOURCE,simulatedTouch:true,physicalAndroid:false,talkBack:false,records},null,2));
  await browser.close();
 }
});
