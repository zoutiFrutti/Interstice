# Journal commun — La Faille noire × Interstice

> Journal de coordination des ateliers. Les éléments ci-dessous distinguent explicitement les décisions validées, les propositions de travail et les modifications techniques réellement effectuées.

## 2026-10-29 — Atelier Identité graphique — Logos La Faille noire et Interstice

1. **Date :** 29 octobre 2026 (validation créative lors de la conversation des 28-29 octobre).
2. **Atelier :** Identité graphique / communication visuelle.
3. **Sujet étudié :** Construction d'une identité commune pour La Faille noire et Interstice, utilisable sur supports numériques, imprimés et pochoirs.
4. **Connaissances et décisions :**
   - Direction **validée par la personne porteuse du projet** : noir profond, rouge vif et blanc cassé ; rendu brut, organique, légèrement usé, proche de la sérigraphie et du pochoir.
   - **La Faille noire** : disque blanc cassé traversé d'une grande faille centrale rouge, irrégulière.
   - **Interstice** : conserve la même structure de disque et de faille rouge ; les ramifications suivent les véritables craquelures du disque blanc. Des **points rouges reliés** émergent aux intersections des fissures et se prolongent au-delà du cercle. Il faut conserver **à la fois les craquelures ET les points connectés** : une version intermédiaire avait perdu les points et a été corrigée à la demande explicite.
   - Une **composition commune** a été présentée et retenue, avec la formule visuelle « De la Faille naît l'Interstice » ; cela ne confirme pas encore un slogan officiel à usage systématique.
   - Critère de conception : identité immédiatement reconnaissable, y compris pour un public non familier des projets. La simplicité à petite échelle reste à tester, et non une performance déjà vérifiée.
5. **Sources et références :** échanges de validation dans la conversation de conception des logos du projet La Faille noire (28-29 octobre 2026) ; trois compositions visuelles générées et montrées dans la conversation, sans dépôt de fichiers source SVG ni preuve de vectorisation sur GitHub à ce stade. Les images générées sont des maquettes, non des fichiers de production vérifiés.
6. **Articles Wiki potentiellement concernés :** présentation de La Faille noire ; présentation d'Interstice ; identité graphique / communication ; documentation des outils et des communs, si ces pages existent. **Existence et titres exacts non vérifiés**.
7. **Contradictions / points de vigilance :** une version initiale d'Interstice montrait un réseau trop autonome, détaché des fractures ; une version suivante supprimait les nœuds de connexion. La version retenue combine le craquellement matériel du disque et un réseau de points reliés. Ne pas confondre maquettes approuvées et logos finaux vectorisés/testés.
8. **Modifications réellement effectuées :** plusieurs maquettes visuelles ont été générées dans la conversation et la direction a été validée oralement. Aucune modification du Wiki ni déploiement de logos sur les supports existants n'est attesté par cet atelier. Cette entrée est proposée via une branche GitHub dédiée.
9. **Travaux restant à accomplir :** sauvegarder les sources graphiques pérennes ; produire des SVG propres, PNG transparents, variantes monochromes et petits formats ; vérifier la lisibilité en favicon / avatar / pochoir ; documenter la charte (couleurs, typographie, marges, usages) ; inventorier les supports existants avant toute intégration ; proposer au responsable du Wiki d'enrichir les pages pertinentes sans créer automatiquement de nouveaux articles.


## 2026-10-29 — Atelier Identité graphique — Audit du site et typographie (complément)

1. **Date :** 29 octobre 2026.
2. **Atelier :** Identité graphique / expérience de lecture.
3. **Sujet :** Audit statique du site Interstice et proposition de système typographique.
4. **Constats vérifiés dans le code :** `style.css` applique `font:17px/1.6 system-ui,sans-serif` au corps du site ; il n'existe pas de police de marque configurée dans ce fichier. La feuille contient des styles hérités bleu-gris (`#1c242b`, `#52606a`) puis des surcharges noir/rouge/ivoire. Le contenu est organisé principalement en colonne de 900 px ; boutons avec rayon de 8 px ; logos SVG dupliqués dans le site. Le manifeste comporte des règles inline supplémentaires et un corps d'article à `line-height:1.8`. Audit du code, non un test d'accessibilité ou une inspection visuelle multi-appareils.
5. **Sources :** dépôt `zoutiFrutti/Interstice`, branche `main`, fichiers `style.css`, `index.html`, `manifeste.html`, `bibliotheque.html`, `assets/logo-interstice.svg` et `assets/logo-faille-noire.svg` ; documentation des polices Barlow Condensed et Atkinson Hyperlegible Next (SIL OFL).
6. **Wiki concerné :** guide d'identité et communication ; ergonomie / accessibilité / guide éditorial si ces contenus existent, à vérifier.
7. **Contradictions :** le site emploie déjà le logo et les couleurs validés, mais conserve un langage d'interface générique et des teintes de l'ancien thème. La maquette graphique validée n'est pas identique à la version SVG codée. Ne pas présenter cette analyse statique comme un audit complet du site publié.
8. **Modifications :** audit documentaire uniquement ; aucun CSS ni fichier de logo modifié.
9. **Suites :** soumettre une direction typographique avec Barlow Condensed pour les titres et Atkinson Hyperlegible Next pour le contenu (alternative à tester), harmoniser couleurs et composants, vérifier lisibilité mobile, contraste, focus et performance ; faire valider avant intégration.
