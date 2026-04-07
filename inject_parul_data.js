import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let parulIdx = universities.findIndex(u => u.id === 'parul-online' || u.name.toLowerCase().includes("parul"));
    
    function generateTable(semFeeStr, annulFeeStr, fullFeeStr, specialNote = "") {
        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #f8f9fa); border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(220, 38, 38, 0.1); color: #dc2626; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🏅 NAAC A++ Official Parul University Fee
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
      ${annulFeeStr ? `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Yearly Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${annulFeeStr}</td>
      </tr>` : ''}
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Full Program</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700;">${fullFeeStr}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 13px; color: #475569; background: #fffbeb; padding: 12px; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #b45309;">Financial Disclaimers & Info:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px;">
      <li><b>₹500</b> Non-refundable Registration Fee.</li>
      <li><b>₹10,000</b> Blocking Amount (required for full course fee payment).</li>
      <li><b>Loan Partner: Fibe</b> | EMI Options: 3, 6, 9, 12 Months (12 mo has approx. 10.25% interest).</li>
      <li>${specialNote || "Easy installments and payment options available."}</li>
    </ul>
  </div>
</div>`;
    }

    const parulData = {
        id: "parul-online",
        name: "Parul University (Online)",
        logo: "https://ui-avatars.com/api/?name=Parul+University&background=dc2626&color=fff&size=150",
        location: "Vadodara, Gujarat",
        type: "State Private University",
        level: ["UG", "PG"],
        budget: 150000,
        specializations: ["MBA", "BBA", "BCA", "MCA", "BA", "MA", "M.Com", "M.Sc", "MSW"],
        accreditation: "NAAC A++, UGC Entitled, AIU Member, WES Recognized, QS I GAUGE Diamond Rating",
        fees: "Fibe Zero Cost Options / Semester Options Available",
        placement: "Dedicated Career Assessment | Virtual Drives | Alumni Connect",
        eligibility: "12th for UG / Graduation for PG",
        ranking: "NIRF 2024 (101-150 Band); Youngest NAAC A++; QS World Ranking Participant",
        exams: "70:30 Model (70% Proctored Online Exam, 30% Internal Assessment), Minimum 40% to pass",
        extendedDetails: {
            examination: "70:30 Evaluation Model: 30% Continuous Internal Assessment, 70% End-Term Proctored Online Examination. | Minimum passing criteria is 40% aggregate.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Parul is Unbeatable (Unique Highlights):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Top Tier Global Recognitions</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Parul is the youngest university to achieve a NAAC A++ grade. Your degree will also be recognized worldwide since they are approved globally by WES & AIU.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Relaxed 70:30 Exam Pattern</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">They use a flexible system where 30% of your grade comes from internal assignments, so you don't have to risk failing everything on just one final exam.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Direct Job Placements & Training</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Parul sets up direct Virtual Placement drives, tracks your skill enhancements, and connects you with their strong alumni base to help you get hired automatically.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Massive Dual Degree Scholarships</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">If you want to study two things at once, you can add extra Diploma courses alongside your main degree with an automatic 30% fee discount. They also offer totally free certifications.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. Easy EMIs with Fibe</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Studying is made stress-free with their loan partner Fibe. You can easily divide your payments into simple EMIs spanning from 3 to 12 months.</p>
            </details>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = PU</strong></p>
            </div>`,
            payment: "<b>Flexible Payment Options</b><br/>You can comfortably pay your fees per Semester, Annually, or Full Course all at once. Seat locking just takes a <b>₹10,000 Blocking Amount</b> and a simple <b>₹500 Registration Fee</b>.<br/><br/><b>Official Loan Parameters:</b> Parul natively uses <b>Fibe</b> to offer extremely simple EMIs spanning 3 to 12 months with minimal hassle, keeping higher education completely stress-free and very flexible.",
            programs: [
                {
                    group: "PG", name: "MBA", duration: "24 Months", priceRange: "₹1,50,000 (Total)",
                    specializations: [
                        { name: "Agribusiness Management", career: "Agri-Business Consultant, Supply Chain Manager(Agri), Rural Development Officer, Farm Manager", desc: "Covers Agri-Marketing, Rural Supply Chains, Agriculture Economics, Food Processing Tech, and Policy." },
                        { name: "Banking & Financial Services", career: "Investment Banker, Financial Analyst, Wealth Manager, Credit Risk Officer", desc: "Covers Commercial Banking, Retail Finance, Derivatives, Portfolio Management, Risk Modeling." },
                        { name: "Business Analytics", career: "Data Scientist, Business Analyst, BI Manager, Consultant", desc: "Covers Big Data, Predictive Analytics, Python for Business, Data Mining, R Programming." },
                        { name: "Digital Marketing & Sales", career: "Digital Marketing Head, SEO Specialist, Performance Marketer, Sales Director", desc: "Covers Search Engine Optimization, Content Strategy, Social Media Marketing, CRM, B2B Sales, Programmatic Ads." },
                        { name: "Entrepreneurship & Innovation Management", career: "Start-up Founder, Venture Capitalist, Innovation Head", desc: "Covers Venture Funding, Business Plan Design, Start-up Law, Innovation Scaling, Lean Start-up Methodology." },
                        { name: "Family Managed Business", career: "Next-Gen Family Business Director, Strategy Head, Scale-up Consultant", desc: "Covers Succession Planning, Corporate Governance, Wealth Preservation, Modernizing Legacy Businesses." },
                        { name: "Finance", career: "Corporate Finance Manager, Tax Consultant, Equity Researcher", desc: "Covers Corporate Finance, Merger & Acquisition, Taxation, Financial Valuations, Auditing." },
                        { name: "Forensic Accounting & Corporate Fraud Investigation", career: "Forensic Auditor, Fraud Examiner, Compliance Manager, Financial Investigator", desc: "Covers Cyber Forensics, White-collar Crime investigation, Anti-Money Laundering Laws, Evidence Gathering." },
                        { name: "Healthcare Management", career: "Hospital Administrator, Health IT Manager, Public Health Official, Pharma Admin", desc: "Covers Hospital Layouts, Medical Laws, Quality Management in Healthcare, Health Informatics, Patient Experience." },
                        { name: "Human Resource Management", career: "HR Director, Talent Acquisition Manager, Compensation Analyst", desc: "Covers Talent Management, Organizational Behavior, Indian Labor Laws, Performance Analytics, Diversity & Inclusion." },
                        { name: "Information Technology", career: "IT Consultant, Chief Technology Officer, System Analyst, Tech Product Manager", desc: "Covers IT Governance, Cloud Strategy, Database Systems, Enterprise Resource Planning (ERP), Cybersecurity Management." },
                        { name: "International Trade & Business", career: "Export/Import Manager, Global Supply Chain Head, Foreign Trade Consultant", desc: "Covers International Economics, EXIM Policies, Forex Management, Cross-cultural Negotiations, Global Logistics." },
                        { name: "Logistics & Supply Chain Management", career: "Supply Chain Director, Logistics Manager, Procurement Head, Inventory Analyst", desc: "Covers Lean Logistics, Inventory Operations, Warehouse Management, Freight Operations, Supplier Sourcing." },
                        { name: "Marketing", career: "Marketing Manager, Brand Manager, Product Marketer, Consumer Insight Analyst", desc: "Covers Consumer Behavior, Strategic Marketing, Advertising Strategy, Brand Architecture, Retail Marketing." },
                        { name: "Operations Management", career: "Operations Manager, Plant Head, Quality Assurance Director, Project Manager", desc: "Covers Lean Six Sigma, Total Quality Management, Operations Strategy, Project Network Tools, Supply Management." },
                        { name: "Pharmaceutical Management", career: "Pharma Sales Manager, Healthcare Strategy Lead, Product Manager (BioTech)", desc: "Covers Pharma Regulatory Affairs, IPR, Pharma Supply Chains, Drug Discover Lifecycles, Bio-tech Marketing." },
                        { name: "Project Management", career: "Project Lead, Agile Scrum Master, Risk Manager", desc: "Covers PMP Frameworks, Agile Methods, Resource Allocation, Project Risk Matrices, Gantt Char Analysis." },
                        { name: "Public Policy", career: "Policy Analyst, Political Consultant, Gov. Affairs Manager", desc: "Covers Gov Policies, Macroeconomics, Ethics, Policy Formation, Non-profit Management." },
                        { name: "Retail Management", career: "Retail Operations Manager, Merchandising Manager, Store Director, E-com Manager", desc: "Covers Visual Merchandising, Store Operations, Retail Buying, E-commerce Integration, Customer Loyalty Models." },
                        { name: "Tourism & Event Management", career: "Travel Consultant, Event Director, Hospitality Manager, Destination Marketer", desc: "Covers MICE (Meetings, Incentives, Conferences, Exhibitions), Hospitality Strategy, Tourism Law, Ticketing." }
                    ].map(s => ({
                        name: s.name,
                        price: "₹1,50,000 (Total)",
                        usps: [
                            "Industry-aligned curriculum tailored exactly for "+ s.name + " with practical business case studies.",
                            "Access to Fibe EMI financing offering extremely affordable monthly structures.",
                            "Dual Degree Option @ 30% Scholarship: Example - add PG Diploma in Digital Marketing or Industrial Relations.",
                            "Free Add-on Certifications embedded implicitly: Export Import Management, Excel, GST, Chat GPT, etc.",
                            "Direct Placement pathways utilizing intensive Virtual Placement Drives & Interview Preparation protocols.",
                            "Syllabus heavily tracks 70:30 Proctored parameters ensuring completely fair, high-quality knowledge validation."
                        ],
                        duration: "24 Months",
                        eligibility: "Bachelor's degree from a recognized university",
                        paymentDetails: generateTable('₹37,500', '₹75,000', '₹1,50,000', 'EMIs available via Loan Partner Fibe. ₹500 Reg Fee + ₹10,000 Blocking amount for full fee.'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹1,20,000 (Total)",
                    specializations: [
                        { name: "Cybersecurity & Forensic", career: "Security Analyst, Network Defender, Forensic IT Investigator", desc: "Network Security, Ethical Hacking, Digital Forensics, Cryptography, IT Laws." },
                        { name: "Full Stack Web Development", career: "Full Stack Dev, Software Engineer, Web Architect", desc: "React, Node.js, Express, MongoDB, UI/UX Principles, Web Performance." },
                        { name: "Artificial Intelligence / Machine Learning", career: "AI Engineer, ML Architect, Data Scientist", desc: "Python, TensorFlow, Deep Learning, NLP, Applied Machine Learning, Big Data." }
                    ].map(s => ({
                        name: s.name,
                        price: "₹1,20,000 (Total)",
                        usps: [
                            "Highly advanced tech stacks targeting exactly " + s.name + " applications.",
                            "Add a Diploma in Native Mobile App Development or Blockchain Technology with 30% Scholarship.",
                            "Gain Free Certifications like HTML, Cloud Computing, Web Designing, Chat GPT while acquiring your Masters.",
                            "WES & AIU recognized curriculum directly increasing global IT employment chances.",
                            "Zero friction assessments utilizing the 70% Proctored / 30% Continual testing format."
                        ],
                        duration: "24 Months",
                        eligibility: "BCA / Bachelor's specific to IT/Math or equivalent",
                        paymentDetails: generateTable('₹30,000', '₹60,000', '₹1,20,000', 'EMIs available via Loan Partner Fibe.'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                },
                {
                    group: "UG", name: "BBA", duration: "36 Months", priceRange: "₹1,11,000 (Total)",
                    specializations: [
                        { name: "Marketing", career: "Marketing Executive, Social Media Manager, Direct Sales Agent", desc: "Advertising Strategies, Consumer Behaviors, Market Research, Branding, Digital Marketing Basics." },
                        { name: "Finance", career: "Banking Associate, Investment Analyst, Accounts Manager", desc: "Financial Accounting, Corporate Finance, Capital Markets, Taxation Basics, Microeconomics." },
                        { name: "Human Resource", career: "HR Executive, Recruiter, Training & Dev Associate", desc: "HR Planning, Organization Behavior, Labor Laws, Compensation Management, Training Systems." }
                    ].map(s => ({
                        name: s.name,
                        price: "₹1,11,000 (Total)",
                        usps: [
                            "Comprehensive management undergraduate tracks emphasizing actionable " + s.name + " principles.",
                            "Huge specific Dual Degree scope: Combine BBA with Diploma in Digital Marketing / Financial Services at 30% discount.",
                            "Value-heavy Free Certifications: Chat GPT, Email & Mobile Marketing, GST, Excel for Beginners natively added.",
                            "Access extensive placement tools: Skill Enhancements, Virtual Drives, Alumni Interactions.",
                            "Fully UGC entitled and AIU recognized bachelor's mapping directly to higher overseas studies."
                        ],
                        duration: "36 Months",
                        eligibility: "12th Pass or equivalent",
                        paymentDetails: generateTable('₹18,500', '₹37,000', '₹1,11,000', 'EMIs via Fibe available for 3, 6, 9 or 12 Months.'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                },
                {
                    group: "UG", name: "BCA", duration: "36 Months", priceRange: "₹1,11,000 (Total)",
                    specializations: [
                        {
                            name: "General",
                            price: "₹1,11,000 (Total)",
                            desc: "C / C++, Java Programming, Database Management (SQL), Software Engineering, Data Structures, Networking basics.",
                            career: "Software Trainee, Junior Web Developer, IT Executive, Application Tester"
                        }
                    ].map(s => ({
                        name: s.name,
                        price: s.price,
                        usps: [
                            "Foundational computing tracks to immediately land junior developer positions.",
                            "Excellent Dual Degree pipelines: Append Native Mobile App Dev / Neural Network & Deep Learning diplomas at 30% OFF.",
                            "Includes major Free Certifications: Java Mobile App Dev, IoT, Web Hosting and Excel basics.",
                            "Massive affordability mapped securely by Fibe EMIs up to 12 months.",
                            "Syllabus heavily tracks 70:30 Proctored parameters ensuring fair, high-quality knowledge validation."
                        ],
                        duration: "36 Months",
                        eligibility: "12th Pass mostly Science/Math preferred but accessible broadly",
                        paymentDetails: generateTable('₹18,500', '₹37,000', '₹1,11,000'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                },
                {
                    group: "UG", name: "BA", duration: "36 Months", priceRange: "₹1,11,000 (Total)",
                    specializations: [
                        { name: "English", career: "Content Writer, Editor, Teacher, Copywriter", desc: "British Literature, American Literature, Phonetics, Literary Theory, Creative Writing." },
                        { name: "Journalism and Mass communication", career: "Journalist, PR Executive, Radio Producer, Media Coordinator", desc: "Reporting, Mass Media Economics, Print Journalism, Electronic Media, Public Relations." }
                    ].map(s => ({
                        name: s.name,
                        price: "₹1,11,000 (Total)",
                        usps: [
                            "Specialized arts pathways building deep communication & analytical proficiencies in " + s.name + ".",
                            "Offers immediate Dual Degree access: Diploma in Computer Apps or Digital Marketing (+30% Scholarship).",
                            "Automatically includes Free Certs: Excel for Beginners, Chat GPT.",
                            "Unmatched global acceptability due directly to NAAC A++, WES & AIU accreditations.",
                            "Highly adaptable 70:30 internal to proctored evaluation structure."
                        ],
                        duration: "36 Months",
                        eligibility: "12th Pass in any stream",
                        paymentDetails: generateTable('₹18,500', '₹37,000', '₹1,11,000', 'Easily financed via Fibe EMI solutions natively built into the payment flow.'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                },
                {
                    group: "PG", name: "M.Com", duration: "24 Months", priceRange: "₹60,000 (Total)",
                    specializations: [
                        {
                            name: "General",
                            price: "₹60,000 (Total)",
                            desc: "Advanced Financial Accounting, Corporate Laws, Strategic Finance, Investment Returns Analysis, International Business.",
                            career: "Senior Auditor, Financial Director, Tax Adviser, Accounts Chief"
                        }
                    ].map(s => ({
                        name: s.name,
                        price: s.price,
                        usps: [
                            "Comprehensive M.Com with advanced offline parity covering heavy financial regulations.",
                            "Eligible to Dual Degree a PG Diploma in Digital Marketing or Industrial Relations (+30% scholarship).",
                            "Free massive add-on stack: GST, Chat GPT, Project Management, Micro Finance, Excel Certs.",
                            "Extremely competitive total fee (₹60,000), paired with flexible 3 to 12 Month Fibe EMIs.",
                            "Top tier Industry-Readiness seminars directly bridging accountants to corporate jobs."
                        ],
                        duration: "24 Months",
                        eligibility: "B.Com / BBA or allied degrees",
                        paymentDetails: generateTable('₹15,000', '₹30,000', '₹60,000'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                },
                {
                    group: "PG", name: "M.Sc", duration: "24 Months", priceRange: "₹60,000 (Total)",
                    specializations: [
                        {
                            name: "Applied Mathematics",
                            price: "₹60,000 (Total)",
                            desc: "Real Analysis, Topology, Mathematical Statistics, Differential Equations, Operations Research Matrix Applications.",
                            career: "Data Modeler, Quant Analyst, Academic Teacher, Statistician"
                        }
                    ].map(s => ({
                        name: s.name,
                        price: s.price,
                        usps: [
                            "Rigorous scientific pathways specializing specifically into advanced quantitative reasoning.",
                            "Expand your profile: Dual degree a PG Diploma in Digital Marketing / Business Analytics / Computer Application immediately.",
                            "Natively access Free Certifications in Web Designing, Chat GPT & Advanced Excel.",
                            "Benefit heavily from Parul's 'Virtual Placement Drives' mapped to specialized quant roles.",
                            "Fully verified evaluation pattern ensuring zero-disruption study flows (70:30 format)."
                        ],
                        duration: "24 Months",
                        eligibility: "B.Sc in Mathematics or relevant field",
                        paymentDetails: generateTable('₹15,000', '₹30,000', '₹60,000'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                },
                {
                    group: "PG", name: "MSW", duration: "24 Months", priceRange: "₹60,000 (Total)",
                    specializations: [
                        {
                            name: "General Master of Social Work",
                            price: "₹60,000 (Total)",
                            desc: "Social Work History, NGO Management, Psychology for Social Work, Rural/Urban Developments, Case Studies.",
                            career: "CSR Executive, NGO Manager, Policy Maker, Rural Health Coordinator"
                        }
                    ].map(s => ({
                        name: s.name,
                        price: s.price,
                        usps: [
                            "Pivotal master's degree targeted at rapid development in large NGOs and civil networks.",
                            "Dual degree available for extreme scale: PG Diploma in Labor Law or Industrial Relations available alongside.",
                            "Free Certs added automatically: Excel for Beginners, Fundamentals of Marketing Management.",
                            "A highly credible NAAC A++ social degree, making public sector applications incredibly robust.",
                            "Tackles full 70:30 assessments allowing practical NGO placements while testing natively."
                        ],
                        duration: "24 Months",
                        eligibility: "Graduation in any stream",
                        paymentDetails: generateTable('₹15,000', '₹30,000', '₹60,000'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹60,000 (Total)",
                    specializations: [
                        { name: "ELT & JMC", career: "Lecturer, Media Head, Publishing Editor, Content Leader", desc: "Combination of English Language Theory, Advanced Pedagogies, Mass Comm Regulations, Digital Reporting, Broadcast Management." }
                    ].map(s => ({
                        name: s.name,
                        price: "₹60,000 (Total)",
                        usps: [
                            "Elite level dual-track MA ensuring dominance in both teaching and broadcast formats.",
                            "Leverage a Dual degree with PG Diploma in Digital & Social Media Marketing.",
                            "Includes premium Free Certifications: Chat GPT & Advanced Excel functionalities.",
                            "Excellent support via Fibe giving total liquidity via simple monthly installments.",
                            "Access deeply curated interview prep modules prior to virtual placement drives."
                        ],
                        duration: "24 Months",
                        eligibility: "Graduation in any stream",
                        paymentDetails: generateTable('₹15,000', '₹30,000', '₹60,000'),
                        careerPath: s.career,
                        syllabus: s.desc
                    }))
                }
            ]
        },
        url: "https://paruluniversity.online/"
    };

    if (parulIdx > -1) {
        universities[parulIdx] = parulData;
    } else {
        universities.push(parulData);
    }

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Parul University strictly filtered and injected as per EXACT user constraints, with rich syllabus, paths, and USPs.");
}

run().catch(console.error);
