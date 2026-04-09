import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, BookOpen, Filter, GraduationCap, Banknote, ShieldCheck, ChevronRight, CheckCircle2, SlidersHorizontal, ArrowRight, Download, TrendingUp, PhoneCall, AlertCircle, X, CheckCircle, Info, Globe } from 'lucide-react';
import { universities } from '../data/universities';
import { useNavigate } from 'react-router-dom';

const expandText = (text) => {
    if (!text) return '';
    let t = text.toLowerCase();
    
    // Add abbreviations to full names
    t = t.replace(/\bartificial intelligence\b/g, 'artificial intelligence ai');
    t = t.replace(/\bmachine learning\b/g, 'machine learning ml');
    t = t.replace(/\bhuman resource(s)?\b/g, 'human resource hr');
    t = t.replace(/\binformation technology\b/g, 'information technology it');
    t = t.replace(/\bsupply chain\b/g, 'supply chain scm');
    t = t.replace(/\bjournalism\b/g, 'journalism jmc');
    t = t.replace(/\binternational business\b/g, 'international business ib');
    t = t.replace(/\bfull stack\b/g, 'full stack fs');
    
    // Add full names to abbreviations
    t = t.replace(/\bai\b/g, 'ai artificial intelligence');
    t = t.replace(/\bml\b/g, 'ml machine learning');
    t = t.replace(/\bhr\b/g, 'hr human resource');
    t = t.replace(/\bit\b/g, 'it information technology');
    t = t.replace(/\bscm\b/g, 'scm supply chain');
    t = t.replace(/\bib\b/g, 'ib international business');
    t = t.replace(/\bfs\b/g, 'fs full stack');
    
    return t;
};

