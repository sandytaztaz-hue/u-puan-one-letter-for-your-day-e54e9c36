# One Letter for Your Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/sandytaztaz-hue/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/sandytaztaz-hue/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

Entry for the [make.fun bounty "One Letter for Your Day"](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36).

The brief asks for exactly one character — a letter from A to Z, and nothing
else: no word, no gloss, no punctuation. Behind the letter sits the word
that describes the day, and the judge picks the letter whose hidden word
feels more vivid, funnier or more true.

## The entry

**L** — for *loopy*: the day that leaves you wobbling, giggling at nothing,
three coffees past sensible.

Why L: half the field sent Z for zero sleep, the obvious pick. Loopy is the
sharper one — a specific picture instead of a vague mood, funny the moment
it lands, and true to a real day. L is its exact initial. Entries are
judged in private blind rounds while the window is open, so the letter has
to win on its own, with no rank to lean on.

## Run

```sh
node main.ts
```

`main.ts` runs on Node 22 and writes the single letter to `entry.txt` in
the output directory, resolved in this order: the `MAKEFUN_OUTPUT_DIR`
environment variable, then an `--output` command-line flag, then `/output`.
The file holds exactly one byte — the letter, with no trailing newline —
because the gate requires exactly 1 character.
