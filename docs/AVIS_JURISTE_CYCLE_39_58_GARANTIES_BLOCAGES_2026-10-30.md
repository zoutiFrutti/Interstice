# LA FAILLE NOIRE × INTERSTICE — Avis juridique ciblé sur le cycle 39–58
## Atelier du Juriste · Études 46–50, 54–55 · 30 octobre 2026

> **STATUT : ANALYSE ET PROPOSITIONS NON ADOPTÉES.** Ce dossier ne crée aucune autorité, aucun règlement opposable, aucun comité disciplinaire ni aucune autorisation de traitement. Il ne modifie ni la V2.5 du manifeste ni la Charte des communs. Il ne constitue pas un avis juridique individualisé sur une structure non encore déterminée.

**Mission exacte reçue :** `coordination/transmissions/2026-10-30_PENSEUR_VERS_JURISTE.md`.
**Feuille de route lue :** `coordination/PENSEUR_FEUILLE_DE_ROUTE_ETUDES_39_58_2026-10-30.md`.
**Hypothèses effectivement lues :** `coordination/PENSEUR_ETUDES_39_58_CYCLE_AUTONOMIE_COMMUNS_2026-10-30.md`.
**Travaux préexistants conservés, sans réédition :**
- `docs/ETUDE_JURIDIQUE_CARTOGRAPHIE_INTERSTICE_RISQUES_2026-10-30.md` : risques initiaux, bases légales, géolocalisation, licences et conditions générales de MVP.
- `propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md` : droits sur fiches, correction, retrait, modération et charte descriptive.
- `coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md` : distribution des travaux inter-ateliers.
- `docs/AUDIT_CONTRIBUTIONS_SUPABASE_2026-10-29.md` : audit technique daté, non garantie de conformité future.
- Charte des communs V0.4 et compléments V0.5–V0.6, non adoptés.

### I. Résultat nouveau de la passe : sept garanties et leur priorité

| Étude | Problème ciblé | Qualification juridique | Garantie complémentaire / contrôle produit |
|---|---|---|---|
| **46 Dissidence** | Une fiche, un besoin ou un compte est supprimé car il critique une décision du collectif | Conditions d'utilisation et, **si applicables**, DSA art. 16–17 et dispositifs de recours appropriés ; droits à l'expression, vie privée et non-discrimination selon situation | Distinguer motif **contenu illicite**, **risque immédiat**, **inexactitude** ou **non-respect d'une règle d'usage publiée** de la simple opposition politique ; conserver décision, motif, champ modifié et recours sans constituer de fichier accusatoire |
| **47 Personnes affectées** | Une initiative ou dix membres inscrivent une adresse, un besoin ou un événement affectant des non-inscrits | RGPD pour personnes identifiables ; sécurité et autres droits selon le contexte ; **aucune voix statutaire universelle automatiquement conférée** | Possibilité de signaler une erreur ou un danger sans compte ; consultation proportionnée des personnes affectées, sans révéler leur identité et sans leur promettre un veto général |
| **48 Capacité limitée** | Les places, outils ou lieux sont rares | Liberté contractuelle et critères licites selon activité ; obligations particulières de non-discrimination, accessibilité et sécurité à qualifier | Critères objectifs d'accueil, éventuelle liste d'attente non discriminatoire, refus motivé et réexaminable ; aucune « certification Interstice » d'une capacité réelle sans vérification |
| **49 Données** | Site et application partagent une base et des lieux géolocalisés | RGPD art. 5, 6, 9, 10, 24–26, 28, 32 et droits des personnes selon traitement ; CNIL géolocalisation | **Identité du ou des responsables de traitement à établir** ; base légale par finalité ; distinction coordonnées publiques/privées ; location sensible absente de l'API et des exports ; permissions mobiles facultatives |
| **50 Retrait/export** | Une personne ou un collectif quitte Interstice | RGPD art. 15–17, 20 : droit d'accès, effacement conditionnel, portabilité limitée par sa base légale et le traitement ; droit d'auteur et droit des bases | Export des **contributions diffusables dont la réutilisation est autorisée**, distinct de la copie RGPD des données de la personne ; **jamais un export général des contacts de tiers** ; retrait des habilitations et accès, conservation nécessaire motivée |
| **54 Financement** | Donateurs ou financeurs conditionnent priorités et accès aux ressources | Droit des associations, contrats, subventions, fiscalité et obligations comptables suivant activités/seuils | Inventaire des financements affectés, déclaration des conflits d'intérêts, habilitations budgétaires bornées, transparence agrégée et protection des bénéficiaires ; financement ≠ pouvoir politique |
| **55 Fédération sans centre** | Une initiative veut gérer ses fiches ; une fédération suppose pouvoir sur tous les autres | RGPD art. 26 si finalités et moyens **décidés conjointement** ; règles statutaires et contractuelles propres à chaque organisme | Matrice écrite « qui décide quoi », conventions limitées, possibilité de retirer une habilitation, distinction marque / hébergement / statut / responsabilité ; pas de tutelle par défaut |

