# La Juriste · Cycle 5 · Passe 3 — P0 revérifiés
**Contrôles exécutés** sur le projet connecté Supabase Interstice le 31/10/2026 (lecture seule) : liste des fonctions actives, SQL sur privilège `submit_wiki_article`, comptes agrégés sans contenu personnel, security advisors. Référence précédente PR #56, `coordination/juriste/2026-10-31_CYCLE3_VERIFICATION_SERVEUR_ET_DECISIONS.md`.

| Point | Preuve actualisée | État |
|---|---|---|
| Suspension candidate front | PR #56, boutons et gestionnaires neutralisés sur branche uniquement | **FERMÉ : correction du front de branche**, pas production |
| `submit-proposal` | Edge Function **ACTIVE v2, verify_jwt=false**, empreinte de déploiement `5e9b2a9131209e3050e793355fa358e91b4166e48d9bfed2e6e51dd42f06f623` | **P0 OUVERT** si suspension réelle exigée |
| `submit_wiki_article` | SQL : `SECURITY DEFINER`, exécutable `authenticated=true` | **P0 OUVERT** si toute collecte doit être suspendue |
| Autres endpoints | `submit-resource` ACTIVE v1, sans JWT ; `github-wiki-ingest` ACTIVE v5, sans JWT : vérifications d'habilitation à mener séparément ; `verify_jwt=false` n'est pas en soi preuve d'une vulnérabilité | **OUVERT contrôle d'autorisation** |
| Données | agrégats : `public.proposals=0`, `wiki_article_submissions=0`, `resource_submissions=0` à cet instant | **FERMÉ pour ces comptages seulement** ; Auth, journaux, sauvegardes non inspectés |
| RLS / fonctions privilégiées | Advisor sécurité : 4 objets RLS sans politique (INFO) et 5 fonctions `SECURITY DEFINER` appelables par comptes connectés (WARN) ; aucun test d'isolation avec deux comptes | **OUVERT test d'accès réel** |
| Mentions légales | pas d'identification juridiquement confirmée de l'éditeur, du directeur de publication, de l'hébergeur et du contact effectif | **P0 OUVERT**, nécessite une personne habilitée |
| RGPD, retrait | information art.13, responsable de traitement, base, durée, destinataires, canal privé opérationnel et suppression vérifiable non prouvés | **P0 OUVERT**, décisions humaines et tests |

**Limites** : aucune écriture/POST/désactivation réelle, pas de lecture de données privées, aucun test d'isolation, pas de changement en production. Le statut « fermé » ne s'étend ni à la collecte serveur ni à l'ensemble des données.

Sources : [CNIL information lors d'une collecte](https://www.cnil.fr/fr/passer-laction/rgpd-les-premieres-etapes), [RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra), [Supabase security definer](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable), [LCEN](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164).
