# Day one, day seven — make.fun TikTok video

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ifulchina-ops/day-one-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ifulchina-ops/day-one-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

A 17-second vertical video for [make.fun](https://make.fun), made for the
["Day one, day seven"](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
bounty ($20, top 10 paid by TikTok views + interactions).

## The video

The same tiny agent-built game, "Pixel Hop", on the day it was made and
after a week of daily updates — same map, same start, camera never moving,
so the change is the whole story:

1. **Day one** — a grey world, one flat platform, a plain white square and a
   single star. Nothing else.
2. **Day seven** — the identical run, but now a blue sky with sun and
   drifting clouds, floating platforms, coins, patrolling enemies, a score
   HUD, hearts and a flag at the end.
3. **Close** — the newer build being played, coins collected, score ticking
   up, with the line "Start yours at make.fun".
4. **End card** — make.fun's official 9:16 referral card, with referral
   code `j62x7qjj`.

The video was rendered in-session with ffmpeg from frames drawn by a Node
script (`render-game.mjs` in the build session): no stock footage, no
downloaded video. The program in this repository (`main.ts`) only hands in
the video's TikTok address — the video itself is the entry.
