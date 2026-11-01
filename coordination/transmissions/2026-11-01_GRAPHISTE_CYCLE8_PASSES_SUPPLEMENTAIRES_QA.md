# La Graphiste — Cycle 8, passes complémentaires
**1 novembre 2026 — modifications candidates uniquement, sans fusion, publication ni décision IA.**

## État avant reprise
PR #68, SHA initial `650f4c41c6c03a8af302444874798c7b02e6133c`. CI initiale réussie : run 41294568388, 320/390/1280 et A4. PR #50, #57, #59, #61, #63, #66 restent la chaîne de composants. **Pas de relecture/réécriture des textes historiques, ni de nouvelle image.**

## Passes correctives, chacune avec modification vérifiable
1. **Lien d'évitement et statut :** `design-system/maquette-cycle8-navigation-integree.html`, commit `912d2400cc27975909573df4c0f93e11a52ae141`. Lien « Aller au contenu principal » placé avant `main#contenu`, `tabindex=-1` sur la cible. Cinq statuts nommés et explicités dans la maquette : accord individuel (sans publication automatique), candidat, corrigé, réserve ouverte, bloqué. Ne pas confondre ces exemples de présentation avec des états réels accordés à une fiche.
2. **CSS d'accès et impression :** `assets/graphiste-cycle8-integration.css`, commit `6efb04c694a0ef299b40e0efa4526392b8d944c6`. Focus explicite sur le lien d'évitement hors du conteneur principal ; contenu des `details` affiché sur papier même quand il est fermé à l'écran. Styles opt-in inchangés par ailleurs.
3. **Régression ciblée :** `tests/graphiste-cycle8-2026-11-01.test.mjs`, commit `6a22432f2ac71f818c5c6e01d27dad9471347c9b`, nouveaux contrôles du lien focus, cinq statuts, règles d'impression. Les contrôles précédents restent le filet de sécurité sur la seule maquette modifiée.

## Limites de preuve
La CI Chromium mesure l'ordre DOM minimal, l'accessibilité clavier ciblée, les routes internes, le contraste **texte principal/fond**, 320/390/1280 px, 200 % de police **simulés via CSS** et la possibilité d'export A4. Elle ne remplace pas une lecture effective de la page avec VoiceOver, TalkBack ou NVDA, ni une inspection humaine du PDF ou une mesure du confort de lecture par personnes concernées. Contraste de chaque lien/fond/état et zoom 400 % réel non audités. La maquette n'importe aucun média et ne prouve donc pas l'autorisation de réemploi des médias d'autres branches. Le composant `noindex` n'est pas une barrière d'accès.
L'intégration des dix profils et cinq statuts des branches sources est **héritée par dépendance CSS et liens**, pas un moteur unifié dynamique ayant déjà injecté et testé tous les articles/bibliographies.
Aucun texte éditorial ni droit de personne modifié. Transmission GitHub n'établit pas réception par conversation autonome.

## Point de reprise
La Développeuse : intégration sélective sur les véritables articles autorisés par version SHA et retest des pages finales ; conserver La Lectrice. La Relieuse : visas et crédits exacts avant publication. L'Anarchitecte : vérifier le routeur et les schémas statuts/média sur branche d'intégration. Essais manuels avec appareils réels et NVDA/VoiceOver/TalkBack : **non effectués**.
