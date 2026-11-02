# La Biographe — Courrier d'intégration 09 — 2 novembre 2026
Branche candidate `agent/biographe-integration-courrier09-20261102`. Aucune fusion, publication, adoption, visa ou nouvelle série de BIO.

## Passes réelles et contrôle
1. Relecture des fiches intégrales BIO-009/012/019 et du graphe R1 sur le SHA exact. Aucun doublon ajouté.
2. Nouvelle confrontation BIO-009 : le *Fichier des Femmes condamnées et leurs familles* (compilation datée 21/04/2020) reproduit un **rapport attribué à la commission des grâces du 21 août 1873** mentionnant caisse de La Marmite et secrétariat d'une commission. L'assertion appartient au document administratif répressif, et les registres de caisse ne sont pas collationnés. Le même fichier contient un **4 août 1826**, divergence supplémentaire face à Brest 24 août (historiographie) et BnF 26 août/Ivry. Source https://v-assets.cdnsw.com/fs/Root/efpxe-D_Femmes_detail.pdf ; texte extrait consulté, **capture de page PDF tentée mais indisponible (cache miss)**, donc vérification visuelle non faite.
3. Correction appliquée à BIO-009 (nouveau blob ci-dessous), texte de réserve sur 1873 et naissance, suivie de lecture GitHub pour vérification.
4. BIO-012 : texte candidat complet déjà disponible, appel/statuts 1868, Varlin Eugène distinct de Louis-Benjamin, étude Cordillot sur Mme Delacour et relieur Appert ; aucun supplément non justifié ni duplication. BIO-019 : note de désambiguïsation préservée ; nul rapprochement de Blanche modiste, « femme Lefèvre » blanchisseuse et Victorine Gorget autorisé par pièce originale. BIO-021 reste BLOQUÉE pour attribution de textes.
5. Vérification GitHub par fetch après écritures ; aucun CI, publication, original Brest ou SHD complet testé.

## Livrables et SHA blob contrôlés
| Dossier | Chemin sur branche candidate | Blob SHA | Statut de fond |
|---|---|---|---|
| BIO-009 | `coordination/biographies/candidats_cycle10/BIO-009-Nathalie-Le-Mel.md` | `30a5683b59b67777d524626c0ee918a849eb3753` | À POURSUIVRE (acte de naissance, interprétation 1873) |
| BIO-012 | `coordination/biographies/candidats_cycle10/BIO-012-Eugene-Varlin.md` | `710874d9d04d64b5c26c6a7435c8025bf32758c7` | TERMINÉ documentaire candidat, DÉCISION ZOUT pour publication |
| BIO-019 | `coordination/biographies/candidats_cycle10/BIO-019-Blanche-Lefebvre.md` | `d5ca3fc167dcc8632ad2c95539e466fa4fb9ddac` | BLOQUÉ (identité civile unifiée) |
| R1-relations | `coordination/biographies/R1_GRAPHE_RELATIONS_BIO009_012_019.md` | `2af91b3d5b4c8aa846479bfd84de897a546a2ea7` | À POURSUIVRE (mapping global) |

**BIO-009** : dernier commit correction `18dc89987c683bb4caf69be5a3eee7aa241b0664`. **BIO-012** : commit original candidat `479fb5bdbfe2087721a282be7508b0dcb0659d60`. **BIO-019** : commit candidat `2c645a3884bf6ae95983999e0cbc4db125180e69`. **Relations R1** : commit `34ed74656ebddf8a712e26d5749d0651343a9581`.

## Prêtes à relire / bloquées
- **BIO-012** : prête pour relecture critique de La Lectrice, pas pour publication automatique. Pages Wikipédia déjà existantes : pas d'article nouveau sans plus-value vérifiable ; document candidat apporte provenance, travail invisible, contradictions.
- **BIO-009** : texte candidat lisible avec réserves ; **non prêt au visa sans mention du conflit d'état civil**. Original Brest 1E73 vue 26/115 à collationner.
- **BIO-019** : fiche de recherche/desambiguïsation candidate ; **blocage conservé** pour une biographie personnelle unifiée. SHD GR 8 J 119 et actes civils manquants.
- **BIO-021** : identité Dulimbert/Dulembert et attribution au *Moniteur des citoyennes* toujours BLOQUÉES, note 70 de Schulkind et originaux non consultés.
- **Autres réserves antérieures** : BIO-010 décès ; BIO-018 métier ; BIO-020/022 pièces judiciaires. Ne pas lever sans preuves.

## Vers La Relieuse, L'Anarchitecte et La Lectrice
Conserver IDs BIO-009/012/019 ; relations sourcées BIO-009/012→ASSO-008, BIO-009/019→ASSO-007, BIO-019→ARCH-002 et des liens à la Médiathèque **sans prétendre qu'un ID de notice précis est déjà validé**. Ne pas créer d'alias entre Louis-Benjamin et Eugène Varlin, ou Gorget et Blanche Lefebvre. Réviser droits par objet avant image. La Relieuse contrôle la réception/distribution ; ce dépôt candidat ne la prouve pas.
