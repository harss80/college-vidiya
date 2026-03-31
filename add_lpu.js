import fs from 'fs';

const dataStr = fs.readFileSync('src/data/universities.js', 'utf8');

const lpuData = {
    id: "lpu-online",
    name: "Lovely Professional University (LPU Online)",
    logo: "https://ui-avatars.com/api/?name=LPU&background=ea580c&color=fff&size=150",
    location: "Jalandhar, Phagwara",
    type: "Private University",
    level: [
      "UG",
      "PG",
      "Diploma"
    ],
    budget: 150000,
    specializations: [
      "BCA", "BBA", "BA", "MBA", "MCA", "M.Com", "MA", "DBA", "DCA", "MSc."
    ],
    accreditation: "NAAC A++, NIRF 31st, ACBSP (USA), WES",
    fees: "Semester & Full course fee options",
    placement: "Career Planning | Resume Building | Mock Interview | Job Search Support",
    eligibility: "12th / Graduation as per course",
    ranking: "NIRF 31st",
    exams: "Merit Based",
    extendedDetails: {
      usps: [
        "Established in 2005 (Legacy)",
        "Member of Association of Commonwealth Universities (UK)",
        "International Association of Universities (France)",
        "Accreditation Council for Business Schools and Programs (ACBSP), USA",
        "MBA Dual Specialization",
        "Easy access to study resources through Mobile App (LPU Online)",
        "Opportunity to participate in university events - Cultural, Sports, Extracurricular",
        "Opportunities of Research, Entrepreneurship and start ups",
        "20% Student Grant (Refer the Website)",
        "Interview 3 attempt, if not qualified in 3 attempts, called for PEP (Free of cost, 3-5 days)",
        "Academic Deliverables: DSC, DSE, GE, SEC parameters included",
        "MCA provides Bridge Course for non-IT background students",
        "Downloadable Study Material"
      ],
      payment: "Registration = ₹600 | Loan Partners = Avanse (No cost EMI) on full fee",
      examination: "70:30 (30% Continuous Assessment, 70% Proctored Exam) | Duration: 2 Hours | Passing: 40% | ETE/Reappear: June & December | 3 Slots available, 1 paper per day",
      leadLocking: "Auto Lock on LSQ | LSQ = LPU",
      programs: [
        {
          group: "UG",
          name: "BCA",
          duration: "36 Months",
          priceRange: "Check Plan",
          specializations: [
             { name: "General", price: "Check Plan", details: "Core computer applications and programming fundamentals." }
          ]
        },
        {
          group: "UG",
          name: "BBA",
          duration: "36 Months",
          priceRange: "Check Plan",
          specializations: [
             { name: "General", price: "Check Plan", details: "Business administration core principles." }
          ]
        },
        {
          group: "UG",
          name: "BA",
          duration: "36 Months",
          priceRange: "Check Plan",
          specializations: [
             { name: "General", price: "Check Plan", details: "Comprehensive arts education." }
          ]
        },
        {
          group: "Diploma",
          name: "DBA",
          duration: "Flexible",
          priceRange: "Check Plan",
          specializations: [
             { name: "Diploma in business Administration", price: "Check Plan", details: "Foundational administration skills." }
          ]
        },
        {
          group: "Diploma",
          name: "DCA",
          duration: "Flexible",
          priceRange: "Check Plan",
          specializations: [
             { name: "Diploma in computer Applications", price: "Check Plan", details: "Basic computer skills and IT introductory overview." }
          ]
        },
        {
          group: "PG",
          name: "MBA",
          duration: "24 Months",
          priceRange: "Check Plan",
          specializations: [
             { name: "Finance", price: "Check Plan", details: "Financial management, accounting, and investments." },
             { name: "Marketing", price: "Check Plan", details: "Market research, digital strategies, and consumer behaviors." },
             { name: "Human Resource", price: "Check Plan", details: "Workforce planning and organizational culture." },
             { name: "Data Science", price: "Check Plan", details: "Analytical models and business intelligence pipelines." },
             { name: "Digital Marketing", price: "Check Plan", details: "Digital outreach and campaign optimizations." },
             { name: "Business Analytics", price: "Check Plan", details: "Metrics, KPI tracking, and operational efficiency." },
             { name: "International Business", price: "Check Plan", details: "Global trade and cross-border management." },
             { name: "Information Technology", price: "Check Plan", details: "Enterprise system planning and IT ecosystems." },
             { name: "Operations Management", price: "Check Plan", details: "Supply chain efficiency and lean processes." },
             { name: "Hospital & Healthcare Management", price: "Check Plan", details: "Clinical operations and facility administration." },
             { name: "Banking & Finance Services", price: "Check Plan", details: "Retail banking and risk management." },
             { name: "Logistics & Supply Chain Management", price: "Check Plan", details: "Distribution networks and procurement." }
          ]
        },
        {
          group: "PG",
          name: "MCA",
          duration: "24 Months",
          priceRange: "Check Plan",
          specializations: [
             { name: "AI & ML", price: "Check Plan", details: "Machine learning architectures and artificial intelligence." },
             { name: "Data Science", price: "Check Plan", details: "Advanced data mining and deep statistics." },
             { name: "Cyber Security", price: "Check Plan", details: "Cryptography, networks, and ethical hacking." },
             { name: "AR & VR Game Development", price: "Check Plan", details: "Immersive environments and interactive gaming." },
             { name: "Full Stack Web Development", price: "Check Plan", details: "Frontend and backend robust structures." }
          ]
        },
        {
          group: "PG",
          name: "M.Com",
          duration: "24 Months",
          priceRange: "Check Plan",
          specializations: [
             { name: "General", price: "Check Plan", details: "Advanced accounting concepts and taxation frameworks." }
          ]
        },
        {
          group: "PG",
          name: "MA",
          duration: "24 Months",
          priceRange: "Check Plan",
          specializations: [
             { name: "English", price: "Check Plan", details: "Literature and advanced linguistic structures." },
             { name: "Pol Science", price: "Check Plan", details: "Global governance models and contemporary politics." },
             { name: "History", price: "Check Plan", details: "Global historical narratives and societal shifts." },
             { name: "Sociology", price: "Check Plan", details: "Societal behaviors and institutional analysis." }
          ]
        },
        {
          group: "PG",
          name: "MSc.",
          duration: "24 Months",
          priceRange: "Check Plan",
          specializations: [
             { name: "Mathematics", price: "Check Plan", details: "Advanced quantitative modeling and mathematical theory." },
             { name: "Economics", price: "Check Plan", details: "Econometrics and macro-economic policies." }
          ]
        }
      ]
    },
    url: "https://www.lpuonline.com/"
};

let jsonString = JSON.stringify(lpuData, null, 2);
let outputStr = dataStr.replace(/}\n\];/, '},\n  ' + jsonString.split('\\n').join('\\n  ') + '\n];');
fs.writeFileSync('src/data/universities.js', outputStr);
console.log("LPU Added Successfully");
