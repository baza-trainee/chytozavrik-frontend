'use client';

import { useMemo, useState } from 'react';
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
  const currentQuestion = questions.at(questionNumber);
  const [isShowPrize, setIsShowPrize] = useState(false);

  const nextStep = (prize: string | null = null) => {
    if (questionNumber >= questions.length - 1) {
      return setIsShowPrize(true);
    }

    router.push(`?question=${questionNumber + 1}`);
  };

  const replyQuiz = () => {
    setIsShowPrize(false);

    router.push(`?question=0`);
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {isShowPrize ? (
          <>{/* <QuizPrize prize={prizeUrl} onReplyQuiz={replyQuiz} /> */}</>
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
