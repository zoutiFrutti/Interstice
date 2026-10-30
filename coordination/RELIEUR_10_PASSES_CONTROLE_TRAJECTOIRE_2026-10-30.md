# LA FAILLE NOIRE × INTERSTICE — Le Relieur
## Dix passes de travail de coordination et d'organisation pratique · 30 octobre 2026
**Statut :** travail documentaire et de conception de simulations effectivement réalisé ; aucune intervention humaine ni déploiement. Document destiné à la revue, pas décision collective.

**Mission reprise :** coordination générale + ancien travail pratique attribué à tort à « L'Organisateur », en référence à [la clarification](RELIEUR_CLARIFICATION_ORGANISATION_2026-10-30.md). Les dix passes ne prétendent pas être dix expérimentations indépendantes : les passes 1–2 sont contrôles de sources, 3–6 produisent un kit de mise en situation, 7–9 analysent les écarts vérifiables, 10 est l'enregistrement et la vérification GitHub.

### Passe 1 — Reprendre le dépôt en mouvement, sans inventer un HEAD figé
**Action réelle :** consultation de la branche `main`, du dossier `coordination/`, des PR ouvertes et des exécutions CI du 30/10. `main` a changé plusieurs fois pendant cette passe ; un premier essai d'écriture documentaire a reçu HTTP **409 conflit de SHA**. **Résultat :** aucune version existante écrasée ; création d'une branche de coordination isolée `coordination/relieur-pilote-10-passes-20261030`. Ne pas attribuer les changements du dépôt au Relieur.

