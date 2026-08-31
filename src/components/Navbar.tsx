import React from 'react';
import { 
  BookOpen, 
  Calculator, 
  FileText, 
  Award, 
  Building2, 
  HelpCircle, 
  RotateCcw
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang?: 'en' | 'zh';
  setLang?: (lang: 'en' | 'zh') => void;
  mcqProgress: { answered: number; correct: number; total: number };
  onResetProgress: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  mcqProgress,
  onResetProgress
}) => {
  const accuracy = mcqProgress.answered > 0 
    ? Math.round((mcqProgress.correct / mcqProgress.answered) * 100) 
    : 0;

  const navItems = [
    { id: 'concepts', label: 'Concept Master', icon: BookOpen },
    { id: 'formulas', label: 'Formula & Chain Lab', icon: Calculator },
    { id: 'cases', label: 'HK Real Cases', icon: Building2 },
    { id: 'mcq', label: 'Paper 1 MCQ Bank', icon: HelpCircle },
    { id: 'paper2', label: 'Paper 2 Structured', icon: FileText },
    { id: 'diagnostic', label: 'Performance & Report', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdfdfb]/95 backdrop-blur-md border-b-2 border-black text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 sm:h-18 border-b border-neutral-300 gap-3">
          {/* Brand Logo & HKDSE Curriculum Badge */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('concepts')}>
            <div className="w-10 h-10 border-2 border-black bg-black text-white flex items-center justify-center font-serif italic font-bold text-xl shadow-sm">
              NI
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif italic font-black text-xl sm:text-2xl tracking-tighter text-[#1a1a1a]">
                  National Income Accounting
                </span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-red-700 text-white">
                  HKDSE Module 04
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">
                Topic F: Measurement of Economic Performance
              </p>
            </div>
          </div>

          {/* Controls & Exam Score Progress */}
          <div className="flex items-center space-x-2 sm:space-x-3 self-end sm:self-auto">
            {/* Score Desk Pill */}
            <div className="flex items-center space-x-2 px-3 py-1 bg-[#f4f4f0] border border-black text-xs font-mono">
              <span className="uppercase text-[10px] text-gray-600 font-sans font-bold">Accuracy:</span>
              <strong className="text-black font-bold">
                {mcqProgress.correct}/{mcqProgress.answered}
              </strong>
              {mcqProgress.answered > 0 && (
                <span className="bg-yellow-200 text-neutral-900 px-1 font-bold text-[11px]">
                  {accuracy}%
                </span>
              )}
            </div>

            {/* Edition indicator badge */}
            <div className="hidden sm:inline-flex items-center px-2.5 py-1 border border-neutral-400 bg-white text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700">
              English Edition
            </div>

            {/* Reset Progress */}
            <button
              onClick={onResetProgress}
              className="p-1.5 border border-neutral-400 bg-white hover:border-black hover:bg-neutral-100 text-gray-600 hover:text-black transition-colors"
              title="Reset Learning Progress"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex space-x-2 overflow-x-auto py-2.5 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-black text-white border-black shadow-sm font-bold'
                    : 'bg-white text-[#2d2d2d] border-neutral-300 hover:border-black hover:bg-[#f4f4f0]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-neutral-600'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
