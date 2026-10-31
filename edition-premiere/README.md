# Première édition : circuit technique à visa (candidat non publié)

## Constats au 31 octobre 2026
- **2 visas éditoriaux ARCH-002/007 enregistrés mais 0 contenu admissible** : le registre pré-sortie de la PR #43 n'attribue aucun visa explicite de Zout aux 44 fiches Drive, 71 notices FN et 24 pages Wiki. La responsabilité éditoriale générale n'équivaut pas à une approbation de chaque texte.
- Registre source : coordination/ateliers/registre_editorial_pre_sortie_2026-10-31.json sur coordination/relieur-pilote-10-passes-20261030, blob 49e749cf0ec3116f63a28651a97784de4ac2c633.
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

## Cinq passes techniques (31 octobre 2026)
1. **P0 Wiki :** neuf pages exactes reprises de la branche de La Lectrice (aucune réécriture), dont les versions enrichies de PR #44 ; risques juridiques et humains toujours soumis à l'avis spécialisé. La page proposer-article.html est remplacée dans cette seule candidate par une explication statique sans authentification ni formulaire ni réception.
2. **V0 018-E :** réutilisation des scripts, onze exemples, deux lectures cartographiques et tests du prototype 018-D, avec repositionnement de l'avertissement long derrière les premières actions. Les avertissements courts « fictif » et « aucun envoi » restent visibles.
3. **Recherche / navigation :** les 24 pages déjà présentes sont trouvables par filtre local (nom et mots-clés), même liste visible sans JavaScript, sans indexer les dossiers non autorisés. Lien inexistant wiki-mutualiser-materiel.html désactivé et indiqué comme fiche à venir.
4. **Archives :** ARCH-002/007, source Markdown originale exact blob, identifiants conservés ; visas explicites et provenance repris dans edition-premiere/archives-en-attente.json. Le registre indique encore rights_final=A_VERIFIER et publication_authorized=false. Le générateur refuse ces dossiers tant que droit et version exacts ne sont pas confirmés. Les candidatures écologiques/politiques sans visa individuel restent absentes.
5. **QA :** suite renforcée avec tests statiques des neuf blobs, liens locaux, double verrou, aucun envoi, premier écran, recherche, clavier, 320/390/1280 et regressions V0 ; résultat GitHub Actions sur le SHA final faisant foi. Retour arrière possible par annulation des commits de la candidate, sans toucher aux branches sources.

**Attention :** les neuf corrections sont des versions candidates, pas une revue juridique finale. Le fait que ces pages soient déjà présentes sur le site public ne constitue pas une validation de première édition.

## Résultat de la première QA élargie
La suite initiale des cinq passes a constaté **73/74 tests Node réussis** ; le seul échec était une assertion de **comptage figé des paragraphes** datant de l'intégration 018-A. Les versions éditoriales corrigées comptent désormais **26 et 23 paragraphes** (au lieu de 24 et 21) et conservaient leurs sommaires. L'assertion a été actualisée pour s'aligner sur les contenus de La Lectrice, sans modifier ceux-ci. Le job Chromium initial des cinq passes a réussi. Seule la CI du nouveau SHA atteste du verdict final.

**Frontière :** pas de garantie de publication/visas de droits. Les neuf pages sont des versions de travail proposées par La Lectrice, pas neuf approvals. Le canal public proposer-article demeure coupé sur cette branche. La vérification des mentions légales de l'éditeur réel et des pages annexes, ainsi que les essais physiques Android/TalkBack, restent des réserves P0 pour une ouverture publique.

## Parcours critiques candidate (31/10, passe 2)
Trois parcours statiques de La Graphiste repris dans **wiki.html**, gabarit CSS exact de sa PR #57. Exercices facultatifs natifs details/summary, liens vers sources existantes, objections et retour aux articles ; aucun compte, aucune sauvegarde, aucun nouveau texte étiqueté approuvé. Contrat L’Anarchitecte respecté (pas de plateforme, API ou backend). ARCH-002/007 : visa écrit identifié mais droits finaux non acquis, double verrou et interdiction de publication maintenus. Rollback : annuler uniquement le commit du parcours sur la branche candidate ou revenir au SHA 7ad16431082fe50088bf904b96d558bb1b538067 ; relancer workflow.

## CYCLE 3 — contrôles de réconciliation et frontière de sécurité (31 octobre 2026)

- Branche candidate unique conservée, HEAD initial `0ad8532c6cda858dc059e62ba50bf31333779fc7`. PR #50 (gabarit), #51 (navigation), #57 (maquettes de trois parcours) rapprochées sans nouvelle architecture ; le CSS parcours sur la candidate correspond au blob `57559746b8b5c290bb6e30b8919053f460ed46a9` de La Graphiste. La dernière maquette PR #57 diffère du premier prototype : relecture humaine des écarts encore nécessaire, ne pas présumer adoption d'un changement postérieur.
- Neuf pages corrigées de La Lectrice et corrections P0 de la candidate **conservées**. Les trois parcours du Wiki sont **exercices candidats**, pas fiches approuvées, et n'indexent pas les deux archives.
- Registre : les seuls accords relevés sont ARCH-002 et ARCH-007, sur leurs Git blobs précis ; `rights_final=A_VERIFIER` et `publication_authorized=false` pour les deux. `decisions.json` demeure vide : **aucune fiche nouvelle publiable**.
- **P0 OUVERT côté serveur** (rapport Juriste Cycle 3, PR #56) : `submit-proposal` Edge Function v2 est encore active et `submit_wiki_article` SECURITY DEFINER demeure exécutable pour des comptes authentifiés. La neutralisation dans le HTML/JS de la candidate **ne coupe pas les API** ; un tiers peut potentiellement appeler ces endpoints directement. Le contrôle de La Juriste portait sur les objets, privilèges et code déployé, sans intrusion ni modification de l'API. AUCUNE modification Supabase, RLS, fonction ou privilège dans cette mission. La fermeture effective requiert une décision de Zout, puis une intervention distincte et une nouvelle vérification côté serveur.
- Mentions légales, responsable du traitement, hébergeur, canal de rectification privée, licences et essais matériels TalkBack/VoiceOver restent à finaliser. Aucun `noindex` ne doit être considéré comme une protection d'accès à des brouillons : éviter toute inclusion de contenus sensibles dans une future publication.
- Rollback technique : annuler le commit de garde-fous Cycle 3 pour retrouver le SHA `0ad8532c6cda858dc059e62ba50bf31333779fc7`, ou restaurer ce dernier sur une nouvelle branche de candidate ; relancer les deux jobs CI. Ne pas toucher à `main`, aux branches des ateliers ou au serveur.
