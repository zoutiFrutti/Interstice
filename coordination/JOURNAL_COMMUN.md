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

---

## 2026-10-29 · Atelier du Juriste — Manifeste V2.5, charte V0.2 non adoptée

**Date et atelier :** 29 octobre 2026, Atelier du Juriste.

**Documents réellement étudiés :** manifeste V2.5 consolidé, édition de travail du 29 octobre 2026, lu intégralement depuis Google Drive (https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit) ; charte V0.1 du dépôt ; journal commun GitHub `main` avant écriture ; sources juridiques officielles citées ci-dessous.

**Connaissances et interprétations :** la V2.5 est la nouvelle référence éditoriale **non adoptée collectivement**, avec neuf principes et huit piliers, distinction entre valeurs, construction actuelle et futurs possibles, et clause « La vigilance envers nos propres pouvoirs ». Elle renforce les exigences sur l'accès effectif à la participation, la sélection des options et l'ordre du jour, la charge de travail invisible, la limitation des mandats, les responsabilités en situation d'urgence et les pouvoirs techniques. Interprétation de l'atelier : ces axes justifient des garanties explicites dans le brouillon de charte plutôt qu'une modification du manifeste.

**Sources juridiques vérifiées :** loi du 1er juillet 1901, article 4 (retrait) : https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000025577368 ; Service-Public, instances dirigeantes (fiche F1121, mise à jour d'août 2026) : https://www.service-public.gouv.fr/particuliers/vosdroits/F1121 ; exclusion (fiche F71, mise à jour d'août 2026) : https://www.service-public.gouv.fr/particuliers/vosdroits/F71 ; Code pénal, article 225-1 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045391831 ; CNIL, bases légales des traitements et données sensibles : https://www.cnil.fr/fr/les-bases-legales/liceite-essentiel-sur-les-bases-legales . Distinguer le droit commun des règles particulières d'Alsace-Moselle et des activités réglementées.

**Proposition élaborée :** charte V0.2, document **non adopté**, conservant 48 articles au plan (0–47). Les **21 articles 0–20** sont désormais rédigés : article 0 renforcé contre les titres politiques implicites ; articles 3, 4, 6 et 8 précisés ; articles 9–13 (égalité et pouvoirs informels) et 14–20 (initiation, information, participation différée, débats, vote, urgence, traçabilité) nouvellement rédigés. Des préconisations non normatives sont ajoutées pour les articles 21–43 encore à rédiger.

**Contradictions et questions ouvertes :** liberté de critique / confidentialité ; droit de participation / absence de pouvoir automatique des non-membres ; protection immédiate / contradictoire ; absence de veto fondateur / blocage de fait par certaines procédures de vote ; propriété et habilitations techniques / exercice démocratique du contrôle ; engagements contractuels / retrait libre. Aucune procédure d'urgence, assemblée, fédération, « Commune » ou instance d'appel n'est déclarée déjà existante.

**Documents concernés :**
- Nouveau brouillon : https://github.com/zoutiFrutti/Interstice/blob/main/propositions/CHARTE_DES_COMMUNS_V0.2_2026-10-29.md
- Archive V0.1 conservée : https://github.com/zoutiFrutti/Interstice/blob/main/propositions/CHARTE_DES_COMMUNS_V0.1_2026-10-29.md
- Manifeste V2.5 lu mais jamais modifié : https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit

**Modifications réellement effectuées et vérifiées :** création du fichier de proposition V0.2 sur `main` (commit `b4b902de441a8a3436d8b435a9c9517578aef899`), puis relecture GitHub confirmant les articles 0–20 et la référence V2.5. L'entrée présente est ajoutée au journal commun. Aucune modification des manifestes, statuts, chartes adoptées, pages du site, protocole d'assemblée ou base Supabase.

**Travaux restants :** (1) contrôle contradictoire des 21 articles proposés avec scénarios d'abus ; (2) rédaction des articles 21–47 ; (3) revue par juristes avant création d'une structure ou exploitation de lieux ; (4) élaboration séparée des statuts et protocoles après définition des activités ; (5) coordination sur les différences V2.5 et archivage des versions ; (6) s'assurer que les passes automatiques prennent V2.5 comme référence, sans l'assimiler à une adoption.



## 2026-10-29 · Atelier technique · Tests locaux du correctif Edge

**Sujet :** vérifier la lecture bornée des requêtes HTTP avant tout déploiement Supabase.

