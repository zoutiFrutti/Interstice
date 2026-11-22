"""Verify GitHub provenance before a previous artifact is downloaded; no network."""
import json
import os
from pathlib import Path

WORKFLOW = '.github/workflows/work-c07-secure-missions.yml'


def verify_source(run, artifacts, repo, branch, head, owner, prior, current):
    if (not str(prior).isdigit() or str(prior) == str(current) or run.get('id') != int(prior)
            or run.get('repository', {}).get('full_name') != repo
            or run.get('head_repository', {}).get('full_name') != repo
            or run.get('event') != 'workflow_dispatch' or run.get('path') != WORKFLOW
            or run.get('conclusion') != 'success' or run.get('status') != 'completed'
            or run.get('head_sha') != head or run.get('head_branch') != branch
            or run.get('actor', {}).get('login') != owner
            or run.get('triggering_actor', {}).get('login') != owner):
        raise ValueError('Provenance du checkpoint refusée : run, acteur, branche ou code différents')
    matches = [a for a in artifacts.get('artifacts', []) if a.get('name') == 'c07-checkpoint']
    if len(matches) != 1:
        raise ValueError('Checkpoint absent ou ambigu')
    artifact = matches[0]
    if (artifact.get('expired') is not False or artifact.get('workflow_run', {}).get('id') != int(prior)
            or artifact.get('workflow_run', {}).get('head_sha') != head):
        raise ValueError('Checkpoint expiré ou rattaché à un autre code')
    return artifact['id']


def main():
    run = json.loads(Path('checkpoint-source/run.json').read_text())
    artifacts = json.loads(Path('checkpoint-source/artifacts.json').read_text())
    artifact_id = verify_source(run, artifacts, os.environ['GITHUB_REPOSITORY'], os.environ['GITHUB_REF_NAME'],
                                os.environ['GITHUB_SHA'], os.environ['GITHUB_REPOSITORY_OWNER'],
                                os.environ['PRIOR_RUN'], os.environ['GITHUB_RUN_ID'])
    print(json.dumps({'checkpoint_source': 'VERIFIEE', 'artifact_id': artifact_id}))


if __name__ == '__main__':
    main()
