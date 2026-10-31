# LA FAILLE NOIRE × INTERSTICE
## La Graphiste → La Relieuse et L’Anarchitecte
### ÉCO-001 — Proposition graphique documentaire des trois axes écologiques
**31 octobre 2026 · Version 0.1-candidate · NON PUBLIÉE SUR LE WIKI · NON VALIDÉE COLLECTIVEMENT**

> Statut de cette transmission : **maquette et contrat de présentation, non revue historique, scientifique, juridique ou éditoriale**. Aucune image historique générée, aucun nom de personne inventé, aucun témoignage ni accord de partenariat prétendu, aucun nouveau numéro FN/BIO/ARCH et aucun lien ajouté aux pages publiques.

### 0. Base réellement consultée, anti-doublons, état Git

- Proposition de l'Archiviste sur **main** : [2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md](2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md), blob \`2d11da3d3056d9b83ffabaa6ab00f5852a644a5b\` ; **trois axes candidats**, écologie scientifique ≠ politique ≠ éthique animale ; protections des personnes et droits des images.
- Les objections ECO-L01… de **La Lectrice** sont annexées au même document de l'Archiviste : les représentations doivent toujours distinguer fait, source, interprétation, objection, proposition politique et incertitude ; pas de récit d'origine uniquement européen, d'héroïsation de Chipko ou de « femmes naturellement proches de la nature ».
- Page existante du Wiki : \`wiki-ecologie-sociale-environnement.html\` (page thématique déjà reliée à un sommaire de six ensembles). **Ne pas créer un second Wiki écologique** ni réécrire cette page sans coordination.
- Identité sur \`main/style.css\`, notamment \`--faille-black:#101014\`, \`--faille-red:#c5212c\`, \`--faille-ivory:#e9e5db\` ; logos \`assets/logo-faille-noire.svg\`, \`assets/logo-interstice.svg\`.
- PR #35, branche \`design/lancement-v0-verifications-2026-10-30\` (HEAD lu \`9df37c5cd8532598928fd5dd8b795e5ba2e667f4\`) : \`Barlow Condensed\` (titres), \`Atkinson Hyperlegible Next\` (corps), variables \`--font-heading\`, \`--font-reading\`, taille du texte courant environ 18–19 px, grands titres souples, focus visible, réduction des mouvements et impression. **Attention : \`main/assets/fonts\` non trouvé au contrôle ; cette branche de maquettes ne copie pas de police, et son rendu utilisera des fallbacks tant que l'intégration/licence des WOFF2 n'est pas décidée.**
- \`main\` au démarrage : \`4687b026b312fe14bc2704817cc7df78e88aa684\`. Cette proposition est isolée sur \`design/eco-001-maquettes-documentaires-2026-10-31\` ; aucun fichier à la racine du site n'est modifié.
- Maquette de travail **non navigable depuis le site** : \`coordination/maquettes/eco-001-gabarits-documentaires.html\`. Document HTML/CSS autonome et original, sans photo, image, API, JavaScript, formulaire ou dépendance extérieure.

### 1. Décision graphique proposée

**Une seule famille documentaire Interstice, quatre gabarits, trois axes transversaux.** L'axe est une information textuelle, pas une sous-marque, un nouveau logo ni une palette verte.

| Axe candidat | Angle narratif | Gabarits réutilisés | Précaution |
|---|---|---|---|
| **A · Histoire des luttes écologiques** | Chronologies situées : acteurs, travail, milieux, conflits, déplacements et effets | **F** frise historique + **L** fiche de lutte + **B** biographie contextualisée | Pas de récit linéaire du « progrès » ni de centre unique européen ; conflits liés à l'eau/terre/travail et protections imposées visibilisés |
| **B · Écologie sociale, communs et territoires** | Droits d'usage, gouvernance, réussites, exclusions, tensions, preuves d'effets | **L** fiche de lutte + **F** frise + **S** tableau comparatif quand indicateurs vérifiables | Distinguer règle annoncée / réalité observée / revendication et l'absence d'accord de référencement |
| **C · Végétarisme, véganisme, éthique et impacts** | Chronologie des pratiques et mouvements, controverses et résultats empiriques situés | **F** frise + **B** biographie + **S** comparaison scientifique | Ne pas assimiler traditions anciennes au mouvement végan de 1944 ni bénéfices environnementaux et argument éthique ; éviter la culpabilisation individuelle |

### 2. Grammaire commune, sans nouveau design system

**Fond / texte :** conserver noir \`#101014\`, blanc cassé \`#e9e5db\`, rouge \`#c5212c\` pour repères structurants ; fond de cartes proche \`#201d20\` déjà utilisé dans la PR #35 ; bordures neutres grises/ivoire. **Ne pas ajouter de vert** pour signaler « bon », « durable », « vrai », « sain », « certifié », ni de dégradé feuilles/planète. Le rouge identitaire n'est jamais l'unique moyen de signifier une alerte ou un statut.

**Typographie :** \`Barlow Condensed\` et \`Atkinson Hyperlegible Next\` via les variables existantes **une fois les fontes réellement intégrées** ; fallbacks système documentés sinon. Corps 18 px minimum à 320/390, 19 px confortable sur desktop, interligne ~1,6 à 1,75 ; titres proportionnés, bloc de lecture ≤74ch ; les légendes, sources et dates ne doivent jamais descendre sous 16 px en lecture mobile. N'utiliser petites capitales que pour étiquettes secondaires, jamais pour une preuve.

**Structure :** lien d'évitement, fil d'Ariane \`Wiki → Écologie sociale → [axe] → [fiche]\`, un H1, sommaire ancré, texte principal, encadré SOURCES/INCERTITUDES, crédits et version ; titre et accès primaire **avant** l'avertissement long sur mobile, sans supprimer l'avertissement essentiel. Chaque lien porte un libellé descriptif, pas « ici ».

**Statuts en mots** (texte toujours affiché) :
- \`FAIT DOCUMENTÉ\` : assertion précisément sourcée, périmètre délimité ;
- \`SOURCE PRIMAIRE\`, \`TRANSCRIPTION\`, \`NOTICE\`, \`ÉTUDE\`, \`SYNTHÈSE\` : nature du support et **niveau effectivement consulté** ;
- \`INTERPRÉTATION\` ; \`OBJECTION DOCUMENTÉE\` ; \`PROPOSITION À DÉBATTRE — NON ADOPTÉE\` ;
- \`À VÉRIFIER\` ; \`BLOQUANT POUR PUBLICATION\` si preuve/licence essentielle manque.

Ne pas convertir la catégorie de source en verdict de fiabilité automatique. Une source militante peut documenter une position ; une notice institutionnelle n'est pas une archive primaire. Ne pas coder les six catégories uniquement par couleur, iconographie ou forme.

**Motifs :** les deux logos officiels seulement pour la marque ; ligne brisée / réseau de points **abstrait et discret** peut structurer séparateurs et liens documentaires, jamais représenter un vrai réseau de personnes ou des localisations non vérifiées. Pas d'icônes « feuilles = écologie », fleurs décoratives obligatoires, populations en silhouettes, mains ou portraits d'IA.

### 3. Quatre gabarits et règles de composition

#### F — Frise des histoires situées

- **Desktop :** frise à une colonne centrale de dates et des cartes d'événements en colonne latérale, pas de « podium » des grands personnages. Les dates possiblement simultanées sont une liste, pas des points d'une causalité inventée.
- **320/390 :** **frise verticale sémantique** via \`ol/li\`, sans défilement horizontal ; pas de frise SVG seule. Possibilité de filtrer ensuite par territoire ou thème uniquement si la liste complète reste accessible hors JavaScript.
- **Carte d'événement :** date/période (avec \`datetime\` uniquement si ISO établi), lieu/documentation, action collective et personnes/acteurs nommés si sourcés, impacts attestés, débats, source (type + niveau consulté) et \`À vérifier\`.
- **Exemples purement documentaires issus du dossier** : Reclus 1901 (écrit), Chipko 1973–1974 (mobilisations multiples), Green Belt Movement 1977 (organisation), Warren County 1982 (lutte) ; ces quatre repères **ne prétendent ni résumer la chronologie mondiale ni avoir fait l'objet d'une nouvelle vérification des archives**.
- **Contre-récit obligatoire :** lien « Qui manque dans cette chronologie ? » avec références à compléter par les ateliers historiques ; interdiction de faire croire que 1866 est « début de toute conscience écologique ».

#### L — Fiche de lutte / territoire / commun

1. **Contexte :** lieu, dates, ressources concernées, droits d'usage et conditions de travail ; sans géolocalisation précise de communautés vulnérables.
2. **Acteurs :** collectifs, personnes concernées, désaccords, autorités ; expliquer la qualité des sources, ne pas remplacer le collectif par un seul « héros ».
3. **Demandes et méthodes :** séparer déclarations du mouvement, faits administratifs, résultats et interprétations.
4. **Effets et limites :** résultats prouvés, conséquences non vérifiées, controverses, voix absentes et contexte colonial s'il est documenté.
5. **Trace :** sources primaires / analyses / témoignages avec dates, citations minimales autorisées, droits, version et statut.
6. **Orientation :** aucune carte « rejoignez-les » ni partenaire/contact inventé ; renvoi à La Tisseuse si un lieu vivant réel doit être documenté.

#### B — Biographie critique (personne ET cadre collectif)

- Nom historiquement établi, langues/variantes étayées, temporalité et contexte ; jamais inférer genre/origine par l'apparence d'une photographie.
- Parcours, travail concret, écrits, solidarités, conflits, contradictions et controverses vérifiées, conditions de vie et communauté d'action.
- Bloc fixe **« Ce que cette personne n'a pas accompli seule »**, pour les luttes collectives (Chipko, Green Belt, etc.) et **« Qui reste invisibilisé·e ? »** selon les sources.
- Image facultative. En l'absence de photographie libre et autorisée : **aucune silhouette anthropomorphique, aucun faux portrait** ; réserver l'espace à une citation originale contextualisée et courte si droits vérifiés, ou à une notice « Visuel non reproduit ».
- Crédits originaux, sources des noms, édition, date et limites visibles même sans photo ; pas de statut de partenariat implicite avec personne/organisation.
- Pour les personnes contemporaines : pas de données privées, avis de La Juriste/Archiviste pour droits et risque de représentation.

#### S — Comparaison scientifique

- Privilégier **tableau de données accessible + barres horizontales facultatives** lorsque même unité, même année/référence et même base de comparaison. Ne jamais remplacer le tableau par une image.
- Dans le titre du tableau : **grandeur, unité, pays/périmètre, année/source, base de comparaison**, nature de l'indicateur (observé / estimation / modèle / synthèse), échantillon ou couverture et incertitudes.
- Axes des graphiques à zéro pour barres, repères identiques sur une même métrique ; intervalles de confiance présents s'ils existent et ont été vérifiés ; pas de diagramme de tortue, taille de feuille ou pictogramme proportionnel trompeur. Les unités GES / eau / sols / biodiversité ne sont **pas interchangeables** et n'impliquent pas un indice unique de « régime écologique ».
- **Exemple de dossier candidat, pas validation scientifique par Graphiste :** Scarborough et al., *Nature Food* 2023, DOI 10.1038/s43016-023-00795-w, échantillon britannique de 55 504 personnes, estimations ACV ; **base de comparaison importante** : régimes du groupe ≥100g de viande/jour. Les nombres issus du dossier doivent être relus par Médiathèque/Lectrice avant insertion dans une page publique.
- Ne pas transformer les chiffres 2023 du Royaume-Uni en bilan d'une personne particulière ou d'un territoire français. Distinguer **GIEC (synthèse)**, **Scarborough (étude de cohorte couplée à ACV)**, **Li et al. 2024 (modélisation de scénarios, non preuve d'un monde « entièrement végan »)**.
- Autres dimensions à présenter **en prose documentée** : conditions des agriculteurs, accès à l'alimentation, structures agricoles, systèmes de culture et d'élevage, monocultures, droits fonciers. Le véganisme n'est pas réduit au carbone.
- Sous graphique : **tableau équivalent intégral**, méthode, limites, source et date de consultation. Pas de chiffres de démonstration inventés dans la maquette.

### 4. Contrat de provenance, crédits, versions et réserve

Une fiche ou un événement doit pouvoir être décrit **sans ajouter de nouveau système de données** par ce minimum éditorial (JSON optionnel, statique seulement si L'Anarchitecte le juge utile) :

| Champ | Contenu et affichage |
|---|---|
| \`article_id\` | Référence **existante**, sinon \`null / identifiant à arbitrer\`. Ne pas créer de numéro FN/BIO/ARCH |
| \`axis\` / \`template\` | A/B/C et F/L/B/S, en texte avec libellé complet |
| \`title\` / \`territory\` / \`period\` | Titre, lieu/périmètre, date ou intervalle ; \`inconnu\` visible si absent |
| \`editorial_state\` | \`maquette\`, \`candidat\`, \`sources_a_verifier\`, \`relecture_humaine\` ; **aucun état \`publie\` inféré d'un test** |
| \`assertions[]\` | \`type\`: FAIT/INTERPRÉTATION/OBJECTION/PROPOSITION ; \`text\`; \`source_ids[]\` ; \`uncertainty\` ; \`checked_by\` |
| \`sources[]\` | Auteur, titre, édition/version, date, URL/DOI/cote, section/page, **type et niveau réellement consulté**, \`consulted_at\` réel ou \`null\`, droits de reprise |
| \`media[]\` | **Liste vide par défaut**. Sinon créateur, titre, date, possesseur du support, détenteur des droits, licence exacte et URL, preuve d'autorisation éventuelle, crédit imposé, alt descriptif, contraintes de personnes représentées |
| \`history\` | Version du contenu, date réelle de dernière modification, statut de relecture, journal, source de correction ; jamais inventer de dates de vérification |
| \`provenance_note\` | Indiquer si citation depuis original, reproduction, transcription ou notice ; incertitudes visibles |

Un droit d'auteur expiré sur un texte ancien n'implique **pas** que la photo contemporaine du manuscrit, une traduction, une composition graphique ou les droits de personnes identifiables soient automatiquement réutilisables. Vérifier **fichier précis + crédit + licence + contexte + nécessité de montrer** avant de reproduire. Les photographies de Chipko, Maathai, Larzac, etc. ne sont pas autorisées par leur simple présence sur le Web. Images d'archives et signatures du fonds archivistique : même prudence. Aucune image tiers insérée dans la maquette.

### 5. Mobile, lecteur d'écran, impression et hors ligne

| Surface | Critère d'acceptation à tester ultérieurement |
|---|---|
| 320, 390, 1280 px | Aucun débordement global ; frise verticale sur mobile ; légendes refluant ; tableaux scientifiques linéarisables ou alternatives texte ; zoom 200 % |
| Toucher | Liens/boutons autonomes visés ≥44 × 44 px ; espaces entre actions ; les liens en prose ne sont pas artificiellement transformés en gros boutons |
| Clavier | Lien d'évitement, ordre logique, focus visible 3 px, aucun clic obligatoire, pas de carte/graphique indispensable pour accéder à une donnée |
| Lecteur d'écran | Dates lisibles, titres ordonnés, \`ol/li\`, \`figure/figcaption\` pour visuel original, \`caption\` + \`th scope\` sur tableau, aucune signification portée uniquement par couleur |
| Mouvement | Aucun déroulement animé obligatoire, \`prefers-reduced-motion\`; absence de carrousel imposé |
| A4 noir et blanc | Fond blanc, texte noir, sources / URL / droits / révision / statut imprimés, frise sans rouge obligatoire, sauts de pages préservant cartes et légendes si possible |
| Sans JavaScript | Tous les contenus de recherche sont lisibles, liens fonctionnels et impression Ctrl+P possible ; aucune police ni image distante indispensable |
| Preuve | Test statique, Playwright 320/390/1280 + impression et contraste, contrôle humain avec zoom/Android/TalkBack. **Ces tests ne sont pas revendiqués comme effectués par la seule proposition.** |

### 6. Périmètres et répartition

- **La Relieuse :** décide du calendrier d'arbitrage éditorial humain, recoupe fiches et sources avec Médiathèque/Archiviste/Lectrice/Juriste, vérifie l'absence de doublons et de pouvoir d'approbation automatique ; donne accord avant la première intégration d'une fiche candidate.
- **L’Anarchitecte :** vérifie la compatibilité sémantique, les chemins, les points d'accès depuis la page écologique existante, la factorisation des styles et des gabarits (sans nouveau backend), les états éditoriaux, la version print, la possibilité d'audits accessibles sur la future implémentation. Il **n'est pas présumé avoir accepté ce contrat**.
- **La Développeuse :** uniquement après coordination, exploite les styles existants dans un composant/document statique réutilisable ; aucune mutation de \`main\`, Supabase, dépôt ou formulaire actuellement demandée.
- **La Médiathèque + Archiviste :** provenance, notices, droits des documents, variantes et niveaux de consultation ; statut du catalogue existant.
- **La Lectrice + Penseur :** contre-lecture et objection, non-eurocentrisme, cause/corrélation, décisions politiques non adoptées.
- **La Juriste :** données personnelles, droits d'usage et droit de réutilisation des médias, sans création de service juridique.
- **La Tisseuse :** si usages vivants/lieux réels sont cités, statut référencé/documenté ≠ partenariat, pas de coordonnées ni photos sans autorisation.

### 7. Critères de décision humaine avant toute visibilité publique

1. Trois axes reconnus comme **candidats**, pas manifeste nouveau ni adoption collective.
2. Les quatre gabarits sont validés comme **variantes du design existant**, non comme chartes concurrentes.
3. Chaque carte historique et donnée scientifique relie son énoncé exact à une source et à un niveau de consultation ; champs vides restent visibles.
4. Licences et consentements des médias vérifiés **ou zéro média**.
5. Tests 320/390/1280, clavier, 200 %, TalkBack physique quand disponible et impression A4 réalisés sur le **futur code intégré** ; tenir compte de l'anomalie de premier écran signalée par Graphiste 018-C.
6. Accords explicites de La Lectrice/Médiathèque et arbitrage humain, puis seulement décision de fusion/navigation/publication. **Aucune automatisation de l'adoption politique ou scientifique.**

### 8. Conclusion et transmission

**Proposition : VALIDABLE COMME FAMILLE DE GABARITS DOCUMENTAIRES À EXPÉRIMENTER, PAS COMME ARTICLES PRÊTS À PUBLIER.** La page Wiki écologique existante demeure la porte d'entrée. Le modèle graphique ne transforme ni les luttes en icônes héroïsées ni les résultats quantifiés en argument moral automatique.

**Demandes précises à La Relieuse :** arbitrer l'ordre des gabarits pilotes (F + L d'abord, B + S ensuite) et solliciter contre-lecture documentaire ; à L’Anarchitecte : analyser intégration sémantique, contraintes mobile/print/fallback et réemploi \`style.css\` sans backend.

**Modifications du site/publications : AUCUNE.** Les fichiers de maquette et de transmission restent sur une branche/PR de travail, avec statut non approuvé. Écriture dans GitHub ≠ réception effective dans une autre conversation d'atelier.
