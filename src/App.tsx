/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ConceptMaster } from './components/ConceptMaster';
import { FormulaLab } from './components/FormulaLab';
import { RealCases } from './components/RealCases';
import { MCQPractice } from './components/MCQPractice';
import { Paper2Trainer } from './components/Paper2Trainer';
import { DiagnosticDashboard } from './components/DiagnosticDashboard';
import { UserAnswerRecord, UserPaper2Record } from './types';
import { DSE_MCQ_QUESTIONS } from './data/pastPaperData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('concepts');

  // Local storage state for MCQ records
  const [userRecords, setUserRecords] = useState<UserAnswerRecord[]>(() => {
    try {
      const saved = localStorage.getItem('hkdse_mcq_records');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Local storage state for Paper 2 records
  const [paper2Records, setPaper2Records] = useState<UserPaper2Record[]>(() => {
    try {
      const saved = localStorage.getItem('hkdse_paper2_records');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hkdse_mcq_records', JSON.stringify(userRecords));
    } catch (e) {
      console.error(e);
    }
  }, [userRecords]);

  useEffect(() => {
    try {
      localStorage.setItem('hkdse_paper2_records', JSON.stringify(paper2Records));
    } catch (e) {
      console.error(e);
    }
  }, [paper2Records]);

  const handleRecordAnswer = (record: UserAnswerRecord) => {
    setUserRecords(prev => {
      const filtered = prev.filter(r => r.questionId !== record.questionId);
      return [...filtered, record];
    });
  };

  const handleSavePaper2Record = (record: UserPaper2Record) => {
    setPaper2Records(prev => {
      const filtered = prev.filter(r => r.questionId !== record.questionId);
      return [...filtered, record];
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all your answer records and learning progress?')) {
      setUserRecords([]);
      setPaper2Records([]);
      localStorage.removeItem('hkdse_mcq_records');
      localStorage.removeItem('hkdse_paper2_records');
    }
  };

  const mcqProgress = {
    answered: userRecords.length,
    correct: userRecords.filter(r => r.isCorrect).length,
    total: DSE_MCQ_QUESTIONS.length
  };

  return (
    <div className="min-h-screen bg-[#fdfdfb] text-[#1a1a1a] font-sans antialiased selection:bg-amber-200 selection:text-black flex flex-col">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mcqProgress={mcqProgress}
        onResetProgress={handleResetProgress}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {activeTab === 'concepts' && (
          <ConceptMaster
            onNavigateToFormula={() => setActiveTab('formulas')}
          />
        )}

        {activeTab === 'formulas' && (
          <FormulaLab />
        )}

        {activeTab === 'cases' && (
          <RealCases />
        )}

        {activeTab === 'mcq' && (
          <MCQPractice
            userRecords={userRecords}
            onRecordAnswer={handleRecordAnswer}
          />
        )}

        {activeTab === 'paper2' && (
          <Paper2Trainer
            paper2Records={paper2Records}
            onSavePaper2Record={handleSavePaper2Record}
          />
        )}

        {activeTab === 'diagnostic' && (
          <DiagnosticDashboard
            userRecords={userRecords}
            paper2Records={paper2Records}
            onNavigateToMCQ={() => {
              setActiveTab('mcq');
            }}
            onNavigateToPaper2={() => setActiveTab('paper2')}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Editorial Broadsheet Footer */}
      <footer className="mt-auto border-t-2 border-black bg-[#f4f4f0] py-6 text-xs text-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-serif italic font-bold text-sm text-[#1a1a1a]">HKDSE Economics Mastery</span>
            <span className="text-gray-400">|</span>
            <span className="uppercase tracking-wider font-semibold text-[11px] text-gray-600">Topic F: National Income Accounting</span>
          </div>
          <div className="text-[11px] font-mono text-gray-500">
            HKEAA C&A Guide Compliant • Senior Secondary Curriculum 2012–2025
          </div>
        </div>
      </footer>
    </div>
  );
}
