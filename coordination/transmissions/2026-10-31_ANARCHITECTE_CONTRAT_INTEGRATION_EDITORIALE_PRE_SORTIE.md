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