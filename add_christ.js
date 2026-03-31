import fs from 'fs';

const dataStr = fs.readFileSync('src/data/universities.js', 'utf8');

const christData = {
  id: "christ-online",
  name: "Christ University (Online)",
  logo: "https://ui-avatars.com/api/?name=CU&background=ea580c&color=fff&size=150",
  location: "Bangalore, Karnataka",
  type: "Deemed to be University",
  level: ["UG", "PG"],
  budget: 200000,
  specializations: [
    "B.Com", "BCA", "MA", "M.Sc", "MCA"
  ],
  accreditation: "NAAC A+, NIRF 63, AICTE, QS World, WURI, SES REC",
  fees: "Annual & Full course fee",
  placement: "Live Interactive Sessions | Recorded Podcasts | Career & Life Skills Training",
  eligibility: "12th / Graduation as per course",
  ranking: "NIRF 63",
  exams: "Merit Based (Interview required)",
  extendedDetails: {
    usps: [
      "Established in 1969 (Legacy)",
      "Global Alumni Community",
      "Industry-Recognized Certificates Through Coursera",
      "Incubation & Consultancy Support for Startups",
      "Co-Publishing Opportunities with CHRIST Faculty",
      "Access to One of India's Best Libraries and On-Campus Research Labs",
      "Industry Connect and Fire Chats & Masterclasses with International Faculty",
      "Training for Career & Life Skills",
      "Class Timings: Fri (6-8:15 PM) | Sat (6-7:30 AM, 6-8:15 PM) | Sun (9 AM-12:15 PM)"
    ],
    payment: "Application = ₹1500+GST | Admission = ₹5000 | Exam fee = ₹3000/yr | Loans: GrayQuest (3m: 2.25%, 6m: 3.99%, 9m: 5.95%, 12m: 8.05%)",
    examination: "70:30 (30% Assessment, 70% Proctored) | Passing: 40%",
    leadLocking: "Auto Lock on LSQ | LSQ = Christ",
    programs: [
      {
        group: "UG",
        name: "B.Com",
        duration: "36 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "General", price: "Check Plan", details: "Core commerce and accounting principles." }
        ]
      },
      {
        group: "UG",
        name: "BCA",
        duration: "36 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "General", price: "Check Plan", details: "Computer applications and programming fundamentals." }
        ]
      },
      {
        group: "PG",
        name: "MA",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "English with Communication Studies", price: "Check Plan", details: "Linguistics, media and communication structures." },
          { name: "Applied Economics", price: "Check Plan", details: "Macro-economics and global institutional operations." }
        ]
      },
      {
        group: "PG",
        name: "M.Sc",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "Artificial Intelligence and Machine Learning", price: "Check Plan", details: "Advanced neural networks and deep learning paradigms." },
          { name: "Data Science", price: "Check Plan", details: "Statistics, big data models and analytics." }
        ]
      },
      {
        group: "PG",
        name: "MCA",
        duration: "24 Months",
        priceRange: "Check Plan",
        specializations: [
          { name: "General", price: "Check Plan", details: "Master of computer applications with core IT tools." }
        ]
      }
    ]
  },
  url: "https://online.christuniversity.in/"
};

let jsonString = JSON.stringify(christData, null, 2);
let outputStr = dataStr.replace(/}\n\];/, '},\n  ' + jsonString.split('\\n').join('\\n  ') + '\n];');
fs.writeFileSync('src/data/universities.js', outputStr);
console.log("Christ University Added Successfully");
