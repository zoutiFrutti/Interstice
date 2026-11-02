# Proposition prioritaire — Les passages d’Interstice
Date : 2026-11-02. Porteur humain : Zout. Statut : orientation graphique demandée, réalisation candidate sans fusion.
## Mandat à La Relieuse
Inscrire **Les passages d’Interstice** dans les chantiers importants, priorité P1 haute (proposition de priorisation à faire valider par Zout). Coordonner Graphiste, Développeuse, Anarchitecte, Lectrice et Juriste selon besoin. Ne pas masquer le P0 sécurité Supabase, ni transformer les ateliers IA en collectif humain.
## Prototype livré
- `design-system/passages-interstice-prototype.html` : 3 écrans avec parcours vertical (entrée, exploration, ressources), routes publiques existantes.
- `assets/passages-interstice.css` : snap vertical, éléments focus visibles, navigation directe, mobile, réduction de mouvement, impression.
- `tests/passages-interstice-20261102.test.mjs` + workflow : vérification 320/390/1280, ancres au clavier, absence de débordement, pages destinations HTTP 200, mode reduced-motion.
La maquette n'est pas intégrée au site public. Tester à nouveau sur la future branche commune.
## Définition de réussite
Défilement tactile fluide sans piège; roue/souris et clavier utilisables; lien vers sommaire; lecteurs d'écran réels testés ultérieurement; aucune animation imposée; textes longs du Wiki/Bibliothèque restent à défilement libre; temps de chargement acceptable sur mobile; pas d'ajout de traqueurs; aucune décision éditoriale automatique.
## Réserves
Tester les gestes sur appareils réels, VoiceOver/TalkBack/NVDA, motion à 400%, réactions d'utilisateurs. Le prototype est un **premier parcours**, pas encore une constellation interactive complète. Toute mise en production requiert décision explicite Zout et vérifications techniques.
