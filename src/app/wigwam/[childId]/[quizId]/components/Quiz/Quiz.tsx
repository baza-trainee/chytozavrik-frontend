'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { QuizType } from '@/types';
import { Container, Typography } from '@/components/common';
import CloseQuizButton from '../CloseQuizButton';
import AnswersList from './AnswersList';
import QuizPrize from '../QuizPrize';
import questionImage from 'public/images/quiz-page/quiz-question-image.svg';
import styles from './Quiz.module.scss';
import { useParams, useSearchParams } from 'next/navigation';
import { sendSelectedAnswerService } from '@/services/api';
import { useFetch } from '@/hooks';

type Props = {
  quiz: QuizType;
};

const Quiz = ({ quiz }: Props) => {
  const searchParams = useSearchParams();
  const params = useParams();
  const childId = Number(params.childId);
  const privateFetch = useFetch();
  const bookAuthor = searchParams.get('book-author') ?? '';
  const bookName = searchParams.get('book-name') ?? '';
  const currentQuestion = Number(searchParams.get('question')) ?? 1;
  const { questions } = quiz;

  const [questionNumber, setQuestionNumber] = useState(currentQuestion - 1);
  const [isShowPrize, setIsShowPrize] = useState(false);

  const fetchAnswer = async (answerId: number): Promise<boolean> => {
    try {
      const result = await privateFetch(
        `questions/${quiz.questions.at(questionNumber)?.id}/submit-answer`,
        {
          method: 'POST',
          body: JSON.stringify({
            child_id: childId,
            answer_id: answerId,
          }),
        }
      );

      const data = await result.json();

      if (data.status === 'fail') {
        console.log(data.data.message);
        return false;
      }
      console.log(result);

      return data.data.is_answer_correct;
    } catch (error) {
      console.log(error);
    }
    return false;
  };

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
                {questions.at(questionNumber)?.text}
              </Typography>
            </div>
            <div className={styles.footer}>
              <AnswersList
                answers={questions.at(questionNumber)?.answers}
                onNext={nextStep}
                onAnswer={fetchAnswer}
              />
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Quiz;
