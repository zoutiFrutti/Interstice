# La Relieuse — C23 · Réception technique unifiée, avant toute intégration

**Date :** 14 novembre 2026  
**Portée :** candidat technique uniquement, sans déploiement, fusion, purge, modification des logos, contenu privé ni nouvelle autorisation éditoriale.

## Origine exacte

La branche `work/c23-convergence-final-candidate-20261114` est créée à partir du HEAD C21/C22 `e0e79996a4b7436bf0934a165e7eeeff2780d133`. Son ascendance conserve directement :

- C19 / PR #197 : `366a33a5bad58e3c3942ec4e71eec8651a9e365d`, six portes, 31 rubriques, 24 textes R6.
- C20 / PR #198 : `586e91067216a1bd96e34c30ffca5f104fda192b`, correction du format des deux décisions de registre et trois workflows réussis.
- C21/C22 / PR #199 : `e0e79996a4b7436bf0934a165e7eeeff2780d133`, réception Android humaine 16/16 et workflow C22 réussi.

**Aucune fusion Git des PR #197/#198/#199 entre elles n'est requise pour constituer le contenu candidat : la branche est déjà une descendante linéaire des trois étapes.** La distinction entre leurs PR en brouillon et une éventuelle fusion ultérieure reste essentielle.

## Audit des risques

### Réception du test privé

Les seize vérifications Android sont toutes acceptées par la personne propriétaire du projet, dont le rendu R7-B1. **La source exacte du build privé testé n'est pas identifiée** : aucune correspondance de SHA avec C23 ne peut être présumée. Le reçu de déploiement C17 version 1 est historique, et ne justifie pas de déclarer C23 testé visuellement.

### Graphisme et navigation

- Six portes et 31 rubriques selon `coordination/work/c07/nav7/convergence-contract.json` rev. 2.
- Point 7 Manifeste séparé.
- Coordonnées corrigées pour Encyclopédie et Médiathèque conservées.
- Les 15 raccourcis historiques ne sont pas 15 nouvelles rubriques.
- Pas de changement R7-B1, logo officiel R6 ou interactions utilisateur.

### Documentation

- Les 24 textes hérités conservent leurs identités et ne reçoivent aucun nouveau visa.
- Deux fiches distinctes ont le même titre « Égalité, genres et inclusivité » : arbitrage éditorial futur, sans fusion automatique.
- 219 objets C07 restent fermés à la publication ; PAR-005 bloqué ; aucune donnée privée projetée.
- Les dix notices média restent des candidates.

## Nouveau contrôle technique C23

Le workflow `.github/workflows/c23-convergence-preflight.yml`, **lecture seule sur GitHub et sans livraison de site**, vérifie le HEAD candidat par trois jobs :

1. **Contrats :** C22, Python C09/C20, NAV7, maître C07, préservation historique R6, frontière de sécurité des sources.
2. **Navigateur :** construction locale d'un aperçu non déployé, tests NAV7 sur Chromium et comparatifs de convergence avec une vraie archive Git historique.
3. **Frontière Pages :** compilation Jekyll locale (aucun upload de site), contrôle des fichiers internes exclus, détection de contenu réservé dans l'export généré.

Le workflow **ne téléverse ni le paquet de pages ni ses captures**. Il n'active aucune entrée de formulaire, aucun agent et aucune permission d'écriture.

## Critères de réception

Une CI réussie sur le HEAD **exact** constitue une preuve technique, pas un permis de publier. Si un test échoue, récupérer le nom de l'étape et le journal réel avant correction. Aucun succès antérieur ne doit être transféré implicitement d'un SHA à un autre.

## Décisions réservées

- Ne fusionner aucune PR dans `main`.
- Ne déployer aucune nouvelle version de l'aperçu privé, ni Pages public.
- Ne pas réactiver les données, imports privés, agents, formulaires ou migrations.
- Ne pas affirmer qu'un rendu différent du build testé sur Android a été validé.
- Préserver les SVG officiels et le graphisme R7-B1 déjà accepté sur l'aperçu testé.

**Prochaine action utile après CI :** identifier la version et le manifeste de l'aperçu privé réellement testé, sans refaire les seize gestes, puis arbitrer séparément l'intégration technique et la publication des contenus.
