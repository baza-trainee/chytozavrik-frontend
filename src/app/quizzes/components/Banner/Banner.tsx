import React from 'react';
import styles from './styles.module.scss'


const Banner = () => {
  return (
    <section>
      <div className={styles.banner}>
        <h2 className={styles.title}>Проходь вікторини та
          вигравай читозавриків</h2>
      </div>
    </section>
  );
};

export default Banner;