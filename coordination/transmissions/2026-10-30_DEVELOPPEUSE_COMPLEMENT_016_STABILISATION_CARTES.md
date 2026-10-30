# LA FAILLE NOIRE × INTERSTICE — La Développeuse
## Complément de reprise à la transmission 015 : 30 vérifications et correctifs ciblés
**30 octobre 2026 · PR #41 · branche existante `feat/initiatives-decouverte-mobile-2026-10-30`**

> **Pas un effacement ni une réattribution de la transmission 015 précédente.** Son rapport et ses 30 passes existent déjà. Cette reprise ajoute une amélioration mobile accessible et des vérifications distinctes. Une passe BLOQUE n'est pas présentée comme réalisée. Aucun déploiement, fusion, donnée réelle, service, messagerie ni nouvelle base.

## Références de preuve
- PR : https://github.com/zoutiFrutti/Interstice/pull/41
- Ancien Chromium rouge : https://github.com/zoutiFrutti/Interstice/actions/runs/41101912014 (10/13 browser, 3 erreurs ; Node vert) ; ce run concerne un commit **antérieur** au correctif.
- Dernière CI du code : https://github.com/zoutiFrutti/Interstice/actions/runs/41124036640 : SHA **`35713fda21694573db56997a79c9cec33a3eebec`**, **44/44 Node et 17/17 Chromium**, deux jobs réussis.
- PR #35 Graphiste : `cartes-design.css` conservé au blob **`07e8c54fff6cc4dfc66f42ba19cf364962e400c5`**, identique des deux côtés.
- Correctifs propres à cette reprise : `5c0ab477` (HTML), `bc641719` (CSS de compatibilité), `ddbe8713` (navigation clavier), `35713fda` (tests browser).
- Deux autres commits documentaires ont atterri en parallèle sur la branche (entre ces commits) : les conserver, ne pas les réattribuer.

## Lot 1 · Examiner les échecs et le contexte (01–05)
| # | État | Contrôle / trace |
|---|---|---|
| 01 | FAIT | HEAD de PR #41 interrogé avant modification : `9336b74584b680dac6f768f51d88d23d21903783`. |
| 02 | FAIT | `main` interrogé : `53aa446b5de212a6959e6236fc1ed179f5ad0739`. Aucun changement sur `main`. |
| 03 | FAIT | PR #35 lue et son CSS candidat de défilement horizontal examiné ; delta scindé de l'identité commune. |
| 04 | FAIT | Anciens jobs #41101912014 et leurs logs relus : débordement `339/320`, restauration du focus et attente des boutons communaux `3/2`. **Ces anomalies ne sont plus reproductibles sur le HEAD corrigé** ; preuve historique seulement. |
| 05 | BLOQUE | Impossible d'attribuer avec certitude les 19 px à un sélecteur précis du **vieux** commit : le log original donne `scrollWidth`, pas l'élément fautif. Ne pas inventer de cause rétrospective. |

## Lot 2 · Responsive et clavier (06–10)
| # | État | Contrôle / trace |
|---|---|---|
| 06 | FAIT | Fichiers `cartes-compat.css`, `cartes-design.css`, `decouvrir-initiatives.html` inspectés ; styles existants et ajustement 320 px préservés. |
| 07 | FAIT | Consigne visible et région `#map-scroll-region` nommée, focusable et reliée par `aria-describedby` ajoutées, commit `5c0ab477`. |
| 08 | FAIT | SVG conservé, fixé à 760 px seulement sous 600 px et défilant **dans sa région**, pas en largeur globale de page ; légendes SVG de 23 px, commit `bc641719`. |
| 09 | FAIT | Navigation clavier gauche/droite sur la seule région focalisée ; marqueurs SVG et Tab/Espace laissés actifs, commit `ddbe8713`. |
| 10 | FAIT | Nouveau test Chromium `016: region SVG...` : communs et possibles × 320/390/1280 px, libellés, flèches et absence de débordement global. Réussi dans #41124036640. |

## Lot 3 · Filtres, parité et restauration (11–15)
| # | État | Contrôle / trace |
|---|---|---|
| 11 | FAIT | Lecture de `filterMapEntries` et `communeGroups` : la carte et la liste utilisent les mêmes fiches filtrées, sans classement automatique. |
| 12 | FAIT | Retour de la fiche à son lien d'origine revérifié dans `showList`, incluant `#map-unlocated-results`. Test Chromium historique de restauration à nouveau réussi. |
| 13 | FAIT | Nouveau test Chromium `016: ...Tab puis Espace...` : repère Rabastens activé au clavier, liste filtrée avec IDs attendus, focus placé sur le compteur ; réussite #41124036640. |
| 14 | FAIT | `chooseCommune` réinspectée : application du filtre, retour à la vue liste, focus du statut de résultats. |
| 15 | FAIT | Cas Gaillac : le filtre conservé donne 2 communes dans « possibles » ; après effacement 3. L'attente ancienne était fautive, pas le jeu de données. Le test existant est vert. |

