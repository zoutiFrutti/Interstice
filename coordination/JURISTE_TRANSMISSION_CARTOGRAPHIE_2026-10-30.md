# Interstice · Transmission juridique inter-ateliers


> **RECTIFICATIF ORGANISATION 012 (30 octobre 2026)** : la mention historique « L'Organisateur » dans ce document **ne désigne aucun atelier actif**. Les questions de scénarios de coopération, organisation pratique, participation hors ligne, moyens humains et expérimentation sont désormais **à adresser au Relieur**, qui coordonne sans pouvoir politique. Les mentions d'origine ci-dessous restent en place pour la traçabilité. Référence : `coordination/RELIEUR_CLARIFICATION_ORGANISATION_2026-10-30.md`. Cette rectification n'adopte aucune règle collective.## Cartographie des communs et participation citoyenne · 30 octobre 2026

**Émetteur :** Atelier du Juriste.
**Destinataires pour relecture :** Développeur, Anarchitecte, Organisateur, Penseur, Relieur. **La présente transmission est déposée sur GitHub ; sa lecture par les autres ateliers n'est pas attestée.**
**Statut :** analyse et propositions, **aucune adoption collective**, aucun changement du manifeste V2.5 ni de la charte constitutive.

### Documents de travail publiés

- [A · Risques juridiques et garanties de lancement](https://github.com/zoutiFrutti/Interstice/blob/main/docs/ETUDE_JURIDIQUE_CARTOGRAPHIE_INTERSTICE_RISQUES_2026-10-30.md)
- [B · Fiches, publication, correction, modération, recours et pratiques descriptives](https://github.com/zoutiFrutti/Interstice/blob/main/propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md)
- [Référence éditoriale V2.5 non adoptée](https://docs.google.com/document/d/1hvs1qcQouyEPnP0met4Ch_FusSHTKS9tkKaY2WWSotk/edit)

### Ce qui existe réellement (contrôle en lecture seule)

- Sur GitHub `main` : formulaire `index.html` de besoins et ressources, `proposer-article.html`, `moderation.html`, `charte-contributions-wiki.html`, `docs/AUDIT_CONTRIBUTIONS_SUPABASE_2026-10-29.md`.
- **Supabase Interstice**, projet `rpqiwxkaiyokmxbhxfvh`, lecture de la structure de `public` le 30 octobre 2026 : sept tables vues, RLS activée dans la métadonnée retournée : `proposals`, `submission_limits`, `moderation_events`, `moderator_accounts`, `resource_submissions`, `wiki_article_submissions`, `wiki_article_review_log`.
- **Aucune table de cartographie ou fiche d'initiative dédiée** n'apparaît dans cette liste de tables `public`. Cela **n'exclut pas** un autre schéma, une branche non fusionnée, un autre dépôt ou une architecture en discussion ; aucune carte de production n'est affirmée.
- Le formulaire Wiki utilise une connexion e-mail et une RPC ; les propositions générales du site ne nécessitent pas cette même authentification. Une future carte ne doit pas présumer que ces parcours sont des solutions de sécurité transférables.
- La lecture des tables et du code n'est **pas** un test de fuite, d'accès anonyme réel ni un audit de conformité complet. Aucune donnée privée, ligne d'utilisateur ou secret n'a été lu ou publié.

### Décisions qui doivent précéder toute implémentation

**Pour le Développeur :**
1. Définir modèle de données avec séparation réelle public/privé : entité initiative, contribution et provenance, revendication, localisation publique volontaire, coordonnées internes exceptionnelles, révisions, recours, licences. Les coordonnées exactes protégées ne doivent pas être accessibles par une vue API publique.
2. Tester au niveau API et base que le rôle public ne peut lire que les fiches et lieux autorisés. RLS, contrôles de fonction, vues `security_invoker` le cas échéant, permissions et accès aux objets stockés doivent être vérifiés, pas simplement supposés.
3. Implémenter correction et suppression des données personnelles dans les copies, historique, images/EXIF, géocodage, caches et exports sans promettre un effacement immédiat là où il dépend de tiers.
4. Prévoir recherche par commune, sans localisation mobile obligatoire, et consultation/contribution par site. Pas de décision automatisée de « conformité politique ».
5. Aucun code à déployer à partir de cette note sans revue du schéma, modèle d'autorisation et tests.

**Pour l'Anarchitecte :**
1. Dessiner quatre états de localisation : non localisé, zone approximative, lieu public de rendez-vous, adresse d'activité publique justifiée.
2. Trois couches UI séparées : référence factuelle, informations sourcées, pratiques autodéclarées. Aucune couleur de « bon/mauvais collectif ».
3. Parcours de revendication, de correction, de signalement et de recours accessible y compris pour non-membres ; prévention des abus et des faux représentants.
4. Vérifier effets indirects d'une carte : localisation par croisement d'informations, rareté géographique, visibilité d'un collectif sensible même sans point précis.

**Pour l'Organisateur :**
1. Identifier qui portera juridiquement la plateforme et décidera des finalités des données ; rôles des partenaires et sous-traitants.
2. Prévoir des personnes habilitées à traiter les urgences, avec conflits d'intérêts, remplaçants et contrôles. Ne pas fabriquer un conseil disciplinaire omnipotent.
3. Prévoir un **canal hors application** proportionné aux moyens disponibles et une voie indépendante pour une initiative refusant de devenir membre.
4. Fixer les responsabilités de l'organisateur réel pour chaque rencontre, activité physique, espace d'accueil ou prêt de matériel, sans transformer tout référencement en prestation d'Interstice.

**Pour le Penseur :**
1. Discuter la différence entre découverte large et approbation philosophique : référencement ≠ validation ≠ adhésion.
2. Évaluer le risque qu'une liste de pratiques filtrables devienne progressivement une notation morale ou un outil d'exclusion politique.
3. Tester si la charte descriptive facultative pourrait être capturée par les personnes les plus visibles ou les plus disponibles.

**Pour le Relieur :**
1. Conserver les deux dossiers et la présente transmission avec liens ; signaler les divergences avec les travaux techniques et les ateliers déjà existants.
2. Rappeler qu'aucun texte n'est adopté, que le manifeste V2.5 n'a pas été modifié, et qu'aucune application géographique n'a été déployée par cette étude.
3. Éviter les doublons de protocoles avec la charte éditoriale du Wiki et les travaux de modération existants.

### Questions requérant vote collectif ou avis spécialisé

**Décision collective :** périmètre des initiatives admissibles, qui peut publier et revendique une fiche, schéma de contrôle des pratiques volontaires, organisation des recours, modèle de participation hors ligne, gouvernance des données, public visé et risques acceptables.

**Avis spécialisé avant extension :** bases légales et traitements sensibles RGPD, AIPD potentielle, qualification DSA (hébergeur ou plateforme), obligations relatives aux mineurs et lieux d'accueil, licences et fusion de bases ODbL, conditions d'organisation réelle de rencontres, droit d'auteur sur images et textes.

**Seuil de lancement recommandé :** fiches publiques non sensibles, informations factuelles et sources, recherche par zone, procédure de signalement opérationnelle et droits RGPD réellement exercables ; report des coordonnées privées, rencontres garanties, évaluations de personnes, réservations et messagerie privée.

### Traçabilité et limite de coordination

Cette transmission sert de message **à récupérer ou relier** par les autres ateliers. Elle ne prouve pas qu'une conversation séparée l'a reçue. Aucun changement produit sur Supabase, le site public, les pages de la charte constitutive, les statuts ou le manifeste. Les propositions sont réversibles et attendent une décision collective appropriée.

---

## Transmission 013 — Bilan des dix passes ciblées au Relieur · 30 octobre 2026

**Rôle :** le Relieur centralise coordination et organisation pratique, **sans pouvoir politique ni responsabilité RGPD automatique**. Pas d'atelier Organisateur. Transmissions anciennes conservées comme archives. **Statut : recommandations non adoptées**, pas d'autorisation de déploiement.

### Sources et preuves effectivement vérifiées

- Transmission 013 : `coordination/RELIEUR_TRANSMISSION_013_CARTES_COMMUNS_POSSIBLES_PRIORITES_2026-10-30.md`.
- Dossiers du Juriste **réutilisés et enrichis** (aucune création de dossier concurrent) :
  - [Risques et licence des fonds, niveaux L0–L3](https://github.com/zoutiFrutti/Interstice/blob/main/docs/ETUDE_JURIDIQUE_CARTOGRAPHIE_INTERSTICE_RISQUES_2026-10-30.md), ajout du 30 octobre, commit `8ae055d168b23c310e88cd1e12cd3e8cc6c68088`.
  - [Droits des fiches, recours, cahier de garanties F1–F10 / R1–R10](https://github.com/zoutiFrutti/Interstice/blob/main/propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md), compléments commits `11a3aeb130883e8db353651ab3d88b84f9de8a16` et `b8f0d390354cfea4734d87cc1cd0c4c54bfe6095`.
- [PR #41](https://github.com/zoutiFrutti/Interstice/pull/41) : branche `feat/initiatives-decouverte-mobile-2026-10-30`, HEAD relevé `d45d2cba40ba0f1e89000888820e3ac2f490b21e` ; ouverte en brouillon, non fusionnée. **15 assertions statiques ciblées / 15 observées** dans les fichiers de démo, **aucun test navigateur/Android exécuté par le Juriste**. Les six fiches, lieux de recherche, besoins et offres sont fictifs ; les communes de Tarn citées sont géographiquement réelles, pas les initiatives.
- [PR #44](https://github.com/zoutiFrutti/Interstice/pull/44) : branche `atelier-lecteur/correction-deux-pages-20261030`, HEAD `bec3db6ff462963ae7c85faa0055ad9a1f92c54b` ; non fusionnée. Correction d'ordre des sections constatée, mais réserves juridiques encore ouvertes (lignes 46 et 16). [Avis Wiki mis à jour](https://github.com/zoutiFrutti/Interstice/blob/main/docs/AVIS_JURIDIQUE_PUBLICATION_WIKI_DEUX_ARTICLES_2026-10-30.md), commit `91b0558a24315cea0af65ca86016a67246912b42`.
- Licences et politiques réexaminées directement : [OSM ODbL](https://www.openstreetmap.org/copyright), [OSMF Tile Usage](https://operations.osmfoundation.org/policies/tiles/), [Nominatim](https://operations.osmfoundation.org/policies/nominatim/), [OSM France](https://www.openstreetmap.fr/usage/), [Etalab 2.0](https://www.data.gouv.fr/pages/legal/licences/etalab-2-0), [CNIL annuaires](https://www.cnil.fr/fr/reutilisation-de-donnees-par-des-annuaires-en-ligne-quels-droits-pour-les-professionnels-concernes).

### Tableau de dix passes : action et livrable vérifiable

| # | Action effective | Critères / résultat |
|---|---|---|
| 1 | Contrôle du code de démo et garanties actuelles | 15 assertions statiques ciblées, 15 propriétés observées ; fictif, pas de contact réel détecté ; limites de preuve documentées |
| 2 | Partition public/privé/jamais collecté | Tableau de données avec test négatif `J013-02` |
| 3 | Définition des quatre niveaux de localisation | L0 aucun point ; L1 commune/zone indicative ; L2 lieu public de rendez-vous ; L3 adresse publique justifiée, tests `J013-03` à `J013-06` |
| 4 | Analyse des lieux sensibles et risque de recoupement | Tests `J013-07` à `J013-10`, bascule vers L0 si nécessaire |
| 5 | Référencement indépendant de la Charte | Trois critères séparés : admissibilité, degré documentaire, pratiques volontaires ; `J013-12` |
| 6 | Matrice de pouvoir sur une fiche | Contributeur, initiative habilitée, auteur, personne identifiable, modérateur, Relieur ; `J013-13` |
| 7 | Circuit de correction/masquage/recours | Cinq scénarios `J013-14` à `J013-18` ; pas de canal RGPD fictif |
| 8 | Contrôle séparé licences des données et service de tuiles | ODbL, Etalab, OSMF tuiles, OSM France et Nominatim ; matrice fournisseur `J013-11` |
| 9 | Différence entre annuaire et activité organisée | Tableau de responsabilités + deux cas fictifs `J013-19` et `J013-20` |
| 10 | Critères opérationnels de livraison | **F1–F10 pour fiction** et **R1–R10 avant données réelles**, avec fonctions reportables explicites |

**Ces dix passes sont dix vérifications, distinctions et ajouts documentaires ciblés, non dix exécutions de tests de production.** Les tests `J013-xx` sont **spécifiés**, pas tous exécutés : l'Anarchitecte et la Développeuse les implémenteront/vérifieront sur leurs branches.

### Décision recommandée au Relieur

**Démo fictive :** le développement peut être préparé sans personne responsable de traitement de fiches réelles puisque la version demandée ne doit pas collecter de données personnelles réelles ; ne rien ajouter qui collecte effectivement des contacts, adresses, positions GPS ou témoignages réels. Contrôler toujours les traitements techniques, journaux, prestataires ou traceurs introduits par un éventuel fond de carte réel.

**Ouverture réelle :** blocages **R1–R5** avant toute publication d'initiatives et de coordonnées personnelles réelles : responsable RGPD et bases légales, contrôle technique des accès API/RLS, localisations L0–L3 et lieux sensibles, vérification des droits de référencement, canal de correction/recours. R6–R8 conditionnels selon les services choisis ; R9–R10 à arbitrer collectivement.

**Dépendances :** Anarchitecte définit le contrat affichage/public/privé ; Développeuse conserve PR #41 et teste liste/carte/export/absence de fuite sur fixtures ; Graphiste contrôle lisibilité mobile ; Relieur organise scenarios humains, moyens de contact et arbitrages ; Lecteur/Médiathèque poursuivent les deux pages Wiki #44. Aucun des ateliers n'est présumé avoir reçu la transmission dans une autre conversation.

**Aucune modification de permissions Supabase, migration, code du prototype, HTML Wiki, fusion, publication, ni adoption du Manifeste V2.5.** Le dépôt de ce bilan est une transmission documentaire.

---

## Transmission 014 — Bilan Juriste, vingt passes et avis éditorial · 30 octobre 2026

**Destinataire documentaire : Relieur.** La Juriste a repris les dossiers existants, sans nouvel audit général ni atelier « Organisateur ». Le Relieur coordonne sans pouvoir politique. **Aucun changement Supabase, aucune collecte réelle, aucune fusion ni publication.**

### Point de départ et preuves

- [PR #41](https://github.com/zoutiFrutti/Interstice/pull/41) : HEAD vérifié `a59268357812d730f95b4cbad75275e4ac4d9e57`, ouverte en brouillon, 11 objets fictifs et deux cartes SVG ; 7 `communs` et 4 `possibles` ; quatre types `initiative`, `ressource`, `besoin`, `projet`. [GitHub Actions #41099508020](https://github.com/zoutiFrutti/Interstice/actions/runs/41099508020) **réellement réussie sur ce SHA** : jobs `test-core` et `browser-mobile`, 38 déclarations `test` Node et 8 tests Chromium dans les fichiers source. Tests de fuite d'export avec champs sensibles fictifs, exclusion des objets non fictifs, repères communaux distincts des fiches, carte/liste et mode sans carte couverts. **Cela ne constitue pas un audit de sécurité d'une API réelle.**
- Les ancres `COMMUNE_ANCHORS` sont **des points de communes réelles**, non des géolocalisations d'initiatives. Une précision lat/lon existe pour ces **communes** ; aucune position exacte d'habitation ou d'activité fictive dans les objets. Un objet sans commune est retenu en liste et omis des marqueurs selon test ; libellé vide sur sa fiche possible, à corriger avant vitrine.
- Le SVG est une grille et des marqueurs fabriqués par `cartes-map.mjs`, sans fond externe ni serveur de tuiles. `README.md` précise qu'une licence libre définitive **n'est pas adoptée**. Conditions ODbL/fournisseur de tuiles à réexaminer uniquement si un fond OSM est ajouté.

### Exécution des 20 passes

**Matrice de travail vérifiée :** [`propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md`](https://github.com/zoutiFrutti/Interstice/blob/main/propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md), section **« Transmission 014 — Matrice juridique de 20 passes »** (commit `c9127134987038779c8ee1f6ed1c8e2dea3e5688`).

| Passes | Travaux effectivement accomplis | Situation |
|---|---|---|
| **01–03** | État HEAD, confrontation F1–F10, consultation GitHub Actions et fichiers de tests | **FAIT** : CI verte prouvée, pas de validation sécurité générale |
| **04–08** | Repères géographiques, champs publics/exports, sans localisation, libellés de simulation et risque de faux référencement | **FAIT** : contrôles de code et limites de fiction ; revue de nom réel à venir |
| **09–13** | Auteur ≠ représentant habilité, usurpation, correction, contestation et lieux sensibles | **FAIT** : cinq scénarios et critères de tests proposés ; **NON EXÉCUTABLES** en produit sans backend réel |
| **14–15** | Dessin SVG, licences et absence de rencontre promise | **FAIT** sur les fichiers de la PR, pas de fond fournisseur réel |
| **16–18** | Relecture juridique des pages Wiki de PR #44 et **correction effective dans la branche** | **FAIT**, commits `db65145cc77d69272fb6b3d1d92c70e452412a21` et `6be7842f368484165c5baf052f7ecd18e0f52fc4` |
| **19–20** | Dissociation démo fictive / conditions R1–R10, matrice de 7 tests supplémentaires et avis final | **FAIT**, documents modifiés et vérifiés |

### Deux corrections éditoriales réalisées sur PR #44

- `wiki-decision-collective.html:46` : abandon de « leur droit à être informées, contester et participer » au profit d'une distinction entre information, contestation et participation, sans droit de vote général fictif. `:44` : possibilité de ne pas exposer sa vie privée, pas droit procédural universel. `:57–58` : correction **documentaire non sensible** seulement, avertissement contre GitHub public.
- `wiki-lecture-croisee-travail-soin-pouvoir.html:7,16` : pas de fichier nominatif sur santé/handicap ; le formulaire de contribution ne se prétend pas canal privé. **Aucun canal RGPD réellement créé.**
- [Avis juridique Wiki mis à jour](https://github.com/zoutiFrutti/Interstice/blob/main/docs/AVIS_JURIDIQUE_PUBLICATION_WIKI_DEUX_ARTICLES_2026-10-30.md) (commit `c987b0c0836cbb0098f1a6f0f2270c54807769ad`). PR #44 reste **ouverte en brouillon, non fusionnée** après les deux corrections.

### Classement et dépendances

**BLOQUANT pour ouvrir à de vraies initiatives ou contacts :** R1–R5, responsables RGPD et bases légales, autorisations du backend testées, absence de diffusion de domiciles et lieux sensibles, source et licéité du référencement, canal de rectification/masquage/recours réellement opérationnel. Une whitelist dans l'export ne garantit pas l'absence de champs secrets déjà livrés au JavaScript client. **R6–R8 conditionnels** selon DSA, fonds/accès à des données tierces et organisation réelle de rencontres ; **R9–R10** nécessitent décisions humaines.

**RECOMMANDÉ avant éventuelle vitrine fictive :** éviter l'expression « communes fictives » pour des points correspondant à des communes réelles ; prévoir un rendu explicite « localisation non publiée » si `territories:[]` ; conserver le bandeau fictif dans toutes les vues et exports et contrôler l'absence de noms risquant d'être confondus avec des collectifs existants ; revue mobile et lisibilité par le Graphiste.

**ULTÉRIEUR :** comptes et mandats réels, interface de revendication, cas de signalement et de retrait, éventuelle AIPD, réutilisation de données externes et contrats d'événements, **sans ralentir le prototype purement fictif**.

**Pour l'Anarchitecte et la Développeuse :** tests `J014-T01` à `J014-T07` dans la matrice ; `J014-T02` relève de la lisibilité de la fiche sans localisation, `J014-T01` doit tester **la réponse publique totale et les bundles**, pas seulement le JSON téléchargé. Le développement de la PR #41 appartient à leur domaine ; pas de correctif imposé par le Juriste sur cette branche.

**Pour le Lecteur, la Médiathèque et le Graphiste :** les erreurs juridiques textuelles ciblées de PR #44 sont amendées, mais relecture des ouvrages/licences, tests navigateur et décision éditoriale restent en cours. Ne pas présenter les deux textes comme validés collectivement ou publiés.

**Preuve de transmission :** présente note GitHub, à relier au `coordination/JOURNAL_COMMUN.md`. Son dépôt ne prouve pas la réception dans la conversation du Relieur. Le manifeste V2.5 reste une référence éditoriale non adoptée.

