import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let opjIdx = universities.findIndex(u => u.name.toLowerCase().includes('jindal') || u.id === 'op-jindal');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeStr, durationMonths) {
        let totalFee = typeof totalFeeStr === 'number' ? totalFeeStr : parseInt(totalFeeStr.toString().replace(/[^0-9]/g, '')) || 0;
        let semesters = durationMonths / 6;
        let semFee = totalFee > 0 && semesters > 0 ? Math.round(totalFee / semesters) : null;
        let annualFee = semFee ? semFee * 2 : null;
        
        let semline = semFee && semesters > 1 ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(semFee)}</td>
      </tr>` : "";
      
        let annualLine = annualFee && semesters > 2 ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Annual Fee (Yearly)</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${formatMoney(annualFee)}</td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fbcfe8; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(157, 23, 77, 0.1); color: #9d174d; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏅 Premium Executive Pricing
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
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹1,000</td>
      </tr>
      ${semline}
      ${annualLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Fee</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${typeof totalFeeStr === 'string' ? totalFeeStr : formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fff1f2; padding: 12px; border-radius: 6px; border-left: 4px solid #be123c;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #9f1239;">Financial Logistics:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>₹1,000</b> Seat Blocking Amount required strictly for holding the application.</li>
      <li><b>Loan Partners:</b> Seamless integration via <b>Propelled</b> & <b>Fibe</b>.</li>
      <li><b>Cardless EMI:</b> Instant No-Cost EMI structures processed dynamically online.</li>
    </ul>
  </div>
</div>`;
    }

    const opjData = {
        id: "op-jindal",
        name: "O.P. Jindal Global University",
        logo: "https://ui-avatars.com/api/?name=OPJ&background=9d174d&color=fff&size=150",
        location: "Sonipat, Haryana",
        type: "State Private University",
        level: ["PG"],
        budget: 150000,
        specializations: ["MBA"],
        accreditation: "NAAC A | AACSB Member | AACU Member | Institution of Eminence",
        fees: "Extremely Flexible via Fibe / Propelled EMIs",
        placement: "1-on-1 Mentorship | AI Job Recommendations | Virtual Job Fairs",
        eligibility: "UG with ≥50% | If below: JMAT, CAT, XAT, MAT, GMAT, GRE valid",
        ranking: "Institution of Eminence by Ministry of Education | Est. 2009",
        exams: "70:30 Model (70% Proctored Online, 30% Continuous Assessment)",
        extendedDetails: {
            examination: "70:30 Evaluation Core: 30% mapped safely to continuous internal assessment loops, while 70% relies on a secure proctored terminal exam. | Passing criteria strictly set at 40%.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why O.P. Jindal is Unmatched (Premium Benefits):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Recognized 'Institution of Eminence'</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Your degree comes with extreme prestige. O.P. Jindal is officially recognized by the Ministry of Education as an "Institution of Eminence," putting it in the top tier of Indian universities.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Rare 1-Year Fast Track MBA</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Instead of wasting two years, you get a fully recognized and powerful Master's degree completed exactly in 12 months, saving a massive amount of time.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Extra Business School Certificate</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Right after finishing this MBA, you earn an extra specialized certificate directly from the Jindal Global Business School to forcefully highlight your expertise on your resume.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. 100% Practical Capstone Projects</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">There's zero rote learning. Every single term includes hands-on experiential projects, massive capstone simulations, and real-world corporate assignments.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. Advanced AI Corporate Placements</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">They provide dedicated 1-on-1 coaching, AI-based job recommendations profiling your exact skills to recruiters, and massive live mock interviews.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">6. Global AACSB & AACU Accreditations</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">They hold elite international memberships with AACSB and AACU. This validates your exact degree completely if you want to work or scale overseas.</p>
            </details>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = OPJ</strong></p>
            </div>`,
            payment: "<b>Premium Fee Management Logic</b><br/>You are locking an extremely premium 1-Year Fast Track degree. Securing a seat requires only a fast <b>₹1,000 Blocking Amount</b> to lock the application.<br/><br/><b>Official Finance Nodes:</b> Completely integrated natively with <b>Propelled</b> and <b>Fibe</b>. These partners grant instant Cardless EMI structures, gracefully dropping massive financial pressure.",
            programs: [
                {
                    group: "PG", name: "1 Year MBA", duration: "12 Months", priceRange: "₹1,50,000",
                    specializations: [
                        { name: "Finance", career: "Investment Strategist, Corporate Financier", desc: "Advanced asset management, taxation structures, and deep quantitative equity modeling." },
                        { name: "Human Resources Management", career: "Talent Director, Corporate L&D Lead", desc: "Next-gen labor laws, remote team integration logic, and high-level compensation modeling." },
                        { name: "Marketing", career: "Brand VP, Digital Campaign Director", desc: "Omni-channel scaling, B2B consumer psychology, and predictive programmatic ROI analytics." },
                        { name: "Strategy and Leadership", career: "Consultant Chief, Executive Director", desc: "C-suite strategic scaling, corporate M&A evaluation schemas, and raw corporate governance." },
                        { name: "Supply Chain operations", career: "Global Supply Lead, Logistics Officer", desc: "Lean six-sigma deployments, international shipping restrictions, and large warehouse API loops." },
                        { name: "AI For business", career: "AI Product Manager, Tech Operations VP", desc: "Algorithmic corporate deployment, predictive AI utilization replacing archaic tracking models." },
                        { name: "Digital Finance", career: "FinTech Strategist, Digital Ledger Analyst", desc: "Crypto-asset paradigms, digital banking architecture, and modern ledger compliance." }
                    ].map(s => ({
                        name: s.name, price: "₹1,50,000 (Total)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Fast track 1-Year MBA completed precisely utilizing advanced modules focused strictly on " + s.name + ".",
                            "Gain an extra secondary certificate natively from the Jindal Global Business School instantly.",
                            "Direct 1-on-1 career coaching aggressively profiling you exactly into top-tier recruitment."
                        ],
                        duration: "12 Months", eligibility: "Graduation with ≥50%. (If below 50%, internal JMAT test required. CAT/XAT/MAT/GMAT/GRE/CMAT/NMAT absolutely valid).", paymentDetails: generateTable(150000, 12)
                    }))
                }
            ]
        },
        url: "https://www.upgrad.com/mba-opj-global-university/"
    };

    if (opjIdx > -1) {
        universities.splice(opjIdx, 1);
    }
    
    let realOldIdx = universities.findIndex(u => u.name.toLowerCase().includes('jindal'));
    if (realOldIdx > -1) {
        universities[realOldIdx] = opjData;
    } else {
        universities.push(opjData);
    }

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("O.P. Jindal Global University seamlessly linked and injected natively!");
}

run().catch(console.error);
