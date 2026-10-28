# Identité commune La Faille noire × Interstice — audit des sources (28 octobre 2026)

Statut : **préparation sur branche réversible**, non publié, aucune décision collective nouvelle. Ne pas confondre la présence d'un SVG dans le site et sa fidélité aux planches approuvées.

## Sources graphiques retrouvées

- `Planche d’identité visuelle rouge et noire.png`, 1536 × 1024, SHA-256 `84d505c76bfb667ead798730628c94458542ffd8147199760aac5a7b6674ce41`.
- `Diptyque des fissures rouges.png`, 1774 × 887, SHA-256 `338532bd7d5fbf4cb4fda32dfbd7e37695ec4c4e30414979246290b236092cfb`.
- Ces deux images approuvées ont été retrouvées dans la bibliothèque de fichiers et archivées dans le dossier Google Drive « La Faille noire / Identité graphique ». Ne pas exposer leurs liens privés dans le site public.

## Comparaison des fichiers réels du dépôt

- `assets/logo-faille-noire.svg` : cercle clair, faille rouge et fissures. **Vectorisation simplifiée existante**, pas un export du dessin détaillé de la planche.
- `assets/logo-interstice.svg` : faille centrale, ramifications et points rouges. La composition, la densité des fissures, les textures et les ramifications qui sortent du cercle **diffèrent du diptyque** ; le SVG clippe les lignes au disque. Il ne doit pas être présenté comme reproduction exacte du maître.
- `index.html`, `manifeste.html`, `style.css` utilisent déjà ces SVG simplifiés sur `main`. Les scripts et formulaires ne sont pas modifiés dans cette passe.
- Les deux planches n'ont **pas** été remplacées par de nouveaux dessins. La phase d'intégration graphique fidèle doit s'appuyer sur des recadrages directs des originaux ou sur de vrais exports vectoriels fournis ultérieurement.

## Kit fidèle préparé hors dépôt

Recadrages du diptyque **sans redessiner les logos**, avec fond noir conservé : `faille-noire-embleme`, `interstice-embleme` (512 × 512) et `faille-noire-lockup`, `interstice-lockup` (environ 887 × 887), chacun en PNG et WebP. Huit fichiers archivés dans Drive : « La Faille noire / Identité graphique / Kit validé - extraits 2026-10-28 ».

Des conteneurs SVG incorporant ces PNG sont également préparés dans l'archive de travail, mais **ne sont pas vectoriels natifs**. Ne pas remplacer les SVG du site par ces conteneurs sans évaluer poids, cache, accessibilité et affichage.

## Phases et garde-fous

1. **Phase 1 : sources et kit** — retrouvés, comparés et recadrages PNG/WebP archivés ; audit consigné. Export vectoriel natif non disponible.
2. **Phase 2 : site Interstice** — pas de modification HTML/CSS supplémentaire ni de fusion avant tests de rendu. Conserver `main` intact.
3. **Phase 3 : site La Faille noire distinct** — non identifié ; ne pas inventer un dépôt ou une URL.
4. **Phase 4 : manifeste HTML/PDF** — version 2.1 et droits d'amendement collectif inchangés ; toute évolution graphique doit être comparée à l'original et testée à l'impression.
5. **Phase 5 : autres supports** — inventorier avant tout remplacement.

Tests à effectuer avant fusion : comparaison visuelle au diptyque à 16, 32, 128 et 512 px ; mobile 320/375/768 px ; clavier, contrastes et lecteur d'écran ; `prefers-reduced-motion` ; formulaires et scripts ; CSP/chargement d'images ; impression et PDF ; contrôle des différences `git diff` ; absence de données sensibles. **Aucun de ces tests d'intégration n'est déclaré réussi ici.**

La présente note est documentaire, sur branche seulement. Elle n'introduit aucun nouveau logo, ne change pas les principes politiques, les droits, Supabase, JS ni les formulaires.
