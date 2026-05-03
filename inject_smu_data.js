import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let targetIdx = universities.findIndex(u => u.name.toLowerCase().includes('sikkim') || u.id === 'smu' || u.id === 'sikkim-manipal');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFee, durationMonths, originalTotalFee = null) {
        let semesters = durationMonths / 6;
        let semFee = totalFee / semesters;
        let annualFee = semFee * 2;
        let originalSemFee = originalTotalFee ? originalTotalFee / semesters : null;
        let originalAnnualFee = originalTotalFee ? (originalTotalFee / semesters) * 2 : null;
        
        let semFeeStr = originalSemFee ? `${formatMoney(semFee)} <strike style="color:#94a3b8; font-size:12px;">${formatMoney(originalSemFee)}</strike>` : formatMoney(semFee);
        let annualFeeStr = originalAnnualFee ? `${formatMoney(annualFee)} <strike style="color:#94a3b8; font-size:12px;">${formatMoney(originalAnnualFee)}</strike>` : formatMoney(annualFee);
        let lumpsumFeeStr = originalTotalFee ? `${formatMoney(totalFee)} <strike style="color:#94a3b8; font-size:12px;">${formatMoney(originalTotalFee)}</strike>` : formatMoney(totalFee);

        return `<div style="font-family: 'Inter', sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
  <div style="background: #f1f5f9; color: #475569; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px; border: 1px solid #cbd5e1;">
    Standard Institutional Fee Structure
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #e2e8f0; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Structure Component</th>
        <th style="padding: 10px 8px; font-weight: 600;">Investment Matrix</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Pay Semester-wise</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${semFeeStr}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Pay Annually (Yearly)</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${annualFeeStr}</td>
      </tr>
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Total Course Lumpsum <br/><span style="font-size: 11px; color: #64748b;">(One-Time Fee)</span></td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700; font-size: 16px;">${lumpsumFeeStr}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #f8fafc; padding: 12px; border-radius: 6px; border-left: 4px solid #94a3b8; border: 1px solid #e2e8f0; border-left-width: 4px;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #334155;">Financial Breakdown & Validations:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>Scholarship Logic:</b> <b>Up to 30% Scholarships</b> are active for early enrollments, Defense, Divyaang, and NE Region candidates.</li>
      <li><b>Upfront Payment Discount:</b> Up to 10% explicit concession natively applied on full upfront payments cleanly bypassing overall fee limits.</li>
      <li><b>Financial Partners:</b> 0% No-Cost EMI Native Support is accessible directly from <b>₹2,083/month</b> via top financing peers securely.</li>
    </ul>
  </div>
</div>`;
    }

    const smuData = {
        id: "smu",
        name: "Sikkim Manipal University (SMU)",
        logo: "https://ui-avatars.com/api/?name=SMU&background=0f172a&color=fff&size=150",
        location: "Gangtok, Sikkim",
        type: "Private University",
        level: ["UG", "PG"],
        budget: 120000,
        specializations: ["MBA", "MCA", "M.Com", "MA", "BBA", "B.Com", "BA"],
        accreditation: "NAAC A+ | UGC Entitled",
        fees: "₹75,000 - ₹1,20,000",
        placement: "EY | Goldman Sachs | LTIMindtree | Sutherland",
        eligibility: "UG: 10+2 | PG: Graduation (50% min)",
        ranking: "30+ Years Legacy | 6 Lakhs+ Alumni Network",
        exams: "Online Proctored Examinations",
        extendedDetails: {
            examination: "Online Proctored End-Term Exam. High flexibility in learning and evaluations matching top global standards securely.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Sikkim Manipal University is Premium:</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Global Accreditations & NAAC A+</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">SMU is thoroughly UGC-entitled and carries a pristine <b>NAAC A+ grade</b>, validating its massive 30-year legacy of quality education seamlessly globally.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Premium Corporate Placements</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Direct hiring tie-ups perfectly aligned with elite tier firms: <b>EY, Goldman Sachs, LTIMindtree, NoBroker, and Manipal Hospitals</b> securely accelerating growth.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Upfront Scholarships & Pricing Edge</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Absolute pricing transparency explicitly granting up to <b>10% explicit concession</b> natively applied on full upfront payments alongside 30% regional scholarships perfectly.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Massive 6 Lakh+ Alumni Architecture</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Students directly tap into a monumental global network precisely tracking 6,000,00+ alumni seamlessly navigating advanced placements effortlessly.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #e2e8f0; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = SMU</strong></p>
            </div>`,
            payment: "<b>Fee Formats Evaluated:</b> SMU ensures total transparency dynamically deploying explicit 10% fee concessions on Lumpsum MBA/MCA payments natively.<br/><br/><b>Financial Partners:</b> Broad 0% No-Cost EMI setups are fully supported via standardized banking channels scaling down to exactly ₹2,083/month securely.",
            programs: [
                {
                    group: "PG", name: "MBA (Dual Specialization)", duration: "24 Months", priceRange: "₹1,20,000 (Lumpsum) / ₹30,000 (Sem)",
                    specializations: [
                        { name: "Marketing", priceVal: 120000, career: "Marketing Executive" },
                        { name: "Finance", priceVal: 120000, career: "Finance Manager" },
                        { name: "HR", priceVal: 120000, career: "HR Head" },
                        { name: "Systems", priceVal: 120000, career: "IT Systems Architect" },
                        { name: "Healthcare", priceVal: 120000, career: "Healthcare Administrator" },
                        { name: "Operations & SCM", priceVal: 120000, career: "Supply Chain Head" }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal), careerPath: s.career, syllabus: "Dual specialization allowing explicit combination of functional and core domain strategies.",
                        usps: ["NAAC A+ UGC Entitled Dual Specialization.", "10% Lumpsum payment concession available natively.", "EMI starting sharply at ₹5,000/month."],
                        duration: "24 Months", eligibility: "Bachelor’s degree with minimum 50% marks (45% for reserved) perfectly.",
                        paymentDetails: generateTable(s.priceVal, 24, 133333),
                        brochure: null
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,10,000 (Lumpsum) / ₹27,500 (Sem)",
                    specializations: [
                        { name: "General", priceVal: 110000, career: "Software Engineer, Full Stack Dev", desc: "Core IT architecture natively aligning massive algorithmic setups securely." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal), careerPath: s.career, syllabus: s.desc,
                        usps: ["Direct bridge courses implicitly handling non-mathematics backgrounds seamlessly.", "10% Lumpsum payment concession scaling costs deeply.", "EMI scaling at ₹4,583/month."],
                        duration: "24 Months", eligibility: "Bachelor’s degree (Bridge course perfectly mapped for non-IT backgrounds).",
                        paymentDetails: generateTable(s.priceVal, 24, 122222),
                        brochure: null
                    }))
                },
                {
                    group: "PG", name: "MCom", duration: "24 Months", priceRange: "₹75,000 (Lumpsum) / ₹18,750 (Sem)",
                    specializations: [
                        { name: "General", priceVal: 75000, career: "Accountant, Finance Analyst", desc: "Deep financial scaling explicitly tracking advanced accounting parameters safely." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal), careerPath: s.career, syllabus: s.desc,
                        usps: ["NAAC A+ validation securely mapping top-tier financial firm hiring natively.", "10% upfront payment discount actively bypassing baseline constraints.", "EMI perfectly aligned at ₹3,125/month."],
                        duration: "24 Months", eligibility: "Bachelor's degree seamlessly verified.",
                        paymentDetails: generateTable(s.priceVal, 24, 83333),
                        brochure: "/brochures/SMU-MCOM-Domestic-Brochure.pdf"
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹75,000 (Lumpsum) / ₹18,750 (Sem)",
                    specializations: [
                        { name: "English", priceVal: 75000, career: "Editor, Content Strategist" },
                        { name: "Political Science", priceVal: 75000, career: "Policy Analyst, Public Sector" },
                        { name: "Sociology", priceVal: 75000, career: "Social Researcher, HR" }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal), careerPath: s.career, syllabus: "Intensive humanities core rigorously building public and policy-driven intellect securely.",
                        usps: ["Highly specialized humanities matrices naturally building strong government tier capabilities.", "10% upfront payment discount directly applied entirely.", "EMI perfectly tracking at ₹3,125/month."],
                        duration: "24 Months", eligibility: "Bachelor's degree completely verified.",
                        paymentDetails: generateTable(s.priceVal, 24, 83333),
                        brochure: s.name === "English" ? "/brochures/SMU-MA-English-Domestic-Brochure.pdf" : (s.name === "Political Science" ? "/brochures/SMU-MA-Political-Science-Domestic-Brochure.pdf" : "/brochures/SMU-MA-Sociology-Domestic-Brochure.pdf")
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹90,000 (Lumpsum) / ₹15,000 (Sem)",
                    specializations: [
                        { name: "General", priceVal: 90000, career: "Business Exec, Marketing Trainee", desc: "Absolute foundational setups mapping smoothly directly into premier corporate hierarchies naturally." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal), careerPath: s.career, syllabus: s.desc,
                        usps: ["Direct track towards MBA dual specializations effectively mapped.", "Upfront payment explicit discount scaling accurately up to 10%.", "No Cost EMI strictly starting at ₹2,500/month."],
                        duration: "36 Months", eligibility: "10+2 securely tracked via recognized board grids.",
                        paymentDetails: generateTable(s.priceVal, 36, 100000),
                        brochure: null
                    }))
                },
                {
                    group: "UG", name: "BCom", duration: "36 Months", priceRange: "₹75,000 (Lumpsum) / ₹12,500 (Sem)",
                    specializations: [
                        { name: "General", priceVal: 75000, career: "Accountant Trainee, Tax Assistant", desc: "Solid commerce fundamentals strictly preparing candidates directly for global accounting standards natively." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal), careerPath: s.career, syllabus: s.desc,
                        usps: ["Cost-efficient commerce tier naturally establishing deep financial intellect.", "Upfront explicit 10% payment discount seamlessly applied.", "Absolute minimum EMI flawlessly sitting at ₹2,083/month."],
                        duration: "36 Months", eligibility: "10+2 efficiently verified.",
                        paymentDetails: generateTable(s.priceVal, 36, 83333),
                        brochure: "/brochures/SMU-BCOM-Domestic-Brochure.pdf"
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36 Months", priceRange: "₹75,000 (Lumpsum) / ₹12,500 (Sem)",
                    specializations: [
                        { name: "General", priceVal: 75000, career: "Public Sector Exec, HR Coordinator", desc: "Broad societal architectures deeply mapping essential liberal arts safely aligning multiple trajectories." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal), careerPath: s.career, syllabus: s.desc,
                        usps: ["Premium NAAC A+ humanities degree seamlessly tracking civil services and public relations efficiently.", "Massive affordability via ₹2,083/month EMI directly.", "Full course payment explicit 10% concession cleanly handled."],
                        duration: "36 Months", eligibility: "10+2 efficiently verified.",
                        paymentDetails: generateTable(s.priceVal, 36, 83333),
                        brochure: "/brochures/SMU-BA-Domestic-Brochure.pdf"
                    }))
                }
            ]
        },
        url: "https://www.onlinemanipal.com/institution/sikkim-manipal-university"
    };

    if (targetIdx > -1) {
        universities.splice(targetIdx, 1);
    }
    
    universities.push(smuData);

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("SMU data natively mapped structurally directly into the repository perfectly with high-density no-glow UI!");
}

run().catch(console.error);
