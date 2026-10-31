# L’Anarchitecte → Développeuse et Relieuse — contrat technique accès aux droits
Date : 31 octobre 2026 · Statut : **candidat non publié, non juridiquement validé**.
Référence : `coordination/JURISTE_TRANSMISSION_COMMUNE_ACCES_AUX_DROITS_2026-10-31.md`, notamment P1–P8 et les dossiers DROIT-001/DROIT-002. Aucune migration ni connexion Supabase.

## Réemploi de l'existant et périmètre
Le site `main` contient `index.html`, `wiki.html`, `participer.html`, `style.css` : réutiliser ces éléments, ne pas recréer un Wiki ni ajouter un outil de dépôt de cas personnels. Les chemins candidats `droits.html` et `droit-001.html` n'existaient pas au contrôle ; **ne pas publier de liens vers eux tant qu'ils ne sont pas créés et validés**.

Une entrée statique « Connaître ses droits, trouver du soutien » dans la navigation vers `droits.html` (à activer uniquement lorsque prête). Deux seules fiches pilotes :
- `DROIT-001` : manifester / contrôles / garde à vue ; France.
- `DROIT-002` : logement / expulsion / DALO / hébergement ; France.

Chaque dossier possède **trois présentations** cohérentes d'un même texte validé : `poche` (points-clés, exceptions, pas de personnalisation), `detail` (démarches, conditions, références de droit), `orientation` (aide humaine réelle, modalités vérifiées). Elles peuvent être trois sections ancrées d'une même page HTML statique, plutôt que six routes divergentes : `droits/droit-001.html#poche`, `#detail`, `#orientation`, idem 002. La carte « poche » a son style impression dédié, avec un bouton **Imprimer** facultatif utilisant `window.print()` seulement ; le navigateur permet aussi Ctrl+P sans JavaScript.

## Contrat éditorial à maintenir en source, sans données de personnes

Exemple de métadonnées JSON versionnées **localement**, sans appel réseau externe :
```json
{
  "id": "DROIT-001",
  "territoire": "FR",
  "title": "Manifester et connaître les démarches utiles",
  "editorial_status": "brouillon",
  "legal_checked_at": null,
  "published_at": null,
  "reviewer": null,
  "source_refs": [],
  "sections": ["poche", "detail", "orientation"],
  "human_help": [],
  "content_version": "0.1-draft",
  "correction_channel": null
}
```
Les statuts admis : `brouillon`, `sources_verifiees`, `relecture_juridique`, `candidat_editorial`, `publie`. Le code n'infère **jamais** `publie` parce qu'un test passe. `legal_checked_at:null` est affiché comme « Vérification juridique non encore effectuée » ; ne jamais fabriquer une date. Une source contient `url`, `organisation`, `titre`, `article_ou_section`, `version`, `consulte_le`, `droits_reemploi`, `niveau_consultation`. Chaque affirmation procédurale doit pointer vers une ou plusieurs sources, avec exceptions et champ d'application, et ne pas diffuser de délai non validé. Les liens d'orientation humaine requièrent `service_verifie_le`, `territoire`, `conditions_acces`, `gratuite_confirmee` ou `inconnue`, `horaires_verifies` ou `inconnus`, `accord_referencement` distinct du seul repérage, et `partenariat:false` par défaut. Ne jamais transformer une simple URL officielle en partenariat.

## Séparation fonctionnelle et surfaces interdites

**Lire uniquement** : HTML/CSS/JS local, sans authentification, analytics, traceurs, cartes, GPS, géocodage, API de formulaires, SDK Supabase, service worker collecteur, backend ni journal d'usages. Les contenus de démonstration ne recueillent aucune histoire personnelle. Interdits dans les pages et dans les tests : `<form>` de récit, `textarea` pour témoignage, `input type=file`, téléchargement de justificatifs, bouton « aide urgente » ou « envoyer confidentiellement », messagerie non habilitée, fenêtre demandant des informations privées. Une simple recherche interne facultative peut se faire sur des termes prédéfinis en mémoire ; aucune sauvegarde de requête.

