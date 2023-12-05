'use client';

import Image from 'next/image';
import moveRight from 'public/images/move-right.svg';
import { Typography } from 'components/common';
import lockedIcon from 'public/images/locked.svg';
import { useState, useEffect, FC } from 'react';
import { Monster } from '@/types/MonstersTypes';
import { useMedia } from '@/hooks';
import Link from 'next/link';
import styles from './WigwamMyMonsters.module.scss';

type WigwamMyMonstersProps = {
  monstersData: Monster[];
  childId: string;
};

const WigwamMyMonsters: FC<WigwamMyMonstersProps> = ({ monstersData, childId }) => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const { deviceType } = useMedia();

  useEffect(() => {
    setMonsters(monstersData);
  }, [monstersData]);

  let length;
  if (deviceType === 'mobile' || deviceType === 'tablet') {
    length = 6;
  } else if (deviceType === 'laptop') {
    length = 7;
  } else {
    length = 8;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.headlineWrapper}>
        <Typography component="h2" variant="h2" className={styles.title}>
          Мої Читозаври
        </Typography>
        <Link href={`/wigwam/${childId}/awards`} className={styles.arrow}>
          <Image priority src={moveRight} alt="arrow" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.monstersContainer}>
        {Array.from({ length }).map((_, i) => (
          <div key={i} className={styles.monsterWrapper}>
            {monsters && monsters[i] ? (
              <Image
                width={60}
                height={50}
                src={monsters[i].reward}
                alt="Читозаврик"
                className={styles.monsterPresent}
              />
            ) : (
              <Image src={lockedIcon} alt="icon locked" className={styles.monsterEmpty} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WigwamMyMonsters;
