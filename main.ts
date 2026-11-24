// Everyday Wonder — one sentence, at most 200 characters, written to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. The program is deterministic: same sentence on every run, no
// network, no clock, no randomness, nothing read from outside the repository.
// The sentence turns a small everyday moment at an angle the reader has not met:
// autocorrect, the invisible helper, finishing a sentence with a word its owner
// never typed — as if someone else lived in the keyboard.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone's autocorrect finished my sentence with a word I have never typed, and for a moment I wondered who else lives in my keyboard.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
