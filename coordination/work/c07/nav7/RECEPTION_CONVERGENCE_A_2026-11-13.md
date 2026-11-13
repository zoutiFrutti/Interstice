# La Relieuse · Réception unifiée C07 × NAV7 · Cycle Work C19 · 13 novembre 2026

**Candidate locale réunifiée et vérifiée. Aucun nouvel envoi GitHub, aucune fusion main, aucun nouveau déploiement.**

Cette section remplace l'état de réception « Work introuvable » constaté au commit 4cdad619 ; son rapport d'origine est conservé intégralement dans l'historique plus bas. Le contrat JSON est passé à la révision 2, sans nouveau vote humain.

## A. Bilan court

L'assemblage Work a été retrouvé et contrôlé fichier par fichier : **7d61a53449832a38870df30f855123e4a0b20c59**, arbre **57f9f47fb4076a20fedde2fe75116b56141b6cae**, 135 fichiers et 87 HTML, manifeste SHA-256 **b128b39132528695f67dde0f53989d45f61536c1ae658ec0a14113481bbdece7**. Les quatre journaux C17 sont présents : 25 + 44 + 15 tests déterministes et 26 scénarios navigateur. Ce sont des résultats antérieurs reçus, pas de nouvelles exécutions.

La candidate réunit maintenant ce Work, le C07 3c21d7d et la branche 4cdad619. Une seule navigation active : **explorer.html, six portes, 31 rubriques, Manifeste distinct**. Les 15 raccourcis NAV7 sont rattachés aux rubriques, sans fabriquer 15 catégories supplémentaires ; deux destinations Faire Ensemble réutilisent les outils existants pour éviter des doublons. nav7-candidate.html conserve son adresse et redirige vers cette navigation, avec alternative native sans JavaScript. candidat.html a désormais six portes ; son ancien fragment quatre-portes reste un alias existant.

L'export de revue locale contient **140 fichiers et 88 HTML**, soit les 135 chemins C17 conservés et cinq fichiers de raccordement supplémentaires. Manifeste final : **b810dfbeda164b833dedd80220738521cd6eec0be42fc26508f698fee614034c**. Aucun lien local statique cassé, aucun identifiant sensible connu détecté, deux SVG officiels intacts, sept formulaires désactivés statiquement et politique de connexion limitée à l'origine. Les dix notices média restent candidates, sans nouveau visa ni lecteur intégré.

L'aperçu privé C17 est réellement publié en version 1, distinct de cette nouvelle candidate locale. Le service a confirmé son ancien déploiement réussi, sa source 96838d0 et son archive ; ses permissions ont été relues : propriétaire seul, zéro autre utilisateur/groupe/visiteur externe. L'archive hébergée compte 136 entrées avec le manifeste d'hébergement, pour 135 fichiers de contenu. Son contenu authentifié n'a pas été réinspecté dans le navigateur pendant C19. Aucune URL d'accès privé, donnée de compte ou jeton n'est copié dans ce reçu destiné au dépôt public.

## B. Les cinq passes

| Passe | Travail réel | Résultat |
| --- | --- | --- |
| 1 | Retrouver le worktree Work, le paquet, son manifeste, les journaux ; relire la version et l'accès de l'aperçu privé | Réception prouvée, sans accès aux corps documentaires privés |
| 2 | Fetch en lecture des trois refs ; lecture du rapport/contrat 4cdad619 ; comparaison des fichiers et des vraies captures annotées | HEAD distants exacts ; trois incohérences géométriques du nouveau contrat identifiées |
| 3 | Réunion locale des deux historiques ; raccordement 31/15 ; mise à jour du contrat et des entrées C07/NAV7 ; inventaires des 135 fichiers et 24 textes | Une candidate isolée ; six portes et routes historiques conservées ; aucune nouvelle permission de contenu |
| 4 | Tests déterministes, maître, gardes de préservation et confidentialité ; construction Pages réelle et essais Chromium | 94 déterministes réussis ; maître fermé ; réserve du zoom réel 400 % reproduite |
| 5 | Contrôle visuel, déduplication Faire Ensemble, reprise des essais ciblés, reconstruction propre, empreintes et bilan | 26 scénarios de navigation et quatre de convergence réussis ; export final contrôlé ; arrêt pour QCM |

