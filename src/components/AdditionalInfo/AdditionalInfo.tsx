import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Container, Typography } from 'components/common';


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
              <Facebook className={styles.socailIcon} size="32" />
            </a>

            <a
              className={styles.socialLink}
              href="https://www.instagram.com/"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              <Instagram className={styles.socailIcon} size="32" />
            </a>
          </div>
        </div>
        <div className={styles.bazaContainer}>
            <Typography component="h2" variant="h2" className={styles.bazaTitle}>
              Про Ba<span className={styles.z}>z</span>a Trainee Ukraine
            </Typography>
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
