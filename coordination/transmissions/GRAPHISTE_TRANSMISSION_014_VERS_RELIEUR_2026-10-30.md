# LA FAILLE NOIRE × INTERSTICE — Atelier Graphiste
## Transmission 014 au Relieur · 30 octobre 2026
**Statut : candidat graphique PR #35, non fusionné et non déployé.**
Ne confondre ni exécution CI en file d'attente avec test réussi, ni document GitHub avec réception dans une autre conversation.

### A. Reprise et instantanés
- PR #35 : branche `design/lancement-v0-verifications-2026-10-30`, HEAD initial `f9558d0c112f65b2ba22bcee4d9355034edc98b8`.
- `main` au début de la passe : `a9ba3c81c94a068639bccda24cbefb8950b081bd`.
- PR #41 : plusieurs HEAD apparus pendant la session. Dernier état de l'interface **effectivement examiné** : `898c9e80ecd6d3a9be02800c3cff7659fd0845ed`, utilisé comme snapshot de test dans la CI candidate. Code de l'interface, liste autonome du module carte, boutons tactiles par commune et compatibilité CSS vérifiés. Ne pas fusionner cette PR.
- PR #44 : dernier état des textes **effectivement vérifié** : `393bfbd8bbacc543bf32f38447fe9f610009294e`. Les blobs lus comme référence sont `3e5e7b399b8ed83db59ca011b8575cf58183518b` (Décider ensemble) et `cadf80001e2c61a997ae1a6f05e577c918b01211` (Travail/soin/pouvoir). Ne pas écrire sur la branche du Lecteur.
- PR #22 non fusionnée et non dupliquée.

### B. Vingt passes demandées, résultats honnêtes
| Passe | Action réellement effectuée | État |
|---|---|---|
| 1 | Vérification PR35 et main via HEAD GitHub | Fait |
| 2 | Inspection de l'évolution PR41 (HTML, CSS, JS, tests ; comparaison de commits et nouvelle alternative de communes) | Fait |
| 3 | Inspection de la dernière PR44 et des nouvelles corrections éditoriales | Fait |
| 4 | Comparaison des deux fichiers sur PR35 avec les sources PR44 par paragraphes | Fait |
| 5 | Repérage des paragraphes manquants et formulations de confidentialité plus récentes | Fait |
| 6 | Reconstruction des seules présentations HTML sur les nouveaux textes PR44, et seconde synchronisation après mise à jour concurrente ; **0 paragraphe perdu** au dernier contrôle | Fait |
| 7 | Contrôle de la hiérarchie et du H1 de l'accueil « Et si on essayait autre chose ? » ; préservation du CSS mobile existant | Fait |
| 8 | Contrôle des CTA : « Découvrir ce qui existe » pointe sur un ID présent, « Participer » vers une page existante | Fait |
| 9 | « Décider ensemble » : 22 paragraphes issus du Lecteur, six H2, sommaire ancré, statut de relecture, aide à la correction documentaire non sensible | Fait |
| 10 | « Qui fait vivre les communs ? » : 19 paragraphes issus du Lecteur, huit H2, liens de sources et mise en page lisible | Fait |
| 11 | Comparaison `cartes-design.css` PR35/PR41 : SHA **identique** `07e8c54fff6cc4dfc66f42ba19cf364962e400c5` ; feuilles réellement chargées inspectées | Fait |
| 12 | Pas de second import identique. Proposition `cartes-integration-014.css` limitée à un delta SVG mobile, à charger **après** `cartes-compat.css` ; instructions dans `docs/GRAPHISTE_RACCORDEMENT_MINIMAL_CARTES_014.md` | Fait, intégration par Développeuse en attente |
| 13 | Contrôle des parcours communs et des 7 fiches fictives dans les contrats et tests du prototype ; séquence Chromium candidate préparée | Contrôle statique fait ; nouvelle CI en attente |
| 14 | Contrôle des parcours possibles et des 4 fiches fictives ; état fictif et types textuels | Contrôle statique fait ; nouvelle CI en attente |
| 15 | Contrôle des filtres, textes, cibles de 52–60 px ; nouveaux boutons de sélection des communes PR41 pris en compte dans le test | Fait côté code ; vérification navigateur 014 en attente |
| 16 | Amélioration candidate du SVG mobile : carte 760 px dans panneau horizontalement balayable, libellés 23 px, zones de repères conservées ; aucun point de domicile publié | Fait sur PR35 uniquement |
| 17 | Ajout dans `tests/graphiste-cartes-013.mjs` d'une panne simulée du module `cartes-map.mjs` : la liste doit encore présenter 7 communs puis 4 possibles | Test ajouté ; **pas encore exécuté** sur cette version |
| 18 | Workflow GitHub Actions pour 390/1280, zoom et reset, absence de débordement, contraste notice, focus, SVG, bascule liste/carte et panne du moteur. Lancements GitHub **effectivement demandés** : carto https://github.com/zoutiFrutti/Interstice/actions/runs/41102298457 et site/Wiki https://github.com/zoutiFrutti/Interstice/actions/runs/41102298507 ; au dernier contrôle **queued, aucun résultat**. | **Bloqué par file GitHub, pas déclaré réussi** |
| 19 | Protocole physique Android rédigé avec contrôle Crosscall Stellar X5, taille police 125 %, TalkBack, gestes, zoom, focus, retour, sécurité et confidentialité : `tests/GRAPHISTE_014_ANDROID_PHYSIQUE_A_FAIRE.md` | Protocole fait, **aucun test matériel effectué** |
| 20 | Rapport présent, fichiers candidats versionnés, commentaires de transmission aux PR, captures de référence 013 conservées. Les nouvelles captures finales sont configurées en artefacts du workflow 014 et **n'existent pas encore tant que la CI est en file d'attente** | Rapport fait ; nouvelles captures **en attente** |

