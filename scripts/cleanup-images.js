import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIRECTORIES = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/assets'),
];

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

function deleteOriginals(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        deleteOriginals(filePath);
      }
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        const fileName = path.basename(filePath, ext);
        const webpPath = path.join(dir, `${fileName}.webp`);
        
        if (fs.existsSync(webpPath)) {
          console.log(`Deleting original: ${file} (WebP version exists)`);
          fs.unlinkSync(filePath);
        } else {
          console.log(`Keeping original: ${file} (No WebP version found)`);
        }
      }
    }
  }
}

async function main() {
  console.log('Starting cleanup of original images...');
  for (const dir of TARGET_DIRECTORIES) {
    if (fs.existsSync(dir)) {
      console.log(`Cleaning directory: ${dir}`);
      deleteOriginals(dir);
    }
  }
  console.log('Cleanup complete!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
