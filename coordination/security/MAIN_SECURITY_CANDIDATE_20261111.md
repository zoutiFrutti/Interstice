# Correctif de sécurité isolé pour main — candidat local

## Actualisation du cycle 6 — décision humaine de périmètre

Zout a choisi A au QCM de fin du cycle 5 : exclure les dossiers de travail et l'ancienne copie `apercu-graphiste-35`, en conservant les pages principales. Provenance : réponse directe dans cette conversation le 11 novembre 2026. Le périmètre est validé pour la candidate ; aucune application ou publication autorisée. Les réserves historiques ci-dessous sont conservées et cette section clôt seulement la demande d'arbitrage sur les exclusions.

Le premier rendu Jekyll du cycle 6 a révélé un dossier de travail oublié dans le correctif initial : `edition-premiere`, contenant uniquement `R1_FRONTEND_INTEGRATION_RAPPORT.md`. Son rendu HTML technique est donc ajouté aux exclusions et à la garde de sortie, conformément au choix A. Le fichier source reste dans Git ; aucune page HTML principale n'est retirée.

Le compte rendu détaillé du cycle 6 et ses preuves sont conservés sur la branche locale de coordination, sans importer NAV7 ou C07 dans cette branche de sécurité. Les preuves du cycle 5 ci-dessous restent des résultats antérieurs, pas des tests nouvellement exécutés.

Décision de Zout, réponse B au QCM de suite du cycle 5 : conserver les commits locaux et préparer d'abord un correctif isolé pour main, sans l'appliquer. Provenance : message dans cette conversation du 11 novembre 2026. Aucune autorisation de publication, fusion, déploiement ou réécriture distante.

## Base et périmètre

- Base main revérifiée : `df73c5dabf47a0b73d2b55f0346c7006d485dd98`.
- Branche locale : `security/main-locators-candidate-20261111`.
- Aucune reprise de NAV7, R7, C07 ou des cartes fictives dans ce correctif.
- 135 occurrences de liens vers 22 ressources connues, dans 30 fichiers de cette base. Aucun nouveau lien inconnu trouvé dans le relevé. Ce périmètre est différent du relevé de la branche de convergence.
- Les permissions observées précédemment sont réutilisées : aucun corps de document Google consulté, aucune permission revérifiée ou modifiée pendant ce cycle. Une permission visible réservée ne prouve pas l'absence de tout accès indirect.

## Modifications candidates

1. Masquage par références `source-reservee:DRV-nnn`, sans effacement des fichiers ni des identifiants documentaires. Correspondances et originaux de retour arrière conservés hors du dépôt ; aucune URL sensible dans cette note.
2. Dans les deux copies du Manifeste V2.5, remplacement du lien Google par une mention de source réservée, sans lien actif. Texte du Manifeste conservé.
3. `_config.yml` exclut les dossiers de travail et l'ancienne copie `apercu-graphiste-35` du site Pages. Les sources restent dans Git ; cela ne protège pas un dépôt public. Les 37 pages HTML principales et les documents Markdown racine restent présents. Les anciennes URLs sous les dossiers exclus ne seraient plus servies après un éventuel déploiement : arbitrage avant toute application.
4. `scripts/security/public-boundary.mjs` contrôle les fichiers suivis et les exports, toutes extensions confondues. Il refuse les liens Docs/Drive non qualifiés, les 26 identifiants connus, les liens symboliques et les dossiers internes dans Pages. Les identifiants connus sont représentés par des empreintes SHA-256 ; aucune correspondance publique. Le contrôle couvre les formes ordinaires, des échappements usuels et les identifiants connus inclus dans un autre jeton ; il ne constitue pas un audit de toutes les données personnelles ni de tous les encodages possibles.
5. L'inventaire documentaire refuse une source contenant un localisateur réservé avant de l'exporter. Le contrôle de l'artefact précède l'étape d'envoi existante. Cette étape n'a pas été exécutée ; aucun service distant ni base de données modifiés.
6. Le validateur de file documentaire accepte les références réservées, sans changer ses exigences de relecture, de non-publication ou ses identifiants.
7. Le contrôle R6 autorise uniquement le blob exact de l'arrêt C12 déjà décidé et intégré dans main (`e0961a3a4fb9544f8778b9a61e428d4b36cedb34`). Le script original échouait déjà sur main à cause de cet arrêt. Le workflow C12 lui-même demeure identique à main et désactivé.

## Vérifications exécutées

- 26 tests Node réussis, dont 15 tests de frontière documentaire et d'export simulé sans réseau.
- 27 tests agents réussis ; vérification de syntaxe JavaScript et compilation Python réussies.
- File documentaire valide : 1 contribution, toujours non publiée.
- 26 identifiants connus bloqués sous forme nue ; 26 bloqués également lorsqu'ils sont inclus dans un autre jeton. Aucune valeur sensible journalisée.
- Les originaux des 30 fichiers masqués correspondent exactement aux blobs de la base ; sauvegarde privée vérifiée pour le retour arrière.
- Les deux logos officiels R6 et l'arrêt C12 sont identiques octet par octet à main.
- Projection statique de contrôle : 72 fichiers, 37 pages HTML racine, aucune violation détectée. Copie des octets avec les exclusions candidates ; **ceci n'est pas un build Jekyll**.
- 5 tests navigateur R6 INT01 réussis sur cette projection, navigation sur 6 largeurs, avec/sans JavaScript ; 47 ressources locales essentielles contrôlées.
- Préservation des 17 commits et 38 fichiers historiques contrôlée, avec l'exception exacte d'arrêt d'urgence.
- `git diff --check` réussi.

## Réserves et suite

- Aucune application à main, aucun push, aucune PR créée, aucun déploiement.
- Le P0 distant reste ouvert : les branches, l'historique, les anciens artefacts, les caches et les copies externes ne sont pas nettoyés par ce correctif.
- Build Jekyll exact et CI distante de cette candidate non exécutés : Ruby et moteur de conteneurs absents localement. Les tests de la projection statique ne les remplacent pas.
- Configuration Pages distante non revérifiée : endpoint refusé par le connecteur et réponse anonyme 404. Le workflow existant attend un mécanisme legacy sur main/racine ; cette attente ne constitue pas une nouvelle observation distante.
- Main apparaît sans protection dans la métadonnée de branche consultée. Les contrôles CI proposés ne sont donc pas une garantie de blocage avant la publication Pages automatique. Aucun réglage changé.
- Les exclusions Pages nécessitent une décision de Zout avant application, car elles changeraient l'accessibilité d'anciennes URLs de travail.
- La simulation historique du cycle 2 reste une preuve antérieure sur une copie locale et un périmètre précis, pas un nettoyage exécuté ici.
