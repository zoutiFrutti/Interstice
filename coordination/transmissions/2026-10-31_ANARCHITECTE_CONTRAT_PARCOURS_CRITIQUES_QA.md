# LA FAILLE NOIRE × INTERSTICE — L’Anarchitecte
## Contrat minimal : parcours critiques dans le Wiki existant
31 octobre 2026 · Trois passes · Sur PR #51 · NON PUBLIÉ, NON ADOPTÉ COLLECTIVEMENT.

**Référence vérifiée :** PR #51 branche `atelier/anarchitecte-contrat-editorial-20261031`, HEAD avant la mission `1f39def9cc98ef0512ba78761681447a0185c3eb`. Le registre pré-sortie de cette branche compte 44 fiches Drive, 71 notices FN et 24 pages `wiki-*.html`, sans visa humain enregistré sur cette version. PR #44 apporte des corrections éditoriales sur deux pages ; PR #36 est un audit technique, PR #41 un prototype de découverte d'initiatives fictives (autre parcours), PR #42 traite les formulaires : **aucune de ces PR ne fournit déjà un moteur de parcours critiques assemblé et approuvé.**

### Passe 1 — Où placer les parcours

Réutiliser `wiki.html` comme entrée générale, `bibliotheque.html` comme catalogue de références, et les articles thématiques comme lieux principaux de lecture. **Aucune nouvelle plateforme, application, API, table ou migration.** Le regroupement « parcours critiques » est un **mode de lecture transversal**, pas une nouvelle famille éditoriale obligatoire.

Trois parcours pilotes, uniquement après approbation des textes exacts :
1. **Écologie / alimentation** : `wiki-ecologie-sociale-environnement.html` (ancres existantes `#axe1`, `#axe3`, `#axe5`) ; renvois à `wiki-autonomie-materielle-savoir-faire.html`, `wiki-capitalisme-classes-travail.html`, notices FN contrôlées, ÉCO-001A/B/C (dossiers candidats, non pages publiées). Confronter science, histoire des luttes, expériences concrètes et objections.
2. **Démocratie / pouvoir** : `wiki-decision-collective.html`, `wiki-politique-institutions-regimes.html`, `wiki-socialismes-communismes-anarchismes-autogestion.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html` ; ne pas écraser les deux corrections de la PR #44, et ne pas présumer que leur version sur `main` est approuvée.
3. **Travail / coopératives** : `wiki-capitalisme-classes-travail.html`, `wiki-socialismes-communismes-anarchismes-autogestion.html`, `wiki-feminismes-histoire-egalite.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html` ; rattacher ASSO-008/EXP-004 et biographies seulement après validation et route publique réelle.

**Lien à ajouter à terme** : une entrée « Parcours critiques » depuis `wiki.html` vers les sections vérifiées des articles **existants**. Ajouter dans chaque article approuvé une section « Examiner cette affirmation » et un « Retour au passage » ; l'article et la Médiathèque offrent des liens « Sources », « Critiques », « Explorer un autre point de vue » par cibles réelles. Ne pas créer `parcours-critiques.html` sans besoin démontré.

### Passe 2 — Contrat de navigation utilisateur

**Trajet :** article → affirmation identifiée → sources (primaires/secondaires, niveau de consultation) → contradictions (objections sourcées et incertitudes) → exercice (non évalué) → retour à l'affirmation initiale / article.

Modèle d'élément **dans le même HTML** :
- Ancre stable par affirmation, p. ex. `id="affirmation-travail-001"`, attribuée seulement lorsque le texte et l'ID réel sont vérifiés ; ne pas reprendre des numéros FN/BIO pour des affirmations.
- `<section>` ou `<article>` avec titre, phrase vérifiable et **type** : fait vérifié, témoignage, interprétation, revendication, hypothèse.
- Sources : liste de liens attribués avec date/version/édition, niveau réel de lecture et réserves ; une notice n'est pas une œuvre lue intégralement.
- Objections : formulations distinctes, personnes concernées et principales limites ; ne pas simuler un consensus, une réfutation automatique ni une vérité définitive.
- Exercice : question ouverte telle que « Quelles données manquent pour trancher ? » ; réponses **locales et facultatives**, idéalement aucune saisie nécessaire : comparaison de deux arguments, mini-questions avec pistes affichables statiquement. Pas de score, compte, trace de réponse, suivi externe ou profil.
- Navigation : lien `href="#affirmation-travail-001"` vers l'ancre exacte ; retour au même article et, si un saut vers une référence externe est nécessaire, retour explicite vers le point de départ interne. Utiliser un lien « Retour à l'affirmation », pas `history.back()` comme seul mécanisme.
- Progression : simple sommaire « 1. Texte, 2. Sources, 3. Objections, 4. Exercice » ; les étapes sont sautables, **aucune mémorisation persistante** n'est nécessaire. Les liens doivent fonctionner si JS est désactivé et si aucun cookie n'est accepté.
- Accessibilité : sémantique `main/nav/section`, un seul H1, titres hiérarchisés, `aria-label` utile pour les blocs de navigation, focus clavier visible, liens descriptifs, pas de sens dépendant de couleurs, largeur 320/390/1280 px, zoom 200 %, impression avec sources et incertitudes conservées. Si contenu détaillé replié : `<details><summary>` utilisable sans JS ; le texte essentiel doit rester disponible en lecture simple.
- Langue claire : distinguer « source originale », « retranscription », « résumé », « opinion de l'auteur », « objection », « proposition d'Interstice ». Afficher « Édition sous responsabilité éditoriale de Zout — manifeste et charte non adoptés collectivement » quand vérifié ; ce n'est pas un visa automatique de toutes les affirmations.

