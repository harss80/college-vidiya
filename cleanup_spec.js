import fs from 'fs';

let txt = fs.readFileSync('src/pages/UniversityDetails.jsx', 'utf8');

txt = txt.replace(/const isSpecSelected = selectedSpec\?\.name === spec\.name;/g, 'const isSpecSelected = false;');
txt = txt.replace(/setSelectedSpec\(\w*\);/g, '');

fs.writeFileSync('src/pages/UniversityDetails.jsx', txt);
console.log("selectedSpec cleanup complete!");
