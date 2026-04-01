import React, { useState, useMemo } from 'react';
import { Search, Flame, Target, Lightbulb, CheckCircle2, BookOpen, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';
import { specializationData } from '../data/specializationGuideData';

const SpecializationGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredData = useMemo(() => {
    // Reset expansion when search changes to avoid mismatched indices, but better to just use ID if possible.
    // We'll reset it to null here.
    return specializationData.filter(spec => {
      if (!searchTerm.trim()) return true;
      const queryWords = searchTerm.toLowerCase().split(/\s+/).filter(w => w);
      const searchString = `${spec.name} ${spec.acronyms.join(' ')} ${spec.category} ${spec.type} ${spec.whatIsIt} ${spec.secretFact}`.toLowerCase();
      // Only match if at least one acronym exactly matches or if substring matches the query
      return queryWords.every(word => searchString.includes(word));
    });
  }, [searchTerm]);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20 pb-20">
      {/* Hero Header */}
      <div className="bg-[#0047ad] pt-12 pb-24 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-6 border border-white/20">
            <BookOpen size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Specialization <span className="text-[#ff6b00]">Master Guide</span>
          </h1>
          <p className="text-lg text-blue-100 font-medium max-w-2xl mx-auto opacity-90">
            Search any specialization across all universities to instantly access deep industry insights, secret facts, and core USPs for your pitch.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative -mt-8 z-20">
        
        {/* Search Console */}
        <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 w-6 h-6" />
            <input
              type="text"
              placeholder="Search by name, acronym (e.g., HR, AI, ACCA, BFSI) or category..."
              className="w-full pl-14 pr-4 py-4 md:py-5 border-none bg-slate-50 text-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500/20 font-medium text-lg placeholder-slate-400 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setExpandedIndex(null); // Reset when searching
              }}
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-800">
                {searchTerm ? 'Search Results' : 'Explore All Specializations'}
            </h2>
            <div className="text-sm font-bold bg-slate-200 text-slate-600 px-3 py-1 rounded-full">
                {filteredData.length} Found
            </div>
        </div>

        {/* Mappings Grid - ACCORDION STYLE */}
        <div className="space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((spec, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div key={index} className={`bg-white rounded-2xl shadow-sm border ${isExpanded ? 'border-[#0047ad]' : 'border-slate-200'} transition-all duration-300 relative overflow-hidden group`}>
                  {/* Left Highlight Strip */}
                  <div className={`absolute top-0 left-0 w-2 h-full transition-all duration-300 ${isExpanded ? 'bg-[#ff6b00]' : 'bg-transparent group-hover:bg-slate-300'}`}></div>

                  {/* Header (Clickable) */}
                  <div 
                    onClick={() => toggleExpand(index)}
                    className="p-5 md:p-6 cursor-pointer hover:bg-slate-50 flex items-center justify-between gap-4"
                  >
                     <div className="pl-3">
                       <div className={`inline-flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 ${spec.type === 'Degree' ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-[#0047ad]'}`}>
                          {spec.type === 'Degree' ? <GraduationCap size={14} /> : <Target size={12} />} 
                          {spec.type} • {spec.category}
                       </div>
                       <h3 className="text-lg md:text-2xl font-black text-slate-900 leading-tight block">{spec.name}</h3>
                       <div className="hidden sm:flex flex-wrap gap-2 mt-2">
                          {spec.acronyms.map((acr, i) => (
                              <span key={i} className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">{acr}</span>
                          ))}
                       </div>
                     </div>

                     <div className="shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0047ad] group-hover:text-white transition-colors">
                        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                     </div>
                  </div>

                  {/* Collapsible Content */}
                  {isExpanded && (
                    <div className="px-5 md:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
                          {/* Left Col: Explanations */}
                          <div className="md:col-span-7 space-y-4">
                              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                      <Search size={14} className="text-[#0047ad]"/> What exactly is it?
                                  </h4>
                                  <p className="text-slate-700 font-medium leading-relaxed text-sm md:text-base">
                                      {spec.whatIsIt}
                                  </p>
                              </div>
                              
                              <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                                  <h4 className="text-xs font-black text-amber-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                                      <Lightbulb size={14} className="text-amber-600"/> The Hidden Truth
                                  </h4>
                                  <p className="text-amber-800 font-medium leading-relaxed italic text-sm md:text-base">
                                      "{spec.secretFact}"
                                  </p>
                              </div>
                          </div>

                          {/* Right Col: USPs to pitch */}
                          <div className="md:col-span-5 relative">
                              <div className="h-full bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                      <Flame size={14} className="text-[#ff6b00]"/> Top 3 USPs (Sales Pitch)
                                  </h4>
                                  <ul className="space-y-4">
                                      {spec.usps.map((usp, i) => (
                                          <li key={i} className="flex items-start gap-3">
                                              <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                              <span className="text-sm font-bold text-slate-700">{usp}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                <Search size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-black text-slate-800 mb-2">No Specializations Found</h3>
                <p className="text-slate-500 font-medium">Try searching another term like "Marketing", "Cyber", or "Finance".</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SpecializationGuide;
