import { MoveRight } from 'lucide-react';
import { Typography } from '../common';
import styles from './WigwamChitozavrikList.module.scss';

const WigwamChitozavrikList = () => {
  return (
    <div className={styles.wraper}>
      <div className={styles.title_wraper}>
        <Typography component="h2" variant="h2" className={styles.title}>
          Мої Читозаври
        </Typography>
        <span className={styles.arrow}>
          <MoveRight />
        </span>
      </div>
    </div>
  );
};

export default WigwamChitozavrikList;
