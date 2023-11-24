import React from 'react';
import styles from './styles.module.scss';
import LightRays from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/LightRays';
import Cloud from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/Cloud';
import Book from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/Book';
import MonstersSlider
  from '@/app/(wigwam)/wigwam/[childId]/awards/components/MonsterDetails/MonstersSlider';
import { Monster, MonstersResponse } from '@/types/MonstersTypes';


const MonsterDetails = ({results}: {results: Monster[]}) => {
  return (
    <section className={styles.wrapper}>
      <LightRays className={styles.rays} />
      <Cloud className={styles.clouds} />
      <Book className={styles.book}/>
      <MonstersSlider results={results}/>
    </section>
  );
};

export default MonsterDetails;