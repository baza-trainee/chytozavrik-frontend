import { Button, Container, Typography } from '@/components/common';
import CloseQuizButton from './components/CloseQuizButton';
import styles from './page.module.scss';
import Image from 'next/image';

type Props = {
  params: {
    quizId: string;
  };
};

type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

type Quiz = {
  id: number;
  bookName: string;
  bookAuthor: string;
  questions: Question[];
  prizeUrl: string;
};

export const getQuiz = async (quizId: number): Promise<Quiz> => {
  const quiz: Quiz = {
    id: quizId,
    bookName: 'Тореодори з Васюківки',
    bookAuthor: 'Всеволод Нестайко',
    questions: [
      {
        question: 'Які тварини головні герої книги "Тореодори з Васюківки"?',
        answers: ['Котики', 'Собачки', 'Ведмедики'],
        correctAnswer: 'Собачки',
      },
      {
        question: 'Запитання 2?',
        answers: ['Відповідь 1', 'Відповідь 2', 'Відповідь 3'],
        correctAnswer: 'Відповідь 2',
      },
      {
        question: 'Запитання 3?',
        answers: ['Відповідь 1', 'Відповідь 2', 'Відповідь 3'],
        correctAnswer: 'Відповідь 3',
      },
      {
        question: 'Запитання 4?',
        answers: ['Відповідь 1', 'Відповідь 2', 'Відповідь 3'],
        correctAnswer: 'Відповідь 1',
      },
      {
        question: 'Запитання 5?',
        answers: ['Відповідь 1', 'Відповідь 2', 'Відповідь 3'],
        correctAnswer: 'Відповідь 2',
      },
    ],
    prizeUrl: '/images/test/quiz-prize-1.svg',
  };

  return Promise.resolve(quiz);
};

const QuizPage = async ({ params }: Props) => {
  const quiz = await getQuiz(Number(params.quizId));
  // console.log(quiz);

  return (
    <main>
      <section className={styles.section}>
        <Container className={styles.container}>
          <CloseQuizButton className={styles['close-button']} />
          <div className={styles.header}>
            <Typography className={styles['question-count']} component="h3" variant="h3">
              Питання 1/{quiz.questions.length}
            </Typography>
            <div className={styles['book-info']}>
              <Typography className={styles['book-name']} component="h3" variant="h3">
                Тореодори з Васюківки
              </Typography>
              <Typography className={styles['book-author']} component="p" variant="body">
                Всеволод Нестайко
              </Typography>
            </div>
          </div>
          <div className={styles.body}>
            <Image
              className={styles['body-image']}
              src="/images/test/quiz-question-image.svg"
              width={103}
              height={144}
              alt="Зображення читозаврика"
            />
            <Typography className={styles.question} component="h2" variant="h2">
              {quiz.questions.at(0)?.question}
            </Typography>
          </div>
          <div className={styles.footer}>
            {quiz.questions.at(0)?.answers.map(answer => (
              <Button key={answer} className={styles['answer-button']} variant="outline">
                {answer}
              </Button>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default QuizPage;
