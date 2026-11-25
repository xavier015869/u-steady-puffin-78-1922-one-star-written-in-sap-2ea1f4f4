import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review, written in the voice of a houseplant about its human.
// The plant's grievance: repotted into a pot with no drainage holes, then
// blamed for drowning in its owner's decisions. Kept to a single line
// under 280 characters, with the blame-shift as the joke's turn.
const REVIEW =
  "One star. He repotted me into a pot with no drainage holes, then blamed my roots for drowning in his decisions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
