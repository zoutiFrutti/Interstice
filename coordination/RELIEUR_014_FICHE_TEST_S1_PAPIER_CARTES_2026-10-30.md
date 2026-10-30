# LA FAILLE NOIRE × INTERSTICE — Le Relieur
## S1 · Fiche d'essai comparé « papier / interface » pour la découverte et la coopération
**30 octobre 2026 · Prototype fictif uniquement · Préparation, pas essai humain effectué.**

**But limité :** déterminer si une personne sans smartphone peut exprimer un besoin fictif de réparation de vélo, comparer des informations de ressources fictives et poursuivre la discussion hors plateforme **sans contact privé imposé, promesse de disponibilité ni classement par popularité**.

### Source et versions à contrôler à l'ouverture de l'essai
- [PR #41, code et tests du prototype](https://github.com/zoutiFrutti/Interstice/pull/41) ; au point de contrôle du Relieur : `898c9e80ecd6d3a9be02800c3cff7659fd0845ed`. Branches susceptibles d'évoluer, **relever le nouveau SHA avant essai**.
- [PR #35, style et accueil candidats](https://github.com/zoutiFrutti/Interstice/pull/35) ; la feuille de style `cartes-design.css` a le **même blob SHA** dans #35 et #41 au contrôle : `07e8c54fff6cc4dfc66f42ba19cf364962e400c5`. Cette égalité ne prouve pas la compatibilité de l'ensemble.
- [Scénarios S1–S3 existants](RELIEUR_PILOTE_3_SCENARIOS_CONCRETS_2026-10-30.md) ; [critères A01–A15](ANARCHITECTE_CRITERES_ACCEPTATION_39_58_2026-10-30.md) et garanties Juriste F1–F10. Le présent protocole est un **complément opérationnel**, pas un nouveau scénario concurrent.

### A. Consignes communes
Aucune personne réelle n'a été sollicitée, aucun lieu réservé. Pour un premier essai futur : volontaires et consentement explicite ; personne facilitatrice et personne observatrice, rôles tournants ; pas de nom ou coordonnées dans les notes ni dans GitHub ; pas de capture d'écran comportant des données réelles. Tester d'abord **sur papier**. Prévoir une pause, refus et sortie sans pression. Les personnages et organisations sont inventés ; aucune contribution ni rencontre n'est réellement ouverte par le prototype. Ne pas inventer un canal de rectification confidentiel.

**Matériel de table :** feuille vierge, trois cartes ci-dessous, minuteur local facultatif, grille d'observation anonyme imprimée ou recopiée. Aucun compte ni application obligatoire.

### B. Cartes fictives à distribuer
- **B · Besoin :** « J'aimerais apprendre à réparer un vélo, près de Lisle-sur-Tarn. Pas de smartphone, pas d'adresse publiable, disponibilité souple. » Aucun soutien, vote ou abonnement.
- **R · Offre possible :** « Je peux éventuellement prêter un outil et expliquer un geste de mécanique, mais rien n'est confirmé et je peux refuser. » Pas de numéro de téléphone.
- **F · Facilitation :** « J'aide à comparer les options sans promettre la disponibilité, obtenir un accord ou parler au nom d'une initiative. Je ne conserve pas de fichier de contacts. »
- **A · Alerte :** « Une personne ne souhaite pas témoigner ; une autre ne souhaite plus prêter. On doit pouvoir continuer sans imposer de contribution ou de justificatif. »

### C. Parcours papier, 15 minutes
1. Écrire le **besoin**, sa zone générale et une contrainte. Rien sur l'identité, la santé, le domicile ou les opinions.
2. Sur deux cartes papier fictives, distinguer une initiative de réparation, une ressource outillage, une offre conditionnelle et un projet envisagé. Aucun de ces statuts ne signifie « disponible aujourd'hui ».
3. Faire proposer deux solutions : rechercher dans la commune ET au-delà ; ou constater qu'aucune solution n'est confirmée. Ne pas confondre le fait d'être recensé et celui d'être accessible.
4. Injecter un retrait de la personne qui prête et observer la possibilité de refuser, suspendre ou choisir une alternative sans sanction.
5. Demander comment les personnes pourraient **poursuivre hors application** si un accord réel distinct était obtenu ultérieurement. Sans intermédiaire volontaire et fonctionnel, inscrire « aucun contact possible actuellement ».
6. Faire noter par une personne observatrice : autonomie, charge d'accueil, risque de contact imposé, désaccord, dernier état clairement formulé.

### D. Parcours interface de démonstration, 15 minutes (seulement si un aperçu local autorisé est disponible)
La page `decouvrir-initiatives.html` existe **dans la branche PR #41**, pas comme service cartographique réel annoncé publiquement. Utiliser un aperçu local de cette branche ; ne pas supposer une URL déployée. Vérifier le nouveau HEAD au démarrage, comparer à la version graphique #35 si une intégration a été préparée.

1. Choisir **Carte des communs**, puis **Liste complète** ; vérifier la présence de la notice « PROTOTYPE FICTIF ».
2. Chercher `Lisle-sur-Tarn`, puis le domaine `Réparation` : noter honnêtement si le résultat est vide. Une recherche trop locale peut exclure une ressource d'une commune voisine ; **un état vide n'est pas un échec technique par lui-même**.
3. Effacer le filtre territorial, choisir `Réparation` : la fiche fictive **« Les vélos en partage »** (Gaillac, ID `demo-cycles`) figure dans les données source. Elle annonce des compétences et du petit outillage **fictifs**, pas une permanence réelle. Vérifier le texte exact de la fiche à l'écran.
4. Examiner la **Carte des possibles** : la fiche fictive **« Une rencontre de réparation à inventer »** (Gaillac/Lisle-sur-Tarn, `demo-projet-gaillac`) est une **intention imaginée**, sans événement prévu ni accord. Ne pas la présenter comme une alternative déjà disponible.
5. Revenir à la liste, ouvrir et fermer la fiche au clavier et au doigt, et constater que le contenu n'exige pas le chargement de la carte SVG.
6. Simuler une panne du module cartographique sur un environnement de test autorisé ; la liste doit rester consultable, sans perte de fiche. Pas de test réseau artificiellement déclaré effectué dans ce protocole.
7. Vérifier qu'aucun appel à participer ne requiert un téléphone ou un rendez-vous imaginaire. Ne pas faire d'envoi de formulaire réel.
8. Tester un cas fictif `territories=[]` sur branche de test technique : fiche toujours dans la **liste**, sans épingle. Ne pas enregistrer de cas réel sans consentement.
9. Tester un navigateur de 390 px et un clavier ; **le Crosscall physique et le lecteur d'écran restent à essayer réellement**. Une capture CI ne leur est pas équivalente.
10. Évaluer si la personne comprend la différence entre **trouver une fiche**, **avoir une ressource potentielle** et **obtenir un accord individuel volontaire**.

### E. Feuille de résultats non nominatifs
À remplir **après** un vrai essai. Ne pas la marquer « OK » d'avance.

| Critère de réussite observé | Papier | Interface | Remarque non identifiable |
| --- | --- | --- | --- |
| Le besoin sans vote est exprimable | non testé | non testé | |
| La commune ne devient pas un filtre excluant sans alternative | non testé | non testé | |
| La fiche distingue fiction, source et disponibilité | non testé | non testé | |
| Le refus de prêt ne pénalise pas l'accès | non testé | non testé | |
| La carte n'est pas obligatoire | non testé | non testé | |
| La liste retrouve les mêmes entrées admissibles | non testé | non testé | |
| Une fiche sans point existe dans la liste | non testé | non testé | |
| Le contact n'est ni exigé ni inventé | non testé | non testé | |
| Les charges de facilitation sont reconnues et limitées | non testé | non testé | |
| Une suite hors plateforme peut être envisagée sans surveillance | non testé | non testé | |

**Après essai réel, trois sorties possibles :** « parcours compréhensible », « incomplet mais contournable », « bloqué ». Ne pas traiter l'absence d'accord comme un échec moral. Ne pas programmer un recrutement sur la seule base de cette fiche.

### F. Questions qu'un test peut révéler sans inventer de solution
- Une recherche strictement communale masque-t-elle une ressource voisine, et la personne comprend-elle comment élargir ?
- Un besoin sans offre exactement correspondante peut-il rester visible sans créer de faux rapprochement ?
- Qui ferait réellement l'accueil et pour combien de temps, et qui prendrait le relais si cette personne se retire ?
- Que deviennent une proposition conditionnelle, une fiche contestée ou une initiative refusant le référencement ?
- Qui recueille une correction **sans** transférer de données sensibles dans des commentaires publics ?

**État au 30/10 :** feuille de test écrite et enregistrée, exercices non réalisés avec des personnes, zéro donnée privée, aucune modification applicative ou décision collective.
