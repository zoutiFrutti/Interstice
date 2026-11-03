# Pilote IA C11 — lancement conditionnel

Date : 2026-11-01. Décision utilisateur : plafond global 10 EUR/mois ; politique `BUDGET_AGENTS_CLOUD_C11.md`.

## Mission pilote proposée
Atelier : Vigie ou Médiathèque ; sujet non sensible : inventaire de références publiques déjà présentes dans le dépôt, repérage des doublons, rapport critique candidat. Entrées explicitement autorisées et limitées en volume. Sortie : fichier candidat sur branche distincte, pas de publication ni de message externe.

## Critères d'acceptation
- Aucun besoin de PC Linux : runner cloud GitHub Actions.
- Mode simulation sans clé API testé en premier.
- Aucune dépense avant vérification du fournisseur, modèle, tarifs, plafond côté fournisseur et secret GitHub configuré par Zout.
- Budget par mission estimé <= 0,20 EUR ; cumul préventif <= 8 EUR ; budget global <= 10 EUR/mois. Sans coupure de facturation dure, ne pas qualifier ce plafond de strictement garanti.
- Décompte des tokens et coûts vérifiable ; arrêt si mesure manquante.
- Une seule mission à la fois, pas de retry payant automatique, journal et bouton d'arrêt d'urgence.
- Revue de qualité et contrôle des sources par La Lectrice ; aucune fusion ni publication automatique.

## Blocages explicites
- Fournisseur et moyen de facturation non choisis.
- Clé API absente/non vérifiée.
- Plafond de facturation externe non vérifié.
- Aucun agent IA payant lancé.

## Suite
Développer le pilote **sans appel API** (mode simulation) sur branche dédiée, puis demander uniquement les autorisations nécessaires à l'activation payante. Évaluer un agent avant d'en déployer dix-sept.
