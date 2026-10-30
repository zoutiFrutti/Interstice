# Transmission 007 du Relieur — finalisation graphique de la première sortie publique

**Atelier :** Graphiste et Intégrateur graphique · **Date :** 30 octobre 2026  
**État :** préparation du lancement V0, sur branche séparée. **Aucune fusion, programmation sociale ni publication réalisée par cet atelier.**

## 1. Identité et ressources déjà prêtes

- **Logos officiels** : `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg` sur `main`, non redessinés. Identité noir profond, rouge et blanc cassé, cercle fissuré et ramifications. Signature commune : **« De la Faille naît l'Interstice. »**
- **PR #22**, en brouillon : quatre déclinaisons transparentes/fond clair, prévisualisation technique, polices locales Barlow Condensed Bold et Atkinson Hyperlegible Next, trois dessins originaux (réparation/transmission, bibliothèque, vérification des sources), composants CSS et insertion dans accueil/bibliothèque/Wiki. Anciens tests Chromium 10/10 ; **ces éléments ne sont pas dans `main` au moment de l'audit**.
- **PR #28**, en brouillon : modèles de fiches, CSS du Wiki documentaire, aperçu de modération et tests 24/24 simulés. Elle est **hors périmètre indispensable à une sortie publique V0** ; aucun brouillon technique GitHub ne doit devenir public.
- **Communication** : les transmissions des Communications mentionnent trois carrousels Instagram de quatre images chacun et leurs légendes, déjà préparés. Leurs fichiers graphiques définitifs n'ont pas été vérifiés dans ce contrôle GitHub. Contrôle en lecture seule de Metricool le 30 octobre : marque `faille.noire` reliée, **aucune publication programmée** du 20 octobre au 31 décembre 2026 ; cela **ne confirme pas** la présence ou l'absence de brouillons dans l'éditeur. Ne pas en créer de doubles ou programmer sans décision.

## 2. V0 publique : corrections utiles effectivement commitées

**Branche :** `design/lancement-v0-verifications-2026-10-30`, issue du `main` présent lors du début de la passe.

1. `bibliotheque.html` et `participer.html` : les liens génériques « Lire le manifeste » renvoient maintenant vers `manifeste-v2-5.html` plutôt que vers l'archive V2.1. Les pages d'archive `manifeste.html` et les liens d'archives existants restent présents.
2. `manifeste-v2-5.html` : huit intitulés de division auparavant en paragraphes sont balisés comme six `h2` et deux `h3`, en conservant **un seul `h1`**. Comparaison de l'intégralité du texte après normalisation des seules balises `p/h2/h3` : **aucun caractère changé**. Ajout du favicon existant `logo-faille-noire.svg`. Statut **validé éditorialement, non adopté collectivement** inchangé.
3. `style.css` : ajout d'un ajustement responsive limité aux petits écrans pour que les éléments du bandeau puissent revenir à la ligne ; le débordement du Wiki (447 px de large sur un viewport de 390 px dans le premier test) est corrigé. Les couleurs, les tracés des logos et les polices de `main` sont inchangés. Le rouge effectif des boutons `#a91f2c` était déjà plus sombre et ne nécessitait pas de retouche.
4. `tests/lancement-v0-smoke.mjs` et `.github/workflows/lancement-v0-smoke.yml` : contrôle navigateur et captures répétables sur les cinq pages essentielles.

