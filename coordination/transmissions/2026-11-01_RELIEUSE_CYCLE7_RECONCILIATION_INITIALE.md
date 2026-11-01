# Cycle 7 — Réconciliation initiale de La Relieuse (candidate)

Date : 2026-11-01. Statut : **transmission de coordination, sans adoption, fusion ni publication**.

## Méthode et limites
- Relecture des descriptions des PR du dépôt et du Journal commun sur `main` (blob `4d82278d6dbc7b1c6e4088b3f2b809e3541f6fae`).
- Confrontation avec les conversations antérieures accessibles au contexte de coordination ; **pas d'inventaire exhaustif garanti de toutes les conversations**.
- Le fichier `coordination/REGISTRE_EDITORIAL.md` n'existe pas à cet emplacement sur `main` ; ne pas présenter son contenu comme vérifié.
- Une transmission dans GitHub n'atteste pas de sa réception par une autre conversation IA.

## Personnalités et attributions
| Statut | Rôles / dossiers | Consigne |
|---|---|---|
| Conversations ou missions explicitement retrouvées | La Relieuse, La Développeuse, La Juriste, La Lectrice, La Penseuse, La Biographe, L'Anarchitecte, La Graphiste, L'Éclaireuse, La Responsable réseaux sociaux, La Médiathèque des communs, L'Anarchiviste des communs, La Tisseuse, L'Anarchiviste catalan, L'Anarchiviste zapatiste, L'Archéologue des communs, L'Assistant de l'Anarchiviste | Vérifier les intitulés exacts et ne pas créer de doublons. |
| Dossiers territoriaux sans conversation autonome certifiée | Aragon ; Murcie-Albacete | Conserver les enquêtes, ne pas créer de rôle par déduction. |
| Intitulés GitHub non équivalents à une conversation distincte | Le Relieur ; L'Organisateur | Conserver les livrables PR #43 ; attribuer la coordination à La Relieuse et les scénarios aux fonctions existantes. |

## Matrice des chantiers
| Priorité | Chantier | Preuves et état | Suite nécessaire |
|---|---|---|---|
| P0 | Collectes et backend | PR #56 : suspension navigateur uniquement ; PR #62 : fonction `submit-proposal` active et RPC `submit_wiki_article` exécutable par `authenticated` selon contrôle documenté | Audit serveur actualisé, correction autorisée, tests et contrôle RGPD/LCEN avant toute réouverture. |
| P1 | Manifeste V2.6 et Charte éditoriale V0.1 | PR #58 : textes candidats ; adoption individuelle conditionnelle évoquée, aucun acte enregistré ici | Vérifier versions intégrales, réserves et autorisation exacte de Zout ; enregistrer seulement si les conditions sont remplies. |
| P1 | Charte des communs V0.9 | PR #62 : candidate, article 48 transitoire | Relecture et décision humaine distincte. |
| P1 | Inventaires éditoriaux | PR #63 : quinze pages Wiki ; transmissions antérieures : quinze textes à corriger et cinq bloqués | Comparer identifiants et statuts, retrouver le registre effectif, ne pas confondre les listes. |
| P2 | Wiki, architecture, accessibilité | PR #51, #57, #59, #61, #63 | Réconcilier les branches et dépendances, tests avant proposition d'intégration. |
| P2 | Fonds, biographies et expériences | Journal commun, transmissions Médiathèque, Tisseuse, Biographe et Anarchiviste | Relier sources, statuts et réserves sans nouveaux doublons. |
| P2 | Enquêtes territoriales | Conversations Aragon, Catalogne, Murcie-Albacete, zapatisme | Vérifier Wikipédia avant tout article, travailler les apports originaux, transmettre aux ateliers documentaires. |
| P3 | Communication et coopérations | PR #43, #48, #52 | Préparation seulement ; aucune prise de contact ou publication présumée. |

## Règles permanentes
Zout est actuellement l'unique personne humaine portant l'initiative. Aucun collectif humain, assemblée ou commission n'existe ; les IA n'ont aucun pouvoir décisionnaire. Chaque passe doit apporter un résultat vérifiable, conserver les sources, les contradictions et les SHA, et éviter de refaire les audits conclus. Aucun merge, déploiement, publication, contact externe ou changement irréversible sans autorisation applicable.

## État
- **Vérifié** : existence et descriptions des PR #56, #58, #62, #63 et du Journal commun sur `main`.
- **Corrigé dans cette transmission** : séparation entre rôles conversationnels, appellations GitHub et dossiers territoriaux.
- **Candidat** : présente matrice de cycle 7.
- **Bloqué** : localisation du registre éditorial complet ; contrôle serveur actuel ; réconciliation exacte des quinze textes/pages et cinq blocages.
- **Décisions Zout attendues** : adoption individuelle documentée sur versions vérifiées, validation de publication future, autorisation d'éventuelles interventions serveur de production.

