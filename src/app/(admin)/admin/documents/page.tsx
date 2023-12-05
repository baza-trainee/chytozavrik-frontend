import React from 'react';
import styles from './Documents.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import TableHeader from '@/app/(admin)/components/TableHeader/TableHeader';

const Documents = () => {
  return (
    <div className={styles.documents}>
      <AdminHeader
        withSearch={false}
        withButton={false}
        withClose={false}
        heading='Документи'
      />
      <div>
        <TableHeader
          variant='documents'
          colNames={['Назва документу', 'Дата  оновлення', 'Редагування']}
        />
      </div>
    </div>
  );
};

export default Documents;