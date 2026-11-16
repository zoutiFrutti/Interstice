# INTERSTICE — C07-ANA-01B · Contrat technique final du référentiel central
**L'Anarchitecte → La Relieuse / La Développeuse · P0 · 9 novembre 2026 · 2 passes ciblées**
**Branche : `work/c07-reunification-20261104` · PR #186 · CANDIDAT INTERNE · CONTRAT D'IMPLÉMENTATION DEV-03, PAS UNE RÉCEPTION DE DEV-03.**

## 0. Pièces effectivement confrontées et portée
- `coordination/work/c07/REFERENTIEL_CENTRAL_NOMENCLATURE_V1.md`, blob `31e2bb214156c03ec4080807dc08a31389945e0e`.
- `coordination/work/c07/mediatheque/C07_MED_01B_MATRICE_219.md`, blob `dc695cecf288791ff71203415329df023b58c556`.
- `coordination/c03/juriste/C07_JUR_01B_CLOTURE_20261109.md`, blob `787fb845db3582c43678bd0925a479700474475f`.
- Sources structurelles C02 : `resources.json` blob `66957e1b223f05642dcd69479ac48d0394797802` ; `sources.json` blob `02d709a3e2ae4db764f894a87e6a25a769199143` ; `relations.json` blob `b59d03362798947ee7e31202b0466848bf5627e7` ; `parcours.json` blob `be242baf409d0715bc870af68c15f75ae4ae770a` ; `objections.json` blob `a91b1c0092b252a0e7c2f8eebe67f555dd1d679d`.
- Contrôles ANA-02 déjà effectués : 219 IDs uniques, 100 sources, 19 relations, 30 objections WORK, 7 Parcours/29 étapes, références croisées structurellement résolues ; aucune confirmation nouvelle de lecture des corps privés. Ne pas reprendre l'audit général.

**Constats à ne pas confondre :** MED-01B : 190/219 `canonical_url` absentes (185 références internes candidates, 1 lien manquant, 4 lignes en conflit de doublon), mais seules 168 fiches n'ont **ni** `canonical_url` **ni** `dossier_locator` dans le JSON C02 ; les 22 autres ont un localisateur de dossier, dont des URLs de Google Docs. Les 29 `canonical_url` existantes sont 24 `wiki-*.html` et 5 autres chemins internes. « Source candidate » ≠ lecture ni vérification de l'original. JUR-01B : 217 `validation.legal=non_examine`, deux `bloque` (`DROIT-001/002`), 219 `publication=non_autorisee`, y compris ARCH-005/006/007, dont l'avis n'est qu'un repérage ciblé et **pas** `JURIDIQUE_EXAMINE`. Les SHA des anciens lots ne sont pas des empreintes recalculées des corps Drive.

## 1. Passe 1/2 : arbitrages définitifs du schéma logique

### 1.1 Source de vérité, absence de duplication
- **Identité primaire :** `resource.id` existant dans `coordination/v2/work-c02-01/data/resources.json`, sans nouvel identifiant dérivé des portes, des chemins, du média, d'une traduction ou d'une édition. Les 24 noms `wiki-*.html` sont déjà des IDs canoniques : **ne jamais créer automatiquement 24 `WIKI-...`**.
- **Sources :** `sources.json` pour les IDs et traces de provenance ; les originaux Drive/Library/archives restent dans leurs espaces respectifs. `MED-01B` est un **overlay de rapprochement non autoritaire** ; la matrice juridique est un overlay d'avis limité. Aucune réécriture de `resources.json` ni de `sources.json` lors de la construction.
- **Relations :** `relations.json` conserve les 19 IDs et types originaux ; `objections.json` garde les 30 WORK, **sans** écraser les 36 objections thématiques + 6 transversales situées dans `coordination/c03/lectrice/MATRICE_35_OBJECTIONS.md`. Les objections d'origines différentes gardent leur espace de noms et leur chemin de preuve.
- **Parcours :** `parcours.json` reste l'autorité des 7 IDs/29 étapes. `PAR-005` reste bloqué ; les chemins d'étape sont des liens de navigation, pas des relations historiques.
- **Traitement des données :** une projection **reproductible, non migratoire**, issue d'un instantané Git épinglé par SHA. Ne jamais répliquer les corps privés, ne jamais créer une seconde base éditable. Toute modification des originaux dépend d'une mission distincte.

