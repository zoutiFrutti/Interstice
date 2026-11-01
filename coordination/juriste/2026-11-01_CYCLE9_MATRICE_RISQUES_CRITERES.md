# La Juriste · Cycle 9 — Matrice risques et critères de levée
**1er novembre 2026 · branche candidate, sans adoption ni publication.**

## Corpus versionné
PR #58 : manifeste V2.6 `8aa342bc7b45dc6736499eb363c6c895c3bc3621`, charte éditoriale V0.1 `57b9a8bd9db6280d6a2c753082310c25b0ea32ec`. PR #62 : charte communs V0.9 `aa3e38a21e76890072ef1f6a57863c55ce7d2a2b`, art. 48.1–48.7. PR #67 : matrices et audits code/SQL, réutilisés sans recommencer. Registre de coordination 15 À CORRIGER / 5 BLOQUÉS blob `aa718d5d207169b35bdab4855aecc8985877976d`.

## Droit / interprétation / proposition
| Point | Droit applicable | Interprétation / situation prouvée | Proposition politique ou éditoriale |
|---|---|---|---|
| Association | Loi du 1er juillet 1901, art. 1–2, 5 suivant forme choisie | Projet individuel, aucun organisme constitué | Fédéralisme et décision collective futurs, pas organes actuels |
| Édition | LCEN art.1-1 et loi 1982 art.93-2 selon qualification réelle | Éditeur/hébergement/directeur et régime professionnel non confirmés | Désignation impersonnelle dans les chartes, sans effacer les obligations |
| Données | RGPD art.5,6,9,12–22,28,32 selon traitements | Conditions exactes et canal privé vérifié manquants | Transparence, autonomie, portabilité souhaitée au-delà de la portabilité légalement due |
| Créations | CPI L122-4/5, droits à l'image, vie privée | Droits et licences à prouver pour chaque pièce reproduite | Partage des communs et accès ouvert voulus mais non rétroactifs aux droits d'autrui |
| Article 48 | Contrats, propriété, loi 1901, RGPD | Responsabilité individuelle transitoire, transfert ni automatique ni forcé | Absence de pouvoir IA, pas de privilège fondateur permanent, modalités constituantes à négocier |

## Matrice P0
| Risque | Gravité / statut | Preuve et levée requises |
|---|---|---|
| `submit-proposal` et `submit-resource` | **P0 OUVERT** | Deux Edge Functions actives ; contrôle `Origin` et quotas, sans authentification forte. Suspension côté serveur réversible + tests de refus/non-écriture autorisés et contrôlés |
| `submit_wiki_article` | **P0 OUVERT** | Fonction SECURITY DEFINER authentifiée, champs contrôlés et quota, mais sans drapeau de suspension. Décider arrêt de collecte et prouver rejet sur compte test |
| `github-wiki-ingest` | **Contrôle complémentaire** | OIDC GitHub vérifié dans code. Ne pas couper comme un formulaire public ; tests négatifs et périmètre RPC staging |
| Modération | **Réserve de test, pas faille prouvée** | Trois fonctions appellent `is_moderator()` avec `auth.uid()` ; vérifier par comptes habilité/non habilité et privilèges réels |
| RGPD | **P0 OUVERT** | Registre finalités, base légale, information, durées et critères, sous-traitants, destinataires, accès/rectification/effacement, logs/sauvegardes ; canal réel, sans exposition GitHub |
| LCEN | **P0 OUVERT** | Éditeur personne physique réel, directeur, hébergement(s) et contact ; qualifier le régime non professionnel et l'option de confidentialité avant diffusion |
| Reproduction | **Au cas par cas** | Identité auteur/titulaire, domaine public ou licence exacte, preuve d'autorisation, image/voix et données des vivants, périmètre de réemploi |
| Adoption des chartes | **NON DÉMONTRÉE** | Décision individuelle humaine sur chaque SHA ; acte de publication distinct ; aucun mandat collectif ou IA |

## Cinq pages sensibles : corrections réellement déposées
| Page / registre ancien | Blob candidat nouvellement vérifié | Correction minimale effective | Critère restant de levée du blocage |
|---|---|---|---|
| `wiki-education-enfance-protection.html` `ff4a1b2c` | `ef774f3cbcc61f94f8553edc61704f52774e5225` | Note visible sur mineurs, confidentialité et protection | Vérifier les démarches sensibles et références datées ; contrôle spécialisé de l'information pratique, puis visa humain |
| `wiki-frontieres-migrations-colonialisme.html` `058e3629` | `f00ca6281a378614fad67c6e28c6a7613e6cca06` | Note sur variabilité asile, délais et procédures | Identifier dispositions, décisions et dates pour toutes les consignes opérantes ; supprimer ou réécrire instructions non démontrées |
| `wiki-logement-habitat-droit-ville.html` `6a10c4a5` | `99193708552dcdefdf5c28af00c3a93b5872fb8b` | Distinction commandement, congé, décision, expulsion, DALO et DAHO | Recouper chaque délai et voie d'aide sur sources officielles, version juridique à jour |
| `wiki-police-deces-memoire.html` `f0dda721` | `2917f9ec9440ce506338b2655c229b3d880b896e` | Distinction témoins, enquête et condamnation ; données des proches | Contrôle chaque mise en cause avec source et statut, droits d'image, confidentialité, droit de réponse et correction |
| `wiki-sante-psychiatrie-autonomie-soins.html` `a7e026c3` | `e846859c672eb03e019d7c1469018b9c5b304ff5` | Distinction soins, consentement, procédures, données de santé | Sources datées sur soins sans consentement, recours et pratiques ; contrelecture qualifiée et visa humain |

**Test direct réalisé :** chaque page récupérée sur SHA initial conforme au registre, modifiée par insertion d'une unique note accessible dans `<main>`, relue après commit et contrôlée pour présence de la note et du contenu principal. **Non effectué** : test Chromium, liens, lecture article par article, avis spécialisé, autorisation de publication. Le statut **BLOQUÉ** reste valable jusqu'aux critères ci-dessus ; des avertissements seuls ne guérissent pas de mauvaises instructions.

## Décisions réservées
Détermination de l'éditeur/qualité, hébergeur et canal confidentiel ; inventaire et durées de conservation ; périmètre d'arrêt serveur et autorisation de tests ; choix des œuvres et licences ; décisions éditoriales explicites sur version/SHAs et publication distincte. Aucune décision collective ni partenariat présumés.

Sources officielles : [LCEN art.1-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049568614), [RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra), [CPI L122-4](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278911), [CPI L122-5](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048603495), [loi 1901](https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069570).
