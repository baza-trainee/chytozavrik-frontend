'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import type { QuizType } from '@/types';
import questionImage from 'public/images/quiz-page/quiz-question-image.svg';
import { Container, Typography } from '@/components/common';
import CloseQuizButton from '../CloseQuizButton';
import AnswersList from './AnswersList';
import QuizPrize from '../QuizPrize';
import styles from './Quiz.module.scss';

type Props = {
  quiz: QuizType;
};

const Quiz = ({ quiz }: Props) => {
  const {
    questions,
    book_info: { author: bookAuthor, name: bookName },
  } = quiz;
  const searchParams = useSearchParams();
  const router = useRouter();
  const questionNumber = useMemo(() => Number(searchParams.get('question')), [searchParams]);
  const quizePrize = useMemo(() => searchParams.get('quize-prize'), [searchParams]);
  const currentQuestion = questions.at(questionNumber);

  const nextStep = (prize?: string) => {
    if (prize) {
      return router.push(`?quize-prize=${prize}`);
    }

    router.push(`?question=${questionNumber + 1}`);
  };

  const replyQuiz = () => {
    router.push(`?question=0`);
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {quizePrize ? (
          <>{<QuizPrize prize={quizePrize} onReplyQuiz={replyQuiz} />}</>
        ) : (
          <>
            <CloseQuizButton className={styles['close-button']} />
            <div className={styles.header}>
              <Typography className={styles['question-count']} component="h3" variant="h3">
                Питання {questionNumber + 1}/{questions.length}
              </Typography>
              <div className={styles['book-info']}>
                <Typography className={styles['book-name']} component="h3" variant="h3">
                  {bookName}
                </Typography>
                <Typography className={styles['book-author']} component="p" variant="body">
                  {bookAuthor}
                </Typography>
              </div>
            </div>
            <div className={styles.body}>
              <Image
                className={styles['body-image']}
                src={questionImage}
                alt="Зображення читозаврика"
              />
              <Typography className={styles.question} component="h2" variant="h2">
                {currentQuestion?.text}
              </Typography>
            </div>
            <div className={styles.footer}>
              <AnswersList
                questionId={currentQuestion?.id as number}
                answers={currentQuestion?.answers}
                onNext={nextStep}
              />
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Quiz;
