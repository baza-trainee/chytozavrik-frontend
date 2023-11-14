'use client';

import Image from 'next/image';
import styles from './WigwamMyMonsters.module.scss';
import moveRight from '../../../public/images/move-right.svg';
import { Typography } from '@/components/common';
import lockedIcon from '../../../public/images/locked.svg';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Monster {
  id: number;
  reward: string;
  received_at: string;
  child: number;
  quiz: number;
}

interface MonstersResponse {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Monster[];
  };
}

const WigwamMyMonsters: React.FC = () => {
  const { childId } = useParams();
  const { data } = useSession();
  const token = data?.user?.token.access;

  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me/children/${childId}/rewards/?page_size=8`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data }: MonstersResponse = await response.json();

      setMonsters(data.results);
    };

    fetchMonsters();
  }, [childId, token]);

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
