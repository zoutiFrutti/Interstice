# C07 — candidate unique

Branche : `work/c07-reunification-20261104` ; PR principale #186. Ne fermer aucune ancienne PR. Aucun merge ni déploiement du site public.

## Essai Android

https://faille-interstice-convergence-01.graciouscrust.chatgpt.site

Se connecter avec le compte ChatGPT propriétaire. L’aperçu est isolé de Pages, sans données privées du registre documentaire, avec deux manifestes déjà publics. `/nav/` : immersion ; `/coordination/` : instantané documentaire daté, preuve synthétique C07 et lecture des états GitHub sur demande. Le contrôle physique Crosscall/TalkBack et la réception artistique restent à faire par Zout.

## Classement des PR sources

| PR | Traitement dans C07 | Ce qui reste bloqué |
|---|---|---|
| #174 | Moteur et baseline de comparaison repris via #181 | Pas d’activation publique |
| #176, #179 | Corrections visuelles compatibles reprises via #181 ; avis conservés | Réception artistique de Zout |
| #181 | Socle testé retenu, sans régression vers l’ancienne entrée | CI propre à chaque HEAD |
| #182 | Intention logo/plongée conservée dans l’implémentation plus récente de #181 ; avis conservés | Ancien patch caméra supplanté, pas réappliqué |
| #185 | Statuts et pont repris ; modules ajoutés à la liste du constructeur pour corriger les 404 | Aucun contenu non visé ouvert |
| #177, #178 | Audits et correspondance 29 étapes conservés | `authorizedResourceLinks()` reste vide |
| #161 | Registre 219 objets, 19 relations, 30 WORK et contrats repris | Aucun visa de publication |
| #162–#173 | Pièces des ateliers conservées avec leurs sources et réserves | Originaux, identités, droits et objections non clos artificiellement |
| #184 | Corrections REL-003 à REL-006 et fiches PAR reprises ; décision A appliquée | PAR-005 toujours bloqué |
| #114 | Durcissement C13 intégré uniquement dans la candidate | main conserve son ancien C12 jusqu’à fusion autorisée |
| #115, #132 | Moteur déterministe C14 et registre C18 repris | Aucun réveil automatique de conversation |
| #163 | Audits technique et sécurité conservés | Ne vaut pas un visa de la candidate |
| #180 | Source GH-AW, lock officiel et contrôle de compilation conservés | Fournisseur, quotas et autorisation IA non configurés |
| #183 | Console réutilisée, avec preuve C07 exécutée sans IA | Registre daté ; contrôles GitHub actualisables en lecture seule |

Les SHA exacts de chaque source sont dans SOURCES.json. Les anciennes PR restent ouvertes. L’intégration documentaire conserve des propositions contradictoires ; seule #184 corrige le registre candidat. Les propositions historiques non démontrées ne deviennent pas des faits. La règle de non-redondance Wikipédia reste applicable avant tout nouvel article. Les anciennes recherches de L’Éclaireuse héritées du dépôt restent des pistes, pas des visas.

## Automatisation réellement disponible

Le moteur C14 contrôle des formats et des doublons d’URL, sans visite web ni modèle IA. C07 ajoute un état persistant, un verrou de fichier, le refus des doublons, un journal chaîné, un arrêt d’urgence et une décision liée à l’empreinte du résultat. La reprise consolide le rapport ; elle n’approuve aucun contenu.

```sh
python3 coordination/agents/demo_c07.py artifacts/c07/demo.json
python3 coordination/agents/reunification_c07.py start --state checkpoint/state.json --mission coordination/agents/exemple_mission_c14.json
# Lire report_hash, puis décision explicite du propriétaire :
python3 coordination/agents/reunification_c07.py decide --state checkpoint/state.json --actor IDENTITE_DECLAREE --report-hash EMPREINTE_LUE --decision reprendre
```

La démonstration utilise **une décision humaine simulée**, explicitement identifiée. Elle n’est pas un accord de Zout. La console expose cette différence. Les états documentaires C18 et les résultats techniques restent distincts.

Le workflow `work-c07-secure-missions.yml` vérifie automatiquement la chaîne sans IA sur la PR et conserve ses preuves comme artefacts. Sa voie manuelle est propriétaire uniquement, autorisation explicite, permissions read, arrêt via `ATELIERS_EMERGENCY_STOP=true`. Le premier lancement conserve `c07-checkpoint`, puis le propriétaire peut fournir son numéro de run, l’empreinte et sa décision pour reprendre. Cette voie dispatch ne sera disponible qu’après intégration autorisée du workflow dans la branche par défaut : elle n’a pas été exécutée en production. Les checkpoints expirent à 30 jours ; les exporter avant expiration pour une reprise durable.

