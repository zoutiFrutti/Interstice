# INTERSTICE — Référentiel vivant (candidat C09)

**État : CANDIDAT SUR BRANCHE, non fusionné.** Édition du 5 novembre 2026, émettrice : L'Orchestratrice, sur mandat C09-ORCH-01 de La Relieuse. Toute règle doit être reliée à une décision ou à une source vérifiable. Ce fichier **ne remplace pas** les archives C10, les documents C03, ni le Journal commun.

## 1. Finalité non négociable

Interstice est conçu d'abord pour les rencontres, l'entraide, la mutualisation de moyens, l'organisation collective et les initiatives communes. Les travaux historiques, militants, scientifiques et documentaires constituent des **ressources** au service de ce projet, non un passage obligé ni l'architecture dominante.

## 2. Accueil : quatre portes égales, grille 2 × 2

| Position | Nom officiel | Remplacement / règle |
| --- | --- | --- |
| Haut gauche | **Faire Ensemble** | Remplace **Entraide** ; conserve intégralement fonctions et outils existants ; première dans l'ordre de lecture, sans porte obligatoire ni supériorité fonctionnelle |
| Haut droite | **Encyclopédie des communs** | Remplace l'intitulé **Wiki**, sans supprimer les ressources ni les URL historiques |
| Bas gauche | **Archives des communs** | Nom explicitement choisi par Zout ; préserver provenance, accès et identifiants |
| Bas droite | **Médiathèque** | Accessible directement, indépendante des trois autres |

Les quatre portes sont sur un **même plan fonctionnel**, sans page préalable obligatoire. Le positionnement de Faire Ensemble en premier dans la grille ne doit pas se traduire par une hiérarchie d'accès. **Ne pas** reprendre comme règle C09 l'ancien arbitrage « mettre Faire Ensemble visuellement au-dessus des autres » : cette interprétation serait obsolète. Les intitulés anciens demeurent comme alias historiques pour la recherche et les liens, jamais comme titre officiel de l'accueil.

Les espaces documentaires sont directement consultables. Les sept Parcours restent dans les données avec leurs relations, statuts, réserves et renvois, mais secondaires dans la navigation. **PAR-005 : BLOQUÉ**, ni publication ni déblocage par CI.

### Atlas des communs : composante principale de l’Encyclopédie

**Décision D-C09-011 (Zout, 5 novembre 2026)** : l’**Atlas des communs**, anciennement **Carte des communs**, appartient aux **éléments principaux de l’Encyclopédie des communs** (ancien Wiki). Il garde sa propre identité, sa carte interactive et ses fonctionnalités de découverte des lieux, collectifs, initiatives, ressources et réseaux. Il **ne constitue pas une cinquième porte**. Des liens contextuels vers Faire Ensemble sont possibles pour relier découverte et action, sans rendre Faire Ensemble obligatoire. Ne pas assimiler l’Atlas à un simple article, ne pas supprimer les anciennes données, fonctionnalités ou URL ; l’état d’implémentation reste à vérifier.

## 3. Consultation et identité

- Fenêtres de lecture plus grandes, adaptatives **4:3 ou 16:9** selon les contenus, légèrement plus transparentes ; contraste, lisibilité, clavier, mobile, lecteurs d'écran et réduction des mouvements doivent être contrôlés, pas présumés.
- SVG officiels La Faille noire et Interstice **inchangés** ; aucune redessination, remplacement génératif ou altération non autorisée.
- Les liens existants doivent continuer à fonctionner ; migration des intitulés ≠ suppression des URL ni des données.

## 4. Sources de vérité et hiérarchie documentaire

1. **Décisions explicites de Zout** : `coordination/REGISTRE_DECISIONS.md` (candidat à approbation). Une décision est horodatée, référencée, reliée à sa version et à ce qu'elle remplace.
2. **Règles de structure** : présent `coordination/REFERENTIEL_VIVANT.md`, dérivé des décisions. Un conflit doit être signalé, jamais « résolu » par un agent.
3. **État réel** : rapport et journal de chaque atelier, avec preuve GitHub sur branche et SHA exact ; ancien courrier ≠ reçu.
4. **Historique immuable** : `coordination/JOURNAL_COMMUN.md`, `coordination/messagerie/`, `coordination/c03/`, `coordination/reprise-r1/`, transmissions, PR et CI. Ces éléments sont cités, non écrasés.
5. **Interface** : console #183 ou sa reprise #186, **vue** seulement, jamais registre autoritaire ni déclencheur d'agents.

Les deux fichiers en `coordination/` sont **proposés dans la présente PR**, et ne sont pas présumés présents sur `main`.

## 5. Suivi des missions : neuf dimensions indépendantes

`DEMANDEE`, `ENVOYEE`, `RECUE_ATTESTEE`, `COMMENCEE`, `LIVRABLE_CANDIDAT`, `VERIFIEE`, `VALIDEE_HUMAINEMENT`, `INTEGREE`, `PUBLIEE`.

