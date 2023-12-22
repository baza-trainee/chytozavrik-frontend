import React from 'react';
import AdminHeader from '../../components/Header/AdminHeader';
import TableHeader from '../../components/TableHeader/TableHeader';
import UserItem from '@/app/(admin)/components/TableItems/UserItem/UserItem';
import styles from '@/app/(admin)/admin/Admin.module.scss';

const UserList = () => {
  return (
    <div className={styles.users}>
      <AdminHeader withSearch withButton={false} withClose={false} heading="Користувачі" />
      <div>
        <TableHeader variant="users" colNames={['Email', 'Профілі дітей', 'Дата  реєстрації']} />
        <UserItem/>
      </div>
    </div>
  );
};

export default UserList;