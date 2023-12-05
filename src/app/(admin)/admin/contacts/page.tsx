import React from 'react';
import styles from './Contacts.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';

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
        Place here another parts
      </div>
    </div>
  );
};

export default Contacts;