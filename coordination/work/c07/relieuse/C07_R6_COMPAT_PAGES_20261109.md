# C07 — La Relieuse · Non-régression R6 et périmètre Pages
**9 novembre 2026 · HEAD initial `f84a5a5dac7366121a85e3870b1e404f30e76326` · PR #186**

## Incident détecté
Le contrôle R6 `certify` du HEAD `f84a5a5dac7366121a85e3870b1e404f30e76326` a échoué. Les logs du job `42706920052 / 129466190870` montrent notamment des retours 404 sur `/design-system/comparaison-identite-r6.html` et des absences de `#rubriques`, `#touch-mode` et des cinq nœuds sur `/design-system/faille-navigation-interactive.html`. Cause directe : `_config.yml` excluait le dossier `design-system/`, que les tests R6 considèrent public.

## Correction ciblée
Les **5 fichiers HTML** de `design-system/` et les **2 fichiers de `integration-graphique/` sont des interfaces de démonstration et comparatifs graphiques, revus comme tels. Restauration de ces deux répertoires dans la construction Pages candidate. **Aucune réintroduction** de `coordination/`, `docs/`, `recherche/`, `propositions/`, `scripts/`, `tests/` ou `supabase/`. Le garde-fou `check-pages-boundary.mjs` reste inchangé.

## Réception à confirmer
Un test d'intégration réussi seul ne suffit pas. Sur le nouveau HEAD :
- `certify` R6 doit repasser entièrement avec la navigation historique des cinq nœuds ;
- `master-and-pages` doit conserver `unsafe_entries=0` dans l'artefact Jekyll ;
- les ressources de graphisme du dossier `assets/` restent servies et les scripts du site principal fonctionnent ;
- nulle donnée sensible ne doit être ajoutée aux sept pages/restes réintégrés, et `noindex` n'est **pas** une protection d'accès.

Les comparatifs et prototypes ne sont pas une nouvelle publication de fiches ni une validation artistique de leur version finale. **Aucune fusion ou diffusion du candidat**.