### 1.2 Contrat d'enregistrement `MasterRecord` (projection INTERNE, sans données privées nouvelles en GitHub)
Les clés ci-dessous sont stables et obligatoires ; les valeurs inconnues sont `null` / `unknown`, **jamais** déduites de l'identifiant. `basis_commit` est le commit qui contient les entrées lues ; `evidence_ref` désigne la pièce réellement examinée. Une empreinte de registre ou du dépôt **ne peut pas** être copiée dans `content_version`.

```json
{
  "schema_version": "c07-master-v1",
  "basis_commit": "<40-hex Git commit>",
  "id": "ARCH-005",
  "kind": "archive",
  "title": "<titre du C02>",
  "identity": {
    "id_origin": "identifiant_existant",
    "aliases": [],
    "duplicate_candidates": [],
    "legacy_primary_door": "encyclopedie"
  },
  "source_refs": ["drive:ARCH-005"],
  "canonical_locator": {
    "type": "drive|github|library|web|unresolved",
    "status": "candidate|verified|missing|conflict",
    "private_token": null,
    "public_url": null,
    "evidence_ref": null,
    "checked_at": null
  },
  "content_version": {
    "sha256": null,
    "git_blob_sha": null,
    "version_scope": "body|edition|notice|unknown",
    "verified_against_original": false
  },
  "provenance": {
    "source_read": false,
    "source_read_at": null,
    "source_kind": "primary|secondary|index|unverified",
    "assertion_evidence_refs": []
  },
  "review": {
    "documentary_status": "sous_reserves",
    "editorial_status": "candidate",
    "legal_status": "non_examine",
    "legal_scope": [],
    "rights_evidence": [],
    "reviewer": null,
    "reviewed_at": null,
    "blocking_objections": [],
    "publication": {
      "visa": "non_autorisee",
      "authorized": false,
      "approved_id": null,
      "approved_content_sha256": null,
      "approver": null,
      "approved_at": null
    }
  },
  "privacy": {
    "class": "unclassified_restricted",
    "public_metadata_allowed": false,
    "location_release": false,
    "image_release": false,
    "text_release": false
  },
  "relationships": [],
  "view_hints": {
    "primary": "encyclopedie",
    "archive_faceted": true,
    "atlas_faceted": false
  },
  "blocking": true
}
```

Ce JSON est un **exemple de structure**, pas la fiche ARCH-005 effectivement réconciliée. Les valeurs textuelles de l'exemple ne constituent aucun nouveau visa ni contrôle de source. L'implémentation doit produire `unknown` lorsqu'une valeur métier n'est pas établie et consigner `evidence_ref` pour tout enrichissement ; une valeur positive ne se déduit jamais du type `ARCH` ou d'un mot-clé.

