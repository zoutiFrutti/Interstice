# C09-ORCH-01 — Transmission finale à La Relieuse

Date : 2026-11-05. Priorité P0. PR brouillon **#188**, base `work/c07-reunification-20261104` de la PR #186.

## Emplacements réels des trois sources de synchronisation

1. `coordination/REFERENTIEL_VIVANT.md` — **CRÉÉ EN BRANCHE C09**, blob `290714ebdbc0d5daac87579c977fd39fc707449d`.
2. `coordination/REGISTRE_DECISIONS.md` — **CRÉÉ EN BRANCHE C09**, blob `c2af97b1ab09d6491bcf7270bbf846264113c39b`.
3. `coordination/c03/orchestratrice/JOURNAL_SYNCHRONISATION.md` — **CRÉÉ EN BRANCHE C09**, blob `4b97575d89fc1f6f7227ce7648f223ecce9e7bf2`.

Les deux premiers étaient **absents** de `main`, de la branche #186, de #132 et de la branche arbitrages R1 examinée ; le journal propre n'existait pas sous ce chemin. Les anciennes transmissions et `coordination/JOURNAL_COMMUN.md` sont **préservés**.

## Pièces complémentaires

- `coordination/c03/orchestratrice/ANNUAIRE_SYNCHRONISATION_C09.md` — 19 rôles documentés, liens vers les chemins effectivement retrouvés, journaux manquants **non créés**, blob `eaa721190d1df59cfeb80e9b0e09886fe830c996`.
- `coordination/c03/orchestratrice/AUDIT_C09_CONTRADICTIONS.md` — audit C10–C18, opt-in et doublons, blob `687100eec3f4782a5cccc70cd567a93f60c89496`.

## Décisions intégrées

- 4 portes **égales** en grille 2 × 2 : haut gauche Faire Ensemble (conserve Entraide), haut droite Encyclopédie des communs (ancien Wiki), bas gauche Archives des communs, bas droite Médiathèque.
- Faire Ensemble premier dans l'ordre de lecture uniquement ; ni passage obligé ni branche fonctionnellement supérieure.
- 7 Parcours maintenus et secondaires, PAR-005 bloqué ; accès direct aux trois portes documentaires.
- Fenêtres 4:3/16:9 agrandies et légèrement plus transparentes **sous réserve d'accessibilité** ; deux logos SVG officiels inchangés.
- Décisions C07 existantes sur le traitement en enquêtes critiques et les lots Commune reprises avec réserve de version et sans visa de publication.

## Contradictions importantes

- Ancien vocabulaire et ancienne hiérarchie d'accueil C07 / C06 vs nouvelle règle C09 : alias historiques conservés, nouveaux intitulés officiels et quatre portes de même niveau.
- La réparation C13 existe dans #114 et sur branche #186, **pas sur main** : C12 main a encore le déclencheur Issue et risque d'appel API sans opt-in indépendant. Aucun secret ni budget contrôlé en production.
- Sept états documentaires C18 vs neuf états C09 : extension proposée, pas de migration automatique.
- Des versions anciennes peuvent continuer à dire lot Commune 02 « en attente », alors que le choix de Zout est désormais consigné dans `coordination/work/c07/DECISIONS_CONTENUS_2026-11-05.md`.
- Rapport historique, PR, CI verte ou présence d'une boîte ne valent pas réception, validation, intégration ni publication.

## Vérifications exécutées

- Lecture des documents et workflows GitHub : `main`, branches R1, #132, #183, #186.
- Cinq nouveaux fichiers relus par GitHub et empreintes blob confirmées.
- Contrôle documentaire des **17 identifiants de décision distincts** et **19 rôles** (pas de doublon ou fichier candidat incomplet constaté).
- Aucune CI navigateur / exécution d'agent déclenchée explicitement pour ce lot ; vérifier séparément les éventuelles Actions automatiques de PR sur HEAD exact.
- Contrats #186 préexistants : neuf workflows SUCCESS sur HEAD `1a03c3ba9c8b9c94dcdc0e5e67f7f80270e8ab51`, non transférables comme preuves au nouveau HEAD.

## États et dépendances

- `DEMANDEE` et `COMMENCEE` : oui, mandat de cette conversation.
- `ENVOYEE` : présente transmission préparée sur GitHub, mais **réception GitHub de La Relieuse non attestée**.
- `LIVRABLE_CANDIDAT` : oui, trois sources et deux annexes relues sur branche et PR brouillon.
- `VERIFIEE` : **vérification documentaire et structurelle** uniquement.
- `VALIDEE`, `INTEGREE`, `PUBLIEE` : **non attestées et non autorisées**.

Dépendances : La Relieuse (revue de l'autorité du référentiel), Anarchitecte / Graphiste (contrôle de disposition, interface et accessibilité), Juriste / Développeuse (P0 C12), Lectrice (contradictions), autres ateliers (journaux au fil des contributions réelles).

**Aucun merge, aucun déploiement, aucune activation IA, aucun contact externe et aucune dépense.**

## Annotation WORK-C08 — 6 novembre 2026

Les constats ci-dessus décrivent la création initiale de C09 et ne sont pas une photographie actuelle de #186. Le référentiel, le registre et le journal y ont depuis été repris et enrichis ; C12 main est arrêté sur df73c5d. Reprise complémentaire de la table d’états et du vérificateur depuis #188 ed0c18a, avec adaptation à l’ensemble des décisions existantes ; aucune migration d’exécution. Voir registre et journal Développeuse C08 pour l’état présent ; aucune fusion ni réception humaine attestée par ce document.
