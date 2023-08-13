export type QuestionType = {
  id: number;
  question: string;
  answers: string[];
};

export type QuizType = {
  id: number;
  bookName: string;
  bookAuthor: string;
  questions: QuestionType[];
  prizeUrl: string;
};
