import React from 'react';
import { UserAnswerRecord, UserPaper2Record, Subtopic } from '../types';
import { DSE_MCQ_QUESTIONS, DSE_PAPER2_QUESTIONS } from '../data/pastPaperData';
import { 
  Award, 
  BarChart2, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Target
} from 'lucide-react';

interface DiagnosticDashboardProps {
  lang?: 'en' | 'zh';
  userRecords: UserAnswerRecord[];
  paper2Records: UserPaper2Record[];
  onNavigateToMCQ: (subtopic?: string) => void;
  onNavigateToPaper2: () => void;
  onResetProgress: () => void;
}

export const DiagnosticDashboard: React.FC<DiagnosticDashboardProps> = ({
  userRecords,
  paper2Records,
  onNavigateToMCQ,
  onNavigateToPaper2,
  onResetProgress
}) => {
  const totalMcq = DSE_MCQ_QUESTIONS.length;
  const answeredMcq = userRecords.length;
  const correctMcq = userRecords.filter(r => r.isCorrect).length;
  const overallAccuracy = answeredMcq > 0 ? Math.round((correctMcq / answeredMcq) * 100) : 0;

  // Subtopic breakdown calculation
  const subtopics: { id: Subtopic; name: string }[] = [
    { id: 'production-approach', name: 'Production / Value-Added' },
    { id: 'expenditure-approach', name: 'Expenditure C+I+G+(X-M)' },
    { id: 'factor-cost-market-price', name: 'Factor Cost ↔ Market Price' },
    { id: 'gni-nfia', name: 'GNI & NFIA Flow' },
    { id: 'nominal-real-deflator', name: 'Nominal/Real & Deflator' },
    { id: 'gdp-limitations', name: 'GDP Limitations & Welfare' },
    { id: 'rpu-resident', name: 'RPU & Exclusions' },
  ];

  const subtopicStats = subtopics.map(sub => {
    const qList = DSE_MCQ_QUESTIONS.filter(q => q.subtopic === sub.id);
    const subQIds = qList.map(q => q.id);
    const subRecords = userRecords.filter(r => subQIds.includes(r.questionId));
    const subAnswered = subRecords.length;
    const subCorrect = subRecords.filter(r => r.isCorrect).length;
    const subAcc = subAnswered > 0 ? Math.round((subCorrect / subAnswered) * 100) : null;
    return {
      ...sub,
      totalCount: qList.length,
      answeredCount: subAnswered,
      correctCount: subCorrect,
      accuracy: subAcc
    };
  });

  // Identify top weaknesses
  const weaknesses = subtopicStats.filter(s => s.accuracy !== null && s.accuracy < 70);
  const strengths = subtopicStats.filter(s => s.accuracy !== null && s.accuracy >= 70);

  // Predicted Grade
  let predictedGrade = 'Unclassified / Not Enough Data';
  let gradeBadgeColor = 'bg-slate-800 text-slate-400 border-slate-700';
  if (answeredMcq >= 5) {
    if (overallAccuracy >= 85) {
      predictedGrade = 'Level 5** (Top Distinction)';
      gradeBadgeColor = 'bg-amber-950 text-amber-300 border-amber-500 ring-2 ring-amber-500';
    } else if (overallAccuracy >= 78) {
      predictedGrade = 'Level 5* (Distinction)';
      gradeBadgeColor = 'bg-amber-900/60 text-amber-300 border-amber-600';
    } else if (overallAccuracy >= 70) {
      predictedGrade = 'Level 5 (Credit)';
      gradeBadgeColor = 'bg-indigo-900 text-indigo-300 border-indigo-600';
    } else if (overallAccuracy >= 60) {
      predictedGrade = 'Level 4 (Good)';
      gradeBadgeColor = 'bg-emerald-900 text-emerald-300 border-emerald-600';
    } else if (overallAccuracy >= 50) {
      predictedGrade = 'Level 3 (Pass)';
      gradeBadgeColor = 'bg-cyan-900 text-cyan-300 border-cyan-600';
    } else {
      predictedGrade = 'Level 2 / Level 1';
      gradeBadgeColor = 'bg-rose-900 text-rose-300 border-rose-600';
    }
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Editorial Top Banner */}
      <div className="bg-white border-2 border-black p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-black pb-4 mb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-red-700 text-white px-2 py-0.5">
                Section F: Diagnostic Review
              </span>
              <span className="text-[11px] font-mono text-gray-500">C&A Guide Appendix 4 Methodology</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif italic tracking-tight text-[#1a1a1a]">
              Diagnostic Performance & Learning Weakness Analyzer
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-1">
              Inspired by Appendix 4 of HKDSE C&A Guide: Targeted weakness detection & mastery tracking.
            </p>
          </div>

          <button
            onClick={onResetProgress}
            className="self-start sm:self-auto px-3.5 py-1.5 border border-black bg-white hover:bg-red-50 hover:text-red-700 text-xs font-mono font-bold uppercase tracking-wider text-black transition-colors flex items-center space-x-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>

        {/* High-Level Score Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-[#fdfdfb] border border-black p-4">
            <div className="text-[11px] font-mono font-bold text-gray-600 uppercase">MCQ Completed</div>
            <div className="text-3xl font-serif italic font-bold text-black mt-1">
              {answeredMcq} <span className="text-sm font-sans text-gray-500 font-normal">/ {totalMcq}</span>
            </div>
            <div className="text-[11px] font-mono text-gray-700 mt-1">
              {Math.round((answeredMcq / totalMcq) * 100)}% Syllabus Coverage
            </div>
          </div>

          <div className="bg-[#fdfdfb] border border-black p-4">
            <div className="text-[11px] font-mono font-bold text-gray-600 uppercase">Overall MCQ Accuracy</div>
            <div className="text-3xl font-serif italic font-bold text-red-700 mt-1">
              {overallAccuracy}%
            </div>
            <div className="text-[11px] font-mono text-gray-700 mt-1">
              {correctMcq} correct of {answeredMcq}
            </div>
          </div>

          <div className="bg-[#fdfdfb] border border-black p-4">
            <div className="text-[11px] font-mono font-bold text-gray-600 uppercase">Paper 2 Structured Tasks</div>
            <div className="text-3xl font-serif italic font-bold text-black mt-1">
              {paper2Records.length} <span className="text-sm font-sans text-gray-500 font-normal">/ {DSE_PAPER2_QUESTIONS.length}</span>
            </div>
            <div className="text-[11px] font-mono text-gray-700 mt-1">
              Rubrics audited & self-scored
            </div>
          </div>

          <div className="bg-black text-white border-2 border-black p-4">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-yellow-300">Predicted HKDSE Grade</div>
            <div className="text-xl font-serif italic font-bold mt-1 truncate">
              {predictedGrade}
            </div>
            <div className="text-[10px] font-mono text-neutral-300 mt-1">
              Standard-referenced cut score
            </div>
          </div>
        </div>
      </div>

      {/* Subtopic Mastery Breakdown & Appendix 4 Diagnostic Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Subtopic Breakdown Bars */}
        <div className="lg:col-span-2 bg-white border-2 border-black p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b-2 border-black">
            <div className="flex items-center space-x-2">
              <BarChart2 className="w-5 h-5 text-black" />
              <h3 className="text-base sm:text-lg font-serif italic font-bold text-black">
                Topic-by-Topic Mastery Breakdown
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-600 font-bold">Standard: ≥ 80%</span>
          </div>

          <div className="space-y-4 pt-1">
            {subtopicStats.map((sub) => {
              const hasData = sub.accuracy !== null;
              const acc = sub.accuracy || 0;
              let barColor = 'bg-black';
              if (acc < 50) barColor = 'bg-red-700';
              else if (acc < 75) barColor = 'bg-neutral-600';

              return (
                <div key={sub.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-black font-sans">
                      {sub.name}
                    </span>
                    <span className="font-mono text-black font-bold">
                      {hasData ? (
                        <span className={acc >= 70 ? 'text-black' : 'text-red-700'}>
                          {acc}% ({sub.correctCount}/{sub.answeredCount})
                        </span>
                      ) : (
                        <span className="text-gray-400">Not attempted</span>
                      )}
                    </span>
                  </div>

                  {/* Bar */}
                  <div className="w-full h-2.5 bg-neutral-200 border border-black overflow-hidden">
                    <div
                      className={`h-full ${barColor} transition-all duration-500`}
                      style={{ width: `${hasData ? acc : 0}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Weakness Diagnosis & Action Plan */}
        <div className="bg-[#fdfdfb] border-2 border-black p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-black font-serif italic font-bold text-base pb-3 border-b-2 border-black">
              <AlertCircle className="w-5 h-5 text-red-700" />
              <span>Diagnostic Action Plan</span>
            </div>

            {answeredMcq === 0 ? (
              <div className="py-8 text-center text-xs text-gray-500 font-mono">
                <BookOpen className="w-8 h-8 mx-auto text-neutral-400 mb-2" />
                <p>Attempt questions in the MCQ Bank to generate your personalized diagnostic report.</p>
              </div>
            ) : weaknesses.length > 0 ? (
              <div className="space-y-3 mt-3">
                <div className="text-xs text-red-700 font-bold font-mono uppercase">
                  ⚠️ Identified Areas for Revision:
                </div>
                {weaknesses.map(w => (
                  <div key={w.id} className="p-3 bg-red-50 border border-red-700 text-xs space-y-1">
                    <div className="font-bold text-black font-sans">{w.name}</div>
                    <div className="text-red-800 text-[11px] font-mono">Accuracy: {w.accuracy}%</div>
                    <button
                      onClick={() => onNavigateToMCQ(w.id)}
                      className="mt-1 text-[11px] font-bold text-black hover:underline flex items-center space-x-1 uppercase tracking-wider"
                    >
                      <span>Drill these questions now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center space-y-2 mt-2">
                <ShieldCheck className="w-10 h-10 text-black mx-auto" />
                <h4 className="text-sm font-serif italic font-bold text-black">
                  Excellent Mastery!
                </h4>
                <p className="text-xs text-neutral-700">
                  You have passed all attempted subtopics with high accuracy.
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t-2 border-black space-y-2">
            <button
              onClick={() => onNavigateToMCQ()}
              className="w-full py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center space-x-2"
            >
              <span>Go to Paper 1 MCQ Practice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateToPaper2}
              className="w-full py-2.5 bg-white border border-black hover:bg-[#f4f4f0] text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center space-x-2"
            >
              <span>Practice Paper 2 Structured</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Appendix 4 Spreadsheet-Style Question Item Analysis Table */}
      <div className="bg-white border-2 border-black p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-3">
          <div>
            <h3 className="text-lg font-serif italic font-bold text-black flex items-center space-x-2">
              <Target className="w-5 h-5 text-black" />
              <span>HKDSE Past Paper Item Analysis & Question Matrix</span>
            </h3>
            <p className="text-xs text-gray-500 font-mono mt-1">
              Track every past paper question, your answers, and difficulty ratings.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto border border-black">
          <table className="min-w-full text-xs text-left">
            <thead className="bg-[#f4f4f0] text-black font-bold uppercase border-b border-black">
              <tr>
                <th className="px-4 py-3 border-r last:border-r-0 border-black">Question Item</th>
                <th className="px-4 py-3 border-r last:border-r-0 border-black">Subtopic</th>
                <th className="px-4 py-3 border-r last:border-r-0 border-black">Difficulty</th>
                <th className="px-4 py-3 border-r last:border-r-0 border-black">Correct Key</th>
                <th className="px-4 py-3 border-r last:border-r-0 border-black">Your Status</th>
                <th className="px-4 py-3 border-r last:border-r-0 border-black text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black bg-white font-mono">
              {DSE_MCQ_QUESTIONS.map((q) => {
                const rec = userRecords.find(r => r.questionId === q.id);
                return (
                  <tr key={q.id} className="hover:bg-[#fdfdfb] transition-colors">
                    <td className="px-4 py-2.5 font-bold text-black border-r last:border-r-0 border-black">
                      {q.year} HKDSE {q.questionNumber}
                    </td>
                    <td className="px-4 py-2.5 text-neutral-700 font-sans border-r last:border-r-0 border-black">
                      {q.subtopic}
                    </td>
                    <td className="px-4 py-2.5 border-r last:border-r-0 border-black">
                      <span className={`px-2 py-0.5 border text-[10px] font-bold ${
                        q.difficulty === 'Challenging' ? 'bg-red-700 text-white border-red-700' :
                        q.difficulty === 'Intermediate' ? 'bg-neutral-800 text-yellow-300 border-neutral-800' :
                        'bg-neutral-100 text-black border-neutral-300'
                      }`}>
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-black font-bold border-r last:border-r-0 border-black">
                      {q.correctAnswer}
                    </td>
                    <td className="px-4 py-2.5 font-sans border-r last:border-r-0 border-black">
                      {rec ? (
                        rec.isCorrect ? (
                          <span className="inline-flex items-center space-x-1 text-black font-bold text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                            <span>Correct (Option {rec.selectedOption})</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center space-x-1 text-red-700 font-bold text-xs">
                            <XCircle className="w-3.5 h-3.5 text-red-700" />
                            <span>Wrong (Chose {rec.selectedOption})</span>
                          </span>
                        )
                      ) : (
                        <span className="text-gray-400 text-xs font-mono">Unattempted</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-right">
                      <button
                        onClick={() => onNavigateToMCQ(q.subtopic)}
                        className="px-2.5 py-1 bg-black text-white hover:bg-neutral-800 text-[11px] font-sans font-bold uppercase tracking-wider transition-colors"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
