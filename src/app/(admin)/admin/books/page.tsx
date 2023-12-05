import React from 'react';
import styles from './Books.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';

const Books = () => {
  return (
    <div className={styles.books}>
      <AdminHeader
        withSearch={true}
        withButton={true}
        buttonText='Додати книгу'
        withClose={false}
        heading='Книги'
        searchWord={"value"}
      />
      <div>
        Place here another parts
      </div>
    </div>
  );
};

export default Books;