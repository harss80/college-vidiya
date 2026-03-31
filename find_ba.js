import fs from 'fs';

// To avoid parsing the whole file and dealing with imports/exports, 
// I'll use a regex strategy that replaces the BA string exactly. Or, I can just write a script that loads the module.
// But it's ES module `export const universities`, which is hard to load dynamically in CJS.

let txt = fs.readFileSync('src/data/universities.js', 'utf8');

// The duplicate at the bottom of the uttaranchal-online block looks like:
//         {
//           "group": "UG",
//           "name": "BA",
//           "duration": "36 Months",
//           "priceRange": "₹61,200 (Total)",

// Let's find how many times "name": "BA" appears.
const occurences = [...txt.matchAll(/"name": "BA"/g)];
console.log("Found BA occurrences:", occurences.length);

if (occurences.length > 1) {
    // The first one is the one I populated at line 83.
    // The second time is the one I accidentally injected.
    // Let's find the exact string of the duplicate block manually.
    const startOfSecond = txt.indexOf('{"group": "UG","name": "BA"'.replace(/"/g, '"').replace(/:/g, ': ').replace(/,/g, ',\n          '));
    // Since formatting is complex, let's just use string slicing based on the index of the second "name": "BA".
    
    let firstIndex = txt.indexOf('"name": "BA"');
    let secondIndex = txt.indexOf('"name": "BA"', firstIndex + 1);
    
    // Walk back to find the start of the object: {\n          "group": "UG",\n          "name": "BA",
    let startObj = txt.lastIndexOf('{', secondIndex);
    // Walk forward to find the end of the object
    // I know it ends with "}\n          ]\n        }" or similar.
    let searchEnd = txt.indexOf('] \n        }', startObj); // Might not match
    
    // Instead of risking destroying the JSON, I'll log the 1500 chars around the second occurrence to build an exact replacement block using multi_replace_file_content!
    console.log(txt.substring(startObj - 50, startObj + 1500));
}

