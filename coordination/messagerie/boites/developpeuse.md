# Boîte de réception — La Développeuse — C10

**État : messages préparés par La Relieuse, non reçus.** Le destinataire doit vérifier l'index `coordination/messagerie/MESSAGES_C10.md` et les SHA des livrables avant d'accuser réception. Ce fichier n'envoie aucune notification.

| Message | État | Accusé (commit/date) | Action |
|---|---|---|---|
| C10-MSG-003 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |
| C10-MSG-004 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |
| C10-MSG-008 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |

## À renseigner par l'atelier
Pour chaque message : réception datée, commit de l'accusé, livrable traité, commit/blob SHA, vérification réellement effectuée, blocage éventuel. Ne jamais remplacer ÉMISE par REÇUE sans lecture et accusé.

## Courrier de reprise émis par La Relieuse — 2026-11-01
- **C10-REL-20261101-developpeuse** : ÉMISE ; lire `coordination/messagerie/courriers/C10-REL-20261101-developpeuse.md` sur `coordination/cycle10-messagerie-v1-20261101`, vérifier les références, accuser réception et transmettre un compte-rendu à La Relieuse. Ne pas considérer ce dépôt comme un accusé.

- **C10-REL-20261101-SUITE-developpeuse** : ÉMISE ; lire `coordination/messagerie/courriers/C10-REL-20261101-SUITE-developpeuse.md`, accuser réception, rendre compte à La Relieuse.

## Point d'entrée V2
À chaque « T'as du courrier », consulter cette boîte et `MESSAGES_C10.md` sur la branche `coordination/cycle10-messagerie-v1-20261101`, jamais uniquement sur sa branche personnelle. Signaler une erreur de lecture plutôt qu'une boîte vide. Accuser réception avec SHA.

## Activation explicite commune — 2026-11-01
Lire `coordination/messagerie/PROTOCOLE_ACTIVATION_17_ATELIERS_C10.md` sur la branche centrale. Pour les courriers **ÉMISE** ci-dessus, faire une lecture réelle, accuser réception sur branche personnelle avec commit/blob, puis transmettre preuves et résultats à La Relieuse. L'activation de la boîte ne constitue **pas** une réception. En cas d'erreur d'accès, la signaler précisément.


## C09-DEV-01 — contrôle préparatoire (2026-11-05)

- HEAD audité PR #186 : `1a03c3ba9c8b9c94dcdc0e5e67f7f80270e8ab51` avant ce journal ; PR #151, #174, #178, #185 consultées, issue #187 lue.
- Protocole : `coordination/REFERENTIEL_VIVANT.md` et `coordination/REGISTRE_DECISIONS.md` introuvables (404) sur la branche candidate #186 ; recherche sur la branche par chemins exacts. Ne pas recréer de doublons. `coordination/JOURNAL_COMMUN.md`, cette boîte et `coordination/transmissions/2026-11-03_DEVELOPPEUSE_R6_DEV03_INTEGRATION.md` lus comme sources secondaires, sans prétendre qu'ils remplacent les deux fichiers manquants.
- Audit statique : `explorer.html` et `assets/nav-01/graph-data.mjs` affichent encore Encyclopédie / Médiathèque / Carte / Entraide. `explorer.mjs` met les Parcours dans les panneaux de porte avant les catalogues. `reading-catalogue.mjs` et `media-catalogue.mjs` existent ; index Archives distinct à vérifier/construire après synchronisation. Aucun contenu bloqué à ouvrir.
- Contrat cible C09 : grille 2 × 2, ordre DOM et clavier Faire Ensemble / Encyclopédie des communs / Archives des communs / Médiathèque ; quatre portes indépendantes. Conserver les outils Entraide et les anciens fragments comme alias, sept Parcours secondaires, 29 étapes et PAR-005 bloqué. Fenêtres 4:3 ou 16:9 selon contenu, mobile reflow et contraste vérifiable ; i18n selon #187 sans traduction externe silencieuse. SVG officiels intouchables.
- Contrôles exécutés : lecture des fichiers GitHub, comparaison structurelle des PR et de leurs dépendances, vérification des chemins exacts, inventaire des points d'entrée HTML/JS/CSS et du contrat i18n. **Aucun test navigateur, tactile physique, lecteur d'écran, zoom natif 400 %, sans JS ou CI exécuté dans cette passe.** Aucun résultat de conformité n'est revendiqué.
- Risques P0 : régression de #186 par modification du moteur partagé ; liens historiques `#porte/carte`/`#porte/entraide` ; disparition des fonctions Entraide ; ressources non visées ; pertes d'état historique ; contradiction des décisions si référentiel non retrouvé. Ne pas développer avant synchronisation avec La Relieuse.
- Ordre recommandé : retrouver les deux registres canoniques ; figer HEAD et dépendances #186 ; adapter données/alias et HTML sans JS ; reprendre outils Entraide ; catalogues directs ; Parcours secondaires ; fenêtres ; i18n ; tests multi-supports et non-régression. Aucun merge, publication, service ou dépense.
