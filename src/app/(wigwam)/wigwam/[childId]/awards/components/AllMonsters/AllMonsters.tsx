import React from 'react';
import styles from './AllMonsters.module.scss';
import { Monster } from '@/types/Monsters';
import SliderMonsters from '@/app/(wigwam)/wigwam/[childId]/awards/components/AllMonsters/MonstersSlider/SliderMonsters';

const AllMonsters = ({
  results,
  onMonsterClick,
}: {
  results: Monster[];
  onMonsterClick: (id: number | string) => void;
}) => {
  return (
    <section className={styles.monsters}>
      <SliderMonsters results={results} onMonsterClick={onMonsterClick} />
      <div className={styles.clouds} />
      <div className={styles.wigwam} />
    </section>
  );
};

export default AllMonsters;
