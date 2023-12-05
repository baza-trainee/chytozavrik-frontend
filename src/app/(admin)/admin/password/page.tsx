import React from 'react';
import styles from '@/app/(admin)/admin/statistics/Statistics.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';

const ChangePassword = () => {
  return (
    <div className={styles.password}>
      <AdminHeader
        withSearch={false}
        withButton={false}
        withClose={false}
        heading='Змінити пароль'
      />
      <div>
        Place here another parts
      </div>
    </div>
  );
};

export default ChangePassword;