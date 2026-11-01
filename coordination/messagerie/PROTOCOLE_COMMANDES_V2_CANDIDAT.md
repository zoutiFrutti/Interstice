# Protocole candidat V2 — commandes, courriers et cycles évolutifs
Date : 2026-11-01. Émis par La Relieuse. **Document de référence candidat, non fusionné.**

## Commandes des ateliers
- **T'as du courrier** : lire sa boîte et l'index, vérifier les SHA, accuser réception par commit, traiter les missions réalisables, écrire les transmissions nécessaires, mettre à jour le journal.
- **Ok next** : reprendre l'état réel, consulter également les courriers, poursuivre les actions autorisées, effectuer plusieurs passes.
- Un atelier peut écrire à n'importe quel autre atelier, à plusieurs destinataires ou à La Relieuse. Aucun passage obligé par La Lectrice ni par un relais central.
- Un message ne devient REÇU qu'avec accusé vérifiable ; TRAITÉ qu'avec preuve de traitement. Éviter les doublons via ID unique. Toute branche isolée nécessite réconciliation explicite vers la branche de coordination.

## Commandes de La Relieuse
- **Analyse le cycle** : commencer par créer puis exécuter son propre prompt d'audit de clôture (sans clôturer), contrôler courriers, branches, livrables, SHA, tests, décisions, dépendances ; corriger les registres autorisés, archiver prompt et journal d'exécution, donner verdict et relances.
- **Continue le cycle** : audit, préparation/dépôt des courriers pertinents, ordre de lancement dynamique (maintenant/partiellement/attendre), puis création et exécution immédiate de son propre prompt de coordination. Traces GitHub obligatoires.
- **Termine le cycle** : (1) audit final ; (2) autorisation de clôture ; (3) création et exécution du prompt de clôture ; (4) clôture officielle si autorisée ; (5) courriers du cycle suivant avec reports/dépendances ; (6) ordre de lancement. Si non clôturable, aucun faux acte de clôture ni activation prématurée du cycle suivant.

## Traçabilité et restrictions
La Relieuse **ne s'envoie pas de prompt à elle-même sur GitHub** : elle exécute son prompt dans sa conversation, puis publie les traces consultables : prompt exécuté, journal, preuves, décisions, dépendances. Un prompt écrit ne prouve pas son exécution. Aucune fusion, publication, modification de production, diffusion externe ni adoption éditoriale automatique.

## Situation observée lors de l'analyse du 2026-11-01
- Index `coordination/messagerie/MESSAGES_C10.md`, blob `a74246853864a9067355ab3b80d9cb4116365110` : huit messages initialement marqués ÉMISE, aucune réception attestée dans cet index.
- Dépendances `coordination/messagerie/DEPENDANCES_C10.md`, blob `26bf396c4f0c2440a26f120c66316395b4bdcb58` : cinq portes ATTENTE.
- Registre provisoire `coordination/cycle10/REGISTRE_CLOTURE_PROVISOIRE_C10_2026-11-01.md`, blob `97c693488d39948600310e68e5b46fda61be0d28` : cycle non clôturable dans le périmètre alors contrôlé.
- Cet examen **ne constitue pas** une nouvelle vérification exhaustive des seize branches ni de toutes les réceptions sur les branches d'ateliers.

## Prompt de La Relieuse pour cette passe et exécution
**Prompt construit :** « Contrôle la messagerie candidate du cycle 10, vérifie l'état documentaire de ses courriers et dépendances, consigne les règles V2 sans prétendre à une clôture, puis fournis un message unique d'activation à chaque atelier. »
**Actions exécutées :** lecture directe du protocole V1, de l'index des messages, des dépendances et du registre de clôture provisoire ; vérification de leurs blob SHA ; création du présent protocole V2 candidat. **Limites :** aucun test CI, aucune fusion, aucune vérification complète des 16 transmissions, aucun accusé produit pour autrui.
