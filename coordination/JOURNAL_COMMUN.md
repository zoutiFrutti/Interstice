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


### 2026-10-29 — Médiathèque des communs — FN-068 et droits des témoignages

**Sources consultées :** présentation et deux témoignages de *Nous sommes partout* (collectif suisse romand, édition Abrüpt 2021), https://www.noussommespartout.org/presentation/ ; https://www.noussommespartout.org/alternative-viable-ou-reappropriation-capitaliste/ ; https://www.noussommespartout.org/le-grand-midi/ ; et déclaration de David Revoy du 8 octobre 2026, https://www.davidrevoy.com/article1178/license-update-ai-derivation-prohibited-on-all-my-art-lore-stories-and-comics .

**Nouveauté réelle :** fiche FN-068 ajoutée au catalogue Médiathèque et suivie dans son journal distinct. Corpus de témoignages féministes, écologiques et autogestionnaires ; texte sur la permaculture lu en entier dans sa version web ; *Le Grand Midi* consulté seulement pour les sections lundi-mardi, mercredi et jeudi. Licence des textes CC BY-NC-SA 4.0, donc consultation gratuite mais pas licence libre au sens strict ; code du site sous MIT. Le manifeste V2.5 éditorial non adopté reste inchangé.

**Contradictions :** soutien financier institutionnel à des paroles anti-institutionnelles ; accès libre à la lecture sans libre réutilisation commerciale ; protection des auteurices et liberté de remix dans la déclaration anti-IA de David Revoy, dont l'opposabilité n'est pas établie.

**Transmissions proposées, réception non attestée :** au Lecteur, confronter les récits de cantine et de permaculture à FN-019/FN-009 sur pouvoir informel et travail invisible ; à l'Archiviste et à la Biographe, préserver l'anonymat des témoignages et leurs provenances ; au Juriste, examiner les droits des formats et la portée des nouvelles mentions anti-IA. **Modifications :** catalogue, suivi et journal distinct Médiathèque, plus présent journal commun. **Suite :** approfondir *Le Grand Midi* sans prétendre avoir lu le recueil entier. Aucun Wiki publié, aucune gouvernance modifiée.

## 2026-10-29 — Atelier Communication — Kit de dépôt Instagram

**Sujet :** création d'un paquet ZIP d'import manuel pour trois carrousels.

**Sources :** 12 exports illustrés déjà préparés, textes et descriptions alternatives de l'atelier, manifeste V2.5 éditorial (non adopté collectivement).

**Constats :** 12 JPG vérifiés à 1080 × 1350, regroupés en trois ensembles de quatre ; trois légendes, douze descriptions alternatives et guide d'import intégrés au paquet local. Les images sont également présentes dans le dossier privé Google Drive « La Faille noire / Instagram - lancement ».

**Contradictions :** aucun accord implicite de personnes illustrées ni affiliation aux collectifs réels ; images générées ou retravaillées avec IA ; usage de Metricool et Instagram sans délégation politique.

**Wiki :** pistes pour communication accessible, éthique de l'illustration et traçabilité des supports (pages non modifiées).

**Modifications réellement effectuées :** création locale du paquet LA_FAILLE_NOIRE_METRICOOL_PRET_A_IMPORTER.zip. Aucun brouillon Metricool confirmé, aucune publication, aucune modification du manifeste.

**Reste à faire :** importer les trois carrousels manuellement ou via un parcours autorisé dans Metricool, confirmer les quatre médias et le statut brouillon de chaque post, puis faire relire avant toute publication.


## 2026-10-29 · Archéologue des communs · Questions de preuve au Louvre

**État consulté :** journal commun et fiche candidate ARCH-005 dans Drive.

**Constat :** comparer les règlements du 2 avril et du 3 mai nécessite le texte intégral du premier. La présence de noms semblables dans deux inventaires ne démontre pas une identité personnelle ni une continuité de fonction. Un document figuratif sur les opérations d'armement ne prouve pas le fonctionnement des assemblées.

**Travail complémentaire :** distinguer la règle écrite, sa mise en œuvre et les moyens matériels d'exercer les décisions. Rechercher procès-verbaux, livres de paie, embauches et documents de fourniture. La fiche ARCH-005 reste candidate.

**Transmissions proposées, non confirmées :** Biographe (identification des responsables), Médiathèque (iconographie et provenance), Penseur (dépendance matérielle et autonomie).

**Modification :** présente entrée seulement ; tentative de complément dans Drive bloquée, non enregistrée. Aucun changement au manifeste, aucune publication.


## 2026-10-29 — Le Penseur — Étude 22 : pouvoir informel

Sources consultées : journal commun et Charte V0.4, articles 11, 12 et 21 à 25. La Charte et le Manifeste V2.5 ne sont pas adoptés collectivement.

Constat : les dispositions candidates traitent déjà des privilèges, des mandats, des conflits d'intérêts et du contrôle des accès. Contribution critique nouvelle : analyser les dépendances fonctionnelles plutôt que profiler les intentions individuelles. Test fictif : absence de quinze jours d'une personne centralisant accès, finances et relations. Questions : continuité, transmission, remplaçabilité, confidentialité et charge de travail.

Contradictions : contrôle du pouvoir sans surveillance ; rotation sans perte de compétence ; responsabilité sans culpabilisation. Transmission proposée au Juriste et à l'Organisateur, réception non attestée. Wiki : candidat seulement. Modifications : journal uniquement ; aucune règle ni publication Wiki. Suite : tester les contre-pouvoirs informels.


## 2026-10-29 — Archiviste / Médiathèque : fusion documentaire
Directive de transfert reçue : l'Archiviste reprend les missions de la Médiathèque, sans autorité politique nouvelle et sans supprimer les archives.
Documents relus : catalogue https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit ; suivi https://docs.google.com/document/d/1C7raL1dIAxHeXf8Ps7riE2ssQjGQyoAeb6MBg1MA11Q/edit ; journal Médiathèque https://docs.google.com/document/d/1wNK-JcDJsMQ6KbsyJ2IgSXHbcW_hQ8B96Vze73SWHS4/edit ; manifeste V2.5 non adopté https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit .
État réel vérifié : FN-001 à FN-068 ; FN-069 Combahee River Collective Statement absent du catalogue à cette lecture ; analyse FN-068 Le Grand Midi déjà enregistrée dans les trois documents Médiathèque ; ne pas dupliquer.
Prochaine étude complémentaire : FN-068 (cantine autogérée) × FN-009 (Jo Freeman) × FN-019 (Seeds for Change) ; analyser comment se distribuent tâches, pouvoir informel, accueil, liberté de refus, charge et fatigue, sans présumer l'application réelle des expériences rapportées.
Transmissions à proposer au Lecteur et à l'Organisateur ; réception non attestée. Modifications : cette entrée du journal commun seulement, aucune modification du catalogue, du manifeste ou du Wiki. Poursuivre archivage ARCH/BIO/ASSO et médiathèque FN avec niveaux de preuve distincts.


## 2026-10-29 — Audit transversal Archiviste/Médiathèque — raisonnements ouverts

**Objet :** reprise après fusion des ateliers et identification des raisonnements interrompus, sans création de doublons. Référence : manifeste V2.5 éditorial, non adopté collectivement.

**Sources réellement consultées :** catalogue Médiathèque, suivi, journal distinct (Drive), fiche FN-009 Jo Freeman, analyse FN-009 × FN-019, journal critique FN-019 (Drive), journal commun GitHub main ; vérification de `wiki-decision-collective.html` et de fiches existantes sur main.

**État :** catalogue numéroté FN-001 à FN-070 ; FN-069 Combahee et FN-070 Anna Julia Cooper présentes, contrairement à l'entrée de transfert antérieure du journal qui reflétait un état plus ancien. FN-022 et FN-048 renvoient au même livre de Louise Michel, *La Commune* (1898), doublon à marquer sans supprimer les identifiants. Travaux sur Cooper déjà reliés au Lecteur ; pas de nouvelle fiche à créer. Les notices numérotées ne doivent pas être comptées comme autant d'œuvres distinctes sans déduplication.

**Chantiers ouverts prioritaires :**
1. FN-069 × FN-009 : difficultés d'organisation du Combahee River Collective face aux mécanismes de pouvoir informel décrits par Freeman ; distinguer témoignage et preuves externes.
2. ARCH ateliers d'armes du Louvre 1871 : comparer règlements, dates, éditions et preuves d'application effective ; ne pas déduire des pratiques réelles du seul texte d'un règlement.
3. FN-068 × FN-009 × FN-019 : observations proposées autour d'une cantine autogérée, sans surveillance nominative ni adoption présumée.
4. FN-070 : compléter vérification des droits en France, critiques des passages orientalistes et coordination avec Lecteur.
5. Entraide/dette/communs : Kropotkine, Mauss, Graeber, Ostrom ; distinguer participation libre et obligations révisables.
6. Travail/autonomie : Federici, Mies, Illich, Gorz ; distinguer autonomie collective et transfert des tâches invisibles.
7. Consentement/justice : Arendt, Goldman, Pateman, Mills, Rawls ; faire place aux objections et passer de la théorie à la documentation des inégalités.
8. Audit des licences, liens vers les fiches candidates et réelle intégration Wiki.

**Contradictions de méthode :** une ressource gratuite n'est pas nécessairement libre ; une source primaire militante n'est pas une vérification indépendante ; une proposition GitHub n'est pas automatiquement un article Wiki validé ; un accès à une édition américaine du domaine public ne garantit pas les droits français.

**Modifications réellement effectuées :** présente entrée de coordination seulement. Aucune modification du catalogue, du Wiki, des fiches, du manifeste ni d'une décision de gouvernance. **Transmissions proposées** au Lecteur, au Penseur, au Juriste, à la Biographe et à l'Organisateur : réception non vérifiée.

**Suite :** commencer par des rapprochements sourcés FN-069 × FN-009 et ARCH Louvre ; supprimer les doublons de travail, pas les archives historiques ; suivre chaque question jusqu'à validation ou rejet documenté.


