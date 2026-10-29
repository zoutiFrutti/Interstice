# Journal commun des ateliers · La Faille noire / Interstice

**Statut : infrastructure de coordination en préparation, non fusionnée dans main.**

Les entrées documentent des observations et non des validations éditoriales. Ne jamais inscrire de données personnelles sensibles. Toute intégration exige une relecture de la branche cible et de ce journal pour résoudre les contributions simultanées.

États de suivi : **PROPOSÉ → EN COURS → RÉDIGÉ → ENREGISTRÉ → INTÉGRÉ → TESTÉ → PUBLIÉ**. Ces états ne sont pas automatiquement successifs : préciser branche, commit et preuves de test.

---

## 2026-10-29 · Atelier diagnostic technique, sécurité et Wiki Interstice

**Sujet étudié :** diagnostic de liens 404 dans le Wiki et correction de la fiche « Décider ensemble ».

**Connaissances découvertes :**
- Le parcours utilisateur mobile a été déclaré fonctionnel sur cinq critères par un testeur : accueil, compréhension du projet, manifeste, ressources/Wiki, participation. Ce résultat n'établit pas la validité de tous les liens internes.
- Le lien direct vers `wiki-association-collegiale.html` et celui vers `wiki-antiracisme-histoires-droits.html` ont été déclarés fonctionnels par le testeur.
- Le lien vers `wiki-decision-collective.html` renvoyait 404 selon le testeur. Le dépôt GitHub `main` contenait le lien dans `wiki.html`, mais pas le fichier cible : absence confirmée par l'API GitHub (404).
- Le fichier manquant a été créé sur une branche dédiée, puis fusionné dans `main`. Son existence sur la branche de correction a été revérifiée par lecture GitHub. Le résultat du déploiement public GitHub Pages n'a pas encore été vérifié.

**Sources et références :**
- Dépôt : https://github.com/zoutiFrutti/Interstice
- Navigation Wiki : https://github.com/zoutiFrutti/Interstice/blob/main/wiki.html
- Correction fusionnée : https://github.com/zoutiFrutti/Interstice/pull/1
- Commit de fusion : `176a835b2be40e0d3a783a43daeb990916e02904`
- Article cible : https://zoutifrutti.github.io/Interstice/wiki-decision-collective.html
- Résultats des tests manuels transmis dans l'atelier, non reproduits indépendamment sur le site public.

**Articles du Wiki concernés :**
- `wiki.html` (index et lien existant)
- `wiki-decision-collective.html` (nouvelle fiche)
- `wiki-association-collegiale.html` (page témoin fonctionnelle)
- `wiki-antiracisme-histoires-droits.html` (page témoin fonctionnelle)

**Contradictions et incertitudes :**
- L'index du Wiki était consultable alors qu'au moins une fiche référencée n'existait pas : un test d'accès à l'index ne suffit pas à valider l'ensemble des ressources.
- La nouvelle fiche sur les méthodes de décision collective est une introduction provisoire ; ses formulations doivent être approfondies avec des sources spécialisées et des retours d'expérience.
- Le déploiement GitHub Pages et les autres liens du Wiki restent à contrôler.

**Modifications réellement effectuées :**
- Création sur la branche `fix/wiki-decision-collective-404-2026-10-29` du fichier `wiki-decision-collective.html`, comprenant consensus, consentement, vote, délégation limitée, précautions et liens de lecture.
- Vérification du fichier via GitHub.
- Création puis fusion de la PR #1 dans `main` ; GitHub a confirmé `merged: true`.
- Aucun changement Supabase dans cette étape.

**Travaux restant à accomplir :**
1. Vérifier que l'article est accessible sur GitHub Pages après déploiement.
2. Auditer tous les liens internes du Wiki et les fichiers correspondants.
3. Compléter et sourcer la fiche « Décider ensemble » ; distinguer définitions, pratiques et débats.
4. Poursuivre les tests d'authentification, de permissions et de modération de la plateforme.
5. Faire examiner la fiche par l'atelier central pour intégration éditoriale.

**Connaissances transférables au Wiki :** comparaison pratique des méthodes de décision collective, conditions d'accessibilité, prévention des asymétries de pouvoir et documentation des mandats révocables.


**État de traitement au 29 octobre :** fiche « Décider ensemble » confirmée présente sur `main` par lecture GitHub ; contrôle de déploiement public restant ouvert.

---

## 2026-10-29 — Atelier identité graphique et intégration des supports

**Sujet :** audit et première intégration de l'identité visuelle commune La Faille noire / Interstice.

**Connaissances constatées :**
- Le dépôt Interstice contient deux SVG construits en formes vectorielles : `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg`.
- Leur parenté est visible dans le code : cercle blanc cassé, faille rouge, fond sombre ; celui d'Interstice comprend des ramifications et des points reliés.
- `index.html`, `manifeste.html`, `bibliotheque.html` et `participer.html` font déjà référence aux logos et/ou à `style.css`.
- `style.css` comporte des variables communes noir `#101014`, blanc cassé `#e9e5db`, rouge `#c5212c`.
- La présence de ces fichiers ne prouve pas leur identité exacte avec les planches approuvées en conversation. Les fichiers maîtres « Planche d’identité visuelle rouge et noire » et « Diptyque des fissures rouges » n'ont pas été retrouvés lors de la recherche Drive effectuée.

