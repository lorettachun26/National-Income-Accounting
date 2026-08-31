import React, { useState } from 'react';
import { DSE_PAPER2_QUESTIONS } from '../data/pastPaperData';
import { Paper2Question, UserPaper2Record } from '../types';
import { 
  FileText, 
  CheckSquare, 
  Square, 
  HelpCircle, 
  Sparkles, 
  Award, 
  CheckCircle2,
  ChevronLeft, 
  ChevronRight,
  Eye,
  Edit3,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Paper2TrainerProps {
  lang?: 'en' | 'zh';
  paper2Records: UserPaper2Record[];
  onSavePaper2Record: (record: UserPaper2Record) => void;
}

export const Paper2Trainer: React.FC<Paper2TrainerProps> = ({
  onSavePaper2Record
}) => {
  const [selectedQIndex, setSelectedQIndex] = useState<number>(0);
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [revealedParts, setRevealedParts] = useState<{ [key: string]: boolean }>({});
  const [checkedRubrics, setCheckedRubrics] = useState<{ [key: string]: number[] }>({});

  const currentQ = DSE_PAPER2_QUESTIONS[selectedQIndex];

  const handleToggleRubric = (key: string, rubricIdx: number, partMaxMarks: number) => {
    const currentList = checkedRubrics[key] || [];
    let updated: number[];
    if (currentList.includes(rubricIdx)) {
      updated = currentList.filter(i => i !== rubricIdx);
    } else {
      updated = [...currentList, rubricIdx];
    }
    setCheckedRubrics(prev => ({ ...prev, [key]: updated }));

    // Record progress
    onSavePaper2Record({
      questionId: currentQ.id,
      partIndex: 0,
      userNotes: userInputs[key] || '',
      checkedRubrics: updated,
      awardedMarks: updated.length,
      timestamp: Date.now()
    });

    if (updated.length === partMaxMarks) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  // Helper to check for keywords in student's answer text
  const checkKeywordMatch = (text: string | undefined, keywords: string[]) => {
    if (!text) return false;
    const lower = text.toLowerCase();
    return keywords.some(kw => lower.includes(kw.toLowerCase()));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Editorial Header */}
      <div className="bg-white border-2 border-black p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-black pb-4 mb-4 gap-3">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-red-700 text-white px-2 py-0.5">
                Section E: Paper 2 Free-Response
              </span>
              <span className="text-[11px] font-mono text-gray-500">Official Rubrics & Scored Steps</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif italic tracking-tight text-[#1a1a1a]">
              Paper 2 Marking Scheme & Rubric Trainer
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-1">
              Practice drafting real HKDSE structured answers, check against official marking rubrics, and master essential economic keywords.
            </p>
          </div>
        </div>

        {/* Question Selector Tabs */}
        <div className="flex space-x-2 overflow-x-auto pt-1 no-scrollbar">
          {DSE_PAPER2_QUESTIONS.map((q, idx) => {
            const isSelected = idx === selectedQIndex;
            return (
              <button
                key={q.id}
                onClick={() => setSelectedQIndex(idx)}
                className={`px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider border whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-sm'
                    : 'bg-[#fdfdfb] border-neutral-300 text-neutral-800 hover:border-black'
                }`}
              >
                {q.year} HKDSE {q.questionNumber} ({q.totalMarks}M)
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Active Question Card */}
      {currentQ && (
        <div className="bg-white border-2 border-black overflow-hidden shadow-sm">
          {/* Header */}
          <div className="p-5 border-b-2 border-black bg-[#fdfdfb] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-black text-white font-mono font-bold text-xs">
                {currentQ.year} HKDSE {currentQ.questionNumber}
              </span>
              <span className="text-xs font-mono text-gray-700">Total Marks: <strong className="text-black">{currentQ.totalMarks} Marks</strong></span>
            </div>
            <div className="text-xs font-mono text-gray-600 font-bold">
              Question {selectedQIndex + 1} of {DSE_PAPER2_QUESTIONS.length}
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Background Context if any */}
            {currentQ.context && (
              <div className="p-4 bg-[#fdfdfb] border border-black text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                <strong className="text-red-700 block mb-1 font-serif italic text-sm">Scenario / Source Information:</strong>
                {currentQ.context}
              </div>
            )}

            {/* Question Parts */}
            {currentQ.parts.map((part, pIdx) => {
              const partKey = `${currentQ.id}-${pIdx}`;
              const userText = userInputs[partKey] || '';
              const isRevealed = revealedParts[partKey];
              const checkedList = checkedRubrics[partKey] || [];

              return (
                <div key={pIdx} className="bg-[#fdfdfb] p-5 sm:p-6 border-2 border-black space-y-4">
                  {/* Part Question Label */}
                  <div className="flex items-start justify-between gap-3 border-b border-neutral-300 pb-3">
                    <div className="text-base sm:text-lg font-serif font-medium text-[#1a1a1a] leading-snug">
                      <span className="font-bold font-mono mr-2 text-red-700">{part.partLabel}</span>
                      {part.question}
                    </div>
                    <span className="text-xs font-mono font-bold bg-neutral-100 text-black border border-black px-2 py-0.5 shrink-0">
                      {part.marks} marks
                    </span>
                  </div>

                  {/* Student Answer Scratchpad */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-gray-700 flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Edit3 className="w-3.5 h-3.5 text-black" />
                        <span>Type your draft answer / reasoning:</span>
                      </span>
                      <span className="text-[11px] text-gray-500">Self-practice workspace</span>
                    </label>
                    <textarea
                      rows={3}
                      value={userText}
                      onChange={(e) => setUserInputs(prev => ({ ...prev, [partKey]: e.target.value }))}
                      placeholder="Write your economic reasoning here before revealing the marking scheme..."
                      className="w-full bg-white border border-black text-xs sm:text-sm text-black p-3 focus:outline-none leading-relaxed font-sans"
                    />
                  </div>

                  {/* Reveal Marking Scheme Button */}
                  <div>
                    <button
                      onClick={() => setRevealedParts(prev => ({ ...prev, [partKey]: !prev[partKey] }))}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all flex items-center space-x-2 ${
                        isRevealed
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white text-black border-black hover:bg-[#f4f4f0]'
                      }`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>
                        {isRevealed 
                          ? 'Hide Marking Scheme' 
                          : 'Reveal Official Marking Scheme & Rubrics'}
                      </span>
                    </button>
                  </div>

                  {/* Revealed Marking Scheme & Interactive Scoring Check */}
                  {isRevealed && (
                    <div className="mt-4 pt-4 border-t-2 border-black space-y-4">
                      {/* Rubrics Checklist */}
                      <div className="bg-white border-2 border-black p-4 space-y-3">
                        <div className="flex items-center justify-between border-b border-black pb-2">
                          <div className="text-xs font-bold text-black uppercase tracking-wider flex items-center space-x-1.5 font-mono">
                            <Sparkles className="w-4 h-4 text-black" />
                            <span>Scoring Points Rubric (Tick points you achieved)</span>
                          </div>
                          <span className="text-xs font-mono font-bold bg-black text-white px-2 py-0.5">
                            Awarded: {checkedList.length} / {part.marks} Marks
                          </span>
                        </div>

                        <div className="space-y-2 pt-1">
                          {part.rubric.map((r, rIdx) => {
                            const isChecked = checkedList.includes(rIdx);
                            const hasMatchedKeywords = checkKeywordMatch(userText, r.keywords);

                            return (
                              <div
                                key={rIdx}
                                onClick={() => handleToggleRubric(partKey, rIdx, part.marks)}
                                className={`p-3 border cursor-pointer text-xs flex items-start space-x-3 transition-all ${
                                  isChecked
                                    ? 'bg-black text-white border-black font-semibold'
                                    : 'bg-[#fdfdfb] border-neutral-300 text-neutral-800 hover:border-black'
                                }`}
                              >
                                {isChecked ? (
                                  <CheckSquare className="w-4 h-4 text-yellow-300 shrink-0 mt-0.5" />
                                ) : (
                                  <Square className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                                )}
                                <div className="flex-1">
                                  <div className="font-sans leading-relaxed">{r.point}</div>
                                  <div className={`mt-1.5 flex flex-wrap items-center gap-2 text-[10px] font-mono ${isChecked ? 'text-neutral-300' : 'text-gray-500'}`}>
                                    <span>Keywords: {r.keywords.join(', ')}</span>
                                    {hasMatchedKeywords && (
                                      <span className="text-yellow-300 font-bold bg-neutral-800 px-1.5 py-0.5 border border-neutral-700">
                                        ✓ Keyword Detected in Draft
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <span className={`font-mono font-bold shrink-0 ${isChecked ? 'text-yellow-300' : 'text-red-700'}`}>+{r.marks}M</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Official Model Answer */}
                      <div className="bg-[#1a1a1a] text-white border border-black p-4 space-y-2 font-sans">
                        <div className="text-xs font-bold text-yellow-300 uppercase tracking-wider flex items-center space-x-1.5 font-mono">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Official Model Answer</span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-line bg-black p-3.5 border border-neutral-700">
                          {part.modelAnswer}
                        </p>
                        <div className="text-xs text-neutral-300 pt-1">
                          💡 <strong className="text-yellow-300 font-mono">Examiner Tip:</strong> {part.examinerTips}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Question Navigation */}
          <div className="p-4 bg-[#fdfdfb] border-t-2 border-black flex items-center justify-between">
            <button
              disabled={selectedQIndex === 0}
              onClick={() => setSelectedQIndex(prev => Math.max(0, prev - 1))}
              className="px-4 py-2 border border-black bg-white hover:bg-[#f4f4f0] text-black disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Question</span>
            </button>

            <button
              disabled={selectedQIndex === DSE_PAPER2_QUESTIONS.length - 1}
              onClick={() => setSelectedQIndex(prev => Math.min(DSE_PAPER2_QUESTIONS.length - 1, prev + 1))}
              className="px-4 py-2 bg-black hover:bg-neutral-800 text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
