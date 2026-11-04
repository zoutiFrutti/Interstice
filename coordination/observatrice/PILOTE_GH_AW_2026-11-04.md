# La Faille noire - premiere mise en place GH-AW (candidat)

Date : 2026-11-04. Mission : FN-ORC / Observatrice technique pilote.
Statut : **PREPARE, NON COMPILÉ, NON EXECUTE, NON AUTORISE**.

## Finalite

Preparer une premiere lecture assistee par IA du travail de La Faille noire, entierement sur GitHub, consultable sur Android. Ne pas demander a Zout d'installer Linux, de manipuler Codespaces ou de gerer des prompts entre 19 conversations.

Un unique fichier source d'agent est ajoute :
- .github/workflows/fn-observatrice-pilote.md

Ce fichier seul **n'est pas un workflow Actions executable** : GH-AW requiert sa compilation par `gh aw compile` en fichier `.github/workflows/fn-observatrice-pilote.lock.yml`. Le compilateur n'a pas ete execute pour ce lot, le lock est volontairement absent. Ne pas pretendre que le pilote fonctionne avant sa compilation et son essai reel.

## Reemploi du projet, sans dupliquer la messagerie

| Element | Observation au 2026-11-04 | Choix |
|---|---|---|
| C10, facteur .github/workflows/facteur-messagerie-c10.yml sur main | Workflow planifie, creation de tickets ; ne reveille aucune conversation | Conserver tel quel, ne pas brancher le pilote dessus |
| C11, coordination/agents/* | Scripts de preparation / rapprochement et tests, non moteurs IA generiques | Ne pas recreer ; reutiliser leurs conventions de preuves |
| C12, .github/workflows/pont-relieuse-lectrice-c12.yml sur main | Declencheur issues.opened, cle OPENAI_API_KEY et variable OPENAI_MODEL ; absence de verrou independant LECTRICE_AI_ENABLED | **Risque P0 : ne pas ajouter d'Issues de test C12 ni activer de secrets** |
| C13, PR #114 | Propose opt-in explicite, garde-fous et controles ; PR brouillon | Auditer et valider separement avant toute activation de C12 |
| C14, PR #115 | Ordonnanceur deterministe candidat sans appel IA reel | Pas de migration ni dependance imposee a ce pilote |
| C15 / R1, PR #116 / #126 | Candidats autour d'Ollama local, non necessaires au pilote | Non utilises : aucun ordinateur personnel requis |
| C18, PR #132 | Index, registre et contrat de preuve proposes, encore en brouillon | Lire sur la branche de #132 si possible, sinon marquer INCONNU |
| WORK V2, PR #161 | Registre de 219 objets, 30 reserves, sept parcours, non publie | Reference documentaire seulement ; pas d'integration V2 |

Aucune PR precedente n'est fusionnee par ce travail. Les references GitHub restent des candidatures. La PR #132 est la source candidate de coordination/c03/INDEX_TRANSMISSIONS.md, mais pas une source officielle de main.

## Garde-fous inscrits dans la source pilote

- `workflow_dispatch` uniquement (aucun horaire, evenement issue, commentaire, pull_request ou push).
- `if: vars.FN_OBSERVATRICE_ENABLED == 'true' && github.actor == github.repository_owner` : activation absente par defaut et acteur limite au proprietaire.
- Authentification Gemini candidate ; aucun GEMINI_API_KEY cree, lu ou modifie, et aucune verification de quota / de gratuite effectuee.
- `permissions` strictement read ; outils GitHub limites au depot courant, sans bash.
- `safe-outputs.report-failed-jobs: false` ; pas de production automatique d'Issues d'echec ; aucune autre sortie GitHub.
- Temps limite a 8 minutes, 6 tours et plafond de credits techniques. **Ces plafonds ne sont pas une garantie de cout financier a 0 euro.**
- Les donnees du depot public ne doivent jamais etre melees a des donnees personnelles ou contenus non publics.
- La sortie cible est le resume / journal de l'execution GitHub Actions, pas une publication, ni un document approuve.

**Attention** : GH-AW est un outil distinct de C12. Ce pilote n'active pas le pont C12 et ne depend pas de C13. Cependant, C12 doit etre securise independamment : la creation d'une Issue [RELIEUSE-LECTRICE] sur main pourrait toujours declencher son circuit.

## Controles de ce lot

- Lire le script `coordination/observatrice/controle_pilote_gh_aw.py`.
- Execution offline possible : `python3 coordination/observatrice/controle_pilote_gh_aw.py`.
- Ce controle statique ne remplace pas le schema ni la compilation GH-AW.
- Ne pas executer ici `gh aw run`, `gh workflow run`, ne pas configurer de secret ni de variable de mise en marche.

## Etapes restant a faire depuis un environnement cloud par une personne/IA autorisee

1. Verifier que le risque C12 est effectivement traite par la PR #114 ou qu'il est bloque de facon explicite sur main. Ne pas fusionner ce pilote pour contourner ce point.
2. Valider la compatibilite avec la version courante de GH-AW : `gh extension install github/gh-aw`, puis `gh aw compile fn-observatrice-pilote --no-emit` et `gh aw compile fn-observatrice-pilote --strict`. Choisir un environnement d'execution distant ; pas de terminal requis pour Zout.
3. Ajouter **sur cette meme branche et la meme PR** le `.lock.yml` *genere par le compilateur*. Ne jamais fabriquer un lock artisanal.
4. Controler les permissions, l'absence de safe outputs et de declencheurs automatiques, ainsi que les eventuels workflows existants pouvant etre lances sur une PR.
5. Faire verifier cout, fournisseur, donnees, droits et autorisations. `engine: gemini` est une hypothese de travail ; la documentation GH-AW signale une deprecation de ce moteur. Verifier une alternative maintenue avant activation si necessaire.
6. **Apres autorisation explicite seulement**, fusion controlee du fichier compile sur main, configuration du fournisseur retenu et de la variable FN_OBSERVATRICE_ENABLED, puis un premier run manuel.
7. Le premier rapport doit etre compare a la realite du depot : erreurs, sources, cout constate, temps, valeur ajoutee et interventions humaines.

## Points bloques a la date du mandat

- Aucun binaire `gh-aw` disponible et aucun `.lock.yml` compile dans cette livraison.
- Pas d'acces confirme aux secrets, aux quotas du fournisseur, ni a un compte Copilot payant.
- Le pont C12 reste sans opt-in independant sur main lors de cette verification ; son correctif C13 n'est pas fusionne.
- C18 #132 et C14 #115 sont des PR candidates. Leur existence ne vaut pas validation.
- Cette PR peut declencher des controles CI existants a l'ouverture, mais aucun run d'agent IA n'est demande.

Documentation GH-AW :
- https://github.github.com/gh-aw/setup/creating-workflows/
- https://github.github.com/gh-aw/reference/compilation-process/
- https://github.github.com/gh-aw/reference/triggers/
- https://github.github.com/gh-aw/reference/tools/
- https://github.github.com/gh-aw/reference/auth/

Aucun changement a main, aucune fusion, aucun deploiement ni appel de modele n'a ete effectue par ce dossier.
