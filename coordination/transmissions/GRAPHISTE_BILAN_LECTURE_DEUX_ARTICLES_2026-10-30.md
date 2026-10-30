# La Faille noire × Interstice — Atelier Graphiste
## Bilan ciblé : lisibilité de deux pages du Wiki
Date : 30 octobre 2026 · Destinataire : le Relieur

### Mission et versions réellement employées
Reprise de la refonte de la PR #35, sans créer d'identité graphique nouvelle ni fusionner des PR.

Deux textes du Lecteur effectivement disponibles sur PR #44, HEAD `bec3db6ff462963ae7c85faa0055ad9a1f92c54b` :
- `wiki-decision-collective.html` : blob `88bec800d01a53bbcaa578a571ed40a4cf75248e`, 6 sections H2 et 21 paragraphes d'origine.
- `wiki-lecture-croisee-travail-soin-pouvoir.html` : blob `d37c1d776e6f2b7ed1fad0a8bf262f33ba38adb5`, 8 sections H2 et 19 paragraphes d'origine.

Ces contenus ont été copiés sur la **branche graphique de test de PR #35**, sans changer les paragraphes éditoriaux (0 paragraphe d'origine supprimé sur chaque article, ordre des H2 inchangé). Les ajouts HTML sont purement de présentation : classe `wiki-reading`, identifiants de sections, sommaire repliable, mention « À relire par un être humain » et navigation de correction/retour. La PR #44 n'a pas été modifiée. Cette duplication temporaire de source impose un rapprochement explicite avant toute fusion, et non une double publication.

### Corrections réellement écrites
- `style.css` : bloc CSS strictement limité à `body.wiki-reading` ; identité noir/rouge/ivoire et fontes existantes conservées ; largeur de lecture cible 70 caractères / conteneur max 850 px ; paragraphe 18 px sur mobile, corps 19 px hors media query, interligne ~1,74 ; titres h1 de 40 px sur mobile et 64 px sur desktop, h2 hiérarchisés, espacements entre sections.
- Paragraphes de références, liens et URL longues : liens explicitement soulignés et retours à la ligne possibles.
- Sommaire `<details>` accessible au clavier, ancré sur les six ou huit sections ; zones tactiles de 52 px corrigées après un premier échec de CI.
- Boutons visibles de fin d'article « Retour au Wiki » et « Proposer une correction », liens vers les pages existantes et cibles >=52 px.
- `tests/lancement-v0-smoke.mjs` : ajout des deux pages aux contrôles 390×844 et 1280×800 ; contrôles spécifiques des tailles, du statut, des H2, de la colonne, des liens, des actions et du débordement ; captures plein écran et premier écran.

### Vérification réelle
Workflow GitHub Actions (Chromium) sur SHA `fde0d3173375767cca523ecea6584bc5bdc20aae` :
https://github.com/zoutiFrutti/Interstice/actions/runs/41087556501
Résultat : **60/60 contrôles réussis, 0 échec** (20 pages x 2 tailles + 20 validations de chemins et ancres).

Historique de correction : le premier essai de mise en forme était réussi, puis une retouche des liens du sommaire a réduit par erreur leurs cibles tactiles : **échec réel** détecté. Cibles remises à 52 px et nouvelle CI verte, sur le SHA ci-dessus. Ne pas effacer cet historique de test.

**Captures réelles Chromium :** artefact `interstice-v0-captures` du workflow ci-dessus. Fichiers à consulter, en 390×844 et 1280×800 :
- `wiki-decision-collective-mobile.png` et `wiki-decision-collective-desktop.png`
- `wiki-lecture-croisee-travail-soin-pouvoir-mobile.png` et `wiki-lecture-croisee-travail-soin-pouvoir-desktop.png`
- `wiki-decision-collective-premier-ecran-mobile.png` et `wiki-decision-collective-premier-ecran-desktop.png`
- `wiki-lecture-croisee-travail-soin-pouvoir-premier-ecran-mobile.png` et `wiki-lecture-croisee-travail-soin-pouvoir-premier-ecran-desktop.png`

**Contrôle visuel des captures effectué** : titres discernables, paragraphes aérés et contrastés, retour/correction lisibles et identifiables, liens de source soulignés, pas de débordement horizontal visible. Réserve : le premier écran mobile présente surtout l'introduction et l'avertissement, le contenu commence plus bas ; essai sur vrai Android nécessaire. Un lecteur d'écran réel et les liens externes de source ne sont pas validés par ces captures.

### État, limites et décisions nécessaires
- **Terminé techniquement dans la branche PR #35** : retouches ciblées + CI + captures.
- **Non publié / non fusionné** : ni `main`, ni PR #35, ni PR #44 ne sont fusionnés par ce travail. Aucun changement de permission ou de données privées.
- **En attente** : validation éditoriale par Lecteur/Juriste ; tests tactile Android et lecteur d'écran ; rapprochement des versions éditoriales de PR #44 avec la PR #35 sans écraser leurs améliorations.
- Le label de relecture est un état documentaire, pas une validation humaine ; le manifeste V2.5 reste une référence non adoptée collectivement.
- Le Relieur coordonne le rapprochement des branches et les relectures, sans autorité décisionnelle sur le collectif.

Prochaine action : intégrer le CSS scoped et les ajouts de navigation sur la future version éditoriale validée, avec un dernier contrôle avant tout déploiement.
