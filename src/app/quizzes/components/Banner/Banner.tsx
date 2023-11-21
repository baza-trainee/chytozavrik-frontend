import React from 'react';
import styles from './styles.module.scss'



const Banner = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.banner}>
        <h2 className={styles.title}>Проходь вікторини та
          вигравай читозавриків</h2>
        <div className={styles.icon}>
          <img src='/images/UI/close.svg' alt='close icon' />
        </div>
      </div>
    </section>
  );
};

export default Banner;