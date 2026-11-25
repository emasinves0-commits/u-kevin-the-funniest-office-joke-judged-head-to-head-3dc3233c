// Writes the entry line to /output/entry.txt and verifies it byte-for-byte.
//
// The joke: reporting a fire is about as urgent as it gets, but the IT helpdesk
// portal answers like it does to every ticket, with an automatic satisfaction
// survey. The setup sounds like a real emergency, and the punchline lands in the
// last words, where the survey asks for a one-to-five star rating of the flames.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_TEXT =
  "I reported a fire through the IT helpdesk portal and the auto-reply asked me to rate my experience with the flames on a scale of one to five stars.";

const OUTPUT_PATH = "/output/entry.txt";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

// Returns a list of problems; an empty list means the entry is valid.
function validateEntry(text: string): string[] {
  const problems: string[] = [];
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    problems.push(
      `entry must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (/[\r\n]/.test(text)) {
    problems.push("entry must be a single line with no newline");
  }
  if (text.trim().length === 0) {
    problems.push("entry must not be only whitespace");
  }
  return problems;
}

function main(): void {
  const problems = validateEntry(ENTRY_TEXT);
  if (problems.length > 0) {
    for (const p of problems) console.error("invalid entry: " + p);
    process.exit(1);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");

  const written = readFileSync(OUTPUT_PATH);
  const expected = Buffer.from(ENTRY_TEXT, "utf8");
  if (!written.equals(expected)) {
    console.error(
      `read-back mismatch: wrote ${expected.length} bytes, read ${written.length}`,
    );
    process.exit(1);
  }
  console.log(`wrote ${written.length} bytes to ${OUTPUT_PATH}`);
}

main();
