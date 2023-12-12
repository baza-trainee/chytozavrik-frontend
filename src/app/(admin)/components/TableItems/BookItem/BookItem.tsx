'use client';

import React from 'react';
import Image from 'next/image';
import { PenLine, Trash2 } from 'lucide-react';
import { AdminCheckBox } from '@/app/(admin)/components';
import { BookAdminProps } from '@/types';
import { formattedDate } from '@/utils/formatDate';
import Link from 'next/link';
import { Route } from '@/constants';
import { Spinner } from 'components/common';
import { useDeleteBooks } from '@/hooks/Books/useDeleteBooks';
import styles from './BookItem.module.scss';

const BookItem = ({ book, page }: BookAdminProps) => {
  const { deleteBook, isPending } = useDeleteBooks();

  let stateToRender;
  if (Array.isArray(book.state)) {
    stateToRender = (
      <p className={styles.blue}>
        {book.state[0]}/{book.state[1]}
      </p>
    );
  } else {
    if (book.state === 'Рекомедована') {
      stateToRender = <p className={styles.blue}>{book.state}</p>;
    } else {
      stateToRender = <p className={styles.green}>{book.state}</p>;
    }
  }

  const state = {
    books: stateToRender,
    quizzes: <p className={styles.green}>Вікторина</p>,
    recommended: <p className={styles.blue}>Рекомедована</p>,
  };

  const redirectRoute = {
    books: Route.BOOKS_EDIT,
    recommended: Route.BOOKS_EDIT,
    quizzes: Route.QUIZZES_EDIT,
  };

  return (
    <div className={styles.bookItem}>
      <div className={styles.checkbox}>
        <AdminCheckBox onChange={e => console.log(e.target.checked)} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <div className={styles.image}>
            <Image src={book.cover_image} width={40} height={60} alt={book.title} />
          </div>
          <div className={styles.bookInfo}>
            <h2 className={styles.name}>{book.title}</h2>
            <p className={styles.author}>{book.author}</p>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.state}>{state[page]}</div>
          <p className={styles.date}>{formattedDate(book.updated_at)}</p>
        </div>
      </div>
      <div className={styles.actions}>
        {isPending ? (
          <Spinner />
        ) : (
          <>
            <div>
              <Link href={`${redirectRoute[page]}/${book.id}`}>
                <PenLine />
              </Link>
            </div>
            <div onClick={() => deleteBook(book.id)}>
              <Trash2 />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookItem;
