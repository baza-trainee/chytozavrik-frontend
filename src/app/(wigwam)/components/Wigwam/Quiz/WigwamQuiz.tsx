'use client';
import Image from 'next/image';
import cat from 'public/images/wigwam-cat.png';
import styles from './WigwamQuiz.module.scss';
import { Button } from 'components/common';

const WigwamQuiz = () => {
  const handleClick = () => {
    console.log('start quiz');
  };

  return (
    <div className={styles.wraper}>
      <div className={styles.box}>
        <Image className={styles.image} src={cat} alt="cat" />
        <div className={styles.text_wraper}>
          <p className={styles.text_welcome}>Вітаємо у Вігвамі! </p>
          <p className={styles.text}>Обери книгу зі списку пройди вікторинута отримай читозаврика</p>
        </div>
      </div>
    </div>
  );
};

export default WigwamQuiz;