**Relations minimales** : `article_path`, `claim_anchor`, `source_id/URL`, `contradiction_anchor`, `exercise_anchor`, `return_href`; aucun besoin de table de base ni d'identifiants de compte. Garder les IDs BIO/ARCH/ASSO/COL/EXP/FN stables dans la couche documentaire ; ne fournir un lien cliquable que vers une cible **publiquement approuvée et existante**.

### Passe 3 — QA de la candidate documentaire

Contrôles directs de la branche PR #51 :
- `wiki.html` : recherche via API de Wikipédia uniquement, pas de recherche du fonds interne ; les liens vers les pages thématiques existent.
- `wiki-decision-collective.html` et `wiki-lecture-croisee-travail-soin-pouvoir.html` : pages HTML présentes sur PR #51, **sans moteur de parcours critiques** ; les versions améliorées sont sur PR #44, non fusionnée à la vérification.
- Le registre de la PR #51 : 44 fiches `human_approval=A_FAIRE`, 71 FN `publication_decision=AUCUN_VISA_HUMAIN`, 24 pages `human_approval=A_FAIRE`. **Photo de cette branche**, et non preuve qu'aucune décision humaine n'a pu être prise ailleurs.
- Contrôle de routes/ancres des 24 pages déjà décrit dans l'avis QA précédent : `wiki-mutualiser-materiel.html` est absent ; aucun index public filtré, ni pages approuvées des fiches, ni recherche locale développée sur cette candidate.
- Exposition : les dossiers éditoriaux GitHub en dépôt public sont accessibles à qui connaît leur chemin ; **non indexé dans le site public ne signifie pas confidentiel**. Ne pas copier des pièces ou données personnelles dans le dépôt, scripts, index JSON, liens, prévisualisations publiques ou artefacts CI. Les brouillons techniques GitHub→Supabase et leurs `needs_review` sont **distincts** des documents autorisés pour le site.
- Le parcours ne dépend pas des composants de découverte géographique PR #41 ni des correctifs de soumission PR #42. Ne pas « réutiliser » leurs formulaires pour les réponses aux exercices ; ne pas étendre Supabase.

**Avis QA : RÉSERVE BLOQUANTE POUR LA FONCTION, NON PRÊT À PUBLIER.** On peut accepter le présent **contrat documentaire de PR #51** ; on ne peut pas prétendre avoir une candidate fonctionnelle de parcours critiques. Aucun essai navigateur, lecteur d'écran, mobile physique, navigation extérieure ni test de collecte automatisé réalisé dans cette passe.

### Critères d'acceptation futurs (SHA exact de branche d'assemblage)
1. L'article est accessible depuis le Wiki et ne perd pas ses URL/ancres existantes.
2. Le passage critique porte une ancre unique et toutes les cibles existent sur la branche.
3. Source, date, type de preuve, contradiction et réserve sont visibles ou explicitement « non documentés ».
4. Exercice libre et saut possible ; aucun POST, cookie d'application, compte, enregistrement de réponse ou score nécessaire.
5. « Retour à l'affirmation » fonctionne au clavier et sans JS.
6. Les renvois BIO/ARCH/ASSO/COL/EXP/FN pointent uniquement sur des fiches ayant une approbation explicite et un fichier public réel.
7. Aucun brouillon non approuvé dans HTML/JS/JSON, index ou sitemap publics ; recherche limitée à la liste approuvée.
8. Mobile, zoom, impression, lecteurs d'écran, clavier et contraste testés sur l'assemblage.
9. Les corrections éditoriales PR #44 priment sur une version plus ancienne issue de PR #51/du graphisme ; conflits résolus manuellement.
10. Rapport QA contenant SHA, tests effectués, preuves d'écran et distinction « autorisé éditorialement / non adopté collectivement » ; aucun merge ou déploiement sans décision de Zout.

### Transmission
**La Développeuse :** proposer uniquement les blocs HTML/ancres et contrôles de liens/QA nécessaires sur une branche candidate, après réception des textes et visas. PR #36 = audit, #41 = découverte d'initiatives, #42 = formulaires : ne pas y greffer un nouveau moteur critique sans arbitrage.  
**La Relieuse :** fournir les lots de passages réels validés (texte exact, sources, contradictions, exercice, version/SHA, droits, accord explicite Zout). Les trois pilotes ne sont que des destinations proposées pour le moment.  
**La Graphiste :** réutiliser les CSS/gabarits PR #47/#50 et l'identité existante, sans faire croire à une certification ou à une progression obligatoire.

**Aucune fusion, aucun nouveau backend, aucune publication, aucune validation collective.**
