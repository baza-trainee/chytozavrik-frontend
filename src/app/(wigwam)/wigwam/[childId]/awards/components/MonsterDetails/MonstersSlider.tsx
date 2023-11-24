'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import ArrowPrev from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/ArrowPrev';
import ArrowNext from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/ArrowNext';
import { Monster } from '@/types/MonstersTypes';
import Image from 'next/image';


const MonstersSlider = ({ results }: { results: Monster[] }) => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % results.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + results.length) % results.length);
  };

  console.log(results);
  return (
    <div className={styles.slider}>
      <button className={styles.prev} onClick={goToPrev}><ArrowPrev /></button>
      <div className={styles.images}>
        <Image
          src={results[currentSlide].reward}
          alt='Читозаврик'
          fill
          style={{objectFit: 'contain'}}
        />
      </div>
      <button className={styles.next} onClick={goToNext}><ArrowNext /></button>
    </div>
  );
};

export default MonstersSlider;