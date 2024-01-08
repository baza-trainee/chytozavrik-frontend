'use client';

import React, { useState } from 'react';
import styles from '@/app/(admin)/admin/Admin.module.scss';
import UserItem from '@/app/(admin)/components/TableItems/UserItem/UserItem';
import AdminHeader from '../../../components/Header/AdminHeader';

const User: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  return (
    <div className={styles.users}>
      <AdminHeader
        withSearch
        withButton={false}
        withClose={false}
        heading="Користувачі"
        setSearchWord={setSearchValue}
      />
      <UserItem searchValue={searchValue} />
    </div>
  );
};

export default User;
