# La Juriste — Cycle 10 · Matrice juridique P0 versionnée
**Candidat, 1er novembre 2026. Aucun mandat collectif, visa, déploiement ou publication.**

## Versions et concordance
PR #58 : Manifeste V2.6 blob `8aa342bc7b45dc6736499eb363c6c895c3bc3621`, Charte éditoriale V0.1 blob `57b9a8bd9db6280d6a2c753082310c25b0ea32ec`. PR #62 : communs V0.9 blob `aa3e38a21e76890072ef1f6a57863c55ce7d2a2b`. Article 48.1–48.7 : initiative individuelle, IA sans mandat ni pouvoir décisionnaire, accueil humain consenti, constitution future facultative, contestation sans commission fictive, non-transfert automatique de propriété/données/contrats, absence de privilège fondateur permanent. La désignation impersonnelle des chartes ne remplace pas l'identification légale réelle de l'éditeur.

**Droit applicable :** loi du 1er juillet 1901 selon formes constituées ; RGPD applicable aux traitements de données personnelles ; LCEN art. 1-1 suivant situation de l'éditeur ; CPI pour les reproductions ; droit au respect de la vie privée et protection des personnes. **Interprétation :** adoption individuelle de textes d'orientation possible sans constituer une association ; adoption effective et publication restent à prouver sur fichiers SHA exacts. **Propositions politiques :** démocratie fédérative, recours internes futurs, responsabilité partagée, réversibilité et non-domination ; ces projets ne lient pas des tiers sans acte valable.

## Matrice
| Sujet | Statut | Fait prouvé | Critère de levée |
|---|---|---|---|
| `submit-proposal` et `submit-resource` | **BLOQUÉ** côté arrêt public des collectes | Code des Edge Functions actif déjà audité C8 : filtrage Origin et limitations, pas une authentification forte ; la désactivation du front sur branche n'arrête pas l'API | Décision humaine sur périmètre, mécanisme de refus côté serveur, tests négatifs / absence d'écriture en environnement sûr et plan retour arrière |
| `submit_wiki_article` | **BLOQUÉ** côté arrêt des dépôts | SECURITY DEFINER, authenticated EXECUTE ; code vérifie auth.uid et quotas mais ne comporte pas un arrêt général | Correction serveur réversible et tests sur compte habilité/ordinaire, SHA et rapport Développeuse |
| Modération SQL | **À POURSUIVRE** | Trois fonctions appellent `is_moderator()` qui vérifie `auth.uid()`; avis C8 rectifié : EXECUTE n'est pas modération libre | Tests isolés des gardes, politiques RLS et droits réels |
| RGPD et conservation | **BLOQUÉ** | Responsable effectif, finalités, bases, information, durées et canal d'exercice des droits non établis en totalité | Identifier traitement par traitement responsable, sous-traitants, délais/critères, destinataires/transferts, accès/rectification/effacement, sécurité, cookies/tiers, vérifier canal humain opérationnel |
| LCEN | **DÉCISION HUMAINE** | Régime éditeur/hébergement non documenté comme définitif | Statut exact, qualité de l'éditeur, directeur de publication selon régime, hébergeurs et contact réels ; éviter publication non nécessaire de données privées |
| Droits d'auteur et images | **À POURSUIVRE** | Droits non déductibles d'un accès en ligne ; aucun accord de partenariat présumé | Pour chaque archive ou média : provenance, titulaire, protection, licence/autorisation ou exception, droits image/voix et données personnelles, crédit, périmètre d'usage |
| Cinq pages sensibles | **À POURSUIVRE** | Une note juridique candidate par page sur PR #71, SHA contrôlés ; 5 fiches de verdict déposées C10 | Vérifier assertions et procédures du corps, sources temporelles, droits et faits sensibles, puis décision humaine ; notes seules n'effacent pas les blocages |
| Adoption des textes | **DÉCISION HUMAINE** | Versions précises vérifiées mais aucune adoption complète démontrée | Décision explicite de Zout sur chacune des versions et date, séparée de publication |

## Cinq verdicts sur versions exactes
- Enfance `ef774f3cbcc61f94f8553edc61704f52774e5225` : **BLOCAGE MAINTENU**.
- Migrations `f00ca6281a378614fad67c6e28c6a7613e6cca06` : **CORRECTION NÉCESSAIRE**.
- Logement `99193708552dcdefdf5c28af00c3a93b5872fb8b` : **CORRECTION NÉCESSAIRE**.
- Police/décès `2917f9ec9440ce506338b2655c229b3d880b896e` : **BLOCAGE MAINTENU**.
- Santé `e846859c672eb03e019d7c1469018b9c5b304ff5` : **BLOCAGE MAINTENU**.

Les verdicts sont motivés dans les cinq fiches `coordination/juriste/cycle10/CONTROLE_*.md`. Aucune ne vaut avis positif de publication ni interdiction de principe du débat politique. Contrôle exact réalisé : note ajoutée une fois dans `<main>`, fichiers conservés et SHA relus. **Non réalisés** : QA navigateur, tests de procédures sur source officielle ligne à ligne, test serveur d'écriture, contrôle exhaustif des licences d'illustrations.

## Références et limites
[RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra) ; [LCEN art.1-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049568614) ; [Loi 1901](https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069570) ; [CPI](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069414) ; [CNIL](https://www.cnil.fr/) ; [Supabase sécurisation Data API](https://supabase.com/docs/guides/api/securing-your-api).

Cette matrice reste une analyse documentaire et non une consultation juridique individualisée.