## Passe complémentaire — recherche ciblée du registre et clarification des nombres
- Recherche dans l'index de fichiers du dépôt sur `main` avec « REGISTRE », « quinze », « bloqués » et « INVENTAIRE » : aucun résultat ; ce résultat de recherche **ne prouve pas** l'absence des documents dans les branches de PR ou Drive.
- Recherche dans les descriptions des PR : la PR #62 affirme une revue de « 15 textes à corriger et 5 bloqués du registre de coordination », sans fournir dans sa description les quinze identifiants ni les cinq identifiants.
- La PR #63 décrit un **inventaire versionné de 15 pages Wiki** à corriger. **Équivalence avec les quinze textes de #62 non établie** : comparaison fichier par fichier indispensable.
- La PR #53 parle de **neuf pages initialement bloquées** ; ne pas confondre cet état antérieur avec les cinq dossiers du registre cité par #62.
- La PR #43 mentionne **A01–A15** comme critères d'essai et trois scénarios écrits, sans essai terrain ; ce ne sont ni quinze articles ni quinze pages.
- La PR #51 cite **24 pages Wiki, 44 fiches Drive et 71 notices FN** comme ensembles distincts, avec réserves d'intégration.
- Prochaine vérification : lire les fichiers de transmission précis sur les branches des PR #62 et #63, puis retrouver le registre d'origine avant toute affirmation nominative.

## Passe 7 — Registre source retrouvé et tri clarifié
**Source effectivement lue :** `coordination/ateliers/registre_editorial_pre_sortie_2026-10-31.json`, branche `coordination/relieur-pilote-10-passes-20261030`, blob `f005414fc566cf020e2ac8931f4841e30ffde859` (227391 caractères). Ne pas confondre ce nom de branche historique avec la création d'une conversation « Le Relieur ».

### État du premier tri de La Lectrice (24 pages Wiki)
- `lectrice_pre_sortie_summary` : **0 validable, 15 A_CORRIGER, 9 BLOQUEES** au premier tri ; rapport `coordination/transmissions/2026-10-31_LECTRICE_PRE_SORTIE_24_PAGES_OBJECTIONS_LACUNES.md`.
- Neuf pages bloquées à ce stade : `wiki-association-collegiale.html`, `wiki-decision-collective.html`, `wiki-education-enfance-protection.html`, `wiki-financements-culture-spectacle.html`, `wiki-frontieres-migrations-colonialisme.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html`, `wiki-logement-habitat-droit-ville.html`, `wiki-police-deces-memoire.html`, `wiki-sante-psychiatrie-autonomie-soins.html`.
- Quinze autres pages sont classées A_CORRIGER dans le même premier tri ; la PR #63 décrit un inventaire graphique de quinze pages, mais l'identité exacte des deux lots reste à comparer aux fichiers de la PR #63.

### État ultérieur de coordination, autre périmètre
- `cycle5_relieuse` : **14 prêts à soumettre, 15 à corriger, 5 bloqués**, et **0 nouveau visa** ; les identifiants précis des cinq ne sont pas extraits du résumé, à rechercher dans `coordination/cycle2/STATUTS_34_2026-10-31.json` ou les documents des cycles 3 à 5.
- `editorial_approval_summary` : accords éditoriaux individuels documentés **ARCH-002** et **ARCH-007**, sans autorisation de fusion ou de publication.
- Corpus distincts : 44 fiches Drive, 71 notices FN, 24 pages Wiki. Ne pas additionner comme 139 nouveaux articles indépendants.
- Les 5 blocages ultérieurs ne sont **pas** les 9 pages bloquées du premier tri, ni les fiches historiques portant une réserve spécialisée.

### Prochain contrôle
Lire les fichiers de statut du cycle 2 à 5 et le rapport détaillé de la PR #63 ; établir un tableau d'identifiants et de SHA avant de conclure sur les cinq blocages actuels. Aucun visa, fusion, publication ou contact ajouté.


## Cycle 8 — Passe 1 : identification nominative des cinq blocages et matrice des 34
Source contrôlée : `coordination/cycle2/STATUTS_34_2026-10-31.json`, branche `coordination/relieur-pilote-10-passes-20261030`, blob `09a73b4931ef41811349072316248979a5afa97c`. État **historique du registre cycle 2**, non une vérification de résolution au 1er novembre.

**Comptage exact :** 14 `ready`, 15 `to_correct`, 5 `blocked`, deux visas éditoriaux distincts (ARCH-002 et ARCH-007). Ces 34 éléments sont mixtes (fiches historiques et pages Wiki) et ne doivent pas être assimilés aux 24 pages du premier tri.

