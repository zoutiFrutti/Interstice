# LA RELIEUSE — AUDIT CIBLÉ R7-B

**Date :** 2026-11-11  
**Périmètre :** identité graphique des logos La Faille noire × Interstice ; variante B R7 et brief graphiste. **Pas d'audit général C07.**  
**Référence examinée :** branche `design/r7-six-points-interstice-candidats-20261110`, avant dépôt du présent rapport HEAD `b7cad80a08d2dc5d023c50e43187af83acfc1bd5`. Base de comparaison `main` à `df73c5dabf47a0b73d2b55f0346c7006d485dd98`.  
**Statut :** audit technique documentaire **effectué** ; audit du rendu graphique et de l'accessibilité interactive **non terminé**.

## 1. Décision humaine faisant foi

Zout a préféré **B « Ramifications »**. Sa consigne « oublie direct l'organique » concerne **le style à supprimer**, non l'abandon de B. Rester sur B, la rendre plus nette / fracturée, éviter racines, courbes molles et halos décoratifs. Les six points secondaires ne doivent être visibles **que sur Interstice**. Aucun remaniement de la forme officielle La Faille noire sans visa.

**Réserve :** « B préférée » ≠ « B finale validée » ≠ « logos intégrés » ≠ « publiés ».

## 2. Périmètre des preuves

- Faille originale `assets/identite/r6/sources/logo-faille-noire-zout-original.svg` : blob `72695015804e76abc0f61369ab0da7ea540ba1a2`.
- Faille active `assets/logo-faille-noire.svg` : **même blob** `72695015804e76abc0f61369ab0da7ea540ba1a2` ; pas d'altération.
- Interstice R6 `assets/logo-interstice.svg` : blob `1e19320bcedb445175427dba92b229b7ee10d651`, **harmonisation candidate, non finalisée artistiquement**.
- Original Interstice retracé `assets/identite/r6/sources/interstice-retrace-zout-original.svg` : blob `43598c91cf69e0144497672881ba7a2be3eb081b`.
- Interstice R7-B `assets/identite/r7/candidats/interstice-r7-b-ramifications.svg` : blob `6013477b26c25fc8c44546fb28a5de1b768121eb`.
- Brief `coordination/work/r7/BRIEF_GRAPHISTE_R7_B_DIRECTION_RETENUE_CANDIDAT.md` : blob `d6979e3f8683a41c97f6e5b7a959b86339d6ae64`.

Comparaison GitHub `main...design/r7-six-points-interstice-candidats-20261110` : branche en avance de **6 commits**, retard 0, **6 fichiers ajoutés** seulement, zéro fichier existant modifié. Recherche de PR à cette tête : **aucun résultat** à la date du contrôle. Aucune fusion ni publication effectuée par l'audit.

## 3. Trois passes de contrôle

### Passe A — Provenance, intégrité, syntaxe

| Contrôle | Constat | Statut |
|---|---|---|
| Faille officielle / fichier actif | octets égaux, blob identique | **CONFORME** |
| B / fond graphique Interstice R6 | comparé hors titre, description et groupe de nœuds : éléments de base identiques | **CONFORME comme dérivation R6** |
| Origine artistique Interstice | R6 est harmonisation candidate, réserve visuelle historique non levée | **RÉSERVE** |
| Balises SVG B | contrôle de l'équilibrage des 104 balises : pas d'erreur détectée | **CONFORME dans la limite du contrôle** |
| ID SVG B | aucune valeur `id` dupliquée | **CONFORME** |
| Références `url(#...)` | aucune référence interne non résolue détectée | **CONFORME** |
| Injection / contenu exécutable | aucun script, événement inline, `foreignObject`, image raster ou URL externe, hors namespace SVG | **CONFORME dans la limite des contrôles statiques** |

Aucune validation de rasterisation/browser n'est revendiquée.

### Passe B — Composition graphique R7-B

| Contrôle | Constat | Verdict |
|---|---|---|
| Point central | paire de cercles source à `(350,377)`, rayons 33/29, conservée | **CONFORME** |
| Six pôles | six groupes, positions originales `(258,203)`, `(397,178)`, `(498,261)`, `(461,426)`, `(333,593)`, `(233,450)` ; chacun garde sa paire de cercles | **CONFORME** |
| Tertiaires | six groupes, 18 nouvelles positions, trois par pôle | **CONFORME au nombre ; RÉSERVE artistique** |
| Connexions B | **6 tracés cubiques** centre → pôles et **12 courbes quadratiques** vers les satellites | **NON CONFORME au brief épuré/anguleux** |
| Satellites non raccordés | un point tertiaire par groupe ne reçoit pas de lien nouveau explicite, soit **6 points flottants** | **RÉSERVE** |
| Halo | l'ancien `halo-rouge` et des filtres hérités de R6 sont toujours présents | **NON CONFORME à la demande de nettoyage sans halo décoratif** |
| Fidélité visuelle finale | non contrôlée sur un rendu comparatif | **NON VÉRIFIÉ** |

