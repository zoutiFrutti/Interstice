# LA FAILLE NOIRE × INTERSTICE — TRANSMISSION 016
## Missions à objectifs vérifiables · Participation citoyenne · Parcours testable ce soir
**30 octobre 2026 · La Relieuse · Proposition de coordination sur la branche de la PR #43, non fusionnée, non publiée.**

Cette transmission **remplace le quota de 30 passes comme méthode de pilotage** de la Transmission 015. Les actions de 015 restent des pistes techniques utilisables, pas des obligations comptables. Une mission aboutit lorsqu'un résultat observable répond à ses critères, pas après un nombre arbitraire d'opérations.

### Règles identiques pour toutes les conversations
- **Reprendre l'état le plus récent** de la branche et des travaux liés à son atelier. Ne pas recommencer les opérations déjà prouvées. Préserver les contributions concurrentes et ne jamais pousser sur la branche d'un autre atelier sans coordination.
- **Travailler vers l'objectif, sans quota de passes** : lire, comparer, corriger, tester, refaire un essai si nécessaire et documenter. Ne pas produire des actions artificielles pour remplir un compteur.
- **Arrêt sur preuves** : déclarer OBJECTIF_ATTEINT uniquement si **tous** les critères d'acceptation sont étayés (tests, commit, source, capture ou rapport). Sinon PARTIEL, BLOQUE ou NON_COMMENCE, avec preuve du blocage, travail restant et prochain geste utile. Un blocage réel justifie l'arrêt de la tentative, jamais un succès fictif.
- **Autonomie bornée** : continuer les étapes réalisables lors de chaque exécution autorisée ; une conversation ChatGPT ne se réveille pas toute seule. Ne jamais simuler une reprise automatique, une réception de message, une interaction humaine ou un test physique. Aucun délai de réalisation garanti.
- **Traçabilité** : un rapport par mission et par atelier dans la branche ou les documents existants, avec SHA exact, tests réussis/échoués/non effectués, liens et conflits. Une synthèse seulement dans JOURNAL_COMMUN.md après consolidation, sans écrasement des écritures concurrentes.
- **Aucune décision collective présumée** : pas de fusion, déploiement, publication, contact réel, import de lieux, échange d'informations personnelles, changement de droits ni adoption du manifeste sans accord humain explicite. Un dépôt GitHub public n'est pas un coffre pour données privées.
- **Priorité au prototype utilisable et honnête** : l'objectif du 30 octobre est une **version candidate testable** du parcours d'entraide, pas la promesse d'un réseau d'entraide réel déjà en service.

## Cible de test intégral de ce soir (T0) : un parcours, pas treize nouveaux chantiers
Les pages existantes comportent déjà sur main un formulaire de proposition avec file de validation privée, la page participer.html, le Wiki et la bibliothèque. La PR #41 comporte deux lectures cartographiques fictives, une liste, des fiches et une simulation locale de besoin/ressource. La PR #35 travaille sur l'accueil et l'accessibilité. Les PR #42 (acceptation des formulaires), #43 (coordination), #44 (articles Wiki) restent des travaux distincts.

**Parcours T0 proposé, uniquement avec données fictives pour l'entraide cartographique :**
1. Une personne ouvre le site et comprend en une phrase à quoi sert Interstice et ce qui est encore expérimental.
2. Elle choisit « J'ai besoin de… », « Je peux partager… » ou « J'ai une idée / une objection » ; indique si elle le souhaite une commune ou un secteur général, **sans GPS et sans adresse**.
3. La démo présente des fiches compatibles **déjà présentes dans les données fictives**, avec filtres explicables, vue liste accessible, et les deux cartes existantes si l'utilisateur les choisit.
4. La personne peut revenir, changer le territoire, tester l'absence de résultats et comprendre les états : « exemple fictif », « proposition en attente », « ressource déclarée », « accord non établi ». Aucun bouton ne doit promettre un contact réel s'il n'existe pas.
5. La page proposer.html / le formulaire existant peut être mentionné pour les vraies propositions, **mais aucun envoi effectif en production n'est requis pour T0**. La modération et les droits doivent être audités avant de nouveaux flux.
6. Essai sur téléphone étroit (320 et 390 px), ordinateur, clavier seul, navigation retour, textes compréhensibles et sans erreurs JS ni fuite de données.

**T0 est atteint si :** une URL de branche/aperçu utilisable et un mode d'emploi reproductible montrent le parcours complet de démonstration ; tous les cas critiques de navigation passent sur le SHA vérifié ; aucune confusion entre démo et réel ; écarts restants documentés. Si l'assemblage entre branches est encore impossible, produire une **checklist d'intégration honnête** et identifier précisément ce qui empêche T0. Les personnes ne sont jamais obligées d'utiliser GitHub pour participer.

