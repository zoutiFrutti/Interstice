# LA FAILLE NOIRE × INTERSTICE — L'Anarchitecte — CYCLE 8
**2026-11-01 · PR #51 · Contrat technique v0.2 candidat · aucun merge, publication, DDL ou changement de production.**

## Provenance vérifiée
- PR #51 tête avant travaux `d34d373ec828579e81eb1a7a8a8d7412c20121c9` ; registre éditorial PR #43 blob `f005414fc566cf020e2ac8931f4841e30ffde859`.
- Source du registre : **44 fiches Drive** (BIO 22, ASSO 8, ARCH 8, COL 2, EXP 4), **71 FN**, **24 HTML Wiki**. Premier tri des 24 : 15 A_CORRIGER, 9 BLOQUEE. États postérieurs à réconcilier, sans rétrograder des corrections vérifiées.
- Deux accords **individuels** du registre pour ARCH-002 et ARCH-007, avec **`publication_authorized:false`**, `rights_final:A_VERIFIER`, `technical_integration:EN_ATTENTE`. Ne pas les confondre avec une sortie permise.
- Candidate d'intégration `integration/premiere-edition-candidate-2026-10-31`, fichier `edition-premiere/decisions.json` relu : `authorizations: []` ; blocage de génération pour les lots. Son README décrit le double verrou de décision + empreinte, ainsi qu'une prévisualisation sous `artifacts/edition-premiere-preview` locale, non une page approuvée.
- Schéma et correspondance adjacents : `2026-11-01_ANARCHITECTE_CYCLE8_SCHEMA_DOCUMENTAIRE_V02.json` et `2026-11-01_ANARCHITECTE_CYCLE8_TABLE_CORRESPONDANCE_V02.json`. **Ces fichiers sont de conception ; ne pas les charger aveuglément dans la production.**

## 1. Contrat minimal des documents
Une seule clé logique : `corpus + stable_id` (ou chemin stable pour la page HTML historique), plus empreinte de la **version source**. Les familles Wiki et catégories Bibliothèque restent des taxonomies de navigation distinctes ; ajouter des tags transversaux non destructifs. Conserver `source_folder` comme provenance et non comme type. Incohérences préexistantes : ARCH-001 dossier COL ; EXP-001, EXP-002, EXP-004, EXP-005 dossier ASSO. Les deux paires à URL commune FN-022/048 et FN-038/057 gardent **leurs quatre IDs** jusqu'à canonisation documentée et alias réversibles.

Champs minimaux : ID, corpus, type/format, titre, version, auteur/crédits, source d'origine (URL/Drive/chemin sans exposer un original privé), degré de lecture des sources, sources primaires/secondaires, dates de consultation, droits par média/édition, faits vs interprétations, objections/contradictions, incertitudes, relations typées, état de revue, visa humain documenté, état des droits, `publication_authorized`, niveau d'adoption collective **séparé**. Une relation d'expérience n'atteste ni partenariat ni offre actuelle. Lien HTML seulement si chemin existant et contenu public autorisé ; autrement garder la relation non résolue en coordination interne.

## 2. Circuits et navigation
**Wiki** : `wiki.html` → six familles existantes → page `wiki-*.html` → passage → sources/contradictions/exercice facultatif → retour à l'ancre du passage. **Bibliothèque** : `bibliotheque.html` conserve ses ressources actuelles et son intégration `ressources-data.js`/`ressources.js` ; FN approuvées sous notices documentaires distinctes, sans copie automatique de 71 œuvres ou import Supabase. **Biographies** : relation BIO → source / organisation / époque / territoires / contradictions, jamais route BIO fictive. **Enquêtes** : ÉCL-001..004, LUT candidats, Espagne (Aragon/Catalogne/Murcie–Albacete) et zapatisme structurés comme dossiers documentaires candidats, reliés aux pages existantes après visa. Les trois parcours existants `wiki.html#ecologie`, `#democratie`, `#cooperatives` ne sont pas une validation de contenu.

