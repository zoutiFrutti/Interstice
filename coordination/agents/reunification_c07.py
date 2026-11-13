#!/usr/bin/env python3
"""C07: C14 + validation liée au résultat + reprise; aucun réseau ou modèle IA."""
import argparse
import fcntl
import json
import os
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from orchestrateur_c14 import digest, traiter

SCHEMA = 'c07.execution.v1'


def event(state, action, **values):
    record = {'seq': len(state['history']) + 1, 'action': action,
              'at': datetime.now(timezone.utc).isoformat(),
              'previous': state['history'][-1]['hash'] if state['history'] else None, **values}
    record['hash'] = digest(record)
    state['history'].append(record)


def verify(state):
    if not isinstance(state, dict) or state.get('schema') != SCHEMA:
        raise ValueError('Schéma inconnu')
    if any(state.get(key) is not False for key in ('editorial_approval', 'external_ai_called', 'github_writes')):
        raise ValueError('Autorisation sensible interdite dans ce checkpoint')
    report = state.get('report')
    if (not isinstance(report, dict) or report.get('schema') != 'c14.result.v1'
            or digest(report) != state.get('report_hash')
            or report.get('empreinte_mission') != state.get('mission_hash')
            or report.get('mission_id') != state.get('mission_id')):
        raise ValueError('Rapport ou mission altéré')
    history = state.get('history')
    if not isinstance(history, list) or not 2 <= len(history) <= 256:
        raise ValueError('Journal absent ou trop long')
    previous = None
    for index, record in enumerate(history, 1):
        values = {k: v for k, v in record.items() if k != 'hash'}
        if record['seq'] != index or record['previous'] != previous or digest(values) != record['hash']:
            raise ValueError('Journal altéré')
        previous = record['hash']
    actions = [r['action'] for r in history]
    prefix = ['EXECUTION_C14', 'DEMANDE_VALIDATION']
    expected = {'ATTENTE_VALIDATION': prefix,
                'TERMINE_TECHNIQUE': prefix + ['DECISION_HUMAINE', 'REPRISE_CONSOLIDATION'],
                'A_REVOIR': prefix + ['DECISION_HUMAINE', 'A_REVOIR'],
                'ARRETEE': prefix + ['DECISION_HUMAINE', 'ARRETEE']}
    if state.get('status') not in expected or actions != expected[state['status']]:
        raise ValueError('État incompatible avec le journal')
    for record in history:
        for field in ('report_hash', 'artifact_hash'):
            if field in record and record[field] != state['report_hash']:
                raise ValueError('Décision non liée au rapport')
    if len(history) == 4:
        decision = {'TERMINE_TECHNIQUE': 'reprendre', 'A_REVOIR': 'revoir', 'ARRETEE': 'arreter'}
        if history[2].get('decision') != decision[state['status']]:
            raise ValueError('Décision incompatible avec la reprise')
        if not history[2].get('actor_declared'):
            raise ValueError('Acteur de décision absent')
    if state['status'] == 'TERMINE_TECHNIQUE' and state.get('artifacts') != [
            {'kind': 'rapport_candidat', 'sha256': state['report_hash']}]:
        raise ValueError('Artefact de reprise altéré')


def start(mission, registry, stopped=False):
    if stopped:
        raise ValueError('Arrêt d’urgence actif')
    roles = set(registry['roles'])
    if any(task['atelier'] not in roles for task in mission['taches']):
        raise ValueError('Atelier non inscrit au registre C18')
    result = traiter(mission)
    state = {'schema': SCHEMA, 'mission_id': mission['mission_id'],
             'mission_hash': digest(mission), 'status': 'ATTENTE_VALIDATION',
             'report': result, 'report_hash': digest(result),
             'editorial_approval': False, 'external_ai_called': False,
             'github_writes': False, 'history': [], 'artifacts': [],
             'question': {'id': 'validation-resultat', 'prompt': 'Que faire de ce contrôle technique ?',
                          'recommended': 'reprendre', 'options': ['reprendre', 'revoir', 'arreter'],
                          'target': 'conversation de l’atelier : transfert automatique indisponible'}}
    event(state, 'EXECUTION_C14', report_hash=state['report_hash'])
    event(state, 'DEMANDE_VALIDATION', report_hash=state['report_hash'])
    return state


def decide(state, decision, actor, report_hash, stopped=False):
    verify(state)
    if stopped:
        raise ValueError('Arrêt d’urgence actif')
    if state['status'] != 'ATTENTE_VALIDATION':
        raise ValueError('Décision déjà traitée ou état non éligible')
    if not isinstance(actor, str) or not actor.strip() or len(actor) > 80:
        raise ValueError('Identité déclarative requise; le workflow vérifie l’acteur GitHub')
    if report_hash != state['report_hash'] or digest(state['report']) != report_hash:
        raise ValueError('Décision périmée ou résultat altéré')
    if decision not in ('reprendre', 'revoir', 'arreter'):
        raise ValueError('Décision inconnue')
    event(state, 'DECISION_HUMAINE', decision=decision, actor_declared=actor, report_hash=report_hash)
    if decision == 'reprendre':
        # Resume only the allowed consolidation, never an AI call or editorial promotion.
        state['status'] = 'TERMINE_TECHNIQUE'
        state['artifacts'] = [{'kind': 'rapport_candidat', 'sha256': report_hash}]
        event(state, 'REPRISE_CONSOLIDATION', artifact_hash=report_hash)
    else:
        state['status'] = 'A_REVOIR' if decision == 'revoir' else 'ARRETEE'
        event(state, state['status'])
    return state


def save(path, state):
    verify(state)
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, name = tempfile.mkstemp(prefix='.c07-', dir=path.parent)
    try:
        with os.fdopen(fd, 'w') as stream:
            json.dump(state, stream, ensure_ascii=False, indent=2)
            stream.write('\n')
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(name, path)
    finally:
        if os.path.exists(name):
            os.unlink(name)


def load_json(path, limit=250000):
    path = Path(path)
    if path.stat().st_size > limit:
        raise ValueError('Checkpoint ou mission trop volumineux')
    return json.loads(path.read_text())


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=['start', 'decide', 'verify'])
    parser.add_argument('--state', required=True)
    parser.add_argument('--mission')
    parser.add_argument('--registry', default='coordination/c03/orchestratrice/registre_collectif_c03.json')
    parser.add_argument('--decision', choices=['reprendre', 'revoir', 'arreter'])
    parser.add_argument('--actor')
    parser.add_argument('--report-hash')
    args = parser.parse_args()
    path = Path(args.state)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(str(path) + '.lock', 'a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        stopped = os.environ.get('ATELIERS_EMERGENCY_STOP', 'false') != 'false'
        if args.action == 'start':
            mission = load_json(args.mission, 50000)
            if path.exists():
                old = load_json(path)
                verify(old)
                if old['mission_hash'] != digest(mission):
                    raise ValueError('ID/état existant avec une autre entrée')
                print('DOUBLON_REFUSE: état conservé')
                return
            state = start(mission, json.loads(Path(args.registry).read_text()), stopped)
        else:
            state = load_json(path)
            verify(state)
            if args.action == 'decide':
                state = decide(state, args.decision, args.actor, args.report_hash, stopped)
        save(path, state)
        print(json.dumps({'mission': state['mission_id'], 'status': state['status'],
                          'report_hash': state['report_hash'], 'external_ai_called': False}))


if __name__ == '__main__':
    main()
