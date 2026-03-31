import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Banknote, MapPin, Search, GraduationCap, TrendingUp, BookOpen, AlertCircle, Info, CheckCircle, Navigation, ShieldCheck, Trophy } from 'lucide-react';
import { universities } from '../data/universities';

const UniversityDetails = () => {
   const { uniId } = useParams();
   const navigate = useNavigate();
   const [selectedGroup, setSelectedGroup] = useState('UG');
   const [selectedProgram, setSelectedProgram] = useState(null);
   

   const uni = useMemo(() => {
     return universities.find(u => u.id === uniId);
   }, [uniId]);

   if (!uni) {
     return (
       <div className="pt-24 min-h-screen text-center flex flex-col items-center justify-center p-4 md:p-6 bg-slate-50">
          <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6 shadow-inner">
             <Search size={40} className="text-slate-400" />
          </div>
          <h1 className="text-3xl font-black text-slate-800 mb-3">University Not Found</h1>
          <p className="text-slate-500 font-medium mb-5 md:mb-8 max-w-md">The specific program or university record you're looking for does not exist in the training database.</p>
          <button onClick={() => navigate(-1)} className="px-4 lg:px-6 py-3 bg-[#0047ad] text-white font-bold rounded-xl shadow-[0_4px_12px_rgba(0,71,173,0.3)] hover:scale-105 transition-all">
             Go Back to Console
          </button>
       </div>
     );
   }

   return (
       <div className="min-h-screen bg-slate-50 pb-24 font-inter text-slate-800">
           {/* Top Navigation Bar - Clean & Minimal */}
           <div className="h-[60px] bg-white border-b border-slate-200 sticky top-0 z-50 flex items-center px-4 lg:px-6 lg:px-12 shadow-sm">
               <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-[#0047ad] font-bold text-sm transition-colors group">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Return to Directory
               </button>
               <div className="ml-auto flex items-center gap-4">
                  {uni.url && (
                     <button onClick={() => window.open(uni.url, '_blank')} className="text-xs bg-[#0056d2] hover:bg-[#0047ad] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-sm transition-all shadow-[#0056d2]/20">
                        <Navigation size={14} /> Official Website
                     </button>
                  )}
                  <span className="text-xs bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 hidden sm:flex">
                     <AlertCircle size={14} /> System Online
                  </span>
               </div>
           </div>

           {/* Grand Header - Deep & Structured but not overly aggressive */}
           <div className="bg-[#0b132b] text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0047ad]/20 rounded-full blur-[120px] pointer-events-none -mt-64 -mr-64"></div>
               
               <div className="max-w-[1400px] mx-auto px-4 lg:px-6 lg:px-12 pt-10 pb-12 lg:pt-16 lg:pb-20 flex flex-wrap gap-6 lg:gap-10 justify-between items-start xl:items-end relative z-10 border-b-4 border-[#ff6b00]">
                  
                  {/* Left: Titles with normal casing. Flex-1 allows taking space up to a point, then wrapping. */}
                  <div className="flex-[1_1_500px] max-w-full">
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                         <span className="bg-white/10 text-emerald-400 text-xs font-black px-3 py-1.5 rounded flex items-center gap-1.5 uppercase tracking-widest"><ShieldCheck size={14}/> Data Verified</span>
                         <span className="bg-[#0047ad] text-white text-xs font-black px-3 py-1.5 rounded uppercase tracking-widest">{uni.type}</span>
                         <span className="text-slate-300 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><MapPin size={14}/> {uni.location}</span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 break-words sm:break-normal">{uni.name}</h1>
                      <div className="flex flex-wrap items-center gap-3 text-slate-300 text-[11px] sm:text-sm font-bold uppercase tracking-widest">
                         {uni.accreditation.split(',').map((acc, idx) => (
                             <span key={idx} className="bg-white/5 px-2.5 sm:px-3 py-1.5 rounded border border-white/10 whitespace-nowrap">{acc.trim()}</span>
                         ))}
                      </div>
                  </div>

                  {/* Right: Sharp Data Widgets - Now fully fluid, wrapping smoothly. */}
                  <div className="flex flex-wrap gap-3 md:gap-4 flex-[1_1_auto] w-full xl:w-auto xl:max-w-2xl mt-2 xl:mt-0 justify-start xl:justify-end">
                      <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm flex flex-col justify-center flex-1 min-w-[180px] max-w-full">
                         <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 block">Est. Tuition Band</span>
                         <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 block tracking-tight leading-tight break-words">{uni.fees.split('-')[0] || uni.fees}</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm flex flex-col justify-center flex-1 min-w-[180px] max-w-full">
                         <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 block">Max Placement Pkg</span>
                         <span className="text-lg sm:text-xl md:text-2xl font-black text-white block tracking-tight leading-tight break-words">{uni.placement.split('|')[1]?.trim() || uni.placement}</span>
                      </div>
                      <div className="bg-[#0047ad]/20 border border-[#0047ad]/40 p-4 sm:p-5 rounded-xl backdrop-blur-sm flex flex-col justify-center flex-1 min-w-[180px] max-w-full">
                         <span className="text-[10px] text-[#8cb4ff] font-bold uppercase tracking-widest mb-1 block">Global Rank</span>
                         <span className="text-lg sm:text-xl md:text-2xl font-black text-white block tracking-tight leading-tight break-words">{uni.ranking}</span>
                      </div>
                  </div>
               </div>
           </div>

           {/* Console Body - Relaxed layout, no harsh 'dabe' boxes */}
           <div className="max-w-[1400px] mx-auto px-4 lg:px-6 lg:px-12 pt-6 md:pt-12">
               <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6 lg:gap-10 items-start">
                  
                  {/* LEFT COLUMN: Data Layout */}
                  <div className="space-y-10">
                      
                      {/* Catalog Engine */}
                      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-8">
                          <h3 className="text-[13px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-5 md:mb-8 pb-4 border-b border-slate-100">
                             <GraduationCap className="text-[#0047ad]" size={18}/> Program & Elective Catalog
                          </h3>
                          
                          <div>
                              {uni.extendedDetails?.programs ? (
                                 <div className="flex flex-col gap-4 md:p-6">
                                    {/* Level 1: Tab System - softer and cleaner */}
                                    <div className="flex flex-wrap border-b border-slate-200 gap-4 sm:gap-4 sm:p-5 md:p-8">
                                       <button 
                                          onClick={() => { setSelectedGroup('UG'); setSelectedProgram(null);  }}
                                          className={`py-3 text-xs sm:text-[13px] font-black uppercase tracking-widest transition-all border-b-2 mb-[-1px] ${selectedGroup === 'UG' ? 'border-[#0047ad] text-[#0047ad]' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                                       >Undergraduate (UG)</button>
                                       <button 
                                          onClick={() => { setSelectedGroup('PG'); setSelectedProgram(null);  }}
                                          className={`py-3 text-xs sm:text-[13px] font-black uppercase tracking-widest transition-all border-b-2 mb-[-1px] ${selectedGroup === 'PG' ? 'border-[#0047ad] text-[#0047ad]' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                                       >Postgraduate (PG)</button>
                                    </div>

                                    <div className="flex flex-col gap-6 sm:p-5 md:p-8 mt-2">
                                       {/* Level 2: List of Programs */}
                                       <div className="w-full flex flex-col gap-4">
                                          {uni.extendedDetails.programs.filter(p => p.group === selectedGroup).map((prog, i) => {
                                             const isProgSelected = selectedProgram?.name === prog.name;
                                             return (
                                                <div key={i} className={`border rounded-xl transition-all overflow-hidden ${isProgSelected ? 'border-[#ff6b00] ring-1 ring-[#ff6b00]/20' : 'border-slate-200'}`}>
                                                   {/* Program Row */}
                                                   <button 
                                                      onClick={() => {
                                                         setSelectedProgram(isProgSelected ? null : prog);
                                                         
                                                      }}
                                                      className={`w-full text-left p-4 sm:p-5 flex justify-between items-center transition-colors ${isProgSelected ? 'bg-[#fff7ed]' : 'bg-white hover:bg-slate-50'}`}
                                                   >
                                                      <div>
                                                         <span className="text-[10px] font-black uppercase tracking-widest text-[#0047ad] block mb-1">{prog.duration}</span>
                                                         <span className={`text-xl font-black ${isProgSelected ? 'text-slate-900' : 'text-slate-700'}`}>{prog.name}</span>
                                                      </div>
                                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${isProgSelected ? 'bg-[#ff6b00] text-white shadow-md rotate-90' : 'bg-slate-100 text-slate-400 rotate-180'}`}>
                                                         <ArrowLeft size={16} />
                                                      </div>
                                                   </button>

                                                   {/* Level 3: Specializations Expanded Grid */}
                                                   {isProgSelected && prog.specializations && (
                                                      <div className="p-4 sm:p-5 md:p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-4">
                                                         {prog.specializations.map((spec, j) => {
                                                             const isSpecSelected = false;
                                                             return (
                                                                <button 
                                                                   key={j}
                                                                   onClick={() => navigate(`/mock-calls/university/${uniId}/program/${encodeURIComponent(prog.name)}/specialization/${encodeURIComponent(spec.name)}`)}
                                                                   className={`text-left px-4 py-3 rounded-lg border transition-all flex flex-col gap-1 items-start ${isSpecSelected ? 'bg-slate-900 border-slate-900 shadow-lg' : 'bg-white border-slate-200 hover:border-[#0047ad] shadow-sm group'}`}
                                                                >
                                                                   <span className={`text-[13px] font-bold ${isSpecSelected ? 'text-white' : 'text-slate-700 group-hover:text-[#0047ad]'}`}>
                                                                       {spec.name}
                                                                   </span>
                                                                   {(spec.price || prog.priceRange) && (
                                                                       <span className={`text-[10px] font-black uppercase tracking-widest mt-1 ${isSpecSelected ? 'text-slate-300' : 'text-emerald-600 group-hover:text-[#ff6b00]'}`}>
                                                                           {spec.price || prog.priceRange}
                                                                       </span>
                                                                   )}
                                                                </button>
                                                             );
                                                         })}
                                                      </div>
                                                   )}
                                                </div>
                                             )
                                          })}
                                       </div>

                                       
                                           <div className="w-full mt-2 lg:mt-6">
                                           {selectedProgram ? (
                                             <div className="h-full min-h-[300px] border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 p-4 sm:p-5 md:p-8 flex flex-col items-center justify-center text-center">
                                                <TrendingUp size={32} className="text-slate-300 mb-4" />
                                                <h4 className="text-[15px] font-black text-slate-700 mb-2">Select an Elective</h4>
                                                <p className="text-[13px] font-medium text-slate-500 leading-relaxed max-w-[220px]">Choose a specialization from the {selectedProgram.name} list to reveal metrics.</p>
                                             </div>
                                          ) : (
                                             <div className="h-full min-h-[300px] border border-slate-200 rounded-2xl bg-white p-4 sm:p-5 md:p-8 flex flex-col items-center justify-center text-center">
                                                <Search size={32} className="text-slate-200 mb-4" />
                                                <h4 className="text-[15px] font-black text-slate-400">No Program Selected</h4>
                                             </div>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              ) : (
                                 <div className="flex flex-wrap gap-3 mt-4">
                                    {uni.specializations.map((spec, i) => (
                                       <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-[13px] font-bold rounded-lg shadow-sm">
                                          {spec}
                                       </span>
                                    ))}
                                 </div>
                              )}
                          </div>
                      </div>

                      {/* Hard Data Rows - But styled beautifully without harsh "dabe" boxes */}
                      {uni.extendedDetails && (
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:p-5 md:p-8">
                            
                            {/* Key Propositions Box */}
                            <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-8 lg:col-span-2">
                                <h3 className="text-[13px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-5 md:mb-8 pb-4 border-b border-slate-100">
                                   <BookOpen className="text-emerald-500" size={18}/> Key Propositions & Validation
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-6">
                                   {uni.extendedDetails.usps.map((usp, i) => (
                                      <div key={i} className="flex gap-4 items-start group">
                                         <div className="mt-0.5 text-[#0047ad] bg-blue-50 p-1 rounded-md shrink-0">
                                            <CheckCircle2 size={16} />
                                         </div>
                                         <div className="text-slate-700 font-medium text-[15px] leading-relaxed">
                                            {usp}
                                         </div>
                                      </div>
                                   ))}
                                </div>
                            </div>

                            {/* Financial Operations Box */}
                            <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-4 sm:p-5 md:p-8 border-t-[4px] border-t-[#ff6b00]">
                                <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-6">
                                   <Banknote className="text-[#ff6b00]" size={18}/> Financial Ledger
                                </h3>
                                <div className="flex flex-col gap-3">
                                   {uni.extendedDetails.payment.split('. ').map((sentence, idx) => (
                                       sentence.trim() && (
                                          <div key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-[#ff6b00]/30 hover:bg-[#fff7ed]/50 transition-colors">
                                             <div className="mt-0.5 w-6 h-6 rounded-full bg-white shadow-sm border border-slate-200 text-[#ff6b00] flex items-center justify-center shrink-0">
                                                 <ArrowRight size={12} strokeWidth={3} />
                                             </div>
                                             <p className="text-slate-700 font-bold text-[14px] leading-snug pt-0.5">
                                                 {sentence}
                                             </p>
                                          </div>
                                       )
                                   ))}
                                </div>
                            </div>

                            {/* Exam Protocols Box */}
                            <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-4 sm:p-5 md:p-8 border-t-[4px] border-t-purple-500 flex flex-col">
                                <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-6">
                                   <CheckCircle className="text-purple-600" size={18}/> Exam Protocols
                                </h3>
                                
                                <div className="flex flex-col gap-4 mt-2">
                                    {/* Assessment Card */}
                                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6 rounded-xl border border-slate-200">
                                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 flex items-center gap-1.5 focus:outline-none">
                                            <Trophy size={14} className="text-slate-500" /> ASSESSMENT SPLIT
                                        </div>
                                        <div className="text-slate-800 font-black text-lg leading-snug">
                                            {uni.extendedDetails.examination.split('|')[0]}
                                        </div>
                                    </div>
                                    
                                    {/* Passing Criteria Card */}
                                    <div className="bg-purple-50 p-4 md:p-6 rounded-xl border border-purple-100">
                                        <div className="text-[10px] font-black uppercase text-purple-400 tracking-widest mb-3 flex items-center gap-1.5 focus:outline-none">
                                            <ShieldCheck size={14} className="text-purple-500" /> PASSING CRITERIA
                                        </div>
                                        <div className="inline-block bg-white text-purple-700 font-black px-4 py-2 rounded-lg shadow-sm border border-purple-100">
                                            {uni.extendedDetails.examination.split('|')[1]}
                                        </div>
                                    </div>
                                </div>
                            </div>

                         </div>
                      )}
                  </div>

                  {/* RIGHT COLUMN: Action Pane - Cleaned up to feel more spacious */}
                  <div className="w-full">
                      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 sm:p-5 md:p-8 sticky top-[100px]">
                          <h3 className="text-xl font-black text-slate-900 mb-4">Executive Terminal</h3>
                          
                          <p className="text-slate-500 text-[14px] font-medium leading-relaxed mb-5 md:mb-8">Pipeline ready for {uni.name}. Verify student credentials before dispatching the standard pitch sequence.</p>
                          
                          <div className="space-y-4">
                             <button className="w-full bg-[#ff6b00] hover:bg-[#e05e00] text-white font-black text-[15px] py-4 rounded-xl transition-all shadow-md shadow-[#ff6b00]/20 hover:-translate-y-0.5">
                                 Trigger Secure Pitch
                             </button>

                             <button className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-[13px] py-4 rounded-xl transition-colors">
                                 Download Prospectus
                             </button>
                          </div>

                          {uni.extendedDetails?.leadLocking && (
                             <div className="mt-10 bg-[#fff5f5] border border-red-100 p-4 sm:p-5 rounded-2xl relative">
                                <span className="text-[10px] text-red-600 font-black uppercase tracking-widest block mb-2 flex items-center gap-1.5"><AlertCircle size={14}/> Critical Directive</span>
                                <span className="text-red-900 font-bold text-[14px] leading-snug">{uni.extendedDetails.leadLocking}</span>
                             </div>
                          )}
                      </div>
                  </div>

               </div>
           </div>
       </div>
   );
};

export default UniversityDetails;