Afficher en en-tête : « Information générale, pas une consultation juridique personnalisée ; aucune urgence traitée par Interstice », périmètre France, statut éditorial, **date juridique réelle ou « non vérifiée »**, dernière date de révision de la fiche, et explication claire des limites. Les désaccords et modifications sont orientés vers une **procédure de correction documentaire non sensible** existante, sans inviter à publier un dossier de personne sur GitHub. Tant qu'aucun canal adapté n'est habilité, afficher « Canal de correction confidentiel non disponible » plutôt qu'un formulaire fictif.

**Hors connexion :** documents HTML statiques préalablement téléchargés avec leurs CSS et images internes ; un lien « Enregistrer ou imprimer pour lecture hors ligne ». Ne pas garantir un mode offline automatique tant qu'aucune stratégie de cache versionnée n'a été testée. Si PWA/service worker à étudier plus tard : uniquement fichiers publics statiques, sans cache de recherches personnelles ni ressources juridiques périmées sans indicateur de date et mécanisme de mise à jour explicite. Les URL d'organismes ne fonctionneront pas hors ligne ; afficher leurs conditions et une date de vérification dans la copie imprimable.

## Accessibilité et test du parcours

- HTML sémantique `header/nav/main/article/section/footer` ; un `h1` par page, hiérarchie `h2/h3` ; lien d'évitement et sommaire ancré `#poche/#detail/#orientation/#sources` ; lien de retour vers `droits.html` et Wiki.
- Tous les détails et avertissements visibles **sans JavaScript**, y compris droit applicable, exceptions, statut, source, date et contacts vérifiés. Focus clavier visible ; pas de piège de clavier ni d'élément invisible au lecteur d'écran.
- Contraste WCAG AA (4,5:1 texte normal), zoom 200 %, largeur 320, 390 et 1280 sans défilement horizontal ; taille de police lisible ; pas de code couleur seul pour le statut.
- Impression A4, économie d'encre et variante poche : source + version + date + réserves visibles même sans couleur. Empêcher les coupures de paragraphes critiques par `break-inside:avoid` sans créer de pages blanches ; liens imprimés avec adresses lisibles.
- Tester liens internes/ancres en statique, liens externes HTTP avec vérification de redirection quand disponible, absence de requêtes sortantes lors de lecture des pages, `navigator.geolocation` non sollicité, aucun POST ; tests Playwright clavier, largeur, JS désactivé, print et ressources offline sous serveur local ou copie sauvegardée. **Aucun de ces tests n'est déclaré exécuté dans ce contrat.**

## Risques et critères d'arrêt

| Risque | Mesure / condition |
|---|---|
| Faux canal confidentiel | Aucun formulaire ou bouton de contact privé tant que canal habilité, horaires et moyens de réponse vérifiés |
| Formulaire sensible ou collecte involontaire | Aucune saisie de dossier, pièce jointe, outil d'analyse, journal d'usage ou service tiers |
| Droit périmé / règle locale | Sources primaires datées, versions et exceptions ; état « relecture nécessaire » visible si source invalidée ; décision humaine avant publication |
| Réutilisation de textes non autorisée | Synthèses originales, références/liens, vérification des citations/traductions/images par Médiathèque/Juriste |
| Promesse d'assistance juridique | Énoncé explicite du rôle d'information et orientation, sans représentation, urgence ou conseil personnalisé |
| Faux partenaires | Référencement documentaire distinct d'un accord et du partenariat |
| Fausse accessibilité hors ligne | Téléchargement/print testés ou limite affichée, sans promesse de PWA opérationnelle |

## Répartition et séquence d'intégration

1. **Juriste + Médiathèque + Lectrice :** valident contenu de droit, formulation des exceptions, dates de textes, licences, limites (DROIT-001/002).
2. **Tisseuse :** remet les services humains, modalités et dates vérifiées ; ne pas inventer de permanences.
3. **Développeuse :** créer les pages statiques dans une branche existante de travail, sans formulaire, sans backend et sans pages publiques présentées comme validées ; utiliser les mêmes composants et `style.css`.
4. **Graphiste + Anarchitecte :** QA clavier, mobile 320/390/1280, impression poche/A4, sans JS, liens et offline sur un SHA unique, avec CI.
5. **Relieuse :** garde le registre DROIT-001/002 et les preuves de relecture ; organise l'arbitrage humain avant toute fusion, mise en ligne ou annonce publique.

**Transmission GitHub ≠ accusé de réception par les autres conversations.** Ce contrat ne constitue ni validation juridique, ni adoption collective, ni ordre de déploiement.