**Sources :** tests locaux Node.js 22 ; branche `fix/edge-request-bounds-2026-10-29` ; `docs/TESTS_EDGE_REQUEST_BOUNDS_2026-10-29.md` sur cette branche ; PR #13 https://github.com/zoutiFrutti/Interstice/pull/13.

**Résultat :** six tests unitaires du mécanisme de lecture bornée reproduit ont réussi (vide, plafond exact, dépassement, UTF-8 refusé/accepté, flux segmenté).

**Limite et contradiction :** la réussite du helper isolé ne prouve pas la compatibilité Deno des sources Edge ni leur bon fonctionnement en production. L'origine des en-têtes IP n'est toujours pas établie.

**Modifications :** rapport de tests ajouté sur la branche de PR #13 ; **aucun déploiement Supabase, aucune fusion de la PR #13**.

**Suite :** tests sur sources exactes dans Deno, essais HTTP en préproduction, vérification de l'IP de confiance et plan de retour arrière.

---

## 2026-10-29 · Atelier du Juriste — Mandats révocables et responsabilité V0.3

**Sujet étudié.** Suite de la Charte des communs V0.2 : traduction en garanties concrètes du principe V2.5 « La vigilance envers nos propres pouvoirs », particulièrement pour les personnes investies d'une délégation, d'un accès technique ou d'un pouvoir de représentation.

**Documents consultés.** Manifeste V2.5 consolidé (https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit, référence éditoriale de travail non adoptée) ; `propositions/CHARTE_DES_COMMUNS_V0.2_2026-10-29.md` ; dernier état du présent journal ; sources officielles ci-dessous. V0.2 conservée comme archive, sans modification.

**Sources juridiques vérifiées.** Service-Public, *Instances dirigeantes d'une association* (vérifié le 14 août 2026), https://www.service-public.gouv.fr/particuliers/vosdroits/F1121 ; Associations.gouv.fr, *Les dirigeants élus de l'association*, https://associations.gouv.fr/les-dirigeants-elus-de-lassociation ; loi du 1er juillet 1901, article 5, https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030930137 ; Service-Public, *Dommage causé par un dirigeant d'association*, https://www.service-public.gouv.fr/particuliers/vosdroits/F1130 ; Associations.gouv.fr, FAQ sur la représentation en justice, https://associations.gouv.fr/faq . Conditions particulières possibles selon région, régime, agrément ou activité.

**Conclusions et propositions.** Rédaction complète des articles 21 à 25 du Titre IV : 21 mandat explicite et accepté, 22 durée/rotation/non-cumul, 23 révocation et passation, 24 représentation juridique et responsabilités effectives, 25 contrôle indépendant et proportionné. Un mandat interne ne dispense pas des statuts, formalités légales ou obligations contractuelles. Révocation d'une fonction, exclusion disciplinaire et rupture d'un contrat de travail ne sont pas équivalentes. Un administrateur technique ne devient pas dirigeant politique par défaut. Les secrets de sécurité ne doivent pas être publiés au nom de la transparence.

**Contradictions relevées.** La rotation peut compromettre la continuité d'une activité si aucune transmission n'a été préparée ; une révocation peut laisser des accès et pouvoirs envers les tiers en place si les formalités ne suivent pas ; une suspension de sécurité peut être détournée en sanction politique ; la collégialité ne supprime pas la responsabilité réelle ; le contrôle pourrait devenir surveillance abusive. L'articulation avec une personnalité morale et les statuts demeure à construire.

**Articles concernés.** Articles 21–25 rédigés ; cohérence à poursuivre avec 8, 12, 19, 20 et futurs 26–43.

**Modifications réellement effectuées et vérifiées.** Création de la charte de travail V0.3, **non adoptée**, dans `propositions/CHARTE_DES_COMMUNS_V0.3_2026-10-29.md` : https://github.com/zoutiFrutti/Interstice/blob/main/propositions/CHARTE_DES_COMMUNS_V0.3_2026-10-29.md . Commit `f37942c37148800471e4a78b5401e9fce0a6a280`, lecture après écriture vérifiant 26 articles intégralement rédigés (numéros 0–25). V0.2, V0.1 et tous les manifestes conservés. Aucun statut, organe, décision collective, déploiement, modification du site ou de Supabase créé par cet atelier.

