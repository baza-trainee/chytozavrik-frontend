import Image from 'next/image';
import { Button, Typography } from '@/components/common';
import catSadImage from 'public/images/cat-sad.svg';
import styles from './Toast.module.scss';

type Props = {
  onAction: () => void;
  onClose: () => void;
};

const DefaultToast = ({ onAction, onClose }: Props) => {
  return (
    <div className={styles.toast}>
      <div className={styles.body}>
        <div className={styles.thumb}>
          <Image className={styles.image} src={catSadImage} alt="Засмучений кот" />
        </div>
        <div className={styles['body-wrapper']}>
          <Typography className={styles.title} component="h2" variant="h2">
            Ти точно хочеш вийти?
          </Typography>
          <Typography component="p" variant="body">
            Твій процес буде збережено
          </Typography>
        </div>
      </div>

      <div className={styles['button-wrapper']}>
        <Button className={styles.button} variant="outline" onClick={onAction}>
          Залишитися
        </Button>
        <Button className={styles.button} variant="text" onClick={onClose}>
          Вийти
        </Button>
      </div>
    </div>
  );
};

export default DefaultToast;
