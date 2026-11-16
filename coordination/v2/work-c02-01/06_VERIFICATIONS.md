# Vérifications du 3 novembre 2026

## Résultats acquis
| Contrôle exécuté | Résultat | Portée |
|---|---|---|
| Empreintes Git des fichiers de main | 524/524 conformes, zéro modification | Comparaison des octets avec l’arbre GitHub du commit `7344591fa7f0f4f6951ea273525039cf2cb9982a`, y compris fontes et SVG |
| Tests locaux existants R1/R2/R4 et contrats de reprise Wiki | 11/11 réussis | Cinq fichiers de tests utilisés par la certification R6 existante |
| Tests agents C11/C12 | 27/27 réussis | `python3 -m unittest discover -s coordination/agents -p 'test_*.py'` |
| File de relecture Wiki | 1 contribution valide | `node scripts/validate-wiki-review-queue.mjs` ; aucune publication |
| Syntaxe navigation active | Conforme | `node --check assets/faille-navigation.js` |
| Nouveau contrat WORK | 10/10 tests réussis | Identifiants/alias, relations, sources, quatre portes, sept PAR, bifurcations, retours, blocage juridique et absence de publication |
| Données WORK | 219 ressources, 100 sources, 19 relations, 30 réserves | Toutes les références d’étapes, relations et objections se résolvent dans le lot ; champs inconnus conservés |
| URL historiques et ancre Entraide | 32/32 présentes | Contrôle de fichiers et de l’ancre, pas requêtes HTTP vers la production |
| Liens internes de 44 pages HTML existantes | 1 lien cassé préexistant repéré | Détail ci-dessous ; aucun lien public corrigé dans cette mission |
| Schéma JSON candidat | JSON lisible et règles couvertes par le validateur métier | Pas de validation par une bibliothèque JSON Schema externe : absente de l’environnement |

## Contrôle navigateur de R6 sur copie locale
L’accueil et l’entrée immersive ont été ouverts dans Chromium via l’aperçu local. Les cinq nœuds ont été activés avec Entrée : Wiki, Médiathèque, Atlas, Parcours et Entraide. À chaque sélection, le fragment, l’intitulé de statut et le lien cible correspondaient. Retour du navigateur depuis Entraide : état Parcours restauré. Un lien profond Entraide et la destination `parcours.html#entraide` ont été examinés. Une photographie textuelle de ces résultats figure dans `evidence/browser-r6.json`.

Ce contrôle porte sur R6 existant, pas sur un écran V2 : aucun écran V2 n’est intégré. La présence des rôles, noms accessibles et statuts dans l’arbre d’accessibilité a été observée ; cela ne constitue pas un essai avec une personne utilisant un lecteur d’écran.

## Anomalies conservées, sans modification publique
- `wiki-autonomie-materielle-savoir-faire.html` pointe vers `wiki-mutualiser-materiel.html`, absent de main. Le lien reste inventorié, pas redirigé arbitrairement.
- La page immersive affiche encore « Symbole Interstice R6 candidat, non encore validé par Zout », alors que les logos actifs ont fait l’objet de la validation artistique R6. Contradiction de libellé repérée, correction publique séparée à autoriser.
- Le catalogue `ressources-data.js` compte 30 entrées ; l’accueil parle encore de vingt premières références. Les 30 clés numériques sont conservées avec un espace de noms technique candidat, sans prétendre qu’il s’agit des 71 FN.
- Les cinq destinations R6 ne correspondent pas aux quatre portes V2. Les anciens tests « cinq nœuds » restent valables pour la navigation active inchangée.

## Non vérifié ou impossible à certifier dans ce lot
| Contrôle | État exact |
|---|---|
| Lecteurs d’écran NVDA/VoiceOver/TalkBack | Non testé matériellement ; arbre d’accessibilité seulement observé |
| Tactile réel, gestes à deux doigts | Non testé sur appareil |
| Zoom navigateur 400 %, reflow 320 px | Non exécuté dans ce contrôle navigateur |
| Préférence de réduction des animations | Prise en charge présente dans les sources et tests statiques R6 ; pas de nouvelle émulation navigateur |
| Navigation sans JavaScript | Liens textuels présents dans le HTML ; pas de nouvelle session navigateur avec JavaScript désactivé |
| Impression et hors ligne des futures fiches pratiques | Non testé ; ces fiches restent bloquées |
| Tests Playwright historiques complets / build Jekyll | Non exécutés localement ; résultats de CI à lire sur le SHA de la PR |
| Sources externes et droits de toutes les œuvres | Non audités intégralement ; pas de nouveau visa |
| Originaux MP159, PV du 21 mai, SHD Ly22, comptes | Non consultés ; les dossiers éditoriaux ne remplacent pas ces pièces |
| Publication ou déploiement V2 | Non effectué, non autorisé |

Les résultats automatiques vérifient la cohérence et la préservation des fichiers. Ils ne ferment aucune objection historique, juridique, scientifique ou politique.
