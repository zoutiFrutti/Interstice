# LA FAILLE NOIRE × INTERSTICE — L’Anarchitecte : contrat d’intégration éditoriale pré-sortie

**31 octobre 2026 · Transmission candidate à La Relieuse, La Graphiste et La Développeuse**

**Statut :** diagnostic technique et contrat **proposés, non validés, non publiés**. Préparé à partir de la branche de coordination `coordination/relieur-pilote-10-passes-20261030` et d'un contrôle de `main`. Aucun accord de publication ou de représentation collective n'est inféré.

**Références de mandat :**
- [Décision éditoriale de La Relieuse](../RELIEUSE_DECISION_EDITORIALE_PRE_SORTIE_2026-10-31.md)
- [Registre exhaustif de présortie](../ateliers/registre_editorial_pre_sortie_2026-10-31.json)
- [Méthode des sources](../../METHODE_EDITORIALE_SOURCES.md)
- [Critères d'acceptation précédents de L'Anarchitecte](../ANARCHITECTE_CRITERES_ACCEPTATION_39_58_2026-10-30.md)

## 0. État du chantier précédent — vérification GitHub

La PR [#42](https://github.com/zoutiFrutti/Interstice/pull/42), `fix/anarchitecte-v0-acceptance-2026-10-30`, est **ouverte, en brouillon, non fusionnée** au contrôle du 31/10. Elle apporte deux correctifs de formulaires (double soumission et réponse non JSON), huit tests simulés, un workflow et une note de critères. Le workflow **V0 form acceptance** est terminé avec succès sur le SHA exact `347f31c9b2d6a9ad856dcb7500fb982dfc85a602` ([run 41050702125](https://github.com/zoutiFrutti/Interstice/actions/runs/41050702125)). **Travail codé et tests simulés terminés ; test de fonctionnement humain en navigateur, décision de fusion et publication non terminés.**

Les contrats spécifiques accès aux droits et écologie mentionnés dans les transmissions antérieures sont des prototypes candidats. Ils ne constituent pas un nouvel espace de publication. La présente mission ne les duplique pas.

## 1. Périmètre réel, trois natures de contenus

- **44 fiches Drive :** 22 `BIO`, 8 `ASSO`, 8 `ARCH`, 4 `EXP`, 2 `COL`. Dans le registre de coordination contrôlé : 38 `INVENTORIE_NON_REL_U`, 6 `PREMIERE_LECTURE_DOCUMENTAIRE_RESERVES_OUVERTES`. Ces statuts de registre initial ne révoquent pas les rapports spécialisés postérieurs : réconcilier les décisions, ne pas faire passer une nouvelle note pour un visa Zout.
- **71 notices `FN-001..FN-071` :** bibliographies, œuvres, ressources externes. Deux paires de doublons probables `FN-022/FN-048` et `FN-038/FN-057` ; **conserver les quatre IDs** et choisir un canon après contrôle. 49 ouvertures de source, 22 accès non conclusifs, pas 71 lectures exhaustives ni autorisation de reproduire les médias.
- **24 pages `wiki-*.html` sur `main` :** pages thématiques déjà exposées, à réexaminer, non nouvelles fiches. Premier tri de La Lectrice : 15 à corriger, 9 bloquées, zéro visa de sortie.
- **30 ressources externes déjà présentes** dans `ressources-data.js` de `main`, affichées dans `bibliotheque.html` sous six catégories. Ce catalogue *existant* est distinct des 71 FN et ne doit pas être compté comme 30 nouvelles fiches.
- Dossiers pratiques `DROIT-001/002`, écologie `ECO-...`, deux enrichissements de la PR #44 : **lots complémentaires** non ajoutables mécaniquement aux 139 entrées inventoriées.

Aucune de ces présences techniques ne vaut approbation éditoriale ou adoption collective.

## 2. Décision d'architecture minimale

**Un seul site GitHub Pages, les routes et styles existants, zéro nouveau backend, zéro migration Supabase, zéro application ou site parallèle.** La lecture publique documentaire doit fonctionner en statique et sans compte.

1. `wiki.html` reste l'accueil des six familles actuelles ; y ajouter *après validation* un champ de recherche **sur les contenus Interstice approuvés**, séparé et explicitement nommé du formulaire actuel « Explorer Wikipédia ». Le formulaire Wikipédia ne cherche aujourd'hui **pas** le Wiki Interstice.
2. `bibliotheque.html` reste la Médiathèque/Bibliothèque, en conservant `ressources-data.js` et les six catégories existantes. Les `FN` peuvent être affichées sous une section « Notices documentaires » et filtrées par le même moteur, sans recopier les œuvres externes ni brouiller les 30 ressources déjà présentes.
3. Les 24 pages existantes **conservent leurs URL** `wiki-*.html`. Les nouvelles fiches approuvées seront des pages statiques accessibles depuis leurs index et depuis les pages thématiques pertinentes. Ne pas créer de pages vides pour les candidats.
4. Produire à l'intégration **un petit index public généré à partir du lot approuvé**, par exemple `assets/catalogue-editorial-public.json`, chargé localement par un script léger. **Ne pas y verser le registre de travail** (titres sensibles non revus, IDs Drive privés, notes de modération, statuts internes, données personnelles).
5. L'existant `docs/wiki-github-synchronisation.md` décrit une synchronisation GitHub → brouillons de relecture côté Supabase. **Ce pipeline n'est pas un moteur de publication** et ne remplace ni le visa éditorial humain, ni cet index statique. Aucun changement de sa configuration n'est demandé.
6. Reprendre `style.css`, éléments d'en-tête et navigation du site. Les maquettes de La Graphiste (dont PR #47 et PR #35) sont **des propositions à adapter**, pas une seconde interface.

### Modèle de notice publique minimal (contractuel, exemple fictif NON publiable)

```json
{
  "id": "BIO-EXEMPLE",
  "kind": "biographie",
  "title": "Titre validé",
  "url": "fiches/bio-exemple.html",
  "summary": "Résumé original relu, non sensible.",
  "families": ["Personnes et mouvements"],
  "tags": ["histoire", "communs"],
  "sources": [{"label": "Référence vérifiée", "url": "https://example.org", "consultation": "notice"}],
  "credit": "Crédit documentaire vérifié",
  "published_on": "AAAA-MM-JJ",
  "updated_on": "AAAA-MM-JJ",
  "version": "1",
  "editorial_status": "APPROUVE_POUR_EDITION",
  "collective_adoption": "NON_ADOPTE",
  "rights": "Lien externe, sans reproduction",
  "uncertainties": ["Élément à documenter"],
  "related": ["ASSO-EXEMPLE", "FN-EXEMPLE"]
}
```

L'exemple montre la structure et **n'autorise pas sa publication**. Pour les entrées de l'index, préférer des `id` textuels et un `kind` explicitement séparé de `families` et de `tags`. Les références d'index doivent pointer vers des routes réellement existantes. **Aucune URL `fiches/...` ne doit être exposée avant la création et le test de sa cible.** L'index final ne contient que des objets validés, les champs ouverts non applicables sont vides/omis, et les liens source doivent être revus.

### Identifiants et relations

- Ne pas renuméroter `BIO-...`, `ASSO-...`, `ARCH-...`, `COL-...`, `EXP-...`, `FN-...`. Les trous de séquence (ex. `COL-002` ou `EXP-003`) ne prouvent pas un document absent.
- Les 24 pages existantes gardent le chemin HTML comme identité de route ; on peut leur associer une clé d'index de type `PAGE:wiki-ecologie-sociale-environnement`, sans changer le nom du fichier ni lui inventer un `FN`.
- Ne pas confondre le numéro numérique `id` des 30 ressources historiques (1–30) avec un `FN`. Pour l'index transversal, les identifier par `RESSOURCE:1` etc. sans réécrire les fiches historiques.
- Chaque `related` contient uniquement des **IDs canoniques résolus**. Les alias/doublons restent traçables dans l'inventaire privé, jamais deux résultats publics identiques.
- Contrôler `id` unique, `url` locale existante, références `related` résolues, provenance et dates. Conserver les anciennes URL quand les titres changent.

### États : ne pas les mélanger

1. **Interne**, dans la coordination : inventorié → sources relues → critique relue → droits contrôlés → candidat → **accord explicite de Zout** → intégré en branche → tests OK → prêt pour sortie → publié. En correction/bloqué à tout stade.
2. **Public, seulement si réellement publié :** « Article documentaire, édition coordonnée sous la responsabilité éditoriale de Zout », version/date, type de contenus, sources/crédits, réserve et bouton/lien de rectification non sensible. L'intitulé juridique définitif relève de La Juriste.
3. **Politique/collectif :** « Manifeste V2.5 et charte V0.3 : références critiques non adoptées collectivement ». Ce statut est un **axe distinct** de l'approbation documentaire de Zout ; pas de badge de consensus collectif.
4. **Épistémique**, au niveau des passages si nécessaire : `FAIT SOURCÉ`, `SOURCE/TÉMOIGNAGE`, `INTERPRÉTATION/DÉBAT`, `PROPOSITION`, `INCERTAIN/À VÉRIFIER`. Ne pas dissimuler une incertitude dans une étiquette globale « vérifié ».

## 3. Trous documentaires / incohérences vérifiées

| Priorité | Observation contrôlée | Action minimale |
|---|---|---|
| P0 | `wiki.html` interroge Wikipédia seulement ; aucune recherche des pages Interstice elles-mêmes | Ajout d'une recherche locale sur un index de contenus publiables approuvés, accessible au clavier |
| P0 | `wiki-autonomie-materielle-savoir-faire.html` relie `wiki-mutualiser-materiel.html`, cible **absente** de `main` | Retirer/neutraliser le lien ou créer la véritable page **après** vérification et accord, avec test 404 |
| P0 | Dans le registre, **0 visa Zout** sur les 44/71/24 ; les notes de relecture spécialisées doivent être rapprochées | Aucun import/push public des lots tant que le visa précis n'est pas établi |
| P1 | `ARCH-001` est rangé sous `COL` dans `source_folder` et `EXP-001/002/004/005` sous `ASSO` | Clé de classement = préfixe de l'ID et type de contenu relu ; `source_folder` = provenance historique, pas taxonomy |
| P1 | Doubles probables FN-022/048 et FN-038/057 | Canon + alias internes, liens croisés ; **ne jamais effacer les IDs d'archive** |
| P1 | `FN-018` a une notice non normalisée ; 22 URL non concluantes ; licences de nombreux documents inconnues | Normaliser la notice, tester les URL, conserver liens externes sans copie |
| P1 | La plupart des pages Wiki contrôlées n'affichent pas de bloc commun dates, provenance, auteur éditorial, incertitudes | Gabarit réutilisable proposé par La Graphiste, apposé sur les seules pages corrigées/relues |
| P1 | Les six familles Wiki et les six catégories Bibliothèque ne représentent **pas** les mêmes axes de classification | Garder deux navigations familières, ajouter un vocabulaire transversal de tags, pas une nouvelle catégorie racine |
| P2 | Les pages thématiques sont aujourd'hui reliées depuis un index HTML long, sans filtres de type | Parcours « Explorer par thème / par format / par lien connexe » ; liste sans JavaScript en repli |
| P2 | `README.md` décrit toujours un formulaire de « brouillon local », alors que le code actuel transmet des formulaires | La Développeuse met à jour la documentation de fonctionnement **après** tests, sans extrapoler le statut public |

**Lacunes de sujets** : les dix pistes décrites par La Lectrice (décision/contestations, travail invisible, droits pratiques, archives ouvrières et femmes de 1871, savoirs autochtones, archives coloniales, histoire LGBTQIA+, travail migrant, transmission des savoirs, contradictions des communs) peuvent être rattachées aux six familles **sans nouvelle catégorie**. Les relier à des pages et IDs existants avant de demander un article supplémentaire. Un sujet manquant n'est pas automatiquement une rubrique manquante.

## 4. Navigation lisible et inclusive

- Wiki : accueil → **six familles existantes** → sujets/pages → fiches reliées → références FN. Sur chaque page : fil d'Ariane, bloc « À lire aussi », retour vers l'index ; aucun lien vers une page fantôme.
- Médiathèque : recherche par titre/auteur/mot-clé ; filtres existants, éventuellement filtre de **format** (livre, film, archive, outil, etc.) si les notices réellement renseignées le permettent. « Œuvre externe, lien de consultation » distinct d'« article d'Interstice » et d'« initiative recensée ».
- Faire chercher aussi par ID (`BIO-009`, `FN-001`) et variantes de titres, sans confondre résultats externes Wikipédia et documents internes.
- Tout lien externe descriptif indique ses crédits, sa nature et les limites d'accès. Les structures EXP recensées **ne sont pas des partenaires**.
- Mobile 320/390 px, clavier, focus visible, contrastes, labels explicites, titres hiérarchisés, lecture sans JavaScript autant que possible, reflow et impression A4. Ne pas utiliser la couleur seule pour les états. Ne pas imposer de compte pour lire.
- Réclamations/rectifications : canal non sensible testé et expliqué, pas de faux service confidentiel ; confidentialité et mentions légales à contrôler par La Juriste.

## 5. Contrat d'entrée et tests de La Développeuse

**Entrée d'un lot :** `id` stable, texte complet relu, type/format/thèmes, provenance et version, sources effectivement consultées et degré d'accès, crédits/licences ou absence de média, réserves/contradictions, relations `related`, contrôle droits, **visa explicite de Zout**, verdict de La Relieuse. Un rapport séparé peut lier à la fiche sans mettre le brouillon privé dans le site public.

**Tests sur SHA exact de la branche candidate, à exécuter avant toute fusion :**
1. Unicité IDs ; vérification des préfixes, `source_folder` conservé comme provenance, alias FN ; pas de doublon de résultat visible.
2. Tous liens internes, cibles HTML, ancres et `related` existants ; zéro 404, notamment matériel mutualisé.
3. Aucun objet non approuvé, privé ou bloqué exposé dans HTML, JS, JSON, sitemaps ou résultat de recherche.
4. Recherche plein texte **locale** et par ID, sans appel réseau autre que chargement du site ; test sans JavaScript (liste de navigation visible).
5. Statuts « éditorial » et « adoption collective » testés séparément ; un contenu validé pour l'édition n'implique pas une adoption.
6. Crédits, sources, liens externes, dates, incertitudes, rectification et non-partenariat affichés.
7. 320/390/1280 px, clavier, ordre de tabulation, focus, lecteur d'écran humain si possible, impression A4 ; tests humains explicitement marqués `NON_EXECUTE` avant exécution.
8. Vérification de l'absence de nouvelle collecte sur pages de consultation ; ne pas toucher à l'authentification/formulaires actuels via ce chantier.
9. Non-régression des URL existantes et du formulaire Wikipédia distingué du nouveau moteur.
10. Aucune fusion, publication, push `main`, migration Supabase ni déploiement automatique par le mandat.

**Blocages de sortie :** accord de Zout par lot absent ; droits de reproduire non vérifiés ; erreurs sensibles de faits/identités/droit ; liens cassés visibles ; statut collectif trompeur ; index exposant des documents non approuvés ; tests essentiels non exécutés. Les 24 pages de `main` sont déjà techniquement publiques, mais ne doivent pas être présentées comme approuvées sans réexamen.

## 6. Passation aux ateliers concernés

- **La Graphiste** : traduire le champ minimal en **un seul gabarit transversal** (identité noir/rouge/blanc cassé, statut, faits/interprétations, preuves, version, liens et rectification), sans refonte du site ; s'appuyer sur les propositions PR #35/#47, vérifier typos disponibles et rendu clavier/mobile/impression. Éviter de simuler un statut « adopté collectivement ».
- **La Développeuse** : établir la correspondance des `24` pages actuelles, `44` fiches candidates et `71` FN avec les routes, bâtir **en branche candidate uniquement** un index public à partir des visas Zout, sans réutiliser naïvement les clés de synchronisation privées ou ajouter une table. Voir ses propres audits PR #36 et le test PR #42 ; ne pas fusionner les branches concurrentes sans revue.
- **La Relieuse** : rapprocher les verdicts récents des ateliers avec le registre initial (qui n'exprime pas tous les contrôles nouveaux), faire arbitrer les doublons et les lots par Zout, porter la liste courte des contenus effectivement intégrables.
- **La Juriste / La Lectrice / La Médiathèque / L'Anarchiviste / La Tisseuse / La Biographe** : vérifications déjà distribuées ; **pas de relecture documentaire redondante initiée par L'Anarchitecte**.

### Verdict

**Faisable sans site parallèle, sans backend supplémentaire et sans migration.** Mais **pas prêt à publier les fonds** : avant le développement, il manque les visas éditoriaux et la normalisation des liens/provenances. Priorité de réalisation technique : **corriger le lien mort, fixer le contrat d'index, brancher la recherche interne, adapter un gabarit commun et exécuter les tests**. Les changements sont soumis à revue, pas automatiquement autorisés.

**Traçabilité :** diagnostic GitHub du 31 octobre 2026 ; statut « proposition non adoptée collectivement, non publiée » ; absence de test navigateur complet sur ce chantier.

---

## 7. Correction contractuelle — mission 3 passes du 31/10/2026 (sur PR #51)

**Référentiel exact :** PR #51, HEAD initial `783b43334b3e6f1819aea36accf826759fa64478` ; base de la PR = branche de coordination de La Relieuse, **non `main`**. Cette section complète le contrat existant, sans créer une nouvelle architecture ni modifier une page publique. Les documents récemment déposés sur `main` peuvent être absents de cette branche : les rapprocher par chemin/version avant toute intégration.

### Passe 1 : catégories, identifiants, routes et relations historiques/politiques

- Contrôle statique des **24 fichiers `wiki-*.html` de la candidate PR #51** : routes conservées ; extraction des `href` locaux et des ancres `#...`, comparaison des fichiers locaux avec l'arbre Git du SHA. **Un chemin local manquant** : `wiki-mutualiser-materiel.html` dans `wiki-autonomie-materielle-savoir-faire.html`. **Aucune ancre locale cassée ou duplication de `id` HTML détectée** dans les 24 pages par cette extraction simple ; ne couvre pas ancres de destinations distantes, liens dynamiques ni navigation réelle.
- Quatre pages sans lien sortant direct vers un autre `wiki-*.html` : `wiki-association-collegiale.html`, `wiki-decision-collective.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html` et `wiki-police-deces-memoire.html`. Ajouter des liens **sémantiques** vers des pages existantes quand le fond les justifie, pas des renvois de remplissage.
- Le texte HTML des 24 pages ne contient aucun ID littéral `BIO-###`, `ARCH-###`, `ASSO-###`, `COL-###`, `EXP-###` ou `FN-###` détecté par recherche de motif. **Ce constat concerne ces fichiers au SHA contrôlé**, pas les documents Drive ni les branches nouvelles. Il démontre que la découverte par ID et les liens directs vers les fonds ne sont pas encore intégrés.
- Registre présent sur la candidate : 44 IDs uniques selon `id` ; 22 BIO, 8 ASSO, 8 ARCH, 4 EXP, 2 COL ; 71 FN et 24 pages Wiki. Les décalages `ARCH-001=>COL` et `EXP-001/002/004/005=>ASSO` décrivent le **dossier source**, pas une erreur d'identifiant. Sauts `COL-002` et `EXP-003` : **ne pas les combler artificiellement**.
- Registre au SHA contrôlé : `human_approval=A_FAIRE` pour 44/44 ; `publication_decision=AUCUN_VISA_HUMAIN` pour 71/71 FN ; `human_approval=A_FAIRE` pour 24/24 pages. **Ne pas généraliser ce relevé à des versions plus récentes du registre** ou à d'éventuels visas explicites sur d'autres branches.
- Les deux paires FN-022/048 et FN-038/057 pointent vers la même URL par paire ; l'identité des éditions et la politique d'alias restent à décider. Pas de purge d'ID.
- **Routes cibles stables et déjà existantes :** `wiki.html`, `wiki-ecologie-sociale-environnement.html`, `wiki-politique-institutions-regimes.html`, `wiki-socialismes-communismes-anarchismes-autogestion.html`, `wiki-feminismes-histoire-egalite.html`, `wiki-capitalisme-classes-travail.html`, `wiki-decision-collective.html`, `bibliotheque.html`. Pour les relations de la Commune, demander à La Relieuse le visa précis de BIO-009, ASSO-008, ARCH-008 et COL-003 avant d'exposer un lien public vers de nouvelles fiches.
- Un renvoi ne se crée que si **la cible existe dans la candidate de sortie ET est autorisée à paraître**. Sinon conserver la relation dans le registre interne, sans lien cassé ou pseudo-fiche vide.

### Passe 2 : intégration ÉCO-001A/B/C, sans catégorie ni site parallèle

**Source de vérité :** `coordination/RELIEUSE_FEUILLE_ROUTE_ECOLOGIE_001_2026-10-31.md` sur la branche coordination, plus `coordination/transmissions/2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md` sur `main`, la revue de La Lectrice et le contrat antérieur `coordination/ANARCHITECTE_CONTRAT_INTEGRATION_FONDS_ECOLOGIQUE_2026-10-31.md` sur `main`. Ces documents ne sont **pas** trois fiches prêtes à publier.

| ID de travail | Contenu et pièces demandées | Ancrage existant | Dépendances de publication |
| --- | --- | --- | --- |
| **ÉCO-001A** | Histoire des luttes : frise date/lieu/acteurs/objectifs/issue, primaire ou absence, recherche contradictoire, niveaux de lecture, droits | `wiki-ecologie-sociale-environnement.html#axe3`, renvois vers `#axe6` ; liens à Féminismes, Travail, Frontières | Revue Archiviste/Lectrice, droits images, accord Zout sur **version** |
| **ÉCO-001B** | Écologie sociale, communs fonciers, territoires, Reclus/Bookchin/d'Eaubonne, conflits et objections | `#axe3`, renvois `#axe4` (énergie/ressources) et `#axe6` (territoires) ; liens à Socialismes, Logement, Autonomie | Distinguer théorie/terrain/rapport institutionnel, droit des terres, avis Juriste, accord Zout |
| **ÉCO-001C** | Histoire végétarisme/véganisme (1847, Reclus 1901, 1944) **et** comparaison scientifique contextualisée (GES/eau/terres/biodiversité, population/année/comparateur/intervalle/limites) | `#axe5`, dans « Agriculture et alimentation » ; renvois `#axe1` et `#axe2` | Ne pas confondre éthique animale et science, pas de préconisation sanitaire individuelle ; contrôles sources scientifiques/licences et accord Zout |

La page actuelle a déjà six ancres (`axe1` à `axe6`) et des rubriques pertinentes. **Pas de `wiki-ecologie.html`, `eco-001a.html`, nouvelle rubrique racine ou backend**. Une fois les textes approuvés, ajouter des sous-sections accessibles dans **le fichier existant**, avec identifiants d'ancres additionnels optionnels (`eco-001a`, `eco-001b`, `eco-001c`) uniquement si les textes existent ; ne jamais afficher de liens vers des ancres fictives avant cela.

Pour chaque sous-section candidate : ID, version, auteur/coordination éditoriale, date de vérification, sources et degré de consultation, chiffres/études avec périmètre, crédits et droits médias, objections, incertitudes, éventuels liens vers des notices FN **publiées**, distinction « sous responsabilité éditoriale de Zout / non adopté collectivement ». Les données des 3 cas ÉCO-TIS-001 sont des **expériences documentées candidates**, pas des partenariats ni une preuve de disponibilité actuelle.

### Passe 3 : contrat de QA corrigé et avis

Sur le HEAD initial de PR #51 : **le Wiki ne recherche encore que Wikipédia**, la Bibliothèque utilise 30 ressources locales et peut charger des ressources approuvées Supabase, mais **n'intègre pas les 71 FN** ; aucun index public `contenus/index-public.json` ou nouvelle page `fiches/` détecté dans l'arbre. Le fonds historique, les trois ÉCO et leurs relations restent des **candidats**, pas une implémentation testable de moteur interne.

**Résultat QA : PARTIEL / NON PRÊT à intégrer publiquement.** Le contrôle a porté sur le contenu du dépôt et les attributs HTML locaux, pas sur une CI dédiée, un rendu mobile, les API Wikipédia/Supabase, une requête HTTP de chaque source ni un déploiement. Sur le SHA initial de PR #51, l'API GitHub Actions retourne **0 exécution** et l'API de statut ne retourne **aucun check de statut** : ce n'est pas une CI verte. Les tentatives de lecture du site GitHub Pages et de deux sources externes par un client web ont été non concluantes (accessibilité outil/403/redirection). **Ne pas étiqueter ces URLs « 404 » ou « valides » sur cette seule base.**

Critères de QA de la future candidate **assemblée** : (1) zéro lien HTML/fragment local cassé, (2) identifiants uniques et alias contrôlés, (3) recherche interne séparée de Wikipédia, par titre/ID/termes sans fuite des brouillons, (4) notices FN approuvées seulement, sans copie d'œuvre et sans mélange avec les 30 liens ou les contributions Supabase, (5) statut éditorial vs adoption collective distincts, (6) provenance/droits/contradictions visibles, (7) nav clavier/320-390-1280px/zoom/impression/TalkBack, (8) absence de nouveau POST et de dépendance serveur de consultation, (9) tests sur **SHA exact de la candidate assemblée**, (10) autorisation humaine de sortie séparée des checks techniques.

**Vrais points de blocage :** (P0) autorisation par ID+version absente du registre contrôlé et pages sensibles à revoir ; (P0 technique visible) lien `wiki-mutualiser-materiel.html` absent ; (P0 pour nouvelle fonction) recherche locale et index public absents ; (P0 d'intégration) aucune version assemblée avec les textes ÉCO approuvés à tester. Réserves sans refonte : manque de renvois historiques, catégories décalées entre Drive et préfixe (provenance), doublons FN probables, documents datés sur `main` non réconciliés avec la base de PR #51.

**Action La Développeuse :** corriger lien mort sur sa branche candidate ; prévoir index strictement approuvé et recherche locale réutilisant `wiki.html` et `bibliotheque.html` ; éviter de fondre avec le flux GitHub→Supabase et avec la PR #41 cartes. Tests d'intégration et de non-régression sur le SHA assemblé. **Aucune construction de nouvelle plateforme**.

**Action La Relieuse :** comparer les transmissions plus récentes présentes sur `main` et la branche de coordination à la photo du registre de PR #51 ; prioriser visas sur versions exactes, droits/contradictions des trois ÉCO et des liens historiques, sans adopter collectivement le manifeste.

**Conclusion :** ajustement de routage et de contrat dans la PR #51 **uniquement**, sans modification des pages, ajout de base, migration, fusion, déploiement, publication ou visa éditorial.
