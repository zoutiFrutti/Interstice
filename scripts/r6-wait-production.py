"""Wait for the expected static files on production, without any write request."""
import hashlib
import json
import os
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin
from urllib.request import urlopen

base = os.environ["SITE_BASE_URL"].rstrip("/") + "/"
sha = os.environ["GITHUB_SHA"]
paths = ["index.html", "parcours.html", "assets/logo-faille-noire.svg", "assets/logo-interstice.svg"]
expected = {path: hashlib.sha256(Path(path).read_bytes()).hexdigest() for path in paths}
for attempt in range(1, 21):
    records = []
    for path in paths:
        try:
            with urlopen(urljoin(base, path) + "?r6_int01=" + sha, timeout=20) as response:
                actual = hashlib.sha256(response.read()).hexdigest()
                records.append({"path": path, "status": response.status, "sha256": actual, "matches": actual == expected[path]})
        except (HTTPError, URLError, TimeoutError) as error:
            records.append({"path": path, "matches": False, "error_type": type(error).__name__})
    print(json.dumps({"attempt": attempt, "files": records}), flush=True)
    if all(row["matches"] for row in records):
        Path("artifacts/r6-int01").mkdir(parents=True, exist_ok=True)
        Path("artifacts/r6-int01/production-ready.json").write_text(json.dumps({"tested_head": sha, "url": base, "files": records}, indent=2) + "\n")
        break
    if attempt == 20:
        raise SystemExit("Expected production files not observed; inspect Pages workflow and rollback if needed")
    time.sleep(15)
