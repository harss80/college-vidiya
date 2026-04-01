export const specializationData = [
  // ==========================================
  // CORE DEGREES
  // ==========================================
  {
    name: "Master of Business Administration (MBA)",
    acronyms: ["mba", "master of business administration", "pg"],
    category: "Management",
    type: "Degree",
    whatIsIt: "The ultimate corporate passport. An MBA doesn't teach you 'how to do the work'—it teaches you how to manage the people doing the work. It transforms a normal employee into a team leader or decision-maker.",
    secretFact: "Most students do an MBA just for 'placements'. But the real value of an MBA is 'networking'. You are paying to sit in a room with future CEOs, startup founders, and industry leaders.",
    usps: [
      "Instantly upgrades your salary bracket regardless of your previous graduation background.",
      "The only degree where cross-industry switching is accepted (e.g., Engineer turning into a Finance Head).",
      "Essential if you ever want to reach Vice-President or Director levels in a corporate hierarchy."
    ]
  },
  {
    name: "Bachelor of Business Administration (BBA)",
    acronyms: ["bba", "bachelor of business administration", "ug"],
    category: "Management",
    type: "Degree",
    whatIsIt: "A 3-year foundational program that teaches you how modern companies operate. You learn the basics of marketing, finance, HR, and accounting immediately after 12th.",
    secretFact: "Unlike B.Com which is purely accounting, BBA is highly communication and presentation-driven. If a student is highly extroverted but hates heavy math, BBA is the exact perfect choice.",
    usps: [
      "The most seamless stepping stone to a high-tier MBA program.",
      "Gets you out of the 'science/commerce' trap and into pure practical corporate readiness.",
      "Startups prefer BBA grads for sales, marketing, and operations roles over regular graduates."
    ]
  },
  {
    name: "Master of Computer Applications (MCA)",
    acronyms: ["mca", "master of computer applications", "pg", "it"],
    category: "Tech & IT",
    type: "Degree",
    whatIsIt: "The absolute equivalent to a B.Tech/M.Tech in Computer Science, but designed for students from non-engineering backgrounds (like BCA or B.Sc). It makes you a hardcore software developer.",
    secretFact: "IT companies literally do not differentiate between a B.Tech CS grad and an MCA grad. The salary, the role, and the interview processes are exactly the same.",
    usps: [
      "The fastest way to enter massive tech giants (TCS, Infosys, Google, Microsoft) without clearing JEE.",
      "Highly tech-focused—zero filler subjects like physics or chemistry.",
      "Perfect for BCA / B.Sc students seeking a massive 200% salary jump."
    ]
  },
  {
    name: "Bachelor of Computer Applications (BCA)",
    acronyms: ["bca", "bachelor of computer applications", "ug", "it"],
    category: "Tech & IT",
    type: "Degree",
    whatIsIt: "A 3-year pure coding and software degree. It completely skips the physics/chemistry that B.Tech forces on you and focuses 100% on programming languages, databases, and web development.",
    secretFact: "Many students with Arts or Commerce backgrounds in 12th think they can never become software engineers. BCA doesn't require 12th Science/Maths in many universities! It is the ultimate backdoor into IT.",
    usps: [
      "Zero 'filler' subjects. You learn exactly what IT companies test you on.",
      "In 3 years, you learn the exact same coding skills that take B.Tech students 4 years.",
      "Massive demand as full-stack developers in the startup ecosystem."
    ]
  },
  {
    name: "Bachelor of Commerce (B.Com)",
    acronyms: ["b.com", "bcom", "commerce", "ug"],
    category: "Commerce & Finance",
    type: "Degree",
    whatIsIt: "The foundational degree of the financial world. It strictly focuses on accounting, corporate taxation, economics, and business law. It teaches you how money is recorded and regulated.",
    secretFact: "A plain 'General B.Com' has very low market value today. B.Com only becomes powerful if paired with a professional certification like CA, CS, CMA, or CPA.",
    usps: [
      "The mathematically safest degree for students who want to enter banking or auditing.",
      "Relaxed curriculum allows students massive free time to prepare for Govt Exams or CA/UPSC.",
      "Every single registered business absolutely needs a commerce graduate for basic bookkeeping."
    ]
  },
  {
    name: "Master of Commerce (M.Com)",
    acronyms: ["m.com", "mcom", "commerce", "pg"],
    category: "Commerce & Finance",
    type: "Degree",
    whatIsIt: "A heavy academic extension of B.Com. It dives extremely deep into advanced corporate taxation, macroeconomics, auditing principles, and financial administration.",
    secretFact: "In the corporate sector, an MBA Finance is usually preferred over an M.Com. However, if a student wants to become a Professor, pursue a PhD, or clear the UGC-NET exam, M.Com is completely mandatory.",
    usps: [
      "The absolute best degree for entering the Teaching and Academic Research field in Commerce.",
      "Provides deep, undisputed authority in auditing and direct/indirect taxation.",
      "Highly respected in Government banking and PSU job interviews."
    ]
  },
  {
    name: "Bachelor / Master of Arts (BA / MA)",
    acronyms: ["ba", "ma", "arts", "humanities", "b.a", "m.a", "ug", "pg"],
    category: "Arts & Humanities",
    type: "Degree",
    whatIsIt: "The study of human society, history, political science, and literature. Rather than teaching you a 'technical' skill, it trains you how to think critically, write powerfully, and understand systemic human behavior.",
    secretFact: "Parents often think 'Arts means the student is weak'. This is horribly wrong. Top consulting firms (like McKinsey) and global media houses specifically hire Arts grads because they solve complex human problems better than engineers.",
    usps: [
      "The absolute best foundational degree for UPSC / IAS / Civil Services preparation.",
      "Tons of free time during the degree for skill-building, internships, or Govt exam prep.",
      "Leads to powerful, impact-driven careers in Journalism, NGOs, or Public Policy."
    ]
  },
  {
    name: "Bachelor / Master of Science (B.Sc / M.Sc)",
    acronyms: ["bsc", "msc", "science", "ug", "pg", "b.sc", "m.sc"],
    category: "Science & Tech",
    type: "Degree",
    whatIsIt: "A hardcore academic dive into pure sciences (Physics, Chemistry, Math) or applied sciences (Data Science, Biotech). It is highly research-and-theory driven compared to the purely applied B.Tech.",
    secretFact: "Unless you are doing a highly specialized B.Sc (like Data Science or IT), a general B.Sc is purely a stepping stone for academia/teaching or massive government scientific exams.",
    usps: [
      "Essential for entering purely scientific research organizations (ISRO, DRDO, BARC).",
      "Very low absolute fee structure compared to Engineering (B.Tech).",
      "Provides extremely deep subject matter expertise rather than superficial corporate training."
    ]
  },
  {
    name: "Bachelor of Technology (B.Tech)",
    acronyms: ["btech", "b.tech", "engineering", "ug"],
    category: "Tech & IT",
    type: "Degree",
    whatIsIt: "The gold standard of undergraduate technical education in India. A rigorous 4-year program training students to literally engineer hardware or software solutions from the ground up.",
    secretFact: "Only 20% of B.Tech students actually get jobs in 'core engineering' (like mechanical or civil). Almost 80% eventually learn to code and get placed in IT/Software companies regardless of their branch.",
    usps: [
      "Unmatched global prestige; Silicon Valley thrives heavily on Indian B.Tech graduates.",
      "Trains intense logical problem-solving capable of cracking any corporate interview.",
      "Highest average starting package compared to any other undergraduate degree."
    ]
  },

  // ==========================================
  // ENTRANCE EXAMS
  // ==========================================
  {
    name: "Common Admission Test (CAT)",
    acronyms: ["cat", "iim", "mba exam"],
    category: "Entrance Exam",
    type: "Exam",
    whatIsIt: "The most difficult and prestigious MBA entrance exam in India, conducted by the IIMs. It tests extreme high-speed quantitative aptitude, verbal ability, and deep logical reasoning.",
    secretFact: "CAT doesn't just test math; it tests 'pressure handling'. Actually, a completely average student who solves past 10 years papers thoroughly has a higher chance than a genius who purely relies on talent.",
    usps: [
      "The only gateway to the 'Holy Trinity' of IIMs (Ahmedabad, Bangalore, Calcutta).",
      "Scoring 99%ile practically guarantees a heavily funded bank loan for your MBA fee.",
      "Universally accepted by non-IIM top colleges (FMS, MDI, SPJIMR) as well."
    ]
  },
  {
    name: "Management Aptitude Test (MAT)",
    acronyms: ["mat", "mba exam", "management aptitude"],
    category: "Entrance Exam",
    type: "Exam",
    whatIsIt: "A standard national-level MBA entrance exam conducted by AIMA. It is significantly easier than CAT and happens 4 times a year, giving students multiple chances to perform.",
    secretFact: "Top Tier-1 colleges (like IIMs or XLRI) DO NOT accept MAT. MAT is exclusively meant for Tier-2 and Tier-3 private management colleges. It is the ultimate 'backup' exam.",
    usps: [
      "Happens 4 times a year, so you never waste a full academic year if you fail once.",
      "Math section is far easier than CAT, favoring non-engineering students.",
      "Accepted by over 600+ B-Schools across India."
    ]
  },
  {
    name: "Xavier Aptitude Test (XAT)",
    acronyms: ["xat", "xlri", "mba exam"],
    category: "Entrance Exam",
    type: "Exam",
    whatIsIt: "Considered the toughest MBA entrance exam in the country (often tougher than CAT). Conducted by XLRI Jamshedpur, it includes a notorious 'Decision Making' section that tests pure corporate ethics.",
    secretFact: "If a student has a low grading history in 10th and 12th, XAT/XLRI does not care. Unlike IIMs which reject students for poor past academic scores, XLRI focuses purely on the XAT exam score and interview.",
    usps: [
      "Direct gateway to XLRI (India’s #1 HR College) and SPJIMR.",
      "Tests actual business decision-making rather than just rote mathematical formulas.",
      "Forgiving towards past academic failures (10th/12th marks)."
    ]
  },
  {
    name: "Common University Entrance Test (CUET)",
    acronyms: ["cuet", "ug exam", "cuet ug", "cuet pg"],
    category: "Entrance Exam",
    type: "Exam",
    whatIsIt: "The massive new national entrance exam that practically replaced 12th board marks for undergraduate central university admissions (like DU, JNU, BHU).",
    secretFact: "12th board marks literally do not matter for Delhi University anymore. A student with 60% in boards who scores 99% in CUET will easily beat a 95% board topper who bombed the CUET.",
    usps: [
      "Completely equalizes the playing field across different state boards.",
      "Allows testing in 13+ regional languages, breaking the English barrier.",
      "A massive single window for entering 250+ central and state universities."
    ]
  },
  {
    name: "NMAT by GMAC (NMAT)",
    acronyms: ["nmat", "nmims", "mba exam"],
    category: "Entrance Exam",
    type: "Exam",
    whatIsIt: "An adaptive, candidate-friendly MBA entrance exam specifically meant for entering NMIMS Mumbai and a few other premium private B-Schools. 'Adaptive' means the exam adapts to your skill level live.",
    secretFact: "Unlike CAT, there is NO negative marking in NMAT. Furthermore, students can give 'retakes' to improve their scores, much like global exams (GMAT).",
    usps: [
      "Gateway to NMIMS Mumbai, one of India's elite marketing & finance colleges.",
      "No negative marking means students can aggressively guess tough questions.",
      "You can choose the order of sections during the exam flexibly."
    ]
  },
  {
    name: "Symbiosis National Aptitude Test (SNAP)",
    acronyms: ["snap", "symbiosis", "mba exam"],
    category: "Entrance Exam",
    type: "Exam",
    whatIsIt: "A heavily speed-based MBA entrance exam specifically for the 16 Symbiosis institutes in India (including SIBM and SCMHRD). It’s only 60 minutes long.",
    secretFact: "SNAP has entirely removed Reading Comprehension (RC) and Data Interpretation (DI) from its exam. It purely tests high-speed vocabulary and quick logical puzzles.",
    usps: [
      "The shortest major MBA exam in India (just 1 hour).",
      "Extremely friendly to students who hate long reading comprehension passages.",
      "Gateway to SIBM Pune, one of the elite corporate networking hubs of India."
    ]
  },
  {
    name: "Common Management Admission Test (CMAT)",
    acronyms: ["cmat", "nta exams", "mba exam"],
    category: "Entrance Exam",
    type: "Exam",
    whatIsIt: "A national-level MBA entrance exam conducted by NTA. It is slightly tougher than MAT but easier than CAT. It is widely accepted by top AICTE-approved institutions like JBIMS and K.J. Somaiya.",
    secretFact: "CMAT has a unique 'Innovation & Entrepreneurship' section. If a student is well-read in startups, funding, and general business news, they can massively boost their percentile here.",
    usps: [
      "Accepted by elite Maharashtra colleges (JBIMS, SIMSREE) for All-India candidates.",
      "Generous time limit (180 mins for 100 questions) makes it a low-pressure exam.",
      "Highly scoring for students with strong General Knowledge (GK) and business awareness."
    ]
  },

  // ==========================================
  // SPECIALIZATIONS
  // ==========================================
  {
    name: "Human Resource Management (HR)",
    acronyms: ["hr", "human resource", "hrm", "leadership"],
    category: "Management",
    type: "Specialization",
    whatIsIt: "HR is NOT just taking interviews and organizing rangoli competitions. It is the corporate science of maximizing employee output, handling massive corporate conflicts, and ensuring labor law compliance.",
    secretFact: "If you hate Maths but still want a massive corporate package, HR is the golden ticket. It relies 90% on Emotional Intelligence, negotiation, and corporate psychology.",
    usps: [
      "Every structured company physically requires an HR department—zero risk of the industry 'dying'.",
      "No coding, no heavy accounting, no complex math.",
      "Clear, highly respected pathway to C-Suite leadership (CHRO)."
    ]
  },
  {
    name: "Marketing & Digital Marketing",
    acronyms: ["marketing", "sales", "digital marketing", "seo"],
    category: "Management",
    type: "Specialization",
    whatIsIt: "Marketing is consumer psychology mixed with internet data. It ranges from designing massive brand campaigns (like Zomato's ads) to running hyper-targeted Instagram and Google Ad algorithms.",
    secretFact: "Students think Marketing is 'sales' (door-to-door selling). Real modern marketing is sitting at a laptop, analyzing spreadsheet data, optimizing 'Cost Per Click', and controlling a million-dollar ad budget.",
    usps: [
      "Marketers directly bring in revenue, making them the most protected employees during mass lay-offs.",
      "Highly creative, dynamic, day-to-day work avoiding boring monotonous desk routines.",
      "The easiest skill to freelance internationally or start your own ad agency with zero initial investment."
    ]
  },
  {
    name: "Finance & Investment Banking",
    acronyms: ["finance", "fin", "investment", "fintech"],
    category: "Commerce & Finance",
    type: "Specialization",
    whatIsIt: "The core science of money multiplication. You analyze market risks, decide which startup your company should buy (Mergers & Acquisitions), and manage multi-million dollar institutional portfolios.",
    secretFact: "You do not need to be a 'Math Genius'. Finance is basic arithmetic combined with immense logical foresight and understanding of how geopolitics (like a war) affects stock prices.",
    usps: [
      "Unarguably the highest ceiling for corporate bonuses and wealth accumulation.",
      "Leads directly into elite sectors like Venture Capital, Hedge Funds, and Investment Banking.",
      "You inherently learn how to build and maintain your own personal wealth while doing your job."
    ]
  },
  {
    name: "Artificial Intelligence & Machine Learning (AI/ML)",
    acronyms: ["ai", "ml", "artificial intelligence", "machine learning"],
    category: "Tech & IT",
    type: "Specialization",
    whatIsIt: "You literally teach computer systems to think, learn from errors, and make decisions without being explicitly coded. You are architecting the exact brains behind self-driving cars and ChatGPT.",
    secretFact: "Students jump into AI thinking it's purely 'smart coding'. Beware: over 60% of AI development is hardcore Statistics, Calculus, and painstakingly organizing messy raw client data.",
    usps: [
      "The undisputed most valuable technological skill on the planet right now.",
      "Massive demand-supply gap means AI engineers negotiate their own exorbitant salaries.",
      "You are 'future-proofing' your career—you are building the robots, so the robots won't replace you."
    ]
  },
  {
    name: "Data Science & Analytics",
    acronyms: ["data science", "ds", "analytics", "business analytics"],
    category: "Tech & IT",
    type: "Specialization",
    whatIsIt: "Every time you use Swiggy, millions of data points are generated. Data Scientists extract this raw chaotic data, organize it, and tell the CEO exactly *what product users will buy next* based on hidden patterns.",
    secretFact: "A Data Scientist will almost never build the actual mobile app. Their sole job is to manipulate the database *behind* the app to uncover business secrets that increase profit.",
    usps: [
      "Universally known as the 'Sexiest Job of the 21st Century' due to extreme corporate reliance on data.",
      "The perfect bridge for someone who understands BOTH technology and business strategy.",
      "Applicable across every single industry: Sports, Healthcare, Finance, and E-commerce."
    ]
  },
  {
    name: "Supply Chain & Logistics Management",
    acronyms: ["scm", "supply", "chain", "logistics", "shipping"],
    category: "Management",
    type: "Specialization",
    whatIsIt: "The massively complex puzzle of moving physical goods globally. From sourcing cotton in India, manufacturing shirts in Bangladesh, to delivering it via Amazon Prime in New York within 2 days.",
    secretFact: "Students think SCM is 'managing a dusty godown'. In reality, modern SCM utilizes advanced AI route-prediction algorithms and intense multi-million dollar vendor negotiations.",
    usps: [
      "Post-COVID, CEOs realized Supply Chain is the most critical organ of a company. Demand exploded.",
      "Highly dynamic roles involving international travel, vendor relations, and crisis problem-solving.",
      "Heavily recruited by corporate giants like Amazon, Maersk, Apple, and Flipkart."
    ]
  },
  {
    name: "Cyber Security",
    acronyms: ["cyber", "security", "hacking", "ethical hacking"],
    category: "Tech & IT",
    type: "Specialization",
    whatIsIt: "You are the digital bodyguard of a corporation. You actively penetrate the company's own networks to find weaknesses (Ethical Hacking) before Russian or Chinese hackers exploit them.",
    secretFact: "The movies lie—you don't just furiously type on a keyboard in a dark room. 50% of a Cyber Security role is enforcing 'Compliance' and training careless employees not to click on phishing links.",
    usps: [
      "An absolutely massive global shortage of millions of unfilled cyber security professionals.",
      "Highly respected 'hero' role within corporate defense infrastructures.",
      "Government, Intelligence Agencies, and Defense sectors are the primary elite recruiters."
    ]
  },
  {
    name: "International Finance & ACCA",
    acronyms: ["acca", "international finance", "global finance", "ifrs"],
    category: "Commerce & Finance",
    type: "Specialization",
    whatIsIt: "ACCA is a globally recognized UK-based accounting body. This specialization merges standard Indian accounting with global financial reporting standards (IFRS), giving you authority to work in 180+ countries.",
    secretFact: "If you want to work abroad (UK, Canada, Dubai), a standard Indian B.Com is mathematically useless. ACCA gives you direct regulatory authority to sign off on international corporate audits.",
    usps: [
      "Instantly converts a generic B.Com into a massive, globally-accepted professional weapon.",
      "The most direct pathway to getting hired by the 'Big 4' (Deloitte, PwC, EY, KPMG).",
      "Saves years of external preparation since ACCA subjects are integrated directly into the university semesters."
    ]
  },
  {
    name: "Banking, Financial Services & Insurance (BFSI)",
    acronyms: ["bfsi", "banking", "insurance", "financial services"],
    category: "Commerce & Finance",
    type: "Specialization",
    whatIsIt: "A hyper-specialized vertical of finance entirely dedicated to how commercial banks, mutual funds, and massive insurance conglomerates operate, lend money, and manage institutional risk.",
    secretFact: "Unlike generic Finance (which manages a specific company's internal money), BFSI professionals literally manage the flow of public and institutional money in the macro-economy.",
    usps: [
      "Direct entry pipeline into the most cash-rich and highly regulated sector of the global economy.",
      "Notoriously stable operations with massive institutional bonuses and immense job security.",
      "Perfect for students obsessed with macroeconomic trends (repo rates, inflation) rather than corporate equity."
    ]
  },
  {
    name: "Hospital & Healthcare Management",
    acronyms: ["hospital", "healthcare", "pharma", "health"],
    category: "Healthcare",
    type: "Specialization",
    whatIsIt: "Managing the massive administrative, financial, logistical, and operational machineries of super-specialty hospitals, clinical tech startups, and massive pharmaceutical supply chains.",
    secretFact: "Student misconception: 'I need to be a doctor to work in a hospital'. The absolute opposite is true. Doctors hate administration. Hospitals desperately need corporate MBAs to run the business side.",
    usps: [
      "Taps into a massive, heavily recession-proof multi-billion dollar healthcare sector.",
      "Allows you to command massive authority in a clinical environment without facing medical entrance exams.",
      "Direct corporate pathways to becoming a Hospital Director or Dean of Administration."
    ]
  },
  {
    name: "Travel, Tourism & Hospitality",
    acronyms: ["travel", "tourism", "hospitality", "airlines"],
    category: "Specialized",
    type: "Specialization",
    whatIsIt: "Managing the massive ecosystem of human travel. This includes running luxury 5-star hotel chains, managing complex airline operations, directing international cruise ships, and curating massive global tours.",
    secretFact: "It's not just 'going on a holiday for free'. Hospitality is famous for its grueling shifts and extreme demand for absolute perfection under high-pressure customer service situations.",
    usps: [
      "The most glamorous industry with lifestyle perks like drastically discounted global flights and luxury stays.",
      "Massive international mobility—a hotel manager in Mumbai can easily transfer properties to Dubai or London.",
      "Post-COVID 'revenge travel' has sent the industry's demand for capable managers through the roof."
    ]
  },
  {
    name: "Cloud Computing & DevOps",
    acronyms: ["cloud", "aws", "azure", "infrastructure", "devops"],
    category: "Tech & IT",
    type: "Specialization",
    whatIsIt: "Companies no longer host their data on physical servers in their office; they use massive internet data centers (Cloud). DevOps completely automates how software gets updated without crashing.",
    secretFact: "Cloud Engineers rarely write the actual app code (like a frontend developer does). Their job is to construct the massive invisible architectural infrastructure that ensures Swiggy/Netflix never experiences downtime.",
    usps: [
      "Nearly 90% of global companies have definitively migrated to the cloud; corporate demand is staggering.",
      "Direct integration with top certifications (AWS, Azure, GCP) which practically guarantee placements.",
      "DevOps and Cloud Architects are highly specialized, drastically reducing competition compared to generic developers."
    ]
  },
  {
    name: "International Business (IB)",
    acronyms: ["ib", "international", "global", "trade"],
    category: "Management",
    type: "Specialization",
    whatIsIt: "Operating a corporation globally. Dealing with cross-border trade constraints, foreign currency fluctuations, global shipping laws, and adapting marketing identically for radically different foreign cultures.",
    secretFact: "Understanding geopolitics is just as critical as the math. An IB manager must literally accurately predict how a conflict in Europe might affect specific raw material trade prices in Asia.",
    usps: [
      "Opens massive, unparalleled opportunities for international corporate travel and global postings.",
      "High prestige executive roles dealing heavily with multi-national corporations (MNCs) and export-import logic.",
      "Perfect for highly intellectual students interested in macro-economics, geopolitics, and global trade dynamics."
    ]
  },
  {
    name: "Operations & Project Management",
    acronyms: ["operations", "ops", "project management"],
    category: "Management",
    type: "Specialization",
    whatIsIt: "The meticulous science of internal company efficiency. Making sure the business runs as fast and cheaply as realistically possible without sacrificing product quality—whether in an automobile factory or an IT firm.",
    secretFact: "Operations managers are ruthlessly obsessed with 'Lean' methodologies—literally looking at a factory assembly line or a software workflow and finding the exact second where time is being wasted.",
    usps: [
      "The CEO of a multi-billion dollar company is very often promoted directly from the Operations department (COO).",
      "Highly analytical role that gives you total systemic control over how a company physically functions.",
      "Commands very high salary ceilings because ops managers definitively save the company millions in wasted costs."
    ]
  },
  {
    name: "Journalism & Mass Communication (JMC)",
    acronyms: ["jmc", "journalism", "mass comm", "media"],
    category: "Creative & Media",
    type: "Specialization",
    whatIsIt: "The intensive study of disseminating deep information to the masses. It comprehensively spans news anchoring, investigative reporting, documentary filmmaking, radio, and massive digital media publishing strategies.",
    secretFact: "Modern JMC is absolutely not just holding a mic on TV. It is intensely focused on Digital Media, corporate SEO, navigating algorithmic echo chambers, and data-journalism (using code to find news stories).",
    usps: [
      "Grants ultimate creative freedom and a powerful, authoritative voice in broader human society.",
      "Highly practical degree; you spend overwhelmingly more time on the field, shooting, and editing than in typical classrooms.",
      "Opens very lucrative corporate doors into PR (Public Relations) and widespread digital content creation."
    ]
  }
];