**Sources :**
- https://github.com/zoutiFrutti/Interstice/blob/main/assets/logo-faille-noire.svg
- https://github.com/zoutiFrutti/Interstice/blob/main/assets/logo-interstice.svg
- https://github.com/zoutiFrutti/Interstice/blob/main/style.css
- https://github.com/zoutiFrutti/Interstice/blob/main/index.html
- https://github.com/zoutiFrutti/Interstice/blob/main/manifeste.html

**Pages Wiki ou supports concernés :** documentation sur l'identité de La Faille noire et Interstice, accueil, manifeste, bibliothèque des communs, pages de participation ; pas de nouvel article exigé à ce stade.

**Contradictions et incertitudes :** une intégration graphique existe déjà, mais son adéquation avec les planches initialement approuvées reste à établir. Les tests visuels ordinateur/mobile ne sont pas documentés comme réalisés. Le manifeste n'a pas été modifié politiquement pendant cette passe.

**Modifications réellement effectuées :** branche `design/identite-commune-audit-2026-10-28` créée ; consolidation CSS (focus clavier, réduction du mouvement, impression) dans le commit https://github.com/zoutiFrutti/Interstice/commit/f02e9a58823683894050be44ed8aa1eb30773436 . Lecture après écriture vérifiée. Cette branche n'a pas été annoncée comme fusionnée ni publiée. Des entrées ont également été ajoutées dans les journaux Drive Interstice et La Faille noire.

**Restant à faire :** retrouver et comparer les originaux validés ; tester SVG, contraste, navigation mobile et impression ; constituer le kit graphique de variantes réellement dérivées des sources ; contrôler le site distinct éventuel ; mettre en forme le manifeste sans changer les principes ; proposer les intégrations vérifiées avant fusion.

**Transmission à l'atelier central :** utiliser ces constats comme documentation technique avec incertitudes explicites, sans considérer cette entrée comme une validation collective du dessin ou des textes.


**État de traitement au 29 octobre :** contribution graphique **ENREGISTRÉE sur branche** ; vérification d'intégration et tests visuels encore ouverts.

---

## 2026-10-29 · Atelier central de coordination documentaire

**Sujet :** premier audit de l'architecture et consolidation du journal partagé.

**Constats vérifiés :**
- `wiki.html` organise le Wiki autour de six familles transversales et de douze chantiers thématiques, plus des fiches pratiques et lectures croisées.
- `METHODE_EDITORIALE_SOURCES.md` et `charte-contributions-wiki.html` décrivent des règles de critique, d'attribution, de respect des personnes et de validation humaine.
- `WIKI_APPROFONDISSEMENTS.md` est un registre d'approfondissements, non une preuve de réalisation.
- `coordination/JOURNAL_COMMUN.md` était absent de `main` au contrôle initial mais existait dans deux branches divergentes : `coordination/journal-atelier-wiki-2026-10-29` et `coordination/atelier-graphique-2026-10-29`. Les deux contributions sont conservées ici.
- La fiche `wiki-decision-collective.html` est désormais présente sur `main` ; le test de déploiement reste à réaliser.
- Navigation : plusieurs familles de l'index `wiki.html` n'ont pas de lien direct, et les dossiers thématiques sont présentés en longue liste. Audit exhaustif des liens, de l'accessibilité et des citations non effectué.

**Sources :** `README.md`, `index.html`, `wiki.html`, `METHODE_EDITORIALE_SOURCES.md`, `charte-contributions-wiki.html`, `WIKI_APPROFONDISSEMENTS.md`, `wiki-decision-collective.html` sur `main`, et les deux journaux de branches mentionnés ci-dessus.

**Articles concernés :** index `wiki.html`, fiche `wiki-decision-collective.html` ; à terme toutes les fiches des douze chantiers.

**Contradictions / risques :** deux journaux parallèles à fusionner avant de considérer le journal partagé opérationnel ; ne pas assimiler existence de page à validation scientifique ou publication testée.

**Modifications réellement effectuées :** création de la branche `coordination/atelier-central-audit-2026-10-29` et rédaction d'une version consolidée du journal (commit à vérifier). Aucun article Wiki modifié ; aucune fusion sur `main`.

**Suites prioritaires :** faire relire puis fusionner le journal sans perdre les éventuelles nouvelles contributions ; auditer tous les liens internes ; vérifier les fiches, références et niveaux de preuve ; tester le déploiement et l'accessibilité ; documenter les doublons et les rapprochements entre ateliers.

**État : ENREGISTRÉ sur branche, non intégré à main.**

---

## Entrée 001 — 2026-10-29 — Atelier du manifeste et des principes politiques

### 1. Date
29 octobre 2026.

### 2. Atelier
**La Faille noire — Atelier du manifeste / lecture critique transversale**. Contribution destinée à l'atelier central de coordination du Wiki Interstice.

### 3. Sujet étudié
Révision de fond du manifeste V2.1 (26 octobre 2026), préparation d'une V2.2 de travail, articulation entre neuf principes et huit piliers, prise en compte des recherches de la Médiathèque des communs. Attention particulière aux mécanismes de domination, à l'autogestion, à l'accès réel aux droits, au travail, à l'habitat, aux savoirs et à la confidentialité des témoignages.

### 4. Connaissances et constats issus des travaux

