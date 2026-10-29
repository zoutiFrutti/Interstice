# Kit graphique — La Faille noire × Interstice

**État :** proposition technique sur branche, non fusionnée et non validée visuellement en situation. Dernière revue : 29 octobre 2026. Référence éditoriale : Manifeste V2.5 consolidé (non adopté collectivement). Le kit ne confère aucune autorité au graphisme ou à son atelier.

## Logos à conserver

- `logo-faille-noire.svg` et `logo-interstice.svg` : SVG avec fond noir intégré, existants sur `main`.
- `logo-faille-noire-transparent.svg` et `logo-interstice-transparent.svg` : **copies strictes** des SVG maîtres, moins le seul rectangle de fond `#101014`. Aucune retouche de tracé ou de couleur.
- Sources de création visuelle validées dans l'atelier : « Planche d’identité visuelle rouge et noire » et « Diptyque des fissures rouges ». Les images de validation ne sont **pas** fournies par ce kit sous forme de fichiers sources modifiables. Ne pas prétendre que les SVG existants reproduisent parfaitement tous leurs détails.

## Palette de référence

| Token | Code |
|---|---|
| Noir profond | `#101014` |
| Rouge de référence | `#C5212C` |
| Blanc cassé | `#E9E5DB` |

Les SVG existants contiennent aussi certaines variantes de rouge (`#b91520`, `#dd2631`) : ce sont des couleurs **déjà présentes dans les tracés**, à ne pas remplacer mécaniquement sans validation graphique.

## Usage et choix du fond

- Priorité aux fonds noirs profonds pour les logos clairs. La variante transparente n'est pas automatiquement lisible sur fond ivoire : le disque clair risque d'y disparaître.
- Sur fond clair, conserver un aplatissement noir contrôlé autour du logo ou utiliser une variante dédiée **après** validation. Ne pas poser le SVG blanc cassé sur fond ivoire sans vérification du contraste.
- Conserver les proportions du symbole et un espace libre. Ne pas étirer, recoloriser ni rogner sans contrôle.
- Le logo Interstice actuel utilise un `clipPath` circulaire qui tronque les ramifications extérieures : **écart artistique connu** par rapport à certaines maquettes. Aucune modification de ce découpage n'a été effectuée.

## Contrôle et exports

- `identite-preview.html` et `identite-preview.css` : planche technique de comparaison à 32, 64 et 144 px sur trois couleurs de fond.
- `identite-export.js` : exporteur **local dans le navigateur** (PNG/WebP en 64, 256, 512, 1024 px, si le navigateur prend en charge le format). Ouvrir `identite-preview.html` sur un serveur local pour éviter les restrictions d'origine. Cet exporteur ne dépose pas de fichiers PNG ou WebP dans le dépôt.
- L'existence du code n'est pas une preuve que tous les exports sont réussis : **tests multi-navigateurs et des fichiers générés restent à faire**.
- `style.css` : composant `brand-lockup`, utilisé dans `wiki.html` sur la branche de reprise. Les pages bibliothèques, accueil, formulaires, manifeste et les icônes de partage restent à intégrer/revoir indépendamment.

## Accessibilité et confidentialité

- Le symbole peut être décoratif (`alt=""`) quand son nom est donné immédiatement à côté. Sinon, décrire brièvement ce qu'il représente.
- Les futures illustrations de réparation, construction, apprentissage et création ne doivent pas révéler les identités des personnes sans consentement adapté ; vérifier également vêtements, tatouages, lieux et métadonnées.
- Pour le manifeste V2.5, garder visible la mention **« Version éditoriale de travail, non adoptée collectivement »**.

## Travail restant

1. Comparer les logos à nos maquettes visuelles approuvées, en particulier les connexions qui prolongent les craquelures.
2. Vérifier l'apparence des variantes transparentes sur fond clair, noir et rouge et en 32 px.
3. Exécuter réellement l'exporteur PNG/WebP et inspecter le fond alpha, la netteté et la taille des fichiers.
4. Préparer seulement ensuite les variantes claires/sombres/compactes effectivement nécessaires.
5. Harmoniser les autres pages sur des PR distinctes sans écraser les modifications des autres ateliers.


## Contrôle local complémentaire (Chromium, 29 octobre 2026)

- Deux SVG transparents et le script `identite-export.js` ont été reconstitués à l'identique dans un environnement de contrôle local ; les empreintes Git des trois fichiers ont été comparées aux fichiers source du dépôt.
- Le navigateur Chromium n'a pas pu ouvrir l'URL localhost ou `file://` (restrictions de cet environnement). La validation a donc utilisé une page d'essai intégrée et une substitution **uniquement dans le banc de test** des chemins d'images par les mêmes SVG en data URI. Le code de l'exporteur exécuté était byte-identique au fichier du dépôt.
- Les **16 exports** (2 logos × PNG/WebP × 64/256/512/1024 px) ont été générés et rouverts par Pillow ; dimensions exactes, pixel supérieur gauche transparent pour les 16, archives ZIP vérifiée sans erreur. Le ZIP a été créé localement, **pas ajouté à GitHub**.
- Un rendu de contrôle des SVG à 32, 64 et 144 px sur fond noir/ivoire a été examiné : sur ivoire, la circonférence blanche se confond avec le fond, ce qui rend ce modèle **inadapté aux fonds clairs sans accompagnement**.
- Les tests réels de la page `identite-preview.html` servie par GitHub Pages, les interactions Safari/Firefox, le responsive du site complet et les audits d'accessibilité ne sont **pas** couverts par ce test.
