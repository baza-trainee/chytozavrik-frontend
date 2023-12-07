import React from 'react';
import styles from './QuizCard.module.scss';
import { UsersQuiz } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/common';
import { Route } from '@/constants';
import { Typography } from '@/components/common';
import BrainIcon from 'public/images/brain/brain.svg';
import BrainYellow from 'public/images/brain/brain_yellow.svg';
import BrainGreen from 'public/images/brain/brain_green.svg';

interface QuizCardProps {
  quiz: UsersQuiz;
  childId: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, childId }) => {
  console.log(quiz.book.title);

  const firstChar = quiz.current_score ? quiz.current_score.charAt(0) : '';
  const colorText =
    parseInt(firstChar) > 0 && parseInt(firstChar) < 5
      ? '#7791FA'
      : parseInt(firstChar) === 5
      ? '#52C974'
      : '#B3CDFF';

  let icon;
  if (parseInt(firstChar) > 0 && parseInt(firstChar) < 5) icon = BrainYellow;
  else if (parseInt(firstChar) === 5) icon = BrainGreen;
  else icon = BrainIcon;
  return (
    <>
      <div className={styles.quizCard}>
        <div className={styles.bookCoverContainer}>
          <Image src={quiz.book.cover_image} width={140} height={214} alt="book picture" />
        </div>
        <div className={styles.quizDetails}>
          <div className={styles.quizHeader}>
            <Typography component="h5" variant="h5" data-title={quiz.book.title}>
              {quiz.book.title}
            </Typography>
            <div className={styles.scoreWrapper}>
              <Image priority src={icon} alt="brain icon" width={18} height={18} />
              <p className={styles.quizScore} style={{ color: `${colorText}` }}>
                {quiz.current_score || '0/5'}
              </p>
            </div>
          </div>
          <Typography
            className={styles.bookAuthor}
            component="p"
            variant="body"
            data-title={quiz.book.author}
          >
            {quiz.book.author}
          </Typography>
          <Button
            component="link"
            href={`${Route.WIGWAM}/${childId}/${quiz.id}`}
            size={'small'}
            variant={'outline'}
          >
            Пройти вікторину
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuizCard;
