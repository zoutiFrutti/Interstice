# Production Interstice : intervention P0 autorisée par Zout (1 novembre 2026)

## Portée de l'autorisation
Autorisation explicite de Zout dans la conversation : intervention **après tests isolés et vérification des dépendances** pour poursuivre la fermeture du P0. Aucun mandat éditorial, fusion ou publication. Périmètre exclusif du projet Supabase Interstice `rpqiwxkaiyokmxbhxfvh`; projets Kawago/Okane non modifiés.

## Contrôles préalables et limites
- CI de la candidate Cycle 9 SHA `ad8a46783aafa124847c8cae12ff63c2e0920f4a`, run `41298583801` : 104/104 Node, 24/24 Chromium ; les handlers de suspension ont été exercés isolément via `node:vm` (POST 503, GET 405, OPTIONS 204, aucune lecture du corps).
- Dépendances : `claim_submission_slot` n'était directement exécutable ni par anon ni par authenticated ; `submit_wiki_article` contrôlait `auth.uid()` mais pouvait insérer avec SECURITY DEFINER ; `github-wiki-ingest` est une fonction distincte avec contrôle OIDC applicatif et a été laissée intacte.
- Les tests isolés portent sur les handlers de refus **non sur une réplique intégrale de Supabase avec comptes authentifiés**. Aucune injection de données réelles, simulation destructive ou vérification HTTP bout en bout n'a été effectuée.
- Versions de production avant modification : `submit-proposal` v2, empreinte `5e9b2a9131209e3050e793355fa358e91b4166e48d9bfed2e6e51dd42f06f623` ; `submit-resource` v1, empreinte `4b6e9a3249835a0bf15b22c024fa41337b4ae55790a264e88a7cd4b61de1fd75`. Sources de ces versions relues avant remplacement.

## Modifications de production EFFECTIVES
1. Edge `submit-proposal` : déploiement ciblé du handler `edition-premiere/security-p0/submit-proposal-disabled.ts`. Nouvelle version **v3**, empreinte `7b73efc02989548badcf078fb9c2c7777bc09f867e1d7a5c5d1cbde0350da71c`, `verify_jwt=false` conservé car la fonction est un refus de soumission ; code déployé relu via API Supabase : réponse POST 503, **aucun createClient, accès secrets ni INSERT**.
2. Edge `submit-resource` : déploiement ciblé du handler `edition-premiere/security-p0/submit-resource-disabled.ts`. Nouvelle version **v2**, empreinte `9dedfc1c8a792b288c314c97269b52dd70373f506ded46023a50ab4e2cb30adc` ; code déployé relu : réponse POST 503 sans accès aux données.
3. Migration Supabase `suspend_wiki_article_submission_p0_20261101` : `REVOKE EXECUTE ON FUNCTION public.submit_wiki_article(text,text,text,text,text,boolean,boolean) FROM PUBLIC, anon, authenticated;` ; outil de migration a signalé succès. Relecture SQL : `anon_exec=false`, `auth_exec=false`.
- Aucune modification du schéma des tables, suppression d'enregistrements, mutation des autres RPC ou Edge Functions ni accès aux autres projets.

## Preuves / distinction des niveaux de test
- **Vérifié en production par lecture** : versions Edge et source de refus, absence de code d'écriture dans ces versions, privilèges EXECUTE de la RPC supprimés pour anon et authenticated.
- **Vérifié en sandbox Node** : codes HTTP des handlers candidats ; ce test ne représente pas l'intégralité du réseau de production.
- **Non vérifié** : requête POST réelle sur les deux URLs publiques ; propagation de toutes les couches de cache/routage ; tests négatifs JWT avec des utilisateurs fictifs ; audit exhaustif de `review_wiki_article`, `github-wiki-ingest`, Auth et toutes les routes de mutation. Ne pas déclarer tout le P0 « fermé » à partir des trois seules suspensions.

## Retour arrière : procédure soumise à décision humaine
Un retour arrière rétablirait des chemins de collecte ; **ne pas l'automatiser ni l'exécuter sans nouvel accord explicite de Zout**.
- Edge `submit-proposal` : redéployer exclusivement sa source archivée v2 (empreinte ci-dessus), en conservant `verify_jwt=false`, puis vérifier version, empreinte et test.
- Edge `submit-resource` : redéployer exclusivement v1 (empreinte ci-dessus) et vérifier.
- RPC : rétablir `GRANT EXECUTE ON FUNCTION public.submit_wiki_article(text,text,text,text,text,boolean,boolean) TO authenticated;` seulement après revalidation RGPD et droits ; ne pas accorder à `PUBLIC`/anon.
- Ne pas remettre les formulaires en service automatiquement. Vérifier à nouveau la matrice des privilèges, l'absence de collecte en dehors du périmètre et les journaux.
