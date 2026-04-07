import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let targetIdx = universities.findIndex(u => u.name.toLowerCase().includes('jain') || u.id === 'jain');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeBlock, durationMonths) {
        let totalFee = typeof totalFeeBlock === 'number' ? totalFeeBlock : parseInt(totalFeeBlock.toString().replace(/[^0-9]/g, '')) || 0;
        let semesters = durationMonths / 6;
        let semFee = totalFee > 0 && semesters > 0 ? Math.round(totalFee / semesters) : null;
        let annualFee = semFee ? semFee * 2 : null;
        
        let semline = semFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Course Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>` : "";
      
        let annualLine = annualFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Annual Fee (Yearly)</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fed7aa; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(234, 88, 12, 0.1); color: #c2410c; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏆 Standard Institutional Fee Limits
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #ffedd5; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹2,500 <span style="font-size:11px; color:#64748b;">(One-Time)</span></td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Examination Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹3,000 / Year</td>
      </tr>
      ${semline}
      ${annualLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Core Tuition Lumpsum</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fffbeb; padding: 12px; border-radius: 6px; border-left: 4px solid #f97316;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #c2410c;">EMI & ACCA/CPA Policies:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Zero Cost EMI:</b> Official Loan Partners Propelld & Liquiloans provide Zero Cost EMI natively.</li>
      <li><b>Global Accreditations:</b> ACCA / CPA integration fees strictly payable directly to the international body (UK/US) atop baseline tuition blocks organically.</li>
    </ul>
  </div>
</div>`;
    }

    const jainData = {
        id: "jain",
        name: "JAIN (Deemed-to-be University) Online",
        logo: "https://ui-avatars.com/api/?name=JAIN&background=ea580c&color=fff&size=150",
        location: "Bangalore, Karnataka",
        type: "Deemed to be University",
        level: ["UG", "PG"],
        budget: 160000,
        specializations: ["MBA", "MCA", "BBA", "BCA", "B.Com", "M.Com", "MA"],
        accreditation: "NAAC A++ | NIRF Rank 62 | UGC | AICTE | KSURF 5-star",
        fees: "Semester / Annual / Zero Cost EMI Options Built",
        placement: "360° Placement Assistance | 20k+ LinkedIn Learning",
        eligibility: "UG: 10+2 | PG: Graduation",
        ranking: "Elite Tier NAAC A++ | Standardized UI Flow",
        exams: "Blended 70:30 Evaluation Model",
        extendedDetails: {
            examination: "30% Continuous Assessment and 70% Proctored Online Exams. Passing Criteria securely maintained at exactly 40%.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why JAIN University stands apart (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Absolute NAAC A++ Grading</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Secures explicit NAAC A++ grading directly guaranteeing unmatched global corporate and educational verification networks.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. 20,000+ LinkedIn Learning Courses</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Total free access aggressively mapping explicit skill gap validations natively inside your course architecture.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Direct Global Collaborations</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Massive International integration securely providing mapping with AICPA, ACCA, CMA, and IoA globally seamlessly.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Connect to Careers (Foundit)</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Integrated virtual e-hire portal (Foundit) securely providing 360 degree placement networks organically tracking you.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. AICTE & UGC-Entitled Limits</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Double validation scaling Govt job eligibilities mapping specifically ensuring public sector scaling.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #ffedd5; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = JU</strong></p>
            </div>`,
            payment: "JAIN explicitly tracks all admission limits mapping Registration natively at INR 2,500. Exam matrices strictly stand at INR 3,000 / Year (1,500 per Semester) mapping 70:30 parameters.",
            programs: [
                {
                    group: "PG", name: "MBA", duration: "24", priceRange: "₹1,96,000 - ₹2,08,000",
                    specializations: [
                        { name: "Human Resource Management and Finance (Dual Specialization)", priceVal: 196000, career: "HR Director, Finance Strategy Head", desc: "Dual core tracking heavy workforce cost accounting and HR recruitment budgets." },
                        { name: "Finance and Marketing (Dual Specialization)", priceVal: 196000, career: "CMO, Growth Asset Manager", desc: "Dual force integration tracking capital expenditure heavily against marketing ROI." },
                        { name: "Marketing and Human Resource Management (Dual Specialization)", priceVal: 196000, career: "Brand VP, Talent Acquisition Head", desc: "Deep synergy of corporate brand building internally mapping employee metrics seamlessly." },
                        { name: "Finance and Business Analytics (Dual Specialization)", priceVal: 196000, career: "Quantitative Analyst, FinTech DB Manager", desc: "Financial math mapped specifically into heavy Business Intelligence data loops." },
                        { name: "Project Management", priceVal: 196000, career: "Scrum Master, General Project Head", desc: "Agile pipelines, critical path algorithms, and heavy corporate deployment scaling." },
                        { name: "Information Technology Management", priceVal: 196000, career: "CIO, IT Systems Director", desc: "Massive scale enterprise software ecosystem management natively." },
                        { name: "Supply Chain, Production and Operations Management", priceVal: 196000, career: "Logistics VP, Operations Director", desc: "Enterprise capacity planning and tech-first operational tracking." },
                        { name: "Business Intelligence and Analytics", priceVal: 196000, career: "Tableau Analyst, Python Modeling Assoc", desc: "Deep machine learning deployments mapped directly driving predictive business tracking." },
                        { name: "Entrepreneurship and Venture Creation", priceVal: 196000, career: "Seed Analyst, Start-Up CEO", desc: "VC pitches, legal architectures, and initial scaling matrix parameters explicitly." },
                        { name: "International Finance (Accredited by ACCA, UK)", priceVal: 208000, career: "Global CFO, Ex-Pat Accountant", desc: "Explicit ACCA mapped parameters driving heavy international taxation logics. (ACCA fees external)." },
                        { name: "Data Science and Analytics", priceVal: 196000, career: "Enterprise DB Admin, Data Architect", desc: "Big data logic natively structured exactly across standard Python models cleanly." },
                        { name: "Digital Marketing and E-Commerce", priceVal: 196000, career: "SEM Architect, Performance VP", desc: "Hardcore performance analytics tying directly heavily into online conversion funnels." },
                        { name: "Artificial Intelligence", priceVal: 196000, career: "AI Model Trainee, LLM Integrator", desc: "Strict logic parsing mapping heavy generative networking structures completely." },
                        { name: "Banking and Finance", priceVal: 196000, career: "Treasury Manager, Forex Trader", desc: "Micro banking APIs explicitly structured mapping direct liquidity banking networks strictly." },
                        { name: "Human Resource Management", priceVal: 196000, career: "Workforce Analytics VP, HR Lead", desc: "Strategic recruitment setups and massive talent retention structures natively built." },
                        { name: "Finance", priceVal: 196000, career: "Chief Financial Officer, Portfolio Manager", desc: "Corporate finance mapping, asset tracking natively, and deep investment matrices." },
                        { name: "Marketing", priceVal: 196000, career: "Chief Marketing Officer, Digital Head", desc: "Omni-channel brand deployment strategies and extreme digital persuasion leverage." },
                        { name: "General Management", priceVal: 196000, career: "Business Unit Head, Ops Lead", desc: "Broad spectrum, high-level structural oversight and generalized executive scaling." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Tuition Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            s.name.includes("ACCA") ? "Mapped completely to ACCA UK explicitly. (Body Exemption/Exam fees paid separately directly)." : "Utilizes flat ₹49,000 semester fees universally mapping JIIT-style simplicity.",
                            "Strict NAAC A++ grading purely empowering massive government applications mapping.",
                            "Deployed directly leveraging entirely 0% Cost EMI formats actively."
                        ],
                        duration: "24 Months", eligibility: "Graduation mapping successfully across all baseline disciplines effectively.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36", priceRange: "₹1,50,000",
                    specializations: [
                        { name: "Finance", priceVal: 150000, career: "Financial Analyst Jr.", desc: "Entry corporate finance architectures tracking taxation loops." },
                        { name: "Marketing", priceVal: 150000, career: "Marketing Assoc., Sales Exec.", desc: "Digital tracking natively prioritizing standard persuasion models exactly." },
                        { name: "Digital Marketing", priceVal: 150000, career: "SEO Analyst, Performance Trainee", desc: "Pure hardcore search network logic and Facebook/IG pixel deployments." },
                        { name: "Data Science and Analytics", priceVal: 150000, career: "Data Scientist Jr., Tableau Runner", desc: "SQL queries inherently built mapped with predictive Python basics organically." },
                        { name: "Human Resource Management", priceVal: 150000, career: "HR Executive, Recruitment Consultant", desc: "Hiring cycles and generalized corporate legal labor tracking completely." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Tuition Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict mapped tuition logic exactly ₹25,000/Semester seamlessly deployed.",
                            "Direct Propelld EMI arrays purely pushing exactly Zero Cost metrics.",
                            "Proctored Online Exams explicitly pushing 70:30 parameters actively fully."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely explicitly checked exactly from recognized baseline boards.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24", priceRange: "₹1,60,000",
                    specializations: [
                        { name: "DevOps", priceVal: 160000, career: "Site Reliability Engineer", desc: "CI/CD serverless pipelines prominently pushing micro-services mapping natively." },
                        { name: "Natural Language Processing & Large Language Models Development", priceVal: 160000, career: "AI Engineer, Prompt Specialist", desc: "Transformers mapping exactly creating extensive logic training generative AI." },
                        { name: "Computer Science and IT", priceVal: 160000, career: "Software Engineer", desc: "Advanced enterprise architectures completely building java/python software servers." },
                        { name: "Data Analytics", priceVal: 160000, career: "Data Engineer", desc: "ETL pipelines structurally building massive machine learning loops dynamically." },
                        { name: "Cyber Security", priceVal: 160000, career: "Security Operations Head", desc: "Offensive network hacking frameworks completely mapping massive encryptions." },
                        { name: "Full Stack Development", priceVal: 160000, career: "MERN Native Developer", desc: "React/Node loops securely mapping heavy single-page application metrics." },
                        { name: "Cloud Computing", priceVal: 160000, career: "AWS Architect Jr, Server Admin", desc: "Azure networking pipelines securely verifying virtualization loads actively." },
                        { name: "Data Science", priceVal: 160000, career: "Hadoop Admin, Backend DB Designer", desc: "Deep DB structures mapping explicitly into heavy mathematical matrices naturally." },
                        { name: "Artificial Intelligence", priceVal: 160000, career: "AI Researcher", desc: "Algorithm tuning dynamically driving heavy semantic mapping." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Tuition Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Baseline pricing structurally maintained effectively at ₹40,000/Semester.",
                            "Live tracking natively driven by JAIN's massive elite tech faculty.",
                            "Leverage elite 360 placement architectures naturally linking 20,000+ courses natively."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's scaling successfully strictly mapping IT, BCA, or Math logics natively(50% Min).", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "UG", name: "BCA", duration: "36", priceRange: "₹1,35,000 - ₹1,65,000",
                    specializations: [
                        { name: "Computer Science and IT", priceVal: 135000, career: "Junior Dev, Database Admin", desc: "General software building paths structurally pushing Java, Python, C++." },
                        { name: "Data Science and Analytics", priceVal: 165000, career: "Data Analyst Jr.", desc: "Data networks prioritizing massive Tableau visualizations explicitly." },
                        { name: "Cyber Security", priceVal: 165000, career: "SOC Analyst Jr.", desc: "Network routing logic tracking specifically parsing malicious code." },
                        { name: "Artificial Intelligence", priceVal: 165000, career: "AI Research Assoc.", desc: "Mapping of robust deep learning parameters entirely natively." },
                        { name: "Cloud Computing", priceVal: 165000, career: "Cloud Ops Jr.", desc: "AWS metrics tracking load balances directly perfectly." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Tuition Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            s.name === "Computer Science and IT" ? "Accessible structurally at ₹22,500 / Semester pushing pure computational layers inherently." : "Deep analytical scaling mapped explicitly at ₹27,500 / Semester.",
                            "Top 62 NIRF University arrays completely inherited explicitly.",
                            "Fully integrated LinkedIn tech pathways entirely mapping without extra charge."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely verified matching exactly any standard board frameworks.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "PG", name: "M.Com", duration: "24", priceRange: "₹1,10,000 - ₹2,42,000",
                    specializations: [
                        { name: "Accounting and Finance", priceVal: 110000, career: "Senior Accountant", desc: "Massive scale tracking modern corporate platforms mapping ₹27,500/Sem." },
                        { name: "Professional Accounting and Finance (Integrated with CPA curriculum)", priceVal: 122000, career: "US CPA Aspirant", desc: "Built strictly utilizing the hardcore CPA curriculum exactly matching US structures (₹30,500/Sem). CPA Registration external." },
                        { name: "International Finance (Accredited by ACCA, UK)", priceVal: 242000, career: "Global Controller, Foreign Treasury", desc: "Studying explicitly international tracking hedging globally at ₹60,500/Sem." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Tuition Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            s.name.includes("CPA") || s.name.includes("ACCA") ? "Massive native global integration explicitly pushing foreign qualifications. (Body/Registration fees external natively)." : "Advanced tier commercial tracking perfectly handled natively at lowest PG budgets.",
                            "Corporate taxation logic explicitly integrated ensuring peak compliance strictly natively."
                        ],
                        duration: "24 Months", eligibility: "Graduation mapping perfectly utilizing standard B.Com/BBA formats perfectly.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "UG", name: "B.Com", duration: "36", priceRange: "₹1,20,000",
                    specializations: [
                        { name: "Accounting and Finance", priceVal: 120000, career: "Accountant, Audit Assistant", desc: "Standard domestic verification pathways explicitly pushing GST logic entirely." },
                        { name: "International Finance and Accounting (Accredited by ACCA, UK)", priceVal: 120000, career: "Global Acct Exec., Ex-Pat Auditor", desc: "Explicit structured pathway unlocking hardcore UK auditing credentials efficiently." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Tuition Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            s.name.includes("ACCA") ? "Integrated syllabus aligning to ACCA limits. Base UG fee is 1.2L; external Body Registration & Examination fees purely apply dynamically atop." : "Rigorous baseline tracking massively evaluating national setups explicitly.",
                            "Tuition universally verified securely at ₹20,000 / Semester perfectly.",
                            "Direct Propelld networks effectively dropping explicitly to Zero Cost levels entirely."
                        ],
                        duration: "36 Months", eligibility: "10+2 mapping seamlessly explicitly verifying any general standard pathways.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24", priceRange: "₹90,000",
                    specializations: [
                        { name: "Economics", priceVal: 90000, career: "Macro Analyst, Market Strategist", desc: "Global asset shifts, Keynesian limits, and hard mathematical market tracking." },
                        { name: "English", priceVal: 90000, career: "Content Strategist", desc: "Syntax networks securely mapping deep literature analyses entirely." },
                        { name: "Public Policy", priceVal: 90000, career: "Policy Analyst", desc: "Governance architecture natively tracking macroeconomic arrays structurally." },
                        { name: "Jainology, Comparative Religion and Philosophy", priceVal: 90000, career: "Religious Logic Analyst", desc: "Deep rigorous comparative systemic evaluations purely tracking ancient comparatives." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Tuition Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Tuition explicitly scaled dynamically at only ₹22,500/Sem natively.",
                            "Zero Cost EMI networks deployed completely managing all financial friction securely.",
                            "Passing limits successfully mapped exactly to 40% natively absolutely."
                        ],
                        duration: "24 Months", eligibility: "Graduation mapping strictly validating basically any structural academic arrays perfectly.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                }
            ]
        },
        url: "https://onlinejain.com/"
    };

    if (targetIdx > -1) {
        universities.splice(targetIdx, 1);
    }
    
    universities.push(jainData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("JAIN Extensively Fee-Corrected based strictly on DOM Price parsing exactly fixing all MBA, MCA, M.Com, B.Com, and MA bounds.");
}

run().catch(console.error);
