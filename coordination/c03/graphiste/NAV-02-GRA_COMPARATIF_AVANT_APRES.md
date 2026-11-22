# NAV-02-GRA — Comparatif avant / variante candidate et protocole de réception
**Date :** 2026-11-04. **Base #174 :** `01811690ae5dbd8bef4db2100395feea77a55431`. **Variante #176 :** `8b79d2805e01a21df803ba2b704c7b1b71aa5ff7` au démarrage de cette passe.

## Sources et degré de preuve
Captures PNG **réellement inspectées** dans #174 : `coordination/work/nav-01/captures/entree-390.png`, `exploration-390.png`, `porte-390.png`, `exploration-1280.png` (SOURCE_HEAD `a69974101d0d8a14bbcda7313915d5dc6f51ec32`). Ce HEAD de capture est antérieur au HEAD final #174. **Aucune capture après #176 disponible** : les effets de la variante sont des attentes de code, non des résultats visuels constatés. Aucun essai interactif sur Android ni URL HTTPS candidate vérifiée par la Graphiste.

## Avant / après, sans surpromettre
| Point | AVANT : capture #174 inspectée | APRÈS : variante #176 dans le code, à vérifier par capture |
|---|---|---|
| Ramifications et portes | Ramifications rouges officielles lisibles ; gros ronds numérotés, étiquettes opaques, guides surajoutés | Guides de navigation atténués ; halos réduits ; étiquettes légèrement moins massives. Le SVG officiel n'est pas touché. Vérifier si les libellés restent encore trop « boutons ». |
| Porte ouverte sur mobile | Grande portion du symbole au-dessus d'un long panneau ; liste de traversées en rectangles bordés ; lien R6 très haut | Texte de localisation de porte, traversées avant l'index R6, liens de parcours moins encadrés. **La disposition panneau sous carte reste inchangée** : continuité spatiale encore insuffisante, correction à poursuivre avec la Développeuse. |
| Contrôles à 390 px | Boîte blanche de commandes volumineuse et sur deux lignes | Grille de commandes 5 colonnes sous 390 px ; police et espacements réduits, fonctions conservées. Risque de largeur/retour de ligne à 320 px à tester, sans prétendre que c'est réglé. |
| Entrée | Logo Faille noire grand et lisible, CTA, entrée sans animation | Aucun changement du visuel d'entrée, volontairement. Vérifier sur téléphone si le passage est réellement perçu comme une entrée dans la faille. |

## Arbitrage Graphiste : P0-A/B/C toujours des hypothèses
- **P0-A :** ne pas redessiner ni effacer les ramifications/nœuds officiels (Q5 OUI). Tester la lisibilité du nom des portes au repos, au focus et à la sélection. Si les cartouches dominent encore, préférer une réduction de leur surface et non une nouvelle illustration.
- **P0-B :** **point restant le plus faible.** La modification d'ordre du panneau ne suffit pas à établir une continuité spatiale. Étudier avec Développeuse une variante mobile réversible où la porte/branche active reste perceptible pendant la lecture, sans empêcher le scroll, le focus ni le zoom 400 %. Aucun changement de structure risqué sans capture/test.
- **P0-C :** mesurer réellement l'emprise des contrôles sur 320/390 px et vérifier toutes les cibles ≥44 px. Ne pas faire dépendre l'exploration d'un pincement ou d'un geste caché.

## Essai indispensable de Zout
**Précondition :** Développeuse livre une URL HTTPS isolée, ouvrable sur Android, permissions/coût vérifiés, sans publication de la candidate sur le site public. La Graphiste ne prétend pas avoir reçu cette URL.
1. Entrer dans la faille avec animation puis sans animation : sentiment de passage ? échelle relative des deux logos ?
2. Déplacer et zoomer, toucher deux portes, revenir à la vue entière : impression d'espace ou de menu ? nœuds toujours lisibles ?
3. Ouvrir une porte, choisir une traversée, bifurquer puis revenir : repère spatial conservé ou perdu ? lecture agréable sans scroller à l'aveugle ?
4. Essayer les commandes en mode portrait sur Crosscall, notamment à une main, et « Tous les accès » sans geste.

## Captures à fournir pour un vrai avant/après
Sur **le même navigateur, les mêmes dimensions et le HEAD exact** : `entree-390`, `exploration-390`, `porte-390`, `traversee-390`, `exploration-1280`, `porte-1280`, puis 320 px et zoom 400 %. Conserver les captures AVANT déjà archivées et produire les APRÈS avec SHA dans un `SOURCE_HEAD.txt` propre à la variante. Aucun montage comparatif n'est présenté comme vérifié avant production des nouvelles images.

## Transmission
**Développeuse :** priorité 1 URL candidate #174 ; priorité 2 tester et capturer la variante #176 ; priorité 3 proposer le correctif spatial P0-B et vérifier régressions. Ne pas bloquer l'accès à #174 pour attendre le design.
**Relieuse :** maintenir l'arbitrage ouvert jusqu'au test utilisateur ; Q1/Q4 NON concernent la perception actuelle, Q2/Q3 restent non vérifiés.
**Statut :** comparaison documentaire et visuelle de l'AVANT, comparaison attendue de l'APRÈS ; aucune fusion, publication ou modification des SVG officiels.
