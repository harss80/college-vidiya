import fs from 'fs';

let txt = fs.readFileSync('src/data/universities.js', 'utf8');

const digitalSearch = `{
              "name": "Digital",
              "price": "As per plan",
              "details": "Advanced digital strategies and social media ecosystems."
            }`;

const digitalMarketingReplace = `{
              "name": "Digital Marketing",
              "price": "₹98,000 (Total) / ₹24,500 (Sem)",
              "details": "Advanced digital strategies, SEO ecosystems, and global online brand positioning.",
              "duration": "24 Months (8-10 hrs/week)",
              "about": "The Master of Business Administration (MBA) at Uttaranchal University is a UGC-Entitled online degree. The Digital Marketing specialization features a world-class curriculum crafted by industry experts, focusing on modern growth tactics, 1-on-1 personalized mentorship, and live interactive classes.",
              "careerScope": "Management occupations are growing 8x faster than traditional roles. Post-MBA careers include specialized digital scaling, marketing performance leadership, and growth operations, with 4.5+ Lakh jobs actively booming in the IT management sector.",
              "jobRoles": ["Performance Marketing Director", "Head of Digital Strategy", "E-commerce Growth Lead", "SEO/SEM Strategy Manager"],
              "usps": [
                "1-on-1 Personalized Mentorship assigning a dedicated mentor per student",
                "Prodigious faculty teaching a world-class intensive curriculum",
                "Specially curated Industry Immersion & real-life scenario training",
                "Complete Job Assistance targeting placement in reputed conglomerates",
                "Integrated LMS with a 24x7 huge e-library catalog"
              ],
              "paymentDetails": "<b>🔥 30% Early Bird Scholarship Applied!</b><br/><br/>• <b>Semester Fee:</b> <strike>₹35,000</strike> <b>₹24,500</b><br/>• <b>Annual Fee:</b> <strike>₹68,000</strike> <b>₹47,000</b><br/>• <b>One-Time Full Fee:</b> <strike>₹1,36,000</strike> <b>₹94,000</b><br/><br/><i>Exam Fee: ₹2,500/semester</i><br/><i>No-Cost EMI starting at ₹3,956* (Credit/Debit/UPI available)</i>",
              "certifications": "You will gain embedded marketing-centric certifications mapped directly to your electives through their skill-enhancing corporate curriculum.",
              "syllabus": [
                {
                  "semester": "Semester 1",
                  "subjects": [
                    "Principles and Practices of Management",
                    "Organizational Behaviour",
                    "Accounting for Managers",
                    "Managerial Economics",
                    "Business Communication"
                  ]
                },
                {
                  "semester": "Semester 2",
                  "subjects": [
                    "Financial Management",
                    "Human Resource Management",
                    "Marketing Management",
                    "Research Methodology",
                    "Business Law"
                  ]
                },
                {
                  "semester": "Semester 3",
                  "subjects": [
                    "Strategic Management",
                    "Digital Marketing Fundamentals",
                    "Social Media Optimization",
                    "Content Strategy & SEO"
                  ]
                },
                {
                  "semester": "Semester 4",
                  "subjects": [
                    "Business Environment",
                    "E-Commerce Management",
                    "Marketing Analytics",
                    "Project Work / Viva Voce"
                  ]
                }
              ]
            }`;

txt = txt.replace(digitalSearch, digitalMarketingReplace);

fs.writeFileSync('src/data/universities.js', txt);
console.log("Digital Marketing specialization updated!");