### Réflexion collective sur la participation : hypothèse de design, non doctrine adoptée
L'unité du site doit être une **situation locale**, pas un profil social : un besoin, une ressource, une initiative, une question ou une objection, rattachés au plus à un territoire général. Une personne peut dire « Dans mon coin, il manque un atelier de réparation » sans devoir publier sa vie, choisir un camp ou rejoindre une organisation.

Un chemin possible est : **besoin exprimé → propositions de ressources → conversation volontaire par un canal sûr → coopération concrète ou absence d'accord → retour d'expérience facultatif**. Le système doit rester utile si personne ne répond, si une personne refuse ou se retire, si la situation est conflictuelle, si elle est hors connexion ou si des participant·es ne souhaitent pas apparaître sur une carte.

**À éviter en V0** : likes classant les urgences, scores de vertu, badges de mérite, cartes d'adresses sensibles, certification « safe », obligation de profil, votes décisifs pour les personnes absentes, messagerie privée lancée sans modération, badges « partenaire » sans accord, import de vrais lieux sans vérification, autopublication d'une proposition. **À explorer après essai humain** : suivi volontaire d'un besoin, animation locale tournante, copie papier, panneau d'affichage imprimable, réponse collective non prescriptive, outil de contestation et de retrait.

### Grille de décision pour ce soir
- **Indispensable** : cohérence accueil → découverte → besoin/ressource fictifs → liste/carte → retour ; parcours clavier et petits écrans ; formulation non trompeuse ; tests vérifiés.
- **Intéressant mais non bloquant** : micro-animation sobre, visualisation de rapprochements fictifs, filtres complémentaires, ébauche de parcours hors ligne.
- **Après validation collective et juridique** : vraies mises en relation, comptes, messages, notifications, fiche géographique réelle, accord de coopération, import TIS-001, financement, déploiement sans revue.

## Prompts individuels à copier dans les conversations
Les objectifs priment. Chaque prompt est autonome et doit être lu avec les règles communes ci-dessus. **La Graphiste termine sa mission en cours : ne pas l'interrompre ni lui substituer une tâche.** Les missions historiques attendent l'examen des 50 passes déjà terminées.

### 1. La Relieuse
**Prompt :**
> Tu es La Relieuse de LA FAILLE NOIRE × INTERSTICE. Reprends ta PR #43, le journal commun et les transmissions existantes. Ta mission est de rendre possible **un essai cohérent du site ce soir** sans annoncer de fonction non construite. Contrôle les HEAD et résultats des PR #35, #41, #42, #43 et #44 ; relève les blocages et les dépendances ; arbitre uniquement l'ordre technique de vérification, jamais le fond politique. Prépare une checklist unique d'essai T0 accueil → participation → simulation fictive → cartes/liste → Wiki ; distingue ce qui fonctionne sur branche, ce qui est publiquement déployé, et ce qui reste en attente. Coordonne la réflexion « besoin local → ressources → possibilité de coopération », sans fusion ni publication. Réussite : une checklist reproductible avec URLs, SHA, preuves CI, parcours d'essai et blocages à nommer, plus un bilan transmis à chaque atelier concerné. Travaille jusqu'à satisfaire ces critères ou à documenter le blocage exact. Ne compte pas les passes.

### 2. L'Anarchitecte
**Prompt :**
> Tu es L'Anarchitecte. Sur tes branches existantes, vérifie le contrat technique des deux cartes PR #41, les protections de formulaire PR #42 et la messagerie documentaire PR #43. Objectif : **certifier ou bloquer explicitement le parcours T0**, y compris le cas 320 px, focus, filtres et statut fictif. Définis les frontières entre consultation publique, données simulées, formulaire réel à validation privée et futures interactions citoyennes ; évite toute nouvelle base ou moteur parallèle. Vérifie l'absence de collecte implicite, la surface d'attaque de nouveaux champs et le maintien des critères A01–A15. Réussite : matrice d'acceptation documentée, correctifs nécessaires sur ta branche, résultat des tests sur SHA exact et avis clair « testable / bloqué » ; aucune approbation présumée du déploiement.

### 3. La Développeuse
**Prompt :**
> Tu es La Développeuse. Continue la PR #41 **sans recréer les deux cartes**. Objectif : rendre le trajet fictif « J'ai besoin de… / Je propose… → commune → résultats compatibles → fiche → retour → autre recherche » réellement testable sur sa branche. Corrige d'abord les régressions connues : débordement 320 px, retour de focus et nombre de résultats après filtre. Réutilise les fixtures fictives, l'architecture et le CSS partagés ; aucune donnée réelle ni changement de Supabase. Vérifie 320, 390, 1280 px, clavier, état vide, absence de GPS, liste/carte identiques, navigation retour, erreurs JS et appels réseau. Réussite : démonstration accessible à partir d'une URL/commande documentée, tests navigateur et Node verts sur le HEAD exact, et preuves ou blocages détaillés. Pas de quota de passes, pas de publication automatique.

