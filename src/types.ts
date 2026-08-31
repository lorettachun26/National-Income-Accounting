export type Subtopic = 
  | 'gdp-definition'
  | 'rpu-resident'
  | 'circular-flow'
  | 'expenditure-approach'
  | 'production-approach'
  | 'income-approach'
  | 'factor-cost-market-price'
  | 'gni-nfia'
  | 'nominal-real-deflator'
  | 'per-capita-growth'
  | 'gdp-limitations';

export type QuestionType = 'mcq' | 'paper2';

export interface MCQQuestion {
  id: string;
  year: number;
  questionNumber: string;
  subtopic: Subtopic;
  difficulty: 'Basic' | 'Intermediate' | 'Challenging';
  question: string;
  questionZh?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
  };
  diagramType?: 'production-chain' | 'growth-chart' | 'generic';
  diagramData?: any;
  options: {
    label: 'A' | 'B' | 'C' | 'D';
    text: string;
    textZh?: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  explanationZh: string;
  distractorNotes?: {
    [key in 'A' | 'B' | 'C' | 'D']?: string;
  };
  hkeaaTrapWarning?: string;
}

export interface Paper2RubricItem {
  point: string;
  pointZh: string;
  marks: number;
  keywords: string[];
}

export interface Paper2Question {
  id: string;
  year: number;
  questionNumber: string;
  subtopic: Subtopic;
  totalMarks: number;
  context?: string;
  contextZh?: string;
  sourceTable?: {
    headers: string[];
    rows: (string | number)[][];
  };
  parts: {
    partLabel: string;
    question: string;
    questionZh: string;
    marks: number;
    rubric: Paper2RubricItem[];
    modelAnswer: string;
    modelAnswerZh: string;
    examinerTips: string;
  }[];
}

export interface RealCaseStudy {
  id: string;
  title: string;
  titleZh: string;
  tag: string;
  tagZh: string;
  summary: string;
  summaryZh: string;
  economicConcept: string;
  hkdseRelevance: string;
  caseDetails: {
    heading: string;
    headingZh: string;
    content: string;
    contentZh: string;
  }[];
  interactiveCheck: {
    question: string;
    questionZh: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface UserAnswerRecord {
  questionId: string;
  selectedOption?: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  timestamp: number;
  timeSpentSeconds: number;
}

export interface UserPaper2Record {
  questionId: string;
  partIndex: number;
  userNotes: string;
  checkedRubrics: number[]; // indices of checked rubric points
  awardedMarks: number;
  timestamp: number;
}
