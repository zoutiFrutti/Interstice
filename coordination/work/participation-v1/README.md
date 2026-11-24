# Participer à Interstice — candidate V1

Cette livraison comprend l'étude comparative de douze références, l'audit des branches, une architecture argumentée et une application de test avec réception SQL réelle **dans une base locale fictive**. Pas de fusion, publication, déploiement, migration distante ou activation publique.

Le dossier est exclu du site Pages par la règle existante `coordination`. L'interface originale, les six portes, les SVG et les 219 objets maîtres sont conservés. La barre de six repères de l'interface de test illustre les raccords contextuels ; elle ne remplace pas la navigation immersive. L'intégration dans les pages originales reste un patch à recevoir après revue, pas une modification déjà publiée.

## Lire la livraison

- `COMPARAISON.md` : fonctions, licences séparées du code/des contenus/des données, gouvernance, interopérabilité, confidentialité, accessibilité non auditée et choix de réutilisation.
- `AUDIT.md` : versions exactes #186 et #197–202, pilote, Supabase, C13/C14, avis d'ateliers et carte #193.
- `ARCHITECTURE.md` : deux axes de statut, séparation public/privé, parcours et contraintes.
- `LIVRAISON.md` : résultats actuels, limites et décisions encore nécessaires.
- `BROWSER_QA.md` et `evidence/` : preuves d'exécution et empreintes des fichiers techniques.

## Reproduire

Depuis la racine du dépôt, sur `work/participation-candidate-20261121` :

```sh
npm ci --prefix coordination/work/c07/faire-ensemble-pilot --ignore-scripts --no-audit --no-fund
npm ci --prefix coordination/work/participation-v1 --ignore-scripts --no-audit --no-fund
node --test coordination/work/participation-v1/test.mjs tests/nav01-faire-ensemble-pilot.test.mjs coordination/work/c07/faire-ensemble-pilot/purge.test.mjs coordination/work/c07/developpeuse/master-v1/test.mjs
node coordination/work/c07/relieuse/check-reviewed-preservation.mjs
python3 -m unittest discover -s coordination/agents -p 'test_*.py'
```

Node 22.13 minimum pour le test historique TypeScript ; exécution locale vérifiée sur Node 24.22.3. PGlite 0.5.15 (Apache-2.0) et SDK Supabase 2.119.0 (MIT), déjà utilisés dans le pilote ; versions et dépendances transitives verrouillées. Le paquet candidat déclare le même SDK pour la résolution Deno, sans mise à jour de version. Aucun nouveau framework, service payant ou outil d'analyse d'opinions.

Avec Deno **2.5.6** installé :

```sh
deno check --no-config --no-lock --no-remote --node-modules-dir=manual coordination/work/c07/faire-ensemble-pilot/submit-proposal.ts coordination/work/participation-v1/supabase-entry.ts
deno test --no-config --no-lock --no-remote --node-modules-dir=manual --deny-net --deny-env coordination/work/c07/faire-ensemble-pilot/submit-proposal.deno-test.ts
```

Le workflow `participation-candidate.yml` reprend ces contrôles isolés en lecture seule. Aucun accès au projet Supabase, lancement d'agent IA ou déploiement dans ce workflow. Les autres résultats CI sont propres à leur HEAD ; consulter la PR pour le bilan exact.

## Ouvrir l'application de test

```sh
node coordination/work/participation-v1/server.mjs --demo
```

Ouvrir `http://127.0.0.1:4173/`. Sur l'environnement Work géré, utiliser `sites-preview start` avec le chemin absolu de ce dossier et l'URL exacte retournée. Le serveur géré peut écouter l'interface de la passerelle interne ; hors de cet environnement, il exige le bouclage local. Il sert une **liste blanche** de fichiers, jamais la racine du dépôt.

Tous les exemples sont marqués fictifs. La base PGlite est temporaire et disparaît à l'arrêt du processus. N'y saisir aucune donnée réelle ou personnelle. Sans `--demo`, les quatre réceptions sont fermées, le catalogue est vide et la session de modération de démonstration n'existe pas. Aucun paramètre de production n'est lu par ce serveur.

Pour arrêter : Ctrl+C, ou `sites-preview stop` dans Work. Redémarrer remet la base fictive à zéro.

## Parcours utilisateur

