# KONTON Control : architecture multi-projets candidate (2026-11-02)

## Constat vérifié
- Interstice : La Relieuse coordonne, L'Orchestratrice développe le moteur technique, les ateliers fournissent preuves et accusés, Zout décide. C13 PR #114 durcit l'opt-in IA, C14 PR #115 ordonnance des tâches déterministes sans IA. Ces PR restent brouillons et leurs workflows ne prouvent pas une exécution sur Issue réelle.
- La messagerie C10 est une base documentaire, pas une notification des conversations ChatGPT. Un message déposé n'est pas reçu sans accusé et SHA vérifiable. La clôture ne peut pas être présumée.
- Métro : L'Entre-deux mondes dispose d'un dépôt privé zoutiFrutti/metro-entre-deux-mondes. Son main contient une base Godot légère : project.godot, scenes/main.tscn et scripts/main.gd ; pas de workflow CI trouvé sur main.
- L'atelier de création Métro comprend Architecte des mondes, Archiviste Métro, Cartographe, Dramaturge, Sociologue des profondeurs et Juriste des mondes ; ces rôles en conversations ne sont pas des agents automatiquement exécutables.
- KONTON Control V1.1 est un cockpit Android de lecture publique/démonstration. Il n'accède pas aux dépôts privés depuis le téléphone.

## Nouvelle architecture
1. KONTON Control : pupitre transversal, choix de projet, indicateurs de connexion, file personnelle de décisions, journal de provenance.
2. Espace de projet isolé : Interstice / Métro / Personnel. Chaque espace possède ses dépôts autorisés, règles, permissions, missions, budgets, journaux et rôles propres.
3. Coordination par projet : La Relieuse reste responsable Interstice. La direction de coordination Métro doit être définie indépendamment ; ne pas imposer La Relieuse ni transférer son mandat.
4. Orchestration technique : moteur générique séparé des coordinations éditoriales, paramétré et cloisonné par projet ; réutiliser les contrats candidats de L'Orchestratrice C13/C14 après revue, plutôt que recréer un moteur concurrent dans l'APK.
5. Ateliers : profils propres à chaque univers. La Juriste Interstice n'est pas automatiquement la Juriste des mondes ; aucune permission héritée d'un autre espace.
6. Exécution : providers explicites, manuel ChatGPT (copie de commandes, preuve de retour), déterministe CI/local, IA locale ou API distant activée seulement avec consentement et autorisations.

## Contrats de preuves
- Messages : préparé, déposé, vu par moteur, accusé par exécutant, traité, bloqué, à contrôler. Chaque passage est appuyé par une preuve propre ; dépôt ≠ accusé.
- Missions : proposée, prête, bloquée par dépendance, planifiée non exécutée, en cours prouvé, résultat candidat, terminé prouvé.
- Tout résultat réel contient ID projet, ID mission, rôle/acteur, source, branche, SHA, identifiant de run le cas échéant, date et preuve ; sinon état inconnu.
- Contrôle humain avant publication, fusion, contact externe, diffusion, validation politique/éditoriale et exposition de données privées.

## Contrats spécifiques
Interstice : projet ID interstice, dépôt zoutiFrutti/Interstice, coordinatrice relieuse, orchestratrice technique distincte, courriers et portes C10/C13/C14, rédaction et médiathèque, aucune diffusion automatique.
Métro : projet ID metro, dépôt privé zoutiFrutti/metro-entre-deux-mondes, ateliers fiction et recherche distincts, contrôle du canon, des sources géographiques, des droits d'auteur et des autorisations avant toute sortie. Pas de GET public mobile.
Personnel : espace distinct KONTON, Toto, Bridge, etc. ; jamais classe de secours pour tout dépôt non reconnu. Allowlist explicite pour chaque projet.

## Plan de migration prudent
- V1.2 : écran de sélection des trois espaces, avec Interstice en lecture publique et Métro marqué dépôt privé non connecté ; zéro jeton dans l'APK.
- V1.3 : registres d'ateliers, missions et preuves normalisés, sources de vérité identifiées, sans fausse réception des historiques ChatGPT.
- V1.4 : passerelle HTTPS authentifiée, autorisations et délimitations par projet, puis seulement lecture privée si demandée.
- V1.5 : adapter le moteur déterministe C14 après revue et preuve d'exécution ; IA sous opt-in explicite et limites de coût.

## Points ouverts
- Protocole C10 candidat : courriers relayés par La Relieuse ou adressage direct multi-ateliers souhaité par Zout ? Ne pas figer sans arbitrage.
- Qui coordonne effectivement Métro, et quels rôles relèvent de l'atelier documentaire versus de l'équipe de développement ?
- Quel backend/hébergement et quelle authentification le téléphone utilisera-t-il ? Aucun accès private GitHub avant résolution.

Le présent document est candidat, sans fusion, déploiement ni activation d'automatisation.