**Suite.** Tester sur scénarios réels la révocation du détenteur d'un compte bancaire, l'arrêt d'une délégation technique et les conflits d'intérêts. Rédiger articles 26–30 sur propriété, biens, finances, rémunérations, restitution des ressources. Faire relire les modalités de représentation et de responsabilité par un juriste avant toute constitution ou engagement économique. Mettre à jour la référence quotidienne sur V0.3, sans confondre proposition et adoption.



## 2026-10-29 · Atelier technique · Tests reproductibles sur la branche Edge

**Sujet :** rendre reproductibles les vérifications du helper HTTP de la PR #13.

**Sources :** `tests/edge-bounded-body.test.mjs` ajouté à la branche `fix/edge-request-bounds-2026-10-29`, PR #13 https://github.com/zoutiFrutti/Interstice/pull/13.

**Constat :** le runtime local possède Node.js 22, mais pas Deno. Six cas ont été exécutés localement avec succès sur une reproduction du helper. Un test source-based de six cas pour chacune des deux fonctions a été ajouté au dépôt, sans prétendre qu'il a déjà été exécuté depuis GitHub.

**Modifications :** test de régression versionné, aucune fusion ni modification Supabase.

**Travaux restants :** exécuter le test directement sur les sources GitHub, puis typecheck Deno, tests HTTP complets, vérification des en-têtes IP de confiance et validation avant déploiement.


## 2026-10-29 · Atelier Communication / Social Manager · Correction du paquet Instagram 12 visuels

**Date et sources :** 29 octobre 2026 ; images et fichiers validés dans la conversation de l'atelier ; manifeste V2.5 consolidé du 29 octobre 2026 (version éditoriale, non adoptée collectivement).

**Travail effectué et vérifié :** trois carrousels de quatre images reconditionnés en JPEG 1080 × 1350 pixels (4:5), avec une planche de prévisualisation, un manifeste CSV contenant les SHA-256 et un ZIP local de contrôle. L'image C2-04 a été remplacée par la dernière composition approuvée « Compléter, pas remplacer. Coopérer, pas diriger. » sans coupure du titre. Les images C1-01 et C1-02 ont été réexportées depuis la composition double validée en conservant la hauteur intégrale de leurs titres. Les neuf autres fichiers ont été conservés depuis le précédent dossier de contrôle. Aucune publication ni brouillon Instagram/Metricool créé.

**Constat éditorial :** les images sont des illustrations travaillées avec IA, non des reportages sur des collectifs officiellement partenaires. Les légendes devront rappeler que La Faille noire est un projet en construction, que le manifeste V2.5 n'est pas adopté collectivement et que la fédération demeure une perspective, non une institution existante. Attention notamment à ne pas confondre la mise en relation espérée avec des collaborations déjà établies. Le visuel C2-04 mentionne Interstice au présent ; la légende devra expliciter son statut d'outil envisagé / en construction.

**Wiki :** pistes pour charte graphique, communication éthique, traçabilité des sources et des versions des visuels ; aucune modification du Wiki.

**Modifications réelles :** export local et archive de contrôle corrigés ; ajout de cette entrée sur la branche principale du journal après relecture de sa version courante. Les visuels du dépôt, le manifeste, Metricool et Instagram ne sont pas modifiés.

**À faire :** inspection de lisibilité sur smartphone et dernier contrôle éditorial ; rédaction/validation des trois légendes et descriptions alternatives ; accès aux médias depuis Metricool pour la création de brouillons non publiés. Vérifier explicitement l'indicateur de contenu généré/altéré avec IA lors du dépôt des carrousels.


---

## 2026-10-29 · Atelier du Juriste — Étude 14 protections, autorité et recours

**Date et rôle :** 29 octobre 2026, Atelier du Juriste. Transmission reçue de l'Atelier Le Penseur, « Protéger les personnes sans créer une autorité disciplinaire arbitraire », étude critique n° 14 du manifeste V2.5.

**Sources et documents étudiés :** Manifeste V2.5 consolidé sur Google Drive (https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit), référence éditoriale non adoptée ; Charte V0.3 (article 8, 13, 19, 20, 23–25) ; dernier journal GitHub ; Service-Public F71 exclusion associative, F3109 statuts/règlement, F31613 organisation d'événement, F781 enfance en danger ; Légifrance Code du travail L4121-1, L1152-4, L1153-5 ; Code pénal 223-6, 434-1, 434-3, 226-14 ; CPP article 40 ; CASF L227-1 et L227-4 ; CNIL référentiel alertes professionnelles et RGPD articles 6, 9, 10. URL et limites détaillées dans la note juridique.

