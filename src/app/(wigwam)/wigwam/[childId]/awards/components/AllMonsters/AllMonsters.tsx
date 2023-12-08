import React from 'react';
import { Monster } from '@/types/Monsters';
import SliderMonsters from '@/app/(wigwam)/wigwam/[childId]/awards/components/AllMonsters/MonstersSlider/SliderMonsters';
import styles from './AllMonsters.module.scss';

const AllMonsters = ({
  results,
  onMonsterClick,
}: {
  results: Monster[];
  onMonsterClick: (id: number | string) => void;
}) => (
  <section className={styles.monsters}>
    <SliderMonsters results={results} onMonsterClick={onMonsterClick} />
    <div className={styles.clouds} />
    <div className={styles.wigwam} />
  </section>
);

export default AllMonsters;
