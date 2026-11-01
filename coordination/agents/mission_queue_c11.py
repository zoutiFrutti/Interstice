#!/usr/bin/env python3
"""File de missions hors ligne, sans IA, sans reseau ni effet externe."""
import argparse
import json
from pathlib import Path
from demo_c11 import run

MAX_MISSIONS = 20
ALLOWED_TYPES = {"audit_references"}

def process(queue):
    if not isinstance(queue, dict) or not isinstance(queue.get("missions"), list):
        raise ValueError("File de missions invalide")
    missions = queue["missions"]
    if len(missions) > MAX_MISSIONS:
        raise ValueError("Trop de missions")
    results, ids = [], set()
    for mission in missions:
        if not isinstance(mission, dict):
            raise ValueError("Mission invalide")
        mission_id = mission.get("id")
        if not isinstance(mission_id, str) or not mission_id or len(mission_id) > 80:
            raise ValueError("Identifiant de mission invalide")
        if mission_id in ids:
            raise ValueError("Identifiant de mission duplique")
        ids.add(mission_id)
        if mission.get("type") not in ALLOWED_TYPES:
            results.append({"id": mission_id, "statut": "REFUSEE", "motif": "Type de mission non autorise"})
            continue
        if mission.get("publication") or mission.get("ecriture") or mission.get("envoi_externe"):
            results.append({"id": mission_id, "statut": "REFUSEE", "motif": "Action externe interdite"})
            continue
        results.append({"id": mission_id, "statut": "SIMULEE", "rapport": run(mission)})
    return {"statut": "DEMONSTRATION_NON_IA", "missions_total": len(missions), "resultats": results, "depense_api_eur": 0}

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--entree", default="coordination/agents/exemple_file_missions_c11.json")
    parser.add_argument("--sortie", default="file-missions-c11-rapport.json")
    args = parser.parse_args()
    data = json.loads(Path(args.entree).read_text(encoding="utf-8"))
    result = process(data)
    Path(args.sortie).write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("Missions traitees :", result["missions_total"])

if __name__ == "__main__":
    main()
