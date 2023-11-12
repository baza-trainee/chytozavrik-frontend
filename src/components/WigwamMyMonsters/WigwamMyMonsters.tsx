'use client';

import Image from 'next/image';
import styles from './WigwamMyMonsters.module.scss';
import moveRight from '../../../public/images/move-right.svg';
import { Typography } from '@/components/common';
import monsterAvatar from '../../../public/images/monsters-avatar4.svg';
import lockedIcon from '../../../public/images/locked.svg';
import { useState, useEffect } from 'react';

interface Monster {
  id: number;
  reward: string;
  received_at: string;
  child: number;
  quiz: number;
}

interface MonstersResponse {
  count: number;
  next: string;
  previous: string;
  results: Monster[];
}

const WigwamMyMonsters: React.FC = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  const fetchMonsters = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me/children/11/rewards/?page_size=8`
    );
    const data: MonstersResponse = await response.json();
    setMonsters(data.results);
  };

  useEffect(() => {
    fetchMonsters();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headlineWrapper}>
          <Typography component="h2" variant="h2" className={styles.title}>
            Мої Читозаври
          </Typography>
          <Image priority src={moveRight} alt="arrow" width={24} height={24} />
        </div>
        <div className={styles.monstersContainer}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.monsterWrapper}>
              {monsters && monsters.length > 0 && monsters[i] ? (
                <Image src={monsters[i].reward} alt="Читозаврик" className={styles.monster} />
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
