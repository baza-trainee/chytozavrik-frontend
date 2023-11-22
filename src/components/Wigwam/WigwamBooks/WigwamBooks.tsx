'use client';

import { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Search, MoveRight, XCircle } from 'lucide-react';
import { Button, Typography } from '../../common';
import styles from './WigwamBooks.module.scss';
import { BookType} from '@/types/WigwamBooks';
import BookItem from 'components/Wigwam/WigwamBooks/BookItem/BookItem';
import NotFoundBook from 'components/Wigwam/WigwamBooks/NotFound/NotFoundBook';


type FormValues = {
  search: string;
};

const defaultValues = {
  search: '',
};

const WigwamBooks = ({ booksReq }: { booksReq: BookType[]}) => {
  const [selectedBooks, setSelectedBooks] = useState<{ [key: string]: boolean }>({});
  const { watch , register, setValue } = useForm({
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

  const setBook = (id: string | number) => {
    setSelectedBooks(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    console.log('Book id: ', id);
  };

  const clearSearch = () => {
    setValue('search', '');
    setFilteredBooks(booksReq);
  };

  return (
    <div className={styles.books_container}>
      <Typography component="h2" variant="h2" className={styles.title}>
        Обери книгу для вікторини
      </Typography>
      <div className={styles.search_wraper}>
        <form autoComplete="off" className={styles.form}>
          <div className={styles.icon_wraper}>
            <Search className={styles.icon} stroke={"#7791FA"} />
          </div>
          <input
            {...register('search', {
              required: true,
            })}
            name="search"
            className={styles.input}
            placeholder="Швидкий пошук книги"
            autoFocus
          />
          {searchTerm &&
            <div className={styles.icon_circle} onClick={clearSearch}>
              <XCircle className={styles.icon} stroke={"#7791FA"} />
            </div>}
        </form>
      </div>
      {filteredBooks.length > 1
      ? <div className={styles.button_list}>
          {filteredBooks.map((item: BookType) => (
            <Fragment key={item.id}>
              <BookItem item={item} selectedBooks={selectedBooks} setBook={setBook} />
            </Fragment>
          ))}
        </div>
      : <NotFoundBook/>}
      <Button
        className={styles.button}
        endIcon={<MoveRight />}
        variant="outline"
      >
        Подивитися всі книжки
      </Button>
    </div>
  );
};

export default WigwamBooks;
