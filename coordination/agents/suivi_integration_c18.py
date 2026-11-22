#!/usr/bin/env python3
"""Tableau documentaire d'integration, sans inference de reception ni d'execution."""
import argparse
import json
import re
from pathlib import Path

SHA = re.compile(r"[a-f0-9]{40}\Z")
STATES = {"PREPARE", "TRANSMIS_DECLARATIF", "RECU_ATTESTE", "TRAVAIL_EN_COURS",
          "LIVRABLE_CANDIDAT", "CONTROLE_TECHNIQUE", "BLOQUE", "DECISION_ZOUT"}
MAX = 80


def generate(data):
    if not isinstance(data, dict) or set(data) != {"schema", "livrables"} or data["schema"] != "c18.v1":
        raise ValueError("Schéma invalide")
    items = data["livrables"]
    if not isinstance(items, list) or len(items) > MAX:
        raise ValueError("Volume invalide")
    ids, results = set(), []
    for item in items:
        if not isinstance(item, dict) or set(item) != {"id", "atelier", "etat", "branche", "commit_sha", "chemin", "blob_sha", "test", "dependances", "reserve"}:
            raise ValueError("Champs invalides")
        ident, state = item["id"], item["etat"]
        if not isinstance(ident, str) or not re.fullmatch(r"[A-Za-z0-9_-]{3,80}", ident) or ident in ids:
            raise ValueError("Identifiant invalide ou duplique")
        ids.add(ident)
        if state not in STATES:
            raise ValueError("Etat inconnu")
        for field in ("atelier", "branche", "chemin", "test", "reserve"):
            if not isinstance(item[field], str) or len(item[field]) > 400:
                raise ValueError("Texte invalide")
        for field in ("commit_sha", "blob_sha"):
            value = item[field]
            if value is not None and (not isinstance(value, str) or not SHA.fullmatch(value)):
                raise ValueError("Empreinte invalide")
        if not isinstance(item["dependances"], list) or len(item["dependances"]) > 12 or not all(
            isinstance(x, str) and re.fullmatch(r"[A-Za-z0-9_-]{3,80}", x) for x in item["dependances"]
        ):
            raise ValueError("Dependances invalides")
        # Ne jamais faire d'une coche de test une reception ou une validation editoriale.
        if state in {"RECU_ATTESTE", "LIVRABLE_CANDIDAT", "CONTROLE_TECHNIQUE"} and not (item["commit_sha"] and item["chemin"]):
            raise ValueError("Preuve minimale absente")
        results.append(item)
    return {"schema": "c18.result.v1", "lignes": results,
            "bilan": {s: sum(x["etat"] == s for x in results) for s in sorted(STATES)},
            "avertissements": ["Etat saisi par un operateur : non authentifie et non verifie automatiquement",
                               "Commit et blob syntaxiques : existence/provenance non controles par ce script",
                               "Un courrier transmis ne prouve pas sa reception",
                               "Un livrable candidat et une CI verte ne prouvent pas un travail editorial termine",
                               "Aucun changement de statut dans le depot ni dans les boites"]}


def markdown(report):
    lines = ["# C18 — Suivi technique candidat pour La Relieuse", "",
             "**Aucun accusé ou état d'atelier n'est inféré automatiquement.**", "",
             "| Objet | Atelier | État déclaré | Preuve | Blocage / réserve |",
             "|---|---|---|---|---|"]
    for x in report["lignes"]:
        proof = (x["commit_sha"][:12] if x["commit_sha"] else "aucune")
        fields = [x["id"], x["atelier"], x["etat"], proof, x["reserve"] or "—"]
        lines.append("| " + " | ".join(v.replace("|", "/").replace("\n", " ") for v in fields) + " |")
    lines += ["", "## Comptages déclaratifs"]
    lines.extend(f"- {k}: {v}" for k, v in report["bilan"].items())
    lines += ["", "## Réserves de preuve"]
    lines.extend("- " + x for x in report["avertissements"])
    return "\n".join(lines) + "\n"


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--entree", required=True)
    p.add_argument("--sortie", default="rapport-c18.json")
    p.add_argument("--markdown", default="rapport-c18.md")
    args = p.parse_args()
    report = generate(json.loads(Path(args.entree).read_text(encoding="utf-8")))
    Path(args.sortie).write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    Path(args.markdown).write_text(markdown(report), encoding="utf-8")


if __name__ == "__main__":
    main()
