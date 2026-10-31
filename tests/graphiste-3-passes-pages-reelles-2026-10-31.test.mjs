import test from "node:test";
import assert from "node:assert/strict";
import {chromium} from "playwright";
import {mkdir} from "node:fs/promises";
const ORIGIN="http://127.0.0.1:8000";
const pages=[
  ["wiki-feminismes-histoire-egalite.html","historique"],
  ["wiki-association-collegiale.html","association"],
  ["wiki-politique-institutions-regimes.html","politique"],
  ["wiki-ecologie-sociale-environnement.html","ecologie"],
  ["wiki-capitalisme-classes-travail.html","economique"],
  ["wiki-socialismes-communismes-anarchismes-autogestion.html","courants-politiques"],
  ["design-system/apercu-profils-historiques-biographies-2026-10-31.html","profils-arch-asso-bio"]
];
const color=(str)=>{const m=str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return m ? m.slice(1,4).map(Number):null};
const ratio=(a,b)=>{const v=c=>{const x=c.map(n=>n/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4);return .2126*x[0]+.7152*x[1]+.0722*x[2]};const x=v(a),y=v(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
await mkdir("artifacts",{recursive:true});
test("Trois passes Graphiste : QA des 6 véritables pages Wiki et des profils candidats réels",async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let failures=0,checks=0;
 try{
  for(const [path,kind] of pages){
   for(const width of [320,390,1280]){
    const page=await browser.newPage({viewport:{width,height:850},reducedMotion:"reduce",hasTouch:width<600});
    const brokenLocal=[],scriptErrors=[],badCss=[];
    page.on("response",r=>{if(r.url().startsWith(ORIGIN)&&r.status()>=400)badCss.push(r.url()+" "+r.status())});
    page.on("pageerror",e=>scriptErrors.push(e.message));
    try{
     const r=await page.goto(ORIGIN+"/"+path,{waitUntil:"networkidle"});
     assert.equal(r?.status(),200,path);
     assert.equal(await page.locator("h1").count(),1,path+" : 1 seul H1");
     assert.ok(await page.locator("main.interstice-fiche").count(),path+" : base de fiche appliquée");
     assert.ok(await page.locator("link[href$='fiche-premiere-edition.css']").count(),path+" : CSS commun");
     const metrics=await page.evaluate(()=>{
      const main=document.querySelector("main.interstice-fiche");
      const title=document.querySelector("h1");
      const bodyStyle=getComputedStyle(main);
      const nav=document.querySelector("main nav");
      const first=nav?.querySelector("a");
      const callout=document.querySelector(".fiche-state");
      const tbl=document.querySelector(".fiche-comparison");
      const colorEl=callout||first||main;
      return {
       viewport:innerWidth,documentWidth:document.documentElement.scrollWidth,
       font:bodyStyle.fontSize,h1Top:Math.round(title.getBoundingClientRect().top),
       mainColor:bodyStyle.color,mainBackground: getComputedStyle(document.body).backgroundColor,
       tocItems:nav?.querySelectorAll("a").length||0,
       title: title.textContent.trim(),
       callout:callout?.innerText.slice(0,180)||null,
       sampleColor:getComputedStyle(colorEl).color,
       sampleBg:getComputedStyle(colorEl).backgroundColor,
       tableScroll:tbl?{scroll:tbl.scrollWidth,client:tbl.clientWidth}:null
      };
     });
     if(metrics.documentWidth>width+1){
       const overflowing=await page.evaluate(()=>[...document.querySelectorAll("body *")].filter(e=>e.getBoundingClientRect().right>innerWidth+1 || e.getBoundingClientRect().left< -1).slice(0,14).map(e=>({tag:e.tagName,cls:String(e.className).slice(0,90),text:e.textContent?.slice(0,65),r:Math.round(e.getBoundingClientRect().right),w:Math.round(e.getBoundingClientRect().width)})));
       console.log("PAGES_REELLES_OVERFLOW "+JSON.stringify({path,width,overflowing}));
     }
     assert.ok(metrics.documentWidth<=width+1,path+" horizontal overflow "+width+" -> "+metrics.documentWidth);
     assert.ok(parseFloat(metrics.font)>=18,path+" font below 18px");
     const mc=color(metrics.mainColor),bg=color(metrics.mainBackground);
     const cr=mc&&bg?ratio(mc,bg):null;
     // Contrast of main text vs site background; headings and translucent cards need separate human review.
     assert.ok(cr===null||cr>=4.5,path+" main text contrast "+cr);
     if(kind==="profils-arch-asso-bio"){
      assert.equal(await page.locator(".profile-case").count(),3);
      for(const id of ["profil-arch003","profil-asso007","profil-bio009"]){
       assert.equal(await page.locator("#"+id).count(),1);
      }
      assert.match(await page.locator("#profil-bio009").innerText(),/Nathalie Le Mel/);
     }else{
      assert.equal(await page.locator("main.fiche-wiki-candidate").count(),1);
      assert.ok(await page.locator("section").count()>=3);
     }
     const navigation=await page.evaluate(()=>[...document.querySelectorAll('main a[href^="#"]')].filter(a=>{const id=a.getAttribute("href").slice(1);return id&&!document.getElementById(id)}).map(a=>a.getAttribute("href")));
     if(navigation.length)brokenLocal.push(...navigation);
     const anchors=await page.locator("main nav a[href^='#']").all();
     if(anchors.length>0){
      await anchors[0].focus();
      const focus=await anchors[0].evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth));
      assert.ok(focus>=3,path+" invisible focus");
      // Enter on in-page navigation should focus the target visually
      await page.keyboard.press("Enter");
      const hash=await page.evaluate(()=>location.hash);
      assert.ok(hash.startsWith("#"),path+" keyboard anchor navigation");
     }
     assert.deepEqual(badCss,[],path+" local resource 404");
     assert.deepEqual(scriptErrors,[],path+" runtime errors");
     if(brokenLocal.length)console.log("PAGES_REELLES_ANCHORS_MISSING "+JSON.stringify({path,width,brokenLocal}));
     console.log("PAGES_REELLES_METRIC "+JSON.stringify({path,kind,width,...metrics,mainContrast:cr,brokenAnchors:brokenLocal}));
     if(width===320||width===1280){
      await page.screenshot({path:"artifacts/pages-reelles-"+kind+"-"+width+".png",fullPage:true});
     }
     if(kind==="profils-arch-asso-bio"&&width===1280){
      await page.emulateMedia({media:"print"});
      await page.pdf({path:"artifacts/profils-arch-asso-bio-a4.pdf",format:"A4",printBackground:false});
     }
     if(width===320){
      await page.addStyleTag({content:"html{font-size:200%!important}"});
      const zoom=await page.evaluate(()=>document.documentElement.scrollWidth);
      console.log("PAGES_REELLES_ZOOM "+JSON.stringify({path,width,zoomWidth:zoom}));
      assert.ok(zoom<=width+1,path+" zoom text overflow");
     }
     checks++;
    }finally{await page.close()}
   }
  }
  console.log("PAGES_REELLES_RESULT "+JSON.stringify({checks,failures}));
 }finally{await browser.close()}
});