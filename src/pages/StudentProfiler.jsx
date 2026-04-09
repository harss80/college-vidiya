import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink, RefreshCw, Briefcase, GraduationCap, Building, Wallet, Search } from 'lucide-react';
import { universities } from '../data/universities';
import { Link } from 'react-router-dom';

// Pre-calculate minimum and maximum available budget to dynamically render slider bounds
const { dynamicMinPrice, dynamicMaxPrice } = (() => {
  let min = Infinity;
  let max = 0;
  universities.forEach(uni => {
    const programs = uni.extendedDetails?.programs || [];
    programs.forEach(prog => {
      if (prog.specializations) {
        prog.specializations.forEach(spec => {
          let p = 999999;
          if (spec.price) {
            const match = spec.price.toString().match(/₹?([\d,]+)/);
            if (match) p = parseInt(match[1].replace(/,/g, ''), 10);
          } else if (prog.priceRange) {
            const match = prog.priceRange.toString().match(/₹?([\d,]+)/);
            if (match) p = parseInt(match[1].replace(/,/g, ''), 10);
          } else if (uni.budget) {
            p = uni.budget;
          }
          if (p !== 999999) {
            if (p < min) min = p;
            if (p > max) max = p;
          }
        });
      }
    });
  });
  return { 
    dynamicMinPrice: min !== Infinity ? min : 50000, 
    dynamicMaxPrice: max !== 0 ? max : 500000 
  };
})();

