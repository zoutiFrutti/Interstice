import { chromium } from "playwright";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { readFile, writeFile, mkdir } from "node:fs/promises";
const base=process.env.QA_BASE_URL||"http://127.0.0.1:8765";
const schema=JSON.parse(await readFile("design-system/fiche.schema.json","utf8"));
const data=JSON.parse(await readFile("design-system/exemples/lecture-travail-soin-pouvoir.json","utf8"));
const ajv=new Ajv2020({allErrors:true,strict:false});addFormats(ajv);
const validate=ajv.compile(schema);
const checks=[{name:"La fiche publique de démonstration respecte le schéma V0.1",ok:validate(data),detail:validate.errors}];
await mkdir("visual-qa",{recursive:true});
const browser=await chromium.launch({headless:true});
try {
 for(const view of [{name:"mobile",width:390,height:844},{name:"desktop",width:1280,height:800}]){
  const context=await browser.newContext({viewport:{width:view.width,height:view.height},reducedMotion:"reduce"});
  const page=await context.newPage();
  const pageErrors=[];const assetErrors=[];
  page.on("pageerror",e=>pageErrors.push(e.message));
  page.on("response",response=>{if(response.url().startsWith(base)&&response.status()>=400)assetErrors.push(response.status()+" "+response.url())});
  const res=await page.goto(base+"/design-system/apercu-exemple-public.html",{waitUntil:"networkidle"});
  await page.locator("#fiche-preview[aria-busy]").waitFor({state:"hidden",timeout:15000});
  const output=await page.evaluate(()=>{
   const doc=document.querySelector(".fiche-rendue");
   const toc=[...document.querySelectorAll(".fiche-contents a[href^='#']")];
   const ids=new Set([...document.querySelectorAll("[id]")].map(x=>x.id));
   return {
    isRendered:!!doc,
    h1:document.querySelectorAll("h1").length,
    chapters:document.querySelectorAll(".fiche-rendue .fiche-section h2").length,
    sources:document.querySelectorAll(".fiche-section--sources li").length,
    bodyText:doc?.textContent||"",
    anchorsMissing:toc.filter(a=>!ids.has(a.hash.slice(1))).map(a=>a.hash),
    overflow:document.documentElement.scrollWidth>innerWidth+1,
    stateLabel:document.querySelector(".fiche-state")?.textContent||"",
    fontFace:getComputedStyle(document.querySelector("h1")).fontFamily,
    heroDisplay:getComputedStyle(document.querySelector(".fiche-rendue > header.fiche-hero")).display,
    titleWidth:Math.round(document.querySelector(".fiche-rendue h1").getBoundingClientRect().width),
    titleHeight:Math.round(document.querySelector(".fiche-rendue h1").getBoundingClientRect().height)
   };
  });
  checks.push({name:"Rendu de la fiche publique "+view.name,ok:res.status()===200&&output.isRendered&&output.h1===1&&
   output.chapters>=5&&output.sources===5&&!output.overflow&&output.anchorsMissing.length===0&&
   output.stateLabel.includes("non validé")&&output.heroDisplay==="block"&&output.titleWidth>=200&&output.titleHeight<240&&output.bodyText.includes("Qui fait vivre les communs ?")&&pageErrors.length===0&&assetErrors.length===0,
   detail:{...output,bodyText:undefined,pageErrors,assetErrors}});
  await page.screenshot({path:"visual-qa/fiche-json-"+view.name+".png",fullPage:true});
  if(view.name==="mobile"){
    const check=await page.evaluate(async()=>{
      const {renderFiche}=await import("/design-system/fiche-renderer.mjs");
      const input=await (await fetch("/design-system/exemples/lecture-travail-soin-pouvoir.json")).json();
      input.titre='<img src=x onerror="window.__unsafeExecuted=true">';
      input.workflow.editorial_status="approved";
      input.workflow.publication_status="published";
      input.sources[0].url="javascript:alert(123)";
      const el=document.createElement("div");
      document.body.append(el);
      const result=renderFiche(input,el);
      const state=el.querySelector(".fiche-state")?.textContent||"";
      const title=el.querySelector("h1")?.textContent||"";
      const unsafe=[...el.querySelectorAll("a[href]")].some(a=>a.getAttribute("href")?.startsWith("javascript:"));
      const injected=el.querySelector("img")!==null;
      const executed=window.__unsafeExecuted===true;
      el.remove();
      return {ok:result.ok,title,state,unsafe,injected,executed};
    });
    checks.push({name:"Rendu échappé / aucun script / aucun lien javascript: / aucun faux statut",ok:check.ok&&
      check.title.includes('<img src=x onerror=')&&!check.unsafe&&!check.injected&&!check.executed&&
      check.state.includes("non validé")&&!check.state.includes("Publié"),detail:check});
  }
  await context.close();
 }
}finally{await browser.close()}
await writeFile("visual-qa/renderer-report.json",JSON.stringify({checks},null,2));
for(const c of checks)console.log((c.ok?"PASS ":"FAIL ")+c.name+(c.ok?"":": "+JSON.stringify(c.detail).slice(0,500)));
if(checks.some(c=>!c.ok))process.exitCode=1;

// Test supplémentaire de la revue privée, sur données exclusivement fictives.
await import('./moderation-preview-smoke.mjs');
