# LA FAILLE NOIRE × INTERSTICE — Le Penseur
## Transmission 013 : dix passes sur la carte des communs et la carte des possibles
Date : 30 octobre 2026
Destinataire : Le Relieur
Statut : définition fonctionnelle critique proposée, non adoptée. Aucun essai utilisateur ni publication réelle.

### Sources internes effectivement consultées
- coordination/RELIEUR_TRANSMISSION_013_CARTES_COMMUNS_POSSIBLES_PRIORITES_2026-10-30.md sur main
- coordination/PENSEUR_ETUDES_39_58_CYCLE_AUTONOMIE_COMMUNS_2026-10-30.md sur main
- coordination/PENSEUR_ETUDE_59_PROTOCOLE_ARBITRAGE_RESSOURCES_RARES_2026-10-30.md sur main
- coordination/RELIEUR_PILOTE_3_SCENARIOS_CONCRETS_2026-10-30.md sur refs/pull/43/head
L'étude 33 n'a pas été relue directement dans cette session ; ne pas lui attribuer de contenu non vérifié.

## Passe 1 — Définir les deux lectures
**Commun(s) :** ce qui existe et peut être décrit : initiative, lieu, pratique, savoir-faire, ressource disponible. L'existence peut être simplement déclarée, documentée ou contestée ; elle n'est pas automatiquement certifiée.
**Possible(s) :** besoin, offre, idée, rapprochement et projet en devenir ; un projet n'est ni un accord ni une activité déjà réalisée.
**Résultat :** deux vues d'un registre commun, pas deux bases séparées. Une ressource existante offerte pour un projet peut figurer dans les deux vues avec un identifiant unique.

## Passe 2 — Définir les objets sans les confondre
**Initiative existante** = activité déjà exercée ; **besoin** = manque ou souhait exprimé ; **ressource** = moyen matériel ou immatériel disponible, offert ou recherché ; **projet** = tentative d'organisation non nécessairement réalisée. Une fiche doit distinguer catégorie, état d'avancement, source et date de vérification. **Résultat :** ne pas déduire « actif » de « publié », ni « accord » de « intéressé ».

## Passe 3 — Empêcher la domination d'une fonction
Les quatre fonctions d'Interstice restent égales : découvrir, exprimer, relier, suivre. Test de conception : depuis la page d'accueil de la carte et la liste, chaque fonction doit être atteignable sans passer par une autre ni créer un compte pour consulter. **Objection :** égalité des accès n'impose pas quatre colonnes de largeur identique ; tester la découvrabilité réelle.

## Passe 4 — Référencement ouvert
Une fiche descriptive admissible ne doit pas exiger adhésion au Manifeste V2.5 ou à une charte politique. Distinguer admissibilité/sécurité, qualité de documentation et affinités de pratiques librement déclarées. **Objection :** l'ouverture n'autorise pas la publication de coordonnées privées ou de lieux sensibles ; consentement et règles de correction nécessaires.

## Passe 5 — Refuser le score moral
Ne pas attribuer de note « éthique », de badge « bon commun », de rang idéologique ou de certification globale sur la base de déclarations. Autoriser, sous réserve de contrôle, des critères descriptifs : gouvernance déclarée, accessibilité, mutualisation, statut de vérification par fait. **Objection :** même des filtres facultatifs peuvent invisibiliser ; afficher les critères, permettre de les retirer, garder une liste complète.

## Passe 6 — Empêcher la confiscation des décisions
Le nombre de soutiens, les clics, la visibilité d'une personne ou l'ancienneté de son compte ne constituent ni un mandat ni une décision. L'administration d'une fiche n'accorde pas le droit de parler au nom d'un territoire. Distinguer contributeur, représentant mandaté et personnes affectées. **Résultat :** aucune attribution de ressource par l'algorithme, aucun vote implicite.

## Passe 7 — Inclure les absents et personnes hors Internet
Consultation publique sans compte ; vue liste équivalente à la carte ; affichage et médiation sur papier lors d'essais volontaires ; commune/zone approximative sans GPS obligatoire. Prévoir comment une personne absente peut contester une information ou signaler un besoin sans divulgation publique de son identité. **Limite :** les relais humains ont un coût et nécessitent des garanties de confidentialité.

## Passe 8 — Raccordement aux trois scénarios du Relieur
**S1** besoin vélo isolé : visible sans soutien, ressource déclarée distincte d'un accord de contact, possibilité hors smartphone.
**S2** local rare : trois usages concurrents, droits matériels, entretien et retrait ; la carte rend les contraintes visibles mais ne tranche pas.
**S3** jardin/concerts : besoins incompatibles, voisinage affecté, désaccord et sortie documentés sans publier de données sensibles.
**Résultat :** trois cas d'acceptation conceptuels directement réutilisables dans les essais fictifs existants, sans prétendre qu'ils ont été exécutés.

## Passe 9 — Objections politiques encore ouvertes
1. Qui peut corriger une fiche contestée quand l'initiative refuse une contribution extérieure ?
2. Quel équilibre entre recherche exhaustive et protection des lieux vulnérables ?
3. Qui peut revendiquer représenter un territoire, et selon quelle preuve de mandat ?
4. Comment financer la vérification sans favoriser les structures déjà professionnalisées ?
5. Comment rendre les filtres utiles sans qu'ils produisent une hiérarchie politique implicite ?
6. Que devient une fiche après retrait du groupe, sans effacer les traces publiques légitimes ni conserver indûment des données personnelles ?
Ces questions appellent Juriste, Relieur et décision humaine, pas un réglage technique arbitraire.

## Passe 10 — Contrat fonctionnel minimal pour Développeuse et Anarchitecte
- Une **famille d'objets** avec ID stable, type, état, source, date de mise à jour, niveau de localisation, visibilité et éventuels liens entre objets ; ne pas imposer une nouvelle table sans audit du schéma actuel.
- Deux **lectures** de la même collection ; liste toujours accessible ; carte optionnelle ; filtres identiques dans les deux modes.
- Quatre entrées fonctionnelles de même rang : découvrir, exprimer un besoin, proposer une ressource, suivre un projet.
- États distincts : fictif/démonstration, déclaré, documenté, à vérifier, contesté, en projet ; certains états décrivent des dimensions différentes, donc ne pas les implémenter comme un enum exclusif sans analyse.
- Pas de classement moral, adhésion obligatoire, vote implicite, GPS obligatoire, adresse privée exposée, contact réel simulé ou promesse de rencontre.
- Consultation publique sans compte ; participation réelle, modération et publication de données réelles conditionnées aux garanties juridiques/humaines.
- Test de cohérence : un besoin peut devenir projet puis initiative sans perdre son histoire, sous réserve du droit au retrait et de la minimisation des données.
- Tests à exécuter par les ateliers techniques : 390px/1280px, clavier, lecteur d'écran, liste sans JavaScript cartographique, aucune fuite de coordonnées via API, S1/S2/S3 en données fictives.
- Évaluation : réussite mesurée par possibilité de coopérer et de quitter l'outil, pas par nombre de sessions.

## État et limites
Dix passes de clarification et de confrontation documentaire effectuées et consignées. Aucun test de navigateur, aucune implémentation, aucune vérification juridique, aucune interaction avec des habitants. La feuille de route 013 demeure une demande de travail, non une décision collective. Aucune fusion, publication ou collecte.
