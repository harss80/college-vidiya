import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let vguIdx = universities.findIndex(u => u.name.toLowerCase().includes('vivekanand') || u.name.toLowerCase().includes('vgu'));
    
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
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Semester Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>` : "";
      
        let annualFeeLine = annualFee ? `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Annual Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #f8f9fa); border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(139, 92, 246, 0.1); color: #7c3aed; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    💎 No Cost EMI Partner Programs Available
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #e2e8f0; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Parameter</th>
        <th style="padding: 10px 8px; font-weight: 600;">Amount / Details</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Application Amount</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹1,000</td>
      </tr>
      ${semFeeLine}
      ${annualFeeLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Full Total</td>
        <td style="padding: 12px 8px; color: #7c3aed; font-weight: 700;">${formatMoney(totalFeeStr)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #faf5ff; padding: 12px; border-radius: 6px; border-left: 4px solid #a855f7;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #6b21a8;">Payment Processing Specifics:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Fixed Exam Fees:</b> Exactly ₹1,500 payable manually per semester.</li>
      <li><b>EMI Partners:</b> Fibe, Greyquest, Propelled, Finz active natively.</li>
      <li><b>24 Months No-Cost EMI:</b> Fully available; exactly 2.5% static processing fee on applicable loan amount.</li>
      <li><b>Leniency:</b> ZERO advance EMI condition required to process loans!</li>
      <li><b>Term Matching:</b> Annual & Full Fee financing locks exactly to a 12-Month EMI tenure.</li>
    </ul>
  </div>
</div>`;
    }

    const vguData = {
        id: "vgu-online",
        name: "Vivekanand Global University (VGU Online)",
        logo: "https://ui-avatars.com/api/?name=VGU&background=8b5cf6&color=fff&size=150",
        location: "Jaipur, Rajasthan",
        type: "State Private University",
        level: ["UG", "PG"],
        budget: 150000,
        specializations: ["MBA", "MCA", "BBA", "BCA", "MA", "M.Sc", "BA"],
        accreditation: "NAAC A+ | UGC | DEB | AICTE | AIU | BCI",
        fees: "Semester / Annual | Highly Flexible EMI Framework",
        placement: "AI Profile Builder | 500+ Hiring Partners | Corporate Internships",
        eligibility: "UG: 10+2 | PG: Graduation",
        ranking: "NIRF 101 Above | Legacy Since 2012",
        exams: "Continuous Assessment (30%) + Proctored Exam (70%) | Passing: 40%",
        extendedDetails: {
            examination: "70:30 Evaluation Core: 30% mapped strictly to continuous assessment workloads, 70% deployed via proctored terminal exam networks. | Absolute passing requirement set precisely at 40%.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why VGU is Famous (Absolute Elite Metrics):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Global Tech Accreditations</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">VGU offers immediate access to hardcore, industry-recognized certificates. While doing your degree, you can seamlessly get certified by top tech giants like AWS, Redhat, and EXIN Netherlands.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Direct Corporate Internships</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">The university strongly pushes you into corporate internship programs. This gives you amazing hands-on field experience and lets you build a strong corporate network before you even graduate.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. AI Powered Profile Builder</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">VGU uses advanced algorithms to track your projects and immediately builds a highly professional, unbreakable CV for you so you stand out to employers.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Massive Government Approvals</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Your degree is completely safe and valid anywhere. VGU holds all the major accreditations at the same time: UGC, DEB, AICTE, AIU, and BCI.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. Start-Up Incubation Support</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">If you want to create your own business, VGU actively supports you with startup hubs built on real-world business tracking and logic scaling.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">6. Massive Placement Apparatus</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">You get put immediately into virtual placement drives strongly backed by a massive network of over 500+ core hiring partners.</p>
            </details>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = VGU</strong></p>
            </div>`,
            payment: "<b>Highly Flexible Finance Integration</b><br/>You have full freedom to handle your fees per Semester, Annually, or the Full Course.<br/>Registration requires a simple <b>₹1,000 Application Fee</b>. (A standard ₹1,500 manual exam fee is payable per semester).<br/><br/><b>Official Loan Parameters:</b> Top-tier partners including <b>Fibe, Greyquest, Propelled, and Finz</b> actively offer massive 24-month zero-cost EMIs. They require ZERO advance EMIs to process seamlessly.",
            programs: [
                {
                    group: "PG", name: "MBA", duration: "24 Months", priceRange: "₹1,50,000",
                    specializations: [
                        { name: "Human Resources", career: "HR Director, Talent Acquisition VP", desc: "Corporate scaling, labor policy, performance hierarchies, modern remote-HR architecture." },
                        { name: "Information Technology", career: "Tech Ops Consultant, Software Strategist", desc: "Digital transformations, enterprise server scaling logic, corporate network oversight mechanics." },
                        { name: "Healthcare Management", career: "Hospital Director, Health Sync Manager", desc: "Epidemiological scaling, medical facility logistics, clinical resource loops." },
                        { name: "International Business", career: "Global Expansion Lead, Alliance Director", desc: "Cross-border negotiation matrices, international fiscal policy grids." },
                        { name: "Marketing", career: "Marketing Executive VP, Branding Manager", desc: "Deep funnel analytics, programmatic conversions, consumer psychology logic." },
                        { name: "Finance", career: "Financial Auditor, Corporate Treasury Head", desc: "Advanced forensic tracking, global equity management, risk portfolio distribution." },
                        { name: "Agri Business", career: "Agricultural Ops Manager, Rural FinTech Head", desc: "Rural supply pipelines natively optimized via large-scale logistics arrays." },
                        { name: "Operation Management", career: "Supply Chain Director, Six Sigma Lead", desc: "Total Quality Management, deep logistics loops, warehouse systemic scaling." }
                    ].map(s => ({
                        name: s.name, price: "₹1,50,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Tailored intensely integrating corporate internships tracking specifically towards " + s.name + ".",
                            "Offers AWS/Redhat equivalent certification logics immediately enriching standard MBAs.",
                            "Features active AI-powered CV logic immediately preparing you for top 500+ hiring partners."
                        ],
                        duration: "24 Months", eligibility: "Graduation spanning any discipline cleanly.", paymentDetails: generateTable(150000, 24)
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,50,000",
                    specializations: [
                        { name: "AI", career: "Lead AI Dev, Algorithms VP", desc: "Deep neural networking frameworks perfectly bridging basic inputs into heavy machine automation arrays." },
                        { name: "Cloud Security & Information Technology", career: "Cloud Ops Lead, Cybersecurity Director", desc: "Advanced cloud scaling, AWS/Azure server mapping strictly integrating heavy Redhat security parameters." }
                    ].map(s => ({
                        name: s.name, price: "₹1,50,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict technical pathway perfectly aligning EXIN/AWS certifications natively into " + s.name + ".",
                            "Complete startup-support infrastructure dedicated purely to deep-tech masters.",
                            "Direct massive profile building metrics managed locally by proprietary AI tracking layers."
                        ],
                        duration: "24 Months", eligibility: "Graduation (Mathematics tracked favorably).", paymentDetails: generateTable(150000, 24)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹1,32,000",
                    specializations: [
                        { name: "General", career: "Business Operations Junior, Accounts Trainee", desc: "Accounting thresholds, global macro-financial logics." },
                        { name: "Digital Marketing", career: "SEO Analyst, Lead Campaign Admin", desc: "SEM architectures natively tracked over heavy ROI conversion matrices." },
                        { name: "Retail Management", career: "Regional Retail Ops, Outlet Analyst", desc: "Mass operations pipelines targeting D2C scaling mechanics." },
                        { name: "Fintech", career: "Fintech Algo Analyst, Digibank Underwriter", desc: "Banking API loops, cryptocurrency ledgers mapped via advanced Finz paths." }
                    ].map(s => ({
                        name: s.name, price: "₹1,32,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Extensive personalized learning explicitly spanning core " + s.name + " logics.",
                            "VGU Startup Support directly mapped assisting active business launches.",
                            "Access entirely to zero-advance EMI paths completely dropping stress metrics entirely."
                        ],
                        duration: "36 Months", eligibility: "10+2 from recognized educational board grids.", paymentDetails: generateTable(132000, 36)
                    }))
                },
                {
                    group: "UG", name: "BCA", duration: "36 Months", priceRange: "₹1,32,000",
                    specializations: [
                        { name: "AI", career: "Junior AI Model Tech, Data Ops", desc: "Introduction heavily focused towards predictive tech layers." },
                        { name: "Data Science", career: "Data Architect Junior, SQL Tracker", desc: "ETL pipelines spanning SQL, MongoDB logics natively." },
                        { name: "Cloud Technology & Information Security", career: "Junior AWS Analyst, Cybersecurity Exec", desc: "Server parameters seamlessly tracking threat matrices." },
                        { name: "Block Chain Technology", career: "Ledger Analyst, Crypto Dev Junior", desc: "Ethereum frameworks, smart-contract construction methodologies." },
                        { name: "UX", career: "UX Consultant, Design Sync Specialist", desc: "Visual tracking methodologies targeting absolute interaction conversions." }
                    ].map(s => ({
                        name: s.name, price: "₹1,32,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Direct inclusion unlocking industry recognized certifications matching " + s.name + " via Redhat.",
                            "Real-world lab projects consistently maintaining high execution standards natively.",
                            "Highly favorable loan paths mapping exactly 24 Months via Greyquest & Propelled."
                        ],
                        duration: "36 Months", eligibility: "10+2 from recognized educational board.", paymentDetails: generateTable(132000, 36)
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36 Months", priceRange: "₹72,000",
                    specializations: [
                        { name: "Economics", career: "Research Assistant, Fiscal Analyst", desc: "Microeconomics arrays scaling aggressively into macro-fiscal oversight policies." },
                        { name: "History", career: "Museum Archiver, Historical Educator", desc: "Timeline structural tracking natively spanning regional and global developmental phases." },
                        { name: "English", career: "Content Exec, Copywriter", desc: "Literature semantics perfectly mapped across modern publishing demands." },
                        { name: "Computer Applications", career: "Tech Ops Documenist, Front Facing Analyst", desc: "Hybrid pathways tracking basic logic sequences alongside humanities foundations." },
                        { name: "Public Policy & Development", career: "NGO Dev Agent, Policy Coordinator", desc: "Civic frameworks matching national systemic advancement objectives legally." },
                        { name: "International Relation", career: "Diplomatic Analyst Junior, Foreign Ops Coordinator", desc: "Multinational alliances, global trade restrictions natively evaluated." },
                        { name: "Political Science", career: "Govt Associate, Policy Editor", desc: "Structural analysis parsing governmental operations flawlessly." }
                    ].map(s => ({
                        name: s.name, price: "₹72,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Intensely personalized humanities structure entirely focused around " + s.name + ".",
                            "Provides immediate access to virtual placement drives scaling across 500+ partners.",
                            "Exceptionally low friction fee architecture matching perfectly alongside zero-advance limits."
                        ],
                        duration: "36 Months", eligibility: "10+2 spanning any discipline cleanly.", paymentDetails: generateTable(72000, 36)
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹72,000",
                    specializations: [
                        { name: "English", career: "Publishing Director, Lead Copy Ops", desc: "Deep intensive literary dissection aligning into massive corporate content hierarchies." }
                    ].map(s => ({
                        name: s.name, price: "₹72,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Robust Master-level communication logic perfectly aligning with corporate internships natively.",
                            "Integrated entirely inside the AI UI Profile builder enhancing massive recruitment odds.",
                            "Full eligibility metrics completely locked utilizing UGC, DEB, AIU limits securely."
                        ],
                        duration: "24 Months", eligibility: "Graduation efficiently passed strictly from recognized institutions.", paymentDetails: generateTable(72000, 24)
                    }))
                },
                {
                    group: "PG", name: "M.Sc", duration: "24 Months", priceRange: "₹72,000",
                    specializations: [
                        { name: "Mathematics", career: "Senior Statistician, Algorithm Coordinator", desc: "Elite mathematical modeling aggressively tracking predictability scales inherently utilized in Deep Tech logic." }
                    ].map(s => ({
                        name: s.name, price: "₹72,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Elite data-scaling foundation explicitly pairing well practically via AWS/Tech certifications.",
                            "Direct industry mentorship perfectly establishing academic networks efficiently.",
                            "Fully financed setups matching Propelled/Finz explicitly dropping initial advance metrics natively to zero."
                        ],
                        duration: "24 Months", eligibility: "B.Sc/B.A natively utilizing Mathematics as a primary node.", paymentDetails: generateTable(72000, 24)
                    }))
                }
            ]
        },
        url: "https://onlinevgu.com/"
    };

    if (vguIdx > -1) {
        // Clear out any old versions (e.g. vgu and vgu-online if multiple generated)
        universities.splice(vguIdx, 1);
    }
    
    // Find again just in case there were duplicates in the old dataset
    let realOldVguIdx = universities.findIndex(u => u.name.toLowerCase().includes('vgu'));
    if (realOldVguIdx > -1) {
        universities[realOldVguIdx] = vguData;
    } else {
        universities.push(vguData);
    }

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Vivekanand Global University correctly re-configured utilizing high-end UI mapped configurations!");
}

run().catch(console.error);
