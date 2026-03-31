import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutList, X, Check, XCircle, Minus, AlertTriangle, TrendingUp, RefreshCw } from 'lucide-react';

export const callFlowData = [
  {
    category: "Opening",
    weight: 13,
    items: [
      { id: "op1", text: "Greetings", points: 2 },
      { id: "op2", text: "Student Name confirmation & Purpose of the Call", points: 2 },
      { id: "op3", text: "Confirmation of Preferred Language", points: 2 },
      { id: "op4", text: "Introduction - Counsellor and College Buddy", points: 5 },
      { id: "op5", text: "Call recording Disclaimer", points: 2 },
    ]
  },
  {
    category: "Know your Student",
    weight: 15,
    items: [
      { id: "k1", text: "Confirm V-card Details and Update missing Data- (CB Website-8 questions)", points: 5 },
      { id: "k2", text: "Program & Specialization", points: 2 },
      { id: "k3", text: "Location", points: 1 },
      { id: "k4", text: "Confirm correct percentage of last Qualification", points: 1 },
      { id: "k5", text: "Working in Which Industry/Company, Designation/Role and Experience ?", points: 3 },
      { id: "k6", text: "Why Online course and reason for choosing specific course?", points: 3 },
    ]
  },
  {
    category: "Suggesting University",
    weight: 40,
    items: [
      { id: "s1", text: "Did counsellor refer the top 3 Listed/PTU Universities from the third page of CB website?", points: 7.5 },
      { id: "s2", text: "Did the counsellor Suggest the right University from CB website?", points: 7.5 },
      { id: "s3", text: "Did the counsellor Explain the Features, Key Highlights and Program Outcome of the Selected Univer", points: 10 },
      { id: "s4", text: "Did the counsellor elaborate the USP of the university from Compare Page of CB Website?", points: 10 },
      { id: "s5", text: "College Buddy Features Informed - Ex. Video call, Chat Process, Talk to University Etc.", points: 5 },
    ]
  },
  {
    category: "Closing",
    weight: 5,
    items: [
      { id: "c1", text: "Further Assistance and Follow Up Confirmation", points: 3 },
      { id: "c2", text: "Student Engagement/ Call closing script adherence", points: 2 },
    ]
  },
  {
    category: "Call Etiquettes / Soft Skills",
    weight: 20,
    items: [
      { id: "se1", text: "Did Counsellor Convince the student to create desire/suggest best right course/University as per the requirements and Created Urgency", points: 5 },
      { id: "se2", text: "Objection Handling - Rebuttals", points: 5 },
      { id: "se3", text: "Incorrect Sales/Force Sales (Incorrect information and incomplete information)", points: 0, isFatal: true, fatalTriggersOn: 'yes' },
      { id: "se4", text: "Polite, Empathetic, Courteous, Clear Information", points: 2 },
      { id: "se5", text: "Avoid interrupting, arguing and over-lapping the Student", points: 2 },
      { id: "se6", text: "Active Listening/Acknowledgement/Paraphrasing", points: 2 },
      { id: "se7", text: "Avoided Casual/Informal Language - Slangs & Fillers", points: 2 },
      { id: "se8", text: "Follow Hold/Transfer script and protocol appropriately", points: 2 },
    ]
  },
  {
    category: "Use Of LSQ",
    weight: 7,
    items: [
      { id: "l1", text: "Use of Converse/Chat", points: 3 },
      { id: "l2", text: "Accurate Dispositioning", points: 0, isFatal: true, fatalTriggersOn: 'no' },
      { id: "l3", text: "LSQ V-card details used/Captured", points: 4 },
    ]
  }
];

