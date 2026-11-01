# La Juriste — cycle 8, vérification complémentaire des privilèges SQL
**Lecture seule Supabase Interstice, 1er novembre 2026.** Vérification directe dans `pg_proc` de `prosecdef` et `has_function_privilege` pour cinq RPC exposées dans le schéma public.

| RPC | SECURITY DEFINER | EXECUTE anon | EXECUTE authenticated |
|---|---|---|---|
| `is_moderator` | oui | non | oui |
| `moderate_proposal` | oui | non | oui |
| `moderate_resource` | oui | non | oui |
| `review_wiki_article` | oui | non | oui |
| `submit_wiki_article` | oui | non | oui |

**Correction importante :** les cinq fonctions ne sont pas exécutables par le rôle `anon` selon ce contrôle. Le rôle `authenticated` possède effectivement le privilège EXECUTE ; il faut inspecter les gardes et conditions de chaque fonction, et vérifier avec des comptes ordinaires et habilités pour savoir si les appels non autorisés sont réellement rejetés. `SECURITY DEFINER` peut exécuter des opérations avec les privilèges du propriétaire, d'où la vigilance. Aucun contournement de modération n'a été démontré ni simulé.

Priorité P0 : `submit_wiki_article` demeure à tester/refuser côté serveur si la collecte doit être suspendue. Pour les fonctions de modération, ne pas révoquer indistinctement des permissions sans identifier les gardes internes et conséquences. Contrôle d'isolation statique incomplet, donc P0 **ouvert**.

Sources : sortie SQL agrégée `pg_proc`/ `has_function_privilege` du projet connecté ; Supabase [API security](https://supabase.com/docs/guides/api/securing-your-api), [database linter](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable).

Aucune modification SQL ni envoi de données.