### 4. La Graphiste
**Prompt à transmettre après sa mission actuelle :**
> Tu es La Graphiste. **Termine d'abord ton travail déjà en cours sur la PR #35**, sans interruption ni écrasement. Ensuite, objectif : rendre compréhensible et utilisable le parcours T0 depuis l'accueil jusqu'aux cartes fictives de la PR #41, à la participation et au Wiki de la PR #44. Conserve logos, styles communs et corrections récentes du Lecteur. Sur un écran étroit, une personne doit distinguer en quelques secondes « explorer », « exprimer un besoin », « proposer une ressource », et voir que les exemples de carte sont fictifs. Teste contrastes, texte, boutons, focus, absence de débordements, réduction du mouvement et performances raisonnables ; documente tout essai Android physique réellement effectué. Réussite : capture/candidat graphique raccordé, CI sur SHA exact, corrections bornées et liste des tests manuels restant à faire. Aucun résultat Android imaginé.

### 5. La Juriste
**Prompt :**
> Tu es La Juriste. Objectif : établir les **conditions concrètes d'une participation citoyenne non intrusive** avant tout raccordement de vraies demandes aux cartes. Reprends les règles existantes, TIS-001, les formulaires, le consentement au référencement, le retrait, la contestation, la conservation, le traitement de signalements et le risque de publication d'un secteur sensible. Distingue « une personne exprime un besoin » de « une organisation accepte un partenariat » ; vérifie les obligations applicables sans inventer une charte disciplinaire. Réussite : tableau autorisé / à corriger / bloquant pour la démo fictive, la collecte actuelle, les futures mises en relation et les informations publiques ; recommandations réalisables à la Développeuse, à La Tisseuse et à La Relieuse. Ni collecte personnelle ni nouvelle règle politique.

### 6. Le Lecteur / La Lectrice
**Prompt :**
> Tu es Le Lecteur ou La Lectrice selon le rôle déjà établi ici. Objectif : livrer les **deux** articles Wiki de la PR #44 comme versions candidates documentées et lisibles par le public, sans ouvrir un troisième chantier. Vérifie sources, bibliographies, formulations juridiques, objections, sommaires et retour vers le site, et que l'article sur les décisions n'insinue pas qu'une plateforme peut décider à la place des personnes affectées. Reprends les corrections confirmées par la Médiathèque et la Juriste, sans effacer les modifications graphiques. Réussite : deux diffs finaux, sources qualifiées, tests HTML/liens et objections restantes classées, avec bilan prêt pour une validation éditoriale humaine. Pas de fusion.

### 7. La Médiathèque
**Prompt :**
> Tu es La Médiathèque. Objectif : fournir des **références traçables et correctement qualifiées** pour les deux articles Wiki et pour les futures fiches citoyennes. Termine la vérification Young, Tebble, Freeman, Berenstain, Ahmed, Federici, Kropotkine, hooks, Freire et Mouffe sans recréer les notices. Distingue lecture de source primaire, extrait, notice et interprétation ; établis pour chaque fiche fictive le modèle de provenance qui servirait à une demande locale : source, date, état de vérification, autorisation de publication éventuelle, droit de correction, sans données privées. Réussite : bibliographies corrigées lorsqu'une preuve existe, table des points non vérifiés et modèle appliqué à des cas fictifs ; rapport à La Relieuse.

### 8. Le Penseur
**Prompt :**
> Tu es Le Penseur. Objectif : vérifier que la future participation locale d'Interstice **facilite l'entraide sans créer de pouvoir caché**. Réutilise études 39–79 et scénarios S1–S3, plutôt que multiplier les textes. Examine une personne isolée sans likes, un besoin non populaire, le refus d'un collectif, une commune moins visible, le travail invisible des personnes qui modèrent ou accueillent, les conflits d'usage et la participation sans Internet. Réussite : quelques objections prioritaires, chacune reliée à un fait/scénario et une correction d'interface ou de méthode testable ; distinction nette entre proposition philosophique et décision réellement adoptée. Transmets au Relieur.

