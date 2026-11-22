import {constrain, project} from './camera.mjs';

// Official Interstice SVG: circle cx=350, cy=377, r=33 in a 665-square viewBox.
// The image is projected into the existing 1000-square world, never rewritten.
export const NUCLEUS=Object.freeze({x:350000/665,y:377000/665,r:33000/665});
export function diveCamera(width,height){
  return constrain({cx:NUCLEUS.x,cy:NUCLEUS.y,span:4*NUCLEUS.r*width/Math.min(width,height)});
}
export function retreat(camera){return constrain({...camera,span:camera.span*1.12});}
export function edgeCue(camera,width,height,target){
  const p=project(camera,width,height,target),dx=p.x-width/2,dy=p.y-height/2;
  const rx=Math.max(40,width/2-76),ry=Math.max(70,height/2-140);
  const t=Math.min(rx/(Math.abs(dx)||1),ry/(Math.abs(dy)||1));
  return {x:width/2+dx*t,y:height/2+dy*t,angle:Math.atan2(dy,dx)*180/Math.PI+45,
    inView:p.x>65&&p.x<width-65&&p.y>100&&p.y<height-140};
}
export function stepLayout(path,doors){
  const places=path.doors.map(id=>doors.find(door=>door.id===id));
  const center={x:places.reduce((n,p)=>n+p.x,0)/places.length,y:places.reduce((n,p)=>n+p.y,0)/places.length};
  return path.steps.map((step,index)=>{
    const angle=-Math.PI*.8+index*Math.PI*2/path.steps.length;
    return {id:'step:'+path.id+'/'+step.id,x:center.x+Math.cos(angle)*270,y:center.y+Math.sin(angle)*235};
  });
}
