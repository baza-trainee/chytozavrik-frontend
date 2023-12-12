'use client';

import React, { Fragment, useState } from 'react';
import { BookItem, TableHeader } from '@/app/(admin)/components';
import { useQueryBooks } from '@/hooks/Books/useQueryBooks';
import { BookAdmin } from '@/types';
import { Spinner } from 'components/common';
import Pagination from 'components/Pagination/Pagination';
import styles from '../Books.module.scss';

const Books = ({ searchValue = '' }: { searchValue: string | null }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { books, booksLoading, fetchError } = useQueryBooks({ currentPage, searchValue });
  const count = books?.count ? Math.ceil(books.count / 7) : 0;

  return (
    <div className={styles.wrapper}>
      <div>
        <TableHeader variant="books" colNames={['Назва книги', 'Стан', 'Дата  додавання']} />
        {booksLoading && <Spinner className={styles.spinner} />}
        {fetchError && (
          <div className={styles.error}>Упс... Щось пішло не так: {fetchError.message}</div>
        )}
        <div>
          {books?.results?.map((book: BookAdmin) => (
            <Fragment key={book.id}>
              <BookItem book={book} />
            </Fragment>
          ))}
        </div>
      </div>
      {books && !booksLoading && books.count > 7 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={page => setCurrentPage(page)}
          count={count}
        />
      )}
    </div>
  );
};

export default Books;
