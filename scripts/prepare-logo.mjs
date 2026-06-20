import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC =
  "C:/Users/don/.cursor/projects/c-Users-don-parkeriot-site/assets/c__Users_don_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_1000017767-modified-ae7d1075-7480-4ef3-9dad-a0301e72a50b.png";

mkdirSync("public", { recursive: true });

// Flatten onto white, then scan raw pixels to find the wordmark bounding box.
const { data, info } = await sharp(SRC)
  .flatten({ background: "#ffffff" })
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
console.log("Source:", width, "x", height, "channels:", channels);

// A pixel is "ink" if it's noticeably darker than white.
const INK_MAX = 220;
let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    if (lum < INK_MAX) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const pad = 8;
const left = Math.max(0, minX - pad);
const top = Math.max(0, minY - pad);
const cropW = Math.min(width - left, maxX - minX + 1 + pad * 2);
const cropH = Math.min(height - top, maxY - minY + 1 + pad * 2);
console.log("Content bbox:", { minX, minY, maxX, maxY }, "-> crop", { left, top, cropW, cropH });

// Keep a transparent background for flexibility (re-extract from source with alpha).
await sharp(SRC)
  .extract({ left, top, width: cropW, height: cropH })
  .resize({ width: 1200, withoutEnlargement: false })
  .png()
  .toFile("public/parkeriot-logo.png");

console.log("Wrote public/parkeriot-logo.png");
