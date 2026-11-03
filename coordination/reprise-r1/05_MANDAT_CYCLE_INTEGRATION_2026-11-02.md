# Mandat du cycle d'intégration — décision de Zout du 2026-11-02

**Statut : décision de cadrage explicite de Zout.** Le cycle R1 est déclaré clos en coordination, sans prétendre que les chantiers et leurs validations sont terminés.

## Finalité

Le cycle suivant est un **cycle d'intégration** : assembler, corriger, tester et terminer les travaux existants. **Priorité opérationnelle à la Graphiste et à la Développeuse pour avancer et achever le projet graphique d'Interstice.** Les anarchivistes et autres ateliers de recherche doivent **terminer leurs dossiers en cours**, en documentant les preuves et les réserves, sans lancer de grands chantiers nouveaux.

## Ordre de travail

1. **Graphiste + Développeuse, priorité de réalisation** : reprendre les prototypes, le design system, l'identité officielle et les parcours ; faire converger graphisme et implémentation fonctionnelle (mobile, clavier, lecteurs d'écran, performances, tests) sur la branche candidate. Préparer les **deux variantes de carte-logo** à comparer ; ne pas décider la variante à la place de Zout.
2. **Intégration technique** : inventorier les branches et PR existantes, choisir les fichiers utiles par SHA, résoudre les incompatibilités, corriger et tester. Préserver les règles P0 sécurité, données et droits. Ne pas adopter le schéma documentaire avant comparaison des schémas existants.
3. **Anarchivistes, Archéologue, Assistant, Biographe et autres ateliers documentaires** : finir les dossiers engagés, vérifier sources primaires, corriger les objections et statuts, transmettre des contenus exploitables sans fausses certitudes ni doublons.
4. **Entraide** : prototype de première fiche « droits en manifestation », soumis à relecture juridique et éditoriale avant toute diffusion.
5. **Médiathèque** : sélection candidate de dix œuvres autour des luttes et des communs, droits et disponibilité vérifiés, sans hébergement présumé.
6. **QA transversal** : tests réels de l'ensemble assemblé, accessibilité, mobile, liens, licences, sécurité, rollback et traçabilité.

## Critères de sortie du cycle

- Une **interface Interstice réellement intégrée et testée**, pas seulement des maquettes séparées.
- Une comparaison des deux variantes graphiques soumise à Zout, suivie de son arbitrage avant finalisation de la carte-logo.
- Des dossiers anarchivistes existants clôturés ou explicitement bloqués avec preuves et motifs.
- Une matrice des schémas existants présentée avant toute décision de migration.
- Les P0 et les droits vérifiés, avec état honnête des limites et des tests.
- Un bilan final avec branches, SHA, tests, travaux non terminés et décisions demandées.

## Autorisations et interdits

Autorisé : travailler sur branches candidates, préparer des PR non fusionnées, corriger, rapprocher, tester et documenter.

**Non autorisé :** fusion vers `main` sans accord explicite de Zout ; publication, déploiement, diffusion, prise de contact externe, dépense, activation d'IA ou migration sans mandat distinct.

## Transmission

Ce document constitue le **mandat central** à utiliser pour les prochains travaux. Il **ne prouve pas** que les ateliers ont reçu un nouveau courrier ou commencé les actions. Le plan initial est `coordination/reprise-r1/04_PLAN_INTEGRATION_COMMUNE_2026-11-02.md` et les arbitrages de Zout sont dans `03_ARBITRAGES_ZOUT_2026-11-02.md`.
