#!/usr/bin/env python3
"""C15: contrat d'exécution IA, hors réseau et refus par défaut.

Ne fait aucun appel modèle. Le simulateur ne prétend pas produire une analyse.
"""
import argparse
import hashlib
import json
import re
import urllib.request
from urllib.parse import urlsplit
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
    if not isinstance(request["atelier"], str) or not isinstance(request["fournisseur"], str) or request["atelier"] not in ROLES or request["fournisseur"] not in PROVIDERS:
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


def executer_local(request, url="http://127.0.0.1:11434", opener=None):
    """Une seule requête Ollama, opt-in et uniquement vers loopback."""
    verifier(request)
    if not request["autorisation"]["ia_active"]:
        raise PermissionError("Activation humaine de l'IA locale manquante")
    if request["fournisseur"] != "ollama_local" or request["limites"]["cout_eur_max"] != 0:
        raise ValueError("Seule l'IA locale à coût API nul est autorisée")
    parsed = urlsplit(url)
    if parsed.scheme != "http" or parsed.hostname not in ("127.0.0.1", "localhost", "::1"):
        raise ValueError("Point d'accès Ollama hors machine locale interdit")
    if parsed.username or parsed.password or parsed.query or parsed.fragment or parsed.path not in ("", "/") or parsed.port != 11434:
        raise ValueError("Adresse Ollama non autorisée")
    prompt = ("Tu es l'atelier " + request["atelier"] +
              ". Tu produis uniquement une analyse candidate. "
              "Aucune publication, aucune modification externe. "
              "Ne prétends pas avoir vérifié des sources non fournies.\n\n" +
              request["contenu"])
    payload = json.dumps({
        "model": request["modele"], "prompt": prompt, "stream": False,
        "options": {"num_predict": request["limites"]["tokens_sortie_max"]},
    }).encode("utf-8")
    endpoint = "http://127.0.0.1:11434/api/generate"
    req = urllib.request.Request(endpoint, data=payload, method="POST",
                                 headers={"Content-Type": "application/json"})
    transport = opener or urllib.request.urlopen
    with transport(req, timeout=60) as response:
        if response.headers.get("Content-Length") and int(response.headers["Content-Length"]) > 100000:
            raise ValueError("Réponse IA trop grande")
        raw = response.read(100001)
    if len(raw) > 100000:
        raise ValueError("Réponse IA trop grande")
    answer = json.loads(raw)["response"]
    if not isinstance(answer, str) or not answer.strip() or len(answer) > 50000:
        raise ValueError("Réponse IA absente ou invalide")
    return {
        "schema": "c15.result.v1", "mission_id": request["mission_id"],
        "atelier": request["atelier"], "fournisseur": "ollama_local",
        "empreinte_entree": empreinte(request), "statut": "ANALYSE_CANDIDATE",
        "appel_modele_effectue": True, "appels_effectues": 1, "cout_api_eur": 0,
        "resultat_editorial": answer, "validation_humaine_requise": True,
        "sources_verifiees": False,
    }


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--entree", required=True)
    p.add_argument("--sortie", default="rapport-c15.json")
    p.add_argument("--executer-local", action="store_true")
    args = p.parse_args()
    request = json.loads(Path(args.entree).read_text(encoding="utf-8"))
    report = executer_local(request) if args.executer_local else preparer(request)
    Path(args.sortie).write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"{report['mission_id']}: {report['statut']}, appels IA : {report['appels_effectues']}")


if __name__ == "__main__":
    main()
