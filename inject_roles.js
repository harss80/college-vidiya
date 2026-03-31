import fs from 'fs';
let txt = fs.readFileSync('src/data/universities.js', 'utf8');

txt = txt.replace(/"name": "HR",/g, `"name": "HR",\n              "jobRoles": ["HR Director", "Talent Acquisition Lead", "Compensation & Benefits Manager", "Employee Relations Specialist"],`);
txt = txt.replace(/"name": "Marketing",/g, `"name": "Marketing",\n              "jobRoles": ["Brand Manager", "Chief Marketing Officer (CMO)", "Digital Marketing Director", "Market Research Analyst"],`);
txt = txt.replace(/"name": "International Business",/g, `"name": "International Business",\n              "jobRoles": ["Global Supply Chain Manager", "International Trade Specialist", "Export Manager", "Global Operations Director"],`);
txt = txt.replace(/"name": "Finance",/g, `"name": "Finance",\n              "jobRoles": ["Chief Financial Officer (CFO)", "Investment Banker", "Financial Risk Manager", "Corporate Treasurer"],`);
txt = txt.replace(/"name": "FM",/g, `"name": "FM",\n              "jobRoles": ["Financial Controller", "Portfolio Analyst", "Wealth Management Director", "Credit Risk Analyst"],`);
txt = txt.replace(/"name": "Business Analytics",/g, `"name": "Business Analytics",\n              "jobRoles": ["Data Science Manager", "Strategy Consultant", "Business Intelligence Lead", "Operations Analyst"],`);
txt = txt.replace(/"name": "IT",/g, `"name": "IT",\n              "jobRoles": ["IT Project Manager", "Chief Information Officer (CIO)", "Systems Director", "Technology Consultant"],`);

fs.writeFileSync('src/data/universities.js', txt);
console.log("Job roles injected successfully!");
