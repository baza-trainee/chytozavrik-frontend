import React from 'react';
import styles from './Contacts.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import TableHeader from '@/app/(admin)/components/TableHeader/TableHeader';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <AdminHeader
        withSearch={false}
        withButton={false}
        withClose={false}
        heading='Контакти'

      />
      <div>
        <TableHeader
          colNames={['Перелік контактів', 'Дата  оновлення']}
        />
      </div>
    </div>
  );
};

export default Contacts;