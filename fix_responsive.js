import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const targetPath = join(__dirname, 'src', 'pages', 'UniversityDetails.jsx');
let content = fs.readFileSync(targetPath, 'utf8');

// Global replacements to improve mobile responsiveness
content = content.replace(/p-8/g, 'p-5 md:p-8');
content = content.replace(/px-6/g, 'px-4 lg:px-6');
content = content.replace(/p-6/g, 'p-4 md:p-6');
content = content.replace(/p-5/g, 'p-4 sm:p-5');

// For specific large gap/padding blocks
content = content.replace(/pt-16 pb-20/g, 'pt-10 pb-12 lg:pt-16 lg:pb-20');
content = content.replace(/gap-10/g, 'gap-6 lg:gap-10');
content = content.replace(/gap-8/g, 'gap-5 lg:gap-8');
content = content.replace(/gap-x-12/g, 'gap-x-6 md:gap-x-12');

// Fix text sizes
content = content.replace(/text-4xl md:text-5xl lg:text-6xl/g, 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl');
content = content.replace(/mb-8/g, 'mb-5 md:mb-8');
content = content.replace(/pt-12/g, 'pt-6 md:pt-12');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Made UniversityDetails responsive for all edge-case mobile devices.');
