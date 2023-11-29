import React, { useRef, useState } from 'react';
import { Monster } from '@/types/MonstersTypes';
import PrevArrow from '@/app/(wigwam)/wigwam/[childId]/awards/components/AllMonsters/Buttons/PrevArrow';
import NextArrow from '@/app/(wigwam)/wigwam/[childId]/awards/components/AllMonsters/Buttons/NextArrow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../AllMonsters.module.scss';


const SliderMonsters =  ({ results, onMonsterClick }: { results: Monster[]; onMonsterClick: (id: number | string) => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: any) => setCurrentSlide(current),
    ref: sliderRef,
  };
  const goToNext = () => sliderRef.current && sliderRef.current.slickNext();
  const goToPrev = () => sliderRef.current && sliderRef.current.slickPrev();

  const processedResults = results.map(({ id, reward }) => ({ id, reward }));
  while (processedResults.length % 12 !== 0) {
    processedResults.push({ id: 'placeholder', reward: '/images/monsters/monsters-avatar.svg' });
  }

  const slides = [];
  for (let i = 0; i < processedResults.length; i += 6) {
    slides.push(processedResults.slice(i, i + 6));
  }
  console.log(results);

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {slides.map((slideImages, index) => (
          <div key={index}>
            <div className={styles.slide}>
              {slideImages.map((item, imgIndex) => (
                <div className={styles.monsterIcon} key={imgIndex}>
                  {item.id === 'placeholder'
                    ? <img key={imgIndex} src={'/images/monsters/monsters-avatar.svg'} alt={`Placeholder`} />
                    : <div className={styles.monsterPresent} onClick={() => onMonsterClick(item.id)}>
                      <img src={item.reward} alt={`Monster ${item.id}`}/>
                    </div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles.buttons}>
        {currentSlide > 0 && <PrevArrow onClick={goToPrev} className={styles.prev} />}
        {currentSlide < slides.length - 1 && <NextArrow onClick={goToNext} className={styles.next} />}
      </div>
    </div>
  );
};

export default SliderMonsters;