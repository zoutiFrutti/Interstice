# C03-LEC-03 — CORRECTIONS CANDIDATES LOCALISÉES

**La Lectrice** · 2026-11-03 · **P0** · cibles **PR #161** (`0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`) et contrelecture **#162** (`2e4a70615b353008dd5a7121234987f77d51fe43`).

Ce document demande des corrections à **appliquer sur une branche distincte**, après vérification des fichiers cibles ; **aucun changement direct à #161, #162 ou main**. Une suggestion de correction ne constitue ni un nouveau fait vérifié ni une autorisation de publication. Pour une valeur de schéma non existante (ex. `identification_a_verifier`), vérifier d'abord le contrat métier et éviter d'inventer une valeur sans l'ajouter au schéma et aux tests.

## Correctifs précis par fichier et section

| Priorité | Chemin (racine de #161 : `coordination/v2/work-c02-01/`) | Section ou ID | Correction proposée | Origine |
|---|---|---|---|---|
| P0 | data/relations.json | WORK-REL-003 | type / label / proof | Remplacer `fait_historique_atteste` par `complement_documentaire` à titre candidat ; libellé « Journal du 11e arrondissement associé au milieu du Club des prolétaires dans les études citées ; notice BnF atteste le périodique, pas le mandat des articles. » ; garder `publication_authorized:false`. | A06 / WORK-COM-05 / #162 |
| P0 | data/relations.json | WORK-REL-004 | from_id / to_id / source_refs | Ne pas assimiler automatiquement ARCH-002 à AFF5721 sans lecture du dossier interne. Suspendre l'arête inter-ID en V2 ; mettre AFF5721 comme référence externe dans PAR-001 et PAR-006. Lors d'une future mise à jour documenter la concordance par cote, scan, dossier canonique et SHA. | A09 / WORK-COM-01 / #162 |
| P0 | data/relations.json | WORK-REL-005 | type / label / proof | Remplacer `controverse` par `complement_documentaire` ou état de relation `identification_a_verifier` suivant schéma ; le nom « Blanche Lefèvre » imprimé est attesté, pas l'identité biographique complète BIO-019. Ne pas présenter l'absence de preuve comme un débat historiographique. | A08 / WORK-COM-07 |
| P1 | data/relations.json | WORK-REL-006 | label | Remplacer « continuité biographique ne prouve pas ... » par « comparaison de modes d'organisation en 1868 et 1871 ; ni identité des membres, ni filiation institutionnelle, ni continuité juridique présumées ». | A09 / WORK-COM-06 |
| P1 | data/relations.json | WORK-REL-007 | proof / source_refs | CAT-001/CAT-006 non relus sur leur corps : rendre explicite `rapprochement_a_instruire`, ne pas affirmer lecture d'une fiche CAT ; relier plus tard les versions canonisées. | A11–A15 / WORK-ESP-01 |
| P1 | data/relations.json | WORK-REL-102 | proof / label | Affecter la relation à une déclaration d'opérateur localisée et datée ; distinguer association Terre de Liens / Foncière, aucune promesse de partenariat ni résultat des plantations conclu. | B03 / WORK-ECO-03 |
| P0 | data/resources.json | ARCH-002 | title / availability / validation | Conserver le titre candidat « affiche n°373 » avec statut `correspondance_archive_a_verifier` en ajout documentaire, sans changer l'ID ni inventer une cote vérifiée dans Drive ; comparer au musée AFF5721 et au document Drive exact. | A09 / #162 |
| P0 | data/resources.json | BIO-019; BIO-009; COL-003 | validation.documentary / description | BIO-019 reste bloquée ; BIO-009 incertaine. Conserver la déconnexion entre signature imprimée, fiche nominative et assertions biographiques. Aucun chiffre 4000/1000/3000 dans un champ public. | A07/A08/A10 / WORK-COM-04/07 |
| P0 | data/resources.json | CAT-001; CAT-006 | availability / source_refs | Ne pas promouvoir au statut « lu ». Après obtention, ajouter URI versionnée et SHA, distinguer 24 octobre (décret), 28 octobre (publication), pratiques et mai 1937. | A11–A15 / WORK-ESP-01/03/04 |
| P1 | data/resources.json | FN-022/048; FN-038/057 | duplicate_candidates / aliases | Conserver les 4 ID et les paires suspectes ; pas de fusion avant contrôle titres, auteur, langue, édition, crédits, licences et liens d'accès. | B08 / WORK-TR-03 |
| P1 | parcours/PAR-001.md | Étapes / Relations typées | Conserver contexte → décret → travail → club → personnes. Renommer `travail` « Projets, appels et décisions à confronter ». Réserver ASSO-008 aux documents candidats. Pour ARCH-006/COL-003 : association de sources, non mandat prouvé. Pour AFF5721 : citation externe non relation ARCH-002 affirmée. | A01–A10 / WORK-COM-01/02/05 / #162 |
| P0 | parcours/PAR-002.md | Étapes catalogne / mai / Sources | Ajouter mention explicite « collectivisations antérieures au décret du 24 octobre 1936, publié le 28 ; extension territoriale et exécution à prouver » et « journées de mai 1937 : versions CNT/FAI/POUM et gouvernement en débat ». Versions CAT non lues : maintenir `partiel`. | A11–A15 / WORK-ESP-01/03/04 |
| P1 | parcours/PAR-003.md | Étapes histoire / sciences / territoires / Relations | Citer par étude le contexte, l'échantillon et les limites ; Chipko/Green Belt avec voix situées ; déplacer les relations Testet/La Salvetat/SCTL/VRAC vers comparaisons optionnelles, non chaîne obligatoire ; ECO-A/B/C non autonomes. | B01–B03 / WORK-ECO-01/02/03 |
| P1 | parcours/PAR-004.md | Étape experiences / Sources | Indiquer en tête « normes proposées ≠ application attestée » ; ASSO-008 / ARCH-005 ne prouvent ni pratiques validées ni continuité. EXP-004/005 candidats sans dossiers complets. Donner place au travail invisible et à l'accessibilité. | B04–B07 / WORK-AUT-01/02/03 |
| P0 | parcours/PAR-005.md | État / Relecture / Sources | Conserver `bloque`, aucune consigne opérationnelle ; distinguer avis juridique défavorable, contrôle versionné et revue médicale absente. Ne pas réduire le blocage à un test technique ou documentaire. | C01–C04 / WORK-DRO-01/02/03 |
| P1 | parcours/PAR-006.md | Étape commune / œuvres / Relations | BIO-019 uniquement comme dossier interne incertain ; AFF5721 = signature de « BLANCHE LEFEVRE », sans biographie assurée. Distinguer luttes féministes et LGBTQIA+ ; pour FN-015/016/055/069 vérifier éditions, droits et représentativité. | D01–D04 / WORK-FEM-01/02 |
| P1 | parcours/PAR-007.md | Étapes chronologie / autonomie / education | Ajouter les références directes : EZLN ES 05/11/2023 vs traduction EN 06/11 ; annonce ES 12/11 vs FR 01/12 ; 2026 vocabulaire ACEGAZ mouvant. Escuelita 2013 = programme, pas résultats d'enquête ; pas de données d'accès/localisation sensible. | D05–D09 / WORK-ZAP-01/02/03 |
| P1 | 03_MATRICE_OBJECTIONS.md | Préambule et tableau | Préserver sans les modifier les 30 WORK ; ajouter lien vers la matrice C03-LEC-03 et indiquer 36 lignes A–D réellement retranscrites + 6 T ; ne fermer aucune réserve WORK mécaniquement. | T06 / WORK-TR-01 |
| P1 | 02_MATRICE_PARCOURS.md | État documentaire | Préciser « favorable à une structure » pour PAR-003/004 ; conserver statut partiel pour PAR-001/002/006/007 et blocage de PAR-005. Aucun avis de publication global. | Tous PAR / WORK-TR-04 |
| P1 | 01_ORGANIGRAMME_V2.md; 04_CONTRAT_NAVIGATION.md | Quatre portes / URLs | Conserver le modèle conceptuel quatre portes ; ne pas présenter la compatibilité `parcours.html#entraide` comme un service, ni la liste non-JS candidate comme déjà intégrée dans R6. Anciennes URL inchangées jusqu'à QA future. | T01/T03 / WORK-TR-05 |

## Formulations de remplacement à privilégier

### PAR-001 — intro / travail

> Les documents relatifs à la Commune de Paris permettent d'étudier des décisions publiques, des projets d'organisation du travail, des publications et des convocations. Ils ne démontrent pas à eux seuls que les mesures furent appliquées, que toutes les réunions eurent lieu ni que les organisations coopérèrent effectivement. Chaque étape précise la nature de sa source et les incertitudes encore ouvertes.

### REL-003 — publication et club

> La BnF répertorie quatre numéros du journal *Le Prolétaire*, publié du 10 au 24 mai 1871 dans le 11e arrondissement. Son association avec le Club des prolétaires est rapportée par les recherches citées ; les articles ne sont pas attribuables automatiquement à une décision collective du club.

Source : [BnF cb328445424](https://catalogue.bnf.fr/ark:/12148/cb328445424) ; matrices [ARCH-006 #77](https://github.com/zoutiFrutti/Interstice/blob/f6a12b7ac4fa76c705a8978c62fb780af4b0b607/coordination/cycle10/archeologue/ARCH-006.md). Ne pas dire que la notice BnF, seule, atteste une connexion institutionnelle au club.

### REL-004 — ASSO-007 / ARCH-002

> L'affiche n°373 conservée par le musée Carnavalet (AFF5721), datée du 20 mai 1871, annonce une réunion pour le 21 mai. Cette notice prouve une convocation imprimée ; la tenue de la réunion et la correspondance exacte avec le dossier interne ARCH-002 restent à vérifier.

Source : [Carnavalet AFF5721](https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/republique-francaise-ndeg-373-liberte-egalite-fraternite-ndeg-373-commune) ; [C03-ARC-02 #162](https://github.com/zoutiFrutti/Interstice/blob/2e4a70615b353008dd5a7121234987f77d51fe43/coordination/c03/archeologue/C03_ARC_02_OBJECTIONS_PAR001.md). Dans `resources.json`, ARCH-002 a actuellement `availability=metadonnees_drive_localisees_corps_non_lu` : la relation inter-ressources n'est **pas** garantie par cette seule métadonnée.

### PAR-002 — décret et mai 1937

> En Catalogne, des collectivisations ont précédé le décret de collectivisation industrielle et commerciale du 24 octobre 1936, publié le 28. L'existence du texte normatif ne documente pas à elle seule son application uniforme. Les événements de mai 1937 exigent des sources attribuées aux organisations et aux autres acteurs concernés.

Cette formulation est candidate, **en attente de contrôle du DOGC et des corps CAT-001/CAT-006** ; elle ne doit pas donner l'impression qu'ils ont été consultés dans #161.

### PAR-005 — statut de sécurité

> Parcours documentaire interne, sans conseil juridique ou médical opérationnel : contrôle juridique défavorable à la publication pratique et revue médicale non achevée. Toute nouvelle version requiert un avis spécifique sur son texte exact, puis une décision humaine distincte.

## Travaux à ne PAS effectuer comme simples corrections de texte

- Ne pas effacer les divergences historiques (MP159/Frankel ; proportions d'affluence ; mai 1937) en remplaçant une date ou un nom sans original.
- Ne pas transférer une licence du texte ancien à la photographie moderne d'une archive ; vérifier crédits et conditions d'usage par institution/édition, sans copier les scans ici.
- Ne pas réorganiser les noms de ressources, supprimer d'ID ou fusionner automatiquement les paires FN-022/048 et FN-038/057.
- Ne pas transformer `publication_authorized:false` en `true`, modifier les quatre portes R6, publier une fiche médicale/juridique ou déclarer une transmission comme reçue.

## Vérification des références et dépendances

- `data/relations.json` blob `412336741a879b7faf0e800edd0589b5e415bdab`; `data/resources.json` blob `66957e1b223f05642dcd69479ac48d0394797802` ; `03_MATRICE_OBJECTIONS.md` blob `b0f964734edc38341e0f362e42c2c788cc7265f4`.
- `PAR-001.md` blob `19968ff668552eb7aef3e2f20385fcbd9f94b3f6`; `PAR-002.md` blob `32df157c81c317c46f1de798d4af0326bb5ebae5`; `PAR-003.md` blob `570172e8bf5ac6b9bce877ece04bc35def7cf85e` ; `PAR-004.md` blob `9526237f9a46fc24bf8e38b572258dadfe382f45` ; `PAR-005.md` blob `edc7b01e556c2420a0ef74f07a818ea148582edd` ; `PAR-006.md` blob `fce67c7190d16ef8da04d7d1dd2c70653a7ba77a` ; `PAR-007.md` blob `a7819953858dc019ef7083946e30f739a4ae6c2b`.
- **Prérequis et consultations** : C03-ANA-03 (graphes et schémas), C03-PEN-03 (comparaisons), C03-ARC-03/#162 (Commune), C03-CAT-03 (CAT), C03-HIST-04 (Marmite/biographies), C03-MED-03 (FN), C03-JUR-03 (PAR-005), C03-ZAP-03 (ZAP), C03-TECH-02 (URL/QA). Les consultations réciproques ne sont pas des autorisations de publication.

**Aucun visa automatique.**
