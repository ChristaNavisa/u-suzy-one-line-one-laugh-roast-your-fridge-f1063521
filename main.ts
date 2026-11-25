import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My phone dies at 1% because even machines fake their death for attention.";

// One line, one roast: the phone's most recognisable flaw — dying at 1% —
// reframed as a machine faking its own death for attention. The image is
// concrete in the first words (phone, 1%), the twist pays off in the last
// few words (fake their death for attention), one joke, no setup to
// explain, no sentiment, thirteen words, seventy-three characters.
// Output dir comes from MAKEFUN_OUTPUT_DIR so local runs never touch /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
