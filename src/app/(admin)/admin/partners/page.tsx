import React from 'react';
import styles from './Partners.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';

const Partners = () => {
  return (
    <div className={styles.partners}>
      <AdminHeader
        withSearch={true}
        withButton={true}
        withClose={false}
        buttonText='Додати партнера'
        heading='Партнери'
        searchWord={"value"}
      />
      <div>
        Place here another parts
      </div>
    </div>
  );
};

export default Partners;