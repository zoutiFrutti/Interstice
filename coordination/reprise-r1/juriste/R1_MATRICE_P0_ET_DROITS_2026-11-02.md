# R1 — Juriste · matrice P0, droits et critères de passage
**2 novembre 2026 · document candidat, contrôle en lecture seule.**

## Sources et traçabilité
Courrier R1-JUR blob `7351b9ee2c9ad3a0c15ec23f2089fbcefc9cdbfd` ; méthode `5b7ef2fbdaaa88791bed86f00659fd8a76f44dd8` ; axes `a9070cd99b775d169415e3c991074dced1c6ffab` ; protocole `4982d1d2501af5665729cc99400c5915e94a6eb0`. PR #75 HEAD `229dfc883fb1f3204f65c96db4ea5b38406366cc`, PR #81 HEAD `ff6715f3cbc1669bb874b5a4735d4be880fd60ab`, PR #118 HEAD `371b367bf96155856fab491206bf327e81e36632`. Historique C10 et accusés conservés ; R1 différent de C11–C15.
## P0 — vérifications nouvelles réalisées
- `submit-proposal` Edge ACTIVE v3 déploiement SHA256 `7b73efc02989548badcf078fb9c2c7777bc09f867e1d7a5c5d1cbde0350da71c` : **code réel lu** ; GET/non-POST -> 405, POST -> 503 « Contributions temporairement suspendues », OPTIONS -> 204. Aucun appel DB dans le code actuel.
- `submit-resource` ACTIVE v2 SHA256 `9dedfc1c8a792b288c314c97269b52dd70373f506ded46023a50ab4e2cb30adc` : même logique de suspension ; aucune instruction d'insertion dans le code actuel.
- `submit_wiki_article` : SQL `has_function_privilege` revérifié le 02/11 : `anon_execute=false`, `authenticated_execute=false`. **Correction des audits C8/C9** qui affirmaient la permission authentifiée à la date de leur observation ; ne pas présenter ces états passés comme actuels.
- `github-wiki-ingest` ACTIVE v5, authentification applicative OIDC observée précédemment ; pas d'essais de jetons invalides.
- Avis Supabase sécurité (02/11) : 4 `rls_enabled_no_policy` niveau INFO ; 4 `authenticated_security_definer_function_executable` niveau WARN. Une alerte n'établit pas une exploitation, mais exige revue des droits, corps SQL, rôles et tests.
- Incohérence mineure : les sources des handlers déployés comportent des commentaires « CANDIDAT NON DÉPLOYÉ » / « CANDIDAT SEUL », en contradiction avec leur statut ACTIVE. **Correction candidate documentaire** : rectifier au prochain commit de source, sans redéployer uniquement pour un commentaire.
- La Développeuse a consigné le même état dans `edition-premiere/CYCLE10_SECURITE_P0.md` blob `a8b0d8c0e847210f4fec3d670a5d34fb860d1829`; rollback déclaré simulé et tests multi-comptes non effectués : ne pas recycler ses déclarations comme test réexécuté.

## Matrice des risques
| Risque | Statut R1 | Preuve/critère de levée |
|---|---|---|
| Soumissions publiques trois voies | **TERMINÉ pour lecture de la suspension** ; **À POURSUIVRE pour certification** | Handler v3/v2 sans écriture et revoke RPC prouvés ; tests HTTP négatifs contrôlés et non-écriture, staging isolé, procédure rollback autorisée |
| RLS / privilégiés / auth | **À POURSUIVRE** | Quatre INFO, quatre WARN ; tests effectifs avec comptes de différents rôles et analyse des autres surfaces de données |
| Registre RGPD | **BLOQUÉ, données de contexte manquantes** | Responsable réel, finalités, bases, durées, destinataires, sous-traitants, cookies, journaux/backup, notices et contact accessible |
| Mentions LCEN | **DÉCISION ZOUT** | Personne qui édite, statut pro/non-pro, hébergeur réel et ses coordonnées applicables, directeur de publication et canal rectification ; ne jamais publier automatiquement identité/adresse |
| Recours humains | **À POURSUIVRE puis DÉCISION ZOUT** | Canal privé géré et testé, délais/règles de traitement, droit de réponse selon régime, séparation des plaintes sensibles et issues publiques |
| Droits archives, photos, logo, audiovisuel | **À POURSUIVRE** | Autorisation/licence de chaque élément reproduit, auteur, durée de protection, attribution, données/consentement image/voix, disponibilité. Lien vers ARTE/Tënk n'autorise pas hébergement ; Transiscope consulté ≠ licence d'import ni partenariat |
| Atlas et situations d'entraide | **À POURSUIVRE** | Inventaire RELIER/COMPLÉTER/CRÉER, provenance et date, aucune fiche présentée comme avis personnalisé, territorialité, date de révision, ressources d'urgence vérifiées |
| Manifeste V2.6 / éditoriale V0.1 / communs V0.9 art.48 | **DÉCISION ZOUT** | Manifeste `8aa342bc7b45dc6736499eb363c6c895c3bc3621`, éditoriale `57b9a8bd9db6280d6a2c753082310c25b0ea32ec`, communs `aa3e38a21e76890072ef1f6a57863c55ce7d2a2b` ; candidats, sans adoption automatique, IA sans mandat, transfert futur non automatique |