### Cinq blocages nommés
| Page | Blob du lot de La Lectrice | Réserve du registre |
|---|---|---|
| `wiki-education-enfance-protection.html` | `ff4a1b2cf13832dfc1050ce85d1b0d359c9f5e8a` | Protection des mineurs et procédures sensibles : avis spécialisé requis. |
| `wiki-frontieres-migrations-colonialisme.html` | `058e3629b172d88461a6d394c35809582739b6a6` | Asile, notifications et délais variables : revue Juriste indispensable. |
| `wiki-logement-habitat-droit-ville.html` | `6a10c4a53d42debfd06526dd962cdc2fe502bd0a` | Commandement de payer/quitter, DALO/DAHO : avis juridique requis. |
| `wiki-police-deces-memoire.html` | `f0dda721586ac4c5e76400b1b1ecbeba714cf684` | Réputation, confidentialité, rectification et sources. |
| `wiki-sante-psychiatrie-autonomie-soins.html` | `a7e026c3a66fd9d97a695db3bade1e86a89ff7ae` | Droits de santé et soins non consentis : avis sanitaire/juridique requis. |

### Quinze éléments à corriger, selon ce même registre
- Fiches : `ARCH-005`, `ASSO-007`, `COL-003`.
- Pages Wiki : `association-collegiale`, `autonomie-materielle-savoir-faire`, `capitalisme-classes-travail`, `culture-creation-acces-art`, `ecologie-sociale-environnement`, `egalite-fiches`, `egalite-genres-inclusivite`, `financements-culture-spectacle`, `handicap-validisme-neurodiversite`, `justice-prisons-abolitionnisme`, `liberte-numerique-ia-surveillance`, `patriarcat-histoire-mecanismes` (tous préfixés `wiki-` et suffixés `.html`).

### Quatorze prêts à soumettre (non approuvés)
- Fiches : `ARCH-003`, `ARCH-004`, `ARCH-006`, `ARCH-008`, `ASSO-005`, `ASSO-008`, `COL-001`.
- Pages Wiki : `antifascisme-histoire-et-mecanismes`, `antiracisme-histoires-droits`, `decision-collective`, `feminismes-histoire-egalite`, `lecture-croisee-travail-soin-pouvoir`, `politique-institutions-regimes`, `socialismes-communismes-anarchismes-autogestion`.

**Décisions Zout :** aucune nouvelle décision enregistrée par cette passe. Les visas ARCH-002 et ARCH-007 portent uniquement sur leurs textes candidats aux SHA `f9f0b6edf09cf0e84fe7e46960f25df1a8e99dbb` et `372bfcee95f7bd4a1f37dfa9393264662050e9ba`, respectivement, sans droits médias ni autorisation de publication.

**Suite :** comparer le registre historique aux corrections des PR #55/#63 et aux contrôles juridiques #65, puis construire la matrice actualisée par fichier et SHA. Aucune fusion, publication ou intervention serveur.


## Cycle 8 — Passe 2 : actualisation des dépendances au 1er novembre
Recherche GitHub effectuée : PR #67 **Juriste cycle 8**, PR #68 **Graphiste cycle 8**, branches `atelier-lectrice/cycle8-qualite-20261101` et `integration/cycle8-wiki-bibliotheque-p0-candidate-2026-11-01` repérées. Leur existence ne démontre ni intégration commune, ni approbation éditoriale, ni résolution P0.

- **PR #67** : matrice juridique et contrôles read-only du backend ; les fonctions serveur demeurent signalées actives et le risque P0 reste ouvert. Aucune correction de production attestée.
- **PR #68** : navigation candidate Wiki/Bibliothèque/biographies/enquêtes, CSS opt-in ; tests techniques décrits, lecteurs d'écran réels non exécutés.
- **Lectrice cycle 8** : branche identifiée, contenu et état de correction à contrôler avant réconciliation.
- **Intégration cycle 8** : branche candidate identifiée, provenance des fichiers, conflits et tests à auditer avant toute proposition de fusion.
- **Matrice éditoriale** : registre cycle 2 de 34 éléments exact désormais retrouvé dans la passe précédente ; comparer ses SHA aux branches plus récentes plutôt que considérer les statuts figés.

### Conditions de sortie non encore démontrées
1. Suspension ou protection **côté serveur** et validation RGPD/LCEN.
2. Tests d'intégration et de non-régression sur une base commune documentée.
3. Contre-lecture effective des cinq pages sensibles et levée motivée des réserves, si possible.
4. Concordance finale des textes fondateurs et décisions individuelles sur les versions exactes.
5. Validation explicite de Zout pour les actes qui l'exigent.

**Décision de coordination :** poursuivre le cycle 8 ; ne pas déclarer la première édition prête à publier. Les nouvelles PR et branches sont des contributions candidates, pas des travaux automatiquement reçus par les autres conversations.


