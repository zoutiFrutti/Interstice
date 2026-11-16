# C03-JUR-04 — RISQUES DONNÉES : Issues C12, API et commentaires
**La Juriste · 03/11/2026 · P0 · dossier candidat pour La Relieuse**

## Flux démontré et exposition

1. Un compte propriétaire dépose sur un **dépôt public** une Issue préfixée `[RELIEUSE-LECTRICE]`. Le **titre, corps, compte auteur, dates et commentaires** sont destinés à être accessibles publiquement et potentiellement indexés ou dupliqués.
2. Sur `main`, `issues.opened` lance le workflow éligible ; le script lit `GITHUB_EVENT_PATH`, passe le **corps entier** à `prepare()`, puis, si clé et modèle présents, à `/v1/chat/completions`. Il ne réalise **aucune anonymisation** ni revue du contenu.
3. Le rapport du modèle est copié dans un commentaire GitHub public. L'opt-in `LECTRICE_AI_ENABLED` de PR #114 contrôle l'exécution IA uniquement ; il ne protège pas les Issues déjà créées ou leur contenu.
4. Logs Actions, notifications, historique d'Issue, miroirs et sauvegardes peuvent créer d'autres copies ; aucun inventaire ni rétention effectifs de ces copies n'a été audité.

Aucune fuite concrète ni contenu nominatif d'une Issue n'a été recherché pendant cette mission ; le risque est **structurel**, prouvé par le code et la visibilité du dépôt.

## Catégories de données et gravité

| Données possibles | Qualification | Traitement candidat / décision |
|---|---|---|
| Texte historique déjà public et dépourvu d'identifiants | Pas nécessairement donnée personnelle ; vérifier provenance, licence et données indirectes | **Seul type éventuellement admissible** après autorisation technique/budgétaire |
| Identifiants de personnes, pseudonymes liés à une personne, contacts, adresses, photos, métadonnées | Données personnelles art.4 RGPD | Ne pas insérer dans Issue ou transmettre à API sans analyse juridique et mesures adaptées |
| Manifestations, engagements militants, affiliation politique ou syndicale, santé, violences, statut de mineur | Peut révéler des catégories particulières art.9, selon contenu et contexte | **Interdiction de traiter via C12 public** ; base art.6 + exception art.9 si hypothèse future, AIPD si risque élevé |
| Mise en cause d'une infraction, GAV, plainte, condamnation | Données à caractère pénal, règles spécifiques art.10 RGPD ; prudence envers personnes mises en cause | Ne jamais importer des cas nominatifs dans la messagerie publique |
| Documents non publics, pièces de procédure, coordonnées de refuges, personnes vulnérables | Risque de sécurité physique/confidentialité et de secret professionnel éventuel | **Bloquer**, retrait assisté si publication accidentelle |
| Corps de la demande, sortie du modèle et journaux | Même analyse juridique que contenu source si réidentifiable | Minimiser, ne jamais présumer que « sortie IA » = anonymisée |

## Consentement, licéité et responsabilité

- Nommer le **responsable réel du traitement** et définir les opérations distinctes : dépôt public GitHub, transfert API, retour public, journalisation et conservation. Le simple fait que Zout crée l'Issue ou active une variable ne constitue **pas** le consentement de chaque tiers mentionné.
- Préciser la base de l'art.6 RGPD pour chaque finalité. **Le consentement n'est pas l'unique base possible**, mais s'il est retenu : libre, spécifique, éclairé, univoque, révocable et prouvable (art.7). Pour catégories art.9, identifier une exception légale valable ; le consentement explicite, quand applicable, ne remplace pas l'analyse de proportionnalité/publicité. Respecter également l'art.10.
- Avant toute transmission, documenter la qualification juridique effective du fournisseur (sous-traitant ou responsable suivant finalités), la contractualisation art.28 si nécessaire, ses sous-traitants, lieux, transferts hors EEE (chapitre V), sécurité (art.32), information (art.13/14) et éventuelle AIPD (art.35).
- Les **Issue publiques ne deviennent pas un canal conforme parce qu'un avertissement indique « n'envoyez pas de données »**. Mettre des barrières en amont et refuser les dossiers individuels ; ne pas créer un nouveau formulaire privé sans dispositif autorisé.

## Conservation et transferts

**Politique interne proposée, non obligations universelles :**
- **Entrées C12 autorisées :** seulement identifiant d'une ressource *publique* et instruction générique ; idéalement **ne pas copier le texte** dans une Issue et ne pas envoyer de tiers identifiables à l'API.
- **Journal local du moteur :** identifier seulement Issue ID, horodatage, SHA du logiciel, statut, coût estimé ou réel si disponible, validateur ; pas de prompt, réponse, e-mail ou token.
- **Commentaires :** éviter tout texte de sortie IA à caractère personnel ; préférer un statut public non nominatif + vérification humaine. Établir une durée de conservation des Issues/rapports avec purge effectivement faisable, traitement des demandes RGPD et indication des limites (forks, caches, notifications, sauvegardes).
- **GitHub Actions :** auditer la rétention d'artefacts et de logs configurée, secrets redigés et fichiers temporaires. Ne pas affirmer qu'une suppression d'Issue efface toutes les copies.
- **API OpenAI actuelle :** la documentation officielle indique que les données API ne sont pas utilisées pour entraîner les modèles par défaut, **mais** que les logs de surveillance des abus peuvent contenir prompts/réponses et être conservés jusqu'à **30 jours par défaut**, avec exceptions. Une configuration Zero Data Retention ou Modified Abuse Monitoring exige une approbation spécifique ; **aucune configuration de ce type n'est constatée ici**. Voir https://developers.openai.com/api/docs/guides/your-data . La non-utilisation pour l'entraînement **ne signifie pas absence de stockage**.
- Pas de consentement générique à un « stockage zéro » ni de promesse de purge en temps réel.

## Contrôle à effectuer avant décision

- [ ] Responsable réel, catégories et finalités identifiés ; analyse nécessité/proportionnalité.
- [ ] Registre art.30 selon applicabilité, notice et exercice des droits, procédure de suppression incident.
- [ ] Exclusivité des **textes publics non personnels** ; jeu de tests artificiels sans référence à des personnes.
- [ ] Contrat fournisseur, localisation, transfert et politique réelle de conservation validés, droits et audits traçables.
- [ ] Gestion des Issues ouvertes et anciennes examinée sans recopier les données dans d'autres espaces.
- [ ] Revue indépendante du rendu modèle : **un commentaire automatique public n'est pas une validation juridique**.
- [ ] Secrets, permissions, journaux, coûts, antidupli testés par Développeuse/Orchestratrice.

## Verdict et sources

**P0 : ne pas traiter de situations personnelles via C12/C13, même après opt-in technique.** Risque distinct de PAR-005, qui reste non publiable en pratique. Aucun appel API, aucune Issue de test ni analyse de données réelles exécutés pendant cette mission.

Sources : RGPD https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra ; CNIL https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative ; OpenAI API https://developers.openai.com/api/docs/guides/your-data ; GitHub sécurité https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility .
