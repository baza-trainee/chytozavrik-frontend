import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Sticker from 'public/images/sticker.svg';
import styles from './WigwamReadBooks.module.scss';

const WigwamReadBooks = () => {
  const counter = 0;
  return (
    <div>
      <div className={styles.wraper}>
        <Image priority src={Sticker} alt="sticker" width={79} height={48} />
        <p className={styles.counter_title}>Прочитано</p>
        <div className={styles.counter_wraper}>
          <p className={styles.counter}>{counter}</p>
          <div className={styles.icon}>
            <BookOpen color="#7791FA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WigwamReadBooks;
