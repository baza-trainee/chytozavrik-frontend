import React from 'react';
import { Typography, Container } from '@/components/common';
import HomeButton from '../HomeButton/HomeButton';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.notFoundContainer}>
    <Container className={styles.container}>
      <div className={styles.infoContainer}>
        <Typography variant="h4" component="p">
          До данної книги ще немає вікторини.
        </Typography>
        <Typography variant="h4" component="p" className={styles.textContainer}>
          Вона зʼявиться незабаром
        </Typography>
        <HomeButton />
      </div>
    </Container>
  </div>
);

export default NotFound;
