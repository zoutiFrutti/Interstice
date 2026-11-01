# L'Anarchitecte — Cycle 8 — Contrôles réellement exécutés et P0
**Date 2026-11-01, candidat non publié. Aucune modification de production.**

## Contrôle 24/24 des pages Wiki : PASS limité aux liens statiques
**Commit audité de PR #51 : `27009cfdf17433e35ce94367cd8fe62621a01858`.**
24 fichiers racine `wiki-*.html` lus effectivement via GitHub (groupes 8+8+8), chemins issus de l'arbre exact du commit. Extraction des attributs `href`, `id` et comparaison des liens locaux avec l'ensemble des chemins du même arbre. Résultat : **0 fichier local cible inexistant, 0 ancre interne `#` manquante, 0 `id` dupliqué dans les 24 documents**. Le lien matériel manquant des cycles antérieurs est corrigé sur cette branche.
**Limites** : analyse regex statique, ne teste pas les ancres sur pages distantes, liens externes, JS dynamique, navigateur, HTTP de déploiement ni l'accessibilité mobile. Le test automatisé ajouté couvre plus loin les ancres inter-pages ; il **n'a pas été exécuté** par Node dans cette passe, car aucun runtime de dépôt n'était accessible.

## Réconciliation 139/139
Registre source PR #43 blob `f005414fc566cf020e2ac8931f4841e30ffde859`. 44 Drive/71 FN/24 Wiki, clés complètes et uniques. Table JSON précédente étendue **à 139 lignes**, avec `corpus`, `key`, provenance, états, empreintes connues et liens duplicatifs ; aucun texte ni URL privée Drive reproduits. Contrôle en mémoire avant commit : 139 entrées, 139 couples corpus+clé uniques, répartition 44/71/24. Commit table `b9c6831670e049450d90257e1b767215e3af4820`. Deux accords humains individuels ARCH-002/ARCH-007, mais `publication_authorized=false`. FN-022/048 et FN-038/057 préservées séparément.

## Tests créés
`tests/anarchitecte-cycle8-contract.test.mjs` ajouté, commit `0f8156d963f222cc4cc8eff581dbf965a95f87da`. Exécuter à la racine de PR #51 :
`node --test tests/anarchitecte-cycle8-contract.test.mjs`.
Vérifie inventaire, unicité, schéma, verrou éditorial, 24 routes, liens et ancres locales/inter-pages, doublons ID HTML et correction du lien matériel. **Code non exécuté par Node dans cette passe** ; aucun badge de réussite CI prétendu.

## Lecture seule du P0 sur Supabase Interstice
Projet actif identifié via connexion Supabase, aucune écriture SQL ni déploiement.
- Fonctions Edge actives `submit-proposal` version 2, `submit-resource` version 1, `github-wiki-ingest` version 5. Les trois déclarent `verify_jwt=false` selon listing. **Cela n'implique pas absence de contrôles internes**, mais exige analyse par endpoint et tests refus/autorisé.
- `submit-proposal` v2 inspectée : POST et contrôle d'en-tête `Origin`, validation de champs, limitation via `claim_submission_slot`, clef service en contexte serveur. L'en-tête Origin n'est **pas une preuve d'identité ni barrière d'autorisation** ; appels non navigateurs peuvent le présenter. Ne pas conclure que fonction exploitable sans test.
- RPC `submit_wiki_article` : `SECURITY DEFINER`, `EXECUTE authenticated`; contrôle `auth.uid()` et limites de longueur/3 soumissions/24h dans le code. Ceci permet intentionnellement une soumission par utilisateur connecté, **ce qui est différent d'une approbation**. Il faut arbitrer si cette collecte doit rester active tant que le P0 n'est pas levé.
- RPC `moderate_proposal` : `SECURITY DEFINER`, `EXECUTE authenticated`, **vérifie `is_moderator()`** avant mise à jour. La fonction `is_moderator()` contrôle la table de comptes modérateurs à partir de `auth.uid()`; aucune commission humaine n'en est déduite. Le risque résiduel dépend des autres rôles, de l'authentification et des tests négatifs.
- RLS activée sur sept tables publiques listées ; politiques SELECT publiques de `proposals` et `resource_submissions` limitées respectivement à `published` et `approved` dans leur expression. Les politiques de modération consultées appellent `is_moderator()`; la lecture `wiki_article_submissions` exige `author_id=auth.uid()` ou modérateur. **Ne prouve pas absence de fuite via vues, fonctions, autres schémas, triggers ou artefacts.**
- Conseillers Supabase de sécurité exécutés : **5 avertissements de fonctions `SECURITY DEFINER` exécutables par `authenticated`**, 4 informations RLS active sans policy sur des tables dont deux privées. Voir [règle Supabase sur SECURITY DEFINER](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable) et [RLS sans politique](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy).
- La candidate `edition-premiere/decisions.json` consultée reste `authorizations: []`. **Blocage public maintenu**.

## Suites strictement nécessaires, non réalisées
1. La Développeuse : tester requêtes refusées/admises sur un environnement sûr pour les Edge Functions et RPC, rôle anon/authenticated/modérateur, lire les implémentations des deux autres Edge, lister les droits effectifs et vues, vérifier la limitation et le chemin service-role. Aucun `REVOKE`, DDL, déploiement sans approbation de Zout.
2. Faire tourner le test Node déposé et la suite browser/CI sur HEAD final après réconciliation PR #44/#50/#57/#63 ; conserver logs/commit.
3. Contrôler HTTP 404, navigation mobile 320/390/1280, Tab/Entrée/retours, requêtes JS, ancres dynamiques et l'absence de données de brouillons dans artefacts et surfaces publiques.
4. Relieuse : statuts et décisions personnelles documentées par fiche/version, droits et sources. Aucune charte ou règle adoptée collectivement.

**Avis final : structure et correspondance complétées, risque P0 non levé, publication interdite par absence d'autorisations.** Aucun merge, publication ou migration.
