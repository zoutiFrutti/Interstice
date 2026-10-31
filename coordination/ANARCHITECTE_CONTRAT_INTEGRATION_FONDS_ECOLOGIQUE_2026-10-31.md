# L’Anarchitecte — Contrat d’intégration du fonds écologique
Date : 31 octobre 2026. **Candidat documentaire, aucune publication ni adoption collective.**
Destinataires : La Développeuse, La Relieuse. Référence examinée : `coordination/transmissions/2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md` et ses objections de la Lectrice.

## Besoin éditorial constaté avant le choix technique
Trois axes **candidats**, non trois nouvelles sections publiques acquises :
- **ECO-A** : histoire des luttes écologiques, environnement et justice.
- **ECO-B** : écologie sociale, communs, terres et autonomie territoriale.
- **ECO-C** : végétarisme, véganisme, éthique animale et impacts environnementaux.

Ne pas fusionner écologie scientifique, mouvement politique, conservation et véganisme ; distinguer récit historique, résultats scientifiques, revendication, interprétation. Inclure les luttes ouvrières, paysannes, autochtones, anticoloniales et les sources hors d'Europe ; ne pas essentialiser femmes/nature. Garder les contradicteurs, les incertitudes et les limites de lecture. Le dossier Archiviste atteste déjà FN-002 (Kropotkine) comme croisement et signale une absence **non démontrée exhaustive** de fiches spécifiques Reclus : **rechercher et réutiliser avant création**.

## Intégration au site actuel
Fichiers contrôlés sur `main` : `wiki.html` (six familles de connaissances, liens vers des articles statiques), `bibliotheque.html` (six catégories et recherche), `ressources-data.js` (identifiants numériques existants, notamment des références écologiques), `ressources.js` (filtrage par catégorie et texte, formulaires et lecture API réels).

1. **Wiki** : futurs axes affichés comme **dossiers transversaux** dans les six familles actuelles, pas comme trois nouveaux sites ni une septième taxonomie concurrente. Index candidat `wiki-ecologie.html` non créé/non lié publiquement. Fiches candidates : chronologie, biographies, luttes, œuvres, méthode scientifique, contradictions et sources. Les références conservent leurs URLs existantes.
2. **Médiathèque** : enrichir les ressources déjà indexées avec des **mots-clés locaux** `ecologie`, `communs`, `alimentation`, sans remplacer les catégories `Comprendre/Faire/... `, ni réattribuer des numéros FN. Catalogue FN et `ressources-data.js` ne doivent pas être fusionnés silencieusement : vérifier les identifiants avant correspondance.
3. **Pas de branche de lecture privée branchée sur Supabase** : les candidats sont des documents internes versionnés dans Git ; seules les fiches validées manuellement et intégrées via un changement HTML explicite deviendraient visibles. Ne pas ajouter de formulaires ni de requêtes réseau.

## Contrat minimal d'une fiche (candidat de métadonnées, aucun modèle de base)

```json
{
  "id": "ECO-CANDIDAT-LOCAL-001",
  "kind": "chronologie",
  "axes": ["ECO-A", "ECO-B"],
  "title": "Titre de travail",
  "editorial_status": "brouillon",
  "version": "0.1",
  "checked_at": null,
  "scope": "France et autres territoires à préciser",
  "evidence_level": "notice_seulement",
  "claims": [{"id":"c1","type":"fait|interpretation|proposition","source_ids": ["s1"],"limits":"Vérification à compléter"}],
  "sources": [{"id":"s1","url":"https://example.invalid/source","edition":null,"consulted_at":null,"read_level":"notice","rights":"à vérifier"}],
  "contradictions": [],
  "related_ids": ["FN-002"],
  "images": []
}
```

