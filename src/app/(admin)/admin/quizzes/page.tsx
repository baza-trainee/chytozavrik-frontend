import React from 'react';
import styles from './Quizzes.module.scss';
import { AdminHeader, BookItem, TableHeader } from '@/app/(admin)/components';

const Quizzes = () => {
  return (
    <div className={styles.quizzes}>
      <AdminHeader
        withSearch={true}
        withButton={true}
        buttonText='Додати вікторину'
        withClose={false}
        heading='Вікторини'
        searchWord={"value"}
      />
      <div>
        <TableHeader
          variant='books'
          colNames={['Назва книги', 'Стан', 'Дата  додавання']}
        />
        <BookItem/>
      </div>
    </div>
  );
};

export default Quizzes;