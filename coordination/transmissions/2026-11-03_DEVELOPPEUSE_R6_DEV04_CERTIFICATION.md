# R6-DEV-04 — Certification technique finale, transmission à La Relieuse

Date : 2026-11-03. **Avis provisoire : CONFORME sur le périmètre automatisé de la PR #150 ; certification consolidée #151 à confirmer sur son HEAD final.**

## Provenance / commits
- PR #150 : HEAD stable `9f1ade55741be5ba90912dbbe463b1a3c87dec59` ; base PR #149 `b1d3b7773105c61843c1e7177315abb08da11114`.
- PR #151 : branche de certification fille de #150, reprenant les contrôles #148, sans changement SVG, sans fusion main.
- SHA-256 recalculés dans la CI #150 : Faille noire `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6` ; Interstice actif et GRA02 approuvé `0fe365cd02a238bf4486f936683d194aab6a1ee2e62e2d5a2eaee9b72eff0453`.

## Preuves exécutées sur HEAD #150
- Workflow R6 run https://github.com/zoutiFrutti/Interstice/actions/runs/41622936285 : completed/success, 4/4 tests réussis, 0 échec.
- Inventaire automatisé : 133 fichiers texte scannés, 496 occurrences : 214 ancienne maquette, 267 R6 candidat/source, 15 R4 archive/test ; aucun manifest PWA détecté. L'inventaire est un recensement par expressions régulières, non une preuve formelle de l'absence de tout lien obsolète.
- Comparateur chargé à 320, 390, 768, 1024, 1280 et 1920 px : 16 images chargées pour chaque largeur, sans débordement de document dans le test Chromium, JS désactivé et reduced-motion.
- Sept tailles 32/48/64/96/192/390/665 px testées pour chaque logo ; captures PNG, PDF A4.
- Artefact CI #150 : ID 13224911127, 15 571 773 octets, SHA-256 `9c1f043f14b87aaf26ccf918acd214a0a9445df48d410a881bbd849d22a960e2`.

## Matrice de certification
| Domaine | Résultat | Limite |
|---|---|---|
| Source Faille noire et variante Interstice | CONFORME | SHA-256 recalculés, égalité source/actif GRA02 |
| Archives et originaux | CONFORME aux contrats R6 | pas de suppression ; restauration à vérifier avant fusion |
| 7 tailles SVG et 6 largeurs | CONFORME Chromium | pas de validation écran physique |
| Chargement images / débordement comparateur | CONFORME Chromium | performances bas de gamme non mesurées |
| 5 nœuds, clavier, focus, deep links, retour | CONTRÔLES #148 REPORTÉS dans #151 | CI #151 requise pour certification sur les logos définitifs |
| Sans JavaScript / reduced motion | CONFORME Chromium sur comparateur | parcours de navigation complémentaire dans #151 |
| Zoom navigateur natif 400 % | NON TESTÉ | zoom CSS Chromium n'est pas équivalent |
| Pincement sur téléphone physique | NON TESTÉ | simulations R4 distinctes |
| TalkBack / VoiceOver / NVDA | NON TESTÉ | aucune preuve réelle |
| Contraste microfissures | réserve non bloquante pour conformité technique | validation artistique de Zout acquise ; lisibilité physique non vérifiée |

## Risques, arbitrage et rollback
- Aucun défaut bloquant prouvé dans les tests #150 ; le passage des tests consolidés #151 reste un **prérequis** avant avis CONFORME final.
- Les PR #147 et #149 ne doivent pas être fusionnées séparément. L'intégration technique candidate #150 et sa certification #151 sont dépendantes.
- Rollback sans fusion : fermer #151 et #150, aucun impact sur main. En cas d'intégration future : restaurer les deux fichiers actifs depuis `assets/archives/logo-faille-noire-pre-r6.svg` et `assets/archives/logo-interstice-pre-r6.svg` puis relancer les tests de chemins et SHA ; conserver les originaux dans `assets/identite/r6/sources/`.
- Pas de modification de contenu éditorial, architecture, SVG ni déploiement dans #151.
