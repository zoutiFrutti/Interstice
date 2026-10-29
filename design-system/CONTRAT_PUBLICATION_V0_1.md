# Système de publication graphique Interstice × La Faille noire
## Contrat de collaboration V0.1 — Proposition du Graphiste à l'Anarchitecte
**Date : 29 octobre 2026 — État : proposition technique, non adoptée collectivement.**

### 1. Sources de vérité existantes
- Les logos maîtres restent `assets/logo-interstice.svg` et `assets/logo-faille-noire.svg`. La PR #22 contient les variantes contrastées et la typographie ; ne pas les redessiner.
- La méthode critique existe dans `METHODE_EDITORIALE_SOURCES.md` ; la charte de contributions dans `charte-contributions-wiki.html`.
- Le formulaire `proposer-article.html` et la revue `revue-articles-wiki.html` utilisent déjà Supabase et la table `wiki_article_submissions`. Les valeurs relevées sur le site pour son flux éditorial sont `pending`, `needs_review`, `approved`, `rejected`. Le statut `approved` ne publie **pas** automatiquement sur GitHub.
- Le prototype est la fiche existante `wiki-lecture-croisee-travail-soin-pouvoir.html`. Elle est déjà accessible publiquement comme **version de travail** ; elle n'est pas un exemple de contribution privée à rendre publique. Son contenu a été préservé à l'octet près après neutralisation des seules modifications HTML de présentation.

### 2. Responsabilités sans hiérarchie
- **Ateliers documentaires :** contenu, sources, provenance, contradictions, incertitudes, consentements et droits.
- **Graphiste / Intégrateur :** règles graphiques, accessibilité, modèles de fiches, CSS, illustrations et lisibilité ; jamais décision sur la vérité ou l'adoption.
- **Anarchitecte :** validation de la *forme des données*, rendu HTML sûr, prévisualisation, versionnement, branchement au flux de contribution et permissions serveur.
- **Revue humaine/collective :** décision éditoriale et autorisation de publication selon les procédures en vigueur ; la D.A. et le code ne se substituent pas à cette décision.

### 3. Contrat minimal proposé
Document de proposition machine : `design-system/fiche.schema.json`. Champs :
- `schema_version`, `id` (opaque), `type` (biographie, lecture, archive, article, bibliographie, tutoriel), `titre`, `resume`, `rubrique`, `langue`.
- `blocs[]` typés, au lieu d'HTML libre. Chaque bloc accepte un repère `qualification` : fait documenté, analyse, hypothèse, témoignage, proposition, à vérifier. Un bloc peut référencer `sources_ids[]`.
- `sources[]` avec identifiant, titre, contributeur/institution, date, URL si disponible, édition ou référence stable, note de provenance/limites. Les noms de personnes privées ne sont pas obligatoires.
- `contradictions[]` et `incertitudes[]` explicites. Les désaccords ne sont pas masqués par le moteur de présentation.
- `workflow` (statut éditorial + état de publication distincts), `droits` (auteur·ice ou collectif, licence/permission, restrictions médias), `revision` (numéro et historique).
- Les extensions spécifiques aux types (biographie/archives/tutoriel) font l'objet d'un complément après revue de l'Anarchitecte, pas de six schémas incompatibles.

### 4. Deux machines d'état distinctes
**Éditorial** : `draft` -> `pending` -> `needs_review` / `approved` / `rejected`. Ces valeurs sont une proposition d'interface du modèle ; la correspondance avec Supabase doit être faite par l'Anarchitecte, sans modifier le flux existant au hasard.

**Publication** : `not_published` -> `published` -> `archived`. La prévisualisation n'est **pas** un état de publication ; elle est une vue privée et non indexée d'une contribution. L'approbation éditoriale n'entraîne pas la publication. Il faut une décision/autorisations explicites supplémentaires, les droits vérifiés et une trace d'opération. Aucun bouton de preview, parseur de JSON, changement de classe CSS ou passage de test ne peut effectuer cette transition.

**Attention** : des pages historiques existantes sont déjà accessibles comme « versions de travail ». Cela ne donne aucun droit de publier automatiquement de nouvelles contributions candidates.

### 5. Composants graphiques
À partir de `assets/fiche-design-system.css` :
- **En-tête de fiche** : rubrique, genre documentaire, titre, résumé.
- **Statut accessible en texte** : « version de travail », « à relire », « vérifié » uniquement si confirmé par le système autorisé. Ne jamais coder une couleur seule comme signification.
- **Sommaire** : ancres et navigation clavier ; `aria-label` explicite.
- **Corps** : titres hiérarchisés `h1` unique, `h2` sections, `h3` sous-sections ; paragraphes lisibles, max 78 caractères environ.
- **Discussion** : distinguer faits et interprétations ; afficher les désaccords avec attribution.
- **Sources** : bibliographie lisible avec liens, provenance et dates ; ne jamais transformer une URL en citation vérifiée automatiquement.
- **Révisions et corrections** : statut, date, version, demande de correction, accès aux versions antérieures si permis.
- **Supports** : mobile (390 px et moins), ordinateur, clavier, réduit-mouvement, impression/PDF à contrôler.

### 6. Identité
Fond noir `#101014`, rouge `#C5212C`, ivoire `#E9E5DB` ; éviter l'interface intégralement noire. Barlow Condensed Bold pour les titres, Atkinson Hyperlegible Next pour les textes dans la PR #22 ; utiliser repli système sur `main` tant que #22 n'est pas fusionnée.

Les illustrations représentent des gestes de construction, réparation, transmission, création ; attention aux images et métadonnées identifiantes. Protéger aussi tatouages, lieux, voix et attributs sensibles ; les personnes qui figurent dans un document doivent avoir les droits/consentements appropriés.

### 7. Passage de relais pour l'Anarchitecte
1. Examiner ce contrat **comme proposition**, le schéma JSON et le prototype HTML avant tout branchement serveur.
2. Confirmer le mapping vers `wiki_article_submissions` et les droits réels des rôles d'auteur·ice/modération/publication (RLS et flux existants).
3. Implémenter un convertisseur de **données structurées vers HTML échappé** (pas d'HTML utilisateur injecté), une prévisualisation privée et des erreurs de conformité non destructives.
4. Garder chaque proposition à son statut d'origine ; un rendu visuel ne change ni `status`, ni la visibilité, ni les droits.
5. Faire valider par les ateliers une fiche existante, ses sources, ses contradictions et le rendu mobile avant extension.
6. Préserver versions, décisions motivées, droits d'auteur et possibilité de correction ; tests nécessaires avant publication.

### 8. Ce qui est réellement fait
Sur la branche `design/publication-graphique-unifiee-v01-2026-10-29` : CSS de fiche spécifique + mise en forme d'une **page existante** ; conservation intégrale de ses mots, liens, sources et positions politiques ; aucun script ni formule Supabase modifié. Schéma et contrat proposés, non branchés à la base. Les sorties `approved` et `published` ne sont pas activées par ce travail.

**Suite à vérifier** : tests navigateur mobile/clavier, contraste, revue de l'Anarchitecte, coordination avec PR #22, puis création d'un moteur de preview sans accès public aux candidats.
