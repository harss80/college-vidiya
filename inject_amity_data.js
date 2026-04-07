import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let amityIdx = universities.findIndex(u => u.id === 'amity' || u.id === 'amity-online');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeStr, durationMonths) {
        let totalFee = typeof totalFeeStr === 'number' ? totalFeeStr : parseInt(totalFeeStr.toString().replace(/[^0-9]/g, '')) || 0;
        let semesters = durationMonths / 6;
        let semFee = totalFee > 0 && semesters > 0 ? Math.round(totalFee / semesters) : null;
        let annualFee = semFee ? semFee * 2 : null;
        
        let semFeeLine = semFee ? `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Annual Fee (Yearly)</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #f8f9fa); border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(16, 185, 129, 0.1); color: #059669; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🎯 Scholarships & EMI Options Available!
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #e2e8f0; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Type</th>
        <th style="padding: 10px 8px; font-weight: 600;">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Initial Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹1,100</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Seat Blocking Amount</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹5,000</td>
      </tr>
      ${semFeeLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Full Program</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700;">${formatMoney(totalFeeStr)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fffbeb; padding: 12px; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #b45309;">Detailed Payment & Loan Partners:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Loan Partners:</b> Fibe, TCPL, Grayquest globally mapped for EMI.</li>
      <li><b>Upfront Discounts:</b> 8-12% OFF on Full Fee | 5% OFF on Annual Fee.</li>
      <li><b>20% Scholarships:</b> Divyaang, Defence (2+ Yrs), Amity Alumni, Merit (85%+ marks).</li>
      <li><b>30-100% Scholarships:</b> Sports CHAMPS category based on federation rank.</li>
    </ul>
  </div>
</div>`;
    }

    const amityData = {
        id: "amity-online",
        name: "Amity Online University",
        logo: "https://ui-avatars.com/api/?name=Amity&background=ffcc00&color=000&size=150",
        location: "Noida, UP",
        type: "State Private University",
        level: ["UG", "PG", "Integrated"],
        budget: 199000,
        specializations: ["MBA", "MCA", "BBA", "BCA", "BA", "MA", "B.Com", "M.Com", "Integrated"],
        accreditation: "NAAC A+ | WASC | UK Quality Assured | WES Listed | IAU",
        fees: "Semester / Annual | Up to 100% Scholarships Available",
        placement: "Placements from 1st Sem | Virtual Drives | Global Networks",
        eligibility: "UG: 10+2 | PG: Graduation | MBA: 40% in Grad OR Amity MBA Aptitude Test required",
        ranking: "NIRF Ranked 22 | Elite Global Education Tech Partnerships",
        exams: "Continuous Assessment (30%) + Proctored Exam (70%) | Passing: 40%",
        extendedDetails: {
            examination: "30% Continuous Assessment | 70% Proctored Exam | Passing Criteria = 40%",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Amity is Unmatched (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Elite Global Recognitions</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Amity holds powerful global accreditations like WASC, WES Listing, and UK Quality Assured. If you plan to move abroad for a job or master's degree, this university is instantly accepted worldwide.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Direct Corporate Integrated Degrees</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Your syllabus is directly built by massive tech companies. Amity has deeply integrated degrees designed officially in partnership with <strong style="color:#0f172a;">TCS ION, HCL Tech, Paytm, and KPMG</strong>.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. The Amity Innovation Incubator</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">If you want to build a startup, you get direct access to their built-in incubator offering massive scale, funding, and mentorship perfectly designed for founders.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Massive Scholarships Available</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">You get a flat <strong style="color:#0f172a;">20% fee discount automatically</strong> if you are Defence personnel, Amity Alumni, Divyaang, or scored 85%+ on previous exams. Elite Sports CHAMPS can even get a 100% free ride.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. Built-in Career & Placement Support</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Amity gives every student an Industry Mentor. They offer Master Classes specifically for Resume building and start mapping your job profile through Virtual Placement Drives starting from semester 1.</p>
            </details>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = AU</strong></p>
            </div>`,
            payment: "<b>Semester, Annual & Full Course Fees</b><br/>Amity securely locks seats using precisely a <b>₹5,000 Blocking Amount</b> and a <b>₹1,100 Registration Fee</b>.<br/><br/><b>Official Loan Parameters:</b> Dedicated native loan partnerships through <b>Fibe, TCPL, and Grayquest</b> directly ensure massive student accessibility via transparent No-Cost EMI setups.",
            programs: [
                {
                    group: "PG", name: "MBA", duration: "24 Months", priceRange: "₹1,99,000",
                    specializations: [
                        { name: "Business Analytics", career: "Analytics Manager, Database Strategist", desc: "Data Mining, R, Python, Quantitative Finance, Business Intelligence simulations." },
                        { name: "Data Science", career: "Data Scientist, Data Modeler", desc: "Big Data, Algorithms, Natural Language Processing, Statistical Analysis." },
                        { name: "Digital Entrepreneurship", career: "Start-up Founder, Growth Officer", desc: "Incubator Logic, Venture Capital, Start-up Law, Innovation Scaling." },
                        { name: "Digital Marketing Management", career: "Digital Marketing Head, SEO Director", desc: "Programmatic ads, Content Strategy, Performance Marketing frameworks." },
                        { name: "Entrepreneurship and Leadership Management", career: "Business Head, Org Developer", desc: "Operations design, Organization behavior, Strategic scaling, Founder dynamics." },
                        { name: "Finance and Accounting Management", career: "Financial Analyst, Tax Consultant", desc: "Corporate Finance, Taxation schemas, IFRS reporting, Capital Audits." },
                        { name: "Global Finance Market", career: "Investment Analyst, Forex Trader", desc: "Derivatives, Cross-border M&A, Global Fiscal Policies, Portfolio Tech." },
                        { name: "Hospitality Management", career: "Hospitality Operations Head, Event Director", desc: "MICE, Tourism logic, Luxury hospitality operations, Quality Service tracking." },
                        { name: "Human Resource Management", career: "HR Manager, Org Behavior Analyst", desc: "Labour laws, Talent Acquisition pipelines, Compliance grids, Compensation logic." },
                        { name: "Human Resources Analytics", career: "HR Data Architect, Talent Scale Manager", desc: "Predictive recruitment modeling, Attrition statistical metrics, PowerBI for HR." },
                        { name: "Information Technology Management", career: "IT Consultant, Systems Manager", desc: "IT Governance, Cloud integrations scaling, ERP modules, Enterprise architectures." },
                        { name: "Insurance Management", career: "Risk Analyst, Actuarial Trainee", desc: "Life & Non-Life Insurance frameworks, Regulatory environments, Tech in Risk." },
                        { name: "International Business Management", career: "Export-Import Head, Supply Chain Director", desc: "Forex strategies, Global Logistics algorithms, EXIM documentation, Cross-Cultural Management." },
                        { name: "International Finance (ACCA)", career: "Global Auditor, Certified Accountant", desc: "Advanced Audit matrices, Strategic Business Reporting, Global Financial Management." },
                        { name: "Marketing & Sales Management", career: "Marketing Director, Sales Strategy Lead", desc: "B2B Sales networks, Consumer Behavior mapping, Brand Architecture." },
                        { name: "Production and Operations Management", career: "Operations Scale Manager, Six Sigma Lead", desc: "Lean manufacturing, TQM tracking, Warehouse integrations, Resource pipelines." },
                        { name: "Retail Management", career: "Retail Tech Integrator, E-commerce Manager", desc: "Visual Merchandising, Supply Chain Retail networks, CRM loyalty." },
                        { name: "General Management", career: "General Corporate Manager, Strategist", desc: "Core business management, Financial modeling basics, Legal structures." }
                    ].map(s => ({
                        name: s.name, price: "₹1,99,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "UGC Entitled curriculum strictly mapped to the specific parameters of " + s.name + ".",
                            s.name.includes("ACCA") ? "Taught rigorously matching ACCA paradigms unlocking deep exemptions." : "Heavy utilization of Industry Hands-on simulation tools and platforms.",
                            "Access to Amity Innovation Incubator ensuring maximum network scaling immediately.",
                            "Incredibly rich Placement drives beginning explicitly within Semester 1.",
                            "Included free access to 6 specialized Amity online cert courses.",
                            "Tons of scholarships: 20% straight cut for Defence/Alumni, 8-12% upfront payment offsets."
                        ],
                        duration: "24 Months", eligibility: "40% in Graduation, or candidate must pass Amity MBA Eligibility Test (45 mins).", paymentDetails: generateTable(199000, 24)
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,70,000 - ₹2,75,000",
                    specializations: [
                        { name: "General", priceVal: 170000, career: "Software Engineer, Web Developer", desc: "Core programming structures, Web Technologies, Basic Cryptography, DBMS architectures." },
                        { name: "Block Chain", priceVal: 170000, career: "Smart Contract Dev, Crypto Tech", desc: "Distributed ledgers, Ethereum networks, Solidity logic, Advanced Cryptographic security." },
                        { name: "ML & AI", priceVal: 170000, career: "AI Developer, Data Scientist", desc: "Neural networks, TensorFlow operations, Natural Language Toolkits paradigms." },
                        { name: "AI & ML (TCS ION)", priceVal: 250000, career: "TCS Enterprise AI Dev, AI Architect", desc: "Direct TCS Enterprise logic mapping, Heavy deep learning integration, Corporate deployment metrics." },
                        { name: "AR & VR (TCS ION)", priceVal: 250000, career: "Immersive 3D Modeler, VR Engineer", desc: "Unity/Unreal engine integrations mapped strictly up to TCS quality limits, Metaverse scaling." },
                        { name: "Cyber Security (HCL TECH)", priceVal: 250000, career: "HCL Tech Analyst, Threat Hunter", desc: "Direct HCL threat architectures, Pen-testing logic, Malware dissection operations." },
                        { name: "Software Engineering (HCL TECH)", priceVal: 250000, career: "Senior System Dev, CI/CD Architect", desc: "HCL enterprise microservices, Heavy DevOps CI/CD loops, Advanced backend scalability." },
                        { name: "Financial Technology and AI - Paytm", priceVal: 275000, career: "Fintech Algo Analyst, Paytm Intern", desc: "Deep FinTech core logic heavily guided by Paytm, Regulatory compliances mapped via KPMG logic." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Highest tier MCA architecture tailored expressly for " + s.name + ".",
                            s.name.includes("TECH") || s.name.includes("ION") ? "Massive elite partnership strictly integrated via " + s.name.split('(')[1].replace(')','') + "." : "Utilizes extensive simulated testing bounds targeting absolute software dominance.",
                            "Profile building via Master Classes (Resume + Tech Interview targeting).",
                            "Incredible scholarship depth: Up to 20% for Alumnis/Defence natively processed.",
                            "Easily accessible Fibe/Grayquest mapping ensuring simple zero-stress academic liquidity."
                        ],
                        duration: "24 Months", eligibility: "Graduation (Ideally BCA/B.Sc/B.Com utilizing Mathematics base).", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹1,65,000 - ₹2,25,000",
                    specializations: [
                        { name: "General", priceVal: 165000, career: "Business Trainee, Account Manager", desc: "Microeconomics overview, Accounting Basics, Operations introductory loops." },
                        { name: "Travel and tourism management", priceVal: 165000, career: "Tour Analyst, Travel Agency Admin", desc: "Hospitality intro logic, Geographic tourism strategies, Event operational mapping." },
                        { name: "Data Analytics (HCL Tech)", priceVal: 225000, career: "Junior Data Biz Analyst, Ops Analyst", desc: "HCL Tech introductory data pipelines, Basic Tableau mapping, Enterprise data theory." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Industry-synced BBA designed around heavy " + s.name + " mechanics.",
                            "Direct Amity Noida physical textbook capabilities supporting rigorous study flows.",
                            "Placement scaling natively operating from Sem 1.",
                            "Fully verified by global structures (WASC, WES).",
                            "Continuous 30:70 grading pattern significantly lowering stress metrics."
                        ],
                        duration: "36 Months", eligibility: "10+2 from a recognized board via any stream.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "UG", name: "BCA", duration: "36 Months", priceRange: "₹1,50,000 - ₹2,50,000",
                    specializations: [
                        { name: "General", priceVal: 150000, career: "Junior Dev, Database Admin", desc: "Core C/C++, Java Intro, Database Logic mapped cleanly." },
                        { name: "Data Analytics - TCS ION", priceVal: 225000, career: "TCS Junior Analyst, DB Modeler", desc: "Direct TCS Enterprise data methodologies explicitly placed natively at UG level." },
                        { name: "Cloud & Security - TCS ION", priceVal: 225000, career: "TCS Cloud Trainee, Network Junior", desc: "Server scaling, Basics of AWS/Azure architectures driven specifically by TCS metrics." },
                        { name: "Software Engineering - HCL Tech", priceVal: 225000, career: "HCL Dev Trainee, Code Validator", desc: "HCL oriented microservices pipelines, Enterprise clean code standards." },
                        { name: "Data Engineering - HCL Tech", priceVal: 225000, career: "HCL Data Architect Junior, ETL Maker", desc: "Data warehouses natively explored, ETL baseline pipelines." },
                        { name: "Financial Technology and AI - Paytm", priceVal: 250000, career: "Paytm Junior Analyst, Code Logic Admin", desc: "Fintech APIs natively constructed with deep oversight from Paytm partners." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Comprehensive robust BCA tailored exactly into " + s.name + ".",
                            s.name.includes("-") ? "Explosive structural integration mapped heavily via " + s.name.split('-')[1].trim() + " loops." : "Core Amity Alumni network ensures massive scaling possibilities.",
                            "Includes access to virtual software networking job fairs locally natively.",
                            "Supported highly by 6 extra bundled courses from Amity internally.",
                            "Easily deployable via Grayquest or Fibe to map absolute financial ease."
                        ],
                        duration: "36 Months", eligibility: "10+2 from a recognized board.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36 Months", priceRange: "₹85,000 - ₹1,70,000",
                    specializations: [
                        { name: "General (Select Any Specialization)", priceVal: 99000, career: "Content Writer, Civil Services Aspirant, Public Analyst", desc: "Select massively from core electives exactly covering Sociology, Political Science, Economics, and English Literature." },
                        { name: "Vernacular", priceVal: 85000, career: "Regional Editor, Content Manager", desc: "Delivered strictly utilizing regional Indian languages for absolute outreach." },
                        { name: "JMC", priceVal: 170000, career: "Journalist, Media Admin", desc: "Broadcast mechanics, Digital radio architectures, Mass editing grids." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "NAAC A+ arts scale mapping perfectly via " + s.name + ".",
                            "Offers immediate WES integration unlocking massive global Master pathways.",
                            "Inbuilt profile building Masterclasses immediately unlocking top media/content tier jobs.",
                            "Unbeatable scholarship metrics: 20% automatic for Alumnis, Divyaang, and Defence nodes.",
                            "Easily accessible 70:30 proctored grading structures."
                        ],
                        duration: "36 Months", eligibility: "10+2 from a recognized board via any stream.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "UG", name: "B. Com", duration: "36 Months", priceRange: "₹99,000 - ₹2,50,000",
                    specializations: [
                        { name: "General", priceVal: 99000, career: "Accounts Trainee, Operations Backoffice", desc: "Financial ledger tracking, Basics of microeconomics, Business legal grids." },
                        { name: "ACCA (Association of Chartered Certified Accountants)", priceVal: 250000, career: "Financial Analyst, Trade Finance Coordinator, CFO International", desc: "Performance Management, Strategic Business Leadership, Audit & Assurance, International Financial Reporting. Certified globally and accredited strictly by ACCA, UK." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            s.name.includes("ACCA") ? "Gain 9 ACCA paper exemptions out-of-the-box via strict ACCA, UK accreditation." : "Deep general financial foundation via Amity's legacy networks.",
                            "Strict financial corporate pathway deeply engaging via " + s.name + ".",
                            "Massive career mapping handled explicitly via Amity's Industrial Mentors.",
                            "Excellent 24/36 month zero-cost EMI structure mapped neatly via TCPL & Fibe.",
                            "Eligible for huge 20% flat offsets (Alumni/Defence) and 30-100% Sports CHAMPS coverage."
                        ],
                        duration: "36 Months", eligibility: "10+2 from a recognized board via any stream.", paymentDetails: generateTable(s.priceVal, 36)
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹1,30,000 - ₹1,70,000",
                    specializations: [
                        { name: "JMC", priceVal: 170000, career: "Media Director, Broadcast Scale Manager", desc: "Journalism ethics deeply tracked, Visual broadcast media management." },
                        { name: "Public Policy Governance", priceVal: 130000, career: "Policy Analyst, NGO Director", desc: "Urban policy matrices, NGO developmental scaling loops." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Deep WASC & UK Quality Assured architecture built natively for " + s.name + ".",
                            "Connect intimately using the elite Amity Alumni network globally.",
                            "Massive merit tracking 20% scholarships ensuring heavy educational deployment.",
                            "Tackles full 70:30 assessments allowing heavy practical career deployment.",
                            "Trained simultaneously via 6 additional mapped free online programs."
                        ],
                        duration: "24 Months", eligibility: "Graduation from a recognized board.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "PG", name: "MCOM", duration: "24 Months", priceRange: "₹1,20,000",
                    specializations: [
                        { name: "Fintech", priceVal: 120000, career: "Fintech Product Manager, Tech Auditor", desc: "Cryptographic integration in banking, Advanced blockchain banking integrations." },
                        { name: "Financial Management", priceVal: 120000, career: "Chief Financial Officer Trainee, Senior Auditor", desc: "Derivatives advanced structures, Global forex M&A architectures." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Rigorous accounting pathways specializing strictly into " + s.name + ".",
                            "Offers immediate virtual placement scales explicitly managed via Amity's backend.",
                            "Fully transparent cost structuring supported efficiently by Fibe & Grayquest EMIs.",
                            "Master corporate compliance grids thoroughly utilizing simulation tracking.",
                            "Zero friction assessments utilizing the 70% Proctored / 30% Continual testing format."
                        ],
                        duration: "24 Months", eligibility: "B.Com / BBA from recognized board.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "Integrated", name: "Integrated Program", duration: "48 - 60 Months", priceRange: "Contact Admissions",
                    specializations: [
                        { name: "BCom + MBA", career: "Corporate Director, Lead Financial Strat", desc: "Transitions directly from foundational accounting metrics cleanly into advanced corporate MBA leadership loops seamlessly." },
                        { name: "BBA + MBA", career: "Business Head, Org Developer", desc: "The ultimate track connecting broad operation structures directly to highly concentrated MBA data strategies." },
                        { name: "BCA + MCA", career: "Lead System Architect, DevOps VP", desc: "Starts explicitly at software foundations natively locking all the way directly into Cloud server matrix logic." }
                    ].map(s => ({
                        name: s.name, price: "Contact Admission", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Incredibly elite dual sequence merging UG directly logically into PG under " + s.name + ".",
                            "Completely removes the severe friction of securing master's level admission testing entirely.",
                            "WASC and WES mapped strictly maximizing total international transfer validity.",
                            "Benefit incredibly from deep Amity Incubator integration stretching years long.",
                            "Discounts via Sports CHAMPS reaching potentially 100% full coverage natively.",
                            "Includes enormous simulated career tracking operating seamlessly."
                        ],
                        duration: "4 Years (to 5 Years)", eligibility: "10+2 from recognized board. Valid base for specific discipline required.", paymentDetails: generateTable("Contact Admission for Integrated Pricing", 60)
                    }))
                }
            ]
        },
        url: "https://amityonline.com/"
    };

    if (amityIdx > -1) {
        universities[amityIdx] = amityData;
    } else {
        universities.push(amityData);
    }

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Amity University precisely curated with exact syllabus formats, USPs, and strict exam | notation.");
}

run().catch(console.error);
