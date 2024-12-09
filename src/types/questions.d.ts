export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Answer = {
  qId: number;
  answer: string;
};
