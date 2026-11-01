#!/usr/bin/env python3
"""Creer une mission depuis un formulaire GitHub Actions, sans publication."""
import argparse
import json
import re
from pathlib import Path

def build(mission_id, urls):
    if not re.fullmatch(r"[A-Za-z0-9_-]{3,60}", mission_id):
        raise ValueError("Identifiant invalide")
    if len(urls) > 20:
        raise ValueError("Maximum 20 references")
    ressources = []
    for i, raw in enumerate(urls, 1):
        url = raw.strip()
        if not url:
            continue
        if not (url.startswith("https://") or url.startswith("http://")):
            raise ValueError("Chaque reference doit etre une URL http(s)")
        if len(url) > 2048:
            raise ValueError("URL trop longue")
        ressources.append({"titre":f"Reference {i}","url":url})
    if not ressources:
        raise ValueError("Aucune reference")
    return {"missions":[{"id":mission_id,"type":"audit_references","ressources":ressources}]}

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--id",required=True)
    p.add_argument("--urls",required=True)
    p.add_argument("--sortie",default="mission-utilisateur-c11.json")
    a=p.parse_args()
    data=build(a.id,a.urls.splitlines())
    Path(a.sortie).write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")

if __name__=="__main__":
    main()
