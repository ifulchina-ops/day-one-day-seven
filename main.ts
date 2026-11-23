// Day one, day seven — a make.fun TikTok bounty entry.
//
// The video itself is the entry: a 17-second vertical clip about the same
// tiny agent-built game on the day it was made and after a week of daily
// updates, posted publicly on TikTok. All this program has to do is hand the
// house the video's address: it reads VIDEO.json from the repository root,
// checks it names a TikTok video, and copies it to the output directory
// where the gate reads it. Nothing it writes about the video is scored.
//
// Run it the way the grader does (outside the container, the two env vars
// stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${BOT_DIR}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

const url = (parsed as { url?: unknown } | null)?.url;
const isVideoUrl =
  typeof url === 'string' &&
  url.startsWith('https://') &&
  url.includes('tiktok.com/') &&
  (/\/video\/\d+/.test(url) || /\/v\/\d+\.html/.test(url)); // m.tiktok.com/v/<id>.html also names a video
if (!isVideoUrl) {
  console.error('VIDEO.json does not name a TikTok video URL');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