**Remarque :** la consultation des personnes affectées ne crée pas d'adhésion fictive. La correction d'un contenu juridiquement problématique ne doit pas être qualifiée de « sanction politique ». Inversement, une décision de modération peut être détournée pour silencier des critiques et doit donc rester traçable.

### II. Blocages possibles avant toute ouverture du prototype à des données nouvelles

**B1 — BLOQUANT : responsable(s) des traitements et bases légales non établis.**
Avant de collecter de nouvelles fiches liées à des personnes, prévoir par finalité : qui détermine les objectifs et moyens essentiels, catégories collectées, base juridique article 6 et si nécessaire exception article 9 ou conditions article 10, information des personnes, destinataires, durées, droits et procédure de contact. Si plusieurs acteurs déterminent **ensemble** les finalités et moyens, le RGPD art. 26 impose la répartition transparente des obligations par accord ; un mandataire qui gère les horaires ne devient pas nécessairement coresponsable. La CNIL avertit qu'une qualification repose sur le rôle réel, non l'étiquette contractuelle.

**B2 — BLOQUANT : diffusion possible de coordonnées privées, localisations sensibles ou identifiants indirects.**
Les coordonnées source d'un domicile, refuge, collectif exposé, lieu de vie de personnes vulnérables, activité de mineurs, etc., ne doivent pas être exposées dans la vue/API publique, ni dans le GeoJSON, les tuiles de carte, la recherche, les logs de requête ou les exports. Une **zone approximative peut rester réidentifiante** si la catégorie d'initiative est rare. Dans ce cas, aucun point. Pour un lieu public sans risque particulier, instruire la publication de l'adresse réellement publique avec une base légale appropriée. La permission Android/iOS ne crée pas automatiquement le consentement RGPD.

**B3 — BLOQUANT : aucun canal opérationnel de correction et de retrait d'urgence pour la carte.**
Le formulaire Wiki existant ne suffit pas à démontrer la possibilité pour une personne non inscrite de signaler une adresse privée sur la **future carte**. Il faut un point de contact, un traitement prioritaire du risque, un masquage ciblé, une procédure de contestation et un responsable effectivement disponible. Les délais internes relèvent d'un choix à débattre ; les droits RGPD conservent leurs délais légaux, en principe un mois pour la réponse.

**B4 — BLOQUANT : sécurité public/privé et contrôle négatif non démontrés sur les nouvelles tables.**
La RLS du schéma historique documentée en octobre 2026 ne prouve rien pour des tables d'initiatives non encore conçues. Exiger tests en rôle public, compte de tiers, auteur, représentant revendiqué, modérateur et administrateur ; contrôler colonnes/objets, RPC `SECURITY DEFINER`, vues, exports, sauvegardes et clés de localisation. Pas de mise en ligne avec « masquage seulement dans l'interface ».

