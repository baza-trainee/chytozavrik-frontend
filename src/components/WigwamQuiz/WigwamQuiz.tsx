'use client';
import Image from 'next/image';
import { Button } from '../common';
import cat from '../../../public/images/wigwam-cat.png';
import styles from './WigwamQuiz.module.scss';

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
          <p className={styles.text}>Пройди вікторину та отримай Читозаврика</p>
        </div>
      </div>
      <Button className={styles.button} onClick={handleClick}>
        Почати вікторину
      </Button>
    </div>
  );
};

export default WigwamQuiz;