Chaque dimension prend `oui / non / inconnu` avec preuve, auteur, date, branche, chemin, commit et blob si disponibles. Les trois dernières portent des actes distincts : **décision humaine**, **merge GitHub autorisé**, **publication effectivement constatée et autorisée**. Un résultat de CI ne vaut ni reçu, ni validation, ni intégration, ni publication. **BLOQUE**, `ATTENTE`, `OBJECTION_OUVERTE` sont des attributs transversaux, pas des étapes accomplies. La préparation documentaire C10/C18 peut conserver ses codes antérieurs, avec une table de correspondance explicite, sans migration destructrice.

## 6. Contrat des journaux d'ateliers

Chemin préférentiel : `coordination/c03/<slug>/JOURNAL_SYNCHRONISATION.md` **si le dossier C03 existe**. Sinon un chemin propre déjà établi dans le dépôt doit être gardé et référencé par l'index ; ne créer ni rôle ni journal fictif. Les boîtes C10 (`coordination/messagerie/boites/<slug>.md`) restent des boîtes de messages, pas les journaux de suivi ; `coordination/JOURNAL_COMMUN.md` reste archive partagée.

Un journal possède :
- **Sources lues à chaque reprise** : le présent référentiel, le registre de décisions, puis le propre journal et les courriers centraux C10/R1 pertinents.
- **Mission** : ID, commande, mandat, destinataire, priorité, date, dépendances et périmètre.
- **Travail** : fichiers examinés (chemin, ref, blob), tests réellement exécutés (SHA et résultat), conclusions et limites.
- **États indépendants** : demande / envoi / réception attestée / commencement / livraison / contrôle / validation / intégration / publication.
- **Objections / contradictions** : identifiant, deux sources en conflit, gravité, statut, action et personne attendue.
- **Transmission à La Relieuse** : référence au rapport canonique, delta depuis dernière version, bloquants, décision éventuelle, prochaine action. Ne pas dupliquer le rapport intégral.

Les journaux sont mis à jour sur **branche propre et PR brouillon**, sans toucher à la boîte d'un autre atelier ; l'absence de journal n'autorise jamais à déclarer un atelier inactif.

## 7. Changements de règle et détection des obsolescences

1. La proposition contient `regle_id`, texte actuel, texte proposé, justification, provenance exacte, date, portée (UI, contenu, sécurité), impacts sur les fichiers et tests, auteur et statut `PROPOSITION`.
2. La Relieuse compare la proposition aux décisions de Zout et aux contrats existants. Conflits explicites → `CONTRADICTION_A_ARBITRER`; ne pas inventer d'accord.
3. Une **nouvelle décision de Zout** reçoit une entrée **append-only** dans `REGISTRE_DECISIONS.md`, avec le ou les identifiants qu'elle remplace. Le référentiel adopte alors le nouveau texte sur une branche revue.
4. Contrôles déterministes possibles sans réseau : doublons d'ID, absence de source, ancienne règle citée comme actuelle, statuts incompatibles, références SHA divergentes, objets PAR-005 prêts à publier, porte « Entraide » ou « Wiki » affichée comme nom officiel, accès obligatoire à Faire Ensemble, suppression d'archives.
5. Une contradiction est un **signal**, pas une permission de remplacer des contenus. Toute suppression, fusion, activation, publication ou dépense demeure soumise à une décision distincte.

## 8. Sécurité des agents

- **C10/C11/C18** : suivi et messages, sans interpréter émission comme réception.
- **C12 sur main** : mécanisme Issue→Lectrice avec `issues.opened`, permission `issues: write`, et possible appel API si secrets/modèle. **Pas de verrou opt-in explicite sur main au relevé C09**. Risque P0.
- **C13 PR #114 et #186** : `LECTRICE_AI_ENABLED` candidat, pas fusionné. Pas d'exécution de test IA réel démontrée.
- **C14/C07 PR #186** : tâches déterministes, checkpoints et journal chaîné ; une CI verte est un contrôle technique, pas un visa.
- **C15/R1** : Ollama candidat, double autorisation ; aucun accès local effectif supposé.
- **GH-AW #180** : pilote Observatrice distinct, déclenchement manuel + opt-in, non activé. Réserves de budget, secrets, quotas et confidentialité.
- Interdictions transversales : données personnelles, secrets et échanges privés hors GitHub public ; aucun agent autonome ne valide ni publie. Toute nouvelle dépense exige un budget et une autorisation explicites.

## 9. À ne plus redemander

Ne pas rouvrir à chaque cycle les noms des quatre portes, leur grille 2 × 2 et leur égalité, les logos officiels, la place secondaire des Parcours et le blocage PAR-005. Une nouvelle version qui change **réellement** la décision ou le contenu peut nécessiter une confirmation, documentée précisément.
