# C03-GRA-03 — Transmission à La Relieuse
**Mission :** C03-GRA-03. **Rôle :** Graphiste. **Émettrice :** Relieuse. **Date :** 2026-11-03. **Priorité :** P1.
**Mandat :** préparation V2 sans modification du site public. **Sources :** PR #161 HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`, R6 main, contrat C03 candidat PR #132.

## Livrables
- `CONTRAT_VISUEL.md` : identités, entrée, quatre portes, sept Parcours, retour et manifeste.
- `ETATS_INTERFACE.md` : mobile/tablette/ordinateur, interactions et états de repli.
- `COMPOSANTS_R6.md` : réemploi et écarts avec V2.
- `ACCESSIBILITE.md` : matrice de critères et preuves nécessaires.
- Ce rapport : transmission et arbitrages.

## Constats
Les logos R6 doivent rester intacts. Les cibles de navigation sont un calque indépendant. La caméra et la liste HTML R6 sont réutilisables ; les cinq destinations codées en dur ne le sont pas. Les quatre portes sont des entrées de contenu, les sept PAR des chemins transversaux. Le manifeste et les liens historiques sont invariants. Les deux anomalies WORK sont consignées, pas corrigées.

## Dépendances et décisions
- **Développeuse / C03-TECH-02 :** confirmer le contrat d'états, l'adaptateur de fragments, les contrôles clavier/tactile/zoom et la stratégie de rollback. Aucune réception ou approbation de sa part présumée.
- **Anarchitecte / C03-ANA-03 :** vérifier IDs, relations et chemins canoniques.
- **Juriste / C03-JUR-03 :** blocage de publication PAR-005 pratique et prudence sur Entraide.
- **Relieuse :** organiser une revue technique commune avant d'autoriser une maquette candidate.
- **Zout :** autorisation distincte requise avant toute activation V2, fusion ou publication ; aucun arbitrage artistique nouveau sur les logos.

## État et preuve
Préparée : oui. Commencée : oui. Livrée : oui si les cinq fichiers et la PR sont présents. Transmise à La Relieuse : via lien GitHub à contrôler ; reçue : inconnue ; contrôlée : non ; validée : non. Aucun test V2 exécuté, aucun fichier actif modifié, aucune notification automatique d'atelier. Les blobs et SHA de la livraison doivent être relevés au HEAD de la PR.

**Avis Graphiste :** favorable à un prototype V2 isolé, sous réserve du visa Développeuse et de la QA accessible. Aucun déploiement demandé.