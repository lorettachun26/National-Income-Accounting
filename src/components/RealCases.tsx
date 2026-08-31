import React, { useState } from 'react';
import { REAL_CASES_DATA } from '../data/realCasesData';
import { RealCaseStudy } from '../types';
import { 
  Building2, 
  Tag, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RealCasesProps {
  lang?: 'en' | 'zh';
}

export const RealCases: React.FC<RealCasesProps> = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(REAL_CASES_DATA[0].id);
  const [userSelectedCheck, setUserSelectedCheck] = useState<{ [key: string]: number | null }>({});
  const [submittedCheck, setSubmittedCheck] = useState<{ [key: string]: boolean }>({});

  const activeCase = REAL_CASES_DATA.find(c => c.id === selectedCaseId) || REAL_CASES_DATA[0];

  const handleOptionClick = (caseId: string, optIndex: number, correctIndex: number) => {
    setUserSelectedCheck(prev => ({ ...prev, [caseId]: optIndex }));
    setSubmittedCheck(prev => ({ ...prev, [caseId]: true }));
    if (optIndex === correctIndex) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Editorial Header */}
      <div className="bg-white border-2 border-black p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-black pb-4 mb-4 gap-2">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-black text-white px-2 py-0.5">
                Section C: Field Inquiries
              </span>
              <span className="text-[11px] font-mono text-gray-500">Authentic HKSAR Case Studies</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif italic tracking-tight text-[#1a1a1a]">
              Hong Kong Real-World Economics Case Studies
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-1">
              Bridge abstract national income theories with authentic Hong Kong social policies, housing markets, and financial mega-events.
            </p>
          </div>
        </div>

        {/* Case Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
          {REAL_CASES_DATA.map((c) => {
            const isSelected = c.id === activeCase.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCaseId(c.id)}
                className={`p-3.5 border text-left transition-all ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-sm'
                    : 'bg-[#fdfdfb] border-neutral-300 hover:border-black text-neutral-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 border ${
                    isSelected ? 'bg-neutral-800 text-yellow-300 border-neutral-700' : 'bg-neutral-100 text-gray-700 border-neutral-300'
                  }`}>
                    {c.tag}
                  </span>
                </div>
                <h4 className="text-xs font-serif font-bold line-clamp-2">
                  {c.title}
                </h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Case Study Detail Card */}
      <div className="bg-white border-2 border-black overflow-hidden shadow-sm">
        {/* Banner */}
        <div className="p-6 border-b-2 border-black bg-[#fdfdfb]">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-red-700 text-white">
              {activeCase.tag}
            </span>
            <span className="px-2.5 py-0.5 text-[11px] font-mono font-bold bg-neutral-100 text-black border border-black">
              🎯 {activeCase.hkdseRelevance}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-[#1a1a1a]">
            {activeCase.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 mt-2.5 leading-relaxed font-sans max-w-4xl">
            {activeCase.summary}
          </p>
        </div>

        {/* Breakdown Sections */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCase.caseDetails.map((detail, idx) => (
              <div
                key={idx}
                className="bg-[#fdfdfb] border border-black p-4 space-y-2 shadow-sm"
              >
                <div className="flex items-center space-x-2 text-black font-serif italic font-bold text-sm border-b border-neutral-200 pb-1.5">
                  <span className="w-5 h-5 bg-black text-white flex items-center justify-center text-xs font-mono font-bold">
                    {idx + 1}
                  </span>
                  <span>{detail.heading}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed pl-7">
                  {detail.content}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Case Check Mini-Quiz */}
          <div className="mt-8 bg-[#fdfdfb] p-5 sm:p-6 border-2 border-black space-y-4">
            <div className="flex items-center space-x-2 text-xs font-bold text-black uppercase tracking-wider border-b border-black pb-2">
              <span className="bg-black text-white px-2 py-0.5 font-mono text-[10px]">CASE CHECK</span>
              <span className="font-serif italic text-sm">Authentic Application Assessment</span>
            </div>
            <p className="text-sm font-semibold text-[#1a1a1a]">
              {activeCase.interactiveCheck.question}
            </p>

            <div className="space-y-2 pt-1">
              {activeCase.interactiveCheck.options.map((opt, oIdx) => {
                const userChoice = userSelectedCheck[activeCase.id];
                const isSubmitted = submittedCheck[activeCase.id];
                const isCorrect = oIdx === activeCase.interactiveCheck.correctIndex;
                const isSelected = userChoice === oIdx;

                let btnClass = 'bg-white border-neutral-300 text-neutral-800 hover:border-black hover:bg-[#f4f4f0]';
                if (isSubmitted) {
                  if (isCorrect) {
                    btnClass = 'bg-black text-white border-black font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnClass = 'bg-red-50 border-red-700 text-red-900';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={isSubmitted}
                    onClick={() => handleOptionClick(activeCase.id, oIdx, activeCase.interactiveCheck.correctIndex)}
                    className={`w-full text-left p-3.5 border text-xs sm:text-sm flex items-start space-x-3 transition-all ${btnClass}`}
                  >
                    <span className="font-mono font-bold shrink-0">{String.fromCharCode(65 + oIdx)}.</span>
                    <span className="flex-1">{opt}</span>
                    {isSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0 mt-0.5" />}
                    {isSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />}
                  </button>
                );
              })}
            </div>

            {submittedCheck[activeCase.id] && (
              <div className="mt-3 p-4 bg-[#1a1a1a] text-white border border-black text-xs space-y-1 font-sans">
                <div className="font-serif italic font-bold text-yellow-300 text-sm">
                  {userSelectedCheck[activeCase.id] === activeCase.interactiveCheck.correctIndex 
                    ? '✓ Correct Answer!' 
                    : '✗ Incorrect. Check Examiner Rationale below:'}
                </div>
                <div className="text-neutral-200 leading-relaxed pt-1">{activeCase.interactiveCheck.explanation}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
