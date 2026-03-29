import fs from 'fs';

let code = fs.readFileSync('src/data/universities.js', 'utf8');

const feeMap = {
  uttaranchal: { UG: '₹99,000', PG: '₹94,000' },
  lpu: { UG: '₹1,22,400', PG: '₹1,61,600' },
  nmims: { UG: '₹1,31,000', PG: '₹1,96,000', 'BCom': '₹94,000', 'B.Com': '₹94,000' },
  opjindal: { PG: '₹1,60,000' },
  jindal: { PG: '₹1,60,000' },
  smu: { UG: '₹97,500', PG: '₹1,10,000', 'BA': '₹75,000' },
  amity: { UG: '₹1,50,000', PG: '₹1,99,000' },
  chandigarh: { UG: '₹1,35,000', PG: '₹1,60,000' },
  dpu: { UG: '₹1,25,000', PG: '₹1,70,000' },
  dy: { UG: '₹1,25,000', PG: '₹1,70,000' },
  alliance: { UG: '₹90,000', PG: '₹1,75,000' },
  jain: { UG: '₹1,65,000', PG: '₹1,96,000' },
  jiit: { UG: '₹1,39,000', PG: '₹1,75,000' }
};

let currentId = null;
let currentGroup = null;
let currentProgram = null;

const lines = code.split('\n');
for (let i = 0; i < lines.length; i++) {
   const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
   if (idMatch) currentId = idMatch[1];
   
   const groupMatch = lines[i].match(/group:\s*"([^"]+)"/);
   if (groupMatch) {
       currentGroup = groupMatch[1];
   }
   
   const progMatch = lines[i].match(/name:\s*"([^"]+)"/);
   if (lines[i].includes('group:') && progMatch) {
       currentProgram = progMatch[1];
   }
   
   if (lines[i].includes('price: "Check Plan"')) {
      let price = '₹1,00,000'; // fallback
      if (feeMap[currentId]) {
         if (currentProgram && (currentProgram.includes('B.Com') || currentProgram.includes('BCom'))) {
             price = feeMap[currentId]['BCom'] || feeMap[currentId]['B.Com'] || feeMap[currentId][currentGroup] || '₹1,00,000';
         } else if (currentProgram && currentProgram.includes('BA')) {
             price = feeMap[currentId]['BA'] || feeMap[currentId][currentGroup] || '₹1,00,000';
         } else {
             price = feeMap[currentId][currentGroup] || '₹1,00,000';
         }
      }
      lines[i] = lines[i].replace('"Check Plan"', '"' + price + '"').replace('"Check Plan"', '"' + price + '"');
   }
}

fs.writeFileSync('src/data/universities.js', lines.join('\n'));
console.log('Update finished');
