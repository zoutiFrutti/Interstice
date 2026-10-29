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