## Lot 4 · Fiches, cas limites et liens (16–20)
| # | État | Contrôle / trace |
|---|---|---|
| 16 | FAIT | Jeu de onze exemples fictifs contrôlé dans `cartes-data.mjs` ; test des 11 URL profondes réexécuté dans la suite Chromium verte. |
| 17 | FAIT | Quatre `kind` existants (`initiative`, `besoin`, `ressource`, `projet`) et deux lectures (`communs`, `possibles`) conservés, tests Node verts. |
| 18 | FAIT | Cas sans commune : fiche affichée hors repère SVG et restauration de focus depuis la section sans localisation vérifiées dans les tests existants. |
| 19 | FAIT | Scénario d'échec du module `cartes-map.mjs` : carte désactivée et liste conservée, test Chromium existant vert. |
| 20 | FAIT | Contrôles de liens invalides, historique et retours, liens profonds des onze objets et états vides inclus dans la suite Chromium passée. |

## Lot 5 · Compatibilité TIS-001 sans import réel (21–25)
| # | État | Contrôle / trace |
|---|---|---|
| 21 | FAIT | Cadrage officiel de La Tisseuse consulté : `coordination/TISSEUSE_CADRAGE_COOPERATIONS_ANNUAIRE_2026-10-30.md`. |
| 22 | FAIT | Bilan partiel TIS-001 consulté : **0 structure réelle vérifiée dans ce bilan**, aucun partenariat confirmé ni contact envoyé. Cet état historique ne remplace pas une future vérification. |
| 23 | FAIT | `cartes-tis-documentation.mjs` réinspecté : relation `repere/referencement_accepte/cooperation_convenue` séparée de `kind` et de l'autorisation de publier, prévisualisation toujours `publicReady:false`. |
| 24 | FAIT | Liste blanche export et tests d'injection de champs privés contrôlés ; canary de confidentialité testé dans Node et Chromium, tous verts. |
| 25 | FAIT | Aucun adaptateur TIS importé par l'application, aucun organisme réel, aucune adresse précise ni API nouvelle ; données de TIS isolées des onze exemples de carte. |

## Lot 6 · CI, compatibilité et transmission (26–30)
| # | État | Contrôle / trace |
|---|---|---|
| 26 | FAIT | CI du commit `35713fda` : job `test-core` **44 tests réussis, 0 échec** ; logs consultés. |
| 27 | FAIT | CI du même commit : job `browser-mobile` **17 tests réussis, 0 échec**, dont les 2 nouveaux tests 016 ; logs consultés. |
| 28 | FAIT | Blob de `cartes-design.css` comparé PR #35 / PR #41 : strictement identique `07e8c54f...`. Aucun CSS de marque refait. |
| 29 | FAIT | État de fusion interrogé : PR **ouverte, brouillon, `mergeable:false`**, forte divergence avec `main`. Aucune fusion ni rebase automatique. |
| 30 | FAIT | Rapport de ce contrôle déposé dans la branche existante et transmission adressée à La Relieuse en commentaire PR ; l'écriture GitHub ne prouve pas la réception dans une autre conversation. |

## Bilan et limites
- **29 FAIT, 1 BLOQUE** sur ces 30 actions vérifiables. Ces actions ne sont pas un nouveau produit ni des tests physiques.
- **Nouveau comportement vérifié en vrai Chromium automatisé :** région cartographique 760 px lisible/défilante à 320/390 px, Tab/Espace, flèches, 1280 px sans régression, 17/17 scénarios.
- **Non exécutés :** essai sur téléphone Android physique, TalkBack et autre lecteur d'écran, contrôle tactile humain, Firefox/Safari, revue humaine des captures, impression réelle.
- **Toujours bloqué pour publication réelle :** conflit avec `main`, validations des personnes et sources, avis Juriste, garanties consentement/rectification/retrait et sécurité du futur contrat de données.
- Le dernier SHA testé concerne le code et les tests ; le présent **commit documentaire**, ajouté après, n'est pas déclaré testé à tort.
- Les exemples sont et restent **fictifs** ; aucun référencement, partenaire ou mise en relation ne peut être inféré de ce prototype.

**Prochaine action à coordonner par La Relieuse :** revue d'accessibilité sur Android physique et comparaison visuelle avec les recommandations du Graphiste, puis résolution prudente des fichiers en conflit. Ne pas fusionner automatiquement.
