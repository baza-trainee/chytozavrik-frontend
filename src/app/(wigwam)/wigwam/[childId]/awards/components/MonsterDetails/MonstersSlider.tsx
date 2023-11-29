'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import ArrowPrev from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/ArrowPrev';
import ArrowNext from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/ArrowNext';
import { Monster } from '@/types/MonstersTypes';
import Image from 'next/image';


const MonstersSlider = ({ results, monsterId }: { results: Monster[], monsterId:number | string | null }) => {

  const initialIndex = results.findIndex(monster => monster.id === monsterId);
  const [currentSlide, setCurrentSlide] = useState(initialIndex >= 0 ? initialIndex : 0);

  const goToNext = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === results.length - 1) {
        return 0;
      } else {
        return prevSlide + 1;
      }
    });
  };

  const goToPrev = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 0) {
        return results.length - 1;
      } else {
        return prevSlide - 1;
      }
    });
  };

  const sliderStyle = {
    display: 'flex',
    width: `${results.length * 100}%`,
    transform: `translateX(-${currentSlide * (100 / results.length)}%)`,
    transition: 'transform 1s ease',
  };

  const slideStyle = {
    width: `${100 / results.length}%`,
    flexShrink: 0,
  };

  return (
    <div className={styles.slider}>
      {results.length > 1 && <button className={styles.prev} onClick={goToPrev}><ArrowPrev /></button>}
      <div className={styles.slidesContainer} style={{overflow: 'hidden'}}>
        <div className={styles.slides} style={sliderStyle}>
         {results.map((result, index) =>
           <div className={styles.slide} style={slideStyle} key={index}>
             <Image
               src={result.reward}
               alt='Читозаврик'
               width={100}
               height={100}
               style={{objectFit: 'contain', objectPosition: "bottom center", width: "100%", height: "100%"}}
             />
           </div>
         )}
       </div>
      </div>

      {results.length > 1 && <button className={styles.next} onClick={goToNext}><ArrowNext /></button>}
    </div>
  );
};

export default MonstersSlider;

