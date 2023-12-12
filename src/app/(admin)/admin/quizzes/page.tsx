import React from 'react';
import { AdminHeader, TableHeader } from '@/app/(admin)/components';
import styles from './Quizzes.module.scss';

const Quizzes = () => (
  <div className={styles.quizzes}>
    <AdminHeader
      withSearch
      withButton
      buttonText="Додати вікторину"
      withClose={false}
      heading="Вікторини"
    />
    <div>
      <TableHeader variant="books" colNames={['Назва книги', 'Стан', 'Дата  додавання']} />
    </div>
  </div>
);

export default Quizzes;
