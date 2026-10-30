# Anarchitecte — contrôle technique publication Wiki V0
Date : 30 octobre 2026
Décision recommandée : **CORRECTIONS NÉCESSAIRES**.
Statut : contrôle ciblé des deux pages, sans fusion ni déploiement. Les tests réels navigateur 390/1280 et clavier restent non réalisés.

## Références contrôlées
- `main` au contrôle : commit `bc915a727ea5480ef8fd8d3527f4ff7b59886450`.
- PR #23 : divergente, 19 commits devant / 158 derrière `main`.
- PR #27 : divergente, 9 devant / 132 derrière.
- PR #34 : divergente, 5 devant / 81 derrière ; sélection documentaire, pas de correction HTML des deux pages.
- PR #35 : divergente, 46 devant / 72 derrière ; inclut les deux articles **et** `style.css`, typographies et plusieurs autres pages. Ne pas fusionner en bloc.
- Contrôle de fichiers au moyen des références GitHub `refs/pull/27/head`, `refs/pull/35/head`, `main`. La somme ahead/behind est celle des comparaisons au moment du contrôle, non un SHA de commit tête de PR.

## Contrôles statiques des deux pages

| Contrôle | PR #27 | PR #35 | Portée du résultat |
| --- | --- | --- | --- |
| Article « Décider ensemble » : un seul H1 | Oui | Oui | Comptage des balises ouvrantes uniquement |
| « Qui fait vivre les communs ? » : un seul H1 | Oui | Oui | Idem |
| Décision : ordre des sections | **Anomalie** : « Sources et approfondissements » avant « Qui peut vraiment participer ? » | Section Young/Freeman/Tebble avant « Sources et approfondissements » | Contrôle des titres H1–H3 |
| Travail invisible : ordre des sections | **Anomalie** : « Contribuer » avant Berenstain/Ahmed | Berenstain/Ahmed avant « Contribuer » | Contrôle des titres H1–H3 |
| Retour au Wiki et accès à la correction | Liens `wiki.html` présents, accès `proposer-article.html` présent dans l'article travail invisible | Liens de retour et `proposer-article.html` présents sur les deux pages | Présence des liens dans HTML ; navigation réelle non essayée |
| Scripts propres aux articles | 0 balise `script` | 0 balise `script` | Aucun JS embarqué dans ces deux fichiers ; JS du site ou dépendances externes non exclus |
| Validité complète HTML | **Non attestée** | **Non attestée** | Aucun validateur HTML exécuté |
| Liens externes | **Non testés en HTTP** | **Non testés en HTTP** | Existence des href, pas de garantie 200/redirect |
| 390 px / 1280 px, débordements | **Non testés** | **Non testés** | Aucune capture navigateur ni mesure de scrollWidth |
| Clavier, focus, lecteur d'écran | **Non testés** | **Non testés** | Aucun essai appareil/AT ; CSS de #35 à revoir |

Identifiants de contenus contrôlés (SHA **blob**, et non commit) :
- PR #27 : `wiki-decision-collective.html` `6583c323a8d7443735f2f1f680ee85e259bc61bb` ; `wiki-lecture-croisee-travail-soin-pouvoir.html` `12a9b1aaddcbf089395ffc71e8c6cb861531ba38`.
- PR #35 : mêmes fichiers : `139554c4d6add8ce67ff609d83b4fd4617bb65fa` et `19c003f5b6ba17119146d359b955d3385d8ae897`.

## Blocages et prochaine validation reproductible

1. Le Lecteur valide le texte exact des deux fichiers corrigés ; aucune modification supplémentaire des thèses sans source vérifiée.
2. Le Graphiste isole le CSS indispensable de #35, vérifie l'absence de régression sur `wiki.html`, évite de dupliquer les modifications de #23/#27.
3. Créer une branche de test **depuis le HEAD courant de main** et y porter **uniquement les deux fichiers retenus** + CSS nécessaire, puis exécuter validation HTML, tests de liens internes, contraste et contrôle des débordements.
4. Test Playwright ou navigateur réel : largeur 390 puis 1280, `document.documentElement.scrollWidth <= innerWidth`, aucun message d'erreur console ni erreur réseau de ressources indispensables, navigation complète au clavier, focus visible, zoom à 200 %. En complément, essai réel Android 390 px et ordinateur 1280 px, en indiquant l'appareil et son navigateur.
5. Liens externes : tester leur statut HTTP et les redirections sur la version effectivement candidate, sans prétendre qu'un simple href suffit.
6. Après validation éditoriale et juridique **et** résultats techniques verts sur le SHA retenu, le Relieur prépare l'arbitrage humain. Aucune publication autorisée par ce rapport.

**Distinction technique :** contrôle statique de contenu effectué ; automatisation de rendu non exécutée ; essai réel sur appareil non effectué ; version intégrée et déployée des nouvelles sections non établie. Les pages déjà présentes sur main ne prouvent pas la publication des enrichissements.
