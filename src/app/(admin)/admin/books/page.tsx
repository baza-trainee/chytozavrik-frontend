import React from 'react';
import styles from './Books.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import TableHeader from '@/app/(admin)/components/TableHeader/TableHeader';

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
      </div>
    </div>
  );
};

export default Books;