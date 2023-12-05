import React from 'react';
import styles from './Partners.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import TableHeader from '@/app/(admin)/components/TableHeader/TableHeader';

const Partners = () => {
  return (
    <div className={styles.partners}>
      <AdminHeader
        withSearch={true}
        withButton={true}
        withClose={false}
        buttonText='Додати партнера'
        heading='Партнери'
        searchWord={"value"}
      />
      <div>
        <TableHeader
          colNames={['Назва', 'Дата  додавання']}
        />
      </div>
    </div>
  );
};

export default Partners;