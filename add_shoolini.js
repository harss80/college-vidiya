import fs from 'fs';

const dataStr = fs.readFileSync('src/data/universities.js', 'utf8');

const shooliniData = {
  id: "shoolini-online",
  name: "Shoolini University (Online)",
  logo: "https://ui-avatars.com/api/?name=SU&background=ea580c&color=fff&size=150",
  location: "Solan, Himachal Pradesh",
  type: "State Private University",
  level: ["UG", "PG"],
  budget: 160000,
  specializations: [
    "BBA", "BCA", "BCOM", "Premium MBA & MBA", "MCA"
  ],
  accreditation: "NAAC A+, NIRF Rank 69, QS Diamond Ranked",
  fees: "Semester, Annual & Full fee",
  placement: "SPRINT (Skill Progression through rapid and intensive and innovative training)",
  eligibility: "12th / Graduation as per course",
  ranking: "NIRF Rank 69",
  exams: "Merit Based",
  extendedDetails: {
    usps: [
      "Established in 2009 (Legacy)",
      "QS I-gauge Diamond Rated University",
      "QS World University Ranking 3rd among the Private Universities of India",
      "2+2 Study Abroad program (Alternative to WES evaluation)",
      "Live interaction with the faculty during sessions, live chat, and discussion forums",
      "Ranked among Top 200 global universities by THE University Impact Rankings (2023)",
      "Successful tie-ups with 190+ universities all across the globe",
      "Dual Specialization in MBA",
      "Premium MBA USPs: Campus Immersion, KPMG Certification Access, Coursera Access, 3 Interview Opportunities",
      "Academic Deliverables: Self-Learning Material, Live Lectures, Quizzes, Games, Discussion Forums, Recorded Podcasts"
    ],
    payment: "Registration fee = ₹500 | Semester, Annual & Full fee payments accepted | Loan Partners: Fibe, Propelld, Jodo",
    examination: "70:30 (30% Assignment, 70% Proctored Exam) | Passing: 40%",
    leadLocking: "Auto Lock on LSQ | LSQ = SCDOE",
    programs: [
      {
        group: "UG",
        name: "BBA",
        duration: "36 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "Marketing", price: "Check Plan", details: "Brand tracking and market behaviors." },
          { name: "Finance", price: "Check Plan", details: "Risk and investment management." },
          { name: "HR", price: "Check Plan", details: "Talent acquisition and workforce dynamics." },
          { name: "Digital Marketing", price: "Check Plan", details: "Online scaling and SEO metrics." },
          { name: "Computer Science", price: "Check Plan", details: "Tech integrations in enterprise logic." },
          { name: "Direct Selling", price: "Check Plan", details: "B2C selling techniques and pipeline building." }
        ]
      },
      {
        group: "UG",
        name: "BCA",
        duration: "36 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "Machine Learning", price: "Check Plan", details: "Model training and deep learning models." },
          { name: "Cyber Security Data Science", price: "Check Plan", details: "Cryptography, cyber defense and data analytics." }
        ]
      },
      {
        group: "UG",
        name: "BCOM",
        duration: "36 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "Accounting, Finance, and Taxation", price: "Check Plan", details: "Core commerce, compliance, and wealth creation." }
        ]
      },
      {
        group: "PG",
        name: "Premium MBA & MBA",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "Marketing Management", price: "Check Plan", details: "Consumer behavior and global business scale." },
          { name: "Human Resource Management", price: "Check Plan", details: "Organizational structure and compliance standards." },
          { name: "Financial Management", price: "Check Plan", details: "Corporate finance modeling." },
          { name: "Digital Marketing", price: "Check Plan", details: "Digital campaign strategies." },
          { name: "Retail", price: "Check Plan", details: "Supply networks in consumer goods." },
          { name: "Operations Management", price: "Check Plan", details: "Logistics tracking and scaling pipelines." },
          { name: "Banking & Insurance", price: "Check Plan", details: "Financial sector ecosystems." },
          { name: "LSCM", price: "Check Plan", details: "Logistics and Supply Chain robust metrics." },
          { name: "Tourism Management", price: "Check Plan", details: "Hospitality and global travel coordination." },
          { name: "Real Estate", price: "Check Plan", details: "Asset valuation and property developments." },
          { name: "Direct Selling", price: "Check Plan", details: "Sales tactics and B2C frameworks." },
          { name: "Data Science & Business Analytics", price: "Check Plan", details: "KPI mining and data interpretation." },
          { name: "Agri Business", price: "Check Plan", details: "Agricultural macro-economics." },
          { name: "IT", price: "Check Plan", details: "Technology planning in corporation level." },
          { name: "Pharma & Health Care", price: "Check Plan", details: "Clinical oversight and hospital finance." },
          { name: "Biotechnology Management", price: "Check Plan", details: "Scaling biotech enterprise structures." }
        ]
      },
      {
        group: "PG",
        name: "MCA",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "AI & ML", price: "Check Plan", details: "Deep frameworks in computational linguistics and intelligence." },
          { name: "Data Science", price: "Check Plan", details: "Stat theory mapped with database models." }
        ]
      }
    ]
  },
  url: "https://online.shooliniuniversity.com/"
};

let jsonString = JSON.stringify(shooliniData, null, 2);
let outputStr = dataStr.replace(/}\n\];/, '},\n  ' + jsonString.split('\\n').join('\\n  ') + '\n];');
fs.writeFileSync('src/data/universities.js', outputStr);
console.log("Shoolini Added Successfully");
