# LA FAILLE NOIRE × INTERSTICE — La Lectrice
## Pré-sortie / étape 3 : corrections effectives des neuf pages P0 et trois fiches historiques candidates

**31 octobre 2026 · Branche dédiée `atelier-lectrice/pre-sortie-p0-trois-archives-20261031` · CANDIDAT NON FUSIONNÉ, NON PUBLIÉ.**

**Mandat** : réutiliser le rapport de La Lectrice sur 24 pages, le contrôle P0 de La Juriste sur PR #49 et les trois textes consolidés par L'Anarchiviste dans Drive, sans recommencer les audits documentés. **Responsabilité éditoriale annoncée : Zout pour la première édition, sans adoption collective et sans visa automatique.**

**Références** : [décision de La Relieuse PR #43](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/RELIEUSE_DECISION_EDITORIALE_PRE_SORTIE_2026-10-31.md) ; [revue Lectrice des 24 pages PR #43](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/transmissions/2026-10-31_LECTRICE_PRE_SORTIE_24_PAGES_OBJECTIONS_LACUNES.md) ; [avis Juriste PR #49](https://github.com/zoutiFrutti/Interstice/blob/juriste/pre-sortie-avis-droits-20261031/docs/AVIS_JURISTE_CONTROLE_PREMIERE_EDITION_2026-10-31.md) ; [révision 22 fiches de L'Anarchiviste](https://github.com/zoutiFrutti/Interstice/blob/coordination/relieur-pilote-10-passes-20261030/coordination/transmissions/2026-10-31_ANARCHIVISTE_REVISION_HISTORIQUE_22_FICHES_PRE_SORTIE.md). Lectures directes complémentaires : dossiers Google Docs ARCH-002, ARCH-007, ASSO-007, chaque texte consolidé de l'étape 2.

## 1. Priorité A : modifications réellement écrites, page par page

| Page déjà sur main | Correction effectuée SUR LA BRANCHE DE TRAVAIL | État du texte proposé et blocage résiduel |
|---|---|---|
| [`wiki-association-collegiale.html`](../../wiki-association-collegiale.html) | Après l'introduction, encadré de cadrage sur le rôle des statuts, la représentation vis-à-vis des tiers, les obligations variables et liens vers Service Public/Associations.gouv.fr. Conservé le guide préexistant et son avertissement. | **CORRECTIONS ENCORE NÉCESSAIRES** : La Juriste doit approuver les formulations du droit applicable, distinguer le cas général et l'Alsace-Moselle et contrôler les démarches. Aucun statut associatif fictif d'Interstice. |
| [`wiki-decision-collective.html`](../../wiki-decision-collective.html) | **Réconciliation à partir du texte éditorial de la PR #44** (sources Young/Freeman/Tebble et limites, droit fictif des non-membres corrigé, recours non promis, formulaire documentaire non confidentiel). **Sommaire natif `details`, titres ancrés et avertissement de lecture humaine repris de PR #35**, sans reprendre d'anciens paragraphes problématiques. | **CORRECTIONS ENCORE NÉCESSAIRES** : validation des références, des droits et essais navigateur/lecteur d'écran sur SHA exact ; **CSS spécifique PR #35 non copié**, le sommaire est sémantique mais la finition graphique n'est pas homologuée. |
| [`wiki-education-enfance-protection.html`](../../wiki-education-enfance-protection.html) | Ajout d'une distinction claire entre repères documentaires et évaluation d'un danger individuel, orientation 119 et secours, interdiction des récits et pièces identifiantes dans le GitHub public. Les contenus sur la protection restent inchangés. | **BLOQUÉ POUR SORTIE** jusqu'à revue spécialisée des sources et procédures, contacts, vulnérabilités et contenus portant sur des enfants. |
| [`wiki-financements-culture-spectacle.html`](../../wiki-financements-culture-spectacle.html) | Mention explicite « répertoire documentaire, pas appels ouverts ni éligibilité garantie » ; liste des éléments à revérifier (dates, territoires, dépenses, bénéficiaires). Aucun dispositif supprimé. | **CORRECTIONS ENCORE NÉCESSAIRES** : vérifier chaque appel et son statut actuel par portail officiel avant de mettre en avant une aide, sinon maintenir « index non actualisé ». |
| [`wiki-frontieres-migrations-colonialisme.html`](../../wiki-frontieres-migrations-colonialisme.html) | Avertissement sur le point de départ variable des délais, régimes d'asile/rétention/recours, liens OFPRA/CNDA, refus de recevoir des récits ou pièces sensibles sur GitHub. | **BLOQUÉ POUR SORTIE** comme guide opérationnel : avis juridique sur versions, exceptions, délais et orientation accessibles ; l'analyse historique existante ne doit pas être effacée. |
| [`wiki-lecture-croisee-travail-soin-pouvoir.html`](../../wiki-lecture-croisee-travail-soin-pouvoir.html) | **Réconciliation à partir du texte éditorial de PR #44** : éditions Federici/hooks/Freire, distinction sources/notices, Berenstain et correction de note, Ahmed, remarques sur le handicap/soin et limitation explicite du formulaire ; **sommaire accessible/ancrages PR #35** ajoutés. | **CORRECTIONS ENCORE NÉCESSAIRES** : derniers droits des traductions/éditions et essais graphiques/lecteur d'écran ; ne pas présenter cette lecture comme charte adoptée. |
| [`wiki-logement-habitat-droit-ville.html`](../../wiki-logement-habitat-droit-ville.html) | Encadré de différenciation **commandement de payer / commandement de quitter** (six semaines dans le champ de l'article 24, deux mois en principe et exceptions), trêve hivernale non absolue, DALO ≠ DAHO ≠ attribution immédiate ; orientation ANIL/ADIL, Service Public. | **BLOQUÉ POUR SORTIE comme aide procédurale**, tant que Juriste n'a pas validé les cas, déclencheurs, voies de recours et dates. Garder les 22 notions historiques et pratiques en panorama documentaire si leur statut est clair. |
| [`wiki-police-deces-memoire.html`](../../wiki-police-deces-memoire.html) | Encadré distinguant décéder dans un contexte d'intervention, être cité par enquête/statistique, être mis en cause et être déclaré pénalement responsable ; réserve sur périmètres de chiffres et sur GitHub **public**, sans supprimer les noms/sources déjà publiquement documentés. | **BLOQUÉ POUR SORTIE** comme fichier nominatif consolidé : décisions à recontrôler, droits des proches, voie de rectification privée effective à établir et vérifier ; aucune responsabilité pénale inventée. |
| [`wiki-sante-psychiatrie-autonomie-soins.html`](../../wiki-sante-psychiatrie-autonomie-soins.html) | Encadré sur les limites des informations sanitaires, soins sans consentement et recours, aucun diagnostic/ordonnance ou service garanti ; interdiction de transmettre documents médicaux sur GitHub. | **BLOQUÉ POUR SORTIE comme guide médical/juridique** en attente de revue spécialisée des contacts, délais et formulations à risque. |

**Preuve de modification** : sept fichiers ont conservé **toutes les chaînes de l'ancien HTML** de part et d'autre d'une insertion documentaire ciblée ; aucun passage factuel ou contradictoire supprimé. Les deux autres proviennent **du contenu éditorial PR #44**, et leurs sommaires `details` et ancres viennent de PR #35. PR #44 et PR #35 restent ouvertes séparément ; **aucune PR n'a été fusionnée ni réécrite**. Les versions sur `main` sont inchangées.

**Limite importante** : les avertissements minimisent les risques d'interprétation, mais **ne remplacent pas** la revue juridique, médicale, le contrôle des mentions légales, des données collectées par `proposer-article.html`, ni l'audit du backend. La page d'aide à l'association n'a pas été convertie en modèle statutaire et l'annuaire d'aides n'a pas été certifié comme ouvert.

## 2. Priorité B : trois versions éditoriales complètes, séparées des routes publiques

| Identifiant | Article final candidat en branche | Verdict de La Lectrice | Ce que le texte accepte de dire / ne dit pas |
|---|---|---|---|
| **ARCH-002** | [Affiche n°373 et chambres syndicales des ouvrières](../candidats/2026-10-31/ARCH-002_PREMIERE_EDITION.md) | **PRÊT À SOUMETTRE À ZOUT**, texte sans média | Convocation du 21 mai attestée par AFF5721 ; **réunion effective non prouvée** ; deux réunions du « 21 » en avril/mai non confondues ; sept signatures datées, pas un comité immuable. |
| **ARCH-007** | [Décret du 16 avril sur les ateliers abandonnés](../candidats/2026-10-31/ARCH-007_PREMIERE_EDITION.md) | **PRÊT À SOUMETTRE À ZOUT**, texte sans média | Décret d'**enquête et de préparation de coopératives** ; résultats concrets non déduits du texte ; chiffres Morder et attribution Avrial/Frankel clairement secondaires et discutés. |
| **ASSO-007** | [Union des femmes pendant la Commune](../candidats/2026-10-31/ASSO-007_PREMIERE_EDITION.md) | **CORRECTIONS ENCORE NÉCESSAIRES** | Texte complet, pluralité d'actrices, statuts et rôle des comités, actes/intentions/réalisations distingués. Collation des versions *La Sociale* 12/20 avril encore requise pour stabiliser les dates de publication des statuts. |

**Dossiers sources effectivement consultés via Google Drive (sans les modifier)** :
- [ARCH-002](https://docs.google.com/document/d/1PFDkD9peH97M3O3nhSFsjZgPX6ec8S7mNNPmT_lfm-k/edit).
- [ARCH-007](https://docs.google.com/document/d/1CFgqsrbZIY4r0SFvt5nS0Dwsth2FoTkw1Gf9_yptZ3o/edit).
- [ASSO-007](https://docs.google.com/document/d/1VGqnT2WnZFcAK8vV-qTedvBAupvR-UVsWkcQ7RsVxAg/edit).

**Crédits et droits** : chaque texte comporte date, inventaire/cote, sources et niveaux de consultation, faits/interprétations/contradictions/incertitudes, droits et crédits, renvois vers fiches candidates. Les formulations nouvelles sont des résumés originaux. **Aucune image, transcription intégrale moderne ni média tiers importé dans le lot.** Conserver le statut visible : **« Première édition sous responsabilité éditoriale de Zout, non adoptée collectivement »**. Un « prêt à soumettre » signifie seulement que **La Lectrice juge le texte présentable à une décision humaine**, pas que Zout l'a approuvé.

## 3. Blocages de coordination encore ouverts (pour La Relieuse)

| Niveau | Sujet | Condition de levée |
|---|---|---|
| **P0** | Mentions légales, statut réel de l'éditeur, directeur de publication et hébergeur | Avis Juriste, qualification réelle, pages et contacts opérationnels ; ne pas divulguer adresse privée par automatisme. |
| **P0** | Formulaire `proposer-article.html` / GitHub public : collecte d'e-mail, demandes de retrait et témoignages | Développeuse + Juriste : traitements/permissions testés, voie de correction non sensible réaliste, canal privé si des demandes personnelles sont proposées ; ne pas annoncer « zéro collecte ». |
| **P0** | Santé, enfance, asile, expulsion, personnes nommées | Contrôle sur le texte exact, versions de règles, consentement/confidentialité et avis professionnel spécialisé ; retirer toute consigne opérationnelle inexacte si découverte. |
| **P0** | Versions assemblées PR #35/#44 et tests | Revue diff par La Graphiste, CI et contrôle visuel sur **SHA exact de cette branche**, clavier, mobile, liens et médias. Les tests statiques ne sont pas la preuve d'une accessibilité réelle. |
| **P1** | Financements et association | Recontrôler ouverture et éligibilité des guichets ; droit de représentation et obligations selon activités et territoire. |
| **P1** | Trois archives | ARCH-002 : avis images si visuel ajouté et procès-verbal si récit de tenue ; ARCH-007 : rapport de commission si réalisation chiffrée ; ASSO-007 : dates et texte des statuts à collationner. |
| **P1** | Intégration avec les 44 fiches / 71 FN | Conserver identifiants, anti-doublon et liens réellement disponibles. Les références croisées aux fiches Drive sont **références de dossiers**, pas routes du site. |

## 4. Vérifications réalisées et limites

**Contrôles documentaires statiques réellement exécutés sur les neuf HTML de branche** : **9/9** ont une seule balise `h1`, des nombres égaux de sections ouvrantes/fermantes, aucune duplication d'ID relevée et aucune ancre de sommaire interne absente. Les **sept ajouts** ont préservé le contenu existant de `main`; les deux transferts #44 ont été comparés avec leurs sommaires graphiques #35. Contrôles d'existence : **9 fichiers HTML, 3 textes historiques** sur la branche.

**Non réalisés** : validation W3C approfondie, navigation automatisée, test Chrome/Firefox/Safari, Android/TalkBack, contrôle de liens HTTP par tous les réseaux, lecture de tous les originaux de 1871, audit des licences d'images et CI sur le dernier SHA. Les **réserves ne sont donc pas déclarées levées dans leur totalité**.

## 5. Transmission et décision demandées

**À La Relieuse** : enregistrer ce lot dans le registre de pré-sortie comme `CORRECTIONS_APPLIQUEES_BRANCHE_CANDIDATE`, avec ces trois verdicts d'archives et les blocages P0/P1 ; conserver les neuf statuts bloqués ou en correction jusqu'aux visas requis. Demander à Zout **explicitement, fiche par fiche ou par petit lot**, quelles éditions et réserves il accepte ; **ne pas lire la commande générale de pré-sortie comme son acceptation des articles**.

La charte et le manifeste V2.5 restent **des filtres de lecture critiques non adoptés** : faits historiquement établis et objections contradictoires ne sont pas censurés par compatibilité politique. Ce dépôt de documents ne constitue pas une notification de l'autre conversation « La Relieuse » ; son accusé de lecture reste distinct.

**AUCUN MERGE. AUCUNE PUBLICATION. AUCUN STATUT « APPROUVÉ PAR ZOUT ».**
