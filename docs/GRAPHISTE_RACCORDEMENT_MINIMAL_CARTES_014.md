# Graphiste 014 : raccordement minimal de la cartographie

La PR #41 a déjà importé le CSS `cartes-design.css` de la PR #35 **à l'identique** (SHA `07e8c54fff6cc4dfc66f42ba19cf364962e400c5`). Ne pas le recopier ni fusionner la PR #35 en bloc.

PR #41 charge actuellement `style.css`, `initiatives.css`, `cartes.css`, `cartes-design.css`, puis `cartes-compat.css`. Proposition graphique : charger uniquement `cartes-integration-014.css` **après** `cartes-compat.css`, sans toucher au moteur ou aux données.

Cette petite feuille propose sur mobile une largeur SVG native 760 px dans un panneau balayable horizontalement, des libellés de communes de 23 px, un halo de sélection et le focus conservé. Ajouter une **consigne textuelle accessible** indiquant le balayage si le réglage est retenu. La liste reste prioritaire et entièrement fonctionnelle sans module cartographique.

Test sur un snapshot PR #41 `6cd55bfd6a4cfacedc5cedaf07151c80668cf394` sans modification de cette branche, ni publication. Relecture Android physique nécessaire.