const StudentProfiler = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    level: '',
    budget: dynamicMaxPrice,
    interest: ''
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState([]);

  const interestsList = [
    'Marketing', 'Finance', 'Data & Analytics', 'Computer Science', 'Human Resources',
    'Operations', 'Healthcare', 'International Business', 'Digital', 'General Management'
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else analyzeProfile();
  };

  const analyzeProfile = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      let matches = [];
      universities.forEach(uni => {
        const programs = uni.extendedDetails?.programs;
        if (!programs) return;
        
        programs.forEach(prog => {
          if (profile.level && prog.group !== profile.level) return;
          
          prog.specializations.forEach(spec => {
            // Price parsing logic (simplified)
            let specPrice = 999999;
            if (spec.price) {
              const match = spec.price.toString().match(/₹?([\d,]+)/);
              if (match) specPrice = parseInt(match[1].replace(/,/g, ''));
            } else if (prog.priceRange) {
              const match = prog.priceRange.toString().match(/₹?([\d,]+)/);
              if (match) specPrice = parseInt(match[1].replace(/,/g, ''));
            } else if (uni.budget) {
               specPrice = uni.budget;
            }

            if (specPrice <= profile.budget) {
              // Interest matching
              const textToSearch = `${spec.name} ${spec.about || ''} ${spec.careerPath || ''}`.toLowerCase();
              if (!profile.interest || textToSearch.includes(profile.interest.toLowerCase().split(' ')[0])) {
                matches.push({
                  uniName: uni.name,
                  uniId: uni.id,
                  logo: uni.logo,
                  progName: prog.name,
                  specName: spec.name,
                  price: specPrice,
                  duration: spec.duration || prog.duration
                });
              }
            }
          });
        });
      });

      // Sort by price
      matches.sort((a, b) => a.price - b.price);
      setResults(matches.slice(0, 6)); // Top 6
      setIsAnalyzing(false);
      setStep(4);
    }, 1500);
  };

  const reset = () => {
    setStep(1);
    setProfile({ level: '', budget: dynamicMaxPrice, interest: '' });
    setResults([]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-12 relative">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-primary-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[50px] right-[-50px] w-96 h-96 bg-accent-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-slate-[850] mb-3 tracking-tight">Student Profiler & Degree Matcher</h1>
        <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
          Input your student's background and constraints. Let our algorithm find the perfect degree fit instantly.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {step < 4 ? (
          <motion.div 
            key="wizard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto glass-card-premium rounded-3xl p-8"
          >
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full -z-10"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-accent-500 rounded-full -z-10 transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
              
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= i ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30' : 'bg-white text-slate-400 border-2 border-slate-100'}`}>
                  {i}
                </div>
              ))}
            </div>

            {/* Step 1: Education Level */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <GraduationCap className="text-primary-500" /> What level of degree are they seeking?
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setProfile({...profile, level: 'UG'})}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${profile.level === 'UG' ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-primary-300 bg-white'}`}
                  >
                    <span className="block text-xl font-black text-slate-800 mb-1">Undergraduate</span>
                    <span className="text-sm text-slate-500 font-medium">BBA, BCA, BA, etc. (After 12th)</span>
                  </button>
                  <button 
                    onClick={() => setProfile({...profile, level: 'PG'})}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${profile.level === 'PG' ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-primary-300 bg-white'}`}
                  >
                    <span className="block text-xl font-black text-slate-800 mb-1">Postgraduate</span>
                    <span className="text-sm text-slate-500 font-medium">MBA, MCA, M.Com (After Graduation)</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Budget */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Wallet className="text-primary-500" /> What is their maximum total budget?
                </h2>
                <div className="bg-white p-8 rounded-2xl border border-slate-200">
                  <div className="text-4xl font-black text-center text-primary-600 mb-6">
                    ₹{profile.budget.toLocaleString()}
                  </div>
                  <input 
                    type="range" 
                    min={dynamicMinPrice} 
                    max={dynamicMaxPrice} 
                    step="10000"
                    value={profile.budget}
                    onChange={(e) => setProfile({...profile, budget: parseInt(e.target.value)})}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-500"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-400 mt-3">
                    <span>₹{dynamicMinPrice.toLocaleString()}</span>
                    <span>₹{dynamicMaxPrice.toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Interest Area */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Briefcase className="text-primary-500" /> Primary area of career interest?
                </h2>
                <div className="flex flex-wrap gap-3">
                  {interestsList.map(interest => (
                    <button
                      key={interest}
                      onClick={() => setProfile({...profile, interest})}
                      className={`px-5 py-3 rounded-xl text-sm font-bold transition-all border-2 ${profile.interest === interest ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-slate-100 bg-white text-slate-600 hover:border-primary-200'}`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="mt-10 flex justify-between items-center">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="text-slate-500 font-bold hover:text-slate-800 px-4 py-2">
                  Back
                </button>
              ) : <div></div>}
              
              <button 
                onClick={handleNext}
                disabled={step === 1 && !profile.level}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 3 ? 'Match Degrees' : 'Next'} <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        ) : isAnalyzing ? (
          <motion.div 
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative">
              <div className="w-24 h-24 border-4 border-primary-100 rounded-full animate-spin border-t-accent-500"></div>
              <div className="absolute inset-0 flex items-center justify-center text-accent-500">
                <RefreshCw size={32} className="animate-pulse" />
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-black text-slate-800 animate-pulse">Running Match Algorithm...</h3>
            <p className="text-slate-500 font-medium mt-2">Scanning {universities.length} universities for the perfect fit.</p>
          </motion.div>
        ) : (
          <motion.div 
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-black text-slate-800">Top Recommendations</h2>
                <div className="flex gap-2 mt-2">
                  <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-md text-xs font-bold">{profile.level}</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-bold">Under ₹{profile.budget.toLocaleString()}</span>
                  {profile.interest && <span className="bg-accent-50 text-accent-700 px-3 py-1 rounded-md text-xs font-bold">{profile.interest}</span>}
                </div>
              </div>
              <button onClick={reset} className="flex items-center gap-2 text-slate-500 hover:text-primary-600 font-bold transition-colors">
                <RefreshCw size={16} /> New Search
              </button>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((res, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="glass-card-premium rounded-2xl p-6 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-100 to-transparent opacity-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                    
                    <div className="flex justify-between items-start mb-4">
                      <img src={res.logo} alt={res.uniName} className="w-12 h-12 rounded-lg border border-slate-100 shadow-sm object-cover bg-white" />
                      <div className="bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold border border-green-100">
                        Top Match
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-black text-slate-800 leading-tight mb-1">{res.progName} in {res.specName}</h3>
                    <p className="text-sm font-semibold text-slate-500 mb-4 flex items-center gap-1.5"><Building size={14}/> {res.uniName}</p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 mb-5 border border-slate-100">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Fee</span>
                        <span className="text-sm font-black text-primary-700">₹{res.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Duration</span>
                        <span className="text-sm font-bold text-slate-700">{res.duration}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/university-data/university/${res.uniId}/program/${res.progName}/specialization/${encodeURIComponent(res.specName)}`}
                      className="w-full block text-center bg-white border-2 border-primary-100 hover:border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white py-2.5 rounded-xl font-bold transition-all"
                    >
                      View Details
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-slate-300 w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">No exact matches found</h3>
                <p className="text-slate-500 max-w-md mx-auto">Try increasing your budget or selecting a broader field of interest to see more options.</p>
                <button onClick={reset} className="mt-6 text-primary-600 font-bold hover:underline">Adjust Parameters</button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentProfiler;
