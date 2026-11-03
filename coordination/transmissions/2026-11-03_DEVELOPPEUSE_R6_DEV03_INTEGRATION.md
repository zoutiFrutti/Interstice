# R6-DEV-03 — intégration candidate des logos validés

## Provenance et HEAD
- PR #149 HEAD source contrôlé : `b1d3b7773105c61843c1e7177315abb08da11114`, base PR #147 `d90654f7572c0e0806c61cd6703c0d3092b26ba2`.
- Branche fille : `integration/r6-dev03-logos-valides-20261103`, PR #150 (brouillon), base PR #149. Ne pas fusionner #147 et #149 séparément.
- Faille noire : `assets/logo-faille-noire.svg`, SHA-256 officiel attendu `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6` ; test R6 vérifie l'égalité avec la source originale.
- Interstice : copie byte-for-byte de `assets/identite/r6/candidats/interstice-ramifications-originales-gra02.svg` vers `assets/logo-interstice.svg` (Git blob source et actif : `1e19320bcedb445175427dba92b229b7ee10d651`). SHA-256 exact imprimé dans le journal CI via `R6_DEV03_APPROVED_HASH` ; ne pas confondre Git blob SHA-1 et SHA-256.

## Inventaire avant/après
- Avant : `assets/logo-interstice.svg` = variante base commune R6 de #147 (blob `dfce62b9fc3a064c2a22c1bad047e200f538f8b4`).
- Après : même chemin canonique, fichier GRA02 approuvé (blob `1e19320bcedb445175427dba92b229b7ee10d651`). Aucun remplacement des références HTML/CSS nécessaire puisque le chemin actif ne change pas.
- Les pages et la navigation continuent de pointer vers les chemins `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg` ; contrôle de références du workflow R6.
- Sources et archives conservées : `assets/identite/r6/sources/`, `assets/identite/r6/candidats/`, `assets/archives/logo-*-pre-r6.svg`.
- Les cinq nœuds du SVG GRA02 conservent les coordonnées de la variante R6 : Wiki (258,203), Médiathèque (498,261), Atlas (233,450), Parcours (461,426), Entraide (333,593) ; positions de navigation 1000 × 1000 déjà adaptées sur #147.

## Vérification
- Contrats de tests R6 modifiés uniquement pour comparer le SVG actif au fichier GRA02 approuvé, vérifier le préfixe graphique Faille noire et conserver les 30 cercles. Pas de modification du dessin.
- Workflow R6 activé sur la branche DEV03 : tests des empreintes, sources, proportions, chemins, six largeurs, sept tailles d'icônes, captures et PDF A4.
- CI HEAD final : **à vérifier après le présent commit**. Ne pas déclarer le résultat du run précédent comme celui du HEAD final.
- Essais physiques : **non testés** (pincement, appareils mobiles, VoiceOver/TalkBack/NVDA). Zoom CSS Chromium ≠ zoom natif 400 % entièrement validé.

## Rollback
1. Sans fusion : fermer PR #150 ; les PR #149/#147 restent inchangées.
2. Pour revenir à la variante R6 pré-GRA02 dans cette branche, restaurer `assets/logo-interstice.svg` depuis `assets/identite/r6/candidats/interstice-base-commune-r6.svg` et relancer CI.
3. Pour revenir aux anciens logos pré-R6, restaurer `assets/archives/logo-faille-noire-pre-r6.svg` et `assets/archives/logo-interstice-pre-r6.svg` vers les deux chemins actifs, puis contrôler les SHA et les références.

**Aucune fusion sur main, aucun déploiement, aucune publication.**
