'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import cat from '../../../public/images/cat.svg';
import { X } from 'lucide-react';
import styles from './Notification.module.scss';

type Props = {
  closeNote: () => void;
};

export default function Notification({ closeNote }: Props) {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} type="button" onClick={closeNote}>
          <X size={16} />
        </button>
        <div className={styles.wrapper}>
          <p className={styles.text}>
            Натисніть сюди, щоб створити ігровий простір для своєї дитини
          </p>
          <Image className={styles.image} src={cat} width="80" alt="іконка кота" />
        </div>
      </div>
    </>
  );
}
