# WORK-NAV-01 — vérifications

Référence complète déjà passée : [CI 41809013343](https://github.com/zoutiFrutti/Interstice/actions/runs/41809013343), commit `43d8452d1c8783977557faeb1a70e89d64c20e5d`. Huit tests purs et treize scénarios navigateur passent ; la suite R6 et son préflight Pages passent séparément sans déploiement.

La passe suivante contrôle une capture native du zoom 400 %, ses pixels et le chargement de même origine derrière un futur aperçu privé. La première capture Playwright à ce zoom était vide ; elle est rejetée. La capture CDP native montre correctement le lecteur, mais sa hauteur physique de 761 px diffère des 900 px émulés : l’assertion d’outil a été corrigée pour consigner la taille réellement capturée. Les résultats du nouveau HEAD restent à confirmer avant livraison.

Contrôles disponibles : 320/390/768/1280 px ; Android Pixel 5 simulé (CDP tactile), déplacement et pincement ; souris, molette, zoom et recentrage ; clavier/focus ; sept traversées et retours ; historique/rechargement/liens profonds ; HTML sans JavaScript ; mouvement réduit ; axe et arbre Chromium ; absence de débordement et d’erreurs JavaScript.

Hors validation : appareil Android physique, TalkBack, VoiceOver, NVDA et jugement artistique de Zout. Axe ne signale aucune violation A/AA dans la référence, mais laisse les contrastes sur le SVG à examiner. Les calculs de palette sont dans CONTRASTES.json ; ils ne certifient pas toutes les superpositions.
