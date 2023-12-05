import React from 'react';
import styles from './Quizzes.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';

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
        Place here another parts
      </div>
    </div>
  );
};

export default Quizzes;