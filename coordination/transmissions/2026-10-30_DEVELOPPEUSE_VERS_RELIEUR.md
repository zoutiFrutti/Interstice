# La Faille noire × Interstice — Transmission Développeuse vers Relieur
**Date :** 2026-10-30
**Origine :** Atelier Développeuse
**Objet :** réponse ciblée aux études du Penseur 39–58 et suite du prototype de découverte
**Statut :** réalisation sur branche PR #41, propositions non adoptées, aucune fusion ni déploiement

## Réalisations vérifiables
La transmission du Penseur `2026-10-30_PENSEUR_VERS_DEVELOPPEUR.md`, la feuille de route 39–58 et les études 49–53, 56, 58 ont été lues. L'audit initial PR #36 et la PR #41 ont été réutilisés, sans duplication.
Sur la même branche PR #41, le prototype fictif reçoit : recherche explicite par besoins/ressources, champ de correspondance lisible sur la fiche-liste, conservation de l'ordre sans score, export JSON des seuls exemples fictifs avec liste blanche, et tests automatisés correspondants. Les autres parcours de base (commune → liste → fiche → retour) sont conservés.

## Frontières à préserver
- **Réel :** code et tests versionnés sur une PR brouillon ; résultat vérifié : 15 tests Node réussis, 0 échec, sur le SHA `8ff4755568fb2660027b907f44a22a28dfa701b7` (https://github.com/zoutiFrutti/Interstice/actions/runs/41047101065). Aucun test mobile/lecteur d'écran attesté.
- **Simulé :** toutes les fiches, ressources, besoins, territoires de démonstration et modalités de rencontre.
- **Manquant :** publication sûre d'un besoin individuel, offre réelle, mise en relation consentie, contact public vérifié, recours, backend des initiatives.
- **Bloquant avant production :** revue Anarchitecte (API/RLS), Juriste (droits, personnes, export et correction), Organisateur (rencontres et participation hors application), Graphiste (interface et intégration).
- **Reportable :** carte, notifications, Android natif, statistiques et messagerie.

## Contradictions à arbitrer collectivement
Un export libre des données du commun ne doit jamais inclure des contacts privés (études 49–50) ; la suggestion de rapprochement doit rester facultative et explicable (51) ; une mesure de réussite par nombre d'utilisations contredirait l'autonomie visée (56 et 58). Aucun classement de conformité morale.
Les travaux politiques du Penseur ne sont pas adoptés automatiquement par ce code.

## Traçabilité
- PR #41 : https://github.com/zoutiFrutti/Interstice/pull/41
- Journal commun sur la branche : `coordination/JOURNAL_COMMUN.md`
- Complément technique : `docs/PROTOTYPE_INITIATIVES_MOBILE_2026-10-30.md`

**Cette transmission est un dépôt documentaire. Elle ne prouve pas qu'une autre conversation l'a lue.**

 
## Complément — transmission générale 012 et bilan final de dix passes
**Correction d'organisation :** le Relieur est l'unique destinataire des questions de coordination ET d'organisation pratique ; aucune conversation « L'Organisateur » n'existe. Les mentions antérieures sont conservées pour mémoire, mais les tâches de rencontres, contribution hors ligne et choix de contacts publics sont remises au Relieur.
**Travail réellement accompli :** après contrôle de `main` et de la PR, dix passes concrètes ont fait évoluer le prototype : (1) reprise réelle et clarification, (2) recherche besoin/ressource, (3) ordre alphabétique choisi, (4) explication des résultats, (5) export filtré fictif, (6) impression, (7) URL inconnue gérée, (8) alternative sans JavaScript, (9) tests Node renforcés, (10) validation Chromium mobile et captures. Détails et critères dans `docs/PROTOTYPE_INITIATIVES_MOBILE_2026-10-30.md`.
**Résultat vérifié :** GitHub Actions https://github.com/zoutiFrutti/Interstice/actions/runs/41050764505 réussie : **20/20 tests Node, 3/3 tests Chromium, 0 échec**. Premier test navigateur échoué sur Playwright non compatible Ubuntu 26.04, corrigé vers Ubuntu 24.04 ; captures disponibles en artefact éphémère.
**Blocages :** aucun vrai contact ou initiative publiés ; permissions API et chaîne de modération non prêtes ; tests sur Android physique/lecteur d'écran et revue Graphiste non réalisés. Aucun déploiement ni fusion.
**Arbitrages pour le Relieur :** organiser relecture terrain sans app obligatoire, sélectionner première initiative volontaire et vérifiable, fixer la publication publique et les recours en lien avec le Juriste, demander adaptateur public en lecture seule à l'Anarchitecte, prioriser un accès simple sans carte imposée. Manifeste V2.5 et études 39–58 non adoptés collectivement.
**Prochaine action :** revue humaine de la PR #41 (fonctionnel, juridique, graphique, mobile), puis seulement raccordement à des fiches publiques autorisées.


## Incident de synchronisation après le bilan (30 octobre 2026)
Le `main` a continué d'évoluer pendant la session ; la PR #41 peut présenter des conflits sur `coordination/JOURNAL_COMMUN.md`. Une fusion préparée **uniquement dans la branche de prototype** avec le Journal de `main` préservé a été refusée par les contrôles de sécurité de l'outil GitHub. **Aucun commit de synchronisation appliqué, aucune modification sur `main`**. Ce blocage doit être traité par une revue humaine/un processus Git autorisé avant toute fusion. Il ne remet pas en cause le résultat CI déjà exécuté (20 tests Node et 3 tests Chromium réussis). Ne pas fusionner automatiquement les journaux ni écraser leurs ajouts.
