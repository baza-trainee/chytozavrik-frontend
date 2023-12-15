'use client';

import React, { useState, useEffect } from 'react';
import { Typography } from 'components/common';
import Image from 'next/image';
import moveRight from 'public/images/move-right.svg';
import lockedIcon from 'public/images/locked.svg';
import { Monster } from '@/types/Monsters';
import { usePathname, useRouter } from 'next/navigation';
import { useMedia } from '@/hooks';
import wigwamTextData from '../wigwamTextData.json';
import styles from './WigwamMyMonsters.module.scss';

type WigwamMyMonstersProps = {
  monstersData: Monster[];
};

const WigwamMyMonsters: React.FC<WigwamMyMonstersProps> = ({ monstersData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { deviceType } = useMedia();

  const [monsters, setMonsters] = useState<Monster[]>([]);
  let count;
  if (deviceType === 'desktop') {
    count = 8;
  } else if (deviceType === 'laptop') {
    count = 7;
  } else {
    count = 6;
  }

  useEffect(() => {
    setMonsters(monstersData);
  }, [monstersData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headlineWrapper}>
        <Typography component="h2" variant="h2" className={styles.title}>
          {wigwamTextData[9]}
        </Typography>
        <Image
          priority
          src={moveRight}
          alt="arrow"
          width={24}
          height={24}
          onClick={() => router.push(`${pathname}/awards`)}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className={styles.monstersContainer}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={styles.monsterWrapper}>
            {monsters && monsters[i] ? (
              <Image
                width={80}
                height={80}
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
