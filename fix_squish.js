const fs = require('fs');

let txt = fs.readFileSync('src/pages/UniversityDetails.jsx', 'utf8');

// The reason replace string didn't work was likely because the classname string itself was different or had a different space formatting. 
// We will replace using simple precise strings.
txt = txt.replace('className="flex lg:flex-row flex-col gap-4 sm:p-5 md:p-8 mt-2"', 'className="flex flex-col gap-6 sm:p-5 md:p-8 mt-2"');
txt = txt.replace('className="flex-1 flex flex-col gap-3"', 'className="w-full flex flex-col gap-3"');
txt = txt.replace('className="p-4 sm:p-5 md:p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-4"', 'className="p-4 sm:p-5 md:p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"');

// And if it's the original grid
txt = txt.replace('className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3"', 'className="p-4 sm:p-5 md:p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"');

fs.writeFileSync('src/pages/UniversityDetails.jsx', txt);
console.log("Squish fix executed!");
