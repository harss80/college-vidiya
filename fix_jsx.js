import fs from 'fs';

let txt = fs.readFileSync('src/pages/UniversityDetails.jsx', 'utf8');

if (txt.includes('selectedProgram ? (') && !txt.includes('<div className="w-full mt-2 lg:mt-6">')) {
    txt = txt.replace('{selectedProgram ? (', '<div className="w-full mt-2 lg:mt-6">\n                                           {selectedProgram ? (');
    fs.writeFileSync('src/pages/UniversityDetails.jsx', txt);
    console.log("Restored missing div wrapper!");
} else {
    console.log("Wrapper div already exists or target not found!");
}
