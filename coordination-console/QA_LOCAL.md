# Contrôles locaux de la console

Premier passage de WORK-CONVERGENCE-01, sans navigateur partagé, sans activation et sans écriture GitHub.

- `node --test tests/coordination-console.test.mjs` : **7/7 réussis**.
- Syntaxes `model.mjs`, `console.mjs`, constructeur et suite navigateur : vérifiées.
- Construction statique séparée réussie : 8 missions, 19 profils, aucune commande externe.
- `git diff --check` : réussi.
- L’artefact contient uniquement HTML/CSS/JS, seed public, deux SVG officiels, README et empreintes. Le constructeur refuse les fichiers hors liste sans les supprimer.

Les sept tests vérifient les états ternaires et les preuves minimales, l’absence d’inférence d’activité, les routes/recherche, la conformité du brouillon au **normaliseur Python C11 réel**, l’absence de canal d’administration/secret, le refus d’une sortie contaminée et les SVG officiels dans l’artefact.

La suite navigateur comporte **10 scénarios écrits, à exécuter en CI** : 320/390/768/1280 px ; filtres/vues/détail/rechargement ; préparation locale et déclenchement désactivé ; Android Pixel 5 simulé portrait/paysage et défilement tactile ; clavier/focus/historique/arbre d’accessibilité ; axe WCAG A/AA ; HTML sans JavaScript ; zoom Chromium natif 400 % avec capture native non vide ; absence d’erreurs JavaScript, d’API externe et de requête d’écriture.

Les captures et `evidence.json` seront produits dans `artifacts/coordination-console/`, avec SHA et viewport par capture. Aucun de ces scénarios n’est déclaré réussi avant lecture de la CI. Aucun téléphone physique, TalkBack, VoiceOver ou NVDA n’a été testé.

Premier passage CI réel : [41854724639](https://github.com/zoutiFrutti/Interstice/actions/runs/41854724639), HEAD `3e616fd1d42c97f1744b5aadbdae388cb258e905`. Les 7 tests Node réussissent ; 6/10 scénarios navigateur réussissent. Les quatre largeurs échouent à la même assertion immédiate de comptage des sept états, avant la tâche navigateur `hashchange`. Les tests de détail par lien profond et tactile passent, et aucune erreur JavaScript n’est relevée. Correction du test : attendre l’URL et le premier état rendu, puis conserver toutes les assertions des sept états et de leurs valeurs. Nouvelle CI à exécuter, aucune réussite anticipée.

L’accès privé doit être assuré par l’hébergement authentifié de plateforme. Cette démonstration ne contient ni faux écran de connexion ni mot de passe JavaScript ; son bandeau conserve le statut non opérationnel même sous un accès privé.
