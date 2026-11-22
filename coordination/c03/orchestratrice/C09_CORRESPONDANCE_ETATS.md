# C09 — Correspondance des états C10/C18/C03 vers neuf dimensions

**Contrat de lecture candidate, sans migration ni changement de valeur.**

Ce document ne crée pas un second registre. La source des déclarations historiques reste C10/C11/C18/C03, la console #183/#186 reste une **vue**. Lorsqu'un état d'une source ne peut être converti sans preuve, conserver `INCONNU` plutôt que d'inventer une transition.

## Statuts cibles, neuf dimensions indépendantes

| Dimension C09 | Champ C03 réutilisable | C10 / C18 : indices disponibles | Preuve nécessaire pour dire OUI |
| --- | --- | --- | --- |
| `DEMANDEE` | `preparee` seulement si mandat identifiable | `PREPARE` C18 = préparation, pas forcément demande envoyée | Mandat daté, émettrice et destinataire |
| `ENVOYEE` | `transmise` | C10 `ÉMISE`, C18 `TRANSMIS_DECLARATIF` | Courrier distribué ou envoi attesté ; création du fichier seule insuffisante |
| `RECUE_ATTESTEE` | `recue` | C10 `REÇUE`, C18 `RECU_ATTESTE` | Accusé spécifique à la mission, auteur/date et provenance vérifiables |
| `COMMENCEE` | `commencee` | C18 `TRAVAIL_EN_COURS` | Modification, recherche ou compte rendu de travail attribué à la mission |
| `LIVRABLE_CANDIDAT` | `livree` | C10 `TRAITÉE` ou C18 `LIVRABLE_CANDIDAT` | Fichier, rapport, commit ou objet lié à **cette mission**, pas un ancien livrable voisin |
| `VERIFIEE` | `controle_effectue` | C18 `CONTROLE_TECHNIQUE` | Type de contrôle, résultat, version et périmètre ; CI ≠ visa éditorial |
| `VALIDEE_HUMAINEMENT` | `validee` | C18 `DECISION_ZOUT` est un indicateur, pas nécessairement une validation positive | Décision explicite de l'autorité compétente, sur cette version précise |
| `INTEGREE` | **nouveau champ à ajouter** | **Aucun équivalent fiable** C10/C18 | Merge réellement constaté sur destination autorisée, SHA et décision associée |
| `PUBLIEE` | **nouveau champ à ajouter** | **Aucun équivalent fiable** C10/C18 | Autorisation de publication + URL / artefact public vérifié, date et version |

`BLOQUE`, `OBJECTION_OUVERTE`, `EN_ATTENTE` sont des **conditions transversales** et n'effacent aucune dimension positive. Le modèle `true/false/null` doit conserver `null` lorsqu'une preuve manque. `false` désigne une négation explicitement vérifiée, pas le silence du dépôt.

## Prévention des deux dérives fréquentes

- `RETAINED_WITH_RESERVATIONS` sur un lot éditorial signifie **choix de conserver une candidate avec ses réserves**, et ne doit pas remplir automatiquement `VALIDEE_HUMAINEMENT` pour publication. Les décisions de présentation et de publication sont distinctes.
- `TERMINE_TECHNIQUE` C07 signifie qu'un contrôle déterministe a été produit après une décision technique liée au hash ; aucun rôle humain, aucune page et aucun article ne sont déclarés approuvés par ce seul état.

## Journal d'une transition

Champs minimaux : `mission_id`, `dimension`, `valeur` (`true` / `false` / `null`), `date_observation`, `source_type`, `source_url`, `branch`, `commit_sha`, `blob_sha`, `acteur_atteste`, `controleur`, `reserve`, `decision_source_id`.

Ne pas exiger un blob pour une décision consignée dans une conversation sans export : dans ce cas, laisser la preuve GitHub **à vérifier** et ne pas faire passer l'entrée en réception attestée ou publication. Une URL et un SHA syntaxiquement valides ne garantissent pas l'authenticité.

## Exemple de lecture prudente

`C03-ARC-03` cite `C03-ARC-02` comme antériorité dans #132 : cette relation peut aider le travail, mais **n'autorise pas à mettre `RECUE_ATTESTEE=true`, `LIVRABLE_CANDIDAT=true` ou `VALIDEE_HUMAINEMENT=true` pour ARC-03**.

La relieuse peut rapprocher les nouvelles pièces dans l'index sans réécrire les archives ni déclencher de relance automatique.
