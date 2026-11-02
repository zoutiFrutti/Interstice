#!/usr/bin/env python3
"""C15: contrat d'exécution IA, hors réseau et refus par défaut.

Ne fait aucun appel modèle. Le simulateur ne prétend pas produire une analyse.
"""
import argparse
import hashlib
import json
import re
from pathlib import Path

ROLES = {"lectrice", "mediatheque", "biographe", "juriste", "anarchitecte", "developpeuse", "orchestratrice"}
PROVIDERS = {"ollama_local", "api_distante"}
ID = re.compile(r"[A-Za-z0-9_-]{3,80}\Z")
MAX_PROMPT = 12000
MAX_TOKENS = 2048


def empreinte(value):
    data = json.dumps(value, sort_keys=True, ensure_ascii=False, separators=(",", ":")).encode()
    return hashlib.sha256(data).hexdigest()


def verifier(request):
    required = {"schema", "mission_id", "atelier", "fournisseur", "modele", "contenu",
                "classification", "autorisation", "limites"}
    if not isinstance(request, dict) or set(request) != required:
        raise ValueError("Schéma d'exécution non conforme")
    if request["schema"] != "c15.v1" or not isinstance(request["mission_id"], str) or not ID.fullmatch(request["mission_id"]):
        raise ValueError("Mission invalide")
    if request["atelier"] not in ROLES or request["fournisseur"] not in PROVIDERS:
        raise ValueError("Atelier ou fournisseur inconnu")
    if request["classification"] != "PUBLIC":
        raise ValueError("Données non publiques refusées")
    if not isinstance(request["modele"], str) or not 1 <= len(request["modele"]) <= 120 or not re.fullmatch(r"[\w./:-]+", request["modele"]):
        raise ValueError("Modèle invalide")
    if not isinstance(request["contenu"], str) or not 20 <= len(request["contenu"]) <= MAX_PROMPT:
        raise ValueError("Contenu invalide")
    auth = request["autorisation"]
    if not isinstance(auth, dict) or set(auth) != {"ia_active", "sortie_candidat_uniquement"}:
        raise ValueError("Autorisation invalide")
    if type(auth["ia_active"]) is not bool or auth["sortie_candidat_uniquement"] is not True:
        raise ValueError("Autorisation non valide")
    limites = request["limites"]
    if not isinstance(limites, dict) or set(limites) != {"tokens_sortie_max", "appels_max", "cout_eur_max"}:
        raise ValueError("Limites manquantes")
    if type(limites["tokens_sortie_max"]) is not int or not 1 <= limites["tokens_sortie_max"] <= MAX_TOKENS:
        raise ValueError("Budget de tokens invalide")
    if type(limites["appels_max"]) is not int or limites["appels_max"] != 1:
        raise ValueError("Un appel maximum autorisé par mission")
    if type(limites["cout_eur_max"]) not in (float, int) or not 0 <= limites["cout_eur_max"] <= 1:
        raise ValueError("Budget euros invalide")
    return request


def preparer(request):
    verifier(request)
    provider = request["fournisseur"]
    eligible = request["autorisation"]["ia_active"]
    blockers = []
    if not eligible:
        blockers.append("IA_NON_AUTORISEE")
    if provider == "api_distante":
        blockers.append("CONNECTEUR_DISTANT_NON_BRANCHÉ")
    else:
        blockers.append("CONNECTEUR_LOCAL_NON_BRANCHÉ")
    return {
        "schema": "c15.result.v1",
        "mission_id": request["mission_id"],
        "atelier": request["atelier"],
        "fournisseur": provider,
        "empreinte_entree": empreinte(request),
        "statut": "BLOQUEE_EXECUTEUR",
        "blocages": blockers,
        "appel_modele_effectue": False,
        "appels_effectues": 0,
        "cout_api_eur": 0,
        "resultat_editorial": None,
        "validation_humaine_requise": True,
    }


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--entree", required=True)
    p.add_argument("--sortie", default="rapport-c15.json")
    args = p.parse_args()
    request = json.loads(Path(args.entree).read_text(encoding="utf-8"))
    report = preparer(request)
    Path(args.sortie).write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"{report['mission_id']}: {report['statut']}, aucun appel IA")


if __name__ == "__main__":
    main()
