import fs from 'fs';

let lines = fs.readFileSync('src/pages/UniversityDetails.jsx', 'utf8').split(/\r?\n/);
let foundFlex = false;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('lg:flex-row') && lines[i].includes('gap-4') && lines[i].includes('mt-2')) {
        lines[i] = lines[i].replace('flex lg:flex-row flex-col gap-4 sm:p-5 md:p-8 mt-2', 'flex flex-col gap-6 sm:p-5 md:p-8 mt-2');
        console.log("Found and replaced flex row layout line", i);
        foundFlex = true;
    }
    
    if (lines[i].includes('flex-1') && lines[i].includes('flex-col') && lines[i].includes('gap-3') && lines[i-1] && lines[i-1].includes('Level 2: List of Programs')) {
        lines[i] = lines[i].replace('flex-1 flex flex-col gap-3', 'w-full flex flex-col gap-4');
        console.log("Found and replaced List of Programs div on line", i);
    }

    // Try finding the grid
    if (lines[i].includes('grid-cols-1 sm:grid-cols-2 gap-3')) {
        lines[i] = lines[i].replace('grid-cols-1 sm:grid-cols-2 gap-3', 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4');
        console.log("Found and replaced old Specializations Grid line", i);
    }
    
    if (lines[i].includes('Level 4: Spec details')) {
        // Next line is the w-full lg:w-[450px]
        if (lines[i+1].includes('lg:w-[450px]')) {
            lines[i+1] = lines[i+1].replace('w-full lg:w-[450px] xl:w-[500px] shrink-0 mt-6 lg:mt-0', 'w-full mt-2 lg:mt-6');
            console.log("Found and replaced Level 4 panel on line", i+1);
        } else if (lines[i+1].includes('w-full mt-2 lg:mt-6')) {
            console.log("Level 4 is already fine on line", i+1);
        } else if (lines[i+1].includes('w-[450px]')) {
             lines[i+1] = lines[i+1].replace(/lg:w-\[450px\]/g, ' ');
             lines[i+1] = lines[i+1].replace(/xl:w-\[500px\]/g, ' ');
             lines[i+1] = lines[i+1].replace(/shrink-0/g, ' ');
             console.log("Brute force replaced width restriction on line", i+1);
        }
    }
}

fs.writeFileSync('src/pages/UniversityDetails.jsx', lines.join('\n'));
console.log("Line by line execution complete!");
if (!foundFlex) { console.log('WARNING: Could not find flex lg:flex-row on any line!!'); }