**Règles de validation :**
1. `id` non vide, unique, conservé tel quel, y compris Unicode `ÉCO-001` et IDs `wiki-*.html`, `legacy:...`, `page:...`. Ne pas « normaliser » en supprimant accents, ponctuation ou préfixes. Ordre trié par point de code déterministe.
2. `aliases` = alias **explicitement confirmés dans C02 seulement**, aujourd'hui `ECO-19 → FN-024`, `ECO-001 → ÉCO-001`, `tis-c8-velo → TIS-001-001`. Index des alias bijectif ; collisions ou cycle = erreur bloquante. Les aliases de navigation `carte`/`wiki` ne sont **pas** des alias de fiche.
3. `FN-022/FN-048` et `FN-038/FN-057` : deux couples de `duplicate_candidates`, aucun alias opérationnel ni suppression tant que rapprochement édition/traduction n'est pas arbitré. `FN-018` : `canonical_locator.status=missing` ou `candidate` non résolu, jamais association à FN-017.
4. `source_refs` uniquement si ID présent dans `sources.json` ; conserver les références non résolues physiquement comme `candidate`. `canonical_locator` vient d'une seule proposition MED-01B avec `type/status/evidence_ref`, **sans assimiler** locateur Drive à URL publique ; conflit MED = `status=conflict`. Absence = `unresolved`. Chemin GitHub relatif valide pour les 24 articles.
5. `content_version.sha256` uniquement après lecture/collation du **corps exact** et fixation du périmètre `version_scope` ; SHA Git blob uniquement pour une copie Git observée ; champ `basis_commit` n'est jamais la SHA éditoriale. En cas de divergence ⇒ `blocking=true`. Une évolution du texte invalide le visa lié à l'ancienne empreinte.
6. `review.documentary_status`, `editorial_status`, `legal_status`, `publication.visa`, `privacy.class` sont **indépendants**. Le champ historique `legacy_human_approval=ACCORD_EDITO_ZOUT` ne remplit jamais `publication.approver`. Une décision `RETAINED_WITH_RESERVATIONS` ou `PENDING` laisse `authorized=false`.
7. Toute objection C02/WORK reste visible en projection interne (ID + référence et portée) ; une objection bloquante maintient `blocking=true`. Ne jamais clôturer par absence de relation ou par succès CI.
8. Relations : extrémités résolues par IDs canoniques, type identique à C02, `proof`, `source_refs`, `state` conservés ; relation `comparaison` = lien éditorial, jamais coopération. R0–R3 territoriaux sont **un axe séparé** des types de graphe, pas un renommage de `WORK-REL-...`. `R3` Interstice reste 0 tant qu'aucun acte explicite et vérifié n'existe.

### 1.3 Confidentialité, droits, statuts : refus par défaut
Classes : `unclassified_restricted` (défaut pour les 219 fiches sans `privacy_class`), `internal_reference` (inventaire minimal sans données sensibles), `restricted` (données personnelles/locateurs privés), `sensitive` (identité vulnérable, lieu à risque, oral history, ASQ, éléments non réutilisables), `public_approved` (nécessite dossier et visa complets). Une branche **publique** de GitHub n'est jamais un stockage privé : ne pas y déposer de nouveau contenu restreint, token, URL privée détaillée, audio, scan, coordonnées précises ou données personnelles. `private_token` reste toujours `null` dans les artefacts GitHub ; les locateurs originaux éventuellement déjà présents dans C02 sont traités comme source **non exportable** et un risque existant à inventorier, pas à recopier dans une projection nouvelle.

**Filtre public en refus implicite :** une fiche n'est éligible à une **nouvelle** sortie publique que si `privacy.class=public_approved`, `public_metadata_allowed=true`, `blocking=false`, `publication.authorized=true`, `approved_id=id`, `approved_content_sha256=content_version.sha256` non nul et vérifié, `legal_status`/`legal_scope` et droits de chaque support adéquats, revue humaine attribuée et datée. Publication de notice, texte, traduction, image et position géographique sont **des permissions différentes** : `text_release`, `image_release`, `location_release`. Un contenu déjà présent en R6 conserve son état historique sans obtenir un nouveau visa par cette projection ; **aucune libération automatique** de la file C02/DEV-03.

**Réduction des surfaces de fuite :** ne pas sérialiser l'objet `MasterRecord` entier dans le site ; produire `PublicCard` par **liste positive** limitée à `id`, `title`, `kind`, `door`, `safe_public_excerpt`, `approved_public_url`, `approved_assertion_summary` et `non_sensitive_status`, uniquement après autorisation sur version exacte. Exclure `source_refs` et locateurs internes, objets d'objection, SHA d'échange privés, commentaires, dates de traitement sensibles, coordonnées, identités de tiers et contexte de modération. Un lien HTTPS n'est pas à lui seul autorisé. Pour les fiches non autorisées : **aucune carte publique nouvelle**, pas de « titre sensible » en remplacement ; seuls les textes R6 déjà existants restent sur leur circuit historique, sans nouveau déploiement.

