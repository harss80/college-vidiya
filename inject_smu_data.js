import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    // Check if SMU already exists
    let smuIdx = universities.findIndex(u => u.id === 'smu-online');
    
    function generateTable(semFeeStr, yearFeeStr, fullFeeStr, scholarshipText) {
        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #f8f9fa); border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(37, 99, 235, 0.1); color: #2563eb; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🚀 Multiple Scholarships Available!
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid #e2e8f0; text-align: left; color: #475569;">
        <th style="padding: 10px 8px; font-weight: 600;">Fee Type</th>
        <th style="padding: 10px 8px; font-weight: 600;">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Semester Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${semFeeStr}</td>
      </tr>
      ${yearFeeStr ? `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Yearly Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${yearFeeStr}</td>
      </tr>` : ''}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Full Program</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700;">${fullFeeStr}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fffbeb; padding: 12px; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #b45309;">Scholarship Highlights:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px;">
      <li><b>30% Off</b> for Sikkim & Northeast candidates</li>
      <li><b>20% Off</b> for Divyaang, Defence Personnel, & Alumni</li>
      <li><b>10% Extra Off</b> for Upfront Annual/Full Payment</li>
    </ul>
  </div>
</div>`;
    }

    const genUsps = (degree) => [
        `Access to 110+ hours of professional certification courses worth ₹50,000 for FREE`,
        `AI-enabled ${degree} learning management system with 24/7 access`,
        `Robust Remote-proctored online examinations for absolute flexibility`,
        `Extensive e-libraries and expert faculty networking exclusively for ${degree} students`
    ];

    const smuData = {
        id: "smu-online",
        name: "Sikkim Manipal University (Online)",
        logo: "https://ui-avatars.com/api/?name=SMU&background=ef4444&color=fff&size=150",
        location: "Sikkim",
        type: "State Private University",
        level: ["UG", "PG"],
        budget: 120000,
        specializations: ["MBA", "MCA", "BBA", "BA", "MA", "B.Com", "M.Com"],
        accreditation: "UGC Entitled, NAAC A+",
        fees: "Semester / Year / Full Options Available",
        placement: "Job Fairs | Resume Building | Networking Opportunities",
        eligibility: "12th / Graduation as per course (With 50% criteria)",
        ranking: "UGC / AICTE Approved",
        exams: "Merit Based",
        extendedDetails: {
            examination: "70:30 (30% Assessment, 70% Proctored Exam) | Passing Criteria = Minimum required",
            leadLocking: "Auto Lock mapped to respective regional directors",
            programs: [
                {
                    group: "PG", name: "MBA", duration: "24 Months", priceRange: "₹1,20,000 (Total)",
                    specializations: [
                        { name: "Marketing", price: "₹1,20,000 (Total) / ₹30,000 (Sem)" },
                        { name: "Finance", price: "₹1,20,000 (Total) / ₹30,000 (Sem)" },
                        { name: "Human Resources", price: "₹1,20,000 (Total) / ₹30,000 (Sem)" },
                        { name: "Systems", price: "₹1,20,000 (Total) / ₹30,000 (Sem)" },
                        { name: "Operations & Supply Chain Management", price: "₹1,20,000 (Total) / ₹30,000 (Sem)" },
                        { name: "Healthcare", price: "₹1,20,000 (Total) / ₹30,000 (Sem)" }
                    ].map(s => ({
                        ...s, 
                        duration: "24 Months", 
                        eligibility: "Bachelor’s degree (10+2+3/4) with min. 50% marks (45% reserved)", 
                        about: "The SMU Online MBA offers dual specialization and premium certifications.", 
                        usps: genUsps('MBA'),
                        paymentDetails: generateTable('₹30,000', '₹60,000', '₹1,20,000', '')
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,10,000 (Total)",
                    specializations: [
                        { name: "General", price: "₹1,10,000 (Total) / ₹27,500 (Sem)" }
                    ].map(s => ({
                        ...s, 
                        duration: "24 Months", 
                        eligibility: "Graduate in BCA/CS/IT with min 50%. *Note: Bridge Course is COMPULSORY for non-Math or non-CS graduates.*", 
                        about: "Master of Computer Applications specifically tailored for career transitioners and IT professionals.", 
                        usps: genUsps('MCA'),
                        paymentDetails: generateTable('₹27,500', '₹55,000', '₹1,10,000', '')
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹90,000 (Total)",
                    specializations: [
                        { name: "Business Analytics & Fintech", price: "₹90,000 (Total) / ₹15,000 (Sem)" },
                        { name: "Entrepreneurship", price: "₹90,000 (Total) / ₹15,000 (Sem)" },
                        { name: "Operations & Supply Chain", price: "₹90,000 (Total) / ₹15,000 (Sem)" },
                        { name: "Banking & Insurance", price: "₹90,000 (Total) / ₹15,000 (Sem)" }
                    ].map(s => ({
                        ...s, 
                        duration: "36 Months", 
                        eligibility: "10+2 from a recognized board.", 
                        about: "Foundational business knowledge and leadership readiness.", 
                        usps: genUsps('BBA'),
                        paymentDetails: generateTable('₹15,000', '₹30,000', '₹90,000', '')
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36 Months", priceRange: "₹75,000 (Total)",
                    specializations: [
                        { name: "English", price: "₹75,000 (Total) / ₹12,500 (Sem)" },
                        { name: "Sociology", price: "₹75,000 (Total) / ₹12,500 (Sem)" },
                        { name: "Political Science", price: "₹75,000 (Total) / ₹12,500 (Sem)" }
                    ].map(s => ({
                        ...s, 
                        duration: "36 Months", 
                        eligibility: "10+2 from a recognized board.", 
                        about: "Comprehensive study balancing practical and theoretical subjects.", 
                        usps: genUsps('BA'),
                        paymentDetails: generateTable('₹12,500', '₹25,000', '₹75,000', '')
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹75,000 (Total)",
                    specializations: [
                        { name: "English", price: "₹75,000 (Total) / ₹18,750 (Sem)", details: "Gender Studies, Postcolonial Lit, Literary Theory." },
                        { name: "Political Science", price: "₹75,000 (Total) / ₹18,750 (Sem)", details: "International politics, comparative politics, peace & conflicts." },
                        { name: "Sociology", price: "₹75,000 (Total) / ₹18,750 (Sem)", details: "Sociological thoughts, gender & society, health sociology." }
                    ].map(s => ({
                        ...s, 
                        duration: "24 Months", 
                        eligibility: "Graduation from a recognized board.", 
                        about: "Advanced humanistic insights for dynamic social impact careers.", 
                        usps: genUsps('MA'),
                        paymentDetails: generateTable('₹18,750', '₹37,500', '₹75,000', '')
                    }))
                },
                {
                    group: "UG", name: "B.Com", duration: "36 Months", priceRange: "₹75,000 (Total)",
                    specializations: [
                        { name: "General", price: "₹75,000 (Total) / ₹12,500 (Sem)", details: "Focus: Accounting, Taxation, Auditing" }
                    ].map(s => ({
                        ...s, 
                        duration: "36 Months", 
                        eligibility: "10+2 from a recognized board.", 
                        about: "Core commerce curriculum including complex auditing guidelines.", 
                        usps: genUsps('B.Com'),
                        paymentDetails: generateTable('₹12,500', '₹25,000', '₹75,000', '')
                    }))
                },
                {
                    group: "PG", name: "M.Com", duration: "24 Months", priceRange: "₹75,000 (Total)",
                    specializations: [
                        { name: "General", price: "₹75,000 (Total) / ₹18,750 (Sem)", details: "Focus: Corporate Finance, Investment Management" }
                    ].map(s => ({
                        ...s, 
                        duration: "24 Months", 
                        eligibility: "B.Com or equivalent graduation from a recognized board.", 
                        about: "Specialized commerce mastery in corporate structures.", 
                        usps: genUsps('M.Com'),
                        paymentDetails: generateTable('₹18,750', '₹37,500', '₹75,000', '')
                    }))
                }
            ]
        },
        url: "https://www.onlinemanipal.com/institution/sikkim-manipal-university"
    };

    if (smuIdx > -1) {
        universities[smuIdx] = smuData;
    } else {
        universities.push(smuData);
    }
    
    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("SMU data injected and UI structured successfully!");
}

run().catch(console.error);
