import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    let christIdx = universities.findIndex(u => u.name.toLowerCase().includes('christ') || u.id === 'christ-online');
    
    function formatMoney(amount) {
        if (typeof amount === 'string') return amount;
        return '₹' + amount.toLocaleString('en-IN');
    }

    function generateTable(totalFeeBlock, durationMonths, examFeeYear = 3000) {
        let totalFee = typeof totalFeeBlock === 'number' ? totalFeeBlock : parseInt(totalFeeBlock.toString().replace(/[^0-9]/g, '')) || 0;
        let semesters = durationMonths / 6;
        let years = durationMonths / 12;
        let semFee = totalFee > 0 && semesters > 0 ? Math.round(totalFee / semesters) : null;
        let annualFee = semFee ? semFee * 2 : null;
        
        let semline = semFee ? `<tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Per Semester Fee</td>
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
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Application Fee (Excl. gst)</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹1,500</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Admission Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹5,000</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Examination Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">₹3,000 / Year</td>
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
    <p style="margin: 0 0 6px 0; font-weight: 700; color: #4338ca;">GrayQuest Exact EMI Framework:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.5;">
      <li><b>3 Months Tenure:</b> 2.25% Rate of Interest.</li>
      <li><b>6 Months Tenure:</b> 3.99% Rate of Interest.</li>
      <li><b>9 Months Tenure:</b> 5.95% Rate of Interest.</li>
      <li><b>12 Months Tenure:</b> 8.05% Rate of Interest.</li>
    </ul>
  </div>
</div>`;
    }

    const christData = {
        id: "christ-online",
        name: "Christ University Online",
        logo: "https://ui-avatars.com/api/?name=Christ+University&background=4f46e5&color=fff&size=150",
        location: "Bangalore, Karnataka",
        type: "Deemed to be University",
        level: ["UG", "PG"],
        budget: 175000,
        specializations: ["MCA", "BCA", "M.Sc", "B.Com", "MA"],
        accreditation: "NAAC A+ | NIRF 63 | QS World University Ranking | WURI | AICTE",
        fees: "Annual / Full Wise | GrayQuest EMI Powered",
        placement: "Project-Based Cases | Live & Recorded Delivery",
        eligibility: "UG: 10+2 | PG: Graduation",
        ranking: "QS World Sustainability Ranking | SES REC Accreditation",
        exams: "Continuous Assessment (30%) + Proctored Exam (70%) | Passing: 40%",
        extendedDetails: {
            examination: "30% Assessment and 70% Proctored Online Exams natively scaling. Passing Criteria precisely maintained at 40%.",
            leadLocking: `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Christ University is Elite (Unique Details):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">1. Global Alumni Community</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Be a part of Christ University’s Global Alumni Community natively tracking heavy connections worldwide.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">2. Coursera Industry-Recognized Certificates</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Gain explicit Industry-Recognized Certificates Through the massive direct Coursera integration.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">3. Startups Incubation & Support</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Provides dedicated Incubation & Consultancy Support for entirely enabling student driven Startups natively.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">4. Co-Publishing Opportunities</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Extremely rare chance enabling Co-Publishing Opportunities specifically with CHRIST Research Faculty.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">5. Exceptional Library Access</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Gain rigorous Access to One of India's Absolute Best Libraries effectively mapping digital and regional scales.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">6. Native Research & Innovation Labs</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Secures On-Campus Research & Innovation Labs seamlessly allowing you to integrate hybrid experimentation grids.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">7. Industry Connect & Fire Chats</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Heavily driven Industry Connects and Executive Fire Chats natively aligning you explicitly to corporate C-Suites.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">8. Masterclasses with International Faculty</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Exclusively organized Masterclasses taught explicitly alongside International globally recognized Faculty.</p>
            </details>
            
            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; font-size: 14px;">9. Intensive Career & Life Skills</summary>
              <p style="margin: 10px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6; padding-left: 2px;">Direct Training mapping Career & Life Skills specifically handling Leadership Skills, Professional Skills, Communication, and Digital Skills safely.</p>
            </details>

            <div style="background-color:#f1f5f9; padding: 10px; margin-top: 14px; border-radius: 6px;">
                <p style="margin: 0 0 6px 0; font-weight: 700; color: #334155; font-size: 13px;">Christ University Class Timings Strategy:</p>
                <ul style="font-size: 12px; margin:0; padding-left:14px; color:#475569;">
                    <li><b>Friday:</b> 06:00 PM to 07:00 PM & 07:15 PM to 08:15 PM</li>
                    <li><b>Saturday:</b> 06:00 AM to 07:30 AM, 06:00 PM to 07:00 PM & 07:15 PM to 08:15 PM</li>
                    <li><b>Sunday:</b> 09:00 AM to 10:30 AM & 10:45 AM to 12:15 PM</li>
                </ul>
            </div>

            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #e0e7ff; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = Christ</strong></p>
            </div>`,
            payment: "Christ explicitly mandates the application fee at exactly INR 1,500+GST matching admission flows via document uploads and clear interviews natively. The Admission fee stands strictly at INR 5,000 + examination fee standing at precisely INR 3,000 structurally per year ensuring total tracking alongside Flexible EMI options ranging specifically via GrayQuest logically.",
            programs: [
                {
                    group: "UG", name: "B.Com", duration: "36 Months", priceRange: "₹1,60,000",
                    specializations: [
                        { name: "General", career: "Corporate Accountant, Senior Auditor, Ops Head", desc: "Foundational microeconomics, intense accounting matrices, and advanced corporate tax ledgers natively modeled alongside modern business ethics." }
                    ].map(s => ({
                        name: s.name, price: "₹1,60,000 (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict Project-Based Case Studies and Analysis integration mapped heavily.",
                            "Access Live, Interactive Sessions and elite Recorded Sessions/Podcasts effectively.",
                            "Utilizing GrayQuest 3 to 12 months EMI scaling seamlessly."
                        ],
                        duration: "36 Months", eligibility: "10+2 securely mapped from any recognized centralized or state educational board.", paymentDetails: generateTable(160000, 36)
                    }))
                },
                {
                    group: "UG", name: "BCA", duration: "36 Months", priceRange: "₹1,75,000",
                    specializations: [
                        { name: "General", career: "Junior Systems Architect, Full Stack Trainee, Code Ops", desc: "Algorithm paradigms seamlessly structuring C++, Java, Database networks, and foundational server logic." }
                    ].map(s => ({
                        name: s.name, price: "₹1,75,000 (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Flexible and exceptionally curated tech-centered delivery networks directly tied.",
                            "Direct GrayQuest EMI arrays matching explicitly mapped loops perfectly.",
                            "Proctored Online Exams smoothly keeping continuous assessment strictly at 30%."
                        ],
                        duration: "36 Months", eligibility: "10+2 perfectly mapped from any recognized board. Tech base strictly advantageous.", paymentDetails: generateTable(175000, 36)
                    }))
                },
                {
                    group: "PG", name: "MCA", duration: "24 Months", priceRange: "₹2,30,000",
                    specializations: [
                        { name: "General", career: "Senior System Dev, Elite DBA, Tech Node Architect", desc: "Aggressive cloud deployment mapping, heavy deep architecture logic seamlessly linking MERN structures globally." }
                    ].map(s => ({
                        name: s.name, price: "₹2,30,000 (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Connect straight with International Faculties and natively integrated elite podcasts.",
                            "Maintain a 70% proctored logic ensuring heavily verified graduation networks exactly.",
                            "Track natively through Grayquest's 3-12 Month tenures ensuring extreme fee safety."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's naturally focused across IT, Math or Tech based disciplines flawlessly.", paymentDetails: generateTable(230000, 24)
                    }))
                },
                {
                    group: "PG", name: "MA", duration: "24 Months", priceRange: "₹75,000 - ₹1,00,000",
                    specializations: [
                        { name: "Applied Economics", priceVal: 100000, career: "Global Economic Strategist, Quantitative Ops, Fiscal Director", desc: "Core predictive analytics modeling intense socio-political impacts cleanly across international financial chains." },
                        { name: "English with Communication Studies", priceVal: 75000, career: "Senior Editor, Media Coms Exec, Lead Storyteller", desc: "Deep analytical literature mapping integrated actively via massive corporate behavioral logic and media schemas." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Strict Project-Based Analysis ensuring massive real-world behavioral impact seamlessly.",
                            "Directly mapped Grayquest structure scaling limits exactly from 2.25% to 8.05%.",
                            "Taught exclusively utilizing Live Interactive mapping securely tracking " + s.name + "."
                        ],
                        duration: "24 Months", eligibility: "Bachelors perfectly traversing exact foundational discipline matching.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                },
                {
                    group: "PG", name: "M.Sc", duration: "24 Months", priceRange: "₹2,50,000 - ₹2,75,000",
                    specializations: [
                        { name: "Data Science", priceVal: 250000, career: "Data Architect, Master Data Scientist, Tech Lead", desc: "Massive statistical learning naturally tracking deep tabular data, NLP structuring, and predictive clustering." },
                        { name: "Artificial Intelligence and Machine Learning", priceVal: 275000, career: "AI Logic Modeler, Deep Machine Dev, ML Architect", desc: "Neural pipeline logics natively bypassing common AI bounds managing extreme server matrices securely." }
                    ].map(s => ({
                        name: s.name, price: formatMoney(s.priceVal) + " (Total Course Fee)", careerPath: s.career, syllabus: s.desc,
                        usps: [
                            "Top tier Live Sessions addressing precisely " + s.name + " frameworks actively.",
                            "Unmatched structural tests mapping 70/30 exam parameters exactly scaling.",
                            "Heavy payment liquidity managed officially by explicit Grayquest limits seamlessly."
                        ],
                        duration: "24 Months", eligibility: "Bachelor's ideally maintaining rigorous Mathematics / Stats / Tech logic cleanly.", paymentDetails: generateTable(s.priceVal, 24)
                    }))
                }
            ]
        },
        url: "https://online.christuniversity.in/"
    };

    if (christIdx > -1) {
        universities.splice(christIdx, 1);
    }
    
    let realOldIdx = universities.findIndex(u => u.name.toLowerCase().includes('christ'));
    if (realOldIdx > -1) {
        universities[realOldIdx] = christData;
    } else {
        universities.push(christData);
    }

    const newStr = 'export const universities = ' + JSON.stringify(universities, null, 2) + ';\n';
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Christ University heavily updated to exact online metrics natively mapped with requested precise parameters!");
}

run().catch(console.error);
