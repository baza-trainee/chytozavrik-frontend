'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { AnswerType, QuestionAnswerType } from '@/types';
import { useFetch } from '@/hooks';
import { Button } from '@/components/common';
import { ErrorToast, Notification, SuccessToast } from '../../Notification';
import styles from './AnswersList.module.scss';

type Props = {
  questionId: number;
  answers: QuestionAnswerType[] | undefined;
  onNext: (prize?: string | null) => void;
};

const AnswersList = ({ questionId, answers, onNext }: Props) => {
  const { childId } = useParams();
  const [isShowNotification, setIsShowNotification] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState<number | null>(null);
  const { data: answerResult, isLoading, fetch } = useFetch<AnswerType>();

  const clickHandler = (answerId: number) => async () => {
    setSelectAnswer(answerId);

    try {
      const data = await fetch(`questions/${questionId}/submit-answer`, {
        method: 'POST',
        body: JSON.stringify({
          child_id: childId,
          answer_id: answerId,
        }),
      });

      if (data?.child_reward_id) {
        // await
      }
      console.log('Result', data?.child_reward_id);

      setIsShowNotification(true);
    } catch (err) {
      console.log(err);
    }
  };

  const closeNotification = () => {
    setSelectAnswer(null);
    setIsShowNotification(false);
  };

  const nextStep = () => {
    onNext();
    closeNotification();
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
      {isShowNotification &&
        answerResult &&
        (answerResult.is_answer_correct ? (
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
