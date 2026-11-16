# C07 — La Relieuse · Neuf passes ciblées de déblocage des dossiers HELD
**9 novembre 2026 · P0/P1 · Branche work/c07-reunification-20261104 · PR #186**  
**HEAD de départ contrôlé :** `55494e30f414c9d97e4318e69a976661c2d4a19e`. **Nature :** plan de reprise avec premiers recoupements, sans décision de sortie de HELD, modification de l'original ou visa.

## Méthode et règle commune
- Une passe = une confrontation précise entre registres existants, pièce originale et source de contrôle, puis une décision traçable **avec niveaux** : confirmé / probable / contradictoire / inaccessible.
- Pour les doublons, ne pas fusionner les IDs ; les deux membres d'une paire ont chacun leur passe, mais mutualisent les preuves et conservent les droits/éditions distincts.
- Ne modifier `EDITORIAL_QUEUE.json`, `resources.json`, les alias opérationnels ou les droits qu'après relecture documentaire **et** accord explicite de l'autorité compétente. Le déblocage documentaire n'est jamais l'autorisation de publication.
- Matrice de sortie prévue par ID : `question / affirmation / source-primaire / source-secondaire / version / preuve-lue / contradiction / droits / décision-proposée / statut-révisable / réserve / HEAD`.
- Zéro auteur, date, géométrie, droit de reproduction ou alliance déduits d'une similarité de titre ou d'un lien.

## P1 — BIO-019 · Blanche Lefebvre
**Question :** Blanche Lefebvre, modiste, déléguée du Xe de l'Union des femmes, est-elle distincte de « femme Lefèvre », blanchisseuse du lavoir Sainte-Marie ?
**Existant :** `coordination/c03/biographe/{MATRICE_IDENTITES,INCERTITUDES}.md` ; HIST-05 à HIST-07, affiche AFF5721 et notices Carnavalet. L'historien Jacques Rougerie distingue explicitement ces personnes, contre l'assimilation ; source https://commune1871-rougerie.fr/les-femmes-de-1871,fr,8,58.html .
**Passe :** (1) établir deux lignes de personnes explicitement distinctes ; (2) recouper identité de Blanche sur affiche 373/AFF5721, études Rougerie et archives municipales ; (3) tester dates de naissance/mort et lieux allégués contre pièces d'état civil/judiciaires, sans géolocalisation.
**Critère :** sortie partielle possible uniquement comme notice prudente « identité sur affiche » avec attribution et réserves après lecture de l'original ; biographie complète BLOQUÉE tant que dates et chaîne nominative non démontrées.
**Livrable :** table preuve par assertion + rectificatif d'homonymie ; jamais fusion avec la blanchisseuse.

## P2 — BIO-021 · Joséphine Dulimbert / Dulembert
**Question :** les variantes désignent-elles une même personne ? Quels rôles au club Saint-Eustache, au *Moniteur des citoyennes* et à Montparnasse sont effectivement attestés ?
**Existant :** HIST-08 à HIST-10, matrice Biographe ; sources secondaires https://www.contretemps.eu/journal-commune-7-mai-1871/ (Dulimbert, club Saint-Eustache, attribution Maitron) et https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/chronologie-au-jour-le-jour/1643-lunion-des-femmes-pour-la-defense-de-paris-et-les-soins-aux-blesses (Dulembert, Moniteur/Montparnasse).
**Passe :** (1) extraire citations secondaires exactes avec date et graphie ; (2) rechercher au catalogue BnF, périodique original, pièces de club et archives judiciaires les mentions nominatives ; (3) distinguer « citée comme oratrice », « présentée comme rédactrice » et « aurait défendu la gare ».
**Critère :** identité fusionnée uniquement avec original nominatif ou deux chaînes concordantes ; sinon conserver BIO-021 bloquée et notice d'incertitude interne.
**Livrable :** matrice des trois attributions, non une biographie affirmative.

## P3 — FN-018 · Pepper et Superflu
**Question :** la référence de catalogue désigne-t-elle une œuvre autonome, distincte de *Pepper&Carrot* FN-017 ?
**Découverte nouvelle :** source des auteurs retrouvée : https://www.peppercarrot.com/fr/webcomic-misc/2022-11-09_Pepper-and-Superflu.html . Elle attribue explicitement la collaboration à **David Revoy et Gee**, date **9 novembre 2022**, création conjointe liée aux univers *Pepper&Carrot* et *Superflu*, **uniquement en français**.
**Passe :** (1) vérifier titre, auteur·ices, date et URL d'auteur dans la notice FN-018 ; (2) comparer au FN-017 comme œuvre dérivée/collaboration, pas comme alias ; (3) contrôler licence *du projet précis*, chaque planche et version ; ne pas inférer la licence de Pepper&Carrot pour tous les dessins.
**Critère :** identité bibliographique **fortement confirmée ; proposer levée du blocage « source inconnue » après relecture**. Publication et reproduction restent non autorisées sans droit et visa.
**Livrable :** correction candidate de localisateur et relation `œuvre_liée_à`, sans écriture automatique du registre.

