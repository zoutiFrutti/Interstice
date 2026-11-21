// Server/tooling only: no serialization of titles, sources, locators or private bodies.
import {loadSnapshot,buildMaster} from '../c07/developpeuse/master-v1/build.mjs';
import {readFileSync} from 'node:fs';
export function authorizedTargets(manifest){
  const overlay=JSON.parse(readFileSync(new URL('../c07/developpeuse/master-v1/overlay-reviewed.json',import.meta.url)));
  const master=buildMaster(loadSnapshot(),overlay);
  return manifest.map(item=>{
    const row=master.rows.find(x=>x.id===item.id);
    if(!row||row.status.blocked||item.publicMetadataApproved!==true||!/^[a-f0-9]{64}$/.test(item.version)||!item.decisionRef)throw Error('Participation target not approved');
    return {id:row.id,version:item.version,public_enabled:true,blocked:false};
  });
}