**Constats vérifiés dans le texte existant :**
- Le manifeste V2.1 comporte **neuf principes et huit piliers** ; il refuse tout privilège de type veto ou autorité permanente pour les personnes initiatrices. Source : `manifeste.html` sur `main`, SHA blob `29b5b331135c127b635a7fb0dc7f545b45b98da6`.
- La non-discrimination comprend déjà la couleur de peau, la religion ou l'absence de religion, le handicap, la neurodivergence, la classe et la situation administrative. Il ne faut pas prétendre que ces mentions étaient totalement absentes.
- Le texte V2.1 distingue déjà entraide et charité verticale et refuse de devenir le substitut gratuit de services publics délaissés.

**Contributions conceptuelles des lectures critiques (interprétations pour examen, non conclusions scientifiques universelles) :**
- L'égalité statutaire ne garantit pas la participation effective ; obstacles de langue, disponibilité, ressources, normes implicites et maîtrise des procédures à observer concrètement.
- L'absence de hiérarchie déclarée n'empêche pas le **pouvoir informel** par contrôle des documents, comptes techniques, ressources, relations ou propositions mises à l'ordre du jour. À l'inverse, une forte formalisation peut produire sa propre exclusion.
- La propriété, la possession/usage, la responsabilité de maintenance et le pouvoir de décision sur un lieu, une machine ou un outil numérique doivent être distingués.
- Consensus, décision majoritaire, mandat et consultation ont des limites ; l'absence de réaction ne vaut pas automatiquement consentement. Les spécialistes techniques ne reçoivent pas de pouvoir politique général.
- Les savoirs scientifiques, historiques, pratiques, artistiques et vécus peuvent tous éclairer un sujet mais exigent des modes de vérification adaptés. Un vécu singulier n'est pas une preuve statistique ; une source engagée n'est pas nécessairement disqualifiée.
- Une publication **gratuite à consulter** n'est pas nécessairement **sous licence libre** ou **dans le domaine public** ; droits de copie, consentement des personnes et éventuels protocoles de partage culturel demeurent distincts.
- L'autonomie doit être comprise comme capacité à choisir et agir, non isolement imposé. La stabilité matérielle, l'accueil, la mobilité, les droits sociaux et le logement rendent cette capacité plus réelle. L'entraide ne crée pas de dette de gratitude.
- Préserver la possibilité de vivre seul ou collectivement : l'habitat partagé n'est pas une condition pour accéder à un logement digne.
- Les sujets discrimination religieuse (dont islamophobie et antisémitisme), racisme structurel, héritages coloniaux, validisme, migrations, travail pénible, précarité, épuisement, droit au repos et démocratie représentative demandent une articulation plus explicite entre expériences, faits documentés et positions politiques.

**Statut :** ce sont des orientations de rédaction proposées par l'atelier ; aucune n'est adoptée au nom d'un collectif constitué.

### 5. Sources et références exploitées
**Documents internes effectivement consultés :**
- Manifeste V2.1 : https://github.com/zoutiFrutti/Interstice/blob/main/manifeste.html
- Catalogue de la Médiathèque des communs : https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit
- Suivi des recherches et contributions : https://docs.google.com/document/d/1C7raL1dIAxHeXf8Ps7riE2ssQjGQyoAeb6MBg1MA11Q/edit
- FN-003, propriété et communs : https://docs.google.com/document/d/1I5Qymie6ddbF3h_fNZdb6tzWpEHwE-PrcLS2t5jhS1g/edit
- FN-008, égalité réelle et accès : https://docs.google.com/document/d/18TDGqdJk_I2BQtycp3fY_atmY8swIccc_sxWM7Y6BOc/edit
- FN-007, qui participe à la règle : https://docs.google.com/document/d/18WqvazmlGNAircKArb5QW00WU3OE7RG_Uv6vPy2fCXs/edit
- FN-009, pouvoir informel : https://docs.google.com/document/d/1isjMibRPanP_cG-k2CsyFVw4PlMyVeQaHvHmpABopQ8/edit
- FN-009 × FN-019, analyse croisée : https://docs.google.com/document/d/1YVpe_PEIblubEKPL0fSHNT5Cdm4yLUlJxl1l-K7jis8/edit
- FN-019, gouvernance et décisions : https://docs.google.com/document/d/1ITBLDinWdxATQrQNwAQLT6bvIyvIgwmkaf9FgTvz-Is/edit
- Anna Julia Cooper, représentation et savoirs : https://docs.google.com/document/d/1l-ycSQsuZhoK8kEG7QCRVySi9UcUbZmDGEb6j4zRRew/edit
- FN-014, paroles vécues et participation : https://docs.google.com/document/d/10e5n-yUFdztk8t_YxPHqcq9QHi5K-Bm_3xs4Q9pJlCU/edit
- FN-015, accessibilité vécue : https://docs.google.com/document/d/1AUKp6qeW3gYN_9MUBItXFPKiDwiIEWn5QbO8HJviNQE/edit
- FN-020, décisions numériques : https://docs.google.com/document/d/11gJ0VakWIyskSv8Wb9gGOuJ1-malKI2JVr16_wEzRlk/edit

