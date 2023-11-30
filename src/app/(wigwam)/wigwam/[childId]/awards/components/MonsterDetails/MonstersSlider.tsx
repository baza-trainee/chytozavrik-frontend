'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Monster } from '@/types/MonstersTypes';
import Image from 'next/image';
import ArrowPrev from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/ArrowPrev';
import ArrowNext from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/ArrowNext';

const MonstersSlider = ({ results, monsterId }: { results: Monster[], monsterId: number | string | null }) => {

  const initialIndex = results.findIndex(monster => monster.id === monsterId);
  const [currentSlide, setCurrentSlide] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [sliderItems, setSliderItems] = useState(results)

  const goToNext = () => {
    setCurrentSlide(prevSlide => prevSlide + 1);
  };

  useEffect(() => {
    if (currentSlide === sliderItems.length - 1) {
      setSliderItems(prevItems => [...prevItems, ...results]);
    }
  }, [currentSlide, results]);

  const goToPrev = () => {
    setCurrentSlide(prevSlide => prevSlide - 1);
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
      <button
        style={sliderItems.length < 1 ? {visibility: 'hidden'}  : {visibility: 'visible'}}
        className={styles.prev}
        onClick={goToPrev}>
        <ArrowPrev />
      </button>
      <div className={styles.slidesContainer} style={{ overflow: 'hidden' }}>
        <div className={styles.slides} style={sliderStyle}>
          {sliderItems.map((result, index) =>
            <div className={styles.slide} style={slideStyle} key={index}>
              <div className={styles.image}>
                <Image
                  src={result.reward}
                  alt='Читозаврик'
                  width={100}
                  height={100}
                  style={{ objectFit: 'contain', objectPosition: 'bottom center', width: '100%', height: '100%' }}
                />
              </div>
            </div>,
          )}
        </div>
      </div>

      <button
        style={sliderItems.length < 1 ? {visibility: 'hidden'}  : {visibility: 'visible'}}
        className={styles.next}
        onClick={goToNext}>
        <ArrowNext />
      </button>
    </div>
  );
};

export default MonstersSlider;