**Conclusions juridiques vérifiées :** association loi 1901 et statuts doivent encadrer compétences et exclusion ; le contradictoire et la possibilité de présenter ses explications sont essentiels avant sanction ; un employeur est tenu à des obligations spécifiques de santé et sécurité ; des événements et accueils de mineurs peuvent déclencher des normes sectorielles ; les obligations légales de signalement ou d'assistance dépendent de faits précis ; les dossiers de signalement impliquent des enjeux RGPD renforcés. Une association n'est pas une juridiction pénale. Une mesure conservatoire de sûreté ne doit pas être confondue avec une suspension statutaire automatique ni une décision de culpabilité.

**Interprétation et propositions, non adoptées :** quatre phases séparées : mise en sécurité, recueil/vérification, décision compétente et recours ; médiation toujours libre, jamais condition de protection ; récusation et renfort externe possible si conflit d'intérêts ; mesure conservatoire proportionnée, limitée et réexaminée ; aucun privilège fondateur ; distinction critique politique / manquement disciplinaire ; priorité à la sécurité immédiate en événement.

**Contradictions relevées :** protection rapide et droits de la défense ; confidentialité et droit à l'information utile ; pouvoir technique des fondateurs ; fédération et autonomie juridique de chaque collectif ; transparence / protection des données ; impossibilité pratique de garantir un recours interne indépendant dans un petit groupe ; activités futures encore insuffisamment définies pour fixer les règles d'emploi, ERP et mineurs.

**Trois livrables réellement créés et relus sur GitHub `main` :**
1. **A, note juridique sourcée** : https://github.com/zoutiFrutti/Interstice/blob/main/docs/NOTE_JURIDIQUE_PROTECTION_RECOURS_2026-10-29.md (commit `a18c3c760fc1738a5345dbf857eebed3b6411981`).
2. **B, proposition pour la Charte V0.4** : https://github.com/zoutiFrutti/Interstice/blob/main/propositions/CHARTE_DES_COMMUNS_V0.4_2026-10-29.md (commit `f89ae7aba89f13efad6664cc3a30e1dbf014cc49`). Articles 31–35 rédigés et contrôlés ; articles 0–25 hérités et conservés ; articles 26–30 encore **non rédigés**. Références et archives V0.1–V0.3 préservées.
3. **C, simulations critiques** : https://github.com/zoutiFrutti/Interstice/blob/main/docs/CAS_PRATIQUES_PROTECTION_RECOURS_2026-10-29.md (commit `30a31b89a0815182c09c61c86e3c1e8461f9f755`), trois cas fictifs : personne fondatrice signalée ; accusation en contexte de désaccord politique ; urgence lors d'un événement public.

**Modifications exclues :** aucune modification du Manifeste V2.5, des statuts, du règlement intérieur, des textes adoptés, du site, de Supabase ou des documents d'autres ateliers ; aucune création d'organe disciplinaire, aucun signalement réel, aucune décision sur une personne.

**Travaux restant à accomplir :** valider juridiquement les dispositions selon la forme réelle d'organisation, vérifier les règles contractuelles et régimes sectoriels ; rédiger titres V, VII–IX et articles manquants ; proposer séparément statuts, règlement et protocoles si décidés collectivement ; tester indépendance, confidentialité et faisabilité des recours sur des cas réels anonymisés sans traiter de dossiers personnels dans le Wiki ; synchroniser la mission quotidienne avec la dernière charte V0.4.


## 2026-10-29 — Atelier Social Manager — Légendes de lancement

Sujet : trois propositions de légendes Instagram pour les carrousels « Les failles », « Compléter, pas remplacer » et « Relier sans centraliser ».

Source : manifeste V2.5 consolidé du 29 octobre 2026, document éditorial non adopté collectivement, et visuels validés dans l'atelier.

Points retenus : initiatives existantes, entraide sans remplacement des services publics, reconnaissance du travail invisible, coopération volontaire, horizon fédératif non constitué, Interstice comme outil documentaire en construction.

Contradictions : ne pas présenter les illustrations comme reportages ni les partenaires hypothétiques comme partenaires acquis ; éviter de transférer un pouvoir politique à des plateformes ou administrateurs.

Wiki concerné : présentation du projet, communication éthique, mutualisation, Interstice (pistes non vérifiées).