## C. Décalages résolus et preuves

| Point | Écart reçu à 4cdad619 | Candidate actuelle | Preuve / réserve |
| --- | --- | --- | --- |
| Positions 4/6 | Encyclopédie à droite, Médiathèque à gauche | 4 Encyclopédie à (233,450), 6 Médiathèque à (461,426) | Capture authentique annotée de Zout, SHA-256 b03f59b994c9e637166de145f882cb8bd5fb1e5cafdd12ce5e77a034822c8c0f, reçue et revue ; reprise du contrat Work C2/C17, pas un nouvel arbitrage |
| Point 7 | (220,327), autre nœud du SVG | (272,354), près du centre ; panneau de lecture et page directe | Même capture annotée et ancrage R6 réel ; origine vectorielle vérifiée |
| Menus | 15 destinations qualifiées de sous-menus | 31 rubriques + 15 raccourcis contextualisés | SUBMENUS_31_VS_SHORTCUTS_15.md ; legacy-quick-links.mjs ; tests de conservation des 15 destinations |
| Entrées | Deux applications distinctes et candidat C07 à quatre portes | explorer.html canonique ; nav7-candidate.html compatible ; candidat.html à six portes | Tests d'alias, sans JS, géométrie, clavier et historique |
| Work | Chiffres rapportés mais non reçus | 135 fichiers hachés ; 24 sources R6 et journaux reçus | received-work/inventory.json, package-manifest.json, readings.json, tests.json ; révision 2 du contrat |
| Visas des textes | 24 textes déjà visibles sur main, statut documentaire incertain | Les 24 SHA-256 correspondent aux sources sur main ; les 24 statuts C07 restent publication=non_autorisee | La présence historique publique ne devient pas un nouveau visa ; examen technique des versions, pas relecture juridique/éditoriale exhaustive |
| C07 | Risque de projection automatique des 219 objets | public_cards=[] ; mêmes 219 objets, 100 sources, 19 relations, 30 objections, 7 Parcours/29 étapes | Mêmes six JSON et même checksum fd90b57d41f41b546e433dc5ff19224d8375444fa9871191822bf5fafd687c14 ; PAR-005 et dossiers bloqués fermés |
| CI NAV7 | ubuntu-latest incompatible avec Playwright 1.56.1 lors du contrôle antérieur | Runner épinglé ubuntu-24.04 ; build isolé et essais du raccordement | Modification candidate uniquement ; aucune CI distante relancée |

Les véritables SVG R6, la source R7 et la variante B1 existante ne sont pas redessinés. Le SVG dérivé de l'ancien prototype est conservé comme source historique reçue ; il n'est plus l'image de la navigation active. Aucun nouveau logo officiel n'est choisi.

## D. Journal technique

Branche locale unique de travail : **candidate/c19-unified-nav7-20261113**.

- **a8a3309a51782067e6c39f3a7d154f4f012d9ece**, arbre a03360b9e2d360c2c639d362934853123fa3f26b : commit local à deux parents, **7d61a53449832a38870df30f855123e4a0b20c59** puis **4cdad619edd387bfb748ab27475156c77ffc322c**, intégration sans conflit de fichiers, réception et corrections.
- **d422575a338a712b829aa1cd106a9aed36ec4f1f** : déduplication des accès de propositions dans le panneau Faire Ensemble.
- **6d94573014d05a75249cf08d84b2c016b4e4d4f0** : correction syntaxique du serveur de régression navigateur ajouté dans ce cycle.
- **02d777da186ef3a3ce44840c9c3aec0f2f7a4207**, arbre fbff70158348bc5f88df9b45ca2696e93f3a4002 : correction de portée d'un sélecteur de test, qui comptait également la navigation textuelle de repli. Aucun changement applicatif par rapport à 6d94573.

La construction Pages finale a été exécutée sur une archive Git propre de **6d94573**, avec github-pages 232 / Jekyll 3.10.0, durée **15,302 s**. L'assemblage de revue est issu de ce build propre. Le commit suivant ne change que tests/nav7-browser.test.mjs ; les fichiers applicatifs et les corps des 24 textes sont identiques. Les avertissements de métadonnées GitHub anonymes et Faraday restent dans le journal privé. Le présent reçu et ses preuves sont ajoutés ensuite dans coordination/, exclu de Pages.

