import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    // Find SMU
    let smuIdx = universities.findIndex(u => u.id === 'smu-online');
    
    function generateTable(semFeeStr, yearFeeStr, fullFeeStr) {
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
            examination: "70:30 (30% Assessment, 70% Proctored Exam)",
            leadLocking: "Auto Lock mapped to respective regional directors",
            programs: [
                {
                    group: "PG", name: "MBA", duration: "24 Months", priceRange: "₹1,20,000 (Total)",
                    specializations: [
                        { 
                            name: "Marketing", 
                            price: "₹1,20,000 (Total) / ₹30,000 (Sem)",
                            details: "Consumer behavior, digital marketing, and brand strategy.",
                            usps: ["Coursera integration (Select Ivy League Modules) available specifically for Marketing strategy.", "100% focused on modern B2B & B2C acquisition loops.", "Dual specialization capable with any other MBA branch.", "Access to live case studies from Fortune 500 FMCG brands."]
                        },
                        { 
                            name: "Finance", 
                            price: "₹1,20,000 (Total) / ₹30,000 (Sem)",
                            details: "Corporate finance, risk management, and investments.",
                            usps: ["Coursera integration (Select Modules) available for Financial Modeling & Valuation.", "AI-enabled tools for calculating complex financial risk arrays.", "Mastery over institutional banking and portfolio frameworks.", "Dual specialization capable."]
                        },
                        { 
                            name: "Human Resources", 
                            price: "₹1,20,000 (Total) / ₹30,000 (Sem)",
                            usps: ["Coursera integration (Select Modules) available for HR Analytics.", "Develop core competencies in talent acquisition and retention.", "Deep dive into labor laws and modern HRIS management.", "Dual specialization capable with Operations or Systems."]
                        },
                        { 
                            name: "Systems", 
                            price: "₹1,20,000 (Total) / ₹30,000 (Sem)",
                            usps: ["Exclusive Coursera Modules focused on Enterprise Systems and Architecture.", "Learn to bridge the gap between IT and C-suite management.", "Perfect for IT professionals seeking managerial escalation.", "Dual specialization integration with Operations highly recommended."]
                        },
                        { 
                            name: "Operations & Supply Chain Management", 
                            price: "₹1,20,000 (Total) / ₹30,000 (Sem)",
                            usps: ["Coursera integration (Select Modules) for Logistics strategy.", "Six Sigma and Lean Management principles directly embedded.", "Focus on global supply chain vulnerabilities and fixes.", "Dual specialization capable."]
                        },
                        { 
                            name: "Healthcare", 
                            price: "₹1,20,000 (Total) / ₹30,000 (Sem)",
                            usps: ["Ivy League Coursera Modules exploring Health Systems Management.", "Backed by the Manipal Group's massive legacy in healthcare education.", "Focus on hospital administration, EHRs, and health ethics.", "Perfect for medical practitioners jumping to administration."]
                        }
                    ].map(s => ({
                        ...s, 
                        duration: "24 Months", 
                        eligibility: "Bachelor’s degree (10+2+3/4) with min. 50% marks (45% reserved)", 
                        paymentDetails: generateTable('₹30,000', '₹60,000', '₹1,20,000')
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,10,000 (Total)",
                    specializations: [
                        { 
                            name: "Data Warehousing and Data Mining", 
                            price: "₹1,10,000 (Total) / ₹27,500 (Sem)",
                            usps: ["Specialized Year 2 sequence entirely dedicated to ETL processes.", "Project-based curriculum focusing on extracting insight from raw DBs.", "Foundation tech courses bundled for future-proofing.", "Access exclusively curated big-data tooling simulations."]
                        },
                        { 
                            name: "Cloud Computing", 
                            price: "₹1,10,000 (Total) / ₹27,500 (Sem)",
                            usps: ["Year 2 exclusive focus on AWS, Azure, and Cloud Infrastructure scaling.", "Learn distributed computing, virtualization, and IaaS models.", "Final project entirely based on architecting cloud deployments.", "Foundation tech courses bundled."]
                        },
                        { 
                            name: "Machine Learning", 
                            price: "₹1,10,000 (Total) / ₹27,500 (Sem)",
                            usps: ["Year 2 specialized path through predictive models and neural nets.", "Deep dive into model training, validation, and AI ethics.", "Complete ML-focused capstone project in Semester 4.", "Foundation tech courses bundled for future leaders."]
                        },
                        { 
                            name: "Distributed System and Grid Computing", 
                            price: "₹1,10,000 (Total) / ₹27,500 (Sem)",
                            usps: ["Advanced specialization covering massive parallel processing paradigms.", "Develop systems for high-availability enterprise environments.", "Semester 4 capstone project in distributed architectures.", "Robust remote proctored exams for absolute flexibility."]
                        }
                    ].map(s => ({
                        ...s, 
                        duration: "24 Months", 
                        eligibility: "Graduate in BCA/CS/IT with min 50%. *Note: Bridge Course is COMPULSORY for non-Math or non-CS graduates.*", 
                        paymentDetails: generateTable('₹27,500', '₹55,000', '₹1,10,000')
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹90,000 (Total)",
                    specializations: [
                        { 
                            name: "Business Analytics & Fintech", 
                            price: "₹90,000 (Total) / ₹15,000 (Sem)",
                            usps: ["Coursera integrations specifically for Fintech applications available.", "Curriculum heavily focused on financial analytics and visualization.", "Data-driven approach to standard BBA principles.", "110+ hours of professional certification foundations provided."]
                        },
                        { 
                            name: "Entrepreneurship", 
                            price: "₹90,000 (Total) / ₹15,000 (Sem)",
                            usps: ["Venture creation, fundraising, and startup strategies.", "Mentorship tailored toward ideation and MVP creation.", "Coursera select modules in Innovation mapped to electives.", "110+ hours of professional certification foundations provided."]
                        },
                        { 
                            name: "Operations & Supply Chain", 
                            price: "₹90,000 (Total) / ₹15,000 (Sem)",
                            usps: ["Deep dive into inventory, logistics, and resource smoothing at UG level.", "Case-studies on supply chain breakdowns.", "110+ hours of professional certification foundations provided.", "AI-enabled platform perfect for remote learning."]
                        },
                        { 
                            name: "Banking & Insurance", 
                            price: "₹90,000 (Total) / ₹15,000 (Sem)",
                            usps: ["Direct pathways into retail banking, underwriting, and risk assessment.", "Access specifically curated financial regulations content.", "110+ hours of professional certification foundations provided.", "Robust proctored exams for maximum schedule flexibility."]
                        }
                    ].map(s => ({
                        ...s, 
                        duration: "36 Months", 
                        eligibility: "10+2 from a recognized board.", 
                        paymentDetails: generateTable('₹15,000', '₹30,000', '₹90,000')
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36 Months", priceRange: "₹75,000 (Total)",
                    specializations: [
                        { name: "English", price: "₹75,000 (Total) / ₹12,500 (Sem)", usps: ["Critical literary analysis and advanced writing mechanics natively integrated.", "110+ hours of leadership certification electives attached free.", "Flexible scheduling for working professionals."] },
                        { name: "Sociology", price: "₹75,000 (Total) / ₹12,500 (Sem)", usps: ["Deep insights into human grouping, urban dynamics, and demographics.", "110+ hours of leadership certification electives attached free.", "Flexible AI LMS."] },
                        { name: "Political Science", price: "₹75,000 (Total) / ₹12,500 (Sem)", usps: ["Detailed curriculum on public policy, governance, and relations.", "110+ hours of leadership certification electives attached free.", "Robust proctored exams for absolute ease."] }
                    ].map(s => ({
                        ...s, 
                        duration: "36 Months", 
                        eligibility: "10+2 from a recognized board.", 
                        paymentDetails: generateTable('₹12,500', '₹25,000', '₹75,000')
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹75,000 (Total)",
                    specializations: [
                        { name: "English", price: "₹75,000 (Total) / ₹18,750 (Sem)", usps: ["Advanced post-colonial theory and gender studies at the forefront.", "Coursera electives (select programs) accessible.", "Expert faculty networking natively driven through LMS."] },
                        { name: "Political Science", price: "₹75,000 (Total) / ₹18,750 (Sem)", usps: ["Granular focus on comparative politics and peace conflicts.", "Coursera electives (select programs) accessible.", "Expert faculty networking natively driven through LMS."] },
                        { name: "Sociology", price: "₹75,000 (Total) / ₹18,750 (Sem)", usps: ["Specialized content in Health Sociology and gender dynamics.", "Coursera electives (select programs) accessible.", "Expert faculty networking natively driven through LMS."] }
                    ].map(s => ({
                        ...s, 
                        duration: "24 Months", 
                        eligibility: "Graduation from a recognized board.", 
                        paymentDetails: generateTable('₹18,750', '₹37,500', '₹75,000')
                    }))
                },
                {
                    group: "UG", name: "B.Com", duration: "36 Months", priceRange: "₹75,000 (Total)",
                    specializations: [
                        { name: "General", price: "₹75,000 (Total) / ₹12,500 (Sem)", usps: ["Strong focus on accounting and corporate taxation rules.", "110+ hours of professional certification courses for ALL students.", "Remote proctored assignments."] }
                    ].map(s => ({
                        ...s, 
                        duration: "36 Months", 
                        eligibility: "10+2 from a recognized board.", 
                        paymentDetails: generateTable('₹12,500', '₹25,000', '₹75,000')
                    }))
                },
                {
                    group: "PG", name: "M.Com", duration: "24 Months", priceRange: "₹75,000 (Total)",
                    specializations: [
                        { name: "General", price: "₹75,000 (Total) / ₹18,750 (Sem)", usps: ["Advanced corporate finance modeling and risk mechanics.", "Coursera integration strictly available for select master modules.", "Massive e-library catalog accessible via SMU LMS."] }
                    ].map(s => ({
                        ...s, 
                        duration: "24 Months", 
                        eligibility: "B.Com or equivalent graduation from a recognized board.", 
                        paymentDetails: generateTable('₹18,750', '₹37,500', '₹75,000')
                    }))
                }
            ]
        }
    };

    if (smuIdx > -1) {
        // Just overriding programs array and keeping rest as generated previously
        universities[smuIdx] = smuData;
    } else {
        universities.push(smuData);
    }
    
    // Safety check for UI if a university lacks USPs globally
    universities.forEach(u => {
        if (!u.extendedDetails) return;
        u.extendedDetails.programs.forEach(p => {
            if (!p.specializations) return;
            p.specializations.forEach(s => {
                if (!s.usps || s.usps.length === 0) {
                    s.usps = ["Course fully accredited and compliant.", "World-class digital learning materials.", "Regular industry expert seminars."];
                }
            })
        })
    })

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("SMU data v2 (Coursera & MCA fixed) injected successfully!");
}

run().catch(console.error);
