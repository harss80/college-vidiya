import fs from 'fs';

let txt = fs.readFileSync('src/data/universities.js', 'utf8');

// Find the BA that I added to the END of the programs array by accident.
// It looks like:
//        {
//          "group": "UG",
//          "name": "BA",
//          "duration": "36 Months",
//          "priceRange": "₹61,200 (Total)",
//          "specializations": [

// The one at the top is also identical now because I replaced it.
// Wait, the one at the end is preceeded by MCA's end.

// Since there should ONLY be ONE "name": "BA" inside the uttaranchal-online programs,
// I can just parse the file, find the uttaranchal university object, and filter out duplicates.
const startMarker = 'export const universities = ';
const jsonStartIndex = txt.indexOf('[');
const fileEnd = txt.lastIndexOf(';'); // or just the end of the text if no semicolon

try {
    // Actually, I can just use a regex to match the second occurrence of the exactly identical block
    // Or simpler: The one at the top is under "BBA", the one at the bottom is under "Cyber Security" (end of MCA)
    const duplicateMatch = /,\s*\{\s*"group": "UG",\s*"name": "BA",\s*"duration": "36 Months",\s*"priceRange": "₹61,200 \(Total\)",\s*"specializations": \[\s*\{\s*"name": "General"(.*?)\}\s*\]\s*\}/g;
    
    // Replace all occurrences, but wait, then they are ALL deleted!
    // No, I'll just find the last occurrence and remove it.
    let count = 0;
    txt = txt.replace(duplicateMatch, (match) => {
        count++;
        // If it's the second time we see it, wipe it!
        if (count > 1) {
            return '';
        }
        return match;
    });
    
    fs.writeFileSync('src/data/universities.js', txt);
    console.log("Removed duplicate BA program!");
} catch (e) {
    console.error(e);
}
