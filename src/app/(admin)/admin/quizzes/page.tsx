import React from 'react';
import styles from './Quizzes.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import TableHeader from '@/app/(admin)/components/TableHeader/TableHeader';

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
          colNames={['Назва книги', 'Стан', 'Дата  додавання']}
        />
      </div>
    </div>
  );
};

export default Quizzes;