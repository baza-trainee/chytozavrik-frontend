'use client';

import { Button } from '@/components/common';
import { useMedia } from '@/hooks';
import { Route } from '@/constants';
import styles from './HomeButton.module.scss';

const HomeButton = () => {
  const { deviceType } = useMedia();

  return (
    <Button
      component="link"
      href={`${Route.HOME}`}
      size={deviceType === 'mobile' || deviceType === 'tablet' ? 'default' : 'big'}
      color="secondary"
      className={styles.homeButton}
    >
      До вігваму
    </Button>
  );
};

export default HomeButton;