**Œuvres et sources primaires mentionnées dans ces fiches :**
- Jo Freeman, *The Tyranny of Structurelessness* : https://www.jofreeman.com/joreen/tyranny.htm
- Seeds for Change, *Consensus Decision Making* : https://www.seedsforchange.org.uk/consensus
- W. E. B. Du Bois, *The Souls of Black Folk* (1903) : https://en.wikisource.org/wiki/The_Souls_of_Black_Folk_(2nd_ed)
- Olympe de Gouges, *Déclaration des droits de la femme et de la citoyenne* (1791) : https://fr.wikisource.org/wiki/D%C3%A9claration_des_droits_de_la_femme_et_de_la_citoyenne
- Pierre-Joseph Proudhon, *Qu'est-ce que la propriété ?* : https://fr.wikisource.org/wiki/Qu%E2%80%99est_ce_que_la_propri%C3%A9t%C3%A9_%3F
- Anna Julia Cooper, *A Voice from the South* : https://www.gutenberg.org/files/61741/61741-h/61741-h.htm
- Références complémentaires du catalogue : Kropotkine, Louise Michel, textes sur la Commune de Paris, films et essais critiques. **Ces œuvres n'ont pas toutes été lues intégralement ; certaines entrées sont uniquement des fiches bibliographiques ou des lectures ciblées.**

### 6. Articles ou dossiers du Wiki concernés — pistes de rattachement, **pas modifications**
- **Autogestion, démocratie directe, décision collective** : pouvoir informel, consentement explicite, mandats, rôle de l'expertise, objections et contrôle des accès.
- **Propriété, économie des communs, coopératives** : distinguer propriété juridique, usage, maintenance, pouvoir et répartition de la valeur.
- **Éducation populaire / transmission des savoirs** : savoirs situés, validation, participation à l'écriture, accès non technique.
- **Discriminations / antiracisme / égalité réelle / handicap et accessibilité** : distinguer égalité formelle et accès pratique ; consentement et prévention des assignations de représentation.
- **Habitat, squats, droits sociaux, entraide** : accueil sans domination, choix de vie, stabilisation matérielle, responsabilité des services publics.
- **Histoire des mouvements sociaux, Commune de Paris, mouvements féministes** : confronter programmes, décrets, conditions d'application et critiques contemporaines.
- **Culture, archives, droits des œuvres et des témoignages** : licences, domaine public, permissions et contextualisation.
- **Technologie et gouvernance numérique** : pouvoir des administrateurs, confidentialité, alternatives hors ligne et contrôle collectif des infrastructures.
Ces intitulés désignent des thèmes de rapprochement : l'existence de pages particulières à ces titres reste à vérifier avant toute intégration.

### 7. Contradictions, limites et questions ouvertes
- Liberté d'organisation et exigence de procédures équitables : trop peu de règles favorise le pouvoir informel, trop de règles favorise les initiés.
- Recherche de consensus et protection des minorités : le blocage peut protéger mais aussi préserver le statu quo ; aucun mécanisme ne garantit l'égalité.
- Logiciels libres et gouvernance démocratique : libre accès au code ne garantit ni accessibilité réelle, ni sécurité, ni répartition du pouvoir technique.
- Ressources ouvertes et droits culturels : une licence peut coexister avec des demandes de consentement contextualisé pour des témoignages ou savoirs.
- Entraide autonome et maintien des responsabilités publiques : aider sans devenir une main-d'œuvre gratuite remplaçant des services.
- Autonomie territoriale et solidarité large : renforcer les capacités locales sans créer de repli ni d'exclusion.
- Documentation : plusieurs œuvres sont engagées et historiquement situées ; ne pas leur attribuer une preuve expérimentale universelle. Une partie de la bibliographie et des films n'a pas été lue/vue intégralement.
- Le manifeste exprime des positions et objectifs du projet ; les articles encyclopédiques devront distinguer faits vérifiés, interprétations contradictoires et propositions du collectif.

### 8. Modifications **réellement effectuées** et limites de publication
- **V2.1 GitHub `main` : inchangée**. Aucun amendement politique adopté, aucune fusion/p publication du manifeste officiel.
- Document Google Docs V2.2 **de travail** créé et contenu contrôlé : https://docs.google.com/document/d/1Z0ZcFSWunV_u-uOgiZlRUmQXrmO_eZfeXoMzoO7kRjI/edit
- Cette V2.2 comprend une proposition d'introduction « Pourquoi La Faille noire ? », une réécriture proposée du pilier 5 (habitat, accueil, écologie sociale) et des compléments proposés pour les piliers 1, 2, 3, 4, 6, 7 et 8. Ajouts colorés en vert, avec le texte existant conservé en noir.
- Première version comparative limitée au pilier 5 : https://docs.google.com/document/d/1lNjuRCRSARS0yV-KqCDk99dCYAovL7zbg5gvvlfhS7w/edit
- Journal des modifications du manifeste dans Drive enrichi : https://docs.google.com/document/d/1l8IkUey7JSKQ5ot4MmhJQL9KreLTGDw7CsFK_Xny_jM/edit
- **Présente contribution** : première création de `coordination/JOURNAL_COMMUN.md` sur branche séparée `agent/journal-commun-atelier-manifeste-2026-10-29` ; pas intégrée à `main`.
- Aucun témoignage personnel privé versé dans ce journal, le manifeste ou le Wiki.

