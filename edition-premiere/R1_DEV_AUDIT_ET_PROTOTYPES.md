# R1 — Développeuse : audit, contrat commun et limites vérifiées
Date 2026-11-02. Branche `integration/r1-developpeuse-p0-contrat-20261102`, base C10 `372bd6ba765517fbaa12a6cf3d3d35cd474c0e48`. Courrier `R1-DEV.md` et documents R1 00/01/02 lus ; historique C10 et accusés réutilisés. **Aucune production modifiée**.

## P0 : inventaire et vérification directe Supabase
- Edge `submit-proposal` v3 digest `7b73efc02989548badcf078fb9c2c7777bc09f867e1d7a5c5d1cbde0350da71c`, `submit-resource` v2 digest `9dedfc1c8a792b288c314c97269b52dd70373f506ded46023a50ab4e2cb30adc` : versions des handlers de refus conservées. `github-wiki-ingest` v5 digest `64e9c48219a02e2917d1006f34c9fe37686c7333cefadc400e43a76c678a243a` inchangée.
- SQL en lecture seule : `submit_wiki_article` EXECUTE anon=false/authenticated=false ; `is_moderator`, `moderate_proposal`, `moderate_resource`, `review_wiki_article` EXECUTE anon=false/authenticated=true. Contrôle `auth.uid()`/modérateurs observé auparavant, non validé par tests multi-acteurs.
- Advisors : 4 SECURITY DEFINER exécutables authenticated, 4 tables RLS sans politique. Une alerte n'équivaut pas à une exploitation démontrée.
- Rollback **seulement simulé**, rapport `edition-premiere/CYCLE10_ROLLBACK_TESTE.md`, plan `edition-premiere/cycle10-rollback-plan.json`, tests Node VM antérieurs. **Non effectué :** test réseau HTTP avec token réel, test de rôles dans un staging Supabase indépendant, rollback d'Edge et GRANT en staging. Ne pas rouvrir production pour les tester.

## P1 : compléter plutôt que dupliquer
- R1 propose cinq objets liés dans `edition-premiere/R1_CONTRAT_COMMUN_CANDIDAT.json`, sans créer de base de données ni d'objets éditoriaux. IDs 24/44/71 et alias conservés à la source. Relation géographique ne signifie jamais coopération.
- Les prototypes A carte-logo, B fiche imprimable/offline et C œuvres sans hébergement sont **spécifications seulement**. Aucun rendu A, fonctionnement hors ligne B ou dix notices C n'est certifié par ce commit.
- Dépendances : mapping Anarchitecte, statuts Lectrice et Médiathèque (71 notices et alias), delta Graphiste des Passages, droits Juriste, décisions spécifiques de Zout. Ne pas importer les PR #41 cartes fictives ni #42 formulaires comme contenus publiables.

## Vérification / rollback
Le test `tests/r1-contract-guardrails.test.mjs` valide le refus de publication/écriture et les cinq types. Il ne démontre pas le rendu navigateur des futurs prototypes. Retour arrière Git : revert du commit R1 sur sa seule branche et relancer la CI ; aucun rollback Supabase associé.

## Statuts
P0 suspension et privilèges : **TERMINÉ documentaire**, tests multicomptes **BLOQUÉ** par absence de staging opérationnel. Contrat commun **TERMINÉ candidat**. Prototypes A/B/C **À POURSUIVRE**, PWA hors-ligne non réalisée. Publications, droits et choix de variante **DÉCISION ZOUT**. Aucun merge, diffusion, collecte ni adoption.
