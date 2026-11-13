# C13 — Contrat de retour Relieuse → Lectrice (candidat)

**Statut : proposition technique, non déployée sur `main`.**
**Date : 2 novembre 2026.** Responsable : L'Orchestratrice, sous coordination de La Relieuse.

## Objectif

Permettre à La Relieuse, depuis sa conversation ChatGPT, de créer une mission de relecture dans une Issue GitHub et de lire son retour **sans prétendre réveiller une conversation ChatGPT historique**.

## Entrée

- Issue créée par le propriétaire `zoutiFrutti`, avec titre commençant exactement par `[RELIEUSE-LECTRICE]`.
- Corps de 20 à 12 000 caractères.
- Événement `issues.opened` seulement.
- **Attention : le dépôt et les Issues sont publics.** Ne transmettre aucune donnée personnelle confidentielle, clé, document non publiable ni échange privé. La Juriste doit valider tout usage de documents sensibles.

## Exécution et frais

- Variable de dépôt `LECTRICE_AI_ENABLED` : seul `true` active la possibilité d'un appel IA ; toute autre valeur bloque l'appel.
- Il faut **en plus** `OPENAI_MODEL` (variable GitHub Actions) et `OPENAI_API_KEY` (secret GitHub Actions).
- **Ne pas configurer/activer ces paramètres sans décision budgétaire et contrôle de La Juriste.**
- La limite de 800 tokens en sortie et le délai réseau de 45 secondes définis en C12 ne sont pas un plafond en euros. Le nombre d'appels et leur coût doivent être budgétés à part.
- La présence de code C13 sur une PR n'exécute **aucune** mission IA réelle.

## Retour

Le workflow écrit un commentaire associé à l'Issue avec le marqueur `<!-- C13-LECTRICE-RESULTAT -->`, puis un état explicite :

| État | Interprétation par La Relieuse |
| --- | --- |
| `BLOQUEE_AUTORISATION` | IA volontairement désactivée ; aucun appel |
| `BLOQUEE_CONFIGURATION` | Activation demandée, mais secret ou modèle absent |
| `REFUSEE_ENTREE` | Mission mal formée, à corriger |
| `ECHEC_TECHNIQUE` | Tentative échouée ; aucun résultat exploitable |
| `ANALYSE_CANDIDATE` | Texte IA produit, **non vérifié** ; contrôler sources et affirmations |

L'identité de l'Issue, l'auteur et la date du commentaire constituent le premier journal consultable. Le workflow ne fusionne rien et ne publie aucun article. Il est limité aux Issues créées par le propriétaire.

En cas de relance du workflow sur la même Issue, un commentaire du bot déjà porteur du marqueur entraîne un **non-duplicata** : il n'est ni réécrit ni doublé. Pour redemander une exécution après correction, créer une nouvelle mission (nouvelle Issue) qui référence l'ancienne ; cela préserve le journal d'audit.

## Action de La Relieuse

1. Créer l'Issue avec le titre et le texte public admissible.
2. Lire le commentaire de `github-actions[bot]` sur **cette même Issue** ; ne jamais déduire une réussite de la seule conclusion verte du workflow.
3. Contrôler l'état et renvoyer le résultat candidat à l'atelier compétent pour vérification.
4. Présenter à Zout un bilan et les décisions nécessaires. Ni validation éditoriale ni publication automatiques.

## Critères de validation avant activation réelle

- Tests unitaires sur PR et contrôle des permissions GitHub Actions.
- Mission de test sans modèle, observée dans une Issue de démonstration **après fusion autorisée**.
- Vérification de l'absence de fuites dans le commentaire et les logs.
- Choix explicite du modèle, budget plafond et moyen d'arrêt de la consommation.
- Une exécution réelle plafonnée, avec consentement explicite, et retour relu par La Relieuse.
- Avis Juriste sur l'envoi de contenus au fournisseur IA et leur visibilité GitHub.

**Conclusion : le circuit C13 est un candidat à valider. Il ne démontre pas encore une exécution d'IA ni une boucle multi-ateliers autonome.**