**Constats :** [PR #35](https://github.com/zoutiFrutti/Interstice/pull/35) = refonte visuelle non fusionnée ; [PR #41](https://github.com/zoutiFrutti/Interstice/pull/41) = recherche fictive d'initiatives ; [PR #42](https://github.com/zoutiFrutti/Interstice/pull/42) = traitement des doubles envois et réponses non JSON, **tests simulés**. Chaque PR est un brouillon au moment de la consultation. Les CI de branche ont des réussites observées, mais la présence d'échecs sur des SHA antérieurs et de nouvelles exécutions empêche toute certification générale. Par ailleurs un workflow d'inventaire Wiki sur `main` a échoué sur un SHA consulté : incident à **qualifier**, sans en déduire la cause.

### Passe 2 — Dédoublonner les rôles et les études
**Action réelle :** lecture de `RELIEUR_CLARIFICATION_ORGANISATION_2026-10-30.md`, de la feuille de route 39–58, de la relecture critique du Penseur en dix passes et de l'**étude 59**. La mission de scénarios A (39–48) revient au Relieur. **Aucun** atelier « Organisateur » n'est réactivé. Les six étapes de partage d'un atelier rare écrites par le Penseur sont réutilisées, pas remplacées.

### Passe 3 — Formaliser le scénario du besoin sans votes ni smartphone
**Travail produit :** S1 dans le [kit pilote](RELIEUR_PILOTE_3_SCENARIOS_CONCRETS_2026-10-30.md) ; besoin d'apprendre à réparer un vélo, ressources et disponibilités imaginaires, six actions, retrait sans culpabilisation, accès papier, refus de contact imposé. **Statut :** jeu de rôle écrit et testable, **non testé avec des personnes**.

### Passe 4 — Mettre l'étude 59 à l'épreuve d'une ressource rare
**Travail produit :** S2 ; reprise du local demandé par trois collectifs avec cinq perturbations nouvelles : capacité, sécurité, tâches invisibles, écart de taille des groupes, départ d'un groupe. Trois options à comparer avant tout accord ; droits matériels distincts de décisions politiques. **Statut :** conditions de simulation préparées ; aucun local attribué ni simulation effectuée.

### Passe 5 — Préparer un désaccord réel possible sans prétendre représenter les absents
**Travail produit :** S3 ; jardin et concerts, alternatives, objection de voisinage fictive, consultation hors application, possibilité d'absence d'accord, refus d'exposer les coordonnées. **Statut :** scénario écrit, non validé par les personnes concernées.

### Passe 6 — Outiller la facilitation et la restitution sans surveillance
**Travail produit :** mode d'emploi commun aux trois exercices et grille d'observation non nominative, critères de résultat, droit de retrait, distinction entre données fictives et consentement réel. **Vigilance :** ne jamais publier des réponses individuelles ou des lieux sensibles dans GitHub public ; les bilans de terrain exigent une gestion distincte et proportionnée.

### Passe 7 — Croiser les quinze tests de l'Anarchitecte avec des preuves
Le document `ANARCHITECTE_CRITERES_ACCEPTATION_39_58_2026-10-30.md` contient **des critères candidats**, non des réussites. Matrice synthétique ci-dessous.

| Test | Scénario / preuve actuellement disponible | État réel |
| --- | --- | --- |
| A01 besoin sans vote | S1, exercice sur papier | **À expérimenter** |
| A02 proposition mobile sans installation | Formulaire actuel et PR #42 tests simulés | **Test réseau et réception réelle manquants** |
| A03 recherche initiative territoire/catégorie | PR #41 recherche sur données fictives | **Démonstration fictive, CI observée verte** |
| A04 égalité carte/liste | Liste fictive, carte réelle absente | **Non implémenté/vérifié** |
| A05 localisation optionnelle et protégée | PR #41 sans GPS ; revue Juriste existante | **Conforme au périmètre fictif, API réelle non testée** |
| A06 consentement à une rencontre | S1 et S3 imposent une étape de consentement | **Fonction technique non réalisée** |
| A07 participer hors plateforme | S1–S3 prévoient voie papier | **Protocole proposé, terrain non testé** |
| A08 ressource rare | S2, étude 59 | **Simulation écrite, pas de fonction d'attribution** |
| A09 conflit et recours | S2/S3, règles du Juriste en projet | **Procédure non adoptée, circuit non testé** |
| A10 export autorisé | étude 50, critères juridiques | **Non réalisé/vérifié** |
| A11 panne réseau et double envoi | PR #42 corrige des cas simulés | **Tests simulés, pas de test bout en bout** |
| A12 accessibilité écran/clavier/lecteur | PR #35 contrôles navigateur ; essai Android réel manquant | **Partiel ; lecteur d'écran non vérifié** |
| A13 déclarée/documentée/validée | règles de fiches proposées | **Exigence de modèle, pas garantie de l'interface actuelle** |
| A14 une donnée commune site/application | PR #41 adaptateur fictif, pas d'API reliée | **Non vérifié** |
| A15 sortie et retrait | S1–S3 incluent sortie ; pas d'export/retrait de production | **Proposition, non réalisée** |

**Conclusion de la passe :** seuls des sous-ensembles simulés ou de présentation sont démontrés. **Aucun** des quinze tests ne doit être marqué « accepté en production » sur cette base.

### Passe 8 — Vérifier la capacité humaine et les protections avant sollicitation
**Action :** réexamen des règles de publication, des responsabilités et de la participation hors application à partir de la transmission du Juriste. **Blocages à lever :**
- responsable concret pour lire, traiter, corriger et contester une contribution ; aucun Relieur automatiquement modérateur ;
- droit et sécurité avant usage d'un lieu ; mesures de sûreté non remplaçables par vote ou IA ;
- moyen de participation accessible hors application et personne volontaire disponible pour y répondre ;
- aucune adresse privée ni état de santé ou opinion personnelle demandé pour consulter une initiative ;
- possibilité de suspendre un essai sans punir celles et ceux qui se retirent ;
- licences, provenance et publication limitée aux contenus autorisés.

**Résultat :** liste de conditions de terrain, **pas** affirmation qu'elles sont satisfaites.

### Passe 9 — Contrôle de trajectoire et risque de promesse de lancement
**Découverte :** le rapport Communications 009 précise que le quatrième visuel du troisième carrousel dit au présent : **« Interstice sert à cartographier les initiatives, partager les ressources et faire circuler les savoirs. »** Aucune cartographie réelle opérationnelle n'est attestée ; PR #41 ne fournit qu'une **liste d'exemples fictifs** et PR #35 une refonte d'accueil. **Risque :** communiquer comme existante une fonction qui reste dans la feuille de route.

**Mesure proposée, non adoptée :** retenir le troisième carrousel jusqu'à accord explicite sur la formulation, ou corriger le visuel pour distinguer « vise à » de « sert à », avec vérification du paquet par Communications et Graphiste. Ne pas modifier un visuel ni une légende validés dans leur dos.

**Signal complémentaire :** l'atelier Biographies a signalé un risque de fusion de deux femmes différentes sous le patronyme Lefèvre (Blanche Lefebvre, modiste, et une femme Lefèvre, blanchisseuse). Une rectification candidate BIO-019 a été documentée, **mais ne pas republier la fiche ni en déduire une identité définitive** sans relecture Archiviste/Biographe. Ce n'est pas un blocage de lancement pour l'accueil public.

### Passe 10 — Prioriser, enregistrer et contrôler les livrables
**Actions documentaires :** préparation de trois jeux de rôle S1–S3, d'une fiche commune, de la matrice A01–A15, d'une clarification des blocages et de ce registre. Travail isolé sur branche et présenté en PR en brouillon pour empêcher les conflits avec les ateliers ; le Journal commun de `main` peut y renvoyer après revue au lieu de recevoir une copie de dix pages. **Ne pas publier de faux tests ni présenter cette PR comme décision collective.**

**Priorités immédiates proposées, dans l'ordre :**
1. **V0 de lecture :** validation humaine du nouveau premier écran (#35), tests réels mobile et parcours des formulaires ; ne pas vendre le simulateur #41 comme annuaire opérationnel.
2. **Pilote fictif :** montrer S1 avec des fiches imaginaires à quelques personnes volontaires ; choisir un canal papier/oral sans collecte abusive.
3. **Pilotage responsable :** ne passer aux besoins/contacts réels qu'après décision humaine sur consentement, droit à correction, sûreté, suivi et interlocuteurs disponibles.
4. **Communications :** lever la promesse cartographie dans le carrousel 3 et contrôler les brouillons Metricool sans import en doublon.
5. **Suivi des PR :** ne pas fusionner #35, #41, #42 ou des branches de modération sur la seule base de CI simulées ; revue technique avec leur responsable et vérification des exécutions sur les SHA exacts.

### Arbitrages humains non usurpés
- Quel territoire et quelles personnes volontaires pour un premier exercice S1 **sans collecte réelle de contacts** ?
- Qui reçoit une demande de participation, qui accepte de la traiter, avec quel droit de retrait et quel canal accessible ?
- Quelle distinction publier entre *fonction existante*, *prototype fictif* et *fonction envisagée* ?
- Comment trancher une ressource rare sans déléguer un pouvoir central au Relieur ou à la plateforme ?
- Quel niveau minimal de garanties juridique, de moyens humains et de déploiement faut-il pour ouvrir le premier formulaire ?

### Bilan chiffré honnête
- **10 passes documentées**, dont enquêtes GitHub, recoupement, conception des trois simulations, matrice de tests, contrôles des dépendances et enregistrement.
- **3 scénarios fictifs préparés**, **0 scénario testé avec des humains**.
- **15 critères croisés**, **0 accepté en production** par le Relieur.
- **0 fusion, 0 déploiement, 0 donnée personnelle, 0 changement de permissions** initiés par cette passe.

**Prochaine action utile après revue :** faire tester S1 à une personne volontaire, sans la photographier ni copier ses propos en public, pendant que les ateliers poursuivent leurs PR existantes. Le Relieur prépare, suit et protège la mémoire ; **les personnes décideront**.
