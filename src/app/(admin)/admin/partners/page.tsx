'use client'

import React from 'react';
import styles from './Partners.module.scss';
import { AdminHeader, PartnerItem, TableHeader } from '@/app/(admin)/components';

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
        <TableHeader
          variant='partners'
          colNames={['Назва', 'Дата  додавання']}
        />
        <PartnerItem/>
      </div>
    </div>
  );
};

export default Partners;