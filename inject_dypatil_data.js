import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let dyIdx = universities.findIndex(u => u.name.toLowerCase().includes('patil') || u.name.toLowerCase().includes('d.y.') || u.id === 'dy-patil-online');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFee, durationMonths, emiStarts) {
        let semesters = durationMonths / 6;
        let semFee = Math.round(totalFee / semesters);
        let annualFee = semFee * 2;
        
        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fbcfe8; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(157, 23, 77, 0.1); color: #9d174d; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    💎 Premium Financing Available
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #fce7f3; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Payment Allocation</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #fdf2f8;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Initial Blocking Amount</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹5,000</td>
      </tr>
      <tr style="border-bottom: 1px solid #fdf2f8;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>
      <tr style="border-bottom: 1px solid #fdf2f8;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Annual Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Fee (Lum Sum)</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fdf2f8; padding: 12px; border-radius: 6px; border-left: 4px solid #db2777;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #9d174d;">Loan Partners & Financial Details:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Official Loan Partners:</b> <b>Propelled & Avanse</b> perfectly integrated.</li>
      <li><b>0% No-Cost EMI:</b> Fully available on Semester and Full fee payments!</li>
      <li><b>Estimated EMI:</b> Paths readily begin around <b>~${formatMoney(emiStarts)}/mo</b> securely.</li>
      <li><b>Flexibility:</b> Massive loan accessibility cleanly bypassing rigid heavy upfront stresses completely.</li>
    </ul>
  </div>
</div>`;
    }

    const dyData = {
        id: "dy-patil-online",
        name: "D. Y. Patil Vidyapeeth (DPU Online)",
        logo: "https://ui-avatars.com/api/?name=DPU&background=9d174d&color=fff&size=150",
        location: "Pune, Maharashtra",
        type: "Deemed to be University",
        level: ["UG", "PG"],
        budget: 189400,
        specializations: ["MBA", "BBA", "MCA"],
        accreditation: "NAAC A++ | NIRF 44th | UGC-Entitled | Category 1 Listed",
        fees: "₹1,40,000 - ₹1,89,400",
        placement: "Extensive Placement Assistance",
        eligibility: "UG: 10+2 | PG: Graduation with 50%",
        ranking: "NIRF Ranked 44th | ISO Ranked",
        exams: "Formative (30%) + Summative (70%) | Passing: 40%",
        extendedDetails: {
            examination: "30% Formative (Assignment Based) | 70% Summative (Proctored Based) | Passing Criteria = 40%",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why D. Y. Patil (DPU) is Globally Famous & Unique:</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Elite Global Ties (Harvard, MIT, edX)</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Through a special partnership with <strong style="color:#0f172a;">edX</strong>, students get access to over 1,000+ extra certification courses. These certificates come directly from top global colleges like Harvard University, MIT, Columbia University, and New York University.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Top National Rankings (NAAC A++, NIRF 44th)</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">D. Y. Patil is officially recognized as a <strong style="color:#0f172a;">Category 1 University</strong> by the government. It holds the highest possible <strong style="color:#0f172a;">NAAC A++</strong> grade and is proudly ranked <strong style="color:#0f172a;">44th in India by NIRF</strong>.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. High Academic Credits</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">The BBA program gives you an impressive <strong style="color:#0f172a;">144 credits</strong>, and the MBA gives you <strong style="color:#0f172a;">102 credits</strong>. These high numbers make it super easy for your degree to be recognized globally (like by WES) if you plan to work or move abroad.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Simple Step-by-Step Exams</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">To ensure you actually understand the subject, the university uses an easy 3-step learning system: <strong style="color:#0f172a;">1. Self-Assessments</strong> (for practice), <strong style="color:#0f172a;">2. Formative Assignments</strong>, and <strong style="color:#0f172a;">3. Main Term-End Exams</strong>.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. Live Corporate Networking</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">You aren't just watching boring recorded videos. The program forces students to engage in live <strong style="color:#0f172a;">Group Discussions</strong> with teachers and massive networking events via live chats so you build real corporate connections.</p>
            </details>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = DPU</strong></p>
            </div>`,
            payment: "<b>Semester & Full Course Fee Formats Evaluated</b><br/>DPU manages a highly streamlined intake format. Registration securely blocks a seat utilizing precisely a <b>₹5,000 Blocking Amount</b> natively.<br/><br/><b>Official Loan Parameters:</b> Propelled and Avanse are fully integrated natively generating excellent No-Cost EMI setups. This ensures massive accessibility explicitly aligning zero-interest splits reliably on both semester and full payments.",
            programs: [
                {
                    group: "PG", name: "MBA", duration: "24 Months", priceRange: "₹1,89,400",
                    specializations: [
                        { name: "Marketing Management", career: "CMO, Brand Director", desc: "Digital funnels natively tracked, advanced Gen-AI generated consumer insights." },
                        { name: "Human Resource Management", career: "CHRO, Talent VP", desc: "Workforce topologies strongly mapped across remote/local borders natively." },
                        { name: "Finance Management", career: "CFO, Investment Lead", desc: "Quantitative finance rigorously tied to real-world capital market simulations." },
                        { name: "IT Management", career: "CIO, Systems Architect", desc: "Software Project Management explicitly aligned via deep Ivy League frameworks." },
                        { name: "Project Management", career: "Ops Director, Project Strategist", desc: "Agile, Six Sigma topologies strongly scaled for massive multinational deployment." },
                        { name: "Operations Management", career: "Supply Director, SCM Head", desc: "Corporate scaling explicitly tracked over global logistical challenges natively." },
                        { name: "HAHM", career: "Hospital CEO, Clinical Lead", desc: "Specialized administrative tracks natively plotting clinical services & Hospital Planning." },
                        { name: "International Business Management", career: "Global Strategy Exec", desc: "EXIM loops elegantly designed bridging Indian limits universally." },
                        { name: "FinTech Management", career: "Fintech Leader, Algo Exec", desc: "Crypto/DeFi principles structurally introduced matching real-world APIs." },
                        { name: "Business Analytics Management", career: "Data VP, Analytics Strategist", desc: "Big Data mapping inherently predicting global enterprise shifts natively." },
                        { name: "AI & ML", career: "AI Leader, Algorithm Dir", desc: "Absolute pinnacle track. 25+ AI tools completely mapping modern neural deployment." },
                        { name: "LSCM", career: "Logistics Exec, Warehouse Admin", desc: "Logistics, Materials, and massive corporate Supply Chain pipelines effectively." },
                        { name: "Block Chain Management", career: "Web3 Executive", desc: "Decentralized topologies safely scaled to global contract logistics." },
                        { name: "Digital Marketing Management", career: "Digital Strategist, Ad Spend Mgr", desc: "Programmatic scaling spanning complex global marketing grids securely." },
                        { name: "Agri business Management", career: "Agri Operations Leader", desc: "High-tier scaling traversing vast supply lines targeting the agricultural nexus." }
                    ].map(s => ({
                        name: s.name, price: "₹1,89,400 (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Rigorous 102 Credit format unlocking massive global academic tracking correctly.",
                            "MBA structure uniquely integrates wide Generic Electives for deep cross-discipline tracking.",
                            "Direct integration natively providing Harvard, MIT, Columbia edX modules securely."
                        ],
                        duration: "24 Months", eligibility: "Bachelor’s traversing any stream heavily maintaining 50% benchmarks.", paymentDetails: generateTable(189400, 24, 7892)
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,40,000",
                    specializations: [
                        { name: "General Computer Applications", career: "Systems Engineer, IT Consultant", desc: "Massively scaled database algorithms beautifully bridging raw syntax into global software products." }
                    ].map(s => ({
                        name: s.name, price: "₹1,40,000 (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Rigorous curriculum scaling perfectly via edX 1000+ certification collaborations strictly.",
                            "Direct corporate group discussions explicitly built alongside live interactions seamlessly.",
                            "Access to job placement assistance securely capturing massive MNC limits natively."
                        ],
                        duration: "24 Months", eligibility: "Any Graduate securely tracking a 50% baseline (Mathematics required).", paymentDetails: generateTable(140000, 24, 5833)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months (or 4 Years NEP)", priceRange: "₹1,45,400",
                    specializations: [
                        { name: "IT & System", career: "IT Ops Assistant", desc: "Foundational software parameters actively structuring basic tech logic bounds." },
                        { name: "Marketing Mgmt.", career: "Marketing Executive", desc: "Consumer psychology rigorously scaling digital marketing thresholds." },
                        { name: "International Business", career: "EXIM Jr Officer", desc: "Trade compliance inherently capturing cross-border logistics safely." },
                        { name: "HR", career: "HR Junior Coordinator", desc: "Core organizational matrices beautifully indexing heavy corporate compliance." },
                        { name: "Finance", career: "Financial Modeler Trainee", desc: "Capital loops strongly indexing raw corporate wealth mechanics." },
                        { name: "Retail Management", career: "Store Front Planner", desc: "Macro physical retail setups carefully mapped for Indian footprints." },
                        { name: "BFSI", career: "Underwriter Junior", desc: "Banking sectors specifically matched mapping insurance algorithms beautifully." },
                        { name: "E-commerce Management", career: "Digital Retail Exec", desc: "D2C limits comprehensively resolving basic digital storefront operations." },
                        { name: "Shipping and Logistics Management", career: "Marine Logistics Assoc", desc: "Highly niche track extensively plotting port timelines natively." }
                    ].map(s => ({
                        name: s.name, price: "₹1,45,400 (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict 144 Credit payload thoroughly validating deep Bachelor-tier proficiency natively.",
                            "ISO Ranked and Category 1 securely validating massive public acceptance cleanly.",
                            "Strongly linked naturally utilizing real-time live chat GD formats safely."
                        ],
                        duration: "36 Months (NEP Supported)", eligibility: "10+2 efficiently spanning English benchmarks reliably.", paymentDetails: generateTable(145400, 36, 4038)
                    }))
                }
            ]
        },
        url: "https://www.dypatilonline.com/"
    };

    if (dyIdx > -1) {
        universities.splice(dyIdx, 1);
    }
    
    let realOldDyIdx = universities.findIndex(u => u.name.toLowerCase().includes('patil') || u.name.toLowerCase().includes('d. y.'));
    if (realOldDyIdx > -1) {
        universities[realOldDyIdx] = dyData;
    } else {
        universities.push(dyData);
    }

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("D. Y. Patil Vidyapeeth UI & Content completely modernized aligned to user standards!");
}

run().catch(console.error);
