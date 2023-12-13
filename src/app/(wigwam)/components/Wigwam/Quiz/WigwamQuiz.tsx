// 'use client';

import React from 'react';
import { Button } from 'components/common';
import CatImage from '@/app/(wigwam)/components/Wigwam/Quiz/components/CatImage';
import { BookType } from '@/types/WigwamBooks';
import { LastquizType } from '@/types/WigwamQuiz';
import styles from './WigwamQuiz.module.scss';
import wigwamTextData from '../wigwamTextData.json';

interface WigwamQuizProps {
  booksItem: BookType;
  wigwamQuizItem?: LastquizType;
}

const WigwamQuiz: React.FC<WigwamQuizProps> = ({ booksItem = {}, wigwamQuizItem }) => {
  const lastQuizId: string | null | undefined = wigwamQuizItem?.last_quiz_id || null;

  const lastQuizScore = booksItem.current_score;

  let lastQuizTitle: string | undefined;
  let lastQuizAuthor: string | undefined;

  if (booksItem.id === parseInt(wigwamQuizItem?.last_quiz_id || '', 10)) {
    lastQuizTitle = booksItem?.book?.title;
    lastQuizAuthor = booksItem?.book?.author;
  }

  const uniqueQuizzes = wigwamQuizItem?.unique_quizzes_passed;

  const childId = wigwamQuizItem?.id;
  const quizId = lastQuizId || '';

  if (uniqueQuizzes === '0') {
    return (
      <section className={styles.start_wraper}>
        <div className={styles.start_box}>
          <div className={styles.image}>
            <CatImage alt="cat" width={140} height={90} viewBox="0 0 140 90" />
          </div>
          <div className={styles.text_wrap}>
            <p className={styles.text_welcome}>{wigwamTextData[1]}</p>
            <p className={styles.text}>{wigwamTextData[2]}</p>
          </div>
        </div>
      </section>
    );
  }

  if (booksItem.current_score === '5/5') {
    return (
      <section className={styles.start_wraper}>
        <div className={styles.start_box}>
          <div className={styles.image}>
            <CatImage alt="cat" width={140} height={90} viewBox="0 0 140 90" />
          </div>
          <div className={styles.text_wrap}>
            <p className={styles.text_welcome}> Супер! </p>
            <p className={styles.text}>{wigwamTextData[3]}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.last_wraper}>
      <div className={styles.last_box}>
        <p className={styles.last_text}>{wigwamTextData[0]}</p>
        <div className={styles.text_wraper}>
          <p className={styles.hidden_text}>Last Quiz ID: {lastQuizId}</p>
          <p className={styles.book_name}>{lastQuizTitle}</p>
          <p className={styles.book_author}>{lastQuizAuthor}</p>
        </div>

        <ul className={styles.status_bar}>
          {[...Array(5)].map((_, index) => (
            <li
              key={index}
              className={styles.bolt}
              style={{
                backgroundColor:
                  lastQuizScore && index < parseInt(lastQuizScore.charAt(0), 10) ? '#7AF19C' : '',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
              >
                <path
                  d="M5.32188 12.96L9.52656 8H6.27656L6.86562 3.46L3.10781 8.8H5.93125L5.32188 12.96ZM3.25 16L4.0625 10.4H0L7.3125 0H8.9375L8.125 6.4H13L4.875 16H3.25Z"
                  fill="black"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <Button className={styles.button} component="link" href={`/wigwam/${childId}/${quizId}`}>
        {wigwamTextData[4]}
      </Button>
    </section>
  );
};

export default WigwamQuiz;
