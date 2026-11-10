# C07 — La Relieuse · Vingt passes réelles de contrôle du dépôt public
**10 novembre 2026 · P0 · PR #186 · lecture des fichiers au HEAD `eae8cc7874f5b0ff59daf41f0d3aeee2bdcba981` · HEAD avant dépôt `54735f92c8afa9cfdb579fcf30aae62e9461dce1`**.

**Limite méthodologique :** chaque passe ci-dessous est une lecture réelle d'un blob GitHub identifié par SHA, avec détection d'URL directes Google Docs/Drive et d'adresses au format e-mail. Ces contrôles ciblés de texte ne prouvent pas l'absence d'autres données personnelles, d'images sensibles, de secrets sous d'autres formats, ou d'exposition passée. Les catégories de risques ne sont pas des affirmations que les 177 URL correspondent toutes à des contenus privés. Aucun lien, titre sensible, ID Drive ou extrait personnel n'est recopié.

## Les vingt passes vérifiables
| Passe | Fichier lu | Blob SHA Git | URLs Google directes détectées | Résultat et réserve |
|---:|---|---|---:|---|
| 01 | `coordination/work/c07/REFERENTIEL_CENTRAL_NOMENCLATURE_V1.md` | `31e2bb214156c03ec4080807dc08a31389945e0e` | 0 | Contrat de nomenclature, pas source privée détectée par cette règle |
| 02 | `coordination/work/c07/EDITORIAL_QUEUE.json` | `f373c66478c991a0301d9502cfe96e68731c2b84` | 0 | Métadonnées de file, aucune URL directe détectée |
| 03 | `coordination/c03/biographe/MATRICE_IDENTITES.md` | `86732ee2762c18c875d88e3c9f9fe43455fde867` | 0 | **Contenu nominatif historique** : absence d'URL ne vaut pas autorisation de diffusion |
| 04 | `coordination/c03/juriste/C07_JUR_01B_CLOTURE_20261109.md` | `787fb845db3582c43678bd0925a479700474475f` | 0 | Analyse juridique interne : contrôle du contenu encore à faire |
| 05 | `coordination/work/c07/mediatheque/C07_MED_01B_MATRICE_219.md` | `dc695cecf288791ff71203415329df023b58c556` | **22** | **P0 : liens Google directs toujours présents dans une matrice committée en public** ; vérifier droits d'accès de chaque cible, puis remplacer localisateurs non publics par IDs opaques |
| 06 | `coordination/work/c07/relieuse/C07_HELD_20_PASSES_REELLES_20261109.md` | `972e27079f8a576fb53f9a5d112c28de96463759` | 0 | Rapport de recherches documentaires ; droits des sources restent distincts |
| 07 | `coordination/work/c07/relieuse/C07_SECURISATION_BILAN_20261110.md` | `f6d88503daff8cfe2388b39dbe2a073305b13400` | 0 | Confirme le suivi du reliquat, ne contient pas d'URL directe |
| 08 | `coordination/work/c07/developpeuse/master-v1/overlay-reviewed.json` | `0a3f6711cdd2fec5b5d73a4170209fc611db9178` | 0 | Overlay par ID vide, pas de visa ni de localisateur privé |
| 09 | `coordination/work/c07/developpeuse/master-v1/test.mjs` | `1d5c08ca7e1afdc9681719e1a9f0ae9bb7aad154` | 0 | Tests du référentiel interne, pas de preuve d'absence de liens dans tout Git |
| 10 | `coordination/v2/work-c02-01/data/navigation.json` | `c154891466df8465e06bf3dd04436c94118ecff4` | 0 | Navigation C02 sans URL Google directe |
| 11 | `coordination/v2/work-c02-01/data/parcours.json` | `be242baf409d0715bc870af68c15f75ae4ae770a` | 0 | Parcours sans URL Google directe ; PAR-005 demeure fermé |
| 12 | `coordination/mediatheque/DROIT-001_BIBLIO_MANIFESTATIONS_CONTROLES_GAV_2026-10-31.md` | `1657e925bc60d52456ecf02532cd1b7e0eb7b465` | 0 | Bibliographie juridique ; absence de lien privé ne constitue pas un visa juridique |
| 13 | `coordination/mediatheque/DROIT-002_BIBLIO_LOGEMENT_EXPULSIONS_AIDES_2026-10-31.md` | `4d0f4f757d1ab23ac8b69f2a11a69ee61dec8106` | 0 | Même réserve : droits et mise à jour distincts du contrôle de localisateurs |
| 14 | `docs/AUDIT_CONTRIBUTIONS_SUPABASE_2026-10-29.md` | `20885cfd5bd149260a85bbe93084e3ac08ba6c9b` | 0 | Document technique, informations d'infrastructure à qualifier |
| 15 | `apercu-graphiste-35/docs/AUDIT_CONTRIBUTIONS_SUPABASE_2026-10-29.md` | `20885cfd5bd149260a85bbe93084e3ac08ba6c9b` | 0 | **Même blob que 14** : copie du même document entre deux arbres publics |
| 16 | `propositions/CHARTE_DES_COMMUNS_V0.6_TITRE_IX_2026-10-29.md` | `5ab483465d871215c68a228d2a546d20072c426e` | 0 | Version candidate dans un dépôt public ; exclure des projections Pages |
| 17 | `assets/nav-01/parcours-status.mjs` | `ed3fdbd0b61defacf19eeeb721bba8ee679ca15e` | 0 | Contrôle statique d'une ressource publique |
| 18 | `ressources-data.js` | `727901f17f51348488a211f9173993bec6445bbc` | 0 | Fichier servi publiquement : pas de lien Google direct dans cette version |
| 19 | `index.html` | `20804d21cee89397c5ab8deb377806d7d645f1e4` | 0 | Porte d'entrée publique : pas de lien Google direct dans cette version |
| 20 | `manifeste-v2-5.html` | `a0666733cf60062c6d4b8fab586490568f24d8c5` | 0 | Lien direct déjà épuré dans ce fichier candidat, texte conservé |