Contrôles exécutés :

- **94 tests déterministes réussis**, c19-evidence/unit-94.tap. Ils couvrent navigation, lecture, ponts, file éditoriale, pilote, préservation, frontières publiques, maître et nouveau contrat. Après enrichissement du reçu des 24 textes par les statuts C07, ses trois tests ont été réexécutés avec succès.
- **26 scénarios de navigation réussis**, dont clavier, focus, axe sur les états testés, largeurs 320/390/768/1280, Android/iPad simulés, sans JS, mouvement réduit, lecture, historique, sous-menus et SVG B1 ; **quatre scénarios de convergence réussis** après correction du sélecteur de test. Ils vérifient l'ancienne entrée, les liens filtrés, la Vigie fermée, le repli sans JS et la non-duplication des outils Faire Ensemble.
- Les deux journaux intermédiaires ne sont pas présentés comme entièrement verts : le premier conserve un échec de syntaxe du nouveau banc de test et l'échec système 400 % ; le second conserve le sélecteur trop large, corrigé ensuite. Le journal final ciblé contient quatre succès ; les 26 tests de navigation réussis portent sur les mêmes fichiers applicatifs finaux. Aucun nouveau succès du zoom réel n'est déduit de la relance qui l'exclut.
- **Zoom réel 400 % tenté et bloqué** avant les assertions applicatives : Chromium persistant échoue sur socket() / Operation not permitted, puis ptrace. Aucune modification de permissions ou contournement de l'environnement. Les lecteurs d'écran physiques et appareils tactiles réels ne sont pas validés par ces simulations.
- Garde historique : **524 blobs** reconnus, zéro refus (483 originaux, sept exceptions C13 exactes et 34 blobs de sécurité main exacts).
- Garde source : zéro lien direct documentaire interdit ; export : **140 fichiers**, zéro entrée dangereuse et zéro contenu interdit détecté ; zéro identifiant sensible connu, zéro cible locale manquante, 135 anciens chemins conservés, deux logos officiels identiques.
- Neuf invariants de fichiers : deux logos officiels, workflow d'import privé identique à main et six JSON maîtres identiques à C07. L'import reste main + workflow_dispatch + sync_private_staging=true ; aucune invocation.
- Contrôle visuel réel du paquet final via le navigateur local : entrée, six portes, Faire Ensemble et déduplication ; capture authentique c19-evidence/candidate-unifiee.jpg.

Les refs distantes ont été relues en fin de cycle et restent main **80ce56adfb9c3bc3275844b2847eac717b433aa5**, C07 **3c21d7d8b4179adff6ce45b71efc9eb9f32bafcd**, convergence **4cdad619edd387bfb748ab27475156c77ffc322c**. #186 reste ouverte en brouillon ; aucune PR n'est ouverte pour la branche de convergence au contrôle. Aucune fermeture ou copie de PR #192/#193 n'est effectuée : leurs travaux déjà présents dans C07 ne sont pas réimportés.

## E. Blocages, décisions conservées et QCM

Les positions documentées de Zout, l'affectation des six portes, le Manifeste distinct, B1 et sa miniature candidate, les IDs historiques, les 31 rubriques dont Sites et portails, les verrous C07 et la suspension des envois sont conservés. La correction du contrat erroné est une réconciliation de provenance, pas une décision politique ou graphique nouvelle.

Restent ouverts : le transfert de cette candidate exacte pour CI distante ; le zoom réel 400 % ; les relectures et visas des contenus ; deux détails de présentation et l'éventuelle mise à jour distinctement autorisée de l'aperçu privé. Les 219 objets ne sont pas 219 articles terminés : 24 textes existants, neuf HELD et 186 objets à préparer dans la file, sans ajout de visa.

**Q1 — Livraison GitHub.** A : envoyer l'arbre final indiqué avec ce reçu sur work/c07-nav7-convergence-candidate-20261113, ouvrir une PR brouillon vers main et vérifier la CI ; aucun merge ni déploiement. B : même envoi et CI, sans PR. C : garder local. D : autre. Recommandation A : une seule branche de convergence, diff et CI accessibles ; arrêt si main, C07 ou la ref de convergence ont changé. Ne pas utiliser le droit d'envoi pour publier les exports privés.

