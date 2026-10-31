# Développeuse — Cycle 6, contrôle P0 (31 octobre 2026)
## Passes 1-2 : sources et permissions
- PR #55, #56, #60 inspectées ; branche candidate de base `cc1fca93b599f40a040a6ec8ae32d4315a8aef1b` et rapport Cycle 5 conservés.
- Connexion **lecture seule effective** à Supabase projet **Interstice** (autres projets Kawago / Okane exclus).
- Fonction Edge `submit-proposal` : **ACTIVE**, version 2, `verify_jwt=false`, vérifie l'en-tête Origin, puis recourt à la service-role key et à `claim_submission_slot` pour insérer dans `public.proposals`. Origin / CORS ne sont **pas** une authentification.
- `submit-resource` et `github-wiki-ingest` : **ACTIVE**, `verify_jwt=false` tous les deux ; périmètre supplémentaire à auditer avant ouverture. Ne pas conclure qu'ils sont sécurisés sans inspection de leur authentification interne.
- RPC `public.submit_wiki_article(text,text,text,text,text,boolean,boolean)` : `SECURITY DEFINER`, exécutable par `authenticated`. `review_wiki_article(uuid,text,text)` également SECURITY DEFINER et exécutable par `authenticated`. Le test n'établit ni contournement des contrôles internes ni exploitabilité effective.
- RLS observée dans `pg_policies` : `proposals` public SELECT seulement si `status='published'`, modération via `is_moderator()` ; `wiki_article_submissions` propriétaire ou modérateur en SELECT ; `resource_submissions` public SELECT `status='approved'` et modération. Cela ne bloque pas une fonction SECURITY DEFINER disposant des privilèges SQL.
- Advisory Supabase : cinq fonctions SECURITY DEFINER appelables par authenticated ; quatre tables RLS sans politique (INFO). Voir https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable et https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy .
## Passe 3 : corrections réversibles candidates, NON APPLIQUÉES
- `edition-premiere/security-p0/submit-proposal-disabled.ts` : handler de suspension renvoyant 503, aucune écriture. Il faut autorisation explicite puis déploiement ciblé sur `submit-proposal`, et tests avant/après.
- `edition-premiere/security-p0/suspend-submit-wiki-article.sql` : révocation ciblée du privilège EXECUTE, à revoir avec La Juriste avant migration ; rollback GRANT au rôle authenticated uniquement. Ni DDL ni privilèges modifiés sur la production.
- Ces fichiers sont des **propositions de correction** et non des preuves de sécurité de production.
## Passes 4-5 : intégration et QA
- Neuf corrections La Lectrice, trois parcours Wiki et les protections candidate antérieures conservés sans modification des textes. Quinze articles corrigés : aucun visa individuel de Zout vérifié dans la candidate, donc **aucun article supplémentaire importé ou exposé**. Ne pas confondre disponibilité éditoriale et approbation.
- Les maquettes ÉCL / CIC restent hors liens publics. Les deux archives ARCH-002/ARCH-007 conservent leurs visas à blob identique mais droits finaux `A_VERIFIER`, `decisions.json.authorizations=[]`.
- `tests/cycle6-security-static.test.mjs` : contrôle statique des correctifs, absence de secrets et de collecte dans le code de suspension ; la suite CI historique teste mobile, clavier, liens et parcours.
## Tests actifs non exécutés
- Aucun POST test anonyme ou authentifié sur les fonctions de **production** : le flux est actif et une requête fictive peut produire de vrais enregistrements, contrairement à l'instruction de ne pas rouvrir de collecte. Aucun identifiant d'utilisateur de test indépendant ou environnement de préproduction isolé établi.
- Matrice read/write/update/delete anon/auth/non autorisé : inspection SQL des politiques et privilèges, **pas** de preuve dynamique des quatre opérations. Pour exécuter cette matrice, créer un environnement de tests isolé et des comptes fictifs approuvés, rejouer puis contrôler les changements et rollback.
## Risques et rollback
- **P0 OUVERT** : endpoints d'écriture actifs, audit complet API/RLS non terminé. Mentions RGPD, collecte indirecte Auth/logs, canaux privés, droits tiers, lecteur d'écran réel restent à vérifier.
- Revert du commit Cycle 6 uniquement sur `integration/premiere-edition-candidate-2026-10-31` ; retour au SHA `cc1fca93b599f40a040a6ec8ae32d4315a8aef1b`, relance Node/Chromium. Jamais de suppression de données ni de publication automatique.
