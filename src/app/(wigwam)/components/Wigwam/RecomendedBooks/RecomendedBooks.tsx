'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './RecomendedBooks.module.scss';
import { Typography } from 'components/common';
import './slick.css';
import './slick-theme.css';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';
import { RecBookType } from '@/types/RecomendedBooks';
import { BookType } from '@/types/WigwamBooks';
import { LastquizType } from '@/types/WigwamQuiz';
import wigwamTextData from '../wigwamTextData.json';

interface RecomendedBooksProps {
  booksData?: BookType[] | undefined;
  wigwamQuizData?: LastquizType | undefined;
  recBooksData: RecBookType[] | undefined;
  items: string[];
}

const RecomendedBooks: React.FC<RecomendedBooksProps> = ({
  items,
  wigwamQuizData,
  booksData = [],
  recBooksData = [],
}) => {
  const NextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
        <ArrowRight />
      </div>
    );
  };

  const PrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
        <ArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const handleCardClick = (index: number) => {
    const book = recBooksData[index];
    const quiz = booksData[index];

    if (book?.id && quiz?.book?.id && wigwamQuizData) {
      const child_id = wigwamQuizData.id;
      const quiz_id = quiz.id;

      console.log(child_id);
      console.log(quiz_id);

      if (book?.state && book.state.includes('Вікторина')) {
        window.location.href = `/wigwam/${child_id}/${quiz_id}`;
      } else {
        window.location.href = `/*`;
      }
    } else {
      console.error('Error: Missing book or quiz data');
      window.location.href = `/*`;
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (current: number, next: number) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className={styles.slider}>
      <Typography component="h2" variant="h2" className={styles.rec_title}>
        {wigwamTextData[5]}
      </Typography>
      <div className={styles.slider_container}>
        <Slider {...settings}>
          {items.map((image, index) => (
            <div key={index} className={styles.card} onClick={() => handleCardClick(index)}>
              <div className={styles.card_image}>
                <img src={image} alt={`book_image_${index}`} />
              </div>
              {recBooksData[index].state.includes('Вікторина') && (
                <div className={styles.quiz_marker}>{wigwamTextData[6]}</div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecomendedBooks;
