# Contrat de navigation V2 candidat

## Entrée, portes et manifeste
Les deux fichiers SVG officiels demeurent strictement inchangés. Leurs zones interactives sont des calques séparés, avec un nom accessible. Une activation explicite depuis l’entrée conduit vers la navigation immersive ; aucun zoom automatique n’est nécessaire pour accéder aux contenus. Une liste HTML des mêmes quatre portes est présente dès le chargement, sans JavaScript.

Les quatre portes conduisent aux pages historiques : Encyclopédie → `wiki.html`, Médiathèque → `bibliotheque.html`, Carte → `atlas.html`, Entraide → `parcours.html#entraide` tant qu’aucune nouvelle page n’est autorisée. La dernière URL est une compatibilité provisoire avec le cadrage existant, pas l’annonce d’un service ou d’un dossier de droits validé.

La Faille noire reste le projet fondateur ; son manifeste V2.5 (`manifeste-v2-5.html`) et l’archive (`manifeste.html`) sont accessibles depuis chaque porte et chaque vue Parcours. Aucun manifeste candidat plus récent n’est substitué.

## Parcours et bifurcations
Les sept Parcours forment une vue transversale accessible depuis les portes et l’index historique `parcours.html`. Aucun nœud de porte supplémentaire n’est créé. Chaque étape conserve son identifiant local dans un PAR, ses ressources canoniques et les références des relations affichées. Un lien « suite » désigne un ordre de lecture : il ne devient pas une arête historique du graphe.

Une bifurcation conserve le PAR, l’étape d’origine et la ressource visitée dans l’historique de session. Retour : étape visitée précédente ; retour au Parcours ; retour à sa porte ; retour à la vue complète. Le bouton du navigateur reste fonctionnel après une entrée directe. Pas de redirection universelle vers l’accueil, de boucle de retour, de mémoire de profil ou de prérequis de lecture.

La ressource n’est rendue publiquement que si sa version possède les visas et l’autorisation explicite attendus. Une relation incertaine reste qualifiée. PAR-005 n’expose aucune fiche pratique pendant le blocage ; les autres PAR restent également sans visa final. Le dossier de préparation interne peut décrire les manques ; cela n’autorise pas leur affichage public.

## Compatibilité des URL
Conserver les 24 URL `wiki-*.html`, les index, les deux manifestes et l’ancre `parcours.html#entraide`. Les fragments R6 `#wiki`, `#bibliotheque`, `#atlas`, `#entraide`, `#parcours`, `#carte` sont acceptés par l’adaptateur candidat. Ils ne sont pas réécrits dans le site actif. Toute redirection future exige un audit complet des URL entrantes et des ancres ; aucune redirection n’est proposée comme déjà validée.

## Accessibilité : critères d’acceptation
| Mode | Comportement attendu et contrôle |
|---|---|
| Clavier | Tabulation logique, vrais liens/boutons, activation Entrée/Espace selon sémantique, focus visible ; Échap revient à la vue complète sans perte de focus ; aucun piège |
| Lecteurs d’écran | Titres et régions, noms des quatre portes, état de sélection annoncé brièvement ; liste équivalente ; le graphe ne remplace pas le contenu linéaire |
| Tactile | Défilement vertical utilisable ; aucun geste à deux doigts obligatoire ; boutons pour déplacer/zoomer ; cibles ≥44 px visées |
| Zoom 400 % | Reflow à 320 CSS px, aucune barre ou fenêtre masquant une porte ; index et contenus utilisables sans déplacement bidimensionnel imposé |
| Réduction des mouvements | Pas de transition de caméra automatique ; sélection et liens fonctionnels sans animation |
| Sans JavaScript | Quatre portes, manifeste, index et contenus autorisés disponibles comme liens HTML ; aucune couche fermée derrière un bouton inerte |
| Historique | Lien profond, rechargement, retour/avance conservent une destination déterministe ; fragment invalide revient à la vue complète |

Ce contrat n’est pas un résultat de test. Le rendu V2 n’est pas intégré ; les vérifications matérielles restent à faire sur la future version exacte.
