#!/usr/bin/env python3
"""C14: ordonnanceur local, déterministe, sans IA, réseau ni écriture externe.

Seules trois actions en lecture de données fournies sont permises. Les statuts
d'exécution ne signifient jamais qu'une conversation ChatGPT a été réveillée.
"""
import argparse
import hashlib
import json
import re
from pathlib import Path
from urllib.parse import urlsplit

MAX_TASKS = 12
MAX_RESOURCES = 30
MAX_BYTES = 50000
IDENT = re.compile(r"[A-Za-z0-9_-]{3,80}\Z")
ACTIONS = {
    ("mediatheque", "doublons_urls"),
    ("lectrice", "controle_urls"),
    ("relieuse", "consolider"),
}
ROOT_KEYS = {"schema", "mission_id", "origine", "classification", "taches"}
TASK_KEYS = {"id", "atelier", "action", "dependances", "entree"}
RESOURCE_KEYS = {"titre", "url"}


def digest(value):
    encoded = json.dumps(value, ensure_ascii=False, sort_keys=True,
                         separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(encoded).hexdigest()


def identifier(value):
    return isinstance(value, str) and IDENT.fullmatch(value) is not None


def normaliser_url(url):
    """Clé approximative : l'hôte n'est pas sensible à la casse, le chemin l'est."""
    try:
        parts = urlsplit(url.strip())
        if parts.scheme.lower() not in ("https", "http") or not parts.hostname:
            return None
        if parts.username or parts.password:
            return None
        if not parts.netloc or any(c.isspace() for c in url):
            return None
        _ = parts.port  # Une valeur incorrecte doit être signalée.
        host = parts.hostname.lower()
        port = f":{parts.port}" if parts.port is not None else ""
        path = parts.path.rstrip("/") or "/"
        # Fragment exclu : il ne change pas le document téléchargé.
        return f"{parts.scheme.lower()}://{host}{port}{path}?{parts.query}".rstrip("?")
    except ValueError:
        return None


def _ressources(entree):
    if not isinstance(entree, dict) or set(entree) != {"ressources"}:
        raise ValueError("Entrée : seul le champ ressources est autorisé")
    ressources = entree["ressources"]
    if not isinstance(ressources, list) or len(ressources) > MAX_RESOURCES:
        raise ValueError("Nombre de ressources invalide")
    for r in ressources:
        if not isinstance(r, dict) or set(r) != RESOURCE_KEYS:
            raise ValueError("Ressource : titre et url obligatoires")
        if not isinstance(r["titre"], str) or len(r["titre"]) > 200:
            raise ValueError("Titre de ressource invalide")
        if not isinstance(r["url"], str) or len(r["url"]) > 2048:
            raise ValueError("URL invalide")
    return ressources


def valider(mission):
    if not isinstance(mission, dict) or set(mission) != ROOT_KEYS:
        raise ValueError("Schéma racine invalide ou champ sensible non autorisé")
    if mission["schema"] != "c14.v1" or not identifier(mission["mission_id"]):
        raise ValueError("Version ou identifiant invalide")
    if mission["origine"] != "RELIEUSE_CHATGPT":
        raise ValueError("Origine déclarée invalide")
    if mission["classification"] != "PUBLIC":
        raise ValueError("Seules les données publiques sont acceptées")
    taches = mission["taches"]
    if not isinstance(taches, list) or not 1 <= len(taches) <= MAX_TASKS:
        raise ValueError("Nombre de tâches invalide")
    ids = set()
    for t in taches:
        if not isinstance(t, dict) or set(t) != TASK_KEYS:
            raise ValueError("Tâche invalide ou champ non autorisé")
        if not identifier(t["id"]) or t["id"] in ids:
            raise ValueError("ID de tâche absent, invalide ou dupliqué")
        ids.add(t["id"])
        if not isinstance(t["atelier"], str) or not isinstance(t["action"], str):
            raise ValueError("Atelier ou action invalide")
        deps = t["dependances"]
        if not isinstance(deps, list) or len(deps) > MAX_TASKS or any(
            not identifier(d) for d in deps
        ) or len(set(deps)) != len(deps):
            raise ValueError("Dépendances invalides")
        if (t["atelier"], t["action"]) in ACTIONS:
            if t["action"] == "consolider":
                if t["entree"] != {} or not deps:
                    raise ValueError("Consolidation : dépendances requises, entrée vide")
            else:
                _ressources(t["entree"])
        elif t["entree"] != {}:
            # Refus explicite d'une action inconnue, sans accepter son contenu.
            raise ValueError("Action non autorisée avec entrée de données")
    for t in taches:
        if t["id"] in t["dependances"] or not set(t["dependances"]).issubset(ids):
            raise ValueError("Dépendance absente ou autoréférence")
    ordered, remaining = [], {t["id"]: t for t in taches}
    while remaining:
        ready = [t for t in taches if t["id"] in remaining
                 and all(d in {x["id"] for x in ordered} for d in t["dependances"])]
        if not ready:
            raise ValueError("Cycle de dépendances détecté")
        for t in ready:
            ordered.append(t)
            del remaining[t["id"]]
    return ordered


def _executer_action(tache, resultats):
    action = tache["action"]
    if action == "consolider":
        return {
            "ateliers_rapportes": [resultats[d]["atelier"] for d in tache["dependances"]],
            "taches_sources": tache["dependances"],
            "controle_editorial_effectue": False,
            "validation_humaine_requise": True,
        }
    ressources = tache["entree"]["ressources"]
    if action == "doublons_urls":
        vues, doublons = {}, []
        for i, r in enumerate(ressources, 1):
            url = normaliser_url(r["url"])
            if url and url in vues:
                doublons.append({"premiere": vues[url], "seconde": i})
            elif url:
                vues[url] = i
        return {"ressources_examinees": len(ressources), "doublons_url_probables": doublons,
                "verification_semantique_effectuee": False}
    if action == "controle_urls":
        manquantes, invalides = [], []
        for i, r in enumerate(ressources, 1):
            if not r["url"].strip():
                manquantes.append(i)
            elif normaliser_url(r["url"]) is None:
                invalides.append(i)
        return {"ressources_examinees": len(ressources), "urls_absentes": manquantes,
                "urls_invalides": invalides, "urls_visitees": 0}
    raise RuntimeError("Action hors liste blanche")


def traiter(mission, mode="executer"):
    if mode not in ("executer", "planifier"):
        raise ValueError("Mode non autorisé")
    if len(json.dumps(mission, ensure_ascii=False).encode("utf-8")) > MAX_BYTES:
        raise ValueError("Mission trop volumineuse")
    ordered = valider(mission)
    resultats = {}
    lignes = []
    for t in ordered:
        item = {"id": t["id"], "atelier": t["atelier"], "action": t["action"],
                "dependances": t["dependances"], "empreinte_entree": digest(t)}
        if (t["atelier"], t["action"]) not in ACTIONS:
            item["statut"] = "REFUSEE_ACTION"
        elif any(resultats[d]["statut"] in ("REFUSEE_ACTION", "BLOQUEE_DEPENDANCE")
                 for d in t["dependances"]):
            item["statut"] = "BLOQUEE_DEPENDANCE"
        elif mode == "planifier":
            item["statut"] = "PLANIFIEE_NON_EXECUTEE"
        else:
            item["resultat"] = _executer_action(t, resultats)
            item["empreinte_resultat"] = digest(item["resultat"])
            item["statut"] = "TERMINE_DETERMINISTE"
        resultats[t["id"]] = item
        lignes.append(item)
    return {
        "schema": "c14.result.v1", "mission_id": mission["mission_id"],
        "empreinte_mission": digest(mission), "mode": mode,
        "ordre_execution": [t["id"] for t in ordered],
        "taches": lignes,
        "bilan": {
            "terminees_deterministes": sum(x["statut"] == "TERMINE_DETERMINISTE" for x in lignes),
            "refusees": sum(x["statut"] == "REFUSEE_ACTION" for x in lignes),
            "bloquees": sum(x["statut"] == "BLOQUEE_DEPENDANCE" for x in lignes),
            "planifiees": sum(x["statut"] == "PLANIFIEE_NON_EXECUTEE" for x in lignes),
        },
        "limites": ["Aucun appel IA, web ou exécution ChatGPT", "Aucune source consultée",
                    "Aucune écriture GitHub, fusion, publication ni décision éditoriale",
                    "Origine RELIEUSE_CHATGPT déclarative, non authentifiée par ce fichier"],
    }


def markdown(rapport):
    lines = [f"# C14 — Rapport technique {rapport['mission_id']}", "",
             "**Exécution déterministe locale, sans IA ni validation éditoriale.**", "",
             f"Mode : {rapport['mode']} ; SHA-256 entrée : {rapport['empreinte_mission']}", "",
             "| Tâche | Atelier | Action | État |", "|---|---|---|---|"]
    for t in rapport["taches"]:
        lines.append(f"| {t['id']} | {t['atelier']} | {t['action']} | {t['statut']} |")
    lines += ["", "## Bilan"]
    for nom, total in rapport["bilan"].items():
        lines.append(f"- {nom}: {total}")
    lines += ["", "## Limites"]
    for lim in rapport["limites"]:
        lines.append("- " + lim)
    lines += ["", "La Relieuse doit examiner les rapports candidats et leurs sources avant toute décision.", ""]
    return "\n".join(lines)


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--entree", required=True)
    p.add_argument("--sortie", default="rapport-c14.json")
    p.add_argument("--markdown", default="rapport-c14.md")
    p.add_argument("--mode", choices=["executer", "planifier"], default="executer")
    args = p.parse_args()
    mission = json.loads(Path(args.entree).read_text(encoding="utf-8"))
    rapport = traiter(mission, args.mode)
    Path(args.sortie).write_text(json.dumps(rapport, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    Path(args.markdown).write_text(markdown(rapport), encoding="utf-8")
    print(json.dumps(rapport["bilan"], ensure_ascii=False))


if __name__ == "__main__":
    main()
