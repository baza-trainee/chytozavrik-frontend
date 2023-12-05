'use client';

import { useState } from 'react';
import { MoveRight } from 'lucide-react';
import styles from './WigwamBooks.module.scss';
import { BookType } from '@/types/WigwamBooks';
import { Button, Typography } from 'components/common';
import SearchInput from '@/app/(wigwam)/components/Wigwam/Books/SearchInput/SearchInput';
import BooksList from '@/app/(wigwam)/components/Wigwam/Books/BooksList/BooksList';


const WigwamBooks = ({ booksData, next }: { booksData: BookType[], next: string | null }) => {
  const [selectedBooks, setSelectedBooks] = useState<{ [key: string]: boolean }>({});
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.books_container}>
      <Typography component='h2' variant='h2' className={styles.title}>
        Обери книгу для вікторини
      </Typography>
      <SearchInput setSearchValue={setSearchValue} />
      <BooksList
        booksData={booksData}
        next={next}
        searchValue={searchValue}
        setSelectedBooks={setSelectedBooks}
        selectedBooks={selectedBooks}
      />
      <Button
        className={styles.button}
        endIcon={<MoveRight />}
        variant='outline'
      >
        Подивитися всі книжки
      </Button>
    </div>
  );
};

export default WigwamBooks;

