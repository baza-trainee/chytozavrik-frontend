import Quiz from './components/Quiz';
import { getQuizByIdService } from '@/services/api';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    quizId: string;
  };
};

const QuizPage = async ({ params }: Props) => {
  const quiz = await getQuizByIdService(Number(params.quizId));

  if (quiz.status === 'fail') notFound();

  return (
    <main>
      <Quiz quiz={quiz.data} />
    </main>
  );
};

export default QuizPage;
