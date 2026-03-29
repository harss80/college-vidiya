import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the current data
import { universities } from './src/data/universities.js';

const amity = {
    "id": "amity",
    "name": "Amity Online University",
    "logo": "https://ui-avatars.com/api/?name=AM&background=fbbf24&color=fff&size=150",
    "location": "Noida",
    "type": "State Private University",
    "level": ["UG", "PG", "Certificate"],
    "budget": 150000,
    "specializations": ["BA", "MA", "MBA", "MCA", "BCA", "BBA", "BCOM", "MCOM"],
    "accreditation": "NAAC A+, WASC, UK Quality Assured, WES, IAU",
    "fees": "Semester / Annual / Full Options",
    "placement": "Career Assistance | 30,000+ Placement Partners",
    "eligibility": "12th / 40% in Graduation (or Amity Test)",
    "ranking": "NIRF 22",
    "exams": "Merit Based / Amity MBA Test",
    "url": "https://amityonline.com/",
    "extendedDetails": {
      "usps": [
        "Legacy since 1986 (Education Group)",
        "WASC (Western Association of Schools & Colleges)",
        "UK Quality Assured & IAU Member",
        "WES Listed for international equivalency",
        "MBA admission possible via 45-min Amity Test if grad <40%"
      ],
      "payment": "Options: Semester, Annual or Full fee",
      "examination": "70:30 (30% Internal Assessment, 70% Proctored External Exam)",
      "leadLocking": "Auto Lock",
      "programs": [
        {
          "group": "UG",
          "name": "BA",
          "duration": "36 Months",
          "priceRange": "Detailed on site",
          "specializations": [
            { "name": "General", "price": "Check site", "details": "Core humanities." },
            { "name": "Vernacular", "price": "Check site", "details": "Core humanities." },
            { "name": "JMC", "price": "Check site", "details": "Journalism & Mass Comm." }
          ]
        },
        {
          "group": "PG",
          "name": "MBA",
          "duration": "24 Months",
          "priceRange": "Detailed on site",
          "specializations": [
            { "name": "Business Analytics", "price": "Check site", "details": "Data-driven decisions." },
            { "name": "Data Science", "price": "Check site", "details": "Core data science." },
            { "name": "Digital Entrepreneurship", "price": "Check site", "details": "Startup focus." },
            { "name": "Digital Marketing Management", "price": "Check site", "details": "Digital strategies." },
            { "name": "Global Finance Market", "price": "Check site", "details": "International finance." },
            { "name": "Hospitality Management", "price": "Check site", "details": "Service sector." },
            { "name": "Human Resource Management", "price": "Check site", "details": "Core HR." },
            { "name": "Information Tech", "price": "Check site", "details": "IT systems." }
          ]
        }
      ]
    }
};

const alreadyExists = universities.some(u => u.id === 'amity');
if (!alreadyExists) {
    universities.unshift(amity);
    const newContent = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
    const targetPath = join(__dirname, 'src', 'data', 'universities.js');
    fs.writeFileSync(targetPath, newContent, 'utf8');
    console.log('Amity injected to universities.js');
} else {
    console.log('Amity already exists.');
}
