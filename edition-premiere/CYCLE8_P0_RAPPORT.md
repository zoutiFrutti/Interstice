# Cycle 8 — Développeuse : P0 serveur et intégration Wiki/Bibliothèque
Date : 1 novembre 2026. Branche candidate distincte `integration/cycle8-wiki-bibliotheque-p0-candidate-2026-11-01`, base exacte `2031aa319cb033e57f684ee1b1fd3e638b4c6831`.

## Preuves de lecture seule
- PR #56 HEAD `1388742996cec71e138446914cc508ddd9e267c2`; PR #62 HEAD `41f5c11bef690ca473f23b6674930dc03a9`; PR #65 HEAD `2251be00f50a96233d7a0289fe32ee216d2f7e09`.
- Supabase projet Interstice uniquement : `submit-proposal` ACTIVE v2 / `verify_jwt=false` ; `submit-resource` ACTIVE v1 / `verify_jwt=false` ; `github-wiki-ingest` ACTIVE v5 / `verify_jwt=false`, mais validation OIDC GitHub à l'intérieur du code (vérification cryptographique approfondie non réalisée).
- `submit_wiki_article` et `review_wiki_article` : `SECURITY DEFINER`, `anon EXECUTE=false`, `authenticated EXECUTE=true` par requête SQL directe.
- Supabase advisors : 5 fonctions privilégiées exécutables par `authenticated` (WARN), 4 tables RLS sans policy (INFO). https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable ; https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy .
- Les politiques RLS et privilèges directs des trois tables de soumission ont été examinés au Cycle 6. Aucun test d'écriture, de suppression ni de compte fictif exécuté en production. Des droits SELECT contrôlés par RLS ne prouvent pas une isolation multicomptes.
- **P0 NON RÉSOLU** : formulaires neutralisés côté navigateur, points d'entrée serveur toujours actifs.

## Correctifs candidats réversibles
- Conservés sans appliquer : `edition-premiere/security-p0/submit-proposal-disabled.ts`, `submit-resource-disabled.ts` et `suspend-submit-wiki-article.sql`.
- Aucun déploiement, aucune migration, aucun changement des rôles ou des données ; il faut l'autorisation spécifique de Zout et un environnement de test isolé avant essais dynamiques, puis contrôle de rollback réel.

## Wiki / Bibliothèque et PWA
- `wiki.html`, `bibliotheque.html` et les trois parcours critiques sont conservés et reliés par navigation candidate ; aucune fiche éditoriale n'est promue.
- Les registres, les deux visas ARCH-002/007 et leurs droits `A_VERIFIER` restent inchangés. Maquettes ÉCL/CIC hors navigation.
- **PWA non démontrée dans la candidate actuelle** : aucun `manifest.webmanifest` ni service worker identifié lors de l'inventaire Git ; pas d'installation hors ligne revendiquée. Le site statique reste accessible sans compte ni collecte dans les parcours testés.
- La branche est un candidat dans un dépôt GitHub accessible : **ne jamais y déposer de brouillons confidentiels** ; l'absence de lien ou `noindex` n'est pas une permission d'accès.

## Fonctions
- Fonctionnelles selon CI antérieure : routes statiques Wiki/Bibliothèque, recherche locale Wiki, parcours critiques et navigation clavier 320/390/1280px.
- Préparées mais non opérationnelles en production : suspensions serveur des contributions, matrice dynamique multi-rôles, installation PWA, intégration de nouveaux articles sans visas.
- Inconnues ou non auditées : isolation réelle RLS par comptes distincts, comportement sans connexion réseau, permissions sur les fonctions Edge supplémentaires, lecteur d'écran physique, licences documentaires et contact RGPD.

## Retour arrière
Revenir au parent de ce commit sur la seule branche `integration/cycle8-wiki-bibliotheque-p0-candidate-2026-11-01` par revert non destructif, ou recréer une candidate depuis `2031aa319cb033e57f684ee1b1fd3e638b4c6831`. Relancer Node et Chromium. Aucun rollback de production nécessaire : aucune modification Supabase.