L'identifiant `ECO-CANDIDAT-LOCAL-001` est **illustratif et non attribué**. Les vrais IDs sont repris des catalogues existants ou accordés après dédoublonnage par Médiathèque/Relieuse. `kind` admis : `chronologie|biographie|lutte|oeuvre|analyse|source`. `related_ids` relie seulement des IDs existants ou explicitement `non_resolus` ; jamais un lien HTML cassé. `editorial_status` : `brouillon|sources_a_verifier|lecture_critique|relecture_juridique|candidat_editorial|publie|conteste|retire`. `checked_at:null` se rend comme « Sources non encore vérifiées », pas comme une date inventée. Chaque chiffre, date et citation doit relier une source précise, son degré de consultation et ses limites.

### Types de liens croisés
`chronologie -> lutte/personne/source` ; `biographie -> oeuvre/lutte/contexte` ; `lutte -> territoires/acteurs/droits/archives/contradictions` ; `oeuvre -> édition/licence/thèse/critique` ; `analyse -> méthode/données/incertitude`. Ne jamais impliquer qu'une relation documentaire est une alliance, une adhésion ou un accord réel.

### Images, citations et droits
Pour chaque média : `file_source`, `author`, `date`, `license_name`, `license_url`, `reuse_permission`, `attribution`, `alt`, `rights_checked_at`. **Aucune publication d'image si licence, ayants droit, provenance ou consentement nécessaires restent incertains.** Reclus domaine public probable pour l'œuvre originale en France, mais reproduction et transcription moderne à contrôler ; textes Carson/Bookchin/d'Eaubonne, archives photographiques et graphiques scientifiques protégés selon leur licence. Favoriser graphismes originaux sourcés plutôt que faux documents historiques. Pas de citation longue ni traduction protégée sans autorisation.

## Naviguer, lire, imprimer et consulter hors ligne
- Consultation **sans compte** et sans GPS. Une page index et fiches statiques dans `style.css`; HTML `main/article/nav`, un H1, titres hiérarchisés, liens retour Wiki/Médiathèque et sommaire d'ancres. Des fiches sans JS doivent rester pleinement lisibles.
- Mobile 320/390/1280, zoom 200 %, contraste AA, focus visible, navigation Tab/Entrée, ancres, pas de débordement. Chronologie **verticale en texte** avec dates lisibles, pas une frise horizontale obligatoire ; biographies et contradictions accessibles sans survol.
- Impression A4 : titre, statut, date de vérification, version, sources et crédits restent visibles sans couleur ; règles CSS `@media print`. Pour hors-ligne : fichier HTML+CSS/print PDF enregistré et daté, liens externes signalés comme indisponibles hors connexion. Pas de promesse de PWA/service worker fonctionnel non testé ; éviter un cache juridique/scientifique périmé.
- Test de qualité : liens internes/ancres, images et crédits, deux parcours depuis Wiki/Médiathèque, navigation clavier et lecteur d'écran, aucun POST ni ressource tierce obligatoire, impression et lecture JS désactivé.

## Conditions d'intégration et responsabilités
**Développeuse** : prototype purement statique sur branche existante, en reprenant templates HTML/CSS et liens internes, sans toucher `ressources.js` (dont les appels API et formulaires publics ne sont pas concernés par le fonds). Proposer uniquement un index candidat non lié au site public jusqu'à validation.
**Médiathèque + Biographe + Archiviste** : dédoublonner FN/BIO/ARCH, identifier éditions/archives, niveaux de lecture et statuts ; **Lectrice** : contrôler objections, biais historiques et erreurs de causalité ; **Juriste** : droits des images/communications et droits environnementaux ; **Graphiste** : mise en forme et accessibilité. **Relieuse** : garde la liste de décisions et arbitre la séquence de vérification sans présumer adoption collective.
**Seuil d'arrêt :** aucune création de fiches publiques, aucune réutilisation d'images, aucun ajout de navigation tant que contenu, preuves, droits et validation humaine ne sont pas tracés.

**Tests :** contrôles structurels d'existant et lecture de sources internes effectués ; aucun essai navigateur, hors-ligne, impression ou téléphone exécuté sur ce fonds encore inexistant. GitHub est un support de transmission, pas une preuve de lecture par les conversations destinataires.
