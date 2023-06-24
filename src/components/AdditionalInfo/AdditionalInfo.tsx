import React from 'react'
import { Facebook, Instagram } from 'iconsax-react';

import styles from './AdditionalInfo.module.scss';



export default function AdditionalInfo() {
  return (
      <div className={styles.infoContainer}>
          <div className={styles.feedbackContainer}>
          <h2 className={styles.feedbackTitle}>Залиште свій слід у світі читання</h2>
          <p className={styles.feedbackText}>Ми цінуємо ваш зворотній зв'язок! Не соромтеся зв'язатися з нами за допомогою наведених контактів. Ми готові відповісти на ваші питання, вислухати ваші пропозиції та разом з вами побудувати захопливий світ читання для дітей!</p>
              <div className={styles.socialWrapper}>
                  <a 
              href="https://www.facebook.com/"
              target="_blank"
              rel="nofollow noreferrer noopener"
                  ><Facebook size={32}/>
                  </a>
             <a 
              href="https://www.instagram.com/"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
                      <Instagram size={32}/>
                  </a>
              </div>
          </div>
          <div className={styles.bazaContainer}> 
              <h2 className={styles.bazaTitle}>Про Baza Trainee</h2>
          <p className={styles.bazaText}>Ми цінуємо ваш зворотній зв'язок! Не соромтеся зв'язатися з нами за допомогою наведених контактів. Ми готові відповісти на ваші питання, вислухати ваші пропозиції та разом з вами побудувати захопливий світ читання для дітей!</p>
          </div>
    </div>
  )
}

