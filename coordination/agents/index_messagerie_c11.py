#!/usr/bin/env python3
"""Extrait le registre documentaire C10 sans transformer EM ISE en RE CUE."""
import argparse
import json
import re
from pathlib import Path

MESSAGE_RE = re.compile(r"^\|\s*(C10-(?:MSG-\d+|VIG-\d+))\s*\|")

def parse_index(markdown):
    result = []
    seen = set()
    for line in markdown.splitlines():
        match = MESSAGE_RE.match(line)
        if not match:
            continue
        parts = [p.strip() for p in line.strip().strip("|").split("|")]
        if len(parts) != 7:
            raise ValueError("Ligne de message mal formee")
        mid, source, destinataires, sujet, priorite, etat, action = parts
        if mid in seen:
            raise ValueError("Identifiant de courrier duplique : " + mid)
        seen.add(mid)
        if etat not in {"ÉMISE", "REÇUE", "TRAITÉE", "BLOQUÉE"}:
            raise ValueError("Etat non reconnu : " + etat)
        result.append({"id":mid,"source":source,"destinataires":destinataires,"sujet":sujet,
                       "priorite":priorite,"etat_documentaire":etat,"action":action,
                       "reception_verifiee":False})
    return result

def render(messages, ref):
    lines = ["# La Relieuse : courriers documentaires C10", "",
             f"Source : `{ref}` / `coordination/messagerie/MESSAGES_C10.md`", "",
             "**Lecture seule : aucune reception n'est deduite de ce tableau.**", "",
             "| Courrier | Destinataire(s) | Priorite | Etat dans l'index | Reception verifiee |",
             "|---|---|---|---|---|"]
    for msg in messages:
        lines.append(f"| {msg['id']} | {msg['destinataires']} | {msg['priorite']} | {msg['etat_documentaire']} | Non |")
    lines += ["", "Les accusés sur branches individuelles doivent être rapprochés séparément.", ""]
    return "\n".join(lines)

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--entree",required=True)
    p.add_argument("--ref",required=True)
    p.add_argument("--sortie",default="tableau-courriers-c10.md")
    args=p.parse_args()
    messages=parse_index(Path(args.entree).read_text(encoding="utf-8"))
    Path(args.sortie).write_text(render(messages,args.ref),encoding="utf-8")
    print(json.dumps({"courriers_index":len(messages),"receptions_verifiees":0}))

if __name__=="__main__":
    main()
