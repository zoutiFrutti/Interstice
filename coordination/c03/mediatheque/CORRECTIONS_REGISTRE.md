# C03-MED-03 — Corrections candidates du registre 219

**Aucune modification directe du registre PR #161.** Propositions pour L'Anarchitecte et la Relieuse, à appliquer après confrontation et validation.

1. Conserver les 219 IDs ; préserver FN-001…071 et les références des sept Parcours.
2. Conserver `duplicate_candidates` comme indice d'enquête ; ajouter `alias_of_candidate` FN-048→FN-022, FN-057→FN-038, sans redirection ni suppression avant validation des éditions.
3. FN-018 : conserver `canonical_url:null`, `metadata_gap` et statut bloqué ; ne pas inventer de source.
4. Associer FN-024 à ECO-19 en relation de provenance ; pas de deuxième ressource publique.
5. Séparer `Resource` durable de `WorkAccess` (URL diffuseur, territoire, date de vérification, fin de replay, accès indisponible). Les dates inconnues restent nulles.
6. Distinguer sélection historique des 12, prototype technique R1 des dix et sélection éditoriale C12 candidate ; aucun drapeau `approved` automatique.
7. Chaque ressource liée aux sept Parcours doit conserver source, validation documentaire et droit de publication indépendants de l'existence de sa clé.
8. Les podcasts C05 (`coordination/mediatheque/C05_PODCASTS_RADIOS_INVENTAIRE_2026-11-03.json`) sont un inventaire séparé : pas d'injection automatique dans les 219 sans examen des doublons et identifiants.

**Tests exécutés** : lecture JSON et vérification en mémoire des 219 objets, 71 FN uniques et références des sept Parcours (aucune référence absente). Pas de test CI, interface, liens réseau ou validation juridique.