**Vérification de la V0 :** GitHub Actions Chromium, 390 × 844 et 1280 × 800 px ; 10 chargements de pages et 5 vérifications indépendantes de chemins/ancres locaux, vérification des images, favicon, hiérarchie du manifeste et de son avertissement, absence de débordement horizontal, erreurs JS remontées au navigateur, contraste calculé des boutons de navigation. **15/15 contrôles réussis** au run [41023243733](https://github.com/zoutiFrutti/Interstice/actions/runs/41023243733), avant un dernier commit documentaire/minimal sur le CSS ne modifiant pas la couleur réellement appliquée. Les captures sont téléchargeables depuis l'artefact `interstice-v0-captures` du run.

**Ce que cela ne prouve pas :** consentements, droits sur les illustrations, tests avec lecteurs d'écran, exécution des envois de formulaires en conditions réelles, disponibilité du domaine final sur tous les réseaux, absence de cookies/balises tiers, expérience Safari/Firefox, accessibilité à 320px/zoom 200%. Ne pas qualifier ces éléments de vérifiés sans essais complémentaires.

## 3. Grille de préparation de la sortie

| Surface | État vérifié | Action indispensable avant communication |
|---|---|---|
| Accueil | Présent sur `main`, logo existant, manifeste V2.5 signalé non adopté, navigation et affichage Chromium validés sur la branche V0 | Contrôle du lien public final et de la visibilité de la version effectivement déployée |
| Manifeste V2.5 | Texte préservé ; titres et favicon corrigés sur branche V0 ; archive V2.1 maintenue | Vérifier après intégration qu'aucune adoption collective n'est suggérée |
| Bibliothèque | Rubriques et liens locaux chargés ; lien vers V2.5 corrigé | Contrôle rapide sur le site publié et vérification des droits des ressources pointées |
| Wiki | Nombreuses fiches déjà consultables ; bandeau mobile corrigé sur branche V0 | Distinguer fiches publiques historiques des 15 brouillons privés GitHub ; ne jamais exposer ces derniers |
| Participation | Page accessible dans les tests ; lien V2.5 corrigé | Vérifier le parcours de soumission et les erreurs Edge **sans créer de spam ni rendre publiques des données tests** |
| Identité renforcée PR #22 | Composants prêts en branche ; ancien test 10/10 | Rebaser/réconcilier après `main`, tester si retenu pour le lancement. Ne pas le rendre bloquant uniquement pour le raffinement visuel |
| Publication graphique PR #28 | Tests simulés ; non fusionnée | Garder hors du chemin public V0 tant que sessions et habilitations ne sont pas validées |

**Attention aux PR en concurrence :** les corrections V0 de `bibliotheque.html` et de `manifeste-v2-5.html` recouvrent des correctifs déjà présents dans la PR #22. Pour la fusion, **reconnaître et supprimer le doublon**, ne pas les refaire ni écraser l'autre branche. Le CSS mobile doit aussi être repris lors du rapprochement avec `style.css` de #22.

## 4. Brief graphique de passation aux Communications

**Accroche :** `De la Faille naît l'Interstice.`  
**Message de présentation à conserver :** La Faille noire ouvre un espace de réflexion et de construction collective. Interstice relie les connaissances, les initiatives et les pratiques des communs. Le manifeste V2.5 est une base éditoriale **encore ouverte à l'adoption collective**.

**Visuels à réutiliser et non recréer :**
- identité validée des deux logos, déjà sur le site ;
- trois carrousels de quatre images existants de l'Atelier des Communications (vérifier fichiers maîtres, ordre, légendes et versions finales avant toute programmation) ;
- illustrations PR #22 sur le travail, la réparation et la transmission, seulement après intégration ou export vérifié, avec droit d'utilisation et alternatives textuelles.

**Contrôle du bon à communiquer :** URL publique exacte et fonctionnelle, orthographe des noms, statut explicite « manifeste non adopté collectivement », crédits, consentements et anonymisation, lisibilité en aperçu mobile, textes alternatifs, ratio de coupe Instagram, absence de promesse de modération/participation qui ne fonctionnerait pas encore. Les cartes du lancement ne doivent **pas** présenter les quinze imports privés comme des fiches accessibles.

**Fichier livré à l'atelier :** cette fiche d'inventaire + la branche V0 testée. L'Atelier des Communications décide du calendrier avec l'atelier central ; **aucune publication sociale ni planification créée**.

## 5. Découpage indispensable / reportable

**Indispensable, avant l'annonce :**
- adopter ou intégrer les corrections V0, puis vérifier la **vraie version déployée** ;
- ouverture effective des pages et liens publics, messages cohérents concernant le statut du manifeste et le caractère expérimental du Wiki ;
- contrôle raisonnable des formulaires et des erreurs, et contrôle manuel du clavier sur les pages clés ;
- obtenir un accord de communication pour les visuels préparés, sans confondre validation graphique et adoption politique.

**Peut attendre la V0.1 :** refonte parfaite de toute la typographie, exports PNG/WebP supplémentaires, tous les modèles du design system, moteur documentaire avancé, connexion des quinze brouillons à une modération sécurisée, enrichissement encyclopédique complet, animations, retouches minutieuses des illustrations, PDF soigné de toutes les archives.

## 6. Décisions / dépendances

- **Relieur et Anarchitecte :** coordonner la sortie et les PR #22/#28 sans double fusion ; tests de déploiement du lot V0.
- **Communications :** vérifier les trois carrousels et légendes existants dans le stockage réellement utilisé ; ne pas les remplacer ni annoncer une programmation inexistante.
- **Juriste, Archiviste, Lecteur :** garantir les crédits/droits et le traitement des sources et des incertitudes.
- **Collectif :** fixer les termes de la première présentation publique, et ne pas présenter V2.5 comme un texte adopté.
- **Graphiste :** test mobile/desktop, contrastes et intégration des éléments retenus ; pas de pouvoir de validation éditoriale.

**Conclusion :** une première sortie **des contenus publics existants** est envisageable sans attendre la perfection du design system. Cela ne rend pas les 15 brouillons ou l'outil de modération accessibles. Le passage de « branche testée » à « site réellement publié » reste à vérifier après une fusion contrôlée.