const MockCallEvaluator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState({}); // { [id]: 'yes' | 'no' | 'na' }

  const handleAnswer = (id, answer) => {
    setAnswers(prev => ({ ...prev, [id]: answer }));
  };

  const scoreData = useMemo(() => {
    let earnedPoints = 0;
    let applicablePoints = 0;
    let isFatalFailure = false;

    callFlowData.forEach(cat => {
      cat.items.forEach(item => {
        const answer = answers[item.id];
        
        // Check Zero Tolerance / Fatal Errors
        if (item.isFatal) {
            if (answer === item.fatalTriggersOn) {
                isFatalFailure = true;
            }
        }

        if (answer === 'yes') {
          earnedPoints += item.points;
          applicablePoints += item.points;
        } else if (answer === 'no') {
          applicablePoints += item.points;
        }
        // 'na' or undefined means we don't add to applicablePoints, 
        // effectively scaling the score proportionally.
      });
    });

    const maxTotalStatic = 100; // Total possible if nothing is NA
    const finalScore = applicablePoints === 0 ? 0 : (earnedPoints / applicablePoints) * 100;
    
    return {
      earnedPoints,
      applicablePoints,
      finalScore: isFatalFailure ? 0 : Math.round(finalScore * 10) / 10,
      isFatalFailure,
      progress: (Object.keys(answers).length / callFlowData.reduce((acc, cat) => acc + cat.items.length, 0)) * 100
    };
  }, [answers]);

  const resetAudit = () => {
      if(window.confirm('Reset all evaluation data?')) {
          setAnswers({});
      }
  };

  return (
    <>
      {/* Floating Action Badge */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex border border-primary-100 items-center justify-center gap-2 bg-white text-primary-600 font-extrabold px-5 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
             <LayoutList size={22} className="group-hover:text-primary-500" />
             {Object.keys(answers).length > 0 && (
                <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 border border-white rounded-full"></span>
             )}
          </div>
          <span className="tracking-tight text-[15px]">Audit Trainee</span>
        </button>
      </div>

      {/* Slide-over Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full md:w-[600px] h-[100dvh] bg-slate-50 shadow-2xl z-[150] flex flex-col border-l border-slate-200"
            >
              {/* Header */}
              <div className="bg-white px-6 py-5 border-b border-slate-200 shadow-sm z-10">
                 <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                            <TrendingUp className="text-primary-500" size={24} /> Mock Call Evaluator
                        </h2>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Quality Assurance Form</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={resetAudit} className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors" title="Reset Audit">
                            <RefreshCw size={18}/>
                        </button>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 bg-slate-50 border border-slate-200 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                 </div>

                 {/* Score Dashboard Matrix */}
                 <div className="flex items-stretch gap-3">
                     <div className={`flex-1 rounded-2xl p-4 border relative overflow-hidden flex flex-col justify-center transition-colors duration-500 ${scoreData.isFatalFailure ? 'bg-red-50 border-red-200' : 'bg-primary-600 border-primary-500 shadow-inner'}`}>
                         <h3 className={`text-[11px] font-black uppercase tracking-widest mb-1 ${scoreData.isFatalFailure ? 'text-red-500' : 'text-primary-200'}`}>Total Score</h3>
                         <div className="flex items-baseline gap-1">
                             <span className={`text-4xl font-black tracking-tighter ${scoreData.isFatalFailure ? 'text-red-600' : 'text-white'}`}>{scoreData.finalScore}</span>
                             <span className={`font-bold pb-1 ${scoreData.isFatalFailure ? 'text-red-400' : 'text-primary-300'}`}>%</span>
                         </div>
                         {scoreData.isFatalFailure && (
                             <div className="absolute top-4 right-4 text-red-500 animate-pulse">
                                 <AlertTriangle size={32} />
                             </div>
                         )}
                     </div>
                     <div className="w-1/3 bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-center items-center shadow-sm">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Completion</span>
                         <span className="text-2xl font-black text-slate-800">{Math.round(scoreData.progress)}%</span>
                         <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                             <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${scoreData.progress}%` }}></div>
                         </div>
                     </div>
                 </div>
                 {scoreData.isFatalFailure && (
                     <div className="mt-3 bg-red-100 border border-red-200 text-red-700 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-2">
                        <XCircle size={14} className="shrink-0"/>
                        Zero Tolerance Policy (ZTP) Triggered. Fatal Error automatically fails the audit.
                     </div>
                 )}
              </div>

              {/* Checklist Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-32">
                 <div className="space-y-8">
                    {callFlowData.map((category, catIdx) => (
                      <div key={catIdx} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                         <div className="bg-slate-100 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
                            <h4 className="font-extrabold text-slate-700">{category.category}</h4>
                            <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                               {category.weight} Marks
                            </span>
                         </div>
                         <div className="divide-y divide-slate-100">
                            {category.items.map((item, itemIdx) => (
                               <div key={item.id} className="p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                                  <div className="flex-1">
                                      {item.isFatal && <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-[9px] font-black uppercase tracking-widest border border-red-100 px-2 py-0.5 rounded mb-2"><AlertTriangle size={10}/> Fatal Error Possible</span>}
                                      <p className="text-[14px] font-bold text-slate-800 leading-snug pr-4">{item.text}</p>
                                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1.5 opacity-80">Weightage: {item.points} Points</p>
                                  </div>
                                  
                                  {/* Choice Segment */}
                                  <div className="flex bg-slate-100 rounded-xl p-1 border border-slate-200 shrink-0 w-full md:w-auto h-12">
                                     {['yes', 'no', 'na'].map((choice) => {
                                        const isSelected = answers[item.id] === choice;
                                        let activeClass = '';
                                        if (isSelected) {
                                            if (choice === 'yes') activeClass = item.isFatal && item.fatalTriggersOn === 'yes' ? 'bg-red-500 text-white shadow-md' : 'bg-emerald-500 text-white shadow-md';
                                            if (choice === 'no') activeClass = item.isFatal && item.fatalTriggersOn === 'no' ? 'bg-red-500 text-white shadow-md' : 'bg-rose-500 text-white shadow-md';
                                            if (choice === 'na') activeClass = 'bg-slate-600 text-white shadow-md';
                                        }

                                        return (
                                            <button
                                                key={choice}
                                                onClick={() => handleAnswer(item.id, choice)}
                                                className={`flex-1 md:w-20 flex items-center justify-center gap-1.5 rounded-lg text-[12px] font-black uppercase tracking-widest transition-all duration-200 ${isSelected ? activeClass : 'text-slate-500 hover:bg-white hover:shadow-sm'}`}
                                            >
                                                {choice === 'yes' ? <><Check size={14}/> YES</> : choice === 'no' ? <><X size={14}/> NO</> : <><Minus size={14}/> N/A</>}
                                            </button>
                                        );
                                     })}
                                  </div>
                               </div>
                            ))}
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MockCallEvaluator;
