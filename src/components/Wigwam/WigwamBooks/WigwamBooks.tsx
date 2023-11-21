'use client';

import { Fragment, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import { Search, MoveRight } from 'lucide-react';
import { Button, Typography } from '../../common';
import BrainIcon from 'public/images/brain/brain.svg';
import Tick from 'public/images/tick.svg';
import styles from './WigwamBooks.module.scss';
import { BookType} from '@/types/WigwamBooks';
import BookItem from 'components/Wigwam/WigwamBooks/BookItem/BookItem';


type FormValues = {
  search: string;
};

const defaultValues = {
  search: '',
};

const WigwamBooks = ({ booksReq }: { booksReq: BookType[]}) => {
  const [selectedBooks, setSelectedBooks] = useState<{ [key: string]: boolean }>({});
  const { watch , register } = useForm({
    defaultValues
  });

  const [filteredBooks, setFilteredBooks] = useState(booksReq);
  const searchTerm = watch('search');

  useEffect(() => {
    const matchedBooks = booksReq.filter((entry) =>
      entry.book.title.toLowerCase().includes(searchTerm?.toLowerCase() || '') || entry.book.author.toLowerCase().includes(searchTerm?.toLowerCase() || '')
    );
    setFilteredBooks(matchedBooks);
  }, [searchTerm, booksReq]);

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
        <form autoComplete="off">
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
            <Search className={styles.icon} />
          </div>
        </form>
      </div>
      <ul className={styles.button_list}>
        {filteredBooks.map((item: BookType) => (
          <Fragment key={item.id}>
            <BookItem item={item} selectedBooks={selectedBooks} setBook={setBook} />
          </Fragment>
        ))}
      </ul>

      <Button
        className={styles.button}
        onClick={showBooks}
        endIcon={<MoveRight />}
        variant="outline"
      >
        Подивитися всі книжки
      </Button>
    </div>
  );
};

export default WigwamBooks;
