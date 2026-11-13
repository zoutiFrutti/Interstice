// One navigation implementation; old prototype entry remains a safe compatibility URL.
import {readFragment} from './navigation-state.mjs';
import {BUNDLE} from './graph-data.mjs';
export function canonicalEntry(fragment){
 if(/^#document\/(manifeste|archive)$/.test(fragment||''))return 'explorer.html'+fragment;
 const state=readFragment(fragment||'',BUNDLE);
 if(state.kind==='door')return 'explorer.html#porte/'+state.id+(state.section?'/'+state.section:'');
 if(state.kind==='parcours')return 'explorer.html#parcours/'+state.id+(state.stepId?'/'+state.stepId:'');
 if(state.kind==='parcours_index')return 'explorer.html#traversees';
 return 'explorer.html#exploration';
}
if(typeof window!=='undefined')window.location.replace(canonicalEntry(window.location.hash));
