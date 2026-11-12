"""Verify preservation against the pinned pre-integration main commit."""
import json
import subprocess
from pathlib import Path

main = "c613d9f896fe94144264f6e78b7ac07893a75c67"
r6 = "df3692356b2309b77adf44e9cb1e68603edbb6cc"
# Owner-authorized emergency stop already present on main; exact blob only.
emergency = "df73c5dabf47a0b73d2b55f0346c7006d485dd98"
exceptions = {".github/workflows/pont-relieuse-lectrice-c12.yml":
              "e0961a3a4fb9544f8778b9a61e428d4b36cedb34"}


def git(*args):
    return subprocess.check_output(["git", *args], text=True).strip()


for parent in (main, r6, emergency):
    subprocess.run(["git", "merge-base", "--is-ancestor", parent, "HEAD"], check=True)
base = git("merge-base", main, r6)
paths = git("diff", "--name-only", base, main).splitlines()
records = []
for path in paths:
    before = git("rev-parse", main + ":" + path)
    after = git("rev-parse", "HEAD:" + path)
    assert before == after or exceptions.get(path) == after, "main file changed outside exact emergency stop: " + path
    records.append({"path": path, "blob_sha": before, "preserved": before == after,
                    "authorized_emergency_stop": before != after})
commits = git("rev-list", r6 + ".." + main).splitlines()
summary = {"head": git("rev-parse", "HEAD"), "main": main, "r6": r6, "common_base": base,
           "preserved_main_commits": commits, "preserved_main_files": records}
Path("artifacts/r6-int01").mkdir(parents=True, exist_ok=True)
Path("artifacts/r6-int01/main-preservation.json").write_text(json.dumps(summary, indent=2) + "\n")
print(json.dumps({"head": summary["head"], "preserved_main_commits": len(commits), "preserved_main_files": len(records)}))
