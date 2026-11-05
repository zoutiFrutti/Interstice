"""Execute bounded C14/C07 checks against the real candidate catalogue, without AI/network."""
import argparse
import json
import hashlib
import os
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