### 9. Travaux à accomplir
1. Examiner l'intégration de cette entrée au journal commun de `main` **après vérification des nouvelles modifications éventuelles** et sans écraser d'autres ateliers.
2. Faire une lecture stylistique contradictoire de la V2.2 : supprimer répétitions, homogénéiser les sections, distinguer sections normatives et annexes opérationnelles.
3. Contrôler la mise en couleur réelle et la lisibilité mobile du Google Docs, au-delà de la seule relecture de son contenu.
4. Vérifier quels articles Wiki existent déjà avant de proposer des ajouts ; ne pas créer de doublons ni publier directement les propositions politiques comme des faits.
5. Sourcer indépendamment les affirmations historiques, économiques, coloniales, démocratiques et sociales destinées aux dossiers documentaires.
6. Demander aux organes collectifs compétents, lorsqu'ils seront constitués, l'examen des modifications des principes et des piliers ; pas de privilège fondateur.
7. Conserver les prochaines étapes significatives dans ce journal, avec liens, contradictions, statut réel et travail restant.

**Suivi atelier central : contribution retrouvée sur `agent/journal-commun-atelier-manifeste-2026-10-29` ; assertions et fichiers Drive non tous revérifiés indépendamment, intégration Wiki non décidée.**

---

## 2026-10-29 — Atelier Biographies et mémoires — Commune, associations et expériences collectives

**Sujet étudié.** Parcours des communardes et communards, initiatives d'entraide alimentaire, pouvoir informel et participation réelle.

**Connaissances documentées.**
- La Commune de Paris doit être comprise aussi par ses clubs, les travailleurs et les associations de femmes, pas uniquement par les élus. Des fiches distinctes concernent Louise Michel, Nathalie Le Mel, Élisabeth Dmitrieff, André Léo, Eugène Varlin, l'Union des femmes et le Club des prolétaires.
- La Marmite, coopérative alimentaire fondée en 1868 avec Eugène Varlin, Nathalie Le Mel et d'autres personnes, apporte un exemple de statuts, de comptabilité et de restauration à prix de revient.
- Comparaison **analytique, sans filiation attestée** avec le Freegan Pony (cantine participative parisienne, récupération alimentaire) et la Caisse alimentaire commune de Montpellier (cotisations différenciées, MonA et conventionnement par un comité citoyen).
- Les lectures croisées de Jo Freeman sur le pouvoir informel, de l'expérience montpelliéraine et des pratiques de gouvernance suggèrent des questions transversales : qui contrôle l'ordre du jour, les informations, les comptes, les tâches indispensables et les moyens matériels de participer ?
- Des fiches candidates ont également été créées sur Mondragón et sur Barcelona en Comú / Decidim. Elles doivent être lues comme des études de dispositifs avec leurs limites, non comme modèles validés.

**Sources et références.**
- Catalogue de la Médiathèque : https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit (références FN-022, FN-023, FN-045, FN-046, FN-048).
- Association des Amies et Amis de la Commune, dossier sur La Marmite : https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/dossier-thematique/democratie-laicite-oeuvre-sociale/685-la-marmite-une-societe-civile-d-alimentation
- Statuts de La Marmite de janvier 1868, transcription : https://macommunedeparis.com/2018/08/01/statuts-de-la-marmite-19-janvier-1868/
- Louise Michel, *La Commune* (1898) : https://fr.wikisource.org/wiki/La_Commune_(Michel)/Texte_entier
- Jo Freeman, *The Tyranny of Structurelessness* : https://www.historyisaweapon.com/defcon1/tyrstruct.html
- Site de la Caisse alimentaire commune de Montpellier : https://caisse-alimentaire-commune.fr/
- Étude de recherche-action, Montpellier, mai 2025 : https://www.chaireunesco-adm.com/IMG/pdf/_caisse_alimentaire_commune__synthese_rapport_recherche_action__mai_2025.pdf

**Articles et documents candidats du Wiki concernés (Google Drive).**
- BIO-008 Louise Michel : https://docs.google.com/document/d/19mw9tCBdJtzfr72Vt1YRVp3LE8WEf9Ar7o8ozjwgv6c/edit
- BIO-009 Nathalie Le Mel : https://docs.google.com/document/d/1UF54kCo7mwSIze66uNbo1ViEzRhAO4ptUjylBaJR5-o/edit
- BIO-010 Élisabeth Dmitrieff : https://docs.google.com/document/d/1TG4OxT0b43pLJH1YXRjlr8rIgkT5G_WL5LowdRjOLpw/edit
- BIO-011 André Léo : https://docs.google.com/document/d/1QzAF1YMhw_c5ULB1bvfnTnlVz8un8vuZ6k2-b1_nnRk/edit
- BIO-012 Eugène Varlin : https://docs.google.com/document/d/1fAQtq9S9Kfhis9RLwnY5R43t9sacLjo2SRe8-llP72w/edit
- ASSO-007 Union des femmes : https://docs.google.com/document/d/1VGqnT2WnZFcAK8vV-qTedvBAupvR-UVsWkcQ7RsVxAg/edit
- ASSO-008 La Marmite : https://docs.google.com/document/d/1q9b6Ofk7rWSxMaltddYVkG3bGPrcWHtV4UI1gyHQ9YM/edit
- COL-003 Club des prolétaires : https://docs.google.com/document/d/1dCYjWceGFmzbR7GSAoK_r5z5OvwmT4j-ZI-NS7R4_LI/edit
- EXP-001 Freegan Pony : https://docs.google.com/document/d/1JgNnqon3EqMfDrE1NueCIfm9ECjkYouG9KQReXosqxo/edit
- EXP-002 Caisse alimentaire commune : https://docs.google.com/document/d/1jCWq-1OWW3y8GSViWSM26zClzsIhuCr16hDaf1FVxH4/edit
- EXP-004 Mondragón : https://docs.google.com/document/d/1qIwYtVa4Sj5xWQTExW4xhI5x7565tin8-G48CoTz834/edit
- EXP-005 Barcelona en Comú / Decidim : https://docs.google.com/document/d/1lNF43lEs25htaZZgBpX21Llpz3urbXiI6TalBCPu6yY/edit
- FN-009 Pouvoir informel : https://docs.google.com/document/d/1isjMibRPanP_cG-k2CsyFVw4PlMyVeQaHvHmpABopQ8/edit
- FN-019 Gouvernance et décisions : https://docs.google.com/document/d/1ITBLDinWdxATQrQNwAQLT6bvIyvIgwmkaf9FgTvz-Is/edit

