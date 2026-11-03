# R1-DEV — Courrier de reprise générale à La Développeuse

Date : 2026-11-02. De : La Relieuse. **PRÉPARÉ sur branche candidate ; pas envoyé ni reçu.** Priorité : P0 avant P1/P2. Aucun mandat collectif ni publication.

## Sources obligatoires
Sur `coordination/reprise-generale-r1-20261102` : `coordination/reprise-r1/00_METHODE_ET_INVENTAIRE.md`, `01_AXES_ARCHITECTURE_ET_PRIORITES.md`, `02_INDEX_COURRIERS_ET_PROTOCOLE.md`. Consulter ensuite la boîte centrale historique C10 et les courriers antérieurs **déjà réellement reçus**, sans considérer les courriers préparés non envoyés comme des réceptions. Contrôler le dépôt et les SHA, pas seulement les résumés.

## Travaux à reprendre (ne pas recommencer)
integration/cycle10-p0-rollback-wiki-biblio-20261101 ; PR #41/#42 ; édition C10.

## Mission R1
P0 : contrôler suspension des écritures, RLS/SECURITY DEFINER, auth, tests négatifs et rollback (jusqu'ici simulé), sans agir en production. Identifier HEAD exact et CI. P1 : contrat commun Resource/SourceRef/Relation, prototype A carte-logo progressive, B fiche offline/impression, C notices sans hébergement ; tests navigateur, faible puissance, retour arrière.

## Méthode et preuves attendues
Faire **plusieurs passes réelles** : (1) inventaire des branches/PR et livrables existants ; (2) confrontation aux nouvelles orientations, recherche de doublons ; (3) correction ou production candidate ciblée ; (4) tests/lecture critique ; (5) transmission à La Relieuse. Pour chaque objectif : chemin, branche, commit SHA, blob SHA, tests réellement exécutés (ou explicitement non faits), statut TERMINÉ documentaire / À POURSUIVRE / BLOQUÉ / DÉCISION ZOUT, dépendances, objections et prochaines actions. **RELIER / COMPLÉTER / CRÉER** avant toute création. Aucun contact externe, fusion, publication, activation, dépense ou décision éditoriale automatique. Ne pas modifier silencieusement les fichiers d'un autre atelier.
