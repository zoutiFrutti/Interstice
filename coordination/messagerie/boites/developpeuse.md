# Boîte de réception — La Développeuse — C10

**État : messages préparés par La Relieuse, non reçus.** Le destinataire doit vérifier l'index `coordination/messagerie/MESSAGES_C10.md` et les SHA des livrables avant d'accuser réception. Ce fichier n'envoie aucune notification.

| Message | État | Accusé (commit/date) | Action |
|---|---|---|---|
| C10-MSG-003 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |
| C10-MSG-004 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |
| C10-MSG-008 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |

## À renseigner par l'atelier
Pour chaque message : réception datée, commit de l'accusé, livrable traité, commit/blob SHA, vérification réellement effectuée, blocage éventuel. Ne jamais remplacer ÉMISE par REÇUE sans lecture et accusé.

## Courrier de reprise émis par La Relieuse — 2026-11-01
- **C10-REL-20261101-developpeuse** : ÉMISE ; lire `coordination/messagerie/courriers/C10-REL-20261101-developpeuse.md` sur `coordination/cycle10-messagerie-v1-20261101`, vérifier les références, accuser réception et transmettre un compte-rendu à La Relieuse. Ne pas considérer ce dépôt comme un accusé.

- **C10-REL-20261101-SUITE-developpeuse** : ÉMISE ; lire `coordination/messagerie/courriers/C10-REL-20261101-SUITE-developpeuse.md`, accuser réception, rendre compte à La Relieuse.

## Point d'entrée V2
À chaque « T'as du courrier », consulter cette boîte et `MESSAGES_C10.md` sur la branche `coordination/cycle10-messagerie-v1-20261101`, jamais uniquement sur sa branche personnelle. Signaler une erreur de lecture plutôt qu'une boîte vide. Accuser réception avec SHA.

## Activation explicite commune — 2026-11-01
Lire `coordination/messagerie/PROTOCOLE_ACTIVATION_17_ATELIERS_C10.md` sur la branche centrale. Pour les courriers **ÉMISE** ci-dessus, faire une lecture réelle, accuser réception sur branche personnelle avec commit/blob, puis transmettre preuves et résultats à La Relieuse. L'activation de la boîte ne constitue **pas** une réception. En cas d'erreur d'accès, la signaler précisément.


## Reprise C09 — synchronisation débloquée (2026-11-05)
- HEAD #186 contrôlé avant reprise : `e936a01bbc72d46123a163daea68caf82b0e8a65`.
- Les chemins canoniques `coordination/REFERENTIEL_VIVANT.md` et `coordination/REGISTRE_DECISIONS.md`, auparavant 404, **existent désormais sur cette branche et ont été lus**. Le blocage documentaire de la passe précédente est levé. Les décisions D-C09-001 à D-C09-011 sont à appliquer sans reconstituer de registres parallèles.
- Audit réel du HTML `explorer.html` et du moteur `assets/nav-01/graph-data.mjs` : quatre nœuds actuels Encyclopédie/Médiathèque/Carte/Entraide ; ordre et identifiants incompatibles avec la cible. `assets/nav-01/explorer.mjs` importe directement `DOORS` et gère `#porte/...` ; une simple substitution textuelle serait régressive. L'Atlas doit être déplacé dans l'Encyclopédie avec conservation de son lien `atlas.html`, non supprimé. Les routes `#porte/carte` et `#porte/entraide` doivent rester des alias.
- Plan d'implémentation sûr : (1) module de migration de routes et tests d'alias ; (2) grille HTML, données et nœuds synchronisés ; (3) catalogues Wiki/Archives/Médiathèque directement filtrables ; (4) outils Faire Ensemble préservés ; (5) panneaux adaptatifs, i18n et contrôles navigateur. Ne pas prétendre à une version certifiée avant CI.
- Contrôles de cette reprise : lecture directe des deux registres et de trois fichiers du moteur, vérification de l'ordre des nœuds et des anciennes routes. Aucun test d'exécution, déploiement ou modification des SVG.