const MockCalls = () => {
  const navigate = useNavigate();
  const [specSearch, setSpecSearch] = useState(() => sessionStorage.getItem('cvSearch') || '');
  const [levelFilter, setLevelFilter] = useState(() => sessionStorage.getItem('cvLevel') || 'All');
  const [budgetFilter, setBudgetFilter] = useState(() => sessionStorage.getItem('cvBudget') || 'All');

  React.useEffect(() => {
    sessionStorage.setItem('cvSearch', specSearch);
    sessionStorage.setItem('cvLevel', levelFilter);
    sessionStorage.setItem('cvBudget', budgetFilter);
  }, [specSearch, levelFilter, budgetFilter]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const quickSuggestions = ['MCA in AI', 'MBA Dual', 'BCA', 'Data Science', 'Zero EMI'];

  const filteredUniversities = useMemo(() => {
      const extractPrice = (priceStr) => {
          if (!priceStr) return 0;
          const match = priceStr.toString().match(/₹?([\d,]+)/);
          return match ? parseInt(match[1].replace(/,/g, ''), 10) : 0;
      };

      const checkBudget = (priceVal) => {
          if (budgetFilter === 'All') return true;
          if (!priceVal) return false;
          if (budgetFilter === '< ₹1L') return priceVal < 100000;
          if (budgetFilter === '< ₹1.5L') return priceVal <= 150000;
          if (budgetFilter === '< ₹2L') return priceVal <= 200000;
          if (budgetFilter === '₹1L - ₹2L') return priceVal >= 100000 && priceVal <= 200000;
          if (budgetFilter === '> ₹2L') return priceVal > 200000;
          return true;
      };

    return universities.filter(uni => {
      // Basic Filters
      if (levelFilter !== 'All') {
        if (levelFilter === 'Dual') {
            let hasDual = false;
            if (uni.extendedDetails?.programs) {
                hasDual = uni.extendedDetails.programs.some(prog => 
                    prog.name.toLowerCase().includes('dual') || 
                    (prog.specializations && prog.specializations.some(s => s.name.toLowerCase().includes('dual')))
                );
            } else if (uni.specializations) {
                hasDual = uni.specializations.some(s => s.toLowerCase().includes('dual'));
            }
            if (!hasDual && uni.name.toLowerCase().includes('dual')) hasDual = true;
            
            if (!hasDual) return false;
        } else {
            if (!uni.level.includes(levelFilter)) return false;
        }
      }

      if (budgetFilter !== 'All') {
          let hasAnyBudgetMatch = false;
          if (uni.extendedDetails?.programs) {
              for (const prog of uni.extendedDetails.programs) {
                  if (prog.specializations) {
                      if (prog.specializations.some(s => checkBudget(extractPrice(s.price)))) {
                          hasAnyBudgetMatch = true;
                          break;
                      }
                  } else if (prog.priceRange) {
                      if (checkBudget(extractPrice(prog.priceRange))) {
                          hasAnyBudgetMatch = true;
                          break;
                      }
                  }
              }
          } else {
             hasAnyBudgetMatch = checkBudget(uni.budget);
          }
          if (!hasAnyBudgetMatch) return false;
      }
      // Advanced Contextual Search Logic
      if (specSearch.trim()) {
        const stopWords = ['in', 'and', 'with', 'for', 'of', '&', 'a', 'the', '-'];
        const queryWords = specSearch.toLowerCase().split(/\s+/).filter(w => w && !stopWords.includes(w));
        
        let hasValidProgramMatch = false;
        const uniBaseText = expandText(`${uni.name} ${uni.location} ${uni.type} ${uni.ranking} ${uni.accreditation}`);

        if (uni.extendedDetails?.programs) {
            const validPrograms = uni.extendedDetails.programs.filter(prog => {
                if (levelFilter === 'All') return true;
                if (levelFilter === 'Dual') {
                    return prog.name.toLowerCase().includes('dual') || (prog.specializations && prog.specializations.some(s => s.name.toLowerCase().includes('dual')));
                }
                return prog.group === levelFilter;
            });
            
            if (validPrograms.length === 0 && queryWords.length > 0) return false;
            
            hasValidProgramMatch = validPrograms.some(prog => {
                if (prog.specializations) {
                    return prog.specializations.some(s => {
                        const sText = expandText(`${uniBaseText} ${prog.name} ${prog.name.replace(/\./g, '')} ${prog.group} ${s.name}`);
                        const textMatch = queryWords.every(w => sText.includes(w));
                        const budgetMatch = checkBudget(extractPrice(s.price));
                        return textMatch && budgetMatch;
                    });
                } else {
                    const progText = expandText(`${uniBaseText} ${prog.name} ${prog.name.replace(/\./g, '')} ${prog.group}`);
                    return queryWords.every(w => progText.includes(w)) && checkBudget(extractPrice(prog.priceRange));
                }
            });
        } else {
            const tagsText = expandText(uni.specializations.join(' '));
            hasValidProgramMatch = queryWords.every(w => uniBaseText.includes(w) || tagsText.includes(w)) && checkBudget(uni.budget);
        }

        if (!hasValidProgramMatch) return false;
      }
      return true;
    }).map(uni => {
       // Advanced UI Highlights
       let allAvailableTags = [];
       let minRelevantPrice = Infinity;
       
       const stopWords = ['in', 'and', 'with', 'for', 'of', '&', 'a', 'the', '-'];
       const queryWords = specSearch.trim().toLowerCase().split(/\s+/).filter(w => w && !stopWords.includes(w));
       const uniBaseText = expandText(`${uni.name} ${uni.location} ${uni.type} ${uni.ranking} ${uni.accreditation}`);
       
       if (uni.extendedDetails?.programs) {
           const validPrograms = uni.extendedDetails.programs.filter(prog => {
               if (levelFilter === 'All') return true;
               if (levelFilter === 'Dual') {
                   return prog.name.toLowerCase().includes('dual') || (prog.specializations && prog.specializations.some(s => s.name.toLowerCase().includes('dual')));
               }
               return prog.group === levelFilter;
           });
           validPrograms.forEach(prog => {
               if (prog.specializations) {
                   prog.specializations.forEach(s => {
                       const pVal = extractPrice(s.price);
                       if (checkBudget(pVal)) {
                           allAvailableTags.push(`${prog.name} in ${s.name}`);
                           
                           const sText = expandText(`${uniBaseText} ${prog.name} ${prog.name.replace(/\./g, '')} ${prog.group} ${s.name}`);
                           if (queryWords.length > 0) {
                               if (queryWords.every(w => sText.includes(w))) {
                                   if (pVal < minRelevantPrice && pVal > 0) minRelevantPrice = pVal;
                               }
                           } else {
                               if (pVal < minRelevantPrice && pVal > 0) minRelevantPrice = pVal;
                           }
                       }
                   });
               } else {
                   const pVal = extractPrice(prog.priceRange);
                   if (checkBudget(pVal)) {
                       allAvailableTags.push(prog.name);
                       const progText = expandText(`${uniBaseText} ${prog.name} ${prog.name.replace(/\./g, '')} ${prog.group}`);
                       if (queryWords.length > 0) {
                           if (queryWords.every(w => progText.includes(w))) {
                               if (pVal < minRelevantPrice && pVal > 0) minRelevantPrice = pVal;
                           }
                       } else {
                           if (pVal < minRelevantPrice && pVal > 0) minRelevantPrice = pVal;
                       }
                   }
               }
           });
       } else {
           allAvailableTags = [...uni.specializations];
           minRelevantPrice = typeof uni.budget === 'number' ? uni.budget : extractPrice(uni.budget) || Infinity;
       }
       
       if (minRelevantPrice === Infinity) {
           minRelevantPrice = typeof uni.budget === 'number' ? uni.budget : extractPrice(uni.budget) || 0;
       }
       
       let matchedSpecs = [];
       if (queryWords.length > 0) {
         const specRequiredWords = queryWords.filter(w => !uniBaseText.includes(w));
         
         if (specRequiredWords.length > 0) {
             matchedSpecs = allAvailableTags.filter(spec => 
                 specRequiredWords.every(w => expandText(spec).includes(w))
             );
         } else {
             matchedSpecs = allAvailableTags.filter(spec => 
                 queryWords.every(w => expandText(spec).includes(w) || uniBaseText.includes(w))
             );
         }
       }
       return { ...uni, matchedSpecs, displayTags: allAvailableTags, minRelevantPrice };
    }).sort((a, b) => a.minRelevantPrice - b.minRelevantPrice);
  }, [specSearch, levelFilter, budgetFilter]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Immersive Search Console Hero */}
      <div className="bg-white pt-32 pb-36 relative z-20 border-b border-slate-200">
         {/* Background Decorators */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-50 rounded-full blur-[120px]"></div>
         </div>

         <div className="bg-red-50 text-red-600 border border-red-100 text-[11px] font-black text-center py-2 px-4 rounded-full max-w-fit mx-auto flex items-center justify-center gap-2 tracking-widest uppercase relative z-10 mb-6">
            <AlertCircle size={14} /> Live Training Console — Internal Use Only
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-10">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                  <span className="text-primary-600">Mock Call</span> Simulator
               </h1>
               <p className="text-lg md:text-xl font-medium text-slate-500 mt-6 max-w-2xl leading-relaxed">
                  Query <span className="text-slate-800 font-bold">{universities.length}+ partnered approvals</span> instantly to construct high-converting, unbiased pitches.
               </p>
            </div>

            {/* Giant Omni Search Bar */}
            <div className="max-w-3xl mx-auto relative group">
               <div className="absolute inset-0 bg-primary-400 rounded-[1.25rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
               <div className="relative bg-white rounded-[1.25rem] flex flex-col sm:flex-row items-center p-2 shadow-lg border border-slate-200 transition-all focus-within:ring-4 focus-within:ring-primary-500/10 focus-within:border-primary-300 z-20">
                  <div className="w-full flex items-center relative">
                     <div className="pl-4 pr-3">
                        <Search className="h-6 w-6 sm:h-7 sm:w-7 text-slate-400" />
                     </div>
                     <input
                        type="text"
                        placeholder="Search 'MCA in AI', 'Delhi'..."
                        value={specSearch}
                        onChange={(e) => setSpecSearch(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                        className="w-full py-3 sm:py-4 text-lg sm:text-xl text-slate-900 font-bold bg-transparent outline-none placeholder:text-slate-400 tracking-tight"
                        autoFocus
                     />
                     <div className="hidden sm:flex pr-4 items-center gap-2 opacity-60">
                        <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 border border-slate-200">Ctrl</span>
                        <span className="text-slate-400 font-bold text-xs">+</span>
                        <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 border border-slate-200">K</span>
                     </div>
                  </div>
                  <button className="w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md mr-0 sm:mr-1 whitespace-nowrap">
                     Find Matches
                  </button>
               </div>

               {/* Autocomplete Suggestions */}
               <AnimatePresence>
                 {isSearchFocused && !specSearch && (
                   <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-4 z-50 text-left"
                   >
                      <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 pl-2">Top Searches</p>
                      <div className="flex flex-wrap gap-2">
                        {quickSuggestions.map((s, i) => (
                           <button 
                             key={i} 
                             onMouseDown={(e) => { e.preventDefault(); setSpecSearch(s); setIsSearchFocused(false); }}
                             className="px-4 py-2 bg-slate-50 hover:bg-primary-50 hover:text-primary-600 text-slate-600 font-bold text-sm rounded-xl border border-slate-200 hover:border-primary-200 transition-colors"
                           >
                             {s}
                           </button>
                        ))}
                      </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40 sticky top-[72px] mt-4">
        {/* Quick Filters Row */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-3 mb-8 flex flex-col md:flex-row items-center justify-center gap-6">
           {/* Filters */}
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
               <div className="flex items-center justify-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Level</span>
                  <div className="flex bg-slate-100/50 p-1 rounded-lg border border-slate-100">
                     {['All', 'UG', 'PG', 'Integrated', 'Dual'].map((lvl) => (
                        <button
                           key={lvl}
                           onClick={() => setLevelFilter(lvl)}
                           className={`px-4 py-1.5 rounded-md text-[13px] font-bold transition-all duration-300 ${levelFilter === lvl ? 'bg-white text-primary-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-900 border border-transparent'}`}
                        >
                           {lvl === 'All' ? 'Any' : lvl}
                        </button>
                     ))}
                  </div>
               </div>
               
               <div className="hidden sm:block w-px h-6 bg-slate-200"></div>

               <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2 shrink-0">Budget</span>
                  <div className="flex bg-slate-100/50 p-1 rounded-lg border border-slate-100">
                     {['All', '< ₹1L', '< ₹1.5L', '< ₹2L', '> ₹2L'].map((bdg) => (
                        <button
                           key={bdg}
                           onClick={() => setBudgetFilter(bdg)}
                           className={`px-4 py-1.5 rounded-md text-[13px] font-bold transition-all duration-300 ${budgetFilter === bdg ? 'bg-white text-primary-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-900 border border-transparent'}`}
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
                          onClick={() => navigate(`/university-data/university/${uni.id}`)}
                          className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#0056d2]/5 hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
                       >
                           {/* Premium Profile Card */}
                           <div className="bg-white rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-200 transition-all duration-300 flex flex-col relative group h-full p-6">
                              
                                {/* Header Section with Uniform Height */}
                                <div className="h-[145px] flex flex-col mb-2">
                                   {/* Top Info Tags */}
                                   <div className="flex items-center gap-2 mb-4 shrink-0">
                                      <div className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-2.5 py-1 rounded-md border border-emerald-100 uppercase flex items-center gap-1">
                                         <ShieldCheck size={12}/> Authorized
                                      </div>
                                      <div className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase border border-slate-200">
                                         {uni.type}
                                      </div>
                                   </div>

                                   {/* Logo & Headline */}
                                   <div className="flex items-start gap-3">
                                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white shrink-0 rounded-2xl p-1.5 border border-slate-100 shadow-sm flex items-center justify-center">
                                          <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
                                      </div>
                                      <div className="flex flex-col min-w-0 flex-1">
                                         <h3 className="text-[17px] font-black text-slate-900 leading-snug mb-1.5 group-hover:text-primary-600 transition-colors line-clamp-2 break-words">
                                            {uni.name}
                                         </h3>
                                         <div className="flex items-center gap-1.5 text-[12px] text-slate-500 font-bold mb-2">
                                            <MapPin size={12} className="text-slate-400 shrink-0" /> <span className="truncate">{uni.location}</span>
                                         </div>
                                         <div className="flex flex-wrap gap-1.5 mt-auto">
                                            <div title={uni.accreditation} className="bg-slate-50 text-slate-500 text-[8px] font-black px-1.5 py-0.5 rounded border border-slate-200 uppercase truncate max-w-full">{uni.accreditation}</div>
                                            <div title={uni.ranking} className="bg-slate-50 text-slate-500 text-[8px] font-black px-1.5 py-0.5 rounded border border-slate-200 uppercase truncate max-w-full">{uni.ranking}</div>
                                         </div>
                                      </div>
                                   </div>
                                </div>

                                 {/* Clean Data Box Matrix */}
                                 <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-xl overflow-hidden mb-5 shrink-0 h-[72px]">
                                    <div className="bg-slate-50 p-3 flex flex-col justify-start min-w-0">
                                       <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1 flex items-center gap-1 shrink-0"><Banknote size={12} className="text-primary-500"/> Est. Tuition</span>
                                       <span className="text-[12px] font-black text-slate-900 leading-tight line-clamp-1 break-words" title={uni.fees}>{uni.budget ? `Starting ₹${Number(uni.budget).toLocaleString('en-IN')}` : uni.fees}</span>
                                    </div>
                                    <div className="bg-slate-50 p-3 flex flex-col justify-start min-w-0">
                                       <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1 flex items-center gap-1 shrink-0"><TrendingUp size={12} className="text-emerald-500"/> Max Package</span>
                                       <span className="text-[12px] font-black text-emerald-600 leading-tight line-clamp-2 break-words" title={uni.placement}>{uni.placement.split('|')[1]?.trim() || uni.placement.split('|')[0]?.trim()}</span>
                                    </div>
                                 </div>

                                 {/* Specs Section Container */}
                                 <div className="flex-1 flex flex-col min-h-0">
                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1 shrink-0"><CheckCircle2 size={12}/> Top Matches</span>
                                    <div className="flex flex-col gap-1.5 overflow-hidden">
                                       {(() => {
                                          const matched = uni.matchedSpecs || [];
                                          const others = (uni.displayTags || uni.specializations).filter(s => !matched.includes(s));
                                          const displaySpecs = [...matched, ...others];
                                          return displaySpecs.slice(0, 3).map((spec, i) => {
                                             const isMatch = matched.includes(spec);
                                             return (
                                                 <span key={i} className={`px-2 py-1 rounded-md text-[10px] font-semibold border transition-colors flex items-center gap-1.5 max-w-full truncate ${isMatch ? 'bg-primary-50 text-primary-700 border-primary-100' : 'bg-slate-50 text-slate-500 border-slate-100'}`}>
                                                     {isMatch && <div className="w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0"></div>}
                                                     <span className="truncate">{spec}</span>
                                                 </span>
                                             );
                                          });
                                       })()}

                                    </div>
                                 </div>

                              {/* Bottom CTAs */}
                              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-[auto_auto_1fr] gap-3">
                                  <button title="View Syllabus" onClick={(e) => e.stopPropagation()} className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl text-primary-600 hover:bg-primary-50 hover:border-primary-200 transition-all group/btn">
                                      <BookOpen size={20} className="group-hover/btn:scale-110 transition-transform" />
                                  </button>
                                  {uni.url && (
                                     <button title="Official Website" onClick={(e) => { e.stopPropagation(); window.open(uni.url, '_blank'); }} className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200 transition-all group/globe">
                                         <Globe size={20} className="group-hover/globe:scale-110 transition-transform" />
                                     </button>
                                  )}
                                  <button onClick={(e) => e.stopPropagation()} className="h-12 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all group/pitch">
                                      View Database <ChevronRight size={18} className="group-hover/pitch:translate-x-1 transition-transform" />
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
