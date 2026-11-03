# C03-ORC-03 — Plan d'intégration non destructif

**Priorité P0 : contrôle des permissions. Aucun workflow ni agent activé.**

## Ce qui est déjà conservé

- C10 / boîtes historiques, facteur et journal de messages : archive de référence, à ne pas migrer ni recréer.
- C11 / normalisation des missions et rapprochement des accusés : utiliser pour vérifier les pièces déclarées.
- C12/C13 : pont Lectrice à mettre sous contrôle de permissions **avant** une nouvelle activation ; correctif candidat #114 non fusionné.
- C14/C15/R1 : contrats d'exécution et d'autorisation candidats #115, #116, #126, **sans** les raccorder à des Issues ni à la machine locale.
- C18 #132 : tableau d'états et tests hors ligne ; complété par un index central C03 et son générateur dans cette même PR.
- WORK #161 : référent documentaire V2 candidat ; pas de publication ni migration.

## Séquence de mise en place

**E0 (en cours) — Audit, index et preuves :** Relieuse consulte coordination/c03/INDEX_TRANSMISSIONS.md, rapproche chaque mission avec les PR et SHA exacts. Toute preuve non retrouvée demeure INCONNUE.

**E1 — Dépôt des retours par atelier :** chaque rôle ajoute son rapport à son répertoire déjà utilisé, sur branche dédiée et PR brouillon ; si une PR existe pour ce rapport, l'actualiser plutôt que la dupliquer. Transmettre chemin, commit et blob à La Relieuse.

**E2 — Réconciliation manuelle contrôlée :** La Relieuse vérifie dans l'ordre mandat, envoi, accusé, commencement, livrable, contrôle, décision. Un rapport précédent peut être réutilisé comme antériorité mais ne clôt pas un mandat nouveau.

**E3 — Contrôle des contradictions :** Lectrice rapproche les 35 objections C02 et les 30 réserves WORK, Anarchitecte vérifie les relations et types, Juriste maintient les blocages et la Penseuse revoit les filiations. Les contradictions restent visibles.

**E4 — Versionnement de l'index :** actualiser les relevés GitHub de blob SHA (branche et chemin) dans le JSON et régénérer la vue. Tout changement de blob est marqué à recontrôler, avec l'ancienne version conservée. Aucun balayage ni commentaire automatique.

**E5 — Arbitrage d'intégration :** la Développeuse et La Juriste examinent l'utilisation future des workflows. Zout valide séparément chacune des fusions, activations ou déploiements éventuels. L'index candidat peut être relu sans ces autorisations.

## Portes de sécurité

- C12 actuellement sur main a un déclencheur Issue et un éventuel appel API contrôlé seulement par la présence de clé/modèle, **pas** par un opt-in indépendant. La PR #114 prépare le verrou, mais elle est distincte et non fusionnée. Révision urgente par Développeuse/Juriste avant toute activation.
- C10 facteur est installé sur main, avec dernières exécutions planifiées attestées ; un ticket n'est ni un accusé ni un atelier exécuté.
- C18/C03 n'a aucune permission réseau, aucun jeton, aucun envoi, aucune écriture automatisée dans le dépôt. Les tests GitHub Actions utilisent uniquement le code de la PR.
- Aucune déclaration de statut « validé » ne peut résulter d'une CI verte.
- L'intitulé PUBLIC dans une mission ne vérifie pas l'absence de données sensibles.

## Conditions d'entrée du prochain cycle

Ouvrir d'abord le seul fichier coordination/c03/INDEX_TRANSMISSIONS.md ; vérifier les rapports et les SHA divergents ; créer les mandats de reprise uniquement pour les blocages persistants. Ne pas envoyer de relance collective si la preuve de livraison est simplement en attente de rapprochement.
