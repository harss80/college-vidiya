import fs from 'fs';
const path = 'd:/collegevidiyaguide/src/data/universities.js';
let content = fs.readFileSync(path, 'utf8');

const dypatilIdx = content.indexOf('"id": "dypatil"');
const amityIdx = content.indexOf('"id": "amity"');

if (dypatilIdx > -1 && amityIdx > -1) {
    const startDyPatil = content.lastIndexOf('{', dypatilIdx);
    const endAmityBlockStart = content.lastIndexOf('{', amityIdx);
    
    // We want to delete from startDyPatil to endAmityBlockStart.
    // wait, what about the comma?
    // Before Dypatil there is a comma, after amity there is an object.
    // So preserving `startDyPatil` string boundary (which is a `{`)
    // If we substring `part1` up to `startDyPatil` and `part2` from `endAmityBlockStart`, 
    // it will perfectly link `...,\n  {` (end of previous object) with `{ // start of amity }`
    // Yes! Let's slice it:
    
    const part1 = content.substring(0, startDyPatil);
    const part2 = content.substring(endAmityBlockStart);
    
    fs.writeFileSync(path, part1 + part2);
    console.log("Success: Removed duplicates");
} else {
    console.log("Indexes not found.");
}
