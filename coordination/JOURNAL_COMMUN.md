# Journal commun des ateliers · La Faille noire / Interstice

Ce journal recueille les étapes significatives des ateliers. Une entrée distingue observations, sources, modifications vérifiées et travaux à poursuivre. Avant toute édition, relire la dernière version du fichier pour éviter d'écraser une contribution concurrente. Ne pas inclure de données personnelles sensibles.

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


---

## 2026-10-29 · Atelier Wiki Histoire et mémoires — Union des femmes et affiche n° 373

**Sujet.** Organisation des travailleuses sous la Commune de Paris ; convocation syndicale du 20 mai 1871 ; composition de la commission exécutive.

**Connaissances vérifiées.** Le Musée Carnavalet conserve l'affiche n° 373 (AFF5721), datée du 20 mai 1871, appelant les ouvrières à se réunir le 21 mai à la mairie du IVe arrondissement pour constituer des chambres syndicales et fédérales. Il s'agit d'une convocation, pas d'une preuve que la réunion s'est tenue. Sept signatures y figurent : Nathalie Le Mel, Jarry, Aline Jacquier, Blanche Lefevre, Marceline Leloup, Adèle Gauvin et Elisabeth Dmitrieff. Les statuts de l'Union, reproduits par Patrick Le Moal, décrivent des comités d'arrondissement, des bureaux révocables, des comptes et un comité central directeur ; règles écrites ne signifient pas application effective.

