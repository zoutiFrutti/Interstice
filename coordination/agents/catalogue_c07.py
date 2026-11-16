"""Execute bounded C14/C07 checks against the real candidate catalogue, without AI/network."""
import argparse
import json
import hashlib
import os
import re
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from orchestrateur_c14 import normaliser_url
from reunification_c07 import start, save, verify


def examine(raw, registry):
    catalogue = json.loads(raw)
    resources = catalogue['resources']
    if not isinstance(resources, list) or not 1 <= len(resources) <= 300:
        raise ValueError('Catalogue absent ou trop volumineux')
    ids = [item['id'] for item in resources]
    if len(ids) != len(set(ids)):
        raise ValueError('Identifiant de ressource dupliqué')
    states, groups = [], {}
    for offset in range(0, len(resources), 30):
        batch = resources[offset:offset+30]
        entries = []
        for item in batch:
            url = item.get('canonical_url')
            if url is not None and not isinstance(url, str):
                raise ValueError('URL canonique de type invalide')
            entries.append({'titre': str(item.get('title', item['id']))[:200], 'url': url or ''})
            normalized = normaliser_url(url or '')
            if normalized:
                groups.setdefault(normalized, []).append(item['id'])
        tasks = [
            {'id': 'MED-URLS', 'atelier': 'mediatheque', 'action': 'doublons_urls', 'dependances': [], 'entree': {'ressources': entries}},
            {'id': 'LEC-URLS', 'atelier': 'lectrice', 'action': 'controle_urls', 'dependances': [], 'entree': {'ressources': entries}},
            {'id': 'REL-BILAN', 'atelier': 'relieuse', 'action': 'consolider', 'dependances': ['MED-URLS', 'LEC-URLS'], 'entree': {}},
        ]
        mission = {'schema': 'c14.v1', 'mission_id': 'C07-CATALOGUE-'+str(len(states)+1).zfill(3),
                   'origine': 'RELIEUSE_CHATGPT', 'classification': 'PUBLIC', 'taches': tasks}
        state = start(mission, registry)
        state['demonstration'] = False
        state['human_decision_simulated'] = False
        state['resource_ids'] = [item['id'] for item in batch]
        states.append(state)
    summary = {'schema': 'c07.catalogue-proof.v1', 'observed_at': datetime.now(timezone.utc).isoformat(),
               'source_commit': os.environ.get('C07_SOURCE_SHA'), 'source_sha256': hashlib.sha256(raw).hexdigest(),
               'resources_checked': len(resources), 'batches': len(states),
               'tasks_completed': sum(state['report']['bilan']['terminees_deterministes'] for state in states),
               'canonical_url_present': sum(bool(item.get('canonical_url')) for item in resources),
               'canonical_url_absent': sum(not item.get('canonical_url') for item in resources),
               'global_probable_duplicate_groups': [values for values in groups.values() if len(values)>1],
               'status': 'ATTENTE_VALIDATION', 'editorial_approval': False, 'external_ai_called': False,
               'limits': ['Contrôle de métadonnées uniquement ; aucune URL visitée',
                          'Une URL canonique absente ne prouve pas une lacune : des dossiers sont internes',
                          'Doublon URL probable ne vaut pas équivalence d’édition, alias validé ou suppression',
                          'Aucune réserve historique, juridique, sanitaire ou de droits levée']}
    return summary, states



DOCUMENTARY_PATHS = {
    'resources': 'coordination/v2/work-c02-01/data/resources.json',
    'relations': 'coordination/v2/work-c02-01/data/relations.json',
    'work': 'coordination/v2/work-c02-01/data/objections.json',
    'parcours': 'coordination/v2/work-c02-01/data/parcours.json',
    'lectrice': 'coordination/c03/lectrice/MATRICE_35_OBJECTIONS.md',
    'commune01': 'coordination/work/c07/LOT_COMMUNE_01.json',
    'commune02': 'coordination/work/c07/LOT_COMMUNE_02.json',
    'queue': 'coordination/work/c07/EDITORIAL_QUEUE.json',
}


