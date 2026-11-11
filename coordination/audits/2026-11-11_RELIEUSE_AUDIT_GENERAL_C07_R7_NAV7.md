# LA RELIEUSE — AUDIT GÉNÉRAL INTERSTICE · 11 NOVEMBRE 2026

**Statut :** audit indépendant ciblé par preuves accessibles, candidat documentaire, aucune intégration ni publication.  
**Périmètre :** architecture/navigation, graphisme R7, centralisation C07, médias/archives/éditorial, sécurité, cartes, relations externes, coordination/PR.  
**Méthode :** lecture de fichiers exacts et de métadonnées de PR sur GitHub. Les rapports historiques ne valent pas nouveau test exécuté. Pas de build local de l'ensemble du dépôt, pas de contrôle iPad/Android réel, pas de lecture de documents privés, pas de test d'exploitation Supabase ni contrôle du contenu effectivement servi par un déploiement distant.

## 0. Sources et références Git

- Dépôt : `zoutiFrutti/Interstice`. `main` : `df73c5dabf47a0b73d2b55f0346c7006d485dd98`, constat lors de la recherche.
- [PR #186](https://github.com/zoutiFrutti/Interstice/pull/186), branche `work/c07-reunification-20261104`, **153 commits devant `main`**, 0 derrière à la comparaison.
- Branches isolées : `design/r7-six-points-interstice-candidats-20261110` (7 fichiers ajoutés à `main`) ; `coordination/entr-001-entourage-candidat-20261111` (1 fichier ajouté, 2 commits).
- PR #174/#181/#182 navigation, #188 référentiel, #189/#190 médiathèque, #191 Lectrice, #192/#193 cartes-Atlas, #149 R6, #114 coordination. Leur présence ne démontre ni fusion ni tests sur les HEAD les plus récents.
- Documents examinés dans #186 : `C07_NOMENCLATURE_PUBLIQUE_V2_CANDIDATE_DECISIONS_QCM_20261110.md`, `C07_R7_BRIEF_DEUX_LOGOS_SIX_BRANCHES_20261110.md`, `DEV03_CONTRE_AUDIT_20261109.md`, `C07_RECEPTION_DEV03_PAGES_20261109.md`, `C07_AUDIT_20_PASSES_SECURITE_GIT_20261110.md`, `C07_SECURISATION_BILAN_20261110.md`, `C07_VERSION_CANDIDATE_SITE_20261110.md`, `C07_CENTRAL_LEC_02_RECEPTION_EDITORIALE_20261109.md`, `C07_MED_01B_MATRICE_219.md`, `overlay-reviewed.json`, `C07_NOMENCLATURE_V2_CORRESPONDANCE_219_CANDIDATE.json`, `coordination/REGISTRE_DECISIONS.md`.

## 1. Tableau de synthèse

| Domaine | Constats | Verdict |
|---|---|---|
| Décisions du projet | 46/46 QCM V2 consignées ; 6 portes décidées ; dernier schéma utilisateur à 7 points (6 portes + Manifeste) plus récent et plus précis | **Décidé, pas intégré** |
| Interface publique | `index.html` sur #186 reste l'ancienne entrée ; `candidat.html` et `explorer.html` parlent encore de 4 portes ; `vigie.html` et `faire-ensemble.html` introuvables à ces chemins | **Incomplet pour V2/NAV7** |
| Logos R7 | B choisie comme base ; 6 points secondaires sur Interstice seulement ; 3 SVG expérimentaux sur branche ; pas d'intégration de B1/B2 | **Candidat artistique** |
| Référentiel maître | 219 IDs dans modèle C02 ; moteur DEV-03 en mémoire ; `public_cards: []` ; overlay sans visas par ID | **Réception technique ciblée, pas exploitation publique** |
| Nomenclature | mapping V2 219 entrées, 41 formats/sections non tranchés ; renommage canonique Q39 en tension avec conservation d'alias/IDs Q41 | **Candidat avec ambiguïtés** |
| Juridique/visas | 217 non examinés et 2 bloqués, 219 non autorisés à publication | **Blocage maintenu** |
| Médias & doublons | 190 URL canoniques manquantes ; FN-018 à qualifier ; conflits FN-022/048 et FN-038/057 ; sources/droits non entièrement vus | **Réserves importantes** |
| Archives & Parcours | 7 Parcours/29 étapes/19 relations, 9 HELD ; PAR-005 bloqué ; lot Commune non publié | **Documenté sous réserve** |
| Cartes / Atlas | #192 et #193 candidats de raccordement depuis #41, périmètre semblable mais différent, encore à rapprocher ; données fictives | **Non réceptionné pour six portes** |
| Confidentialité | CI Jekyll corrigée ; **177 occurrences** de liens Google Docs/Drive dans 38 fichiers du checkout public selon audit daté, permissions non toutes qualifiées | **P0 ouvert** |
| Exposition / public | Pas de preuve d'une version à 6 portes + 7e bouton servie au public ; le succès du build candidat n'est pas un déploiement | **Non attesté** |
| Référence externe Entourage | ENTR-001 candidat documentaire ; exclu par décision ultérieure de la Carte des possibles même en liste ; lien Faire Ensemble seulement proposé | **Candidat hors cartes** |

## 2. Décision d'interface la plus récente (NAV7)

**Décision explicite de Zout dans la conversation avec capture annotée :** sur la composition fournie, **points 1, 2, 3, 4, 5, 6 = les six menus/portes principales** ; **point 7 = Manifeste**, un point secondaire un peu plus gros que les autres points non principaux ; **point rouge central = centre visuel/navigation immersive**, action précise d'ouverture/retour à spécifier techniquement ; **points tertiaires = sous-menus**.

Il s'agit de positions visuellement désignées sur une **capture annotée par l'utilisateur**, non d'un jeu de coordonnées SVG d'implémentation ni d'un nouvel original graphique authentifié. **Ne pas utiliser une image régénérée comme référence source** : faire la correspondance positions ↔ vrais éléments du SVG après contrôle Graphiste.

**Affectation exacte des six libellés aux six positions : NON indiquée.** Ne pas attribuer silencieusement 1=Faire Ensemble, 2=Encyclopédie etc. Les noms des six portes sont : Faire Ensemble ; Encyclopédie des communs ; Archives des communs ; Médiathèque des communs ; Atlas des communs ; La Vigie de la Faille.

**Conséquences pour NAV7 :**
1. Conserver la géométrie des points identifiés par Zout dans le visuel, sans hexagone ajouté ni déplacement gratuit.
2. Six **portes principales** et **un accès distinct au Manifeste** au point 7, sans inventer de « septième porte » de contenus de même rang.
3. Le Manifeste doit rester accessible hors animations et au clavier/lecteur d'écran, y compris par une alternative textuelle.
4. Ne pas confondre le 7e bouton Manifeste et les sept Parcours transversaux. Les Parcours restent des parcours secondaires.
5. Les anciens dossiers `C07_NAV6_HYPOTHESE_CONSTELLATION_LOGO_20261110.md` et C09 (4 portes) sont **historiques ou partiellement remplacés** sur la décision de disposition, pas à réécrire en effaçant les anciennes étapes.
6. **R7-B demeure candidate de conception**. Les six points secondaires ne figurent que dans Interstice ; la Faille noire officielle n'en affiche pas. L'ordre du dessin et des couches d'interaction doit éviter des nœuds fictifs.

## 3. Constat technique interface

Lecture directe sur #186 :
- `index.html` : `20804d21cee89397c5ab8deb377806d7d645f1e4` (ancienne entrée, pas de six portes ni Vigie visibles détectées par recherche textuelle).
- `candidat.html` : `e3c4c37d1c49d95464d60f31858850c537268f74` (quatre portes, noindex).
- `explorer.html` : `d553eff8698f5099d0afa4e88e6dac4051367a2b` (quatre portes, noindex).
- `atlas.html` : `072c2e10316b26bc3129616184d82f2f0b601b87` (Atlas candidat).
- `archives.html` : `f68d8448773323c96629e656861e56e71dfd5a27` (archives candidate, noindex).
- `faire-ensemble.html` et `vigie.html` : **absents à ces chemins**, ce qui ne prouve pas l'absence de tout autre point d'entrée portant les mêmes fonctions.
- PR #182 : entrée zoom candidate, sans preuve de rendu/test appareil réel. PR #174/#181 encore basées sur quatre portes ; nécessité de réconcilier NAV7.

## 4. R7 logos

- Original Faille noire `assets/identite/r6/sources/logo-faille-noire-zout-original.svg` blob `72695015804e76abc0f61369ab0da7ea540ba1a2`, identique à `assets/logo-faille-noire.svg` vérifié lors de l'audit ciblé.
- Base Interstice R6 `assets/logo-interstice.svg` blob `1e19320bcedb445175427dba92b229b7ee10d651` : harmonisation candidate, non visa artistique final.
- R7-B `assets/identite/r7/candidats/interstice-r7-b-ramifications.svg` blob `6013477b26c25fc8c44546fb28a5de1b768121eb` ; 6 points secondaires et 18 tertiaires constatés ; 6 courbes cubiques et 12 quadratiques ajoutées ; halos R6 restants ; lisibilité à petite échelle non qualifiée.
- Décision : **B est la meilleure base**. « Pas organique » = refuser racines/biomorphisme et traitement végétal, **pas** rejeter B.
- Travaux non livrés : B1 épurée/B2 structurée, comparaison vectorielle/raster contrôlée, test tactile et exact raccord point 7. Les deux SVG officiels ne doivent pas être silencieusement remplacés.

## 5. Référentiel C07 et nomenclature

Les rapports de la PR #186 et les fichiers lus convergent : 219 identifiants, 100 sources, 19 relations, 7 Parcours/29 étapes, 9 HELD, 24 pages existantes conservées, 0 cartes publiques par moteur maître.

Le contrat `c07-master-projection/1` utilise le moteur `coordination/work/c07/developpeuse/master-v1/` en **mémoire** ; pas de connexion Supabase ni de projection des 219 objets vers l'interface publique. `overlay-reviewed.json` : `coverage=219`, `missing_canonical_url=190`, `legal_unreviewed=217`, `legal_blocked=2`, `publication_denied=219`, `per_id={}`.

Réception technique antérieure : CI C07 après correction Jekyll : 74 fichiers acceptés puis autre contrôle 81 fichiers acceptés, sans chemin documentaire sensible détecté dans les artefacts _site audités. Cela prouve seulement ces contrôles des builds candidats ; pas une autorisation de diffusion ni un contrôle de tous les fichiers GitHub publics.

Mapping V2 `C07_NOMENCLATURE_V2_CORRESPONDANCE_219_CANDIDATE.json` : 219 objets, 41 sections/format à préciser ; compte de projections candidates archives 8, encyclopédie 66, médiathèque 121, atlas 21, faire_ensemble 2, transversale 1. Les affectations sont **hypothétiques** ; pas une photo de la publication réelle. Nouveau schéma 6 portes / 7e Manifeste à réconcilier.

## 6. Éditorial / Médiathèque / Archives

- Maintenir la doctrine : Wikipédia cohérent et suffisant → privilégier un lien, non un doublon ; si article original nécessaire, expliciter son apport et les lacunes.
- Les dossiers Commune sont répartis en lots candidats de cinq maximum. La Lectrice signale ARCH-005/006/007 comme **pré-lot de revue**, pas prêt à publier. ARCH-003 non sélectionné conserve son historique.
- PAR-005 et DROIT, biographies BIO-019/021 et fiches FN sous réserve : aucun déblocage implicite.
- FN-018 : source/état à vérifier ; deux paires de doublons FN-022/048 et FN-038/057 à rapprocher sans supprimer les IDs.
- La Vigie et ses travaux historiques doivent rejoindre un corpus commun sourcé sans ouverture automatique de fiches. La porte Vigie future est décidée, sa présence dans la navigation candidate inspectée ne l'est pas.

## 7. Sécurité et confidentialité — P0

Rapport du 10 novembre `C07_AUDIT_20_PASSES_SECURITE_GIT_20261110.md` :
- Checkout public : **853 fichiers suivis**, **842 fichiers texte analysés**, **38 fichiers comportant 177 occurrences** de liens Google Docs/Drive directs (répétitions possibles).
- Registres C02 : 22 localisateurs de ressources et 26 sources remplacés par `null` sur branche candidate avec invariants préservés.
- Jekyll candidat : 81 fichiers scannés et aucune entrée interdite/URL détectée par les contrôles cités.
- **Restent à déterminer** : lesquelles des 177 occurrences renvoient à des sources publiquement voulues vs à des documents privés ou à accès inconnu ; historiques Git, clones, médias, métadonnées et autres informations sensibles non révoqués par un simple filtre de site.
- Toute matrice de correspondance des URL privées doit être tenue **hors GitHub public**. Pas de suppression, purge, réécriture Git ou changement de visibilité sans consentement explicite et analyse de retour arrière.

## 8. Cartes / Atlas / Faire Ensemble

- Contrat `ANARCHITECTE_CONTRAT_CARTES_013` : proposition de modèle logique `initiative|besoin|ressource|projet`, vue liste complète, carte facultative et points sensibles non exposés. Ce modèle est une proposition, pas une règle du site déjà mise en œuvre partout.
- Les PR #192 et #193 réemploient des fichiers de prototype fictif #41 et relient cartes/Atlas/navigation. **Risque de doublon et de divergence** : #192 déclare 15 fichiers repris depuis #41, #193 en déclare 13 ; #192 mentionne quatre portes et Faire Ensemble, #193 souligne un raccord via Encyclopédie et Atlas. Aucun test fonctionnel final sur appareils réels n'est prouvé par leurs textes.
- **ENTR-001** : proposition documentaire de l'application Entourage hors Carte des possibles **y compris liste** ; aucun siège social à projeter comme lieu d'accueil public. Référence externe possible depuis Faire Ensemble, sans import, partenariat ou publication.

## 9. Orchestration / ateliers

- Le registre `coordination/REGISTRE_DECISIONS.md` conservé sur #186 date de C09, contient des décisions historiques à quatre portes. Il faut **ajouter** les décisions récentes (6 portes, R7-B, 7e point Manifeste, ENTR-001 hors cartes) et marquer clairement les anciens états comme remplacés pour la navigation, sans les effacer.
- C12 et les missions automatiques restent fermés par défaut selon rapports C07 ; un workflow CI vert ne vaut pas activation ni mandat de coopération.
- Les PR #188–#193 doivent faire l'objet d'une **matrice de chevauchement** sur HEAD exact, sans copier les mêmes décisions/recherches plusieurs fois ni fusionner en cascade.
- Les ateliers spécialisés restent responsables de leurs expertises ; aucune « validation de La Juriste / de la Graphiste / de la Lectrice » ne doit être attribuée à partir du simple dépôt de fichiers.

## 10. Priorités de reprise

| Priorité | Action | Preuve d'acceptation |
|---|---|---|
| **P0** | Classer les URL dans dépôt GitHub public, vérifier permissions des cibles et protéger les sources réellement privées | Matrice privée de classification ; baisse des occurrences non qualifiées ; décision humaine sur histoire Git |
| **P0** | Réconcilier registre de décisions avec les derniers arbitrages NAV7, R7-B et ENTR-001 | Nouvelle entrée append-only, anciens 4/6 portes désignés historiques, liens vers décision/capture source |
| **P0** | Ne laisser passer aucune fiche non autorisée dans les exports et la future navigation à 6 portes | `public_cards: []` jusqu'aux visas ; tests de non-fuite, Parcours bloqués |
| **P1** | Faire contrat de navigation *6 portes + Manifeste point 7* et mapping exact des positions données par Zout, sans inventer l'ordre des portes | 7 points identifiés ; contraste, clavier, sans animation, retour |
| **P1** | Livrer variantes SVG B1/B2 fidèles aux originaux et tester formats mobiles | Versions candidates et comparateur authentique, validation graphique humaine |
| **P1** | Dédupliquer #192/#193 et actualiser les raccourcis des six portes | Matrice de chemins et collisions, tests sur HEAD commun |
| **P1** | Réceptionner 219 correspondances, licences, FN doublons et 9 HELD | Diff par ID, décisions juridiques/éditoriales indépendantes, zéro promotion automatique |
| **P2** | Confirmer une URL de prévisualisation candidate visitable et la réception Android/iPad réelle | Lien HTTPS vérifié, tests physiques et captures horodatées du vrai site |
| **P2** | Traiter les références externes (ENTR-001) et liens encyclopédiques sans surcartographier | Fiches externes non cartographiées, aucun accord/partenariat inventé |

## 11. Décisions et autorisations

**Constats vérifiés** : existence des documents et fichiers mentionnés sur les branches ; comparaison Git et blobs inspectés ; présence de l'ancienne navigation quatre portes dans certains HTML ; données consolidées telles que documentées dans rapports datés.

**Non vérifié par cet audit** : déploiement réel, sécurité exhaustive du dépôt/historique/Drive, test mobile physique, exactitude de l'ensemble des 219 fiches et des sources primaires, licences/droits individuels, efficacité d'une exploitation Supabase, statut final de toutes les PR hors métadonnées inspectées.

**Autorisation :** publication, merge, migration, activation d'agents, collecte réelle et suppression **toujours interdites** sans décision explicite de Zout. Le présent dossier est un rapport candidat seulement.

**Synthèse :** l'infrastructure documentaire a atteint une cohérence technique partielle réelle ; **la sécurité documentaire P0 et la divergence de navigation 4 → 6 + Manifeste au 7e point sont les deux chantiers qui bloquent le plus directement une présentation fidèle et sûre.**
