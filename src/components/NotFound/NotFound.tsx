import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NotFound.module.scss';
import page404 from '../../../public/images/page404.svg';
import { Button } from 'components/common';

export default function NotFound() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <Image className={styles.image} src={page404} alt="404" />
        <p className={styles.text}>Сторінка, яку Ви шукаєте, переміщена або її не існує</p>
        <Link href="/">
          <Button color="secondary" className={styles.button}>
            На головну
          </Button>
        </Link>
      </div>
    </main>
  );
}