**Contradictions et limites.**
- Distinguer souvenirs rétrospectifs de Louise Michel, documents contemporains et recherches postérieures. Les actions des organisations ne doivent pas être attribuées à une seule figure célèbre.
- Le comité central de l'Union des femmes pose une question de coordination et de hiérarchie effective. Le rôle de ses participantes moins connues reste à documenter.
- Les principes de vote de Mondragón ne prouvent pas l'égalité effective entre sociétaires, salariés et filiales.
- L'existence d'un comité citoyen ou d'un outil numérique ne garantit pas la participation égale ; les résultats d'évaluation sont datés et ne valent pas démonstration universelle.
- Les comparaisons La Marmite / Freegan Pony / Montpellier n'établissent pas une continuité historique prouvée.

**Modifications réellement effectuées.**
- Création et vérification des fiches BIO-008 à BIO-012, ASSO-007 à ASSO-008, COL-003, EXP-001, EXP-002, EXP-004 et EXP-005 dans Google Drive, lors des passes précédentes.
- Enrichissements de plusieurs fiches existantes, notamment sur André Léo, La Marmite, Jo Freeman et Montpellier, et tenue d'un journal de travail distinct dans Drive : https://docs.google.com/document/d/1IMaA875eGm4am3X-fVBRO8nZaM5KZGeE6o-B-ji3GXo/edit
- Cette entrée de coordination est proposée sur une branche GitHub séparée ; **aucune publication du Wiki public ni changement du manifeste ou de la gouvernance n'est affirmé**.

**Travaux restant à accomplir.**
1. Revoir les attributions et les chronologies des textes de la Commune sur sources primaires.
2. Documenter les ouvrières et membres ordinaires de l'Union des femmes ; examiner les conflits internes et le degré d'autonomie locale.
3. Étudier la comptabilité, les règles de sociétariat et le travail dans La Marmite.
4. Vérifier les données, les dispositifs de contrôle et la participation effective dans les expériences contemporaines.
5. Faire examiner les croisements proposés par l'atelier central avant intégration au Wiki public.

**État :** contribution documentaire candidate à relecture croisée, sans décision éditoriale collective.

**Suivi atelier central : contribution retrouvée sur `agent/journal-commun-biographies-2026-10-29` ; assertions et fichiers Drive non tous revérifiés indépendamment, intégration Wiki non décidée.**

---

## 2026-10-29 — Atelier communication et identité graphique

1. **Date :** 2026-10-29.
2. **Atelier :** Communication publique / identité graphique / lancement Instagram de La Faille noire.
3. **Sujet :** Préparation des trois premiers carrousels Instagram (12 images), ligne éditoriale et représentation des initiatives solidaires.
4. **Connaissances et décisions documentées :**
   - Le manifeste *La Faille noire*, version de travail 2.1 du 26 octobre 2026, est la référence éditoriale. Il comporte neuf principes et huit piliers et précise que le collectif n'est pas encore constitué.
   - Position exprimée : identifier, rencontrer et compléter les initiatives associatives et collectives existantes plutôt que les remplacer ou parler en leur nom.
   - Distinction opérationnelle : **La Faille noire** porte la démarche et son manifeste ; **Interstice** est envisagé comme outil de documentation, mise en lien et transmission, non comme direction ou autorité fédérale.
   - La ligne éditoriale traite les lacunes institutionnelles, le travail d'entraide qui y répond et la nécessité de ne pas instrumentaliser cet engagement pour justifier le désengagement public.
   - Phrase de communication retenue : « Là où le système laisse des failles, ensemble, des humains tissent des liens. »
   - Carrousel 1 « Les failles » : 4 visuels validés dans la conversation (apparition, besoins sans réponse, solidarités, question politique).
   - Carrousel 2 « Compléter, pas remplacer » : 4 visuels validés ; l'image 3 porte « Écouter, rencontrer, comprendre, relier » ; rejet des visuels convenus de mains empilées ; représentation privilégiée des gestes et actions collectives.
   - Carrousel 3 « Relier sans centraliser » : image 4 sur Interstice validée ; images 1 à 3 encore en proposition, non validées.
   - Charte visuelle de travail : noir profond, blanc cassé, rouge, cercle fissuré, lignes et points reliés, approche pochoir/sérigraphie. Ne pas confondre les interprétations générées avec le fichier source exact du logo validé.
   - Les scènes d'entraide doivent éviter de simuler un reportage réel. Des photos de jardinage collectif et de Repair Café ont été fournies dans la conversation comme références pour des illustrations. Anonymisation des personnages demandée et visuellement retravaillée ; attribution et licences à contrôler sur les fichiers sources avant réutilisation publique.
   - Discord et Matrix ont été envisagés comme deux portes d'entrée ; aucune infrastructure communautaire n'est créée ou vérifiée par cet atelier.
