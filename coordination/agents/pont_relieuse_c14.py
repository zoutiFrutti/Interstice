#!/usr/bin/env python3
"""Pont C14 Issue GitHub -> moteur local -> commentaire candidat, sans IA."""
import json
import os
from pathlib import Path

from orchestrateur_c14 import markdown, traiter

PREFIX = "[RELIEUSE-C14]"
MARKER = "<!-- C14-ORCHESTRATRICE-RESULTAT -->"
MAX_BODY = 50000


def verifier_auteur(event, proprietaire):
    issue = event.get("issue", {})
    if not isinstance(issue, dict):
        return False
    utilisateur = issue.get("user")
    titre = issue.get("title")
    return (isinstance(utilisateur, dict) and isinstance(titre, str)
            and isinstance(utilisateur.get("login"), str)
            and isinstance(proprietaire, str)
            and utilisateur["login"].casefold() == proprietaire.casefold()
            and titre.startswith(PREFIX))


def commentaire(event, proprietaire):
    if not verifier_auteur(event, proprietaire):
        return None
    body = event["issue"].get("body") or ""
    if not isinstance(body, str) or len(body.encode("utf-8")) > MAX_BODY:
        return (f"{MARKER}\n\n**REFUSEE_ENTREE** : corps de mission trop volumineux "
                "ou incorrect. Aucun traitement réalisé.")
    try:
        mission = json.loads(body)
        rapport = traiter(mission)
    except (ValueError, TypeError, KeyError, UnicodeError):
        # Ne pas inclure la mission ou le détail technique dans le commentaire public.
        return (f"{MARKER}\n\n**REFUSEE_ENTREE** : JSON invalide, schéma refusé "
                "ou dépendances incorrectes. Aucun résultat candidat.")
    statut = ("RESULTAT_PARTIEL_BLOQUE" if rapport["bilan"]["refusees"]
              or rapport["bilan"]["bloquees"] else "RESULTAT_DETERMINISTE_CANDIDAT")
    return (MARKER + f"\n\n**C14 : {statut}**\n\n"
            + markdown(rapport) + "\n\n*Ce rapport ne prouve ni exécution d'IA, "
            "ni consultation de sources, ni décision éditoriale.*")


def main():
    with open(os.environ["GITHUB_EVENT_PATH"], encoding="utf-8") as f:
        event = json.load(f)
    repo = os.environ["GITHUB_REPOSITORY"]
    proprietaire = repo.split("/")[0]
    texte = commentaire(event, proprietaire)
    if texte is None:
        print("Issue non autorisée ou hors préfixe : aucun retour.")
        return
    Path("commentaire-orchestratrice-c14.md").write_text(texte + "\n", encoding="utf-8")
    if os.environ.get("GITHUB_OUTPUT"):
        with open(os.environ["GITHUB_OUTPUT"], "a", encoding="utf-8") as f:
            f.write("should_comment=true\n")
    print("Commentaire candidat C14 préparé, sans IA ni effet externe.")


if __name__ == "__main__":
    main()
