import React from 'react';
import styles from './styles.module.scss';
import LightRays from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/LightRays';
import Cloud from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/Cloud';

const MonsterDetails = () => {
  return (
    <section className={styles.wrapper}>
      <LightRays className={styles.rays}/>
      <Cloud className={styles.clouds}/>
    </section>
  );
};

export default MonsterDetails;