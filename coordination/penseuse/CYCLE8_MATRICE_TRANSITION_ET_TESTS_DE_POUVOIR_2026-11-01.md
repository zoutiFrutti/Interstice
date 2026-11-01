# Cycle 8 — Matrice opérationnelle de transition et tests du pouvoir
**Atelier : La Penseuse. Statut : outil candidat, non adopté. Date : 2026-11-01.**
**Sources exactes :** Manifeste V2.6 blob `8aa342bc7b45dc6736499eb363c6c895c3bc3621` (PR #58) ; Charte éditoriale V0.1 blob `57b9a8bd9db6280d6a2c753082310c25b0ea32ec` (PR #58) ; Charte des communs V0.9 blob `aa3e38a21e76890072ef1f6a57863c55ce7d2a2b` (PR #62) ; avis Juriste cycle 7 blob `359d62cc0d44891a0d6383e5b068bf379cdbbd68` (PR #65). Aucun pouvoir collectif n'existe actuellement.

## 1. Registre de qualification préalable
Pour toute activité, remplir **avant** d'annoncer une règle ou une ouverture :
| Champ | Réponse exigée | Échec bloquant |
|---|---|---|
| Nature de l'acte | Orientation personnelle / engagement contractuel individuel / proposition collective / décision collective effectivement adoptée | Une proposition est présentée comme adoptée |
| Auteur et version | Responsable humain réel, fichier et SHA | Décision IA ou version non identifiée |
| Personnes affectées | Participants, non-participants, tiers, personnes absentes | Des tiers sont représentés sans mandat |
| Titres et ressources | Qui possède, administre, paie, héberge, détient des données | Une ressource privée est annoncée comme commune sans acte |
| Pouvoirs de fait | Qui cadre, valide, modère, détient les clés, peut arrêter le service | Veto technique invisible |
| Contestation actuelle | Canal effectivement testé ou « aucun canal spécifique actuellement vérifié » | Recours fictif promis |
| Sortie | Export possible, dettes, restitution, dépendances, délais | Retrait déclaré libre mais matériellement impossible |
| Vérification indépendante | Personne ou contrôle effectivement disponible ; sinon lacune explicite | Commission ou audit fictifs |
| Protection | Mesure urgente motivée, limitée, réexaminable, confidentialité | Mesure conservatoire convertie en sanction définitive |
| Preuve d'adoption | Date, version, personnes habilitées, portée, actes | Silence traité comme consentement |

**Règle d'usage :** « échec bloquant » signifie blocage de **l'affirmation ou de l'ouverture envisagée**, pas condamnation générale du projet. Les champs sensibles restent hors des dépôts publics.

## 2. Tests reproductibles sur scénarios fictifs
### T1 — Deux contributeurs rejoignent l'initiative
**Entrée :** une personne propose un article ; une autre entretient bénévolement le serveur. Aucun contrat, assemblée ou mandat collectif.
**Exécution :** remplir les dix champs, distinguer contribution de l'adhésion, déterminer qui autorise la publication et qui peut refuser le travail.
**Résultat attendu :** « contributions possibles selon accord explicite ; aucune charte collectivement adoptée ; aucun mandat politique IA ou des contributeurs ». **Échec :** déduire une adhésion du dépôt d'un texte. **Sources :** V0.9 art. 48.1–48.4, V0.1 §11.

### T2 — Désaccord sur un article
**Entrée :** la personne à l'initiative refuse de publier une enquête ; une contributrice conteste.
**Exécution :** documenter version, raison communicable, source du désaccord, droits de correction, canal réellement ouvert, informations confidentielles.
**Résultat attendu :** le refus éditorial individuel est nommé comme tel ; aucun faux « vote de commission » ; la contributrice conserve ses droits sur son œuvre et les recours applicables. **Échec :** qualifier le refus de décision collective. **Sources :** V0.1 §§ 6, 9, 11 ; V0.9 art. 48.2/48.5.

### T3 — Le seul administrateur technique refuse une décision
**Entrée :** une organisation future souhaite exporter ses données ; l'hébergement est personnel et un administrateur détient seul les secrets.
**Exécution :** identifier propriété et contrats, sauvegardes, droit à l'export, confidentialité, plan d'indépendance et responsabilité d'exécution.
**Résultat attendu :** absence de transfert automatique ; solution contractuelle ou moyens indépendants ; pas de divulgation de secrets dans la transparence publique. **Échec :** déclarer la révocation effective sans accès ni mécanisme d'exécution. **Sources :** V0.9 art. 48.6/48.7 ; V0.8 art. 25/43.

### T4 — Protection urgente et accusation contestée
**Entrée :** un signalement de violence est reçu ; aucune commission indépendante n'existe.
**Exécution :** séparer mesures de protection immédiates et conclusion disciplinaire ; documenter nécessité, durée, réexamen, canal privé réellement vérifié et recours externes.
**Résultat attendu :** aucune confrontation imposée à la victime ; aucune culpabilité prononcée sans procédure adaptée ; aucun secret promis si le canal n'existe pas. **Échec :** exclusion définitive automatique ou publicité du signalement. **Sources :** V0.9 art. 48.5, V0.8 art. 32/34.

### T5 — Retrait d'une personne qui assure un travail invisible
**Entrée :** une personne assure accueil, nettoyage et modération depuis six mois ; elle veut cesser.
**Exécution :** vérifier consentement initial, éventuels contrats, compensation, répartition des charges, accès aux outils et restitution des biens.
**Résultat attendu :** possibilité de cesser sans dette morale, traitement distinct des obligations légales et des tâches bénévoles. **Échec :** conditionner la liberté de départ à la continuité gratuite du service. **Sources :** V0.8 art. 6/7/39, V0.9 art. 48.3/48.6.

### T6 — « Une victoire prouve que notre méthode marche »
**Entrée :** un dossier de lutte annonce un abandon de projet.
**Exécution :** relever décision datée, causes concurrentes, témoignages opposés, effets sur les personnes, contre-exemples et limites d'échantillonnage.
**Résultat attendu :** résultat constaté ≠ attribution causale prouvée ; pas de modèle universel déduit d'un cas. **Échec :** confondre corrélation, récit militant et causalité. **Sources :** dossier ÉCL-002/003 cycle 5 ; sources externes non rouvertes ici.

## 3. Tableau de résultats de l'exécution logique
Ces tests ont été **appliqués aux six scénarios écrits ci-dessus**, pas à des personnes, services ou infrastructures réels.
| Test | Décision de méthode | Résultat |
|---|---|---|
| T1 | Rejeter l'adhésion automatique | Cohérent avec 48.3 ; cas fictif |
| T2 | Refus éditorial ≠ décision collective | Cohérent avec V0.1 §11 ; recours effectif à établir |
| T3 | Mandat ≠ accès technique | Transfert bloqué sans titre et passation |
| T4 | Protection ≠ sanction | Procédure réelle et canal privé manquants |
| T5 | Volontariat ≠ dette de travail | Conditions contractuelles à examiner au cas par cas |
| T6 | Résultat ≠ causalité | Enquête historique supplémentaire nécessaire |

## 4. Questions de décision humaine, sans réponse présumée
- La personne à l'initiative souhaite-t-elle **adopter individuellement** les orientations V2.6 et V0.1 sur leurs SHAs complets, ou les laisser candidates ?
- Quelles ressources peut-elle mettre à disposition sans en transférer la propriété, et lesquelles ne souhaite-t-elle pas engager ?
- Quel canal de rectification réellement fonctionnel est disponible aujourd'hui, sans promesse de confidentialité non vérifiée ?
- Souhaite-t-elle accueillir des personnes avant une phase constituante, avec quels accords et limites ?
- Quelles dépenses, obligations, sauvegardes et vérifications techniques seraient nécessaires pour que le retrait et la contestation soient effectifs ?

**Limites :** aucun entretien humain, aucune décision, aucun test de sécurité de production, aucune validation juridique, aucune nouvelle archive historique. La matrice est un instrument de contrôle et non une charte.