**B5 — BLOQUANT CONDITIONNEL : publication communautaire sans qualification du rôle DSA et recours adaptés.**
Si Interstice fournit de l'**hébergement** de contenus à la demande d'utilisateurs, vérifier les obligations pertinentes DSA : notification et action art. 16, motivation de certaines décisions de restriction art. 17. S'il est une **plateforme en ligne** diffusant au public des informations à la demande des utilisateurs, étudier en plus art. 20 sur la réclamation interne et ses exceptions selon notamment le statut micro/petite entreprise. La qualification ne découle pas automatiquement de l'utilisation de GitHub, Supabase ou d'une page statique. Faire qualifier le service avant d'en déduire un dispositif impératif.

**B6 — BLOQUANT CONDITIONNEL : import ou mutualisation de données et contacts sans droits suffisants.**
L'import doit respecter le droit d'auteur sur les textes/images, le droit des bases, les licences, l'attribution et le RGPD. Une licence ouverte ne dispense pas de supprimer les coordonnées privées non publiables. Le partage de la base entre acteurs doit identifier qui conserve le pouvoir sur les copies, et les règles de sortie. Ne jamais publier un fichier de contacts « exporté » en invoquant le droit à la portabilité d'un utilisateur.

**B7 — BLOQUANT CONDITIONNEL : site présenté comme organisateur, garant ou assureur de rencontres qu'il ne porte pas.**
La simple indexation ne signifie pas automatiquement que la plateforme organise les événements ; elle n'efface toutefois pas ses propres responsabilités éditoriales, numériques ou contractuelles. Avant réservations, paiements, accès à des lieux, prêts dangereux ou prise en charge de mineurs, qualifier l'organisateur réel et les obligations applicables. Pour un lancement léger, préférer une information vérifiable et un lien officiel.

**Priorité de décision :** B1–B4 doivent être résolus avant ouverture d'une carte comportant des contributions de personnes ; B5–B7 dépendent du périmètre technique et des flux choisis. Ce sont des **recommandations de jalons**, pas une liste d'« obligations légales textuellement appelées B1–B7 ».

### III. Contrôles d'acceptation transmis aux ateliers (non exécutés dans cette étude)

| Test | Résultat attendu | Preuve requise |
|---|---|---|
| Carte par commune sans permission de géolocalisation | Consultation et recherche utilisables ; aucune permission obligatoire | Démonstration navigateur et application |
| Un domicile saisi dans un brouillon | Aucun point, donnée source ou métadonnée précise dans la réponse anonyme | Réponse API, export et cache analysés avec jeu fictif |
| Une initiative revendique une fiche tiers | Accès proportionné aux champs déclaratifs seulement, pas aux contributions privées | Test d'autorisations avec comptes fictifs |
| Un membre critique la charte | Aucune disparition automatique de fiche ou de contribution | Scénario de modération contradictoire |
| Une personne demande retrait de son téléphone | Traitement effectif du numéro, y compris API/exports contrôlés ; motifs de rétention éventuelle documentés | Test de correction/suppression et journal restreint |
| Une personne demande « mes données » | Droit d'accès RGPD traité ; portabilité seulement si les conditions légales sont réunies ; aucun export abusif de tiers | Simulation de demande droits RGPD |
| Une initiative quitte Interstice | Export autorisé de ses champs et sources réutilisables, compte et habilitation révoqués ; continuité hors plateforme | Démonstration export/import sans contacts privés |
| Un financeur demande d'être prioritaire sur la carte | Aucune priorité automatique ou classement caché ; financement et contenu promotionnel clairement identifiés | Revue de critères et du code d'affichage |
| Deux initiatives coorganisent une rencontre | Organisateur(s) réel(s) identifiable(s), description non trompeuse, pas de garantie automatique | Fiche d'événement de démonstration |
| Un recours vise le modérateur initial | Possibilité de récusation, autre personne ou recours externe pertinent ; pas de diffusion des données sensibles | Simulation de contestation et traces limitées |