def documentary_inventory(root):
    """Versioned structural inventory, never a historical/legal/publication visa."""
    raw = {key: (root/path).read_bytes() for key, path in DOCUMENTARY_PATHS.items()}
    data = {key: json.loads(value) for key, value in raw.items() if key != 'lectrice'}
    resources = data['resources']['resources']
    ids = [r['id'] for r in resources]
    fns = sorted(ident for ident in ids if ident.startswith('FN-'))
    if len(ids) != 219 or len(set(ids)) != 219 or fns != ['FN-'+str(i).zfill(3) for i in range(1,72)]:
        raise ValueError('Inventaire candidat incomplet : préserver les 219 objets et 71 FN distinctes')
    relations = data['relations']['relations']
    work = data['work']['objections']
    paths = data['parcours']['parcours']
    thematic = re.findall(r'^\| ([ABCD]\d{2}) \|', raw['lectrice'].decode(), re.M)
    transverse = re.findall(r'^\| (T\d{2}) \|', raw['lectrice'].decode(), re.M)
    if (len(relations) != 19 or len({r['id'] for r in relations}) != 19
            or len(work) != 30 or len({w['id'] for w in work}) != 30
            or len(thematic) != 36 or len(set(thematic)) != 36
            or len(transverse) != 6 or len(set(transverse)) != 6
            or len(paths) != 7 or sum(len(p['steps']) for p in paths) != 29):
        raise ValueError('Objections, relations ou Parcours incomplets')
    blocked = next(p for p in paths if p['id'] == 'PAR-005')
    if blocked['validation']['legal'] != 'bloque' or blocked['validation']['publication'] != 'non_autorisee':
        raise ValueError('PAR-005 doit conserver son blocage')
    authorized = sum(r['validation']['publication'] != 'non_autorisee' for r in resources)
    lots = [data['commune01'], data['commune02']]
    if authorized or any(lot.get('publication_authorized') is not False for lot in lots):
        raise ValueError('Nouveau visa de publication interdit dans ce contrôle candidat')
    queue = data['queue']
    held = {item['id'] for item in queue['held']}
    required = {'FN-018','BIO-019','BIO-021','FN-022','FN-048','FN-038','FN-057','DROIT-001','DROIT-002'}
    if (queue['total'] != len(ids) or queue.get('publication_authorized') is not False
            or 'PAR-005' not in queue['blocked_paths'] or not required.issubset(held)):
        raise ValueError('La file doit conserver les attentes spécialisées et PAR-005 bloqué')
    items = [item for lot in lots for item in lot['items']]
    return {
        'schema': 'c01.documentary-inventory.v1',
        'thematic_objections': len(thematic), 'transverse_reserves': len(transverse),
        'work_reserves': len(work), 'work_states': dict(Counter(w['state'] for w in work)),
        'documentary_relations': len(relations), 'fn_notices': len(fns),
        'parcours': len(paths), 'steps': sum(len(p['steps']) for p in paths),
        'new_publication_authorizations': authorized,
        'retained_with_reservations': sum(i.get('editorial_status') == 'RETAINED_WITH_RESERVATIONS' for i in items),
        'not_selected_in_review': sum(i.get('editorial_status') == 'NOT_SELECTED_THIS_REVIEW' for i in items),
        'par005_blocked': True, 'held_resources': len(held),
        'sources': {path: hashlib.sha256(raw[key]).hexdigest() for key, path in DOCUMENTARY_PATHS.items()},
        'limits': ['Contrôle structurel des métadonnées ; aucun fait historique validé',
                   'Choix éditorial, droits et visa de publication restent distincts',
                   'Les six réserves transversales s’ajoutent aux 36 objections thématiques'],
    }

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', default='coordination/v2/work-c02-01/data/resources.json')
    parser.add_argument('--registry', default='coordination/c03/orchestratrice/registre_collectif_c03.json')
    parser.add_argument('--output', default='artifacts/c07/catalogue')
    args = parser.parse_args()
    source = Path(args.source)
    if source.stat().st_size > 1000000:
        raise ValueError('Catalogue trop volumineux')
    summary, states = examine(source.read_bytes(), json.loads(Path(args.registry).read_text()))
    root = Path(__file__).resolve().parents[2]
    if source.resolve() == (root/DOCUMENTARY_PATHS['resources']).resolve():
        summary['documentary_inventory'] = documentary_inventory(root)
    output = Path(args.output);output.mkdir(parents=True, exist_ok=True)
    for state in states:
        path = output/(state['mission_id']+'.json')
        if path.exists():
            existing = json.loads(path.read_text())
            verify(existing)
            if existing.get('mission_hash') != state['mission_hash']:
                raise ValueError('Autre entrée déjà présente ; préserver le résultat et choisir une autre sortie')
            # Do not overwrite a possibly human-approved existing checkpoint.
            continue
        save(path, state)
    (output/'summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2)+'\n')
    print(json.dumps({k: summary[k] for k in ['source_sha256','resources_checked','batches','tasks_completed','status']}))


if __name__ == '__main__':
    main()
