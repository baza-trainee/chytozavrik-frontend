export type QuestionAnswerType = {
  id: number;
  text: string;
};

export type QuestionType = {
  id: number;
  text: string;
  answers: QuestionAnswerType[];
};

export type QuizType = {
  id: number;
  questions: QuestionType[];
};

export type AnswerType = {
  is_answer_correct: boolean;
  child_reward_id: number | null;
};