**Sources et droits.** [Musée Carnavalet, affiche n° 373, inventaire AFF5721](https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/republique-francaise-ndeg-373-liberte-egalite-fraternite-ndeg-373-commune) (objet primaire et transcription institutionnelle) ; [Patrick Le Moal, Contretemps, transcription des statuts, 11 avril 2021](https://www.contretemps.eu/journal-commune-11-avril-1871/) (source primaire reproduite) ; [Association des Amies et Amis de la Commune, article historique](https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/chronologie-au-jour-le-jour/1643-lunion-des-femmes-pour-la-defense-de-paris-et-les-soins-aux-blesses) ; [Carolyn J. Eichner, Franchir les barricades, Éditions de la Sorbonne, 2020](https://www.editionsdelasorbonne.fr/produit/522/9791035105228/franchir-les-barricades) (notice, ouvrage non lu). Texte historique dans le domaine public en France ; réutilisation du visuel muséal à vérifier, ouvrage moderne protégé.

**Wiki concerné.** [ARCH-002, nouvelle fiche candidate](https://docs.google.com/document/d/1PFDkD9peH97M3O3nhSFsjZgPX6ec8S7mNNPmT_lfm-k/edit) ; [ASSO-007, enrichie](https://docs.google.com/document/d/1VGqnT2WnZFcAK8vV-qTedvBAupvR-UVsWkcQ7RsVxAg/edit) ; [BIO-009 Nathalie Le Mel, enrichie](https://docs.google.com/document/d/1UF54kCo7mwSIze66uNbo1ViEzRhAO4ptUjylBaJR5-o/edit) ; [BIO-010 Élisabeth Dmitrieff, enrichie](https://docs.google.com/document/d/1TG4OxT0b43pLJH1YXRjlr8rIgkT5G_WL5LowdRjOLpw/edit) ; [FN-046 dans le catalogue Médiathèque, enrichie](https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit).

**Contradictions et incertitudes.** La liste de sept membres donnée pour le 8 mai contient Thérèse Collin, tandis que les sept signatures du 20 mai contiennent Adèle Gauvin. Différence entre dates, mandats ou commissions possible, sans preuve de démission. « Marceline » sur l'affiche, « Marceline ou Marie » dans l'indexation du musée. Tenue de la réunion du 21 mai non démontrée.

**Modifications réellement effectuées et vérifiées.** Une fiche d'archive créée et classée dans « Wiki - Histoire et mémoires » ; quatre enrichissements des documents Drive existants, tous relus après écriture ; journal de l'atelier complété. Pas de publication publique, ni modification du manifeste ou de la gouvernance. Total des fiches candidates recensées dans les dossiers Wiki : 29 (13 biographies, 8 associations, 4 expériences, 2 collectifs, 2 archives), hors Médiathèque et journaux.

**Travaux restants.** Vérifier le fac-similé et les listes du comité aux dates successives ; retrouver comptes, procès-verbaux, sources de la réunion annoncée du 21 mai ; documenter les parcours d'Adèle Gauvin, Marceline Leloup et Thérèse Collin sans extrapolation.

---

## 2026-10-29 · Atelier du Juriste — Charte des communs, V0.1 non adoptée

**Sujet étudié :** première architecture juridique, principes de la V2.3, articulation avec une éventuelle V2.4, garanties de liberté et contrôle initial du droit français.

**Conclusions et propositions :**
- Le manifeste V2.3 unifié, daté du 29 octobre 2026 et disponible dans Drive, demeure un texte de travail **non adopté**. Il rassemble neuf principes, huit piliers et plusieurs propositions procédurales à distinguer de la charte et des futurs protocoles.
- Proposition d'une charte de **48 articles numérotés de 0 à 47**, répartis entre Article 0 et neuf titres : libertés, égalité, démocratie, mandats, communs, conflits et recours, fédération, données, révision et dissolution.
- Article 0 et Titre I (articles 1–8) entièrement rédigés, chacun avec objectif, risque de détournement, compatibilité juridique, recours et question à décider. Ils garantissent notamment la liberté de conscience, la dissidence, la sortie, la dignité des non-membres et une procédure de contestation à instituer ultérieurement.
- Un fonctionnement associatif collégial est juridiquement envisageable ; cela n'efface ni la représentation légale nécessaire à certaines opérations, ni les responsabilités propres aux activités.
- Aucune « Commune », assemblée, instance d'appel, fédération ou personne morale n'est déclarée constituée. Toute adoption future nécessite une décision séparée et traçable.

**Sources et références juridiques vérifiées :**
- Loi du 1er juillet 1901, articles 1, 2, 4, 5 et 6 : https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069570
- Associations.gouv.fr, dirigeants élus / mandat : https://associations.gouv.fr/les-dirigeants-elus-de-lassociation ; écriture des statuts : https://associations.gouv.fr/ecrire-son-contrat-dassociation
- Service-Public, statuts : https://www.service-public.fr/particuliers/vosdroits/F1120 ; exclusion : https://www.service-public.gouv.fr/particuliers/vosdroits/F71 ; responsabilité : https://www.service-public.fr/particuliers/vosdroits/N31331
- Code pénal, article 225-1 : https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006165298/
- CNIL, données sensibles : https://cnil.fr/fr/definition/donnee-sensible ; bases légales et article 9 RGPD : https://www.cnil.fr/fr/les-bases-legales/liceite-essentiel-sur-les-bases-legales
- Manifeste V2.3 de travail : https://docs.google.com/document/d/1GtqpLRiK9-dDwYja5yP0D2GOvuPiv2r3WZ_uAGSltig/edit

**Documents concernés :**
- Nouvelle proposition non adoptée : https://github.com/zoutiFrutti/Interstice/blob/main/propositions/CHARTE_DES_COMMUNS_V0.1_2026-10-29.md
- Manifeste V2.3 (consulté, non modifié).
- Journal commun (présente entrée).

**Contradictions et incertitudes :**
- La majorité qualifiée proposée pour réviser les neuf principes n'a aucun seuil établi ; risque de blocage minoritaire et de veto de fait.
- La propriété légale des outils, lieux et ressources peut diverger du contrôle démocratique réel ; besoin de préciser clefs, habilitations et mandats.
- Distinguer droits des non-membres, droits politiques des membres, obligations des salariés et usages des partenaires.
- Éviter la contradiction « transparence totale » / confidentialité des bénéficiaires et des signalements.
- La procédure d'urgence protectrice ne doit pas devenir une sanction sans garanties.
- La portée juridique d'une charte dépendra de son adoption et de sa cohérence avec les statuts et conventions futurs.

**Modifications réellement effectuées :**
- Création et relecture GitHub du fichier `propositions/CHARTE_DES_COMMUNS_V0.1_2026-10-29.md`, commit `ff306e654d43a5c1b59c88901171d26afc659025` ; statut explicite de projet non adopté.
- Journal commun : ajout de cette entrée ; aucun changement du manifeste, des statuts, du site public ou de Supabase.

**Travaux restant à accomplir :**
1. Relecture contradictoire des articles 0–8 et tests de scénarios d'abus concrets.
2. Rédaction des titres II et III (articles 9–20), en examinant vote, consentement, blocage et participation effective.
3. Déterminer les garanties d'indépendance des recours, de confidentialité des alertes et les responsabilités des représentants.
4. Comparer les modèles juridiques possibles : association loi 1901, conventions intercollectives et autres supports selon le projet concret.
5. Préparer une table de correspondance manifeste / charte / protocoles pour l'atelier central, puis une éventuelle mise à jour V2.4 du manifeste **uniquement sur autorisation explicite**.



## 2026-10-29 — Médiathèque des communs — Nouvelle référence éditoriale V2.5
**Sujet :** réception et vérification du Manifeste V2.5 consolidé comme référence éditoriale de travail (non adoptée).
**Document lu :** https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit (33 875 caractères environ, version du 29 octobre 2026).
**Connaissances :** la V2.5 conserve les neuf principes et huit piliers, renforce l'examen des pouvoirs informels, de l'éducation émancipatrice, du travail invisible, de l'autonomie, du droit au retrait et de la critique de nos propres références. Clause « La vigilance envers nos propres pouvoirs ». Document explicitement non adopté collectivement.
**Répercussions :** maintenir les lectures croisées contradictoires ; distinguer source primaire, étude secondaire, interprétation et proposition ; conserver les versions archivées. La médiathèque n'est pas une autorité chargée de modifier le manifeste.
**Contradiction documentaire :** des fiches rédigées sur la branche `atelier/lecture-femmes-1871-1936-20261029` ont leur propre journal de branche, divergent du journal commun `main` et ne sont pas publiées dans le Wiki. Nécessité de faire réexaminer leur intégration par coordination, sans écraser les contributions concurrentes.
**Modifications réellement effectuées :** lecture Drive vérifiée ; cette entrée ajoutée au journal `main` ; aucune modification du manifeste, des huit piliers, des anciennes versions ni des pages Wiki publiques.
**Travaux restants :** relire et référencer les fiches sous V2.5 ; auditer les doublons et les liens des lectures de l'atelier ; proposer une intégration par revue documentaire.


## 2026-10-29 · Atelier technique Interstice · Référence manifeste V2.5 et écart documentaire

**Sujet :** prise en compte de la communication inter-ateliers relative au Manifeste V2.5 consolidé et contrôle ciblé du site.

**Documents et sources consultés :** Google Docs « La Faille noire — Manifeste V2.5 consolidé — 29 octobre 2026 — version éditoriale non adoptée », https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit (texte intégral lu via Google Drive, 302 paragraphes) ; fichiers GitHub `manifeste.html`, `wiki-decision-collective.html` et présent journal sur `main`.

**Connaissances vérifiées :** le document Drive indique explicitement qu'il est une version éditoriale de travail non adoptée par une assemblée constitutive. Il expose la vigilance envers les pouvoirs informels, les délégations, l'accessibilité et le droit au retrait. Sur `main`, la page `manifeste.html` indique explicitement « version 2.1 » à plusieurs endroits, tout en précisant « texte proposé, non adopté ».

**Contradiction / risque :** décalage entre la référence éditoriale V2.5 et la version V2.1 actuellement présentée sur le site. La mention de non-adoption est cohérente mais l'absence de repère V2.5 risque d'induire les visiteurs en erreur. Ne pas remplacer V2.1 sans archivage et revue éditoriale ; ne pas assimiler la validation éditoriale à une adoption collective.

**Articles concernés :** `manifeste.html` (prioritaire), `wiki-decision-collective.html` (fiche provisoire à confronter aux garanties contre les pouvoirs informels), `wiki.html` (navigation et référencement).

**Modifications réellement effectuées :** lecture intégrale de la V2.5 et contrôle ciblé des fichiers sur GitHub ; ajout de cette entrée documentaire au journal. Aucune modification du manifeste, des pages Wiki ou de Supabase dans cette étape.

**Travaux restants :** préparer une mise à jour publique avec V2.5 clairement identifiée comme proposition non adoptée, archivage explicite de V2.1 et des versions intermédiaires ; revue éditoriale avant publication ; audit des liens du Wiki ; contrôles d'accessibilité, confidentialité et traçabilité des délégations.


## 2026-10-29 · Atelier technique Interstice · Publication GitHub de la V2.5

**Sujet :** correction du décalage entre manifeste public V2.1 et référence éditoriale V2.5.

**Sources :** document intégral V2.5 sur Google Drive https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit ; PR GitHub https://github.com/zoutiFrutti/Interstice/pull/7 ; commit de fusion `f122bec37d9a7cfb7ae2bf3e476ea1cb76127b8b`.

**Connaissances :** la V2.5 est une référence éditoriale de travail, non adoptée collectivement. La V2.1 doit rester archivée pour la traçabilité. Les deux versions sont désormais reliées dans le dépôt GitHub.

**Contradictions et incertitudes :** la présence des fichiers sur `main` est vérifiée, mais l'affichage effectif sur GitHub Pages n'est pas encore confirmé ; les versions intermédiaires doivent être conservées et référencées si elles existent.

**Pages concernées :** `manifeste-v2-5.html` (créée), `manifeste.html` (bandeau d'archive et lien ajoutés).

**Modifications réellement effectuées :** PR #7 fusionnée par GitHub (`merged: true`) ; lecture post-fusion des deux fichiers sur `main`, confirmant la conclusion V2.5 et le bandeau V2.1. Aucun changement des principes par cet atelier.

**À poursuivre :** vérifier le déploiement GitHub Pages, les liens depuis l'accueil et l'accessibilité ; compléter l'index des archives ; terminer l'audit des liens Wiki.


## 2026-10-29 · Atelier technique · Correction de la navigation du manifeste sur l'accueil

**Sujet :** cohérence éditoriale de la page d'accueil avec le manifeste V2.5.

**Sources :** `index.html` sur GitHub `main` ; manifeste V2.5 consolidé sur Google Drive ; PR #8 https://github.com/zoutiFrutti/Interstice/pull/8 ; commit fusionné `0e91394cfec7b42ae9e0ead8adbcb49ce088d3e0`.

**Connaissance et contradiction :** l'accueil affichait encore V2.1 comme version principale après la publication de V2.5. Le texte reste une version éditoriale de travail non adoptée collectivement.

**Articles/pages concernés :** `index.html`, `manifeste-v2-5.html`, `manifeste.html`.

**Modifications vérifiées :** mise à jour de la carte de l'accueil sur branche dédiée, PR #8 fusionnée dans `main` (`merged: true`). Lien principal vers V2.5, lien archive vers V2.1 et statut de non-adoption explicite. Aucun changement des textes des manifestes.

**Travaux restants :** contrôler le déploiement public GitHub Pages ; vérifier les autres liens du Wiki, l'accessibilité et les permissions de contribution.


## 2026-10-29 · Atelier technique Interstice · Audit des liens du Wiki

**Sujet :** contrôle des destinations HTML de `wiki.html` et suppression des liens vers des pages inexistantes.

**Sources :** fichiers GitHub `wiki.html` et destinations sur `main` contrôlées par API GitHub ; PR #9 https://github.com/zoutiFrutti/Interstice/pull/9 ; commit fusionné `077c64419f7f8f5445c17c1ec08ca6f3e4c0fdcf`.

**Connaissances :** 32 destinations HTML uniques ont été contrôlées : 28 fichiers présents, 4 absents (`wiki-hebergement-numerique.html`, `wiki-accueil-conflits.html`, `wiki-bibliotheque-militante.html`, `wiki-mutualiser-materiel.html`).

**Contradiction :** le Wiki présentait ces quatre fiches comme consultables alors qu'elles n'existaient pas dans `main`. L'existence d'un fichier ne garantit pas son déploiement public ni la qualité du contenu.

**Articles concernés :** `wiki.html` et quatre fiches annoncées mais non publiées.

**Modifications vérifiées :** remplacement des quatre liens 404 par mentions « fiche en préparation » ; PR #9 fusionnée ; relecture post-fusion de `wiki.html` confirmant l'absence de ces quatre href. Aucun faux article créé.

**Travaux restants :** tester l'affichage GitHub Pages et les liens externes ; préparer des fiches documentées lorsque le corpus est prêt ; tester clavier, contraste et lecteurs d'écran ; auditer les permissions et la confidentialité.


## 2026-10-29 · Atelier technique · Accessibilité et déploiement

**Sujet :** première passe de contrôle technique après correction des liens Wiki.

**Sources :** `index.html`, `wiki.html`, `manifeste-v2-5.html`, `participer.html` sur GitHub ; PR #10 https://github.com/zoutiFrutti/Interstice/pull/10 ; commit fusionné `79c482fb176a4ad8603002dd202dd6a9d85d3eec`.

**Constats :** les quatre pages inspectées ont un attribut `lang` et une balise viewport. La page V2.5 ne contenait aucun `h1` ; la correction lui donne un titre de niveau 1 explicite. Contrôle de l'accessibilité limité à la structure HTML, sans test lecteur d'écran ni navigation clavier. Les URL GitHub Pages n'ont pas pu être consultées depuis les outils réseau disponibles ; aucun statut de déploiement public n'est affirmé.

**Pages concernées :** `manifeste-v2-5.html`, `index.html`, `wiki.html`, `participer.html`.

**Modifications réellement effectuées :** ajout d'un `h1` sémantique au manifeste V2.5 ; PR #10 fusionnée ; lecture de contrôle sur `main` confirmant le titre et la conclusion du texte. Aucune modification des principes politiques.

**À poursuivre :** test public GitHub Pages depuis un réseau accessible ; audit clavier/contraste/labels/formulaires ; sécurité des contributions et protection des données.


## 2026-10-29 · Atelier technique · Accessibilité des formulaires au clavier

**Sujet :** première revue statique des formulaires de l'accueil, du Wiki et de proposition d'article.

**Sources :** `index.html`, `wiki.html`, `proposer-article.html`, `style.css` sur GitHub ; PR #11 https://github.com/zoutiFrutti/Interstice/pull/11 ; commit fusionné `8c1db472c43fb9b15930c7ce650010c2126b5517`.

**Constats :** les champs inspectés sont enveloppés par des labels ou reliés via `for` ; des zones de statut utilisent `aria-live`. La règle `:focus-visible` initiale couvrait liens et boutons, pas les champs de saisie, sélecteurs et résumés dépliables. Contrôle statique uniquement, pas de test manuel clavier ou lecteur d'écran.

**Pages concernées :** accueil, Wiki, proposition d'article et feuille de style commune.

**Modification vérifiée :** ajout de `input:focus-visible`, `textarea:focus-visible`, `select:focus-visible`, `summary:focus-visible` dans `style.css` ; PR #11 fusionnée ; vérification du fichier sur `main`. Aucune modification de traitement des contributions.

**Contradictions et travaux restants :** accessibilité déclarative ne prouve pas l'accessibilité réelle ; tests navigation clavier, contrastes, mobile, et sécurité/confidentialité des soumissions restent nécessaires. Vérifier également le déploiement public.


## 2026-10-29 · Atelier technique · Audit de sécurité des contributions Supabase

**Sujet :** contrôle en lecture seule des permissions et des deux fonctions de soumission du projet Supabase Interstice.

**Connaissances :** sept tables avec RLS active ; lecture publique des propositions publiées et ressources approuvées ; articles soumis accessibles à leur auteur ou à la modération. Deux fonctions Edge publiques `verify_jwt=false`, avec validations et limitation de fréquence. `claim_submission_slot` n'est pas exécutable directement par les rôles `anon` ou `authenticated`.

**Sources :** interrogation directe de Supabase (`list_tables`, `list_edge_functions`, `get_edge_function`, `pg_policies`, `pg_proc`) ; rapport `docs/AUDIT_CONTRIBUTIONS_SUPABASE_2026-10-29.md` ; PR #12 https://github.com/zoutiFrutti/Interstice/pull/12 (fusionnée, SHA `28e82e04cf4fc2a9042eae3a230d7d65f0be29f0`).

**Wiki/pages concernés :** accueil et formulaire de contributions, proposition de ressources, proposition d'articles Wiki.

**Contradictions :** contrôle `Origin` ne garantit pas l'identité d'un client ; confiance dans les en-têtes IP non vérifiée ; `Content-Length` ne borne pas la taille effective du corps ; filtres de coordonnées partiels.

**Modifications réellement effectuées :** publication du rapport d'audit sur `main` ; aucune configuration, donnée ou fonction Supabase modifiée.

**Travaux restants :** corriger et tester le bornage du corps des requêtes, valider l'origine fiable des IP, vérifier `SECURITY DEFINER` et le parcours de modération avant toute modification de production.


## 2026-10-29 · Atelier technique · Préparation du correctif des fonctions Edge

**Sujet :** limiter la taille réelle des requêtes envoyées aux fonctions publiques Supabase, sans déploiement prématuré.

**Sources :** versions déployées lues via Supabase `get_edge_function` ; branche GitHub `fix/edge-request-bounds-2026-10-29` ; PR #13 https://github.com/zoutiFrutti/Interstice/pull/13.

**Constats :** `submit-proposal` dépendait de `Content-Length` pour son plafond de taille ; `submit-resource` chargeait tout le corps avant vérification et utilisait `unknown` quand aucune IP n'était présente.

**Pages et composants concernés :** `supabase/functions/submit-proposal/index.ts`, `supabase/functions/submit-resource/index.ts` ; formulaires de contributions.

**Modifications effectuées :** copies du code déployé enregistrées sur une branche GitHub, avec lecture HTTP par morceaux plafonnée en octets (7 000 / 4 000) et refus d'une IP absente dans `submit-resource`. PR #13 ouverte pour revue, **non fusionnée**, **aucun déploiement Supabase**.

**Contradictions et travaux restants :** tests Deno et tests HTTP de non-régression encore nécessaires ; confiance dans les en-têtes IP toujours non prouvée ; contrôler la gestion des corps tronqués, UTF-8, méthodes, CORS, quotas et formulaires avant fusion et déploiement. Ne pas présenter ce code comme déjà en production.


## 2026-10-29 · Atelier de lecture critique et Médiathèque · Synchronisation manifeste V2.5

**Sujet et document étudié :** lecture intégrale du Manifeste V2.5 consolidé du 29 octobre 2026, référence éditoriale de travail **non adoptée collectivement**. Source officielle : https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit .

**Connaissances et vérifications :** document intégral consulté dans Google Drive. La V2.5 conserve neuf principes et huit piliers et introduit explicitement « La vigilance envers nos propres pouvoirs ». Elle distingue la propriété juridique, l'usage et le contrôle des communs ; l'expertise et l'autorité politique ; la représentation formelle et la participation réelle ; les obligations du collectif et le droit au retrait. Elle reconnaît le travail invisible, les pouvoirs informels et les risques des délégations d'urgence. La méthode de recherche distingue faits, sources, interprétations, hypothèses et propositions. L'égalité de traitement ne suffit pas toujours à l'égalité réelle.

**Références croisées de l'atelier :** Proudhon, *Qu'est-ce que la propriété ?* (1840), référence FN-003 ; Bakounine, *Dieu et l'État*, FN-021 ; Jo Freeman, *The Tyranny of Structurelessness*, FN-009 ; Louise Michel, *La Commune* et *Mémoires*, FN-022/023 ; Silvia Federici, *Caliban and the Witch* (2004) et Angela Davis, *Women, Race & Class* (1981), pistes critiques à vérifier bibliographiquement ; recherches sur la participation et les inégalités dans les SCOP/SCIC françaises. Catalogue : https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit .

**Articles Wiki potentiellement concernés :** autogestion et fédéralisme, économie des communs, travail reproductif, féminismes, mémoires critiques, participation et égalité réelle, autonomie technologique. Ces intitulés signalent des thèmes à rapprocher d'articles existants ; leur existence et leur contenu n'ont pas été vérifiés lors de cette passe.

**Objections et contradictions à approfondir :** (1) protéger le retrait sans surcharger systématiquement les personnes restantes ; (2) rendre les pouvoirs visibles sans imposer de surveillance ou publier de données sensibles ; (3) rendre les délégations d'urgence contrôlables sans ralentir la protection des personnes ; (4) distinguer voix des salariés, bénévoles, usagers et personnes affectées dans les organisations multiacteurs ; (5) ne pas confondre admission d'une objection et existence d'un mécanisme opérationnel de recours. Les limites historiographiques des auteurs demeurent documentables ; le manifeste ne doit pas devenir une autorité qui dispense de critique.

**Modifications effectivement réalisées :** lecture et examen critique du texte officiel ; ajout de cette entrée sur une branche GitHub issue du dernier état de `main` pour revue. Aucun amendement du manifeste, aucune mise à jour des anciennes versions et aucune modification de Wiki publié. V2.5 retenue comme référence de nos futurs travaux, **sans prétendre à une adoption collective**.

**Travaux restant à accomplir :** vérifier les anciennes notices de médiathèque qui se réfèrent encore à V2.1/V2.4, préserver leur historique ; contrôler les articles existants avant proposition de liens ; poursuivre les lectures contradictoires de la V2.5, notamment sur les procédures de recours, les ressources matérielles, les collégialités SCIC et la participation différée ; soumettre toute suggestion de modification à délibération humaine.
