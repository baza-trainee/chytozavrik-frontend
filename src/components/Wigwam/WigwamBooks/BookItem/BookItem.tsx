import React, { FC } from 'react';
import styles from 'components/Wigwam/WigwamBooks/WigwamBooks.module.scss';
import Image from 'next/image';
import BrainIcon from 'public/images/brain/brain.svg';
import BrainYellow from 'public/images/brain/brain_yellow.svg';
import BrainGreen from 'public/images/brain/brain_green.svg';
import Tick from 'public/images/tick.svg';
import { MoveRight } from 'lucide-react';
import { BookType } from '@/types/WigwamBooks';

interface BookItemProps {
  item: BookType;
  selectedBooks: { [key: string]: boolean };
  setBook: (id: string | number) => void;
}

const BookItem: FC<BookItemProps> = ({ item, selectedBooks, setBook }) => {

  const firstChar = item.current_score ? item.current_score.charAt(0) : '';
  const colorText = (parseInt(firstChar) > 0 && parseInt(firstChar) < 5) ? '#7791FA' : parseInt(firstChar) === 5 ? '#52C974' : "#B3CDFF";

  let icon;
  if ((parseInt(firstChar) > 0 && parseInt(firstChar) < 5)) icon = BrainYellow;
  else if (parseInt(firstChar) === 5) icon = BrainGreen;
  else  icon = BrainIcon

  return (
    <li className={styles.book_items}>
      <div>
        <p className={styles.book_name}>{item.book.title}</p>
        <p className={styles.book_author}>{item.book.author}</p>
        <div className={styles.book_counter_wraper}>
          <Image
            priority
            src={icon}
            alt='brain icon'
            width={18}
            height={18}
          />
          <p className={styles.book_counter}
             style={{ color: `${colorText}` }}>{item.current_score || '0/0'}</p>
        </div>
      </div>
      <div className={styles.book_items_icon_wraper} onClick={() => setBook(item.id)}>
        {selectedBooks[item.id] ? (
          <Image priority src={Tick} alt='tick icon' width={24} height={24} />
        ) : (
          <span className={styles.arrow}>
                  <MoveRight />
                </span>
        )}
      </div>
    </li>
  );
};

export default BookItem;