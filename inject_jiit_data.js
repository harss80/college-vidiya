import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let targetIdx = universities.findIndex(u => u.name.toLowerCase().includes('jaypee') || u.id === 'jiit-online');
    
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

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #c7d2fe; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(79, 70, 229, 0.1); color: #4338ca; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏆 Standard Institutional Fee Limits
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #e0e7ff; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹1,000 <span style="font-size:11px; color:#475569;">(Included in Program Fee)</span></td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Examination Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹1,500 / Semester</td>
      </tr>
      ${semline}
      ${annualLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Core Program Lumpsum</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #f8fafc; padding: 12px; border-radius: 6px; border-left: 4px solid #6366f1;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #4338ca;">GrayQuest Exact EMI & Scholarship Rules:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Zero Cost EMI:</b> Official Loan Partner GrayQuest provides Zero Cost EMI (1st EMI to be paid in advance).</li>
      <li><b>Discounts:</b> Strictly NO discount on one-time lump-sum payment (as of now).</li>
      <li><b>Eligible Scholarships:</b> Available exclusively for Defense Seva Bal, Jaypee Alumni, and Jaypee Employees.</li>
      <li><b>Merit Rule:</b> ❌ No merit-based scholarship limits currently trackable natively.</li>
    </ul>
  </div>
</div>`;
    }

    const jiitData = {
        id: "jiit-online",
        name: "Jaypee Institute of Information Technology (JIIT)",
        logo: "https://ui-avatars.com/api/?name=Jaypee+Institute&background=0284c7&color=fff&size=150",
        location: "Noida, Uttar Pradesh",
        type: "Deemed-to-be University (in 2004)",
        level: ["UG", "PG"],
        budget: 139000,
        specializations: ["MBA", "BBA"],
        accreditation: "NAAC A | NIRF 101-150 | WES Approved | Globally Recognised Qualification",
        fees: "Semester, Annual & Full | GrayQuest EMI Powered",
        placement: "Top 100 Guaranteed | No Backlogs CGPA Focused",
        eligibility: "UG: 10+2 | PG: Undergraduation specific base",
        ranking: "Legacy 2001 | High Industry Brand Credibility",
        exams: "Blended 70:30 Evaluation Model",
        extendedDetails: {
            examination: "30% Continuous Assessment and 70% Proctored Online Exams. Passing Criteria precisely maintained at 40%.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Jaypee Institute stands apart (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Strong Legacy & Market Value</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Leverages the immensely strong legacy and massive market value established centrally by JIIT Noida natively dating back to 2001.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Elite Faculty from IIMs & IITs</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Faculty explicitly sourced strictly from absolute top-tier institutions including IIMs, IITs & top B-Schools ensuring pure rigor.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Guaranteed Placement Constraints</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Provides a specifically Guaranteed placement architecture actively restricted to the Top 100 students (T&C apply).</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Zero Backlog Placement Rule</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Placement guarantees are intensely mapped utilizing strict CGPA compliance metrics and absolutely zero backlogs permitted.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. Additional High-Tier Certifications</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Secure directly included Additional certification courses mapping Harvard, HRFY AI, and Grammarly frameworks entirely free of cost.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">6. International LMS Access</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Benefit enormously from International LMS access explicitly after admission mapping entirely without any extra cost metrics.</p>
            </details>
            
            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">7. Premium Campus Visitation Limits</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Campus visit option available securely anytime seamlessly linking distance mode logic actively into offline physical nodes.</p>
            </details>
            
            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">8. Seamless Library & Faculty Direct Connect</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Secure Library access & faculty interactions completely provided natively specifically without any extra charging layers explicitly.</p>
            </details>
            
            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">9. Physical Welcome Kit Integration</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Every single student is provided with a heavy Premium Welcome Kit worth approx. ₹4,000 actively supporting setup arrays natively.</p>
            </details>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #e0e7ff; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = JIIT</strong></p>
            </div>`,
            payment: "JIIT explicitly mandates the registration effectively at INR 1,000 completely absorbed/included inside the program fee perfectly. Examination fees are rigorously set to exactly INR 1,500/- per semester. Payment is inherently mapped utilizing Zero Cost EMI entirely handled via GrayQuest ensuring the 1st EMI is paid distinctly in advance natively.",
            programs: [
                {
                    group: "PG", name: "MBA", duration: "24 Months", priceRange: "₹1,75,000",
                    specializations: [
                        { name: "HRM", career: "HR Director, Staff Strategy VP", desc: "Compliance algorithms completely scaling modern corporate workforce distributions natively." },
                        { name: "Financial Management", career: "Auditor, Finance Modeler", desc: "Advanced forensic forecasting seamlessly matching corporate treasury frameworks." },
                        { name: "Marketing", career: "Marketing Executive VP, Branding Manager", desc: "Heavy ROI conversion matrices tracking B2B pipelines and search architectures natively." },
                        { name: "Information Technology & Business Analytics", career: "Operations Tech Head, DB Analytics VP", desc: "Data architectures mapping cleanly aligning heavy corporate pipelines flawlessly." }
                    ].map(s => ({
                        name: s.name, price: "₹1,75,000 (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict Project-Based Case Studies aligning management explicitly via Learning through Simulations.",
                            "Taught exclusively by native Faculty from IIMs, IITs & top B-Schools identically.",
                            "Utilizing GrayQuest Zero Cost EMI tracking limits natively."
                        ],
                        duration: "24 Months", eligibility: "Graduation mapping absolutely any baseline discipline successfully.", paymentDetails: generateTable(175000, 24)
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹1,39,000",
                    specializations: [
                        { name: "General", career: "Operations Exe, Team Scaler", desc: "Microeconomics seamlessly mapping foundational business structures seamlessly utilizing Harvard and Grammarly certifications natively." }
                    ].map(s => ({
                        name: s.name, price: "₹1,39,000 (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Rigorous Learning through Simulations natively tracking JIIT standard limits.",
                            "Direct GrayQuest EMI arrays pushing exactly Zero Cost metrics.",
                            "Proctored Online Exams explicitly maintaining 70:30 parameters actively ensuring strong brand credibility."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely mapped utilizing explicitly verified state boards.", paymentDetails: generateTable(139000, 36)
                    }))
                }
            ]
        },
        url: "https://www.jiitonline.com/"
    };

    if (targetIdx > -1) {
        universities.splice(targetIdx, 1);
    }
    
    universities.push(jiitData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Jaypee Institute of Information Technology (JIIT) completely re-injected using explicit data markers safely!");
}

run().catch(console.error);
