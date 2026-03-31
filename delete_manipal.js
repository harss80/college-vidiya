import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the current data
import { universities } from './src/data/universities.js';

// The user wants to remove 'manipal' because jaipur or sikkim are accurate.
const cleanData = universities.filter(u => u.id !== "manipal");

console.log(`Original count: ${universities.length}`);
console.log(`Cleaned count: ${cleanData.length}`);

// Generate the new file content:
const newContent = `export const universities = ${JSON.stringify(cleanData, null, 2)};\n`;

const targetPath = join(__dirname, 'src', 'data', 'universities.js');
fs.writeFileSync(targetPath, newContent, 'utf8');

console.log('Fixed universities.js for Manipal');
