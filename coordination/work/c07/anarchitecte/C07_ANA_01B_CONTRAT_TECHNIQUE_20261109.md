# INTERSTICE — C07-ANA-01B · Contrat technique final de projection du référentiel central

**L'Anarchitecte → La Relieuse / La Développeuse (DEV-03) · 09/11/2026 · P0 · 2 passes ciblées**  
**Statut : CONTRAT CANDIDAT LIVRÉ, PRÊT POUR IMPLÉMENTATION INTERNE ; PAS UN VISA DE PUBLICATION.**  
**Branche :** work/c07-reunification-20261104 ; **PR :** #186 (brouillon).  
**HEAD de lecture et vérification avant dépôt :** 6461e73fa9be2a50e5f9a7716fff0f6f2048cc56 ; **base main :** df73c5dabf47a0b73d2b55f0346c7006d485dd98.  
**Règle :** RELIER > COMPLÉTER > CRÉER ; une identité documentaire, plusieurs vues ; aucune copie des corps privés ni autorisation implicite.

## 0. Sources exactes de ce contrat et périmètre

1. Nomenclature V1 : coordination/work/c07/REFERENTIEL_CENTRAL_NOMENCLATURE_V1.md ; blob GitHub **31e2bb214156c03ec4080807dc08a31389945e0e**.
2. MED-01B : coordination/work/c07/mediatheque/C07_MED_01B_MATRICE_219.md ; blob **dc695cecf288791ff71203415329df023b58c556** ; matrice de revue de 219 objets, non base de substitution.
3. JUR-01B : coordination/c03/juriste/C07_JUR_01B_CLOTURE_20261109.md ; blob **787fb845db3582c43678bd0925a479700474475f** ; avis juridique ciblé, pas examen de 219 objets.
4. Données C02 existantes : resources.json **66957e1b223f05642dcd69479ac48d0394797802**, sources.json **02d709a3e2ae4db764f894a87e6a25a769199143**, relations.json **b59d03362798947ee7e31202b0466848bf5627e7**, objections.json **a91b1c0092b252a0e7c2f8eebe67f555dd1d679d**, parcours.json **be242baf409d0715bc870af68c15f75ae4ae770a**, navigation.json **c154891466df8465e06bf3dd04436c94118ecff4** ; tous dans coordination/v2/work-c02-01/data/.
5. Contrat de contrôle existant : coordination/v2/work-c02-01/lib/catalogue.mjs ; blob **1b161e07e5e082ed75fc0ac8b2921cb8686e8c1b** ; et tests/contract.test.mjs dans le même dossier ; à réutiliser, non contourner.
6. Complément territorial facultatif, non importable tel quel : coordination/work/c07/tisseuse/C07_CENTRAL_TIS_02_PREUVES_CANDIDATES.json ; blob **b23544397b2b1d9bdab9c1beb1024871faf276c2**. Les autres objections et décisions C02/C03 restent pertinentes hors de ces six JSON.

Contrôles ANA-02 précédemment acquis, non refaits : 219 IDs distincts, 100 sources, 19 relations candidates, 30 objections WORK, 7 Parcours / 29 étapes ; 71 FN et 24 fichiers wiki-*.html existants ; toutes les références internes examinées se résolvent dans leurs registres. Cette conformité structurelle n'atteste pas la consultation des originaux, le droit de reproduction ou l'absence de données privées.

## Passe 1/2 — Arbitrages normatifs MED × JUR × V1

### 1.1 Sources, identités et divergences