### C. Preuves et tests
- Ancien jalon réellement réussi (PR35 transmission 013, **à ne pas attribuer à 014**) : 60/60 contrôles d'accueil/Wiki https://github.com/zoutiFrutti/Interstice/actions/runs/41094118135 ; 10/10 séquences carte https://github.com/zoutiFrutti/Interstice/actions/runs/41094118134 ; captures 013 conservées.
- Nouvelle CI 014 au dernier contrôle : **queued**. Aucune déclaration de réussite pour les 18+ nouvelles vérifications, ni pour le nouveau rendu mobile.
- Contrôles statiques réellement exécutés : titre H1, ID du CTA, existence de participer.html, 22/22 et 19/19 paragraphes conservés, sommaires sans IDs en double ou ancres mortes, CSS PR35/PR41 même SHA, nouveaux fichiers de delta limités aux styles graphiques.
- Ratios WCAG calculés sur couples couleurs du CSS candidat : notice fictive 12,8:1 ; bouton blanc/rouge 6,99:1 ; texte des cartes 12,03:1. Calcul de couleurs **non équivalent** à un audit WCAG ou à une mesure sur appareil réel.
- Réserves : labels SVG même agrandis à tester visuellement, zone horizontale pourrait nécessiter rôle de région/focus/instruction de balayage, autres couples de couleurs non exhaustivement audités.
- Captures existantes de la transmission 013 uniquement **références historiques** et non captures finales 014.

### D. Fichiers modifiés sans fusion
- PR35 : `wiki-decision-collective.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html`, `style.css` (note de confidentialité sous actions).
- PR35 : `cartes-integration-014.css` (ajout), `tests/graphiste-cartes-013.mjs` (contrôles du SVG, boutons communaux, panne du moteur et zones de focus), `.github/workflows/graphiste-cartes-013.yml` (CI 014 sur snapshot PR41), `docs/GRAPHISTE_RACCORDEMENT_MINIMAL_CARTES_014.md`, `tests/GRAPHISTE_014_ANDROID_PHYSIQUE_A_FAIRE.md`.
- PR41 et PR44 : **aucune écriture**.
- `main` : **aucune écriture** ni nouvelle publication.

### E. Transmission et arbitrages au Relieur
- Développeuse : le CSS graphique principal est déjà intégré ; **ne pas le recopier**. Examiner seulement le petit delta `cartes-integration-014.css` et prévoir un texte d'aide accessible sur le balayage du SVG. Maintenir la liste comme premier affichage et les nouveaux boutons par commune.
- Lecteur : conserver la priorité éditoriale aux deux textes PR44, avec toutes les dernières corrections sur sources, limites et confidentialité. Les labels de relecture ne sont pas des validations.
- Relieur : coordonner rapprochement PR35 / PR41 / PR44 sans fusion en bloc, validation sur Android physique et contrôle d'ergonomie par une personne ; ne pas prendre le manifeste V2.5 pour une règle collectivement adoptée.
- Si les workflows 014 sont finalement exécutés et des captures produites, **inspecter les rapports et résultats du même SHA** avant de déclarer la passe 18 / les captures de la passe 20 terminées. En cas d'échec, corriger puis rerun sur SHA exact.

**État synthétique :** 20 points traités, mais **tests navigateur 014 et captures 014 non réalisés au dernier contrôle**, essai physique également non réalisé. Le candidat est sur la PR #35 seulement, sans fusion ni diffusion.
