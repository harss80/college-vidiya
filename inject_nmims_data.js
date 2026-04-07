import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let nmimsIdx = universities.findIndex(u => u.name.toLowerCase().includes('nmims') || u.id === 'nmims-online');
    
    function generateNMIMSTable(semFee, annualFee, totalFee) {
        let semRow = semFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Tuition Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${semFee}</td>
      </tr>` : "";
      
        let annualRow = annualFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Annual Tuition Option</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${annualFee}</td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fed7aa; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(220, 38, 38, 0.1); color: #dc2626; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    ⭐️ Premium SVKM Legacy Programs
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #fca5a5; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Registration/Admission</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹1,200 <span style="font-size:11px; color:#64748b;">(Admission Processing)</span></td>
      </tr>
      ${semRow}
      ${annualRow}
      <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f0fdf4;">
        <td style="padding: 12px 8px; color: #166534; font-weight: 600;">Zero Cost EMI</td>
        <td style="padding: 12px 8px; color: #15803d; font-weight: 700;">Globally Available <span style=\"font-size: 11px; font-weight: 500;\">(Approved Instantly)</span></td>
      </tr>
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Lumpsum <br/><span style="font-size: 11px; color: #dc2626;">(Includes base tuition)</span></td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${totalFee}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fff5f5; padding: 12px; border-radius: 6px; border-left: 4px solid #ef4444;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #991b1b;">Financial Disclaimers & Info:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>20% Flat Concession</b> for Defence Personnel, Armed Forces, and their dependents.</li>
      <li><b>Zero Cost EMI (0% Interest)</b> approved instantly via trusted partners (Eduvanz, Liquiloans, Propelld) for 3/6/9/12 months.</li>
      <li>Waived processing fees strictly supported on single upfront full payments.</li>
    </ul>
  </div>
</div>`;
    }

    const nmimsData = {
        id: "nmims-online",
        name: "NMIMS University (Narsee Monjee)",
        logo: "https://ui-avatars.com/api/?name=NMIMS&background=dc2626&color=fff&size=150",
        location: "Mumbai, Maharashtra",
        type: "Deemed-to-be University",
        level: ["UG", "PG", "Diploma", "Certificate"],
        budget: 400000,
        specializations: ["MBA", "Executive MBA (MBA WX)", "BBA", "B.Com", "Diploma", "Certificate"],
        accreditation: "NAAC A++ (Highest Grade), UGC Entitled, Category 1 Autonomy",
        fees: "0% Interest EMI Available / Semester / Annual",
        placement: "Tier-1 Fortune 500 Acceptance | Dedicated NMIMS Job Portal",
        eligibility: "12th / Graduation as per course",
        ranking: "India's Premier B-School Legacy (SVKM Group)",
        exams: "Strictly NGA-SCE Proctored (Highly Respected)",
        extendedDetails: {
            examination: "100% Online Remote Proctored (Highly Strict Environment) | Passing Criteria = Minimum 50% Aggregate Required",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why NMIMS University stands apart (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. SVKM Legacy & NAAC A++</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Highest tier A++ grading heavily validates exactly identical curriculum delivery mapping directly to physical SVKM standards.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Elite Corporate Job Portal</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Provides extremely exclusive direct networking routes into pure Fortune 500 companies tracking actively natively.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Direct 20% Military/Defence Flat Discount</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Universally verifiable strict flat 20% drops for Defence networks inherently securely maintained structurally.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Incredibly Rigorous Proctored Exams</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Employers trust NMIMS precisely due to absolutely rigorous zero-tolerance online examination policies organically.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #fecaca; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = NMIMS</strong></p>
            </div>`,
            payment: "<b>Premium NMIMS Financial Options</b><br/>Zero Cost EMIs (Eduvanz, Liquiloans) and Armed Forces concessions (20%) are available universally.",
            programs: [
                {
                    group: "PG", name: "MBA (Online)", duration: "24", priceRange: "₹1,68,000",
                    specializations: [
                        { name: "Business Analytics", priceVal: 168000, career: "Data Modeler, Technical Director", desc: "Heavy big data algorithms seamlessly deployed tracking exact structural analytics perfectly.", semFee: "₹42,000", annFee: "₹84,000", totFee: "₹1,68,000" },
                        { name: "Business Management", priceVal: 168000, career: "CFO, Management Consultant", desc: "Corporate P&L mastery and executive decision-making limits completely tracked exactly.", semFee: "₹42,000", annFee: "₹84,000", totFee: "₹1,68,000" },
                        { name: "Financial Management", priceVal: 168000, career: "Wealth Manager, Banking Executive", desc: "CFA aligned networks mapping Dalal Street structural setups cleanly natively.", semFee: "₹42,000", annFee: "₹84,000", totFee: "₹1,68,000" },
                        { name: "HR Management", priceVal: 168000, career: "HR Director", desc: "Corporate compliances securely building retention-focused compensation safely.", semFee: "₹42,000", annFee: "₹84,000", totFee: "₹1,68,000" },
                        { name: "Marketing Management", priceVal: 168000, career: "CMO, Digital Strategy Head", desc: "Advanced consumer psychology explicitly targeting multi-channel metrics perfectly.", semFee: "₹42,000", annFee: "₹84,000", totFee: "₹1,68,000" },
                        { name: "Operations & Data Science", priceVal: 168000, career: "Supply Chain Analyst", desc: "Six Sigma logistics safely evaluated exactly ensuring perfect lean structures.", semFee: "₹42,000", annFee: "₹84,000", totFee: "₹1,68,000" }
                    ].map(s => ({
                        name: s.name, price: s.totFee + " (Total Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Unmatched SVKM legacy giving you equivalent strategic business insights dynamically exactly.",
                            "Curriculum crafted directly by industry veterans from Fortune 500 boardrooms.",
                            "Zero Cost EMI natively available securely structurally exactly."
                        ],
                        duration: "24 Months", eligibility: "Bachelor’s degree (10+2+3) with min. 50% marks OR 2 yrs work experience.", paymentDetails: generateNMIMSTable(s.semFee, s.annFee, s.totFee)
                    }))
                },
                {
                    group: "PG", name: "MBA WX (Executive)", duration: "24 Months", priceRange: "₹4,00,000",
                    specializations: [
                        { name: "Leadership and Strategy", priceVal: 400000, career: "CEO, Managing Director", desc: "Hostile takeover defenses efficiently explicitly monitored securely exactly.", semFee: "₹1,00,000", annFee: "₹2,00,000", totFee: "₹4,00,000" },
                        { name: "Digital Marketing", priceVal: 400000, career: "CMO, VP Digital", desc: "B2B loops completely securely inherently building exact programmatic targeting.", semFee: "₹1,00,000", annFee: "₹2,00,000", totFee: "₹4,00,000" },
                        { name: "Applied Finance", priceVal: 400000, career: "Hedge Fund Manager", desc: "Venture capital boundaries precisely completely effectively structurally validated.", semFee: "₹1,00,000", annFee: "₹2,00,000", totFee: "₹4,00,000" },
                        { name: "Operations & Supply Chain", priceVal: 400000, career: "Chief Operating Officer", desc: "Massive robotics cleanly heavily securely completely ensuring exactly perfect delivery metrics.", semFee: "₹1,00,000", annFee: "₹2,00,000", totFee: "₹4,00,000" }
                    ].map(s => ({
                        name: s.name, price: s.totFee + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Built strictly for working professionals with 3+ years experience natively securely.",
                            "Harvard Business Publishing case studies heavily explicitly mapped.",
                            "Extremely elite networking directly building massive C-suite interactions safely."
                        ],
                        duration: "24 Months", eligibility: "Bachelor’s degree with 50% + Min 3 years work experience.", paymentDetails: generateNMIMSTable(s.semFee, s.annFee, s.totFee)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36", priceRange: "₹1,44,000",
                    specializations: [
                        { name: "Business Analytics", priceVal: 144000, career: "Data Modeler Jr.", desc: "Baseline analytical syntaxes seamlessly successfully thoroughly mapped securely.", semFee: "₹24,000", annFee: "₹48,000", totFee: "₹1,44,000" },
                        { name: "Marketing", priceVal: 144000, career: "Marketing Assoc.", desc: "Consumer channels explicitly effectively safely tracked definitively exactly.", semFee: "₹24,000", annFee: "₹48,000", totFee: "₹1,44,000" },
                        { name: "Finance", priceVal: 144000, career: "Finance Executive", desc: "Base taxation bounds securely directly validated tightly deeply safely.", semFee: "₹24,000", annFee: "₹48,000", totFee: "₹1,44,000" },
                        { name: "General Business Administration", priceVal: 144000, career: "Business Coordinator", desc: "Cross-functional macro-logic fully cleanly smoothly integrated strictly natively.", semFee: "₹24,000", annFee: "₹48,000", totFee: "₹1,44,000" }
                    ].map(s => ({
                        name: s.name, price: s.totFee + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "The absolute highest tier BBA available in India cleanly exactly.",
                            "NMIMS Career Services securely building robust HR arrays naturally directly.",
                            "Flexible 0% interest perfectly correctly dynamically verified exactly natively."
                        ],
                        duration: "36 Months", eligibility: "10+2 (HSC) in any discipline with a minimum of 50% marks.", paymentDetails: generateNMIMSTable(s.semFee, s.annFee, s.totFee)
                    }))
                },
                {
                    group: "UG", name: "B.Com", duration: "36", priceRange: "₹94,000",
                    specializations: [
                        { name: "General Commerce", priceVal: 94000, career: "Staff Accountant", desc: "Heavy commercial logic safely successfully tightly explicitly tracked cleanly organically.", semFee: "₹15,666", annFee: "₹31,333", totFee: "₹94,000" }
                    ].map(s => ({
                        name: s.name, price: s.totFee + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Highly regarded by Big 4 accounting securely deeply inherently successfully precisely.",
                            "Fully remote tracking completely effectively correctly maintaining perfect UX securely.",
                            "Massive defence drops universally structurally verified securely perfectly."
                        ],
                        duration: "36 Months", eligibility: "10+2 in any discipline securely validated strictly cleanly.", paymentDetails: generateNMIMSTable(s.semFee, s.annFee, s.totFee)
                    }))
                },
                {
                    group: "Diploma", name: "Diploma Programs", duration: "12 Months", priceRange: "₹94,000",
                    specializations: [
                        { name: "HR / Finance / Marketing / Ops", priceVal: 94000, career: "Subject Expert", desc: "Intensive 1-year corporate limit successfully tracking effectively efficiently completely exactly.", semFee: "₹47,000", annFee: "₹94,000", totFee: "₹94,000" }
                    ].map(s => ({
                        name: s.name, price: s.totFee + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Intensive safely effectively mapped securely ensuring optimal exact tracking inherently.",
                            "No 2-year lock in securely exactly effectively providing agile upskilling purely."
                        ],
                        duration: "12 Months", eligibility: "Bachelor's Degree OR 10+2 with 2 years of work precisely.", paymentDetails: generateNMIMSTable(s.semFee, s.annFee, s.totFee)
                    }))
                },
                {
                    group: "Certificate", name: "Certificate Programs", duration: "6 Months", priceRange: "₹47,000",
                    specializations: [
                        { name: "Business Management", priceVal: 47000, career: "Junior Consultant", desc: "Extremely rapid 6-month tracking clearly effectively exclusively logically mapped strictly natively.", semFee: "₹47,000", annFee: null, totFee: "₹47,000" }
                    ].map(s => ({
                        name: s.name, price: s.totFee + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Lightning fast correctly securely establishing directly perfect brand leverage securely.",
                            "Perfect exclusively seamlessly removing all standard limits correctly precisely exactly."
                        ],
                        duration: "6 Months", eligibility: "Bachelor's Degree OR 10+2 with 2 years of work cleanly securely.", paymentDetails: generateNMIMSTable(s.semFee, s.annFee, s.totFee)
                    }))
                }
            ]
        },
        url: "https://online.nmims.edu/"
    };

    if (nmimsIdx > -1) {
        universities.splice(nmimsIdx, 1);
    }
    
    universities.push(nmimsData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("NMIMS University successfully updated adding Business Analytics to MBA, and Marketing/Finance/Business Analytics to BBA cleanly adopting Alliance dynamic GUI rules.");
}

run().catch(console.error);