**Q2 — Outils transversaux de la Médiathèque (recherche, ressources, proposition suspendue).** A : seulement à l'entrée de la porte, rubriques plus épurées mais retour nécessaire. B : accessibles dans chaque format, comme la candidate actuelle ; accès immédiat, panneau plus fourni. C : regrouper derrière un bouton Outils, un clic supplémentaire. D : autre. Recommandation B : ces accès concernent tous les formats et ne doivent pas devenir un septième format.

**Q3 — Deux textes avec le même titre Égalité, genres et inclusivité.** A : distinguer les libellés de navigation « Vue d'ensemble » et « Fiches et notions », sans changer IDs, corps ou URLs. B : une entrée commune avec deux liens clairement distingués ; accès plus compact mais une étape de plus. C : conserver les deux titres identiques. D : autre. Recommandation A : contenus et SHA différents, confusion évitable sans fusion documentaire. Leur relecture reste requise.

**Q4 — Aperçu privé.** A : autoriser la mise à jour du seul aperçu propriétaire existant avec le paquet final exact de 140 fichiers, manifeste b810dfbeda164b833dedd80220738521cd6eec0be42fc26508f698fee614034c ; mêmes permissions, formulaires fermés, aucune publication publique/main. B : garder la version 1 et décider après la CI. C : préparer seulement un paquet privé téléchargeable pour revue, sans mise à jour de l'aperçu. D : autre. Recommandation A si Zout veut parcourir le raccordement immédiatement ; B si la réception CI distante doit précéder la revue en ligne. Le zoom 400 % reste non validé dans les deux cas.

Aucune réponse n'est présélectionnée. L'autorisation privée antérieure de C17 ne couvre pas implicitement ce nouveau déploiement ; la demande C19 impose une autorisation distincte. Arrêt après ces cinq passes.

---

# Historique conservé — constat initial au commit 4cdad619, avant réception de Work

# LA RELIEUSE — CONVERGENCE A · 13 novembre 2026

**État : candidat isolé. Aucun merge, aucun déploiement, aucune publication.**

## Résumé exécutif

Reprise de NAV7 à **6 portes + Manifeste au point 7** et préparation d'un contrat lisible par machine, pour réconcilier sans duplication la grande candidate documentaire C07 et l'assemblage privé de Work.

Ce lot ne prétend PAS importer les 87 pages de Work, les 31 sous-menus, ni les 24 textes. Le commit local Work rapporté `7d61a53` **n'est pas résolu dans le dépôt GitHub** par le connecteur consulté (réponse 422). Aucun manifeste ni archive du build privé Work n'a été trouvé dans les fichiers disponibles lors de cette mission. L'aperçu privé est **rapporté comme déployé**, mais son contenu/son contrôle d'accès ne sont pas attestés ici.

## Origines observées

| Source | Existence vérifiée | État |
| --- | --- | --- |
| `main` | Oui, SHA `80ce56adfb9c3bc3275844b2847eac717b433aa5` au contrôle | Site historique ; barrière de sécurité existante |
| `work/nav7-accessible-prototype-20261113` | Oui, 29 commits devant main et 0 derrière au contrôle | Page NAV7 `nav7-candidate.html`, SVG vectoriel R7 + point 7, six boutons, 15 liens tertiaires, tests Node/Chromium candidats |
| `work/c07-reunification-20261104`, PR #186 | Oui, 157 commits devant main et 0 derrière au contrôle | Référentiel 219 IDs, master DEV-03 ; `candidat.html` et `explorer.html` ont toujours **quatre portes** |
| Assemblage privé Work `7d61a53` | **Non**, absent de GitHub accessible | 135 fichiers / 87 pages / 31 sous-menus / 24 textes et tests **déclarés dans les échanges**, non vérifiés depuis une archive |
| `work/c07-nav7-convergence-candidate-20261113` | Oui, créée à partir de NAV7 | Présente livraison candidate de coordination |

## Contrat produit

Fichier machine : `coordination/work/c07/nav7/convergence-contract.json`.

