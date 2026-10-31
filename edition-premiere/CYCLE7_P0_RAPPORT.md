# La Développeuse — Cycle 7, sécurité P0 et intégration (01/11/2026)
**Périmètre : candidate uniquement, sans opération d'écriture Supabase.**

## Passe 1 — Réconciliation
PR #36 `b43e630e3116beedba90f7e315e16771a1013b6c`, #42 `347f31c9b2d6a9ad856dcb7500fb982dfc85a602`, #51 `6808aec0f5d2d96e07702cf2c862aa383412fcee`, #55 `baaf2f507041ef1b63739c73dde284ea2600510e`, #56 `1388742996cec71e138446914cc508ddd9e267c2`, #60 `780f7dff0c4467706c47886c8544760b30dc03a9`, #62 `41f5c11bef690ca473f23b6674930dc3c7a344b3` identifiées. Base candidate `9077f69b11dcda86a4b0bf6bad0ee6393cb73b08`. Aucune fusion des PR ni mise à jour de leurs branches.
Les neuf pages corrigées par La Lectrice, les trois parcours du Wiki, le moteur de recherche local, les deux visas ARCH-002/007 avec droits à vérifier et les maquettes ÉCL restent inchangés. Les quinze textes ne sont pas promus faute d'une correspondance complète version/visa/droits. Charte des communs V0.9 toujours candidate : PR #62 ne constitue pas une adoption.

## Passe 2 — Inspection serveur directe, lecture seule
Projet Supabase **Interstice** seulement ; ne pas toucher à Kawago/Okane.
- `submit-proposal` : ACTIVE v2, `verify_jwt=false`, la validation Origin n'est pas authentifiante, backend service-role et INSERT possibles. **P0 OUVERT**.
- `submit-resource` : ACTIVE v1, `verify_jwt=false`, code d'INSERT avec service role derrière contrôle Origin : **P0 collecte à traiter séparément**, non neutralisé par le fichier de correction précédent.
- `github-wiki-ingest` : ACTIVE v5, `verify_jwt=false`, vérification de jeton GitHub OIDC par `jwtVerify` avec JWK GitHub, audience et provenance workflow codées. Ne pas le confondre avec un endpoint de formulaire anonyme ; audit cryptographique complet et test de jetons négatifs non exécutés.
- `public.submit_wiki_article` et `public.review_wiki_article` : `SECURITY DEFINER`, `EXECUTE` absent pour `anon`, présent pour `authenticated`. La revue et les contrôles métier internes doivent aussi être examinés.
- RLS et SQL : les rôles ne disposent pas de DML direct sur les tables de contributions dans les requêtes précédentes ; les accès privilégiés via fonction restent possibles. Quatre objets à RLS sans policies signalés INFO et cinq fonctions SECURITY DEFINER exécutables par authenticated signalées WARN. Des avertissements ne démontrent pas à eux seuls une exploitation.
- Recommandations : https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable ; https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy .

## Passe 3 — Correctif minimal additionnel, NON DÉPLOYÉ
Nouveau `edition-premiere/security-p0/submit-resource-disabled.ts`, version réversible renvoyant 503 et ne lisant pas le corps ni les données des personnes. Déploiement ciblé **uniquement si autorisé**. Les correctifs candidats précédents `submit-proposal-disabled.ts` et `suspend-submit-wiki-article.sql` ne sont toujours pas appliqués.

## Passe 4 — QA candidate
`tests/cycle7-p0.test.mjs` vérifie trois suspensions candidates, absence de code d'écriture dans ces handlers, verrou éditorial, parcours, aucun lien vers la maquette ÉCL hors navigation. Suite complète existante pour Node et Chromium à consulter sur le SHA exact. Aucun nouveau contenu Wiki présenté comme approuvé.

## Risques résiduels et interdictions
**Aucune simulation POST/INSERT/DELETE sur la production**, absence de comptes fictifs isolés et de base staging validée ; ainsi aucune preuve de tests dynamiques anon/auth/lecteur non autorisé. Les résultats lus reposent sur les métadonnées de rôle, permissions et code déployé. Les droits RLS ne prouvent pas l'isolation en conditions réelles.
Les API actives peuvent continuer à recevoir des contributions hors formulaires. Recueillir décision explicite de Zout sur la suspension ciblée des trois voies, vérifier consommateurs et plan de repli, puis effectuer revue et tests de préproduction sans données personnelles, déploiement ciblé et tests de non-écriture.
Autres blocages : éditeur/mentions légales, responsable de traitement, canal privé, licences, contradiction historique et visas individuels, TalkBack/VoiceOver physiques.

## Retour arrière
Revert du commit Cycle 7 sur `integration/premiere-edition-candidate-2026-10-31`, retour au SHA `9077f69b11dcda86a4b0bf6bad0ee6393cb73b08`, puis relance Node et Chromium. **Aucun rollback serveur nécessaire puisque rien n'a été changé en production.**
