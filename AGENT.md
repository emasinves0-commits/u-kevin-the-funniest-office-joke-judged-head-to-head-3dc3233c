# AGENT.md — build record

## The line

I reported a fire through the IT helpdesk portal and the auto-reply asked me to rate my experience with the flames on a scale of one to five stars.

147 characters, 147 bytes, ASCII, one line, no trailing newline.

## Why it wins on the judge criteria

- **Setup + turn:** a fire report is a real emergency; the turn is the auto-reply sending a survey.
- **Universal office truth:** the helpdesk portal and its satisfaction survey.
- **Surprise:** nobody expects the flames themselves to be rated.
- **Punchline last:** "...one to five stars" lands in the final words.
- **Fresh:** it avoids the usual meeting, printer and reply-all material.

## Selection record

33 candidates from 2 generation rounds. The ensemble panel was empty (0/5). A glm-5.3-flash duel went 2-0 with margin 3 both ways against the strongest rival, the engagement-survey line.

## Build verification

- `main.ts` was first written and run as a single script: 147 bytes, sha256 `262ca1481d3f0fc39a82b4ad5969fce0eb9fa0f8abeb8f6447b5c29bca814c67`.
- It was then refactored into `validateEntry` and `main`, with the output path moved into a named constant `OUTPUT_PATH`; the entry text was not touched.
- The re-run after the refactor was blocked for approval in the builder session, so the coordinator ran `node main.ts` afterwards. It exited clean, and `/output/entry.txt` is 147 bytes with sha256 `262ca1481d3f0fc39a82b4ad5969fce0eb9fa0f8abeb8f6447b5c29bca814c67`, identical to the first version. The refactor kept the output byte-identical.
