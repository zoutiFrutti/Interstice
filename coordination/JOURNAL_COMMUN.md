# Journal commun des ateliers — La Faille noire × Interstice

Ce journal recueille les contributions factuelles des ateliers. Une contribution n'est pas une validation éditoriale ou politique. Ne pas inscrire de données personnelles sensibles.

## 2026-10-29 — Atelier identité graphique et intégration des supports

**Sujet :** audit et première intégration de l'identité visuelle commune La Faille noire / Interstice.

**Connaissances constatées :**
- Le dépôt Interstice contient deux SVG construits en formes vectorielles : `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg`.
- Leur parenté est visible dans le code : cercle blanc cassé, faille rouge, fond sombre ; celui d'Interstice comprend des ramifications et des points reliés.
- `index.html`, `manifeste.html`, `bibliotheque.html` et `participer.html` font déjà référence aux logos et/ou à `style.css`.
- `style.css` comporte des variables communes noir `#101014`, blanc cassé `#e9e5db`, rouge `#c5212c`.
- La présence de ces fichiers ne prouve pas leur identité exacte avec les planches approuvées en conversation. Les fichiers maîtres « Planche d’identité visuelle rouge et noire » et « Diptyque des fissures rouges » n'ont pas été retrouvés lors de la recherche Drive effectuée.

**Sources :**
- https://github.com/zoutiFrutti/Interstice/blob/main/assets/logo-faille-noire.svg
- https://github.com/zoutiFrutti/Interstice/blob/main/assets/logo-interstice.svg
- https://github.com/zoutiFrutti/Interstice/blob/main/style.css
- https://github.com/zoutiFrutti/Interstice/blob/main/index.html
- https://github.com/zoutiFrutti/Interstice/blob/main/manifeste.html

**Pages Wiki ou supports concernés :** documentation sur l'identité de La Faille noire et Interstice, accueil, manifeste, bibliothèque des communs, pages de participation ; pas de nouvel article exigé à ce stade.

**Contradictions et incertitudes :** une intégration graphique existe déjà, mais son adéquation avec les planches initialement approuvées reste à établir. Les tests visuels ordinateur/mobile ne sont pas documentés comme réalisés. Le manifeste n'a pas été modifié politiquement pendant cette passe.

**Modifications réellement effectuées :** branche `design/identite-commune-audit-2026-10-28` créée ; consolidation CSS (focus clavier, réduction du mouvement, impression) dans le commit https://github.com/zoutiFrutti/Interstice/commit/f02e9a58823683894050be44ed8aa1eb30773436 . Lecture après écriture vérifiée. Cette branche n'a pas été annoncée comme fusionnée ni publiée. Des entrées ont également été ajoutées dans les journaux Drive Interstice et La Faille noire.

**Restant à faire :** retrouver et comparer les originaux validés ; tester SVG, contraste, navigation mobile et impression ; constituer le kit graphique de variantes réellement dérivées des sources ; contrôler le site distinct éventuel ; mettre en forme le manifeste sans changer les principes ; proposer les intégrations vérifiées avant fusion.

**Transmission à l'atelier central :** utiliser ces constats comme documentation technique avec incertitudes explicites, sans considérer cette entrée comme une validation collective du dessin ou des textes.