- **C02 est le registre d'identité candidat**, jamais une autorité automatique de publication. Conserver exactement les 219 IDs et les 24 IDs de pages au format historique wiki-*.html ; ne PAS fabriquer 24 IDs WIKI- supplémentaires. Les 100 entrées sources et 19 relations restent des registres liés, pas dupliqués en fiches.
- MED-01B distingue **29 URL/chemins canoniques candidats**, **190 cas sans URL canonique** : **185 références internes candidates**, **FN-018 : une source/lien à retrouver**, **quatre entrées concernées par deux doublons possibles**. Ce classement de provenance n'est ni un bilan de disponibilité des corps, ni une licence. Dans C02, 51 fiches ont canonical_url OU dossier_locator ; cette autre mesure ne doit pas être confondue avec les 29 de MED. Source interne candidate ≠ source vérifiée.
- Alias historiquement résolus et à conserver : **ECO-19 → FN-024**, **ECO-001 → ÉCO-001**, **tis-c8-velo → TIS-001-001**. Les paires **FN-022/FN-048** et **FN-038/FN-057** sont des rapprochements **INDÉTERMINÉS**, ni alias validés ni doublons à supprimer. FN-018 reste manquant. Ne jamais rapprocher FN-017 et FN-018 sans preuve.
- Les sources Drive, Library et les chemins GitHub sont de types différents. URL de document Drive identifiée ≠ accès ouvert, corps lu, consentement ou droit de republication. Un code de révision GitHub présent dans une ligne MED n'est pas automatiquement l'empreinte du corps de l'objet.
- JUR-01B impose **deux droits séparés** (œuvre/texte ancien ET reproduction moderne, traduction, photographie ou édition) et la distinction entre reconnaissance historique, exploitation juridique et preuve d'application. Pour ARCH-005/006/007, le repérage est **ciblé**, JURIDIQUE_EXAMINÉ n'est PAS acquis ; le visa des deux lots Commune reste PENDING.
- Les 217 ressources C02 marquées legal=non_examine ne sont pas 217 avis juridiques. DROIT-001/002 sont legal=bloque, PAR-005 reste bloqué ; BIO-019/021, FN-018 et les paires FN litigieuses restent retenues. Une décision éditoriale historique telle que ACCORD_EDITO_ZOUT ne vaut jamais publication.
- Une branche GitHub **publique n'est pas privée**. Les localisateurs Drive présents dans C02 (22 URLs Google Docs relevées par la Juriste) et les objections sensibles ne doivent jamais être copiés dans un JSON exporté publiquement. Le risque relevé par ANA-02 sur l'inclusion de documents coordination/ dans la construction Jekyll reste P0, même si les workflows CI sont verts.
- Les 20 TIS ont des coordonnées nulles et les 4 EXP n'ont pas ce champ ; **zéro géométrie publiable et zéro R3 Interstice vérifié**. R1 est comparaison éditoriale, R2 relation déclarée entre tiers à une date, jamais partenariat avec Interstice. EXP-003 demeure INDETERMINE_HISTORIQUE, ID non réattribuable.

### 1.2 Architecture retenue : source de vérité et projections

**Aucun nouveau stockage canonique à créer.** Construire une **projection déterministe en mémoire** à partir des originaux existants, sous HEAD explicitement épinglé. La projection sert au rapprochement et à l'inspection interne ; elle ne modifie ni sources, ni statuts historiques, ni base Supabase. Chaque observation supplémentaire porte sa provenance d'atelier, son blob et son niveau de certitude ; elle ne remplace pas le champ source.

Entrées, avec ordre de priorité :
1. C02 resources + sources + relations + objections + parcours + navigation : identités, références et valeurs historiques littérales.
2. MED-01B : qualification candidate de localisateur, édition, doublon, manque et droits non vérifiés, **sans réécrire C02**.
3. JUR-01B : restrictions juridiques par type et ARCH-005/006/007, appliquées en garde-fou **sans promotion de statut**.
4. TIS-01/02 et avis Lectrice : enrichissements facultatifs, **non activés** sans table d'association et revue ; données géographiques nulles par défaut.
5. Lots Commune : décisions de sélection et empreintes déclarées, séparées des versions binaires réellement contrôlées.

Les rapports Markdown ne doivent pas être parsés comme base canonique en production. Pour DEV-03 : écrire une **table d'overlay de revue vérifiable** par ID contenant uniquement les distinctions de MED/JUR nécessaires, dont le SHA des deux rapports, et vérifier que l'ensemble des 219 lignes MED est unique et correspond aux 219 IDs C02. Aucune règle de rapprochement à partir du seul titre. **Toute divergence d'effectif, d'ID ou de version de source fait échouer le build candidat.**

### 1.3 Schéma maître de travail (une fiche = une identité)

Schéma de projection **c07-master-projection/1** ; champs requis, avec null et états inconnus explicites (jamais valeurs inventées) :

