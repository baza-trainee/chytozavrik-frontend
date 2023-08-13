'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { QuizType } from '@/types';
import { Container, Typography } from '@/components/common';
import CloseQuizButton from '../CloseQuizButton/';
import AnswersList from './AnswersList';
import styles from './Quiz.module.scss';
import QuizPrize from '../QuizPrize/QuizPrize';

type Props = {
  quiz: QuizType;
  currentQuestion: number;
};

const Quiz = ({ quiz, currentQuestion }: Props) => {
  const { bookAuthor, bookName, prizeUrl, questions } = quiz;
  const [questionNumber, setQuestionNumber] = useState(currentQuestion);
  const [isShowPrize, setIsShowPrize] = useState(false);

  const nextStep = () => {
    if (questionNumber >= questions.length - 1) {
      return setIsShowPrize(true);
    }

    setQuestionNumber(prev => prev + 1);
  };

  const replyQuiz = () => {
    setIsShowPrize(false);
    setQuestionNumber(0);
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {isShowPrize ? (
          <QuizPrize prize={prizeUrl} onReplyQuiz={replyQuiz} />
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
                src="/images/test/quiz-question-image.svg"
                width={103}
                height={144}
                alt="Зображення читозаврика"
              />
              <Typography className={styles.question} component="h2" variant="h2">
                {questions.at(questionNumber)?.question}
              </Typography>
            </div>
            <div className={styles.footer}>
              <AnswersList answers={questions.at(questionNumber)?.answers} onNext={nextStep} />
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Quiz;