## Quatre vérifications complémentaires effectuées
**A. Scanner du dépôt entier en CI, HEAD `eae8cc7`.** Log du job `42770469814` : 853 fichiers suivis, 842 fichiers texte lus, **38 fichiers avec 177 occurrences d'URL Google directes**. Répartition : `apercu-graphiste-35` 12 fichiers/48 occurrences ; `coordination` 18/118 ; `docs` 2/2 ; `propositions` 6/9. Ces comptes peuvent contenir des répétitions et des liens intentionnellement publics. Pas de liste des valeurs déposée.

**B. Registres C02.** `resources.json` blob `ba88b78064921a2232ac0000e71f2120d5fa500b` et `sources.json` blob `726fa0e1d8961548498bd1db72cd418057e2f54b` : **0** lien Google direct au scanner ; 219 objets / 100 sources, et tests CI verts. L'épuration de ces deux registres ne protège pas leurs copies anciennes sur GitHub ni les 38 autres fichiers.

**C. Sortie Jekyll candidate.** CI `42770469814` : 81 fichiers construits, `unsafe_entries=0`, `symlinks=0`, `violating_files=0` pour la recherche directe. Les objets `coordination/` et les rapports internes n'entrent pas dans Pages sur ce HEAD. Cela **ne retire pas** leurs blobs du Git public.

**D. Main, historique et permissions.** `main` est à `df73c5dabf47a0b73d2b55f0346c7006d485dd98` et ne contient pas les registres C02 aux chemins examinés : ils sont spécifiques à la branche candidate. Les anciens commits publics peuvent encore contenir des localisateurs. Un contrôle de métadonnées Drive précédent, documenté dans `C07_SECURISATION_BILAN_20261110.md`, qualifiait 22 documents comme `shared:false` et sans partage `anyone` ; ce constat est **daté, ne couvre pas tous les 177 liens et ne prouve pas l'effacement des URLs exposées**.

## Verdict par risque
- **P0 ouvert : 177 occurrences directes dans 38 fichiers publics** ; la matrice Méd. porte encore 22 occurrences à qualifier. Ces éléments appellent classification par cible/ACL et réduction ciblée des références non publiques, sans effacer l'histoire des sources.
- **P0 historique :** impossible de révoquer une URL déjà copiée avec le simple remplacement du lien. Examiner, avec décision humaine, rotation/révocation de tout accès réellement secret et procédure Git éventuelle. Ne pas réécrire l'histoire ni rendre le dépôt privé sans autorisation.
- **P0 confidentialité hors liens :** textes de travail, personnes, lieux sensibles, photos, médias, métadonnées de création et éventuels secrets doivent être contrôlés indépendamment. Le présent contrôle est un examen de motifs d'URL, pas une inspection exhaustive de chaque contenu.
- **Réduction prouvée :** les registres C02 épurés et la sortie Jekyll candidat passent leurs tests ; le moteur maître reste sans cartes publiques.
- **Éditorial :** 219 objets toujours fermés à publication selon le contrat et aucun changement automatique des 9 HELD ou de PAR-005.

## Suite directement exploitable
1. Établir une matrice **interne, hors GitHub public**, associant chacune des cibles à `publique voulue`, `privée` ou `non déterminée` sur les permissions réellement lues. Pour le rapport public, ne publier que des compteurs, des familles de risque et des IDs de dossier sans URL ni empreinte réversible.
2. Prioriser `coordination/work/c07/mediatheque/C07_MED_01B_MATRICE_219.md` ; remplacement dans le **dossier de la Médiathèque** soumis à son contrôle, sans perte de 219 lignes ni de provenance. Maintenir séparés alias, sources et visas.
3. Traiter ensuite les trois autres arbres avec 177 occurrences cumulées, en évitant de casser des liens explicitement publics. Tout changement doit être protégé par tests et comparaison de blobs.
4. Proposer une politique de non-régression qui **signale** le solde de liens non qualifiés, sans maquiller leur présence derrière une CI verte ; fixer une baisse à la prochaine revue.
5. Sécuriser le stockage des correspondances privées hors dépôt ; demander une décision explicite distincte pour l'historique Git, les permissions Drive, toute fusion, publication ou suppression.

**Aucun fichier source modifié pour ce rapport. Aucun lien ou ID Google recopié dans ce document. Aucune action destructive, publication ou fusion.**
