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
