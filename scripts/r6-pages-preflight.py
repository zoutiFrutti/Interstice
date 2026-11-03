"""Read-only Pages preflight. Outputs configuration, never credentials."""
import json
import os
from pathlib import Path
from urllib.request import Request, urlopen

repository = os.environ["GITHUB_REPOSITORY"]
api = os.environ.get("GITHUB_API_URL", "https://api.github.com")
token = os.environ["GITHUB_TOKEN"]


def get(path):
    request = Request(
        f"{api}/repos/{repository}/{path}",
        headers={"Authorization": f"Bearer {token}", "Accept": "application/vnd.github+json"},
    )
    with urlopen(request, timeout=30) as response:
        return json.load(response)


pages = get("pages")
branch = get("branches/main")
rules = get("rulesets")
summary = {
    "build_type": pages.get("build_type"),
    "source": pages.get("source"),
    "html_url": pages.get("html_url"),
    "https_enforced": pages.get("https_enforced"),
    "cname": pages.get("cname"),
    "main_sha": branch["commit"]["sha"],
    "main_protected": branch["protected"],
    "rulesets": [{"id": x["id"], "name": x["name"], "enforcement": x["enforcement"]} for x in rules],
    "custom_deployment_secrets_required": False,
    "custom_deployment_variables_required": False,
    "credential_mechanism": "GitHub-managed Pages workflow: GITHUB_TOKEN and OIDC",
}
Path("artifacts/r6-int01").mkdir(parents=True, exist_ok=True)
Path("artifacts/r6-int01/pages-preflight.json").write_text(json.dumps(summary, indent=2) + "\n")
print(json.dumps(summary))
assert pages.get("build_type") == "legacy", "Pages mechanism changed: inspect before merge"
assert pages.get("source") == {"branch": "main", "path": "/"}, "Pages source changed: inspect before merge"
assert pages.get("html_url"), "Missing Pages address"