~~~json
{
  "schema_version": "c07-master-projection/1",
  "id": "ARCH-005",
  "title": "titre du registre C02",
  "kind": "archive",
  "identity_origin": "id_existant_C02",
  "legacy_primary_door": "encyclopedie",
  "aliases": [],
  "duplicate_candidates": [],
  "source_refs": [],
  "canonical_source": {
    "kind": "drive|repo|library|relative_html|missing",
    "reference_id": null,
    "locator_internal": null,
    "candidate_status": "candidate|verified|missing|conflict",
    "body_read": false,
    "evidence_blob_sha": null
  },
  "versions": {
    "registry_blob_sha": "66957e1b223f05642dcd69479ac48d0394797802",
    "source_blob_sha": null,
    "selected_source_sha256_claimed": null,
    "content_sha256_verified": null,
    "legal_review_content_sha256": null,
    "last_checked_at": null
  },
  "status": {
    "technical": "candidate",
    "documentary": "a_reconcilier",
    "editorial": "non_vise",
    "legal": "non_examine",
    "blocked": false
  },
  "rights": {
    "historical_work": "unknown",
    "modern_reproduction": "unknown",
    "translation": "unknown",
    "images": "unknown",
    "legal_scope": null,
    "rights_evidence_refs": []
  },
  "privacy": {
    "class": "UNREVIEWED",
    "public_metadata_allowed": false,
    "sensitive_location": null,
    "review_evidence": null
  },
  "relations_ids": [],
  "objection_ids": [],
  "legacy_objections_ref": null,
  "presentation": {
    "door": "encyclopedie",
    "facets": [],
    "atlas_geometry": null,
    "activity_now_verified": false,
    "interstice_partnership_verified": false
  },
  "visas": {
    "documentary": {"state": "pending", "actor": null, "at": null, "content_sha256": null},
    "editorial": {"state": "pending", "actor": null, "at": null, "content_sha256": null},
    "legal": {"state": "pending", "actor": null, "at": null, "content_sha256": null},
    "publication": {"state": "non_autorisee", "decision_ref": null, "actor": null, "at": null, "content_sha256": null}
  }
}
~~~

**Cet exemple est une FORME de schéma, pas une fiche réconciliée réelle ni un nouveau contenu ARCH-005.** Les chaînes avec | énumèrent des valeurs permises ; l'implémentation choisit UNE valeur. Le champ locator_internal doit rester uniquement en mémoire ou dans un support effectivement restreint, **jamais dans un fichier de GitHub public, artefact CI, logs ni site**. Les quatre visas sont des objets DISTINCTS ; pas de promotion transitive. Le seul champ content_sha256_verified atteste un calcul sur le corps exact, les SHA de rapport/blobs et selected_source_sha256_claimed ne le remplacent jamais. Pour les objections, conserver le registre WORK entier et les documents C03 hors fiche ; ne lier par ID que lorsqu'un lien existe explicitement.

**Invariants bloquants :**
- ID et alias uniques, aucun alias égal à un autre ID canonique, aucune perte/recyclage des 219 IDs, y compris FN-018 ; une édition/traduction ne crée pas ni n'efface un ID sans décision humaine.
- Tous les source_refs doivent résoudre vers les 100 sources connues, tout lien relationnel vers les 219 objets et tout lien des 29 étapes vers les objets existants ; le registre des objections reste intact, même si une objection n'est pas encore reliée à une fiche.
- Les 19 relations conservent type, preuve, extrémités, date et objections. **relation vérifiée** et niveau de coopération territoriale R0–R3 sont deux axes distincts ; une comparaison ne devient jamais un partenariat.
- Données absentes : source non retrouvée → canonical_source.kind=missing, version null, exclusion des vues publiques ; géométrie absente → null et accès en liste, pas de coordonnées de remplacement ; droit non examiné → pas de réutilisation. Ne pas masquer un échec de jointure par une fiche vide.
- Bloqué est orthogonal au statut documentaire ; un statut LEGAL_REPERAGE_CIBLE sur ARCH-005/006/007 ne change pas legal=non_examine ni le visa en pending.

### 1.4 Modèle de confidentialité, autorisations et sorties

**Classes internes strictes** : UNREVIEWED (défaut), INTERNAL, RESTRICTED, PUBLIC_METADATA_REVIEWED. Une classe PUBLIC_METADATA_REVIEWED autorise uniquement un jeu de champs épurés après contrôle ; elle **n'autorise pas la publication**. Les champs inconnus prennent UNREVIEWED et ne sont jamais interprétés comme publics.

