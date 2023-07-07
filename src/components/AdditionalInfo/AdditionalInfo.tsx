import React from 'react';
import { Container, Typography } from 'components/common';
import Image from 'next/image';
import facebook from 'public/images/facebook-add.svg';
import insta from 'public/images/insta-add.svg';

import styles from './AdditionalInfo.module.scss';

export default function AdditionalInfo() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.feedbackContainer}>
          <Typography component="h2" variant="h2" className={styles.feedbackTitle}>
            Залиште свій слід у світі читання
          </Typography>
          <Typography component="p" variant="body" className={styles.feedbackText}>
            Ми цінуємо ваш зворотній зв&apos;язок! Ми готові відповісти на ваші питання, вислухати
            ваші пропозиції та разом з вами побудувати захопливий світ читання для дітей!
          </Typography>
          <div className={styles.socialWrapper}>
            <a
              className={styles.socialLink}
              href="https://www.facebook.com/"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              <Image src={facebook} className={styles.socailIcon} alt="іконка фейсбука" />
            </a>

            <a
              className={styles.socialLink}
              href="https://www.instagram.com/"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              <Image src={insta} className={styles.socailIcon} alt="іконка інстаграма" />
            </a>
          </div>
        </div>
        <div className={styles.bazaContainer}>
          <div className={styles.titleWrapper}>
            <Typography component="h2" variant="h2" className={styles.bazaTitle}>
              Про Ba
            </Typography>
            <Typography component="span" variant="body" className={styles.z}>
              z
            </Typography>
            <Typography component="h2" variant="h2" className={styles.bazaTitle}>
              a Trainee&nbsp;
            </Typography>
            <Typography component="h2" variant="h2" className={styles.bazaTitle}>
              Ukraine
            </Typography>
          </div>
          <div className={styles.textWrapper}>
            <Typography component="p" variant="body" className={styles.bazaText}>
              Навчальний проєкт-платформа Baza Trainee Ukraine надає можливість кожному, хто хоче
              набути практики в ІТ сфері, взяти участь у створенні реальних проєктів для
              громадськості.
            </Typography>
            <Typography component="p" variant="body" className={styles.bazaText}>
              Дізнайтесь більше про нас на нашому сайті:
              <br />
              <a href="#" target="_blank" rel="nofollow noreferrer noopener">
                https://baza-trainee.tech
              </a>
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}
