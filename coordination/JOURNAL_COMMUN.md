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
