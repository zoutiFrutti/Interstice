#!/usr/bin/env python3
"""Index C03 documentaire : lecture seule, preuves datées et statuts non inférés."""
import argparse
import json
import re
from pathlib import Path

IDENT = re.compile(r"[A-Za-z0-9_-]{3,80}\Z")
SHA = re.compile(r"[a-f0-9]{40}\Z")
STATES = ("preparee", "transmise", "recue", "commencee", "livree",
          "controle_effectue", "validee")


def check(data):
    if not isinstance(data, dict) or set(data) != {
        "schema", "instantane", "reference", "roles", "missions", "preuves",
        "comparaisons_sha", "notes"} or data["schema"] != "c03.collectif.v1":
        raise ValueError("Schema C03 invalide")
    roles, missions, proofs = data["roles"], data["missions"], data["preuves"]
    if not isinstance(roles, list) or not 1 <= len(roles) <= 40 or (
        len(set(roles)) != len(roles)) or any(
            not isinstance(r, str) or not IDENT.fullmatch(r) for r in roles):
        raise ValueError("Roles invalides")
    if not isinstance(missions, list) or not 1 <= len(missions) <= 80:
        raise ValueError("Missions invalides")
    if not isinstance(proofs, list) or len(proofs) > 200:
        raise ValueError("Preuves invalides")
    ids = set()
    for m in missions:
        if not isinstance(m, dict) or set(m) != {
            "id", "ateliers", "priorite", "dependances", "blocage",
            "prochaine_action", "etat", "preuves_anterieures", "preuves_mission"}:
            raise ValueError("Champs mission invalides")
        if not isinstance(m["id"], str) or not IDENT.fullmatch(m["id"]) or m["id"] in ids:
            raise ValueError("ID mission duplique ou invalide")
        ids.add(m["id"])
        if not isinstance(m["ateliers"], list) or not 1 <= len(m["ateliers"]) <= 5 or (
            len(set(m["ateliers"])) != len(m["ateliers"])) or any(
                r not in roles for r in m["ateliers"]):
            raise ValueError("Atelier inconnu")
        if m["priorite"] not in ("P0", "P1", "P2") or not all(
            isinstance(m[k], str) for k in ("blocage", "prochaine_action")):
            raise ValueError("Champs de mission incorrects")
        if not isinstance(m["dependances"], list) or any(
            not isinstance(d, str) or not IDENT.fullmatch(d) for d in m["dependances"]
        ) or len(set(m["dependances"])) != len(m["dependances"]):
            raise ValueError("Dependances invalides")
        if not isinstance(m["etat"], dict) or set(m["etat"]) != set(STATES) or any(
            type(v) is not bool and v is not None for v in m["etat"].values()):
            raise ValueError("Etats doivent etre ternaires")
        for field in ("preuves_anterieures", "preuves_mission"):
            if not isinstance(m[field], list) or not all(
                isinstance(x, str) for x in m[field]):
                raise ValueError("Preuves de mission invalides")
    proofids = set()
    for proof in proofs:
        if not isinstance(proof, dict) or set(proof) != {
            "id", "type", "mission_id", "atelier", "branch", "path",
            "commit_sha", "blob_sha", "pr", "verified_at", "notes"}:
            raise ValueError("Champs preuve invalides")
        if proof["id"] in proofids or (proof["mission_id"] is not None and proof["mission_id"] not in ids) or (
            proof["atelier"] not in roles) or proof["type"] not in (
            "fichier", "commentaire_pr", "accuse", "decision_zout"):
            raise ValueError("Preuve dupliquee, mission ou role inconnu")
        proofids.add(proof["id"])
        for field in ("commit_sha", "blob_sha"):
            s = proof[field]
            if s is not None and (not isinstance(s, str) or not SHA.fullmatch(s)):
                raise ValueError("Empreinte de preuve incorrecte")
    for m in missions:
        if m["id"] in m["dependances"] or not set(m["dependances"]).issubset(ids):
            raise ValueError("Dependance inexistante ou autoreference")
        if not set(m["preuves_anterieures"] + m["preuves_mission"]).issubset(proofids):
            raise ValueError("Reference de preuve introuvable")
        if len(set(m["preuves_anterieures"] + m["preuves_mission"])) != len(
                m["preuves_anterieures"] + m["preuves_mission"]):
            raise ValueError("Preuve reutilisee en doublon")
        local = [p for p in proofs if p["id"] in m["preuves_mission"]]
        if any(p["mission_id"] != m["id"] or p["atelier"] not in m["ateliers"]
               for p in local):
            raise ValueError("Preuve de mission mal attribuee")
        if m["etat"]["recue"] is True and not any(p["type"] == "accuse" for p in local):
            raise ValueError("Reception sans accuse specifique")
        if m["etat"]["validee"] is True and not any(
                p["type"] == "decision_zout" for p in local):
            raise ValueError("Validation sans decision de Zout")
        if m["etat"]["livree"] is True and not any(
                p["type"] in ("fichier", "commentaire_pr") for p in local):
            raise ValueError("Livraison sans preuve propre")
    comparisons = {}
    for item in data["comparaisons_sha"]:
        if not isinstance(item, dict) or set(item) != {
            "branch", "path", "blob_sha", "verified_at"} or (
            not isinstance(item["blob_sha"], str) or not SHA.fullmatch(item["blob_sha"])):
            raise ValueError("Releve SHA invalide")
        key = (item["branch"], item["path"])
        if key in comparisons:
            raise ValueError("Doublon de comparaison SHA")
        comparisons[key] = item
    return comparisons


