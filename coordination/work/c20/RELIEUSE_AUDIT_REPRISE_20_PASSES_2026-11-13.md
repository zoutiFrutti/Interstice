# LA RELIEUSE — Audit de reprise et correction C20

**13 novembre 2026 · 21 h, Europe/Paris**  
**Périmètre :** `zoutiFrutti/Interstice`, PR #197, C07 #186, NAV7, sécurité, réception Work.  
**Statut :** document et correction **candidats uniquement**, aucun merge, déploiement, publication, migration, purge, changement de permission ou envoi externe.

## Synthèse fiable

1. La PR **#197** existe réellement et pointe sur la branche `work/c07-nav7-convergence-candidate-20261113`. Le HEAD récupéré est `366a33a5bad58e3c3942ec4e71eec8651a9e365d`. Son corps présente la réunion de C07 + NAV7 + Work, 31 rubriques, 15 raccourcis historiques et un Manifeste distinct. **Elle n'est pas fusionnée dans `main`.**
2. L'assemblage Work n'est plus seulement annoncé : inventaire source `7d61a53449832a38870df30f855123e4a0b20c59` et les fichiers de réception existent dans la PR #197. Le paquet de revue C19 déclare **140 fichiers / 88 HTML**, sans cibles locales manquantes ni identifiants sensibles connus détectés. Il ne faut pas confondre inventaire déposé et inspection exhaustive indépendante de chaque octet.
3. Journaux C19 : **94 tests déterministes réussis**, **4 scénarios de convergence réussis**. La CI de `WORK NAV01` a également fini **27 scénarios réussis**, dont le vrai zoom navigateur à **400 %** sur son runner. Un essai local plus ancien du zoom échouait à lancer Chromium (erreur de socket système), pas à zoomer le site lui-même.
4. **CI PR #197 : 6 workflows réussis et 4 échoués** sur le HEAD `366a33a`. Leurs journaux établissent une **même cause racine** : deux lignes du `coordination/REGISTRE_DECISIONS.md` au format 3 colonnes, refusées par le vérificateur C09 qui exige 4 ou 5 colonnes et une provenance. Les quatre workflows en échec : Demo ateliers C11, C07 secure missions, R6 INT01, WORK NAV01. Les logs ne révèlent pas un autre échec bloquant derrière ce premier arrêt. La CI reste **rouge** sur la branche de PR #197 tant que la correction n'y a pas été reprise et retestée.
5. Une **branche de réparation isolée** est créée : `work/c20-ci-registre-reception-20261113`, basée exactement sur `366a33a`. Deux lignes reformattées, **aucune décision effacée ou changée de portée** ; un test Python de non-régression ajouté. Contrôle de conformité équivalent au parseur C09 sur les 45 décisions : **2 erreurs avant, zéro après**, 45 décisions préservées. Ceci est un **contrôle de lecture exécuté**, pas une CI GitHub verte de cette nouvelle branche.

## Les vingt premières passes réelles et leurs preuves

| # | Opération réellement effectuée | Résultat / réserve |
|---|---|---|
| 01 | Recherche des dernières PR du dépôt | #197 est la nouvelle convergence |
| 02 | Recherche de HEAD de `main` | `80ce56ad`, inchangé lors du contrôle |
| 03 | Recherche des branches C07 | branche candidate unifiée identifiée |
| 04 | Recherche ciblée PR #197 | corps et réserves récupérés |
| 05 | Contrôle PR #198 | aucune PR #198 trouvée |
| 06 | Lecture `assembly-status.json` | 6 portes, 31 menus, 24 textes, 10 notices candidates |
| 07 | Lecture `export-validation.json` | 140 fichiers, 88 HTML, zéro cible locale manquante signalée |
| 08 | Lecture `invariants.json` | sources maîtres et SVG officiels déclarés inchangés |
| 09 | Lecture `package-manifest.json` | manifestes de hachage des chemins présents |
| 10 | Lecture reçu aperçu privé C17 | V1 réussie, propriétaire seul au moment du contrôle ; contenu authentifié non rouvert en C19 |
| 11 | Lecture inventaire Work reçu | source complète `7d61a534...`, statut privé |
| 12 | Lecture récapitulatif des tests reçus | 25 + 44 + 15 tests et 26 scénarios antérieurs, pas reruns C19 |
| 13 | Lecture matrice 31/15 | 15 raccourcis mappés sur rubriques sans 15 catégories supplémentaires |
| 14 | Lecture réception C19 | convergence locale détaillée, sans visa de publication |
| 15 | Lecture du journal de normalisation | deux journaux d'échec conservés sans effacement |
| 16 | Lecture refs distantes d'origine | bases exactes main / C07 / NAV7 documentées |
| 17 | Lecture journal échec zoom local | Chromium persistant refusé par socket système |
| 18 | Lecture des quatre scénarios convergence | 4/4 réussis |
| 19 | Lecture log tests déterministes C19 | 94/94 réussis |
| 20 | Lecture des 24 textes reçus | sources R6 et réserves conservées, pas de nouveau visa |

