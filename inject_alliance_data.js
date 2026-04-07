import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let allianceIdx = universities.findIndex(u => u.id === 'alliance-online' || u.name.toLowerCase().includes("alliance"));
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeBlock, durationMonths, emiPerMonth, emiMonths, specNote) {
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
        
        let emiLine = emiPerMonth ? `<tr style="border-bottom: 1px solid #f1f5f9; background-color: #f0fdf4;">
        <td style="padding: 12px 8px; color: #166534; font-weight: 600;">Zero Cost EMI</td>
        <td style="padding: 12px 8px; color: #15803d; font-weight: 700;">${emiPerMonth} <span style="font-size: 11px; font-weight: 500;">(for ${emiMonths})</span></td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fed7aa; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(37, 99, 235, 0.1); color: #1d4ed8; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏅 NAAC A+ Official Alliance Fee Structure
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #bfdbfe; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹5,000 <span style="font-size:11px; color:#64748b;">(One-Time Mandatory)</span></td>
      </tr>
      ${semline}
      ${annualLine}
      ${emiLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Lumpsum <br/><span style="font-size: 11px; color: #1d4ed8;">(Includes base tuition)</span></td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #eff6ff; padding: 12px; border-radius: 6px; border-left: 4px solid #3b82f6;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #1e3a8a;">Financial Disclaimers & Info:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Exam Fees:</b> Separately billed at ₹5,000/yr (MBA) and ₹3,000/yr (UG).</li>
      <li><b>EMI Coverage:</b> Multiple Zero Cost EMI options actively available perfectly mapped securely via Alliance networks.</li>
      ${specNote ? `<li><b>Additional:</b> ${specNote}</li>` : ""}
    </ul>
  </div>
</div>`;
    }

    const allianceData = {
        id: "alliance-online",
        name: "Alliance University (Online)",
        logo: "https://ui-avatars.com/api/?name=Alliance&background=2563eb&color=fff&size=150",
        location: "Bengaluru, Karnataka",
        type: "Private University",
        level: ["UG", "PG"],
        budget: 160000,
        specializations: ["MBA", "BBA", "B.Com"],
        accreditation: "NAAC A+, UGC Entitled, QS I-GAUGE Diamond Rating, DSIR Recognition",
        fees: "Zero Cost EMI / Semester / Full Options Available",
        placement: "Dedicated Career Counseling | Resume Building | Expert Lectures",
        eligibility: "12th / Graduation with Minimum 50% Marks (45% for SC/ST)",
        ranking: "Featured in International University Rankings",
        exams: "Term-end Online Proctored Examinations",
        extendedDetails: {
            examination: "Online Quizzes, Assignments, Term-end Proctored UI | Mandatory Internships integrated into learning.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Alliance University stands apart (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. QS I-GAUGE Diamond Rating</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Extremely rare Diamond rating explicitly validating elite academic frameworks globally natively.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Career Advancement Services directly embedded</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Resume workshops, virtual mock interviews natively embedded heavily directly preparing strict market placement loops.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Bangalore Technology Hub Network</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Directly tied to exactly 500+ tech network grids native to Bengaluru providing absolute tech market scale.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. DSIR Government Recognition</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Recognized rigorously explicitly by the governmental DSIR tracking heavily verifying rigorous research output effectively.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #bfdbfe; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = Alliance</strong></p>
            </div>`,
            payment: "Fees are accurately separated. Registration strictly at INR 5,000 constantly natively safely correctly deployed.",
            programs: [
                {
                    group: "PG", name: "MBA (Online)", duration: "24", priceRange: "₹1,60,000",
                    specializations: [
                        { name: "Business Analytics", priceVal: 160000, career: "Data Analyst, DB Exec", desc: "Predictive Business Modelling natively built." },
                        { name: "Marketing", priceVal: 160000, career: "Marketing Executive", desc: "Neuro Marketing applications and Digital Growth precisely integrated." },
                        { name: "Finance", priceVal: 160000, career: "Financial Strategist", desc: "Corporate Finance using AI securely handled entirely." },
                        { name: "HRM", priceVal: 160000, career: "HR Director", desc: "HR Analytics utilizing AI securely tracking." },
                        { name: "Operations", priceVal: 160000, career: "Operations Lead", desc: "AI Powered Lean Six Sigma perfectly mapped replacing standard TQM natively." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "QS I-GAUGE Diamond Rating securely structurally embedded perfectly.",
                            "Career Advancement module naturally providing tech mock interviews dynamically exactly.",
                            "Live global metrics heavily safely tracking cleanly."
                        ],
                        duration: "24 Months", eligibility: "Bachelor’s degree with a min of 50% marks (45% for SC/ST candidates).", paymentDetails: generateTable(s.priceVal, 24, "₹8,000 / month", "20 Months", "")
                    }))
                },
                {
                    group: "UG", name: "BBA (Online)", duration: "36", priceRange: "₹1,26,000",
                    specializations: [
                        { name: "Marketing", priceVal: 126000, career: "Marketing Entry Analyst", desc: "Integrated Marketing Communications securely structurally applied." },
                        { name: "Finance", priceVal: 126000, career: "Accountant Jr.", desc: "Corporate Tax Planning heavily verified entirely safely." },
                        { name: "HRM", priceVal: 126000, career: "HR Executive", desc: "Corporate Leadership and Indian Labor Laws purely embedded perfectly." },
                        { name: "Operations", priceVal: 126000, career: "Operations Staff", desc: "Total Quality Management seamlessly validated perfectly natively." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Heavy integration securely utilizing mandatory internships effectively natively.",
                            "Deep analytical skills fully directly dynamically tracking operations seamlessly."
                        ],
                        duration: "36 Months", eligibility: "10+2 mapping safely validating structurally natively comprehensively.", paymentDetails: generateTable(s.priceVal, 36, "₹5,250 / month", "24 Months", "")
                    }))
                },
                {
                    group: "UG", name: "B.Com", duration: "36", priceRange: "₹76,000",
                    specializations: [
                        { name: "Accounting and Taxation", priceVal: 76000, career: "Accountant", desc: "Strategic Cost handling directly strictly structurally natively tracked." },
                        { name: "Finance Management", priceVal: 76000, career: "Financial Associate", desc: "NCFM and NISM tests cleanly evaluated." },
                        { name: "Marketing Management", priceVal: 76000, career: "Marketing Assoc", desc: "E-Commerce Strategy explicitly naturally tracked." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Base Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Explicit 4th-year Honours expansion natively available safely dynamically applying perfectly.",
                            "Direct global impacts structurally verified rigorously."
                        ],
                        duration: "36 Months (or 48 Months for Hons)", eligibility: "10+2 securely safely correctly structurally matched.", paymentDetails: generateTable(s.priceVal, 36, "₹3,167 / month", "24 Months", "For the completely optional 4th Year Honours extension, an additional mapped fee of exactly ₹25,334 is applicable.")
                    }))
                }
            ]
        },
        url: "https://allianceonline.edu.in/"
    };

    if (allianceIdx > -1) {
        universities.splice(allianceIdx, 1);
    }
    
    universities.push(allianceData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Alliance University Online successfully updated to the standardized high-converting UI layout.");
}

run().catch(console.error);
