
# LA FAILLE NOIRE × INTERSTICE — Avis de QA de L'Anarchitecte
**31 octobre 2026 · Trois passes sur PR #51 · AVIS : NON PRÊT POUR INTÉGRATION/PUBLICATION**

## Référentiel et méthode
- Audit du **SHA source initial PR #51** : `783b43334b3e6f1819aea36accf826759fa64478`, branche `atelier/anarchitecte-contrat-editorial-20261031`. La PR est une transmission documentaire avec pour base une **branche de coordination**, et non `main`.
- Contrôles statiques par lecture GitHub : arbre des chemins, 24 fichiers `wiki-*.html`, `wiki.html`, `bibliotheque.html`, `index.html`, `ressources-data.js`, `ressources.js`, registre éditorial, source ÉCO et pages politiques historiques.
- Les contrôles de présence de routes utilisent les `href`/`src` HTML explicites ; contrôle des ancres `#...` **dans leur propre document**, et absence d'ID HTML dupliqué. Pas de rendu en navigateur, pas de validation des liens externes par HTTP, des ancres vers autres documents ni du code qui générerait des liens dynamiquement.
- Les sources historiques/écologiques et les décisions sont rapprochées des dossiers Archiviste, Lectrice, Tisseuse, Relieuse et du contrat écologie déjà présent sur `main`. Un dossier candidat n'est pas une page candidate publiée.

## Tableau d'acceptation

| Vérification | Résultat constaté | Verdict |
| --- | --- | --- |
| 24 fichiers `wiki-*.html` de la candidate existent | 24/24 trouvés dans l'arbre | **PASS** présence |
| Chemins `href` locaux directs des 24 pages | Une destination absente : `wiki-mutualiser-materiel.html` depuis `wiki-autonomie-materielle-savoir-faire.html` | **FAIL** |
| Ancres `#id` internes des 24 pages | 0 ancre manquante détectée par l'extraction | **PASS limité** |
| IDs HTML dupliqués dans les 24 pages | Aucun doublon détecté par l'extraction | **PASS limité** |
| Renvois d'ID BIO/ARCH/ASSO/COL/EXP/FN dans les 24 pages | Aucun identifiant littéral du corpus présent dans ces HTML sur ce SHA | **FAIL fonctionnel / contenu non intégré** |
| Navigation transversale | 4 pages sans lien direct vers un autre fichier `wiki-*.html` (association collégiale, décision collective, lecture croisée travail-soin-pouvoir, police-décès-mémoire) | **RÉSERVE** |
| 44 identifiants du registre | 44 uniques, 22 BIO/8 ASSO/8 ARCH/4 EXP/2 COL | **PASS** inventaire |
| Préfixe vs dossier Drive | 5 discordances de rangement : ARCH-001, EXP-001/002/004/005 | **RÉSERVE** de provenance, pas renumérotation |
| 71 notices FN | Toutes référencées, 2 paires à URL identique ; droits/alias non validés | **RÉSERVE** |
| Statuts de visa du registre contrôlé | 44 A_FAIRE, 71 AUCUN_VISA_HUMAIN, 24 A_FAIRE | **FAIL éditorial** pour édition candidate |
| Recherche Wiki | `wiki.html` interroge Wikipédia uniquement ; pas de recherche locale | **FAIL** |
| Médiathèque FN | 30 ressources statiques + système de ressources approuvées existant ; les 71 FN ne sont pas raccordées | **NON IMPLÉMENTÉ** |
| ÉCO-001A/B/C | Page écologique existante avec ancres `axe1..axe6` ; aucun contenu des trois dossiers publié dans ce HTML sur le SHA | **PRÊT À POSITIONNER**, pas à publier |
| Index public nouvelle édition | Aucun `contenus/index-public.json`, `fiches/` ou moteur local trouvé dans l'arbre source | **NON IMPLÉMENTÉ** |
| QA navigateur/CI PR #51 au SHA d'origine | API Actions : 0 exécution au SHA ; statut combiné : aucun statut ; aucun test de navigation humaine | **NON EXÉCUTÉ** |
| HTTP du site et sources externes | Lecteur web n'a pas pu accéder aux pages GitHub Pages ; source GIEC : 403 via l'outil ; Nature : redirection impossible | **INDÉTERMINÉ**, ni « OK » ni « 404 » prouvés |

## Avis sur le raccord ÉCO
**ÉCO-001A** : enrichissement chronologique dans `wiki-ecologie-sociale-environnement.html#axe3` ; contextualiser via `#axe6` et pages Féminismes/Travail/Frontières.  
**ÉCO-001B** : dossier théorie/territoires/communs sur `#axe3`, renvois `#axe4` et `#axe6`, Socialismes/Logement/Autonomie.  
**ÉCO-001C** : histoire alimentaire et impacts sur `#axe5` (« Agriculture et alimentation ») ; renvois scientifiques `#axe1` et `#axe2`. **Séparer** éthique animale, science, données chiffrées et propositions politiques.  
Les ancres internes supplémentaires ne sont autorisées qu'avec du contenu relu et des liens réellement créés. Ne pas bâtir de routes nouvelles pour « préparer ».

## Blocages à lever avant visa et intégration
1. **P0** : visas explicites de Zout par identifiant/version et contrôles critiques/juridiques des fiches réellement retenues ; statut « non adopté collectivement » distinct, y compris pour le manifeste et la charte.
2. **P0 technique** : remplacer ou neutraliser `wiki-mutualiser-materiel.html`, inexistant à ce contrôle.
3. **P0 fonctionnalité** : recherche interne, index public filtrant uniquement les fiches approuvées, liens croisés résolus avec cibles publiques ; toutes les fiches non approuvées restent hors HTML/JS/JSON publics.
4. **P0 QA d'assemblage** : tests sur **nouveau SHA complet**, mobile 320/390/1280, focus clavier, zoom 200 %, lecteur d'écran, ancres transversales, absence de requête inutile, non-régression Wikipédia/Médiathèque ; pas de CI verte inférée.
5. **P1** : résoudre paires FN, crédit des éditions, droits des médias, niveaux de lecture des ÉCO ; traiter les liens politiques/historiques selon liens effectifs et non longueur artificielle des menus.

## Transmission
- **La Développeuse** : recevoir le tableau d'échecs et les routes à garder, préparer les tests puis rapporter le SHA et les preuves sur sa branche candidate ; ne pas confondre index documentaire et formulaires Supabase.
- **La Relieuse** : confronter les versions plus récentes des documents `main` et de sa branche au registre figé de PR #51 ; recueillir les visas, signaler les réserves attribuables et sélectionner un lot réaliste, sans prétendre avoir adopté le manifeste.
- **La Graphiste** : réutiliser les gabarits de PR #47/#50, sans donner l'apparence d'un statut « validé » aux contenus non visés.

**Décision finale : PR #51 peut rester en revue comme CONTRAT DOCUMENTAIRE CORRIGÉ. Elle n'est pas une candidate de publication testée. Aucun merge, migration, nouveau backend, publication ni déploiement n'a été réalisé.**
