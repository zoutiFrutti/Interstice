# LA FAILLE NOIRE × INTERSTICE · Transmission 015
## La Graphiste → La Relieuse · 30 octobre 2026
**Statut : candidate non fusionnée de la PR #35. Aucune publication, aucune écriture dans #41/#44, aucun test Android physique revendiqué.**

### A. Version de départ et provenance
- PR #35 (branche `design/lancement-v0-verifications-2026-10-30`) au démarrage : `d428a13e6478bfb69caceea7e7766ab73fd5d2bf`. Nouveau code final testé : **`89951c219a4b04b93c8a2906d9b90e01127c81e3`**.
- `main` de départ : `e65b337a1121cff3ad73250566419037355c706b`. Les modifications graphiques **ne sont pas** écrites sur le `main`.
- PR #41, interface testée sur snapshot `ba2de98fd37ce5997e0eee8e2d432433398c6283`. Le HEAD plus récent `bc9da7d57806aee2b5bdcba8afb79dec0ed6d80a` n'a modifié que journal/transmission d'après comparaison GitHub, pas les fichiers cartographiques testés.
- PR #44 : versions les plus récentes effectivement comparées au contrôle final, deux blobs sources `7be5bba6a2579eefbec01381f9a2653d2dc5ef14` et `d52106115de9f1e5207d2df8799644a07faee464`. Aucune écriture dans PR #44.

### B. Trente passes factuelles, en six lots

| N° | Action réelle et preuve | État |
|---|---|---|
| 01 | Lire HEAD PR #35 et reprendre ses fichiers sans nouvelle branche | FAIT |
| 02 | Lire HEAD PR #41 et les derniers fichiers du prototype | FAIT |
| 03 | Lire HEAD PR #44 et ses deux articles candidats | FAIT |
| 04 | Comparer `wiki-decision-collective.html` source/copie, repérer 2 paragraphes corrigés | FAIT |
| 05 | Comparer `wiki-lecture-croisee-travail-soin-pouvoir.html`, repérer 1 puis 2 passages nouvellement corrigés | FAIT |
| 06 | Vérifier titre H1 « Et si on essayait autre chose ? » et les deux CTA, destinations existantes | FAIT |
| 07 | Tester accueil et deux articles en Chromium **320×760**, captures | FAIT |
| 08 | Tester le corpus de 18 pages en **390×844**, captures | FAIT |
| 09 | Retester le corpus en **1280×800**, captures | FAIT |
| 10 | Diagnostiquer le défaut de focus du sommaire trouvé en CI ; corriger le CSS `:focus` scoped et retester | FAIT |
| 11 | Comparer `cartes-design.css` dans PR #35 / PR #41 : même blob SHA `07e8c54f...` | FAIT |
| 12 | Lire `cartes-compat.css` récent, notamment correctifs 320 px, boutons et absence de lieu | FAIT |
| 13 | Préserver l'import unique de `cartes-design.css` : n'injecter que `cartes-integration-014.css` pendant la CI candidate | FAIT |
| 14 | Vérifier SVG au rendu : labels à **23 px en 320/390**, panneau balayable, zoom et remise à zéro | FAIT |
| 15 | Vérifier commandes et boutons de commune (min. 52 px, textes 18 px), focus et interaction | FAIT |
| 16 | Tester liste avant la carte et retour aux fiches après filtres et navigation | FAIT |
| 17 | Tester lecture communs : **7 fiches fictives** | FAIT |
| 18 | Tester lecture possibles : **4 fiches fictives** | FAIT |
| 19 | Faire échouer volontairement le chargement `cartes-map.mjs` en Chromium : la liste fonctionne sans le module | FAIT |
| 20 | Vérifier bandeau « PROTOTYPE FICTIF », types explicites initiative/ressource/besoin/projet, pas de requête externe | FAIT |
| 21 | Capturer et contrôler visuellement « Décider ensemble » à 320, 390 et 1280 ; sommaire et statut visibles | FAIT |
| 22 | Capturer et contrôler « Qui fait vivre les communs ? » aux trois largeurs | FAIT |
| 23 | Contrôler liens internes/ancres, nombre de sources externes et paragraphes inchangés | FAIT |
| 24 | Produire captures des premiers écrans, des sommaires dépliés, des pages intégrales et des deux cartes | FAIT |
| 25 | Tester agrandissement **simulé** à 125 %, absence de débordement et contour de focus. Pas un zoom natif Android. | FAIT |
| 26 | Relancer les 2 CI sur le **SHA `89951c219...`** : **57/57 site + 21/21 carte** ; 0 échec | FAIT |
| 27 | Distinguer preuves Chromium de la vérification Crosscall/TalkBack physique : protocole `tests/GRAPHISTE_014_ANDROID_PHYSIQUE_A_FAIRE.md`, essai **non effectué** | FAIT (distinction), A_FAIRE (essai) |
| 28 | Recontrôler PR #35/#41/#44 : toutes draft, non fusionnées, conflits non résolus | FAIT |
| 29 | Stabiliser la candidate graphique dans la PR #35, sans duplicata PR #22 et sans modifier le moteur cartographique | FAIT |
| 30 | Inscrire ce bilan, une seule entrée synthétique au Journal commun de la branche et transmettre par commentaires PR | FAIT après écriture |

