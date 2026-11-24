# C28 — publication éditoriale individuelle, espace propriétaire

Statut : candidat technique. Les textes, les identifiants Drive, les jetons et le registre d'exploitation ne doivent jamais être committés dans ce dépôt public. Aucun changement de main, de Pages, d'accès, de base Supabase ou de déploiement. Le visa de conservation antérieur n'est pas automatiquement un visa de publication. Le nouveau circuit est distinct du générateur de relectures privées C07.

## Parcours opérateur (Linux/macOS, Python 3, Node et dépendances existantes)

Créer un répertoire privé **hors de tout dépôt Git**, permissions 0700. Depuis le checkout de la candidate :
    
    umask 077
    mkdir -p "$HOME/interstice-prive"
    chmod 700 "$HOME/interstice-prive"
    node scripts/build-nav-preview.mjs "$HOME/interstice-prive/base"
    python3 scripts/private_editorial.py --store "$HOME/interstice-prive/registre" stage BIO-009 --title "Titre exact" --file "$HOME/interstice-prive/BIO-009.txt"

Exporter le Google Doc final en texte UTF-8, dans ce répertoire. Autre possibilité : remplacer --file par --google-doc avec l'identifiant du document, et fournir un jeton Google OAuth de courte durée, lecture seule (drive.readonly), via la variable INTERSTICE_DOCS_TOKEN. Ne jamais copier un jeton dans la ligne de commande ou le dépôt. Le flux OAuth n'est pas implémenté : l'opérateur doit obtenir son jeton selon les règles de son organisation. Révoquer/retirer le jeton après usage.

La commande stage retourne l'empreinte SHA-256 du contenu normalisé, titre et identifiant compris. Comparer le texte exporté au document autorisé. Chaque modification exige une nouvelle approbation. Les images, la mise en forme enrichie et les liens actifs ne sont pas importés dans cette première version texte ; le rendu échappe tout HTML. Préserver le document original.

Après contrôle de la deuxième lecture, des droits et de la confidentialité, relever l'autorisation de publication individuelle, avec une référence interne réelle, puis :

    python3 scripts/private_editorial.py --store "$HOME/interstice-prive/registre" approve BIO-009 --sha EMPREINTE --decision REFERENCE_INTERNE --rights-reviewed --privacy-reviewed --second-read
    python3 scripts/private_editorial.py --store "$HOME/interstice-prive/registre" activate BIO-009 --sha EMPREINTE --expected none --decision REFERENCE_INTERNE
    python3 scripts/private_editorial.py --store "$HOME/interstice-prive/registre" build --base "$HOME/interstice-prive/base" --output "$HOME/interstice-prive/aperçu-01" --owner-private

Les champs de confirmation ne sont pas des preuves indépendantes : seul l'opérateur habilité doit les renseigner, après contrôle effectif. L'état actif ne signifie pas déployé. Pour une mise à jour, utiliser l'empreinte active comme --expected. Pour revenir à une version antérieure déjà approuvée, utiliser activate avec son empreinte et une décision de retour, puis reconstruire dans un répertoire neuf. Le registre conserve toutes les versions, les visas et les événements. La file historique et les fiches HELD restent inchangées.

## Réception privée et mise en ligne

    python3 -m http.server 8080 --bind 127.0.0.1 --directory "$HOME/interstice-prive/aperçu-01"

Contrôler la page de lectures et le lien Publications privées, le texte, le manifeste et les sommes de contrôle. Le paquet doit rester dans un espace propriétaire authentifié. Le drapeau --owner-private et noindex ne sont PAS une authentification. Le serveur local n'est pas le site hébergé. Ne jamais publier ce dossier par Pages, artefact Actions, lien public ou stockage public. L'hébergeur privé existant doit être utilisé avec ses contrôles d'accès : propriétaire seul, zéro visiteur externe, puis vérification authentifiée et contrôle du refus sans session. L'accès opérateur à l'hébergeur reste un prérequis externe. Le circuit ne modifie pas l'ancien aperçu. Les six premiers IDs sont présents dans le catalogue : BIO-009, BIO-010, BIO-012, BIO-014, ASSO-008 et EXP-001 ; aucun corps privé n'est contenu ici.

## Tests et limites

    python3 -m unittest discover -s tests -p test_private_editorial.py -v

Tests de données fictives : refus des versions non approuvées, identités bloquées, rejeu idempotent, révision concurrente, retour arrière, intégrité, protection du checkout, neutralisation HTML, lien depuis l'aperçu, absence de déploiement. Le pilote réel doit être importé dans le registre privé, hors GitHub. Pas de stockage réseau ni d'authentification nouvelle. L'application du visa et l'hébergement ne sont pas simulés comme des succès.
