# LA FAILLE NOIRE × INTERSTICE — Audit transversal du cycle 8
**1er novembre 2026 · La Relieuse · document candidat, aucune validation ni publication**

## Méthode et limites
Croisement des comptes rendus de conversations d'ateliers accessibles, des transmissions GitHub, de la recherche des PR, de cinq branches cycle8 et de quatre versions du `coordination/JOURNAL_COMMUN.md`. Ce contrôle n'est **pas** un accès exhaustif à chaque message historique ou à toutes les pièces Drive. Les comptes rendus conversationnels sont signalés comme tels ; leur simple existence ne vaut pas preuve GitHub. Le Journal commun examiné ne comporte pas de mention explicite « cycle 8 » dans les quatre versions testées ; ne pas généraliser à toutes les branches.

## Matrice des 17 ateliers
| Atelier | État du cycle 8 | Preuve / réserve |
|---|---|---|
| Relieuse | Convergence avancée, non close | PR #64 ; passes 1–4, commits de transmission ; 34 statuts historiques rapprochés ; intégration globale et journal à actualiser. |
| Développeuse | Candidate technique livrée, P0 non résolu | `edition-premiere/CYCLE8_P0_RAPPORT.md` blob `1313d589fb9b8ca691a6fdad8e6417070ba6e637` ; correctifs serveur non déployés, PWA non démontrée. |
| Juriste | Matrice des risques livrée, validations en attente | PR #67, `coordination/juriste/2026-11-01_CYCLE8_MATRICE_RISQUES_CORRECTIONS.md` blob `51af4e26f734f8346e467790ff48140ba8617086`. |
| Lectrice | Lots et QA livrés, 12 Wiki encore à corriger | `coordination/transmissions/2026-11-01_LECTRICE_CYCLE8_LOTS_QA.md` blob `01299b8241c970dcc709ae6bc50f1fa92f396b72`. |
| Penseuse | Travaux précédents accessibles, clôture C8 non vérifiée | Concordance des textes fondateurs à reprendre ; pas de transmission C8 contrôlée dans cet audit. |
| Biographe | Trois chronologies et correction BIO-012 signalées | Compte rendu conversationnel ; BIO-009 état civil contradictoire, BIO-019 identification bloquée ; commit signalé `63aa5102`, contenu non relu ici. |
| Anarchitecte | Contrat antérieur PR #51, clôture C8 non vérifiée | Dépendance : schéma 24/44/71, permissions et intégration. |
| Graphiste | Maquette et CSS C8 ; QA technique signalée, tests physiques absents | PR #68, `coordination/transmissions/2026-11-01_GRAPHISTE_CYCLE8_INTEGRATION_QA.md` blob `5646e9ea741d7adadf160d3bbb1fd1351c9234cd`; retour conversationnel de correctifs plus récents à contrôler par SHA. |
| Éclaireuse | ÉCL-001–005 travaillés, découvertes non confirmées | Compte rendu conversationnel ; CIC après 2017 contradictoire, audiovisuel/droits et P0 ouverts. |
| Médiathèque des communs | Six passes, 71 IDs préservés, 12 notices consolidées | Branche `coordination/mediatheque-cycle8-consolidation-20261101` ; commit conversationnel `ab0eae0143734755b8e84f8800fcd6e93d90cfcb`, pas de validation des licences restantes. |
| Anarchiviste des communs | Quatre passes et transmission signalées | Compte rendu conversationnel : cote BnF *La Sociale*, Cherán, contradictions Sainte-Soline ; originaux et applications matérielles non démontrés. |
| Assistant de l'Anarchiviste | Clôture C8 non vérifiée | Attente des originaux *La Sociale*, Louvre, Club, décret du 16 avril ; aucun rapport C8 confirmé ici. |
| Archéologue des communs | Huit ensembles et trois enquêtes signalés | Compte rendu conversationnel ; Saint-Ambroise, La Marmite, NDDL ; filiations et originaux non prouvés. |
| Tisseuse | TIS-001 enrichi et trois parcours signalés | Compte rendu conversationnel, commit `0b83b7719053c5c5d72557b829bff9a6e3ef5262` non relu ici ; aucune coopération présumée. |
| Anarchiviste catalan | CAT-001 et CAT-006 candidats, pas de fichier confirmé | Compte rendu conversationnel : chronologie et six contradictions ; mai 1937 et sources primaires à approfondir. |
| Anarchiviste zapatiste | Neuf dossiers ZAP et chronologie signalés, sans commit | Compte rendu conversationnel ; ZAP-008 prioritaire, aucune fiche validée. |
| Responsable réseaux sociaux | Kit candidat C8 GitHub livré, diffusion interdite | PR #52, `coordination/transmissions/2026-11-01_COMM_CYCLE8_KIT_PREMIERE_EDITION_CANDIDAT.md` blob `8daf6869876d722ae33e9cf9ed31ab4b1788cd12`. La présentation longue cite encore Charte V0.8 alors que la Juriste travaille V0.9 transitoire : correction requise. |