1. **Proposer** : titre, type, idée/besoin ou ressource, puis secteur/références facultatifs. Réception confirmée par HTTP 202 et reçu privé seulement après écriture SQL ; les erreurs gardent le texte.
2. **Contribuer** : choisir la fiche, consulter son ID et sa révision, saisir l'apport, la provenance, la cote/page, les références et les droits connus. La version originale est conservée pour comparaison. Une photo ou pièce jointe n'est pas reçue dans cette version.
3. **Recherches ouvertes** : filtrer par question, institution, secteur ou état ; lire la demande et ses consignes ; répondre à la question documentaire. Les apports reçus et vérifications sont comptés sans classement de personnes.
4. **Suivre** : conserver le reçu de 256 bits et le copier dans le suivi. Seul son SHA-256 est stocké. Le suivi ne contient ni texte soumis, ni identité, ni journal privé. Aucun reçu dans une URL ou un stockage navigateur.
5. **Discussion** : argument, objection, source ou accord. L'apport attend une modération. La décision explicite garde les accords, désaccords et suites prévues. Aucun vote ni regroupement algorithmique.

Les champs sont étiquetés, les boutons utilisables au clavier, les retours annoncés via des régions de statut et les formulaires limités en taille. La mise en page s'adapte sous 640 px ; test physique Android, TalkBack, zoom réel à 400 % et audit WCAG complet restent à faire. Aucun succès mobile n'est revendiqué.

## Modération dans la démonstration

Cliquer « Ouvrir la modération de démonstration ». Cette session n'a aucun lien avec le compte réel de Zout. Examiner l'apport, saisir un motif destiné au suivi, puis retenir pour instruction ou rejeter. Les contributions affichent séparément texte original, apport, références, cote et droits déclarés. La vérification documentaire exige une instruction et un examen explicite des droits. Ce geste ne vaut pas visa juridique, contrelecture indépendante, validation éditoriale ou publication.

La recherche peut être close après une réponse vérifiée sur sa version actuelle et avec un motif public. Elle peut être rouverte avec un nouveau motif. Une clôture sans preuve est refusée. Le journal garde les deux événements. La discussion conserve ses objections après décision.

## Adaptateur Supabase : candidat fermé

`api.mjs` définit le même contrat de commandes pour PGlite et Supabase. `supabase-entry.ts` prépare le point d'entrée Deno ; `production-config.json` ferme les quatre fonctions et ne contient aucune fiche autorisée. Aucun secret ne doit être ajouté à ces fichiers. Les autorisations sont vérifiées avec `getUser` puis le RPC existant `is_moderator`, jamais avec `user_metadata`. Seul le serveur privilégié peut appeler `participation_command`.

`schema-candidate.sql` est un **script à examiner, pas une migration appliquée**. Il dépend de la candidate C08 (colonne de cohorte et fonctions préalables), est additif et doit être exécuté dans une transaction contrôlée sur un environnement autorisé après comparaison du schéma réel. Il n'est volontairement pas idempotent : une application déjà partielle doit être examinée, pas masquée avec `IF NOT EXISTS`.

Le script protège les colonnes privées ajoutées aux propositions par des privilèges de colonnes, en plus de RLS. Il retire l'accès des comptes connectés à l'ancien RPC `moderate_proposal(uuid,text)` pour éviter le raccourci « approuver → publier ». L'ancienne interface de modération ne doit donc pas être utilisée avec ce schéma candidat. Ce changement de contrat doit être reçu avant toute migration ; aucun droit réel n'a été modifié.

Le pilote C08 est durci séparément : HMAC avec secret anti-abus dédié de 32 caractères minimum, refus si secret identique à la clé de service, refus du faux reçu honeypot, résultat du limiteur strictement booléen. Ses interrupteurs restent fermés par défaut.

La provenance de l'en-tête IP, la rotation/rétention des empreintes, la cadence du suivi par reçu et les paramètres de la passerelle devront être vérifiés avant ouverture. Le limiteur existant autorise une soumission toutes les dix minutes ; il ne suffit pas tel quel à un suivi régulièrement rafraîchi. Ne pas réactiver la réception sur la seule réussite des tests locaux.

## Frontières et retour arrière

Aucune pièce jointe, messagerie privée, donnée de personne sur la carte, géocodage, fédération ou copie d'agenda. L'export Carte ne retient que ID, titre, secteur général, type et URL canonique de références vérifiées et autorisées ; les coordonnées, contacts et lieux sensibles sont exclus.

Retour arrière actuel : fermer le serveur de test et abandonner la branche candidate ; aucun effet distant à annuler. Après une éventuelle migration future, commencer par fermer les réceptions. Conserver la base et ses historiques ; ne pas lancer de DROP, purge, suppression de colonne ou restauration des anciens droits de publication sans un plan séparé validé. Le script de purge C08 reste en simulation par défaut et sa cohorte n'est jamais appliquée aux archives.
