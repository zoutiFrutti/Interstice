# C03-JUR-04 — AVIS SÉCURITÉ C12
**Juriste → Relieuse · 03/11/2026 · P0 · candidat non publiable · sans activation IA**

## Contrôle GitHub effectué

- Base `main` : HEAD `7344591fa7f0f4f6951ea273525039cf2cb9982a`. Workflow `.github/workflows/pont-relieuse-lectrice-c12.yml`, blob `a18e263972743a374e49fb07d9521efa9ace91b2` ; script `coordination/agents/pont_relieuse_c12.py`, blob `ad8e4622f5d324af7cfa5879ca4bd65f411507be` ; moteur `lectrice_agent_c12.py`, blob `4fc240e60c3683377adc0b21cd6ff084ac1d458f`.
- `main` : déclencheur `issues: [opened]` ; job uniquement si titre commence par `[RELIEUSE-LECTRICE]` et `github.event.issue.user.login == github.repository_owner` ; permissions `contents: read, issues: write` ; tests puis script avec `secrets.OPENAI_API_KEY` et `vars.OPENAI_MODEL`; commentaire public par `gh issue comment` si sortie créée.
- Le script prend le corps **intégral** de l'Issue (20–12 000 caractères), `execute()` transmet le texte à `https://api.openai.com/v1/chat/completions` (800 tokens max de sortie, délai réseau 45 s) ; le résultat est reproduit publiquement dans l'Issue, tronqué à 18 000 caractères, sans relecture humaine préalable. Ces limites ne sont ni filtre RGPD ni plafond financier.
- **Constat P0** : pas de verrou d'activation indépendant sur `main`. Si Issue conforme et clé+modèle présents, un appel externe *peut* être tenté. Présence des secrets et exécution réelle non vérifiées ; ne pas dire qu'un appel a eu lieu. Les seuls rôles du propriétaire et le préfixe sont des contrôles de déclenchement, **pas** une preuve de consentement des personnes décrites.
- PR #114 HEAD `f7811d3875d2fd39b7b37226d40ae9fb22c66a56`, brouillon non fusionné, apporte `LECTRICE_AI_ENABLED == 'true'` (désactivé par défaut), `concurrency` par numéro d'Issue, timeout 5 min, retour marqué et statuts `BLOQUEE_AUTORISATION`, `BLOQUEE_CONFIGURATION`, `REFUSEE_ENTREE`, `ECHEC_TECHNIQUE`, `ANALYSE_CANDIDATE`; antidupli `<!-- C13-LECTRICE-RESULTAT -->` dans commentaires du bot ; journal d'exception limité au nom de classe. Tests CI C13 documentés, **aucun appel réel certifié**.
- PR #132 HEAD `57a509257314d44cb15faf842395a21023e43335`, index `coordination/c03/INDEX_TRANSMISSIONS.md` blob `ac8dc7ee0a00417e6e5bed39c7eafff49a83fb50`, audit `01_AUDIT_MESSAGERIE.md` blob `bd15d89b353bd82764c032639f1243313c09b8ef`, contrat `02_CONTRAT_RAPPORTS.md` blob `b3f68b210055e32de0d8741b2b43ded0be3a92a8`. Cette PR de suivi documentaire **ne modifie pas C12** et ne neutralise pas le risque de `main`.

## Matrice sécurité / qualification

| Niveau | Risque / conclusion | Condition vérifiable |
|---|---|---|
| **P0** | Appel IA sans autorisation autonome sur main | Refus par défaut côté workflow **et** script ; tests sans secrets et avec entrées malformées ; contrôle approbation des PR dépendantes avant fusion |
| **P0** | Issue publique pouvant contenir données de tiers, militants, mineurs, arrestations, santé | Aucune donnée personnelle/sensible ni dossier dans Issues ; entrée uniquement documentaire déjà destinée au public, revue humaine préalable ; aucun filtrage par regex considéré comme anonymisation sûre |
| **P0** | Envoi d'Issue à fournisseur API externe et reproduction de réponse dans commentaire public | Flux désactivé, finalités/base art.6, art.9 ou 10 si applicable, transparence art.13, rôle fournisseur, contractualisation art.28 si sous-traitance, transferts chapitre V, droits, durée et périmètre vérifiés |
| **P1** | `issues:write` accessible au job, commentaire automatisé non vérifié | Réduire permissions au strict besoin et isoler action de commentaire ; sortie uniquement statutaire/rédigée pour public, pas d'extrait nominatif ; vérification humaine avant texte généré |
| **P1** | Déduplication par marqueur uniquement, risques rerun/race/test et stockage durable dans commentaires | Tester cas initial, échec, annulation, rerun et suppression ; prévoir retrait manuel ; ne jamais prétendre retrait complet des forks, caches ou anciennes notifications |
| **P1** | Logs GitHub Actions publics, artefacts, erreurs, clés et dépendances | Aucun dump d'évènement, prompt, réponse, exception détaillée ni fichier joint ; secrets masqués **ne remplacent pas** audit de logs ; pas de secret dans paramètres d'Issue, scripts ou artefacts ; examiner `checkout@v4` et permissions des Actions |
| **P1** | Coûts et double appel API | Quota/budget hors workflow, compteurs réels, seuil et arrêt opérateur, prévention des répétitions avant l'appel ; 800 tokens de sortie ne limite pas le coût des entrées ou tentatives |
| **P2** | Auditabilité et gouvernance | Journal de statut minimal non personnel (Issue ID, code, SHA, date, exécuté/non exécuté, validation humaine), politique d'expiration/effacement ; ticket ≠ conversation réveillée ≠ accord |

## Verdict
**AVIS DÉFAVORABLE À L'ACTIVATION DE C12 / C13 EN L'ÉTAT.** Le verrou de #114 est nécessaire mais **non suffisant** : l'outil n'interdit pas en soi la création d'Issues contenant des données de tiers, ni leur diffusion publique, ni la reproduction potentielle des données dans une sortie d'IA. Même après fusion future, n'autoriser que des résumés documentaires strictement publics sous consentement organisationnel d'exécution distinct de la base RGPD des personnes concernées.

**Non vérifiés :** présence des secrets, paramètres effectifs du compte GitHub, tests d'Issues réelles, appel IA, logs réels, contrat OpenAI du projet, localisation/rétention effectivement configurées, dépense. Aucune modification de workflow ni de main ; aucun lancement d'Issue.

Sources : https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication ; https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository ; https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra ; https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative ; https://developers.openai.com/api/docs/guides/your-data .
