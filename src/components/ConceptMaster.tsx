import React, { useState } from 'react';
import { CONCEPTS_DATA, ConceptSection } from '../data/conceptsData';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  RefreshCw,
  Eye,
  Layers,
  ArrowDownUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConceptMasterProps {
  onNavigateToFormula: () => void;
}

export const ConceptMaster: React.FC<ConceptMasterProps> = ({ onNavigateToFormula }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [activeCheckAnswers, setActiveCheckAnswers] = useState<{ [key: string]: number | null }>({});
  const [showCheckResult, setShowCheckResult] = useState<{ [key: string]: boolean }>({});
  const [circularFlowTab, setCircularFlowTab] = useState<'both' | 'real' | 'money'>('both');

  // Interactive RPU Decision Sandbox state
  const [rpuScenario, setRpuScenario] = useState<number>(0);
  const rpuCases = [
    {
      title: 'Foreign Domestic Helper',
      desc: 'Ms. Maria from the Philippines works as a domestic helper in Hong Kong on a 2-year contract.',
      inGdp: true,
      inGni: true,
      inNfia: false,
      reason: 'She resides in Hong Kong for more than 1 year. She is a Hong Kong Resident Producing Unit (RPU) and a Hong Kong resident. Her domestic services enter Hong Kong GDP and GNI directly.'
    },
    {
      title: 'Visiting Brazilian Football Coach',
      desc: 'Hired by a Hong Kong club for a 2-month summer camp, earned $8M salary, then returned to Brazil.',
      inGdp: true,
      inGni: false,
      inNfia: true,
      reason: 'His training services were produced within Hong Kong economic territory (enters HK GDP). Because he stayed for less than 1 year, he is a non-resident; his $8M salary is Factor Income Paid Abroad (FIPA) and deducted to calculate GNI.'
    },
    {
      title: "Hong Kong Resident's Overseas Rental Property",
      desc: 'Mr. Chan (a Hong Kong permanent resident) leases his apartment in Tokyo to a Japanese tenant for ¥3M/year.',
      inGdp: false,
      inGni: true,
      inNfia: true,
      reason: 'The housing service is produced in Tokyo (enters Japan GDP, NOT HK GDP). Since the owner is a Hong Kong resident, the rental income is Factor Income from Abroad (FIA) and added to compute Hong Kong GNI.'
    },
    {
      title: 'Second-hand Luxury Bag Salesperson',
      desc: 'Earns $20,000 monthly salary selling second-hand luxury handbags in Mong Kok.',
      inGdp: true,
      inGni: true,
      inNfia: false,
      reason: 'While the second-hand handbags themselves were produced in previous periods and excluded, the salesperson provides newly rendered retail intermediation services in the current period, which is fully included in HK GDP and GNI.'
    }
  ];

  const handleSelectOption = (conceptId: string, optionIndex: number, correctIndex: number) => {
    setActiveCheckAnswers((prev) => ({ ...prev, [conceptId]: optionIndex }));
    setShowCheckResult((prev) => ({ ...prev, [conceptId]: true }));
    if (optionIndex === correctIndex) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  const filteredConcepts = selectedTopicId === 'all' 
    ? CONCEPTS_DATA 
    : CONCEPTS_DATA.filter(c => c.id === selectedTopicId);

  return (
    <div className="space-y-8 pb-12">
      {/* Editorial Hero Broadsheet Banner */}
      <div className="bg-[#fdfdfb] border-2 border-black p-6 sm:p-8 shadow-sm relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b-2 border-black pb-4 mb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-red-700 text-white px-2 py-0.5">
                Section A: Concepts & Foundation
              </span>
              <span className="text-[11px] font-mono text-gray-500">Ref: C&A Guide Supp. 2024</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif italic tracking-tighter text-[#1a1a1a]">
              National Income Accounting
            </h1>
            <p className="text-xs uppercase tracking-widest mt-1 font-semibold text-gray-500">
              HKDSE Economics Senior Secondary Module 04
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <button
              onClick={onNavigateToFormula}
              className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-black bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Open Formula Lab →</span>
            </button>
          </div>
        </div>

        <p className="text-[#2d2d2d] text-sm sm:text-base leading-relaxed max-w-4xl text-justify font-normal">
          The total market value of all final goods and services produced within the geographical boundary of an economy in a specified period. Master the 3 approaches, factor cost vs market price, GNI residency rules, and living standard limitations.
        </p>
      </div>

      {/* Interactive Circular Flow Model Spotlight */}
      <div className="bg-white border-2 border-black p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-black">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif italic text-[#1a1a1a]">
              Circular Flow of Economic Activities
            </h2>
            <p className="text-xs text-gray-500 font-mono mt-0.5">
              Real Flow (Goods & Factor Services) vs Money Flow (Expenditures & Factor Incomes)
            </p>
          </div>
          <div className="flex items-center space-x-1 border border-black p-1 bg-[#f4f4f0]">
            <button
              onClick={() => setCircularFlowTab('both')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                circularFlowTab === 'both' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
              }`}
            >
              Complete Flow
            </button>
            <button
              onClick={() => setCircularFlowTab('real')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                circularFlowTab === 'real' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
              }`}
            >
              Real Flow
            </button>
            <button
              onClick={() => setCircularFlowTab('money')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                circularFlowTab === 'money' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
              }`}
            >
              Money Flow
            </button>
          </div>
        </div>

        {/* Circular Flow Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left: Firms Box */}
          <div className="border border-black bg-[#fdfdfb] p-5 text-center shadow-sm">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-red-700 block mb-1">
              PRODUCING SECTOR
            </span>
            <h3 className="font-serif italic font-bold text-xl text-[#1a1a1a]">
              FIRMS (Producers)
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Hire factor services, produce goods & services
            </p>
            <div className="mt-3 pt-3 border-t border-neutral-300 text-left text-xs space-y-1 text-gray-700 font-mono">
              <div>• <strong>Output Value:</strong> Revenue from final sales</div>
              <div>• <strong>Cost Paid:</strong> Wages, rent, interest, profit</div>
            </div>
          </div>

          {/* Center: Flows Diagram */}
          <div className="space-y-4 text-center">
            {/* Top Flow: Goods & Spending */}
            <div className={`p-3 border border-black transition-all ${
              circularFlowTab === 'money' 
                ? 'opacity-30 bg-[#f4f4f0]' 
                : 'bg-yellow-50'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider text-black mb-1">
                ← Goods & Services (Real Flow) ←
              </div>
              <div className="text-[11px] text-gray-600">
                Firms supply output to consumers
              </div>
              <div className="my-1.5 border-t border-dashed border-neutral-400"></div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-700 mb-1">
                → Consumption Expenditure (Money Flow) →
              </div>
              <div className="text-[11px] text-gray-600">
                Households spend money on goods (C)
              </div>
            </div>

            {/* Middle Identity Pill */}
            <div className="inline-block px-3 py-1 border border-black bg-black text-white font-mono text-xs font-bold tracking-tight">
              Total Production ≡ Total Expenditure ≡ Total Income
            </div>

            {/* Bottom Flow: Factors & Incomes */}
            <div className={`p-3 border border-black transition-all ${
              circularFlowTab === 'real' 
                ? 'opacity-30 bg-[#f4f4f0]' 
                : 'bg-yellow-50'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider text-red-700 mb-1">
                ← Factor Incomes / Costs (Money Flow) ←
              </div>
              <div className="text-[11px] text-gray-600 font-mono">
                Wages + Rent + Interest + Profits
              </div>
              <div className="my-1.5 border-t border-dashed border-neutral-400"></div>
              <div className="text-xs font-bold uppercase tracking-wider text-black mb-1">
                → Factor Services (Real Flow) →
              </div>
              <div className="text-[11px] text-gray-600">
                Labour, Land, Capital, Entrepreneurship
              </div>
            </div>
          </div>

          {/* Right: Households Box */}
          <div className="border border-black bg-[#fdfdfb] p-5 text-center shadow-sm">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-red-700 block mb-1">
              CONSUMING SECTOR
            </span>
            <h3 className="font-serif italic font-bold text-xl text-[#1a1a1a]">
              HOUSEHOLDS (Consumers)
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Supply factors of production, consume goods
            </p>
            <div className="mt-3 pt-3 border-t border-neutral-300 text-left text-xs space-y-1 text-gray-700 font-mono">
              <div>• <strong>Income Received:</strong> Wages, rent, interest, profits</div>
              <div>• <strong>Expenditure:</strong> Spending on consumer goods</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive RPU & Resident Decision Matrix */}
      <div className="bg-white border-2 border-black p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-black pb-2 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif italic text-[#1a1a1a]">
              Resident Producing Unit (RPU) Decision Case Desk
            </h2>
            <p className="text-xs text-gray-500 font-mono">
              Threshold: 1-Year Economic Territory Test
            </p>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-red-700 text-white px-2 py-0.5 self-start sm:self-auto">
            HKEAA Key Distinction
          </span>
        </div>

        {/* Case selector buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {rpuCases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setRpuScenario(idx)}
              className={`p-2.5 text-xs text-left border transition-all ${
                rpuScenario === idx
                  ? 'bg-black text-white border-black font-bold'
                  : 'bg-[#fdfdfb] border-neutral-300 text-neutral-800 hover:border-black hover:bg-[#f4f4f0]'
              }`}
            >
              <div className="font-serif italic truncate">{c.title}</div>
            </button>
          ))}
        </div>

        {/* Active Scenario Card */}
        {(() => {
          const current = rpuCases[rpuScenario];
          return (
            <div className="border border-black bg-[#fdfdfb] p-5">
              <div className="mb-4">
                <h4 className="text-lg font-serif italic font-bold text-[#1a1a1a] mb-1">
                  {current.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-800 bg-yellow-50 p-3 border-l-4 border-black">
                  {current.desc}
                </p>
              </div>

              {/* Status badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className={`p-3 border text-center ${
                  current.inGdp 
                    ? 'border-black bg-[#f4f4f0] text-black font-bold' 
                    : 'border-neutral-300 bg-white text-gray-500'
                }`}>
                  <div className="text-[10px] uppercase font-mono font-bold text-gray-500">Hong Kong GDP</div>
                  <div className="text-sm font-serif italic font-bold mt-1">
                    {current.inGdp ? '✓ INCLUDED' : '✗ EXCLUDED'}
                  </div>
                </div>
                <div className={`p-3 border text-center ${
                  current.inGni 
                    ? 'border-black bg-[#f4f4f0] text-black font-bold' 
                    : 'border-neutral-300 bg-white text-gray-500'
                }`}>
                  <div className="text-[10px] uppercase font-mono font-bold text-gray-500">Hong Kong GNI</div>
                  <div className="text-sm font-serif italic font-bold mt-1">
                    {current.inGni ? '✓ INCLUDED' : '✗ EXCLUDED'}
                  </div>
                </div>
                <div className={`p-3 border text-center ${
                  current.inNfia 
                    ? 'border-black bg-black text-white font-bold' 
                    : 'border-neutral-300 bg-white text-gray-500'
                }`}>
                  <div className="text-[10px] uppercase font-mono font-bold text-gray-400">NFIA Cross-Border Flow</div>
                  <div className="text-sm font-serif italic font-bold mt-1">
                    {current.inNfia ? '⚡ INVOLVED (Factor Flow)' : '— NONE (Domestic Only)'}
                  </div>
                </div>
              </div>

              {/* Detailed Examiner Explanation */}
              <div className="border-t-4 border-double border-black pt-3 mt-3 text-xs text-neutral-800">
                <strong className="text-red-700 uppercase tracking-wider font-bold block mb-1">
                  HKEAA Marking Rubric & Examiner Rationale:
                </strong>{' '}
                {current.reason}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Topic Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar border-b border-neutral-300">
        <button
          onClick={() => setSelectedTopicId('all')}
          className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border whitespace-nowrap transition-colors ${
            selectedTopicId === 'all'
              ? 'bg-black text-white border-black'
              : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
          }`}
        >
          All Sections
        </button>
        {CONCEPTS_DATA.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedTopicId(c.id)}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border whitespace-nowrap transition-colors ${
              selectedTopicId === c.id
                ? 'bg-black text-white border-black'
                : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Concept Sections List */}
      <div className="space-y-8">
        {filteredConcepts.map((concept) => {
          const userAns = activeCheckAnswers[concept.id];
          const hasChecked = showCheckResult[concept.id];

          return (
            <div
              key={concept.id}
              className="bg-white border-2 border-black p-6 sm:p-8 shadow-sm"
            >
              {/* Header */}
              <div className="border-b-2 border-black pb-4 mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-700 block mb-1">
                    {concept.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif italic tracking-tight text-[#1a1a1a]">
                    {concept.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono mt-1">
                    {concept.subtitle}
                  </p>
                </div>
              </div>

              {/* Content Body */}
              <div className="space-y-6">
                {concept.keyPoints.map((kp, idx) => (
                  <div key={idx} className="space-y-2 border-b border-neutral-200 pb-5 last:border-b-0">
                    <h4 className="text-base font-serif italic font-bold text-[#1a1a1a] flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-700"></span>
                      <span>{kp.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed pl-3 text-justify">
                      {kp.content}
                    </p>

                    {/* Bullets if present */}
                    {kp.bullets && (
                      <div className="pl-3 space-y-1.5 my-2">
                        {kp.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="text-xs text-neutral-800 bg-[#f9f9f6] p-2.5 border-l-2 border-black">
                            {b}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Formula highlight box */}
                    {kp.formula && (
                      <div className="pl-3 my-3">
                        <div className="bg-[#f4f4f0] border-2 border-black text-[#1a1a1a] font-serif text-lg italic px-4 py-3 shadow-inner flex items-center justify-between">
                          <span>{kp.formula}</span>
                        </div>
                      </div>
                    )}

                    {/* Highlight info */}
                    {kp.highlight && (
                      <div className="pl-3 my-2">
                        <div className="bg-yellow-100 border border-yellow-300 text-neutral-900 text-xs px-3 py-2">
                          <strong className="text-red-700 uppercase tracking-wider font-bold">Key Principle:</strong> {kp.highlight}
                        </div>
                      </div>
                    )}

                    {/* Caution warning */}
                    {kp.caution && (
                      <div className="pl-3 my-2">
                        <div className="bg-red-50 border border-red-300 text-red-900 text-xs px-3 py-2 flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <span>{kp.caution}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Quick Check Micro-Quiz Desk */}
                {concept.quickCheck && (
                  <div className="mt-6 pt-6 border-t-4 border-double border-black bg-[#1a1a1a] text-white p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-3 border-b border-neutral-700 pb-2">
                      <div className="flex items-center space-x-2 text-xs font-bold text-yellow-300 uppercase tracking-wider">
                        <HelpCircle className="w-4 h-4" />
                        <span>Practice Desk: Rapid Concept Check</span>
                      </div>
                      <span className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase">
                        HKEAA Item
                      </span>
                    </div>
                    
                    <p className="text-xs sm:text-sm font-normal text-neutral-200 mb-4 leading-relaxed font-sans">
                      {concept.quickCheck.question}
                    </p>

                    <div className="space-y-2">
                      {concept.quickCheck.options.map((opt, optIdx) => {
                        const isSelected = userAns === optIdx;
                        const isCorrect = optIdx === concept.quickCheck!.correctIndex;

                        let btnStyle = 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-500';
                        if (hasChecked) {
                          if (isCorrect) {
                            btnStyle = 'bg-emerald-950 border-emerald-400 text-emerald-200 font-bold';
                          } else if (isSelected && !isCorrect) {
                            btnStyle = 'bg-rose-950 border-rose-400 text-rose-200';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={hasChecked}
                            onClick={() => handleSelectOption(concept.id, optIdx, concept.quickCheck!.correctIndex)}
                            className={`w-full text-left p-3 border text-xs sm:text-sm flex items-start space-x-3 transition-all ${btnStyle}`}
                          >
                            <span className="font-mono font-bold shrink-0">{String.fromCharCode(65 + optIdx)}.</span>
                            <span className="flex-1">{opt}</span>
                            {hasChecked && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                            {hasChecked && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Reveal */}
                    {hasChecked && (
                      <div className="mt-4 p-3 bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 space-y-1">
                        <div className="font-bold text-yellow-300">
                          {userAns === concept.quickCheck.correctIndex 
                            ? '✓ Correct Answer!' 
                            : '✗ Incorrect.'}
                        </div>
                        <div className="leading-relaxed">{concept.quickCheck.explanation}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