## Contrôles complémentaires réalisés ensuite

- **21** `assets/nav-01/graph-data.mjs` : six portes ; correspondance graphique 4 à gauche, 6 à droite. Ne pas recopier l'ancien contrat NAV7 qui inversait ces deux coordonnées.
- **22** `explorer.html` : entrée immersive réunifiée sous la page canonique.
- **23** `nav7-candidate.html` : page historique conservée comme entrée de compatibilité.
- **24** `REGISTRE_DECISIONS.md` : deux lignes C18/C19 mal formées repérées.
- **25** Workflow NAV7 : vérification de la chaîne candidate, sans déploiement.
- **26** Lecture `convergence-contract.json` révision 2 : 31 sous-menus, point 7 à **(272,354)** sur l'original reçu, positions 4/6 rectifiées. Source R7-B1 candidate, sans image embarquée.
- **27** Contrôle `public_cards=[]` : moteur 219 objets, zéro autorisation de publication ; PAR-005 bloqué.
- **28** Lecture des 10 workflows réels GitHub sur HEAD exact : 6 succès / 4 échecs.
- **29** Lecture des jobs et étapes en échec : tous s'arrêtent sur les tests C09 du registre.
- **30** Lecture des logs détaillés des 4 jobs : exactement les identifiants C18-PRIVATE-01 et C19-LOCAL-01 refusés dans quatre assertions.
- **31** Comparaison des deux titres « Égalité, genres et inclusivité » dans le catalogue de lecture : IDs distincts `wiki-egalite-fiches` et `wiki-egalite-genres-inclusivite`, même titre visible ; décision éditoriale non prise ici.
- **32** Vérification du résultat zoom 400 % dans les logs GitHub : scénario `chrome.tabs.setZoom` **OK**, et 27 tests de navigateur au vert pour la suite concernée.
- **33** Création de la branche de correction depuis le SHA exact de la PR #197.
- **34** Correction strictement de format des deux lignes, sans modifier le contenu des autorisations ni les anciennes décisions.
- **35** Nouveau test de régression Python importé par le dispositif existant `unittest discover`.
- **36** Analyse équivalente de toutes les lignes du registre selon le contrat du parseur : 45 IDs maintenus, 2 anomalies avant, 0 après.
- **37** Réception GitHub des nouveaux blobs du patch et du test, sans fusion ni publication.

## Sécurité et édition

- Les protections `main` C13 restent actives et ses sources ne sont pas modifiées ici.
- Les 219 objets C07 ne reçoivent **aucun nouveau visa** ; pas de projection publique.
- Le paquet de revue déclare 7 formulaires statiquement désactivés. Ne pas saisir de données personnelles dans un formulaire historique sans nouveau contrôle.
- Le reçu de l'aperçu privé V1 certifie son contrôle d'accès au moment de la lecture, mais **ne prouve pas l'accessibilité ni l'identité des octets de l'éventuelle version V2**.
- L'overlay maître impose 217 objets juridiquement non examinés et 2 bloqués. Les 24 textes R6 préexistants ne deviennent pas 24 nouvelles publications autorisées.
- Ne pas intégrer automatiquement les PR #186, #192 et #193 dans #197 ; elles chevauchent les mêmes fichiers et des états historiques à 4 portes.

## À faire par Work / étapes autorisables

1. **Reprendre le patch C20** dans la PR #197 par vérification des deux lignes réelles (ou appliquer un correctif local strictement équivalent). Ne pas recopier un ancien HEAD.
2. Relancer les quatre workflows rouges **sur le nouveau HEAD exact**, sans déclarer les anciennes réussites transférables.
3. Vérifier indépendamment les 31 rubriques dans le navigateur et les 24 textes ; statuts et sources visibles.
4. Inspecter en accès propriétaire le nouvel aperçu privé éventuel, vérifier version et source exacte ; ne pas donner de lien public et ne pas modifier les permissions.
5. Revoir séparément les deux cartes « Égalité » et la cohérence des sous-menus Mediatheque/Vigie, sans les fusionner automatiquement.
6. Après nouvelle CI, revue graphique R7-B1, clavier, vrai Android et tablette, puis seulement décision humaine d'intégration. **Aucune fusion main ni publication.**

## Références

- PR #197 : https://github.com/zoutiFrutti/Interstice/pull/197
- Base : `work/c07-nav7-convergence-candidate-20261113` HEAD `366a33a5bad58e3c3942ec4e71eec8651a9e365d`
- Correctif : `work/c20-ci-registre-reception-20261113`
- Contrat : `coordination/work/c07/nav7/convergence-contract.json`
- Logs CI : runs `43482714475`, `43482714386`, `43482714277`, `43482714563`