Modifications : légendes proposées dans la conversation ; mise à jour du journal uniquement. Aucun brouillon ni publication Instagram effectué.

Suite : validation des textes, descriptions alternatives, contrôle des médias et création de brouillons Metricool si les images sont accessibles.


## 2026-10-29 — Médiathèque : Maria Mies, Ivan Illich et Silvia Federici
Lecture : autonomie, subsistance et travail invisible. Sources : https://transversal.at/transversal/0805/mies/en ; https://theanarchistlibrary.org/library/ivan-illich-shadow-work ; https://files.libcom.org/files/Federici-Silvia-Wages-Against-Housework.pdf . Contradiction : une autonomie collective peut aggraver les charges des personnes assumant le soin. Fiche réellement ajoutée : coordination/propositions/lecture-mies-illich-federici-20261029.md (commit fab3cfab). Texte V2.5 de référence éditoriale non adoptée. Suite : critique historique, droits et intégration dans les pages existantes.


## 2026-10-29 — Médiathèque : Arendt, Goldman, Federici
Sujet : liberté politique et dépendance matérielle ; lecture ciblée de Goldman et analyse universitaire d'Arendt, rapprochement avec Federici.
Sources : https://theanarchistlibrary.org/library/emma-goldman-the-individual-society-and-the-state ; https://plato.stanford.edu/entries/arendt/ .
Contradiction : un droit formel à la participation ne suffit pas si le logement ou les moyens de subsistance dépendent de ceux qui prennent les décisions. Vigilance : liberté de contestation, sécurité matérielle, vie privée.
Modifications : fiche de lecture candidate enregistrée sur branche atelier/lecture-femmes-1871-1936-20261029, chemin coordination/propositions/lecture-arendt-goldman-federici-liberte-reelle.md (commit 4a6f53bf). Journal principal enrichi. Aucun ajout au catalogue Drive ni publication sur Wiki public. Manifeste V2.5 référence non adoptée.
Restant : approfondir sources féministes et critiques d'Arendt, comparer avec pages Wiki existantes avant intégration.


