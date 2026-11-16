# C03-MED-03 — Doublons et alias

Confrontation JSON PR #161 (`resources.json` blob `66957e1b223f05642dcd69479ac48d0394797802`) et C10 (`cycle10_matrice_71_sources_candidats_2026-11-01.json` blob `57ba0f38c37fa8027cf30ae28c921fae5ba0dad4`).

| IDs | Constat | Consigne |
|---|---|---|
| FN-022 / FN-048 | Deux notices candidates pour *La Commune* de Louise Michel ; C10 `FN-048 → FN-022` ; PR #161 marque chacune comme candidate doublon de l'autre | Préserver les deux IDs ; exposer FN-022 comme cible d'alias **candidate** ; comparer éditions, traduction et crédits avant dédoublonnage éditorial |
| FN-038 / FN-057 | *Principes féministes de l'internet 2.0* ; C10 `FN-057 → FN-038` ; PR #161 liens réciproques de doublons | Préserver les deux IDs ; cible d'alias candidate FN-038 ; contrôler langue, version et droits |
| ECO-19 / FN-024 | PR #161 associe ECO-19 comme alias de FN-024 | Conserver la provenance écologie ; ne pas créer une seconde œuvre |

**Écart de modélisation** : PR #161 utilise `duplicate_candidates` réciproques plutôt que `alias_of` orienté C10. Ne pas transformer automatiquement un soupçon de doublon en redirection publiée. Statut **À POURSUIVRE** pour comparaison des éditions.
