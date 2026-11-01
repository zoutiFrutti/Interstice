# La Juriste · CYCLE 8 : matrice de risques et corrections minimales
**1er novembre 2026, candidate non adoptée.** Contrôles documentaires et lectures seules. Ne constitue pas une consultation juridique individualisée.

## 1. Versions et adoption
- PR #58 HEAD `79baeb8448652e855f411b5adccacbb6f42cb25f` : Manifeste V2.6 blob `8aa342bc7b45dc6736499eb363c6c895c3bc3621`, Charte éditoriale V0.1 blob `57b9a8bd9db6280d6a2c753082310c25b0ea32ec`.
- PR #62 HEAD `41f5c11bef690ca473f23b6674930dc3c7a344b3` : Charte communs V0.9 blob `aa3e38a21e76890072ef1f6a57863c55ce7d2a2b`.
- PR #65 HEAD `2251be00f50a96233d7a0289fe32ee216d2f7e09` : avis cycle 7 et transmission.
Les trois documents sont des **candidats**, sans adoption collective ni identité personnelle en leur rédaction. L'approbation des 14 modifications V2.6 n'établit pas l'adoption individuelle des documents intégraux. Aucun droit particulier des personnes à l'initiative du projet à représenter des tiers. L'article 48 décrit précisément une initiative individuelle, les tâches IA sans mandat, une organisation future seulement éventuelle, des engagements explicites et un transfert ni automatique ni rétroactif des ressources. **Correction minimale candidate de lecture** : attacher à toute édition de la V0.9 une note « les procédures de vote, de révocation et de recours ne sont pas actuellement instituées » ; ne pas promettre de canal de plainte indépendant non existant.

## 2. Matrice P0 opérationnelle
| Risque | Niveau | Résultat vérifié le 01/11/2026 | Correctif candidat et preuve de clôture |
|---|---|---|---|
| Collectes serveur malgré la suspension du front | P0 OUVERT | `submit-proposal` ACTIVE v2 `verify_jwt=false` ; `submit-resource` ACTIVE v1 ; `github-wiki-ingest` ACTIVE v5 ; `submit_wiki_article` SECURITY DEFINER exécutable par authenticated | Définir les chemins réellement concernés, mécanisme de refus serveur réversible, jeux de tests négatifs avec non-écriture en environnement sûr ; ne jamais fermer un service d'ingestion sans examiner ses effets |
| Permission RLS et fonctions | P0 OUVERT | Security advisors : 4 tables RLS sans politique (INFO), 5 fonctions SECURITY DEFINER appelables par authenticated (WARN) | Auditer code, grants, rôle, matrice anon/auth/owner/modérateur, vues et tests d'isolation sans exposer de données ; un WARN n'est pas automatiquement une faille démontrée |
| Présence de soumissions | Vérification ponctuelle close | 0 dans `public.proposals`, 0 dans `public.wiki_article_submissions`, 0 dans `public.resource_submissions` | Comptage agrégé uniquement ; ne dit rien d'Auth, logs, sauvegardes, autres schémas |
| RGPD, finalités, conservation | P0 OUVERT | Information et conservation effectives par traitement non démontrées | Inventaire réel par finalité, base légale, catégories et destinataires, durées ou critères, responsable, sous-traitants, transferts, exercice et suivi des droits ; RGPD art.5,6,9,12–22,28,32 |
| LCEN et hébergement | P0 OUVERT | Identité et qualité de l'éditeur, directeur de publication et fournisseurs d'hébergement non établies dans un dossier opposable | Identifier responsabilité effective, statut professionnel/non-professionnel, contenu exigé par LCEN art.1-1. Pour édition non professionnelle, vérifier option d'anonymat public et communication des données réelles à l'hébergeur ; ne jamais publier une adresse personnelle sans analyse du régime |
| Recours et rectification | P0 OUVERT | Aucune voie privée testée et documentée dans ce contrôle | Canal réellement administré et testé, information de la personne, droits RGPD distincts du droit de réponse LCEN, traçabilité confidentielle ; ne pas diriger les plaintes sensibles vers issues GitHub |
| Adoption, gouvernance future | Non constituée | Pas d'assemblée humaine ni de commission | Décision individuelle datée sur SHA ; aucune constitution collective présumée ; traiter recours et mandat futurs comme hypothèses |

