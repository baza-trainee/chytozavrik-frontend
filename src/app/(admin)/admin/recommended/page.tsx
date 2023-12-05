import React from 'react';
import styles from './Recommended.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';

const Page = () => {
  return (
    <div className={styles.recommended}>
      <AdminHeader
        withSearch={true}
        withButton={false}
        withClose={false}
        heading='Рекомендовані книжки'
        searchWord={"value"}
      />
      <div>
        Place here another parts
      </div>
    </div>
  );
};

export default Page;