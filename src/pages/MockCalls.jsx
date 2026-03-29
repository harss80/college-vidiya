import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, BookOpen, Filter, GraduationCap, Banknote, ShieldCheck, ChevronRight, CheckCircle2, SlidersHorizontal, ArrowRight, Download, TrendingUp, PhoneCall, AlertCircle, X, CheckCircle, Info } from 'lucide-react';
import { universities } from '../data/universities';
import { useNavigate } from 'react-router-dom';

const MockCalls = () => {
  const navigate = useNavigate();
  const [specSearch, setSpecSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('All');
  const [budgetFilter, setBudgetFilter] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredUniversities = useMemo(() => {
    return universities.filter(uni => {
      // Basic Filters
      if (levelFilter !== 'All' && !uni.level.includes(levelFilter)) return false;
      if (budgetFilter !== 'All') {
        const bdg = uni.budget;
        if (budgetFilter === '< ₹1L' && bdg >= 100000) return false;
        if (budgetFilter === '₹1L - ₹2L' && (bdg < 100000 || bdg > 200000)) return false;
        if (budgetFilter === '> ₹2L' && bdg <= 200000) return false;
      }
      
      // Omni-Search Logic (Multi-word)
      if (specSearch.trim()) {
        const stopWords = ['in', 'and', 'with', 'for', 'of', '&', 'a', 'the', '-'];
        const queryWords = specSearch.toLowerCase().split(/\s+/).filter(w => w && !stopWords.includes(w));
        
        let deepSpecs = [];
        if (uni.extendedDetails?.programs) {
            uni.extendedDetails.programs.forEach(prog => {
                if (prog.specializations) {
                    prog.specializations.forEach(s => deepSpecs.push(`${prog.name} in ${s.name}`));
                }
            });
        }

        const uniText = `${uni.name} ${uni.location} ${uni.type} ${uni.specializations.join(' ')} ${deepSpecs.join(' ')} ${uni.ranking} ${uni.exams}`.toLowerCase();
        
        // Every typed word must exist somewhere in the university profile
        const hasAllKeywords = queryWords.every(w => uniText.includes(w));
        if (!hasAllKeywords && queryWords.length > 0) return false;
      }
      return true;
    }).map(uni => {
       // Map to UI specific objects
       let deepSpecs = [];
       if (uni.extendedDetails?.programs) {
           uni.extendedDetails.programs.forEach(prog => {
               if (prog.specializations) {
                   prog.specializations.forEach(s => deepSpecs.push(`${prog.name} in ${s.name}`));
               }
           });
       }
       
       const allAvailableTags = [...new Set([...uni.specializations, ...deepSpecs])];
       const stopWords = ['in', 'and', 'with', 'for', 'of', '&', 'a', 'the', '-'];
       const queryWords = specSearch.trim().toLowerCase().split(/\s+/).filter(w => w && !stopWords.includes(w));
       
       let matchedSpecs = [];
       if (queryWords.length > 0) {
         matchedSpecs = allAvailableTags.filter(spec => 
             queryWords.every(w => w.length >= 2 && spec.toLowerCase().includes(w)) || 
             queryWords.some(w => w.length >= 4 && spec.toLowerCase().includes(w))
         );
       }
       return { ...uni, matchedSpecs, displayTags: allAvailableTags };
    });
  }, [specSearch, levelFilter, budgetFilter]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Immersive Search Console Hero */}
      <div className="bg-[#0047ad] pt-8 pb-32 relative z-20 overflow-hidden">
         {/* Background Decorators */}
         <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
         <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#ff6b00]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

         <div className="bg-red-500/90 text-white backdrop-blur-sm border border-red-400 text-[11px] font-black text-center py-2 px-4 rounded-full max-w-fit mx-auto flex items-center justify-center gap-2 tracking-widest uppercase shadow-md relative z-10 mb-6">
            <AlertCircle size={14} /> Live Training Console — Internal Use Only
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-10">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white flex flex-col md:flex-row items-center gap-4 tracking-tight drop-shadow-md">
                  <span className="p-3 bg-white/10 text-[#ffb180] rounded-2xl border border-white/20 shadow-sm backdrop-blur-md">
                    <PhoneCall size={36} />
                  </span>
                  College Vidya Mock Desk
               </h1>
               <p className="text-lg md:text-xl font-medium text-blue-100 mt-6 max-w-2xl leading-relaxed">
                  Query <span className="text-white font-bold">{universities.length}+ partnered approvals</span> instantly to construct high-converting, unbiased pitches.
               </p>
            </div>

            {/* Giant Omni Search Bar */}
            <div className="max-w-3xl mx-auto relative group">
               <div className="absolute inset-0 bg-[#0056d2] rounded-2xl blur-xl group-hover:bg-[#0056d2]/80 transition-colors duration-500"></div>
               <div className="relative bg-white rounded-2xl flex flex-col sm:flex-row items-center p-2 shadow-2xl border-2 border-white/20 transition-all focus-within:ring-4 focus-within:ring-white/20">
                  <div className="w-full flex items-center">
                     <div className="pl-4 pr-3">
                        <Search className="h-6 w-6 sm:h-7 sm:w-7 text-slate-400" />
                     </div>
                     <input
                        type="text"
                        placeholder="Search 'MCA in AI', 'Delhi'..."
                        value={specSearch}
                        onChange={(e) => setSpecSearch(e.target.value)}
                        className="w-full py-3 sm:py-4 text-lg sm:text-xl text-slate-900 font-bold bg-transparent outline-none placeholder:text-slate-400 tracking-tight"
                        autoFocus
                     />
                     <div className="hidden sm:flex pr-4 items-center gap-2 opacity-60">
                        <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 border border-slate-200">Ctrl</span>
                        <span className="text-slate-400 font-bold text-xs">+</span>
                        <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 border border-slate-200">K</span>
                     </div>
                  </div>
                  <button className="w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center gap-2 bg-[#ff6b00] hover:bg-[#e65c00] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-[#ff6b00]/30 mr-0 sm:mr-1 whitespace-nowrap">
                     Find Matches
                  </button>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-30">
        {/* Quick Filters Row */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
           {/* Filters */}
           <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
               <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Level</span>
                  <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                     {['All', 'UG', 'PG', 'Ph.D'].map((lvl) => (
                        <button
                           key={lvl}
                           onClick={() => setLevelFilter(lvl)}
                           className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all duration-300 ${levelFilter === lvl ? 'bg-[#e0edff] text-[#0056d2] shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                           {lvl === 'All' ? 'Any' : lvl}
                        </button>
                     ))}
                  </div>
               </div>
               
               <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

               <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Budget</span>
                  <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                     {['All', '< ₹1L', '₹1L - ₹2L', '> ₹2L'].map((bdg) => (
                        <button
                           key={bdg}
                           onClick={() => setBudgetFilter(bdg)}
                           className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all duration-300 ${budgetFilter === bdg ? 'bg-[#e0edff] text-[#0056d2] shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                           {bdg === 'All' ? 'Any' : bdg}
                        </button>
                     ))}
                  </div>
               </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
           <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500" size={28} />
              Showing {filteredUniversities.length} Recommended Profiles
           </h2>
           {(specSearch || levelFilter !== 'All' || budgetFilter !== 'All') && (
              <button 
                 onClick={() => { setSpecSearch(''); setLevelFilter('All'); setBudgetFilter('All'); }}
                 className="text-sm font-bold text-slate-500 hover:text-red-500 transition-colors bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2"
              >
                 <Filter size={16} /> Clear Filters
              </button>
           )}
        </div>

        {/* Results Grid - Using High Density Vertical Cards */}
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="wait">
           {filteredUniversities.length > 0 ? (
              <motion.div 
                 key="grid"
                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                    {filteredUniversities.map((uni, index) => (
                       <motion.div
                          key={uni.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => navigate(`/mock-calls/university/${uni.id}`)}
                          className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#0056d2]/5 hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
                       >
                           {/* Premium Profile Card Format */}
                           <div className="bg-white rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,86,210,0.12)] hover:border-blue-200 transition-all duration-300 flex flex-col relative group h-full">
                              
                              {/* Rich Banner Header */}
                              <div className="h-28 bg-gradient-to-r from-[#003B95] to-[#0056d2] relative p-5 flex justify-between items-start overflow-hidden">
                                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                 
                                 <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 shadow-sm relative z-10 tracking-widest uppercase">
                                    <ShieldCheck size={14}/> Authorized
                                 </div>
                                 <div className="bg-black/20 backdrop-blur-sm text-white/90 text-[10px] font-bold px-2.5 py-1.5 rounded-lg relative z-10 tracking-widest uppercase">
                                    {uni.type}
                                 </div>
                              </div>

                              {/* Overlapping Content Body */}
                              <div className="px-6 flex flex-col flex-1 relative z-10 -mt-12">
                                 {/* Logo & Top Badges Row */}
                                 <div className="flex justify-between items-end mb-4">
                                    <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-lg border border-slate-100 flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
                                        <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain rounded-xl" />
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5 mb-2">
                                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-2.5 py-1 rounded-md border border-emerald-200 shadow-sm uppercase">{uni.accreditation}</span>
                                        <span className="bg-purple-50 text-purple-700 text-[10px] font-black px-2.5 py-1 rounded-md border border-purple-200 shadow-sm uppercase">{uni.ranking}</span>
                                    </div>
                                 </div>

                                 {/* Title & Location (No Truncation) */}
                                 <h3 className="text-[22px] font-black text-slate-900 leading-[1.25] mb-2 group-hover:text-[#0056d2] transition-colors">
                                    {uni.name}
                                 </h3>
                                 <div className="flex items-center gap-1.5 text-[14px] text-slate-500 font-bold mb-6">
                                    <MapPin size={16} className="text-slate-400" /> {uni.location}
                                 </div>

                                 {/* Premium Data Box Matrix */}
                                 <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden mb-6 shadow-sm">
                                    <div className="bg-white p-4 flex flex-col justify-center">
                                       <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1"><Banknote size={12}/> Est. Tuition</span>
                                       <span className="text-[16px] font-black text-slate-900">{uni.fees}</span>
                                    </div>
                                    <div className="bg-white p-4 flex flex-col justify-center">
                                       <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1"><TrendingUp size={12}/> Max Package</span>
                                       <span className="text-[16px] font-black text-emerald-600">{uni.placement.split('|')[1]?.trim() || uni.placement}</span>
                                    </div>
                                 </div>

                                 {/* Specs Section Container */}
                                 <div className="flex-1 flex flex-col">
                                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1"><CheckCircle2 size={14}/> Top Program Matches</span>
                                    <div className="flex flex-wrap gap-2">
                                       {(() => {
                                          const matched = uni.matchedSpecs || [];
                                          const others = (uni.displayTags || uni.specializations).filter(s => !matched.includes(s));
                                          const displaySpecs = [...matched, ...others];
                                          return displaySpecs.slice(0, 4).map((spec, i) => {
                                             const isMatch = matched.includes(spec);
                                             return (
                                                 <span key={i} className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-colors flex items-center gap-1.5 ${isMatch ? 'bg-[#e0edff] text-[#0056d2] border-blue-200 shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                                                     {isMatch && <div className="w-1.5 h-1.5 bg-[#0056d2] rounded-full shrink-0"></div>}
                                                     {spec}
                                                 </span>
                                             );
                                          });
                                       })()}
                                    </div>
                                 </div>
                              </div>

                              {/* Bottom CTAs */}
                              <div className="p-5 mt-6 border-t border-slate-100 grid grid-cols-[auto_1fr] gap-3 bg-slate-50/80">
                                  <button title="View Syllabus" onClick={(e) => e.stopPropagation()} className="w-14 h-14 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-[#0056d2] hover:bg-slate-50 hover:border-blue-300 transition-all shadow-sm group/btn">
                                      <BookOpen size={22} className="group-hover/btn:scale-110 transition-transform" />
                                  </button>
                                  <button onClick={(e) => e.stopPropagation()} className="h-14 bg-[#ff6b00] hover:bg-[#e65c00] text-white font-black text-[16px] tracking-wide rounded-xl flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(255,107,0,0.25)] hover:shadow-[0_8px_25px_rgba(255,107,0,0.35)] hover:-translate-y-1 transition-all group/pitch">
                                      Pitch this Uni <ChevronRight size={20} className="group-hover/pitch:translate-x-1.5 transition-transform" />
                                  </button>
                              </div>
                           </div>
                       </motion.div>
                     ))}
                  </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="w-full py-32 rounded-3xl border-2 border-dashed border-slate-200 bg-white text-center flex flex-col items-center justify-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#f4f7fa] border border-slate-100 flex items-center justify-center mb-6">
                  <Search className="h-10 w-10 text-slate-300" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">No Profiles Found</h3>
                <p className="text-slate-500 font-medium max-w-md text-center text-lg leading-relaxed">Relax the mock student's budget constraints or broaden the specialization search to find university matches.</p>
                <button 
                  onClick={() => {
                    setSpecSearch('');
                    setLevelFilter('All');
                    setBudgetFilter('All');
                  }}
                  className="mt-8 px-8 py-3.5 bg-primary-50 hover:bg-primary-100 text-primary-700 font-bold rounded-xl transition-colors shadow-sm ring-1 ring-primary-200"
                 >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default MockCalls;
