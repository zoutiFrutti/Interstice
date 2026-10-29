# Synchronisation des fiches GitHub vers Interstice

État technique : 30 octobre 2026. GitHub est l'archive de référence ; Supabase conserve
les brouillons techniques et leurs versions. La publication reste une action éditoriale
distincte.

## Flux réel

1. GitHub Actions `.github/workflows/wiki-markdown-inventory.yml` scrute `main`
   à chaque modification Markdown des répertoires couverts, sur demande et chaque jour.
2. `scripts/inventory-wiki-markdown.mjs` lit l'arbre et chaque Markdown via API GitHub,
   sans inventer de confirmations de droits ni d'auteur.
3. `scripts/submit-wiki-inventory.mjs` demande un jeton GitHub OIDC à audience propre
   à Interstice et transmet les fiches au service Edge `github-wiki-ingest`.
4. Le service vérifie signature et claims OIDC, l'événement, le dépôt, la branche
   `main`, le workflow, puis relit le fichier GitHub et compare le SHA et le texte.
5. L'appel SQL `public.stage_github_wiki_document` (exécutable seulement par
   `service_role`, `SECURITY INVOKER`) conserve dans le schéma privé
   `wiki_ingest_private` la version Markdown, le chemin, la provenance, les
   références et le statut technique `needs_review`.
6. Les révisions distinctes sont archivées avec unicité `(document_id,content_sha256)`.
   Les mises à jour n'écrasent pas l'historique des versions.
7. Aucun import automatique ne modifie `public.wiki_article_submissions`, ne se
   présente comme un utilisateur, n'approuve des droits, ni ne publie.

## Identité et idempotence

L'identifiant suit `gh-` + les 24 premiers caractères hexadécimaux de
SHA-256 du chemin GitHub. Une contrainte SQL vérifie ce lien au chemin.
Chemin identique et contenu inchangé : `UNCHANGED`. Contenu ou métadonnées
modifiés : `UPDATED_REVIEW_REQUIRED`. Nouveau chemin : nouvelle fiche ;
les renommages devront faire l'objet d'une réconciliation éditoriale contrôlée.

## Vérification éditoriale

Chaque ligne importée reste `needs_review`, `published=false`,
`license_confirmed=false`, `privacy_confirmed=false`. Les références
doivent être contrôlées et les positions non adoptées rester identifiées
comme hypothèses de travail. La publication sur le Wiki nécessite un
second circuit de modération, non automatisé par cet import.

Requête de contrôle administrateur, à utiliser dans l'éditeur SQL sécurisé :

```sql
select source_path,title,atelier,github_blob_sha,editorial_status,published
from wiki_ingest_private.github_document_drafts
order by source_path;
```

## Historique et reprise

L'inventaire complet est conservé comme artefact de l'exécution GitHub Actions.
Un appel Edge rejeté fait échouer la CI plutôt que d'afficher une réussite fictive.
Un nouvel essai relit GitHub, retrouve l'identifiant et n'ajoute pas de doublon.
L'absence d'écriture sur un élément se constate par la réponse `UNCHANGED`.
L'import s'exécute avec les permissions `contents: read` et `id-token: write`.
Aucune clé Supabase n'est enregistrée comme secret GitHub.

## Couverture initiale observée

Premier inventaire sur `main` : 15 fichiers Markdown détectés,
15 fiches techniques dans Supabase, dont 10 classées `PENSEUR`,
1 `JURISTE`, 4 `a_classer`. Ces nombres ne certifient ni la qualité
éditoriale ni l'exhaustivité des ateliers. Les fiches hors des répertoires
`coordination/`, `wiki/`, `encyclopedie/` ne sont pas encore incluses.
Les documents non éditoriaux, doublons sémantiques et renommages exigent
une classification et une revue humaine.

Les fichiers critiques sont `docs/proposals/wiki-github-staging-schema.sql`,
`docs/proposals/wiki-github-production-rpc.sql`,
`supabase/functions/github-wiki-ingest/index.ts` et les deux scripts Node.

## Points restant à réaliser

- Interface de relecture dédiée aux imports GitHub et droit de promotion par modérateur.
- Raccordement des fiches approuvées à l'affichage public du Wiki.
- Audit exhaustif des archives d'autres ateliers et gestion des renommages.
- Test de modification GitHub réelle depuis `main` après fusion et contrôle
  de la nouvelle révision sans doublon.
