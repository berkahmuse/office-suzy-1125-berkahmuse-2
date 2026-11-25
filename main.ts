// One-Line Office Joke Laugh-Off — entry for @berkahmuse-2.
//
// The program writes exactly one original one-line office joke to
// /output/entry.txt. The joke is a single line, 1-200 characters,
// no trailing newline games, no network, no secrets, no env reads.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My performance review said I need to be more visible, so now I just stand silently in doorways.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
