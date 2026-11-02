# Comparaison A/B — arbitrage Zout — 2026-11-02
Statut : candidates, aucun logo SVG modifié. Base : PR #135, convergences PR #133 et #136.

## Variante A — radiale fidèle
- Logo officiel centré, quatre portes placées en grille sous le symbole.
- Avantages : lisibilité immédiate, peu de place prise par les branches, plus simple à maintenir sur petits écrans.
- Limites : ne matérialise pas encore les relations entre ressources et leurs preuves.

## Variante B — bras extensibles
- Même SVG officiel intact, traits/points ajoutés par CSS dans une couche indépendante.
- Avantages : direction visuelle plus proche de l'idée du graphe évolutif.
- Limites : risques de surcharge, complexité croissante et nécessité d'une alternative liste. Les relations R0–R3 ne sont **pas** branchées au graphe documentaire réel.

## Règles de décision
A et B conservent les mêmes liens réels : Wiki, Médiathèque, Parcours, Participer. Pas de nouvelle coopération supposée. Mode liste permanent, clavier, reduced motion. Zout choisit le traitement visuel, mais aucune décision sur l'architecture documentaire, les licences ou la publication n'en découle.

## Aperçus à contrôler
Workflow `.github/workflows/r2-graphiste-convergence.yml`, test `tests/graphiste-dev-frontend.test.mjs` : capture Atlas complet, PDF A4, puis `carte-A-390.png`, `carte-B-390.png`, `carte-A-1280.png`, `carte-B-1280.png` dans artefact `r2-graphiste-captures`. Vérifier que l'exécution est réussie **sur le HEAD final** avant de considérer les aperçus comme produits.

## Prochain passage à la Développeuse
Reprendre la PR #136 uniquement après validation des diff et des P0. Ne pas supprimer les routes, ne pas faire migrer le schéma documentaire, ni publier. Une validation esthétique ne remplace pas les essais VoiceOver/TalkBack/NVDA sur appareils réels, le zoom 400%, ou la relecture juridique.
