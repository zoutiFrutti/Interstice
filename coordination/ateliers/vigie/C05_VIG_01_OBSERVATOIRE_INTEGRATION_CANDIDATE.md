# INTERSTICE — C05-VIG-01 — Intégration de l'Observatoire des récits
Date : 2026-11-03. Destinataire : La Relieuse. Branche : atelier/vigie-cycle0-20261101. Statut : proposition P1 non publiée.

## 1. Antériorité interne vérifiée
- R1_VIG_OBSERVATOIRE_RECITS_CANDIDAT.md : blob 9f24fb38b905bb1b00c97070cdac768e5f64eab8.
- C16_SELECTION_DOCUMENTAIRE_DROITS_20261102.md : blob dcbc3b84cba78f3d8c1a9995e95f69df43c380c0.
- REGLE_ORIGINALITE_ET_PROFONDEUR_EDITORIALE.md : blob c1f09dd28a5ac3f4797c7f409a2b24192be976be.
- Numéro 000 V5 : blob 6de22cbd3d4dc15fb6e0a467b95c4a388e917bb9.
Ces documents sont des candidats ; aucune intégration dans main présumée.

## 2. Position architecturale
L'Observatoire est une **fonction transversale** de veille, critique des récits et mise en relation, non une cinquième porte. Les notices restent dans les portes existantes : Encyclopédie (contexte), Carte (lieux et luttes), Médiathèque (enquêtes, médias, œuvres), Parcours (enchaînements pédagogiques). La Vigie peut produire un article autonome uniquement après validation éditoriale. Le modèle Resource/SourceRef/Relation de R1 reste la base ; NarrativeClaim est une couche documentaire facultative, pas une nouvelle base indépendante.

## 3. Typologie contrôlable
- Information : fait ou annonce datée, auteur et origine identifiés ; ne pas confondre annonce et réalisation.
- Enquête : méthode de collecte et vérification explicites, documents et contradictoire si pertinent ; attribution au média auteur.
- Opinion : jugement normatif attribué à son auteur, jamais déguisé en constat.
- Analyse : raisonnement interprétatif avec prémisses et limites ; peut être engagé sans déformer les faits.
- Controverse : propositions réellement opposées, désaccord qualifié et poids des preuves évalué ; pas de symétrie automatique.
- Témoignage : source située, consentement et contexte ; ne suffit pas toujours à généraliser.
- Source primaire : jugement, texte normatif, archive, document d'origine ; son existence ne garantit pas l'exactitude de toutes les affirmations qu'il contient.
Chaque entrée porte : URL canonique, titre, auteur, date de publication, date de consultation, type, preuve, droits, état de vérification, correctif éventuel et historique de versions.

## 4. Matrice des relations candidates
| Départ | Destination | Nature | Niveau de preuve | Réserve |
|---|---|---|---|---|
| Actualités A69 | Décisions TA 27/02/2025, CAA 28/05/2025, CE 29/06/2026 | étayé par décisions institutionnelles à recoller | R2 candidat | dates/portées à contrôler sur originaux |
| A69 (Tarn) | Carte des luttes territoriales | localisation géographique | R1 candidat | pas de partenariat ni activité actuelle présumés |
| A69 | Sivens | comparaison de mécanismes de décision et maintien de l'ordre | R0 hypothèse | ne pas assimiler deux conflits |
| A69 | Enquêtes Mediacités sur indemnité et tarifs | antériorité et renvoi | R1 candidat | auteurs individuels et pièces à contrôler |
| Droits manifestation | CSI L211-1 et L211-2 | source normative | R2 candidat | relecture Juriste, autres textes requis pour guide complet |
| Médiathèque | Acrimed / Le Monde diplomatique, cartographie des médias | ressource externe | R1 candidat | pas de copie de carte sans droits |
| Communes / autogestion | ASSO-007/008, ARCH-005/006, COL-003 | lien historique à instruire | R0 | identifiants, sources et doublons à confirmer avec Archéologue et Médiathèque |

R0 hypothèse, R1 lien documentaire candidat, R2 pièce explicite contrôlable ; ne pas attribuer R3 sans preuve directe et relecture.

## 5. Non-redondance et fausse équivalence
Avant tout article : recherche d'antériorité média, Interstice et Wikipédia, avec date, auteur, angle, URL et apport inédit formulé en une phrase. Si l'enquête existe déjà, lien critique ou synthèse sourcée plutôt que réécriture. Les désaccords doivent présenter la qualité et l'indépendance des preuves ; une affirmation démentie par un jugement ne reçoit pas un poids identique à ce jugement sous prétexte de pluralisme. Les citations militantes sont attribuées et les réponses institutionnelles distinguées de leurs effets observés.

## 6. Maintenance et corrections
- checked_at et review_due_at obligatoires pour les fiches sensibles ; événement en cours : contrôle avant chaque publication ; textes juridiques : vérification de la version en vigueur ; archives historiques : contrôle à chaque ajout de source.
- Correction visible : date, version, passage rectifié, source de la correction, portée sur les relations, responsable éditorial ; conserver trace de l'ancienne version.
- Lien cassé : chercher URL canonique ou archive autorisée, ne pas prétendre avoir vérifié la page.
- Dépublication/retrait : décision humaine et avis Juriste si nécessaire.

## 7. Droits et images
C16 bloque toutes les images illustratives du numéro zéro faute de licence individuelle, auteur, droits à l'image et EXIF vérifiés. CC BY/CC BY-SA exigent crédits et indication des adaptations ; les licences ND posent problème pour le floutage. Aucun fichier visuel autorisé à republier dans cette passe. Préférer liens externes et placeholders neutres.

## 8. Répartition et livrables
- Médiathèque : index des enquêtes et œuvres, crédits/licences, accès.
- Tisseuse : lieux et luttes sourcés, sans partenariat supposé.
- Lectrice : contrôle des faits, attribution et antériorité.
- Juriste : données personnelles, droit à l'image, droit de citation, droit en manifestation.
- Éclaireuse : hypothèses et lacunes, sans validation automatique.
- Anarchitecte : IDs/relations dans le graphe commun.
- Relieuse : arbitrages et transmissions ; aucune publication implicite.

## 9. Contrôles exécutés et limites
Effectué : lecture GitHub de trois documents candidats, confrontation à la règle R1 et à la matrice des relations ; production d'une proposition sans écraser les anciens travaux.
Non effectué : vérification web exhaustive de chaque source, tests techniques, contrôle de licences de photos individuelles, audit de toutes les PR, validation juridique.
Statuts : TERMINÉ documentaire (proposition et typologie) ; À POURSUIVRE (contrôles d'antériorité, auteurs, liens, IDs) ; BLOQUÉ (images et textes sensibles non validés) ; DÉCISION ZOUT (adoption de l'architecture éditoriale et publication).
Aucune fusion, publication, diffusion ni contact externe.
