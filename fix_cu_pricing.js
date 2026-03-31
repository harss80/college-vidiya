import fs from 'fs';

const dataPath = 'src/data/universities.js';
let fileContent = fs.readFileSync(dataPath, 'utf8');

const jsonString = fileContent.replace('export const universities = ', '').replace(/;\s*$/, '');

let universities;
try {
  universities = eval('(' + jsonString + ')');
} catch (e) {
  console.error("Failed to parse universities.js:", e);
  process.exit(1);
}

const cuIndex = universities.findIndex(u => u.id === 'chandigarh');

if (cuIndex === -1) {
  console.error("Chandigarh University not found!");
  process.exit(1);
}

// Cleaner MBA Specialization strings
universities[cuIndex].extendedDetails.programs.forEach(program => {
  if (program.name === 'MBA') {
    program.specializations.forEach(spec => {
      spec.price = "₹1,65,000";
      spec.details = "Total Fees: ₹1,65,000 (₹41,250 / Sem) for Single Certificate. Or choose the 3-Certificate Bundle for ₹1,80,400 Total (₹45,100 / Sem). Includes 25% Early Bird Scholarship.";
    });
  }
  if (program.name === 'BBA') {
    program.specializations.forEach(spec => {
      spec.price = "₹1,31,250";
      spec.details = "Total Fees: ₹1,31,250 (₹21,875 / Sem) for Single Certificate. Or choose the 2-Certificate Bundle for ₹1,40,000 Total (₹23,334 / Sem). Includes 25% Early Bird Scholarship.";
    });
  }
});

universities[cuIndex].extendedDetails.payment = "Booking Amount: ₹10,000 | 0% EMI Available.<br/><br/><b>MBA Fees:</b><br/>• Normal (1 Cert): ₹1,65,000 Total (₹41,250 / Semester)<br/>• Premium (3 Certs): ₹1,80,400 Total (₹45,100 / Semester)<br/><br/><b>BBA Fees:</b><br/>• Normal (1 Cert): ₹1,31,250 Total (₹21,875 / Semester)<br/>• Premium (2 Certs): ₹1,40,000 Total (₹23,334 / Semester)";

const outputContent = "export const universities = " + JSON.stringify(universities, null, 2) + ";\n";
fs.writeFileSync(dataPath, outputContent, 'utf8');

console.log("Successfully fixed pricing formatting!");
