import { notFound } from 'next/navigation';
import type { AttemptsInfoType, QuizType } from '@/types';
import { fetch } from '@/services/axios';
import Quiz from './components/Quiz';

type Props = {
  params: {
    quizId: string;
    childId: string;
  };
};

const QuizPage = async ({ params: { quizId, childId } }: Props) => {
  const quizReq = fetch<QuizType>(`/quizzes/${quizId}`);
  const questionReq = fetch<AttemptsInfoType>(`/users/me/children/${childId}/attempts/${quizId}/`);
  const [quizRes, questionRes] = await Promise.all([quizReq, questionReq]);

  if (quizRes.status === 'fail' || questionRes.status === 'fail') notFound();

  const quiz: QuizType = { ...quizRes.data, ...questionRes.data };

  return <main>{<Quiz quiz={quiz} />}</main>;
};

export default QuizPage;
