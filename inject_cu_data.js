import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let targetIdx = universities.findIndex(u => u.name.toLowerCase().includes('chandigarh') || u.id === 'cu' || u.id === 'cu-online');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeBlock, durationMonths, examFeeYear = 2500, registrationFee = 2000) {
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

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fed7aa; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(220, 38, 38, 0.1); color: #b91c1c; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏆 Standard Institutional Fee Limits (25% Scholarship Applied)
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #fecaca; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(registrationFee)} <span style="font-size:11px; color:#64748b;">(One-Time)</span></td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Examination Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(examFeeYear)} / Year</td>
      </tr>
      ${semline}
      ${annualLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Lumpsum <br/><span style="font-size: 11px; color: #b91c1c;">(Includes base tuition)</span></td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fff1f2; padding: 12px; border-radius: 6px; border-left: 4px solid #ef4444;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #b91c1c;">Bundle & Certification Policies:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Premium Bundles:</b> Optional Dual/Triple certificates (Harvard, PwC, PMI) natively increase base pricing accordingly.</li>
      <li><b>Global Accreditations:</b> CU is explicitly QS World Ranked #1 (Private) guaranteeing unmatched qualification tracking natively.</li>
    </ul>
  </div>
</div>`;
    }

    const cuData = {
        id: "cu",
        name: "Chandigarh University (CU) Online",
        logo: "https://ui-avatars.com/api/?name=Chandigarh+University&background=dc2626&color=fff&size=150",
        location: "Chandigarh, Punjab",
        type: "Private University",
        level: ["UG", "PG"],
        budget: 131250,
        specializations: ["MBA", "MCA", "M.Sc", "MA", "BBA", "BCA", "BA"],
        accreditation: "NAAC A+ | NIRF Top Ranked | QS World Ranking #1 | E-Lead Certified",
        fees: "Semester / Annual / EMI Options",
        placement: "4,000+ Placements | 1,000+ Corporate Hiring Partners",
        eligibility: "UG: 10+2 | PG: Graduation",
        ranking: "QS World #1 (Among Private Indian Universities)",
        exams: "Blended 70:30 Evaluation Model",
        extendedDetails: {
            examination: "30% Continuous Assessment and 70% Proctored Online Exams. Passing Criteria natively maintained actively at 40%.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Chandigarh University stands apart (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. QS World Ranking #1 (Private)</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Explicitly ranked as the #1 Private University natively by QS World Rankings guaranteeing absolute peak corporate recognition.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Premium Harvard ManageMentor Integration</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Direct heavy integration naturally pushing exclusive Harvard tier logic seamlessly directly into specific bundle pipelines.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Complete NAAC A+ Grading Limits</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Secure completely explicitly validated tracking purely through NAAC A+ ensuring strict national government scaling.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #fecaca; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = CU</strong></p>
            </div>`,
            payment: "CU heavily mandates Registration effectively at exactly INR 2,000 continuously. Exam schedules stand fundamentally scaled at precisely INR 2,500/Year (1,250/Semester).",
            programs: [
                {
                    group: "PG", name: "MBA (Dual Specialization)", duration: "24", priceRange: "₹1,65,000 - ₹1,80,400",
                    specializations: [
                        { name: "Finance & Marketing", priceVal: 165000, career: "CFO, Marketing Director", desc: "Dual elective mapping directly building massive commercial capital strategies." },
                        { name: "HRM & Finance", priceVal: 165000, career: "HR Director, Financial Strategist", desc: "Dual logic perfectly covering capital payroll expenditure safely alongside recruitment loops." },
                        { name: "International Business & Marketing", priceVal: 165000, career: "Global Brand Head", desc: "Export-import borders matched explicitly utilizing heavy marketing persuasion arrays." },
                        { name: "Business Analytics & Finance", priceVal: 165000, career: "Data Analyst, DB Exec", desc: "Numbers heavily quantified into robust data server endpoints." },
                        { name: "Operations Management & LSCM", priceVal: 165000, career: "Logistics Head", desc: "Supply limits natively pushed ensuring peak production scale operations strictly." },
                        { name: "IT & Business Analytics", priceVal: 165000, career: "IT Consultant", desc: "Deep enterprise software setups tracked natively perfectly." },
                        { name: "Digital Marketing & HRM", priceVal: 165000, career: "Digital VP, Recruitment Head", desc: "Massive online targeting pipelines tied tightly directly alongside resource scaling." },
                        { name: "Data Science & AI", priceVal: 165000, career: "Machine Learning Trainee", desc: "Dual heavy computing algorithms mapping natively perfectly explicitly." },
                        { name: "Entrepreneurship & FinTech", priceVal: 165000, career: "FinTech Founder, VC Analyst", desc: "VC pitches mapped structurally utilizing blockchain level payment arrays." },
                        { name: "Hospital Management & Operations", priceVal: 165000, career: "Hospital Administrator", desc: "Strict healthcare facility logic tracked smoothly specifically dynamically." },
                        { name: "Banking & Insurance", priceVal: 165000, career: "Bank Manager, Underwriter", desc: "Dual tracking banking liquidity metrics entirely strictly explicitly." },
                        { name: "Triple Certificate Bundle (PwC, PMI & Harvard ManageMentor)", priceVal: 180400, career: "Global Strategy Lead", desc: "Extremely heavy triple premium metrics mapping Harvard tier execution directly natively alongside PwC modeling strictly." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            s.name.includes("Triple") ? "Unique Triple Credential (PwC + PMI + Harvard) strictly integrated directly!" : "Real 100% Dual Specialization explicitly granted securely utilizing native tracks perfectly.",
                            "CU Online QS World Ranking #1 guarantees total global supremacy.",
                            "Direct 25% Early Bird explicitly folded directly into displayed tuition loops."
                        ],
                        duration: "24 Months", eligibility: "Graduation securely mapped cleanly from recognized standard structures.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24", priceRange: "₹1,16,250",
                    specializations: [
                        { name: "Artificial Intelligence & Machine Learning (AI & ML)", priceVal: 116250, career: "AI Developer, ML Engineer", desc: "Transformer models completely integrated tracking generative setups actively." },
                        { name: "Cloud Computing", priceVal: 116250, career: "Cloud Solutions Architect", desc: "Serverless frameworks heavily deployed directly natively efficiently." },
                        { name: "Data Analytics", priceVal: 116250, career: "Data Architect", desc: "Advanced ETL architectures driving exact Tableau data logic cleanly." },
                        { name: "Full Stack Development", priceVal: 116250, career: "Full Stack Engineer", desc: "Complete React + Node frameworks safely driving SPA networks actively." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict ₹1,16,250 limits completely applying 25% Early Bird precisely exactly.",
                            "Secure standard QS #1 validations natively actively completely.",
                            "Proctored networks utilizing 70:30 splits securely."
                        ],
                        duration: "24 Months", eligibility: "BCA or B.Sc CS mapped natively exactly smoothly.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36", priceRange: "₹1,31,250 - ₹1,40,000",
                    specializations: [
                        { name: "Marketing", priceVal: 131250, career: "Marketing Executive", desc: "Digital sales boundaries securely parsing exact behavioral targeting." },
                        { name: "Finance", priceVal: 131250, career: "Accountant Jr.", desc: "Base tax limits smoothly integrating exactly fundamentally accurately." },
                        { name: "Human Resource Management", priceVal: 131250, career: "HR Executive", desc: "Labor tracking exactly scaling internal limits correctly." },
                        { name: "Business Analytics", priceVal: 131250, career: "Data Modeler", desc: "Database modeling arrays tracking SQL securely completely natively." },
                        { name: "Dual Certification Bundle (Integrated with Microsoft & Harvard ManageMentor)", priceVal: 140000, career: "Tech Ops Lead", desc: "Dual premium bounds safely explicitly executing Microsoft deployment logics heavily natively." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            s.name.includes("Harvard") ? "Harvard + Microsoft limits correctly dropping explicitly directly into baseline." : "Classic structured BBA natively mapped heavily validating core competencies.",
                            "Tuition mapped perfectly securely.",
                            "QS #1 Private metrics implicitly inherited."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely verified natively.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "UG", name: "BCA", duration: "36", priceRange: "₹1,32,750 - ₹1,41,600",
                    specializations: [
                        { name: "Software Development", priceVal: 132750, career: "Java Developer", desc: "Core algorithms securely mapped utilizing C++, Python seamlessly natively." },
                        { name: "AI Mastery", priceVal: 132750, career: "Data Ops", desc: "Data parameters mapped reliably structurally." },
                        { name: "Triple Certification Bundle (Integrated with Microsoft, NSDC & Harvard ManageMentor)", priceVal: 141600, career: "Tech Specialist", desc: "Extreme technical validity strictly utilizing NSDC skill integrations parallel to Microsoft logic bounds." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            s.name.includes("NSDC") ? "Massive 3-Way Bundle directly driving Govt NSDC tracking optimally." : "Secure baseline BCA completely dynamically deploying exact core logic.",
                            "Direct 0% financial pipelines cleanly."
                        ],
                        duration: "36 Months", eligibility: "10+2 matching exactly.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "PG", name: "M.Sc", duration: "24", priceRange: "₹75,000 - ₹1,10,001",
                    specializations: [
                        { name: "Data Science", priceVal: 110001, career: "Data Scientist", desc: "Heavy database frameworks dynamically mapped rigorously." },
                        { name: "Mathematics", priceVal: 75000, career: "Quantitative Analyst", desc: "Advanced mathematical limits rigorously strictly verified exactly natively." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict M.Sc limits safely cleanly driving advanced boundaries organically.",
                            "Total passing networks inherently dropping strictly correctly to 40% natively."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's scaling purely through Math natively.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24", priceRange: "₹75,000",
                    specializations: [
                        { name: "English Literature", priceVal: 75000, career: "Editor, Publisher", desc: "Syntax networks securely correctly tracking completely strictly." },
                        { name: "Economics", priceVal: 75000, career: "Macro Analyst", desc: "Heavy mathematical econometric variables effectively purely seamlessly deployed." },
                        { name: "Journalism & Mass Comm", priceVal: 75000, career: "Journalist", desc: "Direct media broadcast arrays correctly purely cleanly safely." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Tuition mapped aggressively dropping to entirely ₹75,000 actively.",
                            "Secure E-Lead networks cleanly natively actively completely."
                        ],
                        duration: "24 Months", eligibility: "Graduation cleanly scaling safely successfully.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36", priceRange: "₹1,31,250",
                    specializations: [
                        { name: "Journalism & Mass Comm", priceVal: 131250, career: "Broadcaster, Content Writer", desc: "Baseline UG broadcasting endpoints safely heavily driven directly dynamically cleanly." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Total direct media pipelines definitively strictly established perfectly natively.",
                            "NAAC A+ tracking guaranteeing 100% compliant evaluations safely."
                        ],
                        duration: "36 Months", eligibility: "10+2 properly tracking completely safely correctly.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                }
            ]
        },
        url: "https://www.onlinecu.in/"
    };

    if (targetIdx > -1) {
        universities.splice(targetIdx, 1);
    }
    
    universities.push(cuData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Chandigarh explicit native specializations mapped structurally replacing broad groupings explicitly!");
}

run().catch(console.error);
