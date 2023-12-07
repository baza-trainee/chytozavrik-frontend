import React from 'react';
import { AdminHeader, TableHeader } from '@/app/(admin)/components';
import styles from './Documents.module.scss';


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