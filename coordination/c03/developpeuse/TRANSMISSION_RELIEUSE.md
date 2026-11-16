# C03-DEV-04 — Transmission à La Relieuse

Date : 2026-11-03. Priorité P0. Statut : **livraison documentaire candidate**. Branche `audit/c03-dev04-c12-v2-20261103`. PR brouillon à consulter ; aucune réception/validation de La Relieuse présumée.

## Conclusions
1. **P0 confirmé** : workflow C12 sur main déclenché par `issues.opened`, filtre auteur propriétaire + préfixe, permissions `contents:read` et `issues:write`, clé/modèle injectés sans opt-in indépendant. Secrets réels inconnus ; ne pas déclencher d'Issue.
2. **Correctif existant** : PR #114 HEAD `f7811d3875d2fd39b7b37226d40ae9fb22c66a56`, opt-in `LECTRICE_AI_ENABLED`, statuts et anti-doublons. À auditer/reprendre sans doublon ; **la présente branche n'applique pas ce correctif à main**.
3. **CI R6 #132** : run 41727087199, HEAD `57a509257314d44cb15faf842395a21023e43335`, échec à l'ascendance avant le contrôle Python et avant les tests fonctionnels. Cause exacte entre les deux `merge-base` à confirmer ; aucune régression R6 prouvée.
4. **V2 #161** : HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`, catalogue et navigation-plan purs, quatre portes, sept PAR, 219 ressources candidates, publication fermée. Pas de raccord au site.
5. **Graphiste** : contrat de séparation des responsabilités proposé ; aucun visa graphique conjoint prétendu.

## Décisions demandées
- **Relieuse P0** : prioriser revue/portage minimal de #114 ; ne pas activer l'IA avant revue Juriste et autorisation Zout.
- **Orchestratrice/Juriste** : confirmer consentement, confidentialité des Issues, coûts, permissions, anti-doublon et statuts.
- **Relieuse/Graphiste** : valider la carte à quatre portes, l'accès aux sept Parcours, les deux clics et la solution sans animation.
- **Lectrice/Anarchitecte** : rapprocher 35 objections C02 des 30 réserves WORK, sans ouvrir la publication.
- **Développeuse** : faire tester l'ascendance R6 séparément, puis lancer recette V2 sur une future branche autorisée.

## Statuts et preuves
Sources lues : index/contrat C03 de #132, workflows et script C12 sur main et #114, journaux du run R6 #132, modules/schéma/navigation #161. Tests exécutés par cette mission : **aucun** ; inspections de code et logs uniquement. Tests antérieurs cités comme antériorités, non réexécutés. Aucune Issue créée, aucune IA activée, aucun fichier de main modifié, aucune fusion ni déploiement.

## Dossier
`coordination/c03/developpeuse/` : AUDIT_C12.md, CORRECTIF_SECURITE_CANDIDAT.md, ANALYSE_CI_R6.md, CONTRAT_NAVIGATION_V2.md, MATRICE_TESTS.md, TRANSMISSION_RELIEUSE.md.

**Avis : verrou C12 prioritaire ; V2 préparatoire ; aucune activation.**