### C. Modifications réelles sur PR #35
1. `wiki-decision-collective.html` : texte du Lecteur actualisé, **22/22 paragraphes conservés**, six H2 + sommaire d'ancres, statut « À relire par un être humain », action de proposition documentaire et avertissement sur l'absence de canal confidentiel.
2. `wiki-lecture-croisee-travail-soin-pouvoir.html` : actualisations successives du Lecteur, **19/19 paragraphes conservés**, huit H2, mêmes garanties ; aucune édition de fond.
3. `style.css` : corrections ciblées à 320 px sur accueil et deux articles, statut et largeur de lecture conservés, correction du focus sommaire après échec de CI documenté.
4. `tests/lancement-v0-smoke.mjs` : suppression de 2 chemins dupliqués, 18 chemins uniques ; 320 px pour trois pages principales et 390/1280 pour 18 pages ; vérification sommaire ouvert, focus, sources, 125 % simulé, captures.
5. `tests/graphiste-cartes-013.mjs` : 320/390/1280, variante 125 %, accessibilité des boutons, repères SVG, zoom, liste sans moteur.
6. `.github/workflows/graphiste-cartes-013.yml` : snapshot PR41 exact `ba2de98f...` dans le checkout de test en lecture seule ; **aucune écriture dans PR41**.
7. `cartes-design.css` et `cartes-integration-014.css` : pas de nouvel ajout dans 015, le CSS principal est déjà intégré à l'identique dans PR41 ; le delta SVG 014 reste **candidat**, pas intégré en production.

### D. Vérifications, captures et limites
**CI site/Wiki :** https://github.com/zoutiFrutti/Interstice/actions/runs/41119393673 — **57 PASS / 0 FAIL**, SHA `89951c219a4b04b93c8a2906d9b90e01127c81e3`. 18 contrôles de chemins et ancres, 36 tests de pages aux deux largeurs et 3 tests ciblés à 320. Avant correction : 6 échecs de focus sommaire sur SHA antérieur ; corrigés et retestés.

**CI cartographique :** https://github.com/zoutiFrutti/Interstice/actions/runs/41119393582 — **21 séquences réussies**, SHA identique. 320/390/1280 : communs liste/carte, possibles liste/carte, zoom et SVG, filtre + focus + confidentialité, liste sans moteur. Analyse `report.json` : débordement horizontal global absent aux trois largeurs ; SVG natif 760 px dans le panneau mobile, texte des labels 23 px à 320/390 ; test zoom 125 % simulé passé. En mode carte, 0 carte HTML listée est **normal**, car panneau liste masqué ; marqueurs SVG et boutons communaux sont testés séparément.

**Captures vraiment réalisées :**
- Artefact `interstice-v0-captures`, run site/Wiki ci-dessus : accueil premier écran compact/mobile/desktop ; deux articles complets, premier écran, sommaires ouverts, zoom125 compact ; 58 fichiers avec rapport.
- Artefact `graphiste015-cartes-320-390-1280`, run carto ci-dessus : 19 PNG (communs, possibles, fiche, défaut du moteur, zoom125) et un rapport JSON. Captures contrôlées visuellement : premier écran accueil compact, article Décider compact et carte/liste mobile.
- Le comparatif est **multi-tailles du même code** et non une nouvelle identité visuelle.
- Les liens externes Wikipédia/éditeurs sont contrôlés syntaxiquement et listés dans le HTML ; **chaque destination externe n'est pas validée sur navigateur**. La relecture documentaire revient au Lecteur et à la Médiathèque.

### E. Bloqueurs et prochaine décision
- **Android physique : NON TESTÉ.** Nécessite Crosscall Stellar X5 et/ou test humain : toucher, rotation, 125 % système, TalkBack et gestion du balayage du SVG.
- **Pas de fusion :** PR #35, #41 et #44 restent ouvertes, draft, `mergeable=false`. Ne pas fusionner PR #22 en doublon. La Développeuse doit confirmer le delta `cartes-integration-014.css` et, si adopté, fournir une consigne de balayage textuelle à côté du schéma ; la liste accessible et ses boutons par commune restent le recours principal.
- Le Lecteur conserve l'autorité éditoriale sur les deux articles ; le label « à relire » n'est pas un feu vert à publication.
- Projet politique : Manifeste V2.5 éditorial mais non adopté collectivement ; données de cartes fictives uniquement.
- **Proposition unique au prochain cycle :** rapprochement de fichiers PR35/PR41/PR44 dans un ordre contrôlé par La Relieuse, puis test tactile réel et décision humaine explicite avant diffusion.

Le présent document enregistré dans GitHub est une transmission documentaire ; **il ne prouve pas sa réception dans une conversation distincte**.
