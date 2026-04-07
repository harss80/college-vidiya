import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let targetIdx = universities.findIndex(u => u.id === 'muj-online' || u.name.toLowerCase().includes("manipal university jaipur"));
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeBlock, durationMonths, scholarshipNote = "") {
        let totalFee = typeof totalFeeBlock === 'number' ? totalFeeBlock : parseInt(totalFeeBlock.toString().replace(/[^0-9]/g, '')) || 0;
        let semesters = durationMonths / 6;
        let semFee = totalFee > 0 && semesters > 0 ? Math.round(totalFee / semesters) : null;
        let annualFee = semFee ? semFee * 2 : null;
        
        let semline = semFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Tuition Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>` : "";
      
        let annualLine = annualFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Annual Tuition Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>` : "";
        
        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #ea580c; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(234, 88, 12, 0.1); color: #c2410c; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏅 NAAC A+ Official MUJ Fee Structure
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #fdba74; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹500 <span style="font-size:11px; color:#64748b;">(Required, Do not register student by collecting 500)</span></td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Blocking Amount</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹5,000 <span style="font-size:11px; color:#64748b;">(Mandatory block should be between 5000)</span></td>
      </tr>
      ${semline}
      ${annualLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Lumpsum <br/><span style="font-size: 11px; color: #ea580c;">(Base tuition)</span></td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${typeof totalFeeBlock === 'string' ? totalFeeBlock : formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fff7ed; padding: 12px; border-radius: 6px; border-left: 4px solid #f97316;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #9a3412;">Zero Cost EMI & Scholarship Info:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Loan Partners:</b> Zero-cost EMI via <b>FIBE, Propelled, Greyquest, and TCPL</b>. No cost EMI only on HDFC Debit Cards (or Credit Cards with No Cost EMI if loan rejects).</li>
      <li><b>Scholarships:</b> Attractive concessions for Divyang, Disabled, Govt employee, Merit (above 80%).</li>
      <li><b>Discounts:</b> Weekday coupons (Tue, Thu, Sat) for sem fees. Direct 10% discount on overall fees / 5% on annual without coupon.</li>
      <li><b>PG Special Rule:</b> PG 0 cost EMI available on Sem/Annual. If PG student wants 0 cost EMI on Full fee then discount will not applicable. UG no cost EMI on full fee.</li>
      <li><b>Counselor Options:</b> Student gets 2 options: pay fee or complete app. Suggest complete app first! Counselor can generate semester weekends coupon from LSQ itself.</li>
      ${scholarshipNote ? `<li><b>Additional:</b> ${scholarshipNote}</li>` : ""}
    </ul>
  </div>
</div>`;
    }

    const programs = [
        {
            group: "PG", name: "MBA (Dual Specialization)", duration: "24", priceRange: "₹1,80,000",
            specializations: [
                { name: "Finance", priceVal: 180000, career: "Financial Analyst", desc: "Corporate financial strategy" },
                { name: "Marketing", priceVal: 180000, career: "Marketing Executive", desc: "Digital and traditional marketing" },
                { name: "HR", priceVal: 180000, career: "HR Director", desc: "Talent acquisition and management" },
                { name: "Analytics & Data Science", priceVal: 180000, career: "Data Analyst", desc: "Data-driven decision making" },
                { name: "IT & Fin tech", priceVal: 180000, career: "IT Consultant", desc: "Technology in finance" },
                { name: "OM", priceVal: 180000, career: "Operations Lead", desc: "Operations Management" },
                { name: "IB", priceVal: 180000, career: "International Business Exec", desc: "International Business strategies" },
                { name: "Information System & Mgmt.", priceVal: 180000, career: "System Manager", desc: "IT infrastructure management" },
                { name: "Project Mgmt.", priceVal: 180000, career: "Project Manager", desc: "Agile and traditional PM frameworks" },
                { name: "SCM", priceVal: 180000, career: "Supply Chain Manager", desc: "Supply Chain Management optimization" },
                { name: "Digital Marketing", priceVal: 180000, career: "Digital Marketing Manager", desc: "SEO, SEM and content strategy" },
                { name: "BFSI", priceVal: 180000, career: "Bank Manager", desc: "Banking, Financial Services and Insurance" },
                { name: "Retail Management", priceVal: 180000, career: "Retail Manager", desc: "Consumer retail behavior" }
            ].map(s => ({
                name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                usps: [
                    "Free access to paid Coursera content (PG Courses)",
                    "Student can give 3 examinations in one day (first come first serve slots).",
                    "Global Networking and access to Alumni"
                ],
                duration: "24 Months", eligibility: "Graduation", paymentDetails: generateTable(s.priceVal, 24, "")
            }))
        },
        {
            group: "UG", name: "BBA", duration: "36", priceRange: "₹1,39,500",
            specializations: [
                { name: "HR", priceVal: 139500, career: "HR Executive", desc: "Organizational behavior" },
                { name: "Marketing", priceVal: 139500, career: "Marketing Assoc", desc: "Brand management" },
                { name: "Finance & Accounting", priceVal: 139500, career: "Accountant Jr.", desc: "Bookkeeping and finance" },
                { name: "Entrepreneurship Management & Family Business", priceVal: 139500, career: "Entrepreneur", desc: "Startup frameworks" },
                { name: "Data Analytics", priceVal: 139500, career: "Data Analyst", desc: "Business intelligence" },
                { name: "Retail & E -commerce", priceVal: 139500, career: "Retail Manager", desc: "E-commerce strategy" },
                { name: "Digital Marketing", priceVal: 139500, career: "Digital Marketing Exec", desc: "Online advertising" }
            ].map(s => ({
                name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                usps: [
                    "Real world case studies directly embedded.",
                    "Free access to paid Coursera content (UG Courses)."
                ],
                duration: "36 Months", eligibility: "10+2", paymentDetails: generateTable(s.priceVal, 36, "")
            }))
        },
        {
            group: "UG", name: "BCA", duration: "36", priceRange: "₹1,39,500",
            specializations: [
                { name: "Data Science & Analytics", priceVal: 139500, career: "Data Analyst", desc: "Python, R and ML basics" },
                { name: "Cyber Security", priceVal: 139500, career: "Cyber Analyst", desc: "Network defense" },
                { name: "Cloud Computing", priceVal: 139500, career: "Cloud Engineer", desc: "AWS and Azure" }
            ].map(s => ({
                name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                usps: [
                    "Free access to paid Coursera content.",
                    "Real world case studies."
                ],
                duration: "36 Months", eligibility: "10+2", paymentDetails: generateTable(s.priceVal, 36, "")
            }))
        },
        {
            group: "UG", name: "BCOM", duration: "36", priceRange: "₹99,000",
            specializations: [
                { name: "Banking & FinTech", priceVal: 99000, career: "FinTech Assoc", desc: "Modern banking tech" },
                { name: "Accounting with AI", priceVal: 99000, career: "Accountant", desc: "Automated ledgers" },
                { name: "Business Analytics", priceVal: 99000, career: "Business Analyst", desc: "Data models" },
                { name: "E-Commerce", priceVal: 99000, career: "E-comm Specialist", desc: "Dropshipping and online retail" },
                { name: "Business Accounting & Taxation", priceVal: 99000, career: "Tax Consultant", desc: "GST and Income tax" },
                { name: "Economics", priceVal: 99000, career: "Economist", desc: "Macro and Micro" },
                { name: "Financial Analytics", priceVal: 99000, career: "Finance Exec", desc: "Risk modeling" },
                { name: "Digital Marketing with AI", priceVal: 99000, career: "Marketing Special", desc: "Generative AI in marketing" }
            ].map(s => ({
                name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                usps: [
                    "Free access to paid Coursera content.",
                    "Discounts and scholarships available."
                ],
                duration: "36 Months", eligibility: "10+2", paymentDetails: generateTable(s.priceVal, 36, "")
            }))
        },
        {
            group: "PG", name: "MCA", duration: "24", priceRange: "₹1,58,000",
            specializations: [
                { name: "AI & Data Science", priceVal: 158000, career: "Data Scientist", desc: "Predictive Analytics" },
                { name: "Cloud Computing", priceVal: 158000, career: "Cloud Architect", desc: "Scalable infrastructures" },
                { name: "Cyber Security", priceVal: 158000, career: "Network Security Engineer", desc: "Cryptography" },
                { name: "AI & ML", priceVal: 158000, career: "ML Engineer", desc: "Deep learning models" },
                { name: "Comprehensive emerging technologies", priceVal: 158000, career: "Tech Leader", desc: "IoT and Blockchain" }
            ].map(s => ({
                name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                usps: [
                    "MCA = Microsoft certification included.",
                    "Free access to paid Coursera content (PG Courses)."
                ],
                duration: "24 Months", eligibility: "Graduation", paymentDetails: generateTable(s.priceVal, 24, "")
            }))
        },
        {
            group: "PG", name: "MCOM", duration: "24", priceRange: "₹1,08,000",
            specializations: [
                { name: "General", priceVal: 108000, career: "Accountant", desc: "Advanced corporate finance" }
            ].map(s => ({
                name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                usps: [
                    "Free access to paid Coursera content."
                ],
                duration: "24 Months", eligibility: "Graduation", paymentDetails: generateTable(s.priceVal, 24, "")
            }))
        },
        {
            group: "PG", name: "MSc", duration: "24", priceRange: "₹80,000",
            specializations: [
                { name: "Mathematics", priceVal: 80000, career: "Statistician", desc: "Pure and applied math" }
            ].map(s => ({
                name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                usps: [
                    "Free access to paid Coursera content."
                ],
                duration: "24 Months", eligibility: "Graduation with Maths", paymentDetails: generateTable(s.priceVal, 24, "")
            }))
        },
        {
            group: "PG", name: "MA", duration: "24", priceRange: "₹80,000",
            specializations: [
                { name: "JMC", priceVal: 80000, career: "Journalist", desc: "Mass Communication" },
                { name: "Economics", priceVal: 80000, career: "Economist", desc: "Macro-economic policies" }
            ].map(s => ({
                name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                usps: [
                    "Free access to paid Coursera content."
                ],
                duration: "24 Months", eligibility: "Graduation", paymentDetails: generateTable(s.priceVal, 24, "")
            }))
        }
    ];

    const targetData = {
        id: "muj-online",
        name: "Manipal University Jaipur Online (MUJ)",
        logo: "https://ui-avatars.com/api/?name=MUJ&background=ea580c&color=fff&size=150",
        location: "Jaipur",
        type: "State Private University",
        level: ["UG", "PG"],
        budget: 175000,
        specializations: ["MBA (Dual Specialization)", "MCA", "MCOM", "MA", "BBA", "BCA", "BCOM", "MSc"],
        accreditation: "NAAC A+, NIRF 58th, WES, AICTE Approved (Legacy: 2011)",
        fees: "Zero Cost EMI via FIBE/Propelled/Greyquest/TCPL / Semester Options",
        placement: "Strong Alumni Network | Skill Enhancement | Virtual placement drives",
        eligibility: "UG: 10+2 | PG: Graduation",
        ranking: "NIRF 58th",
        exams: "70% Proctored | 30% Continuous Assessment | Passing Criteria = 40%",
        extendedDetails: {
            examination: "Pattern is 70:30 (30% Continuous Assessment, 70% Proctored Exam) | Passing Criteria = 40% | Student can give 3 examinations in one day (slots prioritized on first come first serve).",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Manipal University Jaipur stands apart (Unique USPs):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Global Networking & Coursera Access</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Global Networking and access to Alumni. Plus, absolutely free access to paid Coursera content for both PG & UG courses.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Real World Frameworks & Certifications</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Real world case studies included natively. MCA program exclusively features Microsoft Certification directly built in.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Career & Placement Services</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Skill Enhancement & Assessment, Industry readiness sessions, Virtual placement drives, Interview preparations, and dedicated Alumni interaction during & after program.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Massive Financial & Discount Support</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Attractive Scholarship (Divyang, Disabled, Govt employee, Merit (above 80%)). Direct 10% overall fee discounts, robust No-Cost EMI via HDFC Debit / FIBE / Propelled.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #ea580c; color: white; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = MUJ</strong></p>
            </div>`,
            payment: "Registration = ₹500 | Blocking Amount = ₹5000. Loan Partners = FIBE, Propelled, Greyquest, TCPL. Options: Semester, Annual & Full course Fee.",
            programs: programs
        },
        url: "https://www.onlinemanipal.com/"
    };

    if (targetIdx > -1) {
        universities.splice(targetIdx, 1);
    }
    
    universities.push(targetData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("MUJ data successfully injected based on correct payload & exact requirements!");
}

run().catch(console.error);
