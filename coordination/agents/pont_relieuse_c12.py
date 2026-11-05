#!/usr/bin/env python3
"""Pont GitHub Issue -> Lectrice ; retour tracable, aucune IA sans opt-in C13."""
import json
import os
import sys
from lectrice_agent_c12 import execute, prepare

PREFIX = "[RELIEUSE-LECTRICE]"
MARKER = "<!-- C13-LECTRICE-RESULTAT -->"
MAX_TEXT = 12000


def extract(event, owner):
    issue = event.get("issue", {})
    if not isinstance(issue, dict):
        return None
    title = issue.get("title", "")
    user = issue.get("user") or {}
    if not isinstance(title, str) or not isinstance(user, dict):
        return None
    login = user.get("login")
    if not title.startswith(PREFIX) or not isinstance(login, str) or login.casefold() != owner.casefold():
        return None
    body = issue.get("body") or ""
    prepare(body)
    return body


def _comment(status, message):
    return f"{MARKER}\n**État : {status}**\n\n{message}\n\n---\n*Retour automatique ; aucune validation, fusion ni publication éditoriale.*"


def result_comment(event, owner, key, model, enabled=False):
    try:
        text = extract(event, owner)
    except (TypeError, ValueError, AttributeError):
        # L'auteur est déjà filtré par le workflow ; on conserve un accusé pour les erreurs de saisie.
        return _comment("REFUSEE_ENTREE", "Mission reçue, mais texte invalide (20 à 12 000 caractères). Aucun appel IA.")
    if text is None:
        return None
    if not enabled:
        return _comment("BLOQUEE_AUTORISATION", "**Mission reçue, exécution bloquée.** L'activation IA C13 est désactivée. Aucun appel IA.")
    if not key or not model:
        return _comment("BLOQUEE_CONFIGURATION", "**Mission reçue, exécution bloquée.** Clé API ou modèle absent. Aucun appel IA.")
    try:
        report = execute(text, key, model)
    except Exception as error:
        # Ne jamais copier les détails d'exception : des bibliothèques peuvent y inclure des données privées.
        print("Échec du moteur Lectrice :", type(error).__name__, file=sys.stderr)
        return _comment("ECHEC_TECHNIQUE", "Mission reçue, exécution en échec. Voir le journal du workflow. Aucun résultat validé.")
    return _comment("ANALYSE_CANDIDATE", "## Analyse candidate de La Lectrice\n\n"
                    + report["texte"][:18000]
                    + "\n\n*Analyse IA non vérifiée : La Relieuse doit contrôler les affirmations et les sources.*")


def main():
    with open(os.environ["GITHUB_EVENT_PATH"], encoding="utf-8") as file:
        event = json.load(file)
    owner = os.environ["GITHUB_REPOSITORY"].split("/")[0]
    enabled = os.getenv("LECTRICE_AI_ENABLED", "") == "true"
    comment = result_comment(event, owner, os.getenv("OPENAI_API_KEY", ""),
                             os.getenv("OPENAI_MODEL", ""), enabled=enabled)
    if comment is None:
        print("Issue ignorée : préfixe ou auteur non autorisé")
        return
    output = os.environ.get("GITHUB_OUTPUT")
    if output:
        with open(output, "a", encoding="utf-8") as file:
            file.write("should_comment=true\n")
    with open("commentaire-lectrice-c12.md", "w", encoding="utf-8") as file:
        file.write(comment + "\n")
    print("Commentaire préparé ; IA activée :", enabled)


if __name__ == "__main__":
    main()
