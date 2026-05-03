import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let smuIdx = universities.findIndex(u => u.id === 'smu-online' || u.name.toLowerCase().includes('sikkim'));
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeBlock, durationMonths, registrationFee = 500) {
        let totalFee = typeof totalFeeBlock === 'number' ? totalFeeBlock : parseInt(totalFeeBlock.toString().replace(/[^0-9]/g, '')) || 0;
        let semesters = durationMonths / 6;
        let semFee = totalFee > 0 && semesters > 0 ? Math.round(totalFee / semesters) : null;
        let annualFee = semFee ? semFee * 2 : null;
        
        let semline = semFee ? `<tr style="border-bottom: 1px solid #262626;">
        <td style="padding: 12px 8px; color: #a3a3a3; font-weight: 500;">Per Semester Tuition Fee</td>
        <td style="padding: 12px 8px; color: #f5f5f5; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>` : "";
      
        let annualLine = annualFee ? `<tr style="border-bottom: 1px solid #262626;">
        <td style="padding: 12px 8px; color: #a3a3a3; font-weight: 500;">Annual Tuition Fee</td>
        <td style="padding: 12px 8px; color: #f5f5f5; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', monospace; background: #0a0a0a; border: 1px solid #262626; border-radius: 8px; padding: 16px; color: #d4d4d4;">
  <div style="background: #171717; color: #a3a3a3; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px; border: 1px solid #262626; letter-spacing: 0.5px; text-transform: uppercase;">
    Premium UGC-Entitled Programs
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 0;">
    <thead>
      <tr style="border-bottom: 2px solid #404040; text-align: left; color: #a3a3a3;">
        <th style="padding: 10px 8px; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #262626;">
        <td style="padding: 12px 8px; color: #a3a3a3; font-weight: 500;">Application Fee</td>
        <td style="padding: 12px 8px; color: #f5f5f5; font-weight: 600;">${formatMoney(registrationFee)} <span style="font-size:11px; color:#737373;">(Non-Refundable)</span></td>
      </tr>
      ${semline}
      ${annualLine}
      <tr style="border-bottom: 1px solid #262626; background: #171717;">
        <td style="padding: 12px 8px; color: #a3a3a3; font-weight: 500;">Financing Options</td>
        <td style="padding: 12px 8px; color: #f5f5f5; font-weight: 600;">Zero Cost EMI <span style="font-size:11px; color:#737373;">(Fibe, Propelled, TCPL, Greyquest)</span></td>
      </tr>
      <tr>
        <td style="padding: 12px 8px; color: #a3a3a3; font-weight: 500;">Total Course Fee <br/><span style="font-size: 11px; color: #737373;">(Includes all taxes)</span></td>
        <td style="padding: 12px 8px; color: #ffffff; font-weight: 700; font-size: 16px; letter-spacing: 0.5px;">${formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 12px; font-size: 12px; color: #737373; font-weight: 500; border-top: 1px dashed #262626; padding-top: 12px;">
    <div style="margin-bottom: 4px; color: #a3a3a3;">Discounts Available:</div>
    <ul style="margin: 0; padding-left: 20px;">
      <li>10% flat discount on full upfront fee payment.</li>
      <li>5% flat discount on annual fee payment.</li>
      <li>30% scholarship for Sikkim/Northeast residents, Defense personnel, differently-abled, & Alumni.</li>
    </ul>
  </div>
</div>`;
    }

    const smuData = {
        id: "smu-online",
        name: "Sikkim Manipal University (SMU) Online",
        logo: "https://ui-avatars.com/api/?name=SMU&background=000&color=fff&size=150",
        location: "Gangtok, Sikkim",
        type: "State Private University",
        level: ["UG", "PG"],
        budget: 120000,
        specializations: ["MBA (Dual)", "MCA", "MCom", "MA", "BBA", "BCom", "BA"],
        accreditation: "NAAC A+ Grade, Ranked #1 in IIRF (North East Private)",
        fees: "10% Concession on Full Payment / 5% on Annual",
        placement: "Placement Drives, Resume Building, Interview Prep (6 Months Post Course)",
        eligibility: "12th / Graduation as per course",
        ranking: "30+ Years Legacy | ASSOCHAM Certificate of Excellence",
        exams: "Online Proctored Exams (Computer Based)",
        extendedDetails: {
            examination: "70:30 Pattern | 30% Continuous Assessment, 70% Proctored Exam. Passing Criteria = Minimum 40%.",
            leadLocking: `<div style="font-family: 'Inter', monospace;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #f5f5f5; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #262626; padding-bottom: 8px;">SMU Online Metrics:</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #262626;">
              <summary style="font-weight: 600; color: #a3a3a3; cursor: pointer; font-size: 14px;">1. Top Ranked NAAC A+ University</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #737373; line-height: 1.6; padding-left: 2px;">Your degree comes from an A+ graded institution heavily ranked No.1 in IIRF for Private Universities in the Northeast India region.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #262626;">
              <summary style="font-weight: 600; color: #a3a3a3; cursor: pointer; font-size: 14px;">2. Award-Winning Excellence (ASSOCHAM)</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #737373; line-height: 1.6; padding-left: 2px;">Sikkim Manipal securely holds the prestigious Certificate of Excellence directly from ASSOCHAM Edu tech guarantees pure corporate legacy.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #262626;">
              <summary style="font-weight: 600; color: #a3a3a3; cursor: pointer; font-size: 14px;">3. Direct Fee Concessions & Scholarships</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #737373; line-height: 1.6; padding-left: 2px;">Enjoy 10% flat discount on full fee payments natively. Extra 30% mapped organically for Northeast candidates + Defense/Divyang scholarships exactly.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #262626;">
              <summary style="font-weight: 600; color: #a3a3a3; cursor: pointer; font-size: 14px;">4. Exceptional Career & Placement Setup</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #737373; line-height: 1.6; padding-left: 2px;">Provides virtual placement drives, interview prep, and employability skill assessment seamlessly lasting completely for the next 6 months fully after completion.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #737373; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#ffffff; background: #262626; padding: 3px 8px; border-radius: 4px; font-family: monospace; letter-spacing: 1px;">LSQ = SMU</strong></p>
            </div>`,
            payment: "Registration is strictly mapped to exactly INR 500 cleanly. Block logic natively scales across secure payment links dynamically.",
            programs: [
                {
                    group: "PG", name: "MBA (Dual Specialization)", duration: "24", priceRange: "₹1,20,000",
                    specializations: [
                        { name: "Marketing", career: "Marketing Director" },
                        { name: "Finance", career: "Financial Analyst" },
                        { name: "HR", career: "HR Director" },
                        { name: "Systems", career: "System Administrator" },
                        { name: "Operations & Supply Chain Management", career: "Operations Manager" },
                        { name: "Healthcare", career: "Healthcare Administrator" }
                    ].map(s => ({
                        name: s.name, price: formatMoney(120000), careerPath: s.career, syllabus: "Duration: 2 years. Eligibility: Bachelor’s degree with 50% (45% for reserved).",
                        usps: [
                            "UGC-entitled dual specialization MBA.",
                            "110+ hours of professional education courses worth INR 50K included.",
                            "10% off on full upfront payment."
                        ],
                        duration: "24 Months", eligibility: "Graduation (50%)", paymentDetails: generateTable(120000, 24),
                        brochure: null // User did not upload MBA brochure yet
                    }))
                },
                {
                    group: "PG", name: "MCA (Online)", duration: "24", priceRange: "₹1,10,000",
                    specializations: [
                        { name: "Data Warehousing and Data Mining", career: "Data Architect" },
                        { name: "Cloud Computing", career: "Cloud Solutions Engineer" },
                        { name: "Machine Learning", career: "Machine Learning Engineer" },
                        { name: "Distributed System and Grid Computing", career: "Grid Operator" }
                    ].map(s => ({
                        name: s.name, price: formatMoney(110000), careerPath: s.career, syllabus: "Duration: 2 years. Eligibility: Bachelor’s degree in IT/CS or equivalent.",
                        usps: [
                            "Cutting-edge IT specializations.",
                            "Access to virtual simulation and rigorous practical execution.",
                            "10% off on full upfront payment."
                        ],
                        duration: "24 Months", eligibility: "Graduation in relevant field", paymentDetails: generateTable(110000, 24),
                        brochure: null // User did not upload MCA brochure yet
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24", priceRange: "₹75,000",
                    specializations: [
                        { name: "English", career: "Communications Specialist", pdf: "/brochures/SMU-MA-English-Domestic-Brochure.pdf" },
                        { name: "Political Science", career: "Policy Analyst", pdf: "/brochures/SMU-MA-Political-Science-Domestic-Brochure.pdf" },
                        { name: "Sociology", career: "Sociologist", pdf: "/brochures/SMU-MA-Sociology-Domestic-Brochure.pdf" }
                    ].map(s => ({
                        name: s.name, price: formatMoney(75000), careerPath: s.career, syllabus: "Duration: 2 years. Eligibility: Bachelor’s degree.",
                        usps: [
                            "Advanced academic curriculum designed by experts.",
                            "10% off on full upfront payment.",
                            "30% special scholarships available."
                        ],
                        duration: "24 Months", eligibility: "Graduation", paymentDetails: generateTable(75000, 24),
                        brochure: s.pdf
                    }))
                },
                {
                    group: "PG", name: "MCom", duration: "24", priceRange: "₹75,000",
                    specializations: [
                        { name: "General MCom", career: "Senior Accountant", pdf: "/brochures/SMU-MCOM-Domestic-Brochure.pdf" }
                    ].map(s => ({
                        name: s.name, price: formatMoney(75000), careerPath: s.career, syllabus: "Duration: 2 years. Eligibility: Bachelor’s degree.",
                        usps: [
                            "Comprehensive coverage of global finance and trade.",
                            "10% off on full upfront payment."
                        ],
                        duration: "24 Months", eligibility: "Graduation", paymentDetails: generateTable(75000, 24),
                        brochure: s.pdf
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36", priceRange: "₹90,000",
                    specializations: [
                        { name: "General BBA", career: "Management Trainee", pdf: null }
                    ].map(s => ({
                        name: s.name, price: formatMoney(90000), careerPath: s.career, syllabus: "Duration: 3 years. Eligibility: 10+2.",
                        usps: [
                            "Strong foundation in business management.",
                            "10% off on full upfront payment."
                        ],
                        duration: "36 Months", eligibility: "10+2", paymentDetails: generateTable(90000, 36),
                        brochure: s.pdf
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36", priceRange: "₹75,000",
                    specializations: [
                        { name: "General BA", career: "General Communications", pdf: "/brochures/SMU-BA-Domestic-Brochure.pdf" }
                    ].map(s => ({
                        name: s.name, price: formatMoney(75000), careerPath: s.career, syllabus: "Duration: 3 years. Eligibility: 10+2.",
                        usps: [
                            "Interdisciplinary humanities approach.",
                            "10% off on full upfront payment."
                        ],
                        duration: "36 Months", eligibility: "10+2", paymentDetails: generateTable(75000, 36),
                        brochure: s.pdf
                    }))
                },
                {
                    group: "UG", name: "BCom", duration: "36", priceRange: "₹75,000",
                    specializations: [
                        { name: "General BCom", career: "Accounting Associate", pdf: "/brochures/SMU-BCOM-Domestic-Brochure.pdf" }
                    ].map(s => ({
                        name: s.name, price: formatMoney(75000), careerPath: s.career, syllabus: "Duration: 3 years. Eligibility: 10+2.",
                        usps: [
                            "Extensive training in accounting and commerce.",
                            "10% off on full upfront payment."
                        ],
                        duration: "36 Months", eligibility: "10+2", paymentDetails: generateTable(75000, 36),
                        brochure: s.pdf
                    }))
                }
            ]
        },
        url: "https://www.onlinemanipal.com/institution/sikkim-manipal-university"
    };

    if (smuIdx > -1) {
        universities.splice(smuIdx, 1);
    }
    
    universities.push(smuData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("SMU data modernized and exact official fees injected successfully!");
}

run().catch(console.error);