## Cinq pages PR #75, verdicts historiques vérifiés et critères
| Page (blob HTML PR #75) | Verdict | Levée conditionnelle |
|---|---|---|
| Enfance `ef774f3cbcc61f94f8553edc61704f52774e5225` | **BLOCAGE MAINTENU** | procédures et acteurs de signalement datés, protection des mineurs, relecture adaptée |
| Migrations `f00ca6281a378614fad67c6e28c6a7613e6cca06` | **CORRECTION NÉCESSAIRE** | identifier statuts, notification, délais, OFPRA/CNDA/CESEDA et recours dans versions applicables |
| Logement `99193708552dcdefdf5c28af00c3a93b5872fb8b` | **CORRECTION NÉCESSAIRE** | distinguer congé, commandement, jugement, exécution, DALO/DAHO et voies actuelles |
| Police/décès `2917f9ec9440ce506338b2655c229b3d880b896e` | **BLOCAGE MAINTENU** | attribuer chaque constat/enquête/décision, personnes et images, droit de correction |
| Santé `e846859c672eb03e019d7c1469018b9c5b304ff5` | **BLOCAGE MAINTENU** | règles des soins sans consentement et recours, données de santé, contrôle compétent |

Ces avis ne sont pas des visas de publication. **Absence de test R1 des pages en navigateur et absence de relecture mot à mot des contenus après PR #75**. La Lectrice a une reconciliation candidate du 02/11, blob `3519d1bfaa9d6fbbcb2c515c952d0c1483777dea`, à rapprocher par La Relieuse sans se substituer à son atelier.

## P1 — règles de réemploi pour les nouveaux axes
1. **Atlas/Transiscope** : un lien externe identifié et sourcé ne donne pas droit d'aspirer une base ni d'employer les marques comme partenaires ; vérifier les conditions et la provenance de chaque entrée. Aucune exploitation de données nominatives par défaut.
2. **ARTE, Tënk, autres films** : titre, auteur, éditeur/diffuseur, URL officielle, disponibilité datée, licence ou absence de licence ; notice documentaire originale, aucun rehosting audio/vidéo ni affiche copiée sans fondement juridique.
3. **Photos Vigie / logo** : auteur, lieu/date, personnes reconnaissables, contexte, finalité, preuve de licence ou autorisation. Pas d'emblème substitué à une permission.
4. **Fiches d'entraide** : information juridique générale datée, compétence territoriale, différence entre règle, pratique et revendication ; accès aux voies d'urgence ou structures compétentes vérifiées, sans promettre accompagnement humain non existant.
5. **Interstice par situations vécues** : accès sans compte, pas d'inférence de profil sensible ni collecte de récit ; liens réversibles et lisibles, pas de prétention à représenter une association.

## Sources de droit à contrôler au moment de diffusion
RGPD : https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra ; LCEN art.1-1 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049568614 ; CPI : https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069414 ; Code civil art.9 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419288 ; Supabase sécurité API : https://supabase.com/docs/guides/api/securing-your-api.
**Limites** : aucun test HTTP, aucune donnée nominative, aucune intervention serveur, aucun contact partenaire, aucune fusion ni publication.