5. **Sources et références :** manifeste de travail v2.1 (26 octobre 2026) consulté dans les fichiers du projet ; échanges et créations visuelles de l'atelier communication dans la conversation ; photographies fournies par l'utilisateur ; dépôt GitHub `zoutiFrutti/Interstice`. Les photographies ne constituent pas des preuves d'une affiliation des personnes représentées à La Faille noire.
6. **Articles Wiki concernés / pistes :** « Présentation de La Faille noire », « Interstice : rôle et limites », « Associations et initiatives existantes », « Autogestion et fédéralisme », « Communs et mutualisation », « Communication éthique et droit à l'image » (titres indicatifs, existence des pages non vérifiée dans cette passe).
7. **Contradictions et précautions :** utiliser Instagram (service propriétaire) pour faire connaître un projet attaché à l'autonomie numérique ; ne pas présenter une fédération envisagée comme déjà constituée ; ne pas confondre solidarité et remplacement permanent des services publics ; distinguer une illustration inspirée d'images réelles d'une preuve documentaire ; respecter l'autonomie et le consentement des collectifs représentés.
8. **Modifications réellement effectuées :** une branche dédiée `atelier/communication-journal-2026-10-29` créée ; cette entrée de journal ajoutée sur cette branche. Aucun fichier Wiki, manifeste, compte Instagram ou publication Metricool modifié par cette contribution.
9. **Suites :** validation des images 1 à 3 du carrousel 3 ; contrôle final des 12 visuels et du logo source ; vérification des licences et crédits si sources photographiques effectivement réutilisées ; préparation des publications en brouillon, sans mise en ligne automatique ; examen des pistes Wiki par l'atelier central.

**Suivi atelier central : contribution retrouvée sur `atelier/communication-journal-2026-10-29` ; assertions et fichiers Drive non tous revérifiés indépendamment, intégration Wiki non décidée.**

---

## 2026-10-29 — Atelier de lecture critique et médiathèque

**Sujet étudié :** lectures croisées sur l'émancipation, les communs, l'autogestion, la représentation, le racisme et le travail invisible, dans le cadre de La Faille noire et d'Interstice.

**Connaissances effectivement documentées :**
- FN-003, P.-J. Proudhon, *Qu'est-ce que la propriété ?* : distinction critique entre usage, possession et pouvoir d'exclusion ; interrogation sur le contrôle des ressources. Lecture ciblée des chapitres, **pas lecture intégrale**.
- FN-008, W. E. B. Du Bois, *The Souls of Black Folk* (1903) : double conscience ; liens entre droits, éducation, propriété et participation ; analyses partielles des 14 chapitres et tension paternaliste dans le chapitre IX. **Livre non déclaré intégralement lu**.
- Anna Julia Cooper, *A Voice from the South* (1892) : articulation entre racisme, sexisme, formation et droit de parler en son nom ; critiques de ses généralisations orientalistes et de son essentialisme ; lectures ciblées, non exhaustives.
- FN-009, Jo Freeman, *The Tyranny of Structurelessness* (1972) : formation de pouvoirs informels en l'absence de responsabilités explicites ; besoin de contrôle collectif et de transmission des savoir-faire.
- FN-019 et FN-020, Seeds for Change : consensus, facilitation et décisions en ligne ; le silence ne doit pas être confondu avec l'accord.
- FN-014 et FN-015, documentaires LGBTQIA+ : notices et, pour FN-015, transcription consultée ; **pas de visionnage intégral**, et droits de FN-014 à confirmer.
- FN-021, Bakounine, *Dieu et l'État* : critique de l'autorité, de l'État et de la domination des spécialistes ; texte posthume et édité, lecture intégrale non attestée ; propos antisémites de l'auteur à traiter avec références dans le dossier critique.
- FN-022 et FN-023, Louise Michel, *La Commune* (1898) et *Mémoires* (1886) : références bibliographiques ajoutées ; témoignages partiels à confronter aux archives. L'Union des femmes (Nathalie Le Mel, Élisabeth Dmitrieff) est une **piste d'enquête**, pas une étude achevée.
- Silvia Federici, *Caliban and the Witch*, et Angela Davis, *Women, Race & Class* : **pistes de comparaison discutées oralement**, notamment reproduction sociale, travail invisible, racisme et différences d'expérience des femmes ; ne pas présenter ces ouvrages comme intégralement lus ni comme fiches Wiki publiées.

