import React from 'react';
import { Target, Clock, AlertCircle, HelpCircle, BrainCircuit, Wallet, Award, CheckCircle2 } from 'lucide-react';

const CounselorFlow = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0047ad]/10 text-[#0047ad] text-sm font-black uppercase tracking-widest mb-4">
            <Target size={16} /> Internal Use Only
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            The College Buddy <br/>
            <span className="text-[#ff6b00]">Consultation Framework</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Turn an interrogation into an insightful conversation. Lead the student to discover their true path.
          </p>
        </div>

        {/* Phase 1 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#0047ad]"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0047ad] flex items-center justify-center">
              <Clock size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Phase 1: Ice-Breaking & Baseline</h2>
              <p className="text-sm font-bold text-slate-500">Goal: Build trust and relax the student</p>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-[#ff6b00]" /> What to Say:</h3>
            <ul className="space-y-3 font-medium text-slate-700 italic">
              <li>"Hello [Name], welcome! Before we dive into courses, main aapse thoda aage ke vision ke baare me samajhna chahunga. Abhi aap current me kya kar rahe ho? (Working / Fresher / Drop year)?"</li>
              <li>"Aapka academic background kya raha hai aur approximately percentage kya thi?"</li>
            </ul>
          </div>
          <div className="flex gap-3 text-sm text-slate-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100">
            <AlertCircle className="text-amber-500 shrink-0" size={20} />
            <p><b>Logic:</b> Agar percentage low hai aur stream non-maths hai, toh technical and heavy courses avoid karke safe options dimag me filter shuru karo.</p>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6b00]"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff6b00] flex items-center justify-center">
              <BrainCircuit size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Phase 2: Intent & The "Why"</h2>
              <p className="text-sm font-bold text-slate-500">Goal: Identify the core motivation</p>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-[#0047ad]" /> Direct Question:</h3>
            <p className="font-medium text-slate-700 italic">"Aap jo abhi ye degree plan kar rahe ho, uske peeche sabse bada reason kya hai?"</p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-bold">
               <div className="bg-white p-3 rounded border border-slate-200 shadow-sm text-slate-700">A. Promotion / Increment (Upskilling)</div>
               <div className="bg-white p-3 rounded border border-slate-200 shadow-sm text-slate-700">B. Industry Change (Transition)</div>
               <div className="bg-white p-3 rounded border border-slate-200 shadow-sm text-slate-700">C. Govt Job Valid Degree (Compliance)</div>
               <div className="bg-white p-3 rounded border border-slate-200 shadow-sm text-slate-700">D. Business / Startup (Entrepreneurship)</div>
            </div>
          </div>
          <div className="flex gap-3 text-sm text-slate-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100">
            <AlertCircle className="text-amber-500 shrink-0" size={20} />
            <p><b>Logic:</b> Agar Govt Job chahiye, suggest BA / Gen B.Com. Don't pitch expensive private specializations. Agar Switch chahiye, validate ROI with MBA Data Science, etc.</p>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Phase 3: Interest & Aptitude Mapping</h2>
              <p className="text-sm font-bold text-slate-500">Goal: Choose the Exact Course based on behavior</p>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-emerald-600" /> Behavioral Question:</h3>
            <p className="font-medium text-slate-700 italic">"Agar aapko agle 5 saal kisi ek cheez par kaam karna pade, toh aap kisme zyada comfortable feel karoge?"</p>
            
            <div className="mt-4 space-y-3">
               <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-sm font-bold text-slate-700">1. Logic & Problem Solving (Coding)</span>
                  <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2 py-1 rounded">BCA / MCA</span>
               </div>
               <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-sm font-bold text-slate-700">2. Managing People & Money (Sales, Finance)</span>
                  <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2 py-1 rounded">BBA / MBA</span>
               </div>
               <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-sm font-bold text-slate-700">3. Creativity & Design (Editing, Graphics)</span>
                  <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2 py-1 rounded">BA / MA (JMC)</span>
               </div>
               <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-sm font-bold text-slate-700">4. Hospital & Admin (Healthcare)</span>
                  <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2 py-1 rounded">MBA Pharma / Health</span>
               </div>
            </div>
          </div>
        </div>

        {/* Phase 4 & 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Wallet className="text-purple-600" size={24} />
                    <h2 className="text-lg font-black text-slate-900">Phase 4: Reality Check</h2>
                </div>
                <ul className="space-y-3 font-medium text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <li>"Aap self-study ke liye hafte me actually kitne hours nikal sakte ho?"</li>
                    <li>"Kya humara budget flexible hai ya fixed? (Fees normally 1L - 4L)"</li>
                    <li>"Upfront Lumpsum pay karke 10% discount lenge ya EMI option?"</li>
                </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Award className="text-[#ff6b00]" size={24} />
                    <h2 className="text-lg font-black text-slate-900">Phase 5: The "Aha!" Pitch</h2>
                </div>
                <p className="text-sm font-medium text-slate-700 bg-orange-50 p-4 rounded-xl border border-orange-100 italic">
                    "Kyunki aapka goal <b>[IT sector switch]</b> hai aur aapko <b>[Logic]</b> pasand hai, <b>[MCA]</b> sabse best rahega. Top brand me <b>[Amity]</b> aur budget friendly me <b>[LPU]</b> suggest karunga. Kiska syllabus bheju?"
                </p>
            </div>
        </div>

        {/* Rules */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-black mb-4 flex items-center gap-2"><AlertCircle size={20} className="text-red-500"/> Golden Rules</h2>
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-sm font-medium text-slate-300"><b>Never sound like a Salesman.</b> Sound like a Mentor. Connect courses to their pain points.</p>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-sm font-medium text-slate-300"><b>Use the 70/30 Rule.</b> The student should speak 70% of the time, you speak 30%.</p>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-sm font-medium text-slate-300"><b>If confused, refer to Phase 2.</b> A student's 'why' is the only thing that will make them pay the fees.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CounselorFlow;
