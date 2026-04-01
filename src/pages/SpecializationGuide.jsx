import React, { useState, useMemo } from 'react';
import { Search, Flame, Target, Lightbulb, CheckCircle2, BookOpen } from 'lucide-react';
import { specializationData } from '../data/specializationGuideData';

const SpecializationGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return specializationData;

    const queryWords = searchTerm.toLowerCase().split(/\s+/).filter(w => w);

    return specializationData.filter(spec => {
      const searchString = `${spec.name} ${spec.acronyms.join(' ')} ${spec.category} ${spec.whatIsIt} ${spec.secretFact}`.toLowerCase();
      // Expanded acronym check natively built-in via the acronyms array
      return queryWords.every(word => searchString.includes(word));
    });
  }, [searchTerm]);

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
            Search any specialization below to instantly access deep industry insights, secret facts, and core USPs to pitch to students.
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
              placeholder="Search by name, acronym (e.g., HR, AI), or category..."
              className="w-full pl-14 pr-4 py-4 md:py-5 border-none bg-slate-50 text-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500/20 font-medium text-lg placeholder-slate-400 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

        {/* Mappings Grid */}
        <div className="space-y-6">
          {filteredData.length > 0 ? (
            filteredData.map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6b00] group-hover:w-3 transition-all duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                   <div>
                     <div className="inline-flex items-center gap-2 text-xs font-black text-[#0047ad] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-3">
                        <Target size={14} /> {spec.category}
                     </div>
                     <h3 className="text-2xl font-black text-slate-900">{spec.name}</h3>
                     <div className="flex flex-wrap gap-2 mt-2">
                        {spec.acronyms.map((acr, i) => (
                            <span key={i} className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">#{acr}</span>
                        ))}
                     </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Left Col: Explanations */}
                    <div className="md:col-span-7 space-y-6">
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Search size={16} className="text-[#0047ad]"/> What exactly is it?
                            </h4>
                            <p className="text-slate-700 font-medium leading-relaxed">
                                {spec.whatIsIt}
                            </p>
                        </div>
                        
                        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                            <h4 className="text-sm font-black text-amber-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Lightbulb size={16} className="text-amber-600"/> The Hidden Truth
                            </h4>
                            <p className="text-amber-800 font-medium leading-relaxed italic">
                                "{spec.secretFact}"
                            </p>
                        </div>
                    </div>

                    {/* Right Col: USPs to pitch */}
                    <div className="md:col-span-5 relative">
                        <div className="h-full bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                            <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Flame size={16} className="text-[#ff6b00]"/> Top 3 USPs (Sales Pitch)
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
            ))
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
