import React from 'react';
import styles from './Recommended.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import TableHeader from '@/app/(admin)/components/TableHeader/TableHeader';

const Page = () => {
  return (
    <div className={styles.recommended}>
      <AdminHeader
        withSearch={true}
        withButton={false}
        withClose={false}
        heading='Рекомендовані книжки'
        searchWord={"value"}
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

export default Page;