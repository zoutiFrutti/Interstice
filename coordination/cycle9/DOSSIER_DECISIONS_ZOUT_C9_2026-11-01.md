# Cycle 9 — Dossier des décisions réservées à Zout
**Préparation, aucune décision prise.** Ne pas confondre visa éditorial, accord technique, adoption d'un texte et publication.

## Décisions à ne pas solliciter prématurément
1. **P0 serveur** : demander une autorisation spécifique de test sur environnement isolé seulement si une telle autorisation est requise ; présenter résultats et rollback avant une **autre** décision éventuelle sur production. Aucun consentement à déployer n'est implicite.
2. **Cinq Wiki sensibles** : ne pas demander de visa avant correction et relecture Juriste/Lectrice.
3. **Textes fondateurs** : présenter V2.6, Charte éditoriale V0.1 et Charte communs V0.9 transitoire avec blobs exacts et divergences ; ne pas présumer adoption collective, initiative encore individuelle.
4. **Première édition** : présenter par article son SHA, statut, objections, licences, médias et droits, puis solliciter un visa précis. Publication distincte, jamais automatique.
5. **Communication externe** : proposer le kit corrigé seulement après vérification des faits, crédits et autorisations ; aucun lancement annoncé.

## Décisions antérieures à préserver
Zout assume la responsabilité éditoriale individuelle des premières fiches et a exprimé des accords de lecture limités pour deux premiers textes. Ne pas lui faire revoter ces accords. Ils ne couvrent pas automatiquement les droits médias, le déploiement ou une publication globale.

## Alertes à présenter sans surinterprétation
- Les fonctions de soumission sont signalées actives côté serveur ; `verify_jwt=false` n'est pas à lui seul une démonstration d'exploitation. Audit des protections internes requis.
- L'ancienne divergence V0.8/V0.9 du kit communication est **corrigée sur la branche source** (blob `3241292b461172adea5ffd933caf918d34bf2d5f`) ; ne pas la reproposer comme décision en attente.
- Les deux visas historiques ARCH-002/007 sont limités, droits non résolus.
- PR #69 : erratum 5 novembre 2023 déclaré, preuve primaire à rapprocher ; PR #70 : chiffres d'affluence et mise en œuvre des règlements non démontrés.

**Prochain paquet de décisions à préparer, pas à forcer** : sécurité et rollback ; textes fondateurs par version ; fiches prêtes par SHA ; droits ; publication. Aucun acte extérieur autorisé par ce dossier.
