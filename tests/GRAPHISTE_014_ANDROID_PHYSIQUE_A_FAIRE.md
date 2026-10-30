# Graphiste 014 — protocole de relecture physique Android
Date : 30 octobre 2026 · Statut : **à effectuer par une personne**, aucun test sur appareil déclaré.
Référence : PR #35 candidate et PR #41, intégration proposée `cartes-integration-014.css` **non déployée**.

## Avant de commencer
Ne pas envoyer de formulaire réel, ne pas créer de compte, ne pas communiquer de donnée personnelle. Le prototype ne contient que des fiches fictives. Utiliser un serveur de test local et une version ayant réellement chargé les styles 014, sans remplacer la page principale. Noter SHA, navigateur, largeur, niveau de zoom et réglage de taille de texte.

## Scénarios physiques à consigner
1. Sur Crosscall Stellar X5 (Android), mode portrait, première vue de l'accueil « Et si on essayait autre chose ? » : titre entièrement visible en scroll raisonnable, introduction compréhensible, deux boutons séparés. Essayer les deux liens puis revenir.
2. Articles « Décider ensemble » et « Qui fait vivre les communs ? » : ouvrir le sommaire, lire une section longue en défilement, vérifier les liens des sources et retrouver le bouton « Proposer une correction documentaire » ; ne pas y transmettre de contenu sensible.
3. Ouvrir le prototype Cartes en mode liste. Constater immédiatement la mention « PROTOTYPE FICTIF », les fiches des communs et la différence entre initiative et ressource. Rechercher par commune, puis réinitialiser.
4. Basculer en « Carte des possibles ». Constater les types **besoin, ressource, projet**, chacun avec son libellé. Vérifier que les affichages ne semblent pas être des organismes réels.
5. Dans la carte mobile, balayer horizontalement le panneau sans faire glisser toute la page. Lire « Lisle-sur-Tarn », « Gaillac », « Rabastens », « Albi » ; tester le zoom +/- et « Vue entière », sélectionner un repère, retrouver la liste.
6. Activer une taille de police Android plus grande (125 % minimum, si disponible). Vérifier que sélecteurs, boutons et fiches restent utilisables sans texte coupé.
7. Activer TalkBack : statut fictif annoncé, lecture du titre de chaque fiche, bascule liste/carte compréhensible, commune et nombre de fiches annoncés. Examiner particulièrement le panneau SVG défilant. **Point non résolu :** il pourrait nécessiter `tabindex=0`, `role=region` et une instruction textuelle de balayage.
8. Répéter après rotation en paysage, puis revenir portrait. Vérifier focus et retour à la liste, notamment lorsqu'un filtre ne donne aucun résultat.

## Feuille de retour
Pour chaque essai noter : *OK / gênant / bloquant*, capture d'écran expurgée de données privées, comportement observé, version SHA. Aucun résultat n'est prérempli.

## Préconditions d'intégration
Le Graphiste fournit `cartes-integration-014.css` pour comparaison. La Développeuse décide de son insertion après `cartes-compat.css`. Le Lecteur continue de valider le contenu. Le Relieur organise les vérifications humaines et les éventuelles demandes de correction ; aucune fusion ou publication implicite.
