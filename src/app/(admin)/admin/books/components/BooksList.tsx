'use client';

import React, { useState } from 'react';
import styles from '@/app/(admin)/admin/books/Books.module.scss';
import { AdminHeader } from '@/app/(admin)/components';
import Books from '@/app/(admin)/admin/books/components/Books';

const BooksList = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  return (
    <div className={styles.books}>
      <AdminHeader
        withSearch
        withButton
        buttonText="Додати книгу"
        withClose={false}
        heading="Книги"
        setSearchWord={setSearchValue}
      />
      <Books searchValue={searchValue} />
    </div>
  );
};

export default BooksList;
