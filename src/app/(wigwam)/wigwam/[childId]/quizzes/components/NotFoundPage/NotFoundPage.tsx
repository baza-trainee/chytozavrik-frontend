import React from 'react';
import Image from 'next/image';
import { Typography } from '@/components/common';
import { QuizCategory } from '@/types';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  category: QuizCategory;
}

const NotFoundPage = ({ category }: NotFoundPageProps) => {
  let message = '';

  switch (category) {
    case QuizCategory.All:
      message = 'Упс.. Немає результатів пошуку';
      break;
    case QuizCategory.Started:
      message = 'Упс.. У вас ще немає розпочатих вікторин';
      break;
    case QuizCategory.Completed:
      message = 'Упс.. У вас ще немає завершених вікторин';
      break;
    default:
      message = 'Упс.. Немає результатів пошуку';
      break;
  }
  return (
    <div className={styles.notFoundContainer}>
      <Image
        src="/images/all-quizzes/book1440.svg"
        alt="book image"
        width={397}
        height={240}
        className={styles.imageContainer}
      />
      <Typography component="h5" variant="h5" className={styles.noBooksContainer}>
        {message}
      </Typography>
    </div>
  );
};

export default NotFoundPage;
