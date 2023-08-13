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
    const result = Math.round(Math.random() * 3);
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

  const clickHandler = (answer: string) => async () => {
    const result = await fetchAnwser(answer);

    setAnswerResult(result);
  };

  const closeNotification = () => {
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
            <Button className={styles.button} variant="outline" onClick={clickHandler(answer)}>
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
