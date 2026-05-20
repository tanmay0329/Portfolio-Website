import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directory = 'd:/portfolio/public';

function findFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(findFiles(file));
        } else { 
            if (/\.(png|jpe?g)$/i.test(file)) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = findFiles(directory);

async function convertAll() {
    for (const file of files) {
        const ext = path.extname(file);
        const newFile = file.slice(0, -ext.length) + '.webp';
        console.log(`Converting ${file} to ${newFile}...`);
        try {
            await sharp(file).webp().toFile(newFile);
            fs.unlinkSync(file); // delete old file
            console.log(`Converted and deleted ${file}`);
        } catch (e) {
            console.error(`Error converting ${file}:`, e);
        }
    }
}

convertAll();
