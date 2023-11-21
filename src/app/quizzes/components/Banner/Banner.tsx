'use client'

import React from 'react';
import styles from './styles.module.scss'

interface BannerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<BannerProps> = ({setIsOpen}) => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.banner}>
        <h2 className={styles.title}>Проходь вікторини та
          вигравай читозавриків</h2>
        <div className={styles.icon} onClick={() => setIsOpen(false)}>
          <img src='/images/UI/close.svg' alt='close icon' />
        </div>
      </div>
    </section>
  );
};

export default Banner;