## P4 — FN-022 · La Commune, œuvre de Louise Michel
**Question :** FN-022 désigne-t-elle l'œuvre source de 1898 et quelles versions contient-elle ?
**Existant :** C05 MED, C10 : alias documentaire candidat `FN-048 -> FN-022`. Wikisource donne l'édition P.-V. Stock, Paris 1898 : https://fr.wikisource.org/wiki/La_Commune_(Michel) .
**Passe :** (1) collation bibliographique titre/auteur/éditeur/année/table des matières/URL ; (2) confronter l'origine FN-022 et les transcriptions exactes ; (3) documenter un identifiant d'œuvre commun avec *manifestations/éditions* séparées.
**Critère :** confirmer l'œuvre ne suffit pas à identifier l'édition numérique et sa licence. FN-022 peut servir de notice pivot **candidate**, sans redirection ni suppression de FN-048.
**Livrable :** rapprochement `same_work_candidate` sourcé et graphe des éditions.

## P5 — FN-048 · La Commune (Louise Michel, 1898), édition numérique
**Question :** FN-048 est-elle une autre manifestation éditoriale de la même œuvre, par exemple UQAM fondée sur Stock 1978 ?
**Existant :** même Wikisource que FN-022 selon MED ; source additionnelle UQAM : https://classiques.uqam.ca/classiques/michel_louise/la_commune/la_commune.html , précise une édition électronique Pierre Palpant fondée sur **Stock 1978, 504 pages**, édition originale 1898.
**Passe :** (1) comparer provenance et couverture des versions 1898 / 1978 / UQAM ; (2) contrôler les crédits de numérisation, introduction, appareil critique et conditions de réemploi ; (3) proposer deux notices d'édition sous une œuvre, ou alias documentaire si même manifestation démontrée.
**Critère :** deux IDs préservés ; fusion éditoriale seulement si comparaison de version et décision humaine, jamais simple égalité de titre.
**Livrable :** tableau édition/source/licence/différences et recommandation.

## P6 — FN-038 · Principes féministes de l'internet 2.0 (référence pivot)
**Question :** le dossier décrit-il la version française de 2016, une traduction, ou une édition mise à jour ?
**Existant :** source primaire APC https://www.apc.org/fr/pubs/principes-feministes-de-linternet-20 . Page avec date **24 août 2016**, mise à jour **21 novembre 2024**, traduction attribuée à « karine » dans la page. C05 MED : alias candidat `FN-057 -> FN-038`.
**Passe :** (1) relever original, version 2.0, langue, traduction et changements de page ; (2) relever l'URL de PDF effectivement associé et ses mentions légales propres ; (3) comparer les champs FN-038/FN-057 avant tout alias.
**Critère :** œuvre et traduction communes probables, mais crédits et droits du PDF non vérifiés ; conserver identifiants et distinguer site/PDF/traduction.
**Livrable :** fiche pivot de version datée et tableau des supports.

## P7 — FN-057 · Principes féministes de l'internet 2.0 (notice secondaire)
**Question :** quel élément exact FN-057 ajoute-t-elle à FN-038 (langue, format, édition ou accès) ?
**Passe :** (1) lire côte à côte les champs des deux lignes C02 et C10 ; (2) comparer URL primaire APC, traduction, crédit, date et version PDF ; (3) classer : même manifestation / édition différente / traduction différente / indéterminé.
**Critère :** si même manifestation exactement prouvée, demander décision d'alias **documentaire** `FN-057 -> FN-038`, en conservant sa provenance ; si support distinct, garder deux manifestations. Pas de visa implicite.
**Livrable :** rapport de comparaison avec champs différents et recommandation explicite.

