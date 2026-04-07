const fs = require('fs');
['inject_cu_data.js','inject_lpu_data.js','inject_shoolini_data.js'].forEach(f => {
    try {
        let d = fs.readFileSync('./' + f, 'utf8');
        d = d.replace(/group:\s*"PG",\s*name:\s*"MBA.*?",/g, 'group: "PG", name: "MBA (Dual Specialization)",');
        d = d.replace(/name:\s*"MBA(.*?)\s*-\s*(.*?)"/gi, 'name: "$2"');
        d = d.replace(/name:\s*"MBA Dual Specialization:\s*(.*?)"/gi, 'name: "$1"');
        fs.writeFileSync('./' + f, d);
        console.log('Fixed file:', f);
    } catch(e) {
        console.log('Error in', f, e.message);
    }
});
