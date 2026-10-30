# LA FAILLE NOIRE × INTERSTICE — Le Relieur
## Dossier d'arbitrage d'intégration V0, cinq priorités
**30 octobre 2026 · Revue documentaire et GitHub réelle ; propositions à validation humaine, pas de fusion ni publication.**
**Fonction de coordination et d'organisation pratique : Le Relieur, sans atelier « Organisateur » distinct.**

### 1. Faits de départ et règle de preuve
- GitHub `main` au premier contrôle du cycle : `2eeb189c9cc0f257a448bfe8feacefc3f62e2cea` ; le dépôt est **très actif**, vérifier les HEAD de nouveau au moment de toute opération.
- Les PR #35, #41, #44 sont **brouillons et indiquées non fusionnables** à ce contrôle ; #42 et #43 brouillons, indiquées fusionnables. Ce sont des états Git temporaires, **pas des décisions**.
- Les exécutions GitHub Actions les plus récentes des branches #35/#41 et du `main` étaient en **file d'attente** au contrôle, **sans conclusion**. Des exécutions vertes antérieures n'autorisent pas à déclarer un HEAD ultérieur testé.
- Tentative de consultation du site public `https://zoutifrutti.github.io/Interstice/` via outil web : non accessible par ce lecteur, **donc aucune inspection publique HTTP/rendu réussie dans cette passe**. Les déploiements GitHub Actions antérieurs réussis ne vérifient ni navigation réelle ni contenu visible sur un smartphone.

