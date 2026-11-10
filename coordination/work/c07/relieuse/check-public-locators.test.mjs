import test from 'node:test';
import assert from 'node:assert/strict';
import {checkRegistries,directPrivateLink,run} from './check-public-locators.mjs';
test('C02 metadata has no direct Google file links',()=>{
 const result=run();assert.deepEqual(result,{accepted:true,violations:0,resources:219,sources:100});
});
test('reject documents and Drive file links while preserving opaque source IDs',()=>{
 const resources={resources:[{id:'ARCH-001',dossier_locator:'https://docs.google.com/document/d/EXAMPLE_PRIVATE_DOC_12345/edit',source_refs:['drive-meta:ARCH-001']}]};
 const sources={sources:[{id:'drive-meta:ARCH-001',locator:null}]};
 assert.equal(checkRegistries(resources,sources).accepted,false);
 assert.equal(directPrivateLink.test('https://drive.google.com/file/d/EXAMPLE_PRIVATE_FILE_12345/view'),true);
 assert.equal(checkRegistries({resources:[{id:'ARCH-001',dossier_locator:null,source_refs:['drive-meta:ARCH-001']}]},sources).accepted,true);
});
