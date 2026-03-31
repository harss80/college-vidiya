import fs from 'fs';

let txt = fs.readFileSync('src/pages/UniversityDetails.jsx', 'utf8');

// Replace the click handler for the spec button
// Since there could be a few variations due to formatting, I'll use a regex
txt = txt.replace(/onClick=\{\(\)\s*=>\s*setSelectedSpec\(spec\)\}/g, "onClick={() => navigate(`/mock-calls/university/${uniId}/program/${encodeURIComponent(prog.name)}/specialization/${encodeURIComponent(spec.name)}`)}");

// Also remove setSelectedSpec(null) when we click around
txt = txt.replace(/setSelectedSpec\(null\);/g, '');

// Strip out the dark panel Level 4 completely. We can just use string slice since it's large.
// Find the exact marker for Level 4
const level4Start = txt.indexOf("{/* Level 4: Spec details - Expanded Counselor Guide Panel (Full Width Bottom) */}");
if (level4Start !== -1) {
    // We should safely remove everything from this comment down to `) : selectedProgram ? (`
    const level4End = txt.indexOf(") : selectedProgram ? (", level4Start);
    if (level4End !== -1) {
        // We need to keep the `) : selectedProgram ? (` but remove what's before it
        // BUT wait, it was initially `{selectedSpec ? ( ...<div>... ) : selectedProgram ? (`
        // Since we are completely removing selectedSpec logic, the condition should just be `{selectedProgram ? (`
        
        // Let's find exactly where the selectedSpec condition starts
        // We know it is around `let { selectedSpec ...` or `const [selectedSpec, setSelectedSpec]`
        
        txt = txt.substring(0, level4Start) + "\n                                           {" + txt.substring(level4End + String(") : ").length);
    }
}

// Remove the state hook for selectedSpec
txt = txt.replace(/const\s+\[selectedSpec,\s*setSelectedSpec\]\s*=\s*useState\(null\);/g, '');

fs.writeFileSync('src/pages/UniversityDetails.jsx', txt);
console.log("UniversityDetails.jsx updated for route-based specialization!");

// Now update App.jsx
let appTxt = fs.readFileSync('src/App.jsx', 'utf8');
if (!appTxt.includes('SpecializationDetails')) {
    // Add import
    appTxt = appTxt.replace("import UniversityDetails from './pages/UniversityDetails';", "import UniversityDetails from './pages/UniversityDetails';\nimport SpecializationDetails from './pages/SpecializationDetails';");
    // Add Route
    appTxt = appTxt.replace('<Route path="mock-calls/university/:uniId" element={<UniversityDetails />} />', '<Route path="mock-calls/university/:uniId" element={<UniversityDetails />} />\n          <Route path="mock-calls/university/:uniId/program/:programName/specialization/:specName" element={<SpecializationDetails />} />');
    fs.writeFileSync('src/App.jsx', appTxt);
    console.log("App.jsx routes updated!");
}

