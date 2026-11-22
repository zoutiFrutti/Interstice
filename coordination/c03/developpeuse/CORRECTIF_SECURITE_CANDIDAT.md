# C03-DEV-04 — Correctif de sécurité minimal candidat

## Choix : ne pas dupliquer PR #114
Source existante : https://github.com/zoutiFrutti/Interstice/pull/114 (HEAD `f7811d3875d2fd39b7b37226d40ae9fb22c66a56`). Le correctif proposé est une **revue ciblée et une reprise contrôlée de #114**, pas un nouveau moteur IA.

## Invariant impératif
`LECTRICE_AI_ENABLED` absent, vide, `false` ou différent de `true` => **zéro appel API**. Clé et modèle ne valent jamais consentement. Ne pas ajouter de valeur `true` aux variables de dépôt pendant cette mission.

## Durcissement minimal recommandé avant fusion ultérieure
1. Conserver la garde dans `pont_relieuse_c12.py` de #114 ; idéalement ajouter aussi un contrôle préalable au niveau du job ou de l'étape d'exécution pour ne pas injecter de clé API lorsqu'il n'y a pas d'opt-in. Prévoir un retour `BLOQUEE_AUTORISATION` sans exposer de secrets.
2. Vérifier les permissions minimales `contents:read`, `issues:write`, le préfixe et l'identité de l'auteur, et les comportements en cas de corps invalide.
3. Conserver timeout, concurrence, marque anti-doublon et exceptions expurgées. Éviter la journalisation de l'Issue, du prompt, des clés et des réponses privées.
4. Mettre en place un plafond de coût et une politique de confidentialité approuvée **avant** toute activation ; un opt-in technique ne constitue pas une autorisation de traitement de données personnelles.
5. Rebaser ou reporter seulement les huit fichiers pertinents de #114 après comparaison avec main, sans effacer les changements C18/R6. Ne pas fusionner la présente PR documentaire comme si elle corrigeait C12.

## Tests à exécuter dans une branche dédiée de sécurité
Tests hors réseau : valeur absente/false/TRUE/true ; clé absente ; modèle absent ; Issue non propriétaire ; préfixe invalide ; corps trop long ; exception contenant un secret ; anti-doublon ; absence totale de fonction `execute` lorsque l'opt-in manque. Mock obligatoire de l'API. Rejouer les tests agents C11/C12/C13 et la CI de #114 sur HEAD exact. **Aucun test par création d'Issue publique.**

## Arbitrages
Relieuse : prioriser le verrou P0. Juriste : autoriser ou non le transfert externe et les retours publics. Orchestratrice : contrat des statuts et anti-doublon. Zout : seul décideur d'une activation future. En attendant : IA désactivée.
