import fs from 'fs';
import { pathToFileURL } from 'url';

// We import dynamic as it's an ES module that we might need to load fresh if we run multiple times
async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    const uIdx = universities.findIndex(u => u.id === 'uttaranchal-online');
    if (uIdx === -1) throw new Error("UU not found");
    const targetUni = universities[uIdx];

    // Delete top-level USPs so they don't get mixed
    if (targetUni.extendedDetails && targetUni.extendedDetails.usps) {
        delete targetUni.extendedDetails.usps;
    }

    // Helper to generate the exact UI table style
    function generateTable(semFeeStr, yearFeeStr, fullFeeStr, scholarshipText) {
        return `<div style="font-family: 'Inter', sans-serif; background: linear-gradient(145deg, #ffffff, #f8f9fa); border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
  <div style="background: rgba(37, 99, 235, 0.1); color: #2563eb; font-weight: 600; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; font-size: 13px;">
    🚀 ${scholarshipText}
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
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Yearly Fee</td>
        <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${yearFeeStr}</td>
      </tr>
      <tr>
        <td style="padding: 12px 8px; color: #334155; font-weight: 500;">Full Program</td>
        <td style="padding: 12px 8px; color: #059669; font-weight: 700;">${fullFeeStr}</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top: 16px; font-size: 12px; color: #64748b; background: #f8fafc; padding: 10px; border-radius: 6px; border-left: 3px solid #cbd5e1;">
    <p style="margin: 0 0 4px 0;"><i>Note: Reg. & Exam Fee may apply separately per semester.</i></p>
    <p style="margin: 0;"><i>💳 No-Cost EMI available via Credit/Debit/UPI</i></p>
  </div>
</div>`;
    }

    const genUsps = (degree) => [
        `Research-based and World-Class ${degree} Curriculum`,
        `1-on-1 Personalised Mentorship for ${degree} candidates`,
        `Reputed ${degree} Degree from a Top Ranked University (NAAC A+)`,
        `Integrated LMS & massive e-library access 24/7`,
        `Comprehensive Job Assistance targeting premium profiles`
    ];

    // Data maps
    const config = {
        'MBA': {
            sem: '₹24,500', year: '₹47,000', full: '₹94,000', scholarship: 'Up to 30% Scholarship Applied!', priceRange: '₹94,000 (Total)',
            specs: [
                'Marketing Management', 'Financial Management', 'Human Resource Management', 
                'Business Analytics', 'Information Technology', 'Digital Marketing', 
                'International Business', 'Logistics and Supply Chain Management'
            ]
        },
        'BBA': {
            sem: '₹16,000', year: '₹32,000', full: '₹96,000', scholarship: 'Scholarships available on merit!', priceRange: '₹96,000 (Total)',
            specs: ['Marketing Management', 'Financial Management', 'Human Resource Management']
        },
        'MCA': {
            sem: '₹24,000', year: '₹46,000', full: '₹92,000', scholarship: 'Up to 20% Scholarship Applied!', priceRange: '₹92,000 (Total)',
            specs: ['General'] // User requested strict General for MCA
        },
        'BCA': {
            sem: '₹16,000', year: '₹32,000', full: '₹96,000', scholarship: 'Scholarships available on merit!', priceRange: '₹96,000 (Total)',
            specs: ['General'] // Adding Data Analytics/Cyber Sec logic separately
        },
        'BA': {
            sem: '₹9,200', year: '₹18,400', full: '₹55,200', scholarship: 'Scholarships available on merit!', priceRange: '₹55,200 (Total)',
            specs: ['General']
        }
    };

    // Make sure all programs exist
    targetUni.extendedDetails.programs.forEach(prog => {
        if (!config[prog.name]) return;
        const info = config[prog.name];
        
        prog.priceRange = info.priceRange;
        
        let newSpecs = [];
        info.specs.forEach(specName => {
            // retain existing details if possible
            let existing = prog.specializations.find(s => s.name === specName) || {};
            
            // Build specializations
            let s = {
                name: specName,
                price: `${info.full} (Total) / ${info.sem} (Sem)`,
                duration: existing.duration || prog.duration,
                eligibility: existing.eligibility || 'Check website for specific marks required.',
                about: existing.about || `The ${prog.name} program at Uttaranchal University features a world-class curriculum crafted by industry experts.`,
                careerScope: existing.careerScope || `Growing opportunities in modern industries.`,
                details: existing.details || `Core focus on ${specName} applications.`,
                usps: genUsps(prog.name),
                paymentDetails: generateTable(info.sem, info.year, info.full, info.scholarship)
            };
            
            if (existing.jobRoles) s.jobRoles = existing.jobRoles;
            if (existing.certifications) s.certifications = existing.certifications;
            if (existing.syllabus) s.syllabus = existing.syllabus;
            
            // MCA Bridge Course logic
            if (prog.name === 'MCA') {
                s.eligibility = "BCA/B.Sc. (Computer Science/IT) with 50%. *Note: Bridge Course is COMPULSORY for Non-Mathematics background students as per university norms.*";
                s.details = "Advanced software engineering and application lifecycle management.";
            }

            // BCA focus
            if (prog.name === 'BCA') {
                s.details = "Core computer applications with curriculum focus on Data Analytics, Cyber Security, etc.";
            }

            newSpecs.push(s);
        });
        
        prog.specializations = newSpecs;
    });

    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Uttaranchal UI redesigned and updated successfully!");
}

run().catch(console.error);
