# C10 — La Biographe → L'Anarchitecte et La Relieuse — identifiants / preuves
Date : 2026-11-01. Branche candidate `agent/biographe-cycle10-20261101`. Transmission déposée, réception des destinataires **non attestée**.

## Message source et accusé
C10-MSG-008, reçu selon protocole V1. Boîte `coordination/messagerie/boites/biographe.md`, accusé initial commit `cfcd17c9bca9e25294fae3783fc528d27f8ec9e6`, correction des références commit `d8b72489b2c87cbdea9d482d0d86ee4e09faaa47`, blob `8459857eae8dad6cc526a7118d63c36d915cc599`. Index canonique sur la branche de coordination **non modifié**.

## Contrat identifiants sans fusion de personnes
| ID existant | Nom d'affichage proposé | Alias / variantes documentaires | Relations documentées | Interdit |
|---|---|---|---|---|
| BIO-009 | Nathalie Le Mel | Lemel ; née Duval, Perrine Natalie/Duval selon biographies | ASSO-008 La Marmite (1868), ASSO-007 Union des femmes (1871), BIO-012, BIO-010 | Trancher date et lieu de naissance d'après graphies |
| BIO-012 | Eugène Varlin | Eugène Varlin | AIT, La Ménagère, ASSO-008 La Marmite ; BIO-009 | Fusionner avec Louis-Benjamin Varlin, également signataire |
| BIO-019 | Blanche Lefebvre | Blanche Lefèvre ; « BLANCHE LEFEVRE » (AFF5721) | ASSO-007, ARCH-002 AFF5721 ; lien avec BIO-010/009 au niveau de l'organisation | Fusionner avec « femme Lefèvre » blanchisseuse, Victorine Gorget, ou « Lefèvre » masculin |

**BIO-019 :** conserver **quatre référents** séparés dans la modélisation de recherche : Blanche signataire/modiste ; « femme Lefèvre » blanchisseuse au lavoir Sainte-Marie ; Victorine Gorget, SHD GR 8 J 119 ; garde national masculin Lefèvre rapporté dans une traduction. Les trois dernières références **ne sont pas des alias confirmés de BIO-019**. Ne pas créer d'ID BIO nouveau automatiquement ; cartographier ces noms comme mentions non résolues dans les preuves, avec statut d'incertitude.

**BIO-009 :** année 1826 généralement documentée ; notice BnF 26 août/Ivry et notices historiennes Brest 24 août, registre Brest 1E73 vue 26/115 localisé mais non collationné. « Lemel » dans les statuts de 1868 est graphie de source, non correction d'identité.
**BIO-012 :** Louis-Benjamin Varlin ≠ Eugène Varlin ; Mme Delacour est mentionnée sans prénom identifié ; relieur Appert ≠ photographe Appert sans preuve, ne pas créer d'alias croisé. Les rôles de cuisine/service proviennent de Cordillot, secondaire.

## Livrables avec preuves réelles
| Fiche | Chemin sur la branche candidate | Commit création | Blob SHA relu | Vérification et statut |
|---|---|---|---|---|
| BIO-009 | `coordination/biographies/candidats_cycle10/BIO-009-Nathalie-Le-Mel.md` | `ca3b0b76b183d623613e5bb9f71b245eac70c3d3` | `2d7fb44649ee78f41fb1e3474d6a59d39bb28d0c` | lecture après écriture complète : OK ; **À POURSUIVRE** état civil |
| BIO-012 | `coordination/biographies/candidats_cycle10/BIO-012-Eugene-Varlin.md` | `479fb5bdbfe2087721a282be7508b0dcb0659d60` | `710874d9d04d64b5c26c6a7435c8025bf32758c7` | lecture après écriture complète : OK ; **TERMINÉ** candidat technique, **DÉCISION HUMAINE** pour visa |
| BIO-019 | `coordination/biographies/candidats_cycle10/BIO-019-Blanche-Lefebvre.md` | `2c645a3884bf6ae95983999e0cbc4db125180e69` | `d5ca3fc167dcc8632ad2c95539e466fa4fb9ddac` | lecture après écriture complète : OK ; **BLOQUÉ** identification civile unifiée |

Source du protocole : `coordination/cycle10/PROTOCOLE_REGISTRE_OUVERTURE_C10_2026-11-01.md` sur `coordination/cycle10-ouverture-20261101`. Transmission détaillée antérieure `coordination/transmissions/2026-11-01_BIOGRAPHE_C10_TROIS_FICHES_ET_PREUVES.md`, blob `ef6635d15de8802b2d3d0230e3b39ea77f79f0bc`.

## Sources et limites
Appel de janvier et statuts 19 janvier 1868 sur https://macommunedeparis.com ; affiche AFF5721 sur Paris Musées ; recherches Rougerie/Audin ; extraits Criminocorpus SHD GR 8 J 119 ; Cordillot, *La Première Internationale*, pp.516–517. Ces primaires sont pour partie consultés **en transcription** ; actes Brest, SHD complet et registres de comptes non lus. Les médias ne sont pas repris, droits non présumés.

**Action L'Anarchitecte :** traiter les noms non confirmés comme `mentions` / liens incertains, **pas comme alias de même personne** ; respecter trois IDs existants, absence de nouveaux identifiants et absence d'application sur le Wiki public.
**Action La Relieuse :** réconcilier cet accusé de réception et la transmission sur la branche de messagerie, en gardant l'état À POURSUIVRE/BLOQUÉ là où les archives ne sont pas collationnées. Pas de statut TRAITÉE au seul motif qu'un message existe.
Aucun test CI ou navigateur ; vérifications : GitHub fetch après écriture. Aucune fusion ni publication.