Affectation humaine (ne pas revoter) :
1. Faire Ensemble à (258,203)
2. Atlas à (397,178)
3. Vigie à (498,261)
4. Encyclopédie à (461,426)
5. Archives à (333,593)
6. Médiathèque à (233,450)
7. **Manifeste** à (220,327), issu d'un nœud de R6, **pas une septième porte documentaire**.

Les 15 sous-menus reconnus dans NAV7 sont des liens publics existants, pas des projections des 219 fiches C07. Pas de faux lien Vigie.

Les **31 sous-menus de Work ne sont pas interchangeables avec les 15** : le différentiel apparent de 16 doit être étudié **depuis un manifeste du build Work** ; il peut refléter des différences de périmètre, des doublons ou des sous-menus nouveaux, pas nécessairement 16 objets à copier.

## Conflits de convergence à résoudre

1. **4 contre 6 portes :** les pages `candidat.html` et `explorer.html` de C07 portent un schéma historique. Ne pas les recopier par-dessus NAV7. Le contrat 6+1 est prioritaire après décision Zout.
2. **Contenus :** l'overlay C07 `overlay-reviewed.json` constate `publication_denied=219`, `legal_unreviewed=217`, `legal_blocked=2`, `missing_canonical_url=190`, `per_id={}`. **Aucun transfert en export public ni promotion automatique.** Le paquet de 24 textes Work est à examiner par version et visa éditorial, pas importé sur la foi d'un nombre.
3. **SVG :** préserver les SVG officiels R6 et la source R7-B ; la dérivation NAV7 contient les sept positions. R7-B1 et la propagation rouge restent à recevoir artistiquement.
4. **Navigation & accessibilité :** conserver les chemins `index.html`, `atlas.html`, `wiki.html`, `bibliotheque.html`, `manifeste-v2-5.html`, `parcours.html`, les alias historiques et l'accès sans JS.
5. **Sécurité :** respecter les exclusions Pages, les garde-fous des localisateurs et le verrou d'import privé manuel sur main. Aucun build ni aperçu partagé sans contrôle des exports.
6. **PR #192/#193 :** cartographie encore construite pour quatre portes. Réconcilier les fichiers sans double import.

## Travail effectué au cours du cycle A

- Branche dédiée issue de NAV7, sans toucher `main` ni C07.
- Nouveau `convergence-contract.json` : positions, affectations, URLs de la base existante, données juridiquement bloquées, absence explicite de source Work reçue et chiffres Work séparés des preuves.
- Nouveau `tests/nav7-convergence.test.mjs` : vérification des six ports, point 7, géométrie du vrai SVG vectoriel, destinataires publics et ancres, statut non publiable des 219 objets, écart de provenance Work.
- Mise à jour de `.github/workflows/nav7-candidate-check.yml` : accepte uniquement les deux branches candidates, lance le test de convergence et les tests NAV7 déjà existants, sans déploiement.
- **Contrôles directs exécutés** sur les fichiers lus dans GitHub : 20 vérifications géométriques et structurelles positives. Il ne s'agit **pas** d'une exécution Node/Chromium ni d'une CI distante verte.

## Conditions précises pour réception du build privé Work

Ne demander ni les données privées ni la publication. Work doit remettre, dans un emplacement privé adapté :

- Le SHA exact du commit, ou une empreinte SHA-256 de l'archive de build ; ne pas inventer le chemin GitHub.
- Un inventaire (chemin relatif, type, statut `public_approuve` / `candidat` / `interdit_public`, source, hash, éventuelle ancienne URL), **sans URL privées ni données personnelles**.
- La table des 31 sous-menus (point parent 1–6, intitulé, destination, état légal/éditorial de la destination), les 24 textes et leurs visas.
- Les résultats CI par scénario et l'identité exacte du build testé.
- Un test indépendant du contrôle d'accès à l'aperçu privé.

**Réception future :** comparer l'inventaire aux fichiers NAV7 et C07, identifier les doublons par identité/source/hash, conserver les noms et alias, puis produire un diff à adopter ou à rejeter par Zout ; pas de fusion automatique.

## Conclusion

Convergence structurelle **préparée et testée statiquement**. Intégration des nouveaux artefacts Work **en attente faute de source accessible vérifiable**. Priorité suivante : réception documentaire technique du manifeste privé Work, puis revue de la différence 31/15 et des 24 textes sans déblocage implicite.
