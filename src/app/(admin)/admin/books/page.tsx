'use client';

import React from 'react';
import { AdminHeader, BookItem, TableHeader } from '@/app/(admin)/components';
import styles from './Books.module.scss';

const Books = () => (
  <div className={styles.books}>
    <AdminHeader
      withSearch
      withButton
      buttonText="Додати книгу"
      withClose={false}
      heading="Книги"
      searchWord="value"
    />
    <div>
      <TableHeader variant="books" colNames={['Назва книги', 'Стан', 'Дата  додавання']} />
      <div>
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </div>
    </div>
  </div>
);

export default Books;
