# Interstice — WORK-C02-01

3 novembre 2026. **Dossier candidat, sans visa de publication.** Base réelle : `7344591fa7f0f4f6951ea273525039cf2cb9982a`. Aucun fichier public, logo, configuration de déploiement ou ressource antérieure modifié.

## Lecture courte
- [État réel et preuves](00_ETAT_REEL.md)
- [Organigramme V2 et inventaire](01_ORGANIGRAMME_V2.md)
- [Matrice des sept Parcours](02_MATRICE_PARCOURS.md) ; [fiches](parcours/)
- [Objections conservées](03_MATRICE_OBJECTIONS.md)
- [Contrat de navigation](04_CONTRAT_NAVIGATION.md)
- [Préparation technique R6 → V2](05_PREPARATION_R6_V2.md)
- [Vérifications et limites](06_VERIFICATIONS.md)
- [Transmission, décisions et cinq actions](07_TRANSMISSION_RELIEUSE.md)

## Données exécutables
`data/` contient 219 ressources candidates, sept Parcours, 18 relations typées, 30 réserves WORK, les sources et la liste exacte des 524 blobs de main. Les 139 clés du mapping ancien (24 Wiki, 44 dossiers, 71 FN) sont conservées. Les titres manquants restent `null` ; aucun dossier n’est créé pour combler un trou. ECO-19 est l’alias documentaire de FN-024, conservé sans nouvelle notice. Les paires FN-022/048 et FN-038/057 restent des doublons possibles, pas des suppressions.

Les étapes, bifurcations et sous-rubriques rédigées ici sont des **propositions WORK à confronter à C02-VAL-02**, dont le fichier intégral n’a pas été obtenu. Ce dossier ne se substitue ni à L’Anarchitecte ni aux 35 objections de La Lectrice signalées dans C02-VAL-01.

## Contrôles locaux
Depuis la racine du dépôt :
```sh
node --test coordination/v2/work-c02-01/tests/contract.test.mjs
node coordination/v2/work-c02-01/tools/check.mjs
```
Les modules sont purs, sans dépendance, réseau, base de données, DOM ni import par la navigation active. `getPublicResources()` refuse toute ressource sans autorisation explicite ; il renvoie zéro élément pour ce lot.
