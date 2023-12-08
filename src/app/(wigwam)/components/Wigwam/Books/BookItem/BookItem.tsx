import React, { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';
import BrainIcon from 'public/images/brain/brain.svg';
import BrainYellow from 'public/images/brain/brain_yellow.svg';
import BrainGreen from 'public/images/brain/brain_green.svg';
import Tick from 'public/images/tick.svg';
import { MoveRight } from 'lucide-react';
import { BookType } from '@/types/WigwamBooks';
import styles from '../WigwamBooks.module.scss';

interface BookItemProps {
  item: BookType;
  selectedBooks: { [key: string]: boolean };
  setSelectedBooks: Dispatch<SetStateAction<{ [p: string]: boolean }>>;
}

const BookItem: FC<BookItemProps> = ({ item, selectedBooks, setSelectedBooks }) => {
  const firstChar = item.current_score ? item.current_score.charAt(0) : '';
  let colorText;
  const parsedChar = parseInt(firstChar, 10);

  if (parsedChar > 0 && parsedChar < 5) {
    colorText = '#7791FA';
  } else if (parsedChar === 5) {
    colorText = '#52C974';
  } else {
    colorText = '#B3CDFF';
  }

  let icon;
  if (parsedChar > 0 && parsedChar < 5) icon = BrainYellow;
  else if (parsedChar === 5) icon = BrainGreen;
  else icon = BrainIcon;

  const setBook = (id: string | number) => {
    setSelectedBooks(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className={styles.book_items}>
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
      <div className={styles.book_items_icon_wraper} onClick={() => setBook(item.id)}>
        {selectedBooks[item.id] ? (
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

export default BookItem;
