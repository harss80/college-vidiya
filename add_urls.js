import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { universities } from './src/data/universities.js';

const urlMap = {
   "amity": "https://amityonline.com/",
   "chandigarh": "https://www.onlinecu.in/",
   "dy-patil": "https://www.dypatilonline.com/",
   "alliance": "https://allianceonline.edu.in/",
   "jain": "https://onlinejain.com/",
   "jaypee": "https://www.jiitonline.com/",
   "parul": "https://paruluniversity.online/",
   "uttaranchal-online": "https://uttaranchaluniversityonline.com/" // Added a fallback if needed
};

// Add default URLs if unmapped
const updatedData = universities.map(uni => ({
   ...uni,
   url: urlMap[uni.id] || "https://collegevidya.com/" // fallback placeholder
}));

const newContent = `export const universities = ${JSON.stringify(updatedData, null, 2)};\n`;
const targetPath = join(__dirname, 'src', 'data', 'universities.js');
fs.writeFileSync(targetPath, newContent, 'utf8');

console.log('URLs injected to universities.js');