**Conditions de test :** utiliser seulement des jeux fictifs et des comptes techniques autorisés ; ne pas effectuer de faux signalements sur des personnes ou lieux réels ; ne pas lire de dossiers privés en production pour tester l'interface.

### IV. Financement, données et gouvernance : trois clauses à soumettre à la discussion

**Option G1 — Autorité sur les données :** « L'initiative dispose d'un pouvoir de proposition et de correction sur les informations qu'elle fournit, mais la qualification du responsable de traitement résulte du RGPD et des rôles réels. Les coordonnées de tiers et données confidentielles ne sont ni appropriables, ni redistribuables par une majorité politique. »

**Option G2 — Indépendance financière :** « Une contribution financière, un don ou une prestation technique ne crée aucun veto, droit de modération particulier ou rang privilégié dans les résultats. Les obligations contractuelles licites des financeurs restent vérifiées ; les conflits d'intérêts sont rendus contrôlables, sans diffusion des données nominatives des bénéficiaires. »

**Option G3 — Sortie réelle :** « Les personnes et initiatives conservent la possibilité de poursuivre leur action sans Interstice, d'obtenir l'examen de leurs droits RGPD et de réutiliser les données dont elles disposent licitement. Le réseau ne retient pas des contacts privés ou des contributions non cessibles pour sanctionner le départ. »

Ces clauses sont des **propositions de gouvernance** ; elles ne modifient ni les droits statutaires d'une association encore hypothétique, ni la base légale d'un traitement.

### V. Vérifications, hypothèses et limites

**Faits documentaires vérifiés dans cette passe :**
- Les fichiers du Penseur datés du 30 octobre existent dans `coordination/` et `coordination/transmissions/`.
- Les deux livrables juridiques initiaux et la transmission du Juriste sont présents dans le dépôt et n'ont pas été réécrits.
- Le site existant comporte propositions et Wiki ; les protections historiques du backend ont été décrites par un audit antérieur. **Le déploiement d'une carte, le niveau de sécurité d'un futur schéma et l'identité d'un responsable de traitement ne sont pas établis par ces éléments.**
- Sources officielles CNIL, EUR-Lex et Service-Public examinées sur leurs principes applicables ; leur application exacte dépend des faits et de la structure.

**Propositions encore à examiner :** plateforme sans classement de popularité, participation hors ligne, parcours de besoins sans seuil de soutien, critères d'accueil, conventions de coopération, financement diversifié, mesure non intrusive de la réussite.

**Incertitudes non closes :** association porteuse ou autres personnes morales, gouvernance des données, régimes de responsabilité conjointe ou distincte, traitements exacts, éventuelles AIPD, qualification DSA, sources géographiques/imports, assurances sur événements réellement organisés, statut des financeurs.

### VI. Sources juridiques principales

1. CNIL, rôles du responsable et sous-traitant : https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role
2. CNIL, RGPD chapitre IV, articles 24–28 et 32 : https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4
3. CNIL, géolocalisation et applications : https://www.cnil.fr/fr/geolocalisation-applications-mobiles-quelles-regles
4. CNIL, portabilité, portée et droits des tiers : https://www.cnil.fr/fr/comprendre-mes-droits/le-droit-la-portabilite-obtenir-et-reutiliser-une-copie-de-vos-donnees
5. EUR-Lex, règlement (UE) 2022/2065 (DSA), art. 16–20 et exceptions : https://eur-lex.europa.eu/eli/reg/2022/2065/oj/fra
6. Service-Public, subventions aux associations : https://www.service-public.gouv.fr/particuliers/vosdroits/F3180
7. Service-Public, dons et obligations selon leurs montants et régimes : https://www.service-public.gouv.fr/particuliers/vosdroits/F2722

**Conclusion :** rendre la coordination utile mais réversible : pas d'identité ou de lieu sensible révélé par défaut ; pas de droit politique du financeur ou de l'administrateur ; pas d'export des contacts privés ; pas de recours fictif. Les quatre fonctions de la carte ne deviennent pas des obligations de livraison avant que leurs risques soient maîtrisés.
---

