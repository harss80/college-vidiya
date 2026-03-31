import fs from 'fs';
import { universities } from './src/data/universities.js';

const targetUniIndex = universities.findIndex(u => u.id === 'uttaranchal-online');
if (targetUniIndex === -1) throw new Error("UU not found");

const targetUni = universities[targetUniIndex];

if (!targetUni.extendedDetails) {
    targetUni.extendedDetails = { 
        usps: ["NAAC A+", "UGC Entitled", "WURI Ranked"],
        payment: "Registration = ₹1000",
        examination: "30:70 Assignment/Exam",
        leadLocking: "Auto Lock",
        programs: [] 
    };
} else if (!targetUni.extendedDetails.programs) {
    targetUni.extendedDetails.programs = [];
}

let mbaProg = targetUni.extendedDetails.programs.find(p => p.name === 'MBA');
if (!mbaProg) {
    mbaProg = {
        group: "PG",
        name: "MBA",
        duration: "24 Months",
        priceRange: "₹94k - ₹98k",
        specializations: []
    };
    targetUni.extendedDetails.programs.push(mbaProg);
}

const richMBAData = {
    price: "₹98,000 (Total) / ₹24,500 (Sem)",
    duration: "24 Months (8-10 hrs/week)",
    about: "The Master of Business Administration (MBA) at Uttaranchal University is a UGC-Entitled online degree. It features a world-class curriculum crafted by industry experts, 1-on-1 personalized mentorship, and live interactive classes.",
    careerScope: "Management occupations are growing 8x faster than traditional roles. Post-MBA careers include C-level executives, strategic leadership, operations management, or specialized IT scaling, with 4.5+ Lakh jobs actively booming in the IT management sector.",
    usps: [
        "1-on-1 Personalized Mentorship assigning a dedicated mentor per student",
        "Prodigious faculty teaching a world-class intensive curriculum",
        "Specially curated Industry Immersion & real-life scenario training",
        "Complete Job Assistance targeting placement in reputed conglomerates",
        "Integrated LMS with a 24x7 huge e-library catalog"
    ],
    paymentDetails: "<b>🔥 30% Early Bird Scholarship Applied!</b><br/><br/>• <b>Semester Fee:</b> <strike>₹35,000</strike> <b>₹24,500</b><br/>• <b>Annual Fee:</b> <strike>₹68,000</strike> <b>₹47,000</b><br/>• <b>One-Time Full Fee:</b> <strike>₹1,36,000</strike> <b>₹94,000</b><br/><br/><i>Exam Fee: ₹2,500/semester</i><br/><i>No-Cost EMI starting at ₹3,956* (Credit/Debit/UPI available)</i>",
    certifications: "You will gain embedded certifications mapped directly to your electives through their skill-enhancing corporate curriculum.",
    syllabus: [
        { semester: "Semester 1", subjects: ["Principles and Practices of Management", "Organizational Behaviour", "Accounting for Managers", "Managerial Economics", "Business Communication"] },
        { semester: "Semester 2", subjects: ["Financial Management", "Human Resource Management", "Marketing Management", "Research Methodology", "Business Law"] },
        { semester: "Semester 3", subjects: ["Strategic Management", "Elective Specialization 1", "Elective Specialization 2", "Elective Specialization 3"] },
        { semester: "Semester 4", subjects: ["Business Environment", "Elective Specialization 4", "Elective Specialization 5", "Project Work / Viva Voce"] }
    ]
};

const defaultSpecs = ['HR', 'Marketing', 'Finance', 'International Business'];
defaultSpecs.forEach(specName => {
    let spec = mbaProg.specializations.find(s => s.name === specName);
    if (!spec) {
        spec = { name: specName, details: "Expertise in " + specName + " principles and management." };
        mbaProg.specializations.push(spec);
    }
    Object.assign(spec, richMBAData);
});

const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
console.log("Uttaranchal UI Data Enriched successfully!");
