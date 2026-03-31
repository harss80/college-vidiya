const fs = require('fs');
let txt = fs.readFileSync('src/pages/UniversityDetails.jsx', 'utf8');

txt = txt.replace(/className\s*=\s*["']flex lg:flex-row flex-col gap-4 sm:p-5 md:p-8 mt-2["']/g, 'className="flex flex-col gap-6 sm:p-5 md:p-8 mt-2"');
txt = txt.replace(/className\s*=\s*["']flex-1 flex flex-col gap-3["']/g, 'className="w-full flex flex-col gap-4"');

fs.writeFileSync('src/pages/UniversityDetails.jsx', txt);
console.log("Fixed Flex layout squishing!");
