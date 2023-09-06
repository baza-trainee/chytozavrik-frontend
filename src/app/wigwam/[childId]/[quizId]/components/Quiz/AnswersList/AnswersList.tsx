'use client';

import { useState } from 'react';
import { QuestionAnswerType } from '@/types';
import { Button } from '@/components/common';
import { ErrorToast, Notification, SuccessToast } from '../../Notification';
import styles from './AnswersList.module.scss';

type Props = {
  answers: QuestionAnswerType[] | undefined;
  onAnswer: (answerId: number) => Promise<boolean>;
  onNext: () => void;
};

const AnswersList = ({ answers, onNext, onAnswer }: Props) => {
  const [answerResult, setAnswerResult] = useState<boolean | null>(null);
  const [selectAnswer, setSelectAnswer] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = (answerId: number) => async () => {
    setIsLoading(true);
    setSelectAnswer(answerId);

    try {
      const result = await onAnswer(answerId);

      console.log(result);

      setAnswerResult(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const closeNotification = () => {
    setSelectAnswer(null);
    setAnswerResult(null);
  };

  const nextStep = () => {
    closeNotification();
    onNext();
  };

  if (!answers) return null;

  return (
    <>
      <ul className={styles.list}>
        {answers.map(answer => (
          <li key={answer.id} className={styles.item}>
            <Button
              className={styles.button}
              variant="outline"
              color="primary"
              onClick={clickHandler(answer.id)}
              disabled={isLoading}
              isLoading={isLoading && answer.id === selectAnswer}
              selected={answer.id === selectAnswer}
            >
              {answer.text}
            </Button>
          </li>
        ))}
      </ul>
      {answerResult !== null &&
        (answerResult ? (
          <Notification type="success">
            <SuccessToast onAction={nextStep} />
          </Notification>
        ) : (
          <Notification type="error">
            <ErrorToast onAction={closeNotification} />
          </Notification>
        ))}
    </>
  );
};

export default AnswersList;
