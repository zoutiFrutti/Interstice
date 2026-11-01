#!/usr/bin/env python3
"""Convertit le rapport JSON de la demonstration C11 en Markdown lisible."""
import argparse
import json
from pathlib import Path

def render(report):
    if report.get("statut") != "DEMONSTRATION_NON_IA":
        raise ValueError("Ce rendu n'accepte que les rapports de demonstration")
    sections = {entry["atelier"]: entry["resultat"] for entry in report["ateliers"]}
    med = sections["mediatheque"]
    lec = sections["lectrice"]
    rel = sections["relieuse"]
    lines = [
        "# Rapport de demonstration C11",
        "",
        "**Attention : simulation informatique, pas des agents IA.**",
        "",
        f"Mission : `{report.get('mission', 'sans-id')}`",
        "",
        "## La Relieuse : synthese",
        f"- References examinees : {rel['ressources_lues']}",
        f"- Doublons exacts d'URL : {rel['doublons']}",
        f"- References sans URL : {rel['a_verifier']}",
        "",
        "## La Mediatheque : doublons",
    ]
    for item in med["doublons_url_exacts"]:
        lines.append(f"- References {item['premiere']} et {item['seconde']} : meme URL")
    if not med["doublons_url_exacts"]:
        lines.append("- Aucun doublon exact detecte")
    lines += ["", "## La Lectrice : references a completer"]
    for item in lec["references_sans_url"]:
        lines.append(f"- Reference {item['ligne']} : URL manquante")
    if not lec["references_sans_url"]:
        lines.append("- Aucune URL manquante")
    lines += ["", "## Limites", "- Pas de recherche ni de verification externe", "- Pas d'IA, pas de depense API, pas de publication", ""]
    return "\n".join(lines)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--entree", default="rapport-demo-c11.json")
    parser.add_argument("--sortie", default="rapport-demo-c11.md")
    args = parser.parse_args()
    report = json.loads(Path(args.entree).read_text(encoding="utf-8"))
    Path(args.sortie).write_text(render(report), encoding="utf-8")

if __name__ == "__main__":
    main()
