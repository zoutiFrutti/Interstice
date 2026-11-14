# C21 — Réception humaine Android de l'aperçu privé Interstice

**Date du retour :** 14 novembre 2026  
**Source :** retour écrit direct de la personne propriétaire du projet dans la conversation (16 cases « OK », aucune remarque).  
**Statut :** réception fonctionnelle et graphique du **build privé réellement testé** ; non assimilable à un visa éditorial, une certification exhaustive du code ni une autorisation de déploiement public.

## Résultats transmis

- **Entrée dans la Faille noire : 4/4 OK.** Logo authentique affiché, plongée immersive, dézoom à la première interaction, retour à la vue générale.
- **Six portes : 4/4 OK.** Points et intitulés visibles, destinations conformes, panneaux lisibles, changement de porte sans blocage.
- **Sous-menus et Manifeste : 4/4 OK.** Points tertiaires tactiles, 31 rubriques accessibles et cohérentes, point 7 → Manifeste, liens et retours fonctionnels.
- **Ergonomie et graphisme : 4/4 OK.** R7-B1 accepté avec fissures/propagation rouge ; déplacement/zoom, agrandissement Android et portrait/paysage OK.
- **Anomalie observée :** aucune signalée par la personne ayant testé.

Le détail structuré des 16 assertions est conservé dans `RECEPTION_ANDROID_2026-11-14.json`.

## Vérifications techniques complémentaires à ce retour

À la consultation GitHub, le commit candidat C20 `586e91067216a1bd96e34c30ffca5f104fda192b` a trois workflows GitHub Actions **terminés SUCCESS** :
- `43505336605` : Demo ateliers C11 sans IA.
- `43505336610` : C07 secure deterministic missions - no AI.
- `43505336765` : WORK NAV01 isolated navigation QA, y compris le job `navigation` terminé avec succès.

Ces succès attestent le commit **C20**, pas nécessairement les octets du **build privé** examiné sur Android : le retour humain ne comporte ni SHA ni numéro de version de l'aperçu. **Aucune équivalence de build n'est inférée** et la CI de la PR #197 n'est pas rétroactivement déclarée verte.

## Décision de traitement candidat

1. **Ne pas modifier** le graphisme R7-B1 et les interactions acceptées sur la seule base de suppositions.
2. **Aucun défaut visuel ou fonctionnel ne justifie un nouveau correctif** d'après ce retour.
3. Conserver la PR **#198** en brouillon, et la PR **#197** comme candidate de convergence ; pas de fusion en cascade et pas d'écriture sur `main`.
4. En phase de réception finale, rapprocher l'identifiant exact de l'aperçu privé, son manifeste et le commit testé, sans publier l'URL d'accès ni modifier les droits.
5. Les 219 objets C07 restent sans nouveau visa ; les dossiers HELD, PAR-005, les droits des médias et les envois des formulaires ne sont **pas** ouverts par cette validation UX.
6. Les étapes restantes sont principalement de **traçabilité de version**, de réception CI exacte après reprise du patch C20 dans la convergence, puis de **relecture éditoriale** distincte.

## Question humaine minimale à garder pour la prochaine réception

Identifier la **version/empreinte du build privé** testé. Ne pas demander de répéter les seize gestes : ils sont déjà réceptionnés et réussis sur cette version.

**Aucune fusion, publication, nouveau déploiement, migration, purge ou changement de permission autorisé.**
