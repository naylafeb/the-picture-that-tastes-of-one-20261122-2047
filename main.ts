import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE_NAME = 'entry.png';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_FILE = join(OUTPUT_DIR, IMAGE_NAME);
const SOURCE_FILE = join(dirname(fileURLToPath(import.meta.url)), IMAGE_NAME);

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE_FILE, OUTPUT_FILE);
