#!/usr/bin/env python3
"""Facteur documentaire GitHub : 17 boîtes, détection, tickets idempotents.

Aucune exécution d'agent, aucun changement de statut ni publication.
Python standard library uniquement. Permissions GitHub: contents:read, issues:write.
"""
import base64
import hashlib
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

REPO = os.environ.get("GITHUB_REPOSITORY", "zoutiFrutti/Interstice")
REF = os.environ.get("MESSAGERIE_REF", "coordination/cycle10-messagerie-v1-20261101")
TOKEN = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
DRY_RUN = os.environ.get("DRY_RUN", "false").lower() == "true"
ATELIERS = (
    "developpeuse juriste lectrice penseuse biographe anarchitecte graphiste "
    "eclaireuse mediatheque anarchiviste-communs assistant-anarchiviste "
    "archeologue tisseuse anarchiviste-catalan anarchiviste-zapatiste "
    "reseaux-sociaux vigie"
).split()
API = "https://api.github.com/repos/" + REPO


def request(method, endpoint, payload=None):
    headers = {"Accept": "application/vnd.github+json", "User-Agent": "interstice-facteur-v1"}
    if TOKEN:
        headers["Authorization"] = "Bearer " + TOKEN
    data = json.dumps(payload).encode() if payload is not None else None
    if data is not None:
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(API + endpoint, data=data, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=25) as res:
        return json.load(res)


def read_file(path):
    endpoint = "/contents/" + urllib.parse.quote(path, safe="/") + "?ref=" + urllib.parse.quote(REF, safe="")
    obj = request("GET", endpoint)
    if obj.get("type") != "file":
        raise ValueError("not a file: " + path)
    return base64.b64decode(obj["content"]).decode("utf-8"), obj["sha"]


def active_letters(text):
    # Only mail IDs explicitly present in the inbox, not arbitrary markdown links.
    ids = set(re.findall(r"C10-(?:MSG-\d{3}|REL-20261101-[A-Za-z0-9_-]+|VIG-001)", text))
    return sorted(ids)


def existing_markers():
    found = set()
    page = 1
    while True:
        issues = request("GET", "/issues?state=all&per_page=100&page=" + str(page))
        for issue in issues:
            if "pull_request" not in issue:
                found.update(re.findall(r"<!-- facteur:([^ ]+) -->", issue.get("body") or ""))
        if len(issues) < 100:
            return found
        page += 1
        if page > 20:
            raise RuntimeError("too many issues; refusing incomplete deduplication")


def main():
    if not TOKEN and not DRY_RUN:
        raise RuntimeError("GH_TOKEN required for writes")
    seen = existing_markers() if not DRY_RUN else set()
    created = 0
    failures = []
    for atelier in ATELIERS:
        path = "coordination/messagerie/boites/" + atelier + ".md"
        try:
            body, sha = read_file(path)
            ids = active_letters(body)
            if not ids:
                failures.append(atelier + ": no referenced letters")
                continue
            # Stable marker per atelier + inbox content: changed inbox => new ticket.
            digest = hashlib.sha256(body.encode()).hexdigest()[:16]
            marker = atelier + ":" + digest
            if marker in seen:
                print("UNCHANGED", atelier, digest)
                continue
            url = "https://github.com/" + REPO + "/blob/" + REF + "/" + path
            title = "[Facteur C10] " + atelier + " : boîte à vérifier (" + digest[:8] + ")"
            message = (
                "<!-- facteur:" + marker + " -->\n"
                "Notification documentaire, **pas un accusé de réception**.\n\n"
                "Atelier : **" + atelier + "**. Boîte : " + url + "\n"
                "Branche : `" + REF + "` ; blob : `" + sha + "`.\n"
                "IDs présents : " + ", ".join(ids) + ".\n\n"
                "Lire les courriers non traités sur la branche centrale ; "
                "vérifier les sources ; déposer accusé et transmission sur la branche "
                "personnelle avec commit/blob ; informer La Relieuse. "
                "Aucun statut REÇUE/TRAITÉE présumé, aucune fusion/publication.\n"
                "Protocole : `coordination/messagerie/PROTOCOLE_ACTIVATION_17_ATELIERS_C10.md`.\n"
            )
            if DRY_RUN:
                print("WOULD_CREATE", atelier, title)
            else:
                issue = request("POST", "/issues", {"title": title, "body": message})
                print("CREATED", atelier, issue["html_url"])
                seen.add(marker)
            created += 1
        except (urllib.error.HTTPError, urllib.error.URLError, ValueError, KeyError) as err:
            failures.append(atelier + ": " + str(err))
    print("tickets", created, "errors", len(failures))
    for failure in failures:
        print("ERROR", failure, file=sys.stderr)
    if failures:
        sys.exit(1)


if __name__ == "__main__":
    main()