## 3. Interfaces, accès, P0
Le **P0 serveur est prioritaire** aux changements de navigation qui ouvriraient une collecte. Ne pas considérer un bouton désactivé dans le navigateur comme une correction serveur.
- **À La Développeuse, vérifications P0 explicites** : état déployé de `submit-proposal` Edge Function et RPC `submit_wiki_article` ; droits `EXECUTE` et rôles (notamment `authenticated`), `SECURITY DEFINER`, `GRANT/REVOKE`, politiques RLS effectives, vues `security_invoker`, écritures et autres endpoints ; tests d'accès **autorisé/refusé** avec rôles réels et journal de retour arrière avant toute correction.
- Les écrans de modération ne doivent pas permettre d'approuver automatiquement parce qu'une fiche existe ou qu'un compte est connecté. L'outil IA ne possède **aucun rôle de modérateur humain**. Afficher identité des décisions humaines vérifiables et versions/empreintes, sans inventer de commission ni statut collectif.
- Les candidats ne doivent pas transiter dans un JSON embarqué public ni dans index de recherche, sitemap, CSS/JS, artefacts CI ou prévisualisations publiques. Un dépôt GitHub public demeure accessible par URL, même pour une branche non fusionnée ; **`noindex` n'est pas une barrière de confidentialité**. Ne pas placer de dossiers personnels sensibles ni données privées dans les branches du dépôt.
- Lecture du Wiki sans compte, sans formulaire de témoignage ni stockage de réponses aux exercices. Aucun nouvel appel serveur pour rechercher dans un corpus public statique.

## 4. Migrations strictement nécessaires
| Opération | Nature | Nécessité / état |
|---|---|---|
| Réconcilier les 44+71+24 par ID/chemin et empreinte | Documentation et mapping JSON v0.2 | **OUI, candidats de conception créés** ; aucune écriture source |
| Conserver anciens IDs, alias FN et source_folder | Transformateur documentaire réversible | **OUI à l'intégration**, aucune suppression |
| Construire une allowlist publique depuis décisions et versions autorisées | Script de compilation statique existant à réemployer | **OUI seulement après validations**, zéro entrée autorisée actuellement dans la candidate |
| Renvois, recherche locale et retour d'ancres | HTML/CSS/JS statiques du site actuel | **OUI conditionnel**, tests avant ouverture |
| Corriger lien matériel mort | Modification ponctuelle du HTML sur branche PR #51 | **FAIT** au commit `1ebefa0efa3415b423cd14b74ef4ed89e1db6b21`, pas encore preuve de présence en prod |
| Modifier schéma Supabase, créer table/service/API | DDL / backend | **NON**, aucune nécessité établie |
| Corriger permissions P0 en production | Sécurité, séparée de ce cycle | **AUDIT ET AUTORISATION PRÉALABLES**, ne jamais migrer à l'aveugle |

## 5. QA d'acceptation sans publication
Critères à tester au **SHA d'une branche assemblée** : 24 pages et cibles/ancres/retours, IDs et alias uniques, fiches approuvées seules dans HTML/JS/index, 404 et erreurs réseau, sources/date/licences/contradictions, 320/390/1280, zoom, clavier/focus, hors JS, impression, pas de requêtes de collecte non autorisées, tests RLS négatifs/positifs sur environnement sûr, audit accès des artefacts. Distinguer succès d'une CI, visa éditorial, autorisation de publier et adoption collective.
**Ce cycle ne prouve pas** l'absence de fuite dans toutes les branches GitHub ni la sécurité de Supabase en production : ces points restent ouverts.
**Décision QA actuelle : BLOQUÉ POUR MISE EN LIGNE.** Documents techniques créés seulement, pas de migration automatique.

## Passation
- **Développeuse** : évaluer champs et correspondances JSON par rapport à son générateur/contrôles existants, ne pas ajouter de nouvelle base, vérifier le P0 serveur à part et produire une matrice autorisé/refusé avec SHA / version déployée / retour arrière.
- **Relieuse** : réconcilier visas et réserves sur les versions exactes, ne pas adopter une charte ou une décision collective fictive ; préparer des lots publiables uniquement après autorisation explicite de Zout.
- **Graphiste** : préserver gabarits PR #50/#57/#63, sans faire passer les statuts d'exemple pour des autorisations.
