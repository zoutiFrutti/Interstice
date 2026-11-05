// Fixed same-origin return: never accept an arbitrary URL from query parameters.
export function readingReturn(fragment) {
  return /^#(?:exploration|traversees|porte\/(?:encyclopedie|mediatheque|carte|entraide)|parcours\/PAR-00[1-7](?:\/[a-zA-Z0-9_-]+)?)$/.test(fragment || '')
    ? '../index.html?retour=lecture'+fragment : '../index.html#porte/encyclopedie';
}
if (typeof document !== 'undefined') {
  const fragment = new URLSearchParams(location.search).get('retour');
  if (fragment) for (const link of document.querySelectorAll('[data-return]')) link.href=readingReturn(fragment);
  for(const link of document.querySelectorAll('main a[href]')) {
    const url=new URL(link.href,location.href);
    if(fragment && url.origin===location.origin && url.pathname.startsWith(new URL('.',location.href).pathname) && url.pathname.endsWith('.html')) {
      url.searchParams.set('retour',fragment);link.href=url.href;
    }
  }
}
