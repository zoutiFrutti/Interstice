#!/usr/bin/env python3
"""Premier moteur Lectrice : appel explicite a une API modele, resultat non publie."""
import argparse
import json
import os
import urllib.request
from pathlib import Path

SYSTEM = ("Tu es La Lectrice du projet La Faille noire x Interstice. "
          "Examine le texte fourni avec rigueur. Distingue faits, interpretations et points non verifies. "
          "N'invente aucune source ni citation. Ne pretends pas avoir consulte le web ou GitHub. "
          "Retourne une analyse courte avec reserves et controles necessaires. "
          "Aucune validation ni publication automatique.")

def prepare(text):
    if not isinstance(text,str) or not 20 <= len(text) <= 12000:
        raise ValueError("Texte requis, entre 20 et 12000 caracteres")
    return [{"role":"system","content":SYSTEM},
            {"role":"user","content":"Relis ce document et signale les points a verifier :\n\n"+text}]

def execute(text, api_key, model):
    if not api_key:
        raise RuntimeError("Cle API absente : aucun appel effectue")
    if not model:
        raise RuntimeError("Modele absent : aucun appel effectue")
    body=json.dumps({"model":model,"messages":prepare(text),"temperature":0.2,"max_tokens":800}).encode("utf-8")
    req=urllib.request.Request("https://api.openai.com/v1/chat/completions",data=body,
        headers={"Authorization":"Bearer "+api_key,"Content-Type":"application/json"},method="POST")
    with urllib.request.urlopen(req,timeout=45) as response:
        data=json.load(response)
    answer=data["choices"][0]["message"]["content"]
    if not isinstance(answer,str) or not answer.strip():
        raise ValueError("Reponse vide")
    return {"statut":"ANALYSE_CANDIDATE","atelier":"lectrice","texte":answer,
            "validation_humaine_requise":True}

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--entree",required=True)
    p.add_argument("--sortie",default="rapport-lectrice-c12.json")
    p.add_argument("--modele",default=os.getenv("OPENAI_MODEL",""))
    p.add_argument("--executer",action="store_true")
    a=p.parse_args()
    text=Path(a.entree).read_text(encoding="utf-8")
    messages=prepare(text)
    if a.executer:
        report=execute(text,os.getenv("OPENAI_API_KEY",""),a.modele)
    else:
        report={"statut":"PREPARATION_SEULEMENT","atelier":"lectrice",
                "messages":messages,"validation_humaine_requise":True}
    Path(a.sortie).write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")

if __name__=="__main__":
    main()
