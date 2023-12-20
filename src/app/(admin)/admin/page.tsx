import React from 'react';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import TableHeader from '@/app/(admin)/components/TableHeader/TableHeader';
import styles from './Admin.module.scss';

const Admin = () => (
  <div className={styles.users}>
    <AdminHeader withSearch withButton={false} withClose={false} heading="Користувачі" />
    <div>
      <TableHeader variant="users" colNames={['Email', 'Профілі дітей', 'Дата  реєстрації']} />
    </div>
  </div>
);

export default Admin;