**Important :** les coordonnées secondaires viennent de la source ; les 18 positions tertiaires sont des **propositions graphiques R7** et non des informations historiquement ou éditorialement sourcées.

### Passe C — Utilisation et intégration

| Contrôle | Constat | Verdict |
|---|---|---|
| Lisibilité à petite taille | sur un viewBox 665 px, les six pôles ont des rayons 6–10 px ; à 32 px de large, diamètre projeté seulement **0,58 à 0,96 px** ; à 64 px **1,15 à 1,92 px** ; à 128 px **2,31 à 3,85 px** | **ÉCHEC prévisible de lecture des six pôles comme icône** |
| Tertiaires en petit format | rayon typique 2,6–3,6 px, donc nettement sous le pixel à 32/64 px | **NON CONFORME comme repère miniature** |
| Clavier / tactile | SVG candidat illustratif, aucun point cliquable/focusable identifié ; aucune zone de frappe adaptée | **NON PRÊT pour navigation interactive** |
| Correspondance des 6 portes | aucune attribution spatiale validée | **BLOQUÉ par arbitrage, ne pas inventer** |
| B1 / B2 | brief les demande, mais **aucun SVG B1/B2 créé dans les six fichiers ajoutés** | **À FAIRE** |
| Rendu réel sur navigateur, contrastes, clavier, mobile, tailles | non réalisés dans cette passe ; accès à une rasterisation directe des SVG distants non disponible ici | **NON VÉRIFIÉS** |

La faible taille numérique des points est un contrôle géométrique, **pas un test utilisateur**.

## 4. Verdict et priorités

**R7-B = BASE TECHNIQUE SAINE / DIRECTION HUMAINE RETENUE / ARBITRAGE ARTISTIQUE ET NAVIGATION NON VALIDÉS.**

- **P0 :** ne pas promouvoir B en logo officiel ou interface interactive avant revue visuelle de Zout, de la Graphiste et réception fonctionnelle par la Développeuse. Revoir la base Interstice R6 à la lumière de l'original retracé et de la référence visuelle de Zout.
- **P1 :** créer B1 et B2 : B1 réduisant les tracés ajoutés au strict minimum ; B2 affinant liaisons cassées/angulaires fondées sur les fissures existantes. Éliminer les halos parasites et justifier chaque lien.
- **P1 :** dissocier le logo graphique du **système de navigation** : affichage principal grand format avec surcouches de cibles tactiles accessibles et équivalents textuels ; ne pas promettre les six points visibles sur favicon 32 px.
- **P1 :** comparer réellement les deux variantes à 32/64/128/665 px, sur fonds et appareils nécessaires, sans substituer une illustration synthétique à un vrai SVG.
- **P2 :** rationaliser le poids du SVG Interstice (~303 ko de texte), sans changer le dessin-source ni casser la réversibilité.
- **P2 :** ajouter des tests reproductibles sur une branche de travail dédiée, avec exports PNG authentiques rendus depuis les SVG, vérification d'accessibilité de la navigation et relevé des SHA de livraison.

## 5. Statuts distincts

| Élément | Statut |
|---|---|
| Décision « B préférée ; pas d'organique » | **VALIDÉE HUMAINE (orientation)** |
| Original La Faille noire R6 | **SOURCE VÉRIFIÉE ; INCHANGÉE** |
| SVG R7-B | **CANDIDAT, VÉRIFIÉ STRUCTURELLEMENT** |
| Graphisme définitif R7 | **NON VALIDÉ** |
| B1/B2 | **NON CRÉÉS** |
| Attribution des portes / navigation tactile | **NON VALIDÉE / NON INTÉGRÉE** |
| Logo R7 dans `main` | **NON INTÉGRÉ** |
| Site public | **NON PUBLIÉ** |

**Interdictions permanentes :** aucune fusion dans `main`, aucun remplacement des SVG actifs, aucune migration et aucune publication automatique.
