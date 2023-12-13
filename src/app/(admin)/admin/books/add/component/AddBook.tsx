import React from 'react';
import { AdminHeader } from '@/app/(admin)/components';
import BooksForm from '@/app/(admin)/admin/books/components/BooksForm/BooksForm';
import styles from '../AddBooks.module.scss';

const AddBook = () => (
  <div className={styles.wrapper}>
    <AdminHeader
      withSearch={false}
      withButton={false}
      withClose
      heading="Додати книгу"
      subHeading={['Книги', 'Додати книгу']}
    />
    <BooksForm />
  </div>
);

export default AddBook;
