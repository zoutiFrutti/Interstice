#!/usr/bin/env python3
"""Pont GitHub Issue -> Lectrice. L'issue est créée par La Relieuse dans ChatGPT."""
import json
import os
import sys
from lectrice_agent_c12 import execute, prepare

PREFIX="[RELIEUSE-LECTRICE]"
MAX_TEXT=12000

def extract(event, owner):
    issue=event.get("issue",{})
    title=issue.get("title","")
    user=issue.get("user",{}).get("login","")
    if not title.startswith(PREFIX) or user.casefold()!=owner.casefold():
        return None
    body=issue.get("body") or ""
    prepare(body)
    return body

def result_comment(event, owner, key, model):
    text=extract(event,owner)
    if text is None:
        return None
    if not key or not model:
        return ("**Mission reçue, exécution bloquée.** Le moteur Lectrice n'a pas encore "
                "de modèle et de clé API configurés. Aucun atelier n'a été exécuté.")
    try:
        report=execute(text,key,model)
    except Exception:
        return "**Mission reçue, exécution en échec.** Voir les journaux techniques du workflow. Aucun résultat validé."
    return ("## Analyse candidate de La Lectrice\n\n"
            +report["texte"][:18000]
            +"\n\n---\n*Résultat automatique non vérifié. Décision éditoriale réservée à Zout.*")

def main():
    with open(os.environ["GITHUB_EVENT_PATH"],encoding="utf-8") as f:
        event=json.load(f)
    repo=os.environ["GITHUB_REPOSITORY"]
    owner=repo.split("/")[0]
    comment=result_comment(event,owner,os.getenv("OPENAI_API_KEY",""),os.getenv("OPENAI_MODEL",""))
    if comment is None:
        print("Issue ignoree : prefixe ou auteur non autorise")
        return
    output=os.environ.get("GITHUB_OUTPUT")
    if output:
        with open(output,"a",encoding="utf-8") as f:
            f.write("should_comment=true\n")
    with open("commentaire-lectrice-c12.md","w",encoding="utf-8") as f:
        f.write(comment+"\n")
    print("Commentaire prepare")

if __name__=="__main__":
    main()
