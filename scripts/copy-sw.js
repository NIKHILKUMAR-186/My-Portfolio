#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

async function copySw() {
  const repoRoot = path.resolve(__dirname, "..");
  const src = path.join(repoRoot, "dist", "sw.js");
  const destDir = path.join(repoRoot, ".vercel", "output", "static");
  const dest = path.join(destDir, "sw.js");

  try {
    if (!fs.existsSync(src)) {
      console.error(`source not found: ${src}`);
      process.exitCode = 1;
      return;
    }

    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`copied ${src} -> ${dest}`);
  } catch (err) {
    console.error("failed to copy sw.js:", err);
    process.exitCode = 1;
  }
}

copySw();