**JUR-01B ciblé :** ARCH-005/006/007 ont `legal_status=non_examine` dans le contrat maître ; l'avis `JURIDIQUE_REPERAGE_CIBLE` se conserve comme `evidence_ref` externe, **pas** comme `JURIDIQUE_EXAMINE` ni autorisation de scans. Séparer original XIXe, transcription moderne, photographie, édition et traduction. `PAR-005` / `DROIT-001/002` bloqués ; `BIO-019/021`, `FN-018` et les deux conflits FN restent bloqués ou réservés. Les neuf fiches Commune sélectionnées avec réserves conservent `publication_visa=PENDING`. Aucun visa dérivé des trois archives vers ASSO/BIO/COL.

## 2. Passe 2/2 : interface d'implémentation DEV-03

### 2.1 Entrées immuables (chemins existants, lecture seule)
- `coordination/v2/work-c02-01/data/{resources,sources,relations,objections,parcours,navigation}.json`.
- `coordination/work/c07/mediatheque/C07_MED_01B_MATRICE_219.md` : rapprochement MED, non exécution de décisions.
- `coordination/c03/juriste/C07_JUR_01B_CLOTURE_20261109.md` : matrice d'avis et verrous.
- `coordination/work/c07/tisseuse/C07_CENTRAL_TIS_01_MATRICE_ATLAS.md` et `.../tisseuse/C07_CENTRAL_TIS_02_PREUVES_CANDIDATES.json` : assertions candidates, **non** sources directes de géolocalisation.
- `coordination/work/c07/LOT_COMMUNE_{01,02}.json`, `coordination/work/c07/EDITORIAL_QUEUE.json`, `coordination/c03/lectrice/MATRICE_35_OBJECTIONS.md` : conservation des décisions et objections.
- `assets/nav-01/{graph-data,step-resources,parcours-status,explorer}.mjs`, `explorer.html` et `atlas.html` : **interfaces candidates**, non sources de validation documentaire.

### 2.2 Nouveaux fichiers proposés pour la Développeuse (ne sont PAS créés par ANA-01B)
- `coordination/work/c07/referentiel-master/schema/master-v1.schema.json` : JSON Schema pour `MasterRecord` et `PublicCard` avec `additionalProperties:false` sur la projection publique.
- `coordination/work/c07/referentiel-master/lib/{load,validate,project,redact,route}.mjs` : fonctions pures ; `loadSnapshot(root, sha)`, `validateInput(bundle)`, `buildMaster(bundle, medOverlay, jurOverlay, tisseuseOverlay, sha)`, `buildPrivateReviewIndex(records)`, `buildPublicCards(records, approvals)` et `mapViewHints(record)`. La lecture des fichiers se limite à l'espace de travail autorisé ; **pas** de chargement des originaux privés par le constructeur.
- `coordination/work/c07/referentiel-master/tests/{contract,privacy,projection,navigation,rollback}.test.mjs` : nouveaux tests, aucun allègement des anciens.
- `coordination/work/c07/referentiel-master/artifacts/{master.manifest.json,summary.json,public.cards.json}` : **fichiers générés à l'exécution, non committés par défaut**. Ne persister dans Git que manifest/summary assainis ; `public.cards.json` vaut `[]` sur la base C02 actuelle. Les index internes complets restent hors artefacts de site et hors dépôt public si quelque champ non public subsiste.
- `scripts/build-c07-master.mjs` : **proposition de point d'entrée DEV-03**, exécution locale et CI isolée avec `--ref=<sha> --dry-run --output=<temporary_dir>` ; ne créer aucun changement sur `main` ni Supabase. Aucune écriture dans `assets/nav-01/*` ou les pages existantes dans ce lot sans autorisation/revue distincte.

