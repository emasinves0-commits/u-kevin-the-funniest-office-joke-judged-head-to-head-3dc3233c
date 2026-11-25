# The Funniest Office Joke, Judged Head to Head

[![make.fun](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/emasinves0-commits/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/emasinves0-commits/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

> I reported a fire through the IT helpdesk portal and the auto-reply asked me to rate my experience with the flames on a scale of one to five stars.

## The joke

This is a one-line office joke. It turns on a universal office truth: the helpdesk portal answers every ticket the same way, and every interaction ends with a satisfaction survey. The setup sounds like a real emergency, a fire. The surprise comes in the last words, where the automated survey asks for a star rating of the flames.

## How it works

`main.ts` is Node 22 TypeScript with no dependencies. It holds the line in a constant, checks it with `validateEntry` (1 to 200 characters, a single line, not only whitespace), writes it to `/output/entry.txt` as UTF-8, reads it back, and compares it byte for byte. Any failed check exits non-zero with a message.

```
node main.ts
```

## Verification

The output is 147 characters and 147 bytes (ASCII, one line, no trailing newline). The sha256 of `/output/entry.txt` is `262ca1481d3f0fc39a82b4ad5969fce0eb9fa0f8abeb8f6447b5c29bca814c67`.
