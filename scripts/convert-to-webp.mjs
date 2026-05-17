import sharp from "sharp";
import { readdir, mkdir, copyFile, unlink, stat } from "node:fs/promises";
import { join, parse } from "node:path";

const ASSETS_DIR = "src/assets";
const BACKUP_DIR = "src/assets/_originals";
const QUALITY = 90;

async function run() {
  await mkdir(BACKUP_DIR, { recursive: true });

  const entries = await readdir(ASSETS_DIR, { withFileTypes: true });
  const pngFiles = entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".png"))
    .map((e) => e.name);

  let totalBefore = 0;
  let totalAfter = 0;
  const rows = [];

  for (const name of pngFiles) {
    const src = join(ASSETS_DIR, name);
    const backup = join(BACKUP_DIR, name);
    const dest = join(ASSETS_DIR, `${parse(name).name}.webp`);

    await copyFile(src, backup);

    const beforeBytes = (await stat(src)).size;

    await sharp(src)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(dest);

    const afterBytes = (await stat(dest)).size;

    await unlink(src);

    totalBefore += beforeBytes;
    totalAfter += afterBytes;
    rows.push({
      name,
      beforeKB: (beforeBytes / 1024).toFixed(1),
      afterKB: (afterBytes / 1024).toFixed(1),
      saved: `${(((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(0)}%`,
    });
  }

  console.table(rows);
  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(
      totalAfter /
      1024 /
      1024
    ).toFixed(2)} MB  (saved ${(
      ((totalBefore - totalAfter) / totalBefore) *
      100
    ).toFixed(1)}%)`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
