# La Juriste — Cycle 3 : vérification serveur, mentions et reliquat P0
**31 octobre 2026 · contrôle ciblé réel, non autorisation de publication · à La Relieuse et à La Développeuse.**

## Passe 1 — résultats effectivement obtenus sur le projet Supabase « Interstice »

**Méthodes réelles** : lecture connectée de la liste des projets, des tables, des politiques RLS dans `pg_policies`, de `pg_class`, des privilèges `pg_proc`, de la définition SQL de `submit_wiki_article`, de la vue `public_proposals`, du code déployé de la fonction `submit-proposal` et des avis de sécurité Supabase. **Aucun POST réel, aucune écriture d'essai avec des données de personnes, aucun changement de schéma, de fonction ou de base de production.** Lecture du front sur PR #56. Résultat valable pour les versions lues, pas test d'intrusion.

| Test | Preuve / résultat | Statut |
|---|---|---|
| Suspension des formulaires par PR #56 | `index.html`, `script.js` et `proposer-article.html` neutralisent la soumission **uniquement dans la branche**, pas via API. | **FERMÉ pour la correction du front candidat ; OUVERT côté serveur** |
| `submit-proposal` Edge Function | **ACTIVE, v2, `verify_jwt=false`**, accepte POST avec en-tête Origin correspondant et JSON validé, utilise une clé service côté serveur ; contrôle contenu, empreinte IP anti-abus et quotas. Aucun drapeau « suspendu » côté serveur dans le code lu. En-tête `Origin` et CORS ne constituent **pas une authentification** ; une requête directe peut tenter de reproduire cet en-tête. | **P0 OUVERT** : chemin d'écriture toujours actif |
| Soumission `submit_wiki_article` | Fonction `SECURITY DEFINER`, exécutable par rôle `authenticated` ; vérifie `auth.uid()`, taille, consentements cochés et limite 3 / 24 h, puis insère. **Pas de commutateur de désactivation**. | **P0 OUVERT** : compte authentifié peut tenter une soumission RPC hors interface |
| RLS et accès | RLS activée sur `public.proposals` et `public.wiki_article_submissions`. Proposals : `SELECT status='published'` pour anon/auth, lecture/modification modérateur, pas de politique d'insert client visible. Wiki : politique lecture propriétaire ou modérateur ; insertion via RPC privilégiée. | **FERMÉ (existence des politiques vérifiée), OUVERT (test d'isolation et privilèges par rôle non exécuté)** |
| Vue publique | `public.public_proposals` a `security_invoker=true` et filtre `status='published'`. | **FERMÉ** pour cette vérification statique ; publication de données à contrôler avant chaque modération |
| Volumes de contenu actuels | `COUNT(*)` (agrégat uniquement, sans lire de texte ni identité) = **0** dans `public.proposals`, **0** dans `public.wiki_article_submissions`, **0** dans `public.resource_submissions` au contrôle. | **FERMÉ** pour ces trois compteurs à cet instant ; **aucune preuve de zéro donnée** dans Auth, logs, caches, sauvegardes ou autres tables |
| Advisor sécurité | 4 objets RLS sans politique (dont `moderator_accounts`, `submission_limits` et deux tables privées), niveau INFO ; 5 fonctions `SECURITY DEFINER` accessibles à `authenticated`, niveau WARN, dont `submit_wiki_article` et `review_wiki_article`. | **OUVERT pour revue d'autorisation des cinq fonctions**, avertissement non équivalent à vulnérabilité démontrée |

**Correctif serveur candidat, NON APPLIQUÉ** : désactivation explicite de l'Edge Function par code ou retrait de son exposition, et révocation vérifiée du privilège d'exécution de `submit_wiki_article` pour `authenticated` et `PUBLIC` (avec examen des rôles hérités) si l'intention humaine est de suspendre entièrement la collecte. **Attention :** modifier la production nécessite un mandat de mise en œuvre distinct ; une simple PR statique ne peut pas garantir l'arrêt des requêtes externes. Confirmer réversibilité, privilèges, dépendances et absence d'effet sur la modération ; tests sans données sensibles avant réouverture.

**Procédure de retrait / données** : aucun dossier utilisateur inspecté ; les trois tables examinées sont vides à cet instant, donc aucun effacement dans ces trois tables n'a été nécessaire. Rechercher séparément Auth OTP, logs IP/fingerprints anti-abus, traces de modération, stockage et sauvegardes, identifier le responsable et les délais. Ne pas effacer en bloc des preuves ou données légitimes sans base et décision. Les demandes RGPD ont des conditions/délais propres ; mettre en place un canal privé effectivement tenu, distinct des Issues publiques.

