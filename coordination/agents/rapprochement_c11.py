#!/usr/bin/env python3
"""Rapproche les accuses explicitement verifies, sans inventer de reception."""
import argparse
import json
import re
from pathlib import Path
from index_messagerie_c11 import parse_index

SHA_RE = re.compile(r"^[a-f0-9]{40}$")
def reconcile(messages, receipts):
    if not isinstance(receipts, list):
        raise ValueError("Accuses invalides")
    known = {m["id"] for m in messages}
    seen = set()
    verified = {}
    exceptions = []
    for item in receipts:
        if not isinstance(item, dict):
            raise ValueError("Accuse invalide")
        mid = item.get("message_id")
        sha = item.get("commit_sha")
        branch = item.get("branch")
        if mid in seen:
            raise ValueError("Accuse duplique : " + str(mid))
        seen.add(mid)
        if mid not in known:
            exceptions.append({"message_id":mid,"raison":"courrier absent du registre"})
            continue
        if not isinstance(sha,str) or not SHA_RE.fullmatch(sha) or not isinstance(branch,str) or not branch:
            exceptions.append({"message_id":mid,"raison":"preuve commit/branche absente ou mal formee"})
            continue
        # Un SHA syntaxiquement valide n'atteste pas la verification de la preuve.
        if item.get("preuve_verifiee") is not True:
            exceptions.append({"message_id":mid,"raison":"preuve non verifiee"})
            continue
        verified[mid] = {"commit_sha":sha,"branch":branch}
    rows = []
    for msg in messages:
        rows.append({"id":msg["id"],"etat_index":msg["etat_documentaire"],
                     "accuse_verifie":msg["id"] in verified,
                     "preuve":verified.get(msg["id"])})
    return {"statut":"RAPPROCHEMENT_DOCUMENTAIRE","courriers":rows,"exceptions":exceptions,
            "total_accuses_verifies":len(verified)}

def render(report):
    lines = ["# La Relieuse : rapprochement des accuses", "",
             "**Un accusé est reconnu uniquement après contrôle explicite de sa preuve.**", "",
             "| Courrier | Etat index | Accuse verifie | Commit |",
             "|---|---|---|---|"]
    for item in report["courriers"]:
        sha = item["preuve"]["commit_sha"] if item["preuve"] else "—"
        lines.append(f"| {item['id']} | {item['etat_index']} | {'Oui' if item['accuse_verifie'] else 'Non'} | {sha} |")
    lines += ["", "## Exceptions"]
    for e in report["exceptions"]:
        lines.append(f"- {e['message_id']} : {e['raison']}")
    if not report["exceptions"]:
        lines.append("- Aucune")
    lines += ["", "Aucune modification automatique des boites ou des statuts du registre.", ""]
    return "\n".join(lines)

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--index",required=True)
    p.add_argument("--accuses",required=True)
    p.add_argument("--sortie",default="rapprochement-accuses-c10.md")
    a=p.parse_args()
    messages=parse_index(Path(a.index).read_text(encoding="utf-8"))
    receipts=json.loads(Path(a.accuses).read_text(encoding="utf-8"))
    report=reconcile(messages,receipts)
    Path(a.sortie).write_text(render(report),encoding="utf-8")
    print(json.dumps({"courriers":len(report["courriers"]),"accuses_verifies":report["total_accuses_verifies"]}))

if __name__=="__main__":
    main()