def _cycle_warnings(missions):
    graph = {m["id"]: m["dependances"] for m in missions}
    visited, active, edges = set(), set(), set()
    def visit(node):
        visited.add(node)
        active.add(node)
        for other in graph[node]:
            if other in active:
                edges.add(tuple(sorted((node, other))))
            elif other not in visited:
                visit(other)
        active.remove(node)
    for node in graph:
        if node not in visited:
            visit(node)
    return [list(x) for x in sorted(edges)]


def build(data):
    snapshots = check(data)
    result_roles = []
    for role in data["roles"]:
        evidence = []
        for p in data["preuves"]:
            if p["atelier"] != role:
                continue
            snapshot = snapshots.get((p["branch"], p["path"]))
            state = ("NON_COMPARE" if snapshot is None else
                     "IDENTIQUE_AU_RELEVE" if snapshot["blob_sha"] == p["blob_sha"]
                     else "A_RECONTROLER")
            evidence.append({**p, "comparaison_sha": state,
                             "date_comparaison": snapshot["verified_at"] if snapshot else None})
        result_roles.append({"role": role, "missions": [m["id"] for m in data["missions"]
                                                       if role in m["ateliers"]],
                             "preuves": evidence})
    return {"schema": "c03.index.v1", "instantane": data["instantane"],
            "reference": data["reference"], "roles": result_roles,
            "missions": data["missions"],
            "boucles_consultation": _cycle_warnings(data["missions"]),
            "preuves_a_recontroler": [p["id"] for r in result_roles
                                     for p in r["preuves"]
                                     if p["comparaison_sha"] == "A_RECONTROLER"],
            "avertissements": [
                "Preuves anterieures ne valent ni reception ni livraison C03-03",
                "Comparaison SHA seulement contre un releve fourni et date, pas GitHub temps reel",
                "Les dependances sont des consultations mutuelles, pas un DAG d'execution",
                "Aucune nouvelle autorisation, validation ni interaction externe"]}


def clean(text):
    return str(text).replace("|", "/").replace("\n", " ").replace("\r", " ")


