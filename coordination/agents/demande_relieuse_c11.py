#!/usr/bin/env python3
"""Normalise une demande saisie par La Relieuse dans ChatGPT en proposition de mission."""
import argparse
import json
import re
from pathlib import Path

ROLES = {"relieuse","lectrice","mediatheque","biographe","anarchitecte","developpeuse",
         "juriste","graphiste","vigie","tisseuse","eclaireuse","orchestratrice",
         "anarchiviste-catalan","anarchiviste-zapatiste","anarchiviste-communs",
         "archeologue","reseaux-sociaux","assistant-anarchiviste"}

def normalize(data):
    if not isinstance(data,dict):
        raise ValueError("Demande invalide")
    mid=data.get("id")
    title=data.get("objectif")
    if not isinstance(mid,str) or not re.fullmatch(r"[A-Za-z0-9_-]{3,80}",mid):
        raise ValueError("Identifiant invalide")
    if not isinstance(title,str) or not 3 <= len(title.strip()) <= 2000:
        raise ValueError("Objectif invalide")
    roles=data.get("ateliers",[])
    if not isinstance(roles,list) or not roles or len(roles)>len(ROLES) or any(r not in ROLES for r in roles):
        raise ValueError("Ateliers invalides")
    if len(set(roles)) != len(roles):
        raise ValueError("Atelier duplique")
    if any(data.get(k) for k in ("publication","fusion","diffusion","ecriture_externe")):
        raise ValueError("Action sensible non autorisee")
    return {"id":mid,"objectif":title.strip(),"ateliers":roles,"statut":"A_FAIRE",
            "origine":"RELIEUSE_CHATGPT","decision_humaine_requise":True,
            "execution_ateliers":"NON_DECLENCHEE"}

def render(mission):
    return ("# Mission de La Relieuse : "+mission["id"]+"\n\n"
            +"**Etat : A FAIRE. Les ateliers n'ont pas ete executes.**\n\n"
            +"## Objectif\n"+mission["objectif"]+"\n\n"
            +"## Ateliers proposes\n"+"\n".join("- "+r for r in mission["ateliers"])+"\n\n"
            +"## Suite\nLa Relieuse coordonne la realisation dans ChatGPT ou via un moteur d'agents explicitement connecte. "
            +"Ce document ne reveille aucune conversation. Aucune publication automatique.\n")

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--entree",required=True)
    p.add_argument("--sortie",default="mission-relieuse-c11.md")
    args=p.parse_args()
    mission=normalize(json.loads(Path(args.entree).read_text(encoding="utf-8")))
    Path(args.sortie).write_text(render(mission),encoding="utf-8")

if __name__=="__main__":
    main()