### 9. La Tisseuse
**Prompt :**
> Tu es La Tisseuse. Reprends TIS-001. Objectif : rendre **fiables et utilisables les pistes d'entraide locales**, sans faire passer un repérage pour un partenariat. Cherche et recoupe les structures des secteurs déjà prévus, avec origine, date et informations officiellement déclarées ; conserve les inconnues si non vérifiées. Prépare des exemples de rapprochement entre besoins anonymes et ressources déclarées, et un modèle de champs compatible avec les cartes fictives. Distingue « repéré », « contact possible à examiner », « accord de référencement » et « accord de coopération ». Réussite : dossier de fiches sourcées ou blocages nommés, propositions de rapprochements **non envoyées**, et spécification de transfert pour la Développeuse. Aucun import ni contact réel sans validation.

### 10. L'Archiviste des communs
**Prompt :**
> Tu es L'Archiviste des communs. Ton objectif prioritaire est de **qualifier et exploiter les 50 passes historiques déjà terminées par l'Assistant**, pas de lancer une série arbitraire de nouvelles recherches. Vérifie provenance, doublons, incertitudes et nouvelles pièces autour de La Marmite, l'Union des femmes, les ateliers et le travail invisible. Distingue statuts écrits, pratiques attestées, témoignages intermédiaires et hypothèses ; prépare les corrections utiles au Wiki et au scénario S2. Réussite : inventaire critique des 50 résultats effectivement reçus, rectificatifs prouvés et lacunes prioritaires documentées. Si le bilan manque, marque BLOQUE et identifie précisément ce qui doit être transmis.

### 11. Assistant de l'Anarchiviste
**Prompt :**
> Tu es l'Assistant de l'Anarchiviste. **Tes 50 passes sont terminées et en cours d'examen.** Objectif : fournir à l'Archiviste un dossier exploitable sans perdre la provenance. Consolide les références, sépare trouvailles, vérifications incomplètes et hypothèses, réconcilie les doublons, donne les liens vers pièces et rectificatifs. N'entame de nouvelle recherche que pour une lacune explicitement identifiée après examen. Réussite : table de transmission exhaustive des résultats accessibles, points fragiles signalés et accusé de transmission vérifiable ; si une pièce manque, indique-la sans inventer.

### 12. La Biographe
**Prompt :**
> Tu es La Biographe. Objectif : établir des **identifications historiques publiables seulement lorsqu'elles sont démontrées**. Reprends BIO-019, Blanche Lefebvre et la femme Lefèvre du lavoir séparément, Nathalie Le Mel et les liens entre La Marmite et l'Union des femmes. Intègre seulement les documents nouveaux effectivement vérifiés par l'Archiviste, distingue une homonymie d'une identité certaine. Réussite : fiches rectifiées avec provenance, degré de confiance explicite, corrections proposées aux autres ateliers et liste des points qui empêchent une publication sûre ; aucune fusion de personnes sur un patronyme.

### 13. Communications
**Prompt :**
> Tu es l'atelier Communications. Objectif : préparer des annonces **strictement conformes à ce qu'une personne peut réellement tester**. Reprends les carrousels et légendes existants, corrige tout texte disant que les cartes sont opérationnelles alors qu'elles sont fictives, indique clairement version candidate, site public et fonctionnalités à venir. Décris la participation citoyenne comme une possibilité en construction et non comme un service de mise en relation confirmé. Réussite : paquet de textes et visuels cohérents avec les URL/SHA et preuves de La Relieuse, réserves légales/éditoriales visibles, aucune programmation Metricool ou publication sans validation humaine.

## Prompt universel court (une fois le rôle établi)
> LA FAILLE NOIRE × INTERSTICE — TRANSMISSION 016. Garde ton rôle et tes travaux en cours. Lis ta mission individuelle dans ce document, puis vérifie le HEAD, les résultats récents et les dépendances. Travaille sans quota de passes jusqu'à satisfaire **tous les critères de réussite vérifiables** dans le périmètre autorisé. Si un obstacle réel empêche la suite, consigne BLOQUE ou PARTIEL avec la preuve, sans inventer de réussite ni tourner en boucle. Dépose un rapport traçable sur ta branche et une transmission à La Relieuse. Ne fusionne, ne publie, ne contacte personne et ne traite aucune donnée privée sans autorisation humaine.

## Synthèse à remettre à l'utilisateur après les ateliers
La Relieuse présentera **un parcours d'essai unique**, accompagné des URLs et versions de branche, tests réalisés et non réalisés, problèmes bloquants et décisions humaines nécessaires. Une démonstration fictive ne devient pas un service citoyen réel par simple changement de vocabulaire.


---

## Addendum Transmission 018 — Médiathèque vivante
**30 octobre 2026 — La Relieuse — coordination candidate, sans fusion ni publication.**

