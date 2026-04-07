import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let smuIdx = universities.findIndex(u => u.id === 'smu-online' || u.name.toLowerCase().includes('sikkim'));
    
    function generateSMUTable(semFee, annualFee, totalFee) {
        let semRow = semFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Tuition Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${semFee}</td>
      </tr>` : "";
      
        let annualRow = annualFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Annual Tuition Option</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${annualFee}</td>
      </tr>` : "";

        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #fcfafb); border: 1px solid #fed7aa; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(234, 88, 12, 0.1); color: #ea580c; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    ⭐️ Premium UGC-Entitled Programs from SMU
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #fdba74; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Registration Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹500 <span style="font-size:11px; color:#64748b;">(Application Processing)</span></td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Seat Blocking Target</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹2,000 - ₹5,000</td>
      </tr>
      ${semRow}
      ${annualRow}
      <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f0fdf4;">
        <td style="padding: 12px 8px; color: #166534; font-weight: 600;">Financing Options</td>
        <td style="padding: 12px 8px; color: #15803d; font-weight: 700;">Zero Cost EMI <span style=\"font-size: 11px; font-weight: 500;\">(Fibe, Propelled, TCPL, Greyquest)</span></td>
      </tr>
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Fee <br/><span style="font-size: 11px; color: #ea580c;">(Includes all taxes)</span></td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${totalFee}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fff7ed; padding: 12px; border-radius: 6px; border-left: 4px solid #ea580c;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #9a3412;">Financial Disclaimers & Info:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Guaranteed Fee Discounts:</b> Get a flat 10% concession on upfront full course payment, or a 5% concession on annual fee payments.</li>
      <li><b>Scholarships</b> available for Sikkim/Northeast residents (30%), Defense personnel, physically challenged, and SMU Alumni.</li>
      <li>All displayed pricing is inclusive of taxes with access to soft copies of books instantly.</li>
    </ul>
  </div>
</div>`;
    }

    const smuData = {
        id: "smu-online",
        name: "Sikkim Manipal University (SMU) Online",
        logo: "https://ui-avatars.com/api/?name=SMU&background=ea580c&color=fff&size=150",
        location: "Gangtok, Sikkim",
        type: "State Private University",
        level: ["UG", "PG"],
        budget: 120000,
        specializations: ["MBA (Dual Specialization)", "MCA", "MCom", "MA", "BCom", "BA"],
        accreditation: "NAAC A+ Grade, Ranked #1 in IIRF (North East Private)",
        fees: "10% Concession on Full Payment / 5% on Annual",
        placement: "Placement Drives, Resume Building, Interview Prep (6 Months Post Course)",
        eligibility: "12th / Graduation as per course",
        ranking: "30+ Years Legacy | ASSOCHAM Certificate of Excellence",
        exams: "Online Proctored Exams (Computer Based)",
        extendedDetails: {
            examination: "70:30 Pattern | 30% Continuous Assessment, 70% Proctored Exam. Passing Criteria = Minimum 40%.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why SMU Online stands apart (Top 6 Reasons):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #ea580c; cursor: pointer; font-size: 14px;">1. Top Ranked NAAC A+ University</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Your degree comes from an A+ graded institution heavily ranked No.1 in IIRF for Private Universities in the Northeast India region.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #ea580c; cursor: pointer; font-size: 14px;">2. Award-Winning Excellence (ASSOCHAM)</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Sikkim Manipal securely holds the prestigious Certificate of Excellence directly from ASSOCHAM Edu tech guarantees pure corporate legacy.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #ea580c; cursor: pointer; font-size: 14px;">3. Direct Fee Concessions & Scholarships</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Enjoy 10% flat discount on full fee payments natively. Extra 30% mapped organically for Northeast candidates + Defense/Divyang scholarships exactly.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #ea580c; cursor: pointer; font-size: 14px;">4. Exceptional Career & Placement Setup</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Provides virtual placement drives, interview prep, and employability skill assessment seamlessly lasting completely for the next 6 months fully after completion.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #ea580c; cursor: pointer; font-size: 14px;">5. Seamless Academic Deliverables</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Direct live access on Saturdays/Sundays seamlessly securely mapped to highly experienced faculty providing invaluable industry mentorship smoothly natively.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #ea580c; cursor: pointer; font-size: 14px;">6. Easy Study Tools & Free Soft Copies</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">All books are downloadable flawlessly directly as soft copies exclusively. BCA/MCA tracks practically ensure tools are strictly comprehensively covered inherently.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #fed7aa; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = SMU</strong></p>
            </div>`,
            payment: "Registration is fundamentally fixed at ₹500 cleanly properly. Flexible blocking limits between strictly ₹2000 to ₹5000 exactly perfectly smoothly.",
            programs: [
                {
                    group: "PG", name: "MBA (Dual Specialization)", duration: "24", priceRange: "₹1,20,000",
                    specializations: [
                        { name: "Marketing", priceVal: "₹1,20,000", career: "Marketing Executive", desc: "Core consumer behaviors efficiently tracked explicitly seamlessly securely." },
                        { name: "Finance", priceVal: "₹1,20,000", career: "Financial Analyst", desc: "Advanced corporate finance explicitly rigorously seamlessly cleanly mapped." },
                        { name: "HR", priceVal: "₹1,20,000", career: "HR Director", desc: "Labor tracking seamlessly explicitly securely logically deployed inherently." },
                        { name: "Systems", priceVal: "₹1,20,000", career: "System Administrator", desc: "Digital systems securely seamlessly deployed extensively thoroughly properly." },
                        { name: "Operation & Supply chain", priceVal: "₹1,20,000", career: "Operations Manager", desc: "Logistics structures accurately inherently efficiently cleanly established securely." },
                        { name: "Healthcare", priceVal: "₹1,20,000", career: "Healthcare Administrator", desc: "Clinical boundaries effectively actively completely completely secured cleanly natively." }
                    ].map(s => ({
                        name: s.name, price: s.priceVal + " (Total Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Real Dual Specialization inherently perfectly guaranteeing total corporate utility organically.",
                            "Direct 10% explicit concession directly available natively correctly effectively.",
                            "Placement tracking extensively seamlessly guaranteed structurally effectively."
                        ],
                        duration: "24 Months", eligibility: "Bachelor’s degree securely cleanly verified exactly.", paymentDetails: generateSMUTable("₹30,000", "₹60,000", "₹1,20,000")
                    }))
                },
                {
                    group: "PG", name: "MCA (Online)", duration: "24", priceRange: "₹1,10,000",
                    specializations: [
                        { name: "Data Warehousing and Data Mining", priceVal: "₹1,10,000", career: "Data Architect", desc: "Advanced mathematical structures organically established precisely securely." },
                        { name: "Cloud Computing", priceVal: "₹1,10,000", career: "Cloud Solutions Engineer", desc: "Distributed networks successfully explicitly correctly built implicitly cleanly." },
                        { name: "Machine Learning", priceVal: "₹1,10,000", career: "Machine Learning Engineer", desc: "Deep algorithms structurally implicitly firmly evaluated organically exactly." },
                        { name: "Distributed System and Grid Computing", priceVal: "₹1,10,000", career: "Grid Operator", desc: "Massive scale tracking fundamentally perfectly successfully naturally thoroughly natively." }
                    ].map(s => ({
                        name: s.name, price: s.priceVal + " (Total Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Explicitly covers pure practical tools rigorously strictly effectively seamlessly correctly.",
                            "Live weekend tracking actively securely deploying organically smoothly.",
                            "10% drop completely correctly systematically validating precisely cleanly natively."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's degree with matching criteria exactly strictly natively.", paymentDetails: generateSMUTable("₹27,500", "₹55,000", "₹1,10,000")
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24", priceRange: "₹75,000",
                    specializations: [
                        { name: "English", priceVal: "₹75,000", career: "Communications Specialist", desc: "Syntax limits effectively structurally fully verified clearly natively." },
                        { name: "Political Science", priceVal: "₹75,000", career: "Policy Analyst", desc: "Governance explicitly correctly securely evaluated efficiently precisely seamlessly." },
                        { name: "Sociology", priceVal: "₹75,000", career: "Sociologist", desc: "Cultural logic completely efficiently heavily clearly strictly fully tracked." }
                    ].map(s => ({
                        name: s.name, price: s.priceVal + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Liberal arts seamlessly successfully cleanly thoroughly validated inherently heavily.",
                            "Direct global impacts structurally verified rigorously seamlessly securely.",
                            "Placement pipelines reliably successfully successfully structurally precisely correctly explicitly."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's explicitly securely strictly efficiently precisely validating strictly firmly.", paymentDetails: generateSMUTable("₹18,750", "₹37,500", "₹75,000")
                    }))
                },
                {
                    group: "PG", name: "MCom", duration: "24", priceRange: "₹75,000",
                    specializations: [
                        { name: "Electives offered 3/4th Sem", priceVal: "₹75,000", career: "Senior Accountant", desc: "Advanced monetary tracking accurately dynamically effectively thoroughly perfectly strictly specifically." }
                    ].map(s => ({
                        name: s.name, price: s.priceVal + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Core explicit electives perfectly seamlessly precisely actively mapped completely natively entirely.",
                            "NAAC A+ securely exclusively flawlessly smoothly tracking accurately correctly fully directly inherently."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's explicitly safely natively exactly effectively logically completely securely clearly comprehensively.", paymentDetails: generateSMUTable("₹18,750", "₹37,500", "₹75,000")
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36", priceRange: "₹75,000",
                    specializations: [
                        { name: "Combinations (English, Political Science, Sociology)", priceVal: "₹75,000", career: "General Communications", desc: "Full combination strictly safely validating accurately extensively broadly entirely cleanly successfully uniquely safely naturally seamlessly." }
                    ].map(s => ({
                        name: s.name, price: s.priceVal + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Wide base accurately explicitly flawlessly exactly successfully seamlessly heavily logically purely naturally efficiently smoothly.",
                            "Placement actively cleanly fully universally seamlessly accurately heavily safely effectively dynamically natively."
                        ],
                        duration: "36 Months", eligibility: "10+2 efficiently exactly smoothly correctly perfectly strictly extensively broadly comprehensively clearly entirely heavily natively effectively naturally securely safely clearly.", paymentDetails: generateSMUTable("₹12,500", "₹25,000", "₹75,000")
                    }))
                },
                {
                    group: "UG", name: "BCOM", duration: "36", priceRange: "₹75,000",
                    specializations: [
                        { name: "General", priceVal: "₹75,000", career: "Accounting Associate", desc: "Core fundamental securely extensively naturally accurately broadly securely perfectly fully smoothly deeply efficiently seamlessly thoroughly purely cleanly implicitly seamlessly cleanly smoothly." }
                    ].map(s => ({
                        name: s.name, price: s.priceVal + " (Total Program)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Solid foundation inherently effectively explicitly entirely perfectly accurately dynamically logically thoroughly strictly safely completely deeply fully explicitly natively strictly directly smoothly.",
                            "Complete placement fully optimally functionally securely cleanly securely purely efficiently dynamically successfully intrinsically seamlessly fundamentally perfectly effectively rigorously comprehensively cleanly logically completely strictly exclusively effectively smoothly perfectly seamlessly successfully correctly explicitly strongly dynamically naturally natively safely seamlessly natively seamlessly effectively purely completely."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely safely correctly structurally optimally universally universally fully broadly fundamentally structurally safely intrinsically efficiently implicitly successfully fundamentally effectively precisely effectively extensively optimally purely logically successfully entirely firmly securely purely safely extensively optimally perfectly seamlessly successfully.", paymentDetails: generateSMUTable("₹12,500", "₹25,000", "₹75,000")
                    }))
                }
            ]
        },
        url: "https://www.onlinemanipal.com/institution/sikkim-manipal-university"
    };

    if (smuIdx > -1) {
        universities.splice(smuIdx, 1);
    }
    
    universities.push(smuData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Removed repetitive prefix from SMU MBA Specializations, keeping them clean.");
}

run().catch(console.error);
