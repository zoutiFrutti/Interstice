import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {DOORS,SUBMENUS,NAV7_ANCHORS,PUBLIC_RESOURCES} from '../assets/nav-01/graph-data.mjs';
import {LEGACY_QUICK_LINKS} from '../assets/nav-01/legacy-quick-links.mjs';
const read=file=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
const dir='coordination/work/c07/nav7/';
const c=JSON.parse(read(dir+'convergence-contract.json')),old=JSON.parse(read(dir+'contract-received-4cdad619.json'));
const hash=b=>createHash('sha256').update(b).digest('hex');
test('Contract follows the received annotated capture, with 4 left, 6 right and 7 beside the centre',()=>{
 assert.equal(c.primary_ports.length,6);assert.equal(c.primary_ports.reduce((n,p)=>n+p.submenus.length,0),31);
 assert.deepEqual(c.primary_ports.map(p=>p.coordinates),[[258,203],[397,178],[498,261],[233,450],[333,593],[461,426]]);
 assert.deepEqual(c.manifesto.coordinates,[272,354]);assert.equal(c.manifesto.not_a_port,true);
 for(const d of DOORS){const p=c.primary_ports.find(p=>p.id===d.id);assert.equal(p.title,d.title);assert.deepEqual(p.submenus.map(x=>x.slug),SUBMENUS[d.id].map(x=>x[0]));}
 const svg=read(c.coordinate_system.anchor_source);for(const p of [...c.primary_ports,c.manifesto])assert.ok(svg.includes('cx="'+p.coordinates[0]+'" cy="'+p.coordinates[1]+'"'));
 assert.doesNotMatch(read(c.coordinate_system.source),/<image|data:image/);
});
test('All fifteen original shortcut destinations survive without creating extra navigation categories',()=>{
 assert.equal(LEGACY_QUICK_LINKS.length,15);
 assert.deepEqual(LEGACY_QUICK_LINKS.map(x=>x.href).sort(),old.primary_ports.flatMap(p=>p.submenus).sort());
 for(const x of LEGACY_QUICK_LINKS){assert.ok(DOORS.some(d=>d.id===x.door&&Number(d.number)===x.point));assert.ok(x.submenu==='*'||SUBMENUS[x.door].some(s=>s[0]===x.submenu));
 const [file,fragment]=x.href.split('#');assert.ok(existsSync(new URL('../'+file,import.meta.url)));if(fragment)assert.ok(read(file).includes('id="'+fragment+'"'));
 assert.equal(x.origin_status,'existing_public_r6_not_new_visa');}
 assert.deepEqual(PUBLIC_RESOURCES,[]);assert.equal(c.documentary_gates.master_objects,219);assert.equal(c.documentary_gates.publishing_authorized,false);assert.equal(c.documentary_gates.PAR_005,'blocked');
});
test('Received Work inventory is hash-proven, statuses stay separate, no private locator copied',()=>{
 const inventory=JSON.parse(read(dir+'received-work/inventory.json')),manifest=read(dir+'received-work/package-manifest.json');
 assert.equal(hash(manifest),'b128b39132528695f67dde0f53989d45f61536c1ae658ec0a14113481bbdece7');assert.equal(inventory.files.length,135);assert.equal(inventory.files.filter(f=>f.type==='html').length,87);
 assert.ok(inventory.files.every(f=>f.new_publication_visa===false&&f.audience==='owner_private_review'));
 assert.equal(c.source.work_local_artifact_received,true);assert.equal(c.source.work_manifest_sha256,hash(manifest));
 const readings=JSON.parse(read(dir+'received-work/readings.json')).texts;assert.equal(readings.length,24);
 for(const r of readings){assert.equal(hash(readFileSync(new URL('../'+r.source,import.meta.url))),r.sha256);assert.equal(r.main_identical,true);assert.equal(r.new_publication_visa,false);}
 assert.doesNotMatch(JSON.stringify(inventory),/https?:\/\/(?:docs|drive)\.google\.com/);
});
