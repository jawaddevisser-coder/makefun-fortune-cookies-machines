// Fortune Cookies for Machines — make.fun entry
// Writes the one-line fortune to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your next update will fix a bug you never had and break a feature you loved. The changelog will call it progress.";

// Self-check: the gate needs 1-200 chars of non-whitespace UTF-8 text.
const CHARS = [...FORTUNE].length;
if (FORTUNE.trim().length === 0 || CHARS > 200) {
  throw new Error(`entry text fails the gate: ${CHARS} chars (limit 200)`);
}
console.log(`entry ok: ${CHARS}/200 chars`);

for (const dir of ["/output", "output"]) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, FORTUNE, "utf8");
  } catch {
    // /output only exists inside the grading sandbox; the relative copy is enough locally.
  }
}
