# Cycle 8 — Graphiste — Intégration et accessibilité
**1 novembre 2026. Initiative individuelle de Zout ; candidat, sans publication.**

## Sources de réconciliation
PR #50 SHA `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb`; #57 `2d8bb7960d7e2a4f1f3428841cbcc705a0962877`; #59 `755588993e58e3a97d60d27be4d99f387a81316c`; #61 `b101de10f8044ff486880c50a10091700428a4ca`; #63 `4988dbce3606fa6c319089354d11f32b47436b04`; #66 `8ed332c4541a864ac82c81ff6ce7939dc4369b11`.
La couche C8 est dérivée de #66. Les dix profils de la PR #61, les cinq statuts de #63, les catégories de médias de #66 restent inchangés et disponibles dans la chaîne de CSS. Aucun texte historique, ni média, ni correctif La Lectrice réécrit.

## Fichiers candidats
- `assets/graphiste-cycle8-integration.css` : extension opt-in `.interstice-fiche.graphiste-c8`, navigation tactile avec cibles 48px, focus visible, contenu en grille repliable et impression A4.
- `design-system/maquette-cycle8-navigation-integree.html` : quatre entrées Wiki, Bibliothèque, biographies et enquêtes, liens vers pages de même branche ; chacun possède sources/crédits, contradictions et réserves.
- `tests/graphiste-cycle8-2026-11-01.test.mjs` et workflow `.github/workflows/graphiste-cycle8-2026-11-01.yml` : QA **des seules nouvelles modifications**, pas répétition des CI des cycles antérieurs.

La maquette présente trois types de médias en texte : archive authentique, illustration et reconstitution. Elle ne prouve pas l'authenticité et ne diffuse aucun nouveau média. Les sources, crédits et licences réels doivent être contrôlés pièce par pièce avant toute publication.

## Test physique d'assistance préparé, NON exécuté
- **VoiceOver iOS / Safari :** ouvrir l'aperçu sur iPhone/iPad, effectuer le rotor par titres et liens, parcourir les quatre domaines, annoncer les états/sources/objections, ouvrir le détail facultatif, contrôler l'ordre de focus et le zoom texte 200–400 %.
- **TalkBack Android / Chrome :** navigation par titres, liens, zones et éléments cliquables, balayages, activation de l'exercice, vérification qu'aucune information n'est uniquement colorée.
- **NVDA Windows / Firefox :** touches H (titres), K (liens), D (régions), Tab/Entrée, mode navigation et lecture de la page, zoom navigateur jusqu'à 400 %, impression.
Pour chaque essai réel futur : modèle d'appareil, OS/navigateur, lecteur/version, anomalie, étape, résultat attendu/réel, capture et décision humaine.
Ces parcours sont **protocoles à exécuter**, pas preuves d'exécution.

## Tests automatisés et limites
Workflow dédié Chromium : trois largeurs 320/390/1280, structure de quatre sections, liens locaux HTTP 200, navigation clavier et exercice `details`, contraste du **texte principal uniquement**, zoom **CSS simulé** à 200 %, export PDF A4 et captures. La conclusion effective est celle de GitHub Actions sur le SHA du HEAD.
Aucun audit WCAG exhaustif ni lecteur d'écran réel, ni appareil physique, ni revue humaine des captures, ni contrôle des licences et liens externes. Les contrôles antérieurs des PR #50 à #66 ne sont pas rejoués. Aucune fusion, déploiement, approbation collective ou autorisation de Zout induite.
## Reprise
La Développeuse : importer seulement la couche C8 et les composants validés depuis les PR d'origine ; conserver les textes de La Lectrice, les statuts versionnés et permissions ; retester l'assemblage du SHA d'intégration. La Relieuse : contrôler textes et médias exacts avant validation humaine. L'Anarchitecte : vérifier types documentaires et routes. Aucune publication automatique.
