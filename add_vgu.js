import fs from 'fs';

const dataStr = fs.readFileSync('src/data/universities.js', 'utf8');

const vguData = {
  id: "vgu-online",
  name: "Vivekanand Global University (VGU Online)",
  logo: "https://ui-avatars.com/api/?name=VGU&background=ea580c&color=fff&size=150",
  location: "Rajasthan Jaipur",
  type: "State Private University",
  level: ["UG", "PG"],
  budget: 130000,
  specializations: [
    "BBA", "BA", "BCA", "MA", "MBA", "MCA", "M.sc"
  ],
  accreditation: "NAAC A+, NIRF 101 Above, UGC, DEB, AICTE, AIU, BCI",
  fees: "Semester, Annual & Full course fee",
  placement: "Industry Mentor | Virtual Placement Drives | AI Powered Profile Builder | Placement Assistance and 500+ Hiring Partners",
  eligibility: "12th / Graduation as per course",
  ranking: "NIRF 101 Above",
  exams: "Merit Based",
  extendedDetails: {
    usps: [
      "Established in 2012 (Legacy)",
      "Personalized learning",
      "Real world Projects",
      "Startup Support",
      "Industry Certifications",
      "Corporate Internships",
      "Gain industry-recognized certifications from EXIN Netherlands, AWS and Redhat, enhancing your skills."
    ],
    payment: "Application = ₹1000 | Examination fees = ₹1500/semester | Loans: Fibe, greyquest, Propelled, finz (No cost EMI 24 months). 2.5% Processing Fees. No Advance EMI. Annual & Full = 12 Months Tenure",
    examination: "70:30 (30% Continuous Assessment, 70% Proctored Exam) | Passing: 40%",
    leadLocking: "Auto Lock on LSQ | LSQ = VGU",
    programs: [
      {
        group: "UG",
        name: "BBA",
        duration: "36 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "General", price: "Check Plan", details: "Core business management and administration." },
          { name: "Digital Marketing", price: "Check Plan", details: "Social media marketing and search optimization." },
          { name: "Retail Management", price: "Check Plan", details: "Store operations, consumer behavior and retail strategy." },
          { name: "Fintech", price: "Check Plan", details: "Financial technology, blockchain basics and digital payments." }
        ]
      },
      {
        group: "UG",
        name: "BA",
        duration: "36 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "Economics", price: "Check Plan", details: "Macro, micro economics and public finance." },
          { name: "History", price: "Check Plan", details: "Global history, ancient civilizations and modern changes." },
          { name: "English", price: "Check Plan", details: "Literature, linguistics and creative writing." },
          { name: "Computer Applications", price: "Check Plan", details: "Basics of IT, software tools and programming." },
          { name: "Public Policy & Development", price: "Check Plan", details: "Governance, public administration and social development." },
          { name: "International Relation", price: "Check Plan", details: "Global politics, diplomacy and international institutions." },
          { name: "Political Science", price: "Check Plan", details: "Political theories, constitutions and statecraft." }
        ]
      },
      {
        group: "UG",
        name: "BCA",
        duration: "36 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "AI", price: "Check Plan", details: "Artificial intelligence principles and programming." },
          { name: "Data Science", price: "Check Plan", details: "Data analysis, statistics and visualization." },
          { name: "Cloud Technology & Information Security", price: "Check Plan", details: "Cloud architecture, deployment and cyber defense." },
          { name: "Block Chain Technology", price: "Check Plan", details: "Distributed ledgers, smart contracts and crypto tech." },
          { name: "UX", price: "Check Plan", details: "User experience design, wireframing and prototyping." }
        ]
      },
      {
        group: "PG",
        name: "MA",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "English", price: "Check Plan", details: "Advanced literature critique and linguistics." }
        ]
      },
      {
        group: "PG",
        name: "MBA",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "Human Resources", price: "Check Plan", details: "Talent acquisition, retention and labor laws." },
          { name: "Information Technology", price: "Check Plan", details: "IT management, enterprise systems and digital transformation." },
          { name: "Healthcare Management", price: "Check Plan", details: "Hospital administration, clinical operations and health policy." },
          { name: "International Business", price: "Check Plan", details: "Global trade, supply chain and cross-border management." },
          { name: "Marketing", price: "Check Plan", details: "Market research, brand management and consumer behavior." },
          { name: "Finance", price: "Check Plan", details: "Corporate finance, investment analysis and risk management." },
          { name: "Agri Business", price: "Check Plan", details: "Agricultural economics, supply chain and rural marketing." },
          { name: "Operation Management", price: "Check Plan", details: "Production, logistics, supply chain and quality control." }
        ]
      },
      {
        group: "PG",
        name: "MCA",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "AI", price: "Check Plan", details: "Advanced AI models, neural networks and machine learning." },
          { name: "Cloud Security & Information Technology", price: "Check Plan", details: "Secure cloud deployment, IAM and threat mitigation." }
        ]
      },
      {
        group: "PG",
        name: "M.sc",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "Mathematics", price: "Check Plan", details: "Advanced algebraic concepts, calculus and applied mathematics." }
        ]
      }
    ]
  },
  url: "https://onlinevgu.com/"
};

let jsonString = JSON.stringify(vguData, null, 2);
let outputStr = dataStr.replace(/}\n\];/, '},\n  ' + jsonString.split('\\n').join('\\n  ') + '\n];');
fs.writeFileSync('src/data/universities.js', outputStr);
console.log("VGU Added Successfully");
