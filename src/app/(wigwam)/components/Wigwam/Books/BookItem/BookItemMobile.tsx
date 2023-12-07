import React, { FC } from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import styles from '../WigwamBooks.module.scss';
import BrainIcon from 'public/images/brain/brain.svg';
import BrainYellow from 'public/images/brain/brain_yellow.svg';
import BrainGreen from 'public/images/brain/brain_green.svg';
import Tick from 'public/images/tick.svg';
import { BookType } from '@/types/WigwamBooks';
import { LastquizType } from '@/types/WigwamQuiz';

interface BookItemMobileProps {
  item: BookType;
  selectedBooks: { [key: string]: boolean };
  booksData?: BookType[] | undefined;
  wigwamQuizData?: LastquizType | undefined;
  index: number;
}

const BookItemMobile: FC<BookItemMobileProps> = ({
  item,
  selectedBooks,
  wigwamQuizData,
  booksData = [],
  index,
}) => {
  const firstChar = item.current_score ? item.current_score.charAt(0) : '';
  const colorText =
    parseInt(firstChar) > 0 && parseInt(firstChar) < 5
      ? '#7791FA'
      : parseInt(firstChar) === 5
      ? '#52C974'
      : '#B3CDFF';

  const book = booksData[index].book;
  const quiz = booksData[index];

  const handleClick = (index: number) => {
    if (book?.id && quiz?.book?.id && wigwamQuizData) {
      const child_id = wigwamQuizData.id;
      const quiz_id = quiz.id;

      if (quiz_id) {
        window.location.href = `/wigwam/${child_id}/${quiz_id}`;
      } else {
        window.location.href = `/*`;
      }
    }
  };

  let icon;
  if (parseInt(firstChar) > 0 && parseInt(firstChar) < 5) icon = BrainYellow;
  else if (parseInt(firstChar) === 5) icon = BrainGreen;
  else icon = BrainIcon;

  return (
    <div
      className={styles.book_items_mobile}
      onClick={() => {
        handleClick(index);
      }}
    >
      <div className={styles.book_about}>
        <p className={styles.book_name}>{item.book.title}</p>
        <p className={styles.book_author}>{item.book.author}</p>
        <div className={styles.book_counter_wraper}>
          <Image priority src={icon} alt="brain icon" width={18} height={18} />
          <p className={styles.book_counter} style={{ color: `${colorText}` }}>
            {item.current_score || '0/0'}
          </p>
        </div>
      </div>
      <div className={styles.book_items_icon_wraper}>
        {selectedBooks[item.id] || item.current_score === '5/5' ? (
          <Image priority src={Tick} alt="tick icon" width={24} height={24} />
        ) : (
          <span className={styles.arrow}>
            <MoveRight />
          </span>
        )}
      </div>
    </div>
  );
};

export default BookItemMobile;
