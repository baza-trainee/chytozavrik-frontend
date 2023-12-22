'use client'

import React from 'react';
import { Typography, Container } from '@/components/common';
import HomeButton from '../HomeButton/HomeButton';
import styles from './NotFound.module.scss';
import { useMedia } from '@/hooks';

const NotFound = () => {
  const {deviceType} = useMedia()
  let image ;
   if (deviceType === "mobile") {
     image = '/images/wigwam/NoQuizPage/hero-mobile.svg'
   } else if (deviceType === "tablet") {
     image = '/images/wigwam/NoQuizPage/hero-tablet.svg'
   } else {
     image = '/images/wigwam/NoQuizPage/hero-laptop.svg'
   }

  return (
    <div className={styles.notFoundContainer}>
      <Container className={styles.container}>
        <div className={styles.infoContainer}>
         <div className={styles.text}>
           <Typography variant="h4" component="p" className={styles.textContainer}>
             До данної книги ще немає вікторини.
           </Typography>
           <Typography variant="h4" component="p" className={styles.textContainer}>
             Вона зʼявиться незабаром
           </Typography>
         </div>
          <HomeButton />
        </div>
      </Container>
      <div className={styles.background}>
        <img src={image} alt='background' />
      </div>
    </div>
  );
}

export default NotFound;
