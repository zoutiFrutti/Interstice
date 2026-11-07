# C11-MED-01 — Réconciliation du catalogue (candidate)
Date : 2026-11-07. **Aucune publication, fusion ni migration.**

## Référentiels examinés
- PR #161 : `coordination/v2/work-c02-01/data/resources.json` sur `work/c02-v2-reconciliation-20261103`, blob `66957e1b223f05642dcd69479ac48d0394797802`.
- PR #171 : `coordination/c03/mediatheque/CATALOGUE_RECONCILIE.md` et dossiers de doublons/droits ; réconciliation structurelle antérieure.
- PR #189 : dossier candidat « Les interpros : s'organiser au-delà des métiers ».
- Matrice C10 des 71 notices : source historique ; comparaison détaillée édition par édition encore requise.

## Tests exécutés sur le JSON de #161
- `resources.length = 219` ; exactement **71** ressources dont l'identifiant correspond à `FN-[0-9]+`.
- 71 IDs FN distincts ; séquence complète FN-001 à FN-071 ; **aucun manquant**.
- Les 71 objets FN ont `primary_door: mediatheque`.
- **71/71** ont `validation.legal = non_examine` dans ce registre candidat. Aucune licence ne peut être dite vérifiée à partir de ce champ.
- Les 71 `canonical_url` sont à contrôler dans le registre (plusieurs sont nulles) : les URLs historiques peuvent figurer dans d'autres documents, sans être consolidées ici.
- `FN-018` : « Pepper et Superflu », URL canonique nulle, notice lacunaire. Maintenir blocage documentaire.
- `FN-024` : alias déclaré `ECO-19` ; préserver le lien, ne pas déduire une équivalence de contenu sans examen.
- Doublons candidats réciproques : FN-022/FN-048 et FN-038/FN-057 ; voir `DOUBLONS_C11.md`.

## Liens documentaires candidats
| Objet | Médiathèque | Encyclopédie | Archives |
|---|---|---|---|
| FN | Notice d'œuvre, édition, accès et droits | Article de contexte et analyse, sans duplication de notice | Source originale seulement si provenance et droits documentés |
| Interpros | Bibliographie et médias datés | Définition, histoire, controverses et fonctionnement | Tracts, procès-verbaux, affiches et témoignages publics datés |
| Parcours | Ressources référencées par identifiant | Concepts et transversalités | Pièces primaires à contextualiser |

**Aucun lien inter-porte nouveau n'est déployé** : tableau de relations proposées, non vérification de routes réelles.

## Contrôles non terminés
Pour chacune des 71 notices : édition exacte, auteur·rice, traducteur·rice, crédits, provenance, URL vivante, licence et portée territoriale, accès actuel, lien éventuel avec les sept Parcours. Les droits d'un texte ancien ne suffisent pas à autoriser une édition, une traduction ou une image récente. Statut global **structure vérifiée / documentaire partiel / juridique non examiné / publication interdite**.
