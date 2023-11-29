'use client';

import { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Search, MoveRight, XCircle } from 'lucide-react';
import styles from './WigwamBooks.module.scss';
import { BookType} from '@/types/WigwamBooks';
import { Button, Typography } from 'components/common';
import BookItem from '@/app/(wigwam)/components/Wigwam/Books/BookItem/BookItem';
import NotFoundBook from '@/app/(wigwam)/components/Wigwam/Books/NotFound/NotFoundBook';



type FormValues = {
  search: string;
};

const defaultValues = {
  search: '',
};

const WigwamBooks = ({ booksData }: { booksData: BookType[]}) => {
  const [selectedBooks, setSelectedBooks] = useState<{ [key: string]: boolean }>({});
  const { watch , register, setValue } = useForm({
    defaultValues
  });

  const [filteredBooks, setFilteredBooks] = useState<BookType[]>(booksData);
  const searchTerm = watch('search');

  useEffect(() => {
    const matchedBooks = booksData?.filter((entry) =>
      entry.book.title.toLowerCase().includes(searchTerm?.toLowerCase() || '') || entry.book.author.toLowerCase().includes(searchTerm?.toLowerCase() || '')
    );
    setFilteredBooks(matchedBooks);
  }, [searchTerm, booksData]);

  const setBook = (id: string | number) => {
    setSelectedBooks(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    console.log('Book id: ', id);
  };

  const clearSearch = () => {
    setValue('search', '');
    setFilteredBooks(booksData);
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
      {filteredBooks?.length > 1
      ? <div className={styles.button_list}>
          {filteredBooks?.map((item: BookType) => (
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
