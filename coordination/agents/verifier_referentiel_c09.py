#!/usr/bin/env python3
"""C09: controle documentaire local, sans reseau, agent ni effet GitHub."""
import argparse
import json
import re
from pathlib import Path

BT = chr(96)
DOORS = (
    ("Haut gauche", "Faire Ensemble"),
    ("Haut droite", "Encyclopédie des communs"),
    ("Bas gauche", "Archives des communs"),
    ("Bas droite", "Médiathèque"),
)
STATES = ("DEMANDEE", "ENVOYEE", "RECUE_ATTESTEE", "COMMENCEE",
          "LIVRABLE_CANDIDAT", "VERIFIEE", "VALIDEE_HUMAINEMENT",
          "INTEGREE", "PUBLIEE")
ROLE_PATTERN = re.compile(r"^\|\s*"+BT+r"([a-z][a-z0-9-]+)"+BT+r"\s*\|", re.M)
DECISION_PATTERN = re.compile(r"^D-C\d\d-\d{3}$")


def verify(reference, decisions, directory, root=None):
    errors = []
    if "| Position | Nom officiel |" not in reference:
        errors.append("Table officielle des portes absente")
    door_rows = [line for line in reference.splitlines()
                 if line.startswith("| ") and any(p in line for p, _ in DOORS)]
    if len(door_rows) != 4:
        errors.append("Quatre positions distinctes requises")
    for position, name in DOORS:
        matching = [r for r in door_rows if position in r]
        if len(matching) != 1 or name not in matching[0]:
            errors.append("Position ou nom officiel incorrect : " + position)
    for invariant in ("**même plan fonctionnel**", "**PAR-005 : BLOQUÉ**",
                      "2 × 2", "SVG officiels", "sans page préalable obligatoire"):
        if invariant not in reference:
            errors.append("Invariant absent : " + invariant)
    for state in STATES:
        if BT+state+BT not in reference:
            errors.append("Etat manquant : " + state)
    for safeguard in ("C12 sur main", "LECTRICE_AI_ENABLED", "aucun agent"):
        if safeguard.casefold() not in reference.casefold():
            errors.append("Protection manquante : " + safeguard)
    rows = []
    for line in decisions.splitlines():
        if line.startswith("| "+BT+"D-C"):
            cols = [x.strip() for x in line.strip("|").split("|")]
            rows.append(cols)
            if len(cols) != 5:
                errors.append("Ligne decision mal formee")
    ids = [x[0].strip(BT) for x in rows]
    if len(ids) < 10 or len(ids) != len(set(ids)) or any(
        not DECISION_PATTERN.fullmatch(x) for x in ids):
        errors.append("Identifiants de decisions absents ou dupliques")
    if "D-C09-011" in ids and ("Atlas des communs" not in reference or "cinquième porte" not in reference):
        errors.append("Decision Atlas D-C09-011 absente du referentiel")
    if any(len(r) != 5 or not r[2] or not r[4] for r in rows):
        errors.append("Provenance ou reserves manquantes")
    roles = ROLE_PATTERN.findall(directory)
    if len(roles) < 19 or len(set(roles)) != len(roles):
        errors.append("Annuaire initial de 19 roles incomplet ou non unique")
    if root is not None:
        expected = [
            "coordination/JOURNAL_COMMUN.md",
            "coordination/messagerie/README.md",
            "coordination/c03/INDEX_TRANSMISSIONS.md",
            "coordination/c03/orchestratrice/05_TRANSMISSION_RELIEUSE.md",
            "coordination/c03/orchestratrice/JOURNAL_SYNCHRONISATION.md",
        ]
        for path in expected:
            if not (root/path).is_file():
                errors.append("Fichier historique ou journal absent : "+path)
        for role in roles:
            matched = re.search(
                r"^\|\s*"+BT+re.escape(role)+BT+r"\s*\|\s*"+BT+r"([^"+BT+r"]+)"+BT,
                directory, re.M)
            if not matched:
                errors.append("Chemin annuaire absent : "+role)
            elif not (root/matched.group(1)).is_file():
                errors.append("Chemin annuaire introuvable : "+role)
    return {"schema":"c09.audit.v1","status":"OK" if not errors else "ERREUR",
            "portes":len(door_rows),"decisions":len(ids),"roles":len(roles),
            "etats":len(STATES),"erreurs":errors,
            "limites":["Structure et chemins seuls ; aucune validation humaine ou historique",
                       "SHA GitHub et PR externes non verifies par ce programme"]}


def main():
    p=argparse.ArgumentParser()
    p.add_argument("--root",type=Path,default=Path("."))
    p.add_argument("--output",type=Path)
    opts=p.parse_args()
    r=opts.root
    result=verify((r/"coordination/REFERENTIEL_VIVANT.md").read_text(encoding="utf-8"),
                  (r/"coordination/REGISTRE_DECISIONS.md").read_text(encoding="utf-8"),
                  (r/"coordination/c03/orchestratrice/ANNUAIRE_SYNCHRONISATION_C09.md").read_text(encoding="utf-8"),
                  root=r)
    text=json.dumps(result,ensure_ascii=False,indent=2)
    if opts.output:
        opts.output.write_text(text+"\n",encoding="utf-8")
    print(text)
    if result["erreurs"]:
        raise SystemExit(1)


if __name__=="__main__":
    main()
