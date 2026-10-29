# Interstice — Audit de sécurité initial — 29 octobre 2026

**Périmètre :** inspection en lecture seule du projet Supabase `rpqiwxkaiyokmxbhxfvh`, des fonctions SQL, politiques RLS, vues, privilèges, Edge Functions et pages GitHub concernées. **Aucune simulation utilisateur, aucun test d'intrusion, aucune modification Supabase.** Ce document ne constitue pas une certification.

## Constats confirmés
- Les sept tables métier de `public` ont RLS activé : `proposals`, `resource_submissions`, `wiki_article_submissions`, `wiki_article_review_log`, `moderation_events`, `moderator_accounts`, `submission_limits`.
- `public_proposals` et `approved_resources` sont des vues `security_invoker=true` filtrant respectivement les statuts `published` et `approved`.
- Pas d'accès SELECT anonyme direct aux brouillons Wiki, ressources soumises ou journaux. Lecture des propositions autorisée via RLS uniquement si `published`, ou pour les modérateurs. Wiki : accès auteur via `auth.uid() = author_id` ou modérateur.
- Les fonctions `moderate_proposal`, `moderate_resource` et `review_wiki_article` vérifient `is_moderator()` dans leur corps. `is_moderator()` compare `auth.uid()` avec la liste dédiée `moderator_accounts`.
- Les deux Edge Functions de dépôt sont actives, sans vérification JWT (accès public intentionnel) et emploient un compte serveur pour insérer après validation, contrôle d'origine et limitation par empreinte IP.
- Les tables signalées `rls_enabled_no_policy` sont `moderator_accounts` et `submission_limits` : configuration cohérente avec l'interdiction de les consulter directement via l'API, mais à tester.
- L'analyseur de sécurité signale cinq `SECURITY DEFINER` exécutables par `authenticated`. Trois fonctions de modération vérifient leur autorisation en interne ; `submit_wiki_article` vérifie l'identité et limite à trois envois sur 24h ; `is_moderator` révèle uniquement un booléen. Le signalement mérite revue, mais n'est pas à lui seul la preuve d'une faille.

## Risques et limites à traiter avant ouverture des contributions
1. **Tests d'isolation RLS** : réaliser des essais avec deux comptes ordinaires, un compte modérateur, le rôle anonyme ; vérifier lecture, insertion, modification et appels RPC. Aucun test exécuté dans cette passe.
2. **Fonctions publiques** : le contrôle `Origin` et CORS n'authentifie pas les clients non-navigateurs (en-tête forgeable). Vérifier anti-spam et quotas sous charge ; contrôler la confiance accordée aux en-têtes IP des proxies.
3. **Données personnelles** : les filtres regex sur coordonnées ne garantissent pas l'absence de contenu identifiable. Vérifier revue humaine, suppression, conservation et information RGPD avant la collecte réelle.
4. **Publication** : vérifier la modération de bout en bout, particulièrement le passage de `pending` à `published`, et que rien n'apparaît avant validation.
5. **Sauvegardes/restauration** : aucune preuve de restauration testée ; vérifier les options disponibles pour le plan et la capacité de reprise.
6. **Configuration Auth** : tester le lien de connexion, l'expiration, les redirections autorisées et la possibilité d'énumérer les comptes.
7. **Journalisation et secrets** : audit des logs Edge Functions et vérification qu'aucune donnée sensible n'y est conservée.
8. **Documentation** : `README.md` décrit encore un prototype à brouillon local alors que `script.js` transmet désormais les données à Supabase.

## Décision provisoire
**Consultation publique sous réserve des tests de rendu et de liens : envisageable.**  
**Ouverture générale des formulaires : non validée**, tant que les essais de permissions, sauvegardes, modération et protection des données n'ont pas abouti.

Références : Supabase Security Advisor, introspection PostgreSQL `pg_policies`, `pg_proc`, `pg_class`, `information_schema.role_routine_grants`, Edge Functions `submit-proposal` et `submit-resource`, dépôt GitHub `zoutiFrutti/Interstice`. État observé le 29 octobre 2026.
