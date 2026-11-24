# C27 — Dix amendements intégrés dans de vrais fichiers HTML candidats

**14 novembre 2026 · Candidate privée · aucune autorisation de publication**

## Exécution

Les dix textes amendés de C26 sont **insérés dans une copie intégrale de leurs fichiers HTML**, conservée dans `coordination/work/c27/html-candidates/`.

Chaque copie reprend le HTML source à l'octet près sauf une section éditoriale `id="c27-amendement-candidat"` introduite avant la première section de développement thématique (juste après l'introduction pour la collection de 27 fiches). Chaque ajout est attribué à sa proposition C26, porte explicitement le statut « en relecture, non validé pour diffusion », et fournit un lien vers une référence spécialisée et un lien Wikipédia. Les liens externes des sources originales ne sont pas réécrits.

| Fichier source préservé à la racine | HTML candidat privé |
| --- | --- |
| `wiki-ecologie-sociale-environnement.html` | `html-candidates/wiki-ecologie-sociale-environnement.html` |
| `wiki-egalite-fiches.html` | `html-candidates/wiki-egalite-fiches.html` |
| `wiki-egalite-genres-inclusivite.html` | `html-candidates/wiki-egalite-genres-inclusivite.html` |
| `wiki-feminismes-histoire-egalite.html` | `html-candidates/wiki-feminismes-histoire-egalite.html` |
| `wiki-handicap-validisme-neurodiversite.html` | `html-candidates/wiki-handicap-validisme-neurodiversite.html` |
| `wiki-justice-prisons-abolitionnisme.html` | `html-candidates/wiki-justice-prisons-abolitionnisme.html` |
| `wiki-liberte-numerique-ia-surveillance.html` | `html-candidates/wiki-liberte-numerique-ia-surveillance.html` |
| `wiki-patriarcat-histoire-mecanismes.html` | `html-candidates/wiki-patriarcat-histoire-mecanismes.html` |
| `wiki-politique-institutions-regimes.html` | `html-candidates/wiki-politique-institutions-regimes.html` |
| `wiki-socialismes-communismes-anarchismes-autogestion.html` | `html-candidates/wiki-socialismes-communismes-anarchismes-autogestion.html` |

## Source et limites documentaires

- Les textes insérés reprennent **les dix paragraphes candidats de C26**, sans les modifier arbitrairement.
- Vérification extérieure actuelle ciblée : **Insee Focus 377 (26 février 2026)** pour les écarts de revenu salarial ; **AIE Energy and AI (2025)** pour les 415 TWh (2024) et la projection 945 TWh (2030) ; **OMS (7 mars 2023)** pour la population concernée par un handicap important ; **ministère de l'Intérieur (19 janvier 2026)** pour les dates de vote 1944/1945. Les autres sources restent à vérifier par affirmation.
- Le site ne doit pas recopier toutes les notions de Wikipédia ; sa contribution spécifique repose sur méthodes, enquêtes, pratiques collectives et recherches ouvertes. Rien de ceci ne constitue un nouveau visa humain.
- Les sections candidates **s'ajoutent pour comparaison**, elles ne corrigent pas encore les anciens paragraphes potentiellement redondants et ne remplacent pas une relecture juridique/sensible.
- Les liens relatifs des HTML candidats sont ceux des pages racine. Ces documents sont faits pour inspection éditoriale du texte et comparaison de versions, **pas pour servir de prévisualisation autonome en production**.

## Contrôles

`tests/c27-private-html-candidates.test.mjs` doit prouver la conservation exacte des dix sources et l'unicité de chaque section ajoutée.

`.github/workflows/c27-private-html-review.yml` doit ensuite exécuter les tests C27/C25 et construire localement Jekyll **sans publier**, pour prouver que `coordination/work/c27/` est absent du paquet Pages. Dans `_config.yml`, `coordination` est explicitement exclu.

Les deux pages Égalité restent distinctes, chacune avec ses ancres ; aucune donnée des 219 objets C07 ou des neuf textes documentaires bloqués n'a été publiée.

## Suite éditoriale

Relecture indépendante par fiche : vérification exacte des affirmations, contrôle du droit de réutilisation, comparaison Wikipédia, choix final de remplacer ou non les anciennes sections pour éviter les doublons, puis proposition de visa individuel. **Aucune fusion dans `main`, aucun déploiement et aucun accès élargi**.
