import test from 'node:test';
import assert from 'node:assert/strict';
import {checkPreservation,reviewedBlobs,classify} from './check-reviewed-preservation.mjs';
test('all original files remain unchanged or match exact reviewed checkpoints',()=>{
 const result=checkPreservation();assert.equal(result.blobs,524);assert.deepEqual(result.changed,[]);assert.equal(result.accepted,true);
});
test('a later edit to a reviewed security file is still rejected',()=>{
 const approved=reviewedBlobs();const path='coordination/JOURNAL_COMMUN.md';assert.ok(approved.has(path));
 const exact=approved.get(path).keys().next().value;assert.notEqual(classify(path,exact,'original',approved),'rejected');
 assert.equal(classify(path,'unreviewed-later-edit','original',approved),'rejected');
 assert.equal(classify('assets/logo-faille-noire.svg',exact,'original',approved),'rejected');
 assert.equal(classify(path,'unreviewed-later-edit','original',approved,{}),'rejected');
});
test('existing C13 exceptions remain exact and original bytes remain preferred',()=>{
 const refs=new Map();assert.equal(classify('a','same','same',refs),'original');
 assert.equal(classify('a','known','original',refs,{a:'known'}),'exact-c13');
 assert.equal(classify('a','other','original',refs,{a:'known'}),'rejected');
});
