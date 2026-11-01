# Cycle 9 — Vérification complémentaire après suspension P0 (1 novembre 2026)

**Projet contrôlé** : Supabase Interstice seulement. **Production consultée en lecture seule** pendant cette passe, aucune nouvelle migration ni modification Edge.

## Faits vérifiés
- `submit-proposal` actif v3, empreinte `7b73efc02989548badcf078fb9c2c7777bc09f867e1d7a5c5d1cbde0350da71c` : code de suspension déployé lors de l'intervention précédente.
- `submit-resource` actif v2, empreinte `9dedfc1c8a792b288c314c97269b52dd70373f506ded46023a50ab4e2cb30adc` : code de suspension.
- `github-wiki-ingest` v5 inchangé, contrôle OIDC applicatif décrit dans le rapport précédent : **pas testé en HTTP**.
- `submit_wiki_article` SECURITY DEFINER : `EXECUTE anon=false`, `authenticated=false` confirmé.
- Quatre fonctions SECURITY DEFINER exécutables par authenticated : `is_moderator`, `moderate_proposal`, `moderate_resource`, `review_wiki_article`. Leurs définitions SQL ont été lues : les trois opérations de modération appellent `public.is_moderator()`, laquelle compare `auth.uid()` à `public.moderator_accounts.user_id`. Les opérations de modération modifient les lignes existantes ; elles ne sont **pas** une collecte nouvelle, mais restent des interfaces privilégiées nécessitant une vérification d'autorisation par comptes factices.
- Advisors après suspension : 4 fonctions SECURITY DEFINER accessibles authenticated (WARN), 4 tables RLS sans policies (INFO). La dernière catégorie concerne aussi des tables privées bloquées par absence de policies ; ne pas la confondre automatiquement avec une exposition publique.

## Protections / limites
La vérification des définitions SQL et des privilèges ne constitue **pas** un essai réel de rôle usurpé. Les fonctions de modération restent disponibles aux personnes disposant du rôle `authenticated` mais exigent l'appartenance à `moderator_accounts`; vérifier l'absence de chemin alternatif d'enregistrement comme modérateur.
Les handlers HTTP de refus ont passé les tests Node isolés avant mise en production, mais les requêtes publiques de vérification n'ont toujours pas abouti ; la sécurisation complète ne peut être conclue sans tests réseau et contrôle de journaux.

## Suite proposée en environnement isolé
Créer deux utilisateurs fictifs distincts et un modérateur fictif habilité ; tester `is_moderator` faux/faux/vrai, puis les refus `moderate_proposal`, `moderate_resource`, `review_wiki_article` sur des UUID fictifs ; vérifier l'absence d'UPDATE, DELETE et INSERT de journal par un compte non habilité. Contrôler `github-wiki-ingest` avec jetons absents, invalides, mauvais `aud`, `iss` et provenance workflow, sans données personnelles. Ces tests **non exécutés** ne peuvent pas être déclarés réussis.

## CI candidate et rollback
Le test `tests/cycle9-security-regression.test.mjs` examine les sources de suspension commitées et le SQL prévu afin d'éviter la réintroduction accidentelle d'écritures lors de futures intégrations. Il ne lit pas automatiquement la production.
Revenir au parent du commit de cette passe sur la candidate en cas de régression, puis relancer Node/Chromium. **Un rollback Git n'annule pas les suspensions Supabase déjà appliquées.** La réactivation des soumissions ne doit pas être effectuée sans une nouvelle décision explicite de Zout.
