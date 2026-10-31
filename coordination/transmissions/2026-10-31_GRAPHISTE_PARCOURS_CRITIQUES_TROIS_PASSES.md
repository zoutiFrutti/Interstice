# LA FAILLE NOIRE × INTERSTICE — La Graphiste
## Parcours critiques : trois passes de création et de contrôle
**31 octobre 2026 · CANDIDAT NON PUBLIÉ · PR #50 utilisée comme base (SHA 2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb)**

### Sources et portée
Transmission de La Penseuse : `coordination/transmissions/2026-10-31_PENSEUSE_CYCLE2_QUATRE_PASSES_TROIS_PARCOURS_CRITIQUES.md` (main, blob f4c7725d62dd340cf69f7e7f825338c9be323265). Wiki existant : `wiki-ecologie-sociale-environnement.html`, `wiki-decision-collective.html`, `wiki-capitalisme-classes-travail.html`, pages politiques connexes. Aucune nouvelle source scientifique prétendue relue par La Graphiste ; zéro graphique chiffré et aucune image documentaire.

### Passe 1 — Gabarit commun PR #50
Extension CSS autonome `assets/parcours-critiques.css`, scopée à `.interstice-fiche.parcours-critique` ; réemploie `style.css`, `assets/fiche-design-system.css` et `assets/fiche-premiere-edition.css`, charte noir #101014/rouge #c5212c/ivoire #e9e5db. Une page de maquette `design-system/maquette-parcours-critiques-2026-10-31.html`, sans navigation depuis le site, sans compte, JS, API, formulaire, image ou backend. Un H1 ; 3 sections distinctes ; ordre commun : **question → affirmation qualifiée → sources et leur niveau → objection → incertitude → exercice facultatif → retour à l'article**. Les exercices utilisent `details/summary` natifs, sans sauvegarde ni jugement automatique.

### Passe 2 — Trois variantes sur contenus documentaires réels
- Écologie/alimentation : dossier GIEC AR6 WGIII chapitre 12, Scarborough 2023, page écologique Wiki. Affirmation empirique à préciser, objection sur autonomie et conditions sociales, aucune statistique reprise. Exercice de classification fait/prescription/proposition.
- Démocratie/pouvoir : `wiki-decision-collective.html`, article institutions et Jo Freeman. Distinguer procédure de décision, participation effective et recours ; scénario fictif de local partagé, sans représentation de vraies personnes.
- Coopératives/travail/communs : `wiki-capitalisme-classes-travail.html`, page lecture croisée et autogestion ; propriétaire/utilisateur/entretien/décision. La Marmite mentionnée uniquement avec la réserve « statuts ≠ exécution attestée » : aucune archive primaire nouvelle supposée consultée.
- Toutes les références sont des **liens vers articles existants ou sources citées par La Penseuse**, pas des partenariats, ni des preuves nouvelles. Les interprétations et objections n'ont pas la même étiquette que les faits. Aucune évaluation scientifique automatique.

### Passe 3 — Vérifications
Test dédié `tests/parcours-critiques-graphiste-2026-10-31.test.mjs`, workflow dédié `.github/workflows/parcours-critiques-graphiste-2026-10-31.yml` sur branche candidate. Les contrôles programmés et **à attester par les logs** : Chromium 320/390/1280, un H1, absence de scroll horizontal et de ressources extérieures, police principale ≥18px, ancres valides, navigation clavier Entrée, activation `details`, zoom du texte via racine CSS à 200 % (simulation), 3 captures et PDF A4. **Ne pas déclarer succès avant conclusion de la CI**.

Le CSS contient `prefers-reduced-motion`, focus visible, version `@media print` ; **présence du CSS ≠ vérification de l'impression réelle**. Contraste des fonds/texte principal à contrôler par navigateur ; audit de tous les états/contrastes, lecteur d'écran réel, TalkBack ou VoiceOver, zoom navigateur/OS à 400 %, inspection humaine du PDF, consultation avec données réelles d'atelier et tests de compréhension pédagogique **non effectués**. Un `noindex` ne protège pas les brouillons privés : cette maquette n'en contient pas.

### Transmission demandée
- **La Développeuse :** réutiliser le CSS et les sections dans les pages existantes seulement après visa ; ne pas créer site parallèle ni route publique non décidée ; ne pas remplacer les articles de La Lectrice.
- **L'Anarchitecte :** examiner ordre HTML, accès sans compte, liens vers articles, expansion native, sémantique source et intégration PR #50 sans nouveau modèle backend ; traiter l'accessibilité mobile / clavier / impression.
- **La Relieuse :** reprendre exactement les trois plans de la Penseuse, obtenir contre-lecture de La Lectrice et Médiathèque sur les formulations et sources, définir le statut éditorial et le visa de Zout par version ; la réussite d'une CI n'accorde aucun visa.

**Rien fusionné, rien publié, aucune image inventée, aucune adoption collective.** Une transmission GitHub ne prouve pas que les conversations distinctes ont reçu et lu le message.
