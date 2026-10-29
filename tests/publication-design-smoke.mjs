import { chromium } from "playwright";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { readFile, mkdir, writeFile } from "node:fs/promises";

const schema=JSON.parse(await readFile("design-system/fiche.schema.json","utf8"));
const ajv=new Ajv2020({allErrors:true,strict:false});
addFormats(ajv);
const valid=ajv.compile(schema);
const candidate={
 schema_version:"0.1",id:"lecture-exemple-001",type:"lecture",
 titre:"Fiche de lecture de contrôle",resume:"Exemple technique sans valeur éditoriale et sans publication.",
 rubrique:"Savoirs",langue:"fr",
 blocs:[{id:"b1",kind:"paragraph",texte:"Texte de test ; aucune validation éditoriale implicite.",qualification:"a_verifier",sources_ids:[]}],
 sources:[],workflow:{editorial_status:"pending",publication_status:"not_published"},
 droits:{etat:"to_verify"},revision:{numero:1}
};
const checks=[];
checks.push({test:"Candidate structure is valid",ok:valid(candidate)});
const invalidPublication=structuredClone(candidate);
invalidPublication.workflow.publication_status="published";
checks.push({test:"Candidate cannot be marked published without approval and rights",ok:!valid(invalidPublication)});
const invalidApproved=structuredClone(candidate);
invalidApproved.workflow.editorial_status="approved";
invalidApproved.workflow.publication_status="published";
invalidApproved.workflow.editorial_decision_id="review-1";
invalidApproved.droits.etat="verified";
checks.push({test:"Approval alone does not authorize publication",ok:!valid(invalidApproved)});
const approved=structuredClone(invalidApproved);
approved.workflow.publication_authorization_id="permission-1";
approved.workflow.published_at="2026-10-29T12:00:00Z";
checks.push({test:"Authorized structural sample passes",ok:valid(approved)});

const base=process.env.QA_BASE_URL||"http://127.0.0.1:8765";
await mkdir("visual-qa",{recursive:true});
const browser=await chromium.launch({headless:true});
const views=[{label:"mobile",width:390,height:844},{label:"desktop",width:1280,height:800}];
try {
 for (const view of views){
  const context=await browser.newContext({viewport:{width:view.width,height:view.height},reducedMotion:"reduce"});
  const page=await context.newPage();
  const errors=[],badAssets=[];
  page.on("pageerror",e=>errors.push(e.message));
  page.on("response",r=>{if(r.url().startsWith(base)&&r.status()>=400)badAssets.push(r.url()+" "+r.status())});
  const response=await page.goto(base+"/wiki-lecture-croisee-travail-soin-pouvoir.html",{waitUntil:"networkidle"});
  const actual=await page.evaluate(()=>{
   const ids=[...document.querySelectorAll("[id]")].map(x=>x.id);
   const anchors=[...document.querySelectorAll(".fiche-contents a[href^='#']")].map(x=>x.getAttribute("href").slice(1));
   return {
    h1:document.querySelectorAll("h1").length,
    headingCount:document.querySelectorAll(".fiche-section h2").length,
    anchors,missingAnchors:anchors.filter(id=>!ids.includes(id)),
    horizontalOverflow:document.documentElement.scrollWidth>innerWidth+1,
    status:document.querySelector(".fiche-state")?.innerText,
    documentStatus:document.querySelector(".fiche-state strong")?.textContent,
    sourcesVisible:!!document.querySelector("#fiche-sources"),
    discussionVisible:!!document.querySelector("#fiche-discussion"),
    sourceLinkCount:document.querySelectorAll("#fiche-sources a").length,
    appliedBackground:getComputedStyle(document.querySelector(".fiche-state")).backgroundColor
   };
  });
  const ok=response.status()===200&&actual.h1===1&&actual.headingCount===7&&!actual.horizontalOverflow&&
   !actual.missingAnchors.length&&actual.anchors.length===4&&actual.sourceLinkCount>=1&&actual.sourcesVisible&&
   actual.discussionVisible&&actual.status?.includes("Version de travail")&&actual.status?.includes("ne constitue pas une validation")&&
   actual.appliedBackground==="rgb(233, 229, 219)"&&errors.length===0&&badAssets.length===0;
  checks.push({test:"Reading fiche "+view.label,ok,actual,errors,badAssets});
  await page.screenshot({path:"visual-qa/fiche-lecture-"+view.label+".png",fullPage:true});
  await context.close();
 }
}finally {await browser.close()}
await writeFile("visual-qa/report.json",JSON.stringify({checks},null,2));
for(const c of checks)console.log((c.ok?"PASS":"FAIL")+" "+c.test);
if(checks.some(c=>!c.ok))process.exitCode=1;