### 2. Carte factuelle des dépendances, pas d'architecture nouvelle
| Priorité | Source de vérité pour le contenu | État de code / ce qui reste |
| --- | --- | --- |
| Accueil/mobile | [PR #35, Graphiste](https://github.com/zoutiFrutti/Interstice/pull/35) | H1 « Et si on essayait autre chose ? », grosses commandes, CSS et tests ; essai tactile Crosscall et intégration finale encore nécessaires |
| Deux articles Wiki | [PR #44, Lecteur](https://github.com/zoutiFrutti/Interstice/pull/44) | Young/Freeman/Tebble, Kropotkine/Federici/hooks/Freire/Berenstain/Ahmed ; avis et corrections Juriste/Médiathèque intégrés sur branche ; pas de validation humaine ni publication des nouveaux ajouts |
| Découverte, deux cartes | [PR #41, Développeuse](https://github.com/zoutiFrutti/Interstice/pull/41) | `decouvrir-initiatives.html`, noyau, 11 exemples fictifs, deux lectures SVG, liste, filtres, styles ; tests réexécutés à attester sur **HEAD exact**, pas de données réelles |
| Fiabilité des formulaires | [PR #42](https://github.com/zoutiFrutti/Interstice/pull/42) | Corrections et tests simulés ; aucune soumission bout en bout avec personne réelle ni permission production validée |
| Scénarios de coopération | [PR #43, Relieur](https://github.com/zoutiFrutti/Interstice/pull/43) | S1/S2/S3 et nouvel [essai S1 papier + interface](RELIEUR_014_FICHE_TEST_S1_PAPIER_CARTES_2026-10-30.md) ; **zéro essai humain** |
| Communication | Paquet 013 et textes sources du responsable réseaux | Trois carrousels à valider, visuel `03_04_interstice.jpg` au présent trompeur sur une fonction pas encore réelle |

**Vérification transversale des CSS :** `cartes-design.css` a le **même SHA de contenu** dans #35 et #41 (`07e8c54fff6cc4dfc66f42ba19cf364962e400c5`), et #41 le charge dans son HTML après `style.css`, `initiatives.css`, `cartes.css`, puis `cartes-compat.css`. **Ne plus demander d'importer le fichier une deuxième fois**. Les différences de CSS de contexte restent à tester.

### 3. Conflits Git réels à préserver
Sur les listes de fichiers modifiés (contrôle du cycle) :

| Branches | Fichiers communs effectivement modifiés | Arbitrage conservateur |
| --- | --- | --- |
| #35 × #41 | `cartes-design.css`, `coordination/JOURNAL_COMMUN.md` | Conserver une seule copie du CSS identique, réconcilier les journaux sans perdre d'entrée |
| #35 × #44 | `wiki-decision-collective.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html`, Journal | Prendre le **texte final depuis #44**, puis y appliquer uniquement les styles validés de #35 ; surtout ne pas ramener une copie antérieure |
| #35 × #42 | Journal | Ne pas mélanger les formulaires et la refonte graphique pour une simple résolution de journal |
| #41 × #42, #41 × #44, #42 × #44 | Journal | Préserver chaque entrée, supprimer les doublons seulement sur preuve d'identité ; relecture humaine |
| #43 × #35/#41/#42/#44 | **Aucun fichier commun** dans cette passe | Conserver la PR #43 comme dossier de scénario en revue, sans dépendre d'une fusion applicative |

**Ordre d'intégration candidat, non ordre de fusion automatique :**
1. **Verrouiller l'éditorial Wiki** : contrôle final des deux fichiers sur HEAD #44 avec Médiathèque/Juriste/Lecteur ; confirmer canal de correction non sensible, éditions et avis humain.
2. **Verrouiller la découverte fictive** : HEAD #41, tests Node/Chromium verts sur ce SHA, égalité liste/carte, confidentialité, clavier et échec de module.
3. **Assemblage graphique contrôlé** : transposer depuis #35 uniquement CSS et pages pertinentes, récupérer les versions finales de #44, ne pas remplacer `cartes-compat.css` de #41 ; tests composés à 390/1280 px puis Android.
4. **Formulaires #42 indépendants** : vérifier le comportement réel dans un environnement de test **sans** collecte de personnes, traiter les retours d'erreurs et doubles soumissions ; validation de sécurité avant une ouverture de collecte.
5. **Revue et décision humaine sur la V0 publique** : choix de version, responsables de corrections, communication ajustée ; déployer uniquement après autorisation explicite.

### 4. CI Wiki : incident précis, sans remède inventé
[Exécution d'échec `41094247759`](https://github.com/zoutiFrutti/Interstice/actions/runs/41094247759), contrôlée avec **les logs du job 124195744721** sur HEAD `832a1ffce` :
- étape `Build candidate inventory from GitHub main` : **succès, 43 scannés, 43 préparés, zéro erreur** ;
- étape `Synchronize private editorial staging on main` : **échec HTTP 409** du service d'ingestion, avec réponse `{"error":"github source unavailable","path":"coordination/PENSEUR_ETUDES_60_79_VINGT_PASSES_CARTES_COMMUNS_POSSIBLES_2026-10-30.md","status":403}` ;
- étape d'artefact ensuite non exécutée ; ce n'est **pas** un échec du moteur GitHub Pages, ni un problème d'analyse Markdown établi.
- [exécution antérieure verte `41094181659`](https://github.com/zoutiFrutti/Interstice/actions/runs/41094181659) : les trois étapes avaient réussi sur un autre SHA.

**Diagnostic étayé :** la génération locale fonctionne ; le problème se produit **dans la lecture GitHub effectuée en aval par le service d'ingestion**. Le `403` peut correspondre à autorisation, quota ou filtre, et ne peut pas être attribué avec certitude sans logs du serveur. **Ne pas** désactiver l'authentification OIDC, augmenter des permissions, changer RLS ou contourner la vérification pour forcer un feu vert. Action ciblée à autoriser : examiner les journaux de l'Edge Function correspondante et ses limites d'accès GitHub, puis refaire un test reproductible sur un SHA fixé ; vérifier que l'échec est intermittent ou systématique.

### 5. Conditions de sortie, spécifiques et vérifiables
| Décision humaine à préparer | Minimum à contrôler | État |
| --- | --- | --- |
| Montrer une **démo fictive** privée | HEAD #41 et CSS intégré, tests navigateur sur SHA final, étiquettes fictives, liste et carte, pas de données réelles | **Candidate, essais physiques/accessibilité manquent** |
| Publier les **deux pages éditoriales** enrichies | Avis Lecteur/Juriste/Médiathèque consolidés sur HEAD #44, ordre et liens, niveau de lecture des œuvres, revues humaines, corrections possibles sans canal privé fictif | **Candidate, pas encore validée** |
| Publier la refonte **accueil** | Accord éditorial, Android tactile, CTA et liens vérifiés, manifeste V2.5 explicitement non adopté, stratégie de rapprochement CSS/HTML | **Candidate, tests appareil manquent** |
| Accepter une **initiative réelle** | Provenance, source/licence, publication licite, correction/retrait, responsable de traitement, contrôle API/RLS, lieu sensible protégé, personne pour modérer | **Non prêt** |
| Organiser une **mise en relation réelle** | Volontaires et interlocuteurs consentants, activité et responsabilité vérifiées, contact médié, réponse/recours réellement assurés, accès hors application | **Non prêt** |
| Publier **les carrousels** | Image 03_04 corrigée ou décision sur sa formulation, alt et légendes, canal de réponses réaliste, URL publique testée | **Paquet préparé, validation humaine manquante** |

**Répartition humaine non présumée :** Le Relieur organise et conserve la mémoire, mais n'est ni modérateur nommé, ni responsable RGPD désigné, ni représentant du collectif. Aucun volontaire, accueil physique ou canal confidentiel n'a été confirmé dans cette passe.

### 6. Communications : contrôle direct et réserve
- Le compte Metricool `faille.noire` est accessible au connecteur ; interrogation des **publications programmées** du 30/10 au 31/12/2026 : **aucun résultat**. Cette méthode **ne liste pas nécessairement les brouillons**, ne prouve pas qu'ils sont absents et n'autorise aucune programmation automatique.
- Le paquet Communications 013 marque `03_04_interstice.jpg` : « Interstice sert à cartographier… » alors que la carte n'est qu'une simulation. Le visuel doit être corrigé avant son utilisation publique, pas seulement sa légende.
- Ne pas annoncer « deux articles publiés » sur la seule existence de PR #44 ; ne pas présenter les onze fiches comme initiatives réelles.
- Les publications sur réseaux et le suivi des commentaires exigent une validation et des personnes disposant des capacités réelles, pas des promesses de disponibilité inventées.

### 7. Le test S1 lié aux cartes
[Feuille d'essai pratique préparée](RELIEUR_014_FICHE_TEST_S1_PAPIER_CARTES_2026-10-30.md) :
- **Papier** : besoin vélo sans smartphone ni vote, disponibilité non garantie, refus/sortie sans sanction.
- **Démo** : fiche `demo-cycles` « Les vélos en partage » à **Gaillac**, et projet `demo-projet-gaillac` ; expliciter qu'une recherche strictement `Lisle-sur-Tarn` peut être vide sans invalider le besoin. **Aucune rencontre réelle ni accord de prêt.**
- **S2/S3** : garder les jeux de rôles existants et le complément historique La Marmite, sans inventer de ressources physiques correspondantes dans la carte.
- **À réaliser ensuite par des personnes volontaires seulement** : essai réel papier et, si accès à un aperçu local sûr, interface sur smartphone. Aucune personne n'a été sollicitée à la date de rédaction.

### 8. Arbitrages collectifs à ne pas usurper
1. Qui valide une sortie informative du Wiki et de l'accueil, et qui en reçoit les demandes non sensibles ?
2. Quel statut public aura un prototype totalement fictif, et à quelle URL autorisée ?
3. Quelle personne habilitée assume réellement les données et recours d'une éventuelle carte réelle ?
4. Quelle participation hors application peut être tenue avec des moyens disponibles, sans faire peser le travail invisible sur les mêmes personnes ?
5. Quels lieux et activités pourraient être testés **sans** divulgation de coordonnées sensibles, et avec quel consentement réel ?
6. Une **mise en relation** doit-elle être proposée maintenant ? L'avis de coordination est de **ne pas l'ouvrir dans la V0 fictive**.

**Aucune décision collective adoptée. Aucun merge, déploiement, collecte de données, nouvelle base, lieu promis ou changement de droits effectué.**
