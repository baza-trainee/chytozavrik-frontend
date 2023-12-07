'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './WigwamMyMonsters.module.scss';
import moveRight from 'public/images/move-right.svg';
import { Typography } from 'components/common';
import lockedIcon from 'public/images/locked.svg';
import { Monster } from '@/types/MonstersTypes';
import wigwamTextData from '../wigwamTextData.json';

type WigwamMyMonstersProps = {
  monstersData: Monster[];
};

const WigwamMyMonsters: React.FC<WigwamMyMonstersProps> = ({ monstersData }) => {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    setMonsters(monstersData);
  }, [monstersData]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headlineWrapper}>
          <Typography component="h2" variant="h2" className={styles.title}>
            {wigwamTextData[9]}
          </Typography>
          <Image priority src={moveRight} alt="arrow" width={24} height={24} />
        </div>
        <div className={styles.monstersContainer}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.monsterWrapper}>
              {monsters && monsters[i] ? (
                <Image
                  width={80}
                  height={80}
                  src={monsters[i].reward}
                  alt="Читозаврик"
                  className={styles.monster}
                />
              ) : (
                <Image src={lockedIcon} alt="icon locked" className={styles.monster} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WigwamMyMonsters;
