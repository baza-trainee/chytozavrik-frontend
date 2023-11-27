'use client';

import React from 'react';
import styles from './WigwamQuiz.module.scss';
import CatImage from '@/app/(wigwam)/components/Wigwam/Quiz/components/CatImage';

const WigwamQuiz = () => {

  return (
    <div className={styles.wraper}>

      <div className={styles.box}>
        <div className={styles.image}>
          <CatImage width={140} height={90} viewBox="0 0 140 90"/>
        </div>
        <div className={styles.text_wraper}>
          <p className={styles.text_welcome}>Вітаємо у Вігвамі! </p>
          <p className={styles.text}>Обери книгу зі списку пройди вікторину та отримай читозаврика</p>
        </div>
      </div>
    </div>
  );
};

export default WigwamQuiz;
