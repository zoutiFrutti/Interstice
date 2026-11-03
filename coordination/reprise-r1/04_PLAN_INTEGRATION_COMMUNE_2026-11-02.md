# Intégration commune R1 — chantier candidat

**Branche :** `integration/r1-commune-candidate-20261102`
**Base :** `coordination/r1-arbitrages-zout-20261102`
**Mandat explicite Zout :** créer une branche d'intégration commune et y préparer un rapprochement des travaux. **Aucune autorisation de fusion dans main ni de publication.**

## Règles de travail

1. Préserver les cinq arbitrages dans `coordination/reprise-r1/03_ARBITRAGES_ZOUT_2026-11-02.md`.
2. Ne pas fusionner directement les branches d'ateliers divergentes ; relever fichiers, SHA, dépendances et conflits avant toute reprise ciblée.
3. Ne pas importer les maquettes fictives comme données réelles ; ne pas dupliquer les identifiants Wiki/Bibliothèque/FN et conserver les alias.
4. Ne pas adopter ou migrer le schéma documentaire avant la comparaison des modèles existants demandée par Zout.
5. Ne pas modifier `main`, déployer, publier, diffuser, activer IA ou contacter des tiers.
6. Chaque intégration candidate doit documenter origine, commit/blob, tests réellement exécutés, limites et état éditorial ; les droits et licences restent explicites.

## Ordre des lots candidats

| Lot | Sources principales | Travail autorisé | Barrière |
|---|---|---|---|
| 0 — P0 | Juriste R1, Lectrice R1, Développeuse R1 | Confronter les cinq pages, sécurité, tests et rollback ; préparer correctifs isolés | Trois pages BLOQUÉES ; deux À CORRIGER ; tests réels manquants |
| 1 — Contrats | Anarchitecte, Médiathèque, Tisseuse, Biographe | Tableau comparatif des schémas, IDs 24/44/71, alias, relations et pertes possibles | **Aucune adoption/migration** avant décision de Zout |
| 2 — Passages | Graphiste R1, variantes C10 | Comparatif des deux variantes de carte-logo et test d'accessibilité | Logo officiel intact ; variante finale non choisie |
| 3 — Entraide | Éclaireuse, Juriste, Lectrice | Prototype B : droits en manifestation, sources datées, version mobile/imprimable/hors ligne | Pas de diffusion ni conseil individuel non relu |
| 4 — Dix œuvres | Médiathèque, archivistes | Proposer dix œuvres sur luttes et communs, réutiliser notices et contrôler droits | Aucun média hébergé ; titres non validés |
| 5 — Histoires/Atlas | Archéologue, Assistant, Anarchivistes, Tisseuse, Biographe | Relations documentaires candidates et liens vers ressources existantes | Pas de coopération, causalité ou filiation inventée |
| 6 — QA | Développeuse, Graphiste, Lectrice, Juriste | Tests réels sur SHA final, accessibilité, liens, droits et sécurité | Aucun visa automatique |

## État initial

**BRANCHE CRÉÉE**, document de cadrage présent. **AUCUN LOT DE CODE OU DE CONTENU D'ATELIER INTÉGRÉ À CE STADE.** Les travaux existants restent sur leurs branches d'origine. Les transmissions R1 sont des preuves à rapprocher, pas des validations définitives.

## Prochaine opération

Comparer les fichiers candidats par chemin et SHA, identifier les conflits, puis préparer un premier lot ciblé sur cette branche, avec tests et rapport. Toute fusion vers `main` exigera un accord distinct et explicite de Zout.
