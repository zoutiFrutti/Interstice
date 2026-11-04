# C05-GRA-01 — Consultation directe, état exact du 4 novembre 2026

## Versions contrôlées
- #174 : `01811690ae5dbd8bef4db2100395feea77a55431`
- #176 : `fd879d63d4964d527632c364c2f124cb5dc3af41`
- #181 : `065584c65c6a77fe02e5488978b5c6d1753ba4c6`
- #182 : `ce3d0d9cbcb674750d77db35e731fee5af8c2a5b` (avant ce rapport)

Le moteur #182 contient toujours `moveTo({cx:525,cy:568,span:180},true)` ; sa CSS contient `.threshold-logo-link`, des règles `data-orienting` et un `position:sticky`. Vérification de code, **pas** validation d'expérience.

## Comparatif
| Sujet | Avant, captures #174 (SOURCE_HEAD `a699741`) | Après, code #182 | Preuve manquante |
|---|---|---|---|
| Entrée | Logo avec appel à entrer classique | Logo entier cliquable, « entrer » discret | capture 320/390 du HEAD #182 |
| Plongée | transition antérieure | caméra vers (525,568), span 180 | captures successives/vidéo du vrai mouvement |
| Directions | étiquettes de portes sur la carte | apparition atténuée au départ, retour des nœuds | état après premier geste et focus |
| Porte et contenu | panneau de type catalogue | hiérarchie de traversées et contexte, repère mobile | capture porte et traversée, scroll réel |
| Android | barre de commandes volumineuse | commandes compactées et secondaires conditionnelles | 320/390, 400 % et cible tactile |

## Contrôles provisoires
**Conforme dans le code :** SVG officiels non remplacés, entrée par logo, point de plongée programmé, apparition progressive, quatre portes maintenues.

**À corriger seulement si démontré :** « entrer » trop visible ; zoom de plongée trop fort ou mal centré ; directions illisibles après mouvement ; panneau qui coupe l'espace ; commandes mobiles introuvables.

**Impossible à juger actuellement :** impression réelle d'exploration, bonne taille des logos sur Android, qualité de l'animation, confort d'une main, rendu réel 320/390 et à 400 %.

## Trois corrections artistiques maximales, conditionnelles
1. Ajuster uniquement la position/opacité du mot « entrer » ou la durée du passage si le test le justifie (`explorer.css`, `explorer.mjs`).
2. Ajuster la révélation des nœuds et le repère de porte active, sans toucher aux SVG (`explorer.css`, `explorer.mjs`).
3. Dégager le viewport mobile et maintenir le contexte spatial dans le panneau (`explorer.css`, `explorer.html`).

## Consultation directe de Zout
**Pas de questionnaire artistique pour le moment.** Zout n'a toujours pas eu de version interactive accessible vérifiée dans cette passe ; un vote sur l'intensité de plongée ou la sensation d'exploration maintenant serait spéculatif. Après URL HTTPS réellement ouvrable et captures du HEAD, poser dans cette conversation un questionnaire unique avec les choix nécessaires et recommandations, sans passer par La Relieuse.

**Travail de cette passe :** audit du code, document de convergence, transmission ; aucune modification de CSS/JS, aucun test navigateur prétendu, aucune fusion ni publication.
