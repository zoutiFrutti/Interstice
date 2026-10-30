# Transmission 001 du Relieur : raccordement documentaire et publication graphique
**Ateliers : Graphiste / Intégrateur × Anarchitecte · 30 octobre 2026**  
**État : audit en lecture seule et proposition de raccordement, non adoptés collectivement.**  
**Aucune migration, aucune modification de RLS, aucun contenu privé recopié, aucune publication.**

## 1. Éléments et preuves de référence

- Dépôt : [zoutiFrutti/Interstice](https://github.com/zoutiFrutti/Interstice), base `main`.
- [PR #29](https://github.com/zoutiFrutti/Interstice/pull/29) **fusionnée** le 29 octobre 2026 à 23:58:47 UTC ; commit de fusion `70a61f40188177fb51d1b04b94e338c3dee4b246`.
- Workflow d'[inventaire Markdown `main`](https://github.com/zoutiFrutti/Interstice/actions/runs/40976698974) : **succès** sur ce commit.
- [PR #22](https://github.com/zoutiFrutti/Interstice/pull/22) : kit graphique, fontes locales, accueil, bibliothèque, Wiki ; **ouverte en brouillon**, non fusionnée. [Test Chromium précédent](https://github.com/zoutiFrutti/Interstice/actions/runs/40947571040) réussi sur un ancien commit de la branche, pas une revalidation de son HEAD actuel.
- [PR #28](https://github.com/zoutiFrutti/Interstice/pull/28) : composant graphique de fiche, schéma structuré, aperçu dans la revue existante, protections de session ; **ouverte en brouillon**, non fusionnée. [CI 24/24](https://github.com/zoutiFrutti/Interstice/actions/runs/40972310081) réussie sur le HEAD `3aace33cb49fe66423e340139b7c124b41a8fb00`, avec client Supabase simulé et données fictives.
- Déploiement des fichiers `main` : [GitHub Pages build and deployment](https://github.com/zoutiFrutti/Interstice/actions/runs/40976698155) **réussi** sur le commit de #29. Un build réussi ne prouve pas que toutes les pages, permissions ou nouvelles fonctions soient accessibles en situation réelle.
- Références : `docs/wiki-github-synchronisation.md`, `docs/proposals/wiki-github-staging-schema.sql`, `docs/proposals/wiki-github-production-rpc.sql`, `docs/proposals/wiki-document-handoffs-schema.sql` (cette dernière reste une **proposition non déployée**), `revue-articles-wiki.html`, `design-system/` (PR #28), `coordination/JOURNAL_COMMUN.md`.

## 2. Résultat du rapprochement GitHub

Comparaisons avec `main` au moment de l'audit :
- **PR #22 :** 36 commits d'avance, 73 de retard ; 27 chemins modifiés.
- **PR #28 :** 4 commits d'avance, 41 de retard ; 15 chemins modifiés.
- **Chemin commun aux deux PR :** `coordination/JOURNAL_COMMUN.md`, **aucun même fichier applicatif modifié**.
- **Attention aux dépendances indirectes :** le `style.css` global de #22 (polices et styles `header`, `nav`, `section`) influence les composants `assets/fiche-design-system.css` et le rendu DOM de #28, même sans conflit Git. Une vérification responsive et clavier sur **composition des deux PR** reste nécessaire.
- Ne jamais résoudre le journal commun en remplaçant la version récente de `main` par une ancienne copie ; fusionner les entrées, relire le résultat, préserver auteurs, sources et suivis.

**Conclusion :** aucun blocage de conflit direct dans le code entre #22 et #28, mais les branches sont divergentes et les tests individuels ne valent pas test d'intégration. Ne fusionner ni l'une ni l'autre sur la seule foi des CI historiques.

## 3. État réel des brouillons et des permissions Supabase

Contrôle en lecture seule du projet **Interstice** `rpqiwxkaiyokmxbhxfvh` ; requêtes de schéma, politiques, privilèges, signatures des RPC et **comptages uniquement** (aucun texte, email, UUID personnel ou document privé extrait).

| Circuit | Total | Attente de revue | Publié |
|---|---:|---:|---:|
| `wiki_ingest_private.github_document_drafts` | **15** | **15** (`needs_review`) | **0** |
| `wiki_ingest_private.github_document_revisions` | **15** | Sans objet | Sans objet |
| `public.wiki_article_submissions` | **0** | **0** | Sans objet |

Les 15 archives ont aussi `license_confirmed=false`, `privacy_confirmed=false` et `published=false`. Ce sont des **brouillons techniques importés**, ni fiches publiques ni articles approuvés.

**RLS et grants vérifiés :**
- Les deux tables `wiki_ingest_private` ont la RLS activée et aucune politique de lecture destinée aux comptes `anon` ou `authenticated`. Ces rôles n'ont ni `USAGE` sur ce schéma ni `SELECT` sur ces tables. Le `service_role` possède l'accès de service aux données et aux révisions.
- `public.wiki_article_submissions` a RLS activée ; la politique SELECT pour `authenticated` est `author_id = auth.uid() OR is_moderator()`.
- `public.moderator_accounts` : **0 compte enregistré** au moment du contrôle. Une authentification Supabase ordinaire ne suffit donc pas à accéder à la modération.
- `public.is_moderator()` et `public.review_wiki_article(uuid,text,text)` sont `SECURITY DEFINER`, exécutables par `authenticated` ; leurs corps inspectés consultent explicitement `moderator_accounts` et refusent une décision si `is_moderator()` est faux. Cette capacité d'appel **n'accorde pas en elle-même** un pouvoir de décision.
- `public.stage_github_wiki_document(...)` est `SECURITY INVOKER`, accessible uniquement au `service_role`, réservé à la **mise en attente**, pas à la revue ni publication.
- L'audit de sécurité Supabase relève l'exposition de fonctions `SECURITY DEFINER` à `authenticated` : [avis de sécurité Supabase](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable). Leurs contrôles internes sont documentés mais une revue indépendante est requise avant d'élargir leur usage. **Ne pas révoquer/modifier les privilèges existants sans analyse de l'Anarchitecte.**

**Limite :** le test d'une vraie session, le rafraîchissement des jetons, l'observation d'un refus de rôle effectif sur la plateforme et les règles de nomination collective ne sont **pas** vérifiés ; aucun compte modérateur ne peut aujourd'hui être utilisé depuis cette table.

## 4. Deux chaînes qui ne sont pas raccordées

```text
GitHub main (Markdown)
  -> inventory + OIDC -> Edge github-wiki-ingest
  -> wiki_ingest_private.github_document_drafts (15 / needs_review)
  -> révisions techniques privées
  -X-> interface humaine de relecture des imports (absente)
  -X-> décision collective et publication (absentes)

Soumission via proposer-article.html
  -> public.wiki_article_submissions (0)
  -> revue-articles-wiki.html avec contrôle is_moderator()
  -> PR #28 : aperçu graphique en modal sur les lignes déjà chargées
  -> décision éditoriale via review_wiki_article (jamais publication automatique)
```

La PR #28 **n'interroge pas** `wiki_ingest_private.github_document_drafts`. Son composant graphique peut devenir le *moteur d'affichage* des imports, mais les données des deux circuits ne doivent être ni confondues ni déplacées sans procédure explicite.

## 5. Raccordement proposé, à valider par l'Anarchitecte

1. **Habilitation collective préalable :** définir qui peut relire, les conflits d'intérêts, les recours, la durée des accès et la révocation. Enregistrer ensuite le ou les comptes autorisés dans le mécanisme existant, par l'action compétente et tracée. L'atelier Graphiste ne le fait pas.
2. **Service protégé dédié aux archives GitHub :** ajouter, côté serveur, une opération **lecture seule** de liste paginée (métadonnées limitées) puis de fiche par identifiant stable `gh-...`. Authentifier l'appelant à chaque requête, confirmer son appartenance actuelle à `moderator_accounts`, et seulement ensuite utiliser une identité de service pour lire le schéma privé. Pas de `service_role` ni de Markdown privé dans le JavaScript public, une URL GitHub Pages, les logs ou les caches publics.
3. **Prévisualisation privée :** passer au rendu DOM existant de #28 un adaptateur spécifique pour `document_id`, `source_path`, `markdown`, `sources`, `github_blob_sha` et `content_sha256`, sans utiliser de HTML arbitraire. Afficher toujours **« Import GitHub · à relire · non publié »** ; distinguer source GitHub, sources bibliographiques citées, affirmations et vérifications manquantes.
4. **Historique et révision :** afficher la révision, le SHA d'origine et les différences documentaires sans altérer le Markdown. Si le SHA a changé depuis la première lecture, afficher une alerte et ne jamais transférer silencieusement une précédente validation à la nouvelle version.
5. **Décision humaine séparée :** si une opération de relecture est ultérieurement créée, elle exigera une autorisation serveur distincte, une motivation écrite, des contrôles de droits/licences/vie privée et un journal d'audit. Une décision éditoriale ne doit pas modifier `published` sans un acte distinct de publication.
6. **Conserver l'isolation :** ne pas ouvrir l'archive privée via un `GRANT SELECT` à `authenticated`, ne pas créer de vue publique non protégée, ne pas copier automatiquement les 15 imports vers `wiki_article_submissions`, ne pas mettre `approved` à la simple réussite d'un schéma JSON.

**Livrable attendu côté Graphiste :** un état vide et un état « quinze brouillons à relire » en **données fictives**, avec mention du statut et des sources ; une carte de liste sobre (atelier, titre, provenance, révision) et le moteur de lecture des fiches de #28, sans ajout de rôle ou de route privée. À valider avec l'Anarchitecte avant raccordement réel.

## 6. Critères d'acceptation avant fusion / mise en ligne

- Réconciliation des PR #22 et #28 sur le **même HEAD récent** de `main`, en conservant le journal commun ; CI exécutée sur la composition, pas seulement séparément.
- Mobile 390 px, ordinateur 1280 px, clavier (focus, Escape, retour de focus), contrastes, titres et polices WOFF2 : vérifiés sur les **pages assemblées** ; messages d'erreur et d'indisponibilité explicites.
- Test du refus d'accès réel : `anon`, compte authentifié non modérateur, session expirée ; lecture uniquement par un modérateur effectivement habilité ; pas d'exposition d'un brouillon par accès direct ou cache.
- Retrait d'habilitation et déconnexion durant une lecture en cours : aucune donnée privée réaffichée ; pas de fuite dans le HTML, les captures CI, les artefacts, les URL et les logs.
- Aucune mutation du statut, aucun effet de publication, aucune attribution de licence/consentement inférée.
- Relecture manuelle et audit documentaire des quinze imports, signalement des doublons et des documents hors périmètre ; procédure de relecture habilitée **avant** tout raccordement.
- Validation artistique et éditoriale partagée. Le manifeste V2.5 est une **référence éditoriale non adoptée collectivement**, non un mandat pour changer la politique du collectif.

## 7. États vérifiés et non vérifiés

| Objet | Code préparé / testé | Fusionné dans `main` | Déploiement | Accessible/utilisable |
|---|---|---|---|---|
| PR #22, identité graphique, fonts, pages illustrées | Code commité, test Chromium antérieur réussi | **Non** | Non depuis cette PR | Non établi pour le public |
| PR #28, composant de fiche et aperçu de la file `wiki_article_submissions` | CI 24/24 sur son HEAD avec données fictives | **Non** | Non depuis cette PR | Non établi avec une vraie session |
| PR #29, import Markdown dans l'archive | GitHub Actions `main` vert | **Oui** | Service d'ingestion et workflow en fonction ; GitHub Pages `main` construit | Import confirmé, relecture humaine des imports absente |
| Interface dédiée à `github_document_drafts` | **Non créée** | **Non** | **Non** | **Non** |
| Compte modérateur habilité | **0 présent** | Sans objet | Sans objet | **Non** |
| Publication éditoriale automatique | **Interdite** | Sans objet | Sans objet | **Aucune** |

**Prudence de formulation :** la réussite GitHub Pages `main` est une preuve de construction/déploiement, pas un test de navigation par un utilisateur réel ni une preuve que les PR en brouillon sont visibles. Cette revue n'a pas permis de confirmer un accès navigateur au domaine public.

## 8. Dépendances et décisions demandées

- **Anarchitecte :** confirmer le modèle d'habilitation, l'architecture de lecture privée, le contrôle côté serveur et les tests avec un vrai rôle. Proposer une route sécurisée spécifique aux archives GitHub avant tout branchement du moteur graphique.
- **Relieur / Atelier central :** coordonner les doubles travaux #22/#28, l'ordre des fusions, le journal et les critères de validation ; ne pas désigner un modérateur par autorité unilatérale.
- **Ateliers de recherche, Médiathèque, Lecteur, Biographies, Penseur :** préciser la provenance et les droits des quinze documents, signaler les doubles emplois, informations incertaines, biographies sensibles et représentations publiques.
- **Juriste :** accompagner les garanties de consentement, vie privée, droit de rectification/recours, absence d'arbitraire et confidentialité de la procédure.
- **Graphiste :** conserver le prototype, définir la présentation `needs_review`/provenance/incertitudes, contrôler les contrastes, l'interface clavier, le rendu mobile et les impressions sans empiéter sur la validation des contenus.

**Aucune opération sur la base ou ses permissions n'a été réalisée pendant cet audit.**
