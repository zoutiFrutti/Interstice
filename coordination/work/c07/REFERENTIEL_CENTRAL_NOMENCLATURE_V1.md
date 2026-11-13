# INTERSTICE — Référentiel central et nomenclature documentaire V1
**Coordination : La Relieuse | 8 novembre 2026 | P0 | CANDIDAT INTERNE**
**Branche commune de travail : `work/c07-reunification-20261104` | Pas de publication, fusion, migration ni changement de `main`.**

## 0. Une règle : une identité documentaire, plusieurs représentations
Ce document sert de **point d'entrée central** vers les jeux de données et preuves existants. Il ne remplace pas le contenu original, ne prétend pas le fusionner physiquement, ne crée pas de seconde base ni de visa éditorial. Avant toute nouvelle fiche : **RELIER > COMPLÉTER > CRÉER**.

Un **identifiant stable** désigne un objet ; l'emplacement d'un fichier, son nom historique `wiki-*.html`, une branche, une URL, une traduction, une copie dans Drive ou une révision ne créent pas automatiquement un autre objet.

## 1. Référentiels à consulter, dans cet ordre
| Registre / emplacement | Fonction | Autorité actuelle et limites |
|---|---|---|
| `coordination/v2/work-c02-01/data/resources.json` | Index candidat de **219 objets**, dont **71 FN-001–FN-071** | Base d'inventaire C02 ; ni validation de fonds ni autorisation de publication |
| `coordination/v2/work-c02-01/data/sources.json` | Provenance et locateurs de sources | Source référencée ≠ source intégralement lue |
| `coordination/v2/work-c02-01/data/relations.json` | **19 relations candidates** | Ne pas transformer en lien factuel vérifié |
| `coordination/v2/work-c02-01/data/objections.json` | **30 objections WORK** | Préserver la critique historique |
| `coordination/v2/work-c02-01/data/parcours.json` | **7 Parcours, 29 étapes** | `PAR-005` bloqué |
| `coordination/c03/lectrice/MATRICE_35_OBJECTIONS.md` | **36 objections thématiques + 6 transversales** | Ne pas supprimer les anciennes objections |
| `coordination/work/c07/LOT_COMMUNE_01.json` et `LOT_COMMUNE_02.json` | Décisions humaines de conservation des fiches Commune | **9 retenues avec réserves, 1 non sélectionnée ; visas publication PENDING** |
| `coordination/ateliers/vigie/CORPUS_PALESTINE_ISRAEL_COMMUN.md` | Entrée commune du corpus Palestine-Israël | Recherche cumulative ; vérifications nécessaires |
| `assets/nav-01/reading-catalogue.mjs` | Liste de lecture de pages HTML dans l'interface candidate | Index d'affichage seulement ; pas de visa |
| `coordination/mediatheque/c11/CATALOGUE_RECONCILIE_CANDIDAT.md` (PR #190) | Contrôle des FN et des doublons | Rapport candidat ; ne pas confondre avec une migration adoptée |
| `coordination/c11/lectrice/C11_LEC_01_MATRICE_DOSSIERS.md` (PR #191) | Statuts et réserves des dossiers historiques | Rapport candidat, pas de publication autorisée |

Les **24 fichiers `wiki-*.html` à la racine** correspondent aux pages thématiques historiques de la porte **Encyclopédie des communs**. Le mot `wiki` dans les chemins reste un **alias technique hérité** : ne pas renommer en masse sans test de liens.

Drive = documents originaux ou de travail référencés par URL et ID ; GitHub = versions et métadonnées contrôlables ; Supabase = dépôt technique et historique d'ingestion ; le site = **présentation de contenus explicitement autorisés**, jamais source première de vérité.

## 2. Identifiants et portes : nomenclature logique
| Préfixe | Type documentaire | Destination primaire candidate |
|---|---|---|
| `WIKI-` ou nom de page `wiki-*.html` existant | Synthèse thématique ; futur libellé public **Encyclopédie** | Encyclopédie des communs |
| `ARCH-` | Pièce ou notice d'archive | Archives des communs, avec renvois Encyclopédie |
| `BIO-` | Dossier biographique | Encyclopédie, avec preuves en Archives |
| `ASSO-`, `COL-` | Associations et collectifs historiques | Encyclopédie / Archives selon nature de la pièce |
| `FN-` | Notice de ressource | Médiathèque |
| `TIS-`, `EXP-`, `ECO-` | Territoire, expérience ou ressource écologique existante | Atlas / Encyclopédie si vérifié |
| `CAT-` | Dossier de recherche Catalogne | Archives / Encyclopédie |
| `PAR-` | Parcours transversal | Navigation secondaire, pas cinquième porte |
| `DROIT-` | Fiche pratique d'accès aux droits | Encyclopédie / Faire Ensemble, après vérification juridique |
| `PENS-HAB-`, `VIG-` | Saisines ou enquêtes éditoriales | Travail interne ; article distinct uniquement après visa |

**Ne jamais réattribuer d'identifiant ni effacer les alias d'origine.** Le préfixe ne suffit pas à établir automatiquement une destination : conserver le champ `primary_door` de l'objet déjà inventorié, puis documenter toute correction.

Quatre portes publiques : **Faire Ensemble**, **Encyclopédie des communs**, **Archives des communs**, **Médiathèque**. **Atlas** visible dans Encyclopédie et via les cartes, mais pas cinquième porte. Les **sept Parcours** sont transversaux.

## 3. Champs minimaux d'une fiche dans le registre maître
`id` (stable) ; `title` ; `kind` ; `primary_door` ; `aliases` ; `source_refs[]` ; `canonical_locator` (URL/Drive ID/chemin et commit ou absence motivée) ; `content_version` (SHA/empreinte) ; `documentary_status` ; `legal_status` ; `editorial_status` ; `publication_visa` ; `reviewed_at` ; `reviewer` ; `blocking_objections[]` ; `relations[]` ; `privacy_class` ; `last_checked_at`.

Ne pas déclarer ces champs remplis avant mesure réelle ; conserver les champs historiques déjà présents et prévoir une **vue de rapprochement**, non une seconde duplication des 219 entrées.

## 4. Statuts séparés, non interchangeables
1. **INVENTORIÉ** : référence identifiée, existence/format/ID à contrôler.
2. **STRUCTURE_VÉRIFIÉE** : champs, unicité, liens internes, types et références contrôlés automatiquement.
3. **SOURCES_PARTIELLES** : pièces identifiées mais pas toutes collationnées, réserves conservées.
4. **FAITS_VÉRIFIÉS_SUR_PÉRIMÈTRE** : assertions précisées, avec source primaire ou confrontation et date ; ne généralise pas au dossier entier.
5. **RELUE_AVEC_RÉSERVES** ou **RELUE_SANS_RÉSERVE_DOCUMENTAIRE** : avis humain documenté sur version exacte.
6. **JURIDIQUE_EXAMINÉ** : droits, privacy, image, risques examinés sur version exacte.
7. **PRÊT_À_SOUMETTRE** : forme éditoriale et contrôles complets, mais aucun feu vert public.
8. **VALIDÉ_POUR_PUBLICATION** : visa humain explicite sur ID et SHA du texte.
9. **PUBLIÉ** : URL accessible et version effectivement constatée.

**BLOQUÉ** est un marqueur indépendant et conservé, avec motif et preuve. Ne jamais transformer « retenu avec réserves » en « validé pour publication ». Toute modification après visa impose une vérification de l'empreinte et une relecture proportionnée.

## 5. Plan de consolidation et responsabilités
**Vague A — automatisable et vérifiable sans choix éditorial** : comparer les 24 pages réelles, 219 IDs, 71 FN, 19 relations, 30 objections, 7 Parcours/29 étapes ; pointer les IDs absents, doublons potentiels, chemins morts, sources sans URL, SHA divergents et alias. **Ne pas compter les ensembles comme disjoints.** Responsable : Développeuse + Anarchitecte ; supervision Relieuse.

**Vague B — documentaire** : Lectrice vérifie les réserves dossier par dossier ; Médiathèque recolle éditions, auteurs, URL, licences et doublons ; Historiens/Anarchivistes collationnent les archives ; Tisseuse qualifie les initiatives R0–R3. Reporter les contradictions, pas les effacer.

**Vague C — édition** : Rédactrice prépare les lots prêts ; Juriste examine les risques ; Relieuse présente une grille `ID / version / preuves / objections / visa` à Zout. La Graphiste et la Développeuse vérifient l'affichage de ce lot avant toute proposition de mise en ligne.

**Vague D — publication** : opération explicitement distincte, **interdite sans autorisation humaine** ; aucune déduction du succès CI, de l'existence d'un HTML ou d'une présence dans Supabase.

## 6. Blocages connus au 8 novembre 2026
- `FN-018` bloqué ; doublons possibles `FN-022/FN-048` et `FN-038/FN-057` ; contrôle juridique `non_examine` sur les 71 FN du registre candidat.
- `BIO-019` / `BIO-021` bloqués ; `BIO-009` / `BIO-022`, `CAT-001` / `CAT-006` avec réserves ; `PAR-005` bloqué.
- Neuf fiches Commune conservées avec réserves, **aucun visa de publication**.
- PR #193 raccordement cartes/Atlas : QA partielle, garde-fou NAV01 en échec ; simulations de la PR #41 **fictives**.
- Source primaire Drive non systématiquement relue, permissions et confidentialité à contrôler ; données Supabase non certifiées à jour par le présent document.
- **Le site public n'est pas une preuve de validation.** Tests de navigation mobile et licence des médias requis.

## 7. Règles de travail sur la branche commune
- Continuer sur `work/c07-reunification-20261104`, PR #186 ; n'ouvrir aucune nouvelle branche pour ce registre.
- Réconcilier les PR existantes par comparaison de fichiers et de SHA, **pas par fusion massive**.
- Chaque atelier contribue par identifiant, preuve et objection, via La Relieuse ; aucune réception automatique supposée.
- Avant de modifier une source d'un autre atelier, demander revue et maintenir l'ancien identifiant et l'historique.
- Aucun changement de `main`, aucune migration de base, aucune publication, activation ou prise de contact extérieure sans validation humaine explicite.

## 8. Critères de réussite mesurables
1. 100 % des identifiants du registre candidat uniques et associés à une origine et un statut explicite.
2. 100 % des pages et pièces sélectionnées pour publication liées à une empreinte précise, une source, une date de contrôle et un responsable de relecture.
3. Tous les doublons candidats documentés avec décision `ALIAS`, `DISTINCT` ou `INDÉTERMINÉ` ; aucune suppression automatique.
4. Tout objet visible dans l'Encyclopédie/Atlas/Archives/Médiathèque pointe vers l'ID unique ; aucun partenariat ou localisation déduit d'un prototype.
5. Tableau de bord affichant séparément **inventoriés / structure vérifiée / faits vérifiés / relus / juridiquement examinés / prêts à soumettre / publiés**.
6. Zéro contenu publié ou prétendument approuvé par simple automatisme.

**État de ce texte : document de coordination candidat, non validation des 219 notices ni des 24 pages.**
