# C11-JUR — Décisions humaines et conditions juridiques du pilote Faire Ensemble

**Statut : candidat documentaire, NON publié, NON déployé.**  
**Date : 2026-11-07.**  
**Périmètre : PR #186, contrôles C10/C11, décision directe de Zout du 7 novembre 2026.**

Ce document consigne les décisions déjà rendues. Il ne constitue ni un avis de conformité définitif, ni un mandat pour activer le pilote, modifier la base, publier, supprimer des données, fusionner une branche ou dépenser.

## 1. Décisions reçues, à ne pas reposer

| Sujet | Décision effective | Effet autorisé | Ce qui reste interdit ou à prouver |
|---|---|---|---|
| Responsable du traitement | Examiner le statut actuel de porteur individuel | Documenter l'hypothèse d'une personne physique responsable | Ne pas affirmer qu'une identité juridique ni un statut professionnel ont été définitivement établis |
| Modération | Zout seul provisoirement, avec possibilité de délégation | Définir un circuit de modération individuelle, habilitation minimale et révocation | Aucun compte modérateur additionnel sans validation et aucune publication automatique |
| Propositions traitées | Politique différenciée selon statut et finalité, sans nouvelle durée imposée | Préparer la matrice de conservation ci-dessous | Ne pas fixer arbitrairement de durée ou copier la règle de 30 jours à tous les statuts |
| Lancement | Préparation uniquement, dossier complet à soumettre avant ouverture | Continuer les contrôles documentaires et les tests isolés avec données fictives | Aucun lancement, changement Supabase réel, fusion, dépense ou activation IA |
| Propositions **non traitées du futur pilote** | **30 jours maximum depuis réception serveur** | Préparer une purge propre à une cohorte nouvelle | Ne jamais supprimer rétrospectivement les archives ou d'autres cohortes |

## 2. Hypothèse de portage individuel à qualifier

La qualification de responsable de traitement dépend de qui détermine effectivement les finalités et les moyens. Une personne physique peut être responsable ; ni le nom du projet ni l'utilisation de GitHub/Supabase ne suffisent à trancher. Référence : CNIL, « Responsable de traitement, sous-traitants : comment bien identifier son rôle ? », 06-06-2025 (https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role).

**À établir avant la notice définitive** : identité/qualité du porteur, capacité à répondre aux demandes de droits, coordonnées de contact adaptées sans divulgation non nécessaire du domicile, base juridique par finalité, qualification des hébergeurs et transferts, canal de signalement, assurance éventuelle et responsabilité des publications. Ces mentions restent des champs à compléter, pas des affirmations.

L'absence d'association ne dispense pas des obligations applicables au responsable de traitement.

## 3. Circuit de modération provisoire

1. Aucun dépôt réel avant avis de lancement distinct. Formulaires serveur actuels suspendus.
2. Nouveau dépôt du pilote uniquement sous **cohorte créée à la réception serveur** ; statut initial `pending`, date serveur non modifiable, séparation stricte des archives antérieures.
3. Seul le compte expressément habilité de Zout peut consulter le texte non publié et décider. Contrôle d'accès côté serveur, tests avec compte non habilité, aucun secret dans le navigateur.
4. Chaque décision de publication/refus doit être motivée et tracée sans réexposer de contenu sensible dans les journaux.
5. Le signalement, la correction, le retrait et l'exercice des droits doivent disposer d'un contact fonctionnel. Aucune garantie de délai de réponse n'est annoncée avant organisation réelle.
6. Une délégation future requiert une décision spécifique : identité du délégué, périmètre, formation/confidentialité, durée, habilitation/retrait et journal des accès ; **aucun accès collectif par défaut**.
7. En cas d'absence ou de surcharge du responsable, **suspendre les nouvelles entrées** plutôt que laisser s'accumuler des propositions au-delà de leur échéance.

## 4. Matrice candidate de conservation : ne pas fixer de nouvelles durées sans décision motivée

