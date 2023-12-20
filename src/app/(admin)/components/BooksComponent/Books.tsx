'use client';

import React, { Fragment, useState } from 'react';
import { BookItem, NoResults, TableHeader } from '@/app/(admin)/components';
import { useQueryBooks } from '@/hooks/Books/useQueryBooks';
import { BookAdmin } from '@/types';
import { Spinner } from 'components/common';
import Pagination from 'components/Pagination/Pagination';
import { useDeleteChosenBooks } from '@/hooks/Books/useDeleteChosenBooks';
import styles from '../../admin/books/Books.module.scss';
import Modal from 'components/common/ModalActions/Modal';

const Books = ({
  searchValue = '',
  page,
}: {
  searchValue: string | null;
  page: 'books' | 'quizzes' | 'recommended';
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);
  const { books, booksLoading, fetchError } = useQueryBooks({ page, currentPage, searchValue });
  const { handleDeleteBooks, deletingBooks } = useDeleteChosenBooks();

  const count = books?.count ? Math.ceil(books.count / 7) : 0;

  const noResultsText = {
    books: 'У вас ще немає доданих книг',
    quizzes: 'У вас ще немає доданих вікторин',
    recommended: 'У вас ще немає доданих рекомендованих книжок',
  };

  const handleCheckboxChange = (checked: boolean, bookId: number) => {
    if (checked) {
      setSelected(prev => [...prev, bookId]);
    } else {
      setSelected(prev => prev.filter(id => id !== bookId));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <TableHeader
          handleDelete={() => handleDeleteBooks(selected)}
          variant="books"
          colNames={['Назва книги', 'Стан', 'Дата  додавання']}
        />
        {booksLoading && <Spinner className={styles.spinner} />}
        {fetchError && (
          <div className={styles.error}>Упс... Щось пішло не так: {fetchError.message}</div>
        )}
        {books && books.count === 0 && (
          <div>
            <NoResults text={noResultsText[page]} image="/images/admin/books-no-results.svg" />
          </div>
        )}
        <div>
          {books?.results?.map((book: BookAdmin) => (
            <Fragment key={book.id}>
              <BookItem
                book={book}
                page={page}
                onCheckboxChange={handleCheckboxChange}
                isDeleting={deletingBooks?.includes(book.id)}
              />
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
