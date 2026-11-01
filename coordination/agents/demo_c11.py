#!/usr/bin/env python3
"""Demonstration hors ligne de la circulation d'une mission entre ateliers.
Aucune IA, aucun reseau, aucune depense, aucune publication.
"""
import argparse
import json
from pathlib import Path

ROLES = {
    "relieuse": "Coordonne et consolide les rapports.",
    "mediatheque": "Inventorie les ressources et detecte les doublons exacts.",
    "lectrice": "Signale les references sans URL et les affirmations non controlees.",
}

def run(mission):
    if mission.get("type") != "audit_references":
        raise ValueError("Seul audit_references est autorise")
    resources = mission.get("ressources", [])
    if not isinstance(resources, list) or len(resources) > 100:
        raise ValueError("Liste de ressources invalide")
    seen, duplicates, missing = {}, [], []
    for i, resource in enumerate(resources):
        if not isinstance(resource, dict):
            raise ValueError("Ressource invalide")
        title = str(resource.get("titre", "")).strip()
        url = str(resource.get("url", "")).strip()
        key = url.lower().rstrip("/") if url else ""
        if key and key in seen:
            duplicates.append({"premiere": seen[key], "seconde": i + 1, "url": url})
        elif key:
            seen[key] = i + 1
        if not url:
            missing.append({"ligne": i + 1, "titre": title, "probleme": "URL absente"})
    return {
        "statut": "DEMONSTRATION_NON_IA",
        "mission": mission.get("id", "sans-id"),
        "ateliers": [
            {"atelier": "mediatheque", "resultat": {"doublons_url_exacts": duplicates}},
            {"atelier": "lectrice", "resultat": {"references_sans_url": missing}},
            {"atelier": "relieuse", "resultat": {"ressources_lues": len(resources), "doublons": len(duplicates), "a_verifier": len(missing)}},
        ],
        "limitations": [
            "Aucune recherche web ni verification de sources",
            "Doublons uniquement par URL normalisee, pas semantiques",
            "Aucun agent IA ni conversation ChatGPT n'a ete execute",
            "Aucun cout API et aucune modification de publication",
        ],
    }

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--mission", default="coordination/agents/exemple_mission_c11.json")
    parser.add_argument("--sortie", default="rapport-demo-c11.json")
    args = parser.parse_args()
    mission = json.loads(Path(args.mission).read_text(encoding="utf-8"))
    result = run(mission)
    Path(args.sortie).write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps(result["ateliers"][-1], ensure_ascii=False))

if __name__ == "__main__":
    main()
