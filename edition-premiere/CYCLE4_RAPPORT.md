# Cycle 4 — Développeuse, rapport technique candidat (31 octobre 2026)

## Réconciliation vérifiée
- Base du cycle : `100ea7e7f47289d9247f65cd8a44c909aa880d9a` sur `integration/premiere-edition-candidate-2026-10-31`. PR #50 `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb`, PR #51 `65bfd9add17ccdf5e79eb2a425d44f78285869b7`, PR #56 `1388742996cec71e138446914cc508ddd9e267c2`, PR #57 `2d8bb7960d7e2a4f1f3428841cbcc705a0962877`, PR #58 `79baeb8448652e855f411b5adccacbb6f42cb25f` consultées. Aucune fusion entre versions éditoriales concurrentes, aucune modification de la V2.5.
- Journaux `JOURNAL_COMMUN.md` (branche de coordination, blob `f55e12386a6d968e774ac691cfa2237d6d4278e7`) et `JOURNAL_ECLAIREUSE.md` (blob `7f375face8bcd1f58c72ec67e9c70ae463486e0c`) identifiés. ÉCL-001 à ÉCL-004 toujours ENQUETE_CANDIDATE. EJAtlas : ressource commune à deux enquêtes, aucun doublon ajouté.
- Registre canonique de coordination blob `fb631d94802760dcbf7abfb9fc10c92c89206934` : seuls ARCH-002 et ARCH-007 disposent du visa éditorial explicite Zout, respectivement sur `f9f0b6edf09cf0e84fe7e46960f25df1a8e99dbb` et `372bfcee95f7bd4a1f37dfa9393264662050e9ba`. `rights_final=A_VERIFIER`, `publication_authorized=false`, `merge_authorized=false`. Le snapshot du générateur conserve ces deux visas, `decisions.json` reste vide, aucune page ARCH publique. Aucun autre visa inventé.
- Neuf corrections de La Lectrice et V0 018-E préservées telles quelles. Les trois parcours critiques existent déjà dans `wiki.html` avec CSS réutilisé, ancres, objections et exercices `details`. La PR #57 évolue encore ; sa version nouvelle n’est pas écrasée dans le prototype existant sans comparaison éditoriale.

## Nouveau livrable Cycle 4
`design-system/maquette-ecl-cycle4-interne.html` : trois familles de composants candidates (enquête sur le pouvoir, luttes/héritages, CIC), formulaires absents, sources et états à instruire, sans texte sensible ni médias, sans JavaScript ni indexation. **Maquette hors navigation et hors index public** ; elle n’ajoute aucun parcours publié. Les prochaines fiches exigent le même double verrou par ID/version et validation de sources/droits. Les chartes et le Manifeste V2.6 restent candidats.

## Risques non résolus (P0)
- Front de cette candidate : `proposer-article.html` statique et scripts de démonstration neutralisés. **API serveur distincte** : `submit-proposal` Edge Function reste accessible selon audit Juriste, `submit_wiki_article` RPC SECURITY DEFINER exécutable pour authenticated ; suspension UI **ne vaut pas** suppression de l’API. RLS et privilèges observés par La Juriste ; **pas de test actif ni de modification serveur dans cette passe**. Aucune garantie d’absence de collecte sur l’ensemble du site/projet.
- Identifier éditeur, hébergeur, contact privé, mentions légales, droits d’accès/rectification, sauvegardes et journaux d’authentification avant ouverture. Autres réserves : revue juridique des neuf pages, disponibilité du canal privé, droits ARCH, licences tierces, tests humains TalkBack/VoiceOver.

## QA / rollback
- `tests/edition-cycle4.test.mjs` : statut archives et absence de troisième visa, SHA des textes, 3 parcours existants, absence de liens publics vers les candidats ÉCL, prototype sans collecte et routes locales valides. Les suites CI antérieures (Node, Chromium 320/390/1280, clavier, zoom, P0) sont réexécutées sur SHA exact.
- Retour arrière ciblé : annuler le commit Cycle 4 sur la branche candidate ou revenir au SHA `100ea7e7f47289d9247f65cd8a44c909aa880d9a` ; puis relancer la CI. Ne jamais restaurer cette base en réécrivant les historiques des autres ateliers.
- Aucune fusion sur main, aucune publication, migration Supabase, modification RLS, activation de collecte, adoption fictive ni import de médias.
