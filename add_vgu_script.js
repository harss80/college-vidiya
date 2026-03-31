import fs from 'fs';

const vguObject = {
  "id": "vgu-online",
  "name": "Vivekanand Global University (VGU Online)",
  "logo": "https://ui-avatars.com/api/?name=VGU&background=8b5cf6&color=fff&size=150",
  "location": "Jaipur, Rajasthan",
  "type": "Private University",
  "level": ["UG", "PG"],
  "budget": 150000,
  "specializations": ["MBA", "MCA", "BBA", "BCA", "MA", "MSc", "BA"],
  "accreditation": "NAAC A+, UGC-Entitled, AICTE Approved",
  "fees": "Semester / Annual Options",
  "placement": "360° Career Support | Embedded Industry Projects",
  "eligibility": "10+2 / Graduation (50%)",
  "ranking": "NAAC A+ Accredited University",
  "exams": "Merit Based",
  "url": "https://onlinevgu.com/",
  "extendedDetails": {
    "usps": [
      "NAAC A+ Accredited strictly ensuring the highest tier of academic compliance",
      "UGC-Entitled 360° Career Support with integrated industry projects",
      "Stunning 15% upfront fee concession actively available on One-Time Payments",
      "Dual focus on high-demand tech and management paths like Gen-AI & Agri-Business",
      "Extremely affordable entry barriers with ₹ 1,500/sem Exam Fees"
    ],
    "payment": "High-value concessions: 10% Off on Annual Pay | 15% Off on One-Time Full Pay. Exam Fee: ₹1,500/sem.",
    "examination": "70:30 Evaluation | VGU ERP Proctored Portal.",
    "leadLocking": "Auto Lock on VGU Portal",
    "programs": [
      {
        "group": "PG",
        "name": "MBA",
        "duration": "24 Months (2 Years)",
        "priceRange": "₹ 1,50,000",
        "eligibility": "3-Year Bachelor's Degree From A Recognized University/Institution.",
        "about": "Ranked as North India's Best Management Programme by Times B-School. This 2-Year PG program includes a massive 20-credit industry project explicitly aligned with executive leadership strategies.",
        "careerScope": "Target high-density management funnels ranging from Agri-Business optimization to global Corporate Finance and IT Project Strategy.",
        "paymentDetails": "<b>🔥 Top Ranked PG Program!</b><br/><br/>• <b>Total Program Fee:</b> <b>₹ 1,50,000</b><br/>• <b>Semester Fee:</b> <b>₹ 37,500</b><br/><br/><i>Exam Fee: ₹ 1,500/semester</i><br/><i>Special 15% Concession on One-Time Payment reducing costs explicitly to ₹ 1,27,500!</i>",
        "certifications": "Embedded 360° Career Support tracking and advanced industry capstone certification.",
        "usps": [
          "Ranked North India's Best Management Programme",
          "Specialized tracks explicitly covering niche domains like Agri-Business",
          "Direct 15% Financial concession dropping total fees heavily",
          "Custom 20-Credit industry alignment project mandatory for graduation"
        ],
        "specializations": [
          {
            "name": "Marketing Management",
            "jobRoles": ["Brand Manager", "Digital Marketing Strategist", "Media Planner"],
            "price": "₹ 1,50,000",
            "details": "Brand positioning, high-impact digital strategy natively paired with ROI optimization."
          },
          {
            "name": "Human Resource Management",
            "jobRoles": ["HR Business Partner", "Talent Acquisition Manager", "L&D Manager"],
            "price": "₹ 1,50,000",
            "details": "Talent pipelines, employee relations workflows, and corporate L&D strategy."
          },
          {
            "name": "Financial Management",
            "jobRoles": ["Investment Analyst", "Credit Risk Manager", "Portfolio Manager"],
            "price": "₹ 1,50,000",
            "details": "Corporate wealth scaling, portfolio tracking, and high-frequency risk modeling."
          },
          {
            "name": "Operations Management",
            "jobRoles": ["Logistics Manager", "Supply Chain Consultant", "Inventory Manager"],
            "price": "₹ 1,50,000",
            "details": "Lean operational theory, massive-scale logistics mapping, and agile SC management."
          },
          {
            "name": "Information Technology Management",
            "jobRoles": ["IT Project Manager", "ERP Consultant", "Tech Strategy Consultant"],
            "price": "₹ 1,50,000",
            "details": "Software infrastructure planning, enterprise server logic, and structured tech oversight."
          },
          {
            "name": "Healthcare Management",
            "jobRoles": ["Hospital Administrator", "Quality Assurance Manager", "Health Services Coordinator"],
            "price": "₹ 1,50,000",
            "details": "Clinical pathway optimizations natively tied with regional Hospital expansion networks."
          },
          {
            "name": "Agri Business",
            "jobRoles": ["Agri Marketing Specialist", "Farm Manager", "Rural Banker"],
            "price": "₹ 1,50,000",
            "details": "Nuances of rural financing, agricultural supply chains, and large-scale farming logistics."
          },
          {
            "name": "International Business",
            "jobRoles": ["International Trade Consultant", "Export Manager", "Global Strategy Analyst"],
            "price": "₹ 1,50,000",
            "details": "Global policy navigation explicitly mapping cross-border trade and multinational strategies."
          }
        ]
      },
      {
        "group": "PG",
        "name": "MCA",
        "duration": "24 Months (2 Years)",
        "priceRange": "₹ 1,50,000",
        "eligibility": "Graduation with Mathematics at 10+2 level or at Graduation level.",
        "about": "A premier Master of Computer Applications designed strictly leveraging deep-tech pipelines including applied AI, Data Science models, and scalable Cloud architecture.",
        "careerScope": "Positions graduates seamlessly as Software Engineers, Enterprise Cloud Architects, and Data Scientists within high-growth technical sectors.",
        "paymentDetails": "<b>🔥 Top Ranked IT Master's!</b><br/><br/>• <b>Total Program Fee:</b> <b>₹ 1,50,000</b><br/>• <b>Semester Fee:</b> <b>₹ 37,500</b><br/><br/><i>Exam Fee: ₹ 1,500/semester</i><br/><i>Special 15% Concession on One-Time Pay available natively inside the portal!</i>",
        "certifications": "VGU Cloud Architecture and Development compliance certification included.",
        "usps": [
          "Curriculum sharply focused on functional AI and Deep Tech paradigms",
          "Explicitly UGC-Entitled and AICTE Approved",
          "Massive 15% upfront discount options for tech students",
          "Advanced coding and algorithm structuring natively embedded in the core"
        ],
        "specializations": [
          {
            "name": "Computer Applications (General)",
            "jobRoles": ["Software Developer", "Cloud Architect", "Data Engineer"],
            "price": "₹ 1,50,000",
            "details": "Comprehensive software lifecycle tracking targeting maximum corporate employability."
          }
        ]
      },
      {
        "group": "PG",
        "name": "MA English",
        "duration": "24 Months (2 Years)",
        "priceRange": "₹ 72,000",
        "eligibility": "Any Bachelor's Degree from a recognized University.",
        "about": "An extensively detailed Master of Arts parsing complex English literary histories, communicative linguistics, and global cultural discourse.",
        "careerScope": "Ideal for Academic tracking, advanced Corporate Communication leadership, and Publishing.",
        "paymentDetails": "<b>🔥 High-Value Arts Master's!</b><br/><br/>• <b>Total Program Fee:</b> <b>₹ 72,000</b><br/>• <b>Semester Fee:</b> <b>₹ 18,000</b><br/><br/><i>Exam Fee: ₹ 1,500/semester</i><br/><i>Extremely affordable pathways available actively.</i>",
        "certifications": "N/A",
        "usps": [
          "Extremely affordable Master's level program",
          "Deep dive explicitly into cross-cultural communication",
          "UGC-Entitled ensuring public sector eligibility"
        ],
        "specializations": [
          {
            "name": "English",
            "jobRoles": ["Content Strategist", "Lecturer", "Corporate Communications Head"],
            "price": "₹ 72,000",
            "details": "Strict focus spanning literature timelines and syntax architecture."
          }
        ]
      },
      {
        "group": "PG",
        "name": "MSc Maths",
        "duration": "24 Months (2 Years)",
        "priceRange": "₹ 72,000",
        "eligibility": "B.A / B.Sc. / B.E. / B.Tech. with Mathematics as a core subject.",
        "about": "Advanced mathematical modeling strictly exploring pure and applied mathematics, data cryptography, and statistical predictability.",
        "careerScope": "Direct gateway explicitly into roles as Quantitative Analysts, Cryptographers, and Statistical Researchers.",
        "paymentDetails": "<b>🔥 Advanced Science Track!</b><br/><br/>• <b>Total Program Fee:</b> <b>₹ 72,000</b><br/>• <b>Semester Fee:</b> <b>₹ 18,000</b><br/><br/><i>Exam Fee: ₹ 1,500/semester</i><br/><i>Flexible 10% Annual concessions available actively.</i>",
        "certifications": "N/A",
        "usps": [
          "Extensive focus on modern statistical software pipelines",
          "Highly accessible pricing for advanced sciences",
          "Full Career Support enabling direct corporate analytics integration"
        ],
        "specializations": [
          {
            "name": "Mathematics",
            "jobRoles": ["Quantitative Analyst", "Data Scientist", "Mathematician"],
            "price": "₹ 72,000",
            "details": "Mathematical arrays, calculus limits, and corporate statistical probability."
          }
        ]
      },
      {
        "group": "UG",
        "name": "BBA",
        "duration": "36 Months (3 Years)",
        "priceRange": "₹ 1,32,000",
        "eligibility": "10+2 from a recognized educational board.",
        "about": "A transformative framework establishing baseline corporate readiness targeting finance, retail, and tech-driven models like Digital Marketing explicitly.",
        "careerScope": "Foundational stepping stone natively targeting entry-to-mid level roles in corporate sales, digital marketing architecture, and modern retail funnels.",
        "paymentDetails": "<b>🔥 UGC-Entitled Business Track!</b><br/><br/>• <b>Total Program Fee:</b> <b>₹ 1,32,000</b><br/>• <b>Semester Fee:</b> <b>₹ 22,000</b><br/><br/><i>Exam Fee: ₹ 1,500/semester</i><br/><i>Special 15% upfront concessions actively dropping price to ₹ 1,12,200!</i>",
        "certifications": "Foundational VGU Management Framework completion tag.",
        "usps": [
          "Massive tech-aligned specializations actively including FinTech",
          "UGC Entitled actively validating national employability",
          "15% Discount on total upfront payments natively reducing friction",
          "Smooth entry loops completely devoid of rigid entrance exams"
        ],
        "specializations": [
          {
            "name": "General Management",
            "jobRoles": ["Business Executive", "Sales Associate", "Management Trainee"],
            "price": "₹ 1,32,000",
            "details": "Standardized tracking of holistic corporate organizational structures."
          },
          {
            "name": "Retail Management",
            "jobRoles": ["Retail Operations Lead", "Store Manager", "Merchandising Junior"],
            "price": "₹ 1,32,000",
            "details": "Modern D2C and massive brick-and-mortar lifecycle pipelines."
          },
          {
            "name": "Digital Marketing",
            "jobRoles": ["SEO Executive", "PPC Coordinator", "Content Marketer"],
            "price": "₹ 1,32,000",
            "details": "Core mapping explicitly covering SEM, programmatic ads, and lead scaling."
          },
          {
            "name": "FinTech",
            "jobRoles": ["Fintech Operations Associate", "Digital Banking Assistant"],
            "price": "₹ 1,32,000",
            "details": "Digital ecosystems natively tracking cryptocurrency logic and mobile banking limits."
          }
        ]
      },
      {
        "group": "UG",
        "name": "BCA",
        "duration": "36 Months (3 Years)",
        "priceRange": "₹ 1,32,000",
        "eligibility": "10+2 from a recognized educational board.",
        "about": "An extensively modernized Bachelor's explicitly incorporating high-tier software scripting, foundational logic arrays, and core computing networks.",
        "careerScope": "Ideal pathway targeting foundational software deployment, basic AI implementations, and systems networking support.",
        "paymentDetails": "<b>🔥 Top Tech Base Track!</b><br/><br/>• <b>Total Program Fee:</b> <b>₹ 1,32,000</b><br/>• <b>Semester Fee:</b> <b>₹ 22,000</b><br/><br/><i>Exam Fee: ₹ 1,500/semester</i><br/><i>Special 15% upfront concessions dropping total cost to ₹ 1,12,200!</i>",
        "certifications": "N/A",
        "usps": [
          "Unique 'Artificial Intelligence' specialization offered at the UG tier",
          "UGC-Entitled ensuring complete global academic mobility",
          "NAAC A+ grade guaranteeing rigorous lab simulation standards",
          "Extensive 360 Career Support embedding technical graduates actively"
        ],
        "specializations": [
          {
            "name": "General Computer Applications",
            "jobRoles": ["Junior Software Developer", "Network Admin", "Tech Support Specialist"],
            "price": "₹ 1,32,000",
            "details": "Core programming workflows covering C++, Java, and baseline web architecture."
          },
          {
            "name": "Artificial Intelligence",
            "jobRoles": ["AI Implementer", "Data Processing Junior", "ML Training Assistant"],
            "price": "₹ 1,32,000",
            "details": "Introductions natively mapping AI tool utilization and neural logic trees."
          }
        ]
      },
      {
        "group": "UG",
        "name": "BA",
        "duration": "36 Months (3 Years)",
        "priceRange": "₹ 72,000",
        "eligibility": "10+2 from a recognized educational board.",
        "about": "A multi-disciplinary Bachelor of Arts establishing extensive academic grounding across critical humanities, political theory, and economic planning.",
        "careerScope": "Targeting roles heavily within Public Sector applications, Journalism, Economic advisory, and widespread educational tracking.",
        "paymentDetails": "<b>🔥 Supreme Accessibility!</b><br/><br/>• <b>Total Program Fee:</b> <b>₹ 72,000</b><br/>• <b>Semester Fee:</b> <b>₹ 12,000</b><br/><br/><i>Exam Fee: ₹ 1,500/semester</i><br/><i>Highest accessibility model via manageable 12k/sem milestones.</i>",
        "certifications": "N/A",
        "usps": [
          "Massive array of 7 distinct specializations targeting highly niche fields",
          "Unbeatable fee structure pinned remarkably at just ₹ 12,000/sem",
          "UGC-Entitled securing UPSC/Government job eligibility natively",
          "High flexibility ensuring active concurrent employment scaling"
        ],
        "specializations": [
          {
            "name": "Economics",
            "jobRoles": ["Economic Researcher", "Financial Writer", "Data Coordinator"],
            "price": "₹ 72,000",
            "details": "Macro and micro planning explicitly tied to global inflation and trade dynamics."
          },
          {
            "name": "Political Science",
            "jobRoles": ["Political Analyst", "Policy Coordinator", "Public Relations Executive"],
            "price": "₹ 72,000",
            "details": "Governance structures intricately mapping global treaties and civic frameworks."
          },
          {
            "name": "Development Studies",
            "jobRoles": ["NGO Coordinator", "Social Development Officer", "Urban Planner Junior"],
            "price": "₹ 72,000",
            "details": "Socio-economic modeling exploring sustainable expansion logic."
          },
          {
            "name": "International Relations",
            "jobRoles": ["Diplomatic Attaché Junior", "Global Risk Analyst Junior"],
            "price": "₹ 72,000",
            "details": "Cross-border negotiation theory explicitly studying multinational alliances."
          },
          {
            "name": "English",
            "jobRoles": ["Copywriter", "Content Editor", "Proofreader"],
            "price": "₹ 72,000",
            "details": "Structural syntax reviews heavily prioritizing linguistic mastery."
          },
          {
            "name": "History",
            "jobRoles": ["Archivist Junior", "Academic Researcher", "Museum Associate"],
            "price": "₹ 72,000",
            "details": "Timeline chronologies extensively mapping civilization growth vectors."
          },
          {
            "name": "Computer Applications",
            "jobRoles": ["Tech Writer", "Digital Documentation Exec", "IT Ops Junior"],
            "price": "₹ 72,000",
            "details": "Hybrid tracking utilizing core tech loops within humanities structures."
          }
        ]
      }
    ]
  }
};

const path = 'd:/collegevidiyaguide/src/data/universities.js';
let content = fs.readFileSync(path, 'utf8');

// The file exports `export const universities = [...]`
// We need to inject vguObject into the array right before the end.

const endBracketIndex = content.lastIndexOf(']');
if (endBracketIndex > -1) {
    const part1 = content.substring(0, endBracketIndex).trimEnd();
    
    // Check if the last element before ] has a comma
    let connector = part1.endsWith(',') ? '' : ',';
    
    // if the last char is '}', it means it's an object without a trailing comma
    if (part1.endsWith('}')) {
      connector = ',\\n  ';
    }

    const newContent = part1 + connector + JSON.stringify(vguObject, null, 2) + '\\n];\\n';
    
    fs.writeFileSync(path, newContent);
    console.log("Success: Added VGU Online to universities mapped with exact links and full details!");
} else {
    console.log("Error finding the end of array.");
}
