# INTERSTICE — C07-CENTRAL-LEC-02 — Réception éditoriale de la consolidation
**La Lectrice → La Relieuse · P0 · 9 novembre 2026 · 2 passes.**  
**Branche :** `work/c07-reunification-20261104` ; **PR :** #186. Candidat documentaire uniquement, non publié.  
**Référence centrale :** `coordination/work/c07/REFERENTIEL_CENTRAL_NOMENCLATURE_V1.md`, blob `31e2bb214156c03ec4080807dc08a31389945e0e`.

## Portée effective / dépendance DEV-02
La matrice initiale LEC-01 a été reprise via `coordination/work/c07/lectrice/C07_CENTRAL_LEC_01_LOT03_VERIFICATIONS_20261109.md` (blob `3c4255642963c48679d8fd1a64fee18ec30ebad9`) et C11 par la PR #191 (blob `53c6b9811cfaf39f00ffe0f61f67396e97b37555`). **Aucun livrable final explicitement identifiable comme DEV-02 n'a été retrouvé dans les chemins modifiés de #186 ni par recherche d'issues ciblée.** Ne pas inférer sa livraison d'un succès CI, du nom de la PR ou des contrôles précédents. La réception qui suit est une **contrelecture des fichiers statiques et du constructeur privé** ; les comportements réels sur le HEAD livré par DEV-02, la sécurité d'un hébergement privé et la réception navigateur ne sont pas certifiés ici.

## Passe 1 — Invariants des statuts constatés
| Objet | Fichier contrôlé / blob | État observé | Verdict |
|---|---|---|---|
| Index général | `coordination/work/c07/EDITORIAL_QUEUE.json` · `51b348cfd0f3be5339a309a6d41ee8391f793467` | 219 objets répartis **une fois** : 24 `existing`, 9 `held`, 38 lots (37×5 + 1×1), 0 doublon d'ID ; `publication_authorized:false` | **Conforme pour la classification**, ne vaut pas 219 fiches documentées |
| Lot Commune 01 | `LOT_COMMUNE_01.json` · `d91f58a52df90cbca139f7e5492c911607d157b0` | ASSO-008, ASSO-007, ARCH-002, ARCH-006, BIO-012 : `RETAINED_WITH_RESERVATIONS`, publication `PENDING` | **Conforme** |
| Lot Commune 02 | `LOT_COMMUNE_02.json` · `4386e5407461e063656664af6b2eb0437779d946` | ARCH-004, ARCH-005, ARCH-007, COL-003 retenus ; ARCH-003 `NOT_SELECTED_THIS_REVIEW` ; publication `PENDING` | **Conforme** |
| Parcours | `coordination/v2/work-c02-01/data/parcours.json` · `be242baf409d0715bc870af68c15f75ae4ae770a` | 7 statuts de contenu : PAR-001/002/006/007 partiels ; PAR-003/004 recevables sous réserves ; PAR-005 `bloque`, légal `bloque`; les 7 `publication_authorized:false` | **Conforme pour la version JSON contrôlée** |
| Libellés visibles | `assets/nav-01/parcours-status.mjs` · `ed3fdbd0b61defacf19eeeb721bba8ee679ca15e` | 7 libellés en préparation, dont PAR-005 « BLOQUÉ · contrôles juridique et sanitaire nécessaires » | **Conforme statiquement**, rendu / HEAD DEV-02 non reçu |
| Liens fiches | `assets/nav-01/step-resources.mjs` · `89fe447e8d7e523732d1da05d3876adc2e97603a` | Associations de métadonnées seulement ; `authorizedResourceLinks()` renvoie toujours `[]` | **Fermeture par défaut visible dans le code**, pas de test navigateur effectué |
| Relations | `coordination/v2/work-c02-01/data/relations.json` · `b59d03362798947ee7e31202b0466848bf5627e7` | 19 relations candidates ; zéro `publication_authorized:true` | **Conforme à #184** |
| Relecture privée | `scripts/build-editorial-review.mjs` · `21b0df807f576303dfb5448b94b035da8fe1d66b` | Contrôle lots ≤5, source SHA, sources HTTPS, réserves, audience `owner_private`, visa PENDING, empreinte de la décision liée au contenu | **Garde-fous présents dans le code** ; une validation par compilation n'est pas une preuve de licence, de sécurité réseau ni une signature humaine |
| Ressources C02 | `coordination/v2/work-c02-01/data/resources.json` · `66957e1b223f05642dcd69479ac48d0394797802` | Pour ARCH-002 et ARCH-007, `legacy_human_approval:ACCORD_EDITO_ZOUT` subsiste, en parallèle de `publication:non_autorisee` | **Risque de promotion par export hétérogène**, aucune promotion prouvée dans les fichiers d'affichage examinés. Traiter le champ historique comme éditorial et non comme publication |
| Archives / portes | `resources.json`, mêmes versions | Plusieurs objets `kind:archive` (ARCH-002/005/006/007) gardent `primary_door:encyclopedie`, nomenclature centrale privilégie Archives selon nature | **À réconcilier avec Anarchitecte**, ne pas changer en masse les IDs / portes ni considérer toute fiche archivistique mal classée |