## 3. Registre de rédaction, périmètre et identifiants
Source de coordination : `coordination/cycle3/REGISTRE_DECISIONS_EN_ATTENTE_2026-10-31.json` blob `aa718d5d207169b35bdab4855aecc8985877976d` sur `coordination/relieur-pilote-10-passes-20261030`. Cette source recensait **15 À CORRIGER et 5 BLOQUÉS**. Les statuts sont ceux de ce registre : il faut vérifier le SHA des textes ayant évolué après lui avant d'attribuer le blocage à la version courante.
### 15 À CORRIGER
| ID de fichier | SHA registre | Réserve réellement signalée |
|---|---|---|
| `ARCH-005_LOT_MAXI_CANDIDAT.md` | `ea428cd1bd4bae84a3b8dca899f26af2dd8aa1f1` | Louvre : règlements 2 avril / 3 mai et publication ultérieure séparés ; mise en œuvre non prouvée. |
| `ASSO-007_LOT_MAXI_CANDIDAT.md` | `69feddc9ca917567e8a0cba16f7689e63b912346` | Comparaison courte/longue : 13/14 avril, LY22, Desprez/Ringard, paiements. La longue reste intacte. |
| `COL-003_LOT_MAXI_CANDIDAT.md` | `49acae12b8085a229ba8b6fd22a6bbe2f8b45838` | Club Saint-Ambroise ≠ journal ; pas de ratio femmes/hommes, PH22310 ≠ scène de club. |
| `wiki-association-collegiale.html` | `a88b58162bfb3c4c3f24556dbeba123da5f48294` | Loi 1901, droit local et responsabilités : validation Juriste nécessaire. |
| `wiki-autonomie-materielle-savoir-faire.html` | `55b98d7e9615f30703b3354c113909158d7a3ab5` | Lien interne mort réellement corrigé ; sécurités techniques à examiner. |
| `wiki-capitalisme-classes-travail.html` | `ccb1808b25252049d4cdf9cd474ec96eb7fddc90` | Unités, dates, care, travail migrant et statistiques à recouper. |
| `wiki-culture-creation-acces-art.html` | `fdc3bd5c936605b5a420661591fee7a61432a3c7` | Droits professionnels, usages, financement et sources spécifiques. |
| `wiki-ecologie-sociale-environnement.html` | `99f9edba03584c8be3d659a753fae31de4fbe7b3` | Historique mondial, conservation coloniale et étude alimentaire corrigés ; bibliographie détaillée manque. |
| `wiki-egalite-fiches.html` | `3adc6d7ba610f2bbdf8c9c98453d9c8aeca4b36c` | Glossaire déjà présent ; terminologie spécialisée et sources à relire. |
| `wiki-egalite-genres-inclusivite.html` | `91ab8c36b84660110dcc68201834a891823bc177` | Carte accessible au clavier et sans JavaScript : tests à réaliser. |
| `wiki-financements-culture-spectacle.html` | `3018a7c430bea6bdc75b63f1468afa2935c9be63` | Répertoire documentaire, pas guichets ouverts garantis ; calendriers à contrôler. |
| `wiki-handicap-validisme-neurodiversite.html` | `a097d59238d2263e71363cad58131490f84f1089` | Autodétermination, démarches et non-divulgation du diagnostic. |
| `wiki-justice-prisons-abolitionnisme.html` | `928ac4bc95b2aec7548cdbacd52cb75ce03fc4cc` | Statistiques carcérales et recours datés, critiques abolitionnistes attribuées. |
| `wiki-liberte-numerique-ia-surveillance.html` | `68437e9290bfcc35bbcaca4a804867d2c4768ccc` | Sobriété d'IA distribuée = hypothèse à mesurer, pas résultat démontré. |
| `wiki-patriarcat-histoire-mecanismes.html` | `2363844fdb24cbe42711e87100ca3241a306cb95` | Théories d'origine discutées, statistiques et violences à contextualiser. |
### 5 BLOQUÉS
| ID de fichier | SHA registre | Réserve réellement signalée |
|---|---|---|
| `wiki-education-enfance-protection.html` | `ff4a1b2cf13832dfc1050ce85d1b0d359c9f5e8a` | Protection des mineurs et procédures sensibles : avis spécialisé requis. |
| `wiki-frontieres-migrations-colonialisme.html` | `058e3629b172d88461a6d394c35809582739b6a6` | Asile, notifications et délais variables ; revue Juriste indispensable. |
| `wiki-logement-habitat-droit-ville.html` | `6a10c4a53d42debfd06526dd962cdc2fe502bd0a` | Différences commandement payer/quitter, DALO/DAHO, avis juridique requis. |
| `wiki-police-deces-memoire.html` | `f0dda721586ac4c5e76400b1b1ecbeba714cf684` | Relevés et décisions, réputation, confidentialité et rectification à assurer. |
| `wiki-sante-psychiatrie-autonomie-soins.html` | `a7e026c3a66fd9d97a695db3bade1e86a89ff7ae` | Droits de santé et soins non consentis : avis sanitaire/juridique requis. |