## 2026-10-29 — Archiviste / Médiathèque — Enquête Combahee × Freeman et ARCH-005 Louvre
**Reprise :** dossiers FN-069, FN-009 et étude ARCH-005 déjà existants, sans nouvelle numérotation.
**Sources consultées directement :** déclaration Combahee (https://anotherworldarchives.org/combahee), texte de Jo Freeman (https://www.jofreeman.com/joreen/tyranny.htm), transcription critique et contextualisation du règlement du 3 mai 1871 par Michèle Audin (https://macommunedeparis.com/2023/05/27/3-mai-1871-cent-six-ouvriers-redigent-un-reglement-de-leur-atelier/), document archivistique ARCH-005 dans Drive.
**Constats :** Combahee documente à la fois les obstacles rencontrés dans d'autres mouvements et son organisation autonome ; Freeman documente le pouvoir informel dans les groupes sans structure explicite et les avantages initiaux de certains petits groupes informels. La comparaison ne suffit pas à démontrer une hiérarchie interne précise au collectif Combahee.
**Louvre :** le règlement daté du 3 mai prévoit désignation des responsables par les ouvriers, révocabilité et répartition des fonctions, et demeure un texte soumis à approbation. Il n'atteste pas à lui seul l'exécution de chaque disposition. La transcription de l'autre moitié du texte et les sources primaires datées restent à collationner.
**Contradictions :** autonomie d'un groupe minorisé versus possibilité de concentration interne du pouvoir ; règle ouvrière démocratique versus preuves historiques d'application ; responsabilité identifiable versus surveillance.
**Transmissions proposées :** au Lecteur, étude ciblée des difficultés organisationnelles dans la section III du texte Combahee ; à la Biographe, recherche des personnes et réseaux sans extrapolation ; à l'Archiviste, collation des règlements Louvre du 2 avril et du 3 mai, preuve de mise en oeuvre ; à l'Organisateur, suivi de ces questions. Réception non confirmée.
**Modifications :** cette entrée au journal commun uniquement ; pas de nouveau FN, ni publication Wiki, ni modification du manifeste V2.5 (référence éditoriale non adoptée).


## 2026-10-29 — Archiviste/Médiathèque — Recoupements Combahee et ateliers du Louvre

**Sources nouvelles vérifiées :** histoire orale du Combahee River Collective publiée par The Nation https://www.thenation.com/article/society/combahee-river-collective-oral-history/ ; témoignage de Barbara Smith, Voices of Feminism Oral History Project, Smith College https://www.smith.edu/libraries/libs/ssc/vof/transcripts/Smith.pdf ; Smithsonian, « Collective Re-rooted », transcription https://americanhistory.si.edu/sites/default/files/file-uploader/NMAH_Collected_ep2_transcript.pdf ; Michèle Audin, règlement des ateliers du Louvre, articles 6 et suivants https://macommunedeparis.com/2023/05/31/3-mai-1871-le-reglement-des-ateliers-du-louvre-suite/ ; association des Amies et Amis de la Commune sur la politique sociale https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/dossier-thematique/democratie-laicite-oeuvre-sociale/580-la-politique-sociale-de-la-commune .

**Combahee, fait attesté par témoignage :** Barbara Smith relate que la rédaction de la déclaration de 1977 fut réalisée par trois membres actives, Barbara Smith, Beverly Smith et Demita Frazier. Il ne faut pas en déduire que trois personnes exerçaient à elles seules la direction politique de toute l'organisation. Le Smithsonian rapporte que Barbara Smith a évoqué le SNCC comme modèle organisationnel démocratique. Des interviews évoquent l'évolution du noyau et des participantes. Cela nourrit l'étude FN-069 × FN-009 Jo Freeman mais ne prouve aucune « élite informelle » particulière dans Combahee.

**Louvre, corroboration et tension :** le règlement ouvrier du 3 mai 1871 prévoit un conseil quotidien avec délégués ouvriers et responsables ; une étude historique indique des journées de dix heures au Louvre, en tension avec l'aspiration de Fränkel à huit heures. Les prescriptions ne démontrent ni leur application effective ni l'existence de bulletins de salaire. Préserver l'étude ARCH-005 existante ; collation des originaux du 2 avril et du 3 mai et recherche de sources d'application encore en attente.

**Transmission proposée :** au Lecteur, approfondir les passages sur rédactrices, noyau et conflits internes de Combahee, sans extrapoler ; à la Biographe, croiser les trajectoires Frazier/Smith avec les entretiens ; à l'Archiviste, confronter document prescriptif et preuves de fonctionnement de l'atelier du Louvre ; au Penseur, distinguer coordination élue, charge et pouvoir. Réception non vérifiée.

**Modifications réelles :** présente entrée uniquement ; aucune nouvelle notice FN, aucune publication Wiki, aucun manifeste ni gouvernance modifiés.


## 2026-10-29 — Archiviste : recoupements ciblés Combahee et Louvre
**Combahee :** entretien collectif avec Barbara Smith, Beverly Smith, Demita Frazier et Margo Okazawa-Rey (The Nation, 2021) : Demita Frazier décrit une dissolution progressive, sans schisme majeur selon son témoignage ; Barbara Smith ne souhaite pas détailler cet épisode. Ne pas transformer l'arrêt du groupe en preuve d'échec de l'horizontalité. Source https://www.thenation.com/article/society/combahee-river-collective-oral-history/ . Le Smithsonian décrit une inspiration SNCC signalée par Barbara Smith : https://americanhistory.si.edu/sites/default/files/file-uploader/NMAH_Collected_ep2_transcript.pdf . Ces récits rétrospectifs ne remplacent pas les archives contemporaines.
**ARCH-005 :** inventaire BHVP, notice n°637, règlement des ateliers d'armes du Louvre daté 2 avril 1871, affiche MP 159, visa attribué à Léo Fränkel : https://www.enssib.fr/bibliotheque-numerique/documents/61706-bibliotheque-historique-de-la-ville-de-paris-rapport-de-stage.pdf . Chronologie exacte de la datation, de l'approbation et de l'impression toujours à vérifier sur le fac-similé. Le règlement du 3 mai décrit un conseil quotidien : https://macommunedeparis.com/2023/05/31/3-mai-1871-le-reglement-des-ateliers-du-louvre-suite/ . La mention de dix heures de travail provient d'une synthèse historique, pas de feuilles d'heures : https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/dossier-thematique/democratie-laicite-oeuvre-sociale/580-la-politique-sociale-de-la-commune .
**Contradictions :** récit rétrospectif versus archive contemporaine ; datation d'une pièce versus application de ses prescriptions ; dissolution d'un collectif versus preuve de son échec.
**Travaux restants :** demander ou consulter l'image MP 159, collationner textes 2 avril et 3 mai ; rechercher traces de fonctionnement, décisions et paie. Transmissions proposées à la Biographe et au Lecteur, réception non attestée. Modification : journal seul ; aucune publication Wiki ou manifeste changé.


## 2026-10-29 · Archéologue des communs · EXP-004 Mondragón enrichie

**Travail effectué :** vérification des études sur les droits des sociétaires et des salariés non sociétaires, puis enrichissement effectif de la fiche EXP-004 dans Google Drive, relu après écriture.

**Sources :** Santos-Larrazabal et al. (2022), https://onlinelibrary.wiley.com/doi/10.1111/apce.12329 ; Bretos, Errasti et Marcuello (2018), https://onlinelibrary.wiley.com/doi/10.1111/1748-8583.12165 ; étude qualitative de 2022, https://pmc.ncbi.nlm.nih.gov/articles/PMC8964931/ .

**Résultat :** une étude rapporte 26 759 sociétaires travailleurs sur 81 837 salariés du groupe en 2018, filiales comprises. Les organes démocratiques décrits représentent les membres concernés ; l'existence de droits identiques pour tous les non-membres n'est pas démontrée. La généralisation à toutes les entités est exclue.

**Transmissions proposées, réception non vérifiée :** Médiathèque (indexer les trois études), Lecteur (contrôler méthodologies), Juriste (droits des non-sociétaires), Penseur (périmètre réel de la démocratie coopérative), Organisateur (liaison EXP-004 sans doublon).

**Modification vérifiée :** EXP-004 enrichie dans Drive ; aucune nouvelle fiche, aucune publication ni changement du manifeste. À poursuivre : statuts et mécanismes de recours par coopérative.


## 2026-10-29 · Enrichissement Wiki · Presse communarde

**Réalisé et vérifié dans Drive :** création de la fiche candidate ARCH-006 — Le Prolétaire (Paris, 1871), https://docs.google.com/document/d/1gwsUuaakmZe3tR-kUS5aLKp5L__E4EWIRd9gbKhQ_II/edit ; enrichissement d'ARCH-005 (règlements du Louvre) et de COL-003 (Club des prolétaires) ; ajout d'une notice au catalogue et d'un suivi à la Médiathèque ; entrée détaillée au journal des changements majeurs Interstice dans Drive.

**Sources :** BnF https://catalogue.bnf.fr/ark:/12148/cb328445424 ; RetroNews https://www.retronews.fr/journaux/proletaire ; Michèle Audin https://macommunedeparis.com/2016/06/11/le-proletaire-un-club-un-journal/ et https://macommunedeparis.com/2023/05/27/3-mai-1871-cent-six-ouvriers-redigent-un-reglement-de-leur-atelier/ .

**Contrôle :** 37 fiches candidates uniques dans les quatre dossiers Wiki inspectés : BIO 17, ASSO 8, EXP 4, COL 2, ARCH 6. Ce n'est pas un total exhaustif du Wiki entier. Pas de publication publique ni de modification du manifeste.

**Suites :** lire les quatre fac-similés ; contrôler les procès-verbaux du Club des prolétaires ; comparer les règlements du Louvre avec le Journal officiel et les archives de paie. Transmissions proposées aux ateliers, réception non attestée.


---

## 2026-10-29 · Atelier du Juriste — Passe Titre V, propriété, finances et retrait

**Documents lus :** Manifeste V2.5 consolidé du 29 octobre 2026, référence éditoriale non adoptée (https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit) ; Charte V0.4 sur GitHub, spécialement Titres IV et VI ; journal commun consulté avant écriture.

**Question juridique :** comment distinguer propriété juridique, financement, utilisation, administration et pouvoir politique, et organiser comptes, travail, sortie et restitution sans créer de privilèges matériels ou effacer les droits des personnes et des tiers ?

**Sources officielles réellement vérifiées :** Légifrance, loi du 1er juillet 1901, articles 1, 2, 4, 6 et 9 (https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069570) ; Service-Public, dons F2722, dissolution F1122, commissariat aux comptes F2907, subventions F3180, travail bénévole/salarié N22150, rémunération des dirigeants F1927, gestion désintéressée F31839 ; Associations.gouv.fr, réglementation et comptabilité associative. Les références figurent dans le document produit.

**Constats :** une association régulièrement déclarée peut détenir des biens dans les limites légales ; les dons manuels ne sont pas identiques à toutes les donations/legs ; les règles de comptabilité, certification et publication des comptes diffèrent suivant financements et activités ; au départ d'un membre, les contrats demeurent et le patrimoine associatif ne se partage pas comme des bénéfices. **Interprétation :** aucun financement ou contrôle d'outils ne devrait produire un privilège politique automatique, mais la charte ne peut abolir des droits réels ou contrats valides.

**Modifications réellement effectuées :** création sur GitHub `main` du **complément non adopté** « Charte des communs V0.5, Titre V, articles 26–30 » : https://github.com/zoutiFrutti/Interstice/blob/main/propositions/CHARTE_DES_COMMUNS_V0.5_TITRE_V_2026-10-29.md ; commit `18fa1df200f4a8673ec546768ec2d625ddaf439b`. Relecture après écriture : les articles 26, 27, 28, 29 et 30 sont tous présents. La V0.4 complète est conservée intacte : https://github.com/zoutiFrutti/Interstice/blob/main/propositions/CHARTE_DES_COMMUNS_V0.4_2026-10-29.md . Les deux textes sont à lire ensemble, et **aucune V0.5 intégrale consolidée n'est encore publiée**.

**Articles rédigés cumulés :** 36 sur 48 prévus, de 0 à 35, répartis entre la charte intégrale V0.4 (0–25 et 31–35) et son complément de Titre V (26–30). Le nombre d'articles non rédigés est de 12 : 36–47.

**Contradictions et limites :** donation/prêt/apport/achat à qualifier individuellement ; trésorerie ouverte au contrôle mais pas publication de données sensibles ; gestionnaire des clés ou du compte et contrôle politique à dissocier ; bénévolat libre et responsabilité réelle de sécurité ; fédération hypothétique ne peut absorber les biens des collectifs ; droit au retrait ne supprime pas dettes et contrats ; régime spécifique d'Alsace-Moselle et obligations sectorielles restent à vérifier si pertinents. **Anomalie documentaire secondaire :** l'architecture du Titre VI de la V0.4 inverse le résumé des articles 32 et 33, tandis que la rédaction réelle est correcte (32 = mesures conservatoires, 33 = signalements) ; à rectifier lors d'une consolidation sans réécrire l'histoire.

**Travaux restants :** rédiger articles 36–39 (autonomie fédérative), 40–43 (documentation, RGPD et pouvoir technique) et 44–47 (révision, retrait et dissolution) ; envisager ensuite une version complète rassemblant V0.4 et complément V0.5, avec contrôle des numéros et des renvois. Ne pas changer le manifeste ni produire des règles adoptées.



## 2026-10-29 — Archiviste / Médiathèque : pièces contemporaines Combahee et indice d'application au Louvre
**Nouveautés vérifiées :** fonds Combahee River Collective MS-1178 à Johns Hopkins https://aspace.library.jhu.edu/repositories/3/resources/1942 (tracts, mémos, communiqués et campagnes, 1975-1985 ; consultation physique avec préavis) ; fonds d'éphémères Barbara Smith à Boston Public Library https://archives.bpl.org/repositories/2/resources/192 (tracts, rencontres féministes, campagne contre les violences) ; tract Combahee de 1979 aux Lesbian Herstory Archives https://nyheritage.contentdm.oclc.org/digital/collection/p274401coll1/id/1064 . Ces inventaires attestent des pièces, mais le contenu de chaque pièce non ouverte n'a pas été lu. Aucun procès-verbal de décision trouvé ou examiné à ce stade.
**Louvre, découverte :** étude historique André-Clément Decouflé « Réquisition, autogestion ? », reproduite dans *Encyclopédie internationale de l'autogestion*, tome 10 (2021), p. 171 et suivantes https://www.syllepse.net/syllepse_images/encyclope--die-de-lautogestion--tome-10.pdf ; https://autogestion.asso.fr/requisition-autogestion/ . Elle rapporte un échange de Rossel et Avrial le 10 mai 1871 : Avrial aurait signalé que les ateliers du Louvre avaient déjà connu trois directeurs élus et que la production était défaillante. Une reproduction pédagogique https://edumedia-depot.gei.de/bitstreams/c275368b-f067-4ac8-9b5e-4a19881063c7/download attribue la citation aux mémoires de Rossel via Jacques Rougerie. Cela constitue un *indice testimonal indirect* de mise en œuvre élective, pas une corroboration indépendante des élections ou de la productivité.
**Rectification :** ne plus formuler globalement « aucune trace d'application », mais « une trace testimoniale indirecte est trouvée ; restent absents les registres électoraux, les feuilles de paie, les procès-verbaux et la collation avec les mémoires originaux de Rossel ».
**Contradictions :** prescriptions démocratiques versus témoignage de mauvaise activité ; possible biais anti-autogestion de l'interlocuteur et des citations reprises ; ne pas inférer échec structurel généralisé.
**À poursuivre :** obtenir le fac-similé MP 159 (2 avril), l'affiche du 3 mai, l'édition originale des mémoires de Rossel, et ouvrir au moins un tract Combahee pour relever son contenu précis et ses métadonnées.
**Modifications :** entrée au journal uniquement ; FN et ARCH-005 non modifiés, Wiki public non modifié, manifeste V2.5 éditorial non adopté intact.


## 2026-10-30 · Archéologue des communs · Le Prolétaire et le Club des prolétaires

**Source consultée :** Michèle Audin, « Le Prolétaire — un club, un journal » (2016), https://macommunedeparis.com/2016/06/11/le-proletaire-un-club-un-journal/ . Le PDF des quatre numéros, lié par ce billet, n'a pas pu être ouvert ; aucune lecture intégrale revendiquée.

**Fait et interprétation :** Audin distingue participants, organisateurs et rédacteurs. Elle signale la citoyenne André, blanchisseuse et secrétaire fréquente, dont la parenté éventuelle avec Jules André n'est pas établie. Elle relève des différences entre interventions consignées en procès-verbaux et ligne du journal. Ne pas attribuer les éditoriaux à toutes les participantes.

**Écritures confirmées dans Drive :** ARCH-006 et COL-003 enrichies, relues après écriture ; journal des changements majeurs Interstice complété et relu. Aucune nouvelle fiche. Les fiches restent candidates.

**Transmissions proposées, non attestées comme reçues :** Biographe pour identifier la citoyenne André ; Médiathèque pour les fac-similés et leurs droits ; Lecteur pour la lecture intégrale des quatre numéros. Aucun changement du manifeste ou de la gouvernance, aucune publication publique.


## 2026-10-29 — Archiviste : pièces Combahee 1978-1979 et lettre du Louvre 12 mai
**Nouvelles sources :** The History Project, « Eleven Black Women Why Did They Die? » (1979), https://historyproject.omeka.net/items/show/590 ; « 8 Black Women Why Did They Die? » (vers 1978-1979), https://historyproject.omeka.net/items/show/591 . Les notices décrivent différentes versions du tract Combahee et une progression possible de la numérotation des victimes. Le tract de onze victimes contient, selon sa notice, une autorisation de reproduction sans permission ; cette indication ne s'étend pas automatiquement aux autres textes ou images. Le tract de huit victimes inclut un poème de ntozake shange : droits de tiers à vérifier.
**Louvre :** « Harbingers or Entrepreneurs? A Workers' Cooperative during the Paris Commune », étude historique https://files.libcom.org/files/Paris%20Commune%20Co-ops.pdf , note 22 : lettre du directeur des ateliers du Louvre à Avrial du 12 mai 1871, cote Ly 108, document cité mais original non consulté. L'étude cite séparément des feuilles de paie du 20 mai concernant l'usine de la rue de Lourmel : ne pas les attribuer au Louvre. Rossel, *Mémoires, procès et correspondance*, éd. Roger Stéphane (1960), p. 267-268, est l'édition de référence pour les propos attribués à Avrial : https://www.bibliotheque.nat.tn/BNT/detailstatic.aspx?RSC_BASE=SYRACUSE&RSC_DOCID=1101420&TITLE=louis-nathaniel-rossel-1844-1871&_lg=fr-FR . Edition antérieure de 1908 également identifiée, sans collation : https://www.bibliotheque.nat.tn/BNTK/doc/SYRACUSE/1218329/memoires-et-correspondance-de-louis-rossel-1844-1871 .
**Portée probatoire :** existence et description des tracts attestées par notices de conservation ; lettre du 12 mai attestée comme référence d'archive par l'étude mais non lue ; les récits de Rossel restent situés. La lettre peut documenter la pratique opérationnelle sans qu'on puisse anticiper son contenu.
**À obtenir :** image et transcription de la lettre du 12 mai dans Ly 108 ; pages Rossel 267-268 ; fac-similé MP 159 du 2 avril ; examen des versions de tracts Combahee et droits spécifiques.
**Modification réelle :** présente entrée au journal commun seulement. Catalogue, ARCH-005, FN-069, Wiki public et manifeste V2.5 non adopté inchangés.


## 2026-10-29 — Archiviste — Tracts Combahee, version espagnole et preuve de mobilisation
Sources : notice d'archive du tract espagnol « 8 Mujeres Negras ¿Por Que Fueron Asesinadas? » https://historyproject.omeka.net/items/show/592 ; catalogue des photographies et tracts du collectif https://historyproject.omeka.net/items/browse?tags=Combahee+River+Collective ; étude universitaire *Counting Feminicide: Data Feminism in Action*, chapitre 1, https://mitpressonpubpub.mitpress.mit.edu/pub/cf-chap1/release/2 .
Faits : une version espagnole d'un tract contre les meurtres de femmes noires est conservée à Boston ; une notice photographique documente une manifestation du 15 janvier 1980 contre les violences policières en soutien à Bellana Borde. L'étude universitaire retrace les versions successives des tracts (6, 7, 8, 11 victimes) et mentionne plus de 18 000 exemplaires anglais et espagnols, donnée secondaire non recoupée sur des justificatifs de tirage.
Contradictions et limites : ne pas confondre version, quantité effectivement distribuée et réception ; les notices ne prouvent pas qui décidait de la rédaction, de la traduction ou des tirages. Droits de republication de chaque pièce à vérifier.
Louvre : les mémoires originaux de Rossel, la lettre du directeur à Avrial du 12 mai (Ly 108) et le fac-similé MP 159 restent non consultés ; aucune nouvelle preuve directe d'exécution du règlement n'est établie lors de cette passe.
Modifications réelles : entrée de journal seulement, ni catalogue FN, ni ARCH-005, ni Wiki ni manifeste V2.5 éditorial non adopté modifiés. Suite : obtenir les originaux et les inventorier avec leur provenance.


## 2026-10-29 — Archiviste — localisation des originaux Louvre et Combahee
**Louvre :** article scientifique *Harbingers or Entrepreneurs? A Workers' Cooperative during the Paris Commune* https://www.cambridge.org/core/journals/historical-journal/article/abs/harbinghers-or-entrepreneurs-a-workers-cooperarive-during-the-paris-commune/B1073C3768ACA7CCBE3AD7CFA1A2E9C2 : note 8, le carton Ly 108 contient des ensembles distincts de correspondances de coopératives métallurgiques et d'entreprises d'armement ; note 22, lettre du directeur de l'atelier du Louvre à Augustin Avrial datée du 12 mai 1871, cote Ly 108. La lettre n'a pas encore été ouverte : ne pas en inventer le contenu. Louis Rossel, *Mémoires et correspondance*, édition 1908, P.-V. Stock, notice https://openlibrary.org/works/OL13166519W/M%C3%A9moires_et_correspondance_1844-1871 ; exemplaire BnT cote E-8-13067 https://www.bibliotheque.nat.tn/BNT/detailstatic.aspx?RSC_BASE=SYRACUSE&RSC_DOCID=1218329&TITLE=memoires-et-correspondance-de-louis-rossel-1844-1871&_lg=en-US . Comparer cette édition avec les pages 267-268 de la réédition 1960, sans présumer de pagination identique. MP 159, affiche du 2 avril, inventaire BHVP https://www.enssib.fr/bibliotheque-numerique/documents/61706-bibliotheque-historique-de-la-ville-de-paris-rapport-de-stage.pdf ; image originale toujours non consultée.
**Combahee :** Harvard Radcliffe présente une photographie du plan manuscrit et des annotations de Barbara Smith concernant la déclaration de 1977 https://www.radcliffe.harvard.edu/events-and-exhibitions/press-information-for-barbara-smith-collection ; preuve d'un document de travail manuscrit, sans démontrer à elle seule le processus collectif complet. Nouveau dossier identifié à Northeastern University, *Sondra Gayle Stein papers* M093, boîte 1, « Combahee River Collective, 1979 » https://archivesspace.library.northeastern.edu/repositories/2/archival_objects/285284 , contenu encore à consulter. Boston Public Library : *Barbara Smith Black feminist ephemera collection* MS.SC.0028 https://archives.bpl.org/repositories/2/resources/192 , provenance explicitée, collection acquise en 2026.
**Portée / incertitudes :** notices de conservation et reproduction photographique identifiées ; lettres, manuscrits complets et pièces physiques pas encore collationnés. Eviter de transformer un fonds repéré en document lu. Prochaines tâches : demande précise aux dépositaires, lecture des fac-similés, comparaison des variantes.
**Modifications réelles :** journal commun seul, ni catalogue FN-069, ni ARCH-005, ni Wiki public, ni manifeste V2.5 non adopté modifiés.


## 2026-10-30 — Anarchitecte — Réconciliation propre du chantier FN069

Suite à la divergence de la PR #26 (29 commits devant et 9 derrière main lors d'un contrôle), création d'une branche neuve `fix/wiki-review-handoff-rebased-2026-10-30` depuis le `main` courant. Neuf fichiers techniques ont été repris depuis le travail de la PR #26 (file FN069, scripts, tests et workflow) sans reprendre l'ancienne copie du journal commun. Les fichiers absents de main ont été vérifiés avant création. La version de ce journal issue de main est préservée et uniquement enrichie par cette entrée. Aucune migration Supabase, aucune publication, aucun contournement de RLS. CI PostgreSQL et Node toujours à confirmer sur la nouvelle branche ; ne pas fusionner avant résultats.


## 2026-10-30 — Anarchitecte — CI débloquée, tests réels et correctifs

Branche propre dérivée de main, PR #29 en brouillon ; neuf fichiers techniques FN069 transférés depuis PR #26 sans écrasement du journal. Comparaison initiale : 10 commits d'avance, zéro retard. Première exécution GitHub Actions vérifiée : workflow #44 (run 40973337949). Tests de contrat SQL : 2 réussis. Test Node d'idempotence : échec réel, car le retour `UNCHANGED` intervenait avant la vérification d'un SHA source divergent dans le registre ; ordre corrigé commit `770e5e3c6baa30c5e79dcaceb09555a33918441e`. Test PostgreSQL 16 jetable : échec réel `permission denied for table document_handoffs`, dû à `SELECT ... FOR UPDATE` nécessitant un privilège UPDATE absent du rôle de service. Verrou de ligne supprimé, création concurrente toujours protégée par la contrainte unique et `INSERT ON CONFLICT`, commit `0a41feb26bc9e43f935353880c27230fa86eb41e`. Les corrections sont enregistrées mais leur réussite dans une nouvelle exécution CI reste à confirmer. Aucun déploiement Supabase ni fusion ni publication Wiki.


## 2026-10-30 — Anarchitecte — Test d'ingestion concurrente FN069

Depuis la branche propre PR #29, script `tests/sql/wiki-handoff-concurrency.sh` créé (commit `2b2f8c445c0f77a5fb27d3844d36a1a0aae32bb4`) : deux connexions PostgreSQL jetables soumettent en parallèle le même identifiant. Attendus : un `CREATED`, un `UNCHANGED`, une seule ligne et un seul événement, aucun statut approuvé ou publié. Le script refuse une base autre que `wiki_test` et efface ses données de test. Workflow mis à jour (commit `a0b949bced21f8e17af1de6cff18c611852b1e49`) avec le bon nom de branche pour l'événement push et une étape de test concurrent. Le connecteur ne retournait pas encore d'exécution au contrôle initial ; succès non présumé. Aucune modification Supabase de production ni fusion.


## 2026-10-30 — Anarchitecte — Circuit GitHub → Supabase réellement opérationnel sur banc d'essai

**Sources :** les études 31 et 32 du Penseur ont été relues sur `main`, puis insérées et relues dans une nouvelle file privée `wiki_ingest_private.github_document_drafts` (Markdown intégral, identifiant stable, empreinte GitHub, titre, atelier, références, statut `needs_review`). Les protections de `public.wiki_article_submissions` restent inchangées : auteur réel et confirmation des droits requis. Le schéma privé et la RPC de service sont documentés dans `docs/proposals/wiki-github-staging-schema.sql` et `docs/proposals/wiki-github-production-rpc.sql`, appliqués au projet Supabase `rpqiwxkaiyokmxbhxfvh`. Exécution de la RPC interdite à `anon` et `authenticated` contrôlée par requête SQL.

**Automatisation testée :** inventaire Markdown GitHub Actions exécuté sur `main` (15 fichiers, 0 erreur), appel effectif au service Edge `github-wiki-ingest` via jeton GitHub OIDC depuis la PR #29 de test, puis seconde synchronisation retournant 15 `UNCHANGED` sans doublon. Lecture indépendante Supabase : 15 brouillons, 15 `needs_review`, 15 révisions, 0 publié ; 10 `PENSEUR`, 1 `JURISTE`, 4 non classés. Test transactionnel par RPC sur une étude réelle : `UNCHANGED`, puis changement de titre `UPDATED_REVIEW_REQUIRED` et une seule ligne dans la transaction annulée par `ROLLBACK`. Le service Edge a ensuite été redéployé en version 5, en supprimant l'autorisation temporaire de la PR et de la branche ; seul le workflow de `main` est admis.

**Limites :** branche PR #29 non fusionnée lors de cette note : déclencheurs `main`/quotidiens non encore confirmés après fusion. Aucun passage vers un article public ; sources et droits non validés ; le reviewer Wiki n'a pas encore d'interface sur cette table privée. Classement `a_classer` et rapprochements sémantiques à traiter, ainsi que documents hors répertoires couverts. Voir `docs/wiki-github-synchronisation.md`. Ne pas confondre intégration automatique dans file privée et publication éditoriale.


## 2026-10-30 — Transmission 001 du Relieur — audit Anarchitecte / Graphiste

**Réception confirmée.** Audit des dépendances PR #22 (kit graphique) et PR #28 (aperçu des contributions et protections d'interface), sans fusion ni publication. Liste des chemins comparée : seule intersection directe constatée `coordination/JOURNAL_COMMUN.md` ; les deux propositions modifient des surfaces différentes du site, mais leurs interfaces Wiki devront être testées ensemble sur `main` avant fusion. Les fichiers `revue-articles-wiki.html` de PR #28 ne sont pas présents sur `main` à ce contrôle : la fonctionnalité ne doit pas être dite déployée. PR #22 agit sur `wiki.html`, CSS, visuels, navigation et fontes ; PR #28 propose un rendu de fiches, une prévisualisation de modération et ses tests. Aucun verdict de compatibilité en exécution commune n'est établi par la seule comparaison de chemins.

**Contrôle Supabase réel (lecture seule) :** `public.moderator_accounts` = 0 ligne ; `wiki_ingest_private.github_document_drafts` = 15 lignes ; `public.wiki_article_submissions` = 0. La politique de lecture des soumissions est réservée à `authenticated` avec auteur propriétaire ou `is_moderator()` ; le journal de relecture est lisible par `authenticated` modérateur. Fonctions `is_moderator` et `review_wiki_article` SECURITY DEFINER, exécution accordée au rôle `authenticated` ; RPC d'ingestion GitHub SECURITY INVOKER réservée à `service_role` et administrateur. Aucune permission d'accès modérateur à la table privée des imports n'a été démontrée. Aucun compte modérateur effectif n'est provisionné : impossible de prétendre à une session de modération opérationnelle.

**Proposition de raccordement (non appliquée) :** créer une interface d'examen des brouillons importés, avec lecture serveur strictement réservée à des modérateurs authentifiés et vérifiés côté base ; conserver les statuts `needs_review`, aucune modification de la table de soumission ou approbation automatique. Prévoir une opération explicite de promotion éditoriale, avec licence, confidentialité et sources contrôlées, journal d'audit et affichage public seulement après autorisation. Distinguer validation documentaire et adoption collective. Les brouillons FN069 et études 31/32 restent en revue.

**Dépendances :** Graphiste pour harmonisation du rendu de PR #22/28 ; Juriste et Archiviste/Médiathèque pour droits, sources et confidentialité ; Organisateur/collectif pour désignation contrôlable des responsables de relecture. Tester session réelle, contrôles négatifs et affichage public avant toute publication. Aucun changement de droits, de statut ou de déploiement effectué durant cet audit.


## 2026-10-30 · Archéologue des communs · Décret du 16 avril 1871 et travail coopératif
**Documents Drive créés ou enrichis, vérifiés après écriture :**
- ARCH-007 (nouvelle fiche candidate, classée dans Wiki - Histoire et mémoires) : https://docs.google.com/document/d/1CFgqsrbZIY4r0SFvt5nS0Dwsth2FoTkw1Gf9_yptZ3o/edit
- BIO-015 Augustin Avrial (enrichie) : https://docs.google.com/document/d/1T8Tc2zQJisKn7DMWnAPPKtDn7DmPUCyNb7xcA4ne_Ic/edit
- ARCH-004 Appel aux ouvrières (enrichie) : https://docs.google.com/document/d/13q2UVdWu1YCHMeU1bc78LKOK7dD6qqYsziLAc30p1Fo/edit
- Catalogue et suivi Médiathèque, journal Biographies et journal des changements majeurs Interstice actualisés et relus.

**Sources :** BnF Journal officiel de la Commune (https://catalogue.bnf.fr/ark:/12148/cb328020920), transcription du décret du 16 avril (https://gabrielperi.fr/commune-de-paris/decret-de-convocation-des-chambres-syndicales-ouvrieres-16-avril-1871/), étude Robi Morder 2014 (https://autogestion.asso.fr/16-avril-1871-un-decret-de-principe-de-la-commune/), éphéméride historique (https://www.commune1871.org/la-commune-de-paris/histoire-de-la-commune/commune-1871-ephemeride/1207-commune-1871-ephemeride-16-avril-la-requisition-des-ateliers-abandonnes).

**Distinction critique :** le décret ordonne une enquête et la préparation de reprises coopératives, non une réquisition générale déjà accomplie. Les projets spécifiques de l'Union des femmes, les ateliers d'armes du Louvre et les ateliers abandonnés ne sont pas interchangeables. Le PDF des procès-verbaux du 16 avril est identifié mais non ouvert (429), collation à faire. Chiffres de 42 associations, 34 chambres et réquisitions effectives : données secondaires à vérifier sur archives.

**Inventaire des quatre dossiers Wiki contrôlés :** BIO 22, ASSO 8, EXP 4, COL 2, ARCH 7 = 43 fiches candidates uniques. Cette passe : 1 nouvelle ARCH ; 1 BIO et 1 ARCH enrichies. Aucun nouveau numéro FN. Les fiches restent candidates, aucune publication publique, aucun changement au manifeste V2.5 ni à la gouvernance.

**Transmissions proposées (réception non confirmée) :** Lecteur et Archiviste pour collation JO/procès-verbaux ; Biographe pour Avrial et les ouvrières ; Médiathèque pour lien FN-045/046 et droits ; Organisateur pour suivi des lacunes et des preuves de mise en oeuvre.


### Complément du 30 octobre 2026 · Correction des métadonnées de Nathalie Le Mel
**Écritures Drive supplémentaires :** BIO-009 (https://docs.google.com/document/d/1UF54kCo7mwSIze66uNbo1ViEzRhAO4ptUjylBaJR5-o/edit) et ARCH-002 (https://docs.google.com/document/d/1PFDkD9peH97M3O3nhSFsjZgPX6ec8S7mNNPmT_lfm-k/edit), plus catalogue et suivi Médiathèque et journaux Drive.

**Anomalie vérifiée :** l'indexation de l'affiche Carnavalet AFF5721 donne « Nathalie Le Mel (1826-1871) », alors que la notice d'autorité BnF donne un décès en 1921. Le nom reste bien présent dans la transcription de l'affiche du 20 mai 1871. Sources : https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/republique-francaise-ndeg-373-liberte-egalite-fraternite-ndeg-373-commune ; https://data.bnf.fr/fr/ark:/12148/cb13169483s.pdf .

**Incertitude conservée :** naissance 26 août 1826 à Ivry-sur-Seine selon la BnF, 26 août 1826 à Brest selon une notice associative, 24 août 1826 à Brest selon un bulletin associatif évoquant l'acte. Aucun acte original collationné ; pas de correction arbitraire. https://commune1871.org/images/PhotothequeAmis/pdf/Bulletin_91.pdf .

**Bilan corrigé de la passe :** 1 ARCH nouvelle, 2 BIO et 2 ARCH enrichies. Inventaire des quatre dossiers : 43 candidates uniques. Aucune publication ni modification de gouvernance.


## 2026-10-30 · Archéologue des communs · Union des femmes et économie coopérative

**Périmètre contrôlé :** quatre dossiers Drive Wiki (Histoire et mémoires, Biographies, Associations et organisations, Collectifs et réseaux), catalogue et suivi Médiathèque, journal des changements majeurs. Inventaire direct : 43 fiches candidates uniques (22 BIO, 8 ASSO, 4 EXP, 2 COL, 7 ARCH) ; journal de l'atelier des biographies exclu.

**Écritures confirmées et relues :** trois fiches existantes enrichies, sans doublon ni nouvelle fiche : [ASSO-007 Union des femmes](https://docs.google.com/document/d/1VGqnT2WnZFcAK8vV-qTedvBAupvR-UVsWkcQ7RsVxAg/edit), [BIO-018 Aline Jacquier](https://docs.google.com/document/d/1Vyq5ZyzImnrl9UIACDutLYNAacUt8VLUWfZcA0JlHkk/edit), [ARCH-007 décret du 16 avril](https://docs.google.com/document/d/1CFgqsrbZIY4r0SFvt5nS0Dwsth2FoTkw1Gf9_yptZ3o/edit). Catalogue et suivi de la Médiathèque, ainsi que journal des changements majeurs, enrichis et relus après écriture.

**Sources :** Carolyn J. Eichner, « To Assure the Reign of Work and Justice » (1998), PDF consulté avec passages ciblés, https://journals.univie.ac.at/index.php/oezg/article/view/5799/5730 ; affiches Carnavalet n°342 (AFF3543) et n°373 (AFF5721) ; Fondation Gabriel Péri, transcription du décret et renvoi au JO du 25 avril ; deux notices de l'Association des Amies et Amis de la Commune pour les dates divergentes 15 et 18 mai.

**Faits et limites :** Eichner distingue comité provisoire, comité central et commission exécutive ; le projet de fédération prévoit cinq commissions et cent déléguées théoriques, pas un effectif réalisé prouvé. Le rapport Desprez/Ringard (cité par Eichner, fonds LY 22) concerne au moins quatre locaux inspectés, pas quatre ateliers réquisitionnés. Aline Jacquier est qualifiée de *bookstitcher* (brocheuse) par Eichner ; la variante « brodeuse » reste sans preuve équivalente. Les dates de constitution/réunion de la commission générale restent à confronter.

**Droits :** PDF universitaire non présumé libre ; exemplaire Carnavalet AFF3543 explicitement CC0 pour l'image, vérifier chaque autre image. Aucun texte contemporain recopié longuement.

**À faire :** consulter directement archives LY 22/23, JO des 14 et 25 avril, procès-verbaux de commission des 15/18 mai, registres et comptes des ateliers. Transmissions proposées aux ateliers Lecteur, Médiathèque, Biographies, Organisateur ; réception non confirmée. **Aucune publication, aucune modification du manifeste ni de la gouvernance.**


## 2026-10-30 · Archéologue des communs · Union des femmes : réalisations et réunions de mai

**Périmètre vérifié :** quatre dossiers Wiki Drive, catalogue et suivi Médiathèque, journal des modifications. Inventaire : 22 BIO + 8 ASSO + 4 EXP + 2 COL + 7 ARCH = **43 fiches candidates uniques** ; journaux et notices FN hors décompte.

**Travail réellement écrit et relu dans Drive :** 4 fiches existantes enrichies, 0 créée :
- ASSO-007 (Union des femmes) : https://docs.google.com/document/d/1VGqnT2WnZFcAK8vV-qTedvBAupvR-UVsWkcQ7RsVxAg/edit
- ARCH-002 (affiche n°373 et réunion du 21 mai) : https://docs.google.com/document/d/1PFDkD9peH97M3O3nhSFsjZgPX6ec8S7mNNPmT_lfm-k/edit
- BIO-018 (Aline Jacquier, délégation du XVIIe et métiers du livre) : https://docs.google.com/document/d/1Vyq5ZyzImnrl9UIACDutLYNAacUt8VLUWfZcA0JlHkk/edit
- ARCH-007 (décret et atelier confisqué) : https://docs.google.com/document/d/1CFgqsrbZIY4r0SFvt5nS0Dwsth2FoTkw1Gf9_yptZ3o/edit

**Sources croisées :** affiche originale n°373, notice Musée Carnavalet https://parismuseescollections.paris.fr/de/node/651845 ; Jacques Rougerie https://commune1871-rougerie.fr/les-femmes-de-1871,fr,8,58.html et https://commune1871-rougerie.fr/la-premiere-internationale_2,fr,8,75.html ; Alain Dalotel https://www.commune1871.org/association/qui-sommes-nous/bulletins-trimestriels/1488-la-barricade-des-femmes .

**Constats et limites :** Rougerie rapporte l'ouverture le 21 mai d'un magasin central au 31 rue des Francs-Bourgeois, dirigé par Mathilde Picot (2 francs/jour), ainsi que des recensements et commandes de sacs de sable. Il cite la fonderie Brosse comme seul atelier confisqué connu de lui au 18 mai, pas comme total définitif de toutes les réquisitions. L'affiche du 20 mai prouve une convocation syndicale pour le 21 mai, non la tenue de l'assemblée. Dalotel doute de cette tenue et distingue une réunion au Xe probablement le 22 mai ; Rougerie évoque aussi le 24 mai. Les sources ne sont pas des procès-verbaux collationnés.

**Journaux et Médiathèque :** catalogue, suivi et journal des changements majeurs complétés puis relus. Pas de nouvelle notice FN. **À faire :** consulter dossier judiciaire Le Mel, archives LY 22/23, procès-verbaux des réunions, livres du magasin et fonderie Brosse, mandats de paiement.

**Transmissions proposées, réception non vérifiée :** Médiathèque (sources et droits), Lecteur (comparaison Dalotel/Rougerie), Biographe (Jacquier/Picot), Archiviste (dossiers originaux). **Aucune publication publique ni modification du manifeste ou de la gouvernance.**


## 2026-10-30 — Transmission 006 du Relieur — audit V0 publique par l'Anarchitecte

**Réception confirmée, priorité à la sortie réelle.** Audit en lecture des fichiers du `main` : `index.html`, `wiki.html`, `bibliotheque.html`, `participer.html`, `manifeste-v2-5.html`, `proposer-article.html`, `script.js`, `ressources.js`, `manifeste.html`. Les six pages principales examinées déclarent une viewport mobile ; liens d'ancrage internes testés statiquement sur ces pages : aucun identifiant manquant détecté. La page d'accueil contient un formulaire de besoins/ressources raccordé dans `script.js` à l'Edge Function `submit-proposal`; la bibliothèque possède un formulaire connecté par `ressources.js` à `submit-resource`. Ces branchements sont des constats de code, **pas des soumissions réelles réussies**. Le Wiki a une recherche et des liens vers des fiches ; `proposer-article.html` expose une démarche de connexion/soumission. Les deux manifestes existent : V2.5 explicitement éditoriale non adoptée, V2.1 conservée comme archive.

**Contrôle public limité :** tentative de consultation HTTP du site GitHub Pages depuis l'environnement d'audit infructueuse ; aucune validation du rendu sur navigateur réel/mobile, des réponses réseau des formulaires ou de l'accessibilité clavier/lecteur d'écran ne peut être revendiquée. Les appels réseau des scripts devront être testés depuis le navigateur public, notamment erreurs réseau, protection anti-spam et confirmation de réception. Les pages `participer.html` et `proposer-article.html` sont distinctes ; clarifier visuellement les parcours besoins/ressources et articles Wiki. L'accueil comporte aussi un lien vers l'archive `manifeste.html`, à ne pas confondre avec V2.5.

**V0 minimale recommandée :** maintenir accueil, manifeste V2.5 avec avertissement, bibliothèque, Wiki des articles déjà publics et parcours participation ; vérifier les formulaires en vrai, la navigation et la lisibilité mobile, les liens 404 et les messages d'erreur avant annonce publique. Ne pas attendre la modération des 15 imports GitHub pour donner accès au contenu déjà disponible, mais ne pas exposer ces brouillons. Conserver les PR #22 et #28 en revue séparée selon les problèmes de raccordement signalés dans PR #31. Aucun compte modérateur inventé, aucun statut changé, aucune publication automatique.

**Blocages courts à lever :** (1) contrôle HTTP/navigateur réel et liens/pages 404 ; (2) essais fonctionnels des formulaires Edge et des messages d'erreur, sans spammer les tables ; (3) test mobile et accessibilité clavier, contrastes et libellés ; (4) vérification de la configuration GitHub Pages et de la cohérence de navigation V0. **Peut attendre :** intégration graphique complète des PR #22/#28, interface de modération des 15 brouillons, recherche encyclopédique avancée, nouvelles fiches et automatisations secondaires. Cette entrée documente un audit partiel et non une certification de disponibilité.



## 2026-10-30 · Atelier des Communications · Transmission 009 du Relieur

**Opérations vérifiées :** lecture du Journal commun courant et du code de `participer.html` sur la branche par défaut. Contrôle navigateur de https://app.metricool.com : écran de connexion, aucun accès aux brouillons. Recherche dans le dossier Drive fourni (1EYMBEO9JZDvyNQrnyfqU1hOjKKkkwyc5) : aucun résultat retourné ; cela ne démontre pas que les fichiers sont absents. Les trois carrousels et légendes déjà fournis dans la conversation sont conservés sans recréation ni modification.

**État Metricool :** Les failles / Compléter, pas remplacer / Relier sans centraliser : présence, quatre images, ordre, légende, textes alternatifs et déclaration IA NON VÉRIFIÉS pour chacun. Aucun brouillon créé ou modifié durant cette passe ; aucune publication ni programmation.

**Participation :** le code de participer.html propose index.html#proposer, proposer-article.html et GitHub ; il indique qu'un canal privé reste à définir. Présence dans le code seulement, réception et traitement de bout en bout non testés ici. Le journal rapporte une absence de compte modérateur lors d'un audit antérieur : recontrôle requis par l'Anarchitecte avant appel public à contributions.

**Proposition de lancement, non validée :**
1. Avant lancement : connexion Metricool puis contrôle des trois brouillons, quatre images et ordre exact, légendes existantes, accessibilité et marquage IA si disponible. Anarchitecte : fournir URL publique exacte, parcours mobile et test réception/relecture/réponse, responsables et capacité de traitement. Graphiste : confirmer exports validés, lisibilité mobile, textes alternatifs et cohérence de la présentation ; aucune nouvelle création nécessaire.
2. Après validation explicite : carrousel 1 « Les failles », présentation et demande limitée de critiques en commentaires seulement si commentaires activés et suivi humain organisé.
3. Deux à trois jours plus tard, selon capacité réelle à répondre : carrousel 2 « Compléter, pas remplacer ».
4. Puis carrousel 3 « Relier sans centraliser », avec lien de lecture vérifié. Appel aux contributions documentaires uniquement après validation du circuit de réception et de traitement. Pas de calendrier automatique ; possibilité de suspendre entre chaque étape.

**Premier message proposé (complément, ne remplace pas les légendes validées) :**

La Faille noire est une initiative politique, sociale et culturelle en construction : comprendre les manques, rencontrer les solidarités qui existent déjà et explorer comment coopérer sans prendre leur place.

Interstice est l'outil en construction associé à cette démarche : documenter, partager des savoirs et faciliter les liens.

Nous ne présentons ni un collectif déjà constitué ni une fédération existante. Le manifeste V2.5 est notre référence éditoriale de travail ; il n'est pas adopté collectivement.

Cette proposition est ouverte à la discussion, aux désaccords et aux transformations.

**Appel limité proposé, utilisable uniquement après vérification des commentaires et de leur suivi :**
Qu'est-ce qui vous paraît utile, flou ou contestable dans cette proposition ? Vous pouvez laisser une remarque sur ce compte, sans raconter de situation personnelle sensible. Nous lirons les retours au rythme des moyens disponibles. Les modalités de contribution plus larges seront précisées après vérification des outils d'accueil.

**Coordination :** besoins Graphiste et Anarchitecte consignés ici pour transmission et suivi ; aucune réception par ces ateliers n'est présumée. Aucun message envoyé à un tiers. Responsable de suivi des retours, canal privé et procédure de traitement à désigner avant appel large.

**Restant :** récupérer les exports existants ; vérifier réellement les brouillons après authentification ; valider moyens de participation et lien public ; faire approuver le message et le lancement. Aucun manifeste, visuel ou légende existante modifié.

## 2026-10-30 · Atelier du Juriste — participation citoyenne et cartographie

**Saisine :** transmission du Penseur, garanties juridiques de la carte et future application Interstice. **Source politique :** Manifeste V2.5 consolidé, référence éditoriale non adoptée. **Faits étudiés :** formulaires et modération `main`, audit technique du 29-10 et métadonnées des sept tables `public` Supabase lues le 30-10 (RLS active ; aucune table cartographique dédiée visible dans ce schéma). Il ne s'agit pas d'un test de sécurité complet ni d'une preuve d'application mobile déployée.

**Sources externes :** CNIL (géolocalisation, annuaires, bases légales, droits), EUR-Lex DSA 2022/2065, Etalab Licence ouverte 2.0, OpenStreetMap ODbL. **Risques :** publication de domiciles/lieux sensibles, données politiques ou de mineurs, captation de fiches, confusion référencement/approbation, modération arbitraire, licences et responsabilités lors de rencontres. **Choix proposé :** localisation approximative par défaut ; séparation référencement/faits/pratiques ; gestion vérifiée des fiches sans propriété des faits ; recours et modération motivés ; aucun label moral ni localisation personnelle continue.

**Fichiers réellement créés et relus :** `docs/ETUDE_JURIDIQUE_CARTOGRAPHIE_INTERSTICE_RISQUES_2026-10-30.md` (commit `decec5b`) ; `propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md` (commit `4083f93`) ; `coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md` (commit `a731678`). Ce sont **des propositions non adoptées**. La transmission est disponible dans GitHub pour Développeur, Anarchitecte, Organisateur, Penseur et Relieur ; leur lecture n'est pas attestée. Aucun changement du manifeste, de la charte constitutive, du site ou de Supabase.

**Suite :** décisions collectives sur référencement et critères de pratiques ; identification responsable RGPD, licences et conditions de traitement ; analyse DSA selon service réel ; audit API/RLS, tests de localisation, parcours de correction et moyens hors application avant lancement.



## 2026-10-30 — Le Relieur — registre de suivi des transmissions 006 / 007 / 008 / 009

**Périmètre :** 4 messages déclarés envoyés par la personne assurant leur relais dans les conversations ChatGPT. Le Relieur ne revendique aucun accès direct en écriture à ces conversations ; « envoyé » est confirmé par l'utilisateur, alors que les réponses ne sont dites attestées qu'en présence d'une trace vérifiable. Aucune nouvelle transmission vers ces ateliers lors de ce suivi.

| Transmission | Destinataire réel | Envoi | Retour et preuve | Statut de mission |
|---|---|---|---|---|
| 006 | L'Anarchitecte | Déclaré envoyé | Réception explicitement confirmée et audit statique V0 consigné sur `main` (entrée « Transmission 006 » ; commit `d3cc076168`) | **Réponse reçue / audit partiel effectué** ; tests réels des pages, formulaires, mobile, accessibilité et URL publique encore à faire |
| 007 | Le graphiste | Déclaré envoyé | Pas de nouvelle réponse explicitement liée à 007 dans les preuves consultées ; PR graphiques #22 et #28 anciennes et toujours ouvertes | **En attente de retour attesté** ; conserver les travaux existants, ne pas les redemander |
| 008 | Le lecteur | Déclaré envoyé | PR [#34](https://github.com/zoutiFrutti/Interstice/pull/34) et dossier `coordination/propositions/SELECTION_EDITORIALE_LECTEUR_TRANSMISSION_008_20261030.md` | **Réponse reçue / présélection faite** : Young × Freeman et Berenstain × Ahmed pour relecture ; Ostrom × Foucault × Lyon réservé, non publiable à ce stade |
| 009 | Atelier des Communications | Déclaré envoyé | Entrée « Transmission 009 » dans `main`, commit `fe2408830f` | **Réponse reçue / stratégie proposée** ; trois carrousels et légendes conservés, leur présence comme brouillons et leur ordre non vérifiés, aucun post programmé ou publié par cet atelier pendant la passe |

**Contrôle complémentaire Metricool du Relieur :** marque connectée `faille.noire`. L'API de consultation des **posts programmés**, interrogée pour la période du 20/10 au 31/12/2026, ne retourne aucune programmation. Cet outil ne prouve **pas** l'absence de brouillons non programmés ; ne pas marquer « trois brouillons absents » ni « trois brouillons présents ».

**Dépendances et priorités sans relance :**
1. Attendre/observer la réponse 007 du Graphiste ; ne pas dupliquer le travail sur #22/#28.
2. Faire une relecture contradictoire et juridique des deux textes retenus par 008, **sans publication automatique**.
3. Vérifier techniquement le parcours public réel décrit par 006, y compris les formulaires et la capacité humaine de réception/réponse.
4. Pour 009, vérifier les trois carrousels existants et le canal de retour **avant** tout calendrier ou appel massif.
5. Conserver la coordination dans la conversation « Le Relieur » ; ne pas inventer « Atelier central coordination ». Le Manifeste V2.5 reste une référence éditoriale non adoptée collectivement.

**Écriture :** cette entrée de coordination uniquement, sans modification de charte, de droits Supabase, de contenus éditoriaux ou de publication. Les états « réponse reçue » ne signifient pas « travail intégral terminé ».


## 2026-10-30 — Archiviste / Médiathèque — Accès aux pièces originales : Rossel et Combahee
Sources vérifiées : Open Library, édition 1908 de Louis Rossel, identifiant Internet Archive mmoiresetcorres00rossgoog, https://openlibrary.org/works/OL13166519W/M%C3%A9moires_et_correspondance_1844-1871 ; tentative d'ouverture du volume sur archive.org non aboutie, passage sur Avrial NON lu. *Historical Journal*, notes 8, 18 et 22 : https://www.cambridge.org/core/journals/historical-journal/article/abs/harbinghers-or-entrepreneurs-a-workers-cooperarive-during-the-paris-commune/B1073C3768ACA7CCBE3AD7CFA1A2E9C2 . Ly 108 contient plusieurs dossiers ; la lettre du directeur du Louvre à Avrial (12 mai 1871) est citée à la note 22 ; les feuilles de paie du 20 mai, note 18, concernent la rue de Lourmel, et ne peuvent être imputées au Louvre. Dépôt exact et consultation du carton Ly 108 restent à confirmer auprès de l'institution de conservation.
Combahee : Boston Public Library, collection Barbara Smith MS.SC.0028, déclarée ouverte à la recherche, https://archives.bpl.org/repositories/2/archival_objects/76732 . Harvard Radcliffe, collection Barbara Smith acquise en 2026 : plan manuscrit annoté de la déclaration photographié, mais fonds volumineux en cours de traitement avant accès complet, https://www.radcliffe.harvard.edu/news-and-ideas/schlesinger-library-acquires-the-papers-of-groundbreaking-black-feminist-barbara-smith et https://www.radcliffe.harvard.edu/events-and-exhibitions/press-information-for-barbara-smith-collection . Ni l'ensemble des manuscrits ni les documents internes du fonds Boston n'ont été dépouillés dans cette passe.
Bilan probatoire : progrès sur identifiants et conditions d'accès, mais aucune nouvelle transcription primaire de Rossel ou de la lettre du Louvre ; pas de preuve supplémentaire de pratiques électorales, de paie ou de décision. Poursuivre obtention des originaux et accès aux fonds.
Modification réelle : entrée au journal commun uniquement, catalogue FN, dossier ARCH-005, Wiki public et manifeste V2.5 non adopté inchangés.


## 2026-10-30 — Le Relieur — retour de test mobile sur l'accueil

**Provenance :** test manuel de la page d'accueil Interstice sur téléphone, rapporté directement par l'utilisateur. **Statut : remarques observées, non corrections validées.**

Constats : slogan « Des idées publiques. Des personnes protégées. » jugé peu accrocheur ; introduction, boutons et titres trop petits ; le titre déjà existant « Et si on essayait autre chose ? » devrait être proposé comme accroche principale plus haute sur la page. Le ressenti porte sur l'ensemble de la typographie mobile, pas seulement la section de découverte.

**Code observé sur `main` :** le H1 actuel est « Des idées publiques. Des personnes protégées. » ; « Et si on essayait autre chose ? » est le H2 de la deuxième section. Dans `style.css` : texte de base 17px, certains libellés de 12px ; la taille des liens CTA est héritée et leur disposition est dense.

**Transmission technique réellement effectuée :** commentaire sur la PR [#35](https://github.com/zoutiFrutti/Interstice/pull/35#issuecomment-6518191665), qui est une réponse **existante et vérifiable** du Graphiste à la transmission 007. Elle contient déjà des tests de lancement V0. La PR #22 porte le kit graphique et la PR #28 la modération ; ne pas doubler leurs modifications. **Rectification du registre précédent :** 007 est **« réponse reçue / travail V0 en PR #35 »**, et non plus « en attente sans retour ».

**Piste éditoriale proposée (non adoptée) :** mettre « Et si on essayait autre chose ? » en H1 ; expliquer simplement le rôle d'Interstice en plus grand dessous ; préserver l'engagement de protection ailleurs dans la page ; agrandir les textes et zones tactiles. Le Graphiste prépare une version mobile testable et la soumet à arbitrage avant fusion. Ne pas inventer de fonctionnalité ou de nouvelle voie de contribution.

**Aucune modification de `index.html`, `style.css`, aucune fusion de PR ni nouvelle publication résultant de ce rapport.** Le Manifeste V2.5 reste éditorial non adopté collectivement.


## 2026-10-30 — Archiviste — Fabrication des tracts Combahee et vérification Ly 108

**Source testimoniale consultée :** entretien de Barbara Smith avec Huda Hassan, 8 mars 2022, extrait https://www.bunkhistory.org/resources/eleven-black-women-why-did-they-die-an-interview-with-black-feminist-socialist-barbara-smith . Smith dit avoir rédigé un brouillon du tract *Six Black Women: Why Did They Die?* puis l'avoir présenté successivement aux autres membres pour accord et modifications ; Urban Planning Aid lui a fourni un appui graphique et technique. C'est un récit rétrospectif précis, non un procès-verbal de réunion de 1979.

**Pièce contemporaine liée :** The History Project, *8 Black Women Why Did They Die?*, https://historyproject.omeka.net/items/show/591 ; notice décrivant les nombres précédents barrés (6, 7), les ressources pratiques de protection et un poème de ntozake shange. Décrire la pièce sans attribuer une autorisation de reproduction générale ; droits propres du poème à vérifier. Le témoignage et la notice se corroborent sur l'existence d'une production évolutive, pas sur toute la procédure décisionnelle.

**Louvre, vérification bibliographique :** note 22 de l'article *Harbinghers or Entrepreneurs? A Workers' Cooperarive during the Paris Commune* https://www.cambridge.org/core/journals/historical-journal/article/abs/harbinghers-or-entrepreneurs-a-workers-cooperarive-during-the-paris-commune/B1073C3768ACA7CCBE3AD7CFA1A2E9C2 cite la lettre du directeur du Louvre à Avrial, 12 mai 1871, en Ly 108. La note 8 situe plusieurs dossiers hétérogènes dans Ly 108 ; elle n'identifie pas sans ambiguïté le service de conservation du carton. La note 18 concerne les feuilles de paie de la rue de Lourmel et non du Louvre. Open Library identifie l'édition de Rossel de 1908 et l'identifiant Internet Archive mmoiresetcorres00rossgoog https://openlibrary.org/works/OL13166519W/M%C3%A9moires_et_correspondance_1844-1871 ; passage original non collationné.

**Résultat intellectuel :** distinguer une rédaction initiée par une personne, une consultation collective et une éventuelle prise de décision politique. Ne pas déduire de la première une confiscation du pouvoir ni de la seconde une horizontalité entièrement démontrée.

**Restant :** ouvrir les scans PDF des tracts, collationner le passage Rossel et trouver l'institution conservant Ly 108 avant toute demande formelle de copie. Aucun ajout FN ni ARCH, aucune publication Wiki ni modification du manifeste V2.5 non adopté.



## 2026-10-30 — Archiviste — Combahee ressources pratiques BPL et Rossel Google Books
Sources croisées : Boston Public Library, https://www.leventhalmap.org/articles/mapping-250-years-of-poetry-in-boston/ (reproduction de ressources listées dans les tracts Combahee : rencontres hebdomadaires, réseaux de soutien, autodéfense et associations locales) ; WBUR https://www.wbur.org/news/2019/06/10/boston-combahee-river-collective-intersectional-black-feminism (manifestation du 28 avril 1979, environ 500 participants) ; Massachusetts Women's History Center https://www.mawomenshistory.org/resources/articles/combahee-river-collective-pioneers-intersectional-feminism (recoupement secondaire). Notices primaires tracts https://historyproject.omeka.net/items/show/590 et https://historyproject.omeka.net/items/show/591 .
Résultat : activités publiques et orientation concrète vers des ressources de soutien étayées par documents/présentation de collections. Pas de preuve nouvelle concernant délibérations internes, finance ou distribution du travail. Ne pas déduire d'une liste imprimée que chaque service annoncé fonctionnait effectivement.
Louvre : édition 1908 des mémoires de Rossel disponible en ebook gratuit https://play.google.com/store/books/details/Louis_Rossel_M%C3%A9moires_et_correspondance?id=jW6dOv5n8Z8C et bibliographie Open Library https://openlibrary.org/works/OL13166519W/M%C3%A9moires_et_correspondance_1844-1871 ; passage sur Avrial non lu lors de cette passe. Référence Ly 108 toujours issue d'une citation universitaire et dépôt conservateur non confirmé.
Modifications : entrée de journal uniquement, pas de mise à jour de FN-069, ARCH-005 ou Wiki ; manifeste V2.5 de travail non adopté inchangé. Suites : accès au texte original, recherche de procès-verbaux/registre d'atelier et pièces d'organisation du collectif.


## 2026-10-30 — Archéologue des communs — Françoise André et Ly 22

**Périmètre :** inventaire direct de quatre dossiers Drive : 43 fiches candidates distinctes (22 BIO, 8 ASSO, 4 EXP, 2 COL, 7 ARCH). Consultation des fiches COL-003 et ARCH-006, du catalogue et suivi Médiathèque, du journal de modifications, et de l'historique récent de ce journal pour éviter les doublons.

**Source nouvelle :** Musée Carnavalet / Paris Musées, photographie de 1871 attribuée à Ernest-Charles Appert, PH22310, « Portrait de Françoise André, épouse Humbert ». Sa notice présente cette femme comme secrétaire du Club des prolétaires de Saint-Ambroise, photographiée à la prison des Chantiers à Versailles, et cite les procès-verbaux « archives de la guerre AG. Ly 22 ». https://parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/portrait-de-francoise-andre-epouse-humbert-membre-de-la-commune-1871 . La notice affiche CC0 pour le visuel.

**Recoupements :** Michèle Audin (2021) situe Ly 22 au Service historique de la défense et distingue les citations sélectionnées par Dalotel et Édith Thomas : https://macommunedeparis.com/2021/05/12/12-mai-1871-elles-prennent-la-parole-certes-mais-que-disent-elles/ . Jacques Rougerie cite également Ly 22 pour des comptes rendus de clubs : https://commune1871-rougerie.fr/la-premiere-internationale_2,fr,8,75.html . La cote est documentée, pas consultée directement.

**Hypothèse, non fait établi :** la citoyenne André, blanchisseuse et secrétaire selon Audin (2016), pourrait correspondre à Françoise André épouse Humbert de la notice Carnavalet. La fonction et le patronyme concordent, mais aucune pièce nominative ou inscription au verso n'a été collationnée. Aucune parenté avec Jules André démontrée. La photographie originale et son catalogage moderne ne sont pas une même couche de preuve.

**Écritures vérifiées par relecture Drive :** enrichissement de COL-003 et ARCH-006 ; compléments au catalogue et au suivi de la Médiathèque ; journal des changements majeurs Interstice mis à jour. Bilan : 0 nouvelle fiche, 1 COL et 1 ARCH enrichies, total inchangé de 43. Pas de nouvelle BIO prématurée, aucune publication ni changement du manifeste ou de la gouvernance.

**Suites :** vérifier l'inscription au verso de PH22310, demander consultation de Ly 22 et procès-verbaux du club, comparer les quatre numéros du Prolétaire aux séances, clarifier les chiffres d'assistance et les prises de parole. Transmissions utiles à la Biographe, au Lecteur et à la Médiathèque ; réception non confirmée.


## 2026-10-30 — Archéologue — reprise critique des chiffres du Club des prolétaires

COL-003 et ARCH-006 enrichies et relues dans Drive. Les chiffres concurrents « 4 000 dont 1 000 femmes » et « 4 000 dont 3 000 femmes » sont conservés comme assertions non départagées : séances et sources primaires non identifiées. Les études de Michèle Audin distinguent les interventions orales du club des articles du journal. Sources de départ : https://macommunedeparis.com/2016/06/11/le-proletaire-un-club-un-journal/ ; https://macommunedeparis.com/2021/05/12/12-mai-1871-elles-prennent-la-parole-certes-mais-que-disent-elles/ ; notice BnF https://catalogue.bnf.fr/ark:/12148/cb328445424 . Le fonds Ly 22 n'a pas été consulté. Vérification restante : retrouver origine exacte des deux chiffres, dater les séances, lire procès-verbaux et fac-similés. Bilan : 0 nouvelle fiche, 2 enrichies (1 COL, 1 ARCH), total antérieur 43 non réinventorié. Candidats non publiés, manifeste et gouvernance inchangés.


## 2026-10-30 — Archéologue — presse des fourneaux du XIe, 30 octobre 2026

**État antérieur vérifié :** 43 fiches candidates uniques dans les quatre dossiers Wiki (22 BIO, 8 ASSO, 4 EXP, 2 COL, 7 ARCH). **Écritures Drive relues :** ARCH-006 et COL-003 enrichies, catalogue et suivi de la Médiathèque mis à jour, journal des modifications mis à jour. **Bilan :** 0 nouvelle fiche, 2 enrichies (1 ARCH, 1 COL), total 43.

**Découverte documentée :** Michèle Audin identifie dans *Le Prolétaire* n°3 (19 mai 1871) une contribution anonyme présentée comme écrite par une ou plusieurs femmes employées aux fourneaux alimentaires du XIe ; le n°4 (24 mai) publie la réponse du responsable municipal Honoré Bézier et un extrait de procès-verbal sur salaires et discipline. Source https://macommunedeparis.com/2021/05/15/15-mai-1871-que-se-passe-t-il-dans-le-onzieme-arrondissement/ . Les montants cités ne prouvent pas les paiements ; procès-verbal original et images non collationnés.

**Critique des témoignages :** le billet Audin du 3 mai 2021 précise que les prises de parole marquées [ma] sont des reconstitutions écrites par l'autrice, pas des témoignages verbatim de 1871 : https://macommunedeparis.com/2021/05/03/3-mai-1871-des-conciliatrices-et-cinq-communardes/ . Ne pas les attribuer directement à Mayer, Létang ou d'autres femmes. Georges Besson place l'affluence de 4 000 personnes à la sixième réunion ; Audin indique 1 000 femmes ; le chiffre concurrent 3 000 femmes reste sans source originale identifiée : https://www.commune1871.org/la-commune-de-paris/histoire-de-la-commune/chronologie-au-jour-le-jour/448-les-clubs-sous-la-commune .

**Sources et pistes :** BnF (Arsenal FOL-JO-213 (AI), NUMP-22102), https://catalogue.bnf.fr/ark:/12148/cb328445424 ; Sussex (4 n°, gérant Paul Durand, M 1291 n°1, inventaire sous-série Ly de 1972), https://www.sussex.ac.uk/library/speccoll/collection_catalogues/commune.html . À faire : lire scans n°3-4, confronter procès-verbal imprimé et originaux, identifier les ouvrières, consulter Ly 22 et l'inventaire de 1972. **Droits :** aucune reproduction de textes modernes ou scans ; vérifier avant réutilisation. Aucune publication, manifeste ou gouvernance modifiés. Les autres ateliers peuvent exploiter cette transmission, réception non confirmée.


## 2026-10-30 — Archiviste : Commune 1871, vérification PH22310 et COL-003
Inventaire documentaire recoupé avec journal Interstice : 43 fiches candidates (22 BIO, 8 ASSO, 4 EXP, 2 COL, 7 ARCH). Travaux antérieurs sur ARCH-006, COL-003 et fourneaux du XIe retrouvés : pas de nouveaux doublons.
Source institutionnelle directement consultée : Musée Carnavalet/Paris Musées, PH22310, portrait d'Ernest-Charles Appert (1871) de Françoise André épouse Humbert, secrétaire du Club des prolétaires selon le commentaire du musée ; renvoi aux procès-verbaux « AG. Ly 22 » : https://parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/portrait-de-francoise-andre-epouse-humbert-membre-de-la-commune-1871 . Identité de toute « citoyenne André » non garantie sans lecture des actes ; aucune parenté démontrée avec Jules André.
Numéros 3 et 4 du Prolétaire : tentatives d'ouverture des PDF archivesautonomies.org non abouties. Le conflit des seize fourneaux, la réponse Honoré Bézier, les chiffres de salaires cités et les deux décomptes d'affluence restent à confronter à leurs originaux et ne sont pas présentés comme résultats indépendants.
Modifications réelles : ajout d'un complément critique à COL-003 dans Drive et relecture confirmée ; entrée au Journal des changements majeurs dans Drive également vérifiée. Aucune nouvelle fiche ; inventaire inchangé (43), pas de Wiki public ni de manifeste modifié. À faire : Ly 22, scans 19/24 mai, identification des chiffres d'affluence, audit droits image.


## 2026-10-30 · Communications · Suite opérationnelle 009
Lecture de la dernière version du journal et de participer.html ; réponse graphique 007/PR #35 retrouvée dans le suivi du Relieur, ne pas redemander le même chantier. Lecture intégrale de ACCESSIBILITE_CARROUSELS_V25.md : douze descriptions alternatives déjà préparées. Identité du ZIP prêt à importer retrouvée, contenu binaire non inspecté. Création et relecture de coordination/propositions/LANCEMENT_COMMUNICATION_TRANSMISSION_009_20261030.md (commit ad0111efc70f7362d36e70d546ef41e05278c8bb) : matrice de preuves, séquence progressive, message complémentaire, appel limité conditionnel et traitement anonymisé des retours. Aucun visuel ni légende existante changé. Pas de nouveau contrôle Metricool dans cette passe : brouillons toujours non vérifiés, absence de programmation rapportée par le Relieur distincte de leur présence. Réception/relecture/réponse des formulaires toujours à tester réellement. Aucun message envoyé à un tiers, aucune publication ni programmation. Suite : accès aux brouillons et tests réels du parcours, puis validation explicite du lancement.


## 2026-10-30 — ARCH-005 : vérification critique des sept jours d'application des ateliers du Louvre
Fiche Google Drive ARCH-005 enrichie et relue : https://docs.google.com/document/d/13FO7BOajhiOt0bxcp00_Efng43xNA42qfkLnr9AmwGs/edit . André-Clément Decouflé, « Réquisition, autogestion ? » (repris dans *Encyclopédie internationale de l'autogestion* tome 10, https://www.syllepse.net/syllepse_images/encyclope--die-de-lautogestion--tome-10.pdf ; https://autogestion.asso.fr/requisition-autogestion/) mentionne en note 11 « après sept jours d'application », et rapporte un témoignage Avrial à Rossel du 10 mai sur un troisième directeur élu. L'original Rossel n'est pas consulté : ne pas conclure à la continuité documentée de l'application pendant sept jours. Quatre dispositifs réglementaires (accès aux livres, rapports hebdomadaires, registre d'embauche, conseil quotidien) n'ont à ce stade aucune pièce d'exécution directement examinée ; seules les prescriptions sont transcrites dans https://macommunedeparis.com/2023/05/31/3-mai-1871-le-reglement-des-ateliers-du-louvre-suite/ . Le texte reste soumis à l'approbation lors de la publication du JO du 21 mai. PDF revue Autogestion n°5-6 inaccessible (429), affiche BHVP non ouverte : aucune fausse collation. À rechercher : procès-verbaux du conseil, rapports, livres, registre, lettre du 12 mai (Ly 108), mémoires Rossel 1908. Aucun doublon ; dossier candidat non publié, sans modification de gouvernance.


## 2026-10-30 — Anarchitecte — Réponse à la transmission du Penseur, études 39–58

Transmission retrouvée et lue : `coordination/transmissions/2026-10-30_PENSEUR_VERS_DEVELOPPEUR.md` (destinataires : Développeur **et** Anarchitecte) ; feuille de route `coordination/PENSEUR_FEUILLE_DE_ROUTE_ETUDES_39_58_2026-10-30.md` consultée. Audit limité aux pages existantes `index.html`, `participer.html`, `bibliotheque.html`, `wiki.html` et au script `script.js`, sans répéter les audits de V0 antérieurs : besoin/ressource et recherche documentaire existent, mais pas de parcours de rencontre consenti, de carte d'initiatives ni de parité mobile vérifiée dans ces fichiers. Création de `coordination/ANARCHITECTE_CRITERES_ACCEPTATION_39_58_2026-10-30.md` avec quinze scénarios de test (besoin sans vote, recherche transparente, consentement, localisation protectrice, export, accessibilité, liste sans carte, hors ligne, correction et site/application), limites et dépendances. Commit vérifiable : `c73dedbda104203327ef762bb63dcf0af7ea894e`. Aucune modification des protections, de Supabase, de la publication ou du fonctionnement du site. Les études 39–58 sont des propositions et non des décisions collectives. Retour transmis au Relieur par cette entrée de journal.

## 2026-10-30 · Atelier du Juriste — cycle 39–58, garanties et blocages

**Transmission et sources consultées :** `coordination/transmissions/2026-10-30_PENSEUR_VERS_JURISTE.md`, feuille de route `coordination/PENSEUR_FEUILLE_DE_ROUTE_ETUDES_39_58_2026-10-30.md`, cycle des vingt hypothèses `coordination/PENSEUR_ETUDES_39_58_CYCLE_AUTONOMIE_COMMUNS_2026-10-30.md`, précédents travaux du Juriste (cartographie, droits sur fiches et modération), CNIL (RGPD art. 26, géolocalisation, portabilité), EUR-Lex DSA art. 16–20 et Service-Public financement des associations.

**Résultat nouveau, non adopté :** avis hiérarchisé sur les études 46–50, 54–55 ; B1–B4 bloquants proposés avant toute cartographie traitant des données personnelles (responsables RGPD et bases légales, protection réelle des localisations sensibles, signalement/correction, tests API/RLS) ; B5–B7 conditionnels selon les fonctions retenues (qualification DSA, licences/export, responsabilités d'événements). Dix tests d'acceptation proposés, non exécutés ; trois clauses politiques à débattre (gouvernance des données, indépendance financière, droit de sortie).

**Écrits et vérifiés sur GitHub :**
- `docs/AVIS_JURISTE_CYCLE_39_58_GARANTIES_BLOCAGES_2026-10-30.md` (commit `804fed5b41d3c6b494aa0e2aa195dec74c1006f4`).
- `coordination/transmissions/2026-10-30_JURISTE_VERS_RELIEUR_ETUDES_39_58.md` (commit `49c97eddf5a7aff0db5ac9192faa9c7f2f2633ef`).

**Contradictions :** consultation ≠ droit de veto ; fiche gérée par initiative ≠ responsabilité RGPD automatique ; droit de portabilité ≠ export de contacts privés ; modération nécessaire ≠ sanction d'une dissidence ; besoin de financement ≠ droit de contrôle politique du financeur ; coopération fédérale ≠ transfert de patrimoine ou de responsabilité.

**Modifications exclues :** aucun code, base Supabase, site, charte constitutive, statut ni manifeste modifié. La transmission est déposée pour le Relieur, réception effective non attestée. Les études demeurent des hypothèses non adoptées. **Suite :** retour des ateliers sur B1–B7, preuves de tests et arbitrage collectif sur un pilote sans données privées exposées.



## 2026-10-30 — Relieur — réception et suivi des études 39–58

**Transmission reçue et lue :** `coordination/transmissions/2026-10-30_PENSEUR_VERS_RELIEUR.md`, feuille de route et vingt hypothèses n°39–58. Les études sont des **propositions critiques non adoptées** ; aucun arbitrage collectif n'est présumé.

**Suivi créé et relu :** [registre Relieur des études 39–58](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/RELIEUR_SUIVI_ETUDES_39_58_2026-10-30.md). Il distingue cinq chantiers, les ateliers pressentis (**sans accord volontaire confirmé**), leurs preuves existantes, les contradictions et six décisions à réserver aux personnes concernées.

**Retours réels recoupés :** L'Anarchitecte a rédigé `coordination/ANARCHITECTE_CRITERES_ACCEPTATION_39_58_2026-10-30.md` avec quinze tests candidats A01–A15, sans test d'intégration réel. La Développeuse a une [PR #41](https://github.com/zoutiFrutti/Interstice/pull/41) de découverte fictive de six initiatives avec CI verte sur le HEAD contrôlé, **antérieure** au courrier du Penseur. Le Graphiste a une [PR #35](https://github.com/zoutiFrutti/Interstice/pull/35) d'accueil/typographie non fusionnée. Le Lecteur a une [PR #34](https://github.com/zoutiFrutti/Interstice/pull/34) de présélection éditoriale, distincte d'une validation des vingt études. Le Juriste dispose de travaux antérieurs sur géolocalisation, recours et modération ; l'avis spécifique 39–58 et les trois scénarios de L'Organisateur ne sont pas attestés dans cette passe. **La présence des lettres GitHub ne prouve pas leur réception dans les conversations ChatGPT.**

**Contrôle de trajectoire :** préserver quatre fonctions égales dans la vision (initiatives, besoins, ressources, projets), tout en lançant progressivement les tests : site V0 en lecture, prototype mobile fictif, puis seulement fonctions réelles avec capacité de modération/consentement et arbitrage humain. Aucune nouvelle transmission inutile, aucune collecte ou publication autorisée par ce suivi.

**Modifications effectuées :** nouveau registre et présente entrée de journal ; aucun code applicatif, manifeste, permission, compte de modération ou texte historique modifié.


## 2026-10-30 — Assistant Archiviste : ARCH-005, Rossel et Avrial
Source nouvelle : Encyclopédie internationale de l'autogestion, tome 10, https://www.syllepse.net/syllepse_images/encyclope--die-de-lautogestion--tome-10.pdf . Elle rapporte un entretien du 10 mai 1871 où Avrial décrit une troisième direction élue aux ateliers du Louvre et critique leur activité. Témoignage indirect, non collationné avec les mémoires originaux de Rossel ; ne pas conclure à un échec démontré de la production. ARCH-005 complétée dans Drive et relecture vérifiée : https://docs.google.com/document/d/13FO7BOajhiOt0bxcp00_Efng43xNA42qfkLnr9AmwGs/edit . À poursuivre : retrouver la page exacte de Rossel, les comptes et procès-verbaux. Bilan : 0 nouvelle fiche, 1 ARCH enrichie, inventaire antérieur 43 non recompté. Aucun changement au manifeste, gouvernance ou publication.


## 2026-10-30 — Assistant Archiviste : contrôle croisé Commune, ateliers et solidarité
Sources vérifiées : procès-verbal du décret du 16 avril (https://archivesautonomies.org/IMG/pdf/commune/communedeparis/proces-verbaux/seance-1871-04-16.pdf), enquête sur commission des ateliers abandonnés réunie le 18 mai (https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/commune-1871-ephemeride/1207-commune-1871-ephemeride-16-avril-la-requisition-des-ateliers-abandonnes), circulaire de Frankel sur une solde demandée de 2 francs par jour pour préparatrices d'ateliers de l'Union des femmes (https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8194867B80A408BAF748B5BD48E013BB/S0020859000006453a.pdf/l-a-i-t-et-le-mouvement-ouvrier-a-paris-pendant-les-evenements-de-1870-1871.pdf), piste Archives de Paris VD3 9 pour lettre de l'Union des travailleuses XIIIe (https://www.commune1871.org/la-commune-de-paris/histoire-de-la-commune/chronologie-au-jour-le-jour/1643-lunion-des-femmes-pour-la-defense-de-paris-et-les-soins-aux-blesses), statuts et activités de La Marmite (https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/dossier-thematique/democratie-laicite-oeuvre-sociale/685-la-marmite-une-societe-civile-d-alimentation). Distinctions : projet de réquisition != réquisition effective ; demande de solde != paiement ; statuts de coopérative != pratiques démontrées. Dossiers Drive ARCH-005 et ASSO-007 consultés, écritures bloquées, aucune fiche modifiée ou publiée. À suivre : VD3 9, registres de paie, comptes de La Marmite, procès-verbaux de la commission du 18 mai. Inventaire historique 43 non recompté.


## 2026-10-30 — Atelier Biographies et mémoires — dix passes ciblées, Club des prolétaires

**Coordination.** Le Relieur est l'unique destinataire des transmissions d'organisation. Anciennes mentions de « L'Organisateur » conservées comme archives ; aucune structure supplémentaire créée. Manifeste V2.5 : référence éditoriale non adoptée.

**1. État réel repris.** Lecture du Journal commun sur main (préexistence d'une enquête sur la « citoyenne André ») et du document de clarification du Relieur.
**2. Déduplication.** Lecture des fiches Drive ARCH-006 et COL-003 ; aucune nouvelle biographie affirmative de la citoyenne André ; ne pas confondre article de presse, procès-verbal et témoignage.
**3. Source historiographique.** Michèle Audin, « Le Prolétaire — un club, un journal », 2016 : la citoyenne André est blanchisseuse et exerce souvent le secrétariat. L'éventuelle parenté avec Jules André n'est qu'une hypothèse. https://macommunedeparis.com/2016/06/11/le-proletaire-un-club-un-journal/
**4. Témoignage et séance.** La reconstitution du 16 mai indique « la femme André » comme secrétaire. Elle ne fournit ni prénom, ni signature autographe : https://www.contretemps.eu/journal-commune-16-mai-1871/
**5. Différence des voix.** La presse *Le Prolétaire* comprend quatre numéros ; l'historienne Audin distingue opinions des organisateurs et celles des participantes. Aucun article attribué à la citoyenne André sans preuve nominative. Catalogue BnF : https://catalogue.bnf.fr/ark:/12148/cb328445424
**6. Localisation d'archives.** Michèle Audin précise la cote **Ly 22** au Service historique de la Défense, Vincennes, pour les archives du Club des prolétaires : https://macommunedeparis.com/2021/05/12/12-mai-1871-elles-prennent-la-parole-certes-mais-que-disent-elles/ . Cote à confirmer dans l'inventaire du SHD avant demande de consultation ; aucun original vu ici.
**7. Autres voix biographiques.** La veuve Thiourt (graphie « Thyou » chez Rougerie), participante oratrice, et la « Matelassière » ne sont pas encore identifiées civilement. Sources : https://commune1871-rougerie.fr/les-femmes-de-1871%2Cfr%2C8%2C58.html ; https://commune1871.org/la-commune-de-paris/histoire-de-la-commune/chronologie-au-jour-le-jour/448-les-clubs-sous-la-commune . Pistes à approfondir, pas de BIO nouvelles.
**8. Rectification d'identité majeure.** Jacques Rougerie distingue **Blanche Lefebvre, modiste organisatrice de l'Union des femmes**, et **une femme Lefèvre, blanchisseuse du lavoir Sainte-Marie, au Club de la Révolution**. La BIO-019 antérieure les fusionnait potentiellement. Un rectificatif explicite a été ajouté et vérifié dans Google Drive, https://docs.google.com/document/d/1H60l5jx5fMLKoo9uWwin1VydMRwIYcIjzvkjvyrcNCQ/edit .
**9. Préservation des versions.** Le rectificatif a également été ajouté et vérifié sur la fiche GitHub candidate BIO-019 dans la branche agent/journal-commun-biographies-2026-10-29, sans effacement de la version antérieure : https://github.com/zoutiFrutti/Interstice/blob/agent/journal-commun-biographies-2026-10-29/coordination/biographies/BIO-019-Blanche-Lefevre.md .
**10. Transmission et suite.** Présente contribution au Journal commun pour le Relieur. L'Archiviste est invité à vérifier Ly 22 et le patronyme de la femme André ; la Médiathèque à contrôler les quatre numéros de *Le Prolétaire*. Le Relieur doit signaler le rectificatif BIO-019 pour relecture croisée. Transmission déposée ne prouve pas réception.

**Contradictions et limites.** Aucun prénom ni état civil trouvé pour la citoyenne André, aucune parenté avec Jules André prouvée, aucune attribution d'article vérifiée. Les interventions citées par Dalotel, Thomas et Rougerie restent des transcriptions d'archives non collationnées ici. « Veuve Thiourt/Thyou » peut être une variante, à vérifier avant fusion nominative. Blanche modiste et Lefèvre blanchisseuse ne doivent pas être fusionnées.

**État.** 10 actions de consultation, contrôle, recoupement, rectification et documentation détaillées ci-dessus ; 2 écritures de rectificatif vérifiées, contribution au journal ci-présent. Pas de publication du Wiki, de nouveau BIO, ni d'adoption du manifeste. Prochaine action : obtenir l'inventaire Ly 22 et établir la chaîne de preuve nominative, puis approfondir la distinction des deux Lefèvre.


## 2026-10-30 · Communications · Transmission 012, reprise en dix passes
**Référence comprise et appliquée :** clarification du Relieur lue ; organisation pratique et coordination à adresser au Relieur, aucun atelier Organisateur distinct. Archives et responsabilités des autres ateliers préservées. Feuille de route des études 39–58 lue comme proposition non adoptée.

**Mission reprise :** suite de 009, trois carrousels existants, pas de recréation. Dix passes consignées dans la fiche existante `coordination/propositions/LANCEMENT_COMMUNICATION_TRANSMISSION_009_20261030.md`, mise à jour commit `63bcc45ce179bb999fed403918e44a966915d3d2` puis relue : 1 responsabilités et point de reprise ; 2 marque Metricool retrouvée mais navigateur sur connexion ; 3 ZIP récupéré et archive contrôlée ; 4 douze décodages JPG RGB 1080×1350 et douze tailles/empreintes conformes ; 5 légende C1 lue et contrôle de construction/non-adoption ; 6 légende C2 lue et contrôle coopération/travail invisible ; 7 légende C3 lue et contrôle fédération non constituée ; 8 douze correspondances noms/alternatives et inspection visuelle d'ensemble ; 9 repérage et qualification d'une promesse fonctionnelle au présent dans le dernier visuel ; 10 ajout de cinq réponses proposées et état de reprise dans la même fiche. Longueurs des légendes du ZIP hors espaces terminaux : 1234, 1101 et 1245 caractères. C1 a une séparation de paragraphes différente de la consigne ; apostrophes typographiques dans le ZIP. Aucun changement aux légendes ni visuels sources.

**Découverte à arbitrer :** 03_04 dit « Interstice sert à cartographier les initiatives, partager les ressources et faire circuler les savoirs. » La cartographie réelle n'est pas attestée par les preuves consultées. Proposition de précision sur les fonctions en développement préparée, mais NON ajoutée à la légende ni au visuel. Au Relieur de coordonner l'arbitrage Graphiste/Anarchitecte avant présentation du troisième carrousel.

**Blocages précis :** marque Metricool connectée confirmée via connecteur, mais session navigateur non authentifiée ; présence des trois brouillons, contenu enregistré, alternatives et marquage IA NON VÉRIFIÉS. Le ZIP n'est pas un brouillon. Aucun contournement par programmation. Rendu sur téléphone et réception→relecture→réponse non testés. Le Relieur doit faciliter la confirmation de volontaires pour suivre les retours, sans devenir automatiquement modérateur.

**Bilan :** paquet source contrôlé et réponses préparées ; lancement en cours de préparation, soumis à validation explicite. Aucun post créé, programmé ou publié, aucun fichier Drive rendu public, aucun achat, aucune transmission à une conversation attestée. Bilan déposé au Journal pour le Relieur, réception effective non présumée. Prochaine action utile : session Metricool authentifiée, recherche des doublons, contrôle des brouillons puis import uniquement si absent.


---

## 2026-10-30 · Juriste — transmission 012 et dix passes ciblées

**Contexte :** relu `coordination/RELIEUR_CLARIFICATION_ORGANISATION_2026-10-30.md` et les derniers travaux. **L'Organisateur n'est pas un atelier actif** : le Relieur assure coordination et organisation pratique sans pouvoir politique. Les anciennes mentions restent en archives.

**Dix passes vérifiables :** (1) clarification et dernier journal lus ; (2) rectificatifs non destructifs insérés dans deux transmissions du Juriste, commits `39ca5ae3` et `462e8083` ; (3) PR #41 examinée, ouverte en brouillon, HEAD `beb832d...` ; (4) interrogation SQL en lecture seule de `pg_policies` Supabase : RLS sur sept tables `public`, aucune table de carte dans ce schéma ; (5) recoupement CNIL/RGPD/DSA et distinctions des responsabilités réelles ; (6) 12 assertions statiques sur cinq fichiers de PR #41 : 10 propriétés de démonstration observées, absence attendue de recours et vrai backend ; tests Node **non exécutés** ici ; (7) tri CNIL de l'éventuelle AIPD selon risques ; (8) obligations de violation de données et délais conditionnels explicités ; (9) matrice publique/privée pour huit objets, trois cas de droit des personnes et revue des pages publiques ; (10) présent bilan et transmission au Relieur.

**Résultat documentaire réellement écrit :** sections VII–IX ajoutées à `docs/AVIS_JURISTE_CYCLE_39_58_GARANTIES_BLOCAGES_2026-10-30.md`, commits `c626bf82`, `dae87dfa`, `d6cc1953` ; bilan détaillé ajouté à `coordination/transmissions/2026-10-30_JURISTE_VERS_RELIEUR_ETUDES_39_58.md`, commit `0b918a09`. Transmission GitHub accessible au Relieur, **réception dans sa conversation non attestée**.

**Sources juridiques :** CNIL, AIPD et critères de risque ; RGPD art. 26, 33, 34, droits d'accès/opposition ; CNIL réutilisation des annuaires ; EUR-Lex DSA 2022/2065. Les URL et limites sont dans l'avis. **Constats distincts des propositions :** PR fictive non fusionnée et aucun signalement réel ; futur pilote nécessite identification du responsable de traitement, contrôle des localisations, canal effectif de droits et tests des permissions d'API.

**Limites et suite :** pas de test de navigateur/Android ou de CI actuelle exécuté ; pas de validation de schéma géographique, pas d'adoption collective. Le Relieur doit reprendre les missions d'organisation pratique anciennement attribuées à l'Organisateur, coordonner les tests A01–A15 avec Développeuse/Anarchitecte et préparer les arbitrages humains B1–B7. Aucun code, site, Supabase, manifeste ou statut modifié.



## 2026-10-30 — Atelier Graphiste : transmission générale 012, dix passes habitat

**Mission :** reprise du Wiki Habitat depuis les 22 notions et six dossiers déjà créés, sans redémarrer d'audit. **Organisation clarifiée :** le Relieur assume aussi l'organisation pratique ; « L'Organisateur » n'est pas un atelier actif, archives préservées.

**Faits et modifications :** trois portes d'entrée corrigées (accueil, Wiki, Habiter autrement), trois raccourcis de lecture et ancre de méthode, fil d'Ariane et parcours précédent/suivant sur six dossiers, deux liens Wikipédia précisés. Les 10 fichiers UI de la PR #35 et leurs copies d'aperçu ont des blobs identiques lors de la passe. Les contenus restent marqués « À relire par un être humain » ; aucun brouillon privé n'a été publié.

**Test vérifié :** GitHub Actions sur la branche PR #35, SHA `9907f252d519adbaf44dcd7d08545171146a2067`, **54/54 succès** (18 validations de liens et 36 rendus 390/1280 px) : https://github.com/zoutiFrutti/Interstice/actions/runs/41050892814 . Le test a d'abord révélé une erreur de regexp et six contrôles de taille inférieure à 18 px ; corrections effectuées, puis nouvelle CI verte.

**Limites :** CI ne vaut pas validation tactile, relecture juridique ou fusion. La PR #35 reste draft/non fusionnable, le déploiement du sous-dossier est à recontrôler après les mouvements de `main`. Transmission complète : `coordination/transmissions/GRAPHISTE_BILAN_TRANSMISSION_GENERALE_012_2026-10-30.md`. Relieur : coordonner les relectures et le rapprochement #35/#22 sans autorité disciplinaire ni arbitrage politique implicite.


## 2026-10-30 — Le Relieur — transmission 012, dix passes et trois scénarios

**Clarification active :** l'atelier « L'Organisateur » n'existe pas. Les missions de coordination pratique des études 39–48 reviennent au Relieur, sans autorité politique ou disciplinaire et sans acte collectif présumé.

**Travaux réellement produits sur branche de coordination, sans modification de production :** [PR #43](https://github.com/zoutiFrutti/Interstice/pull/43) en **brouillon** ; [kit S1–S3](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUR_PILOTE_3_SCENARIOS_CONCRETS_2026-10-30.md) et [dix passes + matrice A01–A15](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUR_10_PASSES_CONTROLE_TRAJECTOIRE_2026-10-30.md).

**Résultats :** trois simulations écrites (besoin sans smartphone ni soutiens ; atelier rare pour trois groupes, réemploi de l'étude 59 ; jardin/concerts et personnes affectées), grille d'observation non nominative, quinze tests d'acceptation reliés aux preuves existantes. **Zéro simulation terrain**, zéro test A01–A15 validé en production, aucune décision collective. PR #35 (accueil), #41 (annuaire fictif), #42 (formulaires testés en simulation) restent indépendantes en revue.

**Alerte de communication concrète :** carrousel 3 visuel 03_04 formule au présent « Interstice sert à cartographier… » alors qu'aucune carte publique réelle n'est attestée. L'arbitrage sur cette promesse appartient aux personnes concernées, Communications et Graphiste. Ne pas publier automatiquement. **Alerte documentaire distincte :** rectificatif BIO-019 sur deux personnes Lefebvre/Lefèvre possiblement confondues : ne pas reproduire d'identification non confirmée.

**Contrôle de trajectoire :** tester S1 avec volontaires et sans données privées, valider V0 publique par essai réel, puis déterminer avec des personnes responsables les capacités de réception, consentement, correction et modération avant collecte. Une CI de branche réussie n'est pas un test public. Aucun atelier supplémentaire ni PR documentaire concurrent demandé aux autres ateliers.


## 2026-10-30 — Relieur — intégration du retour Archiviste sur La Marmite (ASSO-008)

**Transmission reçue :** Assistant de l'Archiviste, recherche sur La Marmite, coopérative d'alimentation de 1868. **Son compte rendu signalait des écritures Drive/GitHub bloquées lors de sa passe :** ce suivi n'attribue donc à cet assistant aucune écriture non vérifiée. Le Relieur a **retrouvé et lu** les fiches [ASSO-008](https://docs.google.com/document/d/1q9b6Ofk7rWSxMaltddYVkG3bGPrcWHtV4UI1gyHQ9YM/edit) et [ASSO-007](https://docs.google.com/document/d/1VGqnT2WnZFcAK8vV-qTedvBAupvR-UVsWkcQ7RsVxAg/edit), puis recoupé les [statuts du 19 janvier 1868 transcrits par Michèle Audin](https://macommunedeparis.com/2018/08/01/statuts-de-la-marmite-19-janvier-1868/). ASSO-008 contient déjà des compléments pertinents (accès, contrôle, sortie) ; **aucune nouvelle fiche ni modification Drive ne sont attribuées à cette opération**.

**Précisions historiques à conserver :** apport de 50 francs payable progressivement (art. 8–9), mais crédit de 25 francs conditionné à l'apport intégralement versé (art. 12) ; commission de contrôle des comptes prévue (art. 23–24), assemblée extraordinaire à la demande de vingt membres (art. 25), question à inscrire à l'ordre du jour sur demande de cinq membres huit jours avant (art. 28) ; remboursement prévu en cas de sortie ajusté des résultats après assemblée trimestrielle (art. 35, 38), fonds de réserve distinct (art. 14). **Écrit statutaire ≠ preuve de mise en œuvre** ; comptes, procès-verbaux, registres de cuisine et témoignages directs restent à examiner.

**Travail réel du Relieur :** complément ajouté sur la branche existante de la [PR #43](https://github.com/zoutiFrutti/Interstice/pull/43), dans [le scénario S2 de partage d'un atelier rare](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUR_PILOTE_3_SCENARIOS_CONCRETS_2026-10-30.md). Trois cartes fictives M1/M2/M3 vérifient **accès financier sans exclusion**, **droit de regard sur les coûts et possibilité d'imposer une question**, **sortie sans sanction ni perte dissimulée**. Une proposition d'article pratique « Cantines coopératives : partager les ressources sans invisibiliser le travail » y est cadrée, **pas rédigée ni publiée**.

**Dépendances sans nouvel atelier :** Assistant de l'Archiviste/Archiviste = recherche des comptes originaux, registres et Charles Keller ; Lecteur/Médiathèque = relecture des sources et droits avant éventuel article ; Juriste = garanties contemporaines si un protocole réel est envisagé ; Relieur = lien avec travail invisible, scénarios S1–S3 et préparation d'essais volontaires. ASSO-007 (Union des femmes, 1871) et ASSO-008 (La Marmite, 1868) sont **deux organisations distinctes** ; leurs liens biographiques ne prouvent pas une identité institutionnelle.

**Résultats vérifiables :** compléments dans une PR documentaire existante + cette entrée de journal. **0 test terrain, 0 publication, 0 approbation collective, 0 modification des droits ou des formulaires.**


## 2026-10-30 — Relieur — feuille de route de publication Wiki V0, réception du Lecteur

**Transmission reçue du Lecteur :** dix passes de consolidation de la [PR #34](https://github.com/zoutiFrutti/Interstice/pull/34), deux articles prioritaires à relire et un troisième conditionnel. Les PR #23, #27 et #30 ont été recoupées avec le `main` courant : privilégier [PR #27](https://github.com/zoutiFrutti/Interstice/pull/27) pour les enrichissements, sans fusionner à nouveau #23 ni confondre #30 avec un article.

**Travail réellement effectué par le Relieur :** [feuille de route V0 créée et relue](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/RELIEUR_FEUILLE_DE_ROUTE_PUBLICATION_WIKI_V0_2026-10-30.md) (commit `495007ea1049d384e1727b039eb994c063973846`) ; [retour concret déposé sur PR #34](https://github.com/zoutiFrutti/Interstice/pull/34#issuecomment-6526955592) ; lecture des deux versions HTML `main` / PR #27 et des états antérieurs.

**Résultat d'état :** `wiki-decision-collective.html` existe sur `main`, sa section Young/Freeman uniquement sur PR #27 ; `wiki-lecture-croisee-travail-soin-pouvoir.html` existe sur `main` avec Federici/hooks/Freire/Kropotkine, mais l'ajout Berenstain/Ahmed est seulement sur PR #27. Le troisième contenu Foucault/Ostrom/Lyon est en réserve et nécessite la nuance **contrôle des usagers ET de la ressource**.

**Corrections identifiées :** liens de fin de parcours « Retour au Wiki » et « Contribuer » actuellement placés **avant** des nouvelles sections sur la PR #27 ; bibliographies Young (chapitre 2 consulté en notice, pas intégralement), Tebble (objection à documenter), Berenstain (conditions de licence à confirmer), Ahmed et autres auteurs (éditions/passages/lectures à confirmer) ; test réel clavier/lecteur d'écran et rendu smartphone non accomplis. Tentatives de consultation GitHub Pages par lecteur web **non concluantes**. Les sources externes ont été rapprochées de leurs notices éditeurs mais **aucune lecture intégrale supplémentaire** n'a été accomplie.

**Dépendances :** Penseur pour solidité des arguments/objections, Médiathèque pour sources/éditions/licences, Juriste pour confidentialité/droit et voies de correction, Graphiste/Anarchitecte pour mise en forme et tests. Aucun envoi à leurs conversations ni réception n'est présumé ; ce journal conserve les instructions documentaires sans réattribuer les fonctions. Le Relieur coordonne, aucun atelier « Organisateur » indépendant.

**Décision :** proposer une relecture croisée ciblée et un arbitrage humain explicite sur les deux enrichissements. **Aucun contenu Wiki modifié, aucune PR fusionnée, aucun déploiement, aucune adoption collective et aucune publication automatique.** Le Manifeste V2.5 reste une référence éditoriale non adoptée.


## 2026-10-30 — Anarchitecte — contrôle bibliographique deux publications Wiki V0

Mission du Relieur reçue. Reprise du dossier existant PR #34 et feuille de route `coordination/RELIEUR_FEUILLE_DE_ROUTE_PUBLICATION_WIKI_V0_2026-10-30.md`, sans duplications des pages. Tableau de neuf auteurs, éditions, niveau effectif de consultation, pages et droits, et sept corrections éditoriales rédigé dans `coordination/propositions/ANARCHITECTE_AUDIT_SOURCES_DEUX_ARTICLES_WIKI_20261030.md` (commit `ea9ec04d2a0e4b20182185e6585fc958308a839b`). Contrôles externes : notices éditeurs Young/Oxford, Tebble/Wiley, Ahmed/Duke, Federici/PM Press, hooks/Routledge ; texte de Jo Freeman sur site de l'autrice ; bibliographies Freire ; fac-similé Kropotkine (2e éd., 1892). Berenstain : DOI et résumé, licence précise et pages intérieures à revoir. Correction détectée : édition anglaise Freire 1970 = Herder and Herder, non Continuum ; hooks 1994 désigne l'original anglais, non une édition française confirmée. Aucun article fusionné ou publié ; publication toujours conditionnée à la relecture, aux droits et à la décision humaine. Retour documentaire au Relieur par cette entrée.


---

## 2026-10-30 · Juriste — avis ciblé Wiki V0 sur deux enrichissements

**Mission :** relecture juridique ciblée demandée par le Relieur de « Décider ensemble sans hiérarchies invisibles » (`wiki-decision-collective.html`) et « Qui fait vivre les communs ? » (`wiki-lecture-croisee-travail-soin-pouvoir.html`). Lecture de `coordination/RELIEUR_FEUILLE_DE_ROUTE_PUBLICATION_WIKI_V0_2026-10-30.md`, des versions `main` et de la PR #27 (branche `atelier-lecteur/wiki-rattrapage-main-20261030`, HEAD observé `7146a014...`), et des politiques Wiki existantes. Aucun enrichissement fusionné à la date du contrôle.

**Résultats motivés :** page Décider ligne 52, faux risque d'un droit général de vote/participation des personnes extérieures ; page Travail et ligne 11, lien vers formulaire Wiki à connexion e-mail non adapté aux demandes sensibles ; revue des lignes 35–37, 50, 54 et 7 pour distinguer recommandations politiques et droit ; bibliographies/éditions et déplacements de liens de sortie ; témoignages personnels identifiants non trouvés dans les extraits contrôlés. Droits de citation examinés : CPI L.122-4/122-5 ; vie privée art. 9 Code civil, CNIL droits des personnes et historiques Git ; [Berenstain, éditeur Ergo](https://doi.org/10.3998/ergo.12405314.0003.022), licence CC BY-NC-ND 3.0 directement vérifiée, sans déduire un droit de traduction.

**Livrables enregistrés et à relire :** avis court, hiérarchisé bloquant/recommandé/ultérieur avec emplacements exacts `docs/AVIS_JURIDIQUE_PUBLICATION_WIKI_DEUX_ARTICLES_2026-10-30.md` (commit de rédaction `050a9c7c`, correction de liens `0a9081c9`, condensation `6e457bb1`) ; transmission au Relieur `coordination/transmissions/2026-10-30_JURISTE_VERS_RELIEUR_PUBLICATION_WIKI_V0.md` (commit `d485dc10`). L'enregistrement sur GitHub ne prouve pas réception en conversation.

**Décisions requises avant mise en avant :** correction de la ligne 52, parcours honnête et sûr de demande de rectification (canal privé si données personnelles), validation des sources/licences et navigation, choix explicite de la version par les personnes habilitées. **Aucun HTML, Charte, Manifeste V2.5, donnée privée, PR ou statut éditorial modifiés ou adoptés.**



## 2026-10-30 — Archiviste des communs : contrôle La Marmite / Nathalie Le Mel
Dix actions : relecture ASSO-008, BIO-012, journal Drive, suivi Médiathèque ; consultation de l'article Audin sur la rue Larrey ; contrôle des cotes cadastrales D1P4 615/714 ; comparaison des adresses du siège et des restaurants ; confrontation de la fréquentation annoncée à la nature secondaire de sa source ; contrôle du récit commémoratif sur Nathalie Le Mel ; repérage de la divergence 1826/1827 ; enrichissement de ASSO-008 et BIO-009 ; mise à jour du journal et suivi Médiathèque avec relecture. Sources : https://macommunedeparis.com/2018/07/30/la-marmite-8-rue-larrey-paris-6e/ ; https://macommunedeparis.com/2019/02/06/le-8-mai-1921-mort-de-nathalie-lemel/ ; https://www.commune1871.org/images/PhotothequeAmis/pdf/Panneaux%20de%20l%27exposition%20Hotel%20de%20Ville%202004.pdf . Aucun bail, acte civil ou compte primaire consulté. Résultat : 0 nouvelle fiche, 1 ASSO et 1 BIO enrichies, deux journaux Drive mis à jour et relus. Inventaire de référence 43, non recompté. Aucun Wiki public ni manifeste modifié. Coordination pour le Relieur : vérifier acte de naissance Brest et calepins originaux avant publication.


## 2026-10-30 — Anarchitecte — contrôle technique ciblé des deux publications Wiki V0

Contrôle documentaire ciblé des références `refs/pull/27/head` et `refs/pull/35/head` pour `wiki-decision-collective.html` et `wiki-lecture-croisee-travail-soin-pouvoir.html`, comparaison des PR #23, #27, #34, #35 avec `main` (SHA contrôlé `bc915a727ea5480ef8fd8d3527f4ff7b59886450`). Résultat : PR #27 place encore « Sources et approfondissements » avant Young/Freeman/Tebble et « Contribuer » avant Berenstain/Ahmed ; PR #35 remet les sections dans un ordre cohérent. Les deux articles ont chacun un H1 et aucun script embarqué dans les versions lues ; liens de retour et de correction présents au niveau du code. Les PR sont divergentes et #35 modifie le CSS global : aucune fusion en bloc recommandée. **Décision technique : CORRECTIONS NÉCESSAIRES.** HTML complet, liens externes HTTP, 390/1280 px, débordement, clavier, focus et appareil réel NON testés. Rapport et protocole reproductible : `coordination/propositions/ANARCHITECTE_CONTROLE_TECHNIQUE_WIKI_V0_2026-10-30.md`, commit `c285e56c8e3051954e667143fd387adaa3d646ad`. Aucun contenu fusionné, déployé ou publié ; validation humaine requise.


## 2026-10-30 — Relieur — transmission 013 : cinquième priorité cartographie

**Demande de l'utilisateur reçue dans la conversation Relieur :** ajouter la carte des communs et la carte des possibles aux quatre priorités existantes, et fournir aux dix ateliers existants des prompts spécialisés pour dix passes de travail chacun, dans un ordre qui respecte leurs dépendances.

**Document créé et vérifié sur `main` :** [Transmission 013 — cinq priorités et cartographie](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/RELIEUR_TRANSMISSION_013_CARTES_COMMUNS_POSSIBLES_PRIORITES_2026-10-30.md), commit `ced5e6b13bf12359e2639f7655c1e27d1edf20c3`. Le présent enregistrement **ne signifie pas** que les conversations séparées ont reçu ou exécuté ces prompts ; l'utilisateur dispose de textes distincts à leur transmettre.

**Définition de travail :** carte des communs = initiatives et ressources existantes, déclarées ou documentées ; carte des possibles = besoins, ressources à mutualiser, projets et propositions en devenir. **Un seul système**, quatre fonctions à égalité, double lecture, liste aussi complète que carte. Pilote fictif Tarn (Lisle-sur-Tarn/Gaillac), sans compte, GPS obligatoire, adresse privée, étiquette morale ni organismes inventés présentés comme réels.

**Travaux à prolonger sans doublons :** PR #41 pour prototype code ; PR #44 pour deux pages Wiki corrigées ; PR #35 pour accueil et lisibilité ; PR #42 pour formulaires ; PR #43 pour scénarios S1–S3 ; lecture, sources, garanties et communications dans leurs dossiers existants. Référence technique/juridique : `coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md` et `propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md`, **non adoptées**.

**Ordre de transmission préparé :** Penseur, Juriste, Médiathèque, Anarchitecte, Développeuse, Lecteur, Graphiste, Archiviste, Biographe, Communications ; Relieur assure coordination pratique et suit les vraies réceptions, sans « Organisateur » séparé.

**Aucune fonctionnalité cartographique réelle ou carte publique n'est prétendue créée par ce document.** Aucun déploiement, fusion, permission ou texte politique modifié dans cette passe de coordination. Les dix passes de chaque atelier sont **demandées**, non réalisées par le Relieur à leur place.

---

## 2026-10-30 · Juriste — transmission 013, garanties des deux cartes

**Mission reprise :** deux dossiers juridiques déjà existants sur cartographie et fiches ; transmission 013 du Relieur consultée, PR #41 Développeuse actuelle et PR #44 Lecteur relues. **Statut : propositions non adoptées, sans fusion/déploiement et sans permission Supabase modifiée.**

**Dix passes effectuées et tracées :** (1) 15 vérifications statiques ciblées du prototype fictif PR #41, propriétés ciblées observées, **aucun test dynamique revendiqué** ; (2) données publiques/privées/jamais collectées ; (3) quatre niveaux d'exposition géographique L0–L3 ; (4) scénarios de réidentification des lieux sensibles, suppression depuis API/exports/caches ; (5) admission au référencement sans adhésion ou notation morale ; (6) proposition/revendication/correction avec mandat proportionné ; (7) demandes de retrait, urgence, conflit d'intérêts et réexamen ; (8) distinction ODbL des données OSM / conditions OSMF de tuiles / politique Nominatim / serveur OSM France / Etalab ; (9) distinction annuaire informatif et véritable organisation de rencontres ; (10) cahier de critères **F1–F10 fictif** versus **R1–R10 ouverture réelle** et tests `J013-01` à `J013-20` proposés.

**Sources externes réexaminées :** https://www.openstreetmap.org/copyright ; https://operations.osmfoundation.org/policies/tiles/ ; https://operations.osmfoundation.org/policies/nominatim/ ; https://www.openstreetmap.fr/usage/ ; https://www.data.gouv.fr/pages/legal/licences/etalab-2-0 ; https://www.cnil.fr/fr/geolocalisation-applications-mobiles-quelles-regles ; https://www.cnil.fr/fr/reutilisation-de-donnees-par-des-annuaires-en-ligne-quels-droits-pour-les-professionnels-concernes .

**Livrables édités et vérifiables :** `docs/ETUDE_JURIDIQUE_CARTOGRAPHIE_INTERSTICE_RISQUES_2026-10-30.md` (commit `8ae055d1`) ; `propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md` (commits `11a3aeb1`, `b8f0d390`) ; `coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md` (commit `1b4be710`). Les anciens dossiers sont conservés, aucun dossier général supplémentaire créé.

**Suivi parallèle Wiki :** PR #44 ouverte en brouillon ; ordre des sections corrigé, mais formulations de droit des non-membres (`wiki-decision-collective.html:46`) et voie de rectification via simple proposition Wiki (`wiki-lecture-croisee-travail-soin-pouvoir.html:16`) encore à traiter ; avis juridique existant actualisé `docs/AVIS_JURIDIQUE_PUBLICATION_WIKI_DEUX_ARTICLES_2026-10-30.md` (commit `91b0558a`). **Aucune page HTML modifiée par le Juriste.**

**Décision suivante au Relieur :** coordonner Anarchitecte et Développeuse autour du cahier F1–F10 pour un prototype fictif sans collecte, puis faire instruire R1–R5 avant tout passage à de vraies fiches. Les droits sur les données, la qualité de modérateur, les fonds de carte et les moyens de retrait/recours restent des conditions non vérifiées du futur système réel. Le Relieur coordonne, sans autorité politique ni responsabilité de traitement automatique. **Écriture GitHub ≠ réception par les autres conversations**.



## 2026-10-30 — Médiathèque / Transmission 013 : 10 passes documentaires Wiki et cartes
**Référence de mission :** `coordination/RELIEUR_TRANSMISSION_013_CARTES_COMMUNS_POSSIBLES_PRIORITES_2026-10-30.md`. **Bilan et protocole complet déposés puis relus :** [transmission au Relieur](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-30_MEDIATHEQUE_VERS_RELIEUR_TRANSMISSION_013.md), commit `c679807e7e5e0b2c27018fbabcf6f3396672f4fd`.
**Passes 1–8, articles Wiki :** Young (notice Oxford), Freeman (version composite sur site autrice), Tebble (résumé institutionnel ; objection Young plus étroite), Berenstain (PDF primaire pp. 569-590 ; rectification de note 20 datant de 2024), Ahmed (notice Duke), Kropotkine (chapitre primaire « Le travail agréable » 1892) et Federici (notice PM Press), hooks (titre original Routledge 1994), Freire (Herder and Herder 1970, pas Continuum), licences/traductions. **Deux pages réellement corrigées et relues sur branche de PR #44** : `wiki-decision-collective.html` commit `30ff93cb18d0b9f8a204c759cb76c697222fc579` ; `wiki-lecture-croisee-travail-soin-pouvoir.html` commit `4cee5acbd85c47322a1529665001b46c8e28752e` ; ajustement final de l'ordre des sections (sources après Berenstain/Ahmed, avant Contribuer), commit `052c686f3c1bb521aa76fed8c5baa836bea79680`. Contrôle statique sur version relue : 1 H1 par page, sections HTML équilibrées (7/7 et 9/9), liens href non vides ; PAS de test navigateur, réseau exhaustif, mobile ou validation humaine.
**Passes 9–10, cartographie :** OSM ODbL (données) distinct des politiques de tuiles ; Licence Ouverte 2.0 attribution producteur/date ; API Repair Café à relire avant réemploi ; interdiction de bâtir un annuaire par scraping Google Maps. Modèle court de provenance rédigé avec source et date, statut déclaratif, vérification, licences/attribution, localisation protectrice. Aucun import, adresse privée ou lieu sensible ; démonstration fictive seulement. **Suivi Médiathèque Drive enrichi et relu** : https://docs.google.com/document/d/1C7raL1dIAxHeXf8Ps7riE2ssQjGQyoAeb6MBg1MA11Q/edit .
**En attente :** revue du Lecteur/Relieur/Juriste sur corrections et conditions de licence ; tests PR #44, lecture complète des livres selon besoins, confirmation de licence de la version Berenstain, validation de l'avis de correction complet et conditions API du fournisseur de réseaux ; pas de fusion, déploiement, publication ni décision collective. Dépôt GitHub = transmission disponible, **pas réception confirmée dans la conversation Relieur**.


## 2026-10-30 — Anarchitecte — Transmission 013, cartes des communs et des possibles

Dix passes sur la PR #41 existante, sans reprise de PR #36 : HEAD main et divergence contrôlés ; contrat existant `initiatives-core.mjs` et six exemples fictifs examinés ; modèle unifié des quatre objets, identifiants/relations/états/provenance, localisation protectrice, données publiques/privées séparées, liste et carte cohérentes, scénarios anti-fuite API/export/métadonnées, comparaisons PR #35/#41/#42/#44 et blocages Wiki ; document d'architecture directement exploitable `coordination/ANARCHITECTE_CONTRAT_CARTES_013_2026-10-30.md`, commit `2af565f5c3e604de9cc7c54b8ee733c306f79b9d`. Quatre tests complémentaires ajoutés à `tests/initiatives-core.test.mjs` sur la branche de la Développeuse PR #41, commit `c0f4344d8f10b102d78d96cacf3add6f438fa1c7`. Succès CI à vérifier ; aucune migration Supabase, seconde application, fusion, donnée réelle ou publication. Études non adoptées. Relieur : coordonner le pilote fictif et les décisions humaines avant données réelles.


## 2026-10-30 · Communications · Transmission 013 — paquet de lancement soumis à validation
**Mission reprise :** trois carrousels de 009/012, sans nouvelle campagne. Référence 013 et derniers résultats relus. Dix volets traités, dont le contrôle Metricool BLOQUÉ et non déclaré terminé :
1. Trois dossiers graphiques : douze JPG vérifiés contre le manifeste TSV, RGB 1080×1350, tailles et SHA-256 conformes.
2. Légendes et référence : référence V2.5 du dépôt lue, trois légendes conservées ; pas de nouvelle lecture intégrale des auteurs revendiquée.
3. Brouillons : non vérifiés ; après la dernière connexion non aboutie/refusée, aucune nouvelle demande d'identifiants ni tentative de contournement. Aucun import, donc aucun doublon créé.
4. Douze noms de fichiers associés aux alternatives dans l'ordre ; nature IA documentée dans le kit, mais champs Metricool non contrôlés.
5. Remplacement proposé du présent « Interstice sert à cartographier » par une formulation « se construit pour… cartographie en développement » ; aucune image source retouchée, décision humaine requise. Correction du visuel préférée à une simple note susceptible d'être séparée de l'image.
6. Texte de présentation des deux cartes rédigé : existant documenté/déclaré visé versus besoins/offres/projets proposés ; exemples fictifs actuels, pas d'annuaire réel.
7. Matrice existant/candidat/prototype/objectif préparée à partir de refs/pull/41/head, de refs/pull/44/head et de la référence 013 ; aucun déploiement ni test Android attesté par cette lecture.
8. Texte de présentation du chantier site et texte conditionnel d'annonce des deux articles rédigés séparément. Annonce « publiés » interdite avant vérification publique et validation.
9. Traitement proposé des critiques, erreurs, contributions et données sensibles précisé : pas de recopie dans GitHub, pas de délai garanti ni de canal privé présumé.
10. Paquet final créé et contrôlé : LA_FAILLE_NOIRE_LANCEMENT_VALIDATION_013.zip, 28 entrées, sources originales et dossier VALIDATION_013 séparés ; 12 empreintes des images recomparées après compression. Fichier enregistré pour la personne utilisatrice. Fiche existante enrichie, commit 0024138b179a030ac129e37c5fc9b241c379782a, puis relue.

**Preuves source :** manifeste-v2-5.html blob 56724f54bf6d05434d02ad7fd905509f92402a5d ; candidats PR #44 Décider blob 45a0f246d7cb88d837d1d6ec268cc562bf2fc0f4 et Travail blob e478811c6c5b4108621ca90033f601b7fca76ebd ; initiatives-core.mjs PR #41 blob 0f4b31a2baf5b55f0980b7a937e4a92105d241e7. Blobs de fichiers, pas SHA de HEAD ni preuve de publication. Les versions de branche peuvent continuer d'évoluer.

**Retour au Relieur :** préparation disponible dans la fiche de lancement existante ; aucune réception dans sa conversation présumée. Trois arbitrages : correction graphique 03_04 ; validation des versions publiques/liens des deux articles ; moyens volontaires de suivi. Prochaine action utile côté Metricool : session authentifiée et contrôle des brouillons, avec vérification d'absence de doublon avant import. Le Relieur coordonne, aucun Organisateur distinct.

**État :** paquet prêt à examiner ; Metricool et parcours public restant à vérifier ; publication en attente de décision humaine. Aucun post, programmation, collecte de données réelles, fusion ou déploiement effectué.


## 2026-10-30 — Relieur — transmission 014 et recheck des priorités en vingt passes

**Demande reçue dans la conversation Relieur :** réévaluer les avancées et organiser un nouveau cycle de **20 passes par atelier** pour les cinq priorités (Wiki deux articles, accueil mobile, découverte, communications, deux cartes). **Transmission 014 écrite, relue et vérifiable** : [document de coordination](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/RELIEUR_TRANSMISSION_014_REPRISE_20_PASSES_2026-10-30.md), commit `6c3d62c5bd1112ae6e00e1602f51582b19bb70d0`.

**Recheck :** PR #41 contient déjà les deux cartes **SVG fictives** (11 objets) et une vue liste, tests Node et Chromium verts sur HEAD contrôlé ; PR #35 propose accueil mobile et styles cartes ainsi que tests croisés verts, sans intégration réelle du CSS dans PR #41 ; PR #44 héberge les deux articles relus, encore avec points de droit, correction et qualité de source. Penseur a **déjà** produit études 60–79 : lui demander des tests critiques et décisions à préparer, pas vingt nouvelles études. Juriste 013 et Médiathèque 013, Anarchitecte 013 et communications 013 ont réellement déposé dossiers documentaires ; vérifier leurs corrections ciblées plutôt que repartir de zéro.

**CI :** GitHub Pages réussite sur HEAD `832a1ffce` contrôlé ; workflow `Wiki Markdown inventory (archive stage)` en échec sur ce HEAD. Ce résultat exige diagnostic, non affirmation d'une défaillance du site. PR ouvertes 27 à ce contrôle ; aucune fusion/déploiement demandée.

**Ordre prévu :** vague A Anarchitecte, Juriste, Médiathèque, Penseur en parallèle ; vague B Développeuse et Lecteur ; vague C Graphiste ; vague D Archiviste et Biographe, travaux indépendants ; vague E Communications ; Relieur coordonne en continu et prépare arbitrages humains.

**Important :** les vingt passes sont **demandées, non effectuées par le Relieur à la place des ateliers**. La présence de la transmission GitHub ne vaut pas réception de leurs conversations. Pas de nouvel Organisateur, pas de publication de données sensibles, pas de promesse de fonctionnalité réelle ou de validation collective.


## 2026-10-30 — Anarchitecte — Transmission 014, vérifications cartes

Lecture des HEAD relatifs de `main` (`a1fe47c475d8b128143407f5fb5162805349e20b`) et PR #35/#41/#42/#44 ; comparaison du modèle réellement codé de #41 avec contrat 013. Six tests de parité, objets/IDs, localisation absente, repères communaux approximatifs et anti-fuite export ajoutés sur la branche de PR #41, commit `a59268357812d730f95b4cbad75275e4ac4d9e57`. Leur réussite GitHub Actions reste **non démontrée** (aucun run retourné à ce contrôle). Point précis CSS : `cartes-design.css` proposé par #35 n'est pas chargé par la page de #41 ; intégrer après `cartes.css` sur branche de rapprochement, sans copier l'application. PR #44 et #35 modifient les mêmes deux pages Wiki : relecture de conflit nécessaire. Cause exacte d'échec du workflow Markdown Wiki non vérifiée faute de journal d'exécution attribué. Contrôles HTTP, 390/1280 px, clavier, focus, HTML et navigation sur candidat assemblé non réalisés : ne pas les déclarer réussis. Rapport détaillé `coordination/ANARCHITECTE_TRANSMISSION_014_TESTS_CARTES_2026-10-30.md`, commit `b2d7df19eed055cdd42ba407dc5a21072cff145f`. Avis : **corrections et tests complémentaires nécessaires**, aucun merge/déploiement/migration. Retour au Relieur par ce journal.

---

## 2026-10-30 · Juriste — transmission 014, vingt passes cartes et Wiki

**Sources et état vérifiés :** PR #41 ouverte en brouillon au HEAD `a59268357812d730f95b4cbad75275e4ac4d9e57`, deux cartes SVG fictives, 11 objets ; [workflow #41099508020](https://github.com/zoutiFrutti/Interstice/actions/runs/41099508020) **success** pour `test-core` Node et `browser-mobile` Chromium. PR #44 corrigée sur branche `atelier-lecteur/correction-deux-pages-20261030` ; aucune fusion/publication. Les versions `main`, politiques cartographiques et avis Wiki du Juriste ont été recoupés. **Faits distincts des recommandations**.

**Vingt passes accomplies, avec preuves et limites :** 01 HEAD #41 ; 02 F1–F10 ; 03 tests confidentialité réellement exécutés en CI ; 04 ancrages communaux et risques de précision ; 05 exports fictifs en liste blanche ; 06 fiche sans localisation ; 07 « fictif » versus « documenté dans le scénario » ; 08 risque d'homonymie avec une structure réelle ; 09 auteur versus mandataire ; 10 usurpation de revendication simulée sur papier ; 11 rectification fictive ; 12 contestation/masquage fictifs ; 13 lieu sensible réidentifiable par recoupement ; 14 SVG original et régime de licence non encore adopté, éventuelles tuiles OSM régies séparément ; 15 absence de réservation/rencontre réelles ; 16 relecture des deux articles Wiki #44 ; 17 correction effective de la phrase sur les droits des non-membres et de la non-exposition d'un témoignage ; 18 avertissement sur le formulaire Wiki inadapté aux demandes confidentielles, corrigé dans les deux pages ; 19 séparation blocages démonstration / R1–R10 ; 20 avis final et matrice de sept tests supplémentaires. **Les cas de mandat/recours/localisation réelle sont des scénarios proposés, non tests de production exécutés**.

**Modifications réelles vérifiables :**
- `propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md` section « Transmission 014 », matrice des 20 passes et `J014-T01` à `J014-T07` ; commit `c9127134987038779c8ee1f6ed1c8e2dea3e5688`.
- Sur la branche de PR #44 uniquement : `wiki-decision-collective.html` (commit `db65145cc77d69272fb6b3d1d92c70e452412a21`) ; `wiki-lecture-croisee-travail-soin-pouvoir.html` (commit `6be7842f368484165c5baf052f7ecd18e0f52fc4`). Anciennes formulations non juridiques supprimées, lien « correction documentaire non sensible », avertissement. **Aucun canal privé nouvellement créé**.
- `docs/AVIS_JURIDIQUE_PUBLICATION_WIKI_DEUX_ARTICLES_2026-10-30.md` mise à jour, commit `c987b0c0836cbb0098f1a6f0f2270c54807769ad`.
- `coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md` bilan au Relieur, commit `278a00207573393fb3187095f38f32e82bc1b776`.

**Conclusion :** SVG schématique sans fond externe et sans usage OSM constaté ; les ancres lat/lon présentes sont des points communaux **réels** et non des adresses des 11 fiches fictives. Prévoir une notice claire, gestion du cas « aucune localisation », tests bundles/API et absence d'homonymie trompeuse. **Bloquant seulement avant vrai référencement : R1–R5** ; R6–R8 conditionnels, R9–R10 arbitrage humain. Aucune permission Supabase, donnée personnelle réelle, manifeste, charte, fusion ou publication modifiés. Une transmission déposée ici ne vaut pas lecture attestée par la conversation du Relieur.



---

## 2026-10-30 — Médiathèque — Transmission 014, bibliographies et provenance

**Vingt passes effectivement contrôlées** sur la continuité du dossier 013, sans refaire une bibliographie concurrente. PR #44 au début `6be7842f368484165c5baf052f7ecd18e0f52fc4` ; deux HTML relus et corrigés sur la branche existante : `wiki-decision-collective.html` commits `e91fac5e` et `f0deef14` (Young pp. 52–80, Freeman composite, Goodin/Owen/Alcoff/Dotson/Allen/Forst précisés) ; `wiki-lecture-croisee-travail-soin-pouvoir.html` commit `19070e08` (Kropotkine pp. 153–164, Federici première édition 2012, bell hooks 1994 original, Freire 1970 Herder/Seabury selon exemplaires, note 20 Berenstain rétractée 2024). Lecteur non réécrit, PR toujours candidate, aucune fusion/publication.

**Vérifications statiques :** 14 + 8 liens externes recensés, liens internes `index.html`, `wiki.html`, `bibliotheque.html`, `proposer-article.html` présents selon les pages ; vérification HTTP exhaustive, tests Android et accessibilité encore nécessaires. Résumés/notice ≠ lecture intégrale, droit de republication ni preuve de mise en œuvre. Correction intégrale de Berenstain indisponible en lecture automatisée au contrôle. Bibliographies finales **candidates**, pas validées.

**Cartographie :** contrat `coordination/ANARCHITECTE_CONTRAT_CARTES_013_2026-10-30.md` relu ; PR #41 ne possède qu'une provenance `simulation` simplifiée, **modèle enrichi proposé et non codé**. Trois fiches **entièrement fictives** (initiative, besoin et projet, dont une `reference:null`), 10/10 vérifications JS isolées réussies (IDs, niveaux, mode démo, deux lectures, sans localisation, anti-fuite par liste blanche) ; aucun test API réelle ou RLS revendiqué. Licences : OSM données ODbL vs service tuiles, Etalab 2.0 attribution/date, Berenstain licence par version à réexaminer avant copie ou adaptation.

**Preuves, tableau complet des vingt passes, deux bibliographies candidates et fixtures :** [transmission Médiathèque existante complétée](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-30_MEDIATHEQUE_VERS_RELIEUR_TRANSMISSION_013.md), commit `02d2da430c0485fc919cb0ee8dcd041767332c34`. Ne pas supposer que la conversation du Relieur a reçu automatiquement cette écriture ; aucune validation collective, import réel, scraping ou publication.


**Contrôle complémentaire 014 — Mouffe : première édition Verso 2000**, distincte de la réédition Verso 2009, vérifiée par notice WorldCat et catalogue éditeur ; correction bibliographique dans la même PR #44, commit `a1bf2ec6df3141c6ddc8df1bccf8ecb2a3722e78`. Transmission Médiathèque existante remise à jour et relue, commit `9f605b54e6bc3a91d1a419e49876de97bdc83842`. PR #44 toujours ouverte en brouillon au dernier contrôle ; pas de fusion, publication ou accès aux œuvres intégraux revendiqués.


## 2026-10-30 — Anarchitecte — dix passes complémentaires cartes (21–30)

Suite réelle de transmission 014 sans refaire le modèle : PR #41 dispose désormais de `cartes-design.css`, `cartes-compat.css`, tests navigateur 390/1280, clavier, navigation et sans localisation. Test de fuite complémentaire `015` ajouté à `tests/initiatives-browser.test.mjs` sur la branche PR #41 (commit `898c9e80ecd6d3a9be02800c3cff7659fd0845ed`) : canari privé dans DOM, URL, erreurs et export. Résultats CI non attestés : recherche d'exécutions par SHA sans résultat ; ne pas déclarer réussite. Le workflow Markdown GitHub a été relu, mais aucun log d'échec précis ne permet encore de conclure sur sa cause. Détail des dix passes et limites ajouté au rapport existant `coordination/ANARCHITECTE_TRANSMISSION_014_TESTS_CARTES_2026-10-30.md` (commit `61dfa869147e08adc497d5caa56a6820c70a7eba`). Aucun merge, migration, ouverture de données réelles ou publication ; verdict provisoire : intégration à vérifier en CI et appareil.


## 2026-10-30 · Communications · Transmission 014 — vingt volets, limites explicites
Reprise du paquet 013 sans quatrième campagne. **Résultats nouveaux :** variante graphique de 03_04 produite par édition IA, petit paragraphe corrigé pour qualifier les deux cartes de prototypes fictifs ; original conservé. Candidate PNG RGB 1122×1402, texte inspecté, pas un export final 1080×1350 : approbation et export restant à faire. Douze JPG originaux, dimensions, tailles et SHA-256 reconfirmés. Alternatives et mention IA distinguées entre sources et variante ; champs Metricool non contrôlés.

**Contrôle public réellement exécuté :** HTTP 200 sur accueil, wiki.html, manifeste-v2-5.html, participer.html, wiki-decision-collective.html et wiki-lecture-croisee-travail-soin-pouvoir.html. Les deux articles publics ont respectivement 3125 et 6172 octets ; titres « Décider ensemble · Wiki des communs · Interstice » et « Qui fait vivre les communs ? · Interstice ». Texte public repris et empreintes SHA-256 conservées dans le paquet : bd924776110ece2941bde9ab84a975068b8424677a72be53fc5b7dd499291f36 et 521772e60a2ff0c20a2594a747059adf7b91d9c4c8c33d6994d4bfccf8eb5dfa. Absence des chaînes Young/Tebble et Berenstain/Ahmed dans ces réponses : ne pas annoncer les enrichissements candidats de PR #44 comme déployés. Accès HTTP n'est pas validation éditoriale, formulaire fonctionnel ni test Android.

**Metricool, lecture seule :** marque faille.noire retrouvée, getScheduledPosts du 01/10/2026 au 31/01/2027 (Europe/Paris) renvoie data=[] ; aucun post programmé retourné dans cette plage uniquement. Brouillons non révélés par cet outil et navigateur précédemment non authentifié : présence NON VÉRIFIÉE, pas déclarée absente. Aucun import, programmation ou publication.

**Production enregistrée :** paquet existant LA_FAILLE_NOIRE_LANCEMENT_VALIDATION_013.zip mis à jour sous sa même identité, version 1, dossier VALIDATION_014 et index ajoutés : 36 entrées, douze originaux intacts après recomparaison. Bilan des vingt volets, distinction prêt à examiner/approuvé/publié, textes des deux cartes et annonce exacte des articles dans la fiche de lancement existante ; réception par conversation Relieur non présumée.

**Bilan au Relieur :** prêt à examiner, pas approuvé. Débloquer session Metricool ; arbitrer candidate graphique et export ; vérifier la version publique finale avant annonce ; confirmer volontaires de suivi sans délai promis. Carte codée fictive ≠ annuaire réel, réseau constitué ou service réel. Aucun manifeste, droit, collecte, fusion ou déploiement modifié. Les limites des passes 7 (export final), 12 (fonctionnement complet), 14 (titres susceptibles d'évoluer) et 17 (brouillons) sont explicites dans le dossier.


## 2026-10-30 — Relieur — bilan vingt passes 014

**Cycle demandé par l'utilisateur, exécuté dans la conversation Relieur :** vingt **opérations distinctes de vérification, recoupement, diagnostic, rédaction et coordination**. Ne pas les confondre avec vingt tests applicatifs ni vingt essais humains. Les livrables sont dans la [PR #43](https://github.com/zoutiFrutti/Interstice/pull/43) sur la branche de coordination existante, **non fusionnée** :
- [bilan numéroté des vingt passes et preuves](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUR_014_BILAN_20_PASSES_2026-10-30.md) ;
- [dossier d'arbitrage V0 et collisions Git](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUR_014_DOSSIER_ARBITRAGE_INTEGRATION_V0_2026-10-30.md) ;
- [fiche d'essai S1 papier / cartes fictives](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUR_014_FICHE_TEST_S1_PAPIER_CARTES_2026-10-30.md), reliée au scénario S1–S3 existant.

**Constats techniques nouveaux et précis :** le fichier `cartes-design.css` est **identique dans les PR #35 et #41** (blob `07e8c54fff6cc4dfc66f42ba19cf364962e400c5`) et déjà chargé dans le prototype #41 ; ne pas le réintégrer une deuxième fois. Par extraction des paragraphes, les deux copies du Graphiste #35 contiennent les **22/22 et 19/19 paragraphes** des deux articles source sur #44 au contrôle, sans valider pour autant le rendu. Chevauchements : #35×#44 sur les **deux pages Wiki**, #35×#41 sur CSS, presque toutes les PR sur le Journal commun ; ne pas fusionner en bloc.

**Incident CI Wiki localisé par logs réels :** [run `41094247759`](https://github.com/zoutiFrutti/Interstice/actions/runs/41094247759) job `124195744721` : inventaire de **43/43 fichiers réussi**, puis étape d'ingestion privée échouée **409** avec `github source unavailable`, fichier `PENSEUR_ETUDES_60_79_VINGT_PASSES_CARTES_COMMUNS_POSSIBLES_2026-10-30.md`, status **403** côté récupération GitHub. Cause fine non établie : diagnostiquer accès/quota du service Edge, ne pas désactiver contrôles OIDC/RLS à l'aveugle. [Run antérieur `41094181659`](https://github.com/zoutiFrutti/Interstice/actions/runs/41094181659) vert. Les nouveaux runs des PR #35/#41 et de `main` étaient en attente à la consultation, **pas déclarés verts**.

**Coordination éditoriale :** PR #44 contient les deux pages et corrections du Lecteur/Médiathèque/Juriste ; PR #35 les habille. Relecture finale et essais réels Android/accessibilité restent nécessaires. **S1** relie besoin vélo fictif sans smartphone et ressources `demo-cycles` (Gaillac), `demo-projet-gaillac` : ne pas convertir une recherche vide à Lisle-sur-Tarn en refus de coopération, ni une fiche fictive en disponibilité réelle. Aucun volontaire recruté ni essai mené.

**Communication vérifiée :** connecteur Metricool `faille.noire` répond ; aucune publication **programmée** du 30 octobre au 31 décembre 2026 selon la requête, mais **brouillons non vérifiés**. La formulation trompeuse sur le visuel `03_04_interstice.jpg` reste à corriger avant diffusion, sous validation humaine.

**Décisions humaines restantes :** versions réellement approuvées du Wiki et de l'accueil, moyens de réponse/correction, démonstration fictive à autoriser, responsable des données et recours avant carte réelle, canal hors application et personnes volontaires, correction des carrousels. Le Relieur coordonne et organise la pratique ; aucun atelier « Organisateur » actif, aucune décision politique par l'IA.

**Aucune fusion, aucun déploiement, aucun utilisateur ni donnée réelle, aucune permission Supabase, aucun manifeste modifié** dans cette passe. Les études et V2.5 restent non adoptées collectivement. La PR #43 contient les dossiers en revue, pas une validation collective.


## 2026-10-30 — La Relieuse — accueil de La Tisseuse, coopérations et annuaire

**Nouvel atelier annoncé par l'utilisateur :** **La Tisseuse — liens, coopérations et entraide**. La fonction de coordination est désignée ici au féminin **La Relieuse** ; l'ancien nom « Le Relieur » demeure dans les archives pour la continuité. Aucun atelier « Organisateur » séparé. La Tisseuse **ne reçoit aucune autorité** sur les autres ateliers ou sur les structures recensées.

**Document d'accueil créé sur `main` :** [`coordination/TISSEUSE_CADRAGE_COOPERATIONS_ANNUAIRE_2026-10-30.md`](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/TISSEUSE_CADRAGE_COOPERATIONS_ANNUAIRE_2026-10-30.md), commit `3c0c295c860897a0cdfd6575b0d87e6fc53193e6`. Il rassemble la mission, la zone de Toulouse à Villefranche-de-Rouergue (Albigeois, Rabastinois, Gaillacois, Lisle-sur-Tarn, Laguépie, Najac), les lectures nécessaires, dix questions juridiques, les interfaces existantes et la **première mission TIS-001**. Le document est un **cadrage de travail**, pas une charte politique ou juridique adoptée.

**Distinction structurante :** (1) `REPÉRÉ` = source publique datée, **sans** acceptation de référencement ; (2) `RÉFÉRENCEMENT ACCEPTÉ` = confirmation explicite de la fiche, étendue et informations publiables, sous revue de la Juriste ; (3) `COOPÉRATION CONVENUE` = accord explicite, limité et réversible, **sans** assimilation à une adhésion. Ces états ne créent **pas** un cinquième type d'objet technique. Conditions d'accueil = informations déclarées/sourcées/datées, **jamais un label « safe » absolu**.

**Coordination des métiers existants :** La Tisseuse recherche et prépare les liens ; La Juriste vérifie données, mandat, retrait, signalements, responsabilités et conditions d'accueil ; La Relieuse recoupe les besoins/limites et les transmissions, sans engager le collectif ; Développeuse/Anarchitecte examinent l'interopérabilité sur PR #41 **avec données fictives seulement**. Manifeste V2.5 toujours non adopté, pas de classement idéologique ni d'obligation d'adhésion.

**Première mission TIS-001, encore à effectuer par La Tisseuse :** 10–12 pistes publiques vérifiables et territorialisées, trois rapprochements argumentés, **deux propositions personnalisées non envoyées** à soumettre pour avis juridique puis **validation humaine avant tout contact**, plus proposition de champs publics pour les deux cartes. Pas de carnet de contacts personnels ou signalements dans GitHub public. Une fiche repérée n'est **ni** un partenariat **ni** une garantie d'accueil ou de disponibilité.

**État attesté au jour de cette inscription :** cadrage et mémoire **enregistrés**, mais aucune prospection TIS-001, sollicitation réelle, acceptation de référencement, coopération, ajout cartographique réel, fusion, déploiement ou adhésion n'ont été réalisés par La Relieuse. **Un fichier GitHub ne constitue pas une transmission reçue automatiquement dans la conversation La Tisseuse, La Juriste, la Développeuse ou l'Anarchitecte**.


## 2026-10-30 — La Tisseuse — TIS-001, préparation partielle et blocage documentaire

[Carnet de préparation et bilan partiel](TIS_001_PREPARATION_BILAN_PARTIEL_2026-10-30.md), commit `16399fc4ac12b6a2a7a368be0997a2dc70b2ae85`. Cadrage et références récupérés ; scénarios S1–S3 recoupés ; PR #41 contrôlée au HEAD `898c9e80ecd6d3a9be02800c3cff7659fd0845ed`, lecture des fixtures, aucun test exécuté par cet atelier. Trois rapprochements de besoins, deux canevas **non personnalisés et non envoyés**, matrice de questions pour la Juriste et mapping candidat rédigés. **0/10–12 structures vérifiées** : recherche web en erreur, secours HTTP non exploitables. « Motor » reste une piste orale non identifiée, pas une fiche attestée. Recherche territoriale et deux propositions personnalisées restent à faire. Avis Juriste **non reçu**, réception des transmissions par conversations non attestée. Aucun accord, donnée privée, import dans les cartes, contact extérieur, fusion ou déploiement. **TIS-001 non achevé.**


---

## 2026-10-30 — Anarchiviste des communs — Reprise historique partielle, 30 passes

**Transmission reçue dans l'atelier Anarchiviste, documentée sur les sources disponibles, sans prétendre avoir accompli 50 recherches : 30 passes substantielles sur 50 demandées, 20 non effectuées.** Répartition réelle : provenance et archives 7 ; Union des femmes 6 ; coopération alimentaire 7 ; clubs et presse 5 ; applications proposées 5. En reprise des travaux anciens, ni double fiche ni reconstruction du corpus.

**État vérifié des dossiers Drive :** recomptage direct 43 fiches uniques (BIO 22, ASSO 8, ARCH 7, EXP 4, COL 2). Six fiches existantes enrichies puis relues après édition : BIO-009 Nathalie Le Mel, BIO-012 Eugène Varlin, ASSO-007 Union des femmes, ASSO-008 La Marmite, ARCH-006 Le Prolétaire, COL-003 Club des prolétaires. Zéro nouvelle fiche, zéro correction de statut adoptée.

**Nouvelles précisions de provenance :** manuscrits Varlin aux cotes BHVP 2-MS-1141 fol. 229/230/231 et 2-MS-3118 fol. 355 ; signalement collaboratif de l'acte de naissance de Nathalie Duval à Brest 1E73 vue 26/115, image originale inaccessible ici, donc divergence 1826/1827 non résolue ; D1P4 615/714 des Archives de Paris toujours inaccessibles en raison de l'amiante ; *La Sociale* du 20 avril cataloguée mais numéro non lu ; *Le Prolétaire* 4 numéros, ISSN papier et de reproduction distincts, scans non collationnés ; Ly 22 et Ly 108 non lus. Pour La Marmite, articles statutaires sur crédit, remboursement et sortie relus en transcription (aucun versement ni livre comptable retrouvé). La Marmite de 1894 cote Musée social 5103 **ne prouve pas** une continuité avec l'entreprise de 1868. Pour l'Union des femmes, les statuts et la demande de deux francs ne prouvent aucune paie effective.

**Niveaux de preuve :** textes historiques des statuts consultés en transcriptions modernes, notices institutionnelles et travaux secondaires consultés ; **aucun autographe, calepin, acte d'état civil, registre de caisse, procès-verbal militaire ou périodique original prétendument lu**. Restrictions d'accès et de réutilisation explicitées dans la transmission. ARCH-005 demeure dans le périmètre historique et sa fiche existante n'a pas été réécrite faute de pièce originale nouvelle.

**Bilan détaillé et preuve :** [Transmission de l'Anarchiviste au Relieur — 30 passes réellement achevées](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-30_ANARCHIVISTE_VERS_RELIEUR_REPRISE_HISTORIQUE_PARTIELLE.md), commit `c49b97b47c10b9c32a70476897655cca37088766`. Document candidat non validé ; aucune fusion, publication, décision collective, modification du manifeste ou prise de contact institutionnelle. Écriture GitHub ≠ réception automatique dans la conversation distincte du Relieur.


## 2026-10-30 — La Relieuse — cycle 015 trente passes et protocole de messagerie

**Demande de coordination reçue :** grand tour du projet, nouvelle phase d'**environ trente passes par conversation**, et étude de communication automatique des ateliers via GitHub. **Le rapport des cinquante passes de l'Assistant de l'Anarchiviste est annoncé comme terminé par l'utilisateur mais encore soumis à relecture de l'Archiviste** ; aucune conclusion archivistique non transmise n'est présumée.

**Travail réellement enregistré :** [Transmission 015, treize rôles, six lots de cinq actions chacun](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/RELIEUSE_TRANSMISSION_015_CYCLE_30_PASSES_ET_ORCHESTRATION_2026-10-30.md), commit `6973dd22d9afddcb3fa91fb6adba51726d44b81b` ; [architecture graduelle de messagerie GitHub](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/RELIEUSE_ARCHITECTURE_MESSAGERIE_GITHUB_ATELIERS_V0_2026-10-30.md), commit `93f3531426b9bd68c415efa204a5c133743c0a4f`. Les 390 actions figurent dans un **plan**, elles ne sont pas effectuées automatiquement.

**État de GitHub vérifié :** `main` au début `4995979af62eeccb32cea8e818700512ac247ec5`, 27 PR ouvertes. À ce commit, Wiki Markdown inventory et pages build/deployment sont tous deux **verts**. PR #41 : le dernier run navigateur contrôlé `41101912014` échoue sur **3/13** tests, bien que les tests Node soient verts : débordement **339 px pour 320 px** ; focus clavier absent sur fiche sans lieu ; nombre de résultats/commandes de commune observé **2 au lieu de 3**. La PR #35 dispose d'un test graphique composé vert sur un SHA figé, mais n'assure pas que le HEAD #41 soit lui-même vert. PR #44 : articles toujours candidats ; PR #39 KONTON Control n'est qu'un cockpit simulé sans orchestration réelle.

**TIS-001 :** [bilan partiel](TIS_001_PREPARATION_BILAN_PARTIEL_2026-10-30.md) : **0/10–12 structures vérifiées** au terme de la première tentative, outils de recherche indisponibles dans cette session, deux canevas **non personnalisés et non envoyés**, trois rapprochements de besoins documentaires. Le terme « partenaire » n'est pas justifié.

**Pilote documentaire proposé dans [PR #43](https://github.com/zoutiFrutti/Interstice/pull/43) existante :** `coordination/ateliers/registre.json` (13 rôles), quatre `messages/*.json` de statut `PREPAREE`, validateur Node `scripts/coordination-check.mjs` et workflow GitHub Actions en **lecture seule** `.github/workflows/coordination-readonly-check.yml`. Le workflow produit un rapport d'anomalies, ne contacte aucun agent ni conversation, ne modifie aucune donnée et n'a que `contents: read`. **GitHub n'assure pas seul la livraison à une conversation ChatGPT** ; aucun statut de réception/achèvement n'est anticipé. Résultat CI à vérifier sur le SHA final de la PR.

**Organisation envisagée :** messages à IDs stables, état `PREPAREE/DEPOSEE/VUE_PAR_ORCHESTRATEUR/ACCUSEE_PAR_ATELIER/EN_COURS/TERMINEE/BLOQUEE` et preuves; livrables par atelier sans répéter 30 éditions sur le Journal commun. Une exécution automatique d'agents demanderait un orchestrateur effectivement connecté, permissions minimales, quotas de budget, vérification des dépendances et validations humaines. La PR #39 pourrait servir de tableau de contrôle après revue, pas actuellement.

**Aucune fusion, aucun déploiement automatique de code, aucun contact aux structures, aucune programmation social, aucune permission changée, aucune adoption collective.** La Tisseuse ne reçoit aucune autorité sur d'autres ateliers. Manifeste V2.5 : référence éditoriale non adoptée. Les nouvelles transmissions dans GitHub n'impliquent pas qu'elles ont été reçues par les conversations séparées.



## 2026-10-30 — Juriste — transmission 015 TIS-001 trente passes

**Dernier TIS-001 réellement enregistré :** [cadrage La Tisseuse](TISSEUSE_CADRAGE_COOPERATIONS_ANNUAIRE_2026-10-30.md), [bilan partiel](TIS_001_PREPARATION_BILAN_PARTIEL_2026-10-30.md) : **0 structure vérifiée sur l'objectif de 10–12**, trois pistes de scénarios, deux canevas non envoyés ; aucune sollicitation, coopération ou publication de fiches réelles. Les documents TIS lus ne contiennent aucun courriel ou numéro au format usuel détecté par un contrôle lexical borné, sans garantie contre une identification indirecte.

**30 passes juridiques consignées, six lots de cinq** dans [`propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md`](https://github.com/zoutiFrutti/Interstice/blob/main/propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md), section **Transmission 015** (commit `20287467b41d361b4c92fc7da9c99decbbda8925`). Contrat documentaire : recherche, publication et coopération sont trois dimensions **indépendantes**, et leur refus/retrait aussi ; pas de cinquième `kind`, pas de nouvel import. **15/15 assertions exécutées sur un modèle fictif autonome** de permissions et canaris privés, **non** sur une API Interstice réelle.

**Constats de droit et de prudence :** le référencement de données professionnelles peut, selon contexte, relever de l'intérêt légitime et droit d'opposition, sans consentement universel ; **l'accord préalable de publication est une garantie volontaire proposée pour Interstice**, distincte d'un contrat de coopération. Associations : la représentation dépend des statuts et mandats. Un premier contact non commercial doit être qualifié par canal/destinataire, avec information/opposition selon le cas ; aucune autorisation d'envoi humain établie.

**Wiki :** [avis sur les deux articles actualisé](https://github.com/zoutiFrutti/Interstice/blob/main/docs/AVIS_JURIDIQUE_PUBLICATION_WIKI_DEUX_ARTICLES_2026-10-30.md), suivi 015 (commit `2d51e9bd56d079ea265ff49cfa5ab633c9ad40bb`) : PR #44 à HEAD `393bfbd8...` conserve la distinction des droits et l'avertissement que le formulaire Wiki n'est pas un canal privé. Aucune nouvelle correction HTML, aucun canal de droits créé.

**Bilan adressé à La Relieuse / La Tisseuse / Développeuse :** [`coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md`](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md), section **Transmission 015**, commit `e65b337a1121cff3ad73250566419037355c706b`. **Bloqués** : première prise de contact sans structure vérifiée/mandat et validation humaine, référencement réel sans protections R1–R5, accord de coopération sans participants habilités et périmètre défini, signalement sensible sans canal restreint réel. **Reportables** : imports, contrats d'activités futures, licences nouvelles, automatisation et déploiement. Les sources CNIL/Service-Public sont liées dans l'avis.

**Aucune donnée personnelle recueillie, permission Supabase modifiée, prise de contact, nouveau partenariat déclaré, fusion, publication ou Charte adoptée.** Dépôt sur GitHub ne signifie pas réception par une autre conversation.



---

## 2026-10-30 — Médiathèque — Transmission 015, sources Wiki et provenance TIS-001
**Mission reçue** dans la conversation Médiathèque : transmission 015 de La Relieuse, 30 actions documentées (28 FAIT, 2 BLOQUE), six lots ; état candidat, pas de fusion ni publication.
**PR #44 corrigée et relue sur branche existante** : article « Décider ensemble » (Tebble post-print universitaire accessible en extraits, mais averti non destiné à la citation) commit `8e54a589f813f194401504ab3b590f76af555ee7` ; article « Qui fait vivre les communs ? » (Freire Seabury 1973 ©1970, Berenstain note 20 de 2024 et accès incomplet à l'avis) commit `ef6a80009329fffd17280d5b4c195292f7d16386`. Pas de réécriture des thèses du Lecteur. Young 2000 imprimé / notice en ligne 2002 ; Freeman texte primaire web composite ; Kropotkine chapitre primaire 1892 ; Ahmed/Federici/hooks/Mouffe notices uniquement.
**Contrôles statiques** : liens externes 15 + 8, trois liens internes vérifiés par article, sections équilibrées (7/7, 9/9) ; aucune vérification HTTP exhaustive, ni test clavier/Android revendiqué. PR #35 a des versions divergentes des mêmes HTML : intégration humaine fichier par fichier.
**Addendum ciblé au renvoi identique de la transmission 015 (sans recompter 30 passes)** : PR #44 HEAD `b08ee0b915a162faa2d870debc6580b08ca29935` ; après corrections du Lecteur, 15 + 9 liens externes au lieu des 15 + 8 historiques. Les deux fiches bibliographiques sont maintenues, sections 7/7 et 9/9. Berenstain : licence CC BY-NC-ND confirmée à l'échelle de la revue par PhilArchive/Open Journals Collective, version exacte de l'article non établie ; avis complet DOI 10.3998/ergo.5640 toujours bloqué par l'accès éditeur. Les deux passes 07/29 restent BLOQUE. [Compte rendu 015 actualisé](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-30_MEDIATHEQUE_VERS_RELIEUR_TRANSMISSION_013.md), commit `8867f5737398b09288cbdc4b539a8f2da880cb49`. Aucune nouvelle PR, import réel ou modification du manifeste.
**TIS-001** : modèle de provenance complémentaire au contrat 013, sans nouvelle table ni type ; distinguer REPERE, référencement accepté, coopération convenue et contesté ; source/consultation/licence/mandat/publication distincts. Trois fiches **inventées**, 14/14 assertions JS isolées réussies contre publication automatique, coordonnées et notes privées. Zéro organisme réel, zéro contact et aucun import cartographique.
**Droits en attente** : licence précise de Berenstain à confirmer sur l'exemplaire et avis de correction complet inaccessible ; accès libre n'autorise pas adaptation. OSM ODbL (données) ≠ politique d'utilisation des tuiles ; Etalab 2.0 impose attribution et date ; CNIL rappelle le statut potentiellement personnel des données professionnelles ouvertes.
**Preuve complète** : [transmission Médiathèque 013/014 enrichie par le cycle 015](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-30_MEDIATHEQUE_VERS_RELIEUR_TRANSMISSION_013.md) commit `5cf60466a8d348c98de894359841244ad6795df0`.
**Décisions** : bibliographies candidates à revue Lecteur/Juriste ; conditions de licence et publication de fiches réelles à validation humaine ; aucune transmission automatiquement reçue dans la conversation distincte de La Relieuse.


## 2026-10-30 · Communications · Transmission 015 — 26 actions faites, 4 bloquées
Plan détaillé 015 lu. Même campagne, même paquet de lancement, aucune quatrième série. **Tableau 01–30 enregistré dans la fiche de lancement existante : 26 FAIT, 4 BLOQUE**, pas trente passes prétendument achevées. Contrôles sources : 12 JPG RGB 1080×1350 et SHA-256 conformes, 3 légendes et 12 alternatives conservées. La correction graphique 03_04 de 014 est réutilisée, pas régénérée : variante PNG 1122×1402, export final A_FAIRE. Le jeu CANDIDATS_015 utilise cette variante, l'ancien visuel trompeur reste uniquement dans ARCHIVES_013_014.

**Nouvelles preuves :** page de branche PR #41 decouvrir-initiatives.html blob e010550f765653f3adc1eaf303fc2d8992585912 ; sources de fixtures a62e44c0550efbea1414470002e43cbfb8211fe3 et 290b920a761223c41c06b9254be01ba55df0260f. Six initiatives + cinq autres objets = onze IDs uniques vérifiés, tous sous isDemo:true et simulation, publicContact:null. Ce n'est ni un annuaire réel ni une preuve d'accord. Aucun partenaire confirmé par La Tisseuse annoncé.

**Public HTTP :** accueil, Wiki, manifeste V2.5, deux articles et participer répondent 200 ; decouvrir-initiatives.html répond 404. Le chemin initiatives.html essayé d'abord répond aussi 404, mais le vrai chemin de démo a été retrouvé par lecture du test et contrôlé séparément. Ne pas annoncer une carte accessible sur le seul état de branche. Notices de non-adoption et lien vers manifeste source vérifiés. Les pages publiques des deux articles restent sans les enrichissements Young/Tebble et Berenstain/Ahmed contrôlés dans les versions candidates précédentes. Pas de test formulaire, accessibilité ou Android revendiqué.

**Metricool :** marque faille.noire retrouvée ; consultation programmations 01/10/2026–31/01/2027 Europe/Paris : data=[]. Passes 21–22 BLOQUE (brouillons/doublons), pas de relance après authentification non aboutie/refusée. Passes 18–19 BLOQUE (droits/licences des visuels), faute de dossier de provenance suffisant ; absence de métadonnées licence ne prouve rien sur les droits.

**Livrable réel :** paquet existant mis à jour sous la même identité, version 2, 65 entrées ; archive vérifiée et sources intactes. FAQ critique, accès hors ligne sans permanence inventée, séquence conditionnée au suivi et matrice prêt/approuvé/publié actualisés. Fiche de lancement enrichie ; bilan disponible pour La Relieuse, réception en conversation non présumée. Décisions : candidate et export final, provenance/licences, session Metricool et moyens volontaires de suivi. Aucune publication, programmation, prise de contact, collecte réelle, fusion ou déploiement.



## 2026-10-30 — Juriste — transmission 015 bis, trente nouvelles vérifications TIS-001

**Reprise sans duplicata :** la première transmission 015 du Juriste (30 passes) existait déjà. Une seconde consigne identique a conduit à 30 **passes complémentaires** dans le même dossier, pas à réécrire l'audit ni créer une autre Charte.

**État documentaire recontrôlé :** cadrage Tisseuse blob `81bacb34` et bilan TIS-001 blob `c448c8ac` inchangés sur `main`, **0 des 10–12 structures vérifiées dans le dernier bilan disponible**, 3 scénarios hypothétiques et 2 canevas non envoyés. PR #41 HEAD `25b19e03` fictive ; PR #44 HEAD `b08ee0b9` candidate. Dépôt Interstice public ; aucun courriel/numéro au format courant décelé dans les deux pièces TIS par contrôles lexicaux ciblés, sans exclure toute réidentification.

**Résultats nouveaux :** 30 lignes 01–30 réparties en six lots, trois grilles **pré-contact / fiche publique / coopération**, mapping fictif des trois axes `research_state`, `publication_state`, `cooperation_state`, **15/15 tests logiques fictifs indépendants** et **12/12 assertions statiques** sur les pièces et HTML. Pas de test API ni de revendication de droits réels. Consentement à publication selon méthode TIS ≠ base légale RGPD universelle ; accord fiche ≠ coopération ≠ accord d'annonce publique. Pas de label « safe », pas d'adhésion exigée, pas de refus public.

**Écritures prouvables :** [dossier juridique existant, section « Transmission 015 — Reprise complémentaire »](https://github.com/zoutiFrutti/Interstice/blob/main/propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md) commit `a8c40734dbe2d0e5d6ba1dac46f3cc899f8e2211` ; [avis Wiki, suivi 015 bis](https://github.com/zoutiFrutti/Interstice/blob/main/docs/AVIS_JURIDIQUE_PUBLICATION_WIKI_DEUX_ARTICLES_2026-10-30.md) commit `5c4be12c03d1c944a2dcc3741d5d3f255492aeb9` ; [transmission à La Relieuse et La Tisseuse](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md) commit `6d16123cc749643aeb99067845943e8e0274783f`.

**Statut :** première prise de contact, publication de fiches réelles, stockage de réponses/mandats privés et accord de partenariat **non autorisés par ce bilan** ; obtenir sources, mandats, personne responsable du suivi, canal protégé et validation humaine avant ces opérations. Aucune donnée personnelle privée collectée, aucune permission Supabase modifiée, aucune PR fusionnée, aucune publication ou Charte adoptée. **Transmission déposée ≠ accusé de réception par une autre conversation.**



## 2026-10-31 — Anarchitecte → La Relieuse — revue V0 intégrée 018-B

HEAD candidat contrôlé `69fcd4701cefeb884fdd46fc14a6ad5bbae6108a`, workflow 41128062335 : jobs Node et Chromium success. Parcours fictif, navigation, liens, formulaires sans envoi normal documentés. **Réserve nouvelle :** le mode candidat de `script.js` et `ressources.js` est débrayable côté client via `globalThis.INTERSTICE_CANDIDATE_MODE=false` avant chargement, et les branches de soumission Supabase restent embarquées. Ne pas présenter cette garde JavaScript comme sécurité pour un déploiement public. Essai extérieur **local/isolé et encadré** envisageable ; ouverture publique et données réelles non prêtes. Rapport complet `coordination/ANARCHITECTE_REVUE_V0_018B_2026-10-31.md` (commit `1775aa0f7cac0214fa70bf8ed8f27df5882f47ad`). Branche candidate inchangée, aucune fusion/déploiement, aucune modification Supabase. Dépôt GitHub de cette transmission ne prouve pas sa réception par la conversation de La Relieuse.


## 2026-10-31 — La Relieuse — consolidation 018-D et 018-C
**Réception confirmée des transmissions et vérification des sources, sans redémarrer les audits.** Assemblage initial V0 : `integration/v0-018a-candidate-2026-10-30` au SHA `69fcd4701cefeb884fdd46fc14a6ad5bbae6108a` avec 58 tests Node / 19 Chromium réussis ([CI 41128062335](https://github.com/zoutiFrutti/Interstice/actions/runs/41128062335)). Revue de L'Anarchitecte 018-B : `coordination/ANARCHITECTE_REVUE_V0_018B_2026-10-31.md` ; réserve confirmée de mode démo débrayable et d'appels Supabase embarqués.

**Correctif 018-D reçu et contrôlé** : branche intégrée toujours active, SHA **`9a56a490a3deef80a43ed83b2ff86c9f6c335b05`**, diff limité à six fichiers scripts/tests/documentation ; [CI 41176190522](https://github.com/zoutiFrutti/Interstice/actions/runs/41176190522) **SUCCESS, 59/59 Node, 20/20 Chromium** (test forçant l'ancien `INTERSTICE_CANDIDATE_MODE=false`). `script.js` et `ressources.js` à ce SHA n'ont plus de `fetch()`, référence Supabase, endpoint ni commutateur. C'est une preuve bornée aux scripts livrés : **`proposer-article.html` est une page annexe encore reliée à Supabase/CDN**, non couverte par la garantie d'absence de réseau du parcours fictif ; elle ne doit pas servir à un essai de soumission.

**Graphiste 018-C reçue** : [PR #45](https://github.com/zoutiFrutti/Interstice/pull/45), audit séparé du SHA initial `69fcd470...`, [CI 41175965649](https://github.com/zoutiFrutti/Interstice/actions/runs/41175965649) réussie, 30 états Chromium 320/390/1280 et zéro débordement horizontal. Défauts concrets de premier écran : à 320×850, bandeau d'accueil 739 px et premier CTA à 1372 px ; notice Découverte 477 px et titre à 743 px. À corriger dans l'interface avant une étude humaine visant la première compréhension, mais **pas bloquant pour un essai exploratoire local accompagné**.

**Décision de coordination : PRÊT POUR ESSAI HUMAIN LOCAL ENCADRÉ ET FICTIF**, à condition d'utiliser une copie du SHA `9a56a490...` servie sur une machine/réseau de confiance, sans soumettre de donnée personnelle ni visiter les formulaires annexes connectés ; aucune initiative réelle, aucun partenariat. **Ouverture publique de la candidate : BLOQUÉE** par la revue de l'ensemble des routes, les conditions éditoriales/juridiques et l'approbation humaine. **Validation UX formelle : en attente de 018-E**, correction minimale `index.html` et `decouvrir-initiatives.html` (mentions fictives visibles, détails réorganisés, CTA accessible dès le premier écran) ; un seul atelier écrit, La Développeuse ; La Graphiste contrôle le delta. **Relecture Anarchitecte ciblée uniquement sur 018-D** à transmettre, pas de nouvelle architecture.

**Essai matériel NON réalisé** : Android Crosscall, TalkBack, Firefox/Safari, grossissement de police et observation réelle restent à faire. Scénario proposé : « près de Gaillac, je cherche un atelier de réparation partagé », puis filtres, liste/carte, fiche, retour, participation et Wiki ; noter anonymement ce qui est compris, sans données réelles. Aucun merge, déploiement du site, donnée privée, contact à un partenaire ou publication d'initiative n'a été effectué par La Relieuse. La présence d'un message sur GitHub ne l'envoie pas à une conversation ChatGPT distincte.



---

## 2026-10-31 — Médiathèque — DROIT-001 / DROIT-002, sources et bibliographies
**Cadre :** transmission commune de La Juriste reçue dans la conversation Médiathèque, deux dossiers d'information générale sur le droit français, aucun conseil personnalisé ni publication sur site.

**Résultats et preuves :**
- [DROIT-001 : 18 ressources manifestations, contrôles, garde à vue](mediatheque/DROIT-001_BIBLIO_MANIFESTATIONS_CONTROLES_GAV_2026-10-31.md), commit `8f842b48a584abfce4f892c0baa650f9ef8eeb23`. Sources officiels CSI/CPP, Service-Public, Conseil constitutionnel, Conseil d'État, Défenseur des droits ; guides LDH et Amnesty attribués ; droits d'auteur et dates signalés.
- [DROIT-002 : 18 ressources logement, expulsions, aides](mediatheque/DROIT-002_BIBLIO_LOGEMENT_EXPULSIONS_AIDES_2026-10-31.md), commit `450c7cec4a3d99f6870b2865ba37c9c4afc6fe08`. Sources CPCE, CASF, DALO/DAHO, Service-Public, CE 2026, ANIL/ADIL, ADIL Tarn, point-justice ; pas de délai universel ni garantie de prise en charge.
- [Document commun de la Juriste](JURISTE_TRANSMISSION_COMMUNE_ACCES_AUX_DROITS_2026-10-31.md) enrichi en place, commit `0f9fd44178c90705fa1fb10a943e6211ebbba4e4`; [catalogue existant de la Médiathèque](https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit) complété puis relu.
**Réserves** : textes officiels datés vs notices vs guides d'associations, licence DILA des jeux de données / accord LDH / autorisation ANIL, jurisprudences accessibles parfois uniquement par extrait. Relecture juridique requise sur cas particuliers, textes modifiés en 2026 et dispositifs de décisions. Aucune copie intégrale de guide, aucun partenaire déclaré, aucune prise de contact, collecte personnelle, fusion ni publication de pages du site. Les conversations distinctes Juriste/Lectrice/Relieuse doivent accuser réception séparément ; le dépôt de liens ne le prouve pas.


---

## 2026-10-31 — Archiviste — arbitrage iconographie des clubs féminins

**Transmission reçue :** [Assistant Anarchiviste : dessins Vierge, Lix/Daudenarde et caricature Schérer](transmissions/2026-10-31_ASSISTANT_ANARCHIVISTE_ICONOGRAPHIE_CLUBS_FEMMES.md). **Lecture source et vérification éditoriale réellement effectuées.**
- **Dossier autonome de recherche proposé**, mais **pas** de nouvelle fiche Wiki ni publication : [rapport critique et décision candidate](transmissions/2026-10-31_ARCHIVISTE_ARBITRAGE_ICONOGRAPHIE_CLUBS_FEMMES.md), commit `1a5ddd6743b5851ea5816af75fe6e53956cd5897`.
- **Objets vérifiés sur notices Carnavalet** : Vierge D.2627, D.2628, D.2629 et **D.2626** supplémentaire ; gravure Daudenarde d'après Lix, publiée dans *Le Monde illustré* du 20 mai 1871 ; satire Schérer QB.2534-18. **CC0 affiché** seulement pour les fichiers de la gravure et de la satire ; droits des fichiers des dessins non établis. Aucun média copié.
- **Compte rendu contemporain repéré, non collationné directement** : *La Sociale* 9 mai 1871, repris par *Le Cri du peuple* 10 mai, intervention de la citoyenne Rondier et vote favorable au divorce, selon transcription et commentaire de Michèle Audin (2021). *Monde illustré* 20 mai n°736 p.315 mentionné dans Schulkind (1950), original Gallica non ouvert. Fontoulieu 1873 p.183, Gullickson 1996 p.117 et Eichner 2020 chap.5 restent à consulter directement.
- **Vérification COL-003 enregistrée dans Google Docs**, avec lecture après écriture : https://docs.google.com/document/d/1dCYjWceGFmzbR7GSAoK_r5z5OvwmT4j-ZI-NS7R4_LI/edit . Trois lieux distincts : **Saint-Germain-l'Auxerrois (club MIXTE des libres-penseurs)** ; **Saint-Ambroise (Club des prolétaires)** ; **Sainte-Marguerite (second club en relation avec celui de Saint-Ambroise)**. Ni vues des lieux ni paroles transférables de l'un à l'autre.
- **Sources de contexte** : Jacques Rougerie https://commune1871-rougerie.fr/les-femmes-de-1871,fr,8,58.html ; Eugene W. Schulkind 1950 https://www.persee.fr/doc/r1848_0765-0191_1950_num_42_185_1467 ; Michèle Audin https://macommunedeparis.com/2021/05/12/12-mai-1871-elles-prennent-la-parole-certes-mais-que-disent-elles/ .
**États** : objets primaires identifiés par notices ≠ représentation fidèle de séance ; extrait de journal cité par historienne ≠ presse de 1871 directement lue ; satire ≠ paroles attestées. Décision d'une **éventuelle publication humaine encore à solliciter**, sans changement du manifeste, gouvernance, fiche publique ni fusion. Le dépôt GitHub ne prouve pas la réception de la conversation La Relieuse.

## 2026-10-31 — La Lectrice — méthode critique DROIT-001 / DROIT-002
**Sources et périmètre** : transmission de La Juriste `coordination/JURISTE_TRANSMISSION_COMMUNE_ACCES_AUX_DROITS_2026-10-31.md`, §8, et bibliographies de La Médiathèque pour DROIT-001/002 (18+18 références). Recoupement ciblé auprès de Service-Public F21899, F1036, F32124, F14837 (manifester/contrôle/audition/GAV) et F31272, F34736, F18005, F20343, F35978, F34396 (logement). Aucune fiche future A/B/C n'a été livrée pour relecture ligne à ligne et **aucune validation juridique n'est revendiquée**.

**Écritures documentaires réalisées** : annexe L001-01 à L001-12 dans [DROIT-001 bibliographie](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/mediatheque/DROIT-001_BIBLIO_MANIFESTATIONS_CONTROLES_GAV_2026-10-31.md) (commit `0726c239`) ; L002-01 à L002-12 dans [DROIT-002 bibliographie](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/mediatheque/DROIT-002_BIBLIO_LOGEMENT_EXPULSIONS_AIDES_2026-10-31.md) (commit `9b36eb52`) ; [méthode commune §8](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/JURISTE_TRANSMISSION_COMMUNE_ACCES_AUX_DROITS_2026-10-31.md) (commit `7987bac1`). Délais à dater par acte déclencheur et exceptions ; séparer information légale, conseil pratique général, consultation personnalisée et revendication politique. Tests de compréhension avec cas **fictifs seulement** proposés, **non exécutés**.

**Objections prioritaires** : 001, déclaration d'organisateur ≠ autorisation générale, contrôle ≠ vérification/audition/GAV, prolongations possibles, avocat/médecin sous modalités et 3039 sans garantie d'urgence ; 002, six semaines de commandement de payer ≠ deux mois de commandement de quitter, trêve sans protection absolue, non-décence ≠ suspension libre du loyer, DALO/DAHO/115 sans logement garanti. **A_VERIFIER_JURISTE** pour dates, versions, exceptions, procédures et urgence ; La Relieuse coordonne seulement l'arbitrage, La Tisseuse confirme les services, la Médiathèque versionne les références, les ateliers techniques testent l'accessibilité.

**Statut :** critique documentaire candidate ; aucune création de fiche publique, collecte de pièces ou personnes, service de consultation, contact extérieur, partenariat, publication ou fusion. Écriture dans GitHub ≠ accusé de lecture par les autres conversations.


## 2026-10-31 — Anarchitecte → Développeuse et Relieuse — contrat technique accès aux droits

Transmission de La Juriste consultée sur `main` ; structure statique existante `index.html`, `wiki.html`, `participer.html`, `style.css` inspectée. Contrat minimal enregistré dans `coordination/ANARCHITECTE_CONTRAT_TECHNIQUE_ACCES_DROITS_2026-10-31.md` (commit `59db826950d7e69dec47938d860cef8bc1d5be4d`) : deux fiches DROIT-001/002 avec sections poche/détail/orientation, sources et statut/date juridique affichés, liens humains vérifiés, aucun formulaire sensible, GPS, compte, collecte, API ni backend ; protocole accessibilité 320/390/1280, clavier, sans JavaScript, impression A4/poche et limites hors connexion ; risques et critères d'arrêt. **Contrat écrit, tests navigateur non exécutés, pages non créées/publiées.** Médiathèque/Juriste/Lectrice doivent valider le fond ; Tisseuse vérifie l'aide réelle ; Relieuse organise arbitrages humains. Un dépôt GitHub ne notifie pas automatiquement les conversations de destinataires.


---

## 2026-10-31 — Archiviste — chantier candidat histoire de l’écologie et du végétarisme
**Demande reçue** : réexaminer le manque historique du pilier 5 « Écologie sociale et autonomie territoriale » : conflits écologiques, végétarisme et véganisme, raisons écologiques scientifiquement établies et limites. **Aucune proposition de nouvelle doctrine collective décidée.**
**Contrôle catalogue Médiathèque** : le pilier 5 existe, FN-002 Kropotkine y renvoie ; fonds historique jugé lacunaire, mais quelques références environnementales éparses existent. **Pas de nouvelle fiche FN créée, ni titre/numéro ancien modifié.** [Catalogue existant enrichi en place](https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit) avec références, dates, niveau réel de lecture.
**Rapport candidat créé et vérifié** : [Chronologie écologique, résistances, Reclus/Bookchin/d'Eaubonne/Chipko/Green Belt, histoire du végétarisme et véganisme, bilan scientifique alimentation](transmissions/2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md), commit `8763eb9eddbda1f67edf93b67d2aa6f620b6bb16`. Élisée Reclus texte 1901 primaire via transcription moderne ; Vegan Society et Vegetarian Society par rétrospectives institutionnelles ; Bookchin primaire par sections ; GIEC section par extrait indexé ; étude Nature Food Scarborough et al. 2023 original HTML consulté, données Royaume-Uni, effets moyens avec incertitude ; Chipko, justice environnementale, écologie coloniale et luttes paysannes inclus. **Aucun livre protégé lu intégralement ou recopié comme tel.**
**Suite à validation humaine** : travail Médiathèque/Archives sur textes primaires ; Biographies ; lecture critique sur écologie, animalisme et justice foncière ; coordination La Relieuse. Droits d'auteur, photos, traductions et reprographies à revoir pièce par pièce. Aucun nouveau Wiki public, aucun manifeste ni gouvernance modifiés, aucune fusion/contact. Dépôt GitHub ne vaut pas réception par une conversation séparée.


---

## 2026-10-31 — La Relieuse — coordination ÉCOLOGIE 001
**Décision : coordination documentaire CANDIDATE, aucun changement du manifeste ni de sa gouvernance.** À partir de la transmission source de l'Archiviste `coordination/transmissions/2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md`, de la page Wiki `wiki-ecologie-sociale-environnement.html`, du catalogue Drive Médiathèque (déjà enrichi le 31/10), du journal des Biographies et des études 39–58 du Penseur, une **[feuille de route ÉCOLOGIE 001](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUSE_FEUILLE_ROUTE_ECOLOGIE_001_2026-10-31.md)** a été enregistrée sur la branche de coordination **PR #43**. Le **pilier 5 V2.5 existe déjà** : « Écologie sociale, habitat et autonomie territoriale ».

**ÉCO-001A** histoire des luttes écologiques et conflits fonciers ; **ÉCO-001B** écologie sociale, ressources et communs ; **ÉCO-001C** histoires végétariennes/véganes et analyses scientifiques de l'alimentation. Attribution **non redondante** : Médiathèque (références et licences), Assistant de l'Anarchiviste (localiser sources primaires), Archiviste (contradictions et chronologie après index), Biographies (une fiche pilote après anti-doublon), Lectrice (contre-lecture), Penseur (objections socio-politiques), Juriste (droits/permissions ciblés), Tisseuse (repérage documentaire seulement s'il existe un besoin). Priorité aux premières preuves de Médiathèque et Assistant ; pas de quota de passes.

**Statut des huit messages : PRÉPARÉS dans la feuille de route, NON ENVOYÉS aux conversations distinctes par l'écriture GitHub.** Contrôle requis avant toute publication : sources historiques primaires/secondaires, limites des données scientifiques, contextualisation autochtone/coloniale, licences images/textes, relectures humaines et décision éditoriale. Aucun nouvel identifiant FN/BIO/ARCH par ce travail, aucun contact, partenariat, fusion de branche, déploiement ou nouveau contenu Wiki publié.

## 2026-10-31 — La Lectrice — ÉCOLOGIE 001, grille et objections historiques/sociales/scientifiques
**Travail réel** : la [proposition de l'Archiviste](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md) a été relue et enrichie **en place** d'une annexe « LECTRICE » : grille `FAIT / SOURCE / INTERPRÉTATION / OBJECTION / PROPOSITION POLITIQUE / INCERTITUDE`, **18 objections candidates ECO-L01 à ECO-L18** réparties en ÉCO-001A/B/C, trois exemples remplis (Chipko, chiffres Scarborough 2023, nucléaire et GIEC), correctifs de méthode et questions inter-ateliers. Commit source `e55ce93a878686a0db38631c7d3276b7eb34cdfc`.

**Réserves fortes** : histoire non exclusivement européenne et sans femmes « naturellement écologiques » ; Chipko mobilisation collective et droit des villageois aux forêts, conservation imposée vs droits d'usage, voix ouvrières/paysannes/autochtones/anticoloniales ; Reclus/Bookchin/d'Eaubonne comme auteurs situés ; nucléaire bas carbone selon GIEC **sans** conclure au débat social ou énergétique ; travail agricole, propriété et accès alimentaire ; éthique animale ≠ science des impacts. **Scarborough 2023 : 25,1 % DE LA VALEUR du groupe comparateur, non baisse de 25,1 %.** Les limites d'échantillon et d'ACV sont indiquées, aucune donnée scientifique réécrite.

**Transmissions effectivement écrites (aucun accusé de lecture d'une conversation séparée)** :
- [Feuille de route de La Relieuse sur branche PR #43, §7](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUSE_FEUILLE_ROUTE_ECOLOGIE_001_2026-10-31.md), commit `3108f3bb3d0e93144c3fabe3194914bd33c0cd68`.
- [Dossier des études 39–58 du Penseur](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/PENSEUR_ETUDES_39_58_CYCLE_AUTONOMIE_COMMUNS_2026-10-30.md) : note de transmission distincte de ses études, commit `d92a58d9f51a0a151702881c8436054e55a15192`.
- [Catalogue existant de la Médiathèque](https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit) : ajout d'une courte note « LA LECTRICE — ÉCOLOGIE 001 » **sur le document existant**, lue et vérifiée après écriture, sans supprimer le fonds déjà catalogué.

**Statuts** : 18 objections = **candidates** (pas 18 erreurs déjà observées), bilan historique à compléter par sources primaires locales, relecture scientifique compétente et décision humaine nécessaires. Aucune nouvelle FN/BIO, aucun nouveau Wiki, image, manifeste, fusion, contact extérieur, partenariat ou publication du site. La réception effective par Médiathèque, Penseur et Relieuse est à confirmer indépendamment des écritures GitHub/Docs.



## 2026-10-31 — Juriste — étude droits écologiques et communs

**Mission :** étude ciblée selon la [proposition documentaire écologique de l'Archiviste](transmissions/2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md), sans nouveau service juridique ni révision politique.

**Dossier créé :** [`docs/ETUDE_JURIDIQUE_DROITS_ECOLOGIQUES_ET_COMMUNS_2026-10-31.md`](https://github.com/zoutiFrutti/Interstice/blob/main/docs/ETUDE_JURIDIQUE_DROITS_ECOLOGIQUES_ET_COMMUNS_2026-10-31.md), commit `659f2d91dbb1fb9c7d81ade99665ac061c0a16b0` : Charte 2004, information et participation, Aarhus/UE, eau/forêts/terres et droits d'usage, pollutions/ICPE, agriculture/élevage et protections animales, **neuf jurisprudences numérotées et datées**, six fiches candidates ECO-DROIT-001 à 006. **Versions modifiées en août 2026** repérées pour Code environnement L.211-1 et L.411-1 et Code rural L.143-1. Sources primaires institutionnelles et limites explicitement indiquées.

**Transmission :** [`coordination/transmissions/2026-10-31_JURISTE_VERS_RELIEUSE_LECTRICE_DROITS_ECOLOGIQUES.md`](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-31_JURISTE_VERS_RELIEUSE_LECTRICE_DROITS_ECOLOGIQUES.md), commit `42c09640f5d11a9493bd87fc2db9136ffcbd14ff`, lecture croisée demandée à la Lectrice et traçabilité confiée à la Relieuse et Médiathèque. **Aucune autre conversation n'est présumée avoir reçu** cette transmission.

**Frontières :** droit opposable ≠ revendication politique ; procédure ≠ droit de veto ; protection des communs ≠ occupation ou gestion automatique d'une propriété ; protection animale ≠ abolition juridique de l'élevage. Aucun dossier individuel recueilli, demande d'autorisation déposée, PR fusionnée, Wiki publié, permission Supabase ou gouvernance modifiés ; manifeste V2.5 toujours non adopté.


---

## 2026-10-31 — La Tisseuse — ÉCO-TIS-001, dix pistes et trois études de cas

**Travail réalisé :** reprise du cadre TIS-001 et des rapports préexistants, sans annuaire concurrent. Dix initiatives documentaires candidates concernant l'agriculture et les communs fonciers, les jardins partagés, l'alimentation accessible, la réparation, les zones humides, les forêts et l'éducation écologique, de l'Occitanie au Kenya. Trois études approfondies : Les Chlorophy'liens/La Salvetat (Tarn), Société civile des terres du Larzac (Aveyron), Green Belt Movement (Kenya). Comparaison supplémentaire hors lot : Longo Maï (Alpes-de-Haute-Provence).

**Dossier source :** [ÉCO-TIS-001, fiches, sources, accès et limites](transmissions/2026-10-31_TISSEUSE_ECO_TIS_001_INITIATIVES_ET_CAS.md), déposé sur `main` ; mise à jour commit `677a4b7b44f74623802b477c280f59c53212a4a6`. Contrôle anti-doublon des noms avec le carnet privé des douze pistes TIS-001 antérieures restant à effectuer avant numérotation publique. L'écart entre 150 arbres annoncés et 120 plantés dans le bilan de décembre 2025 de La Salvetat est conservé pour distinguer annonce et réalisation.

**Transmission à examiner :** La Relieuse (raccord au pilier 5 et axes ÉCO-001A/B/C, anti-doublon), La Médiathèque (preuves historiques, droits et évaluation des impacts), La Juriste (statuts fonciers, conditions d'accès, droit d'opposition et de rectification). L'écriture du dossier n'atteste pas la réception par leurs conversations.

**Limites et interdits :** structures REPÉRÉES, services parfois seulement documentés sur les pages opérateurs, aucun accueil en temps réel confirmé. **Zéro** accord de référencement, coopération, partenariat, message extérieur, donnée personnelle privée, nouvelle catégorie cartographique, import, modification Supabase ou publication Wiki. Décisions éditoriales et humaines restant nécessaires avant toute diffusion réelle.
---

## 2026-10-31 — La Graphiste — ÉCO-001, gabarits documentaires non publiés

**Sources et vérification de reprise.** Proposition de l'Archiviste du 31/10 relue (source sur \`main\`), annexe critique Lectrice, page écologique existante \`wiki-ecologie-sociale-environnement.html\`, \`style.css\` et identités officielles \`assets/logo-faille-noire.svg\` / \`assets/logo-interstice.svg\`. Réemploi des choix de la PR #35 : Barlow Condensed / Atkinson Hyperlegible Next, contrastes, 320/390/1280 et impression. **Aucun nouveau système graphique ni rubrique Wiki.**

**Modifications réellement faites sur branche candidate seulement** : \`design/eco-001-maquettes-documentaires-2026-10-31\` depuis \`main\` au SHA \`4687b026b312fe14bc2704817cc7df78e88aa684\`. Dossier \`coordination/transmissions/2026-10-31_GRAPHISTE_ECO_001_PROPOSITION_GRAPHIQUE_DOCUMENTAIRE.md\`, maquette autonome \`coordination/maquettes/eco-001-gabarits-documentaires.html\`, contrôle \`tests/graphiste-eco001-maquette.test.mjs\` et workflow restreint \`.github/workflows/graphiste-eco001.yml\`. Formats : frise historique, fiche de lutte, biographie contextualisée sans faux portrait, comparaison scientifique avec tableau accessible. Trois axes A/B/C (luttes, communs, végétarisme/véganisme) sans nouvelle doctrine politique.

**Preuve technique :** CI spécifique [run 41184211845](https://github.com/zoutiFrutti/Interstice/actions/runs/41184211845) **completed / success, 1/1**, sur commit QA \`5e52d435866fbe601ef9bf5c3ee65b3e7a38584d\` ; largeurs Chromium 320, 390, 1280, **0 débordement global**, police corps 18/18/19px, zone du tableau défilant 650/290px à 320 et 650/360px à 390, focus visible, aucun média/API/soumission extérieure. Artefact \`graphiste-eco001-captures-a4\` avec 3 PNG et 1 PDF A4. Captures générées automatiquement ; **pas de revue humaine écran par écran, ni essai Android/TalkBack, ni contrôle scientifique des chiffres par cet atelier**.

**Sources et droits :** exemples explicitement dérivés du dossier Archiviste, jamais introduits comme résultats originaux de la Graphiste. Zéro image historique, photo, portrait généré, consultation externe de personnes ou détournement de licence. Sources primaires/non consultées et incertitudes signalées, pas d'identifiant FN/BIO/ARCH nouveau.

**Contradictions et dépendances.** \`main/assets/fonts\` n'existe pas au contrôle, alors que la PR #35 référence des WOFF2 ; les maquettes utilisent un fallback en attendant une intégration des fontes et licences. Les études scientifiques et les récits nécessitent relecture Médiathèque/Lectrice/Archiviste/Juriste, les aspects HTML/print l'avis Anarchitecte et l'arbitrage Relieuse. **Aucune publication sur site, fusion, changement Supabase, image tierce ou adoption politique.** GitHub n'est pas un accusé de réception dans les conversations distinctes.

