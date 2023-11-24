'use client'

import React from 'react';
import styles from './styles.module.scss'
import ArrowPrev from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/ArrowPrev';
import ArrowNext from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/ArrowNext';


const MonstersSlider = () => {
  return (
    <div className={styles.slider}>
      <button className={styles.prev}><ArrowPrev/></button>

      <button className={styles.next}><ArrowNext/></button>
    </div>
  );
};

export default MonstersSlider;