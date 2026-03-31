import fs from 'fs';
import { universities } from './src/data/universities.js';

const targetUniIndex = universities.findIndex(u => u.id === 'uttaranchal-online');
if (targetUniIndex === -1) throw new Error("UU not found");

const targetUni = universities[targetUniIndex];

if (!targetUni.extendedDetails) {
    targetUni.extendedDetails = { programs: [] };
} else if (!targetUni.extendedDetails.programs) {
    targetUni.extendedDetails.programs = [];
}

let mcaProg = targetUni.extendedDetails.programs.find(p => p.name === 'MCA');
if (!mcaProg) {
    mcaProg = {
        group: "PG",
        name: "MCA",
        duration: "24 Months",
        priceRange: "₹92k - ₹96k",
        specializations: []
    };
    targetUni.extendedDetails.programs.push(mcaProg);
}

const richMCAData = {
    price: "₹96,000 (Total) / ₹24,000 (Sem)",
    duration: "24 Months (8-10 hrs/week)",
    about: "The Master of Computer Applications (MCA) at Uttaranchal University is a UGC-Entitled online degree. It features an intensive curriculum focusing on software creation, algorithm design, and core computational systems designed specifically for the technologically-driven world.",
    careerScope: "The Indian IT industry is seeing explosive growth with over 4.5+ Lakh jobs actively being added to reach $227 billion revenue (NASSCOM). Top roles include Software Engineer, Cloud Architect, Systems Analyst, and Database Architect.",
    usps: [
        "1-on-1 Personalized Mentorship assigning a dedicated mentor per student",
        "Prodigious faculty teaching a world-class intensive curriculum",
        "Specially curated Industry Immersion & real-life scenario training",
        "Complete Job Assistance targeting placement in reputed conglomerates",
        "Integrated LMS with a 24x7 huge e-library catalog"
    ],
    paymentDetails: "<b>🔥 20% Early Bird Scholarship Applied!</b><br/><br/>• <b>Semester Fee:</b> <strike>₹30,000</strike> <b>₹24,000</b><br/>• <b>Annual Fee:</b> <strike>₹58,000</strike> <b>₹46,000</b><br/>• <b>One-Time Full Fee:</b> <strike>₹1,16,000</strike> <b>₹92,000</b><br/><br/><i>Exam Fee: ₹2,500/semester</i><br/><i>No-Cost EMI starting at ₹3,872* (Credit/Debit/UPI available)</i>",
    certifications: "You will gain embedded certifications mapped directly to your electives through their skill-enhancing corporate curriculum.",
    syllabus: [
        { semester: "Semester 1", subjects: ["Fundamental of Computers and IT", "Programming in C", "Mathematical Foundation of Computer Science", "Operating System", "Data Communication and Networks"] },
        { semester: "Semester 2", subjects: ["Data Structure using C", "Database Management Systems", "Object Oriented Programming using C++", "Software Engineering", "Web Technologies"] },
        { semester: "Semester 3", subjects: ["Java Programming", "Computer Graphics", "Artificial Intelligence", "Elective I", "Elective II"] },
        { semester: "Semester 4", subjects: ["Major Project", "Seminar", "Comprehensive Viva Voce"] }
    ]
};

const defaultSpecs = ['General', 'Data Analytics', 'Artificial Intelligence', 'Cyber Security'];
defaultSpecs.forEach(specName => {
    let spec = mcaProg.specializations.find(s => s.name === specName);
    if (!spec) {
        spec = { name: specName, details: "Expertise in " + specName + " applications." };
        mcaProg.specializations.push(spec);
    }
    Object.assign(spec, richMCAData);
});

// Since we are adding MCA correctly, we also need to ensure 'MCA' is actually present in 'targetUni.specializations'
if (!targetUni.specializations.includes('MCA')) {
    targetUni.specializations.push('MCA');
}

const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
console.log("Uttaranchal UI MCA Data Enriched successfully!");
