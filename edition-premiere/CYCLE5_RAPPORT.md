# La Développeuse — Cycle 5, intégration candidate et contrôle des cinq passes
Date 31 octobre 2026. **NON PUBLIÉ / NON ADOPTÉ.**

## Passe 1 — Réconciliation sans écrasement
Branche de base `integration/premiere-edition-candidate-2026-10-31`, HEAD initial `43bfa539c618d722157c5f150c30b94acb45038d`.
PR #50 `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb` : gabarits et CSS ; PR #51 `7663f3549c14c4430ae3e22a7ff9dc465e930754` : contrat routes ; PR #56 `1388742996cec71e138446914cc508ddd9e267c2` : suspension des formulaires côté client uniquement ; PR #57 `2d8bb7960d7e2a4f1f3428841cbcc705a0962877` : parcours ; PR #58 `79baeb8448652e855f411b5adccacbb6f42cb25f` : textes candidats ; PR #59 `755588993e58e3a97d60d27be4d99f387a81316c` : graphisme de convergence.
Journal commun et journal Éclaireuse sur branche Relieuse PR #43, avec registre éditorial canonique blob `f005414fc566cf020e2ac8931f4841e30ffde859`. Ces sources peuvent évoluer après ce contrôle ; ne pas remplacer leurs branches par le snapshot technique. Neuf corrections de La Lectrice déjà présentes conservées sans modification. Aucune fusion entre versions concurrentes.
Les trois documents PR #58 : Manifeste V2.6 blob `8aa342bc7b45dc6736499eb363c6c895c3bc3621`, Charte des communs V0.8 `cbfd028e13aba2b5ee31d2af8b669552c840c8ed`, Charte éditoriale V0.1 `57b9a8bd9db6280d6a2c753082310c25b0ea32ec`. **CANDIDATS, aucune adoption collective.**

## Passe 2 — Visa et double verrou
Seuls ARCH-002 et ARCH-007 ont `ACCORD_EDITO_ZOUT` pour leurs versions Git blob `f9f0b6edf09cf0e84fe7e46960f25df1a8e99dbb` et `372bfcee95f7bd4a1f37dfa9393264662050e9ba`. Le registre et snapshot les enregistrent, sans autorisation de sortie : `rights_final=A_VERIFIER`, `publication_authorized=false`, `merge_authorized=false`; `edition-premiere/decisions.json` est vide. Ce n'est ni un refus de Zout ni un aval des droits ; aucune fiche ARCH générée.

## Passe 3 — Parcours et exigences pédagogiques
Les parcours écologie/alimentation, démocratie/pouvoir, travail/coopératives utilisent `wiki.html` existant avec ancres `ecologie`, `democratie`, `cooperatives`. Sommaire, sources indiquées comme sources, objections, retour vers les articles, exercice `details/summary` sans compte, résultat enregistré, profil ni collecte. Exercices et études référencées **restent candidats**, aucune nouvelle approbation inférée du test technique.

## Passe 4 — Gabarits ÉCL, luttes et CIC
La maquette `design-system/maquette-ecl-cycle4-interne.html` est conservée **hors navigation et hors index public**, enrichie uniquement d'un lien CSS exact PR #59 : `assets/graphiste-cycle4-composants.css` blob `2cae1e22a458d3bf52e3b77a178dd5c506211b21`. Trois parties internes : pouvoir, luttes et CIC. Pas de nouveau contenu réel approuvé, pas de reproduction d'œuvres, de témoignages, de médias ni d'identités. Toute nouvelle fiche demande ID, SHA texte, sources, droits et autorisation humaine. L'enquête CIC 2026, les résultats des luttes et les outils ÉCL restent à consolider.

## Passe 5 — QA et limites sécurité
`tests/edition-cycle5.test.mjs` ajoute une régression ciblée des cinq passes et des statuts exacts ; la CI candidate Node/Chromium recontrôle les composants sur le nouveau SHA. Le rapport de test final doit utiliser la conclusion de GitHub Actions et non cette note rédigée avant exécution.
**P0 SERVEUR OUVERT** : d'après l'audit connecté de La Juriste, `submit-proposal` Edge Function et `submit_wiki_article` RPC peuvent être appelées hors de l'interface neutralisée. Aucune preuve que ces points d'entrée sont désactivés en production. RLS, rôle authenticated, fonctions SECURITY DEFINER et collecte indirecte à contrôler par Zout et La Juriste avant toute réouverture. **AUCUNE migration, test d'intrusion, changement de fonction/RLS, écriture de données ni déploiement effectué.**
**Autres blocages** : éditeur et hébergeur à qualifier, mentions légales/RGPD, canal privé de rectification, licences des œuvres externes, contre-lecture des exercices, essais VoiceOver/TalkBack, vérification écran physique/contraste étendu, audit de tous les liens externes non accompli. Tests d'interface et présence de `noindex` ne protègent pas une donnée privée poussée sur un dépôt Git public.

## Rollback
Sur la seule candidate, annuler le commit Cycle 5 par `git revert <sha-cycle5>` puis rejouer la CI, **ou** préparer une branche de repli depuis `43bfa539c618d722157c5f150c30b94acb45038d`. Ne jamais forcer `main`, effacer un historique d'atelier ni appliquer une migration Supabase. Zéro fusion, zéro publication.