## Cycle 8 — Passe 3 : rapprochement des productions réelles, sans fusion
**Contrôles GitHub** : comparaison `main...branche` et lecture des rapports exacts de La Lectrice, La Juriste et La Développeuse. Les quatre branches examinées sont **divergentes** de `main`, et leur nombre de commits en avance ne constitue pas un bilan de modifications exclusives du cycle 8.

| Atelier | Branche | Pièce effectivement consultée | Conclusion |
|---|---|---|---|
| Lectrice | `atelier-lectrice/cycle8-qualite-20261101` | `coordination/transmissions/2026-11-01_LECTRICE_CYCLE8_LOTS_QA.md`, blob `01299b8241c970dcc709ae6bc50f1fa92f396b72` | Les 15 À CORRIGER = **12 Wiki + 3 historiques** ; les 15 de Graphiste #63 = **15 Wiki du premier tri**, listes non interchangeables. |
| Juriste | `juriste/cycle8-matrice-risques-20261101` | `coordination/juriste/2026-11-01_CYCLE8_MATRICE_RISQUES_CORRECTIONS.md`, blob `51af4e26f734f8346e467790ff48140ba8617086` | Cinq blocages juridiques maintenus ; versions fondatrices candidates et P0 ouverts. |
| Développeuse | `integration/cycle8-wiki-bibliotheque-p0-candidate-2026-11-01` | `edition-premiere/CYCLE8_P0_RAPPORT.md`, blob `1313d589fb9b8ca691a6fdad8e6417070ba6e637` | **Trois correctifs P0 candidats réversibles**, non appliqués ; PWA non démontrée ; navigation statique candidate. |
| Graphiste | `design/graphiste-cycle8-integration-2026-11-01` | Comparaison de branche et description PR #68 | CSS d'intégration et rapport QA présents ; tests physiques de lecteurs d'écran non attestés. |

### Correction de statut importante
La Lectrice classe maintenant **ARCH-005, COL-003 et ASSO-007 « PRÊT À SOUMETTRE sous réserve »** sur les blobs respectifs `352fcb67462cf1552106c88888701624408ca689`, `64249e03f55ac29e4fb6bd48266990f3b982477a`, `93f4dca9e93df2b5f287607357f3be40c68c946a`. Ce sont des **versions nouvelles**, non des levées générales des réserves de source. Les **12 Wiki** du même lot restent À CORRIGER, et les **5 pages sensibles** restent BLOQUÉES. Ne pas modifier rétroactivement les comptes du registre cycle 2 ; constituer un **état cycle 8 séparé** : 14 prêts historiques + 3 nouveaux prêts sous réserve (sans doublon) ; 12 Wiki à corriger ; 5 bloqués. Ces nombres sont un **rapprochement documentaire** et non des validations de publication.

### P0 technique : faits précis
Rapport Développeuse : `submit-proposal` ACTIVE v2, `submit-resource` ACTIVE v1, `github-wiki-ingest` ACTIVE v5, les trois `verify_jwt=false` (l'ingestion GitHub comporterait un contrôle OIDC interne non audité). RPC `submit_wiki_article` et `review_wiki_article` SECURITY DEFINER : `authenticated EXECUTE=true`. Correctifs candidats : `edition-premiere/security-p0/submit-proposal-disabled.ts`, `submit-resource-disabled.ts`, `suspend-submit-wiki-article.sql`. Aucun déploiement ou test dynamique de production autorisé ou attesté. Les avertissements de sécurité ne prouvent pas tous une exploitation, mais imposent une revue et des essais sûrs avant ouverture.

### Dossier de décisions Zout, ordre conseillé
1. **Sécurité** : autorisation éventuelle d'un plan de test isolé et d'un déploiement serveur après revue des impacts et rollback. Ne pas exécuter en production sans autorisation explicite.
2. **Textes fondateurs** : décision individuelle sur versions **intégrales** et SHA après lecture ; ne pas confondre approbation des amendements V2.6 avec adoption du manifeste.
3. **Lot A** : 14 textes déjà prêts à soumettre, à examiner texte par texte.
4. **Lot B** : trois historiques désormais prêts sous réserve ; 12 pages Wiki encore à corriger.
5. **Lot C** : cinq pages sensibles à maintenir hors promotion tant que preuves, droits et avis spécialisés manquent.
6. **ARCH-002 / ARCH-007** : visas éditoriaux conservés ; droits `A_VERIFIER` et `publication_authorized=false` selon le circuit d'édition candidate.

### État des objectifs
**Avancé** : inventaire exact, identification des cinq blocages, séparation des quinze lots, lecture des productions récentes, classement des trois dossiers historiques. **Non démontré** : serveur sécurisé, première édition fusionnée, droits médias complets, décisions individuelles sur textes intégraux, tests lecteurs d'écran réels, publication autorisée. Ne pas déclarer le cycle 8 clos sur ces bases.
