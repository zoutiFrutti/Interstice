# C24 — Régression R6 sur la candidate unifiée

**14 novembre 2026 · La Relieuse · statut candidat, lecture seule.**

## Pourquoi cette passe

C23, PR #200, commit `6bb19d4370a919e4f74b95f36cc8e0bf45d79c35`, dispose de trois jobs SUCCESS : contrats historiques et documentaires, navigation Chromium C07/NAV7, et sécurité du paquet Pages local.

Il subsiste une différence vérifiable avec l'ancien workflow R6 INT01 : C23 ne relançait pas la **suite exhaustive des tests navigateur des pages R6 héritées**. Le workflow originel `.github/workflows/r6-int01-convergence.yml` se déclenche sur les PR visant `main`, et il n'a donc pas tourné automatiquement sur C23.

## Correction candidate ajoutée

`.github/workflows/c24-r6-regression.yml`, dérivé des commandes navigateur R6 INT01 existantes :

- Vérifie les ancêtres Git historiques, le contrôle de préservation et la frontière confidentielle source.
- Construit localement une sortie Pages avec Jekyll, sans upload ni déploiement.
- Vérifie les exclusions et les contenus réservés dans la sortie générée.
- Installe Playwright Chromium à version figée `1.56.1`.
- Sert deux fois le dossier local, en racine et dans le chemin `/Interstice/`, pour réexécuter la suite historique de navigation, d'identité SVG et de sécurité HTTP.
- N'exécute **aucun** déclencheur de production, écriture Git, migration, purge ou import privé.

**Provenance :** branche C24 issue exactement de C23, sans retoucher un fichier de site, SVG, contenu éditorial ou permission.

## Règle de réception

Le résultat des jobs sur le **HEAD C24 exact** est nécessaire. Un succès ancien du C23 ne vaut pas preuve C24, et une erreur de test ne prouve pas seule une défaillance du rendu sans analyse des journaux.

Le test Android humain 16/16 concerne seulement l'aperçu privé réellement testé. Il n'est pas un visa de publication ni une preuve que l'archive de l'aperçu privé est identique au HEAD Git C24.

## Limites et décisions maintenues

- `main` inchangé.
- Aucun déploiement de l'aperçu privé ou Pages.
- Aucune fusion de PR.
- Logo R7-B1 et SVG officiels intacts.
- 219 objets C07 sans autorisation de publication ; PAR-005 bloqué.
- Les 24 textes et les dix notices média n'acquièrent pas de nouveau visa.

Après CI, le travail restant est l'identité du build privé testé et la revue des contenus, pas une nouvelle refonte UX.
