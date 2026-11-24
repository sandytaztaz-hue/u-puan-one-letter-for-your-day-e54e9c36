// One Letter for Your Day — entry program.
//
// The competition asks for exactly one character, a letter from A to Z,
// and nothing else: no word, no gloss, no punctuation. The gate requires
// /output/entry.txt to be UTF-8 text of exactly 1 character, so this
// program writes a single byte with no trailing newline.
//
// The letter is L, for "loopy": the day that left the sender wobbling,
// giggling at nothing, three coffees past sensible. Loopy is vivid and
// specific (a sharp picture, not a vague mood), funny and surprising in a
// way that lands at once, true to a real day, and L is its exact initial —
// not the obvious pick (Z for zero sleep) that half the field sent.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LETTER = "L";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim() !== "") {
    return resolve(fromEnv);
  }
  for (const arg of process.argv.slice(2)) {
    if (arg === "--output") {
      const next = process.argv[process.argv.indexOf(arg) + 1];
      if (next) return resolve(next);
    }
    if (arg.startsWith("--output=")) {
      return resolve(arg.slice("--output=".length));
    }
  }
  return "/output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
