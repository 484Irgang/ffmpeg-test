const fs = require("fs");
const path = require("path");

const coreJsPath = path.resolve(
  __dirname,
  "node_modules/@ffmpeg/core/dist/umd/ffmpeg-core.js"
);
const wasmPath = path.resolve(
  __dirname,
  "node_modules/@ffmpeg/core/dist/umd/ffmpeg-core.wasm"
);

const distPath = path.resolve(__dirname, "dist");

const copyFile = (source, destination) => {
  fs.copyFileSync(source, destination);
  console.log(`Copied ${source} to ${destination}`);
};

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

copyFile(coreJsPath, path.join(distPath, "ffmpeg-core.js"));
copyFile(wasmPath, path.join(distPath, "ffmpeg-core.wasm"));