**Sources et références :**
- Catalogue vivant de la Médiathèque des communs : https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit
- Journal de recherches : https://docs.google.com/document/d/1C7raL1dIAxHeXf8Ps7riE2ssQjGQyoAeb6MBg1MA11Q/edit
- Du Bois (original) : https://www.gutenberg.org/ebooks/408
- Cooper (original) : https://www.gutenberg.org/ebooks/61741
- Proudhon : https://fr.wikisource.org/wiki/Qu%E2%80%99est-ce_que_la_propri%C3%A9t%C3%A9_%3F
- Bakounine : https://fr.wikisource.org/wiki/Dieu_et_l%E2%80%99%C3%89tat_%281892%29
- Louise Michel : https://fr.wikisource.org/wiki/La_Commune_(Michel)/Texte_entier
- Jo Freeman : https://www.jofreeman.com/joreen/tyranny.htm
- Seeds for Change : https://seedsforchange.org.uk/downloads/consensus.pdf et https://www.seedsforchange.org.uk/downloads/onlinedecisions.pdf

**Articles Wiki existants à rapprocher, sans présumer de leur existence ni de leur contenu actuel :** autogestion, gouvernance des communs, égalité réelle, droits politiques, féminismes, Commune de Paris, travail reproductif, éducation populaire, antiracisme, biographies critiques de Du Bois, Cooper, Michel, Freeman et Bakounine. L'atelier central doit identifier les pages réelles et arbitrer entre enrichissement et création.

**Contradictions et précautions :** liberté proclamée versus moyens matériels d'exercer les droits ; expertise utile versus autorité permanente ; structures explicites versus élites informelles ; égalité abstraite versus charges invisibles ; opposition aux dominations et préjugés de certains auteurs. La pensée de Federici sur les chasses aux sorcières est historiographiquement débattue ; la pensée de Davis mérite lecture primaire avant conclusions détaillées. Statut des droits de traduction à vérifier.

**Modifications réellement effectuées AVANT cette contribution :** création et enrichissement de fiches candidates et études appliquées dans Google Drive ; ajout vérifié de FN-021, FN-022 et FN-023 au catalogue ; la dernière consultation du catalogue fait aussi apparaître FN-024 et FN-025, ajoutés par un autre chantier. **Aucun article Wiki ni manifeste publié ou modifié par cet atelier dans cette étape.**

**Travaux restant à accomplir :** terminer les lectures rapprochées avant de les déclarer exhaustives ; vérifier les sources et les droits des œuvres récentes ; consulter les articles existants du Wiki ; documenter les femmes et collectifs de la Commune ; élaborer une confrontation sourcée Federici–Davis ; distinguer projets d'expérimentation et décisions collectives ; poursuivre le journal après chaque étape significative.

**Modifications GitHub de cette entrée :** création du présent fichier sur branche de travail `atelier-lecture/journal-commun-2026-10-29` ; sous réserve de vérification après écriture. Aucune modification directe de `main`.

**Suivi atelier central : contribution retrouvée sur `atelier-lecture/journal-commun-2026-10-29` ; assertions et fichiers Drive non tous revérifiés indépendamment, intégration Wiki non décidée.**

---

## 2026-10-29 · Atelier central · Passe 2 : consolidation et contrôle ciblé de navigation

**Sujet :** recensement des contributions concurrentes et audit des fichiers pointés par `wiki.html`.

**Découvertes :** quatre branches nouvelles contenaient des journaux autonomes (manifeste, biographies, lecture critique, communication), ajoutés en intégralité au présent journal. Les contributions sont des travaux documentaires, non une validation indépendante de toutes les sources ou des pièces Google Drive. `coordination/JOURNAL_COMMUN.md` demeure absent sur `main` lors de cette passe.

**Audit :** 28 liens de `wiki.html` ont été vérifiés côté dépôt (12 dans un premier lot, 16 dans un second). Quatre fichiers manquent sur `main` : `wiki-hebergement-numerique.html`, `wiki-accueil-conflits.html`, `wiki-bibliotheque-militante.html`, `wiki-mutualiser-materiel.html`. Les autres chemins du périmètre contrôlé existent. Ceci n'est ni un test du site déployé, ni une vérification exhaustive des autres pages, ni un audit des liens externes.

**Sources :** fichiers sur `main` consultés via GitHub ; branches `agent/journal-commun-atelier-manifeste-2026-10-29`, `agent/journal-commun-biographies-2026-10-29`, `atelier/communication-journal-2026-10-29`, `atelier-lecture/journal-commun-2026-10-29`.

**Articles concernés :** index `wiki.html` et quatre dossiers annoncés sans fichier ; croisements futurs vers gouvernance, histoire, égalité, culture et communs.

**Contradictions :** les liens de navigation présentaient des fiches comme consultables alors qu'elles n'existaient pas. L'absence de `JOURNAL_COMMUN.md` sur `main` provoque plusieurs versions concurrentes du même fichier.

**Modifications réellement effectuées :** quatre ancres vers des pages absentes remplacées par des intitulés non cliquables « fiche en préparation » dans `wiki.html` sur la branche centrale. Commit `c9fc2ed5550ef39bcdaa25a5e435b8da5bb9a8f4`. Vérification par relecture GitHub : aucune des quatre destinations n'est encore présente comme `href` sur cette branche. Aucune fusion ou publication sur `main`.

**Suites :** reconstituer les quatre fiches avec sources et revue éditoriale ; vérifier le reste du site, les liens externes et l'accessibilité ; proposer une PR de consolidation sans écraser une contribution récente. Vérifier indépendamment les documents sources signalés par les ateliers.

**État : ENREGISTRÉ sur branche, TESTÉ par relecture du fichier ; non intégré à `main`, non testé sur le site public.**