## VII. Vérification ciblée du prototype PR #41 — 30 octobre 2026

**Objet de la passe :** répondre aux blocages B2, B3, B4 et B6 sans réexaminer l'audit Supabase historique ni modifier la branche de la Développeuse.

**État réel de la PR :** [PR #41](https://github.com/zoutiFrutti/Interstice/pull/41), toujours ouverte en brouillon et non fusionnée lors du contrôle ; dernier HEAD relevé `beb832d31665bdeef05755c47ccaf2c7688b5c8b`. Lecture des fichiers de sa branche `feat/initiatives-decouverte-mobile-2026-10-30` : `decouvrir-initiatives.html`, `initiatives-app.mjs`, `initiatives-core.mjs`, `initiatives-data.mjs`, `tests/initiatives-core.test.mjs`.

**Contrôle statique effectivement exécuté sur ces cinq fichiers (12 assertions) :** 10 propriétés attendues observées (bandeau explicitement fictif, zéro appel `fetch` ou `createClient` dans le module de l'application, absence de GPS dans ce module, pas de `localStorage` / `sessionStorage`, recherche manuelle par commune, filtrage par besoin/ressource, export limité aux fiches de simulation, liste blanche sans champs de contact, données de démonstration sans adresse ni coordonnées, présence de tests Node). Les deux assertions restantes sont **négatives parce que hors périmètre de la démo** : aucun canal de correction/recours dans `decouvrir-initiatives.html`, aucun backend réel connecté dans `initiatives-app.mjs`. Ce sont des constats **statiques et ciblés**, pas un audit dynamique, une preuve d'absence de fuite de toute la page ni un test de lecture d'écran.

**Caveat sur CI :** une transmission Développeuse annonce **15 tests réussis** sur un commit antérieur `8ff4755568fb2660027b907f44a22a28dfa701b7` avec lien vers le [run GitHub Actions](https://github.com/zoutiFrutti/Interstice/actions/runs/41047101065). Je n'ai **pas** reproduit cette exécution localement, et ce résultat ne prouve pas que le dernier HEAD possède une CI réussie. Sur la branche consultée, le fichier de tests contient actuellement **20 déclarations `test("...")`**. La réussite de ces vingt tests, les essais sur téléphone, lecteur d'écran, les parcours d'alerte et les appels réels à une API demeurent **non attestés ici**.

**Comparaison avec les critères Anarchitecte A01–A15 :**
- **Étroitement démontrables par inspection :** A03 (filtrage territoire et catégorie pour les données fictives), A05 (recherche manuelle dans la démo sans GPS), une partie A10 (export de démonstration par liste blanche), une partie A12 (attributs et libellés dans le code, sans preuve d'accessibilité effective).
- **Non couverts par la PR** : A01–A02 (publication d'un besoin réel), A04 (carte interactive), A06 (consentement à la mise en relation), A07 (rencontre hors plateforme), A08–A09 (arbitrage ressources et recours), A11 (résilience d'un enregistrement réseau), A13 (statuts déclarée/documentée/validée sur vraies fiches), A14 (parité site/app sur vrai backend), A15 (sortie avec données réelles). Leur absence ne constitue pas un échec du prototype fictif.
- **Test de droit complémentaire à ajouter lors de la future intégration** : vérifier par comptes fictifs que l'initiative revendiquant une fiche ne peut pas lire les commentaires privés ou les coordonnées d'une autre personne, ni effacer des objections légalement conservables.

**Conclusion de cette passe :** **aucune objection juridique à conserver la PR comme démonstration fictive en brouillon** sur la seule base des fichiers inspectés. **Aucune autorisation** de fusion, de publication de fiches réelles ou de mise en relation n'en découle. Le futur adaptateur HTTP doit satisfaire B1–B4.

