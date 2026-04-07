import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const { universities } = await import(pathToFileURL('./src/data/universities.js').href);
    
    // Find Uttaranchal University (case insensitive)
    const uuIdx = universities.findIndex(u => u.name && u.name.toLowerCase().includes('uttaranchal'));
    if (uuIdx === -1) {
        console.error("Uttaranchal University not found!");
        return;
    }
    
    const targetUni = universities[uuIdx];
    
    if (!targetUni.extendedDetails) {
        targetUni.extendedDetails = {};
    }

    // Set leadLocking exactly mirroring Alliance University's style but tailored for Uttaranchal
    targetUni.extendedDetails.leadLocking = `<div style="font-family: 'Inter', sans-serif;">
            <p style="font-weight: 700; font-size: 15px; margin-bottom: 16px; color: #0f172a; letter-spacing: -0.01em;">Why Uttaranchal University stands apart (Unique USPs):</p>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; list-style-position: outside; margin-left: 16px;">Top Tier Accreditations (NAAC A+)</summary>
              <p style="margin-top: 12px; font-size: 13.5px; color: #475569; line-height: 1.6; padding-left: 16px;">Ranked among the top 5% of HEIs in India with a prestigious NAAC A+ grade, validating its rigorous academic standards and world-class faculty setup.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; list-style-position: outside; margin-left: 16px;">Pioneering Placements & Alumni Network</summary>
              <p style="margin-top: 12px; font-size: 13.5px; color: #475569; line-height: 1.6; padding-left: 16px;">Over 500+ top recruiting partners with dedicated placement assistance, ensuring students consistently land premium industry roles globally.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; list-style-position: outside; margin-left: 16px;">Advanced Blended Learning & Support</summary>
              <p style="margin-top: 12px; font-size: 13.5px; color: #475569; line-height: 1.6; padding-left: 16px;">State-of-the-art LMS featuring immersive digital content, expert masterclasses, and 1-on-1 dedicated mentoring for every student.</p>
            </details>

            <details style="margin-bottom: 0px; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
              <summary style="font-weight: 600; color: #1e293b; cursor: pointer; list-style-position: outside; margin-left: 16px;">Flexible & Accessible Programs</summary>
              <p style="margin-top: 12px; font-size: 13.5px; color: #475569; line-height: 1.6; padding-left: 16px;">UGC-entitled degrees tailored specifically for working professionals and modern learners, providing high-value learning, anytime, anywhere.</p>
            </details>
            
            <p style="margin-top: 16px; font-weight: 500; font-size: 13px; color: #64748b; padding-top: 4px;">Auto Lock lead mapping rigorously set to <strong style="color:#0f172a; background: #ea580c; color: white; padding: 3px 8px; border-radius: 4px; font-family: monospace;">LSQ = UU</strong></p>
            </div>`;

    // Only update leadLocking, do not change existing programs or specializations.
    const newStr = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    fs.writeFileSync('./src/data/universities.js', newStr, 'utf8');
    console.log("Uttaranchal UU leadLocking redesigned successfully, keeping existing data untouched!");
}

run().catch(console.error);
