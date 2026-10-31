# Première édition : circuit technique à visa (candidat non publié)

## Constats au 31 octobre 2026
- **0 contenu admissible** : le registre pré-sortie de la PR #43 n'attribue aucun visa explicite de Zout aux 44 fiches Drive, 71 notices FN et 24 pages Wiki. La responsabilité éditoriale générale n'équivaut pas à une approbation de chaque texte.
- Registre source : coordination/ateliers/registre_editorial_pre_sortie_2026-10-31.json sur coordination/relieur-pilote-10-passes-20261030, blob d36264ba5d6882bb1589fd7fa863d26f97fa4405.
- Snapshot edition-premiere/inventaire-snapshot.json : **copie technique réduite, non source canonique** ; à régénérer sous contrôle de La Relieuse après de nouvelles décisions, sans perdre les IDs.
- main au moment de la préparation : c0d4089a7bc614881dad3b2229b3ff9bcc07742d.
- Design : deux CSS existants sur design/fiches-premiere-edition-contrat-2026-10-31, repris sans dupliquer les styles ni refaire les maquettes.
- V0 018-D : intégration existante SHA 9a56a490a3deef80a43ed83b2ff86c9f6c335b05 ; CI 41176190522, Node 59/59, Chromium 20/20. **018-E reste en attente selon JOURNAL_COMMUN.md : aucune nouvelle CI/branche 018-E validée constatée.** La correction UX premier écran ne doit pas être confondue avec la présente mission.

## Lots admissibles et exclusions
- L1 : pages Wiki déjà en ligne (24) : ne jamais recopier une page existante ; un visa cible son chemin et son Git blob exact, la candidate ne produit qu'un lien vers l'original.
- L2 : BIO 22, ASSO 8, ARCH 8, COL 2, EXP 4 (44) : seules les versions intégrales relues et normalisées peuvent entrer, avec source/document SHA-256 figé.
- L3 : FN-001 à FN-071 : notices bibliographiques et **liens vers les œuvres**, pas reproduction de médias. Deux paires de doublons à trancher par la Médiathèque (FN-022/FN-048 et FN-038/FN-057), sans renuméroter.
- L4 : droits et écologie : hors registre actuel, aucune autorisation ni intégration.

## Verrou éditorial
Le générateur scripts/build-premiere-edition.mjs exige deux confirmations concordantes : approval=ACCORD_EDITO_ZOUT dans le snapshot issu du registre source, puis une ligne personnelle autorisée dans edition-premiere/decisions.json avec authorization=ACCORD_EDITO_ZOUT. Elle indique type, source_sha256/ source_blob_sha, les trois références de relecture, décision Zout, date de vérification, statut des droits et no_media=true. Si un document manque, qu'un droit n'est pas établi, qu'une version a changé ou qu'un identifiant est dupliqué : **arrêt avec erreur**.

Chaque futur document source doit être un JSON de travail versionné sous edition-premiere/dossiers/ID.json, avec id, kind, title, version, media:[], sources (id, titre, date, niveau effectivement lu, droits, crédit, URL sûre), blocks typés (fait, interprétation, proposition, incertitude, témoignage, source_ids), related_ids et contradictions. Le contenu est rendu en texte HTML échappé ; aucun HTML éditorial brut ne s'exécute.

Une relation vers un ID inventorié mais non autorisé apparaît comme **lien non résolu**, jamais lien factice. Le formulaire de recherche filtre uniquement les fiches admises déjà embarquées dans la page, sans appel réseau.

## Tester
À la racine du dépôt candidat :

    node --test tests/edition-premiere-circuit.test.mjs
    node scripts/build-premiere-edition.mjs
    python3 -m http.server 8000 --bind 127.0.0.1

Puis ouvrir : http://127.0.0.1:8000/artifacts/edition-premiere-preview/index.html

Tests navigateur après installation de Playwright 1.56.1 :

    node --test tests/edition-premiere-circuit.browser.test.mjs

La sortie est uniquement un **artefact local** dans artifacts/edition-premiere-preview/ ; elle n'ajoute aucun lien au Wiki en ligne. Les documents et décisions du cas positif dans les tests Node sont **entièrement fictifs et temporaires**. Le lot réel demeure vide.

## Test, lots et retour arrière
Chaque lot doit être un commit séparé avec sources, visas, révision vérifiée, tests sur SHA exact et retour possible à l'état précédent. L'aperçu local peut être effacé puis reconstruit ; aucun commit de publication n'est créé par le générateur. Pour revenir en arrière sur la candidate, ne pas fusionner le commit de lot ou annuler ce commit sans réécrire l'historique des branches sources.

## Manques techniques constatés, sans nouveau module
- La Lectrice signale un lien mort vers wiki-mutualiser-materiel.html dans le Wiki existant ; ne pas créer une fausse fiche pour combler le lien.
- Le champ de recherche wiki.html consulte Wikipédia et ne constitue pas une recherche dans les fiches internes : un filtre local est prévu dans l'aperçu, mais pas d'intégration publique sans lot validé.
- Risques V0 distincts : UX 018-E, formulaire annexe connecté, tests Android/TalkBack, vérifications juridiques et éditoriales spécialisées.

## Interdits
Pas de merge sur main, publication, import automatique de fichiers Drive, exposition de personnes, reproduction de médias protégés, changement de Supabase, RLS, migration, permission, nouveau service ou formulaire de collecte.
