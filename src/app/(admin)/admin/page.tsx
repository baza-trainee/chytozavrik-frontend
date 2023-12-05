import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import styles from './Admin.module.scss'
import TableHeader from '@/app/(admin)/components/TableHeader/TableHeader';
import React from 'react';

const Admin = () => {
  return (
    <div className={styles.users}>
      <AdminHeader
        withSearch={true}
        withButton={false}
        withClose={false}
        heading='Користувачі'
        searchWord={"value"}
      />
      <div>
        <TableHeader
          colNames={['Email', 'Профілі дітей', 'Дата  реєстрації']}
        />
      </div>
    </div>
  )
}

export default Admin;