**Limites API réelles :** aucun outil disponible ne réveille ni n’écrit dans les anciennes conversations ChatGPT. Un bouton « Envoyer mes décisions » qui promettrait ce transfert serait trompeur. Les conversations peuvent recueillir directement les décisions quand elles sont ouvertes ; la voie GitHub utilise les entrées du workflow et ne prétend pas retransmettre aux conversations. Aucun agent IA externe n’a été activé. La récupération automatique des commits/PR d’agents n’est pas opérationnelle tant qu’aucun moteur autorisé n’est connecté. La console n’est pas un panneau d’administration.

## Tests et conservation

Les suites de #181 sont conservées ; nouveau contrôle de l’artefact pour détecter les imports manquants de #185 et nouveau test de reprise sur plusieurs processus. Android reste une simulation Chromium ; aucune certification matérielle revendiquée. Les captures avant/après et le HEAD sont des artefacts du workflow NAV de #186.

Tous les fichiers du site public et les SVG restent inchangés. C13 change cinq fichiers de sécurité/test ; le contrôle R6 est adapté à ces blobs exacts et à son propre changement QA, listés dans C13_EXCEPTIONS.json. Les contrôles refusent toute autre modification de fichier initial.

## Reprise prioritaire

1. Lire les CI du dernier HEAD de #186 ; corriger un échec démontré sur cette même branche.
2. Tester le lien privé sur Crosscall Stellar X5 et recueillir la réception artistique.
3. Choisir et autoriser un moteur IA et ses conditions de coût/confidentialité avant activation ; conserver le mode sans IA jusque-là.
4. Clore les réserves historiques, juridiques, sanitaires et de droits par preuve ou visa distinct. Aucun conseil pratique PAR-005.
5. Toute fusion ou activation publique demande une instruction explicite distincte.

## Complément du 5 novembre — suivi réel et reprise contrôlée

La console dispose d’« Actualiser les états GitHub ». Ce bouton lit les métadonnées publiques de #186 : HEAD actuel, derniers runs par workflow sur ce HEAD, conclusions et artefacts C07 avec expiration. Il n’utilise ni clé ni cookie GitHub et n’envoie aucune mission. Une panne ou une limite API affiche INCONNU ; un ancien succès n’est pas conservé comme résultat actuel. Les 19 profils et les statuts documentaires restent indépendants de ces contrôles. Les résultats d’un agent IA ne sont jamais déduits d’une CI.

Le workflow C07 récupère également ce relevé réel avec un jeton GitHub en lecture seule et le conserve dans `github-observation.json`, avec la preuve déterministe. Cette collecte récupère des références de commits, runs et artefacts existants ; aucun modèle n’est exécuté.

Avant toute reprise manuelle, la provenance du checkpoint est désormais contrôlée : dépôt, propriétaire/acteur de relance, déclencheur manuel, workflow, branche, même commit, succès du run, artefact unique et non expiré. Un checkpoint d’un autre workflow, d’une PR ou d’une ancienne version du code est refusé avant téléchargement. Le checkpoint lui-même doit conserver le rapport, son empreinte, la mission, ses interdictions sensibles et un état compatible avec le journal.

Les tests réseau simulés sont explicitement nommés comme tels. La collecte réelle en CI constitue une preuve séparée. Le dispatch manuel reste préparé, sans activation sur main. Les API disponibles ne permettent toujours pas de transmettre automatiquement des décisions aux anciennes conversations ni de les réveiller.

Le contrôle du registre réel est désormais exécuté en CI : les 219 objets sont répartis en huit lots bornés C14, pour 24 tâches déterministes (doublons URL, format des URL et consolidation). Les huit checkpoints attendent une décision humaine ; aucune décision n’est simulée pour ces missions réelles. Le rapport inclut l’empreinte des données et le commit testé. Les références URL absentes sont distinguées des erreurs avérées : un dossier interne n’a pas nécessairement d’URL canonique. Les doublons globaux restent des rapprochements probables, sans fusion d’ID ni correction automatique des éditions. Le précédent test synthétique de validation est conservé et étiqueté séparément.
