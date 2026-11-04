# WORK-NAV-01 — prévisualisation indépendante

## Reproduire

```sh
node scripts/build-nav-preview.mjs
cd dist-nav
python3 -m http.server 8080
```

Ouvrir `http://localhost:8080/`. Un serveur HTTP est nécessaire pour les modules ; `file://` ne convient pas. Le même artefact fonctionne sous un préfixe de dépôt (testé sous `/Interstice/` en CI). `explorer.html` est aussi conservé dans l’artefact.

Construction par liste autorisée : modules, CSS, deux SVG officiels, deux manifestes déjà publics et leur style. Les quatre anciens index deviennent, dans l’aperçu seulement, des pages de compatibilité avec liens vers R6. Aucun contenu bloqué, catalogue V2 ou service externe embarqué. `checksums.json` permet de vérifier les sources copiées. Les anciens fichiers du dépôt ne sont pas remplacés.

## HTTPS

Aucun environnement Sites existant n’a été trouvé le 4 novembre 2026. L’aperçu d’atelier tourne localement ; son adresse interne n’est pas une URL publique testable par Zout. Aucun déploiement n’a été fait.

Proposition précise à autoriser après essais : créer un aperçu Sites privé nommé « Interstice — WORK-NAV-01 », y déposer exclusivement le dossier statique construit et conserver GitHub Pages, son domaine et main inchangés. L’URL réelle sera consignée après création et contrôle. Aucun nom d’URL n’est inventé à l’avance.

## Captures et archive

Le workflow `WORK NAV01 isolated navigation QA` produit un artefact téléchargeable `work-nav01-preview-and-evidence-<HEAD>` contenant `dist-nav/`, les captures et les résultats. Conservation CI : 14 jours. Le code permettant de tout reproduire reste dans la PR candidate.

