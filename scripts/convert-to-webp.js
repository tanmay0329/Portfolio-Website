import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIRECTORIES = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/assets'),
];

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function convertToWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!EXTENSIONS.includes(ext)) return;

  const fileName = path.basename(filePath, ext);
  const dirName = path.dirname(filePath);
  const outputPath = path.join(dirName, `${fileName}.webp`);

  // Skip if webp already exists
  if (fs.existsSync(outputPath)) {
    console.log(`Skipping: ${fileName}${ext} (WebP already exists)`);
    return;
  }

  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Converted: ${fileName}${ext} -> ${fileName}.webp`);
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err.message);
  }
}

async function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        await walk(filePath);
      }
    } else {
      await convertToWebp(filePath);
    }
  }
}

async function main() {
  console.log('Starting WebP conversion...');
  for (const dir of TARGET_DIRECTORIES) {
    if (fs.existsSync(dir)) {
      console.log(`Processing directory: ${dir}`);
      await walk(dir);
    }
  }
  console.log('Conversion complete!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
