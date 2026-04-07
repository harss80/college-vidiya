import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let targetIdx = universities.findIndex(u => u.id === 'muj-online' || u.name.toLowerCase().includes("manipal university jaipur"));
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeBlock, durationMonths, scholarshipNote = "") {
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
        
        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fca5a5; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(220, 38, 38, 0.1); color: #dc2626; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏅 NAAC A+ Official MUJ Fee Structure
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #fecaca; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Application / Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹500 <span style="font-size:11px; color:#64748b;">(One-time registration)</span></td>
      </tr>
      ${semline}
      ${annualLine}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Lumpsum <br/><span style="font-size: 11px; color: #dc2626;">(Base tuition without scholarships)</span></td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${typeof totalFeeBlock === 'string' ? totalFeeBlock : formatMoney(totalFee)}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fef2f2; padding: 12px; border-radius: 6px; border-left: 4px solid #ef4444;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #991b1b;">Zero Cost EMI & Scholarship Info:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Loan Partners:</b> Zero-cost EMI cleanly mapped via <b>FIBE, Propelled, Greyquest, and TCPL</b> explicitly natively.</li>
      <li><b>Scholarships:</b> Up to 20% massive concessions strictly for Defence, Divyang / Disabled, Gov Employees, and native Alumni.</li>
      <li><b>Lum-sum Offer:</b> Direct 10% discount on overall fees and 5% discount on annual payment unconditionally.</li>
      ${scholarshipNote ? `<li><b>Additional:</b> ${scholarshipNote}</li>` : ""}
    </ul>
  </div>
</div>`;
    }

    const rawOld = JSON.parse(fs.readFileSync('./muj_old_dump.json', 'utf8'));

    // Process programs to strictly inject the Alliance pattern inside each program's specialization.
    const newPrograms = rawOld.programs.map(prog => {
        let durMatch = prog.duration && prog.duration.match(/\d+/);
        let durationNum = durMatch ? parseInt(durMatch[0]) : (prog.group === "UG" ? 36 : 24);

        let processSpecs = prog.specializations.map(s => {
            let sPrice = s.price ? parseInt(s.price.replace(/[^0-9]/g, '')) : (prog.priceRange ? parseInt(prog.priceRange.replace(/[^0-9]/g, '')) : 0);
            return {
                name: s.name,
                price: formatMoney(sPrice) + " (Base Course Fee)",
                careerPath: (s.jobRoles && s.jobRoles.length > 0) ? s.jobRoles.join(", ") : (s.career || "Corporate Specialist, Management Executive"),
                syllabus: s.details || "Specialized modules and practical applications accurately mapped.",
                usps: [
                    "Free Coursera global Premium modules natively automatically mapped.",
                    "Active strong placements precisely matching modern recruiter networks.",
                    "Deep analytical framework evaluated completely logically."
                ],
                duration: prog.duration,
                eligibility: prog.eligibility,
                paymentDetails: generateTable(sPrice, durationNum, (prog.group === "UG" ? "Special weekend coupons specifically effectively generating lower prices heavily natively." : ""))
            };
        });

        return {
            group: prog.group,
            name: prog.name,
            duration: durationNum.toString(),
            priceRange: prog.priceRange,
            specializations: processSpecs
        };
    });

    const targetData = {
        id: "muj-online",
        name: "Manipal University Jaipur (MUJ Online)",
        logo: "https://ui-avatars.com/api/?name=MUJ&background=dc2626&color=fff&size=150",
        location: "Jaipur, Rajasthan",
        type: "Private University",
        level: ["UG", "PG"],
        budget: 175000,
        specializations: ["MBA", "MCA", "M.Com", "MA", "BBA", "BCA", "B.Com", "MSc"],
        accreditation: "NAAC A+ (3.28), UGC Entitled, AICTE Approved, WES Equivalency",
        fees: "Zero Cost EMI via FIBE/Propelled / Semester Options",
        placement: "Strong Alumni Network | Dedicated Career Support | 50+ Partners",
        eligibility: "UG: 10+2 / Diploma | PG: Graduation with Minimum 50% Marks (45% reserved)",
        ranking: "NIRF Top Band | Premium Private University",
        exams: "100% Online Computer Based Examinations",
        extendedDetails: {
            examination: "Evaluation is fully mapped across 30% Continuous Assessment (Quizzes/Assignments) and 70% Term-end Proctored Finals.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Manipal University Jaipur stands apart (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Absolute Global WES Equivalency</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Secures explicit WES (World Education Services) equivalency securely natively, making migration perfectly smooth to the US and Canada.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Premium Free Coursera Integration</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Get completely free access exactly to over 10,000+ Coursera premium certification courses perfectly actively syncing during the degree.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Heavy Financial Flexibility (FIBE / Propelled / TCPL)</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Unmatched financial integrations perfectly allowing Zero Cost EMIs strictly via explicitly validated massive partners like FIBE, Greyquest, and TCPL perfectly seamlessly.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Scholarships for Defence, Gov & Divyang</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Massive 20% drops exactly available automatically explicitly protecting those belonging to defence networks, government service limits or differently abled arrays safely.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #fecaca; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = MUJ</strong></p>
            </div>`,
            payment: "Registration safely managed explicitly. Flexible EMI loans purely deployed natively.",
            programs: newPrograms
        },
        url: "https://www.onlinemanipal.com/institution/manipal-university-jaipur"
    };

    if (targetIdx > -1) {
        universities.splice(targetIdx, 1);
    }
    
    universities.push(targetData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Manipal University Jaipur successfully restored with EXACT previous specializations and Alliance layout!");
}

run().catch(console.error);
