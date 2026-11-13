# C07 — Relieuse · CI de réception sans publication
**9 novembre 2026.** Nouvelle vérification candidate conçue pour le HEAD `f8d3b4dd638456e8844f585eb766ed16f090c927`, PR #186.

## Objet
La CI habituelle a 9 contrôles verts, mais ces contrôles ne lançaient ni `master-v1/test.mjs` ni un contrôle explicite de la sortie Jekyll. Le workflow ajouté `.github/workflows/c07-master-reception.yml` vise ces deux lacunes, **sans déploiement ni modification de main**.

Il exécute, sur le même commit et sans réseau documentaire privé :
1. `node --test coordination/work/c07/developpeuse/master-v1/test.mjs` et la sortie assainie du moteur ;
2. `node --test coordination/work/c07/relieuse/check-pages-boundary.test.mjs` ;
3. `actions/jekyll-build-pages@v1` avec `source: .` et destination `./_site`, comme le préflight R6 ;
4. le garde-fou `check-pages-boundary.mjs ./_site` qui refuse notamment `coordination/`, `docs/`, `recherche/`, les répertoires d'outillage et les symlinks.

## Limites explicites
Ce scan contrôle **des chemins interdits**, pas l'absence de toute donnée sensible dans un fichier de chemin pourtant autorisé. Il ne démontre pas non plus la confidentialité du **dépôt GitHub public**. Il n'y a aucun visa de diffusion ou de publication, et aucun fichier `_site` n'est committé.

**État à la rédaction : workflow déposé pour exécution GitHub ; résultats non encore reçus.** Une ancienne CI verte ne remplace pas ces tests. En cas de job rouge, conserver le blocage P0 et la preuve, sans neutraliser le garde-fou.
