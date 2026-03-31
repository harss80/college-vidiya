import fs from 'fs';
import { universities } from './src/data/universities.js';

const oldIds = ['lpu', 'vgu', 'christ', 'shoolini'];

const filtered = universities.filter(u => !oldIds.includes(u.id));

const newStr = `export const universities = ${JSON.stringify(filtered, null, 2)};\n`;

fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
console.log('Done cleaning! Kept length:', filtered.length);
