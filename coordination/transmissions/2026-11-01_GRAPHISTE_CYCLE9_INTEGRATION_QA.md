# La Graphiste — Cycle 9 : intégration candidate et contrôle des médias
**1er novembre 2026. Initiative de Zout uniquement, aucune instance collective ni délégation décisionnaire IA.**

## État et preuves consultées
- PR #66, SHA `8ed332c4541a864ac82c81ff6ce7939dc4369b11`, catégorie des médias. PR #68, SHA initial `d4dc9be115a208dfd02f717b74ecedce3d754940`, quatre domaines documentaires et sept liens de sommaire. Branche C9 directement dérivée de #68, sans réécriture des articles.
- PR #43 (Relieuse) HEAD consulté `4436de90d7d55707ef2f5e812363a146a79b4c05`, `coordination/JOURNAL_COMMUN.md` blob `dd65b0be79a32194dcf4894c5747cb5cc3b64568`. Les chartes restent candidates ; l'assemblée ou commission humaine n'existe pas. La correction CIC et les crédits des documentaires signalés dans le Journal ne justifient aucun média inséré.
- Les gabarits C5 et cinq statuts C6 restent dans les CSS hérités. Les sources, objections et incertitudes des quatre domaines ont été conservées.

## Modifications réelles
1. `assets/graphiste-cycle9-provenance.css` : présentation de provenance et blocage des droits, opt-in `.interstice-fiche.graphiste-c8`. Ne touche ni au site général ni aux textes Wiki.
2. `design-system/maquette-cycle9-integration-candidate.html` : nouveau lien de sommaire vers les crédits ; notice structurée pour média avec catégorie, auteur, source/cote, crédit, licence, consentement/risque et statut **diffusion bloquée**. Ni photo, ni reconstitution visuelle, ni média sensible intégré.
3. `tests/graphiste-cycle9-2026-11-01.test.mjs` et workflow `.github/workflows/graphiste-cycle9-2026-11-01.yml` : Chromium 320/390/1280, 8 ancres, HTTP des liens documentaires, focus clavier et activation, présentation du blocage des médias, contrastes texte principal/carte/navigation, zoom CSS simulé 200 % à 320 et PDF A4. Captures PNG et artefact A4. Résultats finaux uniquement selon les logs sur le dernier commit.

## Assistance : protocole, pas essai
VoiceOver iOS Safari : rotor Titres/Liens, aller au contenu, 8 liens du sommaire et notice de crédits ; contrôler annonce de blocage sans couleur. TalkBack Android Chrome : balayage titres/ancres, activation exercice, zoom système et lecture de la notice. NVDA Windows Firefox : H, K, D, Tab/Entrée, niveaux, lecture des sections et PDF. À consigner sur appareil réel : OS, navigateur, version AT, étapes, résultat attendu/réel et anomalies.
**Aucun lecteur d'écran réel lancé ; les tests Playwright n'imitent pas ces technologies.**
Autres limites : absence de zoom réel OS/navigateur 400 %, test tactile matériel et inspection humaine du PDF ; aucune revue complète de toutes les licences/médias ni audit RGPD du site. `noindex` n'est pas un contrôle d'accès. L'existence des fichiers Wiki/bibliothèque ne valide pas leurs textes.

## Reprise et décisions
La Développeuse : intégration sélective sur SHA exact des articles validés, tests sur environnement réel, aucun média sans crédit/licence/permission. La Relieuse : versions éditoriales candidates, preuves historiques, blocages P0 et arbitrages humains de Zout. L'Anarchitecte : vérifier chemins, types et permission média dans les schémas. **Aucune fusion, publication, décision automatique.**
