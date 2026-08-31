import React, { useState, useEffect } from 'react';
import { DSE_MCQ_QUESTIONS } from '../data/pastPaperData';
import { MCQQuestion, UserAnswerRecord, Subtopic } from '../types';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  Filter, 
  Bookmark, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Trophy,
  BarChart2,
  Flag
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MCQPracticeProps {
  lang?: 'en' | 'zh';
  userRecords: UserAnswerRecord[];
  onRecordAnswer: (record: UserAnswerRecord) => void;
}

export const MCQPractice: React.FC<MCQPracticeProps> = ({
  userRecords,
  onRecordAnswer
}) => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('all');
  const [onlyMistakes, setOnlyMistakes] = useState<boolean>(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  
  // Mode: 'practice' (instant feedback) or 'exam' (timed simulation)
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // In practice mode: local reveal state
  const [revealedQuestions, setRevealedQuestions] = useState<{ [qId: string]: boolean }>({});
  
  // In exam mode: answers map & timer
  const [examAnswers, setExamAnswers] = useState<{ [qId: string]: 'A' | 'B' | 'C' | 'D' }>({});
  const [examFinished, setExamFinished] = useState<boolean>(false);
  const [examSecondsLeft, setExamSecondsLeft] = useState<number>(1800); // 30 mins
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Filter questions
  const filteredQuestions = DSE_MCQ_QUESTIONS.filter((q) => {
    if (selectedYear !== 'all' && q.year.toString() !== selectedYear) return false;
    if (selectedSubtopic !== 'all' && q.subtopic !== selectedSubtopic) return false;
    if (onlyMistakes) {
      const rec = userRecords.find(r => r.questionId === q.id);
      if (!rec || rec.isCorrect) return false;
    }
    return true;
  });

  const currentQ: MCQQuestion | undefined = filteredQuestions[currentIndex];

  // Bookmark toggle
  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Timer effect for exam mode
  useEffect(() => {
    let interval: any = null;
    if (mode === 'exam' && isTimerRunning && examSecondsLeft > 0 && !examFinished) {
      interval = setInterval(() => {
        setExamSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (examSecondsLeft === 0 && !examFinished && mode === 'exam') {
      handleFinishExam();
    }
    return () => clearInterval(interval);
  }, [mode, isTimerRunning, examSecondsLeft, examFinished]);

  const handleStartExam = () => {
    setMode('exam');
    setExamAnswers({});
    setExamFinished(false);
    setExamSecondsLeft(Math.max(filteredQuestions.length * 90, 300)); // 1.5 mins per question
    setIsTimerRunning(true);
    setCurrentIndex(0);
  };

  const handleFinishExam = () => {
    setIsTimerRunning(false);
    setExamFinished(true);
    // Record all answers
    filteredQuestions.forEach(q => {
      const ans = examAnswers[q.id];
      if (ans) {
        onRecordAnswer({
          questionId: q.id,
          selectedOption: ans,
          isCorrect: ans === q.correctAnswer,
          timestamp: Date.now(),
          timeSpentSeconds: 60
        });
      }
    });
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.7 }
    });
  };

  const handleSelectOptionInPractice = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ) return;
    const isCorrect = option === currentQ.correctAnswer;
    onRecordAnswer({
      questionId: currentQ.id,
      selectedOption: option,
      isCorrect,
      timestamp: Date.now(),
      timeSpentSeconds: 30
    });
    setRevealedQuestions(prev => ({ ...prev, [currentQ.id]: true }));

    if (isCorrect) {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 }
      });
    }
  };

  // Helper for exam score & Level prediction
  const getExamStats = () => {
    let correct = 0;
    filteredQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correctAnswer) correct++;
    });
    const total = filteredQuestions.length;
    const pct = total > 0 ? (correct / total) * 100 : 0;
    
    let level = 'Level 1 / Unclassified';
    if (pct >= 85) level = 'Level 5** (Distinction)';
    else if (pct >= 78) level = 'Level 5*';
    else if (pct >= 70) level = 'Level 5 (Credit)';
    else if (pct >= 60) level = 'Level 4';
    else if (pct >= 50) level = 'Level 3';
    else if (pct >= 40) level = 'Level 2';

    return { correct, total, pct: Math.round(pct), level };
  };

  const uniqueYears = Array.from(new Set(DSE_MCQ_QUESTIONS.map(q => q.year))).sort();

  return (
    <div className="space-y-6 pb-12">
      {/* Header & Controls */}
      <div className="bg-white border-2 border-black p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b-2 border-black pb-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-red-700 text-white px-2 py-0.5">
                Section D: Paper 1 MCQ Examination
              </span>
              <span className="text-[11px] font-mono text-gray-500">2012–2025 Real Past Papers</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif italic tracking-tight text-[#1a1a1a]">
              National Income MCQ Exam Center
            </h1>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center space-x-1 bg-neutral-100 p-1 border border-black">
            <button
              onClick={() => { setMode('practice'); setExamFinished(false); }}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                mode === 'practice'
                  ? 'bg-black text-white'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Practice Mode
            </button>
            <button
              onClick={handleStartExam}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                mode === 'exam'
                  ? 'bg-red-700 text-white'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Timed Exam Mode
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-2.5">
          {/* Year Filter */}
          <div>
            <label className="text-[11px] font-mono font-bold text-gray-700 block mb-1">
              Examination Year:
            </label>
            <select
              value={selectedYear}
              disabled={mode === 'exam' && isTimerRunning}
              onChange={(e) => { setSelectedYear(e.target.value); setCurrentIndex(0); }}
              className="w-full bg-white border border-black text-xs text-black p-2 focus:outline-none"
            >
              <option value="all">All Years (2012 - 2025)</option>
              {uniqueYears.map(y => (
                <option key={y} value={y.toString()}>{y} HKDSE</option>
              ))}
            </select>
          </div>

          {/* Subtopic Filter */}
          <div>
            <label className="text-[11px] font-mono font-bold text-gray-700 block mb-1">
              Subtopic Category:
            </label>
            <select
              value={selectedSubtopic}
              disabled={mode === 'exam' && isTimerRunning}
              onChange={(e) => { setSelectedSubtopic(e.target.value); setCurrentIndex(0); }}
              className="w-full bg-white border border-black text-xs text-black p-2 focus:outline-none"
            >
              <option value="all">All Subtopics</option>
              <option value="production-approach">Production / Value Added</option>
              <option value="expenditure-approach">Expenditure C+I+G+(X-M)</option>
              <option value="factor-cost-market-price">Factor Cost vs Market Price</option>
              <option value="gni-nfia">GNI & NFIA</option>
              <option value="nominal-real-deflator">Nominal/Real & Deflator</option>
              <option value="per-capita-growth">Per-Capita & Growth</option>
              <option value="gdp-limitations">GDP Limitations & Welfare</option>
              <option value="rpu-resident">RPU & Exclusions</option>
            </select>
          </div>

          {/* Mistakes Filter Toggle */}
          <div className="flex items-end">
            <button
              onClick={() => { setOnlyMistakes(!onlyMistakes); setCurrentIndex(0); }}
              className={`w-full p-2 text-xs font-bold uppercase tracking-wider border transition-colors flex items-center justify-center space-x-1.5 ${
                onlyMistakes 
                  ? 'bg-red-700 border-red-700 text-white' 
                  : 'bg-white border-black text-black hover:bg-[#f4f4f0]'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>My Mistake Notebook</span>
            </button>
          </div>

          {/* Quick Counter */}
          <div className="flex items-end justify-between sm:justify-end text-xs text-gray-600 p-2 font-mono">
            <span>Questions Found: <strong className="text-black font-bold">{filteredQuestions.length}</strong></span>
          </div>
        </div>
      </div>

      {/* EXAM MODE: TIMER & PALETTE */}
      {mode === 'exam' && !examFinished && (
        <div className="bg-[#fdfdfb] border-2 border-black p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-red-700 animate-pulse" />
            <div>
              <span className="text-[10px] text-gray-600 uppercase font-mono font-bold">Time Remaining</span>
              <div className="text-xl font-mono font-black text-red-700">
                {Math.floor(examSecondsLeft / 60)}:{(examSecondsLeft % 60).toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Question Palette Buttons */}
          <div className="flex items-center space-x-1 overflow-x-auto max-w-md py-1">
            {filteredQuestions.map((q, idx) => {
              const isAnswered = examAnswers[q.id] !== undefined;
              const isCurr = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-7 h-7 text-xs font-bold font-mono transition-all border ${
                    isCurr
                      ? 'bg-red-700 text-white border-red-700'
                      : isAnswered
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-neutral-300 hover:border-black'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleFinishExam}
            className="px-4 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
          >
            Submit & Grade Exam
          </button>
        </div>
      )}

      {/* EXAM MODE: FINISHED SCORECARD */}
      {mode === 'exam' && examFinished && (() => {
        const stats = getExamStats();
        return (
          <div className="bg-white border-4 border-double border-black p-6 sm:p-8 shadow-sm text-center space-y-4">
            <Trophy className="w-12 h-12 text-black mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-black">
              HKDSE Examination Report
            </h2>
            <div className="text-5xl font-serif italic font-bold text-red-700 font-mono">
              {stats.correct} / {stats.total}
              <span className="text-xl text-gray-500 ml-2 font-sans">({stats.pct}%)</span>
            </div>
            <div className="inline-block px-4 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-widest font-mono">
              Predicted HKDSE Grade: {stats.level}
            </div>
            <p className="text-xs text-gray-700 max-w-md mx-auto font-sans">
              Review your question breakdown below with full HKEAA examiner rationale and distractor traps.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setExamFinished(false)}
                className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider"
              >
                Review Questions with Solutions
              </button>
            </div>
          </div>
        );
      })()}

      {/* QUESTION CARD VIEW */}
      {currentQ ? (
        <div className="bg-white border-2 border-black overflow-hidden shadow-sm">
          {/* Question Top Info Bar */}
          <div className="p-4 sm:p-5 border-b-2 border-black bg-[#fdfdfb] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-black text-white font-mono font-bold text-xs">
                {currentQ.year} HKDSE {currentQ.questionNumber}
              </span>
              <span className="px-2 py-0.5 bg-neutral-100 text-black text-xs font-bold border border-black">
                {currentQ.difficulty}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => toggleBookmark(currentQ.id)}
                className={`p-1.5 border transition-colors ${
                  bookmarkedIds.includes(currentQ.id)
                    ? 'bg-black border-black text-yellow-300'
                    : 'bg-white border-neutral-300 text-gray-500 hover:border-black'
                }`}
                title="Bookmark for review"
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-700 font-mono font-bold">
                {currentIndex + 1} / {filteredQuestions.length}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <div className="p-5 sm:p-6 space-y-4">
            <div className="text-base sm:text-lg font-serif font-medium text-[#1a1a1a] leading-relaxed whitespace-pre-line">
              {currentQ.question}
            </div>

            {/* Render Table Data if present */}
            {currentQ.tableData && (
              <div className="overflow-x-auto my-3 border border-black">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-[#f4f4f0] text-black uppercase font-bold border-b border-black">
                    <tr>
                      {currentQ.tableData.headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-2.5 border-r last:border-r-0 border-black">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black bg-white font-mono">
                    {currentQ.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#fdfdfb]">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-2 text-black border-r last:border-r-0 border-black">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Options List */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt) => {
                const isRevealed = mode === 'practice' 
                  ? !!revealedQuestions[currentQ.id] 
                  : examFinished;
                
                const userChoice = mode === 'practice'
                  ? userRecords.find(r => r.questionId === currentQ.id)?.selectedOption
                  : examAnswers[currentQ.id];

                const isSelected = userChoice === opt.label;
                const isCorrect = opt.label === currentQ.correctAnswer;

                let btnClass = 'bg-white border-neutral-300 text-neutral-800 hover:border-black hover:bg-[#fdfdfb]';
                if (isRevealed) {
                  if (isCorrect) {
                    btnClass = 'bg-black text-white border-black font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnClass = 'bg-red-50 border-red-700 text-red-900';
                  }
                } else if (isSelected) {
                  btnClass = 'bg-neutral-800 border-black text-white font-bold';
                }

                return (
                  <button
                    key={opt.label}
                    disabled={isRevealed && mode === 'practice'}
                    onClick={() => {
                      if (mode === 'practice') {
                        handleSelectOptionInPractice(opt.label);
                      } else {
                        setExamAnswers(prev => ({ ...prev, [currentQ.id]: opt.label }));
                      }
                    }}
                    className={`w-full text-left p-3.5 border text-xs sm:text-sm flex items-center justify-between transition-all ${btnClass}`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className={`w-6 h-6 border flex items-center justify-center font-bold font-mono text-xs shrink-0 ${
                        isRevealed && isCorrect ? 'bg-white text-black border-white' : 'bg-[#f4f4f0] text-black border-black'
                      }`}>
                        {opt.label}
                      </span>
                      <span className="mt-0.5">{opt.text}</span>
                    </div>

                    {isRevealed && isCorrect && <CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0" />}
                    {isRevealed && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-700 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Detailed Explanation & Distractor Analysis */}
            {(mode === 'practice' ? revealedQuestions[currentQ.id] : examFinished) && (
              <div className="mt-6 pt-5 border-t-2 border-black space-y-4">
                {/* Correct solution box */}
                <div className="bg-[#1a1a1a] text-white border border-black p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-yellow-300 font-bold text-xs uppercase tracking-wider font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Model Solution & Step-by-Step Rationale</span>
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-line font-sans">
                    {currentQ.explanation}
                  </div>
                </div>

                {/* HKEAA Trap Alert if available */}
                {currentQ.hkeaaTrapWarning && (
                  <div className="bg-yellow-50 border-2 border-black p-3.5 text-xs text-black flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block mb-0.5 text-red-700 font-serif italic">HKEAA Examiner Trap Note:</strong>
                      <span className="leading-relaxed">{currentQ.hkeaaTrapWarning}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Bottom Footer */}
          <div className="p-4 bg-[#fdfdfb] border-t-2 border-black flex items-center justify-between">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              className="px-4 py-2 border border-black bg-white hover:bg-[#f4f4f0] text-black disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              disabled={currentIndex === filteredQuestions.length - 1}
              onClick={() => setCurrentIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
              className="px-4 py-2 bg-black hover:bg-neutral-800 text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border-2 border-black p-12 text-center text-gray-600">
          <p className="text-base font-serif italic font-bold">No questions match your filter criteria.</p>
          <button
            onClick={() => { setSelectedYear('all'); setSelectedSubtopic('all'); setOnlyMistakes(false); }}
            className="mt-3 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
