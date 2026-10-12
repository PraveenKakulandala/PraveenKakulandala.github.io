import { cp, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
for (const entry of ['index.html', 'src', 'assets', 'yashika', '.nojekyll']) {
  await cp(path.join(root, entry), path.join(output, entry), { recursive: true });
}
await writeFile(path.join(output, 'robots.txt'), 'User-agent: *\nAllow: /\n');
console.log('Built portfolio in dist/');
