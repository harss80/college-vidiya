import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let shooIdx = universities.findIndex(u => u.name.toLowerCase().includes('shoolini') || u.id === 'shoolini-online');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeBlock, durationMonths, emiNote = "") {
        let totalFee = typeof totalFeeBlock === 'number' ? totalFeeBlock : parseInt(totalFeeBlock.toString().replace(/[^0-9]/g, '')) || 0;
        let semesters = durationMonths / 6;
        let semFee = totalFee > 0 && semesters > 0 ? Math.round(totalFee / semesters) : null;
        let annualFee = semFee ? semFee * 2 : null;
        
        let semline = semFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>` : "";
      
        let annualLine = annualFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Yearly Fee (Base)</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fed7aa; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(249, 115, 22, 0.1); color: #c2410c; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏅 Shoolini Pay-After-Placement Native Support
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #ffedd5; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Payment Allocation</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Details</th>
      </tr>
    </thead>
    <tbody>
      ${semline}
      ${annualLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Standard Lumpsum (Total Base)</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${typeof totalFeeBlock === 'string' ? totalFeeBlock : formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fffbeb; padding: 12px; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #b45309;">Financial Disclaimers & Official Scholarships:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Lum-sum Offer:</b> Enjoy a 10% to 30% scholarship on your full course fee directly via single payment.</li>
      <li><b>Yearly Advance:</b> Gain an automatic 5% to 20% scholarship on annual advance payments.</li>
      <li><b>PAP Scholarship:</b> Opting out of the Pay-After-Placement setup grants an immediate flat 20% discount on total fees!</li>
      <li><b>Loan Partners:</b> End-to-end easy monthly EMIs available specifically configured keeping No-Cost loops accessible.</li>
      ${emiNote ? `<li><b>Notes:</b> ${emiNote}</li>` : ''}
    </ul>
  </div>
</div>`;
    }

    const shooData = {
        id: "shoolini-online",
        name: "Shoolini University Online",
        logo: "https://ui-avatars.com/api/?name=Shoolini+University&background=f97316&color=fff&size=150",
        location: "Solan, Himachal Pradesh",
        type: "Private University",
        level: ["UG", "PG"],
        budget: 130000,
        specializations: ["MBA", "MCA", "BBA", "BCA", "M.Sc", "B.Com", "MA"],
        accreditation: "NAAC A+ (2024) | UGC Entitled | Diamond Rated",
        fees: "PAP Model Configured | Mega Lum-sum Scholarships",
        placement: "Pay-After-Placement (80/20) | Free StudyIQ Prep | Top 250 MNCs",
        eligibility: "UG: 10+2 | PG: Graduation Degree",
        ranking: "Global Top 200 (THE Impact) | #1 in India for Citations",
        exams: "70:30 Evaluation Model (Proctored Final + Internal Assignments)",
        extendedDetails: {
            examination: "Evaluation is fully mapped to a robust 70:30 format, separating the stress with 30% continuous assignments and 70% proctored finals natively.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Join Shoolini University (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. India's First Pay-After-Placement Online Degrees</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Shoolini takes massive confidence in their placements. You can opt to pay only 80% of your fees upfront, and simply pay the remaining 20% <i>after</i> securing your placement result!</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Direct Global University Gateways</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">They actually provide you the option to transfer seamlessly to global partner universities in the UK, US, Australia, or Canada after your 1st year (for Masters) or 2nd year (for Bachelors).</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Free Government Test Prep via StudyIQ</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">As a native student, you gain 100% free access to crack UPSC and 200+ other government exams natively using StudyIQ's 10,000+ mock tests and live mentorship programs.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Power Job Prep & Free Certifications</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">They empower your resume by allowing you to choose exactly two massive specialized certifications securely attached to your degree, absolutely free of cost.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. Top Ranked Worldwide</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Ranked directly in the Global Top 200 by THE (Times Higher Education) Impact Rankings, securing an official NAAC A+ 2024 tag, and sitting at #1 in India for Citations per Paper.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">6. Rare Dual-Specialization MBA</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Extremely rare flexibility: Shoolini explicitly allows you to pick any two subject areas in your MBA securely combining two powerful degrees into one!</p>
            </details>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = SU</strong></p>
            </div>`,
            payment: "<b>Massive Scholarship Array & Payment Flexibility</b><br/>You heavily benefit from opting into Shoolini's scholarship structures. Opting out from Pay-After-Placement gives you an instant 20% fee drop. Paying Lum-Sum gives another 10% to 30% saving, while Yearly advance payments unlock 5% to 20% drops directly natively.<br/><br/><b>Official Finance Integration:</b> End-to-end easy monthly EMIs are fully active keeping higher education highly liquid without upfront stress.",
            programs: [
                {
                    group: "PG", name: "MBA (Dual Specialization)", duration: "24 Months", priceRange: "₹1,30,000",
                    specializations: [
                        { name: "Marketing Management", career: "Marketing Executive VP, Branding Manager", desc: "Omni-channel scaling, B2B consumer psychology, programmatic pipelines." },
                        { name: "Human Resource Management", career: "HR Director, Strategy VP", desc: "Labor compliance algorithms, corporate HR frameworks completely scaling remote tracking." },
                        { name: "Financial Management", career: "Auditor, Finance Modeler", desc: "Advanced forensic forecasting, portfolio distribution loops, treasury logistics." },
                        { name: "Digital Marketing", career: "Digital Strategy Lead", desc: "Heavy ROI conversion matrices, programmatic networks scaling modern search architectures." },
                        { name: "Retail Management", career: "Regional Retail Ops Leader", desc: "Mass operations pipelines fundamentally targeting massive D2C scaling mechanics." },
                        { name: "Banking & Insurance", career: "Banking API Analyst, Ops Lead", desc: "Digital banking architecture, underwriter logic loops, corporate compliance grids." },
                        { name: "Operation & Supply Chain Management", career: "Logistics Officer, Operations Director", desc: "Lean logistics, global transit schemas, and strategic supply architecture." },
                        { name: "IT Management", career: "IT Consultant, Chief Tech Officer", desc: "Digital transformations, enterprise server scaling logic, system architectures." },
                        { name: "Tourism Management", career: "Hotel Director, Operations Lead", desc: "Macro hospitality logistics mapped actively across regional chains." },
                        { name: "Real Estate Management", career: "Real Estate Dev Officer, Planner", desc: "Large zoning allocations perfectly tracked alongside civil mapping logistics." },
                        { name: "Data Science & Business Analytics", career: "Data Architect, Business Analyst", desc: "Tableau schemas natively executed tracking massive predictive algorithmic analytics." },
                        { name: "Agri Business Management", career: "Agricultural Ops Modeler", desc: "Rural supply pipelines optimized natively via big data agricultural methodologies." },
                        { name: "Biotechnology Management", career: "BioTech Modeler, Pharma Manager", desc: "Clinical loops, R&D patent tracking matrices." },
                        { name: "Food Technology Management", career: "Agri-Food Coordinator", desc: "Post-harvest supply structures." },
                        { name: "Pharma & Health Care Management", career: "Hospital Ops Admin, Health Logistician", desc: "Epidemiological scaling alongside advanced medical facility frameworks." }
                    ].map(s => ({
                        name: s.name, price: "₹1,30,000 (Base Equivalent)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Gain immediate priority accessing the famous Pay-After-Placement setup explicitly.",
                            "Access entirely customized Free test prep modules scaling Govt / Corporate exams securely.",
                            "Direct 1-on-1 mentorship exclusively taught by Ex-McKinsey / ISB industry elites natively."
                        ],
                        duration: "24 Months", eligibility: "Graduation mapping absolutely any baseline discipline with passing grades.", paymentDetails: generateTable(130000, 24)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹58,000",
                    specializations: [
                        { name: "Marketing", career: "Marketing Executive Junior", desc: "Standard entry level funnels tracking conversion mechanics explicitly." },
                        { name: "Finance", career: "Finance Assistant, Accounts Executive", desc: "Introductory ledger analysis mapping exactly to taxation loops natively." },
                        { name: "HR", career: "HR Trainee, Corporate Setup Administrator", desc: "Entry-level compliance handling natively aligned to remote protocols." },
                        { name: "Digital Marketing", career: "SEO Analyst, Lead Admin", desc: "SEM architectures natively tracked over massive ROI conversion points." },
                        { name: "Computer Science", career: "BBA Tech Lead, Operations Analyst", desc: "Algorithm foundations effectively integrated via business administration mechanics." },
                        { name: "Direct Selling", career: "Regional Sales Sync, Operations Seller", desc: "B2C outreach tactics mapped securely scaling sales matrices." }
                    ].map(s => ({
                        name: s.name, price: "₹58,000 (Base Equivalent)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Seamlessly unlock options to transfer exactly to international universities globally after year 2.",
                            "Leverage heavy scholarships ranging from 10% up to exactly 30% via Lum-sum processing.",
                            "Add 2 free high-tier certification tracks entirely mapping to your profile natively."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely mapped from recognized educational board grids.", paymentDetails: generateTable(58000, 36)
                    }))
                },
                {
                    group: "UG", name: "BCA", duration: "36 Months", priceRange: "₹58,000",
                    specializations: [
                        { name: "Artificial Intelligence and Machine Learning", career: "AI Models Trainee, Junior Developer", desc: "Neural logic pipelines efficiently matching real-world automation schemas explicitly." },
                        { name: "Cyber Security", career: "Ops Defender, Cyber Setup Admin", desc: "Networking logic parameters securely isolating cloud deployment vulnerabilities natively." },
                        { name: "Data Science", career: "SQL Executive, Data Modeler", desc: "ETL structuring perfectly accessing pure cloud computational capacities heavily." },
                        { name: "Full Stack Development", career: "MERN Stack Dev, Junior Web Developer", desc: "Front-end to back-end logic perfectly mapping complete web server architecture scaling." }
                    ].map(s => ({
                        name: s.name, price: "₹58,000 (Base Equivalent)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Massive upskilling directly unlocked with exactly zero additional cost requirements.",
                            "Direct integrations featuring hands-on corporate assignments naturally.",
                            "Access incredible placement nodes hitting 250+ partners safely via active profile building."
                        ],
                        duration: "36 Months", eligibility: "10+2 precisely utilizing baseline passing structures.", paymentDetails: generateTable(58000, 36)
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,20,000",
                    specializations: [
                        { name: "Artificial Intelligence and Machine Learning", career: "AI Engineer, Full Deep Learning Dev", desc: "Intense machine analytics completely syncing logic matrices natively." },
                        { name: "Data Science", career: "Data Scientist, Head Architect", desc: "Advanced ETL pipelines managing multi-terrabyte server cluster systems." },
                        { name: "Full Stack Development", career: "Senior React/Node Dev, Tech Lead", desc: "End-to-end cloud scaling architecture mapping MERN and MEAN networks natively." }
                    ].map(s => ({
                        name: s.name, price: "₹1,20,000 (Base Equivalent)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Master class architectures providing exact hands-on capstone programming tracks.",
                            "Unlock premium Pay-After-Placement arrays successfully bypassing upfront stress elements.",
                            "Massive network capabilities directly managed by Ex-Citibank / IIM Calcutta logic structures."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's naturally focused across IT, Math or Science matrices cleanly.", paymentDetails: generateTable(120000, 24)
                    }))
                },
                {
                    group: "PG", name: "M.Sc", duration: "24 Months", priceRange: "₹1,20,000",
                    specializations: [
                        { name: "Data Science", career: "Big Data Elite Lead, Statistics Modeler", desc: "Master AI, machine learning and big data combining Google / Johns Hopkins schemas natively." }
                    ].map(s => ({
                        name: s.name, price: "₹1,20,000 (Base Equivalent)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Double impact via integrated global Coursera certifications natively from Google & Johns Hopkins.",
                            "Pinnacle analytical logic actively managed by core Shoolini masters seamlessly.",
                            "Absolutely massive fee advantages scaling towards explicit 1-year payment limits natively."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's successfully mapped directly traversing Math/Science baselines thoroughly.", paymentDetails: generateTable(120000, 24)
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹80,000",
                    specializations: [
                        { name: "English Literature", career: "Publishing Editor, Lead Content Executive", desc: "Advanced literature semantics matching top tier teaching paradigms entirely." },
                        { name: "Journalism & Mass Communication", career: "Digital Storyteller, Media Strategy Lead", desc: "Modern media pipelines securely integrated across content creation and massive PR." }
                    ].map(s => ({
                        name: s.name, price: "₹80,000 (Base Equivalent)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Taught explicitly perfectly aligning precisely via elite country-leading instructional pipelines.",
                            "Perfectly viable effectively integrating UPSC test preparations seamlessly free of cost.",
                            "Provides immediate access successfully scaling virtual job fairs massively matching top partners."
                        ],
                        duration: "24 Months", eligibility: "Graduation natively passing all standard benchmarks cleanly.", paymentDetails: generateTable(80000, 24)
                    }))
                },
                {
                    group: "UG", name: "B.Com", duration: "36 Months", priceRange: "₹58,000",
                    specializations: [
                        { name: "Honours - Accounting, Finance & Taxation", career: "Financial Associate, Tax Ledger Handler", desc: "B.Com. (Hons.) focused efficiently across pure accounting paradigms inherently." }
                    ].map(s => ({
                        name: s.name, price: "₹58,000 (Base Equivalent)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Huge integration naturally unlocking public sector eligibility smoothly.",
                            "Free StudyIQ access explicitly allowing you completely scale government accounting exam parameters.",
                            "Heavy integration securely unlocking 10% to 30% baseline drops utilizing simple single payments."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely accessed effectively from any specific foundational board natively.", paymentDetails: generateTable(58000, 36)
                    }))
                }
            ]
        },
        url: "https://shoolini.online/"
    };

    if (shooIdx > -1) {
        universities.splice(shooIdx, 1);
    }
    
    let realOldIdx = universities.findIndex(u => u.name.toLowerCase().includes('shoolini'));
    if (realOldIdx > -1) {
        universities[realOldIdx] = shooData;
    } else {
        universities.push(shooData);
    }

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Shoolini University Online meticulously injected matching all structural arrays natively!");
}

run().catch(console.error);
