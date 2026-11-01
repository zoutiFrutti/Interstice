#!/usr/bin/env python3
"""Tableau de suivi hors ligne des missions simulees C11."""
import argparse
import json
from pathlib import Path

def render(data):
    if data.get("statut") != "DEMONSTRATION_NON_IA":
        raise ValueError("Seules les simulations C11 sont acceptees")
    rows = ["# La Relieuse : tableau des missions C11", "", "**Simulation sans IA. Aucun travail editorial reel effectue.**", "",
            "| Mission | Statut | Ateliers simules |", "|---|---|---|"]
    for item in data["resultats"]:
        mission_id = str(item["id"]).replace("|", "/").replace("\n", " ")[:80]
        status = item["statut"]
        roles = ", ".join(x["atelier"] for x in item.get("rapport", {}).get("ateliers", []))
        rows.append(f"| {mission_id} | {status} | {roles or 'Aucun'} |")
    rows += ["", "## Regles", "- Aucune publication, fusion ou communication externe", "- Les refus sont visibles et ne sont pas executes", "- Cout API IA : 0 EUR", ""]
    return "\n".join(rows)

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--entree", default="file-missions-c11-rapport.json")
    p.add_argument("--sortie", default="tableau-relieuse-c11.md")
    a = p.parse_args()
    data = json.loads(Path(a.entree).read_text(encoding="utf-8"))
    Path(a.sortie).write_text(render(data), encoding="utf-8")

if __name__ == "__main__":
    main()