Sorties séparées, sans synchronisation automatique :
- **Vue de diagnostic locale (mémoire, non persistée)** : objets et jointures C02 enrichis par indicateurs de réserves, comptes, absence de pièces ; pas de copie des corps ni diffusion dans GitHub/CI.
- **Manifeste d'examen épuré** : ID, catégorie, niveau de contrôle, présence/absence des pièces, références de versions NON sensibles, liste de blocages sans détails personnels ; à produire uniquement après filtrage explicite et inspection des champs.
- **Projection affichable candidate** : par défaut vide pour toute fiche C07 non visée. Elle ne devient non vide que sous un manifeste d'autorisation **séparé et humain**, avec ID, empreinte du contenu exact, portée de l'usage (notice/texte/image/traduction), visa documentaire, juridique, publication, décision traçable et absence de blocage. Ne pas modifier la fonction existante getPublicResources() qui renvoie [] pendant DEV-03.
- **Médias** : chaque fichier possède droit et version propres ; une licence d'œuvre ne valide ni scan, ni couverture, ni traduction. Aucun transfert d'image depuis une URL candidate.
- **Supabase et lieux privés** : aucune lecture ou écriture réelle nécessaire pour ce build ; ne pas charger IP, coordonnées sensibles, courriers, témoignages privés ni données personnelles. Un URL HTTPS ne prouve pas le caractère public d'un document.

## Passe 2/2 — Contrat directement implémentable DEV-03

### 2.1 Chemins et interfaces proposés, sans écriture faite par l'Anarchitecte

**Sources en lecture seule** :
- coordination/v2/work-c02-01/data/{resources,sources,relations,objections,parcours,navigation}.json
- coordination/v2/work-c02-01/lib/catalogue.mjs et tests/contract.test.mjs
- coordination/work/c07/REFERENTIEL_CENTRAL_NOMENCLATURE_V1.md
- coordination/work/c07/mediatheque/C07_MED_01B_MATRICE_219.md
- coordination/c03/juriste/C07_JUR_01B_CLOTURE_20261109.md
- coordination/work/c07/LOT_COMMUNE_01.json et LOT_COMMUNE_02.json
- coordination/work/c07/tisseuse/C07_CENTRAL_TIS_02_PREUVES_CANDIDATES.json (optionnel, non import direct)

**Pour DEV-03, fichiers nouveaux dans SON dossier propre, sous réserve de non-collision** :
- coordination/work/c07/developpeuse/master-v1/schema.json : JSON Schema de la projection c07-master-projection/1 et enum des statuts.
- coordination/work/c07/developpeuse/master-v1/overlay-reviewed.json : correspondance explicitement sourcée des colonnes MED et des restrictions JUR, sans localisateur privé ni texte de source ; provenance et blobs requis.
- coordination/work/c07/developpeuse/master-v1/build.mjs : lecture déterministe sans accès réseau ; vérifie SHA des entrées, jointures, ordre stable par id, aucun accès Supabase, et sépare diagnostic/présentation.
- coordination/work/c07/developpeuse/master-v1/test.mjs : tests de réception définis ci-dessous.
- coordination/work/c07/developpeuse/master-v1/README.md : commande de construction locale, empreintes, limites et retour arrière.

**Pas de nouveau JSON maître commité**. Le résultat éphémère est reconstituable depuis les entrées et leurs SHA. Pour la CI : compter et tester en mémoire, ne PAS uploader l'objet complet, ses localisateurs, ni ses journaux bruts. Une sortie candidate publique ne contient qu'une liste vide ou des IDs dont le visa externe a été effectivement fourni ; à ce stade elle est vide.

API fonctionnelle attendue (noms indicatifs mais comportements obligatoires) :
- **loadCandidate(refs)** → bundle C02 et blobs attendus ; aucune lecture HTTP privée.
- **validateInputs(bundle, sourceManifest)** → erreurs P0 si perte de source, conflit d'ID/alias, jointe orpheline, version d'entrée non conforme.
- **buildMaster(bundle, overlays)** → Map<ID, MasterRecord> immuable, stable par id ; overlays de revue en champs distincts ; aucune édition du registre C02.
- **routeCandidate(record)** → {legacy_primary_door, public_door, facets} ; aucune nouvelle porte.
- **projectPublic(record, authorizationManifest)** → null tant que toutes les conditions d'usage et de visa ne sont pas satisfaites ; allowlist de champs.
- **buildReport()** → uniquement effectifs, erreurs et SHA des entrées, sans détail sensible ; non publiant.

### 2.2 Projection vers quatre portes, Atlas et Parcours

**Portes UI exactes** : Faire Ensemble (**entraide**), Encyclopédie (**encyclopedie**), Archives (**archives**), Médiathèque (**mediatheque**). Ne jamais matérialiser carte, atlas ou parcours comme cinquième porte. Conservation impérative de legacy_primary_door ; la projection publique n'a pas vocation à réécrire les 21 valeurs historiques carte en encyclopedie ni les 3 valeurs entraide.