def render(result):
    lines = ["# INTERSTICE C03 — Mémoire collective et point d'entrée de La Relieuse",
             "", "**Document candidat. Aucun accusé ni validation inférés.**", "",
             "## Socle documentaire", "",
             "PR #" + str(result["reference"]["pr"]) + ", HEAD " + result["reference"]["head_sha"],
             "", "## Suivi des missions", "",
             "| Mission | Atelier(s) | P | Préparée | Envoyée | Reçue | Commencée | Livrée | Contrôlée | Validée | Dépendances | Blocage / suite |",
             "|---|---|---|---|---|---|---|---|---|---|---|---|"]
    names = ("preparee", "transmise", "recue", "commencee",
             "livree", "controle_effectue", "validee")
    status = {True: "oui déclaratif", False: "non", None: "inconnu"}
    for m in result["missions"]:
        fields = [m["id"], ", ".join(m["ateliers"]), m["priorite"]] + [
            status[m["etat"][k]] for k in names] + [
            ", ".join(m["dependances"]), m["blocage"] + " ; " + m["prochaine_action"]]
        lines.append("| " + " | ".join(clean(v) for v in fields) + " |")
    lines += ["", "## Par atelier : preuves de rapports existants", ""]
    for r in result["roles"]:
        lines += ["### " + r["role"], "",
                  "Missions C03 : " + (", ".join(r["missions"]) or "aucune attribuée"), ""]
        if not r["preuves"]:
            lines.append("- Aucun rapport propre à ces missions confirmé par cette passe.")
        for p in r["preuves"]:
            link = ("https://github.com/zoutiFrutti/Interstice/blob/" + p["branch"] + "/" + p["path"]
                    if p["path"] else
                    "https://github.com/zoutiFrutti/Interstice/pull/" + str(p["pr"]))
            lines.append("- Antériorité " + p["id"] + " : " + link +
                         " ; branche " + p["branch"] +
                         " ; commit " + str(p["commit_sha"]) +
                         " ; blob " + str(p["blob_sha"]) +
                         " ; date " + p["verified_at"] +
                         " ; SHA " + p["comparaison_sha"] + " ; " + p["notes"])
        lines.append("")
    lines += ["## Alertes et points non clos", ""]
    if result["boucles_consultation"]:
        lines.append("- Boucles de consultation entre missions : ne pas les lancer comme un graphe exécutable.")
        lines.extend("- " + " ↔ ".join(b) for b in result["boucles_consultation"])
    for p in result["preuves_a_recontroler"]:
        lines.append("- " + p + " : blob différent du relevé, rapport potentiellement dépassé.")
    lines += ["", "## Protocole de transmission", "",
              "1. Lire cet index, puis les preuves sur leurs branches et commits exacts.",
              "2. Déposer chaque rapport dans son répertoire C03 existant et une PR brouillon de son atelier.",
              "3. Renseigner séparément préparée, transmise, reçue, commencée, livrée, contrôlée et validée.",
              "4. Joindre SHA, objections, corrections, tests et décisions en attente ; conserver les anciennes versions.",
              "5. Ne changer un état qu'avec preuve explicite et rapprochement par La Relieuse.",
              "6. Comparer les relevés de blob datés ; une branche ou PR n'atteste pas une réception.",
              "7. Pas d'agents automatiques, de fusion, de publication ni de contact non autorisé.", "",
              "## Limites", ""]
    lines += ["- " + x for x in result["avertissements"]]
    return "\n".join(lines) + "\n"


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--entree", default="coordination/c03/orchestratrice/registre_collectif_c03.json")
    p.add_argument("--sortie", default="index-collectif-c03.md")
    p.add_argument("--json", default="index-collectif-c03.json")
    a = p.parse_args()
    result = build(json.loads(Path(a.entree).read_text(encoding="utf-8")))
    Path(a.sortie).write_text(render(result), encoding="utf-8")
    Path(a.json).write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("C03 : " + str(len(result["roles"])) + " roles / " +
          str(len(result["missions"])) + " missions, sans IA.")


if __name__ == "__main__":
    main()
