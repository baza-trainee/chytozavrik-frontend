'use client';

import React from 'react';
import Image from 'next/image';
import { PenLine, Trash2 } from 'lucide-react';
import { AdminCheckBox } from '@/app/(admin)/components';
import { BookAdminProps } from '@/types';
import { formattedDate } from '@/utils/formatDate';
import Link from 'next/link';
import { Route } from '@/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthAxiosInstance } from '@/hooks';
import { Spinner } from 'components/common';
import styles from './BookItem.module.scss';

const BookItem = ({ book }: BookAdminProps) => {
  const axios = useAuthAxiosInstance();
  const queryClient = useQueryClient();
  const { mutate: deleteBook, isPending } = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`books/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });

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
          <div className={styles.state}>{stateToRender}</div>
          <p className={styles.date}>{formattedDate(book.updated_at)}</p>
        </div>
      </div>
      <div className={styles.actions}>
        {isPending ? (
          <Spinner />
        ) : (
          <>
            <div>
              <Link href={`${Route.BOOKS_EDIT}/${book.id}`}>
                {' '}
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