Sources : [Supabase, API sécurisée](https://supabase.com/docs/guides/api/securing-your-api), [Supabase, RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [advisor SECURITY DEFINER](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable), [RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra).

## Passe 2 — mentions légales finalisées au niveau des champs requis, PAS de fausse identité

La page de mentions légales finale est **bloquée par les faits manquants**, non par l'absence d'un modèle juridique. Selon **LCEN art. 1-1** dans sa version en vigueur en 2026, distinguer :
- Éditeur : statut réel (personne physique **ou** personne morale constituée) et données légalement exigées ; propriété ou bénévolat du projet n'établit pas une association.
- Directeur ou codirecteur de publication : identification selon la loi du 29 juillet 1982 art. 93-2, distincte de la simple formule « responsabilité éditoriale de Zout ».
- Hébergeur **effectif** de la page/site (nom, adresse, téléphone). GitHub Pages est une hypothèse issue du domaine de prévisualisation et du dépôt, non une vérification contractuelle de la configuration de domaine/déploiement ; Supabase est un prestataire du backend et ne remplace pas automatiquement l'hébergeur du site.
- Éditeur non professionnel : examiner l'option de confidentialité de l'identité publique prévue à l'art. 1-1 II, sous conditions, en renseignant l'hébergeur. **Ne jamais mettre un domicile privé sur le dépôt comme simple formalité.**
- Contact réel : droit de réponse de la LCEN lorsque applicable, signalement d'erreur, exercice des droits RGPD. Les mécanismes, délais et autorités compétentes ne sont pas interchangeables. Aucun contact fictif et aucune collecte d'éléments sensibles sur GitHub.

**Décisions humaines uniquement** : identité du responsable réel et sa capacité, caractère pro/non pro, choix éclairé des coordonnées à communiquer à l'hébergeur, détermination du directeur de publication, validation des données d'hébergeur, choix d'une voie privée tenue et habilitations, finalités et base légale des traitements, durées documentées, décision explicite de maintenir suspendu ou de réactiver le dépôt, politique de retrait et personnes chargées de l'appliquer.

**Techniquement faisable après décision** : page légale exacte, lien depuis les pages, notice RGPD art.13 à côté des champs, mécanisme d'export et retrait selon droits et obligations, suspension serveur, test du rôle anon et de deux comptes de test isolés, contrôle logs et surveillance.

Sources primaires : [LCEN, loi n°2004-575 art.1-1, version 2026](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164/2026-09-14) ; [loi 1982 art.93-2](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000880222) ; [RGPD art.12–22](https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra).

## Passe 3 — reliquat, pas de nouvelle revue générale

| Objet déjà audité | Constat juridique restant | Qualification |
|---|---|---|
| Santé, enfance, migration, logement, justice, politique, écologie et parcours critiques | Réserve/avertissements déjà posés. **Les analyses et opinions contradictoires peuvent rester** si clairement attribuées ; traiter comme `interprétation` ou `revendication`, et non comme `droit en vigueur`. Aucun nouveau passage précis non licite établi dans cette passe. | **RÉSERVE PUBLIABLE** pour synthèses datées ; **P0 uniquement** si instruction individualisée erronée, fausse procédure/délai ou collecte sensible. |
| Dix articles historiques et six ECO-DROIT, antérieurement vérifiés | Aucun média nouveau identifié dans les textes Markdown du lot examiné à la passe précédente ; **aucune preuve de nouveau média effectivement intégré** fournie ici. Ne pas opposer une licence manquante d'illustration optionnelle au texte original. | **RÉSERVE PUBLIABLE** sous visas existants. |
| Coopérations extérieures | Cadre daté existant PR #56 : autorisation distincte pour chaque œuvre/photo/vidéo, droits des personnes et intégration tierce, rémunération et statut du travail réel, usage des noms/logos sur accord exprès. Aucune autorisation ou relation nouvelle produite par cette passe. | **OUVERT avant tout usage effectif**, pas P0 sur un lien documentaire seul. |

## Tableau final de vrais P0

| ID | Statut | Preuve de clôture attendue |
|---|---|---|
| **P0-SRV-01** suspendre effectivement les deux collectes côté serveur | **OUVERT** | Edge Function réellement neutralisée/test de POST refusé, `submit_wiki_article` RPC non exécutable par public/auth, sans couper d'autres fonctions |
| **P0-RGPD-02** notice, droits et données anciennes | **OUVERT** | Responsable/bases/durées/destinataires, test confidentialité des rôles, procédure privée et Auth/logs/backup examinés |
| **P0-LEGAL-03** mentions et rectification | **OUVERT** | Identités et coordonnées légales réelles, canal de rectification opérationnel, page conforme vérifiée |
| **P0-ED-04** éventuelles instructions urgentes et médias retenus | **CONDITIONNEL**, pas de blocage global | Contrôle de l'assertion précise et de la licence du fichier **effectivement sélectionné** |

**Avis juridique conditionnel :** défendable de conserver les fiches de synthèse sources/opinions/controverses sans les transformer en permanence juridique ou norme. **Non défendable de déclarer les formulaires arrêtés côté serveur et la conformité RGPD/LCEN acquise.** Aucun déploiement ou fusion autorisé.