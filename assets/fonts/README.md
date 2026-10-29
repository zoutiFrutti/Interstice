# Polices locales d'Interstice — passe typographique du 29 octobre 2026

Cette proposition remplace le prototype `@font-face` de l'ancienne PR #5 (deux TTF encodées dans un CSS d'environ 307 Ko) par quatre fichiers **WOFF2 auto-hébergés**, chargés depuis `style.css` et distribués uniquement par le site.

## Familles

| Fichier | Usage | Poids |
|---|---|---:|
| `barlow-condensed-latin-700.woff2` | Titres, en-têtes, marque | 22 444 octets |
| `barlow-condensed-latin-ext-700.woff2` | Lettres latines étendues des titres | 14 640 octets |
| `atkinson-next-latin-variable.woff2` | Paragraphes, formulaires, liens, poids 200–800 | 33 996 octets |
| `atkinson-next-latin-ext-variable.woff2` | Caractères latins étendus, poids 200–800 | 19 092 octets |

**Total binaire : 90 172 octets**, chargement conditionnel par plages Unicode. Les fichiers WOFF2 ne sont plus encodés dans le CSS, ce qui permet la mise en cache séparée et évite un CSS de plusieurs centaines de Ko.

**Source publique exacte :** [fontsource/font-files](https://github.com/fontsource/font-files), sous `fonts/google/barlow-condensed/files/` et `fonts/variable/atkinson-hyperlegible-next/files/`. Les SHA des blobs GitHub source et destination ont été comparés, avec résultat identique :

- `barlow-condensed-latin-700.woff2` — `3726e9dccc00171c2b54534fc148d5dc5dcfddf7`
- `barlow-condensed-latin-ext-700.woff2` — `02f926eead439c496594e509794af3f417f63408`
- `atkinson-next-latin-variable.woff2` — `a9ca4bd6ffda7092b397871cd3b5ad38a372046d`
- `atkinson-next-latin-ext-variable.woff2` — `d2b4185e21f2db89ae40cea53740afe54cdbf4a7`

Les textes de licence SIL Open Font License 1.1 sont présents ici : `BarlowCondensed-OFL.txt` et `AtkinsonHyperlegibleNext-OFL.txt`. Ne pas redistribuer les polices en supprimant ces notices.

## CSS et limites

Les quatre `@font-face` sont déclarés dans `style.css`, avec `font-display: swap` et plages `unicode-range` reprises de Fontsource. Le site n'a **pas** besoin d'un appel Google Fonts, jsDelivr ou d'un CDN pour les charger. Pour les styles et glyphes non disponibles, les piles système servent de repli.

**Contrôles faits :** tous les fichiers ont été relus depuis le dépôt ; les SHA de blobs sont identiques à Fontsource ; en-tête WOFF2 `wOF2`, taille interne conforme à la taille en octets ; les quatre chemins sont référencés et la feuille ne contient aucun chargement de police externe ; les règles de fonte du corps sont placées après le vieux `font:17px/1.6 system-ui,sans-serif` et reprennent la priorité. Les cinq pages inspectées (accueil, bibliothèque, Wiki, manifeste V2.5, participation) chargent `style.css` et aucun de leurs `<style>` internes ne redéfinit `font-family`.

**Non réalisés :** mesures réelles du réseau en navigateur, captures typographiques sous Android et ordinateur, lecteurs d'écran, benchmarks de performance, tests bout en bout et contrôle de toutes les pages du site. Ne pas présenter la branche comme déployée.

## Identité

- **Barlow Condensed Bold** sert les titres expressifs et la signature éditoriale.
- **Atkinson Hyperlegible Next** sert la lecture et la participation.
- La règle reste : impact dans les titres, clarté dans les savoirs. Le manifeste V2.5 demeure une version éditoriale **non adoptée collectivement**.
