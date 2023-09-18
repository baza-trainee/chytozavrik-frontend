export type QuestionAnswerType = {
  id: number;
  text: string;
};

export type QuestionType = {
  id: number;
  text: string;
  answers: QuestionAnswerType[];
};

export type BookInfoType = {
  name: string;
  author: string;
};

export type QuizType = {
  id: number;
  questions: QuestionType[];
  book_info: BookInfoType;
};

export type AnswerType = {
  is_answer_correct: boolean;
  child_reward_url: string | null;
};
