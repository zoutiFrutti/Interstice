# LA FAILLE NOIRE × INTERSTICE — L’Anarchitecte
## Contrat minimal d’intégration éditoriale avant la première sortie

**31 octobre 2026 · Transmission à La Relieuse, La Graphiste et La Développeuse**  
**Statut : PROPOSITION TECHNIQUE, non adoptée collectivement, aucun visa de publication**  
**Périmètre : dépôt `zoutiFrutti/Interstice`, branche PR #43, état documentaire contrôlé le 31/10/2026.**  
**Interdits : migration Supabase, backend supplémentaire, site parallèle, fusion sur `main`, déploiement ou publication automatique.**

Sources de décision :
- [Décision éditoriale pré-sortie](../RELIEUSE_DECISION_EDITORIALE_PRE_SORTIE_2026-10-31.md)
- [Registre pré-sortie](../ateliers/registre_editorial_pre_sortie_2026-10-31.json)
- [Premier tri critique des 24 pages](2026-10-31_LECTRICE_PRE_SORTIE_24_PAGES_OBJECTIONS_LACUNES.md)
- [Revue des 71 FN](2026-10-31_MEDIATHEQUE_PRE_SORTIE_REVUE_71_FN.md)
- [Dossier d'arbitrage V0](../RELIEUR_014_DOSSIER_ARBITRAGE_INTEGRATION_V0_2026-10-30.md)
- [Méthode éditoriale](../../METHODE_EDITORIALE_SOURCES.md)

### 1. Verdict et périmètre audité

**Réutiliser le site statique actuel.** `wiki.html` et `bibliotheque.html` sont les portes publiques existantes ; `wiki-*.html` sont des articles thématiques existants ; `ressources-data.js` fournit **30 liens sélectionnés** ; `ressources.js` filtre ces ressources et lit aussi un flux de ressources approuvées via Supabase. Le moteur du formulaire de propositions existe déjà : il est **hors du chantier documentaire**. La recherche de `wiki.html` interroge **Wikipédia**, et non un corpus Interstice. Ne pas transformer cette recherche externe en preuve d'une indexation locale.

**Inventaire distinct, pas volume publiable :**
- **44 fiches Drive** : 22 BIO, 8 ASSO, 8 ARCH, 4 EXP, 2 COL ; six premières lectures documentaires avec réserves, 38 sans lecture complète attestée dans le registre ; aucun visa humain.
- **71 notices FN** : références tierces à revoir pour description, version, disponibilité et droits, sans importer les œuvres. Deux paires de liens identiques : FN-022/FN-048 et FN-038/FN-057 ; 49 récupérations de page et 22 tentatives non concluantes dans la transmission Médiathèque. Même URL ne prouve pas automatiquement la même édition.
- **24 pages thématiques sur `main`** : premier tri de La Lectrice, 15 A_CORRIGER, 9 BLOQUEES, 0 VALIDABLE à ce stade. Existent déjà sur le site, mais **présence en production ≠ approbation de première édition**.
- **DROIT-001/002 et ÉCO-001** : dossiers transversaux candidats, pas preuve d'une catégorie publique manquante.
- Les 44 + 71 + 24 constituent 139 entrées d'inventaire de natures différentes, et **aucune approbation groupée**.

**Le site n'est pas entièrement sans backend** : les contributions et ressources publiques font déjà des appels Supabase. La décision ici est de n'ajouter **aucune dépendance serveur** pour les nouvelles pages documentaires, pas de prétendre que les formulaires actuels n'existent pas.

### 2. Deux couches, sans les confondre

**Couche interne de contrôle** : registre de La Relieuse et dossiers Drive, avec source brute, historique des relectures, conflits, versions, droits, réserves, décision explicite de Zout, preuve et tests. Ce registre peut contenir des données non destinées à la navigation publique ; ne pas y exposer d'identifiants Drive privés, de dossiers personnels ou de coordonnées. Les champs manquants ne valent pas accord.

**Couche publique « liste blanche »** : index statique **construit uniquement à partir de contenus retenus et autorisés**, contenant des champs volontairement limités. Séparation obligatoire :
- `review_state` interne : `INVENTORIE` → `RELU_SOURCES` → `RELU_CRITIQUE` → `DROITS_OK_OU_SANS_MEDIA` → `CANDIDAT_SITE` → `ACCORD_EDITO_ZOUT` → `INTEGRE_BRANCHE` → `TESTS_OK` → `PRET_POUR_SORTIE` → `PUBLIE`, plus `BLOQUE_MOTIVE` et `EN_CORRECTION`.
- `public_editorial_label` : **« Édition documentaire sous la responsabilité éditoriale de Zout »** seulement pour les entrées avec accord explicite ; **« Projet en construction — non adopté collectivement »** reste affiché séparément.
- `collective_adoption` : non adopté / adopté avec preuve future. Ne jamais inférer l'adoption d'un commit, d'un test CI, d'un avis d'atelier ou de l'accord personnel de Zout.
- Une page de travail non approuvée ne doit apparaître **ni** dans un index public, **ni** dans les suggestions, sitemap, carte ou résultats de recherche. Sa simple présence dans une branche Git n'en fait pas une fiche publique.

**Garde-fou principal :** la génération des sorties publiques est refusée par défaut sans `decision_Zout = ACCORD_EXPLICITE`, source/version exacte, revue de droits, absence de blocage de sécurité, et test réussi sur la version candidate. Même après autorisation éditoriale, aucun push sur `main` ou déploiement n'est déduit de cette décision.

### 3. Contrat d'identité et de catégories

**Ne pas renuméroter** : BIO-001…022 ; ASSO-001…008 ; ARCH-001…008 ; COL-001 et COL-003 ; EXP-001, EXP-002, EXP-004, EXP-005 ; FN-001…071. Les sauts COL-002 et EXP-003 ne justifient ni création artificielle ni réemploi.

**Champ `type`, dérivé de l'ID et vérifié humainement** :
- `BIO` = biographie ; `ASSO` = association/organisation ; `ARCH` = archive/pièce historique ; `COL` = collectif ; `EXP` = expérience concrète ; `FN` = référence/notice Médiathèque.
- Les 24 `wiki-*.html` sont de type `ARTICLE` avec identifiant stable basé sur **leur chemin existant** (pas d'ID BIO/FN inventé).
- La catégorie publique « thèmes » provient des rubriques déjà visibles : **Savoir et comprendre ; Faire et fabriquer ; S'organiser ; Lieux et expériences ; Personnes et mouvements ; Œuvres et ressources**. Les huit piliers du manifeste peuvent être des **liens thématiques éditoriaux**, non une obligation idéologique ni huit nouvelles bases de données.
- `DROIT` et `ÉCO` sont des **séries/dossiers**, à lier aux pages existantes (logement, écologie, justice, libertés, travail…), pas de nouvelles catégories racines avant un besoin démontré.
- `format` (livre/film/BD/document/outil/archives) et `topics` sont **facettes**, non nouvelles classes d'article.

**Ne pas déduire le type du dossier Drive** : ARCH-001 se trouve dans `COL` ; EXP-001/002/004/005 se trouvent dans `ASSO` au registre. Il faut conserver `source_folder` comme **provenance**, indépendamment de `type`.

**Doublons FN** : tenir `duplicate_candidate_of` sur les paires FN-022/FN-048 et FN-038/FN-057 pour examen de la même œuvre/édition, conserver tous les IDs et historiques ; n'afficher une seule notice représentative qu'après décision humaine, avec alias/redirection stable et mention de regroupement si confirmé.

### 4. Contrat de page et de fichier public

**Routes existantes conservées** : `wiki.html`, `bibliotheque.html`, `wiki-*.html`. Ne pas déplacer les 24 pages pour introduire un système. Pour les nouvelles fiches Wiki approuvées, proposer **`fiches/BIO-009.html`** (même règle pour ARCH/ASSO/COL/EXP, ID exact) ; pour les FN, cartes de notice/ancres `bibliotheque.html#FN-009` tant qu'une page détaillée distincte n'est pas indispensable. Une URL externe d'œuvre n'est pas un fichier hébergé localement.

**Index statique minimal candidat** : `contenus/index-public.json` (un fichier versionné, chargé côté navigateur, généré ou mis à jour sur branche candidate uniquement). Champs publics permis :
- `id`, `type`, `title`, `summary`, `url` (route interne existante ou URL source externe explicitée), `topics`, `format` si utile ;
- `published_at`, `updated_at`, `version`, `edition_responsibility`, `collective_adoption` ;
- `source_refs` contenant au moins URL/cote/crédit utilisables publiquement, distinction original/notice/transcription/édition ;
- `relations` = liens typés vers des IDs existants ou routes publiques : `documente`, `cite`, `contextualise`, `contredit`, `comparer` ;
- `content_labels` pour rendre visibles faits sourcés / source historique ou témoignage / interprétation ou débat / proposition / incertitude ;
- `rights_note` et `correction_route` uniquement s'ils sont vérifiés et non sensibles.

Ne pas exporter `source_folder` privé, ID de document Drive privé, emails, pièces de modération, numéros de téléphone, données de témoins ou états de revue internes détaillés.

**Exemple non publiable, structure seule :**
~~~json
{
  "id": "BIO-009",
  "type": "BIO",
  "title": "Nathalie Le Mel",
  "url": "fiches/BIO-009.html",
  "topics": ["histoire du travail", "Commune de Paris"],
  "source_refs": [],
  "relations": [{"target": "ASSO-008", "relation": "contextualise"}],
  "collective_adoption": "NON_ADOPTE",
  "edition_responsibility": "Zout"
}
~~~
**Ne pas injecter cet exemple** dans une sortie publique : BIO-009 possède des discordances biographiques et n'a pas de visa. En production, ajouter date, version, sources, avis des droits et validation vérifiés ; ne pas créer le lien si ASSO-008 n'est pas effectivement publique.

### 5. Recherche et navigation, sans refonte

1. **`wiki.html`** : distinguer « Rechercher dans les fiches Interstice » (index local) de « Explorer Wikipédia » (service tiers, clairement attribué). Ajouter recherche sur titre, résumé, thèmes, ID et noms alternatifs ; résultats clavier et mobile, titre + type + court résumé + état public, message de zéro résultat. Pas de requête réseau externe pour rechercher dans les fiches locales.
2. **`bibliotheque.html`** : conserver les 30 liens du catalogue `ressources-data.js` et les ressources déjà publiées par le système existant ; brancher les FN approuvées en **jeu distinct** filtré sur `type=FN`, avec accès à l'œuvre externe, crédit, édition, langue/format, droits et statut de consultation. Ne pas déduire « partenaire » d'une présence au catalogue. Ne pas fusionner au hasard une contribution Supabase et une référence FN.
3. **Fiche détaillée** : fil d'Ariane « Wiki > Famille > Titre » ; titre et ID stable ; badge de nature documentaire (non politique) ; chapitres **Faits et sources / Interprétations et débats / Incertitudes / Références et crédits / Fiches liées / Historique et correction**. Une section vide doit être explicitement signalée comme « non documentée » plutôt que remplie par du texte générique.
4. **Navigation transversale** : sur chaque fiche, afficher les liens connexes **publiés et vérifiés**. Liens retour par ID, pas duplication du corps d'article. Pour la Commune, relier les BIO, La Marmite, les archives, le Club des prolétaires et les FN pertinents **uniquement après visa individuel**.
5. **Accessibilité** : HTML sémantique, titres ordonnés, indication du focus, navigation clavier, lien d'évitement, images avec droits et alt, texte non dépendant de la couleur, mise en page 320/390/1280 px, zoom 200 %, impression, fonctionnement en échec de chargement de l'index. Les informations essentielles d'une fiche doivent rester lisibles sans JavaScript ; la recherche dynamique peut ne pas l'être.
6. **Rectification** : lien générique vers un canal public effectivement opérationnel pour erreurs bibliographiques non sensibles ; aucune promesse de confidentialité via GitHub ou formulaire existant. Les dossiers sensibles vont à un responsable humain et à une procédure vérifiée par La Juriste avant toute annonce.

### 6. Contrôles automatiques modestes (Node sans dépendance nouvelle)

À exécuter sur **le SHA exact de la branche intégrée candidate** :
- Unicité et conformité des identifiants ; **sauts autorisés** et regroupements vérifiés.
- `type` compatible avec le préfixe, indépendamment de `source_folder`.
- Chaque route interne déclarée existe ; chaque relation vers un ID cible est résolue **ou gardée non cliquable en interne** si non publique ; zéro lien local cassé.
- Chaque entrée de l'index public a trace d'accord explicite Zout, de source_rev, de revue de droits, d'absence de blocage et de tests ; aucune notice retirée ou brouillon ne s'y glisse.
- Titres, résumés, dates, sources, correction et « non adopté collectivement » présents et lisibles.
- Pas de lien direct vers les Docs privés, de fichiers media copiés sans droits, de script de tracking nouveau ni de soumission d'une donnée de personne dans le parcours documentaire.
- Recherche par titre/ID/mot-clé et filtres retournant les mêmes entrées en mobile et desktop ; zéro résultat et échec de chargement correctement expliqués.
- Non-régression des 24 pages, de la navigation et de `ressources.js`. Les appels Supabase existants restent un chantier distinct : ne pas se servir de tests d'index statique pour certifier ces envois.

### 7. Blocages constatés et arbitrages

| Niveau | Problème constaté / à vérifier | Décision minimale |
| --- | --- | --- |
| P0 éditorial | Aucun des 44, 71 ou 24 n'a de validation globale ; 9 pages sont BLOQUEES au premier tri | **Aucune sortie de nouveaux éléments** sans visas ciblés, droit applicable et sources |
| P0 lien | `wiki-autonomie-materielle-savoir-faire.html` pointe vers `wiki-mutualiser-materiel.html`, absent de `main` | Corriger le lien ou afficher « en préparation » avant intégration |
| P0 versions | PR #44 enrichit deux articles, PR #35 modifie présentation et mêmes fichiers | Assemblage contrôlé : texte final #44, styles retenus #35 ; aucun écrasement silencieux |
| P0 statut | Pages `main` visibles sans décision sur première édition ; manifeste V2.5 et charte non adoptés | Affichage explicite et distinctions de statuts, sans transformer existence en visa |
| P1 recherche | `wiki.html` ne recherche que Wikipédia ; FN absentes du catalogue de 30 ressources | Index public local et deux modes de recherche distincts |
| P1 identité | 5 décalages préfixe/dossier ; sauts COL-002/EXP-003 ; deux paires FN avec URL identique | Table d'identité/alias ; ni renumérotation ni déduplication automatique |
| P1 sécurité | Les formulaires actuels utilisent Supabase ; messages actuels peuvent suggérer une confidentialité non démontrée | Ne pas réutiliser pour rectification sensible ; revue La Juriste |
| P1 CI héritée | Workflow GitHub→Supabase a eu échec d'ingestion aval (409/403) signalé au Relieur | Diagnostiquer séparément sans affaiblir l'auth, **pas une raison de migrer** ni un prérequis à l'index statique |
| P1 validation UX | Tests Chromium favorables de PR #35 sont antérieurs à tout assemblage final et au test Crosscall réel | Tests regroupés sur SHA précis, tactile, clavier et lecteur d'écran |
| P2 taxonomie | DROIT/ÉCO et sujets transversaux répartis entre pages existantes | **Pas de catégorie supplémentaire maintenant**, utiliser séries et relations |

### 8. Trous documentaires : on relie avant d'inventer

- **Travail invisible / coopérations 1871** : indexer le parcours ASSO-008 La Marmite ↔ BIO-009 Nathalie Le Mel ↔ ARCH-008 ↔ COL-003 ↔ FN documentaires ; enrichir les pages Féminismes, Travail, Socialismes. Ne jamais déduire que statut associatif = pratique attestée.
- **Droits pratiques** : DROIT-001 vers Justice/Police/Libertés ; DROIT-002 vers Logement/Justice/Frontières suivant le périmètre. Pas de nouvelle racine « Droit » pour deux dossiers non relus.
- **ÉCO-001** : relier Écologie, Autonomie matérielle, Travail, Frontières, FN et expériences ; distinguer sciences, études historiques et positions politiques.
- **Histoire LGBTQIA+, savoirs autochtones, travail migrant, critique des communs** : pages/corpus existants mais chaînage faible ; enrichir les pages actuelles avant de proposer un nouvel article ciblé.
- **Risque FN** : une notice externe, son œuvre, une édition, une traduction et une archive de fichier sont des **objets différents** ; une URL ne suffit pas à régler provenance et licence.
- **Redondance visible** : `wiki-egalite-fiches.html` et `wiki-egalite-genres-inclusivite.html` sont deux accès au même thème, dont une carte prototype ; organiser notions/cartographie plutôt que dupliquer un glossaire.

### 9. Transmission opérationnelle aux ateliers

**La Graphiste, PR #35** :
- Réutiliser noir/rouge/blanc cassé, Barlow Condensed et Atkinson Hyperlegible Next, styles de focus/contraste existants.
- Dessiner **un seul modèle adaptable** BIO/ASSO/ARCH/COL/EXP/article/FN, sans changer les routes existantes, avec visibilité de l'origine, de l'état public et du « non adopté collectivement ». Pas de badge d'autorité « certifié par le collectif ».
- Proposer affichage mobile/ordinateur/impression de la recherche, des facettes, de l'absence de résultat, des liens connexes et des corrections ; accessible sans image et sans JS pour le texte principal.
- Protéger les deux textes de #44 lors de la reprise visuelle de #35. Aucune fusion dans cette passe.

**La Développeuse, PR #41 et branches techniques** :
- Chiffrer seulement l'option **index JSON public + recherche JavaScript locale** ; ne pas étendre cartes, Supabase, comptes utilisateurs ou API pour les fiches.
- Prévoir contrôle de schéma/IDs, anti-doublons, relations résolues, contrôle de publication explicite et liens locaux ; conserver routes existantes.
- Séparer l'index documentaire des données d'initiatives et des ressources approuvées du formulaire. Ne pas brancher l'index sur `wiki_ingest_private` ni publier les brouillons du flux GitHub→Supabase.
- Évaluer la génération HTML statique sans nouvelles dépendances si le volume des fiches approuvées le justifie, **mais ne rien lancer automatiquement sur `main`**.

**La Relieuse** : garder cette transmission candidate avec le registre, créer des lots de 2 à 5 éléments réellement vérifiés, demander un **visa explicite sur la version du lot**, puis confier l'intégration à La Développeuse et l'affichage à La Graphiste ; vérifier les retours PR et le SHA final. Aucun avis technique ne vaut accord éditorial.

**La Juriste et La Lectrice** : validation du canal de rectification, droits de reproduction et formulations à portée juridique ; contrôle du niveau de source pour chaque relation de fiche.

### 10. Critère d'acceptation de cette architecture

Une démonstration locale sur branche candidate, **avec une ou deux fiches déjà approuvées expressément**, suffit pour éprouver :
1. ouverture depuis `wiki.html` et `bibliotheque.html` ;
2. recherche par ID, titre et mot-clé sans base de données ;
3. liens de relation sans 404, sans doublon affiché comme œuvre distincte ;
4. droits, provenance, version, dates, incertitudes, correction et statut de non-adoption visibles ;
5. clavier/320 px/390 px/zoom/impression et absence de fuite des dossiers internes ;
6. CI verte **sur le SHA assemblé exact**, puis revue humaine distincte pour toute sortie publique.

Ce contrat ne crée **aucune** fiche, n'approuve **aucune** œuvre, n'ajoute **aucun** backend et n'autorise **aucune** publication.

**Décision proposée à Zout :** valider le principe « un index public statique, les pages existantes conservées, des relations entre fiches », puis approuver séparément les premiers contenus vérifiés ; pas l'inverse.


### Annexe A — Vérification effective des liens locaux des 24 pages (main, 31/10/2026)

**Méthode :** lecture des 24 fichiers `wiki-*.html` cités par le registre, extraction de leurs attributs HTML `href`, comparaison des **chemins locaux** avec l'arbre Git du dépôt sur `main` ; exclusion des URL externes, liens de messagerie et ancres seules. Ce contrôle ne remplace ni un navigateur ni une vérification des fragments `#ancre`, liens générés par JavaScript ou destinations externes.

**Résultat :** **une seule destination locale absente détectée** dans ces 24 fichiers : `wiki-mutualiser-materiel.html`, liée depuis `wiki-autonomie-materielle-savoir-faire.html`. Il faut supprimer ce lien ou le remplacer par un lien valide tant que la page n'existe pas. Aucun autre `href` local direct absent n'a été détecté dans le périmètre examiné.

**Quatre pages sans lien sortant direct vers un autre fichier `wiki-*.html`** au contrôle HTML : `wiki-association-collegiale.html`, `wiki-decision-collective.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html`, `wiki-police-deces-memoire.html`. Cela ne signifie pas qu'elles n'ont aucune référence externe ou aucun lien vers une autre rubrique par d'autres mécanismes ; c'est un indice de **faible circulation interne**, à corriger après relecture, sans ajouter des liens décoratifs.

**Suite ciblée :** contrôle manuel des ancres, des chemins dans `wiki.html`/`bibliotheque.html`, du rendu sans JS et des sources externes sur les lots intégrés, puis contrôle automatisé du même type sur le SHA de la branche d'assemblage.
