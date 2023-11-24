import React from 'react';
import styles from './styles.module.scss';
import LightRays from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/LightRays';
import Cloud from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/Cloud';
import Book from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/Book';
import MonstersSlider
  from '@/app/(wigwam)/wigwam/[childId]/awards/components/MonsterDetails/MonstersSlider';


const MonsterDetails = () => {

  return (
    <section className={styles.wrapper}>
      <LightRays className={styles.rays} />
      <Cloud className={styles.clouds} />
      <Book className={styles.book}/>
      <MonstersSlider/>
    </section>
  );
};

export default MonsterDetails;