"""Static reader for an explicit, hash-pinned list of existing R6 texts.
No Drive bodies, blocked dossiers or candidate catalogue are copied.
"""
import sys,json,hashlib,html
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin,urlsplit
root=Path(__file__).resolve().parents[2]
out=Path(sys.argv[1])
manifest=json.loads(sys.argv[2])
known={x['source']:x['id']+'.html' for x in manifest}
allowed=set('section article div p h1 h2 h3 h4 h5 h6 ul ol li strong em blockquote br small span a nav table caption thead tbody tr th td dl dt dd sup sub hr code pre'.split())
void={'br','hr'}
drop={'script','style','form','iframe','object','embed','svg','template'}
class Reader(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.main=False;self.stack=[];self.suppressed=[];self.output=[]
 def handle_starttag(self,tag,attrs):
  if tag=='main':self.main=True;return
  if not self.main:return
  if self.suppressed:
   if tag in drop:self.suppressed.append(tag)
   return
  if tag in drop:self.suppressed.append(tag);return
  if tag not in allowed:return
  attrs=dict(attrs);safe=[]
  if attrs.get('id'):safe.append(('id',attrs['id']))
  if tag=='nav':safe.append(('aria-label',attrs.get('aria-label','Sommaire du texte')))
  if tag in ('td','th'):
   for key in ('colspan','rowspan','scope'):
    if attrs.get(key):safe.append((key,attrs[key]))
  if tag=='a' and attrs.get('href'):
   href=attrs['href'].strip();parts=urlsplit(href)
   if not parts.scheme and not parts.netloc and not href.startswith('#'):
    file=parts.path
    href=(known[file]+('#'+parts.fragment if parts.fragment else '')) if file in known else urljoin('https://zoutifrutti.github.io/Interstice/',href)
   if href.startswith('#') or urlsplit(href).scheme in ('https','http'):
    safe.append(('href',href));safe.append(('rel','noreferrer noopener'))
  self.output.append('<'+tag+''.join(' '+k+'="'+html.escape(v,quote=True)+'"' for k,v in safe)+'>')
  if tag not in void:self.stack.append(tag)
 def handle_endtag(self,tag):
  if self.suppressed:
   if tag==self.suppressed[-1]:self.suppressed.pop()
   return
  if tag=='main':
   while self.stack:self.output.append('</'+self.stack.pop()+'>')
   self.main=False;return
  if self.main and tag in self.stack:
   while self.stack:
    last=self.stack.pop();self.output.append('</'+last+'>')
    if last==tag:break
 def handle_data(self,data):
  if self.main and not self.suppressed:self.output.append(html.escape(data))

def shell(title,body,door='encyclopedie'):
 return '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><title>'+html.escape(title)+' · Interstice</title><link rel="stylesheet" href="../assets/nav-01/reading.css"><script type="module" src="../assets/nav-01/reading-return.mjs"></script></head><body><a class="skip" href="#lecture">Aller au texte</a><header><a data-return href="../index.html#porte/'+door+'">← Revenir dans la faille</a><span>Interstice · Lecture</span></header><main id="lecture">'+body+'</main><footer><a data-return href="../index.html#porte/'+door+'">← Reprendre l’exploration</a></footer></body></html>'

out.mkdir(parents=True,exist_ok=True)
for item in manifest:
 source=(root/item['source']).read_bytes()
 if hashlib.sha256(source).hexdigest()!=item['sha256']:raise ValueError('Source R6 modifiée : '+item['source'])
 parser=Reader();parser.feed(source.decode())
 if not parser.output:raise ValueError('Texte absent : '+item['source'])
 provenance='<aside aria-label="État du texte"><p>'+html.escape(item['status'])+'. Cette reprise ne constitue pas une nouvelle validation éditoriale.</p><a href="https://github.com/zoutiFrutti/Interstice/blob/7344591fa7f0f4f6951ea273525039cf2cb9982a/'+item['source']+'">Version source R6</a></aside>'
 (out/(item['id']+'.html')).write_text(shell(item['title'],provenance+''.join(parser.output)))
media=json.loads(sys.argv[3])
links=''.join('<li><a href="'+x['id']+'.html">'+html.escape(x['title'])+'</a> — '+html.escape(x['status'])+'</li>' for x in manifest)
(out/'index.html').write_text(shell('Lire les textes existants','<h1>Textes R6</h1><p>Les textes complets déjà présents sur le site, avec leurs sources et réserves. Les dossiers non autorisés restent fermés.</p><ul>'+links+'</ul>'))
for item in media:
 if item.get('embed_authorized') or item.get('embed_evidence'):raise ValueError('Aucun visa de lecteur intégré dans la sélection actuelle')
 if urlsplit(item['url']).scheme!='https':raise ValueError('Source média HTTPS nécessaire')
 body='<h1>'+html.escape(item['title'])+'</h1><p>'+html.escape(item['format'])+' · '+html.escape(item['id'])+'</p><aside><p>Notice candidate issue de la sélection 018-A du 30 octobre 2026. Lecture et droits non revérifiés ; aucun lecteur externe chargé.</p></aside><h2>Source et droits déclarés</h2><p>Licence indiquée par la sélection : '+html.escape(item['license'])+'. Vérifier la page source, les crédits et les conditions actuelles avant toute réutilisation.</p><p>Statut d’origine : '+html.escape(item['status'])+'. L’intégration d’un lecteur reste fermée tant que son autorisation et sa provenance officielles ne sont pas établies.</p><p><a href="'+html.escape(item['url'],quote=True)+'" rel="noreferrer noopener" target="_blank">Consulter la page source et son accès à l’œuvre ↗</a></p>'
 (out/(item['id']+'.html')).write_text(shell(item['title'],body,'mediatheque'))