## 4. Corrections minimales propres aux domaines sensibles
- **Santé/psychiatrie** : dater les textes applicables à consentement, hospitalisation et recours ; séparer faits médicaux, droits, témoignages et opinions. Supprimer les promesses universelles de délai ou de résultat et éviter un avis individualisé. Pas de données de patients.
- **Enfance** : distinguer approches éducatives et obligations légales effectives de protection, traiter les identités et témoignages des mineurs avec précaution renforcée, ne pas publier de consignes de signalement non vérifiées.
- **Migrations** : dates, territoire, procédure, autorité et délais réellement applicables aux catégories concernées ; éviter une fiche qui serait perçue comme une représentation ou une consultation individuelle.
- **Manifestations** : distinguer déclaration préalable, arrêté d'interdiction, recours devant le juge, pratique policière et revendications. Une annonce militante n'est ni un arrêté, ni un jugement ; vérifier leur texte et leur date.
- **Logement** : distinguer commandement, procédure judiciaire, expulsion, DALO/DAHO et effets des décisions ; aucune instruction pratique à risque sans sources actuelles et réserves explicites.
- **Police/décès** : attribuer exactement constats, récits, décisions, enquêtes et contestations ; ne pas déduire une culpabilité d'une mise en cause, préserver vie privée et droit de rectification.
**Principe :** les opinions contradictoires ou contestations politiques motivées ne créent pas un motif de blocage autonome. Corriger le passage faux ou dommageable, pas censurer automatiquement l'ensemble.

## 5. Œuvres, archives, images, témoins
| Matériau | Contrôle exigé | Conséquence |
|---|---|---|
| Document historique | Auteur, date, durée des droits, édition et provenance | Citation sourcée possible sous conditions ; copie intégrale à examiner |
| Numérisation contemporaine, photo | Statut du document et droits éventuels du cliché, institution, contrat et données | Aucune « libre réutilisation » déduite de la consultation |
| Témoignage vivant ou données sensibles | Information, base juridique, confidentialité, finalité, possibilité d'exercice des droits | Pas d'import nominatif par défaut |
| Vidéo/audio/traduction | Droits des créateurs et interprètes, supports, éventuels traceurs tiers | Autorisation/licence ou exception justifiée avant exploitation |
| Initiative territoriale | Documentée ≠ partenaire ≠ représentée | Référence critique possible selon droit ; logo/annonce de partenariat exige accord réel |

## 6. Décisions humaines et limites
Décider exactement de l'adoption individuelle des textes avec SHA et portée ; identifier l'éditeur réel, les hébergeurs, le directeur de publication quand applicable ; déterminer le responsable de traitement, finalités et durées ; décider la suspension/réouverture du serveur puis autoriser un protocole de test réversible ; ouvrir et tester un canal confidentiel ; sélectionner les médias réels et autorisations ; arbitrer les vingt textes sur leur version actualisée. Aucune réalisation de ces décisions n'est présumée.

**Sources primaires :** [LCEN art.1-1, vigueur depuis 23/05/2024](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049568614/2026-08-31) ; [loi 1901](https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069570) ; [RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra) ; [CPI](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069414) ; [Code civil art.9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419288) ; [Supabase sécurité API](https://supabase.com/docs/guides/api/securing-your-api).
**Aucune fusion, publication, serveur muté ou adoption réalisée.**