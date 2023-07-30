'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import { SearchNormal1, ArrowRight } from 'iconsax-react';

import { Button, Typography } from '../common';
import BrainIcon from '../../../public/images/brain.svg';
import Tick from '../../../public/images/tick.svg';
import styles from './WigwamBooks.module.scss';

//delete after connect to database
const items = [
  { id: 1, name: 'Тореадори з Васюківки', author: 'Всеволод Нестайко', counter: '0/5' },
  { id: 2, name: 'Чудове чудовисько', author: 'Сашко Дерманський', counter: '0/5' },
  { id: 3, name: 'Гарбузовий рік', author: 'Катерина Бабкіна', counter: '0/5' },
  { id: 4, name: 'Івасик Телесик', author: 'Українська народна казка', counter: '0/5' },
  { id: 5, name: 'Бузиновий цар', author: 'Ліна Костенко', counter: '0/5' },
  { id: 6, name: 'Бузиновий цар', author: 'Ліна Костенко', counter: '0/5' },
];

type FormValues = {
  search: string;
};

const defaultValues = {
  search: '',
};

const WigwamBooks = () => {
  const [selectedBooks, setSelectedBooks] = useState<{ [key: string]: boolean }>({});
  const { handleSubmit, resetField, setValue, register } = useForm({
    defaultValues,
  });

  const submit: SubmitHandler<FormValues> = values => {
    console.log(values);
    resetField('search');
  };

  const showBooks = () => {
    console.log('all books');
  };

  const setBook = (id: string | number) => {
    setSelectedBooks(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    console.log('Book id: ', id);
  };

  return (
    <div className={styles.books_container}>
      <Typography component="h2" variant="h2" className={styles.title}>
        Обери книгу для вікторини
      </Typography>
      <div className={styles.search_wraper}>
        <form onSubmit={handleSubmit(submit)} autoComplete="off">
          <input
            {...register('search', {
              required: true,
            })}
            name="search"
            className={styles.input}
            placeholder="Швидкий пошук книги"
            autoFocus
          />
          <div className={styles.icon_wraper}>
            <SearchNormal1 color="#7791fa" />
          </div>
        </form>
      </div>
      <ul className={styles.button_list}>
        {items.map(({ id, name, author, counter }) => (
          <li className={styles.book_items} key={id}>
            <div>
              <p className={styles.book_name}>{name}</p>
              <p className={styles.book_author}>{author}</p>
              <div className={styles.book_counter_wraper}>
                <Image priority src={BrainIcon} alt="brain icon" width={18} height={18} />
                <p className={styles.book_counter}>{counter}</p>
              </div>
            </div>
            <div className={styles.book_items_icon_wraper} onClick={() => setBook(id)}>
              {selectedBooks[id] ? (
                <Image priority src={Tick} alt="tick icon" width={24} height={24} />
              ) : (
                <span className={styles.arrow}>
                  <ArrowRight />
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <Button className={styles.button} onClick={showBooks}>
        Подивитися всі книжки
        <div className={styles.button_icon}>
          <ArrowRight />
        </div>
      </Button>
    </div>
  );
};

export default WigwamBooks;