## Réconciliation éditoriale
- Premier tri : **24 pages Wiki = 15 à corriger + 9 bloquées**, zéro validation automatique.
- Registre ultérieur distinct : **34 éléments mixtes = 14 prêts à soumettre + 15 à corriger (12 Wiki, 3 historiques) + 5 bloqués**.
- Lectrice cycle 8 : **ARCH-005, COL-003, ASSO-007** prêts à soumettre **sous réserve** sur de nouveaux blobs, sans suppression des objections d'archives. Rapprochement indicatif : 17 prêts à soumettre (dont 3 sous réserve), 12 Wiki à corriger, 5 bloqués. Ce n'est pas une validation humaine.
- Cinq pages bloquées : `wiki-education-enfance-protection.html`, `wiki-frontieres-migrations-colonialisme.html`, `wiki-logement-habitat-droit-ville.html`, `wiki-police-deces-memoire.html`, `wiki-sante-psychiatrie-autonomie-soins.html`.
- ARCH-002 et ARCH-007 : deux visas éditoriaux sur versions précises, **pas** d'accord de droits médias ni de publication.
- Les 44 fiches Drive et 71 notices FN sont des inventaires distincts, non 115 textes publiables ; FN-022/FN-048 et FN-038/FN-057 sont des alias/doublons à conserver sans renumérotation.

## Sécurité et intégration
Le rapport Développeuse C8 constate `submit-proposal` ACTIVE v2, `submit-resource` ACTIVE v1, `github-wiki-ingest` ACTIVE v5, `verify_jwt=false` (OIDC interne de github-wiki-ingest non audité). `submit_wiki_article` et `review_wiki_article` SECURITY DEFINER avec `authenticated EXECUTE=true`. Les correctifs candidats `edition-premiere/security-p0/*` ne sont **pas appliqués**. Les alertes ne prouvent pas toutes une vulnérabilité exploitable, mais le P0 reste ouvert jusqu'aux contrôles serveur. Aucune action de production sans accord explicite.

## Concordance politique
Manifeste V2.6, Charte éditoriale V0.1, Charte des communs V0.9 transitoire : **candidats** ; pas d'adoption collective, pas de collectif constitué. Le kit communication C8 comporte encore une référence V0.8 : rectification requise sur sa branche source. Article 48 transitoire : mandats et gouvernance collective futurs ne sont pas en vigueur.

## Journal et dépendances
Le `JOURNAL_COMMUN.md` a été lu sur quatre branches (Relieuse C7, Graphiste C8, Médiathèque C8, communication) : **zéro occurrence explicite de « cycle 8 »** dans ces quatre versions. Les transmissions restent dispersées ; la réception par chaque conversation n'est pas garantie. Cette pièce d'audit sert d'index de convergence candidat, sans modifier les branches sources.

## Priorités de sortie et décisions
1. **P0** : cadrer et autoriser séparément les tests isolés, correctifs serveur, rollback et éventuel déploiement ; vérifier les droits et mentions RGPD/LCEN.
2. **P1** : consolider les SHA des versions finales, corriger les 12 Wiki, résoudre les 5 blocages spécialisés, licences et droits.
3. **P1** : vérifier les contributions historiques/territoriales au niveau des fichiers, pas seulement des conversations.
4. **P2** : réconcilier les branches divergentes, tests Node/Chromium sur un même HEAD, tests physiques d'accessibilité et vérification des liens.
5. **Décisions Zout** : adoption individuelle éventuelle des textes fondateurs intégraux sur SHA, visas éditoriaux texte par texte, droits et autorisation distincte de publication.

**Conclusion : cycle 8 substantiellement avancé, non clôturable comme édition publiable.** Aucun merge, aucune publication, aucun déploiement, aucun contact extérieur, aucun visa humain présumé.
