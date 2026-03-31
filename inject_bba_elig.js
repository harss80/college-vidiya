import fs from 'fs';

let txt = fs.readFileSync('src/data/universities.js', 'utf8');

// The best way to inject eligibility into everything is simply finding
// "about": "The Master of ...
// and inserting "eligibility": "...", right before or after it.
// Actually, I can just parse the file as a string or use Regex.
// MBA eligibility: "Graduation (min 50%) from a recognized university."
// MCA eligibility: "BCA/B.Sc. (Computer Science/IT) with 50% marks."
// BA/BBA/BCA eligibility: "10+2 Pass candidates from a recognised board are eligible to enroll..."

// Wait, the safest thing is to find them and replace.

// 1. Let's do BBA
const bbaFinance = `"name": "Finance",
              "jobRoles": ["Chief Financial Officer (CFO)", "Investment Banker", "Financial Risk Manager", "Corporate Treasurer"],
              "price": "As per plan",
              "details": "Financial management and modern accounting practices."`;

const bbaHR = `"name": "HR",
              "jobRoles": ["HR Director", "Talent Acquisition Lead", "Compensation & Benefits Manager", "Employee Relations Specialist"],
              "price": "As per plan",
              "details": "Human resource strategies and organizational behavior."`;

const bbaMarketing = `"name": "Marketing",
              "jobRoles": ["Brand Manager", "Chief Marketing Officer (CMO)", "Digital Marketing Director", "Market Research Analyst"],
              "price": "As per plan",
              "details": "Digital outreach, consumer behavior, and brand management."`;

const bbaCommon = `"price": "₹1,02,000 (Total) / ₹17,000 (Sem)",
              "duration": "36 Months (8-10 hrs/week)",
              "eligibility": "10+2 Pass candidates from a recognised board are eligible to enroll.",
              "about": "The Bachelor of Business Administration (BBA) at Uttaranchal University is a UGC-Entitled online degree. The intensive BBA curriculum hones your skills in business including finance, marketing, and human resources.",
              "careerScope": "Management occupations are projected to grow 8 percent faster than average. This program prepares you for dynamic leadership roles in top corporates.",
              "paymentDetails": "<b>🔥 15% Early Bird Scholarship Applied!</b><br/><br/>• <b>Semester Fee:</b> <strike>₹20,000</strike> <b>₹17,000</b><br/>• <b>Annual Fee:</b> <strike>₹38,000</strike> <b>₹32,000</b><br/>• <b>One-Time Full Fee:</b> <strike>₹1,14,000</strike> <b>₹96,000</b><br/><br/><i>Exam Fee: ₹2,500/semester</i><br/><i>No-Cost EMI starting at ₹2,693* (Credit/Debit/UPI available)</i>",
              "usps": [
                "1-on-1 Personalized Mentorship assigning a dedicated mentor per student",
                "Prodigious faculty teaching a world-class intensive curriculum",
                "Specially curated Industry Immersion & real-life scenario training",
                "Complete Job Assistance targeting placement in reputed conglomerates",
                "Integrated LMS with a 24x7 huge e-library catalog"
              ]`;

txt = txt.replace(bbaFinance, `"name": "Finance",
              "jobRoles": ["Chief Financial Officer (CFO)", "Investment Banker", "Financial Risk Manager", "Corporate Treasurer"],
              "details": "Financial management and modern accounting practices.",
              ${bbaCommon}`);

txt = txt.replace(bbaHR, `"name": "HR",
              "jobRoles": ["HR Director", "Talent Acquisition Lead", "Compensation & Benefits Manager", "Employee Relations Specialist"],
              "details": "Human resource strategies and organizational behavior.",
              ${bbaCommon}`);

txt = txt.replace(bbaMarketing, `"name": "Marketing",
              "jobRoles": ["Brand Manager", "Chief Marketing Officer (CMO)", "Digital Marketing Director", "Market Research Analyst"],
              "details": "Digital outreach, consumer behavior, and brand management.",
              ${bbaCommon}`);

// Update BBA priceRange
txt = txt.replace(/"name": "BBA",\s*"duration": "36 Months",\s*"priceRange": "As per plan"/g, 
`"name": "BBA",\n          "duration": "36 Months",\n          "priceRange": "₹1,02,000 (Total)"`);

// Now let's inject eligibility into the others!
// MBA eligibility
txt = txt.replace(/"about": "The Master of Business Administration/g, 
`"eligibility": "Graduates (min 50% / 45% for reserved) from a recognized university.",\n              "about": "The Master of Business Administration`);

// MCA eligibility
txt = txt.replace(/"about": "The Master of Computer Applications/g, 
`"eligibility": "BCA/B.Sc. (Computer Science/IT) with 50% marks (45% for reserved) from a recognized university. General graduates with Math at 10+2 / Graduation level also eligible.",\n              "about": "The Master of Computer Applications`);

// BCA eligibility
txt = txt.replace(/"about": "The Bachelor of Computer Applications/g, 
`"eligibility": "10+2 Pass candidates from a recognised board are eligible to enroll.",\n              "about": "The Bachelor of Computer Applications`);

// BA eligibility
txt = txt.replace(/"about": "The Bachelor of Arts/g, 
`"eligibility": "10+2 Pass candidates from a recognised board are eligible to enroll.",\n              "about": "The Bachelor of Arts`);


fs.writeFileSync('src/data/universities.js', txt);
console.log("Updated BBA and all Eligibility Requirements successfully!");