**Algorithme déterministe obligatoire :** charger les six JSON à SHA fixé ; indexer IDs et alias ; contrôler références et collisions ; enrichir par **ID exact**, jamais par simple titre ; extraire MED/JUR comme tables de décisions explicitement marquées `candidate`, sans parser silencieusement les prose Markdown pour donner des visas ; conserver données originales dans `legacy` au besoin **hors sortie publique** ; dériver statuts refusés par défaut ; produire le même SHA-256 des JSON canoniques pour deux runs identiques (tri des clefs et IDs, pas de date courante ni ordre d'itération aléatoire) ; enregistrer compteurs et liste d'anomalies, **pas** les corps privés. Si matrice non parsable, divergences ou ambiguïtés : arrêt `fail-closed`, aucune promotion. MED-01B doit être consommée via un mapping manuel auditable `id → statut/candidat/evidence_ref` relu, jamais par regex fragile sans rapport de couverture à 219/219.

### 2.3 Projection des portes et Atlas, sans renommer les sources
Conserver `legacy_primary_door` tel quel ; produire une destination **de vue**, et non une migration :
- `encyclopedie` → `encyclopedie`.
- `mediatheque` → `mediatheque`.
- `carte` → `encyclopedie` avec `atlas_faceted=true` ; 21 valeurs historiques restent `carte` dans C02. Le libellé Atlas reste accessible depuis Encyclopédie, **pas de cinquième porte**.
- `entraide` → `faire_ensemble` (ID technique de navigation existant `entraide` conservé).
- **Archives des communs** = facette par `kind=archive` / source historique explicitement qualifiée, **pas** réaffectation forcée de `primary_door=encyclopedie` des ARCH. Renvois multi-vues avec un seul ID source. Pour toute facette nouvelle, `visibility` et visa s'appliquent exactement comme à la porte principale.
- Les 7 `PAR-001..007` restent traversées secondaires ; seules références candidates, `authorizedResourceLinks()===[]` tant qu'aucun manifeste humain par ID+SHA+support n'est approuvé. `PAR-005` demeure `BLOQUÉ`.
- Atlas : `TIS` et `EXP` restent notices documentaires sans épingle si position `null`/absente ; `coordinates=null` pour les 20 TIS et champ absent pour 4 EXP au registre. Les preuves ponctuelles 2026, les R0–R2 et les localités générales **ne prouvent** ni ouverture actuelle, ni partenariat R3, ni lieu précis. Les 2 cartes de #41/#193 sont des **simulations** ; ne jamais importer leurs fixtures comme initiatives réelles. Les liens historiques `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html`, fragments/retours doivent rester testables.
- Toute rubrique affichée dans `explorer.html` est une **surface d'interface** : aucune entrée indexée n'est rendue publique à partir du maître sans `buildPublicCards` conforme. Maintenir l'accès existant R6 séparé de l'ouverture de nouvelles fiches.

### 2.4 Critères de réception automatisés, puis humains
| Test cible | Assertion / seuil | Défaut attendu |
|---|---|---|
| `contract` | 219 IDs uniques ; 100 sources ; 19 relations ; 30 objections WORK ; 7 Parcours/29 étapes ; 71 FN ; 24 `wiki-*.html` | Blocage si divergence inexpliquée, **pas** ajout de doublon |
| `alias` | Trois alias C02 conservés ; collisions=0 ; FN-022/048 et FN-038/057 **non fusionnés** | `fail-closed` |
| `sources` | 219 lignes MED rapprochées ; 190 URL absentes marquées ; 185/1/4 justifiés ; tous `source_refs` syntaxiquement résolus | Aucune URL inventée ; `missing` / `conflict` |
| `versions` | `content_version.sha256` nul si corps non recollationné ; tout SHA de document vs texte vs support distingué ; visas antérieurs non hérités | Refuser visa si SHA ou support divergent |
| `avis` | 217 légaux non examinés, 2 bloqués, 219 publications refusées ; ARCH-005/006/007 `repérage` seulement ; PAR-005 bloqué | Aucun statut promu par agrégation |
| `public` | `buildPublicCards` retourne `[]` sur l'état présent ; sortie ne contient aucune URL Drive/Library interne, aucun `source_ref`, aucune donnée de lieu sensible | Échec si fuite, même sans lien UI |
| `atlas` | 21 anciennes valeurs `carte` conservées ; aucune cinquième porte ; 20 TIS null + 4 EXP sans coordonnées ; 0 R3 ; simulations exclues | 0 marqueur géolocalisé réel non validé |
| `navigation` | 4 portes, 7 Parcours, PAR-005 bloqué, fragments, retours, sans-JS, clavier, zoom, 320/390/1280 px | Suite NAV/R6 existante obligatoire |
| `build-site` **P0** | Construire Jekyll **comme Pages** ; inspecter _site intégral, pas seulement les liens ; **zéro** fichier `coordination/**`, `docs/**` interne, `data/**` privé, manifests de travail ou URLs privées exposés | Refuser toute fusion si export interne ; un Jekyll vert ne suffit pas |
| `rollback` | Empreintes de 6 JSON sources et du `main` conservées, artefacts rejetables, ancien site/route conservés, test de restauration sur environnement isolé | Revenir au commit avant raccordement, pas d'édition des sources |
| `human` | Tests physiques Android/iPad + TalkBack/VoiceOver quand disponibles, revue Graphiste/Lectrice/Juriste et autorisation distincte Zout par ID + SHA | Aucune promotion via CI |

**Important P0 :** une réception ANA-02 a constaté, dans les logs d'un build Jekyll de la PR #186, la génération de nombreuses pages `_site/coordination/...`. Ce constat ne démontre pas leur déploiement, mais **interdit** de considérer le site généré comme cloisonné. La future Développeuse doit établir une liste positive de fichiers publiables / mécanisme d'exclusion vérifié par inspection de l'arbre complet. Les tests de site ne doivent pas simplement charger la page d'accueil.

**Exécution immédiate minimale par DEV-03 :** contrat et schéma + projection locale sur JSON épinglés ; rapport de 219 lignes et comptages sans corps privés ; test de refus public ; test de génération Jekyll et surfaces de fuite ; aucune migration ni activation. Après cela seulement, comparaison avec les interfaces et tests visuels, toujours sans fusion.

### 2.5 Retour arrière vérifiable
1. Capturer le SHA du `HEAD` de la branche, le SHA de `main`, les blobs de chaque source C02 et la liste des fichiers écrits par DEV-03 ; conserver le précédent artefact de preview et son manifeste de fichiers.
2. Construire les sorties en dossier temporaire neuf, valider hash et conformité, **sans** écraser `_site` public ou les sources. Aucune mutation Supabase, Drive ou Jekyll sur `main`.
3. Simuler un échec (alias ambigu, avis absent, `privacy.class` inconnue, contenu modifié après visa, source privée, fuite Jekyll) : exit non nul, `public.cards=[]`, ancien artefact inchangé.
4. Rejeter simplement les artefacts temporaires ; en cas d'intégration candidate ultérieure, retour au commit Git antérieur **sans force-push ni suppression de preuves**, puis relancer les suites R6/NAV/C02 et contrôle de diff `main`. La restauration **n'est pas déclarée testée** avant preuve d'exécution.

## 3. Blocages et décision de transmission
**P0 avant réception DEV-03 :** (i) confidentialité des 219 objets non catégorisée dans C02 et URLs Drive déjà présentes ; (ii) contrôle du générateur Pages/Jekyll et absence de fuite ; (iii) source MED-01B candidat, pas de validation juridique des 217 fiches ; (iv) livrable technique DEV-03 à produire et tester au HEAD exact.

**P1 :** FN-018 source manquante ; deux paires FN conflits à arbitrer, sans suppression ; 168 entrées sans URL ni localisateur dans C02 ; corps Drive/Library et droits non collationnés ; ARCH-005/006/007 sans scans et visas ; divergences de localisation TIS ; versions des reproductions ; accès physiques/mobile/lecteur d'écran non reçus.

**Avis architectural : `CONTRAT PRÊT POUR IMPLÉMENTATION CANDIDATE DEV-03`**, sous réserve de la revue de La Relieuse ; **réception technique, juridique, éditoriale et publication NON ACQUISES**. Ce document n'attribue aucune autorisation de fusion, déploiement, diffusion, migration, activation ou traitement de données personnelles.