### Preuves consultées
- Catalogue Drive \`1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs\` : huit portails déjà ajoutés à la rubrique médias (Commons, Openverse, Gallica, Internet Archive, LOC National Screening Room, European Film Gateway, Musopen, Freesound). Des notices d'œuvres spécifiques préexistent ; ne pas refaire le référencement.
- Journal Médiathèque Drive \`1C7raL1dIAxHeXf8Ps7riE2ssQjGQyoAeb6MBg1MA11Q\` : ajout du 30/10 confirmé ; zéro œuvre supplémentaire FN publiée du fait de cette passe.
- Proposition technique sur main : \`coordination/PROPOSITION_MEDIATHEQUE_VIVANTE_SELECTION_HEBDOMADAIRE_2026-10-30.md\`, commit \`8b5238fdd656625955e6bf19e2a6967854c5871d\` ; conception uniquement, aucun outil en marche.
- \`bibliotheque.html\` sur main reste le point d'entrée actuel ; la PR #38 développe des guides pratiques et doit être préservée. Aucun module « La sélection des communs » branché ou déployé.

### Priorité et cible bornée
**La V0 participation / cartes déjà engagée reste prioritaire.** Le pilote Médiathèque se construit en parallèle seulement côté sélection documentaire, puis se raccorde à une branche candidate après la stabilisation du parcours V0, sans écrire sur PR #35, #38, #41 ou #44 pendant leurs travaux.

**MV-0 — première démonstration statique de dix œuvres réelles** : dix notices choisies dans l'existant avec titre, auteur·rice/crédit, format, durée si connue, langue si connue, territoire/époque si étayés, lien canonique, source, date de contrôle, niveau de lecture/visionnage, statut de droit et incertitudes. Ne pas prétendre à un domaine public ou à une licence libre sans preuve liée à l'exemplaire. La V0 ne recopie ni média tiers ni vignette non autorisée. Elle lie les œuvres sur leurs plateformes d'origine. Présentation sur \`bibliotheque.html\` ou composant complémentaire raccordé, sans casser catalogue, guides et formulaires existants.

### Dépendances par objectif
| Dépendance | Atelier | Résultat attendu | État au contrôle |
| --- | --- | --- | --- |
| MV-0A : 10 notices vérifiées et diversifiées à partir du catalogue existant | Médiathèque | Jeu de dix métadonnées sourcées, liens et droits qualifiés, pas de doublon | PARTIEL : portails et notices existent, sélection finalisée non attestée |
| MV-0B : affichage statique et navigation | Développeuse | 10 cartes reliées aux sources, éventuel « Surprends-moi » local sans suivi, filtre minimal si utile, tests sur SHA exact | NON COMMENCÉ, dépend de MV-0A et de la stabilité de V0 |
| MV-0C : examen des risques de réutilisation et de retrait | Juriste | Avis ciblé sur les dix notices concrètes / droits litigieux, uniquement si nécessaire avant exposition | EN ATTENTE des dix notices |
| MV-0D : accessibilité et cohérence visuelle | Graphiste + Anarchitecte | Revue sur branche candidate existante, clavier/mobile, absence de rupture de parcours | EN ATTENTE de MV-0B, ne pas interrompre le travail courant |
| MV-1 : une ou deux API officielles | Développeuse avec Médiathèque | Étude bornée des conditions d'API, cache, identifiants, dédoublonnage ; aucune aspiration large | REPORTÉ après MV-0 |
| MV-2 : sélection hebdomadaire | Médiathèque + validation humaine | Rotation documentée, sources, contrôle avant mise en avant | REPORTÉ |
| MV-3 : filtres riches / découverte interactive | Développeuse + Graphiste | Interface exploratoire vérifiée, sans notation par popularité ni profilage | REPORTÉ |

### Critères d'acceptation MV-0
1. Un jeu fixe **de dix œuvres réelles sourcées** dont l'état de droits est explicite et non trompeur, validé humainement avant mise en avant publique.
2. Une URL ou commande locale reproductible, et un SHA GitHub précis pour la démonstration ; aucune annonce de diffusion publique tant que non autorisée.
3. Parcours \`bibliotheque.html\` → sélection → œuvre → site source, avec retour, clavier, petit écran, état sans vignette, lien cassé traité ; les accès externes doivent être clairement identifiés.
4. Pas de téléchargement automatique, de copie d'images/audio/vidéo, d'API non autorisée, de collecte ni d'algorithme commercial de popularité.
5. Preuve : jeu de fiches et sources + tests navigateur sur SHA exact + avis ciblés éventuels. Si un blocage existe, le qualifier sans inventer dix œuvres validées.

### Coordination et protections
- Les messages GitHub restent documentaires ; aucune conversation ChatGPT n'est réveillée automatiquement.
- Ne pas renvoyer la Transmission 015, ni demander un quota de passes.
- Les portails ont des conditions de réutilisation distinctes des œuvres individuelles.
- Aucun changement de droits, fusion, déploiement, publication ou adoption politique automatiquement décidé. Le Manifeste V2.5 reste une référence éditoriale non adoptée.


---

## Addendum 018-B — Anarchitecte, réserve de sécurité V0
**31 octobre 2026 — reçu et contrôlé par La Relieuse.** Rapport source sur main : `coordination/ANARCHITECTE_REVUE_V0_018B_2026-10-31.md`, revue de la candidate `integration/v0-018a-candidate-2026-10-30` au SHA `69fcd4701cefeb884fdd46fc14a6ad5bbae6108a`. CI `41128062335` : 58/58 Node et 19/19 Chromium, jobs verts. Le statut du rapport n'autorise pas une ouverture publique.

**Blocage technique confirmé par lecture directe de la candidate :** `script.js` et `ressources.js` contiennent `const INTERSTICE_CANDIDATE_MODE=globalThis.INTERSTICE_CANDIDATE_MODE!==false` et conservent les URL d'envoi et de lecture Supabase. Un acteur peut manipuler le contexte client, donc cette garde n'est pas une barrière de sécurité. Le navigateur de test n'a envoyé aucune requête lors des scénarios examinés, mais cela ne prouve pas que les chemins réels sont inaccessibles.

**Action unique à adresser à La Développeuse — 018-D :** sur la branche candidate d'intégration (en préservant les branches source), retirer physiquement des scripts servis en démonstration les fonctions et URLs de soumission et de lecture de données réelles, tout en laissant l'interface fictive et les messages de non-envoi. Ajouter des assertions sur l'artefact livré et un test navigateur avec altération volontaire de `INTERSTICE_CANDIDATE_MODE` ; rejouer Node et Chromium au SHA final. Aucun changement de permission, endpoint, schéma ni politique Supabase.

**Dépendances :** La Graphiste peut examiner indépendamment l'expérience sur le SHA courant ; sa revue mobile reste à coordonner. L'Anarchitecte ne doit vérifier que le nouveau diff et les preuves CI après 018-D, sans répéter la revue 018-B. La Relieuse organise un test humain local et isolé sur données fictives ; tout déploiement public reste bloqué tant que les chemins réels persistent et qu'une validation humaine de publication n'a pas eu lieu.

**Non fait à cette étape :** correctif logiciel, nouveau test, fusion, publication, autorisation de collecte ou mise en relation réelle. Aucun atelier n'est automatiquement notifié par cette entrée GitHub.


---

## Addendum 018-C — Revue graphique et validation de 018-D
**31 octobre 2026 — vérification directe par La Relieuse.** Ce suivi **actualise** l'état provisoire de la transmission 018-B : la correction 018-D est maintenant réalisée dans la branche candidate ; ne pas renvoyer la même mission.

### Preuves vérifiées
- **Graphiste 018-C :** PR #45 `audit/graphiste-018c-v0-2026-10-31`, HEAD `c1bcc8766e8c3b13bd3b5254671560b4350145c9`. PR documentaire/test uniquement, non fusionnée ; rapport `coordination/transmissions/GRAPHISTE_TRANSMISSION_018C_VALIDATION_V0_2026-10-31.md`. CI graphique `41175965649` et `41176116263` réussies, 30 états vérifiés 320/390/1280, 0 débordement horizontal ; non-validation Android/TalkBack.
- **Défauts constatés sur candidate initiale `69fcd4701cefeb884fdd46fc14a6ad5bbae6108a` :** à 320×850, bandeau accueil 739 px, H1 à 1000 px, premier CTA à 1372 px ; sur Découverte, notice 477 px, H1 à 743 px. Une information honnête mais trop haute masque la première action. L'audit ne relève pas de défaut de fonctionnement des cartes ou des textes Wiki.
- **Sécurité 018-D effectivement corrigée :** candidate intégrée HEAD `9a56a490a3deef80a43ed83b2ff86c9f6c335b05`. `script.js` et `ressources.js` distribués en démo ne contiennent plus d'adresse Supabase, de `fetch()` ni de `INTERSTICE_CANDIDATE_MODE`. CI `41176190522` **success**, **59 tests Node + 20 tests Chromium réussis**, incluant l'attaque simulée de la variable candidate forcée à `false`. Pas d'intervention Supabase ni de fusion. La confirmation au SHA actuel vaut pour ces deux scripts ; ce n'est pas une validation de tous les liens auxiliaires du site.

### Décision 018-E — hiérarchie visuelle minimale avant le test ergonomique
**Responsable écriture unique : La Développeuse, sur la branche intégrée actuelle après vérification du HEAD.** La Graphiste fournit la QA du delta, pas de modification concurrente.

1. `index.html` : maintenir immédiatement visible, avant le H1, une courte mention non ambiguë « Démonstration fictive — aucune initiative réelle », mais déplacer les trois explications de statut après le H1, la présentation et les actions principales, dans une section accessible.
2. `decouvrir-initiatives.html` : même mention courte avant le H1, puis détails accessibles après l'accroche et avant les premières fiches/actions pouvant induire en erreur. Garder « aucune collecte », sans GPS, sans envoi, sans partenariat réel et indisponibilité de messagerie. Le déplacement du texte ne doit pas rendre les conditions invisibles avant une interaction sensible.
3. CSS existants uniquement si nécessaires. Préserver l'identité graphique, l'intégralité des deux articles Wiki, les onze exemples fictifs, les quatre types, les deux cartes/liste, les scripts **sans transport réel** et les tests.
4. Tests de non-régression Node/Chromium, plus test ciblé issu de PR #45 sur 320/390/1280 : premier CTA accueil visible dans la hauteur initiale de 850 px, et titre + accès à la recherche Découverte immédiatement compréhensibles ; mesurer les positions, vérifier les statuts fictifs toujours visibles et la navigation clavier. Si une contrainte empêche ces seuils, exposer mesures et arbitrage explicite plutôt que masquer le défaut.
5. Livrer SHA, diff limité, nouveaux résultats CI ; La Graphiste recontrôle uniquement ce delta et l'Anarchitecte relit seulement les modifications si elles touchent la frontière de sécurité.

### Passage à l'expérimentation
- **Essai exploratoire local encadré avant 018-E : possible**, mais ne prouve pas la qualité du premier écran.
- **Test d'utilisabilité de première visite : après 018-E** et CI ; sur Android physique, idéalement lecture TalkBack, agrandissement de police, actions, carte/liste, retours et compréhension des statuts. Ne recueillir que des observations anonymisées et volontaires, sans donnée de personne ni initiative réelle.
- **Diffusion publique / participation réelle : non autorisée** par ces tests ; contrôle des autres chemins (ex. `proposer-article.html` et CDN Supabase) et validations juridiques/éditoriales et humaines restent nécessaires.

**Aucune fusion ni publication.** La présente note sur GitHub n'envoie aucun message à une autre conversation.


---

## Bilan consolidé 018-D — décision d'essai humain
**31 octobre 2026 — La Relieuse, transmission 018-D reçue et recontrôlée.**

| Contrôle | État | Preuve |
| --- | --- | --- |
| HEAD unique de démonstration | `9a56a490a3deef80a43ed83b2ff86c9f6c335b05` | branche `integration/v0-018a-candidate-2026-10-30` |
| Parcours de base | VALIDÉ automatisé | 11 fiches fictives, 2 cartes + liste, 4 types, formulaires non envoyants, Wiki et deux articles candidats |
| Correctif frontière démo 018-D | VALIDÉ automatisé | Deux scripts sans transport/endpoint réel ; tests forçant l'ancien mode désactivé ; CI `41176190522` 59 Node / 20 Chromium |
| Graphisme 018-C | PARTIEL | PR #45, run `41175965649`, 30 états ; H1/CTA masqués sous bandeaux sur les premiers écrans |
| Android physique / TalkBack / essai citoyen | NON TESTÉ | Aucune preuve d'essai matériel |
| Liens annexes, publication, données réelles | NON VALIDÉ | `proposer-article.html` conserve Supabase ; autorisations et revue collective nécessaires |

**Décision :**
- **PRÊT POUR ESSAI HUMAIN EXPLORATOIRE, LOCAL, ENCADRÉ, SANS COLLECTE NI DONNÉES RÉELLES**, sur copie exacte du SHA vérifié, en limitant le parcours aux pages de démonstration et sans visiter ni soumettre le formulaire annexe `proposer-article.html`.
- **VALIDATION DE PREMIÈRE VISITE REPORTÉE APRÈS 018-E** : La Développeuse corrige seule la hiérarchie de `index.html` et `decouvrir-initiatives.html`, sans toucher aux scripts de sécurité. La Graphiste contrôle uniquement le delta et le premier écran 320/390/1280.
- **RECONTRÔLE 018-D CIBLÉ À L'ANARCHITECTE** : comparer `69fcd470...` → `9a56a490...` et attester absence de transport dans deux scripts et CI correspondante. Ne pas recommencer l'audit complet.
- **SITE PUBLIC / COOPÉRATION RÉELLE : NON AUTORISÉS** : revue des chemins annexes, dispositions de droits, modération, validation des articles et décision humaine/collective indispensables.

**Essai Android proposé** : sur téléphone connecté au même réseau local de confiance qu'une machine servant la copie, scénario Gaillac « chercher un atelier de réparation partagé », sans prénom, coordonnées ni données réelles. Observer compréhension du caractère fictif, visibilité CTA, champs, filtres, carte/liste, fiche/retour, Participation/Wiki ; vérifier taille de police élevée, navigation tactile et TalkBack si disponible. Enregistrer seulement remarques anonymisées et les actions difficiles, avec consentement de la personne volontaire.

**Journal commun sur main** : entrée de réception 31/10 enregistrée sur `coordination/JOURNAL_COMMUN.md`, commit `5cad3079375ef77c3c78478d5a4390c3605f1db4`. Cette mise à jour documentaire n'est pas une mise en ligne de la V0. Aucun atelier de conversation distinct n'a été automatiquement contacté. Aucun merge ni déploiement effectué.


## Suivi DROIT-001 / DROIT-002 — 31 octobre 2026
Chantier transversal **cadré, non publié** : [feuille de route courte, responsabilités et critères de validation](RELIEUSE_FEUILLE_ROUTE_DROIT_001_002_2026-10-31.md). Source : [transmission de la Juriste sur main](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/JURISTE_TRANSMISSION_COMMUNE_ACCES_AUX_DROITS_2026-10-31.md). **Vague A uniquement proposée** (Juriste, Médiathèque, Tisseuse) ; aucune conversation notifiée ni partenariat présumé. Développeuse/Graphiste/Anarchitecte sollicités seulement après fiches vérifiées ; éviter de perturber la V0 actuelle. Aucun conseil personnalisé, collecte, fusion ou publication.


---

## Suivi ÉCOLOGIE 001 — 31 octobre 2026
**Trois axes documentaires candidats, sans nouveau pilier ni modification du manifeste** : [feuille de route ÉCOLOGIE 001](RELIEUSE_FEUILLE_ROUTE_ECOLOGIE_001_2026-10-31.md), à partir de la [transmission source Archiviste](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md) et du corpus déjà ajouté à la Médiathèque. Le pilier 5 du manifeste V2.5 est « Écologie sociale, habitat et autonomie territoriale » (référence éditoriale non adoptée).

**ÉCO-001A** histoire des luttes ; **ÉCO-001B** écologie sociale/communs ; **ÉCO-001C** histoire du végétarisme/véganisme et résultats environnementaux. **Vague A1 proposée :** Médiathèque (table de sources consolidées, sans nouvelles FN redondantes) et Assistant de l'Anarchiviste (index de pièces primaires et droits, pas d'autre synthèse historique). **Vague A2 :** Archiviste (arbitrage critique sur nouvelles pièces) et Biographies (une fiche pilote, après contrôle doublons). **Vague B :** Lectrice, Penseur, Juriste en contrôle ciblé des dossiers ; **Vague C :** Tisseuse uniquement sur besoin précis, sans prise de contact ni partenariat supposé. Huit messages précis **PRÉPARÉS dans la feuille de route** : l'écriture GitHub ne notifie aucune conversation.

**Blocages de publication :** traçabilité historique, validité scientifique et dénominateurs comparatifs, droits des images et textes, reconnaissance des voix autochtones, distinctions entre faits/science/interprétations/politiques et décision humaine collective. Pas de nouveau Wiki, de ligne politique ou de changement technique dans ce dépôt par cette transmission ; la V0 citoyenne et les deux fiches DROIT restent prioritaires selon leurs dépendances respectives.

---

## Responsabilité éditoriale première édition — Zout (31/10/2026)
**Déclaration humaine reçue : Zout assume la responsabilité éditoriale des premières fiches et souhaite leur relecture intégrale et leur intégration au site avant l'annonce de sortie officielle, même sans adoption collective.** Voir [décision et protocole pré-sortie](RELIEUSE_DECISION_EDITORIALE_PRE_SORTIE_2026-10-31.md) et [registre machine des 44 fiches Drive + 71 FN + 24 pages Wiki](ateliers/registre_editorial_pre_sortie_2026-10-31.json). Les catégories se recoupent et ne sont pas 139 articles à créer. Les références Manifest V2.5 et Charte V0.3 sont **non adoptées** ; filtres critiques, jamais censure de faits ou autorité normative. Six fiches ont reçu une première lecture directe avec réserves spécifiques ; **aucune** validation factuelle complète ou autorisation de déployer. La demande est un cap de publication, **pas un visa global sur des contenus non vérifiés**. Aucun message aux autres conversations ni fusion ; préparation en lots éditoriaux, approbation explicite de Zout avant sortie.