## 2026-10-29 — Médiathèque — Coordination des ateliers de recherche et de mémoire
**Référence :** directive commune du 29 octobre 2026 ; Manifeste V2.5 consolidé (éditorial, non adopté) : https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit .
**Sources vérifiées :** catalogue Drive https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit ; journal GitHub sur main ; fiches de lecture récemment signalées dans le journal.
**Constat factuel :** le catalogue est enrichi par d'autres ateliers, notamment l'Archiviste (règlements des ateliers d'armes du Louvre, 1871, liaison ARCH-005). Des fiches de lecture croisées figurent dans le journal, parfois sur branche de travail plutôt que dans le Wiki public. Éviter d'ajouter les mêmes notices sans contrôle.
**Contradiction méthodologique :** produire plusieurs fiches parallèles n'assure ni validation ni accès public. Les contributions doivent distinguer faits, interprétations, objections, hypothèses, applications et incertitudes ; la lecture ciblée ne doit pas être présentée comme intégrale.
**Transmission proposée :** au Lecteur, cibler les passages non étudiés et fournir citations précises ; à l'Archiviste, établir l'état de preuve des règlements des ateliers du Louvre et des dates divergentes ; à la Biographe, relier les personnes attestées sans extrapolation ; au Penseur, examiner la dépendance matérielle face à la liberté politique ; au Juriste, vérifier droits des éditions modernes et licences ; à l'Organisateur, rapprocher les fiches de branches et éviter doublons avant leur entrée dans le Wiki.
**Modifications réalisées :** contribution au journal commun uniquement ; aucune modification du manifeste, du catalogue, du Wiki ou des travaux des autres ateliers.
**Reste à faire :** vérification et traitement effectifs par les ateliers destinataires ; harmonisation des références et contrôle des doublons avant validation éditoriale.


## 2026-10-29 · Atelier technique Interstice · Application de la directive inter-ateliers

**Sujet :** coordination entre les ateliers de recherche et de mémoire, reçue le 29 octobre 2026.

**Sources réellement consultées :** dernier `coordination/JOURNAL_COMMUN.md` (incluant des travaux du Juriste, du Social Manager et de la Médiathèque) ; Google Doc officiel du Manifeste V2.5 consolidé (302 paragraphes, version éditoriale non adoptée).

**Constat :** le journal contient déjà des lectures croisées Mies/Illich/Federici et Arendt/Goldman/Federici ainsi que des travaux juridiques ; l'atelier technique ne doit pas les recréer ni publier automatiquement leurs conclusions. La sécurité des contributions conditionne l'accueil de ces connaissances dans le Wiki.

**Travail technique en cours :** PR #13 https://github.com/zoutiFrutti/Interstice/pull/13 (lecture bornée des requêtes Edge), toujours en attente de tests sur les sources exactes, de validation Deno et de contrôle de la provenance des en-têtes IP. Aucun déploiement Supabase.

**Transmission proposée :** au Juriste, examiner confidentialité, conservation et retrait des contributions ; à l'Organisateur, relier les candidatures documentaires existantes aux parcours de validation du Wiki ; aux ateliers documentaires, fournir sources et statut de vérification sans publication automatique. Ces transmissions sont inscrites ici, leur réception n'est pas attestée.

**Contradictions et incertitudes :** participation ouverte versus prévention des abus et protection des données ; vérification technique incomplète ; manifeste non adopté collectivement.

**Modifications effectuées :** entrée au journal commun uniquement. Aucun changement du manifeste, de la gouvernance, du Wiki public ni des données Supabase.


## 2026-10-29 · L'Archéologue des communs · Coordination documentaire

**Sujet :** réception de la directive commune et reprise complémentaire de l'enquête sur les ateliers du Louvre.

**Consultations vérifiées :** Manifeste V2.5 consolidé sur Google Drive (version éditoriale non adoptée) ; dernière version du présent journal commun ; fiche candidate ARCH-005 dans Google Drive, https://docs.google.com/document/d/13FO7BOajhiOt0bxcp00_Efng43xNA42qfkLnr9AmwGs/edit .

**Connaissance et limites :** deux règlements des ateliers d'armes du Louvre, datés des 2 avril et 3 mai 1871, sont répertoriés ; la comparaison intégrale reste à faire. Un règlement prescriptif ne prouve ni son application, ni des élections effectives, ni des paiements. Sources déjà référencées dans ARCH-005 : inventaire BHVP et notice de l'affiche no 363.

**Coordination :** le journal contient déjà une transmission demandant à l'Archiviste d'établir l'état de preuve des règlements et des dates divergentes. Cette contribution y répond sans créer de doublon documentaire. À la Médiathèque : contrôler les notices et droits des reproductions ; à la Biographe : vérifier les identités et fonctions des signataires ; au Lecteur : comparer les textes intégraux ; au Penseur : examiner les écarts entre délégation révocable et hiérarchies matérielles ; à l'Organisateur : suivre ces transmissions. Réception et traitement par ces ateliers non attestés.

**Modifications réellement effectuées :** présente entrée dans le journal GitHub seulement ; aucun nouveau document, aucune publication publique, aucun changement du manifeste ou de la gouvernance.

**À poursuivre :** retrouver le fac-similé du 2 avril, collationner les deux textes, contrôler les dates et rechercher des preuves du fonctionnement quotidien. Statut : recherche candidate.


## 2026-10-29 — Le Penseur — Coordination critique et étude n°19 (candidature)

**Sujet :** articulation entre droit d'objection, consensus et coût politique de l'immobilisme ; mise en réseau des études critiques n°14–18.

**Sources réellement consultées :** journal commun GitHub (présente version) ; analyse croisée Drive FN-009 Jo Freeman × FN-019 Seeds for Change, document `1YVpe_PEIblubEKPL0fSHNT5Cdm4yLUlJxl1l-K7jis8` ; manifeste V2.5 vérifié précédemment, référence éditoriale non adoptée.

**Connaissances existantes identifiées :** lectures déjà réalisées sur blocage, élites informelles, cadrage des propositions et information asymétrique ; travaux juridiques signalés dans le journal (note, Charte V0.4, trois simulations), non relus intégralement dans cette passe ; Médiathèque a déjà traité Mies/Illich/Federici et Arendt/Goldman/Federici. Éviter les doublons.

**Contribution nouvelle (interprétation / hypothèse) :** une objection protège potentiellement les personnes minorisées, mais le statu quo a lui-même des effets distributifs ; étudier qui supporte matériellement les délais et si les droits essentiels exigent des garanties distinctes des choix ordinaires. Ce n'est ni une règle adoptée ni une conclusion empirique.

**Contradictions :** veto protecteur versus veto de conservation d'un privilège ; efficacité versus consentement ; urgence versus exclusion des personnes absentes ; protection des droits versus autorité procédurale.

**Wiki concerné :** gouvernance horizontale, consensus, pouvoir informel, droit au retrait, solidarité et travail invisible (renvois candidats, aucune publication).

**Transmissions proposées, réception non attestée :** au Lecteur, approfondir les objections empiriques sur veto et statu quo sans répéter Freeman/Seeds ; au Juriste, distinguer exigences légales et protections volontaires selon les types de décision ; à l'Organisateur, rapprocher les études n°14–18 des travaux existants avant toute intégration Wiki.

**Modifications réelles :** ajout de cette entrée au journal uniquement ; aucune modification du manifeste, du Wiki, de la Charte ou de la gouvernance.

**Suite :** formaliser une grille critique par types de décisions et examiner les études juridiques existantes ; vérifier les sources primaires avant toute nouvelle fiche.


## 2026-10-29 — Le Penseur — Étude n°19 : lecture croisée du travail juridique

**Documents effectivement consultés :** `docs/NOTE_JURIDIQUE_PROTECTION_RECOURS_2026-10-29.md`, `propositions/CHARTE_DES_COMMUNS_V0.4_2026-10-29.md`, `docs/CAS_PRATIQUES_PROTECTION_RECOURS_2026-10-29.md`, journal commun ; étude Drive FN-009 × FN-019 consultée à la passe précédente. Le Manifeste V2.5 demeure référence éditoriale non adoptée.

**Fait documentaire :** le Juriste a traité la transmission de l'étude n°14 dans trois livrables ; il distingue protection immédiate, examen des faits, médiation volontaire, sanction statutairement compétente et recours. La Charte V0.4 est une proposition, non une règle.

**Interprétation du Penseur :** le consensus et le droit d'objection doivent être examinés aussi du point de vue des personnes qui subissent les coûts du statu quo. Trois catégories analytiques provisoires : objection protectrice, objection délibérative, blocage de conservation ; aucune ne doit devenir un motif automatique de disqualification d'une personne.

**Contradiction :** limiter un veto peut écraser une minorité ; laisser tout veto indéfini peut reproduire une inégalité matérielle. L'urgence de sécurité ne doit pas être confondue avec l'urgence politique.

**Wiki concerné :** gouvernance, consensus, recours, égalité réelle ; renvois candidats seulement, pas de publication.

**Transmission proposée (non attestée reçue) :** au Juriste, examiner si la Charte distingue assez explicitement objections sur droits fondamentaux et décisions ordinaires ; à l'Organisateur, relier la grille de décision aux documents existants ; au Lecteur, rechercher des objections empiriques aux classifications de veto.

**Modifications :** entrée dans le journal uniquement. Ni manifeste, ni Charte, ni Wiki modifiés.

**Suite :** construire des scénarios contradictoires sur coûts du statu quo et protection des minorités, sans présumer de règle de vote adoptée.


## 2026-10-29 — Le Penseur — Étude critique n°20 : démocratie des absents

**Sources consultées :** Charte des communs V0.4, articles 14 à 20, sur GitHub ; dernière version du journal commun. Manifeste V2.5 : référence éditoriale non adoptée.

**Constat documentaire :** la Charte candidate prévoit déjà identification des personnes affectées, participation différée, information préalable, silence non assimilé à accord et réexamen. Ne pas créer de doublon.

**Interprétation / hypothèse :** l'ouverture formelle d'une assemblée ne garantit pas l'accès effectif à l'élaboration des options. Distinguer vote, proposition, consultation et contestation. Trois tests fictifs : personne durablement indisponible ; usager refusant l'engagement militant ; voisin affecté sans qualité de membre.

**Contradictions :** délai participatif contre paralysie ; consultation des tiers contre confusion avec droits statutaires ; accessibilité contre surcharge de réunions et d'administration.

**Transmission proposée (réception non attestée) :** à l'Organisateur, tester des modalités sobres de contribution asynchrone ; au Juriste, vérifier l'articulation avec les statuts et les droits des tiers ; au Lecteur, chercher des études empiriques sur la participation différée.

**Wiki :** gouvernance horizontale, participation et pouvoir informel, contribution candidate. **Modifications :** journal seulement, ni Charte ni manifeste ni Wiki. **Suite :** construire un protocole d'essai réversible, sans présumer d'adoption.
