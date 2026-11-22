// SVG camera derived from the R2/R6 viewBox engine; no DOM or network.
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export function fitCamera(width, height) {
  // QCM 2: closer portrait-phone overview; entry dive keeps its own geometry.
  if(width<=600 && height>width)return {cx:350000/665,cy:377000/665,span:Math.max(700,Math.min(900,width*760/390))};
  return {cx: 500, cy: 500, span: Math.max(1220, 1180 * width / height)};
}
export function constrain(camera) {
  return {cx: clamp(camera.cx, -800, 1800), cy: clamp(camera.cy, -800, 1800), span: clamp(camera.span, 180, 4200)};
}
export function viewBox(camera, width, height) {
  const h = camera.span * height / width;
  return {x: camera.cx - camera.span / 2, y: camera.cy - h / 2, width: camera.span, height: h};
}
export function worldPoint(camera, rect, x, y) {
  const box = viewBox(camera, rect.width, rect.height);
  return {x: box.x + (x - rect.left) / rect.width * box.width, y: box.y + (y - rect.top) / rect.height * box.height};
}
export function project(camera, width, height, point) {
  const box = viewBox(camera, width, height);
  return {x: (point.x - box.x) / box.width * width, y: (point.y - box.y) / box.height * height};
}
export function zoomAt(camera, rect, factor, x, y) {
  const anchor = worldPoint(camera, rect, x, y);
  const span = clamp(camera.span * factor, 180, 4200);
  const h = span * rect.height / rect.width;
  return constrain({span, cx: anchor.x - ((x - rect.left) / rect.width - .5) * span, cy: anchor.y - ((y - rect.top) / rect.height - .5) * h});
}
export function panBy(camera, rect, dx, dy) {
  const scale = camera.span / rect.width;
  return constrain({...camera, cx: camera.cx - dx * scale, cy: camera.cy - dy * scale});
}
export function validCamera(value) {
  return value && ['cx', 'cy', 'span'].every(key => Number.isFinite(value[key])) && value.span >= 180 && value.span <= 4200;
}
