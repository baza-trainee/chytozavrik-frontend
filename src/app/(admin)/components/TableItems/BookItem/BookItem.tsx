import React from 'react';
import styles from './BookItem.module.scss';
import Image from 'next/image';
import { PenLine, Trash2 } from 'lucide-react';
import { AdminCheckBox } from '@/app/(admin)/components';



const state = [
  "Рекомедована", "Вікторина"
]
// const state: string = "Рекомедована"
// const state: string = "Вікторина"
const BookItem = () => {


  let stateToRender;
  if (Array.isArray(state)) {
    stateToRender = <p className={styles.blue}>{state[0]}/{state[1]}</p>;
  } else {
    if (state === "Рекомедована") {
      stateToRender = <p className={styles.blue}>{state}</p>;
    } else{
      stateToRender = <p className={styles.green}>{state}</p>;
    }
  }

  return (
    <div className={styles.bookItem}>
      <div className={styles.checkbox}>
        <AdminCheckBox/>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <div className={styles.image}>
            <Image src='https://res.cloudinary.com/dxy59ulvk/raw/upload/v1/media/books/book9_tgvqrj.jpg' width={40}
                   height={60} alt={'name'} />
          </div>
          <div className={styles.bookInfo}>
            <h2 className={styles.name}>Івасик Телесик</h2>
            <p className={styles.author}>Українська народка казка</p>
          </div>
        </div>
       <div className={styles.infoBlock}>
         <div className={styles.state}>
           {stateToRender}
         </div>
         <p className={styles.date}>08.08.2023</p>
       </div>
      </div>
      <div className={styles.actions}>
        <div><PenLine /></div>
        <div><Trash2 /></div>
      </div>

    </div>
  );
};

export default BookItem;