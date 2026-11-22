# C03-GRA-03 — Contrat visuel V2 candidat
**Rôle :** La Graphiste. **Émettrice :** La Relieuse. **Date :** 2026-11-03. **Priorité :** P1. **Statut :** proposition non publique, non validée techniquement.

## Invariants
- Logos officiels `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg` : sources R6 immuables. Aucun recadrage destructif, recoloration ou remplacement.
- La Faille noire demeure le projet fondateur ; Interstice est le site. L'entrée peut présenter cette filiation avec deux noms et deux logos distincts, sans suggérer une fusion des identités.
- Le manifeste V2.5 `manifeste-v2-5.html` et l'archive `manifeste.html` restent accessibles par des liens HTML visibles depuis l'entrée, chaque porte et les vues Parcours.
- L'image SVG reste décorative ou porteuse d'une représentation accessible ; les cibles sont un calque de navigation indépendant avec noms explicites, focus et alternative HTML équivalente.

## Architecture d'écran proposée
1. **Entrée :** identité La Faille noire → Interstice, bouton/lien « Explorer Interstice », accès direct aux quatre portes et aux manifestes ; pas de zoom obligatoire.
2. **Quatre portes, ni cinq ni onze :** Encyclopédie (`encyclopedie`), Médiathèque (`mediatheque`), Carte (`carte`), Entraide (`entraide`). Leurs repères graphiques sont distincts des nœuds décoratifs du symbole. Aucun placement définitif de cibles avant tests de superposition.
3. **Sept Parcours transversaux :** `PAR-001` à `PAR-007` dans un index distinct, accessibles depuis plusieurs portes. Un Parcours n'est ni une cinquième porte ni une branche historique automatiquement attestée.
4. **Étapes :** titre, contexte, sources, état de validation, liens de suite/bifurcation/retour. Les relations incertaines sont signalées ; aucun contenu bloqué n'est affiché comme validé.

## Continuité et retour
- Liens historiques `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html` et `parcours.html#entraide` préservés ; fragments R6 adaptés, sans redirection sauvage.
- Retour à l'étape précédente, au Parcours, à la porte d'origine et à la vue complète. Bouton Retour navigateur et lien profond fonctionnels après rechargement.
- Conserver `getPublicResources()` fermé : le registre WORK ne vaut pas autorisation de publication.

## Frontières de responsabilité
La Graphiste définit hiérarchie, calques, états visuels et contrôles de fidélité. La Développeuse décide de l'implémentation des états et événements et prouve l'accessibilité sur navigateur. La Relieuse arbitre dépendances ; Zout autorise séparément intégration publique et publication. Aucun écran V2 intégré par ce document.

**Sources vérifiées :** PR #161 HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6` : `coordination/v2/work-c02-01/{lib/catalogue.mjs,lib/navigation-plan.mjs,schema/v2.schema.json,04_CONTRAT_NAVIGATION.md,06_VERIFICATIONS.md}` ; R6 `assets/faille-navigation.js` et `design-system/faille-navigation-interactive.html` ; contrat C03 PR #132 candidat.