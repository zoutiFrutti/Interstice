# R4-GRA — Audit P0 de l'identité, 2 novembre 2026
Statut : candidats uniquement. Branche `design/identite-faille-interstice-zoom-20261102`, PR #137. **Aucune fusion / publication / remplacement global**.

## Sources réellement comparées
Référence artistique retenue par Zout : planche raster à deux symboles, fichiers de conversation `la_faille_noire_reference_validee.png` et `interstice_reference_validee.png` (665 × 665), disponibles au contexte de travail, **non versionnés dans GitHub**. Les exports historiques du dépôt sont archivés sous `assets/logo-faille-noire.historique.svg` et `assets/logo-interstice.historique.svg`, copiés depuis blobs `c5d545a762e0ae205b235cea6d17e2ec51d2eff7` et `7c863aa239462c82b5a5dbcf26e5981b9131b0e8` (commits `8166474f0ba792e1bff972cca4d3f6592eb56cd9`, `a3244c49aba23ed41432386618c58c6173a921b6`). SVG reconstruits actuellement en place **sur branche candidate** : `assets/logo-faille-noire.svg` blob `1cfebbf62a07e81759064e3a0c1770be2db8eae7`, `assets/logo-interstice.svg` blob `d934e004e918dcc9b254a8faedba5d0de99e36f0`.

## Verdict comparatif graphique
- **Fond / silhouette** : le modèle approuvé montre une matière d'impression dense, noir charbon à fines irrégularités et anneau ivoire large usé sur gris pierre. Les SVG sont des reconstructions géométriques moins fidèles, avec aplats et grain insuffisant. ÉCART À CORRIGER après contrôle du rendu.
- **Faille principale** : traverse obliquement de bas gauche vers haut droit dans les deux ; dans la planche elle est plus organiquement accidentée, avec bordures et épaisseurs irrégulières, alors que le SVG est plus uniformément tracé. ÉCART.
- **Craquelures secondaires** : nombreuses et très fines, parfois ivoire et seulement partiellement rouge sur la référence. Dans le SVG : beaucoup moins de branches et courbes plus simplifiées. ÉCART IMPORTANT.
- **Diffusion du rouge** : depuis la grande faille puis progressivement aux intersections dans la référence ; segments rouges dans SVG, mais aucune progression fidèle à chaque microfissure. ÉCART.
- **Point Interstice** : rouge, assez large, légèrement décentré au voisinage de la fracture principale dans les deux ; emplacement exact et contour d'impression à corriger. ÉCART.
- **Réseau** : petits points irrégulièrement distribués *sur les craquelures* de la référence. Les nœuds vectoriels sont positionnés sur un sous-ensemble simplifié, densité insuffisante. ÉCART.
- **Base partagée** : les deux SVG candidats ont un noyau de même construction au moment de leur commit (même cercle, grande faille et microfissures). L'ajout d'Interstice est un groupe supplémentaire : à **vérifier par test structurel dans le prochain passage**. Aucune écriture dans les SVG.
La reproduction vectorielle exacte n'est **pas validée** par Zout. Ne pas substituer ces exports à la planche validée comme vérité artistique.

## Preuves reproductibles
`tests/r4-identite-captures.test.mjs` ; `.github/workflows/r4-identite.yml` ; captures candidates et historiques à 48/96/192/390 px, inventaire des références au nom des SVG et mentions favicons/PWA dans `artifacts/graphiste-r4/inventaire-references.json`. Exécution GitHub Actions `41514575176` à consulter. Les références raster approuvées doivent rester côte à côte dans l'arbitrage manuel. Les PNG source ne sont pas intégrés au dépôt et leurs aperçus extraits localement ne sont **pas** des preuves de fidélité SVG.

## Procédure sûre
Après consultation des captures et de la source raster, redessiner la géométrie commune dans un fichier maître unique, ajouter seulement le réseau Interstice, valider l'alignement du gros point avec la faille, générer tailles icônes/favicons/PWA après inventaire, puis re-tester lecture à 48px et 96px. Pas de remplacement global ni de migration autorisé sur ce mandat.

## Coordination
Relieuse : suivi P0/visa graphique Zout, registre des dépendances. Développeuse : relevé exact des références et future adaptation de caméra à la géométrie **approuvée**, tests réels clavier, lecteurs d’écran, tactile, performance, rollback. Toutes les interfaces publiques sont inchangées tant que la PR n’est pas fusionnée.

## Passe corrective R4 — nouvelle déclinaison candidate
- `assets/logo-faille-noire.svg` commit `aecc5fadcda22194fb0a304ed011b8da469a6613`, blob `ec068bdca1999bb132380d6182341e863ef4df65` : réseau de microfissures densifié, départs rouges dans les petites ramifications, grande fissure inchangée conceptuellement.
- `assets/logo-interstice.svg` commit `1d85cac4f463da771e798830af0df309e5a44717`, blob `a577f915a61104d17712517ebfa55a3a0949cfb1` : reprise **octet pour octet** du groupe `<g id="base-identite">` et seule surcouche `surcouche-interstice` pour les connexions et le gros point rouge décentré.
- Test ajouté `tests/r4-identite-captures.test.mjs` commit `c4fd1a4187969675426652470b6298a781badfc9` : compare le groupe base identitaire extrait des deux SVG et vérifie la surcouche exclusive.
- Vérifier le workflow R4 sur SHA `c4fd1a4187969675426652470b6298a781badfc9` avant de conclure aux tests et récupérer l'artefact de 48/96/192/390px.
- **Réserve persistante** : l'image raster validée par Zout n'a pas été vectorisée fidèlement à l'identique. Les nouveaux SVG sont une meilleure approximation, non une source officielle autorisée. Les fichiers archivés restent intacts ; aucune modification globale ou fusion. L'identité graphique demande encore une confrontation visuelle et un arbitrage Zout.
