# C15 — Exécutants IA locaux et distants : contrat candidat

Date : 2026-11-02. Responsable : L'Orchestratrice.

## État réel
- Contrat JSON strict pour un atelier, un modèle, une mission et un appel maximum.
- Le mode par défaut **ne contacte aucun modèle** et répond `BLOQUEE_EXECUTEUR`.
- Le connecteur local Ollama est codé mais jamais déclenché en CI. Il nécessite `--executer-local`, `ia_active: true`, fournisseur `ollama_local` et coût API déclaré nul. Il contacte uniquement `http://127.0.0.1:11434/api/generate`.
- Fournisseur distant : **non connecté**. Aucune clé API requise, aucune dépense engagée.
- Le modèle n'a pas été installé ni testé sur un vrai ordinateur Linux ; seul un transport simulé est testé.
- Aucun réveil des anciennes conversations ChatGPT, aucune publication ni fusion automatique.

## Test local ultérieur, avec Ollama installé

```bash
python3 coordination/agents/executant_c15.py \
  --entree coordination/agents/exemple_mission_c15.json \
  --sortie rapport-c15.json
```

Ce premier exemple **bloque volontairement** tout appel. Une exécution Ollama réelle demandera de copier le JSON dans un fichier de mission privé/local, de choisir un modèle déjà présent et d'activer explicitement `autorisation.ia_active=true`, puis de lancer `--executer-local`.

## Limites et vérifications à prévoir

- Le champ `cout_eur_max` est un contrat de refus des exécutions distantes, **pas un véritable compteur de facturation**. Le temps machine local et l'électricité ne sont pas gratuits.
- Le modèle peut inventer des faits. Les résultats restent `ANALYSE_CANDIDATE` avec `sources_verifiees=false`.
- Sans authentification propre, le champ `origine` de C14 et les autorisations JSON ne sont pas une permission utilisateur suffisante pour lancer de l'IA à distance.
- L'utilisation de secrets, données non publiques, publication ou fusion reste exclue.
- La limite d'un appel est structurelle dans le code C15, mais un système multi-missions exigera un quota agrégé, un coupe-circuit et des journaux.
- La future liaison à C14 ne doit pas exécuter du contenu d'Issue GitHub non fiable directement sur l'ordinateur personnel.

## Passage vers C16
Établir les permissions par atelier et les profils d'exécution, puis raccorder C14 à C15 dans un environnement séparé, avec authentification, budget agrégé et revue par La Relieuse. Faire relire les permissions par La Juriste, l'interface par La Développeuse, les statuts par L'Anarchitecte.
