# Audit des contributions Supabase — 29 octobre 2026

**Projet :** Interstice (`rpqiwxkaiyokmxbhxfvh`). **Portée :** vérification statique, sans requête abusive, sans modification de configuration ou de données.

## Vérifications réelles

- Les sept tables du schéma `public` recensées ont la RLS activée : `proposals`, `submission_limits`, `moderation_events`, `moderator_accounts`, `resource_submissions`, `wiki_article_submissions`, `wiki_article_review_log`.
- Politiques RLS lues directement dans `pg_policies` : lecture publique des propositions uniquement avec `status = 'published'` ; des ressources avec `status = 'approved'` ; des articles soumis uniquement par leur auteur ou un modérateur ; lecture de modération conditionnée à `is_moderator()`.
- Fonctions Edge actives : `submit-proposal` v2 et `submit-resource` v1 ; toutes deux `verify_jwt=false`, cohérent avec une soumission publique mais nécessitant une défense anti-abus.
- Le code des deux fonctions contrôle l'origine déclarée, la méthode POST, la taille, plusieurs champs, un champ piège et utilise `claim_submission_slot` pour limiter la fréquence.
- `claim_submission_slot(p_fingerprint text)` est `SECURITY DEFINER` et n'est pas exécutable directement par `anon` ni `authenticated` selon `has_function_privilege` ; `is_moderator()` est `SECURITY DEFINER`, exécutable par `authenticated` mais pas `anon`.

## Risques / limites à traiter

1. **Origine HTTP ≠ authentification.** La vérification du header `Origin` et CORS ne suffit pas contre un client automatisé capable d'envoyer des requêtes HTTP arbitraires. Ne pas présenter cela comme une barrière anti-bots.
2. **IP déclarée.** Les deux fonctions lisent `cf-connecting-ip` ou `x-forwarded-for` pour la limitation de fréquence. Il faut confirmer la provenance et la fiabilité de ces en-têtes dans l'environnement d'exécution Supabase avant de leur faire confiance. `submit-resource` accepte en outre `unknown` comme valeur de repli, contrairement à `submit-proposal` qui refuse l'absence d'IP. Aucune exploitation n'a été testée.
3. **Contrôle de taille.** `submit-proposal` contrôle `Content-Length` avant `req.json()` : un en-tête absent ne prouve pas que le corps est petit. Préférer une lecture bornée du corps réel. `submit-resource` vérifie `raw.length` après `req.text()`, ce qui reste une vérification après chargement.
4. **Données personnelles.** Les filtres de coordonnées par expressions régulières sont partiels et ne remplacent pas une modération ni une politique de conservation. Les URLs soumises doivent être examinées avant exposition publique.
5. **Sécurité en profondeur.** Vérifier `search_path` des fonctions `SECURITY DEFINER`, les privilèges sur les tables, la gestion des secrets et la journalisation ; réaliser des tests contrôlés de quotas, erreurs et publication.
6. **Droits d'auteur et modération.** Vérifier le parcours complet de validation des ressources et articles, les demandes de retrait et la durée de conservation des données.

## Décisions et modifications

**Aucune modification de production.** Les deux fonctions publiques sont conservées en service. Aucun test de charge ou soumission fictive n'a été effectué. Ce document distingue les vérifications directes des risques à confirmer.

## Priorité recommandée

P1 : sécuriser la lecture bornée des corps HTTP et la fiabilité du signal d'IP, avec tests de non-régression avant déploiement. P2 : examiner le parcours de modération et la confidentialité. P3 : tests d'accessibilité et supervision.

**Sources :** API Supabase (`list_tables`, `list_edge_functions`, `get_edge_function`) et requêtes SQL en lecture seule sur `pg_policies` et `pg_proc`, exécutées le 29 octobre 2026.
