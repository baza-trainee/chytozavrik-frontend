'use client';

import { useState } from 'react';
import { Button } from '@/components/common';
import { ErrorToast, Notification, SuccessToast } from '../../Notification';
import styles from './AnswersList.module.scss';

type Props = {
  answers: string[] | undefined;
  onNext: () => void;
};

const fetchAnwser = async (answer: string): Promise<boolean> => {
  return new Promise(resolve => {
    const result = Math.round(Math.random() * 2);
    setTimeout(() => {
      if (result === 1) {
        return resolve(true);
      } else {
        return resolve(false);
      }
    }, 1000);
  });
};

const AnswersList = ({ answers, onNext }: Props) => {
  const [answerResult, setAnswerResult] = useState<boolean | null>(null);
  const [selectAnswer, setSelectAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = (answer: string) => async () => {
    try {
      setIsLoading(true);
      setSelectAnswer(answer);
      const result = await fetchAnwser(answer);

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
          <li key={answer}>
            <Button
              className={styles.button}
              variant="outline"
              color="primary"
              onClick={clickHandler(answer)}
              disabled={isLoading}
              isLoading={isLoading && answer === selectAnswer}
              selected={answer === selectAnswer}
            >
              {answer}
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
