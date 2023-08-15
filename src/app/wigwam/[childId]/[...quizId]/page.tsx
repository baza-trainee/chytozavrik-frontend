import type { QuizType } from '@/types';
import Quiz from './components/Quiz';

type Props = {
  params: {
    quizId: string;
  };
};

const getQuiz = async (quizId: number): Promise<{ quiz: QuizType; currentQuestion: number }> => {
  const quiz: QuizType = {
    id: quizId,
    bookName: 'Тореодори з Васюківки',
    bookAuthor: 'Всеволод Нестайко',
    questions: [
      {
        id: 1,
        question: 'Які тварини головні герої книги "Тореодори з Васюківки"?',
        answers: ['Котики', 'Собачки', 'Ведмедики'],
      },
      {
        id: 2,
        question: 'Хто намастив повидлом учительські окуляри?',
        answers: ['Петрик П’яточкін', 'Сашко П’явочка', 'Гриць Мамай'],
      },
      {
        id: 3,
        question: 'Запитання 3?',
        answers: ['Відповідь 1', 'Відповідь 2', 'Відповідь 3'],
      },
      { id: 4, question: 'Запитання 4?', answers: ['Відповідь 1', 'Відповідь 2', 'Відповідь 3'] },
      {
        id: 5,
        question: 'Запитання 5?',
        answers: ['Відповідь 1', 'Відповідь 2', 'Відповідь 3'],
      },
    ],
    prizeUrl: '/images/test/quiz-prize-1.svg',
  };

  return Promise.resolve({ quiz, currentQuestion: 4 });
};

const QuizPage = async ({ params }: Props) => {
  const { quiz, currentQuestion } = await getQuiz(Number(params.quizId));

  return (
    <main>
      <Quiz quiz={quiz} currentQuestion={currentQuestion} />
    </main>
  );
};

export default QuizPage;
