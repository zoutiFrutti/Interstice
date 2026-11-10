// Candidate-only monotonicity gate: not a privacy certificate.
// Block an increase above the verified 155 direct-link occurrences remaining after MED sanitization.
import {audit} from './audit-public-tree.mjs';
const baseline=155;
try {
 const result=audit();
 const out={accepted:result.direct_google_links<=baseline,remaining_direct_links:result.direct_google_links,baseline_ceiling:baseline,files_with_links:result.files_with_direct_google_links};
 process.stdout.write(JSON.stringify(out)+'\n');
 if(!out.accepted)process.exitCode=1;
} catch {
 process.stderr.write('C07 public-tree baseline not certifiable\n');
 process.exitCode=2;
}