Règles de routage candidates :
- legacy_primary_door=**mediatheque** → porte Médiathèque ; notices FN/œuvres visibles uniquement après visa, fiche par ID. Distinguer édition/traduction/couverture et droits correspondants.
- legacy_primary_door=**encyclopedie** → porte Encyclopédie ; si kind=archive, **facette Archives candidate** (renvoi, pas mutation d'identité), avec notice non diffusée tant que source/visas manquent. Ne pas inférer la publication du seul préfixe ARCH.
- legacy_primary_door=**carte** → porte d'accueil **Encyclopédie**, facette **Atlas documentaire** ; conserver carte comme origine/fragment historique ; aucun géocodage automatique. Un champ territoire non localisé est présenté en liste, jamais supprimé.
- legacy_primary_door=**entraide** → porte Faire Ensemble ; aucune fiche de droits bloquée, ni formulaire/ressource réactivé par simple routage.
- Porte **Archives** → vue transversale de notices archivistiques explicitement admissibles et reliées par l'ID d'origine ; **zéro automatisme de publication**. L'absence actuelle de archives.html ne justifie ni création sauvage ni lien cassé : la porte existante continue d'afficher la notice fermée, DEV-03 soumet un raccordement candidat séparément.
- **Atlas** : sous-section de l'Encyclopédie (accès aussi depuis Faire Ensemble pour initiatives). Les cartes PR #41/#193 restent des **simulations fictives** identifiées comme telles et non ingérées. Pas de point sans source datée, droit de montrer l'emplacement, coordonnées vérifiées et autorisation du lot. Aucune activité « ouverte aujourd'hui » ou partenariat déduit de R0/R1/R2.
- **Parcours** : sept transversaux, 29 étapes, liens resource_ids par ID, fragments historiques et retours préservés ; PAR-005 bloqué avec aucun lien pratique publié. Le site candidat peut montrer le nombre de références, jamais ouvrir le corps privé par raccourci.

**Compatibilité** : conservez wiki.html, bibliotheque.html, atlas.html, parcours.html, les 24 routes wiki-*.html et les fragments historiques (#wiki, #atlas, #carte, #entraide, #parcours, #parcours/PAR-XXX) ; le mapping #atlas continue d'ouvrir la vue Atlas sans ajouter une porte. Les 24 pages historiques déjà visibles ne reçoivent aucun nouveau visa du fait de cette projection.

### 2.3 Critères de test et preuves d'acceptation DEV-03

**P0 structure (tests automatisables, HEAD exact)** :
1. 219 records et 219 IDs distincts, 100 sources, 19 relations, 30 objections WORK, 7 Parcours et 29 étapes ; chaque association par ID résolue ; ni nouvelle fiche wiki ni suppression/renumérotation FN.
2. Alias ECO-19/ECO-001/tis-c8-velo résolus exactement comme C02 ; FN-022 ≠ FN-048, FN-038 ≠ FN-057, FN-018 reste objet distinct sans source artificielle ; pas de canonicalisation par égalité de titre.
3. 190 catégories MED sans URL canonique (185 internes / 1 manquante / 4 conflits), 29 références MED de type chemin/URL candidat ; valider **les comptes de MED sans modifier les 51 champs C02** avec dossier_locator ou canonical_url.
4. Tout changement du SHA des six JSON ou des deux rapports MED/JUR fait échouer le test de conformité jusqu'à revalidation documentée des différences. Le moteur ne peut substituer la version d'un rapport à celle du texte original.
5. Aucune promotion des 217 legal non_examine, des 2 legal bloque ou des 219 publication non_autorisee ; publication_visa=non_autorisee partout, getPublicResources()=[] ; PENDING conservé dans les deux lots, et les objections C03 non écrasées.
6. Injection négative : alias en collision, relations orphelines, URL privée, droits inconnus, image sans licence, SHA de contenu divergent, localisateur manquant ou entrée TIS sans coordonnées → **aucune publication**, résultat explicite et déterministe. Les erreurs de structure critique arrêtent le build ; les absences de pièces sont signalées par objet et excluent cet objet de l'affichage public.
7. Test sécurité sur l'artefact généré : aucun locator Drive/Library non autorisé, aucune donnée personnelle, coordonnées privées, texte juridique bloqué, corps d'archive, fichier de revue ou rapport interne ; analyse des HTML/Jekyll et JSON construits, pas seulement des liens visibles. Si un fichier sous coordination/, docs/, objets privés ou annexes d'ateliers entre dans l'artefact Pages, **échec P0**.
8. Déterminisme : deux builds identiques (mêmes sources et SHA) → mêmes empreintes et même ordre ; aucun fichier C02/ateliers/HTML/SVG/main modifié, aucun appel réseau ni Supabase.

**P1 interface/navigation** :
9. Quatre portes exactes, Atlas sous Encyclopédie, 7 Parcours / 29 étapes, états fermés, liens directs, retours et fragments historiques ; aucun cinquième accès top-level créé.
10. Tests navigateur et accessibilité sur le HEAD exact : 320/390/1280 px, clavier, focus, lecteur sans JS, zoom 400 %, prefers-reduced-motion, axe et vérification humaine à programmer ; Android/iPad physiques, TalkBack/VoiceOver **non attestés tant que non exécutés**.
11. Fiches sans géométrie accessibles en liste ; pas de point fictif réétiqueté réel ; zéro R3 Interstice par défaut et aucune inférence d'ouverture actuelle.
12. Test de version pour ARCH-005/006/007 : source sélectionnée ≠ SHA de corps vérifié ; écran de diagnostic doit conserver deux pièces ARCH-005 distinctes, réserves ARCH-006 et séparation décret/appliqué ARCH-007 ; aucun des trois ne passe JURIDIQUE_EXAMINÉ.

**Livrable DEV-03 attendu** : commit et HEAD complets, blobs de fichiers implémentés, commandes et sorties de tests, matrice anomalies P0/P1/P2 avec preuves, 0 migration, 0 déploiement, 0 publication, et transmission à ANA-02/LEC-03/Relieuse. Une CI verte ne vaut pas réception humaine.

### 2.4 Retour arrière, concurrence et non-régression

- Faire un commit candidat exclusivement dans le dossier propre DEV-03 ; **ne pas fusionner** PR #192/#193 en masse, ne pas modifier C02, SVG, journaux d'autres ateliers, droits, Pages, main ou Supabase pour cette étape.
- Capturer **HEAD exact avant et après** la passe et comparer tous les blobs C02, six registres, fragments et fichiers historiques protégés avec leurs manifestes de préservation ; un mouvement concurrent de branche impose une comparaison et nouvelle vérification des entrées avant de prétendre réception.
- La projection étant en mémoire et sans effet externe, **rollback normal = retirer la consommation de la projection candidate** et revenir à la navigation/copie publique actuelle. Conserver les HEAD, blobs et procédures de génération précédents. Un revert Git éventuel ne s'exécute qu'après validation humaine ; ne pas faire de force-push ou de retrait de données réel.
- Avant toute fusion future, corriger le **périmètre Jekyll Pages** : publier sur une liste stricte de pages autorisées et **tester que les répertoires coordination/, docs/, rapports privés et sources sensibles sont absents de la sortie**. L'actuel succès du workflow R6 prouve une compilation, pas la confidentialité du futur artefact.
- Aucun cron, écriture réseau, secret, activation de handler, purge réelle, suppression, modification d'enregistrement ou accès aux originaux privés n'est requis ni autorisé par ANA-01B.

## 3. Verdict et blocages transmis à La Relieuse

**VERDICT : contrat d'architecture ANA-01B LIVRÉ POUR DÉMARRER L'IMPLÉMENTATION DEV-03 EN CANDIDAT INTERNE ; réception de l'implémentation, publication et fusion NON AUTORISÉES.**

**P0 — bloquants avant toute mise à disposition publique** : confidentialité et exclusion réelle de coordination/docs dans Pages ; absence de privacy_class sur 219/219 C02 ; aucune preuve de licence/vérification individuelle pour les corps et images ; 217 avis juridiques non examinés ; visa distinct sur version exacte ; FN-018 ; PATH/URL Drive non épuré ; livrable final DEV-03 et tests de réception non encore exécutés.

**P1 — décisions et travaux nécessaires** : conservation de FN-022/048 et FN-038/057 en INDÉTERMINÉ ; ARCH-005/006/007 sous réserves, études et reproductions non collationnées ; TIS sans géométrie ni preuve de partenariat ; rapprochement Archives/facette et compatibilité de #193 ; confirmation des versions des 168 objets C02 sans locator direct et des références Library.

**Ce document ne valide pas les objets éditoriaux, ne promeut pas JUR-01B en autorisation juridique globale, et n'ordonne aucune migration, fusion, modification de main ou publication.**