| Classe / statut | Finalité active | Politique candidate | Preuve manquante |
|---|---|---|---|
| **Nouvelle proposition de la cohorte pilote, toujours non traitée** | Examiner la demande | **Suppression au plus tard 30 jours** après réception serveur ; inclure indisponibilité et échec de modération | Cadence/supervision, suppression effective, délais des copies et sauvegardes |
| Proposition en cours de traitement humain | Instruire et répondre | Définir ce qui compte comme traitement réel, sans prolonger artificiellement le délai des simples `pending` | Statuts, événements et justification |
| Proposition approuvée et publiée | Publication attribuée, correction/retrait | Conservation distincte liée à la finalité éditoriale, avec voies de rectification et d'effacement selon droit applicable | Base, licence, droits, durée et sort des archives |
| Proposition rejetée ou retirée | Motiver, prévenir les abus, permettre contestation | Minimisation, contenu brut versus trace de décision séparés ; durée à justifier | Besoin effectif, durée, accès, recours |
| Journal de modération | Traçabilité des décisions | Ne pas conserver indéfiniment textes et identifiants ; bilan technique agrégé possible | Réconciliation avec `ON DELETE CASCADE`, durée |
| Empreinte dérivée d'IP / `submission_limits` | Prévention anti-abus | Secret de pseudonymisation dédié, durée propre et purge indépendante ; jamais considérée anonyme par défaut | Chaîne proxy, rotation secret, durée de rétention |
| Journaux Edge, reverse proxy, GitHub, sauvegardes | Sécurité/diagnostic, restauration | Inventaire des copies, accès, délais d'expiration et effacement applicable | Conditions fournisseurs et capacités réelles |
| Archives historiques antérieures au pilote | Documentation / autres traitements distincts | **Hors périmètre de purge du pilote**, pas de suppression rétroactive autorisée | Politique autonome à instruire, droits des personnes préservés |

Référence de méthode : CNIL, « Les durées de conservation des données », 02-04-2026 (https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees). Les obligations d'effacement ou de réponse aux droits peuvent s'appliquer aux archives préexistantes : « pas de suppression rétroactive par cette migration » ne signifie pas exemption générale du RGPD.

## 5. Sécurité technique : preuves et interdictions

- **C12 sur main** : `.github/workflows/pont-relieuse-lectrice-c12.yml`, arrêt inconditionnel `if: ${{ false }}` observé à `df73c5d`. Ne pas le supprimer lors d'une convergence.
- **C13 dans #186** : double protection `false && …` au job, consentement de configuration `LECTRICE_AI_ENABLED == "true"` dans Python, retour anti-doublon. Toujours candidat ; ne pas activer.
- **Issues GitHub publiques** : le verrou IA ne protège pas la confidentialité d'une Issue. Exclure textes personnels, santé, opinion, données pénales et tiers identifiables ; consentement de Zout n'est pas celui des tiers.
- **Fonctions Edge réelles** `submit-proposal` v3 et `submit-resource` v2 : handlers de suspension HTTP 503, sans lecture du corps en POST ; commentaires « non déployé » dans leurs sources obsolètes.
- **SQL candidat** : `purge-candidate.sql`, cohorte `c08-fe-proposals-v1`, test à blanc par défaut, limite de lot, exclusion des événements humains ; non appliqué au serveur.
- **Supabase réel** au contrôle du 07-11 : pas de colonne `pilot_cohort`, pas de fonction `purge_pending`, pas de `pg_cron` ; zéro ligne dans `proposals`, `resource_submissions`, `submission_limits`, `moderation_events`. Un zéro n'atteste pas l'état des sauvegardes.
- Le SQL candidat utilise `interval '720 hours'` : interprétation en heures absolues cohérente avec un plafond de 30×24 h. Ne pas promettre une équivalence universelle avec 30 jours civils locaux aux changements d'heure.
- L'empreinte candidate de la fonction TypeScript utilise `SHA-256(service_role_key + ':' + IP)` : **séparer ce secret de la clé privilégiée** avant lancement ; vérifier les en-têtes IP émis par l'infrastructure et leur durée.
- Les procédures `SECURITY DEFINER` accessibles aux authentifiés ont un contrôle interne de modération ; exiger un essai de non-contournement réel avant lancement. Ne pas confondre avertissement d'advisor avec exploitation démontrée.
- **PAR-005** : blocage juridique et médical maintenu ; titre/statut uniquement. Ressources historiques sensibles et médias non visés exclus.

## 6. Dossier de preuve pour une future demande de lancement (non sollicitée aujourd'hui)

1. HEAD exact #186 et CI pertinente ; test de préservation `main` et C12 fermés.
2. SQL et fonction candidate relus, simulation + essais concurrents PostgreSQL isolé ; sauvegarde de retour arrière.
3. Plan de cadence garantissant le plafond de 30 jours, surveillance, alerte, gestion des pannes, arrêt de collecte en cas d'incident.
4. Tests de rôles réellement autorisés, sans déposer de données réelles de contributeur.
5. Notice RGPD complète : identité, contact, finalités, bases juridiques, destinataires, durées par statut, droits et réclamation.
6. Inventaire des logs, sauvegardes, empreintes d'IP, sous-traitants, transferts et procédure de demande d'effacement.
7. Consignes de modération individuelle, prévention des conflits d'intérêts, recours, disponibilité et éventuelle délégation ultérieure.
8. **Autorisation humaine explicite distincte** de toute ouverture et de toute dépense, migration ou activation.

**Transmission :** la Juriste a préparé un cadre candidat. Les décisions 1–4 sont enregistrées sans demander de nouvel arbitrage. Aucun visa de conformité ou de lancement, aucune activation, suppression ou publication.

