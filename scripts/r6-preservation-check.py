"""Verify preservation against the pinned pre-integration main commit."""
import json
import subprocess
from pathlib import Path

main = "c613d9f896fe94144264f6e78b7ac07893a75c67"
r6 = "df3692356b2309b77adf44e9cb1e68603edbb6cc"


def git(*args):
    return subprocess.check_output(["git", *args], text=True).strip()


security_main = "80ce56adfb9c3bc3275844b2847eac717b433aa5"
for parent in (main, r6, security_main):
    subprocess.run(["git", "merge-base", "--is-ancestor", parent, "HEAD"], check=True)
base = git("merge-base", main, r6)
paths = git("diff", "--name-only", base, main).splitlines()
records = []
manifest = json.loads(Path("coordination/work/c07/C13_EXCEPTIONS.json").read_text()) if Path("coordination/work/c07/C13_EXCEPTIONS.json").exists() else {}
exceptions = {**manifest.get("blobs", {}), **manifest.get("qa_blobs", {})}
# Keep the unconditional stop and exact C13 file scope; no new exception paths.
stop = Path(".github/workflows/pont-relieuse-lectrice-c12.yml").read_text()
assert "if: ${{ false && startsWith" in stop and " || " not in stop
assert "LECTRICE_AI_ENABLED: ${{ vars.LECTRICE_AI_ENABLED }}" in stop
for path in paths:
    before = git("rev-parse", main + ":" + path)
    after = git("rev-parse", "HEAD:" + path)
    assert before == after or exceptions.get(path) == after, "main file changed outside exact C13 patch: " + path
    records.append({"path": path, "blob_sha": before, "preserved": before == after, "security_patch_c13": before != after})
commits = git("rev-list", r6 + ".." + main).splitlines()
summary = {"head": git("rev-parse", "HEAD"), "main": main, "r6": r6, "common_base": base,
           "preserved_main_commits": commits, "preserved_main_files": records}
Path("artifacts/r6-int01").mkdir(parents=True, exist_ok=True)
Path("artifacts/r6-int01/main-preservation.json").write_text(json.dumps(summary, indent=2) + "\n")
print(json.dumps({"head": summary["head"], "preserved_main_commits": len(commits), "preserved_main_files": len(records)}))
