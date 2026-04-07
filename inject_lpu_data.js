import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let lpuIdx = universities.findIndex(u => u.name.toLowerCase().includes('lovely') || u.id === 'lpu' || u.id === 'lpu-online');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(lumSumFee, semFee, durationMonths) {
        let semesters = durationMonths / 6;
        let semTotal = semFee * semesters;
        let annualFee = semFee * 2;
        let lumSumSavings = semTotal - lumSumFee;
        
        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #f8f9fa); border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(245, 158, 11, 0.1); color: #d97706; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    ⚡ Premium Financing & Grants Active
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #e2e8f0; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Payment Structure</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Initial Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹600</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Pay Semester-wise</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Pay Annually (Yearly)</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Semester Total Baseline</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;"><strike style="color:#94a3b8; font-size:12px;">${formatMoney(semTotal)}</strike></td>
      </tr>
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Pay Lum-Sum (Total Base)</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${formatMoney(lumSumFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fffbeb; padding: 12px; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #b45309;">Financial Breakdown & Loan Partners:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Lum-Sum Advantage:</b> Paying full fees upfront triggers an immediate <b>${formatMoney(lumSumSavings)}</b> cash discount.</li>
      <li><b>Student Grants:</b> The exact prices above already include LPU's native 20% grant.</li>
      <li><b>Official Loan Partners:</b> Exclusively linked with <b>Avanse</b> for 0% No-Cost EMI solely on full payments.</li>
    </ul>
  </div>
</div>`;
    }

    const lpuData = {
        id: "lpu-online",
        name: "Lovely Professional University (LPU Online)",
        logo: "https://ui-avatars.com/api/?name=LPU&background=f59e0b&color=fff&size=150",
        location: "Jalandhar, Phagwara",
        type: "Private University",
        level: ["UG", "PG", "Diploma"],
        budget: 146240,
        specializations: ["MBA", "MCA", "BBA", "BCA", "BA", "MA", "M.Sc", "M.Com", "DBA", "DCA"],
        accreditation: "NAAC A++ | ACBSP (USA) | Association of Commonwealth Universities (UK)",
        fees: "₹59,840 - ₹1,61,600",
        placement: "Career Planning | PEP Training | Job Search Support",
        eligibility: "UG/Diploma: 10+2 | PG: Graduation",
        ranking: "NIRF Ranked 31st | International Association of Universities",
        exams: "Continuous Assessments (30%) + Proctored Exam (70%)",
        extendedDetails: {
            examination: "30% Continuous Assessment | 70% Proctored Exam | Duration = 2 Hours | Examination Slots: Morning, Afternoon, Evening (1 paper per day) | ETE / Reappear = June & December | Passing Criteria = 40%",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why LPU Online is Unbeatable:</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. International & National Recognitions</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">LPU holds the prestigious <strong style="color:#0f172a;">NAAC A++</strong> accreditation and is ranked <strong style="color:#0f172a;">31st by NIRF</strong>. It is also globally accredited by ACBSP (USA) and is a member of the Association of Commonwealth Universities (UK).</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. MBA Dual Specialization & PEP Support</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">The MBA program natively allows for <strong style="color:#0f172a;">Dual Specialization (At Zero Extra Cost)</strong>. Furthermore, if you fail 3 interview attempts during placements, you are immediately routed to a 3-5 day free Profession Enhancement Program (PEP) session to fix your interview limits!</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Direct Student & Campus Integration</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Online students get extremely easy access to resources via the native LPU Online Mobile App and have direct opportunities to participate in live campus events like Cultural fests, Sports, and Research startups alongside physical students.</p>
            </details>
            
            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Academic Deliverables Detail</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Includes DSC (Discipline Specific Core), 4 DSEs (Discipline Specific Elective - Choose any one from basket), 4 GEs (General Electives), and 4 SECs (Skill Enhancement Courses). All study material is strictly downloadable natively.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. World Class LMS (LPU e-Connect)</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Learning is fully driven by the award-winning <strong style="color:#0f172a;">LPU e-Connect platform</strong>. It features gamified learning, 24/7 access to recorded lectures, AI-proctored setups, and direct interaction loops with elite faculty anytime.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">6. Massive Placement Drives</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Secures explicit corporate scaling with over 2000+ top-tier global recruiters actively participating in LPU’s massive virtual placement drives specifically tailored for online students.</p>
            </details>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = LPU</strong></p>
            </div>`,
            payment: "<b>Semester & Full Course Fee Formats Evaluated</b><br/>LPU manages intakes by first explicitly enforcing a <b>₹600 Registration Fee</b> to lock the primary seat.<br/><br/><b>Official Loan Parameters:</b> LPU explicitly partners heavily with <b>Avanse</b> granting massive access to No-Cost EMI setups (applicable specifically to full fee/lumpsum selections natively over the database).",
            programs: [
                {
                    group: "PG", name: "MBA (Dual Specialization)", duration: "24 Months", priceRange: "₹1,46,240 (Lum Sum) / ₹1,61,600 (Sem)",
                    specializations: [
                        { name: "Finance", career: "Corporate Treasurer, Financial Modeler", desc: "Investment logic mapping, M&A baseline tracking, and heavy statistical accounting." },
                        { name: "Marketing", career: "Brand Specialist, Strategy Director", desc: "Consumer psychology indexing, programmatic marketing funnels, CRM systems." },
                        { name: "Human Resource", career: "Talent Acquisition Head, L&D Ops", desc: "Labor compliance algorithms, corporate HR frameworks perfectly aligned for remote teams." },
                        { name: "Data Science", career: "Data Scientist, Predictive Modeler", desc: "Python paradigms, database aggregation logic, raw scaling analytics." },
                        { name: "Digital Marketing", career: "PPC Specialist, SEO Director", desc: "Programmatic ad networks natively parsed via extensive Google Analytics scaling." },
                        { name: "Business Analytics", career: "Analytics Manager, Tableau Exec", desc: "Tableau intelligence schemas actively mapped against raw enterprise SQL databases." },
                        { name: "International Business", career: "Global Strategy Exec, Forex Consultant", desc: "Cross-border compliance, EXIM logistics scaling, and multinational supply chains." },
                        { name: "Information Technology", career: "IT Project Lead, CIO Strategy Exec", desc: "Network scalability natively matching modern cloud/software implementation logistics." },
                        { name: "Operations Management", career: "Ops Director, Efficiency Planner", desc: "Total Quality Management structures actively monitoring corporate efficiency." },
                        { name: "Hospital & Healthcare Management", career: "Hospital Admin, Clinical Resource Lead", desc: "Medical facility expansion grids natively mapped alongside advanced healthcare logistics." },
                        { name: "Banking & Finance Services", career: "Risk Analyst, Banking Ops Lead", desc: "Digital banking ecosystems, corporate crediting arrays, and massive ledger management." },
                        { name: "Logistics & Supply Chain Management", career: "Warehouse Exec, Procurement Manager", desc: "Lean operations, global transit schemas, and strategic vendor architecture." }
                    ].map(s => ({
                        name: s.name, price: "₹1,46,240 (Lum Sum) | ₹1,61,600 (Sem-Wise)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Program offers native structural support for Dual Specialization.",
                            "Access to the exact free 'PEP' (Profession Enhancement Program) in case of 3 failed placement interviews.",
                            s.name.includes("Analytics") || s.name.includes("Data") ? "Huge focus actively tracking statistical matrices globally recognized." : "Intensely modeled providing massive placement funnels natively."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's degree crossing any discipline. Completing CA / CS / CMA is entirely valid.", paymentDetails: generateTable(146240, 40400, 24)
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,08,800 (Lum Sum) / ₹1,20,000 (Sem)",
                    specializations: [
                        { name: "AI & ML", career: "AI Architect, Deep Learning Junior", desc: "Neural logic models natively mapped resolving corporate predictive thresholds." },
                        { name: "Data Science", career: "Data Miner, Corporate DB Lead", desc: "Big Data clustering actively mapped across SQL/NoSQL architectures." },
                        { name: "Cyber Security", career: "Network Defender, Threat Ops", desc: "Ethical hacking paradigms cleanly matched across modern enterprise firewalls." },
                        { name: "AR & VR Game Development", career: "Unity Developer, Immersive Ops", desc: "Complex 3D environment tracking inherently resolving rapid spatial tech limits." },
                        { name: "Full Stack Web Development", career: "Senior React/Node Dev, Tech Lead", desc: "Modern microservices natively scaling MERN/MEAN tech stacks." }
                    ].map(s => ({
                        name: s.name, price: "₹1,08,800 (Lum Sum) | ₹1,20,000 (Sem-Wise)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Pinnacle Deep Tech program actively spanning exactly " + s.name + ".",
                            "Offers immediate Bridge Courses automatically resolving non-IT background barriers.",
                            "Extensive execution completely reliant on Virtual Lab simulations scaling real world code."
                        ],
                        duration: "24 Months", eligibility: "Graduation (Mathematics tracked). Built-in bridge paths natively provided for non-IT backgrounds.", paymentDetails: generateTable(108800, 30000, 24)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹1,11,360 (Lum Sum) / ₹1,22,400 (Sem)",
                    specializations: [
                        { name: "General", career: "Business Trainee, Accounts Junior", desc: "Micro/Macro economics actively structured alongside corporate ethics and modern e-commerce." }
                    ].map(s => ({
                        name: s.name, price: "₹1,11,360 (Lum Sum) | ₹1,22,400 (Sem-Wise)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Comprehensive foundations accurately preparing massive PG MBA capabilities.",
                            "Fully interactive networks mapping direct corporate entry pipelines.",
                            "Easily accessible explicitly dropping pricing aggressively utilizing Lum-Sum matrices."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely verified from recognized board grids.", paymentDetails: generateTable(111360, 20400, 36)
                    }))
                },
                {
                    group: "UG", name: "BCA", duration: "36 Months", priceRange: "₹1,11,360 (Lum Sum) / ₹1,22,400 (Sem)",
                    specializations: [
                        { name: "General", career: "Junior Developer, Ops DB Trainee", desc: "Algorithm logics perfectly executing Python, Java, and standard SQL." }
                    ].map(s => ({
                        name: s.name, price: "₹1,11,360 (Lum Sum) | ₹1,22,400 (Sem-Wise)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict focus natively establishing elite programming syntaxes efficiently.",
                            "LPU's NAAC A++ / NIRF 31 framework entirely assuring highest global validity.",
                            "Extensively practical completely bypassing typical rote learning paradigms."
                        ],
                        duration: "36 Months", eligibility: "10+2 smoothly accessed from any verified board.", paymentDetails: generateTable(111360, 20400, 36)
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36 Months", priceRange: "₹89,760 (Lum Sum) / ₹98,400 (Sem)",
                    specializations: [
                        { name: "General", career: "Community Ops, Content Reviewer", desc: "Broad societal architectures natively leveraging history, political structure, and modern language lines." }
                    ].map(s => ({
                        name: s.name, price: "₹89,760 (Lum Sum) | ₹98,400 (Sem-Wise)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Huge integration naturally unlocking UPSC / public sector eligibility constraints safely.",
                            "Aggressive financial drops immediately setting Lum-sum bounds below ₹90K.",
                            "Heavy integration securely tracking community development capstone projects."
                        ],
                        duration: "36 Months", eligibility: "10+2 seamlessly accessed via any foundational stream.", paymentDetails: generateTable(89760, 16400, 36)
                    }))
                },
                {
                    group: "PG", name: "M.Com", duration: "24 Months", priceRange: "₹74,240 (Lum Sum) / ₹81,600 (Sem)",
                    specializations: [
                        { name: "General", career: "Audit Strategist, Risk Assessor", desc: "Macro corporate ledger strategies dynamically tracing taxation loops securely utilizing advanced economics." }
                    ].map(s => ({
                        name: s.name, price: "₹74,240 (Lum Sum) | ₹81,600 (Sem-Wise)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Detailed practical integration natively syncing advanced Corporate IT fundamentals.",
                            "Extremely cheap baseline mapping perfectly dropping below ₹75K absolutely upfront.",
                            "Master class architectures safely connecting LPU corporate networks seamlessly."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's degree accurately traversing Commerce or Economics parameters natively.", paymentDetails: generateTable(74240, 20400, 24)
                    }))
                },
                {
                    group: "PG", name: "MSc", duration: "24 Months", priceRange: "₹59,840 (Lum Sum) / ₹65,600 (Sem)",
                    specializations: [
                        { name: "Mathematics", career: "Quantitative Exec, Algorithm Tracker", desc: "Extensively heavy differential arrays naturally bypassing typical statistical limitations fundamentally." },
                        { name: "Economics", career: "Economic Policy Creator, Predictor", desc: "Socio-political impact tracking actively mapped over raw fiscal logic securely." }
                    ].map(s => ({
                        name: s.name, price: "₹59,840 (Lum Sum) | ₹65,600 (Sem-Wise)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict science configurations expertly aligning exactly via " + s.name + ".",
                            "Offers immediate virtual placement scales explicitly managed via LPU's backend.",
                            "Bypass almost all resistance exploiting hyper-low ₹59K comprehensive upfront cost matrices."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's ideally maintaining Mathematics/Economics safely.", paymentDetails: generateTable(59840, 16400, 24)
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹59,840 (Lum Sum) / ₹65,600 (Sem)",
                    specializations: [
                        { name: "English", career: "Copywriter, Editorial Director", desc: "Rigid syntax parsing effectively scaling towards highest-tier public publication streams natively." },
                        { name: "Pol Science", career: "Policy Director, Public Ops Junior", desc: "Constitutional matrices effectively scaling modern geographical treaties deeply." },
                        { name: "History", career: "Archive Coordinator, Senior Historian", desc: "Detailed timeline analysis flawlessly scaling global developmental logic naturally." },
                        { name: "Sociology", career: "Social Strategy Exec, Network Tracker", desc: "Human progression mapping inherently checking structural societal networks extensively." }
                    ].map(s => ({
                        name: s.name, price: "₹59,840 (Lum Sum) | ₹65,600 (Sem-Wise)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Unbeatable arts depth securely tracking explicit " + s.name + " specializations.",
                            "Mandatory dissertation / term paper research safely building powerful deep resumes.",
                            "Access LPU world-class library grids perfectly scaling pure remote limits explicitly."
                        ],
                        duration: "24 Months", eligibility: "Graduation mapped traversing absolutely any baseline discipline extensively.", paymentDetails: generateTable(59840, 16400, 24)
                    }))
                },
                {
                    group: "Diploma", name: "DBA", duration: "12 Months", priceRange: "₹35,000",
                    specializations: [
                        { name: "Diploma in business Administration", career: "Business Trainee, Office Assistant", desc: "Basic management frameworks scaling direct organizational skills for rapid hiring contexts." }
                    ].map(s => ({
                        name: s.name, price: "₹35,000", careerPath: s.career, syllabus: s.desc,
                        usps: ["Short duration 1 year format maximizing absolute return on time.", "Gain the native LPU networking limit completely at fraction cost."],
                        duration: "12 Months", eligibility: "10+2 comfortably mapped across any board.", paymentDetails: generateTable(31000, 17500, 12)
                    }))
                },
                {
                    group: "Diploma", name: "DCA", duration: "12 Months", priceRange: "₹35,000",
                    specializations: [
                        { name: "Diploma in computer Applications", career: "Data Entry Spc, Junior Tech Setup", desc: "Raw technology baseline teaching standard IT applications properly utilized daily." }
                    ].map(s => ({
                        name: s.name, price: "₹35,000", careerPath: s.career, syllabus: s.desc,
                        usps: ["Extensively mapped for non-tech background students requiring basic entry level computing.", "Highly affordable LPU certified structure bridging direct corporate limits."],
                        duration: "12 Months", eligibility: "10+2 completely matching minimum local passing parameters.", paymentDetails: generateTable(31000, 17500, 12)
                    }))
                }
            ]
        },
        url: "https://www.lpuonline.com/"
    };

    if (lpuIdx > -1) {
        universities.splice(lpuIdx, 1);
    }
    
    let realOldLpuIdx = universities.findIndex(u => u.name.toLowerCase().includes('lpu'));
    if (realOldLpuIdx > -1) {
        universities[realOldLpuIdx] = lpuData;
    } else {
        universities.push(lpuData);
    }

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("LPU Online strictly updated to user parameters! Exact loan partners, rankings, and structural details active!");
}

run().catch(console.error);
