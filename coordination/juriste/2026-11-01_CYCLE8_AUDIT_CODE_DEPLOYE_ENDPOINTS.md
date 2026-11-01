# La Juriste — Cycle 8, passe complémentaire : audit ciblé du code déployé
**Date : 1er novembre 2026.** Extension de PR #67, lecture seule de Supabase Interstice. Ne pas confondre analyse statique et test dynamique ou audit de sécurité exhaustif.

## Observations vérifiées dans les trois Edge Functions actives
| Fonction | Version / empreinte source | Contrôle observé | Risque et décision |
|---|---|---|---|
| `submit-proposal` | v2 / SHA256 `5e9b2a9131209e3050e793355fa358e91b4166e48d9bfed2e6e51dd42f06f623` | Vérifie méthode POST et **en-tête Origin**, validateurs de contenu et quota par empreinte IP, puis écrit avec clé `SUPABASE_SERVICE_ROLE_KEY` | `Origin` et CORS ne prouvent pas l'identité ou l'autorisation du client hors navigateur. **P0 collecte non suspendue**. Ne pas considérer les protections de validation et de quota comme authentification. |
| `submit-resource` | v1 / SHA256 `4b6e9a3249835a0bf15b22c024fa41337b4ae55790a264e88a7cd4b61de1fd75` | Même contrôle d'`Origin`, validateur JSON et URL, quota, déduplication, puis insertion avec clé serveur | **P0 collecte non suspendue**. Vérifier aussi les catégories et attributs enregistrés contre le texte d'information RGPD. |
| `github-wiki-ingest` | v5 / SHA256 `64e9c48219a02e2917d1006f34c9fe37686c7333cefadc400e43a76c678a243a` | Vérifie un jeton OIDC GitHub Actions par JWKS, émetteur, audience, dépôt, ref `main`, `workflow_ref` et nom d'événement, puis contenu correspondant au blob SHA GitHub | **Ne pas attribuer de vulnérabilité pour le seul `verify_jwt=false`** : contrôle d'identité applicatif réellement implémenté. Tester négativement les jetons invalides et analyser les privilèges du RPC de staging, mais préserver cette fonction des mesures aveugles visant les formulaires publics. |

**Correction de qualification par rapport aux avis antérieurs** : le risque de collectes sur les deux premiers endpoints passe de « activité constatée, autorisation inconnue » à **« code source contrôlé, aucune authentification d'utilisateur constatée hormis filtrage d'Origin et mécanismes anti-abus »**. Le troisième endpoint relève d'un processus CI avec authentification applicative explicite, non d'un formulaire public.

## Protocole réversible à confier à La Développeuse, sous autorisation de Zout
1. Confirmer précisément les traitements à suspendre : `submit-proposal`, `submit-resource`, RPC `submit_wiki_article`, et ne pas toucher automatiquement à `github-wiki-ingest`.
2. Préparer une neutralisation **côté serveur** des soumissions publiques, avec réponses de refus explicites et sans écriture en base ; conserver le code actuellement déployé et la procédure de restauration. Ne pas déployer sans autorisation.
3. Sur environnement de test, vérifier absence d'écriture pour clients sans origine, avec origine simulée, visiteurs, comptes authentifiés non autorisés et accès RPC direct. Aucun appel de test à la production n'a été exécuté durant cette passe.
4. Examiner fonctions SECURITY DEFINER, grants, policies RLS, chaînes `service_role` et surfaces de stockage ; documenter les exceptions justifiées par l'import GitHub.
5. Une fois les traitements et durées confirmés, mettre à jour l'information aux personnes, un canal privé réellement administré et la procédure de rectification/suppression. Compteurs `0/0/0` sur trois tables ne valent pas inventaire d'Auth/logs.

## Sources
- Code source récupéré depuis Supabase via `get_edge_function` (versions et SHA256 ci-dessus).
- Documentation de sécurisation des API Supabase : https://supabase.com/docs/guides/api/securing-your-api
- RGPD art.5,6,13,15,16,17,28,32 : https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra
- CNIL, durées de conservation (02/04/2026) : https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees
- LCEN art.1-1 en vigueur depuis 23/05/2024 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049568614

**Limites** : aucune mutation Supabase, aucune exploitation de faille, aucun POST, aucun visa technique ou juridique définitif.