## P8 — DROIT-001 · Manifestations, contrôle d'identité, GAV
**Question :** peut-on séparer une bibliographie informative publiable sous licence d'un **guide opérationnel** juridiquement et médicalement sensible ?
**Existant :** `coordination/mediatheque/DROIT-001_BIBLIO_MANIFESTATIONS_CONTROLES_GAV_2026-10-31.md`, 18 sources ; `coordination/c03/juriste/MATRICE_PAR005.md`, 12 objections Lectrice et 3 WORK, dont contrôle/vérification d'identité, fouille, GAV, nasse, gaz.
**Passe :** (1) réexaminer les textes officiels Légifrance et Service-Public datés, avec portée et exceptions, de 2026 ; (2) distinguer aide juridique vérifiée de conseils associatifs attribués ; (3) soumettre les gestes de premiers secours à revue médicale, les consignes juridiques à un·e juriste, vérifier arrêtés locaux si mentionnés.
**Critère :** la **bibliographie de liens et notices** peut faire l'objet d'un examen séparé ; **DROIT-001 et PAR-005 restent bloqués pour toute consigne pratique** jusqu'à levée par compétences pertinentes et validation humaine.
**Livrable :** tableau par assertion `texte/date/juridiction/exceptions/risque/visa` et séparation notice / fiche pratique.

## P9 — DROIT-002 · Logement, expulsions, aides
**Question :** les étapes pratiques et exceptions sont-elles exactes pour les catégories d'occupants, l'année et le territoire ?
**Existant :** `coordination/mediatheque/DROIT-002_BIBLIO_LOGEMENT_EXPULSIONS_AIDES_2026-10-31.md`, 18 sources ; https://www.service-public.gouv.fr/particuliers/vosdroits/F31272 (vérifié le **6 août 2026**) ; https://www.service-public.gouv.fr/particuliers/vosdroits/F34736 (vérifié le **1 novembre 2026**).
**Passe :** (1) contrôle article par article CPCE L411/L412, loi du 6 juillet 1989 art.24, DALO/DAHO ; (2) tableau distinct locataire, occupation sans titre, logement conjugal, relogement : la trêve du 1er novembre au 31 mars comporte des exceptions ; (3) recouper aides, accès au droit, ADIL/ANIL sans partenariat prétendu et sans données personnelles.
**Critère :** bibliographie descriptive candidate distincte d'une procédure personnalisée ; aucune formule universelle de délais et aucun « recours garanti ». Visa juridique daté requis avant conseil opérationnel.
**Livrable :** matrice des situations, textes/versions, exceptions, orientation fiable et limites.

## Priorité de traitement / ordre recommandé
1. **FN-018** : source d'auteur retrouvée, levée bibliographique candidate rapide.
2. **FN-022 puis FN-048** et **FN-038 puis FN-057** : deux comparaisons groupées mais quatre vérifications par ID.
3. **BIO-019**, puis **BIO-021** : viser d'abord une désambiguïsation critique avant la biographie.
4. **DROIT-002**, puis **DROIT-001** : privilégier l'actualisation de notices documentaires, hors instructions d'urgence ou traitement médical.

## Synthèse de ce premier repérage
- **FN-018 : source primaire retrouvée** ; statut du registre non modifié, droits encore à étudier.
- **FN-022/048 et FN-038/057 : œuvres communes corroborées**, éditions/traductions et supports non collationnés.
- **BIO-019 : distinction de personnes étayée par étude historique** ; actes originaux manquants.
- **BIO-021 : deux graphies attestées par des sources secondaires** ; chaîne nominative primaire absente.
- **DROIT-001/002 : bibliographies avancées mais consignes pratiques bloquées**, revue datée et spécialisée nécessaires.
- **0 statut HELD levé, 0 visa de publication, 0 fusion d'identifiant**.

## Références et limites
Registres et rapports internes : blobs de C02 et matrices Biographe/Médiathèque/Juriste observés à la date du présent rapport ; consulter le HEAD exact ci-dessus. Sources externes consultées lors de ce repérage :
- https://www.peppercarrot.com/fr/webcomic-misc/2022-11-09_Pepper-and-Superflu.html
- https://commune1871-rougerie.fr/les-femmes-de-1871,fr,8,58.html
- https://www.contretemps.eu/journal-commune-7-mai-1871/
- https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/chronologie-au-jour-le-jour/1643-lunion-des-femmes-pour-la-defense-de-paris-et-les-soins-aux-blesses
- https://fr.wikisource.org/wiki/La_Commune_(Michel)
- https://classiques.uqam.ca/classiques/michel_louise/la_commune/la_commune.html
- https://www.apc.org/fr/pubs/principes-feministes-de-linternet-20
- https://www.service-public.gouv.fr/particuliers/vosdroits/F31272
- https://www.service-public.gouv.fr/particuliers/vosdroits/F34736

**Aucune source non consultée n'est déclarée vérifiée. Les références institutionnelles de 2026 ne remplacent pas une collation juridique exhaustive avant diffusion.**
