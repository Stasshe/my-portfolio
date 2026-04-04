import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const srcDir = path.join(rootDir, 'data', 'products');
const destDir = path.join(rootDir, 'public', 'data', 'products');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

try {
  console.log(`Copying assets from ${srcDir} to ${destDir}...`);
  copyDir(srcDir, destDir);
  console.log('✓ Assets copied successfully');
} catch (error) {
  console.error('✗ Error copying assets:', error.message);
  process.exit(1);
}
