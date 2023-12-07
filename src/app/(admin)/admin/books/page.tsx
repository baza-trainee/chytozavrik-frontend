"use client"

import React from 'react';
import styles from './Books.module.scss';
import { AdminHeader, BookItem, TableHeader } from '@/app/(admin)/components';


const Books = () => {
  return (
    <div className={styles.books}>
      <AdminHeader
        withSearch={true}
        withButton={true}
        buttonText='Додати книгу'
        withClose={false}
        heading='Книги'
        searchWord={'value'}
      />
      <div>
        <TableHeader
          variant='books'
          colNames={['Назва книги', 'Стан', 'Дата  додавання']}
        />
        <div>
          <BookItem/>
          <BookItem/>
          <BookItem/>
          <BookItem/>
        </div>

      </div>
    </div>
  );
};

export default Books;