**Dossiers tenus hors file normale :** BIO-019, BIO-021, FN-018, FN-022/048, FN-038/057, DROIT-001 et DROIT-002. **PAR-005 est bloqué séparément.** La file inclut la catégorie `held` pour les doublons suspects ; ce statut de retenue n'est pas une autorisation d'alias ou de suppression.

**Traçabilité :** #167 conserve 36 objections C02 (A–D) + 6 T ; C02 `objections.json` conserve 30 WORK ; #184 corrige REL-003 à REL-006 mais ne clôt pas les demandes de pièces primaires. Les identités BIO-019 et BIO-021 restent bloquées ; BIO-009/022 et CAT-001/006 demeurent réservés.

## Passe 2 — Premier lot de pré-examen (maximum trois ici)
**Verdict de seuil : 0 dossier satisfait tous les critères de `PRÊT_À_SOUMETTRE` au sens de la nomenclature V1.** Les trois entrées suivantes peuvent seulement être **transmises pour examen juridique/rédactionnel de périmètre**, sous réserve de récupérer les **corps privés exacts** et les mêmes empreintes :

| ID | SHA-256 du contenu éditorial retenu | Justificatifs effectivement identifiés | Motif de pré-examen / corrections minimales |
|---|---|---|---|
| ARCH-006 | `41473bbfb4ca104537860f6a22f5871eba91dca91b737650b6508a63e8b8b93c` | BnF `https://catalogue.bnf.fr/ark:/12148/cb328445424` : 4 numéros 10–24/05/1871, fonds Arsenal ; REL-003 (type `complement_documentaire`) | Confronter le corps privé à SHA de la décision ; qualifier « rapport au Club » comme documentaire et attribuer l'étude secondaire ; ne pas recopier les fac-similés avant examen des droits ; obtenir visa éditorial/documentaire sur version exacte |
| ARCH-007 | `7bff31fc9bd6a8d7e446f7f4e54bc7d8972cd44074a0427f0743c4eb990f0be8` | Décret 16 avril 1871 : texte normatif distinct du projet Louvre 03/05 et des registres d'application. Dossier Drive signalé comme lu ; relation REL-001 `comparaison` | Comparer reproduction du texte, citation et provenance à la source originale ; corriger toute affirmation d'application effective ; droit de reproduire et visa à obtenir sur version exacte |
| ARCH-005 | `9267a7598f90aaf5dc66767d8831a5c501ae1e78b14bc0ac829c58e8a57ad404` | Michèle Audin, transcription du projet 03/05/1871 `https://macommunedeparis.com/2023/05/31/3-mai-1871-le-reglement-des-ateliers-du-louvre-suite/` ; contradiction BHVP MP159/Frankel | Conserver « projet de règlement soumis à approbation » et journée prévue de 10 heures ; résoudre ou afficher MP159/Frankel ; provenance et droits des textes/images ; revue indépendante puis version exacte |

**Ces SHA sont les empreintes déclarées du contenu éditorial sélectionné, issues des manifestes privés du Site, et non des empreintes nouvellement calculées sur ces corps privés.** Les blobs du présent dépôt GitHub sont différents de ces empreintes. Le rapport ne prétend pas que ces textes privés ont été recollationnés aujourd'hui.

### Corrections minimales avant de pouvoir écrire PRÊT_À_SOUMETTRE
1. **DEV-02** : livrer SHA exact du HEAD, résultat de la réception technique et preuve que les statuts exportés/affichés correspondent au registre actuel ; tant que cela manque, réception éditoriale d'interface = **CONDITIONNELLE**.
2. **Corps/empreintes** : récupérer par voie autorisée les trois textes privés correspondant aux SHA-256 retenus ; rejeter tout mismatch, révision différente ou suppression de réserves.
3. **Titres, catégories, portes** : résoudre la différence entre `kind:archive` et `primary_door:encyclopedie` dans les **vues** du référentiel, sans migration automatique et sans présumer que l'une ou l'autre porte invalide les droits.
4. **Cotes, auteurs et portée des preuves** : ARCH-006 BnF cb328445424, ARCH-007 décret du 16 avril, ARCH-005 transcription du règlement 3 mai ; séparer consultation de notice, transcription, source primaire et fonctionnement réel.
5. **Droits et confidentialité** : réexamen spécialisé du texte et de toute reproduction/fac-similé/image, du stockage privé, des sources et des crédits ; une URL librement consultable n'implique pas une licence.
6. **Visas indépendants** : relecture documentaire argumentée + rapport juridique de La Juriste + choix final explicite de Zout sur la version exacte, **sans** déduire un visa des champs historiques `ACCORD_EDITO_ZOUT`.

## Décision finale pour La Relieuse
- **Réception statique des garde-fous : favorable sous réserves**, dans les fichiers examinés.
- **Réception du HEAD DEV-02 : non attestée**, donc pas de conclusion de conformité technique finale.
- **Lots prêts à soumettre pour publication : zéro.**
- **Pré-lot pour examen préalable : trois candidats**, ARCH-006, ARCH-007, ARCH-005, sans ouverture publique ni attribution d'un visa.
- **Bloqués inchangés :** PAR-005 / DROIT-001-002, BIO-019/021, FN-018 et alias candidats tant que droits et versions ne sont pas vérifiés.
- **Aucune altération de fichiers techniques ou de sources historiques ; aucun merge, déploiement ou publication.**
