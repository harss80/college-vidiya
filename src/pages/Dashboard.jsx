import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Building2, BookOpen, GraduationCap, CheckCircle2, Star, PhoneCall, TrendingUp, Shield, Zap, Users, BadgeCheck, Lightbulb, Wallet, Laptop, Globe2, Target, Award, PlayCircle, MapPin, HeartHandshake, AlertTriangle, FileText, MessagesSquare, Banknote, SlidersHorizontal, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);
  const [showAllObjections, setShowAllObjections] = useState(false);
  const [activePillar, setActivePillar] = useState(1);

  const preciousObjections = [
    {
       id: 1,
       question: "Why should I use College Buddy instead of applying directly?",
       pitch: "If you go directly to a university website, their sales team will only tell you the positives to meet their targets. As an aggregator, we provide 100% unbiased comparison between 100+ universities. We show you the hidden fees, actual student reviews, and verify their UGC-DEB status. Plus, you still pay the fee directly to the university portal, but you get our lifetime post-admission support for free.",
       points: ["Unbiased vs Biased", "Transparency of hidden fees"]
    },
    {
       id: 2,
       question: "Are online degrees really valid for govt jobs and MNCs?",
       pitch: "Yes, absolutely! According to the latest UGC mandate, degrees obtained through Online and Distance learning from recognized institutions are treated as exactly equivalent to traditional regular degrees. We ensure that every single university listed on College Buddy is strictly UGC-DEB approved, making your degree 100% valid for government exams like UPSC, state PSCs, and all private sector jobs.",
       points: ["UGC Equivalency Mandate", "Our strict quality checks"]
    },
    {
       id: 3,
       question: "Is there any hidden fee or counseling charge you take from me later?",
       pitch: "College Buddy's expert counseling is 100% free for students forever. We do not charge you a single rupee. We operate on a standardized aggregator model where universities pay us a fixed partnership fee, so our counselors have zero incentive to push a specific 'expensive' college. Your fees go directly to your chosen university's secure payment gateway.",
       points: ["100% Free Counseling", "No Sales Pressure"]
    },
    {
       id: 4,
       question: "What if the university ignores me after I pay the fees?",
       pitch: "This is exactly why you need College Buddy! If you face delayed books, LMS login issues, or unresponsiveness from the university, you don't fight alone. We have a dedicated Post-Admission Support team that acts as your advocate to resolve issues directly with the university escalation matrix.",
       points: ["Dedicated Post-Admission Advocacy", "CB Community Support"]
    },
    {
       id: 5,
       question: "Online degrees don't have placement. How will I get a job?",
       pitch: "That's a myth. Many of our top partnering universities offer extensive placement assistance. Beyond that, College Buddy provides its own dedicated Job & Internship Portal exclusively for our enrolled students, connecting you with 300+ hiring partners, resume-building sessions, and interview prep.",
       points: ["CB Job Portal", "300+ Hiring Partners"]
    },
    {
       id: 6,
       question: "Can I get an education loan? My budget is very low.",
       pitch: "Absolutely. We ensure financial constraints don't stop your education. We can help you structure Zero-Cost EMIs (0% Interest) starting at very low monthly payments. Additionally, we check your eligibility for the 'CB Subsidy' which can give you up to ₹10,000 off on select approved courses.",
       points: ["Zero-Cost EMIs", "CB Subsidy (Up to 10k)"]
    },
    {
       id: 7,
       question: "A local broker promised me a guaranteed pass and backdated degree. Do you?",
       pitch: "Please beware of such scams! Backdated or guaranteed-pass degrees are 100% fake and will get you blacklisted during background verification by employers. We only deal with ethical, genuine education. You will have to give the required exams, but our community and university LMS will fully train you to pass successfully.",
       points: ["Ethical Counseling Only", "Fake Degree Awareness"]
    },
    {
       id: 8,
       question: "Can I complete this degree in 1 year instead of 3 years (Fast-Track)?",
       pitch: "The UGC explicitly forbids shortening formal degree durations unless it's a lateral entry for a previously abandoned degree. Standard degrees cannot be 'fast-tracked'. Any agent offering a full 3-year degree in 1 year is likely selling a fraudulent diploma. We guide you transparently to stay within legal UGC guidelines.",
       points: ["UGC Rules on Duration", "Lateral Entry Exceptions"]
    }
  ];

  const visibleObjections = showAllObjections ? preciousObjections : preciousObjections.slice(0, 4);

  const handleSearchClick = () => {
    navigate('/mock-calls');
  };

  return (
    <div className="pb-16 min-h-screen bg-[#f4f7fa]">
      {/* 1. Hero Section - Internal Portal Warning & Title */}
      <div className="bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-700/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-400/30 backdrop-blur-md mb-8"
          >
            <AlertTriangle size={16} className="text-red-400" />
            <span className="text-sm font-bold tracking-wide text-red-100">INTERNAL ONLY: For Employee Training & Mock Calls</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]"
          >
            College Buddy <span className="text-accent-400">Mock Call</span><br className="hidden md:block" /> Training Simulator
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-primary-100 mb-10 md:mb-12 max-w-3xl font-medium px-2"
          >
            Welcome to the ultimate resource for counselors. Memorize our USPs, master the 30+ comparison parameters, and practice real-world mock calls to become a top-tier educational advisor. 
          </motion.p>
          
          {/* Main Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl bg-white p-3 md:p-3 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 flex items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-0 relative focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-500/50 transition-all">
              <PhoneCall size={20} className="text-slate-400" />
              <input 
                 type="text" 
                 placeholder="Search Universities to start a Mock Call session..." 
                 className="w-full bg-transparent border-none outline-none pl-3 text-slate-800 placeholder-slate-400 font-bold"
                 onFocus={handleSearchClick}
                 readOnly
              />
            </div>
            <button 
               onClick={handleSearchClick}
               className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 sm:py-3 px-8 rounded-xl shadow-md shadow-accent-500/20 transition-all flex items-center justify-center gap-2"
            >
               <PlayCircle size={18} />
               Start Mock Call
            </button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-primary-100 mt-8"
          >
             <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-400" /> Always pitch 100% Free Guidance</span>
             <span className="hidden sm:inline opacity-30">|</span>
             <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-400" /> Memorize UGC-DEB guidelines</span>
             <span className="hidden sm:inline opacity-30">|</span>
             <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-400" /> Use AI-Powered Personalization data</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-12">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 font-black text-[10px] uppercase tracking-widest mb-3 border border-red-100 opacity-90">
                        <Shield fontVariant="solid" size={12}/> Core Mandate
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Absolute Facts to Memorize</h2>
                </div>
                <p className="text-slate-500 font-semibold md:max-w-[280px] md:text-right text-sm leading-relaxed">
                    Do not falter on these during mock calls. These are our fundamental truths.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Platform Goal', value: 'Unbiased Decision Partner', icon: <Target size={24} />, desc: "We are NOT an agent. We guide, we don't sell.", color: 'bg-primary-50 border-primary-100 text-primary-600', iconColor: 'text-primary-600' },
                    { label: 'Financial Aid Given', value: 'CB Subsidy', icon: <Wallet size={24} />, desc: "Up to ₹10,000 subsidy available for eligible students.", color: 'bg-amber-50 border-amber-100 text-amber-600', iconColor: 'text-amber-500' },
                    { label: 'Admission Process', value: 'Direct to Univ.', icon: <Banknote size={24} />, desc: "Students pay fees DIRECTLY on the official gateway, not to us.", color: 'bg-emerald-50 border-emerald-100 text-emerald-600', iconColor: 'text-emerald-500' },
                    { label: 'Comparison Tool', value: '30+ Parameters', icon: <SlidersHorizontal size={24} />, desc: "Compare fees, EMI, syllabus depth, ROI, faculty, and LMS.", color: 'bg-rose-50 border-rose-100 text-rose-600', iconColor: 'text-rose-500' },
                ].map((stat, i) => (
                    <div key={i} className={`p-6 rounded-2xl border ${stat.color} flex flex-col items-start hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}>
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        <div className={`w-12 h-12 bg-white rounded-xl shadow-sm border border-white flex items-center justify-center mb-5 ${stat.iconColor}`}>
                            {stat.icon}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">{stat.label}</p>
                        <h3 className="text-[19px] font-black leading-tight mb-2 text-slate-900 tracking-tight">{stat.value}</h3>
                        <p className="text-slate-600 text-sm font-semibold leading-relaxed mix-blend-multiply opacity-90 mt-auto">{stat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 3. Objection Handling & Rebuttals (Mock Call Preparation) */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200 relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary-200/20 rounded-full blur-[80px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-widest mb-4 border border-red-100 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Critical Scenarios
               </div>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">Master The Objections</h2>
               <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">These are the most high-value pushbacks you'll face on live calls. Expand to memorize the exact pitch that builds trust and closes the deal.</p>
            </div>

            <div className="space-y-5 mb-12">
               {visibleObjections.map((obj) => (
                  <div key={obj.id} className={`bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg overflow-hidden ${expandedId === obj.id ? 'border-primary-400 shadow-[0_0_0_4px_rgba(75,124,243,0.1)]' : 'border-slate-200 shadow-sm'}`}>
                     <button 
                        onClick={() => setExpandedId(expandedId === obj.id ? null : obj.id)}
                        className={`w-full text-left p-5 md:px-6 md:py-6 flex items-center justify-between group transition-colors ${expandedId === obj.id ? 'bg-[#f8fafc]' : 'hover:bg-slate-50'}`}
                     >
                        <div className="flex items-center gap-5">
                           <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-[15px] shrink-0 transition-colors shadow-sm ${expandedId === obj.id ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-700 group-hover:bg-primary-100'}`}>
                              {obj.id}
                           </span>
                           <h3 className={`text-[17px] md:text-[19px] pr-4 font-extrabold transition-colors leading-snug ${expandedId === obj.id ? 'text-primary-700' : 'text-slate-800 group-hover:text-primary-600'}`}>
                              "{obj.question}"
                           </h3>
                        </div>
                        <div className={`shrink-0 ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-colors border shadow-sm ${expandedId === obj.id ? 'bg-white border-primary-200 text-primary-600' : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-300'}`}>
                           {expandedId === obj.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                     </button>
                     
                     <AnimatePresence>
                        {expandedId === obj.id && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                           >
                              <div className="px-6 pb-8 pt-2 bg-[#f8fafc]">
                                 <div className="bg-gradient-to-br from-white to-primary-50/30 p-6 md:p-8 rounded-2xl border border-primary-100 shadow-sm relative overflow-hidden">
                                     <div className="flex items-center gap-2.5 mb-5">
                                        <div className="bg-emerald-500 p-1.5 rounded-lg text-white shadow-sm"><FileText size={16}/></div>
                                        <h4 className="font-black text-slate-800 text-[13px] tracking-widest uppercase">Verified Pitch Script</h4>
                                     </div>
                                     <p className="text-slate-700 font-medium text-lg md:text-[19px] leading-relaxed pl-5 border-l-[4px] border-primary-400 mb-8 italic">
                                         {obj.pitch}
                                     </p>
                                     <div className="flex flex-wrap gap-3">
                                        {obj.points.map((pt, i) => (
                                           <span key={i} className="flex items-center gap-2 text-[13px] font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-sm">
                                              <CheckCircle2 size={16} className="text-emerald-500"/> {pt}
                                           </span>
                                        ))}
                                     </div>
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>

            <div className="text-center">
               <button 
                  onClick={() => setShowAllObjections(!showAllObjections)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-extrabold rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
               >
                  {showAllObjections ? 'Hide Scenarios' : 'Reveal All 8 Scenarios'} <ChevronDown size={20} className={showAllObjections ? 'rotate-180 transition-transform' : 'transition-transform'} />
               </button>
            </div>
         </div>
      </section>

      {/* 4. The Competition: Why We Win */}
      <section className="py-16 md:py-20 lg:py-28 bg-primary-700 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/50 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-600/30 rounded-full blur-[100px]"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <span className="text-accent-400 font-bold tracking-wider uppercase text-sm mb-3 block">Competitive Analysis for Training</span>
               <h2 className="text-3xl md:text-4xl font-extrabold mb-6">College Buddy vs. Traditional Portals</h2>
               <p className="text-base md:text-lg text-primary-100 max-w-2xl mx-auto font-medium">Understand our positioning in the market so you can easily dismantle comparisons to generic ed-tech websites.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {[
                  { title: "Niche vs Broad", desc: "Competitors like Shiksha or Collegedunia try to do everything (Campus, Abroad, Coaching). We specialize ONLY in Online & Distance learning, making us the absolute authority in this vertical.", icon: <Star className="text-accent-400" size={32} /> },
                  { title: "Data Authenticity", desc: "Generic portals rely on user-submitted data which is easily faked. We pull data directly from official university APIs and verified students, comparing over 30 hard parameters.", icon: <BadgeCheck className="text-accent-400" size={32} /> },
                  { title: "Counseling Motive", desc: "Others sell leads to the highest bidder. Our AI tools match students perfectly based on profile fit, removing human bias and pure lead generation tactics.", icon: <Shield className="text-accent-400" size={32} /> }
               ].map((item, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 p-8 rounded-2xl backdrop-blur-sm relative hover:-translate-y-2 transition-transform">
                     <div className="mb-6 bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                        {item.icon}
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                     <p className="text-primary-100 font-medium leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Post-Admission & CB Community (Upsell / Trust Building) */}
      <section className="bg-[#f8fafc] py-16 md:py-24 border-b border-slate-200 relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               <div className="lg:w-[55%]">
                  <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-xs uppercase tracking-widest mb-5 border border-emerald-200 shadow-sm">
                     <Shield size={14} /> Trust Pillar
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">Pitching the "Beyond Admission" Value</h2>
                  <p className="text-base md:text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                     Students are terrified of being abandoned after paying fees. In your mock calls, you MUST pitch these support structures to confidently close the deal.
                  </p>
                  <div className="space-y-3">
                     {/* Pillar 1 */}
                     <div className={`bg-white rounded-xl border transition-all duration-300 ${activePillar === 1 ? 'border-primary-400 shadow-md' : 'border-slate-200 shadow-sm'}`}>
                        <button 
                           onClick={() => setActivePillar(1)}
                           className={`w-full text-left px-4 py-3 md:py-3.5 flex items-center justify-between group transition-colors ${activePillar === 1 ? 'bg-primary-50/50 rounded-t-xl' : 'hover:bg-slate-50 rounded-xl'}`}
                        >
                           <div className="flex items-center gap-3">
                              <span className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activePillar === 1 ? 'bg-primary-600 text-white shadow-sm' : 'bg-primary-100 text-primary-700'}`}>
                                 <Users size={16} />
                              </span>
                              <h3 className={`text-[14px] md:text-[15px] font-bold transition-colors ${activePillar === 1 ? 'text-primary-800' : 'text-slate-700 group-hover:text-primary-600'}`}>
                                 The CB Community
                              </h3>
                           </div>
                           <ChevronDown size={16} className={`text-slate-400 transition-transform ${activePillar === 1 ? 'rotate-180 text-primary-500' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                           {activePillar === 1 && (
                              <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 transition={{ duration: 0.15 }}
                              >
                                 <div className="px-4 pb-4 md:px-5 md:pb-5 bg-primary-50/50 rounded-b-xl border-t border-primary-100/50">
                                    <p className="text-slate-600 font-medium text-[13px] leading-relaxed mb-3 mt-1.5">Connect with 50K+ peers and alumni to instantly resolve the isolation of remote learning.</p>
                                    <div className="bg-white border-l-[3px] border-emerald-400 pl-3 py-2 rounded-r-lg shadow-sm">
                                         <p className="text-[10px] font-black tracking-widest uppercase text-emerald-600 mb-0.5">Key Script</p>
                                         <p className="text-slate-800 font-bold text-[13px] italic leading-tight">"You will never study alone. You get access to 50,000+ peers."</p>
                                    </div>
                                 </div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </div>

                     {/* Pillar 2 */}
                     <div className={`bg-white rounded-xl border transition-all duration-300 ${activePillar === 2 ? 'border-primary-400 shadow-md' : 'border-slate-200 shadow-sm'}`}>
                        <button 
                           onClick={() => setActivePillar(2)}
                           className={`w-full text-left px-4 py-3 md:py-3.5 flex items-center justify-between group transition-colors ${activePillar === 2 ? 'bg-primary-50/50 rounded-t-xl' : 'hover:bg-slate-50 rounded-xl'}`}
                        >
                           <div className="flex items-center gap-3">
                              <span className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activePillar === 2 ? 'bg-primary-600 text-white shadow-sm' : 'bg-primary-100 text-primary-700'}`}>
                                 <Target size={16} />
                              </span>
                              <h3 className={`text-[14px] md:text-[15px] font-bold transition-colors ${activePillar === 2 ? 'text-primary-800' : 'text-slate-700 group-hover:text-primary-600'}`}>
                                 Job & Internship Portal
                              </h3>
                           </div>
                           <ChevronDown size={16} className={`text-slate-400 transition-transform ${activePillar === 2 ? 'rotate-180 text-primary-500' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                           {activePillar === 2 && (
                              <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 transition={{ duration: 0.15 }}
                              >
                                 <div className="px-4 pb-4 md:px-5 md:pb-5 bg-primary-50/50 rounded-b-xl border-t border-primary-100/50">
                                    <p className="text-slate-600 font-medium text-[13px] leading-relaxed mb-3 mt-1.5">We offer resume building, interview prep, and direct access to 300+ hiring partners.</p>
                                    <div className="bg-white border-l-[3px] border-emerald-400 pl-3 py-2 rounded-r-lg shadow-sm">
                                         <p className="text-[10px] font-black tracking-widest uppercase text-emerald-600 mb-0.5">Key Script</p>
                                         <p className="text-slate-800 font-bold text-[13px] italic leading-tight">"We take responsibility for your placement prep, unconditionally."</p>
                                    </div>
                                 </div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </div>

                     {/* Pillar 3 */}
                     <div className={`bg-white rounded-xl border transition-all duration-300 ${activePillar === 3 ? 'border-primary-400 shadow-md' : 'border-slate-200 shadow-sm'}`}>
                        <button 
                           onClick={() => setActivePillar(3)}
                           className={`w-full text-left px-4 py-3 md:py-3.5 flex items-center justify-between group transition-colors ${activePillar === 3 ? 'bg-primary-50/50 rounded-t-xl' : 'hover:bg-slate-50 rounded-xl'}`}
                        >
                           <div className="flex items-center gap-3">
                              <span className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activePillar === 3 ? 'bg-primary-600 text-white shadow-sm' : 'bg-primary-100 text-primary-700'}`}>
                                 <HeartHandshake size={16} />
                              </span>
                              <h3 className={`text-[14px] md:text-[15px] font-bold transition-colors ${activePillar === 3 ? 'text-primary-800' : 'text-slate-700 group-hover:text-primary-600'}`}>
                                 Support Advocacy
                              </h3>
                           </div>
                           <ChevronDown size={16} className={`text-slate-400 transition-transform ${activePillar === 3 ? 'rotate-180 text-primary-500' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                           {activePillar === 3 && (
                              <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 transition={{ duration: 0.15 }}
                              >
                                 <div className="px-4 pb-4 md:px-5 md:pb-5 bg-primary-50/50 rounded-b-xl border-t border-primary-100/50">
                                    <p className="text-slate-600 font-medium text-[13px] leading-relaxed mb-3 mt-1.5">If the university delays books or ignores queries, CB escalates and resolves it directly.</p>
                                    <div className="bg-white border-l-[3px] border-emerald-400 pl-3 py-2 rounded-r-lg shadow-sm">
                                         <p className="text-[10px] font-black tracking-widest uppercase text-emerald-600 mb-0.5">Key Script</p>
                                         <p className="text-slate-800 font-bold text-[13px] italic leading-tight">"If the university ignores you, we escalate it to the VCs directly."</p>
                                    </div>
                                 </div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </div>
                  </div>
               </div>

               {/* Right Image Container */}
               <div className="lg:w-[45%] relative mt-16 lg:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-emerald-200 rounded-[2.5rem] transform rotate-3 scale-105 opacity-40 z-0"></div>
                  <div className="relative z-10 bg-white p-2.5 rounded-[2.5rem] shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Team meeting" className="w-full h-full object-cover rounded-[2rem] aspect-[4/5] sm:aspect-[3/4] object-center" />
                  </div>
                  
                  {/* Floating Refer & Earn Badge */}
                  <div className="absolute -bottom-6 left-4 right-4 sm:-bottom-8 sm:-left-8 sm:right-auto bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-5 rounded-3xl z-20 border border-white sm:w-[280px]">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 shadow-inner">
                            <Star size={24} className="fill-amber-400 text-amber-500" />
                        </div>
                        <div>
                            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Secret Weapon</p>
                            <p className="text-base font-extrabold text-slate-800 tracking-tight">Refer & Earn</p>
                        </div>
                     </div>
                     <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl py-3.5 px-4 border border-amber-200/50 relative overflow-hidden">
                         <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-400/20 rounded-full blur-xl"></div>
                         <div className="text-amber-600 font-extrabold text-3xl tracking-tight text-center flex items-center justify-center gap-1">₹1000<span className="text-xl text-amber-500 font-black">+</span></div>
                         <div className="text-amber-800/50 text-[10.5px] font-black uppercase text-center mt-1 tracking-widest">Reward per student</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Action Call to Search */}
      <section className="py-16 md:py-20 bg-[#f4f7fa] text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Ready for your Mock Call Assessment?</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 font-medium">Navigate to the University Data tool to find technical details on fees, accreditations, and syllabi for your assigned university scenario.</p>
            <button 
               onClick={handleSearchClick}
               className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1 mx-auto flex items-center gap-3 text-lg"
            >
               Open CRM Dashboard <ChevronRight size={20} />
            </button>
         </div>
      </section>

    </div>
  );
};

export default Dashboard;
