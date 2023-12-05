'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

interface BannerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<BannerProps> = ({ setIsOpen }) => (
  <section className={styles.wrapper}>
    <div className={styles.banner}>
      <h2 className={styles.title}>Проходь вікторини та вигравай читозавриків</h2>
      <div className={styles.icon} onClick={() => setIsOpen(false)}>
        <Image src="/images/UI/close.svg" alt="close icon" width={24} height={24} />
      </div>
    </div>
  </section>
);

export default Banner;
